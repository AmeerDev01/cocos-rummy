import { _decorator, Button, Label, Node, sp } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global } from '../../../hall';
import { BuyType } from '../../../hall/components/Hall_ShopPanel';
import StepNumber from '../../../utils/StepNumber';
import { AutoLauncherInfo, AutoLauncherType, DialogInfo, DialogType, GameType, GameTypeInfo, isAuto } from '../type';
import { getNodeByNameDeep } from '../../../utils/tool';
import { updateSubGameAnimationPlayInfo } from '../store/actions/game';
import config from '../config';
import { starlightv2_Audio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	buyAmount?: number,
}
export interface IEvent {
	onClose: () => void,
	onBuy: () => void,
}

@ccclass('StarlightV2_BuyMiniGame')
export class StarlightV2_BuyMiniGame extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_bg_node: new Node(),
		props_btn_box_on: new Node(),
		props_btn_box_off: new Node(),
		props_label_box_gold: new Label(),
	}

	public props: IProps = {
		buyAmount: 0,
	}

	public events: IEvent = {
		onClose: () => { },
		onBuy: () => { },
	}

	protected initState() {
		return {}
	}

	protected bindEvent(): void {
		this.propertyNode.props_bg_node.on(Node.EventType.TOUCH_END, () => {
			starlightv2_Audio.playOneShot(SoundPathDefine.BUY_FREE_DIALOG_CLOSE);
			this.events.onClose();
		})
		this.propertyNode.props_btn_box_on.on(Node.EventType.TOUCH_END, () => {
			starlightv2_Audio.playOneShot(SoundPathDefine.BUY_FREE_DIALOG_CONFIRM);
			this.events.onClose();
			this.events.onBuy();
		})
		this.propertyNode.props_btn_box_off.on(Node.EventType.TOUCH_END, () => {
			starlightv2_Audio.playOneShot(SoundPathDefine.BUY_FREE_DIALOG_CLOSE);
			this.events.onClose();
		})
	}

	protected useProps(key: keyof IProps | '_setDone', value: { pre: any, cur: any }) {
		if (this.node && this.node.isValid) {
			if (key === 'buyAmount') {
				this.propertyNode.props_label_box_gold.string = this.props.buyAmount.formatAmountWithCommas();
			}
		}
	}

	protected onDestroy(): void {
		starlightv2_Audio.longStop();
	}

	protected bindUI(): void {
	}

	update(deltaTime: number) {

	}
}

