import { Game, Node, instantiate, sp, sys, tween } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { phoenix_gameBoard, IProps, IEvent } from "../components/phoenix_gameBoard"
import { StateType } from "../store/reducer"
import { SKT_MAG_TYPE, sktInstance, sktMsgListener } from "../socketConnect"
import config from "../config"
import { AutoLauncherType, GameType, SMALLGAME } from "../type"
import { NORMAL_MAG_TYPE, phoenix_Audio, msgListener, sourceManageSeletor, gameBoardViewModel, footerViewModel } from "../index"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { changeAutoLauncherType, changeGame, changeProfit, changeViewGame, setAutoLaunchedTimes, setFreeGameId, setSubGameTimes, updateBalance, updateJackpotAmount, updateSubGameTimes } from "../store/actions/game"
import { getStore } from "../store"
import dataTransfer, { DataKeyType, setData } from "../dataTransfer"
import TaskScheduler, { Task, TaskSchedulerDefault } from "../../../utils/TaskScheduler"
import { EffectType } from "../../../utils/NodeIOEffect"
import { setRollRoundEnd } from "../store/actions/roller"
import { bundlePkgName } from '../sourceDefine';
import { SoundPathDefine } from "../sourceDefine/soundDefine"
import RollerPanelViewModel from "./RollerPanelViewModel"
import SgChooseSmallViewModel from "./SgChooseSmallViewModel"
import { phoenix_small_result, IState as BPIState, IProps as BPIProps, IEvent as BPIEvent } from "../components/phoenix_small_result"
import BaseViewModel from "../../../common/viewModel/BaseViewModel"
import SmallReaultViewModel from "./SmallReaultViewModel"
import SkeletonAnimationPlayer from "../SkeletonPlay"

type anthInfoType = {
  coinsBeforeBetting: number
  freeGameCount: number
  freeGameCoins: number,
  gameType: GameType
  phoenixFreeGameLine: number
  lv: number
  memberId: string
  tableId: string,
  totalFreeGameCount:number,
}

export type ChooseSmallGame = {
  done?: Function,
  gameType?:GameType,
}

