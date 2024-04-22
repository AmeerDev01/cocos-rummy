
import { _decorator, Button, Component, Label, Node } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import { fetcher, lang } from '../index';
import { ApiUrl } from '../apiUrl';
import { addToastAction } from '../store/actions/baseBoard';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	amount: number
}
export interface IEvent {
	onClosePanel: () => void
}

@ccclass('Hall_ReliefPanel')
export class Hall_ReliefPanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_btn_sure: new Button(),
		props_label_gold: new Label(),
		props_Label_benefit: new Label()

	}

	public props: IProps = {
		amount: 0
	}

	public events: IEvent = {
		onClosePanel: () => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_sure.node.on(Node.EventType.TOUCH_END, () => {
			this.events.onClosePanel()
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "amount") {
			this.propertyNode.props_Label_benefit.string = this.propertyNode.props_Label_benefit.string.replace('000', this.props.amount.formatAmountWithCommas())
			this.propertyNode.props_label_gold.string = this.props.amount.formatAmountWithLetter()
		}
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

