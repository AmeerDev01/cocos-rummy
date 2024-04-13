import { Node, log } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Thor_RollerPanel, IProps, IEvent } from "../components/Thor_RollerPanel"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
import { AutoLauncherType, DialogType, DirectionType, GameModeType, GameType, IconEffectType, RollerType } from "../type"
import config from "../config"
import { beginRollAction, setStopRollAction, initRollAction, endRollingAction, setIconEffect, setRollRoundEnd, setRollSpeed, setSmallBox } from "../store/actions/roller"
import { SKT_MAG_TYPE, sktMsgListener } from "../socketConnect"
import dataTransfer, { refreshData, DataKeyType, setData } from "../dataTransfer"
import TaskScheduler, { Task, TaskSchedulerDefault } from "../../../utils/TaskScheduler"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { footerViewModel, thor_Audio, gameBoardViewModel, sourceManageSeletor } from "../index"
import { EffectType } from "../../../utils/NodeIOEffect"
import { changeGame, changeGameFreeGametotalMultiplier, changeMinigameCount, changeMultipleTotal, changeProfit, changeRoleAttack, changeViewGame, changeapostille, setSubGameTimes, setWaiting, updateBalance, updateGameModeType, updateJackpotAmount, updateSubGameTimes } from "../store/actions/game"
import BaseViewModel from "../../../common/viewModel/BaseViewModel"
import { Thor_BigPrize, IState as BPIState, IProps as BPIProps, IEvent as BPIEvent } from "../components/Thor_BigPrize"
import { SoundPathDefine } from "../sourceDefine/soundDefine"
import { addToastAction } from "../../../hall/store/actions/baseBoard"
import SgBoxViewModel from "./SgBoxViewModel"
import { Thor_SmallGame_caculate, IState as CPIState, IProps as CPIProps, IEvent as CPIEvent } from "../components/Thor_SmallGame_caculate"
import { sendNativeVibrate } from "../../../common/bridge"

