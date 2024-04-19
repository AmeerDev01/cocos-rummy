import { _decorator, Component, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { EffectType, getEffectByType } from '../../../utils/NodeIOEffect';
import { changeAutoLauncherType, setShowAuthLaunch } from '../store/actions/game';
import { AutoLauncherType } from '../type';
import { setRollSpeed } from '../store/actions/roller';
import { playBiu } from '../index';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	isShowAutoLaunch: boolean
	isWaiting: boolean
	autoLauncherType: AutoLauncherType
}
export interface IEvent {

}

@ccclass('GodWealth_authLauncher')
export class GodWealth_authLauncher extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}
	protected propertyNode = {
		props_btn_down10: new Node(),
		props_btn_down20: new Node(),
		props_btn_down50: new Node(),
		props_btn_down100: new Node(),
		props_btn_down500: new Node(),
		// props_btn_downFast: new Node(),
		props_btn_downMax: new Node()
	}

	public props: IProps = {
		isShowAutoLaunch: false,
		isWaiting: true,
		autoLauncherType: AutoLauncherType.NONE
	}

	public events: IEvent = {

	}

	protected initState() {
		return {}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_down10.on(Node.EventType.TOUCH_END, () => this.setType(AutoLauncherType.TIME_10))
		this.propertyNode.props_btn_down20.on(Node.EventType.TOUCH_END, () => this.setType(AutoLauncherType.TIME_20))
		this.propertyNode.props_btn_down50.on(Node.EventType.TOUCH_END, () => this.setType(AutoLauncherType.TIME_50))
		this.propertyNode.props_btn_down100.on(Node.EventType.TOUCH_END, () => this.setType(AutoLauncherType.TIME_100))
		this.propertyNode.props_btn_down500.on(Node.EventType.TOUCH_END, () => this.setType(AutoLauncherType.TIME_500))
		// this.propertyNode.props_btn_downFast.on(Node.EventType.TOUCH_END, () => this.setType(AutoLauncherType.LAMIT_FAST))
		this.propertyNode.props_btn_downMax.on(Node.EventType.TOUCH_END, () => this.setType(AutoLauncherType.LIMIT))
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "isWaiting") {
			// console.log("isWaiting", this.props.isWaiting)
		}
		if (key === "isShowAutoLaunch") {
			if (this.props.isShowAutoLaunch) {
				this.show()
			} else {
				this.hide()
			}
		}
		if (key === "autoLauncherType") {
			if (value.cur === "none") {
				return;
			} else {
				playBiu()
			}
			
		}
	}
	private setType(autoLauncherType: AutoLauncherType) {
		this.dispatch(changeAutoLauncherType(autoLauncherType))
		this.dispatch(setShowAuthLaunch(false))
		if (autoLauncherType === AutoLauncherType.LAMIT_FAST) {
			this.dispatch(setRollSpeed(1.5))
		} else {
			this.dispatch(setRollSpeed(1))
		}
	}
	private show() {
		this.node.active = true;
		getEffectByType(EffectType.EFFECT1)(this.node).enter().then(() => { })
	}
	private hide() {
		getEffectByType(EffectType.EFFECT1)(this.node).out(false).then(() => {
			this.node.active = false;
		})
	}

	protected bindUI(): void {
		this.node.active = false
	}

	update(deltaTime: number) {

	}
}

