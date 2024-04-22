import { _decorator, Component } from 'cc';
import { startUp } from './index';
const { ccclass, property } = _decorator;

@ccclass('Fish_senceStartUp')
export class Fish_senceStartUp extends Component {
	start() {
		startUp(this.node)
	}

	update(deltaTime: number) {

	}
}
