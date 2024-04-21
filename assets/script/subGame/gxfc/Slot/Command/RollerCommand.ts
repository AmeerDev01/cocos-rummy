import Facade from "../../Framework/care/Facade"
import { INotification } from "../../Framework/interfaces/INotification"
import { ProxyDefine } from "../Const/ProxyDefine";
import { RollerMediatorConst } from "../Mediator/RollerMediator";
import { SlotProxy, RollerType } from "../Proxy/SlotProxy";
import { BaseCommand, IListExecute } from './BaseCommand'
import { SubGameType, SKT_MAG_TYPE, SocketProxy, sktMsgListener } from "../Proxy/SocketProxy";
import { BgMediatorConst } from "../Mediator/BgMediator";
import { getSlotProxy, getSocketProxy } from "../utils";

export enum RollerCommandConst {
	BEGIN_ROLL = "beginRoll",
	END_ROLL = "endRoll"
}

export class RollerCommand extends BaseCommand {
	protected listExecute: Array<IListExecute<RollerCommand>> = [
		{
			type: RollerMediatorConst.INIT_ROLLER_PANEL,
			handler(notification: INotification) {
				const { gameType } = notification.getBody() || {}
				//在初始化界面之前要初始化数据 'iconRollerQueue' | 'largeIconRollerQueue'
				const _gameRunner: SubGameType = gameType || getSocketProxy().getTransferGameInfo().gameType()
				// const rollerType = _gameRunner === SubGameType.MAIN ? RollerType.NORMAL : RollerType.LARGE;
				getSlotProxy().initRoller()

				// 接收下注的结果
				sktMsgListener.add(SKT_MAG_TYPE.LAUNCH, 'roller', (data) => {
					// const gt = (this.facade.retrieveProxy(ProxyDefine.WEBSOCKET) as SocketProxy).getTransferGameInfo().gameType();
					// if (gt === SubGameType.SUB_GAME1) return
					const rollerType = _gameRunner === SubGameType.MAIN ? RollerType.NORMAL : RollerType.LARGE;
					const stopIndexArr = getSocketProxy().getTransferGameInfo().stopIndexArr()
					const dockIocn = getSocketProxy().getTransferGameInfo().getWildRollerId()
					// console.log(stopIndexArr)
					// console.log(this.getSocketProxy().getTransferGameInfo().targetList().map(item => item.coord.map(item2 => item2[1])))
					this.sendNotification(RollerMediatorConst.BEGIN_ROLL, {
						// stopIndex: [42, 8, 29, 1, 1],
						// targetList: [[0, 0, 0, 0, 0], [1, 1, 1, 1, 1]],
						stopIndex: stopIndexArr,
						targetList: getSocketProxy().getTransferGameInfo().targetList().map(item => item.coord.map(item2 => item2[1])),
						dockIocn
					})
				}, 2)
				return notification.getBody()
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