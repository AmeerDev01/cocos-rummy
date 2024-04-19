import {find, Prefab} from "cc";
import {INotification} from "../../Framework/interfaces/INotification";
import {CommandDefine} from "../Const/CommandDefine";
import {PrefabDefine} from "../Const/PrefabDefine";
import BaseMediator from "./BaseMediator";
import {IlistTypeHander} from "../types/IlistTypeHander";
import {ISourceFile} from "../types/ISourceFile";
import {gxfc_RollerPanel} from "../Component/gxfc_RollerPanel";
import {BgMediatorConst} from "./BgMediator";
import {BgCommandConst} from "../Command/BgCommand";
import { ApplicationGlobal } from "../Const/ApplicationGlobal";
import {getBgProxy, getSlotProxy, getSocketProxy} from "../utils";
import {goldState, SubGameType} from "../Proxy/SocketProxy";
import {AudioManager, SoundList, } from "../Managr/AudioManager";
import TaskScheduler, {Task} from "../../../../utils/TaskScheduler";
import { AutoLaunchType } from "../Repositories/BgRepository";
import { ROLL_TIME } from "../../../../utils/SlotSpeedConfig";
export enum RollerMediatorConst {
    /**初始化滑槽面板 */
    INIT_ROLLER_PANEL = "initgxfc_RollerPanel",
    /**卸载滑槽游戏面板 */
    UNINSTALL_ROLLER_PANEL = "uninstallgxfc_RollerPanel",
    /**开始滑动 */
    BEGIN_ROLL = "beginRoll",
    /**结束滑动 */
    END_ROLL = "endRoll",
   /* 闪动停止*/
    FORCE_STOP = 'forceStop',
    /*更新状态游戏*/
    REMOVE_THECHEST_LAYER = 'removeThechestLayer',
    UPDATE_ICON_STATE="updateIconState"
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
    private isFlickerDone:boolean=true
    private stopRollHandle;
    private stopTimeId;
    protected listNotificationConst: Array<IlistTypeHander<RollerMediator>> = [
        {
            name: RollerMediatorConst.INIT_ROLLER_PANEL,
            handler(notification: INotification) {
                this.init();
                const { gameType } = notification.getBody() || {}
				//在初始化界面之前要初始化数据 'iconRollerQueue' | 'largeIconRollerQueue'
				const _gameRunner: SubGameType = gameType || getSocketProxy().getTransferGameInfo().gameType()
                this.sendNotification(BgMediatorConst.CHANGE_BG, { gameType: _gameRunner })
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
                const rollerComp = (<gxfc_RollerPanel>this.wrapView.getChildByName('Mask').getChildByName("slotListPanel").getComponent("gxfc_RollerPanel"));
                rollerComp.togglesALLLayer(iconStay)
            }
        },
        {
            name: RollerMediatorConst.BEGIN_ROLL,
            handler(notification: INotification) {
                const {stopIndex, targetList, dockIocn} = notification.getBody();
                const rollerComp = (<gxfc_RollerPanel>this.wrapView.getChildByName('Mask').getChildByName("slotListPanel").getComponent("gxfc_RollerPanel"));
                rollerComp.startAllRoll(stopIndex, getBgProxy().isSpeed());
                rollerComp.iconDock('coord', dockIocn)
                getBgProxy().setDisable(true)
                this.taskScheduler.stopQueue(false)
                //闪动图标
                let i = 0
                const flickerFn = () => {
                    targetList.forEach(item => {
                        rollerComp.iconFlicker('coord', item, true, () => {
                            i++
                            if (i === targetList.length) { //全部闪动完成
                                rollerComp.iconDock('coord', dockIocn)
                                rollerComp.clearStatus()
                                setTimeout(() => {
                                    done()
                                    flashLine()
                                }, 500)
                            }
                        });
                    })
                }
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
                    // 闪动效果播放完毕，判断是否要切换游戏
                    this.taskScheduler.joinqQueue(new Task((done)=>{
                        this.sendNotification(CommandDefine.BG, {order: "curr",done}, BgMediatorConst.SHOW_DIALOG_WIN)
                    })).joinqQueue(new Task((done)=>{
                        this.sendNotification(BgMediatorConst.NUMBEROFDISPLAYS,{amount: getSocketProxy().getTransferGameInfo().getRemainTimes(),keepTime:2000,done},)
                    })).joinqQueue(new Task((done)=>{
                        if(getBgProxy().getIsChangeGameRunning()!==-1){
                            this.sendNotification(CommandDefine.BG, {}, BgCommandConst.GAME_TYPE_CHANGE);
                        }else {
                            this.sendNotification(BgMediatorConst.TOGGLETHESTARTBUTTON,{state:true})
                            this.sendNotification(CommandDefine.BG, {}, BgCommandConst.AUTO_LAUNCH)
                        }
                        rollerComp.iconDock('coord', dockIocn)
                        done()
                        getBgProxy().setDisable(false)
                    }))
                    // this.judgeTheGamePopUp(()=>{
                    //     this.sendNotification(CommandDefine.BG, {}, BgCommandConst.GAME_TYPE_CHANGE);
                    //     this.autoLaunch()
                    // })
                }
                this.stopRollHandle = (isManualStop:boolean=false) => {
										this.stopRollHandle = undefined;
										this.stopTimeId = undefined;
                    rollerComp && rollerComp.stopAllRoll(isManualStop, () => {
                        this.sendNotification(BgMediatorConst.UPDATE_USER_GOLD,{state:goldState.OLD_GOLD})
                        //更新游戏奖励
                        this.sendNotification(BgMediatorConst.UPDATE_CURRENT_SCORE)
                        // // 开始轮流闪动图标
                        rollerComp.clearStatus()
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
            name: RollerMediatorConst.END_ROLL,
            handler(notification: INotification) {
                this.stopTimeId && window.clearTimeout(this.stopTimeId)
                this.stopRollHandle && this.stopRollHandle(true);
            }
        },
        {
            name: RollerMediatorConst.UNINSTALL_ROLLER_PANEL,
            handler(notification: INotification) {
                // console.log("卸载滑槽游戏")
                const rollerComp = (<gxfc_RollerPanel>this.wrapView.getChildByName('Mask').getChildByName("slotListPanel").getComponent("gxfc_RollerPanel"));
                rollerComp.uninstall()
            }
        },  {
            name: RollerMediatorConst.UPDATE_ICON_STATE,
            handler(notification: INotification) {
                let {bgIndex}=notification.getBody()
                const rollerComp = (<gxfc_RollerPanel>this.wrapView.getChildByName('Mask').getChildByName("slotListPanel").getComponent("gxfc_RollerPanel"));
                rollerComp.setIconBG(bgIndex)
            }
        },
    ]
    protected mainPrefabSource = {
        key: 'slotPanel',
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
        find("slotBg/gameArea",ApplicationGlobal.mainPanel).addChild(this.wrapView)
        this.sendNotification(BgMediatorConst.UPDATE_CURRENT_SCORE)
        this.listenerEvent()
    }

    protected listenerEvent() {

    }

    private  judgeTheGamePopUp(cb){
        AudioManager.getInstance().playSound(SoundList.theRollerStops)
        // const fbp = getBgProxy();
        // const nextGame = fbp.getIsChangeGameRunning()
        // if (nextGame !== -1) {
        //
        // }else {
        // }
        // this.sendNotification(CommandDefine.BG, { dialogType: DialogType.BIG_WIN, order: "total", keeptime: 3000 }, BgMediatorConst.SHOW_DIALOG_WIN)
        window.setTimeout(()=>{
          cb()
        },1000)
    }
}
