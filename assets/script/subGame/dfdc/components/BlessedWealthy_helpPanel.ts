import { _decorator, Button, Component, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { playBtnClick, playTurn } from '../index';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {

}
export interface IEvent {
	closeHandler: () => void
}

@ccclass('BlessedWealthy_helpPanel')
export class BlessedWealthy_helpPanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_btn_rule_colse: new Button(),
		props_btn_rule_left: new Node(),
		props_btn_rule_right:new Node(),
		// props_guize_sg_3:new Node(),
		
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
		this.propertyNode.props_btn_rule_colse.node.on(Button.EventType.CLICK, () => {
			playBtnClick()
			this.events.closeHandler()
		}, true)
		// this.propertyNode.props_guize_sg_1.on(Node.EventType.TOUCH_MOVE, () => {
		// 	// playTurn()
		// })
		// this.propertyNode.props_guize_sg_2.on(Node.EventType.TOUCH_MOVE, () => {
		// 	// playTurn()
		// })
		// this.propertyNode.props_guize_sg_3.on(Node.EventType.TOUCH_MOVE, () => {
		// 	playTurn()
		// })
	}

	update(deltaTime: number) {

	}
}

