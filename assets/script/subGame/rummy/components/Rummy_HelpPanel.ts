import { Label, Node, Sprite, _decorator } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global } from '../../../hall';
import { DeskInfo } from '../type';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { rummyRoomChoseView } from '../index';
import config from '../config';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
	/**桌子信息 */
	deskInfo?: DeskInfo,
}
export interface IEvent {
	close: () => void
}

@ccclass('Rummy_HelpPanel')
export class Rummy_HelpPanel extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	protected propertyNode = {
		props_btn_help_off: new Node(),
		props_btn_ok: new Node(),
		props_label_point_value: new Label(),
		props_label_desk_no: new Label(),
		props_label_max_win: new Label(),
		props_label_notice: new Label(),
	}

	public props: IProps = {
		deskInfo: undefined,
	}

	public events: IEvent = {
		close: () => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_help_off.on(Node.EventType.TOUCH_END, () => {
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			this.events.close();
		})
		this.propertyNode.props_btn_ok.on(Node.EventType.TOUCH_END, () => {
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			this.events.close();
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (this.node && this.node.isValid) {
			if (key === 'deskInfo' && value.cur) {
				this.propertyNode.props_label_point_value.string = this.props.deskInfo.pointValue + ''
				this.propertyNode.props_label_desk_no.string = this.props.deskInfo.deskNo + ''
				this.propertyNode.props_label_max_win.string = Number(this.props.deskInfo.maxWin * (config.seatNumber - 1)).formatAmountWithLetter() + ''
				this.propertyNode.props_label_notice.string = Number(this.props.deskInfo.maxWin / 2).formatAmountWithLetter() + ''
			}
		}
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

