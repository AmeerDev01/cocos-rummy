import {find, Node, Prefab} from "cc";
import {INotification} from "../../Framework/interfaces/INotification";
import {CommandDefine} from "../Const/CommandDefine";
import {PrefabDefine} from "../Const/PrefabDefine";
import BaseMediator from "./BaseMediator";
import {IlistTypeHander} from "../types/IlistTypeHander";
import {ISourceFile} from "../types/ISourceFile";
import {GodWealth_RollerPanel} from "../Component/GodWealth_RollerPanel";
import {GodWealth_SlotPanel} from "../Component/GodWealth_SlotPanel";
import {BgMediatorConst} from "./BgMediator";
import {BgCommandConst} from "../Command/BgCommand";
import {getBgProxy, getSocketProxy} from "../GodWealth_utils";
import {goldState} from "../Proxy/SocketProxy";
import config from "../GodWealth_config";
import {ApplicationGlobal} from "../Const/ApplicationGlobal";
import {AudioManager, SoundList} from "../Managr/AudioManager";
import TaskScheduler, {Task} from "../../../../utils/TaskScheduler";
import { AutoLaunchType } from "../Repositories/BgRepository";
import { ROLL_TIME } from "../../../../utils/SlotSpeedConfig";
import { log } from "../../../../common/fish/CalculteRule";
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
    /*初始化宝盆*/
    INITDOCKIOCN = "initdockiocn"
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
                this.init();
                //getBgProxy().setDisable(false)
                window.setTimeout(() => {
                    // 可能有动画
                    this.sendNotification(CommandDefine.BG, {}, BgCommandConst.AUTO_LAUNCH)
                }, 2500)
            }
        },
        {
            name: RollerMediatorConst.REMOVE_THECHEST_LAYER,
            handler(notification: INotification) {
                let {iconStay} = notification.getBody()
                const rollerComp = (<GodWealth_RollerPanel>this.wrapView.getChildByName("slotListPanel").getComponent("GodWealth_RollerPanel"));
                rollerComp.togglesALLLayer(iconStay === 1)
            }
        },
        {
            name: RollerMediatorConst.INITDOCKIOCN,
            handler(notification: INotification) {
                const {dockIocn} = notification.getBody();
                const rollerComp = (<GodWealth_RollerPanel>this.wrapView.getChildByName("slotListPanel").getComponent("GodWealth_RollerPanel"));
                rollerComp.iconDock('coord', dockIocn)
            }
        },
        {
            name: RollerMediatorConst.BEGIN_ROLL,
            handler(notification: INotification) {
                const {stopIndex, targetList, dockIocn} = notification.getBody();
                const rollerComp = (<GodWealth_RollerPanel>this.wrapView.getChildByName("slotListPanel").getComponent("GodWealth_RollerPanel"));
                rollerComp.startAllRoll(stopIndex, getBgProxy().isSpeed());
                getBgProxy().setDisable(true)
                this.taskScheduler.stopQueue(false)
                rollerComp.clearStatus()
                console.log(targetList)
                //闪动图标
                let i = 0
                const flickerFn = () => {
                    targetList.forEach(item => {
                        rollerComp.iconFlicker('coord', item, true, () => {
                            i++
                            if (i === targetList.length) { //全部闪动完成
                                rollerComp.clearStatus()
                                setTimeout(() => {
                                    done()
                                    flashLine()
                                }, 500)
                            }
                        });
                    })
                }
                // let timer: number | undefined;
                const flashLine = () => {
                    targetList.forEach((res,index)=>{
                        const task = new Task((done) => {
                            rollerComp.iconFlicker('coord', targetList[index], false)
                            //闪烁2秒钟就结束
                            window.setTimeout(() => done(), 1000)
                        })
                        this.taskScheduler.joinqQueue(task, false)
                    })
                }
                const done = () => {
                    this.taskScheduler.joinqQueue(new Task((done)=>{
                        this.sendNotification(CommandDefine.BG, {order: "curr",done}, BgMediatorConst.SHOW_DIALOG_WIN)
                    })).joinqQueue(new Task((done)=>{
                        //dialogType, amount, keepTime, done
                        this.sendNotification(BgMediatorConst.NUMBEROFDISPLAYS,{keepTime:2000,done},)
                    })).joinqQueue(new Task((done)=>{
                        if(getBgProxy().getIsChangeGameRunning()!==-1){
                            this.sendNotification(CommandDefine.BG, {}, BgCommandConst.GAME_TYPE_CHANGE);
                        }else {
                            this.sendNotification(BgMediatorConst.TOGGLETHESTARTBUTTON,{state:true})
                            this.autoLaunch()
                            getBgProxy().setDisable(false)
                        }
                        this.sendNotification(RollerMediatorConst.REMOVE_THECHEST_LAYER,{iconStay:getSocketProxy().getTransferGameInfo().getIconStay()})
                        done()
                    }))
                }
                this.stopRollHandle = (isManualStop: boolean=false) => {
                    this.stopRollHandle = undefined;
                    this.stopTimeId = undefined;
                    rollerComp && rollerComp.stopAllRoll(isManualStop, () => {
                        this.sendNotification(BgMediatorConst.UPDATE_USER_GOLD, {state: goldState.OLD_GOLD})
                        this.sendNotification(BgMediatorConst.UPDATE_BTN_LABEL,{frequency:getSocketProxy().getTransferGameInfo().getNumberOfRounds()})
                        //更新游戏奖励
                        this.sendNotification(BgMediatorConst.UPDATE_CURRENT_SCORE)
                        rollerComp.iconDock('coord', dockIocn)
                        // // 开始轮流闪动图标
                        rollerComp.clearStatus()
                        if (!targetList.length) {
                            done()
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
                const {baseBetAmount, lineCount} = notification.getBody();
                if(this.wrapView&&this.wrapView.components){
                    const slotPanel = (<GodWealth_SlotPanel>this.wrapView?.getComponent("GodWealth_SlotPanel"))
                    if (slotPanel) {
                        getBgProxy().setWinningMultiplier({mini:config.winning[1].maxRate * baseBetAmount,major:config.winning[2].maxRate * baseBetAmount})
                        slotPanel.setGod_MAJOR(config.winning[1].maxRate * baseBetAmount, config.winning[2].maxRate * baseBetAmount)
                    }
                }
               
            }
        },
        {
            name: RollerMediatorConst.UPDATE_JACKPOT_TOTAL,
            handler(notification: INotification) {
                const {total} = notification.getBody();
                if(this.wrapView&&this.wrapView.components){
                    const slotPanel = (<GodWealth_SlotPanel>this.wrapView?.getComponent("GodWealth_SlotPanel"))
                    slotPanel&&slotPanel.set_jack_total(total)
                }
            }
        },
        {
            name: RollerMediatorConst.UNINSTALL_ROLLER_PANEL,
            handler(notification: INotification) {
                // console.log("卸载滑槽游戏")
                const rollerComp = (<GodWealth_RollerPanel>this.wrapView.getChildByName("slotListPanel").getComponent("GodWealth_RollerPanel"));
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
        this.sendNotification(BgMediatorConst.UPDATE_CURRENT_SCORE)
        this.listenerEvent()
    }

    protected listenerEvent() {
        const slotPanel = (<GodWealth_SlotPanel>this.wrapView?.getComponent("GodWealth_SlotPanel"))
        slotPanel.btn_jackPot.on(Node.EventType.TOUCH_END, () => {
            this.sendNotification(BgMediatorConst.HANDOFF_JACKPOT)
        }, this)
    }

    private autoLaunch() {
        const fbp = getBgProxy();
        // if (fbp.getIsChangeGameRunning() === -1) {
            // 没有跳转游戏才自动发
        const rollerComp = (<GodWealth_RollerPanel>this.wrapView.getChildByName("slotListPanel").getComponent("GodWealth_RollerPanel"));
        rollerComp.clearStatus()
        this.sendNotification(CommandDefine.BG, {}, BgCommandConst.AUTO_LAUNCH)
        }
    // }
}