@StoreInject(getStore())
class RollerPanelViewModel extends ViewModel<Thor_RollerPanel, IProps, IEvent> {
  constructor() {
    super('Thor_RollerPanel')
  }
  private lastGameType: GameType
  private currGameType: GameType
  private viewGameType: GameType
  public rollerMap: RollerType[] = []
  public taskScheduler: TaskScheduler = new TaskScheduler()
  private autoLaunchType: AutoLauncherType
  private winnerDialog: BaseViewModel<Thor_BigPrize, BPIState, BPIProps, BPIEvent>
  private apostille: boolean
  private isHasten: boolean
  private gameFreeGametotalMultiplier: number
  private balance: number
  protected begin() {
    // const rollerMap: RollerType[] = []
    // this.dispatch(setRollRoundEnd(true))
    this.initRollerMap()
    // 手动切换场景
    this.comp.setProps({ currGameType: this.currGameType })
    if (this.currGameType !== GameType.SUBGAME1) {
      this.dispatch(setRollRoundEnd(true))
    }else{
      this.comp.scheduleOnce(()=>{{
        footerViewModel.manualBetHandler()
      }},2)
    }
    this.setEvent({
      setRoleAttacks: (bl) => {
        this.dispatch(changeRoleAttack(bl))
      },
      allRollStop: () => {
        console.info ('滚动结束');
        thor_Audio.playOneShot(SoundPathDefine.ROLLER_END)
        this.dispatch(changeMultipleTotal(0))
        this.dispatch(changeMinigameCount(0))
        this.dispatch(setSmallBox({}))
        const flicherArr = dataTransfer(DataKeyType.ICON_EFFECT_DATA)
        flicherArr.forEach(item => {
          if (Object.keys(flicherArr).length > 0) {
            for (let i in item.winningPosition) {
              const task = new Task((done) => {
                for (let i = 0; i < item.gameWinningVos.length; i++) {
                  const v = item.gameWinningVos[i];
                  this.dispatch(setSmallBox(v))
                }
                //console.log('消除列表',item.winningPosition[i]);
                this.dispatch(setIconEffect(IconEffectType.NORMAIL, item.winningPosition[i]))
                //闪烁2秒钟就结束
                this.comp.scheduleOnce(()=>{{
                  done()
                }},2)
              })
              this.taskScheduler.joinqQueue(task, false)
            }
          }
        })
        const theNumberOfAdditions = new Task((done) => { // 添加万能特效图标
          if (dataTransfer(DataKeyType.GAME_TYPE) == GameType.SUBGAME1 && dataTransfer(DataKeyType.INDEXADDFREECOUNT) > 2) {
            this.comp.setokkk(done)
          } else {
            done()
          }
        })
        this.taskScheduler.joinqQueue(theNumberOfAdditions, false)
        const miniGameFlying = new Task((done) => { // 倍数飞行特效 
          if(flicherArr.length>1 ){
            console.log(flicherArr);
            this.comp.multiplier(done)
          }else{
            done()
          }
        })
        this.taskScheduler.joinqQueue(miniGameFlying, false)
        const multiplesOfFlight = new Task((done) => { //小游戏飞行特效
          if(flicherArr.length>1 && dataTransfer(DataKeyType.RATES).length > 0 && dataTransfer(DataKeyType.GAME_TYPE) == GameType.SUBGAME1){
            this.comp.samllMultiplier(done)
          }else{
            done()
          }
        })
        this.taskScheduler.joinqQueue(multiplesOfFlight, false)
        const addFrequency = new Task((done) => {
          // 倍数特效
          this.dispatch(changeMultipleTotal(dataTransfer(DataKeyType.ITEMTOTALMULTIPLIER)))
          //检查添加INDEXADDFREECOUNT
          if (dataTransfer(DataKeyType.GAME_TYPE) == GameType.SUBGAME1) {
            // 更新次数
            this.dispatch(changeMinigameCount(dataTransfer(DataKeyType.INDEXADDFREECOUNT)))
            this.dispatch(updateSubGameTimes(dataTransfer(DataKeyType.SUBGAME_TIMES)))
            this.dispatch(changeGameFreeGametotalMultiplier(dataTransfer(DataKeyType.GAMEFREEGAMETOTALMULTIPLIER)))
            this.comp.scheduleOnce(()=>{
              done()
            },1)
          } else {
            done()
          }
        })
        this.taskScheduler.joinqQueue(addFrequency, false)
        const addGold = new Task((done) => {
          //图标效果执行完之后要执行的任务，检查是否有爆奖
          if (dataTransfer(DataKeyType.GAME_TYPE) === GameType.MAIN) {
            this.dispatch(changeProfit(dataTransfer(DataKeyType.PROFIT_AMOUNT)))
          } else {
            this.dispatch(changeProfit(dataTransfer(DataKeyType.FREE_GAME_AMOUNT)))
          }
          this.comp.scheduleOnce(()=>{
            done()
          },1)
        })
        this.taskScheduler.joinqQueue(addGold, false)
        const showAwardTask = new Task((done) => {
          //图标效果执行完之后要执行的任务，检查是否有爆奖
          this.checkAward(done)
        })
        this.taskScheduler.joinqQueue(showAwardTask, false)
        //是不是切换游戏
        if (gameBoardViewModel.changeGameTypeTask && !gameBoardViewModel.changeGameTypeTask.isExecute) {
          if (this.currGameType === GameType.SUBGAME1 && dataTransfer(DataKeyType.SUBGAME_TIMES) !== 0) {
              //isSCATTER显示
              this.taskScheduler.joinqQueue(new Task((done) => {
                thor_Audio.playOneShot(SoundPathDefine.BELL)
                  this.comp.setokkk(done)
              }))
            //马上执行的游戏类型是小游戏1
            this.taskScheduler.joinqQueue(new Task((done) => {
              if (this.apostille) {
                this.initRollerMap(2)
              }
              thor_Audio.playOneShot(SoundPathDefine.THOR_FREE_DIALOG_WAIT)
              //进小游戏游戏最后更新钱
              this.dispatch(updateBalance(dataTransfer(DataKeyType.BALANCE)))
              const caculateDialog1 = new BaseViewModel<Thor_SmallGame_caculate, CPIState, CPIProps, CPIEvent>('Thor_SmallGame_caculate').mountView(sourceManageSeletor()
                .getFile(PrefabPathDefine.CACULATE).source).appendTo(this.parentNode.parent, { effectType: EffectType.EFFECT1, isModal: true })
                .setProps({ type: 1, total: dataTransfer(DataKeyType.SUBGAME_TIMES), autoLaunchType: this.autoLaunchType })
                .setEvent({
                  killSelfHandler: () => {
                    caculateDialog1.unMount(EffectType.EFFECT1)
                    // 手动切换小游戏
                    this.comp.setProps({ currGameType: 1 })
                    this.dispatch(updateSubGameTimes(dataTransfer(DataKeyType.SUBGAME_TIMES)))
                    thor_Audio.stop()
                    thor_Audio.play(SoundPathDefine.BG_MUSIC_1, true)
                    done()
                  }
                })
            }), false)
          }
          // 主游戏
          if (dataTransfer(DataKeyType.NEXTGAME_TYPE) === GameType.MAIN) {
            this.taskScheduler.joinqQueue(new Task((done) => {
              if (this.apostille) {
                this.initRollerMap(1)
                this.dispatch(updateGameModeType(GameModeType.buyToWin))
              } else {
                this.dispatch(updateGameModeType(GameModeType.normal))
              }
              //小游戏出来前更新钱
              this.dispatch(updateBalance(dataTransfer(DataKeyType.BALANCE)))
              if (dataTransfer(DataKeyType.FREE_GAME_AMOUNT) !== 0) {
                thor_Audio.playOneShot(SoundPathDefine.THOR_FREE_SUMMARY)
                const caculateDialog2 = new BaseViewModel<Thor_SmallGame_caculate, CPIState, CPIProps, CPIEvent>('Thor_SmallGame_caculate').mountView(sourceManageSeletor()
                  .getFile(PrefabPathDefine.CACULATE).source).appendTo(this.parentNode.parent, { effectType: EffectType.EFFECT1, isModal: true })
                  .setProps({ type: 2, total: dataTransfer(DataKeyType.FREE_GAME_AMOUNT), autoLaunchType: this.autoLaunchType })
                  .setEvent({
                    killSelfHandler: () => {
                      this.dispatch(setRollRoundEnd(true))
                      this.comp.setProps({ currGameType: 0 })
                      caculateDialog2.unMount(EffectType.EFFECT1)
                      this.dispatch(changeViewGame(0))
                      thor_Audio.stop()
                      thor_Audio.play(SoundPathDefine.BG_MUSIC_MAIN, true)
                      done()
                    }
                  })
              } else {
                this.comp.setProps({ currGameType: 0 })
                done()
              }
            }))
          }
          //禁用掉主下注按钮
          // 切换场景
          this.taskScheduler.joinqQueue(gameBoardViewModel.changeGameTypeTask)
          this.taskScheduler.joinqQueue(new Task((done) => {
            this.dispatch(setRollRoundEnd(true))
            if (dataTransfer(DataKeyType.NEXTGAME_TYPE) == GameType.SUBGAME1) {
              footerViewModel.manualBetHandler()
            } else {
              this.dispatch(setWaiting(true))
            }
            done()
          }), false)
        } else {
          //不切换游戏
          this.taskScheduler.joinqQueue(new Task((done) => {
            this.dispatch(setRollRoundEnd(true))
            this.dispatch(setWaiting(true))
            if (dataTransfer(DataKeyType.NEXTGAME_TYPE) == GameType.SUBGAME1) {
              footerViewModel.manualBetHandler()
            } 
            if (dataTransfer(DataKeyType.GAME_TYPE) == GameType.MAIN) {
              this.dispatch(updateBalance(dataTransfer(DataKeyType.BALANCE)))
            }
            done()
          }), false)
        }
      },
      // 道具状态
      probabilityDoublingSwitch: (e) => {
        this.dispatch(changeapostille(e))
        this.initRollerMap()
        thor_Audio.playOneShot(SoundPathDefine.BUY_RATE_BTN_CLICK)
        if (e) {
          this.dispatch(updateGameModeType(GameModeType.buyToWin))
        } else {
          this.dispatch(updateGameModeType(GameModeType.normal))
        }
      },
      // 是否加速
      isAccelerate: (e) => {
        if (!e) {
          this.dispatch(setRollSpeed(2))
        } else {
          this.dispatch(setRollSpeed(1))
        }
      },
      buyMiniGames: (str) => {
        thor_Audio.playOneShot(SoundPathDefine.BUY_FREE_BTN)
        new SgBoxViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.SGBOX).source).appendTo(this.parentNode.parent, {
          effectType: EffectType.EFFECT1, isModal: true,
        }).setProps({ miniGameAmount: str, balance: this.balance }).setEvent({
        }).connect()
      }
    })
    this.dispatch(initRollAction(this.rollerMap))
    sktMsgListener.add(SKT_MAG_TYPE.LAUNCHER_BET, "roller", (data, error) => {
      if (error) {
        this.dispatch(addToastAction({ content: error }))
        this.rollerMap.forEach((rollerItem, index) => {
          this.dispatch(setStopRollAction(index, 1))
        })
      } else {
        refreshData(data)
        this.taskScheduler.stopQueue(false)
        if(dataTransfer(DataKeyType.GAME_TYPE) == GameType.MAIN){
          this.dispatch(updateBalance(dataTransfer(DataKeyType.COINSAFTERBETTING)))
        }
        this.dispatch(setIconEffect(IconEffectType.NONE, []))
        this.dispatch(changeViewGame(dataTransfer(DataKeyType.GAME_TYPE)))
        const stopIndex: number[] = dataTransfer(DataKeyType.ROLLER_STOP_INDEX_ID)
        this.rollerMap.forEach((rollerItem, index) => {
          this.dispatch(setStopRollAction(index, stopIndex ? stopIndex[index] : 0))
        })
        let indexAddFreeCount = dataTransfer(DataKeyType.INDEXADDFREECOUNT)
        if (indexAddFreeCount > 2) { // 加次数的时候 先减再加
          this.dispatch(updateSubGameTimes(dataTransfer(DataKeyType.SUBGAME_TIMES) - indexAddFreeCount))
        } else {
          this.dispatch(updateSubGameTimes(dataTransfer(DataKeyType.SUBGAME_TIMES)))
        }
      }
    }, 0)
    this.dispatch(changeProfit(dataTransfer(this.viewGameType === GameType.MAIN ? DataKeyType.PROFIT_AMOUNT : DataKeyType.FREE_GAME_AMOUNT)))
    this.comp.scheduleOnce(()=>{
      this.dispatch(setWaiting(true))
    },1.5)
    footerViewModel.autoLauncherPanel.setLaunchEvent(() => {
      footerViewModel.manualBetHandler()
    })
  }
  public initRollerMap(state?) {
    this.rollerMap = []
    let asp = state
    if (state) {
      asp = state == 1 ? true : false
    } else {
      asp = this.apostille
    }
    config[!asp ? 'iconRollerQueue' : 'rateIconRollerQueue'].forEach((queue, queueIndex) => {
      const isLargeRollGame: boolean = (this.currGameType === GameType.SUBGAME2 && queueIndex === 1)
      const gameOption = isLargeRollGame ? config.largeRollOption : config.normalRollOption
      this.rollerMap.push({
        index: queueIndex,
        iconQueue: queue.map((iconId, index) => {
          const uiData = config[isLargeRollGame ? 'largeIcon' : 'rollerIcon'].find(i => i.id === iconId)
          return {
            iconId,
            queueIndex: index + 1,
            iconEffect: IconEffectType.NONE,
            height: gameOption.singleRollerHeight,
            width: gameOption.singleRollerWidth,
            intervalHeight: gameOption.singleIntervalHeight,
            multiple: [],
            LargeIcon: (this.currGameType === GameType.SUBGAME2 && queueIndex == 1),
            uiData
          }
        }),
        LargeRoller: isLargeRollGame,
        rolling: false,
        speed: gameOption.rollerSpeed,
        speedBackUp: gameOption.rollerSpeed,
        width: gameOption.rollerWidth,
        intervalWidth: gameOption.rollerIntervalWidth,
        stopIconIndex: -1,
        direction: gameOption.direction,
      })
    })
    this.dispatch(initRollAction(this.rollerMap))
  }
  /**检查是否要爆奖，爆什么奖 */
  private checkAward(done: Function) {
    const profitMultiple = dataTransfer(DataKeyType.PROFIT_MULTIPLE)
    const winning = config.winning.find(item => item.minRate <= profitMultiple && profitMultiple < item.maxRate)
    if (winning) {
      sendNativeVibrate(200)
      const winnerDialog = new BaseViewModel<Thor_BigPrize, BPIState, BPIProps, BPIEvent>('Thor_BigPrize').mountView(sourceManageSeletor()
        .getFile(PrefabPathDefine.BIG_PRIZE).source).appendTo(this.parentNode.parent, { effectType: EffectType.EFFECT1, isModal: true })
        .setProps({ winning, glodAmount: dataTransfer(DataKeyType.PROFIT_AMOUNT) })
        .setEvent({
          killSelfHandler: () => {
            winnerDialog.unMount(EffectType.EFFECT1)
            this.comp.scheduleOnce(()=>{
              done()
            },1)
          }
        })
      thor_Audio.playOneShot(SoundPathDefine.OPEN_PRIZE)
    } else {
      done()
    }
  }

  protected unMountCallBack(): void {
    this.taskScheduler.destoryQueue()
    this.comp.rollerViewModelMap.forEach(mv => mv.unMount())
    // this.comp.rollerViewModelMap = []
    this.dispatch(initRollAction([]))
    sktMsgListener.removeById("roller")
    // this.winnerDialog && this.winnerDialog.unMount()
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      this.lastGameType = state.game.currGameType
      this.currGameType = state.game.currGameType
      this.viewGameType = state.game.viewGameType
      this.autoLaunchType = state.game.autoLauncherType
      this.apostille = state.game.apostille
      this.isHasten = state.game.isHasten
      this.balance = state.game.balance
      this.gameFreeGametotalMultiplier = state.game.gameFreeGametotalMultiplier
      return {
        rollerMap: state.roller.rollerMap,
        iconEffectData: state.roller.iconEffectData,
        // jackpotAmount: state.game.jackpotAmount,
        betAmount: state.game.bettingInformation,
        gameMode: state.game.gameMode,
        remainSubGameTimes: state.game.remainSubGameTimes,
        isHasten: state.game.isHasten,
        isRollEnd: state.roller.roundAllEnd,
        minigameCount: state.game.minigameCount,
        gameFreeGametotalMultiplier: state.game.gameFreeGametotalMultiplier
      }
    })
    return this
  }
}

export default RollerPanelViewModel
