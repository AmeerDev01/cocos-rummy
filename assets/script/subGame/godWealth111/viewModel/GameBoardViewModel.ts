import { Game, Node, instantiate, sp, sys, tween } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { GodWealth_gameBoard, IProps, IEvent } from "../components/GodWealth_gameBoard"
import { StateType } from "../store/reducer"
import { SKT_MAG_TYPE, sktInstance, sktMsgListener } from "../socketConnect"
import config from "../config"
import { AutoLauncherType, GameType, IconEffectType, SMALLGAME } from "../type"
import { NORMAL_MAG_TYPE, godWealth_Audio, msgListener, sourceManageSeletor, gameBoardViewModel, playSmallGameOver } from "../index"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { changeAutoLauncherType, changeGame, changeProfit, changeViewGame, setAutoLaunchedTimes, setFreeGameId, setJackPotUserArr, setSubGameTimes, setWaiting, updateBalance, updateJackpotAmount, updateSubGameTimes } from "../store/actions/game"
import { getStore } from "../store"
import dataTransfer, { DataKeyType, setData } from "../dataTransfer"
import TaskScheduler, { Task, TaskSchedulerDefault } from "../../../utils/TaskScheduler"
import { EffectType } from "../../../utils/NodeIOEffect"
import { setIconBaoHeEffect, setRollRoundEnd } from "../store/actions/roller"
import { bundlePkgName } from '../sourceDefine';
import { SoundPathDefine } from "../sourceDefine/soundDefine"
import RollerPanelViewModel from "./RollerPanelViewModel"
// import SgChooseViewModel from "./SgChooseViewModel"
import { GodWealth_small_win, IState as SWIState, IProps as SWIProps, IEvent as SWIEvent } from "../components/GodWealth_small_win"
import BaseViewModel from "../../../common/viewModel/BaseViewModel"
import SkeletonAnimationPlayer from "../SkeletonPlay"

