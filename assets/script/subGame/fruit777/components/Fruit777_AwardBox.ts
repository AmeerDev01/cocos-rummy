import { _decorator, Component, instantiate, Label, Node, sp, Sprite, tween, UIOpacity, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import TaskScheduler, { Task, TaskSchedulerDefault } from '../../../utils/TaskScheduler';
import { bundleFruit777, footerViewModel, fruit777_Audio, gameBoardViewModel, sourceManageSeletor } from '../index';
import { getNodePositionInCanvas } from '../../../utils/tool';
import dataTransfer, { DataKeyType } from '../dataTransfer';
import { GameType, JactpotType } from '../type';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export enum OpenStatus {
	CLOSE,
	OPENING,
	OPEN,
	DONE
}
export interface IState {
	openStatus: OpenStatus
}

export interface IProps {
	boxId: number,
	dataId: number,
	times: number,
	levelUp: number,
	fruitFileName: string,
	score: number,
	BONUS: number,
	distance: number[],
	name: string
}
export interface IEvent {
	onOpenHandler: (id: number) => void,
	updateTimesHandler: (times: number, jactpotType?: JactpotType) => void,
	checkFlyEndHandler: () => void,
	onFreeGameAmoundChange: (amount: number) => void
}

@ccclass('Fruit777_AwardBox')
export class Fruit777_AwardBox extends BaseComponent<IState, IProps, IEvent> {
	start() { }
	protected propertyNode = {
		props_btn_sg_box: new Node(),
		props_spr_result_item: new Node(),
		props_particle2D: new Node(),
		props_score: new Node()
	}
	private taskScheduler: TaskScheduler = new TaskScheduler()

	public props: IProps = {
		boxId: 0,
		dataId: -1,
		times: 0,
		levelUp: 0,
		fruitFileName: "",
		score: 0,
		BONUS: 0,
		distance: [0, 0],
		name: ''
	}

	public events: IEvent = {
		onOpenHandler: (id: number) => { },
		updateTimesHandler: (times: number, jactpotType?: JactpotType) => { },
		checkFlyEndHandler: () => { },
		onFreeGameAmoundChange: (amount: number) => { }
	}

	protected initState() {
		return {
			openStatus: OpenStatus.CLOSE
		}
	}

	protected bindEvent(): void {
		this.node.on(Node.EventType.TOUCH_END, () => {
			// console.log('GAME_TYPE', dataTransfer(DataKeyType.GAME_TYPE))
			if (dataTransfer(DataKeyType.GAME_TYPE) !== GameType.SUBGAME1) {
				return
			}
			if (this.state.openStatus === OpenStatus.CLOSE || this.state.openStatus === OpenStatus.OPENING) {
				this.openAwardBox()
			}
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		let thenTimes = 0
		if (key !== "boxId") {
			try {
				thenTimes = dataTransfer(DataKeyType.SUBGAME_TIMES)
				if (this.state.openStatus === OpenStatus.OPENING) {
					//执行贝壳动作
					// this.setState({ hasOpen: true })
					this.setState({ openStatus: OpenStatus.OPEN })
					this.taskScheduler && this.taskScheduler.joinqQueue(new Task((done) => {
						this.propertyNode.props_btn_sg_box.getComponent(sp.Skeleton).animation = 'diankaibaoxiang'
						this.scheduleOnce(() => { this.propertyNode.props_btn_sg_box.active = false }, 2)
						this.scheduleOnce(() => {
							done()
						}, 1)
					}))
					this.taskScheduler && this.taskScheduler.joinqQueue(new Task((done) => {
						this.events.checkFlyEndHandler()
						done()
					}))
				}
			} catch (e) {
				console.log(e)
			}
		}
		if (key === "fruitFileName") {
			this.scheduleOnce(() => {
				//加定时器是确保distance肯定有数据
				this.taskScheduler && this.taskScheduler.joinqQueue(new Task((done) => {
					if (!this.propertyNode) {
						done()
						return
					}
					this.propertyNode.props_spr_result_item.active = true
					const skeleton = this.propertyNode.props_spr_result_item.getComponent(sp.Skeleton)
					skeleton.skeletonData = sourceManageSeletor().getFile(value.cur).source
					skeleton.animation = "animation"
					const { x, y, z } = this.propertyNode.props_spr_result_item.position
					this.propertyNode.props_spr_result_item.setPosition(new Vec3(x + this.props.distance[0], y + this.props.distance[1], z))
					this.scheduleOnce(() => done(), 1)
				}))
			}, 0.1)
		}
		if (key === "score") {
			this.scheduleOnce(() => {
				let thenAmound = 0
				const scoreTask = new Task((done) => {
					if (!this.propertyNode) {
						done()
						return
					}
					this.propertyNode.props_score.getComponent(Label).string = value.cur.formatAmountWithCommas()
					this.propertyNode.props_score.active = true
					const ui = this.propertyNode.props_score.getComponent(UIOpacity)
					this.propertyNode.props_score.setScale(1.3, 1.3)
					ui.opacity = 0
					tween().target(ui).to(0.2, { opacity: 255 }).start()
					tween().target(this.propertyNode.props_score).to(0.7, { scale: new Vec3(1, 1) }, { easing: "backOut" }).call(() => done()).start()
				})
				//飞粒子
				const particleTask = new Task((done) => {
					if (!this.propertyNode || !this.node) {
						done()
						return
					}
					fruit777_Audio.playOneShot(SoundPathDefine.FRUIT_UP)
					thenAmound = dataTransfer(DataKeyType.FREE_GAME_AMOUNT)
					const fly = (targetNode: Node) => {
						if (!targetNode) {
							done()
						} else {
							const beginPosition = getNodePositionInCanvas(this.node)
							const targetPosition = getNodePositionInCanvas(targetNode)
							this.flying(this.propertyNode.props_particle2D, beginPosition, targetPosition, () => {
								!particleTask.isExecute && done()
							}, 0.6)
						}
					}
					fly(footerViewModel.comp.getProfitBar())
					fly((gameBoardViewModel.currentGameViewModel['jackpot'].comp.getHeaderNode() as Node).children[this.props.dataId - 1])
				}).subscribeDone('1', () => {
					/**这里取的是开宝箱后当时的数据 */
					// if (dataTransfer(DataKeyType.GAME_TYPE) === GameType.SUBGAME1) {
					// 	//如果已经要换游戏了，就不更新次数了，不然更新的是下一个游戏的剩余次数
					// 	this.events.updateTimesHandler(thenTimes)
					// }
					if (!this.propertyNode) return
					this.events.updateTimesHandler(thenTimes, this.jackPotTypeName[this.props.name])
					this.events.onFreeGameAmoundChange(thenAmound)
				})
				this.taskScheduler && this.taskScheduler.joinqQueue(scoreTask).joinqQueue(particleTask)
			}, 1)
		}
		if (key === "levelUp") {
			this.scheduleOnce(() => {
				fruit777_Audio.playOneShot(SoundPathDefine.LEVEV_UP)
				this.taskScheduler && this.taskScheduler.joinqQueue(new Task((done) => {
					if (!this.propertyNode || !this.node) {
						done()
						return
					}
					const fly = (targetNode: Node) => {
						if (!targetNode) {
							done()
							return
						}
						const beginPosition = getNodePositionInCanvas(this.node)
						const targetPosition = getNodePositionInCanvas(targetNode)
						this.flying(this.propertyNode.props_spr_result_item, beginPosition, targetPosition, done, 0.1)
					}
					fly(gameBoardViewModel.currentGameViewModel['jackpot'].comp.getLevelBodyNode())
				}).subscribeDone('1', () => {
					this.events && this.events.updateTimesHandler(thenTimes, this.jackPotTypeName[this.props.name])
					/**这里取的是开宝箱后当时的数据 */
					// this.events.updateTimesHandler(thenTimes)
				}))
			}, 2)
		}
		if (key === "times") {
			this.scheduleOnce(() => {
				fruit777_Audio.playOneShot(SoundPathDefine.GET_COIN)
				//确保资源被替换之后
				this.taskScheduler && this.taskScheduler.joinqQueue(new Task((done) => {
					if (!this.propertyNode || !this.node) {
						done()
						return
					}
					const fly = (targetNode: Node) => {
						if (!targetNode) {
							done()
							return
						}
						const beginPosition = getNodePositionInCanvas(this.node)
						const targetPosition = getNodePositionInCanvas(targetNode)
						this.flying(this.propertyNode.props_spr_result_item, beginPosition, targetPosition, done, 0.1)
					}
					fly(gameBoardViewModel.currentGameViewModel.comp.getTimesNode())
				}).subscribeDone('1', () => {
					/**这里取的是开宝箱后当时的数据 */
					this.events.updateTimesHandler(thenTimes)
				}))
			}, 2)
		}
		if (key === "BONUS") {
			this.scheduleOnce(() => {
				this.taskScheduler && this.taskScheduler.joinqQueue(new Task((done) => {
					if (!this.propertyNode || !gameBoardViewModel.currentGameViewModel['jackpot'].comp.getHeaderNode()) {
						done()
						return
					}
					const beginPosition = getNodePositionInCanvas(gameBoardViewModel.currentGameViewModel['jackpot'].comp.getHeaderNode())
					const targetPosition = getNodePositionInCanvas(footerViewModel.comp.getProfitBar())
					this.flying(this.propertyNode.props_particle2D, beginPosition, targetPosition, done, 0.2)
				}))
			}, 2)
		}
	}

	private flying(node: Node, beginPosition: Vec3, targetPosition: Vec3, done: Function, delayTime: number = 0) {
		const targetNode = instantiate(node)
		targetNode.active = true
		gameBoardViewModel.viewNode.addChild(targetNode)
		targetNode.setPosition(beginPosition)
		let middlePosition = new Vec3((beginPosition.x + targetPosition.x) / 2, (beginPosition.y + targetPosition.y) / 2 + 300, 0)
		tween().target(targetNode).to(0.7, { position: targetPosition, scale: new Vec3(0.5, 0.5, 1) }, {
			onUpdate: (target: Vec3, t: number) => {
				if (targetNode) {
					targetNode.position = this.bezier(t, beginPosition, middlePosition, targetPosition);
				}
			}
		}).call(() => {
			if (delayTime === 0) {
				targetNode.destroy()
				done()
			} else {
				if (targetNode) {
					// 透明度暂不支持粒子
					targetNode.getComponent(UIOpacity) && targetNode.addComponent(UIOpacity)
					tween(targetNode.getComponent(UIOpacity)).to(delayTime, { opacity: 0 }).call(() => {
						targetNode.destroy()
					}).start()
				}
				done()
			}
			// tween(targetNode).to(0.2, { scale: new Vec3(0.5, 0.5, 1) }).start()
		}).start()
	}

	private jackPotTypeName = {
		"BxApple": JactpotType.APPLE,
		"BxStrawberry": JactpotType.STRAWBERRY,
		"BxGrape": JactpotType.GRAPE,
		"BxWatermelon": JactpotType.WATERMELON,
		"BxBanana": JactpotType.BANANA,
		"up": JactpotType.LEVEL,
	}

	private bezier(t: number, startPos: Vec3, middlePos: Vec3, endPos: Vec3) {
		let x = (1 - t) * (1 - t) * startPos.x + 2 * t * (1 - t) * middlePos.x + t * t * endPos.x;
		let y = (1 - t) * (1 - t) * startPos.y + 2 * t * (1 - t) * middlePos.y + t * t * endPos.y;
		return new Vec3(x, y, 0);
	}

	/**为什么要提出来，因为便于自定执行器调用 */
	public openAwardBox() {
		this.setState({ openStatus: OpenStatus.OPENING })
		this.events.onOpenHandler(this.props.boxId)
	}
	protected bindUI(): void {
		this.taskScheduler = new TaskScheduler(() => {
			this && this.setState && this.setState({ openStatus: OpenStatus.DONE })
		})
		this.useState((key, value) => {
			//执行开箱子的动作

		}, ["openStatus"])
	}

	public getOpenStatus() {
		return this.state.openStatus
	}

	protected destroyCallBack() {
		this.taskScheduler.stopQueue(false)
	}

	update(deltaTime: number) {

	}
}

