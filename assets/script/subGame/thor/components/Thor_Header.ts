import { _decorator, Animation, Label, Node, Sprite } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global, lang } from '../../../hall';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
import StepNumber from '../../../utils/StepNumber';
import { thor_Audio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { addToastAction } from '../../../hall/store/actions/baseBoard';
import { changeAutoLauncherType, setAutoLaunchedTimes } from '../store/actions/game';
import { AutoLauncherType } from '../type';
import { setRollRoundEnd } from '../store/actions/roller';
import { BuyType } from '../../../hall/components/Hall_ShopPanel';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	balance: number
	isRollEnd: boolean
}
export interface IEvent {
	openHelpPanel:()=>void
}

@ccclass('Thor_Header')
export class Thor_Header extends BaseComponent<IState, IProps, IEvent> {
	start() { }
	private taskScheduler: TaskScheduler = new TaskScheduler()
	private stepNumber: StepNumber
	protected propertyNode = {
		props_btn_up_home: new Node(),
		props_btn_up_set: new Node(),
		props_Label_up_goldNum: new Label(),
		props_layout_glod: new Node(),
		props_btn_up_addGold: new Node(),
		props_btn_up_menu: new Node(),
		props_spr_menu_bg: new Node(),
		props_btn_info: new Node(),
		props_btn_vip: new Node()
	}

	public props: IProps = {
		balance: 0,
		isRollEnd: true
	}

	public events: IEvent = {
		openHelpPanel:()=>{}
	}

	protected initState() {
		return {

		}
	}
	
	protected bindEvent(): void {
		this.propertyNode.props_btn_up_home.on(Node.EventType.TOUCH_END, () => {
			if (this.props.isRollEnd) {
				this.closeGame()
				global.closeSubGame()
			} else {
				global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.GameExit, {}, { placeStr: "游戏进行中" }) }))
			}
		})
		this.propertyNode.props_btn_up_set.on(Node.EventType.TOUCH_END, () => {
			thor_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
			global.openPersonCenter(2)
		})
		this.propertyNode.props_layout_glod.on(Node.EventType.TOUCH_END, () => {
			thor_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
			global.openShop()
		})
		this.propertyNode.props_btn_up_addGold.on(Node.EventType.TOUCH_END, () => {
			thor_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
			global.openShop()
		})
		this.propertyNode.props_btn_info.on(Node.EventType.TOUCH_END, () => {
			thor_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
			this.events.openHelpPanel()
		})
		this.propertyNode.props_btn_up_menu.on(Node.EventType.TOUCH_END, () => {
			thor_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
			this.propertyNode.props_spr_menu_bg.active=!this.propertyNode.props_spr_menu_bg.active
			this.propertyNode.props_spr_menu_bg.getComponent(Animation).play();
		})
		this.propertyNode.props_btn_vip.on(Node.EventType.TOUCH_END, () => {
			thor_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
			global.openVipMain()
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "balance") {
			this.stepNumber && this.stepNumber.stop()
			this.stepNumber = new StepNumber(value.pre, value.cur, (num) => {
				this.propertyNode && this.propertyNode.props_Label_up_goldNum && (this.propertyNode.props_Label_up_goldNum.string = (+num.toFixed(0)).formatAmountWithCommas())
			}, () => { })
			this.stepNumber.setFlyNode(this.propertyNode.props_Label_up_goldNum.node.parent, this.propertyNode.props_Label_up_goldNum.node, 22)
			this.stepNumber.start()
		}
		if(key === 'isRollEnd'){
			this.propertyNode.props_btn_up_home.getComponent(Sprite).grayscale=!value.cur
		}
	}
	public closeGame() {
		thor_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
		this.dispatch(changeAutoLauncherType(AutoLauncherType.NONE))
		this.dispatch(setAutoLaunchedTimes(0))
	}
	protected destroyCallBack() {
		this.taskScheduler.destoryQueue()
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

