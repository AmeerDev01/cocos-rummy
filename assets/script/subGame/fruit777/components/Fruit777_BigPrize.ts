import { _decorator, Button, Component, Label, Node, Skeleton, sp, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { sourceManageSeletor } from '../index';
import TaskScheduler, { Task, TaskSchedulerDefault } from '../../../utils/TaskScheduler';
import StepNumber from '../../../utils/StepNumber';
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

@ccclass('Fruit777_BigPrize')
export class Fruit777_BigPrize extends BaseComponent<IState, IProps, IEvent> {
	start() { }
	private taskScheduler: TaskScheduler = new TaskScheduler()
	private winnerConfig: {
		id: number;
		name: string;
		fileName: string[];
		minRate: number;
		maxRate: number;
	}[] = []

	protected propertyNode = {
		props_sb_lbjs_BIGWIN: new Node(),
		props_slots_common_game_bw_gold: new Node(),
		props_slots_goldNum: new Label()
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
				const titleSkeleton = this.propertyNode.props_sb_lbjs_BIGWIN.getComponent(sp.Skeleton)
				titleSkeleton.skeletonData = sourceManageSeletor().getFile(this.props.winning.fileName[0]).source
				if (value.cur.name === "watermelon") {
					titleSkeleton.animation = "animation"
					const { x, y, z } = this.propertyNode.props_sb_lbjs_BIGWIN.position
					this.propertyNode.props_sb_lbjs_BIGWIN.setPosition(new Vec3(x, y - 100, z))
					titleSkeleton.timeScale = 0.4
					titleSkeleton.loop = false
				} else {
					titleSkeleton.animation = "a2"
					titleSkeleton.timeScale = 1
					// const { x, y, z } = this.propertyNode.props_sb_lbjs_BIGWIN.position
					// this.propertyNode.props_sb_lbjs_BIGWIN.setPosition(new Vec3(x, y + 80, z))
				}
				if (this.props.winning.fileName[1]) {
					this.propertyNode.props_slots_common_game_bw_gold.active = true
					const glodSkeleton = this.propertyNode.props_slots_common_game_bw_gold.getComponent(sp.Skeleton)
					glodSkeleton.skeletonData = sourceManageSeletor().getFile(this.props.winning.fileName[1]).source
					glodSkeleton.animation = "loop"
				} else {
					this.propertyNode.props_slots_common_game_bw_gold.active = false
				}
			}
		}
		if (key === "glodAmount") {
			if (this.props.winning.name === "watermelon") {
				this.propertyNode.props_slots_goldNum.node.active = false
				this.scheduleOnce(() => {
					this.propertyNode.props_slots_goldNum.node.active = true
					this.taskScheduler.joinqQueue(new Task((done) => {
						(new StepNumber(value.pre, value.cur, (num) => {
							this.propertyNode && this.propertyNode.props_slots_goldNum && (this.propertyNode.props_slots_goldNum.string = (+num.toFixed(0)).formatAmountWithCommas())
						}, () => {
							this.scheduleOnce(() => {
								this.events && this.events.killSelfHandler()
								//数字展示完了之后，再停留1秒钟
								done()
							}, 2)
						})).start()
					}))
				}, 1)
			} else {
				this.taskScheduler.joinqQueue(new Task((done) => {
					(new StepNumber(value.pre, value.cur, (num) => {
						this.propertyNode && this.propertyNode.props_slots_goldNum && (this.propertyNode.props_slots_goldNum.string = (+num.toFixed(0)).formatAmountWithCommas())
					}, () => {
						this.scheduleOnce(() => {
							this.events && this.events.killSelfHandler()
							//数字展示完了之后，再停留1秒钟
							done()
						}, 1)
					})).start()
				}), true)
			}
		}
	}

	protected destroyCallBack(): void {
		this.taskScheduler.destoryQueue()
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}




