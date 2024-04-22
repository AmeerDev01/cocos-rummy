import { _decorator, Button, Component, Node, Toggle, ToggleContainer } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { EffectType, getEffectByType } from '../../../utils/NodeIOEffect';
import { changeAutoLauncherType, setShowAuthLaunch } from '../store/actions/game';
import { AutoLauncherType } from '../type';
import { setRollSpeed } from '../store/actions/roller';
import { initToggle } from '../../../utils/tool';
const { ccclass, property } = _decorator;

export interface IState {
	thenAutoLaunchType: AutoLauncherType
}

export interface IProps {
	isShowAutoLaunch: boolean
	isWaiting: boolean
	autoLauncherType: AutoLauncherType
}
export interface IEvent {

}

@ccclass('Fruit777_AuthLauncher')
export class Fruit777_AuthLauncher extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}
	protected propertyNode = {
		props_btn_down10: new Node(),
		props_btn_down20: new Node(),
		props_btn_down50: new Node(),
		props_btn_down100: new Node(),
		props_btn_down500: new Node(),
		// props_btn_downFast: new Node(),
		props_btn_downMax: new Node(),
		props_btn_off: new Button(),
		props_btn_auto: new ToggleContainer(),
		props_btn_confirm: new Button()
	}

	public props: IProps = {
		isShowAutoLaunch: false,
		isWaiting: true,
		autoLauncherType: AutoLauncherType.NONE
	}

	public events: IEvent = {

	}

	protected initState() {
		return {
			thenAutoLaunchType: AutoLauncherType.TIME_10
		}
	}

	protected bindEvent(): void {
		// this.propertyNode.props_btn_down10.on(Node.EventType.TOUCH_END, () => this.setType(AutoLauncherType.TIME_10))
		// this.propertyNode.props_btn_down20.on(Node.EventType.TOUCH_END, () => this.setType(AutoLauncherType.TIME_20))
		// this.propertyNode.props_btn_down50.on(Node.EventType.TOUCH_END, () => this.setType(AutoLauncherType.TIME_50))
		// this.propertyNode.props_btn_down100.on(Node.EventType.TOUCH_END, () => this.setType(AutoLauncherType.TIME_100))
		// this.propertyNode.props_btn_down500.on(Node.EventType.TOUCH_END, () => this.setType(AutoLauncherType.TIME_500))
		// this.propertyNode.props_btn_downMax.on(Node.EventType.TOUCH_END, () => this.setType(AutoLauncherType.LIMIT))

		initToggle(this.propertyNode.props_btn_auto.node, this.node, new Fruit777_AuthLauncher.EventHandler(), "Fruit777_AuthLauncher", "changeToggleCallback");

		this.propertyNode.props_btn_confirm.node.on(Node.EventType.TOUCH_END, () => {
			this.setType(this.state.thenAutoLaunchType)
		})
		this.propertyNode.props_btn_off.node.on(Node.EventType.TOUCH_END, () => {
			this.dispatch(setShowAuthLaunch(false))
		})
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
			console.log(value.cur)
			this.updateCheckType()
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
		this.node.active = true
		getEffectByType(EffectType.EFFECT1)(this.node).enter().then(() => { })
	}
	private hide() {
		getEffectByType(EffectType.EFFECT1)(this.node).out(false).then(() => {
			this.node.active = false
		})
	}

	private changeToggleCallback(event: Event, customEventData: string) {
		switch ((event.target as any).getSiblingIndex()) {
			case 0:
				this.setState({ "thenAutoLaunchType": AutoLauncherType.TIME_10 })
				break;
			case 1:
				this.setState({ "thenAutoLaunchType": AutoLauncherType.TIME_20 })
				break;
			case 2:
				this.setState({ "thenAutoLaunchType": AutoLauncherType.TIME_50 })
				break;
			case 3:
				this.setState({ "thenAutoLaunchType": AutoLauncherType.TIME_100 })
				break;
			case 4:
				this.setState({ "thenAutoLaunchType": AutoLauncherType.TIME_500 })
				break;
			case 5:
				this.setState({ "thenAutoLaunchType": AutoLauncherType.LIMIT })
				break;
		}
	}

	updateCheckType() {
		switch (this.props.autoLauncherType) {
			case AutoLauncherType.TIME_10:
				this.propertyNode.props_btn_down10.getComponent(Toggle).isChecked = true
				break
			case AutoLauncherType.TIME_20:
				this.propertyNode.props_btn_down20.getComponent(Toggle).isChecked = true
				break
			case AutoLauncherType.TIME_50:
				this.propertyNode.props_btn_down50.getComponent(Toggle).isChecked = true
				break
			case AutoLauncherType.TIME_100:
				this.propertyNode.props_btn_down100.getComponent(Toggle).isChecked = true
				break
			case AutoLauncherType.TIME_500:
				this.propertyNode.props_btn_down500.getComponent(Toggle).isChecked = true
				break
			case AutoLauncherType.LIMIT:
				this.propertyNode.props_btn_downMax.getComponent(Toggle).isChecked = true
				break
		}
	}

	protected bindUI(): void {
		this.node.active = false
		this.updateCheckType()
	}

	update(deltaTime: number) {

	}
}

