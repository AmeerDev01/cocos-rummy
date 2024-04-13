import { Game, Node, instantiate, sys } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Fruit777_GameBoard, IProps, IEvent } from "../components/Fruit777_GameBoard"
import { StateType } from "../store/reducer"
import { SKT_MAG_TYPE, fruit777WebSocketDriver } from "../socketConnect"
import { GameType } from "../type"
import RollerPanelViewModel from "./RollerPanelViewModel"
import { NORMAL_MAG_TYPE, fruit777_Audio, msgListener, sourceManageSeletor } from "../index"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { changeGame, changeProfit, changeViewGame, resetStore, setSubGameTimes, updateBalance, updateJackpotAmount, updateSubGameTimes } from "../store/actions/game"
import { getStore } from "../store"
import BoxPanelViewModel from "./BoxPanelViewModel"
import dataTransfer, { DataKeyType, resetData, setData } from "../dataTransfer"
import TaskScheduler, { Task, TaskSchedulerDefault } from "../../../utils/TaskScheduler"
import { EffectType } from "../../../utils/NodeIOEffect"
import { setRollRoundEnd } from "../store/actions/roller"
import { SoundPathDefine } from "../sourceDefine/soundDefine"
import { global, lang } from "../../../hall"

type anthInfoType = {
  bl: number
  freeGameCount: number
  freeGameAmount: number,
  gameType: GameType
  iconStay: number
  lv: number
  memberId: string
  tableId: string
}


@StoreInject(getStore())
class GameBoardViewModel extends ViewModel<Fruit777_GameBoard, IProps, IEvent> {
  constructor() {
    super('Fruit777_GameBoard')
  }
  public currentGameViewModel: ViewModel<any, any, any> = null
  public changeGameTypeTask: Task
  public flyFruitNode: Node
  private currGameType: GameType = GameType.NONE
  public isAuthPass: boolean = false
  public taskScheduler: TaskScheduler = new TaskScheduler()
  protected begin() {
    fruit777WebSocketDriver.sktMsgListener.addOnce(SKT_MAG_TYPE.LOGIN, "fruit777_board", (data) => {
      try {
        this.dispatch(changeGame(data.gameType))
        // this.dispatch(changeGame(GameType.SUBGAME1))
        /**刚刚初始化游戏，需要带入必要的游戏状态 */
        setData("bl", data.bl)
        setData("gameType", data.gameType)
        setData("freeCount", data.freeGameCount)
        setData("freeGameAmount", data.freeGameAmount)
        this.dispatch(updateBalance(dataTransfer(DataKeyType.BALANCE)))
        this.dispatch(setSubGameTimes(dataTransfer(DataKeyType.SUBGAME_TIMES)))
        this.dispatch(changeViewGame(data.gameType))
        this.dispatch(updateSubGameTimes(data.freeGameCount))
        msgListener.dispath(NORMAL_MAG_TYPE.CHANGE_GAME, { currGameType: data.gameType })
        if (data.gameType !== GameType.MAIN) {
          //非小游戏需要读取盈利状态
          this.dispatch(changeProfit(dataTransfer(DataKeyType.FREE_GAME_AMOUNT)))
        }
        sys.localStorage.setItem("fruit777", JSON.stringify(data))
        this.comp.scheduleOnce(() => {
          this.isAuthPass = true
        }, 1.2)
      } catch (e) {
        global.closeSubGame({ confirmContent: lang.write(k => k.InitGameModule.GameBoardInit) })
      }
      // this.dispatch(changeGame(GameType.MAIN))
    })
    // fruit777WebSocketDriver.sendSktMessage(SKT_MAG_TYPE.AUTH, {
    //   token: sys.localStorage.getItem("token"),
    //   gameId: config.gameId
    // })
    fruit777WebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.JACKPOT, "fruit777_board", (data) => {
      this.dispatch(updateJackpotAmount(data))
    })
    fruit777WebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.BALANCE_UPDATE, "fruit777_board", (data) => {
      // this.dispatch(updateBalance(data))
    })
    fruit777WebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.VACATETHEROOM, "fruit777_board", (data) => {
      global.closeSubGame({ confirmContent: lang.write(k => k.UpdateModule.GameNotice, {}, { placeStr: "对不起，系统维护中，请稍后再尝试登录" }) })
    })
    fruit777WebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.LAUNCHER_BET, "fruit777_board", (data, error) => {
      if (!error) {
        // console.log('curGame', dataTransfer(DataKeyType.GAME_TYPE))
        if (this.currGameType !== dataTransfer(DataKeyType.GAME_TYPE)) {
          this.currGameType = dataTransfer(DataKeyType.GAME_TYPE)
          this.dispatch(changeGame(dataTransfer(DataKeyType.GAME_TYPE)))
        }
      }
    }, 100)

    this.setEvent({
      changeGameHandler: (lastGameType, currGameType) => {
        console.log(lastGameType, currGameType)
        this.changeGameTypeTask = new Task((done) => {
          try {
            if (this.currentGameViewModel) {
              fruit777_Audio.playOneShot(SoundPathDefine.TRANSFER)
              this.flyFruitNode = instantiate(sourceManageSeletor().getFile(PrefabPathDefine.FLY_FRUITS).source)
              this.viewNode.addChild(this.flyFruitNode)
              this.comp.scheduleOnce(() => {
                //卸载当前
                this.currentGameViewModel.unMount(EffectType.EFFECT1).then(() => {
                  done()
                })
              }, 1)
            } else {
              done()
            }
          } catch (e) {
            done()
            console.log('err', e)
          }
        }).subscribeDone('change', () => {
          if (!this.comp.getPropertyNode()) return
          this.dispatch(changeViewGame(currGameType))
          if (currGameType === GameType.MAIN) {
            this.currentGameViewModel = new RollerPanelViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.MAIN_GAME).source).appendTo(this.comp.getGameNode(), {
              effectType: EffectType.EFFECT_FADE, effectDone: () => {
                this.dispatch(setRollRoundEnd(true))
              }
            }).connect()
          } else if (currGameType === GameType.SUBGAME1) {
            this.currentGameViewModel = new BoxPanelViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.BOX_GAME).source).appendTo(this.comp.getGameNode(), {
              effectType: EffectType.EFFECT_FADE, effectDone: () => {
                this.dispatch(setRollRoundEnd(true))
              }
            }).connect()
          } else if (currGameType === GameType.SUBGAME2) {
            this.currentGameViewModel = new RollerPanelViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.MAIN_GAME).source).appendTo(this.comp.getGameNode(), {
              effectType: EffectType.EFFECT_FADE, effectDone: () => {
                this.dispatch(setRollRoundEnd(true))
              }
            }).connect()
          }
          msgListener.dispath(NORMAL_MAG_TYPE.CHANGE_GAME, { currGameType })
          this.comp.scheduleOnce(() => {
            this.flyFruitNode && this.flyFruitNode.destroy()
          }, 1.5)
        })
        if (!this.currentGameViewModel) {
          //初始化的时候才直接执行
          this.taskScheduler && this.taskScheduler.joinQueue(this.changeGameTypeTask, true)
        }
      }
    })
    resetData()
    this.dispatch(resetStore(''))
  }
  protected unMountCallBack(): void {
    // fruit777WebSocketDriver.sktMsgListener.removeById("fruit777_board")
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        gameType: state.game.currGameType
      }
    })
    return this
  }
}

export default GameBoardViewModel
