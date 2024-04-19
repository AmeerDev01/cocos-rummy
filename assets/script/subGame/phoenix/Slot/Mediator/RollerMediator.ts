import { find, Node, Prefab } from "cc";
import { INotification } from "../../Framework/interfaces/INotification";
import { CommandDefine } from "../Const/CommandDefine";
import { PrefabDefine } from "../Const/PrefabDefine";
import BaseMediator from "./BaseMediator";
import { IlistTypeHander } from "../types/IlistTypeHander";
import { ISourceFile } from "../types/ISourceFile";
import { phoenix_RollerPanel } from "../Component/phoenix_RollerPanel";
import { phoenix_SlotPanel } from "../Component/phoenix_SlotPanel";
import { BgMediatorConst } from "./BgMediator";
import { BgCommandConst } from "../Command/BgCommand";
import { getBgProxy, getSlotProxy, getSocketProxy } from "../phoenix_utils";
import { goldState } from "../Proxy/SocketProxy";
import config from "../phoenix_config";
import { ApplicationGlobal } from "../Const/ApplicationGlobal";
import { AudioManager, SceneBgMusic, SoundList } from "../Managr/AudioManager";
import TaskScheduler, { Task } from "../../../../utils/TaskScheduler";
import { SubGameType } from "../Proxy/SocketProxy";
import { AutoLaunchType } from "../Repositories/BgRepository";
import { ROLL_TIME } from "../../../../utils/SlotSpeedConfig";
export enum RollerMediatorConst {
    /**初始化滑槽面板 */
    INIT_ROLLER_PANEL = "initRollerPanel",
    /**卸载滑槽游戏面板 */
    UNINSTALL_ROLLER_PANEL = "uninstallRollerPanel",
    /**开始滑动 */
    BEGIN_ROLL = "beginRoll",
    /**结束滑动 */
    END_ROLL = "endRoll",
    /* 闪动停止*/
    FORCE_STOP = 'forceStop',
    /*更新状态游戏*/
    REMOVE_THECHEST_LAYER = 'removeThechestLayer',
    /*更新mj*/
    UPDATE_JACKPOT = 'update_jackpot',
    UPDATE_JACKPOT_TOTAL = "UPDATE_JACKPOT_TOTAL",
    // 更换插槽图片
    REPLACETHESLOTBACKGROUND = 'replacetheslotbackground',
    // 隐藏插槽
    THESLOTISHIDDEN = 'theslotishidden',
}

