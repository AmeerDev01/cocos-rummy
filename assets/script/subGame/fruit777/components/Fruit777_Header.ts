import { _decorator, Button, Component, Label, Node, Animation } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global, lang } from '../../../hall';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
import StepNumber from '../../../utils/StepNumber';
import { BuyType } from '../../../hall/components/Hall_ShopPanel';
import { fruit777_Audio, gameBoardViewModel } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	balance: number,
	roundAllEnd: boolean
}
export interface IEvent {
	openHelpPanel: () => void,
	openVipMain: () => void
}

@ccclass('Fruit777_Header')
export class Fruit777_Header extends BaseComponent<IState, IProps, IEvent> {
	start() { }
	private taskScheduler: TaskScheduler = new TaskScheduler()
	private stepNumber: StepNumber
	protected propertyNode = {
		props_btn_up_home: new Node(),
		props_btn_up_set: new Node(),
		props_Label_up_goldNum: new Label(),
		props_btn_up_addGold: new Node(),
		props_layout_gold: new Node(),
		// props_beli: new Node(),
		// props_SPECIAL: new Node(),
		props_menu_panel: new Node(),
		props_btn_up_menu: new Button(),
		props_spr_menu_bg: new Node(),
		props_btn_info: new Button(),
		props_btn_vip: new Button()
	}

	public props: IProps = {
		balance: 0,
		roundAllEnd: true
	}

	public events: IEvent = {
		openHelpPanel: () => { },
		openVipMain: () => { }
	}

	protected initState() {
		return {
		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_up_menu.node.on(Node.EventType.TOUCH_END, () => {
			this.propertyNode.props_menu_panel.active = true
			this.propertyNode.props_spr_menu_bg.getComponent(Animation).play('animation_title')
		})

		this.propertyNode.props_menu_panel.on(Node.EventType.TOUCH_END, () => {
			fruit777_Audio.playOneShot(SoundPathDefine.CLICK)
			this.propertyNode.props_menu_panel.active = false
		}, this)

		this.propertyNode.props_btn_info.node.on(Button.EventType.CLICK, () => {
			fruit777_Audio.playOneShot(SoundPathDefine.CLICK)
			this.events.openHelpPanel()
			this.propertyNode.props_menu_panel.active = false
		}, this)

		this.propertyNode.props_btn_vip.node.on(Button.EventType.CLICK, () => {
			fruit777_Audio.playOneShot(SoundPathDefine.CLICK)
			this.events.openVipMain()
			this.propertyNode.props_menu_panel.active = false
		}, this)

		this.propertyNode.props_btn_up_home.on(Node.EventType.TOUCH_END, () => {
			if (!gameBoardViewModel.isAuthPass) return
			fruit777_Audio.playOneShot(SoundPathDefine.CLICK)
			window.HALL_GLOBAL.closeSubGame()
			// if (this.props.roundAllEnd || !sktInstance.isConnect || dataTransfer(DataKeyType.GAME_TYPE) === GameType.SUBGAME1) {
			// 	/**只要转动完成、连接断开、开宝箱子游戏，都可以直接退出 */
			// 	global.closeSubGame()
			// } else {
			// 	global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.GameExit, {}, { placeStr: "游戏中，请勿退出" }) }))
			// }
		})
		this.propertyNode.props_btn_up_set.on(Node.EventType.TOUCH_END, () => {
			fruit777_Audio.playOneShot(SoundPathDefine.CLICK)
			global.openPersonCenter(2)
			this.propertyNode.props_menu_panel.active = false
		})
		this.propertyNode.props_layout_gold.on(Node.EventType.TOUCH_END, () => {
			fruit777_Audio.playOneShot(SoundPathDefine.CLICK)
			global.openShop()
		})
		// this.propertyNode.props_beli.on(Node.EventType.TOUCH_END, () => {
		// 	fruit777_Audio.playOneShot(SoundPathDefine.CLICK)
		// 	global.openShop()
		// })
		// this.propertyNode.props_SPECIAL.on(Node.EventType.TOUCH_END, () => {
		// 	fruit777_Audio.playOneShot(SoundPathDefine.CLICK)
		// 	global.openShop(BuyType.TAS)
		// })
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "balance") {
			this.stepNumber && this.stepNumber.stop()
			this.stepNumber = new StepNumber(value.pre, value.cur, (num) => {
				this.propertyNode && this.propertyNode.props_Label_up_goldNum && (this.propertyNode.props_Label_up_goldNum.string = (+num).formatAmountWithCommas())
			}, () => { })
			this.stepNumber.setFlyNode(this.propertyNode.props_Label_up_goldNum.node.parent, this.propertyNode.props_Label_up_goldNum.node, 22)
			this.stepNumber.start()
			// this.taskScheduler.joinqQueue(new Task((done) => {
			// 	this.stepNumber && this.stepNumber.stop()
			// 	this.stepNumber = new StepNumber(value.pre, value.cur, (num) => {
			// 		this.propertyNode && this.propertyNode.props_Label_up_goldNum && (this.propertyNode.props_Label_up_goldNum.string = (+num.toFixed(0)).formatAmountWithCommas())
			// 	}, () => done())
			// 	this.stepNumber.start()
			// }), true)
		}
	}

	protected destroyCallBack() {
		this.taskScheduler.destoryQueue()
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

