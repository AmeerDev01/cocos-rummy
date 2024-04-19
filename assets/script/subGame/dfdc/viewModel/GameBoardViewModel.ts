import { Game, Node, instantiate, sys, tween } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { BlessedWealthy_gameBoard, IProps, IEvent } from "../components/BlessedWealthy_gameBoard"
import { StateType } from "../store/reducer"
import { SKT_MAG_TYPE, sktInstance, sktMsgListener } from "../socketConnect"
import config from "../config"
import { GameType, SMALLGAME } from "../type"
import { NORMAL_MAG_TYPE, blessedWealthy_Audio, msgListener, sourceManageSeletor, gameBoardViewModel } from "../index"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { changeGame, changeProfit, changeViewGame, setFreeGameId, setJackPotUserArr, setSubGameTimes, updateBalance, updateJackpotAmount, updateSubGameTimes } from "../store/actions/game"
import { getStore } from "../store"
import dataTransfer, { DataKeyType, setData } from "../dataTransfer"
import TaskScheduler, { Task, TaskSchedulerDefault } from "../../../utils/TaskScheduler"
import { EffectType } from "../../../utils/NodeIOEffect"
import { setRollRoundEnd } from "../store/actions/roller"
import { bundlePkgName } from '../sourceDefine';
import { SoundPathDefine } from "../sourceDefine/soundDefine"
import RollerPanelViewModel from "./RollerPanelViewModel"
// import SgChooseViewModel from "./SgChooseViewModel"
// import { phoenix_small_result,IState as BPIState, IProps as BPIProps,IEvent as BPIEvent } from "../components/phoenix_small_result"
import BaseViewModel from "../../../common/viewModel/BaseViewModel"
import PopupViewModel from "./PopupViewModel"

type anthInfoType = {
  bl: number
  freeGameCount: number
  freeGameCoins: number,
  gameType: GameType
  iconStay: number
  lv: number
  memberId: string
  tableId: string,
  // totalFreeGameCount:number,
}

export type ChooseSmallGame = {
  done?: Function,
  gameType?:GameType,
}

