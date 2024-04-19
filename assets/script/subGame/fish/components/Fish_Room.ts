import { Node, Toggle, Vec3, Widget, _decorator, tween } from 'cc';
import { sourceManageSelector } from '../index';
import { BaseComponent } from '../../../base/BaseComponent';
import { EffectType } from '../../../utils/NodeIOEffect';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import HelpViewModel from '../viewModel/HelpViewModel';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
}
export interface IEvent {
	update: (deltaTime: number) => void,
	/**设置锁定 */
	setLockFisState: (isChecked: boolean) => void,
	/**设置自动开火 */
	setAutoFire: (isChecked: boolean) => void,
	exitRoom: () => void,
	onDestroy: () => void,
}

@ccclass('Fish_Room')
export class Fish_Room extends BaseComponent<IState, IProps, IEvent> {
	start() {
	}

	protected propertyNode = {
		props_background_node: new Node(),
		props_fish_pond_node: new Node(),
		props_battery_node: new Node(),
		props_auto: new Node(),
		props_lock: new Node(),
		props_side_board: new Node(),
		props_side_jiantou: new Node(),
		props_sidebtn_exit: new Node(),
		props_sidebtn_help: new Node(),
	}
	public props: IProps = {
	}

	public events: IEvent = {
		update: (deltaTime: number) => { },
		setLockFisState: (isChecked: boolean) => { },
		setAutoFire: (isChecked: boolean) => { },
		exitRoom: () => { },
		onDestroy: () => { },
	}

	public getFishPondNode() {
		return this.propertyNode.props_fish_pond_node;
	}

	public getBatteryNode() {
		return this.propertyNode.props_battery_node;
	}

	public getBackgroundNode() {
		return this.propertyNode.props_background_node;
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_auto.on(Toggle.EventType.TOGGLE, (toggle: Toggle) => {
			this.events.setAutoFire(toggle.isChecked);
		})
		this.propertyNode.props_lock.on(Toggle.EventType.TOGGLE, (toggle: Toggle) => {
			this.events.setLockFisState(toggle.isChecked);
		})
		this.propertyNode.props_side_jiantou.on(Node.EventType.TOUCH_END, (e) => {
			this.sideBoardHideShow();
		})
		this.propertyNode.props_sidebtn_exit.on(Node.EventType.TOUCH_END, (e) => {
			this.events.exitRoom();
		})
		this.propertyNode.props_sidebtn_help.on(Node.EventType.TOUCH_END, () => {
			this.openHelp();
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
	}

	protected bindUI(): void {
	}

	private isTweenIn = false;
	private sideBoardHideShow(done?) {
		if (this.isTweenIn || !this.isValid) {
			return;
		}
		const widget = this.propertyNode.props_side_board.getComponent(Widget);
		const right = widget.right !== -1 ? -1 : -74;
		if (right === -1) {
			this.propertyNode.props_side_jiantou.setScale(1, 1);
		} else {
			this.propertyNode.props_side_jiantou.setScale(-1, 1);
		}
		this.isTweenIn = true;
		tween(widget).to(0.5, { right }).call(() => {
			this.isTweenIn = false;
			done && done();
		}).start();
	}

	public initSideBoard() {
		this.scheduleOnce(() => {
			this.sideBoardHideShow(() => {
				this.scheduleOnce(() => {
					this.sideBoardHideShow();
				}, 0.5)
			});
		}, 0.1)
	}

	public hideSideBoard() {
		this.propertyNode.props_side_board.getComponent(Widget).right = -74;
	}

	public setBtnLocaltion(scaleRatio: number) {
	}

	public setScale(scale) {
	}

	update(deltaTime: number) {
		this.events.update(deltaTime);
	}

	private openHelp() {
		new HelpViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.HELP).source).appendTo(this.node.parent, { effectType: EffectType.EFFECT1 }).connect();
	}

	protected onDestroy(): void {
		this.events.onDestroy();
	}
}

