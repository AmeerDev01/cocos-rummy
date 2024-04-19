import { INotification } from "../../Framework/interfaces/INotification"
import { RollerMediatorConst } from "../Mediator/RollerMediator";
import { RollerType } from "../Proxy/SlotProxy";
import { BaseCommand, IListExecute } from './BaseCommand'
import { SKT_MAG_TYPE, sktMsgListener, SubGameType } from "../Proxy/SocketProxy";
import { BgMediatorConst } from "../Mediator/BgMediator";
import { getSlotProxy, getSocketProxy } from "../phoenix_utils";

export enum RollerCommandConst {
    BEGIN_ROLL = "beginRoll",
    END_ROLL = "endRoll"
}

export class RollerCommand extends BaseCommand {
    protected listExecute: Array<IListExecute<RollerCommand>> = [
        {
            type: RollerMediatorConst.INIT_ROLLER_PANEL,
            handler(notification: INotification) {
                const { gameType, freeGameCount } = notification.getBody() || {}
                //在初始化界面之前要初始化数据 'iconRollerQueue' | 'largeIconRollerQueue'
                const _gameRunner: SubGameType = gameType || getSocketProxy().getTransferGameInfo().gameType()
                // const rollerType = _gameRunner === SubGameType.MAIN ? RollerType.NORMAL : RollerType.LARGE;
                getSlotProxy().initRoller()

                // if (gameType === 1 && freeGameCount === 0) {
                //     // this.sendNotification(RollerMediatorConst.THESLOTISHIDDEN, { subGameType: SubGameType.MAIN, state: true })
                //     this.sendNotification(BgMediatorConst.PHOENIX_SGCHOOSE)
                // } else {
                //     this.sendNotification(BgMediatorConst.CHANGE_BG, { gameType: _gameRunner })
                // }
                // 接收下注的结果
                sktMsgListener.add(SKT_MAG_TYPE.LAUNCH, 'roller', (data) => {
                    // const gt = (this.facade.retrieveProxy(ProxyDefine.WEBSOCKET) as SocketProxy).getTransferGameInfo().gameType();
                    // if (gt === SubGameType.SUB_GAME1) return
                    const rollerType = _gameRunner === SubGameType.MAIN ? RollerType.NORMAL : RollerType.LARGE;
                    const stopIndexArr = getSocketProxy().getTransferGameInfo().stopIndexArr()
                    const dockIocn = getSocketProxy().getTransferGameInfo().getDockIcon()
                    this.sendNotification(RollerMediatorConst.BEGIN_ROLL, {
                        //stopIndex: [42, 8, 29, 1, 1],
                        // targetList:[
                        //     [
                        //         [0],
                        //         [2],
                        //         [2],
                        //         [2],
                        //         [0]
                        //     ],
                        //     [
                        //         [1],
                        //         [0],
                        //         [0],
                        //         [0],
                        //         [1]
                        //     ],
                        //     [
                        //         [0],
                        //         [2],
                        //         [2],
                        //         [2],
                        //         [0]
                        //     ],
                        // ],
                        stopIndex: stopIndexArr,
                        targetList: getSocketProxy().getTransferGameInfo().targetList().map(item => item.coord.map(item2 => item2[1])),
                        dockIocn
                    })
                }, 2)
                return notification.getBody();
            }
        },
        {
            type: RollerMediatorConst.BEGIN_ROLL,
            handler(notification: INotification) {
                return notification.getBody()
            }
        },
        {
            type: RollerMediatorConst.END_ROLL,
            handler(notification: INotification) {
                return notification.getBody()
            }
        },
        {
            type: RollerMediatorConst.UNINSTALL_ROLLER_PANEL,
            handler(notification: INotification) {
                sktMsgListener.remove(SKT_MAG_TYPE.LAUNCH, 'roller')
                return true
            }
        }
    ]

    public execute(notification: INotification): void {
        super.execute(notification)
    }
}
