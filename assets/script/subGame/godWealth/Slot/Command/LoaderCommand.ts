import { global, lang } from "../../../../hall";
import Facade from "../../Framework/care/Facade"
import { INotification } from "../../Framework/interfaces/INotification"
import Mediator from "../../Framework/patterns/mediator/Mediator";
import { CommandDefine } from "../Const/CommandDefine";
import { MediatorDefine } from "../Const/MediatorDefine";
import { ProxyDefine } from "../Const/ProxyDefine";
import BaseMediator from "../Mediator/BaseMediator";
import BgMediator, { BgMediatorConst } from "../Mediator/BgMediator";
import { LoaderViewType } from "../Mediator/LoaderMediator";
import { RollerMediatorConst } from "../Mediator/RollerMediator";
import { SubGameType, SocketProxy } from "../Proxy/SocketProxy";
import { BaseCommand, IListExecute } from './BaseCommand'
import { BgCommand, BgCommandConst } from "./BgCommand";

export class LoaderCommand extends BaseCommand {
	protected listExecute: Array<IListExecute<LoaderCommand>> = [
		{
			type: LoaderViewType.INIT_LOADER_PANEL,
			handler(notification: INotification) {
				//获取所有的mediator的资源传过去
				const sourceList = [
					...(<BaseMediator>this.facade.retrieveMediator(MediatorDefine.BG)).sourceMap,
					...(<BaseMediator>this.facade.retrieveMediator(MediatorDefine.ROLLER_PANEL)).sourceMap,
				]
				return {
					data: sourceList,
					done: () => {
						(<SocketProxy>this.facade.retrieveProxy(ProxyDefine.WEBSOCKET)).initSocket(() => {
							this.sendNotification(CommandDefine.BG, {}, BgMediatorConst.INIT_MAIN_PANEL)
							this.sendNotification(CommandDefine.BG, {}, BgCommandConst.AUTH)
							///this.sendNotification(CommandDefine.BG, {}, BgCommandConst.AUTH)
							// this.sendNotification(CommandDefine.ROLLER, { gameType: SubGameType.MAIN }, RollerMediatorConst.INIT_ROLLER_PANEL)
							// this.sendNotification(CommandDefine.SUB_GAME, {}, SubGameMediatorConst.INIT_SUB_GAME_PANEL)
						}, () => {
							global.closeSubGame({confirmContent: lang.write(k =>  k.WebSocketModule.ConfigGameFaild)})
							console.error("socket连接错误")
						})
					}
				}
			}
		}
	]
	public execute(notification: INotification): void {
		this.facade.registerProxy(new SocketProxy(ProxyDefine.WEBSOCKET))
		super.execute(notification)
	}
}
