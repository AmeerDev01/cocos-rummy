import { Label, Node, _decorator } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { RoomInfo, RoomTypeDetailInfo } from '../type';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
}
export interface IEvent {
	onClose: () => void
}

@ccclass('Fish_Help')
export class Fish_Help extends BaseComponent<IState, IProps, IEvent> {
	start() {
	}

	protected propertyNode = {
		props_btn_close: new Node(),
	}
	public props: IProps = {

	}

	public events: IEvent = {
		onClose: () => { },
	}

	protected initState() {
		return {
		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_close.on(Node.EventType.TOUCH_END, () => {
			this.events.onClose();
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
	}

	protected bindUI(): void {
	}

	update(deltaTime: number) {
	}
}

