import { _decorator, Color, Component } from 'cc';
const { ccclass, property } = _decorator;
import { startUp } from "./index"

@ccclass('crashV2_senceStartUp')
export class crashV2_senceStartUp extends Component {
	start() {
		console.log(this.node);
		
		startUp(this.node)
	}

	protected onLoad(): void {
		
	}

	update(deltaTime: number) {

	}
}