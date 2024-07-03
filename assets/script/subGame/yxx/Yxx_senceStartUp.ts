import { _decorator, Component } from 'cc';
import { startUp } from "./index";
const { ccclass, property } = _decorator;

@ccclass('Yxx_senceStartUp')
export class Yxx_senceStartUp extends Component {
	start() {
		startUp(this.node)
	}

	protected onLoad(): void {

	}

	update(deltaTime: number) {

	}
}