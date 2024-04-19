import { INotification } from "../../Framework/interfaces/INotification"
import Command from "../../Framework/patterns/command/Command"
import { CommandDefine } from "../Const/CommandDefine"
import { ProxyDefine } from "../Const/ProxyDefine"
import { LocalCacheDataProxy } from '../Proxy/LocalCacheDataProxy'
import MainBgMediator from "../Mediator/BgMediator"
import { MediatorDefine } from "../Const/MediatorDefine"
import { ApplicationGlobal } from "../Const/ApplicationGlobal"
import { SlotProxy } from "../Proxy/SlotProxy"
import { SocketProxy } from "../Proxy/SocketProxy"
import { BgCommand } from "./BgCommand"
import RollerMediator from "../Mediator/RollerMediator"
import { RollerCommand } from "./RollerCommand"
import { LoaderCommand } from "./LoaderCommand"
import LoaderMediator, { LoaderViewType } from "../Mediator/LoaderMediator"
import { SubGameProxy } from "../Proxy/SubGameProxy"
import { BgProxy } from "../Proxy/BgProxy"


export class StartupCommand extends Command {
    public execute(notification: INotification): void {
        super.execute(notification)
        this.facade.registerProxy(new LocalCacheDataProxy(ProxyDefine.LOCAL_CACHE_DATA, ''))
        this.facade.registerProxy(new SlotProxy(ProxyDefine.SLOT))
        this.facade.registerProxy(new SocketProxy(ProxyDefine.WEBSOCKET))
        this.facade.registerProxy(new BgProxy(ProxyDefine.BG))
        // this.facade.registerProxy(new SubGameProxy(ProxyDefine.SUB_GAME))

        this.facade.registerMediator(new MainBgMediator(MediatorDefine.BG, ApplicationGlobal.mainPanel))
        this.facade.registerMediator(new RollerMediator(MediatorDefine.ROLLER_PANEL, ApplicationGlobal.mainPanel))
        this.facade.registerMediator(new LoaderMediator(MediatorDefine.LOADER_PANEL, ApplicationGlobal.mainPanel))
        // this.facade.registerMediator(new SubGameMediator(MediatorDefine.SUB_GAME_PANEL, ApplicationGlobal.mainPanel))
        
        this.facade.registerCommand(CommandDefine.LOADER, LoaderCommand)
        this.facade.registerCommand(CommandDefine.BG, BgCommand)
        this.facade.registerCommand(CommandDefine.ROLLER, RollerCommand)

        //初始化主界面（标准做法，调用command，command调用mediator）
        this.sendNotification(CommandDefine.LOADER, {}, LoaderViewType.INIT_LOADER_PANEL)
        // this.sendNotification(CommandDefine.BG, {}, LoaderViewType.INIT_LOADER_PANEL)
        // this.login()
        //this.sendNotification(CommandDefine.InitDeskPanel, {});
    }
    
}