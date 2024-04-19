import { _decorator, Color, Component, instantiate, Label, Node, Prefab, v2 } from 'cc';

import Facade from "../Framework/care/Facade";
import { CommandDefine } from './Const/CommandDefine';
import { StartupCommand } from './Command/StartupCommand';

export class GodWealth_MainFacade extends Facade {
    public initializeController(): void {
        super.initializeController();
        this.registerCommand(CommandDefine.START_UP, StartupCommand)
    }

    public initializeModel(): void {
        super.initializeModel()
        //this.registerProxy(new LoginRequestProxy(ProxyDefine.LoginRequest));
    }

    public initializeView(): void {
        super.initializeView()
    }

    public startup(): void {
        this.sendNotification(CommandDefine.START_UP)
    }
}