type anthInfoType = {
  bl: number
  freeGameCount: number
  freeGameAmount: number,
  gameType: GameType
  iconStay: number
  lv: number
  memberId: string
  tableId: string,
  fixedChessboardIcon?:number[][]
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
class GameBoardViewModel extends ViewModel<GodWealth_gameBoard, IProps, IEvent> {
  constructor() {
    super('GodWealth_gameBoard')
  }
  public currentGameViewModel: ViewModel<any, any, any> = null
  public changeGameTypeTask: Task
  public flyBgNode: Node
  private currGameType: GameType = GameType.NONE;
  private viewGameType: GameType;
  private taskScheduler: TaskScheduler = new TaskScheduler();
  protected begin() {
    sktMsgListener.addOnce(SKT_MAG_TYPE.AUTH, bundlePkgName, (data: anthInfoType) => {
      this.dispatch(changeGame(data.gameType))
      if(data.gameType ===GameType.SUBGAME2) {//宝盒小游戏
        setData("fixedChessboardIcon", data.fixedChessboardIcon)        
      } else if(data.gameType === GameType.SUBGAME1){
        // this.dispatch(changeGame(data.gameType))
        // this.dispatch(changeViewGame(data.gameType))
      }
      /**刚刚初始化游戏，需要带入必要的游戏状态 */
      setData("bl", data.bl)
      setData("gameType", data.gameType)
      setData("freeCount", data.freeGameCount)
      setData("freeGameAmount", data.freeGameAmount)
      // this.dispatch(setFreeGameId(data.phoenixFreeGameLine))
      if (data.gameType === GameType.SUBGAME2) {
        this.dispatch(setIconBaoHeEffect(IconEffectType.BAOHE,dataTransfer(DataKeyType.FIXED_CHESSBOARD_ICON)));
      }
      this.dispatch(updateBalance(dataTransfer(DataKeyType.BALANCE)))
      this.dispatch(setSubGameTimes(data.freeGameCount))
      this.dispatch(updateSubGameTimes(data.freeGameCount))
      msgListener.dispath(NORMAL_MAG_TYPE.CHANGE_GAME, { currGameType: data.gameType })
      if (data.gameType !== GameType.MAIN) {
        //小游戏需要读取盈利状态
        this.dispatch(changeProfit(dataTransfer(DataKeyType.FREE_GAME_AMOUNT)))
      }
      sys.localStorage.setItem("godWealth", JSON.stringify(data))
      rollerPanelViewModel = new RollerPanelViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.MAIN_GAME).source).appendTo(this.comp.getGameNode(), {
        effectType: EffectType.EFFECT_FADE, effectDone: () => {
          this.dispatch(setRollRoundEnd(true))
        }
      }).connect()
      this.currentGameViewModel = rollerPanelViewModel;
      this.dispatch(changeViewGame(data.gameType))

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
        console.log("lastGameType", lastGameType, currGameType)
        // if (lastGameType !== currGameType && lastGameType === GameType.SUBGAME2) {
        //     const flicherBaoHeArr: number[][] = dataTransfer(DataKeyType.FIXED_CHESSBOARD_ICON);//获取宝盒数据
        //        /**宝盒金币飞行特效*/
        //       const multiplesOfFlight = new Task((done) => { 
        //       if(Object.keys(flicherBaoHeArr).length > 0){
        //         this.comp.multiplierBaoHe(done)
        //       } else {
        //         done()
        //       }
        //       })
        //       this.taskScheduler.joinqQueue(multiplesOfFlight, false)
        // }
        this.changeGameTypeTask = new Task((done) => {
          if (this.currentGameViewModel) {
            if (lastGameType !== currGameType && lastGameType !== GameType.MAIN) {
              console.log("lastGameType22", lastGameType);
              this.dispatch(setRollRoundEnd(false))
             
              const winnerDialog = rollerPanelViewModel.showSmallWin();
              if (lastGameType === GameType.SUBGAME1) {
                playSmallGameOver()
                winnerDialog.comp.getFreeNode().active = true;
              } else if (lastGameType === GameType.SUBGAME2) {
                playSmallGameOver()
                /**宝盒游戏出来 清除宝盒 */
                rollerPanelViewModel.comp.rollerViewModelMap.forEach((roller) => {
                  roller.comp.clearBaoHeIcon()
                })
                winnerDialog.comp.getBaoHeNode().active = true;
              }
              done()

            } else if (lastGameType !== currGameType && lastGameType === GameType.MAIN ) { 
              if (currGameType === GameType.SUBGAME1) {
                this.dispatch(setSubGameTimes(dataTransfer(DataKeyType.SUBGAME_TIMES)))
                done()
              } else if (currGameType === GameType.SUBGAME2) {
                // window.setTimeout(() => {
                //   const winnerDialog = rollerPanelViewModel.showSmallWin();
                //   winnerDialog.comp.getBaoHeBoxNode().active = true;
                  
                // },1000)
                done()
              }
            }
          } else {
            done()
          }
        }).subscribeDone('change', () => {
          this.dispatch(changeViewGame(currGameType))
          msgListener.dispath(NORMAL_MAG_TYPE.CHANGE_GAME, { currGameType })
        })
        if (!this.currentGameViewModel) {
          //初始化的时候才直接执行
          TaskSchedulerDefault().joinqQueue(this.changeGameTypeTask, true)
        }
      }
    })
  }

  /**转场动画 */
  public createFlyBg() {
      //转场
    this.flyBgNode = instantiate(sourceManageSeletor().getFile(PrefabPathDefine.FLY_BG).source)//动画转场背景
    this.viewNode.addChild(this.flyBgNode);
    const titleSkeleton = this.flyBgNode.getChildByName("caishenguochang").getComponent(sp.Skeleton)

    new SkeletonAnimationPlayer(titleSkeleton, 'animation', false, () => {
      // this.currentGameViewModel.unMount(EffectType.EFFECT1).then(() => {
      //   done()
      // })
      // this.currentGameViewModel.comp.viewNode.active = false;
      this.flyBgNode && this.flyBgNode.destroy();
      this.dispatch(setRollRoundEnd(true));
    }).playAnimation()
  }

  protected unMountCallBack(): void {
    this.dispatch(changeAutoLauncherType(AutoLauncherType.NONE))
    this.dispatch(setAutoLaunchedTimes(undefined));
    sktMsgListener.removeById(bundlePkgName)
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
