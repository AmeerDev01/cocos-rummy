import { _decorator, Component, Node } from 'cc';
import { startUp } from './index';
const { ccclass, property } = _decorator;

@ccclass('Domino_senceStartUp')
export class Domino_senceStartUp extends Component {
	start() {
		startUp(this.node)
	}

	update(deltaTime: number) {

	}
}

