import { _decorator, Color, Component, instantiate, Label, Node, Prefab, v2 } from 'cc';
import { ApplicationGlobal } from './Const/ApplicationGlobal';
import { MainFacade } from './MainFacade';
const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {
    // @property(Prefab)
    // gateView: Prefab = null;

    start() {
        new MainFacade().startup()
    }

    protected onLoad(): void {
        ApplicationGlobal.mainPanel = this.node as any
    }

    update(deltaTime: number) {
        
    }
}

