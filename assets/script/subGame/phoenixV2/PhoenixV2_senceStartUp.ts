import { _decorator, Color, Component } from 'cc';
const { ccclass, property } = _decorator;
import { startUp } from "./index"

@ccclass('PhoenixV2_senceStartUp')
export class PhoenixV2_senceStartUp extends Component {
	start() {
		startUp(this.node)
	}

	protected onLoad(): void {
		
	}

	update(deltaTime: number) {

	}
}