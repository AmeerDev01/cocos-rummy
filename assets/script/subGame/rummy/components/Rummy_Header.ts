import { Animation, EventTouch, Label, Node, _decorator, director } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
	gold: number
}
export interface IEvent {
	exitRoom: () => void,
	onOpenDeskInfoPanel: () => void,
	onOpenRulePanel: () => void,
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
		props_gold: new Label(),
		props_btn_desk_info: new Node(),
		props_btn_change: new Node(),
		props_btn_help: new Node(),
		props_btn_set: new Node(),
	}

	public props: IProps = {
		gold: 0,
	}

	public events: IEvent = {
		exitRoom: () => { },
		onOpenDeskInfoPanel: () => { },
		onOpenRulePanel: () => { },
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_home.on(Node.EventType.TOUCH_END, () => {
			this.hideMenu();
			this.events.exitRoom()
		})

		this.propertyNode.props_btn_menu.on(Node.EventType.TOUCH_END, () => {
			if (!this.isShowMenu) {
				this.showMenu();
			}
		})
		this.propertyNode.props_btn_desk_info.on(Node.EventType.TOUCH_END, () => {
			this.hideMenu();
			this.events.onOpenDeskInfoPanel();
		})
		this.propertyNode.props_btn_change.on(Node.EventType.TOUCH_END, () => {
			this.hideMenu();
		})
		this.propertyNode.props_btn_help.on(Node.EventType.TOUCH_END, () => {
			this.hideMenu();
			this.events.onOpenRulePanel();
		})
		this.propertyNode.props_btn_set.on(Node.EventType.TOUCH_END, () => {
			this.hideMenu();
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
			if (key === 'gold') {
				this.updateGold();
			}
		}
	}

	private updateGold() {
		this.propertyNode.props_gold.string = this.props.gold.formatAmountWithCommas();
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
	}

	update(deltaTime: number) {

	}
}

