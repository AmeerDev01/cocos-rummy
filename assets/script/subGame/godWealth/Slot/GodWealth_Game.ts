import { _decorator, Color, Component, instantiate, Label, Node, Prefab, v2 } from 'cc';
import { ApplicationGlobal } from './Const/ApplicationGlobal';
import { GodWealth_MainFacade } from './GodWealth_MainFacade';
const { ccclass, property } = _decorator;
@ccclass('GodWealth_Game')
export class GodWealth_Game extends Component {
    // @property(Prefab)
    // gateView: Prefab = null;

    start() {
        new GodWealth_MainFacade().startup()
    }

    protected onLoad(): void {
        ApplicationGlobal.mainPanel = this.node as any
    }

    update(deltaTime: number) {

    }
}