export let rollerPanelViewModel: RollerPanelViewModel;
// export let chooseSmallGame: SgChooseViewModel;
export let smallResultViewModel
@StoreInject(getStore())
class GameBoardViewModel extends ViewModel<BlessedWealthy_gameBoard, IProps, IEvent> {
  constructor() {
    super('BlessedWealthy_gameBoard')
  }
  public currentGameViewModel: ViewModel<any, any, any> = null
  public changeGameTypeTask: Task
  public flyBgNode: Node
  private currGameType: GameType = GameType.NONE;
  private viewGameType: GameType;
  protected begin() {
   
    sktMsgListener.addOnce(SKT_MAG_TYPE.AUTH, bundlePkgName, (data: anthInfoType) => {
      // if(data.gameType !== GameType.MAIN &&  data.freeGameCount === 0) {//还未选择小游戏id
      //   const chooseSmall :ChooseSmallGame= {
      //     gameType:data.gameType
      //   }
      //   this.createSgChooseSmallGame(chooseSmall);
      // } else {
      //   this.dispatch(changeGame(data.gameType))
      //   this.dispatch(changeViewGame(data.gameType))
      // }
      this.dispatch(changeGame(data.gameType))

      /**刚刚初始化游戏，需要带入必要的游戏状态 */
      setData("bl", data.bl)
      setData("gameType", data.gameType)
      setData("freeCount", data.freeGameCount)
      setData("freeGameAmount", data.freeGameCoins)
      // this.dispatch(setFreeGameId(data.phoenixFreeGameLine))
      this.dispatch(updateBalance(dataTransfer(DataKeyType.BALANCE)))
      // this.dispatch(setSubGameTimes(data.totalFreeGameCount))
      this.dispatch(changeViewGame(data.gameType))
      this.dispatch(updateSubGameTimes(data.freeGameCount))
      msgListener.dispath(NORMAL_MAG_TYPE.CHANGE_GAME, { currGameType: data.gameType })
      if (data.gameType !== GameType.MAIN) {
       
        //小游戏需要读取盈利状态
        this.dispatch(changeProfit(dataTransfer(DataKeyType.FREE_GAME_AMOUNT)))
      }
      sys.localStorage.setItem("dfdc", JSON.stringify(data))
      // this.dispatch(changeGame(GameType.MAIN))
    })
    sktInstance.sendSktMessage(SKT_MAG_TYPE.AUTH, {
      token: sys.localStorage.getItem("token"),
      gameId: config.gameId
    })
    sktMsgListener.add(SKT_MAG_TYPE.JACKPOT, bundlePkgName, (data) => {
      this.dispatch(updateJackpotAmount(data))
    })
    sktMsgListener.add(SKT_MAG_TYPE.BALANCE_UPDATE, bundlePkgName, (data) => {
      this.dispatch(updateBalance(data))
    })
    sktMsgListener.add(SKT_MAG_TYPE.JACKPOT_USER, bundlePkgName, (data) => {
      this.dispatch(setJackPotUserArr(data))
    })

    sktMsgListener.add(SKT_MAG_TYPE.LAUNCHER_BET, bundlePkgName, (data, error) => {
      console.log('curGame------------',this.currGameType, dataTransfer(DataKeyType.GAME_TYPE))
      //小游戏转主游戏时判定 切换gameType值
      if (this.currGameType !== dataTransfer(DataKeyType.GAME_TYPE)) {
        this.currGameType = dataTransfer(DataKeyType.GAME_TYPE)
        this.dispatch(changeGame(dataTransfer(DataKeyType.GAME_TYPE)))
        // if(dataTransfer(DataKeyType.GAME_TYPE)===GameType.MAIN){
        //   this.dispatch(changeProfit(0))
        // }
      }
    }, 100)

    this.setEvent({
      /**切换游戏时执行 */
      changeGameHandler: (lastGameType, currGameType) => {
        console.log("lastGameType, currGameType",lastGameType, currGameType)
        this.changeGameTypeTask = new Task((done) => {
          if (this.currentGameViewModel) {
            // phoenix_Audio.playOneShot(SoundPathDefine.TRANSFER)
            this.flyBgNode = instantiate(sourceManageSeletor().getFile(PrefabPathDefine.FLY_BG).source)//转场动画 飞云的背景
            this.viewNode.addChild(this.flyBgNode)
            window.setTimeout(() => {
              //卸载当前的roller面板
              this.currentGameViewModel.unMount(EffectType.EFFECT1).then(() => {
                done()
              })
            }, 1000)
          } else {
            done()
          }
        }).subscribeDone('change', () => {
          console.log("2222222222");
          
          this.createRollerView(currGameType)

        })
        // this.changeGameTypeTask.name = "changeGameTypeTask"
        if (!this.currentGameViewModel) {
          //初始化的时候才直接执行
          TaskSchedulerDefault().joinqQueue(this.changeGameTypeTask, true)
          // console.log('changeGameTypeTask init')
        }
      }
    })
  }
  /**roller面板 */
  public createRollerView(currGameType) {
    this.dispatch(changeViewGame(currGameType))

    // 判断主游戏0和小游戏1时加载的roller面板 
    if (currGameType === GameType.MAIN) {
      rollerPanelViewModel = new RollerPanelViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.MAIN_GAME).source).appendTo(this.comp.getGameNode(), {
        effectType: EffectType.EFFECT_FADE, effectDone: () => {
          this.dispatch(setRollRoundEnd(true))
        }
      }).connect()

      this.currentGameViewModel = rollerPanelViewModel;
    } else if (currGameType === GameType.SUBGAME1) {
      rollerPanelViewModel = new RollerPanelViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.MAIN_GAME).source).appendTo(this.comp.getGameNode(), {
        effectType: EffectType.EFFECT_FADE, effectDone: () => {
          this.dispatch(setRollRoundEnd(true))
        }
      }).connect()
      this.currentGameViewModel = rollerPanelViewModel;
    } 
    msgListener.dispath(NORMAL_MAG_TYPE.CHANGE_GAME, { currGameType })
    window.setTimeout(() => {
      this.flyBgNode && this.flyBgNode.destroy()
    }, 1500)
  }
  /**转场动画 */
  public createFlyBg(gameType) {
      //转场
      this.flyBgNode = instantiate(sourceManageSeletor().getFile(PrefabPathDefine.FLY_BG).source)//动画 飞云的背景
      this.viewNode.addChild(this.flyBgNode)
      window.setTimeout(() => {
        this.flyBgNode && this.flyBgNode.destroy()
        this.dispatch(changeGame(gameType))//切换小游戏gameType===1
        this.dispatch(changeViewGame(gameType))
      }, 1500)
  }
  /**选择小游戏的板 */
  public createSgChooseSmallGame(chooseSmall:ChooseSmallGame) {
    //禁用掉主下注按钮
    this.dispatch(setRollRoundEnd(false))

  }
  protected unMountCallBack(): void {
    sktMsgListener.removeById(bundlePkgName)
  }

  public openPopup(nodeWrap?: Node) {
    const baseBoardView = new PopupViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.POPUP).source)
    .appendTo(this.comp.getGameNode(), { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
      closeHandler: () => {
        baseBoardView.unMount(EffectType.EFFECT1)
      }
      }).connect()
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      this.viewGameType = state.game.viewGameType;
      return {
        gameType: state.game.currGameType
      }
    })
    return this
  }
}

export default GameBoardViewModel
