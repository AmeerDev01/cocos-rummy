import { _decorator, Component, Node } from 'cc';
import { startUp } from './index';
const { ccclass, property } = _decorator;

@ccclass('Qiuqiu_senceStartUp')
export class Qiuqiu_senceStartUp extends Component {
	start() {
		startUp(this.node)
	}

	update(deltaTime: number) {

	}
}

