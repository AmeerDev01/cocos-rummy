import { _decorator, Component, sp, Node } from 'cc';
import config from '../config';
const { ccclass, property } = _decorator;

@ccclass('Egypt_SlotPanel')
export class Egypt_SlotPanel extends Component {


	start() {
	}
    hidePanels(bl){
        this.node.getChildByName('bg1').active=bl
    }
	update(deltaTime: number) {

	}
}