export default class RollerMediator extends BaseMediator {
    public taskScheduler: TaskScheduler = new TaskScheduler()
    public sourceMap: Array<ISourceFile> = [
        {
            key: 'slotPanel',
            path: PrefabDefine.SLOT_PANEL,
            sourceType: Prefab,
            source: null
        }
    ]
    private stopRollHandle;
    private stopTimeId;
    protected listNotificationConst: Array<IlistTypeHander<RollerMediator>> = [
        {
            name: RollerMediatorConst.INIT_ROLLER_PANEL,
            handler(notification: INotification) {
                const { gameType, freeGameCount } = notification.getBody() || {}
                //在初始化界面之前要初始化数据 'iconRollerQueue' | 'largeIconRollerQueue'
                const _gameRunner: SubGameType = gameType || getSocketProxy().getTransferGameInfo().gameType()
                this.init();
                //getBgProxy().setDisable(false)
                // window.setTimeout(() => {
                //     // 可能有动画
                //     this.sendNotification(CommandDefine.BG, {}, BgCommandConst.AUTO_LAUNCH)
                // }, 2500)

                if (gameType === 1) {
                    if (freeGameCount === 0) {
                        this.sendNotification(RollerMediatorConst.THESLOTISHIDDEN, { subGameType: SubGameType.MAIN, state: true })
                        this.sendNotification(BgMediatorConst.PHOENIX_SGCHOOSE)
                        this.sendNotification(BgMediatorConst.CHANGE_BG, { gameType: SubGameType.MAIN })
                    } else {
                        this.sendNotification(BgMediatorConst.CHANGE_BG, { gameType: _gameRunner })
                    }
                    AudioManager.getInstance().playMusic(SceneBgMusic.gameBg, true);
                } else {
                    AudioManager.getInstance().playMusic(SceneBgMusic.mainBg, true);
                    this.sendNotification(BgMediatorConst.CHANGE_BG, { gameType: _gameRunner })
                }
            }
        },
        {
            name: RollerMediatorConst.REMOVE_THECHEST_LAYER,
            handler(notification: INotification) {
                let { iconStay } = notification.getBody()
                const rollerComp = (<phoenix_RollerPanel>this.wrapView.getChildByName("slotListPanel").getComponent("phoenix_RollerPanel"));
                rollerComp.togglesALLLayer(iconStay === 1)
            }
        },
        {
            name: RollerMediatorConst.REPLACETHESLOTBACKGROUND,
            handler(notification: INotification) {
                let { state } = notification.getBody()
                const slotPanel = (<phoenix_SlotPanel>this.wrapView?.getComponent("phoenix_SlotPanel"))
                slotPanel.isBgShow(state)
            }
        },
        {
            name: RollerMediatorConst.THESLOTISHIDDEN,
            handler(notification: INotification) {
                let { subGameType, state, done, isSlow } = notification.getBody()
                const slotPanel = (<phoenix_SlotPanel>this.wrapView.getComponent("phoenix_SlotPanel"))
                // slotPanel.lostHidden(state)
                if (state) {
                    slotPanel.hideSlot(subGameType === SubGameType.MAIN, isSlow, done);
                } else {
                    slotPanel.showSlot(subGameType === SubGameType.MAIN, isSlow, done);
                }
            }
        },
        {
            name: RollerMediatorConst.BEGIN_ROLL,
            handler(notification: INotification) {
                const { stopIndex, targetList, dockIocn } = notification.getBody();
                // console.log('BEGIN_ROLL',notification.getBody())
                const rollerComp = (<phoenix_RollerPanel>this.wrapView.getChildByName("slotListPanel").getComponent("phoenix_RollerPanel"));
                rollerComp.startAllRoll(stopIndex, getBgProxy().isSpeed());
                rollerComp.iconDock('coord', dockIocn)
                getBgProxy().setDisable(true)
                this.taskScheduler.stopQueue(false)
                //闪动图标
                let i = 0

                const finalEnd = () => {
                    // 最后闪动完成之后执行下一步的动作
                    const fbp = getBgProxy();
                    const nextGame = fbp.getIsChangeGameRunning();
                    const win = getSocketProxy().getTransferGameInfo().getFreeGameAmount()

                    // 如果是从小游戏切换到主游戏就展示结算面板
                    if (nextGame !== -1 && nextGame === SubGameType.MAIN) {
                        this.taskScheduler.joinqQueue(new Task(done => {
                            this.sendNotification(BgMediatorConst.SHOW_SMALL_GAME_RESULT, { win, done });
                        })).joinqQueue(new Task(done => {
                            this.sendNotification(CommandDefine.BG, {}, BgCommandConst.GAME_TYPE_CHANGE);
                            this.sendNotification(RollerMediatorConst.THESLOTISHIDDEN, { subGameType: SubGameType.MAIN, state: false, done })
                            this.sendNotification(BgMediatorConst.TOGGLETHESTARTBUTTON, { state: true });
                            this.autoLaunch();
                        }));
                    } else {
                        this.sendNotification(CommandDefine.BG, {}, BgCommandConst.GAME_TYPE_CHANGE);
                        this.sendNotification(BgMediatorConst.TOGGLETHESTARTBUTTON, { state: true });
                        if (nextGame === -1) {
                            this.autoLaunch();
                        }
                    }
                }

                const flickerFn = () => {
                    targetList.forEach(item => {
                        rollerComp.iconFlicker('coord', item, true, () => {
                            i++
                            if (i === targetList.length) { //全部闪动完成
                                done(() => {
                                    rollerComp.clearStatus()
                                    setTimeout(() => {
                                        flashLine()
                                        getBgProxy().setDisable(false)
                                        finalEnd();
                                    }, 1000)
                                })
                            }
                        });
                    })
                }
                // let timer: number | undefined;
                const flashLine = () => {
                    targetList.forEach((res, index) => {
                        const task = new Task((done) => {
                            rollerComp.iconFlicker('coord', targetList[index], false)
                            //闪烁2秒钟就结束
                            window.setTimeout(() => done(), 2000)
                        })
                        this.taskScheduler.joinqQueue(task, false)
                    })
                }
                const done = (cb?) => {
                    this.taskScheduler.joinqQueue(new Task((done) => {
                        this.sendNotification(CommandDefine.BG, { order: "curr", done }, BgMediatorConst.SHOW_DIALOG_WIN)
                    })).joinqQueue(new Task((done) => {
                        // 元宝播放大奖
                        // 是否播放元宝动画
                        this.sendNotification(BgMediatorConst.DISPLAYSTHEINGOTSMULTIPLIER, { done })
                        let OtherGameAttributesVo = getSocketProxy().getTransferGameInfo().getOtherGameAttributesVo()
                        if (OtherGameAttributesVo.yuanBaoSpecialEffect) { // 闪动元宝
                            const rollerComp = (<phoenix_RollerPanel>this.wrapView.getChildByName("slotListPanel").getComponent("phoenix_RollerPanel"));
                            rollerComp.playTheIngotsIconAnimation(OtherGameAttributesVo.yuanBaoPosition)
                        }
                        const fbp = getBgProxy();
                        if (fbp.getLastGame() == SubGameType.SUB_GAME1) {
                            const slotPanel = (<phoenix_SlotPanel>this.wrapView.getComponent("phoenix_SlotPanel"))
                            slotPanel.setLost(OtherGameAttributesVo.phoenixMagnification)
                            let getNumberOfRounds = getSocketProxy().getTransferGameInfo().getNumberOfRounds()
                            getBgProxy().setGameCount(getNumberOfRounds)
                            getBgProxy().setGameTotalNumber(OtherGameAttributesVo.totalFreeGameCount)
                            this.sendNotification(BgMediatorConst.UPDATE_BTN_LABEL, { state: false })
                        } else {
                            // done()
                            // this.sendNotification(BgMediatorConst.TOGGLETHESTARTBUTTON, { state: true })
                        }
                        // if (fbp.getNextGame) {
                        done()
                        // this.sendNotification(BgMediatorConst.TOGGLETHESTARTBUTTON, { state: true });
                        // }
                    })).joinqQueue(new Task((done) => {
                        cb && cb()
                        done()
                    }))
                }
                this.stopRollHandle = (isManualStop: boolean=false) => {
                    this.stopRollHandle = undefined;
                    this.stopTimeId = undefined;
                    rollerComp && rollerComp.stopAllRoll(isManualStop, () => {
                        this.sendNotification(BgMediatorConst.UPDATE_USER_GOLD, { state: goldState.OLD_GOLD })
                        //更新游戏奖励
                        this.sendNotification(RollerMediatorConst.REMOVE_THECHEST_LAYER, { iconStay: getSocketProxy().getTransferGameInfo().getIconStay() })
                        this.sendNotification(BgMediatorConst.UPDATE_CURRENT_SCORE)
                        // // 开始轮流闪动图标
                        rollerComp.clearStatus()
                        console.log('BEGIN_ROLL_______',targetList)
                        if (!targetList||!targetList.length) {
                            done(() => {
                                const yuanBaoSpecialEffect = getSocketProxy().getTransferGameInfo().getOtherGameAttributesVo().yuanBaoSpecialEffect
                                yuanBaoSpecialEffect ? window.setTimeout(() => finalEnd(), 500) : finalEnd();
                            })
                            getBgProxy().setDisable(false)
                        } else {
                            flickerFn()
                        }
                    })
                }
                // 多少秒钟后开始停止转动
                this.stopTimeId = window.setTimeout(this.stopRollHandle, ROLL_TIME)
            }
        },
        {
            name: RollerMediatorConst.END_ROLL,
            handler(notification: INotification) {
                this.stopTimeId && window.clearTimeout(this.stopTimeId)
                this.stopRollHandle && this.stopRollHandle(true);
            }
        },
        {
            name: RollerMediatorConst.UPDATE_JACKPOT,
            handler(notification: INotification) {
                const { baseBetAmount, lineCount } = notification.getBody();
                const slotPanel = (<phoenix_SlotPanel>this.wrapView?.getComponent("phoenix_SlotPanel"))
                if (slotPanel) {
                    slotPanel.setGod_MAJOR(config.winning[0].maxRate * baseBetAmount, config.winning[1].maxRate * baseBetAmount)
                }
            }
        },
        {
            name: RollerMediatorConst.UPDATE_JACKPOT_TOTAL,
            handler(notification: INotification) {
                // const { total } = notification.getBody();
                // const slotPanel = (<phoenix_SlotPanel>this.wrapView?.getComponent("phoenix_SlotPanel"))
                // if (slotPanel) {
                //     slotPanel.set_jack_total(total)
                // }
            }
        },
        {
            name: RollerMediatorConst.UNINSTALL_ROLLER_PANEL,
            handler(notification: INotification) {
                // console.log("卸载滑槽游戏")
                const rollerComp = (<phoenix_RollerPanel>this.wrapView.getChildByName("slotListPanel").getComponent("phoenix_RollerPanel"));
                rollerComp.uninstall()
            }
        },
    ]
    protected mainPrefabSource = {
        key: 'slotPanel',
        path: PrefabDefine.SLOT_PANEL,
        sourceType: Prefab,
        source: null
    }
    private isFlickerDone: boolean = true

