import { _decorator, Component, Node } from 'cc';
import { startUp } from './index';
const { ccclass, property } = _decorator;

@ccclass('Rummy_senceStartUp')
export class Rummy_senceStartUp extends Component {
	start() {
		startUp(this.node)
	}

	update(deltaTime: number) {

	}
}

