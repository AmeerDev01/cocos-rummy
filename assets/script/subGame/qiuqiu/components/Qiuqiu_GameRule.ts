import { _decorator, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { playBtnClick } from '../index';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
}
export interface IEvent {
	close: () => void
}

@ccclass('Qiuqiu_GameRule')
export class Qiuqiu_GameRule extends BaseComponent<IState, IProps, IEvent> {
	start() { }
	protected propertyNode = {
		props_btn_off: new Node(),
	}

	public props: IProps = {
	}

	public events: IEvent = {
		close: () => { }
	}

	protected initState() {
		return {
		}
	}
	protected bindEvent(): void {
		this.propertyNode.props_btn_off.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			this.events.close();
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
	}

	protected bindUI(): void {
	}

	update(deltaTime: number) {

	}
}

