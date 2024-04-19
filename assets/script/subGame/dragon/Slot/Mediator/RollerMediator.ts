import {find, Prefab} from "cc";
import {INotification} from "../../Framework/interfaces/INotification";
import {CommandDefine} from "../Const/CommandDefine";
import {PrefabDefine} from "../Const/PrefabDefine";
import BaseMediator from "./BaseMediator";
import {IlistTypeHander} from "../types/IlistTypeHander";
import {ISourceFile} from "../types/ISourceFile";
import {dragon_RollerPanel} from "../Component/dragon_RollerPanel";
import {BgMediatorConst} from "./BgMediator";
import {BgCommandConst} from "../Command/BgCommand";
import {getBgProxy, getSlotProxy, getSocketProxy} from "../utils";
import {dragon_SlotPanel} from "../Component/dragon_SlotPanel";
import config from "../config";
import { goldState } from "../Proxy/SocketProxy";
import { ApplicationGlobal } from "../Const/ApplicationGlobal";
import { AudioManager,SoundList } from "../Managr/AudioManager";
import TaskScheduler, {Task} from "../../../../utils/TaskScheduler";
import { AutoLaunchType } from "../Repositories/BgRepository";
import { ROLL_TIME } from "../../../../utils/SlotSpeedConfig";
export enum RollerMediatorConst {
    /**初始化滑槽面板 */
    INIT_ROLLER_PANEL = "initdragon_RollerPanel",
    /**卸载滑槽游戏面板 */
    UNINSTALL_ROLLER_PANEL = "uninstalldragon_RollerPanel",
    /**开始滑动 */
    BEGIN_ROLL = "beginRoll",
    /**结束滑动 */
    END_ROLL = "endRoll",
   /* 闪动停止*/
    FORCE_STOP = 'forceStop',
    /*更新状态游戏*/
    REMOVE_THECHEST_LAYER = 'removeThechestLayer',
    CHANGEPANELS='CHANGEPANELS',
    THERINGOFFIREROLLS='THERINGOFFIREROLLS',
    UPDATE_JACKPOT="UPDATE_JACKPOT",
    INIT_JACKPOT="INIT_JACKPOT",
    UPDATE_JACKPOT_TOTAL="UPDATE_JACKPOT_TOTAL",
    /*更新背景*/
    UPDATETHEBACKGROUND="updateTheBackground",
    /*初始化宝盆*/
    INITDOCKIOCN = "initdockiocn",
    /*龙珠数量*/
    DRAGONBALLLENGTH = "DRAGONBALLLENGTH",

    /* 火圈状态 */
    RINGOFFIREPANELSTATUS = "RINGOFFIREPANELSTATUS"
}