    public constructor(mediatorName: string = null, viewComponent: any = null) {
        super(mediatorName, viewComponent)
    }

    protected init(): void {
        //this.viewComponent.addChild(this.getSource(PrefabDefine.SLOT_PANEL))
        this.wrapView = this.getSource(this.sourceMap[0].path)
        // this.viewComponent.getChildByName("gameArea").addChild(this.wrapView);
        find("slotBg/gameArea", ApplicationGlobal.mainPanel).addChild(this.wrapView)
        this.sendNotification(BgMediatorConst.UPDATE_CURRENT_SCORE, { isInit: true })
        this.listenerEvent()
    }

    protected listenerEvent() {
        const slotPanel = (<phoenix_SlotPanel>this.wrapView?.getComponent("phoenix_SlotPanel"))
        // slotPanel.btn_jackPot.on(Node.EventType.TOUCH_END, () => {
        //     this.sendNotification(BgMediatorConst.HANDOFF_JACKPOT)
        // }, this)
    }

    private autoLaunch() {
        const fbp = getBgProxy();
        // if (fbp.getIsChangeGameRunning() === -1) {
        // 没有跳转游戏才自动发
        this.sendNotification(CommandDefine.BG, {}, BgCommandConst.AUTO_LAUNCH)
        // }
    }
}
