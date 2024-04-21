import { _decorator, Component, instantiate, Mask, Node, tween, UITransform, Vec3, Widget } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { RollerType, IconType, DirectionType, IconEffectType, RollOptionType } from '../type';
import RollerIconViewModel from '../viewModel/RollerIconViewModel';
import { fruit777_Audio, sourceManageSeletor } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import config from '../config';
import { endRollingAction, setRollSpeed } from '../store/actions/roller';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export interface IState {
	/**本轮转动是否结束，不能使用rolling，因为rolling = false之后 ，才开始刹车停止，roundEnd是刹车完之后 */
	roundEnd: boolean,
}

export interface IProps {
	rollerType?: RollerType,
	iconEffectData?: {
		iconEffect: IconEffectType,
		iconEffectArr?: number[]
	},
	isSpeedUp?: boolean,
	stopMode: 'index' | 'jump'
	isSortStop: boolean
}
export interface IEvent {
	rollStart?: () => void,
	rollEnd?: (rollerIndex: number) => void
}

@ccclass('Fruit777_Roller')
export class Fruit777_Roller extends BaseComponent<IState, IProps, IEvent> {
	start() {
		this.schedule(this.move, 0.01)
	}
	/**展示中的图标列表 */
	public displayIconList: RollerIconViewModel[] = []

	/**下一个将要加入的icon */
	private nextJoinIconIndex: number = 0
	/**刚刚卸载掉的图标 */
	private lastRemoveIconIndex: number = 0
	/**删补图标时候的纵向补偿值 */
	private compensation: number = 0
	private lastInsertIconViewModel: RollerIconViewModel
	private timer_clear: number
	private lastLineY: number = 0
	// private coordList: Array<number> = []
	/**主要用于启动的速度变化 */
	private speed: number = 0
	private rollerHeight: number
	private rollConfig: RollOptionType = config.normalRollOption
	// /**本轮转动是否结束，不能使用rolling，因为rolling = false之后 ，才开始刹车停止，roundEnd是刹车完之后 */
	// public roundEnd: boolean = true
	private outIconPool: Array<RollerIconViewModel> = []
	protected propertyNode = {
		props_roller: new Node(),
		props_daqipao: new Node()
	}

	public props: IProps = {
		rollerType: null,
		iconEffectData: {
			iconEffect: IconEffectType.NONE,
			iconEffectArr: []
		},
		isSpeedUp: false,
		stopMode: 'jump',
		isSortStop: false
	}

	public events: IEvent = {
		rollStart: () => { },
		rollEnd: (rollerIndex: number) => { }
	}

	protected initState() {
		return {
			roundEnd: true
		}
	}

