import { Prefab, Vec3, color, find, tween } from "cc";
import { INotification } from "../../Framework/interfaces/INotification";
import Mediator from "../../Framework/patterns/mediator/Mediator";
import { CommandDefine } from "../Const/CommandDefine";
import { PrefabDefine } from "../Const/PrefabDefine";
import BaseMediator from "./BaseMediator";
import { IlistTypeHander } from "../types/IlistTypeHander";
import { ISourceFile } from "../types/ISourceFile";
import { Egypt_Roller } from "../Component/Egypt_Roller";
import { Egypt_RollerPanel } from "../Component/Egypt_RollerPanel";
import { BgMediatorConst } from "./BgMediator";
import { SocketProxy, SubGameType } from "../Proxy/SocketProxy";
import { ProxyDefine } from "../Const/ProxyDefine";
import { BgProxy } from "../Proxy/BgProxy";
import { BgCommandConst } from "../Command/BgCommand";
import { goldState } from "../Proxy/SocketProxy";
import { getBgProxy, getSocketProxy } from "../utils";
import { ApplicationGlobal } from "../Const/ApplicationGlobal";
import { Egypt_SlotPanel } from "../Component/Egypt_SlotPanel";
import { AudioManager, SoundList } from "../Managr/AudioManager";
import TaskScheduler, { Task } from "../../../../utils/TaskScheduler";
import { AutoLaunchType } from "../Repositories/BgRepository";
import { ROLL_TIME } from "../../../../utils/SlotSpeedConfig";
export enum RollerMediatorConst {
  /**初始化滑槽面板 */
  INIT_ROLLER_PANEL = "initRollerPanel",
  /**卸载滑槽游戏面板 */
  UNINSTALL_ROLLER_PANEL = "uninstallRollerPanel",
  /*更新状态游戏*/
  REMOVE_THECHEST_LAYER = 'removeThechestLayer',
  /**开始滑动 */
  BEGIN_ROLL = "beginRoll",
  /**结束滑动 */
  END_ROLL = "endRoll",
}
export default class RollerMediator extends BaseMediator {
  public taskScheduler: TaskScheduler = new TaskScheduler()
  public constructor(mediatorName: string = null, viewComponent: any = null) {
    super(mediatorName, viewComponent)
  }
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

  protected init(): void {
    //this.viewComponent.addChild(this.getSource(PrefabDefine.SLOT_PANEL))
    this.wrapView = this.getSource(this.sourceMap[0].path)
    // this.viewComponent.getChildByName("gameArea").addChild(this.wrapView);
    find("slotBg/gameArea", ApplicationGlobal.mainPanel).addChild(this.wrapView)
    this.sendNotification(BgMediatorConst.UPDATE_CURRENT_SCORE)
    this.listenerEvent();
  }

  protected listenerEvent() {

  }

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
        let { iconStay } = notification.getBody()
        const rollerComp = (<Egypt_RollerPanel>this.wrapView.getChildByName("slotListPanel").getComponent("Egypt_RollerPanel"));
        rollerComp.togglesALLLayer(iconStay === 1)
      }
    },
    {
      name: RollerMediatorConst.BEGIN_ROLL,
      handler(notification: INotification) {
        const { stopIndex, targetList, dockIocn } = notification.getBody();
        const rollerComp = (<Egypt_RollerPanel>this.wrapView.getChildByName("slotListPanel").getComponent("Egypt_RollerPanel"));
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
                  doneFinish()
                  flashLine()
                }, 500)
              }
            });
          })
        }
        const flashLine = () => {
          targetList.forEach((res, index) => {
            const task = new Task((done) => {
              rollerComp.iconFlicker('coord', targetList[index], false)
              //闪烁2秒钟就结束
              window.setTimeout(() => done(), 1000)
            })
            this.taskScheduler.joinqQueue(task, false)
          })
        }
        const doneFinish = () => {
          this.taskScheduler.joinqQueue(new Task((done) => {
            this.sendNotification(CommandDefine.BG, { order: "curr", done }, BgMediatorConst.SHOW_DIALOG_WIN)
          })).joinqQueue(new Task((doneTmp) => {
            this.sendNotification(CommandDefine.BG, {
              done: () => {
                // console.log('doneFinish ===================================================== done');
                rollerComp.iconDock('coord', dockIocn)
                this.sendNotification(BgMediatorConst.TOGGLETHESTARTBUTTON, { state: true })
               window.setTimeout(()=>{
                doneTmp()
               },1000)
                getBgProxy().setDisable(false)
                this.autoLaunch()
              }
            }, BgCommandConst.GAME_TYPE_CHANGE);
          }))
        }
        this.stopRollHandle = (isManualStop: boolean = false) => {
          this.stopRollHandle = undefined;
          this.stopTimeId = undefined;
          rollerComp && rollerComp.stopAllRoll(isManualStop, () => {
            this.sendNotification(BgMediatorConst.UPDATE_USER_GOLD, { state: goldState.OLD_GOLD })
            //更新游戏奖励
            this.sendNotification(BgMediatorConst.UPDATE_CURRENT_SCORE)
            // // 开始轮流闪动图标
            rollerComp.clearStatus()
            if (!targetList.length) {
              doneFinish()
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
        console.log("uninstallTheChuteGame")
        const rollerComp = (<Egypt_RollerPanel>this.wrapView.getChildByName("slotListPanel").getComponent("Egypt_RollerPanel"));
        rollerComp.uninstall()
      }
    },
  ]
  private autoLaunch() {
    const fbp = getBgProxy();
    // if (fbp.getIsChangeGameRunning() === -1) {
    // 没有跳转游戏才自动发
    this.sendNotification(CommandDefine.BG, {}, BgCommandConst.AUTO_LAUNCH)
    // }
  }
  protected mainPrefabSource = {
    key: 'slotPanel',
    path: PrefabDefine.SLOT_PANEL,
    sourceType: Prefab,
    source: null
  }
}
