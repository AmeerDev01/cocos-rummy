import { _decorator, Component, Label, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global, lang } from '../../../hall';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
import StepNumber from '../../../utils/StepNumber';
import { playBtnClick } from '../index';
import { chooseSmallGame, rollerPanelViewModel } from '../viewModel/GameBoardViewModel';
import { addToastAction } from '../../../hall/store/actions/baseBoard';
import { sktInstance } from '../socketConnect';
import { EffectType } from '../../../utils/NodeIOEffect';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	balance: number,
	isRollEnd:boolean,
}
export interface IEvent {
	clearCacheData: () => void,
}

@ccclass('phoenix_headerComp')
export class phoenix_headerComp extends BaseComponent<IState, IProps, IEvent> {
	start() { }
	private taskScheduler: TaskScheduler = new TaskScheduler()
	private stepNumber: StepNumber
	protected propertyNode = {
		props_btn_up_home: new Node(),
		props_btn_up_set: new Node(),
		props_Label_up_goldNum: new Label(),
		props_btn_up_addGold: new Node(),
		props_beli: new Node(),
		props_SPECIAL: new Node()
	}

	public props: IProps = {
		balance: 0,
		isRollEnd: true,
	}

	public events: IEvent = {
		clearCacheData: () => { },
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_up_home.on(Node.EventType.TOUCH_END, () => {
			playBtnClick()			
			if (this.props.isRollEnd || !sktInstance.isConnect) {
				this.events.clearCacheData()
				global.closeSubGame()
			} else {
				global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.GameExit, {}, { placeStr: "游戏中，请勿退出" }) }))
			}
		})
		this.propertyNode.props_btn_up_set.on(Node.EventType.TOUCH_END, () => {
			playBtnClick()
			global.openPersonCenter(2)
		})
		this.propertyNode.props_btn_up_addGold.on(Node.EventType.TOUCH_END, () => {
			playBtnClick()
			global.openShop()
		})
		this.propertyNode.props_beli.on(Node.EventType.TOUCH_END, () => {
			playBtnClick()
			global.openShop()
		})
		this.propertyNode.props_SPECIAL.on(Node.EventType.TOUCH_END, () => {
			playBtnClick()
			global.openPersonCenter(5)
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "balance") {
			console.log("value.pre, value.cur",value.pre, value.cur);
			this.stepNumber && this.stepNumber.stop()
			this.stepNumber = new StepNumber(value.pre, value.cur, (num) => {
				this.propertyNode && this.propertyNode.props_Label_up_goldNum && (this.propertyNode.props_Label_up_goldNum.string = (+num.toFixed(0)).formatAmountWithCommas())
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

