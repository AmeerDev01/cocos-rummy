import { _decorator, Component, instantiate, Label, Node, sys, tween, UIOpacity, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
const { ccclass, property } = _decorator;
import { Thor_AwardBox, IState as AIIState, IProps as AIIProps, IEvent as AIEvent } from "./Thor_AwardBox"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { footerViewModel, gameBoardViewModel, sourceManageSeletor } from "../index"
import { SKT_MAG_TYPE, sktMsgListener } from '../socketConnect';
import { IProps as Award_IProps } from './Thor_AwardBox';
import { updateSubGameTimes } from '../store/actions/game';
import { TaskSchedulerDefault } from '../../../utils/TaskScheduler';
import { JactpotType } from '../type';
import BaseViewModel from '../../../common/viewModel/BaseViewModel';

export interface IState {

}

export interface IProps {
	/**马上要打开的宝箱和数据 */
	openDoBoxData?: Award_IProps,
	/**剩余小游戏次数 */
	remainGameTimes?: number,
	/**奖励金额 */
	BONUS?: number
}
export interface IEvent {
	onOpenHandler: (boxId: number) => void
	onFreeGameAmoundChange: (amount: number) => void
	allDoneHandler: () => void,
	updateTimesHandler: (times: number, jactpotType?: JactpotType) => void
}

@ccclass('Thor_BoxPanel')
export class Thor_BoxPanel extends BaseComponent<IState, IProps, IEvent> {
	start() { }
	public awardBoxMap: BaseViewModel<Thor_AwardBox, AIIState, AIIProps, AIEvent>[] = []
	protected propertyNode = {
		/**宝箱外包裹 */
		props_Layout_box_wrap: new Node(),
		/**剩余次数外节点 */
		props_Layout_times: new Node(),
		/**剩余次数 */
		props_Label_sgTimes: new Label()
	}

	public props: IProps = {
		openDoBoxData: null,
		remainGameTimes: 0,
		BONUS: 0
	}

	public events: IEvent = {
		onOpenHandler: (boxId: number) => { },
		onFreeGameAmoundChange: (amount: number) => { },
		allDoneHandler: () => { },
		updateTimesHandler: (times: number, jactpotType?: JactpotType) => { }
	}

	protected initState() {
		return {}
	}

	protected bindEvent(): void {

	}
	private flyTimer: number = -1
	private targetViewModel: BaseViewModel<Thor_AwardBox, AIIState, AIIProps, AIEvent>
	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "openDoBoxData" && value.cur) {
			this.targetViewModel = this.awardBoxMap.find(item => item.comp.props.boxId === this.props.openDoBoxData.boxId)
			this.targetViewModel.setProps(this.props.openDoBoxData)
		}
		if (key === "remainGameTimes") {
			this.propertyNode.props_Label_sgTimes.string = this.props.remainGameTimes + ''
		}
		if (key === "BONUS") {
			this.targetViewModel.setProps({ BONUS: value.cur })
		}
	}

	protected bindUI(): void {
		for (let i = 0; i < 20; i++) {
			const awardBox = new BaseViewModel<Thor_AwardBox, AIIState, AIIProps, AIEvent>("Thor_AwardBox").mountView(sourceManageSeletor().getFile(PrefabPathDefine.AWARD_BOX).source)
				.appendTo(this.propertyNode.props_Layout_box_wrap).setProps({ boxId: i }).setEvent({
					onOpenHandler: (boxId) => {
						this.events.onOpenHandler(boxId)
					},
					updateTimesHandler: (times, jactpotType) => {
						this.events.updateTimesHandler(times, jactpotType)
					},
					checkFlyEndHandler: () => {
						// console.log(gameBoardViewModel.changeGameTypeTask.isExecute)
						this.flyTimer && window.clearTimeout(this.flyTimer)
						this.flyTimer = window.setTimeout(() => {
							if (gameBoardViewModel.changeGameTypeTask && !gameBoardViewModel.changeGameTypeTask.isExecute) {
								TaskSchedulerDefault().joinqQueue(gameBoardViewModel.changeGameTypeTask)
								this.events.allDoneHandler()
							}
						}, 3500)
					},
					onFreeGameAmoundChange: (amount: number) => {
						this.events.onFreeGameAmoundChange(amount)
					}
				})
			this.awardBoxMap.push(awardBox)
		}
	}



	public getTimesNode() {
		return this.propertyNode.props_Layout_times
	}

	update(deltaTime: number) {

	}
}

