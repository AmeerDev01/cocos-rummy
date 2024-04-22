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
	/**最近一次加入的图标 */
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
	// private stopGrid: Array<Array<number>> = [[0,0],[0,0],[0,0]]
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
				if (this.props.rollerType.stopIconIndex && value.pre.stopIconIndex !== value.cur.stopIconIndex) {
					if (this.props.stopMode === "jump") {
						// 放弃这种模式(控制跳跃的距离来实现步停)
						// this.bringForwardEnd(this.props.rollerType, this.props.isSortStop ? 4 + this.props.rollerType.index * 8 : 4)
						this.bringForwardEnd(this.props.rollerType, 5)
					} else {
						this.dispatch(setRollSpeed(this.props.isSpeedUp ? 1.5 : 1))
					}
				}

				if (value.pre.rolling === false && value.cur.rolling === true) {
					// while ((this.props.rollerType.direction === DirectionType.DOWN && this.lastInsertIconViewModel.comp.node.position.y < 0) ||
					// 	(this.props.rollerType.direction === DirectionType.UP && this.lastInsertIconViewModel.comp.node.position.y > -this.getRollerHeight())) {
					// }
					this.joinIcon()
					this.setState({ roundEnd: false })
					this.events.rollStart()
					const speedUp = (index) => {
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
			//displayIconList可能还没有清除掉节点已经被释放的对象
			this.speed = 0
			const displayIconListInside = this.displayIconList.filter(i => i.viewNode.position.y > -this.getRollerHeight(true))
			for (let i = 0, l = displayIconListInside.length; i < l; i++) {
				/**index是图标从下往上的序列号 */
				const index = i
				const item = displayIconListInside[index]
				if (this.props.iconEffectData.iconEffectArr.indexOf(index) !== -1) {
					item.setProps({ iconEffect: this.props.iconEffectData.iconEffect })
				} else {
					item.setProps({ iconEffect: IconEffectType.NONE })
				}
			}
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
		if (!this.nextJoinIconIndex && this.nextJoinIconIndex !== 0) {
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
	}


	private initRoller() {
		this.rollConfig = this.props.rollerType.LargeRoller ? config.largeRollOption : config.normalRollOption
		this.propertyNode.props_roller.getComponent(UITransform).width = this.props.rollerType.width
		this.propertyNode.props_roller.getComponent(Widget).left = this.props.rollerType.intervalWidth
		this.propertyNode.props_roller.getComponent(Widget).right = this.props.rollerType.intervalWidth
		this.node.getComponent(UITransform).width = this.props.rollerType.width + this.props.rollerType.intervalWidth * 2
		this.propertyNode.props_daqipao.active = this.props.rollerType.LargeRoller
		this.nextJoinIconIndex = this.props.rollerType.iconQueue.length - 1
		while (!this.lastInsertIconViewModel || (this.lastInsertIconViewModel && this.lastInsertIconViewModel.viewNode.position.y < 200)) {
			this.joinIcon()
		}
	}

	private joinIcon() {
		let iconViewModel: RollerIconViewModel
		const iconData = this.props.rollerType.iconQueue[this.nextJoinIconIndex]
		if (this.outIconPool.length === 0) {
			// this.props.rollerType.index === 0 && console.log(this.props.rollerType.index, 'create')
			iconViewModel = new RollerIconViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.ICON).source)
		} else {
			iconViewModel = this.outIconPool.shift()
			iconViewModel.viewNode.setPosition(new Vec3(0, 0, 1))
		}
		iconViewModel.appendTo(this.propertyNode.props_roller).setProps({ iconData, iconEffect: IconEffectType.NONE })
		if (this.lastInsertIconViewModel) {
			//已经有图标
			const { x, y, z } = this.lastInsertIconViewModel.viewNode.position
			iconViewModel.viewNode.setPosition(new Vec3(x, y + iconViewModel.viewNode.getComponent(UITransform).height + iconData.intervalHeight * 2, 1))
		} else {
			iconViewModel.viewNode.setPosition(new Vec3(0, -this.getRollerHeight(true) + iconViewModel.viewNode.getComponent(UITransform).height / 2 + iconData.intervalHeight, 1))
		}
		this.nextJoinIconIndex--
		this.nextJoinIconIndex === -1 && (this.nextJoinIconIndex = this.props.rollerType.iconQueue.length - 1);
		// console.log(iconViewModel.comp.props.iconData.iconId)
		(!this.displayIconList.some(i => i.viewNode.uuid === iconViewModel.viewNode.uuid)) && this.displayIconList.push(iconViewModel)
		this.lastInsertIconViewModel = iconViewModel
	}

	private move() {
		if (!this.props.rollerType.rolling) return;
		this.moveIcon()
		//最后一个完全进入
		const lastChild = this.propertyNode.props_roller.children[this.propertyNode.props_roller.children.length - 1]
		if (lastChild.position.y < -(lastChild.getComponent(UITransform).height / 2)) {
			this.joinIcon()
			if (this.props.rollerType.stopIconIndex === this.lastInsertIconViewModel.comp.props.iconData.queueIndex) {
				fruit777_Audio.playOneShot(SoundPathDefine.DING)
				//需要停止的ICON出现
				this.dispatch(endRollingAction(this.props.rollerType.index, false))
				const geidArr = this.getIconStopSet()
				this.propertyNode.props_roller.children.forEach((c, j) => {
					tween(c).to(this.rollConfig.stopSpeed, { position: new Vec3(c.position.x, geidArr[j], c.position.z) }, { easing: "backOut" }).start()
				})
				this.scheduleOnce(() => {
					//滑槽最后停止
					this.moveIcon()
					this.setState({ roundEnd: true })
					this.events.rollEnd(this.props.rollerType.index)
				}, this.rollConfig.stopSpeed)
			}
		}
	}

	private moveIcon() {
		//删除图标
		this.propertyNode.props_roller.children.forEach((child, i) => {
			const viewModel = this.displayIconList.find(i => i.viewNode.uuid === child.uuid)
			const { x, y, z } = child.getPosition()
			child.setPosition(new Vec3(x, y - this.props.rollerType.speed, z))
			//为了让临界溢出图标顺利被删除，后面多加一点提前量
			if (child.position.y <= -(this.getRollerHeight(true) + child.getComponent(UITransform).height / 2 + this.props.rollerType.iconQueue[this.nextJoinIconIndex].intervalHeight) + 60) {
				// this.props.rollerType.index === 0 && console.log(this.props.rollerType.index, 'remove')
				//超出底部
				child.removeFromParent()
				this.displayIconList = this.displayIconList.filter(i => i.viewNode.uuid !== child.uuid)
				viewModel && this.outIconPool.push(viewModel)
			}
		})
	}

	/**根据图标的序号获取停止为止，从最后一个开始，顶部对齐 */
	private getIconStopSet() {
		const l = this.propertyNode.props_roller.children.length
		const gridArr = []
		let start_y = 0
		for (let i = l - 1; i >= 0; i--) {
			const nodeHeight = this.propertyNode.props_roller.children[i].getComponent(UITransform).height
			gridArr.push(start_y - (nodeHeight / 2 + this.rollConfig.singleIntervalHeight))
			//累加当前图标的纵向占位
			start_y += -(nodeHeight + this.rollConfig.singleIntervalHeight * 2)
		}
		return gridArr.reverse()
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
