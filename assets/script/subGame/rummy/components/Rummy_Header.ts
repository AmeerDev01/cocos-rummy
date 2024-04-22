import { Animation, EventTouch, Label, Node, _decorator, director } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { updateBalanceCountdown } from '../store/action/game';
import { rummyRoomChoseView } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { RoomInfo } from '../type';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
	/**是否显示切换房间按钮 */
	isShowSwitchBtn: boolean,
	roomInfo?: RoomInfo,
}
export interface IEvent {
	exitRoom: () => void,
	changeRoom: () => void,
	onOpenDeskInfoPanel: () => void,
	onOpenRulePanel: () => void,
	onOpenSettingPanel: () => void,
}

@ccclass('Rummy_Header')
export class Rummy_Header extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	private isShowMenu = false;
	private canvasNode: Node;

	protected propertyNode = {
		props_home: new Node(),
		props_btn_menu: new Node(),
		props_menu_panel: new Node(),
		props_spr_menu_bg: new Node(),
		props_bet: new Label(),
		props_btn_desk_info: new Node(),
		props_btn_change: new Node(),
		props_btn_help: new Node(),
		props_btn_set: new Node(),
		props_switch_table: new Node(),
	}

	public props: IProps = {
		/**是否显示切换房间按钮 */
		isShowSwitchBtn: false,
		roomInfo: undefined,
	}

	public events: IEvent = {
		exitRoom: () => { },
		changeRoom: () => { },
		onOpenDeskInfoPanel: () => { },
		onOpenRulePanel: () => { },
		onOpenSettingPanel: () => { },
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_home.on(Node.EventType.TOUCH_END, () => {
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			this.hideMenu();
			this.events.exitRoom()
		})

		this.propertyNode.props_btn_menu.on(Node.EventType.TOUCH_END, () => {
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			if (!this.isShowMenu) {
				this.showMenu();
			}
		})
		this.propertyNode.props_btn_desk_info.on(Node.EventType.TOUCH_END, () => {
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			this.hideMenu();
			this.events.onOpenDeskInfoPanel();
		})
		this.propertyNode.props_btn_change.on(Node.EventType.TOUCH_END, () => {
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			this.hideMenu();
			this.events.changeRoom();
		})
		this.propertyNode.props_switch_table.on(Node.EventType.TOUCH_END, () => {
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			this.hideMenu();
			this.events.changeRoom();
		})
		this.propertyNode.props_btn_help.on(Node.EventType.TOUCH_END, () => {
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			this.hideMenu();
			this.events.onOpenRulePanel();
		})
		this.propertyNode.props_btn_set.on(Node.EventType.TOUCH_END, () => {
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			this.hideMenu();
			this.events.onOpenSettingPanel();
		})
		this.propertyNode.props_menu_panel.on(Node.EventType.TOUCH_END, (e: EventTouch) => {
			e.preventSwallow = true;
			this.hideMenu();
		})
		this.propertyNode.props_menu_panel.on(Node.EventType.TOUCH_START, (e: EventTouch) => {
			e.preventSwallow = true;
		})
		this.propertyNode.props_menu_panel.on(Node.EventType.TOUCH_MOVE, (e: EventTouch) => {
			e.preventSwallow = true;
		})
		this.propertyNode.props_menu_panel.on(Node.EventType.TOUCH_CANCEL, (e: EventTouch) => {
			e.preventSwallow = true;
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (this.node && this.node.isValid) {
			if (key === 'roomInfo') {
				this.propertyNode.props_bet.string = this.props.roomInfo.bet + '';
			} else if (key === 'isShowSwitchBtn') {
				this.propertyNode.props_switch_table.active = value.cur;
			}
		}
	}

	private showMenu() {
		this.isShowMenu = true;
		this.propertyNode.props_menu_panel.active = true;
		this.propertyNode.props_menu_panel.removeFromParent();
		this.canvasNode.addChild(this.propertyNode.props_menu_panel)
		const an = this.propertyNode.props_spr_menu_bg.getComponent(Animation);
		an.stop();
		an.play();
	}

	private hideMenu() {
		this.propertyNode.props_menu_panel.active = false;
		this.propertyNode.props_menu_panel.removeFromParent();
		this.scheduleOnce(() => {
			this.isShowMenu = false;
		}, 0.2)
	}

	protected bindUI(): void {
		this.canvasNode = director.getScene().getChildByName('Canvas');
		this.propertyNode.props_switch_table.active = false;
	}

	update(deltaTime: number) {

	}
}