export let rollerPanelViewModel: RollerPanelViewModel;
export let chooseSmallGame:SgChooseSmallViewModel;
export let smallResultViewModel
@StoreInject(getStore())
class GameBoardViewModel extends ViewModel<phoenix_gameBoard, IProps, IEvent> {
  constructor() {
    super('phoenix_gameBoard')
  }
  public currentGameViewModel: ViewModel<any, any, any> = null
  public changeGameTypeTask: Task
  public flyBgNode: Node
  private currGameType: GameType = GameType.NONE;
  private viewGameType: GameType;
  protected begin() {
    sktMsgListener.addOnce(SKT_MAG_TYPE.AUTH, bundlePkgName, (data: anthInfoType) => {
      if(data.gameType !== GameType.MAIN &&  data.freeGameCount === 0) {//还未选择小游戏id
        const chooseSmall :ChooseSmallGame= {
          gameType:data.gameType
        }
        this.createSgChooseSmallGame(chooseSmall);
      } else {
        this.dispatch(changeGame(data.gameType))
        this.dispatch(changeViewGame(data.gameType))
      }
      // this.dispatch(changeGame(GameType.SUBGAME1))
      /**刚刚初始化游戏，需要带入必要的游戏状态 */
      setData("balanceAfterSettlement", data.coinsBeforeBetting)
      setData("gameType", data.gameType)
      setData("freeCount", data.freeGameCount)
      setData("freeGameAmount", data.freeGameCoins)
      this.dispatch(setFreeGameId(data.phoenixFreeGameLine))
      this.dispatch(updateBalance(dataTransfer(DataKeyType.BALANCE)))
      this.dispatch(setSubGameTimes(data.totalFreeGameCount))
      // this.dispatch(changeViewGame(data.gameType))
      this.dispatch(updateSubGameTimes(data.freeGameCount))
      this.dispatch(changeAutoLauncherType(AutoLauncherType.NONE))
      msgListener.dispath(NORMAL_MAG_TYPE.CHANGE_GAME, { currGameType: data.gameType })
      if (data.gameType !== GameType.MAIN) {
       
        //小游戏需要读取盈利状态
        this.dispatch(changeProfit(dataTransfer(DataKeyType.FREE_GAME_AMOUNT)))
      }
      sys.localStorage.setItem("phoenix", JSON.stringify(data))
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

    sktMsgListener.add(SKT_MAG_TYPE.LAUNCHER_BET, bundlePkgName, (data, error) => {
      console.log('curGame------------',this.currGameType, dataTransfer(DataKeyType.GAME_TYPE))
      //小游戏转主游戏时判定 切换gameType值
      if (this.currGameType !== dataTransfer(DataKeyType.GAME_TYPE)) {
        this.currGameType = dataTransfer(DataKeyType.GAME_TYPE)
        this.dispatch(changeGame(dataTransfer(DataKeyType.GAME_TYPE)))
      }
    }, 100)

    this.setEvent({
      /**切换游戏时执行 */
      changeGameHandler: (lastGameType, currGameType) => {
        console.log(lastGameType, currGameType)
        this.changeGameTypeTask = new Task((done) => {
          if (this.currentGameViewModel) {
            if (lastGameType !== currGameType && lastGameType === GameType.SUBGAME1) {
              this.dispatch(setRollRoundEnd(false))
              this.dispatch(updateBalance(dataTransfer(DataKeyType.BALANCE))); //更新用户金币值
              smallResultViewModel = new SmallReaultViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.SMALL_RESULT).source).appendTo(this.comp.getGameNode(), { effectType: EffectType.EFFECT1, isModal: true })
              .setProps({
                goldAmount: dataTransfer(DataKeyType.FREE_GAME_AMOUNT)
              }).setEvent({
                killSelfHadler: () => {
                  smallResultViewModel.unMount(EffectType.EFFECT1)
                 }
              }).connect()

              this.comp.scheduleOnce(() => {
                 //卸载当前的roller面板
                this.currentGameViewModel.unMount(EffectType.EFFECT1).then(() => {
                  done()
                })
              },3)
              // window.setTimeout(() => {
              //   //卸载当前的roller面板
              //   this.currentGameViewModel.unMount(EffectType.EFFECT1).then(() => {
              //     done()
              //   })
              // }, 3000)
            } else if(lastGameType !== currGameType && lastGameType === GameType.MAIN) {
              // phoenix_Audio.playOneShot(SoundPathDefine.TRANSFER)
              this.flyBgNode = instantiate(sourceManageSeletor().getFile(PrefabPathDefine.FLY_BG).source)//转场动画 飞云的背景
              this.viewNode.addChild(this.flyBgNode)
              const titleSkeleton = this.flyBgNode.getChildByName("caishenguochang").getComponent(sp.Skeleton)
              new SkeletonAnimationPlayer(titleSkeleton, 'animation', false, () => {
                this.currentGameViewModel.unMount(EffectType.EFFECT1).then(() => {
                  done()
                })
              }).playAnimation()
            }
          } else {
            done()
          }
        }).subscribeDone('change', () => {
          this.createRollerView(currGameType)
          
        })
        if (!this.currentGameViewModel) {
          //初始化的时候才直接执行
          TaskSchedulerDefault().joinqQueue(this.changeGameTypeTask, true)
        }
      }
    })
  }
  /**roller面板 */
  public createRollerView(currGameType) {    
    this.dispatch(changeViewGame(currGameType))
    let greenBg = gameBoardViewModel.comp.getPropertyNode().props_spr_main_greenBg as Node;
    let mBlueBg = gameBoardViewModel.comp.getPropertyNode().props_spr_main_blueBg as Node;
    // 判断主游戏0和小游戏1时加载的roller面板 
    if (currGameType === GameType.MAIN) {
      rollerPanelViewModel = new RollerPanelViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.MAIN_GAME).source).appendTo(this.comp.getGameNode(), {
        effectType: EffectType.EFFECT_FADE, effectDone: () => {
          this.dispatch(setRollRoundEnd(true))
        }
      }).connect()
      mBlueBg.active = true;
      greenBg.active = false;
      let redBg = rollerPanelViewModel.comp.getPropertyNode().props_spr_phoenix_Redbg as Node;
      let blueBg = rollerPanelViewModel.comp.getPropertyNode().props_spr_phoenix_Bluebg as Node;
      let smallGameMBg = rollerPanelViewModel.comp.getPropertyNode().props_spr_smallGame_multipleBg as Node;
      redBg.active = true;
      blueBg.active = false;
      smallGameMBg.active = false;
      this.currentGameViewModel = rollerPanelViewModel;
    } else if (currGameType === GameType.SUBGAME1) {
      rollerPanelViewModel = new RollerPanelViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.MAIN_GAME).source).appendTo(this.comp.getGameNode(), {
        effectType: EffectType.EFFECT_FADE, effectDone: () => {
          this.dispatch(setRollRoundEnd(true))
        }
      }).connect()
      mBlueBg.active = false;
      greenBg.active = true;
      let redBg = rollerPanelViewModel.comp.getPropertyNode().props_spr_phoenix_Redbg as Node;
      let blueBg = rollerPanelViewModel.comp.getPropertyNode().props_spr_phoenix_Bluebg as Node;
      let smallGameMBg = rollerPanelViewModel.comp.getPropertyNode().props_spr_smallGame_multipleBg as Node;
      redBg.active = false;
      blueBg.active = true;
      smallGameMBg.active = true;
      this.currentGameViewModel = rollerPanelViewModel;
    } 
    msgListener.dispath(NORMAL_MAG_TYPE.CHANGE_GAME, { currGameType })
    this.comp.scheduleOnce(() => {
      this.flyBgNode && this.flyBgNode.destroy()
      
    },1.5)
    // window.setTimeout(() => {
    //   this.flyBgNode && this.flyBgNode.destroy()
    // }, 1500)
  }
  /**转场动画 */
  public createFlyBg(gameType,done?:Function) {
      //转场
    this.flyBgNode = instantiate(sourceManageSeletor().getFile(PrefabPathDefine.FLY_BG).source)//动画 飞云的背景
    this.viewNode.addChild(this.flyBgNode);
    const titleSkeleton = this.flyBgNode.getChildByName("caishenguochang").getComponent(sp.Skeleton)
    new SkeletonAnimationPlayer(titleSkeleton, 'animation', false, () => {
      this.flyBgNode && this.flyBgNode.destroy()
      this.dispatch(changeGame(gameType))//切换小游戏gameType===1
      this.dispatch(changeViewGame(gameType))
    }).playAnimation()
      // window.setTimeout(() => {
      //   this.flyBgNode && this.flyBgNode.destroy()
      //   this.dispatch(changeGame(gameType))//切换小游戏gameType===1
      //   this.dispatch(changeViewGame(gameType))
      // }, 1500)
  }
  /**选择小游戏的板 */
  public createSgChooseSmallGame(chooseSmall:ChooseSmallGame) {
    //禁用掉主下注按钮
    this.dispatch(setRollRoundEnd(false))
    chooseSmallGame = new SgChooseSmallViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.PHOENIX_SG_CHOOSE).source)
    .appendTo(this.parentNode, { effectType: EffectType.EFFECT1, isModal: true })
    .setEvent({
      killSelfHandler: (smallGameId: SMALLGAME) => {
        this.dispatch(setFreeGameId(smallGameId))
        this.dispatch(updateSubGameTimes(config.smallGame[smallGameId-1].times))
        this.dispatch(setSubGameTimes(config.smallGame[smallGameId-1].times))
        chooseSmallGame.comp.isClick1 = true;
        chooseSmallGame.comp.isClick2 = true;
        chooseSmallGame.comp.isClick3 = true;
        chooseSmallGame.comp.isClick4 = true;
        chooseSmallGame.comp.isClick5 = true;
        this.comp.scheduleOnce(() => {
          chooseSmallGame.unMount(EffectType.EFFECT1)
          if (chooseSmall.gameType) {
            gameBoardViewModel.createFlyBg(chooseSmall.gameType);
          }
          if (chooseSmall.done) {
            chooseSmall.done()
          }
        }, 1)
        
        // window.setTimeout(() => {
        //   chooseSmallGame.unMount(EffectType.EFFECT1)
        //   if (chooseSmall.gameType) {
        //     gameBoardViewModel.createFlyBg(chooseSmall.gameType);
        //   }
        //   if (chooseSmall.done) {
        //     chooseSmall.done()
        //   }
        // },1000)
      }
    })
  }

  protected unMountCallBack(): void {
    this.dispatch(changeAutoLauncherType(AutoLauncherType.NONE))
    this.dispatch(setAutoLaunchedTimes(undefined));
    // this.dispatch(changeProfit(0))
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
