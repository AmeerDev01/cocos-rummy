import { _decorator, Animation, director, EventTouch, Label, Node, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global } from '../../../hall';
import { BuyType } from '../../../hall/components/Hall_ShopPanel';
import StepNumber from '../../../utils/StepNumber';
import { egyptv2_Audio, mainViewModel } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	gold: number
}
export interface IEvent {
	quitGame: () => void,
}

@ccclass('EgyptV2_Header')
export class EgyptV2_Header extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	private init = true;
	private isShowMenu = false;
	private canvasNode: Node;
	protected propertyNode = {
		props_Back_Home: new Node(),
		props_Moeny_Top: new Node(),
		// props_Left_Bg: new Node(),
		// props_Right_Bg: new Node(),
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

	protected bindEvent(): void {
		this.propertyNode.props_Back_Home.on(Node.EventType.TOUCH_END, () => {
			egyptv2_Audio.playOneShot(SoundPathDefine.btn_click)
			this.hideMenu();
			this.events.quitGame();
		})
		this.propertyNode.props_Up_Settings.on(Node.EventType.TOUCH_END, () => {
			egyptv2_Audio.playOneShot(SoundPathDefine.btn_click)
			this.hideMenu();
			global.openPersonCenter(2)
		})
		// this.propertyNode.props_Left_Bg.on(Node.EventType.TOUCH_END, () => {
		// 	egyptv2_Audio.playOneShot(SoundPathDefine.btn_click)
		// 	global.openShop()
		// })
		this.node.getChildByName('Up_Left').on(Node.EventType.TOUCH_END, () => {
			egyptv2_Audio.playOneShot(SoundPathDefine.btn_click)
			global.openShop()
		})
		// this.propertyNode.props_Right_Bg.on(Node.EventType.TOUCH_END, () => {
		// 	egyptv2_Audio.playOneShot(SoundPathDefine.btn_click)
		// 	global.openShop(BuyType.TAS)
		// })
		this.propertyNode.props_Moeny_Top.on(Node.EventType.TOUCH_END, () => {
			egyptv2_Audio.playOneShot(SoundPathDefine.btn_click)
			global.openShop()
		})
		this.propertyNode.props_btn_info.on(Node.EventType.TOUCH_END, () => {
			egyptv2_Audio.playOneShot(SoundPathDefine.btn_click)
			this.hideMenu();
			mainViewModel.openRule()
		})
		this.propertyNode.props_btn_vip.on(Node.EventType.TOUCH_END, () => {
			egyptv2_Audio.playOneShot(SoundPathDefine.btn_click)
			this.hideMenu();
			global.openVipMain()
		})
		this.propertyNode.props_btn_up_menu.on(Node.EventType.TOUCH_END, () => {
			egyptv2_Audio.playOneShot(SoundPathDefine.btn_click)
			if (!this.isShowMenu) {
				this.showMenu();
			}
		})
		this.propertyNode.props_menu_panel.on(Node.EventType.TOUCH_END, (e: EventTouch) => {
			egyptv2_Audio.playOneShot(SoundPathDefine.btn_click)
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
				if (this.init) {
					this.propertyNode.props_Moeny_Label.string = this.goldFormat(value.cur);
					this.init = false;
				} else {
					// this.stepNumberV2.start(value.pre, value.cur, (num) => {
					// 	if (this.node && this.node.isValid) {
					// 		this.propertyNode.props_Moeny_Label.string = Number(num.toFixed(0)).formatAmountWithCommas();
					// 	}
					// });
					new StepNumber(value.pre, value.cur, (num) => {
						if (this.node && this.node.isValid) {
							this.propertyNode.props_Moeny_Label.string = this.goldFormat(value.cur);
						}
					}).start();
					const diff = value.cur - value.pre;
					this.propertyNode.props_number2.getComponent(Label).string = diff > 0 ? '+' + diff.toFixed(2) : diff.toFixed(2) + '';
					this.propertyNode.props_number2.active = true;
					this.propertyNode.props_number2.getComponent(Animation).play();
				}
			}
		}
	}

	private goldFormat(gold: number) {
		// gold = Math.floor(gold);
		return gold.formatAmountWithCommas();
	}

	private showMenu() {
		this.isShowMenu = true;
		this.propertyNode.props_menu_panel.active = true;
		this.propertyNode.props_menu_panel.removeFromParent();
		this.canvasNode.addChild(this.propertyNode.props_menu_panel)
		this.propertyNode.props_menu_panel.setPosition(new Vec3(0, 0))
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

