import { _decorator, Animation, director, EventTouch, find, Label, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global } from '../../../hall';
import { BuyType } from '../../../hall/components/Hall_ShopPanel';
import StepNumber from '../../../utils/StepNumber';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { thorv2_Audio } from '../index';
import { updateRollerStatus } from '../store/actions/roller';
import { RollerStatus } from '../type';
import config from '../config';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	gold: number,
}
export interface IEvent {
	quitGame: () => void,
	onOpenRule: () => void,
}

@ccclass('ThorV2_Header')
export class ThorV2_Header extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	private init = true;

	private isShowMenu = false;

	private canvasNode: Node;

	protected propertyNode = {
		props_btn_up_home: new Node(),
		props_btn_up_addGold: new Node(),
		// props_beli: new Node(),
		// props_SPECIAL: new Node(),
		props_btn_up_set: new Node(),
		props_Moeny_Label: new Label(),
		// props_number2: new Node(),
		props_btn_up_menu: new Node(),
		props_menu_panel: new Node(),
		props_spr_menu_bg: new Node(),

		props_btn_vip: new Node(),
		props_btn_info: new Node(),
		props_layout_glod: new Node(),
	}

	public props: IProps = {
		gold: 0,
	}

	public events: IEvent = {
		quitGame: () => { },
		onOpenRule: () => { }
	}

	protected initState() {
		return {}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_up_home.on(Node.EventType.TOUCH_END, () => {
			thorv2_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
			this.hideMenu();
			this.events.quitGame();
		})
		this.propertyNode.props_btn_up_set.on(Node.EventType.TOUCH_END, () => {
			thorv2_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
			global.openPersonCenter(2)
			this.hideMenu();
		})
		// this.propertyNode.props_beli.on(Node.EventType.TOUCH_END, () => {
		// thorv2_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
		// 	global.openShop()
		// })
		// this.propertyNode.props_SPECIAL.on(Node.EventType.TOUCH_END, () => {
		// thorv2_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
		// 	global.openShop(BuyType.TAS)
		// })
		this.propertyNode.props_btn_up_addGold.on(Node.EventType.TOUCH_END, () => {
			thorv2_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
			global.openShop()
		})
		this.propertyNode.props_layout_glod.on(Node.EventType.TOUCH_END, () => {
			thorv2_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
			global.openShop()
		})
		this.propertyNode.props_btn_vip.on(Node.EventType.TOUCH_END, () => {
			thorv2_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
			global.openVipMain();
			this.hideMenu();
		})
		this.propertyNode.props_btn_info.on(Node.EventType.TOUCH_END, () => {
			thorv2_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
			this.events.onOpenRule();
			this.hideMenu();
		})
		this.propertyNode.props_btn_up_menu.on(Node.EventType.TOUCH_END, () => {
			thorv2_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
			if (!this.isShowMenu) {
				this.showMenu();
			}
		})
		this.propertyNode.props_menu_panel.on(Node.EventType.TOUCH_END, (e: EventTouch) => {
			thorv2_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
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
		// console.log(`useProps: ${key} ${JSON.stringify(value)}`);
		if (this.node && this.node.isValid) {
			if (key === 'gold') {
				if (this.init) {
					this.propertyNode.props_Moeny_Label.string = this.goldFormat(value.cur);
					this.init = false;
				} else {
					this.updateGold(value);
				}
			}
		}
	}

	private goldFormat(gold: number) {
		// gold = Math.floor(gold);
		return  gold.formatAmountWithCommas();
	}

	private updateGold(value: { pre: any, cur: any }) {
		const diff = value.cur - value.pre;
		let done = undefined;
		if (diff > 0) {
			// done = () => {
			// 	this.dispatch(updateRollerStatus(RollerStatus.END))
			// }
		}

		const stepNumber = new StepNumber(value.pre, value.cur, (num) => {
			if (this.node && this.node.isValid) {
				this.propertyNode.props_Moeny_Label.string = this.goldFormat(num);
			}
		}, done);
		if (diff !== 0) {
			stepNumber.setFlyNode(this.propertyNode.props_Moeny_Label.node.parent, this.propertyNode.props_Moeny_Label.node, 20)
		}
		stepNumber.set(config.normalRollOption.numberRollerTime).start();
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

