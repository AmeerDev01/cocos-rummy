import {_decorator, Component} from 'cc';
import {ApplicationGlobal} from './Const/ApplicationGlobal';
import {Phoenix_MainFacade} from './phoenix_MainFacade';

const {ccclass, property} = _decorator;

@ccclass('Phoenix_Game')
export class Phoenix_Game extends Component {
    // @property(Prefab)
    // gateView: Prefab = null;

    start() {
        new Phoenix_MainFacade().startup()
    }

    protected onLoad(): void {
        ApplicationGlobal.mainPanel = this.node as any
    }

    update(deltaTime: number) {

    }
}

