import { Game, Node, game, instantiate, log, sys } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Starlight_GameBoard, IProps, IEvent } from "../components/Starlight_GameBoard"
import { StateType } from "../store/reducer"
import { SKT_MAG_TYPE, sktInstance, sktMsgListener } from "../socketConnect"
import config from "../config"
import { AutoLauncherType, GameType } from "../type"
import RollerPanelViewModel from "./RollerPanelViewModel"
import { NORMAL_MAG_TYPE, starlight_Audio, msgListener, sourceManageSeletor, footerViewModel } from "../index"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { changeAutoLauncherType, changeCurrGameType, changeGame, changeGameFreeGametotalMultiplier, changeMultipleTotal, changeProfit, changeViewGame, resetStore, setAutoLaunchedTimes, setSubGameTimes, updateBalance, updateJackpotAmount, updateSubGameTimes } from "../store/actions/game"
import { getStore } from "../store"
import LargeRollerPanelViewModel from "./LargeRollerPanelViewModel"
import dataTransfer, { DataKeyType, setData } from "../dataTransfer"
import TaskScheduler, { Task, TaskSchedulerDefault } from "../../../utils/TaskScheduler"
import { EffectType } from "../../../utils/NodeIOEffect"
import { setRollRoundEnd } from "../store/actions/roller"
import { SoundPathDefine } from "../sourceDefine/soundDefine"
import { global, lang } from "../../../hall"
import { addToastAction } from "../../../hall/store/actions/baseBoard"

type anthInfoType = {
  coinsBeforeBetting: number
  freeGameCoins: number
  freeGameCount: number
  gameType: number
  lv: number
  memberId: string
  tableId: string
  totalFreeGameCount: number
  lessGodFreeGameMultiple: number
}


