import { _decorator, Component, Label, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global, lang } from '../../../hall';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
import StepNumber from '../../../utils/StepNumber';
import { playBtnClick } from '../index';
// import { chooseSmallGame } from '../viewModel/RollerPanelViewModel';
import { addToastAction } from '../../../hall/store/actions/baseBoard';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	balance: number
}
export interface IEvent {

}

@ccclass('BlessedWealthy_header')
export class BlessedWealthy_header extends BaseComponent<IState, IProps, IEvent> {
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
		balance: 0
	}

	public events: IEvent = {

	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_up_home.on(Node.EventType.TOUCH_END, () => {
			playBtnClick()
			// if (!chooseSmallGame.isUnMount) {
			// 	global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.GameExit, {}, { placeStr: "您正在游戏中，退出失败，请游戏结束后重试。" })  }));
			// } else {
				global.closeSubGame()
			// }
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
			this.stepNumber.start()
			// this.taskScheduler.joinQueue(new Task((done) => {
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

