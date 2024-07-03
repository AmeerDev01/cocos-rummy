import { _decorator, Button, Component, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {

}
export interface IEvent {
	closeHandler: () => void
}

@ccclass('Fruit777_HelpPanel')
export class Fruit777_HelpPanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_btn_insst5roduce_close: new Button()
	}

	public props: IProps = {

	}

	public events: IEvent = {
		closeHandler: () => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

	}

	protected bindUI(): void {
		this.propertyNode.props_btn_insst5roduce_close.node.on(Button.EventType.CLICK, () => {
			this.events.closeHandler()
		}, true)
	}

	update(deltaTime: number) {

	}
}

