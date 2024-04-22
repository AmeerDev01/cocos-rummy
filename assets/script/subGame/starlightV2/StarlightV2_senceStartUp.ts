import { _decorator, Color, Component } from 'cc';
const { ccclass, property } = _decorator;
import { startUp } from "./index"

@ccclass('StarlightV2_senceStartUp')
export class StarlightV2_senceStartUp extends Component {
	start() {
		startUp(this.node)
	}

	protected onLoad(): void {

	}

	update(deltaTime: number) {

	}
}