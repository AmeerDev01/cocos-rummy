import { _decorator, Animation, EventTouch, Label, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global } from '../../../hall';
import { BuyType } from '../../../hall/components/Hall_ShopPanel';
import StepNumber from '../../../utils/StepNumber';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { GxfcV2_Audio, mainViewModel } from '../index';
import StepNumberV2 from '../../../utils/StepNumberV2';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	gold: number
}
export interface IEvent {
	quitGame: () => void,
}

@ccclass('GxfcV2_Header')
export class GxfcV2_Header extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	private init = true;
	private stepNumberV2: StepNumberV2 = new StepNumberV2(this);

	protected propertyNode = {
		props_Back_Home: new Node(),
		props_Moeny_Top: new Node(),
		props_Left_Bg: new Node(),
		props_Right_Bg: new Node(),
		props_Up_Settings: new Node(),
		props_Moeny_Label: new Label(),
		props_number2: new Node(),
		props_btn_vip: new Node(),
		props_btn_up_menu: new Node(),
		props_menu_panel: new Node(),
		props_spr_menu_bg: new Node(),
		props_btn_info: new Node(),
	}

	public props: IProps = {
		gold: 0
	}

	public events: IEvent = {
		quitGame: () => { }
	}

	protected initState() {
		return {}
	}
	private isShowMenu = false;
	protected bindEvent(): void {
		this.propertyNode.props_Back_Home.on(Node.EventType.TOUCH_END, () => {
			GxfcV2_Audio.playOneShot(SoundPathDefine.btn_click)
			this.events.quitGame();
		})
		this.propertyNode.props_Up_Settings.on(Node.EventType.TOUCH_END, () => {
			GxfcV2_Audio.playOneShot(SoundPathDefine.btn_click)
			global.openPersonCenter(2)
		})
		this.propertyNode.props_Left_Bg.on(Node.EventType.TOUCH_END, () => {
			GxfcV2_Audio.playOneShot(SoundPathDefine.btn_click)
			global.openShop()
		})
		this.propertyNode.props_Right_Bg.on(Node.EventType.TOUCH_END, () => {
			GxfcV2_Audio.playOneShot(SoundPathDefine.btn_click)
			global.openShop(BuyType.TAS)
		})
		this.propertyNode.props_Moeny_Top.on(Node.EventType.TOUCH_END, () => {
			GxfcV2_Audio.playOneShot(SoundPathDefine.btn_click)
			global.openShop()
		})
		this.propertyNode.props_btn_vip.on(Node.EventType.TOUCH_END, () => {
			GxfcV2_Audio.playOneShot(SoundPathDefine.btn_click)
			global.openVipMain()
		})
		this.node.getChildByName('Up_Left').on(Node.EventType.TOUCH_END, () => {
			GxfcV2_Audio.playOneShot(SoundPathDefine.btn_click)
			global.openShop()
		})
		this.propertyNode.props_btn_info.on(Node.EventType.TOUCH_END, () => {
			GxfcV2_Audio.playOneShot(SoundPathDefine.btn_click)
			mainViewModel.openRule()
		})
		this.propertyNode.props_btn_up_menu.on(Node.EventType.TOUCH_END, () => {
			GxfcV2_Audio.playOneShot(SoundPathDefine.btn_click)
			if (!this.isShowMenu) {
				this.isShowMenu = true;
				this.propertyNode.props_menu_panel.active=!this.propertyNode.props_menu_panel.active
				this.propertyNode.props_spr_menu_bg.getComponent(Animation).stop();
				this.propertyNode.props_spr_menu_bg.getComponent(Animation).play();
			}
		})
		this.propertyNode.props_menu_panel.on(Node.EventType.TOUCH_END, (e: EventTouch) => {
			e.preventSwallow = true;
			this.propertyNode.props_menu_panel.active = false;
			this.scheduleOnce(() => {
				this.isShowMenu = false;
			}, 0.2)
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
				if (this.init) {
					this.propertyNode.props_Moeny_Label.string = Number(value.cur) < 1000000 ? Number(value.cur).formatAmountWithCommas() : Number(value.cur).formatAmountWithLetter();
					this.init = false;
				} else {
					const stepNumber = new StepNumber(value.pre, value.cur, (num) => {
							if (this.node && this.node.isValid) {
								this.propertyNode.props_Moeny_Label.string = (+num.toFixed(0)) < 1000000 ? Number(value.cur).formatAmountWithCommas() : Number(value.cur).formatAmountWithLetter();;
							}
					})
					stepNumber.setFlyNode(this.propertyNode.props_Moeny_Label.node.parent, this.propertyNode.props_Moeny_Label.node, 20)
					stepNumber.start()
				}
			}
		}
	}

	protected bindUI(): void {
	}

	update(deltaTime: number) {

	}
}