export default class RollerMediator extends BaseMediator {
    public taskScheduler: TaskScheduler = new TaskScheduler()
    public sourceMap: Array<ISourceFile> = [
        {
            key: 'dragon_SlotPanel',
            path: PrefabDefine.SLOT_PANEL,
            sourceType: Prefab,
            source: null
        }
    ]
    private isFlickerDone:boolean=true
    private stopRollHandle;
    private stopTimeId;
	private bettingGears
    protected listNotificationConst: Array<IlistTypeHander<RollerMediator>> = [
        {
            name: RollerMediatorConst.INIT_ROLLER_PANEL,
            handler(notification: INotification) {
                this.init();

                getBgProxy().setDisable(false)
                window.setTimeout(() => {
                    // 可能有动画
                    this.sendNotification(CommandDefine.BG, {}, BgCommandConst.AUTO_LAUNCH)
                    
                }, 2500)
            }
        },
        {
            name: RollerMediatorConst.REMOVE_THECHEST_LAYER,
            handler(notification: INotification) {
                let {iconStay}=notification.getBody()
                const rollerComp = (<dragon_RollerPanel>this.wrapView.getChildByName("slotListPanel").getComponent("dragon_RollerPanel"));
                rollerComp.togglesALLLayer(iconStay===1)
                //const dragon_SlotPanel = (<dragon_SlotPanel>this.wrapView.getComponent("dragon_SlotPanel"))
            }
        }, {
            name: RollerMediatorConst.UPDATETHEBACKGROUND,
            handler(notification: INotification) {
                const dragon_SlotPanel = (<dragon_SlotPanel>this.wrapView.getComponent("dragon_SlotPanel"))
                dragon_SlotPanel.bgController(getSocketProxy().getTransferGameInfo().gameType())
            }
        },
        {
            name: RollerMediatorConst.INIT_JACKPOT,
            handler(notification: INotification) {
                    const { baseBetAmount, lineCount } = notification.getBody();
                    console.log(baseBetAmount);
                    if(this.wrapView&&this.wrapView.components){
                        const dragon_SlotPanel = (<dragon_SlotPanel>this.wrapView.getComponent("dragon_SlotPanel"))
                        dragon_SlotPanel&&dragon_SlotPanel.setGod_MAJOR(500 * baseBetAmount,1250 * baseBetAmount)
                    }
                   
            }
        },
        {
            name: RollerMediatorConst.UPDATE_JACKPOT_TOTAL,
            handler(notification: INotification) {
                const {total} = notification.getBody();
                if(this.wrapView&&this.wrapView.components){
                    const slotPanel = (<dragon_SlotPanel>this.wrapView?.getComponent("dragon_SlotPanel"))
                    slotPanel&& slotPanel.set_jack_total(total)
                }
               
            }
        },
        {
            name: RollerMediatorConst.RINGOFFIREPANELSTATUS,
            handler(notification: INotification) {
                const {gears} = notification.getBody();
                if(this.wrapView&&this.wrapView.components){
                    const rollerComp = (<dragon_RollerPanel>this.wrapView.getChildByName("slotListPanel").getComponent("dragon_RollerPanel"));
                    this.bettingGears&&rollerComp.RingOfFirePanl(this.bettingGears===gears)
                    this.bettingGears=gears
                }
            }
        },
        {
            name: RollerMediatorConst.UPDATE_JACKPOT,
            handler(notification: INotification) {
                let {jackPotData}=notification.getBody();
                setTimeout(()=>{
                    const rollerComp = (<dragon_SlotPanel>this.wrapView.getComponent(dragon_SlotPanel));
                    if(rollerComp){
                        rollerComp.initJACKPOT(jackPotData)
                    }
                },100)
            }
        },
        {
            name: RollerMediatorConst.BEGIN_ROLL,
            handler(notification: INotification) {
                const {stopIndex, targetList, dockIocn} = notification.getBody();
                const rollerComp = (<dragon_RollerPanel>this.wrapView.getChildByName("slotListPanel").getComponent("dragon_RollerPanel"));
                rollerComp.startAllRoll(stopIndex, getBgProxy().isSpeed());
                getBgProxy().setDisable(true)
                this.taskScheduler.stopQueue(false)
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
                        this.sendNotification(RollerMediatorConst.DRAGONBALLLENGTH,{num:getSocketProxy().getTransferGameInfo().getDackiconLenth()}) // 判断
                        this.sendNotification(CommandDefine.BG, {order: "curr",done}, BgMediatorConst.SHOW_DIALOG_WIN)
                    })).joinqQueue(new Task((done)=>{
                        //dialogType, amount, keepTime, done
                        this.sendNotification(BgMediatorConst.NUMBEROFDISPLAYS,{amount: getSocketProxy().getTransferGameInfo().getRemainTimes(),keepTime:2000,done,type:2},)
                    })).joinqQueue(new Task((done)=>{
                        //dialogType, amount, keepTime, done
                        this.sendNotification(BgMediatorConst.NUMBEROFDISPLAYS,{amount: getSocketProxy().getTransferGameInfo().getRemainTimes(),keepTime:2000,done,type:1},)
                    })).joinqQueue(new Task((done)=>{
                        if(getBgProxy().getIsChangeGameRunning()!==-1){
                            this.sendNotification(CommandDefine.BG, {}, BgCommandConst.GAME_TYPE_CHANGE);
                        }else {
                            this.sendNotification(CommandDefine.BG, {}, BgCommandConst.AUTO_LAUNCH)
                            this.sendNotification(BgMediatorConst.TOGGLETHESTARTBUTTON,{state:true})
                        }
                        getBgProxy().setDisable(false)
                        this.sendNotification(BgMediatorConst.CHANGE_BG)
                        setTimeout(()=>{
                            this.sendNotification(RollerMediatorConst.UPDATETHEBACKGROUND);
                        },300)
                        rollerComp.iconDock('coord', dockIocn)
                        this.sendNotification(BgMediatorConst.TOGGLETHESTARTBUTTON,{state:true})
                        this.sendNotification(RollerMediatorConst.REMOVE_THECHEST_LAYER,{iconStay:getSocketProxy().getTransferGameInfo().getIconStay()})
                        done()
                    }))
                }
                this.stopRollHandle = (isManualStop:boolean=false) => {
                    this.stopTimeId = undefined;
                    this.stopRollHandle = undefined;
                    rollerComp && rollerComp.stopAllRoll(isManualStop, () => {
                        this.sendNotification(BgMediatorConst.UPDATE_USER_GOLD,{state:goldState.OLD_GOLD})
                        this.sendNotification(BgMediatorConst.UPDATE_BTN_LABEL,{frequency:getSocketProxy().getTransferGameInfo().getNumberOfRounds()})
                        //更新游戏奖励
                        this.sendNotification(BgMediatorConst.UPDATE_CURRENT_SCORE)
                        rollerComp.clearStatus()
                        // 开始轮流闪动图标
                        if (!targetList.length) {
                            done()
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
            name: RollerMediatorConst.INITDOCKIOCN,
            handler(notification: INotification) {
                const {dockIocn} = notification.getBody();
                const rollerComp = (<dragon_RollerPanel>this.wrapView.getChildByName("slotListPanel").getComponent("dragon_RollerPanel"));
                rollerComp.iconDock('coord', dockIocn)
            }
        },
        {
            name: RollerMediatorConst.CHANGEPANELS,
            handler(notification: INotification) {
                let {Change} = notification.getBody()
                const rollerComp = (<dragon_SlotPanel>this.wrapView.getComponent(dragon_SlotPanel));
                rollerComp.spitfire(Change)
            }
        },
        {
            name: RollerMediatorConst.DRAGONBALLLENGTH,
            handler(notification: INotification) {
                if(getSocketProxy().getTransferGameInfo().gameType()===2){
                let {num} = notification.getBody()
                    const rollerComp = (<dragon_SlotPanel>this.wrapView.getComponent(dragon_SlotPanel));
                    rollerComp.setdragonBallLightsUp(num)
                }
               
            }
        },
        {
            name: RollerMediatorConst.END_ROLL,
            handler(notification: INotification) {
                this.stopTimeId && window.clearTimeout(this.stopTimeId)
                this.stopRollHandle && this.stopRollHandle(true);
            }
        },{
            name: RollerMediatorConst.THERINGOFFIREROLLS,
            handler(notification: INotification) {
                const rollerComp = (<dragon_RollerPanel>this.wrapView.getChildByName("slotListPanel").getComponent("dragon_RollerPanel"));
                rollerComp.controlTheHeightOfTheRingOfFire()
            }
        },
        {
            name: RollerMediatorConst.UNINSTALL_ROLLER_PANEL,
            handler(notification: INotification) {
               // console.log("卸载滑槽游戏")
                const rollerComp = (<dragon_RollerPanel>this.wrapView.getChildByName("slotListPanel").getComponent("dragon_RollerPanel"));
                rollerComp.uninstall()
            }
        },
    ]
    protected mainPrefabSource = {
        key: 'dragon_SlotPanel',
        path: PrefabDefine.SLOT_PANEL,
        sourceType: Prefab,
        source: null
    }

    public constructor(mediatorName: string = null, viewComponent: any = null) {
        super(mediatorName, viewComponent)
    }

    protected init(): void {
        //this.viewComponent.addChild(this.getSource(PrefabDefine.SLOT_PANEL))
        this.wrapView = this.getSource(this.sourceMap[0].path)
        // this.viewComponent.getChildByName("gameArea").addChild(this.wrapView);
        find("slotBg/gameArea",ApplicationGlobal.mainPanel).destroyAllChildren()
        find("slotBg/gameArea",ApplicationGlobal.mainPanel).addChild(this.wrapView)
        const dragon_SlotPanel = (<dragon_SlotPanel>this.wrapView.getComponent("dragon_SlotPanel"))
        dragon_SlotPanel.bgController(getSocketProxy().getTransferGameInfo().gameType())
        this.sendNotification(BgMediatorConst.UPDATE_CURRENT_SCORE)
        this.listenerEvent()
    }

    protected listenerEvent() {

    }
}
