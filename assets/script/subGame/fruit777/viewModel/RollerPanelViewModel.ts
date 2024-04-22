import { Node, Prefab } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Fruit777_RollerPanel, IProps, IEvent } from "../components/Fruit777_RollerPanel"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
import { AutoLauncherType, DialogType, DirectionType, GameType, IconEffectType, RollerType } from "../type"
import config from "../config"
import { beginRollAction, setStopRollAction, initRollAction, endRollingAction, setIconEffect, setRollRoundEnd, setRollSpeed } from "../store/actions/roller"
import { SKT_MAG_TYPE, fruit777WebSocketDriver } from "../socketConnect"
import dataTransfer, { refreshData, DataKeyType } from "../dataTransfer"
import TaskScheduler, { Task, TaskSchedulerDefault } from "../../../utils/TaskScheduler"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { footerViewModel, fruit777_Audio, gameBoardViewModel, sourceManageSeletor } from "../index"
import { EffectType } from "../../../utils/NodeIOEffect"
import { changeProfit, setIsBeginStop, setSubGameTimes, setWaiting, updateBalance, updateJackpotAmount, updateSubGameTimes } from "../store/actions/game"
import BaseViewModel from "../../../common/viewModel/BaseViewModel"
import { Fruit777_BigPrize, IState as BPIState, IProps as BPIProps, IEvent as BPIEvent } from "../components/Fruit777_BigPrize"
import { SoundPathDefine } from "../sourceDefine/soundDefine"
import { addToastAction } from "../../../hall/store/actions/baseBoard"
import { sendNativeVibrate } from "../../../common/bridge"
import { global, lang } from "../../../hall/index"

@StoreInject(getStore())
class RollerPanelViewModel extends ViewModel<Fruit777_RollerPanel, IProps, IEvent> {
  constructor() {
    super('Fruit777_RollerPanel')
    // this.id = parseInt((Math.random() * 100000000) + '')
  }
  private lastGameType: GameType
  private gameType: GameType
  private viewGameType: GameType
  public rollerMap: RollerType[] = []
  public taskScheduler: TaskScheduler = new TaskScheduler()
  private autoLaunchType: AutoLauncherType
  private winnerDialog: BaseViewModel<Fruit777_BigPrize, BPIState, BPIProps, BPIEvent>

