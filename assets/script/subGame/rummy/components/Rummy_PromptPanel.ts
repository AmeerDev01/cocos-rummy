import { Label, Node, Sprite, _decorator } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global } from '../../../hall';
import { GroupInfo, GroupType, PromptType } from '../type';
import { calSumPoint } from '../rummyTool';
import { Rummy_Card } from './Rummy_Card';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { rummyRoomChoseView } from '../index';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
	promptType?: PromptType,
	params?: any[],
}
export interface IEvent {
	close: () => void,
	callback: () => void
}

@ccclass('Rummy_PromptPanel')
export class Rummy_PromptPanel extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	protected propertyNode = {
		props_spr_show_confirm_panel: new Node(),
		props_spr_drop_panel: new Node(),
		props_invalid_show_panel: new Node(),

		props_btn_show_cancel: new Node(),
		props_btn_show: new Node(),
		props_btn_show_close: new Node(),
		props_btn_drop_yes: new Node(),
		props_btn_drop_no: new Node(),
		props_drop_num: new Label(),

		props_invalid_show_btn_off: new Node(),
		props_invalid_show_btn_ok: new Node(),
		props_pure_sequence: new Node(),
		props_second_sequence: new Node(),
		props_zero_point: new Node(),
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
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			this.events.close();
		})
		this.propertyNode.props_btn_show.on(Node.EventType.TOUCH_END, () => {
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			this.events.close();
			this.events.callback();
		})
		this.propertyNode.props_btn_show_close.on(Node.EventType.TOUCH_END, () => {
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			this.events.close();
		})
		this.propertyNode.props_btn_drop_yes.on(Node.EventType.TOUCH_END, () => {
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			this.events.close();
			this.events.callback();
		})
		this.propertyNode.props_btn_drop_no.on(Node.EventType.TOUCH_END, () => {
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			this.events.close();
		})
		this.propertyNode.props_invalid_show_btn_off.on(Node.EventType.TOUCH_END, () => {
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			this.events.close();
		})
		this.propertyNode.props_invalid_show_btn_ok.on(Node.EventType.TOUCH_END, () => {
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			this.events.close();
		})
	}

	protected useProps(key: keyof IProps | '_setDone', value: { pre: any, cur: any }) {
		if (key === '_setDone') {
			this.propertyNode.props_spr_drop_panel.active = this.props.promptType === PromptType.DROP_PROMPT;
			this.propertyNode.props_spr_show_confirm_panel.active = this.props.promptType === PromptType.SHOW_CONFIRM;

			if (this.props.promptType === PromptType.DROP_PROMPT) {
				this.propertyNode.props_spr_drop_panel.active = true;
				this.propertyNode.props_drop_num.string = this.props.params[0];
			} else if (this.props.promptType === PromptType.SHOW_CONFIRM) {
				this.propertyNode.props_spr_show_confirm_panel.active = true;
			} else if (this.props.promptType === PromptType.INVALID_SHOW) {
				this.propertyNode.props_invalid_show_panel.active = true;
				this.calInvalidShow();
			}
		}
	}

	private calInvalidShow() {
		const groupInfos: GroupInfo[] = this.props.params[0];

		if (groupInfos[0].groupType !== GroupType.PURE) {
			return;
		}
		this.calSequence(this.propertyNode.props_pure_sequence, true)
		if (groupInfos.filter(v => v.groupType !== GroupType.NOT).length === 1) {
			return;
		}
		this.calSequence(this.propertyNode.props_second_sequence, true)

		let sum = 0;
		groupInfos.filter(v => v.groupType === GroupType.NOT)
			.forEach(v => sum += calSumPoint(v.groups.children.map(v => v.getComponent(Rummy_Card).props.card)))
		if (sum !== 0) {
			return;
		}
		this.calSequence(this.propertyNode.props_zero_point, true)
	}

	private calSequence(rightWrongNode: Node, isRight: boolean) {
		rightWrongNode.getChildByName("icon01_wrong").active = !isRight
		rightWrongNode.getChildByName("icon02_right").active = isRight
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

