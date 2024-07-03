import { _decorator, Button, Component, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {

}
export interface IEvent {
	onCloseHandle: () => void
}

@ccclass('Hall_ProhibitPanel')
export class Hall_ProhibitPanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_btn_off: new Button()
	}

	public props: IProps = {

	}

	public events: IEvent = {
		onCloseHandle: () => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_off.node.on(Node.EventType.TOUCH_END, () => {
			this.events.onCloseHandle()
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

