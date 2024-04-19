import { _decorator, Button, Component, Label, log, Node, Skeleton, sp, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { DialogType } from '../type';
import { sourceManageSeletor } from '../index';
import TaskScheduler, { Task, TaskSchedulerDefault } from '../../../utils/TaskScheduler';
import StepNumber from '../../../utils/StepNumber';
import SkeletonAnimationPlayer from '../SkeletonPlay';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	winning?: {
		id: number;
		name: string;
		fileName: string;
		defaultSkin: string;
		wintype: string;
		minRate: number;
		maxRate: number;
	},
	glodAmount?: number,
	keepTime?: number
}
export interface IEvent {
	/**自灭弹窗 */
	killSelfHandler: () => void
}

@ccclass('Starlight_BigPrize')
export class Starlight_BigPrize extends BaseComponent<IState, IProps, IEvent> {
	glodAmount = 0
	start() { }
	private winnerConfig: {
		id: number;
		name: string;
		fileName: string[];
		minRate: number;
		maxRate: number;
	}[] = []

	protected propertyNode = {
		props_sb_lbjs_BIGWIN: new Node(),
		props_slots_goldNum: new Label(),
		props_layout_goldMin: new Node(),
		props_layout_goldMax: new Node(),
	}

	public props: IProps = {
		winning: null,
		glodAmount: 0,
		keepTime: 3000
	}

	public events: IEvent = {
		killSelfHandler: () => { }
	}

	protected initState() {
		return {}
	}

	protected bindEvent(): void {

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "winning") {
			this.winnerConfig = value.cur
			if (value.cur) {
				this.propertyNode.props_layout_goldMax.active = value.cur.wintype === "big"
				this.propertyNode.props_layout_goldMin.active = !(value.cur.wintype === "big")
				const titleSkeleton = this.propertyNode.props_sb_lbjs_BIGWIN.getComponent(sp.Skeleton)
				titleSkeleton.setSkin(value.cur.defaultSkin)
				titleSkeleton.timeScale = 1
				let nanzhuAnimation = new SkeletonAnimationPlayer(titleSkeleton, 'animation2', false, () => { // 动画开始
					// 显示数字
					TaskSchedulerDefault().joinqQueue(new Task((done) => {
						(new StepNumber(0,this.glodAmount, (num) => {
							this.propertyNode && this.propertyNode.props_slots_goldNum && (this.propertyNode.props_slots_goldNum.string = (+num.toFixed(0)).formatAmountWithCommas())
						}, () => {
							// window.setTimeout(() => {
							// 	// this.events.killSelfHandler()
							// 	//数字展示完了之后，再停留1秒钟
								done()
							// }, 1000)
						})).start()
					}), true)
					nanzhuAnimation.changeAnimation('animation', false, () => {
						nanzhuAnimation.changeAnimation('animation3', false, () => {
							 this.events.killSelfHandler()
						})
					})
				});
				nanzhuAnimation.playAnimation()
			}
		}
		if (key === "glodAmount") {
			this.glodAmount = value.cur
			
		}
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}




