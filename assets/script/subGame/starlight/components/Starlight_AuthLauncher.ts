import { _decorator, Component, Node, Animation, ToggleContainer, Toggle, Button } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { EffectType, getEffectByType } from '../../../utils/NodeIOEffect';
import { changeAutoLauncherType, setShowAuthLaunch } from '../store/actions/game';
import { AutoLauncherType } from '../type';
import { setRollSpeed } from '../store/actions/roller';
import { log } from '../../../common/fish/CalculteRule';
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

@ccclass('Starlight_AuthLauncher') 
export class Starlight_AuthLauncher extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}
	protected propertyNode = {
		props_btn_auto: new Node(),
		props_btn_confirm: new Node(),
		props_btn_off: new Node(),
	}
	private selectedNode: Node
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
		this.propertyNode.props_btn_auto.children.forEach((toggle) => {
			toggle.getComponent(Toggle).node.on(Node.EventType.TOUCH_END, this.onToggleClick, this);
		});
		this.propertyNode.props_btn_confirm.on(Node.EventType.TOUCH_END, () => {
			this.currentSelection(this.selectedNode && this.selectedNode.name)
		})
		this.propertyNode.props_btn_off.getComponent(Button).node.on(Button.EventType.CLICK, () => {
			this.dispatch(setShowAuthLaunch(false))
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "isWaiting") {
			//console.log("isWaiting", this.props.isWaiting)
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
		}
	}
	private currentSelection(name) {
		switch (name) {
			case 'props_btn_down10':
				this.setType(AutoLauncherType.TIME_10)
				break;
			case 'props_btn_down20':
				this.setType(AutoLauncherType.TIME_20)
				break;
			case 'props_btn_down50':
				this.setType(AutoLauncherType.TIME_50)
				break;
			case 'props_btn_down100':
				this.setType(AutoLauncherType.TIME_100)
				break;
			case 'props_btn_down500':
				this.setType(AutoLauncherType.TIME_500)
				break;
			case 'props_btn_downMax':
				this.setType(AutoLauncherType.LIMIT)
				break;
			default:
				this.setType(AutoLauncherType.TIME_10)
		}
	}
	private onToggleClick(event) {
		// 获取点击的 Toggle 按钮
		const clickedToggle = event.target.getComponent(Toggle);
		if (!clickedToggle.isChecked) {
			clickedToggle.isChecked = true;
			this.selectedNode = event.target
			return;
		}
		// 取消其他 Toggle 按钮的选中状态
		this.propertyNode.props_btn_auto.children.forEach((toggle) => {
			if (toggle !== clickedToggle) {
				toggle.getComponent(Toggle).isChecked = false;
			}
		});
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

	protected bindUI(): void {
		this.node.active = false
	}

	update(deltaTime: number) {
	}
}