  private stopRollerIndex: number = -1
  // private id: number
  protected begin() {
    // const rollerMap: RollerType[] = []
    let isInitFaild = false
    this.dispatch(setRollRoundEnd(true))
    config[this.gameType === GameType.MAIN ? 'iconRollerQueue' : 'largeIconRollerQueue'].forEach((queue, queueIndex) => {
      const isLargeRollGame: boolean = (this.gameType === GameType.SUBGAME2 && queueIndex === 1)
      const gameOption = isLargeRollGame ? config.largeRollOption : config.normalRollOption
      this.rollerMap.push({
        index: queueIndex,
        iconQueue: queue.map((iconId, index) => {
          const uiData = config[isLargeRollGame ? 'largeIcon' : 'rollerIcon'].find(i => i.id === iconId)
          !uiData && (isInitFaild = true)
          return {
            iconId,
            queueIndex: index + 1,
            iconEffect: IconEffectType.NONE,
            height: gameOption.singleRollerHeight,
            width: gameOption.singleRollerWidth,
            intervalHeight: gameOption.singleIntervalHeight,
            LargeIcon: (this.gameType === GameType.SUBGAME2 && queueIndex == 1),
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
        direction: gameOption.direction
      })
    })
    if (isInitFaild) {
      global.closeSubGame({
        confirmContent: (lang.write(k => k.HallModule.LoadFaild))
      })
      return
    }
    if (this.viewGameType === GameType.SUBGAME2) {
      //马上执行的游戏类型是小游戏2
      this.dispatch(setSubGameTimes(dataTransfer(DataKeyType.SUBGAME_TIMES)))
      this.dispatch(updateSubGameTimes(dataTransfer(DataKeyType.SUBGAME_TIMES)))
    }
    this.setEvent({
      panelRollEnd: (rollerIndex) => {
        // console.log('rollerIndex', rollerIndex)
        this.stopRollerIndex = rollerIndex
      },
      allRollStop: () => {
        // console.log("allRollStop")

        this.dispatch(setRollRoundEnd(true))
        if (this.viewGameType === GameType.MAIN) {
          this.dispatch(changeProfit(dataTransfer(DataKeyType.PROFIT_AMOUNT)))
        } else {
          this.dispatch(changeProfit(dataTransfer(DataKeyType.FREE_GAME_AMOUNT)))
        }
        // console.log(this.lastGameType, this.gameType)
        this.dispatch(updateBalance(dataTransfer(DataKeyType.BALANCE)))
        this.dispatch(updateSubGameTimes(dataTransfer(DataKeyType.SUBGAME_TIMES)))
        const flicherArr: number[][][] = dataTransfer(DataKeyType.ICON_EFFECT_DATA)
        // flicherArr.length && fruit777_Audio.playOneShot(SoundPathDefine.FRUIT_SHELL)
        const allFlicherTask = new Task((done) => {
          if (flicherArr.length >= 1) {
            fruit777_Audio.playOneShot(SoundPathDefine.GET_COIN)
            let arrItemArr = []
            flicherArr.forEach((arrItem, index) => arrItemArr.push(...arrItem))
            // console.log('arrItemArr', arrItemArr)
            this.dispatch(setIconEffect(IconEffectType.NORMAIL, arrItemArr))
            // this.dispatch(setIconEffect(IconEffectType.NORMAIL, [[0, 2], [1, 0], [2, 0]]))
            if (!arrItemArr.length) {
              done()
            } else {
              //闪烁2秒钟就结束
              this.comp.scheduleOnce(() => done(), 2)
            }
          } else {
            fruit777_Audio.playOneShot(SoundPathDefine.ROLLER_END)
            done()
          }
        }).subscribeDone(`total`, () => {
          this.dispatch(setIconEffect(IconEffectType.NONE, []))
        })
        this.taskScheduler && this.taskScheduler.joinQueue(allFlicherTask)

        //游戏不跳转，才显示每一条线，并且没有自动,11/6日：如果处于加速模式，也不显示每一个闪动了
        if (dataTransfer(DataKeyType.GAME_TYPE) === this.viewGameType && this.autoLaunchType === AutoLauncherType.NONE && this.comp.props.isSortStop) {
          //将闪动加入任务调度器队列
          flicherArr.forEach((arrItem, index) => {
            const task = new Task((done) => {
              this.dispatch(setIconEffect(IconEffectType.NORMAIL, arrItem))
              //闪烁2秒钟就结束
              this.comp.scheduleOnce(() => done(), 1.5)
            }).subscribeDone(`${index}`, () => {
              this.dispatch(setIconEffect(IconEffectType.NONE, []))
            })
            this.taskScheduler && this.taskScheduler.joinQueue(task, false)
          })
        }
        const showAwardTask = new Task((done) => {
          //图标效果执行完之后要执行的任务，检查是否有爆奖
          this.checkAward(done)
        })
        this.taskScheduler && this.taskScheduler.joinQueue(showAwardTask, false)

        if (gameBoardViewModel.changeGameTypeTask && !gameBoardViewModel.changeGameTypeTask.isExecute) {
          //切换游戏
          if (this.viewGameType === GameType.SUBGAME2 && dataTransfer(DataKeyType.FREE_GAME_AMOUNT) !== 0) {
            // 大滑槽小游戏结束之后要开西瓜
            this.taskScheduler && this.taskScheduler.joinQueue(new Task(async (done) => {
              //大滑槽小游戏，要开西瓜
              // fruit777_Audio.playOneShot(SoundPathDefine.OPEN_WIN_END)
              fruit777_Audio.playOneShot(SoundPathDefine.FRUIT_SHELL)
              const winning = config.winning[config.winning.length - 1]
              this.winnerDialog = new BaseViewModel<Fruit777_BigPrize, BPIState, BPIProps, BPIEvent>('Fruit777_BigPrize').mountView(
                (await sourceManageSeletor().getFileAsync(PrefabPathDefine._BIG_PRIZE, Prefab)).source).appendTo(this.parentNode, { effectType: EffectType.EFFECT1, isModal: true })
                .setProps({ winning, glodAmount: dataTransfer(DataKeyType.FREE_GAME_AMOUNT) })
                .setEvent({
                  killSelfHandler: () => {
                    this.winnerDialog.unMount(EffectType.EFFECT1)
                    done()
                  }
                })
            }))
          }
          // else if (this.gameType === GameType.SUBGAME2) {
          //   //马上执行的游戏类型是小游戏2
          //   this.taskScheduler.joinQueue(new Task((done) => {
          //     this.dispatch(setSubGameTimes(dataTransfer(DataKeyType.SUBGAME_TIMES)))
          //     done()
          //   }))
          // }
          //禁用掉主下注按钮
          this.dispatch(setRollRoundEnd(false))
          this.taskScheduler && this.taskScheduler.joinQueue(gameBoardViewModel.changeGameTypeTask)
        } else {
          //不切换游戏
          this.taskScheduler && this.taskScheduler.joinQueue(new Task((done) => {
            this.dispatch(setWaiting(true))
            done()
          }))
        }
      }
    })
    // this.setProps({ rollerMap })
    this.dispatch(initRollAction(this.rollerMap))
    if (this.autoLaunchType === AutoLauncherType.LAMIT_FAST) {
      this.dispatch(setRollSpeed(1.5))
    }
    const _taskScheduler = new TaskScheduler()
    fruit777WebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.LAUNCHER_BET, "roller", (data, error) => {
      if (error) {
        global.closeSubGame({ confirmContent: lang.write(k => k.WebSocketModule.ConfigGameFaild) + ':' + error })
      } else {
        try {
          refreshData(data)
          this.taskScheduler.stopQueue(false)
          this.dispatch(setIconEffect(IconEffectType.NONE, []))
          const stopIndex: number[] = dataTransfer(DataKeyType.ROLLER_STOP_INDEX_ID)
          this.stopRollerIndex = -1
          this.comp.scheduleOnce(() => {
            this.dispatch(setIsBeginStop(true))
            this.rollerMap.forEach((rollerItem, index) => {
              //顺序停止，stopMode=index的时候不使用这种方案，因为一轮可能就会花不少时间，所以最好不用这种
              if (this.comp.props.stopMode === 'jump' && this.comp.props.isSortStop && !footerViewModel.comp.enableAheadStop) {
                _taskScheduler.joinQueue(new Task((done) => {
                  this.dispatch(setStopRollAction(index, stopIndex ? stopIndex[index] : 0))
                  if (index < 5) {
                    window.setTimeout(() => {
                      done()
                    }, 200)
                  } else {
                    done()
                  }
                }))
              } else {
                this.dispatch(setStopRollAction(index, stopIndex ? stopIndex[index] : 0))
              }
            })
          }, this.comp.props.isSortStop ? 0.5 : 0.05)
        } catch (e) {
          this.dispatch(addToastAction({ content: e }))
          this.rollerMap.forEach((rollerItem, index) => {
            this.dispatch(setStopRollAction(index, 1))
          })
        }
      }
    }, 0)
    this.dispatch(changeProfit(dataTransfer(this.viewGameType === GameType.MAIN ? DataKeyType.PROFIT_AMOUNT : DataKeyType.FREE_GAME_AMOUNT)))
    this.comp.scheduleOnce(() => {
      this.dispatch(setWaiting(true))
    }, 1.5)
    footerViewModel.autoLauncherPanel.setLaunchEvent(() => {
      footerViewModel.manualBetHandler()
    })
  }
  /**检查是否要爆奖，爆什么奖 */
  private async checkAward(done: Function) {
    const profitMultiple = dataTransfer(DataKeyType.PROFIT_MULTIPLE)
    const winning = config.winning.find(item => item.minRate <= profitMultiple && profitMultiple < item.maxRate)
    if (winning) {
      sendNativeVibrate(200)
      const winnerDialog = new BaseViewModel<Fruit777_BigPrize, BPIState, BPIProps, BPIEvent>('Fruit777_BigPrize').mountView(
        (await sourceManageSeletor().getFileAsync(PrefabPathDefine._BIG_PRIZE, Prefab)).source).appendTo(this.parentNode, { effectType: EffectType.EFFECT1, isModal: true })
        .setProps({ winning, glodAmount: dataTransfer(this.viewGameType === GameType.MAIN ? DataKeyType.PROFIT_AMOUNT : DataKeyType.FREE_GAME_AMOUNT) })
        .setEvent({
          killSelfHandler: () => {
            winnerDialog.unMount(EffectType.EFFECT1)
            done()
          }
        })
      fruit777_Audio.playOneShot(SoundPathDefine.OPEN_PRIZE)
    } else {
      done()
    }
  }

  protected unMountCallBack(): void {
    this.taskScheduler.destoryQueue()
    this.comp.rollerViewModelMap && this.comp.rollerViewModelMap.forEach(mv => mv.unMount())
    // this.comp.rollerViewModelMap = []
    this.dispatch(initRollAction([]))
    fruit777WebSocketDriver.sktMsgListener.removeById("roller")
    // this.winnerDialog && this.winnerDialog.unMount()
  }
  /**按照上次的位置停止 */
  public stopForLast() {
    const stopIndex: number[] = dataTransfer(DataKeyType.ROLLER_STOP_INDEX_ID)
    this.rollerMap.forEach((rollerItem, index) => {
      this.dispatch(setStopRollAction(index, stopIndex ? stopIndex[index] : 0))
    })
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      this.lastGameType = state.game.lastGameType
      this.gameType = state.game.currGameType
      this.viewGameType = state.game.viewGameType
      this.autoLaunchType = state.game.autoLauncherType
      return {
        rollerMap: state.roller.rollerMap,
        iconEffectData: state.roller.iconEffectData,
        jackpotAmount: state.game.jackpotAmount,
        stopMode: state.game.stopMode,
        isSortStop: state.game.isSortStop
      }
    })
    return this
  }
}

export default RollerPanelViewModel