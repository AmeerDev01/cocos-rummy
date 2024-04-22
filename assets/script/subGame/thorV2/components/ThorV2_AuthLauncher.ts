import { _decorator, Node, Toggle } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { AutoLauncherType, getAutoCount, isLimit } from '../type';
import { setAutoLauncherInfo } from '../store/actions/game';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
}
export interface IEvent {
	onClose: () => void,
	onSendBet: () => void,
}

@ccclass('ThorV2_AuthLauncher')
export class ThorV2_AuthLauncher extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	private autoType: AutoLauncherType = AutoLauncherType.TIME_10;

	protected propertyNode = {
		props_btn_confirm: new Node(),
		props_btn_off: new Node(),
		props_btn_auto: new Node(),
	}

	public props: IProps = {
		buyAmount: 0,
	}

	public events: IEvent = {
		onClose: () => { },
		onSendBet: () => { },
	}

	protected initState() {
		return {}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_off.on(Node.EventType.TOUCH_END, () => {
			this.events.onClose();
		})
		this.propertyNode.props_btn_confirm.on(Node.EventType.TOUCH_END, () => {
			const count = getAutoCount(this.autoType);
			this.dispatch(setAutoLauncherInfo({
				autoLauncherType: this.autoType,
				totalCount: count,
				leftCount: isLimit(this.autoType) ? 1 : count - 1,
			}))
			// egyptv2_Audio.playOneShot(SoundPathDefine.biu)
			// this.dispatch(setBetDropDownList(false));
			this.events.onSendBet();
			this.events.onClose();
		})
		this.propertyNode.props_btn_auto.children.forEach(v => {
			v.on(Toggle.EventType.TOGGLE, (e: Toggle) => {
				if (e.isChecked) {
					this.autoType = e.node.name as AutoLauncherType;
				}
			})
		})
	}

	protected useProps(key: keyof IProps | '_setDone', value: { pre: any, cur: any }) {
		if (this.node && this.node.isValid) {
		}
	}

	protected bindUI(): void {
	}

	update(deltaTime: number) {

	}
}

