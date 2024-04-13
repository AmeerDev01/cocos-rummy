import { Label, Node, Sprite, _decorator } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global } from '../../../hall';
import { PromptType } from '../type';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
	promptType: PromptType,
	params: any[],
}
export interface IEvent {
	close: () => void,
	callback: () => void
}

@ccclass('Rummy_PromptPanel')
export class Rummy_PromptPanel extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	protected propertyNode = {
		props_spr_show: new Node(),
		props_btn_show_cancel: new Node(),
		props_btn_show: new Node(),
		props_btn_show_close: new Node(),
		props_spr_drop: new Node(),
		props_btn_drop_yes: new Node(),
		props_btn_drop_no: new Node(),
		props_drop_num: new Label(),
	}

	public props: IProps = {
		promptType: undefined,
		params: [],
	}

	public events: IEvent = {
		close: () => { },
		callback: () => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_show_cancel.on(Node.EventType.TOUCH_END, () => {

		})
		this.propertyNode.props_btn_show.on(Node.EventType.TOUCH_END, () => {

		})
		this.propertyNode.props_btn_show_close.on(Node.EventType.TOUCH_END, () => {

		})
		this.propertyNode.props_btn_drop_yes.on(Node.EventType.TOUCH_END, () => {
			this.events.close();
			this.events.callback();
		})
		this.propertyNode.props_btn_drop_no.on(Node.EventType.TOUCH_END, () => {
			this.events.close();
		})
	}

	protected useProps(key: keyof IProps | '_setDone', value: { pre: any, cur: any }) {
		if (key === '_setDone') {
			this.propertyNode.props_spr_drop.active = this.props.promptType === PromptType.DROP_PROMPT;
			this.propertyNode.props_spr_show.active = this.props.promptType === PromptType.SHOW;

			if (this.props.promptType === PromptType.DROP_PROMPT) {
				this.propertyNode.props_spr_drop.active = true;
				this.propertyNode.props_drop_num.string = this.props.params[0];
			}
		}
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