@StoreInject(getStore())
class GameBoardViewModel extends ViewModel<Starlight_GameBoard, IProps, IEvent> {
  private timer
  constructor() {
    super('Starlight_GameBoard')
  }
  public currentGameViewModel: ViewModel<any, any, any> = null
  public changeGameTypeTask: Task
  public flyFruitNode: Node
  private currGameType: GameType = GameType.NONE
  protected begin() {
    game.on(Game.EVENT_HIDE, () => {//游戏切入后台
      this.timer=new Date().getTime()
    })
    game.on(Game.EVENT_SHOW, () => {//游戏进入
      let differenceInSeconds =(new Date().getTime() - this.timer) / 1000;
      if (differenceInSeconds > 30) {
        console.log("时间超过30 秒↓↓↓↓");
        global.hallDispatch(addToastAction({ content: lang.write(k =>k.WebSocketModule.socketConnectDisconnect, {}, { placeStr: "等待超长断开连接" }) }))
        global.closeSubGame()
      } else {
          console.log("时间差不超过 30 秒");
      }
    })
    this.dispatch(resetStore('')),
    sktMsgListener.addOnce(SKT_MAG_TYPE.AUTH, "board", (data: anthInfoType) => {
      this.dispatch(changeGame(data.gameType))
      /**刚刚初始化游戏，需要带入必要的游戏状态 */
      setData("balanceAfterSettlement", data.coinsBeforeBetting)
      setData("gameType", data.gameType)
      setData("freeCount", data.freeGameCount)
      setData("freeGameAmount", data.freeGameCoins)
      this.dispatch(updateBalance(dataTransfer(DataKeyType.BALANCE)))
      this.dispatch(setSubGameTimes(dataTransfer(DataKeyType.SUBGAME_TIMES)))
      this.dispatch(updateSubGameTimes(data.freeGameCount))
      this.dispatch(changeViewGame(data.gameType))
      this.dispatch(changeCurrGameType(data.gameType))
      this.dispatch(changeGameFreeGametotalMultiplier(data.lessGodFreeGameMultiple))
      this.dispatch(changeAutoLauncherType(AutoLauncherType.NONE))
			this.dispatch(setAutoLaunchedTimes(0))
      msgListener.dispath(NORMAL_MAG_TYPE.CHANGE_GAME, { currGameType: data.gameType })
      if (data.gameType && data.gameType !== GameType.MAIN) {
        this.dispatch(setRollRoundEnd(false))
        //非小游戏需要读取盈利状态
        this.dispatch(changeProfit(dataTransfer(DataKeyType.FREE_GAME_AMOUNT)))
      } else {
        this.dispatch(setRollRoundEnd(true))
      }
      sys.localStorage.setItem("starlight", JSON.stringify(data))
      // this.dispatch(changeGame(GameType.MAIN))
      this.currentGameViewModel = new RollerPanelViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.MAIN_GAME).source).appendTo(this.comp.getGameNode(), {
        effectType: EffectType.EFFECT_FADE, effectDone: () => {
          // this.dispatch(setRollRoundEnd(true))
        }
      }).connect()

    })
    sktInstance.sendSktMessage(SKT_MAG_TYPE.AUTH, {
      token: sys.localStorage.getItem("token"),
      // token:"eyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAE3NQQqCIRAG0LvMWsEZJ_30Bq07geYEBsJPuAiiu0et2r7Ne9FsmyrnwCJghiN7Hl-IkpP-4L4nVYKdkqKIb7F0ryFnjwb243obRVIfqkKOlq1uj_OgihCQwVEc7bnssts6_qcEfX8A47WcnH8AAAA.BMHg1CM1e3sq7gf85rA8oSGxAZ89yxc79UytEiLyEXc",
      gameId: config.gameId
    })
    // sktMsgListener.add(SKT_MAG_TYPE.JACKPOT, "board", (data)currGameType => {
    //   this.dispatch(updateJackpotAmount(data))
    // })
    sktMsgListener.add(SKT_MAG_TYPE.BALANCE_UPDATE, "board", (data) => {
      this.dispatch(updateBalance(data))
    })

    sktMsgListener.add(SKT_MAG_TYPE.VACATETHEROOM, "board", (data) => {
      global.closeSubGame({ confirmContent: lang.write(k => k.UpdateModule.GameNotice, {}, { placeStr: "对不起，系统维护中，请稍后再尝试登录" }) })
    })
    sktMsgListener.add(SKT_MAG_TYPE.LAUNCHER_BET, "board", (data, error) => {
      //console.error(this.currGameType !== dataTransfer(DataKeyType.NEXTGAME_TYPE));
      if (this.currGameType !== dataTransfer(DataKeyType.NEXTGAME_TYPE)) {
        this.currGameType = dataTransfer(DataKeyType.NEXTGAME_TYPE)
        this.dispatch(changeViewGame(dataTransfer(DataKeyType.GAME_TYPE)))
        this.dispatch(changeCurrGameType(dataTransfer(DataKeyType.NEXTGAME_TYPE)))
        this.dispatch(changeGameFreeGametotalMultiplier(0))
        if (dataTransfer(DataKeyType.GAME_TYPE) === GameType.MAIN) {
          this.dispatch(changeProfit(0))
        }
      }
    }, 100)

    this.setEvent({
      changeGameHandler: (lastGameType, currGameType) => {
        this.changeGameTypeTask = new Task((done) => {
          if (this.currentGameViewModel) {
            // this.dispatch(setRollRoundEnd(true))
            // this.flyFruitNode = instantiate(sourceManageSeletor().getFile(PrefabPathDefine.FLY_FRUITS).source)
            // this.viewNode.addChild(this.flyFruitNode)
            done()
          } else {
            done()
          }
        }).subscribeDone('change', () => {
          // window.setTimeout(() => {
          //   this.flyFruitNode && this.flyFruitNode.destroy()
          //   msgListener.dispath(NORMAL_MAG_TYPE.CHANGE_GAME, { currGameType })
          // }, 1500)
        })
        // this.changeGameTypeTask.name = "changeGameTypeTask"
        if (!this.currentGameViewModel) {
          //初始化的时候才直接执行
          TaskSchedulerDefault().joinqQueue(this.changeGameTypeTask, true)
          // console.log('changeGameTypeTask init')
        }
        msgListener.dispath(NORMAL_MAG_TYPE.CHANGE_GAME, { currGameType })
      }
    }
    )
  }
  protected unMountCallBack(): void {
    sktMsgListener.removeById("board")
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        gameType: state.game.currGameType,
      }
    })
    return this
  }
}

export default GameBoardViewModel
