import { Label, Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { GodWealth_rollerPanel, IProps, IEvent } from "../components/GodWealth_rollerPanel"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
import { AutoLauncherType, DialogType, DirectionType, GameType, IconEffectType, RollerType, SMALLGAME } from "../type"
import config from "../config"
import { beginRollAction, setStopRollAction, initRollAction, endRollingAction, setIconEffect, setRollRoundEnd, setRollSpeed, setIconBaoHeEffect, setIconFreeGameEffect } from "../store/actions/roller"
import { SKT_MAG_TYPE, sktMsgListener } from "../socketConnect"
import dataTransfer, { refreshData, DataKeyType, setData } from "../dataTransfer"
import TaskScheduler, { Task, TaskSchedulerDefault } from "../../../utils/TaskScheduler"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { footerViewModel, godWealth_Audio, gameBoardViewModel, sourceManageSeletor, playShellEnd, getCoin, playLing } from "../index"
import { EffectType } from "../../../utils/NodeIOEffect"
import { changeGame, changeProfit, setFreeGameId, setFreeGameRate, setSubGameTimes, setWaiting, updateBalance, updateJackpotAmount, updateSubGameTimes } from "../store/actions/game"
import BaseViewModel from "../../../common/viewModel/BaseViewModel"
import { GodWealth_dialogWin, IState as BPIState, IProps as BPIProps, IEvent as BPIEvent } from "../components/GodWealth_dialogWin"
import { SoundPathDefine } from "../sourceDefine/soundDefine"
import { addToastAction } from "../../../hall/store/actions/baseBoard"
// import SgChooseViewModel from "./SgChooseViewModel"
import { ChooseSmallGame } from "./GameBoardViewModel"
import { sendNativeVibrate } from "../../../common/bridge"
import { GodWealth_small_win, IState as SWIState, IProps as SWIProps, IEvent as SWIEvent } from "../components/GodWealth_small_win"


// export let chooseSmallGame:SgChooseViewModel
@StoreInject(getStore())
class RollerPanelViewModel extends ViewModel<GodWealth_rollerPanel, IProps, IEvent> {
  constructor() {
    super('GodWealth_rollerPanel')
  }
  private lastGameType: GameType
  private gameType: GameType
  private viewGameType: GameType
  public rollerMap: RollerType[] = []
  public taskScheduler: TaskScheduler = new TaskScheduler()
  private autoLaunchType: AutoLauncherType;
  private isWining: boolean;
  private freeGameRate: number;
  // private winnerDialog: BaseViewModel<Fruit777_BigPrize, BPIState, BPIProps, BPIEvent>

  private stopRollerIndex: number = -1
  protected begin() {
    this.dispatch(setRollRoundEnd(true))
    
    config[ 'iconRollerQueue'].forEach((queue, queueIndex) => {
      const gameOption = config.normalRollOption
      this.rollerMap.push({
        index: queueIndex,
        iconQueue: queue.map((iconId, index) => {
          const uiData = config['rollerIcon'].find(i => i.id === iconId)
          return {
            iconId,
            queueIndex: index + 1,
            iconEffect: IconEffectType.NONE,
            height: gameOption.singleRollerHeight,
            width: gameOption.singleRollerWidth,
            intervalHeight: gameOption.singleIntervalHeight,
            // LargeIcon: (this.gameType === GameType.SUBGAME1 && queueIndex == 1),
            uiData
          }
        }),
        // LargeRoller: isLargeRollGame,
        rolling: false,
        speed: gameOption.rollerSpeed,
        speedBackUp: gameOption.rollerSpeed,
        width: gameOption.rollerWidth,
        intervalWidth: gameOption.rollerIntervalWidth,
        stopIconIndex: -1,
        direction: gameOption.direction
      })
    })
    // if (this.viewGameType === GameType.SUBGAME2) {
    //   //马上执行的游戏类型是小游戏2
    //   this.dispatch(setSubGameTimes(dataTransfer(DataKeyType.SUBGAME_TIMES)))
    //   this.dispatch(updateSubGameTimes(dataTransfer(DataKeyType.SUBGAME_TIMES)))
    // }
    this.setEvent({
      panelRollEnd: (rollerIndex) => {
        // console.log('rollerIndex', rollerIndex)
        this.stopRollerIndex = rollerIndex
      },
      /**滚动结束时执行 */
      allRollStop: () => {
        // console.log("allRollStop",GameType.MAIN)
        godWealth_Audio.longStop()
        playShellEnd()
        if (this.viewGameType === GameType.MAIN) {
          this.dispatch(changeProfit(dataTransfer(DataKeyType.PROFIT_AMOUNT)))//更新盈利
        } else {//小游戏
          this.dispatch(changeProfit(dataTransfer(DataKeyType.FREE_GAME_AMOUNT)))//更新盈亏
        }
        this.dispatch(updateSubGameTimes(dataTransfer(DataKeyType.SUBGAME_TIMES)))//小游戏剩余次数
        // this.dispatch(setSubGameTimes(dataTransfer(DataKeyType.SUBGAME_ALL_TIMES)))//小游戏总次数 总次数会发生变化
        const flicherArr: number[][][] = dataTransfer(DataKeyType.ICON_EFFECT_DATA);//获取闪动数据
        const flicherBaoHeArr: number[][] = dataTransfer(DataKeyType.FIXED_CHESSBOARD_ICON);//获取宝盒数据
        const freeGameArr: number[][][] = dataTransfer(DataKeyType.FREE_GAME_POSITION);//小游戏财神位置
        const allFlicherTask = new Task((done) => {
          if (flicherArr.length >= 1) {
            let arrItemArr = [];
            flicherArr.forEach((arrItem, index) => arrItemArr.push(...arrItem));
            this.dispatch(setIconEffect(IconEffectType.NORMAIL, arrItemArr));
            this.dispatch(setFreeGameRate(this.freeGameRate));
            if (!arrItemArr.length) {
              done()
            } else {
              this.comp.scheduleOnce(()=>done(), 2)
              //闪烁2秒钟就结束
              // window.setTimeout(() => done(), 2000)
            }
          } else {
            done()
          }
        }).subscribeDone(`total`, () => {
          this.dispatch(setIconEffect(IconEffectType.NONE, []));
        })
        const flicherBaoHeTask = new Task((done) => {
          if (flicherBaoHeArr.length > 0) {
            this.dispatch(setIconBaoHeEffect(IconEffectType.BAOHE, flicherBaoHeArr));
            if (!flicherBaoHeArr.length || this.gameType !== GameType.SUBGAME2) {
              done()
            } else {
              //闪烁2秒钟就结束
              this.comp.scheduleOnce(()=>done(), 2)
              // window.setTimeout(() => done(), 2000)
            }
          } else {
            done()
          }
        }).subscribeDone("total", () => {
          this.dispatch(setIconFreeGameEffect(IconEffectType.NONE, []));     
        })

        const freeGameTask = new Task((done) => {
          if (freeGameArr.length > 0) {
            let FreeGameItemArr = [];
            freeGameArr.forEach((arrItem, index) => FreeGameItemArr.push(...arrItem));
            this.dispatch(setIconFreeGameEffect(IconEffectType.FREEEGAMEZ, FreeGameItemArr));
            if (!FreeGameItemArr.length) {
              done()
            } else {
              //闪烁2秒钟就结束
              this.comp.scheduleOnce(()=>done(), 2)

              // window.setTimeout(() => done(), 2000)
            }
          } else {
            done()
          }
        }).subscribeDone("total", () => {
          this.dispatch(setIconFreeGameEffect(IconEffectType.NONE, []));     
        })
        this.taskScheduler.joinqQueue(allFlicherTask).joinqQueue(freeGameTask)
        this.taskScheduler.joinqQueue(flicherBaoHeTask);

      

        const showAwardTask = new Task((done) => {
          //图标效果执行完之后要执行的任务，检查是否有爆奖 弹jackpot框
          this.checkAward(done)
        }).subscribeDone("total", () => {
          if (this.viewGameType === GameType.MAIN) {
            this.dispatch(updateBalance(dataTransfer(DataKeyType.BALANCE))); //更新用户金币值
          }
          this.dispatch(setRollRoundEnd(true))//是否爆浆完，控制下注按钮;
        })
        this.taskScheduler.joinqQueue(showAwardTask, false);
        // this.taskScheduler.joinqQueue(freeGameTask)

        //游戏不跳转，才显示每一条线，并且没有自动,11/6日：如果处于加速模式，也不显示每一个闪动了
        if (dataTransfer(DataKeyType.GAME_TYPE) === this.viewGameType && this.autoLaunchType === AutoLauncherType.NONE && this.comp.props.stopMode === 'jump') {
          //将闪动加入任务调度器队列
          flicherArr.forEach((arrItem, index) => {
            const task = new Task((done) => {
              this.dispatch(setIconEffect(IconEffectType.NORMAIL, arrItem))
              //闪烁2秒钟就结束
              this.comp.scheduleOnce(()=>done(), 1.5)

              // window.setTimeout(() => done(), 1500)
            }).subscribeDone(`${index}`, () => {
              this.dispatch(setIconEffect(IconEffectType.NONE, []))
            })
            this.taskScheduler.joinqQueue(task, false)
          })
        }

        if (gameBoardViewModel.changeGameTypeTask && !gameBoardViewModel.changeGameTypeTask.isExecute) {
          this.gameType = dataTransfer(DataKeyType.GAME_TYPE);
          //切换游戏
          if (this.gameType === GameType.SUBGAME1) {
            this.taskScheduler.joinqQueue(new Task((done) => {
              const winning = config.winning[config.winning.length - 1]
              const winnerDialog= this.showSmallWin(done)

                winnerDialog.comp.getSpinsNode().active = true;
              
            }))
          } else if (this.gameType === GameType.SUBGAME2) {
            this.taskScheduler.joinqQueue(new Task((done) => {
              const winnerDialog = this.showSmallWin(done);
              winnerDialog.comp.getBaoHeBoxNode().active = true;
              
            }))
           
          }
          playLing()
            //禁用掉主下注按钮
          this.dispatch(setRollRoundEnd(false))
          this.taskScheduler.joinqQueue(gameBoardViewModel.changeGameTypeTask)
        } else {
          //不切换游戏
          this.taskScheduler.joinqQueue(new Task((done) => {
            this.dispatch(setWaiting(true))
            done()
          }))
        }
      }

    })
    // this.setProps({ rollerMap })
    this.dispatch(initRollAction(this.rollerMap))//更新每个滑槽图标信息配置

    if (this.autoLaunchType === AutoLauncherType.LAMIT_FAST) {
      this.dispatch(setRollSpeed(1.5))
    }

    const _taskScheduler = new TaskScheduler()
    sktMsgListener.add(SKT_MAG_TYPE.LAUNCHER_BET, "roller", (data, error) => {
      if (error) {
        this.dispatch(addToastAction({ content: error }))
        this.rollerMap.forEach((rollerItem, index) => {
          this.dispatch(setStopRollAction(index, 1))
        })
      } else {
        console.log("refreshData(data)", data);
        refreshData(data)
        setData("gameType", data.dl.si[0].gameType)
        this.taskScheduler.stopQueue(false)
        this.dispatch(setIconEffect(IconEffectType.NONE, []))
        const stopIndex: number[] = dataTransfer(DataKeyType.ROLLER_STOP_INDEX_ID)
        this.stopRollerIndex = -1
        if (dataTransfer(DataKeyType.GAME_TYPE) === GameType.MAIN) {
          this.dispatch(updateBalance(dataTransfer(DataKeyType.COINS_AFTER_BETTING)));
        }
        this.rollerMap.forEach((rollerItem, index) => {
          //顺序停止，stopMode=index的时候不使用这种方案，因为一轮可能就会花不少时间，所以最好不用这种
          if (this.comp.props.stopMode === 'jump' && this.comp.props.isSortStop) {
            _taskScheduler.joinqQueue(new Task((done) => {
              this.dispatch(setStopRollAction(index, stopIndex ? stopIndex[index] : 0))
              if (index < 5) {
                const t = window.setInterval(() => {
                  if (this.stopRollerIndex === index) {
                    window.clearInterval(t)
                    done()
                  }
                }, 50)
              } else {
                done()
              }
            }))
          } else {
            this.dispatch(setStopRollAction(index, stopIndex ? stopIndex[index] : 0))
          }
        })
      }
    }, 0)

    // this.dispatch(changeProfit(dataTransfer(this.viewGameType === GameType.MAIN ? DataKeyType.PROFIT_AMOUNT : DataKeyType.FREE_GAME_AMOUNT)))
    this.dispatch(changeProfit(0))

    this.comp.scheduleOnce(() => {
      this.dispatch(setWaiting(true))//是否等待人工操作
    }, 1.5)

    // window.setTimeout(() => {
    //   // console.log("this.isWaiting setWaiting");
    //   this.dispatch(setWaiting(true))//是否等待人工操作
    // }, 1500)
    /**自动运行的函数 */
    footerViewModel.autoLauncherPanel.setLaunchEvent(() => {
      footerViewModel.manualBetHandler()
    })
  }
  /**检查是否要爆奖，爆什么奖 */
  private checkAward(done: Function) {
    /**盈利值 */
    const profitMultiple = dataTransfer(DataKeyType.PROFIT_MULTIPLE);
    const winning = config.winning.find(item => item.minRate <= profitMultiple && profitMultiple <= item.maxRate)//判断使用哪个dialog
    if (winning && this.viewGameType !== GameType.SUBGAME2 && this.gameType !== GameType.SUBGAME2) {
      sendNativeVibrate(200);
      this.isWining = true;
      const winnerDialog = new BaseViewModel<GodWealth_dialogWin, BPIState, BPIProps, BPIEvent>('GodWealth_dialogWin').mountView(sourceManageSeletor()
        .getFile(PrefabPathDefine.DIALOG_WIN).source).appendTo(this.parentNode, { effectType: EffectType.EFFECT1, isModal: true })
        .setProps({ winning, glodAmount: dataTransfer(DataKeyType.PROFIT_AMOUNT) })
        .setEvent({
          killSelfHandler: () => {
            winnerDialog.unMount(EffectType.EFFECT1)
            done()
          }
        })
        getCoin()
    } else {//未爆奖
      done()
    }
  }

  /**进入小游戏后爆奖 */
  public showSmallWin(done?: Function) {
    sendNativeVibrate(200);
    const winnerDialog = new BaseViewModel<GodWealth_small_win, SWIState, SWIProps, SWIEvent>('GodWealth_small_win').mountView(sourceManageSeletor()
    .getFile(PrefabPathDefine.SMALL_RESULT).source).appendTo(this.parentNode.parent, { effectType: EffectType.EFFECT1, isModal: true })
    .setProps({ spinsNum: dataTransfer(DataKeyType.SUBGAME_TIMES),winNum:dataTransfer(DataKeyType.FREE_GAME_AMOUNT)})
    .setEvent({
      killSelfHandler: () => {
        winnerDialog.unMount(EffectType.EFFECT1).then(() => {          
          gameBoardViewModel.createFlyBg()
        })
        done && done()
      }
    })
    this.dispatch(updateBalance(dataTransfer(DataKeyType.BALANCE))); //更新用户金币值
    this.comp.scheduleOnce(() => {
      this.dispatch(setWaiting(true))//是否等待人工操作
    }, 3.5)
    // window.setTimeout(() => {
    //   this.dispatch(setWaiting(true))
    // },3500)

    return winnerDialog
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
      this.lastGameType = state.game.lastGameType
      this.gameType = state.game.currGameType
      this.viewGameType = state.game.viewGameType
      this.autoLaunchType = state.game.autoLauncherType
      return {
        rollerMap: state.roller.rollerMap,
        iconEffectData: state.roller.iconEffectData,
        jackpotAmount: state.game.jackpotAmount,
        stopMode: state.game.stopMode,
        isSortStop: state.game.isSortStop,
        iconBaoHeEffectData: state.roller.iconBaoHeEffectData,
        iconFreeGameEffectData: state.roller.iconFreeGameEffectData,
        freeGameRate: state.game.freeGameRate,
        currGameType:state.game.currGameType,
        viewGameType : state.game.viewGameType,
      }
    })
    return this
  }
}

export default RollerPanelViewModel