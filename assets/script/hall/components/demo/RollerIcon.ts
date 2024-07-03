import { _decorator, Component, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
const { ccclass, property } = _decorator;

export interface IState {
	width: number,
	height: number,
	padding: number,
	/**id */
	iconId: number,
	/**执行的动画序号 */
	animationIndex: number,
	/**图标元素的偏移量 */
	margin: [number, number]
}

@ccclass('RollerIcon')
export class RollerIcon extends Component {
	start() {

	}

	update(deltaTime: number) {

	}
}