	protected bindEvent(): void {

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "rollerType") {
			if (!value.pre) {
				this.nextJoinIconIndex = this.props.rollerType.direction === DirectionType.DOWN ? (value.cur.iconQueue as IconType[]).length - 1 : 0
				this.initRoller()
			} else {
				/**
				 * 2024-1-4 02:30记录（地点：菲律宾）
				 * 尼玛。这个问题找了2个小时，下面这个if一定要在rolling（this.events.rollStart()）判断之前处理，不然在某种特殊情况下，比如上一次最后加入的图标index此时等于将要停止的图标index，
				 * 将没有机会joinIcon，直接停止。因为调整nextJoinIconIndex的操作还没有被执行。
				 */
				if (value.pre.stopIconIndex !== value.cur.stopIconIndex) {
					if (this.props.stopMode === "jump") {
						// 放弃这种模式(控制跳跃的距离来实现步停)
						// this.bringForwardEnd(this.props.rollerType, this.props.isSortStop ? 4 + this.props.rollerType.index * 8 : 4)
						this.bringForwardEnd(this.props.rollerType, 5)
					} else {
						this.dispatch(setRollSpeed(this.props.isSpeedUp ? 1.5 : 1))
					}
				}
				if (value.pre.rolling === false && value.cur.rolling === true) {
					while ((this.props.rollerType.direction === DirectionType.DOWN && this.lastInsertIconViewModel.comp.node.position.y < 0) ||
						(this.props.rollerType.direction === DirectionType.UP && this.lastInsertIconViewModel.comp.node.position.y > -this.getRollerHeight())) {
						this.lastInsertIconViewModel = this.creator()
					}
					this.setState({ roundEnd: false })
					// this.roundEnd = false
					this.events.rollStart()
					const speedUp = (index) => {
						// console.log(index)
						if (this.speed < this.props.rollerType.speed) {
							this.speed += this.props.rollerType.speed / 20;
							(this.speed > this.props.rollerType.speed) && (this.speed === this.props.rollerType.speed)
						} else if (this.speed === this.props.rollerType.speed) {
							this.unschedule(speedUp)
						}
					}
					this.schedule(speedUp, 0.02)
				}
			}
		}
		if (key === "iconEffectData") {
			// console.log(this.props.rollerType.index, value.cur)
			// console.log(this.props.rollerType.index, this.props.iconEffectData, this.displayIconList)
			//displayIconList可能还没有清除掉节点已经被释放的对象
			this.speed = 0
			this.displayIconList = this.displayIconList.filter(i => !i.isUnMount)
			for (let i = 0, l = this.displayIconList.length; i < l; i++) {
				// const index = this.props.rollerType.direction === DirectionType.DOWN ? i : (this.displayIconList.length - 1 - i)
				/**index是图标从下往上的序列号 */
				const index = i
				const item = this.displayIconList[index]
				if (this.props.iconEffectData.iconEffectArr.indexOf(index) !== -1) {
					item.setProps({ iconEffect: this.props.iconEffectData.iconEffect })
				} else {
					item.setProps({ iconEffect: IconEffectType.NONE })
				}
			}
		}
	}
	/**主要用于初始化的时候 */
	private creator() {
		const iconViewModel = this.joinIcon()
		const insideCount = this.propertyNode.props_roller.children.filter(i => i.active).length - 1
		const position = iconViewModel.comp.node.getPosition()
		const iconData = this.props.rollerType.iconQueue[this.nextJoinIconIndex]
		const itemHeight = iconViewModel.comp.node.getComponent(UITransform).height + iconData.intervalHeight * 2
		if (this.props.rollerType.direction === DirectionType.DOWN) {
			iconViewModel.comp.node.setPosition(new Vec3(position.x, -this.getRollerHeight() + (itemHeight / 2) + (insideCount * itemHeight), 1))
		} else {
			iconViewModel.comp.node.setPosition(new Vec3(position.x, -(insideCount * itemHeight) - (itemHeight / 2), 1))
		}
		// this.coordList.push(iconViewModel.comp.node.position.y)

		return iconViewModel
	}

	/**初始化 */
	private initRoller() {
		//取队列最后n个图标
		// const iconQueue = [...this.props.iconQueue]
		// const iconQueue = clone(this.props.iconQueue)
		this.rollConfig = this.props.rollerType.LargeRoller ? config.largeRollOption : config.normalRollOption
		this.propertyNode.props_roller.getComponent(UITransform).width = this.props.rollerType.width
		this.propertyNode.props_roller.getComponent(Widget).left = this.props.rollerType.intervalWidth
		this.propertyNode.props_roller.getComponent(Widget).right = this.props.rollerType.intervalWidth
		this.node.getComponent(UITransform).width = this.props.rollerType.width + this.props.rollerType.intervalWidth * 2
		this.propertyNode.props_daqipao.active = this.props.rollerType.LargeRoller

		this.lastInsertIconViewModel = this.creator()
		while ((this.props.rollerType.direction === DirectionType.DOWN && this.lastInsertIconViewModel.comp.node.position.y < 0) ||
			(this.props.rollerType.direction === DirectionType.UP && this.lastInsertIconViewModel.comp.node.position.y > -this.getRollerHeight())) {
			this.lastInsertIconViewModel = this.creator()
		}
	}
	/**提前结束,这个停止方式，应该只支持indexTrgger这种触发方案 */
	private bringForwardEnd(rollerType: RollerType, stopSpeed: number = 4) {
		if (rollerType.stopIconIndex + stopSpeed >= this.props.rollerType.iconQueue.length) {
			// this.nextJoinIconIndex = this.props.rollerType.iconQueue.length - rollerType.stopIconIndex
			this.nextJoinIconIndex = rollerType.stopIconIndex + stopSpeed - this.props.rollerType.iconQueue.length
		} else {
			this.nextJoinIconIndex = rollerType.stopIconIndex + stopSpeed
		}
	}

	/**
	 * 添加图标
	 * @returns 
	 */
	private joinIcon() {
		try {
			//下一个要加入的图标
			// this.nextJoinIconIndex < 0 && (this.nextJoinIconIndex = 0)
			// this.nextJoinIconIndex >= this.props.rollerType.iconQueue.length && (this.nextJoinIconIndex = this.props.rollerType.iconQueue.length - 1)
			const iconData = this.props.rollerType.iconQueue[this.nextJoinIconIndex]
			if (!iconData) {
				console.log(this.nextJoinIconIndex, this.props.rollerType.iconQueue)
			}
			let iconViewModel: RollerIconViewModel
			if (this.outIconPool.length === 0) {
				iconViewModel = new RollerIconViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.ICON).source)
			} else {
				iconViewModel = this.outIconPool.shift()
				iconViewModel.viewNode.setPosition(new Vec3(0, 0, 1))
			}
			iconViewModel.appendTo(this.propertyNode.props_roller).setProps({ iconData, iconEffect: IconEffectType.NONE })

			// const iconViewModel = new RollerIconViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.ICON).source).appendTo(this.propertyNode.props_roller).setProps({ iconData })
			const position = iconViewModel.comp.node.getPosition()
			//icon的高度加上上下纵向高度
			const itemHeight = iconViewModel.comp.node.getComponent(UITransform).height + iconData.intervalHeight * 2
			if (this.props.rollerType.direction === DirectionType.DOWN) {
				iconViewModel.comp.node.setPosition(new Vec3(position.x, this.lastLineY + itemHeight - this.props.rollerType.speed, 1))
				this.nextJoinIconIndex--
				this.nextJoinIconIndex === -1 && (this.nextJoinIconIndex = this.props.rollerType.iconQueue.length - 1)
				this.compensation = iconViewModel.comp.node.position.y
			} else {
				iconViewModel.comp.node.setPosition(new Vec3(position.x, this.lastLineY - itemHeight + this.props.rollerType.speed, 1))
				this.nextJoinIconIndex++
				this.nextJoinIconIndex === this.props.rollerType.iconQueue.length - 1 && (this.nextJoinIconIndex = 0)
			}
			this.displayIconList.push(iconViewModel)
			// console.log(this.displayIconList.map(i => i.id))
			return iconViewModel
		} catch (e) {
			console.log(this.nextJoinIconIndex, this.props.rollerType.iconQueue)
		}
	}

	/**
	 * 滑槽高度，考虑滑槽的高度可能动态，这里动态获取，当然，也可以设置cache=true，获取上一次动态取的高度
	 * @param cache 是否取上一次动态取的高度
	 * @returns 
	 */
	private getRollerHeight(cache: boolean = false) {
		if (!cache) {
			this.rollerHeight = this.propertyNode.props_roller.getComponent(UITransform).height
		}
		return this.rollerHeight
	}

	protected bindUI(): void {
		this.rollerHeight = this.getRollerHeight()
		this.useState((key, value) => {
			this.node.getComponent(Mask).enabled = !value.cur

		}, ["roundEnd"])
		!this.timer_clear && (this.timer_clear = window.setInterval(() => {
			this.displayIconList = this.displayIconList.filter(iconMv => {
				if (iconMv.isUnMount) {
					iconMv = undefined
					return false
				}
				return true
			})
		}, 200))
	}

	private move() {
		if (this.props.rollerType.rolling) {
			// this.displayIconList.length > 10 && console.log(this.displayIconList.length)
			if (this.props.rollerType.index === 0 && this.displayIconList.filter(i => i.viewNode.parent).length === 3) {
				debugger
			}
			this.displayIconList.filter(item => item.comp.node && item.comp.node.active).forEach((iconMv, i) => {
				const _node = iconMv.comp.node
				const { x, y, z } = _node.getPosition()
				if (this.props.rollerType.direction === DirectionType.DOWN) {
					_node.setPosition(new Vec3(x, y - this.props.rollerType.speed, z))
					if (_node.getPosition().y <= -(this.getRollerHeight(true) + _node.getComponent(UITransform).height / 2)) {
						this.lastLineY = this.propertyNode.props_roller.children[this.propertyNode.props_roller.children.length - 1].position.y
						this.lastRemoveIconIndex = iconMv.comp.props.iconData.queueIndex

						iconMv.viewNode.removeFromParent()
						this.outIconPool.push(iconMv)
						this.displayIconList = this.displayIconList.filter(i => i.viewNode.parent)
						this.scheduleOnce(() => {
							if (this.props.rollerType.stopIconIndex !== this.lastInsertIconViewModel.comp.props.iconData.queueIndex) {
								
							}
							this.lastInsertIconViewModel = this.joinIcon()
						}, 0.01)

						// iconMv.unMount().then(() => {
						// 	if (this.props.rollerType.stopIconIndex !== this.lastInsertIconViewModel.comp.props.iconData.queueIndex) {
						// 		this.lastInsertIconViewModel = this.joinIcon()
						// 	}
						// })

					}

					if (this.props.rollerType.stopIconIndex === this.lastInsertIconViewModel.comp.props.iconData.queueIndex) {

						// this.props.rollerType.rolling = false
						this.dispatch(endRollingAction(this.props.rollerType.index, false))
						const itemHeight = this.rollConfig.singleRollerHeight + (this.rollConfig.singleIntervalHeight * 2)
						// console.log(this.props.rollerType.index, 'delete icon')
						fruit777_Audio.playOneShot(SoundPathDefine.DING)
						console.log(iconMv.comp.props.iconData.queueIndex, i, -this.getRollerHeight(true) + (i - 0.5) * itemHeight)
						tween(iconMv.comp.node).to(this.rollConfig.stopSpeed, { position: new Vec3(x, -this.getRollerHeight(true) + (i - 0.5) * itemHeight, z) }, { easing: "backOut" }).call(() => {
							if (_node.getPosition().y <= -(this.getRollerHeight(true) + _node.getComponent(UITransform).height / 2)) {
								// 超出的要删除
								this.lastLineY = this.propertyNode.props_roller.children[this.propertyNode.props_roller.children.length - 1].position.y
								this.lastRemoveIconIndex = iconMv.comp.props.iconData.queueIndex

								
								iconMv.viewNode.removeFromParent()
								this.outIconPool.push(iconMv)
								this.displayIconList = this.displayIconList.filter(i => i.viewNode.parent)
								//这里有一定可能存在多个溢出滑道的图标，所以可能执行2次甚至2次以上
								if (!this.state.roundEnd && this.displayIconList.length - 1 === i) {
									this.setState({ roundEnd: true })
									this.events.rollEnd(this.props.rollerType.index)
								}
								this.scheduleOnce(() => {


								}, 0.03)
								// iconMv.unMount().then(() => {
								// 	//这里有一定可能存在多个溢出滑道的图标，所以可能执行2次甚至2次以上
								// 	if (!this.state.roundEnd && this.displayIconList.length - 1 === i) {
								// 		this.setState({ roundEnd: true })
								// 		// this.dispatch(setRoundEnd(true))
								// 		// this.roundEnd = true
								// 		this.events.rollEnd(this.props.rollerType.index)
								// 	}
								// })
							} else {
								if (!this.state.roundEnd) {
									this.setState({ roundEnd: true })
									this.events.rollEnd(this.props.rollerType.index)
								}
							}
						}).start()
					}
				} else {
					_node.setPosition(new Vec3(x, y + this.props.rollerType.speed, z))
					if (_node.getPosition().y >= _node.getComponent(UITransform).height / 2) {
						this.lastLineY = this.propertyNode.props_roller.children[this.propertyNode.props_roller.children.length - 1].position.y
						this.lastRemoveIconIndex = iconMv.comp.props.iconData.queueIndex
						iconMv.unMount().then(() => {
							if (this.props.rollerType.stopIconIndex !== this.lastInsertIconViewModel.comp.props.iconData.queueIndex) {
								this.lastInsertIconViewModel = this.joinIcon()
							}
						})
					}
					if (this.props.rollerType.stopIconIndex === this.lastInsertIconViewModel.comp.props.iconData.queueIndex) {
						// this.props.rollerType.rolling = false
						this.dispatch(endRollingAction(this.props.rollerType.index, false))
						const itemHeight = this.rollConfig.singleRollerHeight + (this.rollConfig.singleIntervalHeight * 2)
						//恢复到默认位置并对齐，第一个元素是最上面那个
						tween(iconMv.comp.node).to(this.rollConfig.stopSpeed, { position: new Vec3(x, -itemHeight * (i - 0.5), z) }, { easing: "backOut" }).call(() => {
							if (_node.getPosition().y >= _node.getComponent(UITransform).height / 2) {
								this.lastLineY = this.propertyNode.props_roller.children[this.propertyNode.props_roller.children.length - 1].position.y
								this.lastRemoveIconIndex = iconMv.comp.props.iconData.queueIndex
								iconMv.unMount().then(() => {
									// this.events.rollEnd(this.props.rollerType.index)
									//这里有一定可能存在多个溢出滑道的图标，所以可能执行2次甚至2次以上
									if (!this.state.roundEnd) {
										// this.dispatch(setRoundEnd(true))
										this.setState({ roundEnd: true })
										// this.roundEnd = true
										this.events.rollEnd(this.props.rollerType.index)
									}
								})
							} else {
								if (!this.state.roundEnd) {
									this.setState({ roundEnd: true })
									this.events.rollEnd(this.props.rollerType.index)
								}
							}
						}).start()
					}
				}
			})
		}
	}

	update(deltaTime: number) {

	}
	public getRoundEnd() {
		return this.state.roundEnd
	}
	onDestroy() {
		window.clearInterval(this.timer_clear)
	}
}