import { _decorator, Button, Component, Label, Node, Skeleton, sp, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { DialogType } from '../type';
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

@ccclass('BlessedWealthy_dialogWin')
export class BlessedWealthy_dialogWin extends BaseComponent<IState, IProps, IEvent> {
	start() { }
	private winnerConfig: {
		id: number;
		name: string;
		fileName: string[];
		minRate: number;
		maxRate: number;
	}[] = []

	protected propertyNode = {
		// props_sb_lbjs_BIGWIN: new Node(),
		// props_slots_common_game_bw_gold: new Node(),
		// props_slots_goldNum: new Label(),
		props_caishen_bw: new Node(),
		props_cs_bw:new Node(),
		props_slots_goldNum: new Label(),

		props_sk_yowin:new Node(),
		props_btn_back: new Node(),
		props_label_shuzi: new Label(),
		props_label_shuzi2:new Label(),
		
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
				const titleSkeleton = this.propertyNode.props_sk_yowin.getComponent(sp.Skeleton)				
				// titleSkeleton.skeletonData = sourceManageSeletor().getFile(this.props.winning.fileName[0]).source
		
				// if (this.props.winning.fileName[1]) {
				// 	this.propertyNode.props_slots_common_game_bw_gold.active = true
				// 	const glodSkeleton = this.propertyNode.props_slots_common_game_bw_gold.getComponent(sp.Skeleton)
				// 	glodSkeleton.skeletonData = sourceManageSeletor().getFile(this.props.winning.fileName[1]).source
				// 	glodSkeleton.animation = "loop"
				// } else {
				// 	this.propertyNode.props_slots_common_game_bw_gold.active = false
				// }
			}
		}
		if (key === "glodAmount") {
			if (this.props.winning.name === "watermelon") {
				this.propertyNode.props_label_shuzi.node.active = false
				window.setTimeout(() => {
					this.propertyNode.props_label_shuzi.node.active = true
					TaskSchedulerDefault().joinqQueue(new Task((done) => {
						(new StepNumber(value.pre, value.cur, (num) => {
							this.propertyNode && this.propertyNode.props_label_shuzi && (this.propertyNode.props_label_shuzi.string = (+num.toFixed(0)).formatAmountWithCommas())
						}, () => {
							window.setTimeout(() => {
								this.events && this.events.killSelfHandler()
								//数字展示完了之后，再停留1秒钟
								done()
							}, 2000)
						})).start()
					}))
				}, 1000)
			} else {
				TaskSchedulerDefault().joinqQueue(new Task((done) => {
					(new StepNumber(value.pre, value.cur, (num) => {
						this.propertyNode && this.propertyNode.props_label_shuzi && (this.propertyNode.props_label_shuzi.string = (+num.toFixed(0)).formatAmountWithCommas())
					}, () => {
						window.setTimeout(() => {
							this.events && this.events.killSelfHandler()
							//数字展示完了之后，再停留1秒钟
							done()
						}, 2000)
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




