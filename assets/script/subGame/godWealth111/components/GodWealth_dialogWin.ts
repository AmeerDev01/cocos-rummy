import { _decorator, Button, Component, Label, Node, Skeleton, sp, tween, Vec3 } from 'cc';
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
		fileName: string[];
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

@ccclass('GodWealth_dialogWin')
export class GodWealth_dialogWin extends BaseComponent<IState, IProps, IEvent> {
	start() { }
	private winnerConfig: {
		id: number;
		name: string;
		fileName: string[];
		minRate: number;
		maxRate: number;
	}[] = []
	private numberStop: boolean = false;

	protected propertyNode = {
		// props_sb_lbjs_BIGWIN: new Node(),
		// props_slots_common_game_bw_gold: new Node(),
		// props_slots_goldNum: new Label(),
		props_caishen_bw: new Node(),
		props_cs_bw:new Node(),
		props_slots_goldNum: new Label(),
		props_big_win_box: new Node(),
		props_jackpot_box: new Node(),
		props_slots_jackPot_goldNum:new Label(),
		
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
		this.propertyNode.props_cs_bw.on(Node.EventType.TOUCH_END, () => {
			if (this.numberStop) {
				this.events.killSelfHandler()
			} else {
				this.propertyNode.props_slots_goldNum.getComponent(Label).string = this.props.glodAmount.formatAmountWithCommas()
				this.numberStop = true;
			}
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "winning") {
			this.winnerConfig = value.cur
			if (value.cur) {
				const titleSkeleton = this.propertyNode.props_cs_bw.getComponent(sp.Skeleton)				
				titleSkeleton.skeletonData = sourceManageSeletor().getFile(this.props.winning.fileName[0]).source;
				let count = 0;
				if (value.cur.id === 4) {
					this.propertyNode.props_big_win_box.active = false;
					this.propertyNode.props_jackpot_box.active = true;
					new SkeletonAnimationPlayer(titleSkeleton, 'a2', true, () => {
						count++
						if (this.numberStop && count > 1) {
							this.events.killSelfHandler()
						}
					}).playAnimation()
				} else {
					this.propertyNode.props_big_win_box.active = true;
					this.propertyNode.props_jackpot_box.active = false;
				}

			}
		}
		if (key === "glodAmount") {
			this.numberStop = false;
			if (this.props.winning.id === 4) {
				TaskSchedulerDefault().joinqQueue(new Task((done) => {
					(new StepNumber(value.pre, value.cur, (num) => {
						this.propertyNode && this.propertyNode.props_slots_jackPot_goldNum && (this.propertyNode.props_slots_jackPot_goldNum.string = (+num.toFixed(0)).formatAmountWithCommas())
					}, () => {
						this.numberStop = true;
						done()
					})).start()
				}), true)
			} else {
				TaskSchedulerDefault().joinqQueue(new Task((done) => {
					(new StepNumber(value.pre, value.cur, (num) => {
						this.propertyNode && this.propertyNode.props_slots_goldNum && (this.propertyNode.props_slots_goldNum.string = (+num.toFixed(0)).formatAmountWithCommas())
					}, () => {
						this.scheduleOnce(() => {
							this.numberStop = true;
							this.events.killSelfHandler()
							//数字展示完了之后，再停留1秒钟
							done()
						},2)
						// window.setTimeout(() => {
						// this.numberStop = true;
						// 	this.events.killSelfHandler()
						// 	//数字展示完了之后，再停留1秒钟
						// 	done()
						// }, 2000)
						// this.numberStop = true;
						// done()
					})).start()
				}), true)
			}
			
		}
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}



