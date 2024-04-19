import { _decorator, Node, Label, UITransform, Size, Prefab, instantiate, Vec3, Layout, tween, log, Mask } from 'cc';
import BaseComponent from './BaseComponent';
import { SlotRepository, RollerType } from '../Repositories/SlotRepository';
import { dragon_Icon } from './dragon_Icon';
import { SlotProxy } from '../Proxy/SlotProxy';
import config from '../config';
import { AudioManager, SoundList } from '../Managr/AudioManager';
const { ccclass, property } = _decorator;

/**
 * 动画停止回调
 */
type StopHandlerType = (rollerIndex: number, rollerData: RollerType) => void

@ccclass('dragon_Roller')
export class dragon_Roller extends BaseComponent {
	@property(Node)
	RollerLayOut: Node = null

	@property(Node)
	RollerLayOut2: Node = null
	@property(Node)
	RingOfFire: Node = null

	@property(Prefab)
	icon: Prefab = null

	@property(Prefab)
	icon2: Prefab = null

	private rollerDataRep: SlotRepository
	private isRoll = false
	private rollerData: RollerType
	/**第几条滑槽，序号 */
	private rollerIndex: number
	/**此值存在，即要检测停止了 */
	private endFlag: boolean = true
	/**初始化时，图标开始的排列序号 */
	private initStartIndex = 0
	/**下一个要加入的图标 */
	private lastJoinIconIndex = 0
	// private target: number = -1
	/**动态效果停止后的动态回调函数 */
	private stopHandler: StopHandlerType
	private historicalCircleOfFireList: [][] = []
	private MoveHeight = -138

	private isSpeed = false;

	start() { }
	protected bindUI(): void {
		this.rollerDataRep = this.getRollProxy().getRepository();
		// const layout = this.RollerLayOut.getComponent(Layout)
		// layout.spacingY = this.rollerData.roller.intervalHeight
		// 配置滑槽宽高度(也就是蒙板宽高)
		const rootUi = this.root.getComponent(UITransform) as UITransform
		rootUi.anchorY = 1
		const rollerUi = this.RollerLayOut.getComponent(UITransform) as UITransform
		// rootUi.anchorX = 0
		rollerUi.anchorY = 1
		// rollerUi.anchorX = 0
		this.lastJoinIconIndex = this.initStartIndex - 1
		this.lastJoinIconIndex === -1 && (this.lastJoinIconIndex = this.rollerData.data.length - 1)
		// 设置蒙版组件高度
		rootUi.setContentSize(new Size(this.rollerData.intervalWidth + this.rollerData.rollerWidth,
			((this.rollerData.intervalHeight + this.rollerData.rollerheight) * this.rollerData.portraitNum) + this.rollerData.intervalHeight))
		//设置滑道高度，多一个高度
		rollerUi.setContentSize(new Size(this.rollerData.rollerWidth,
			(this.rollerData.intervalHeight + this.rollerData.rollerheight) * (this.rollerData.portraitNum + 1)))
		// 滑道网上顶一个单位（但是上沿有遮挡，再降30）
		this.RollerLayOut.setPosition(this.RollerLayOut.position.x, (this.rollerData.intervalHeight + this.rollerData.rollerheight) - this.rollerData.intervalHeight)
		// 初始化即将开始的图标
		for (let i = 0; i < this.rollerData.portraitNum; i++) {
			const icon = instantiate(this.icon)
			icon.setPosition(new Vec3(0, icon.position.y - (this.rollerData.intervalHeight + this.rollerData.rollerheight) * (i + 1)))
			this.RollerLayOut.addChild(icon);
			const index = this.initStartIndex + i;
			(<dragon_Icon>icon.getComponent("dragon_Icon")).setFace(this.rollerData.data[index])
		}
		// this.bubble.active = this.rollerData.isBigIcon
		this.initRollerLayOut2()
	}

	private initRollerLayOut2() {
		const rollerUi = this.RollerLayOut2.getComponent(UITransform) as UITransform
		rollerUi.anchorY = 1
		rollerUi.setContentSize(new Size(this.rollerData.rollerWidth,
			(this.rollerData.intervalHeight + this.rollerData.rollerheight) * (this.rollerData.portraitNum)))
	}


	protected bindEvent(): void {

	}
	/**指定滑槽数据 */
	public bindRollerData(rollerIndex: number, data: RollerType) {
		this.rollerData = data
		this.rollerIndex = rollerIndex
	}
	/**
	 * 开始滚动
	 * @param stopIndex 设定要停止的序号（从1开始的）
	 */
	public startRoll(stopIndex: number, isSpeed: boolean = false) {
		this.isSpeed = isSpeed;
		// 往上移动一个网格，以便放上下一个要显示的icon
		this.joinIcon();
		// console.log(this.rollerIndex, stopIndex);
		(this.getRollProxy() as SlotProxy).setStopIndex(this.rollerIndex, stopIndex)
		this.isRoll = true
		this.endFlag = false
		this.RollerLayOut.children.forEach(icon => {
			(<dragon_Icon>icon.getComponent("dragon_Icon")).setEffect()
		})
		this.node.getComponent(Mask).enabled = true
		// this.rollWithCell('down')
		// console.log(this.getRollProxy().getRepository())
	}
	// 停止滚动
	public stopRoll(cbFn: StopHandlerType) {
		this.endFlag = true
		this.stopHandler = cbFn
		this.addLastJoinIconIndex(this.rollerData.showResult.stopIndex, 3);
		// (this.getRollProxy() as FruitsSlotProxy).setStopIndex(this.rollerIndex)
	}
	private joinIcon() {
		// this.lastJoinIconIndex === this.rollerData.data.length && (this.lastJoinIconIndex = 0)
		// console.log(this.lastJoinIconIndex)
		const icon = instantiate(this.icon)
		icon.setPosition(icon.position.x, 0)
		this.RollerLayOut.addChild(icon);
		(<dragon_Icon>icon.getComponent("dragon_Icon")).setFace(this.rollerData.data[this.lastJoinIconIndex])
		icon.setSiblingIndex(0)
		this.lastJoinIconIndex--
		this.lastJoinIconIndex === -1 && (this.lastJoinIconIndex = this.rollerData.data.length - 1)
		// this.RollerLayOut.removeChild(this.RollerLayOut.children[this.RollerLayOut.children.length - 1])
		// this.RollerLayOut.children[this.RollerLayOut.children.length - 1].destroy()
	}
	
	private stopCallBack() {
		this.node.getComponent(Mask).enabled = false
		this.stopHandler && this.stopHandler(this.rollerIndex, this.rollerData)
		// this.RollerLayOut.children.forEach(icon => {
		// 	const comp = (<Icon>icon.getComponent("Icon"))
		// 	if (comp.iconId === this.target) {
		// 		comp.setEffect('animation')
		// 	}
		// })
		AudioManager.getInstance().playSound(SoundList.theRollerStops)
		this.RollerLayOut.children[this.RollerLayOut.children.length - 1].destroy()
	}
	/* 老火圈滚动动逻辑*/
	oldMoveRingOfFire() {
		this.node.getChildByName('RingOfFireBOX').children.forEach(item => {
			item.getChildByName('wlid').active = false
			if (item.position.y + this.MoveHeight < this.MoveHeight * 2) {
				this.nodeMOve(item, item.position.y + this.MoveHeight, true)
			} else {
				this.nodeMOve(item, item.position.y + this.MoveHeight)
			}
		})
	}

	// 火圈隐藏
	theRingOfFireIsHidden(state){
		this.node.getChildByName('RingOfFireBOX').active=state
		if(!state){
			this.node.getChildByName('RingOfFireBOX').destroyAllChildren()
		}
	}
	/* 火圈滚动逻辑*/
	moveRingOfFire(data) {
		let targetY = 0;
		if (data[1] === 0) {
			targetY = this.MoveHeight * 2
		}
		if (data[1] === 1) {
			targetY = this.MoveHeight
		}
		if (data[1] === 2) {
			targetY = 0
		}
		let node = instantiate(this.RingOfFire);
		node.active = true;
		node.setSiblingIndex(999);
		this.nodeMOve(node, targetY)
		let children = this.node.getChildByName('RingOfFireBOX').children
		if (children.length > 0) {
			for (let i = 0; i <= children.length; i++) {
				if (children[i]?.position.y === targetY - this.MoveHeight) {
					if (data[2]) {
						this.showWlid(children[i])
					}
					break;
				} else {
					this.node.getChildByName('RingOfFireBOX').addChild(node);
				}
			}
		} else {
			if (data[2]) {
				this.showWlid(node)
			}
			this.node.getChildByName('RingOfFireBOX').addChild(node);
		}

	}
	/* 火圈移动*/
	private nodeMOve(item: Node, targetY, isDestroy = false) {
		let duration = 1
		tween(item).to(duration, { position: new Vec3(item.position.x, targetY, item.position.z) })
			.call(() => {
				if (isDestroy) {
					item.destroy()
				}
			})
			.start();
	}
	/* 显示wlid*/
	private showWlid(item) {
		this.scheduleOnce(() => {
			item&&(item.getChildByName('wlid').active = true)
		}, 1)
	}
	/* 去重*/
	private uniqueByFirstTwo(arr) {
		const uniqueArr = [];
		const map = new Map();

		for (const item of arr) {
			const key = item.slice(0, 2).join(',');

			if (!map.has(key)) {
				map.set(key, true);
				uniqueArr.push(item);
			}
		}

		return uniqueArr;
	}
	/**
	 * 设置当前滑槽的闪动图标()
	 * @param mode 传入的是光标id，还是左边序列号
	 * @param target 光标位置或者y轴坐标序列
	 */
	public setIconEffect(mode: 'index' | 'coord', target: number[], allState: boolean = false) {
		if (mode === 'index') {
			this.RollerLayOut.children.forEach(icon => {
				const comp = (<dragon_Icon>icon.getComponent("dragon_Icon"))
				if (target.some(i => i === comp.iconId)) {
					comp.setEffect(1)
				} else {
					comp.setEffect()
				}
			})
		} else {
			let iconIndex = this.rollerData.portraitNum
			this.RollerLayOut.children.forEach((icon, index) => {
				iconIndex--
				const comp = (<dragon_Icon>icon.getComponent("dragon_Icon"))
				if (target.some(i => i === iconIndex)) {
					comp.setEffect(1)
				} else {
					if (allState) {
						comp.setEffect()
					}
				}
			})


			//向上数第几个光标闪动
			// for (let i = 2; i >= 0; i--) {
			// 	const comp = (<Icon>this.RollerLayOut.children[i].getComponent("Icon"))
			// 	if (!comp) continue
			// 	if (i === target) {
			// 		comp.setEffect(1)
			// 	} else {
			// 		comp.setEffect()
			// 	}
			// }
		}
	}
	/**
	 * 添加停靠图标
	 * @param index 停靠的序号，从下到上
	 */
	public addDockIcon(targetArr: number[]) {
		this.removeAllDockIcon()
		targetArr.forEach((item, index) => {
			try {
				const icon = instantiate(this.icon2);
				if (item[0] === 0) {
					item[0] = 2
				} else if (item[0] === 2) {
					item[0] = 0
				}
				(<dragon_Icon>icon.getComponent("dragon_Icon")).hiddenAmounts(item[1])
				icon.setPosition(new Vec3(0, -item[0] * this.rollerData.rollerheight))
				this.RollerLayOut2.addChild(icon);
			} catch (e) {
				console.error('sss')
			}
		})

	}

	public removeAllDockIcon() {
		this.RollerLayOut2.removeAllChildren()
	}
	//隐藏显示弹出层2
	public togglesThePopUpLayerState(state: boolean) {
		this.RollerLayOut2.active = state
	}
	public hiddenAmounts(state, amountNum) {
		this.RollerLayOut.children.forEach(icon => {
			// (<Icon>icon.getComponent("Icon")).hiddenAmounts(state,amountNum)
		})
	}
	/**滚动一个格子 */
	private rollWithCell(position: 'up' | 'down') {
		if (this.isRoll) {
			this.RollerLayOut.children.forEach(icon => {
				// icon.setPosition(new Vec3(icon.position.x, icon.position.y - this.rollerData.rollSpeed))
				tween(icon).to(this.rollerData.rollSpeed / 1000, { position: new Vec3(icon.position.x, icon.position.y - ((this.rollerData.intervalHeight + this.rollerData.rollerheight))) }).start()
			})
			window.setTimeout(() => {
				if (this.RollerLayOut.children.length) {
					// if (this.RollerLayOut.children[0].position.y <= -(this.rollerData.rollerheight + this.rollerData.intervalHeight)) {
					const deviation = Math.abs(this.RollerLayOut.children[0].position.y) - (this.rollerData.rollerheight + this.rollerData.intervalHeight) //瞬时的纵向误差
					this.joinIcon()
					// 这里要注意
					let _lastJoinIconIndex = this.lastJoinIconIndex + 1
					if (this.lastJoinIconIndex + 1 >= this.rollerData.data.length) {
						_lastJoinIconIndex = 0
					}
					if (this.endFlag && this.rollerData.showResult.stopIndex - 1 === _lastJoinIconIndex) {
						this.isRoll = false
						let count = 0
						this.RollerLayOut.children.forEach(icon => {
							tween().target(icon).to(this.rollerData.rollSpeed / 1000 + 0.3, {
								position: new Vec3(icon.position.x, icon.position.y + deviation - (this.rollerData.rollerheight + this.rollerData.intervalHeight))
							}, {
								easing: "backOut"//"elasticOut"
							}).call(() => {
								count++
								if (count === this.RollerLayOut.children.length) {
									this.stopCallBack()
								}
							}).start()
						})
					}
					// }
					const lastChild = this.RollerLayOut.children[this.RollerLayOut.children.length - 1]
					if (lastChild.position.y <= -(this.rollerData.rollerheight + this.rollerData.intervalHeight) * (this.rollerData.portraitNum + 1)) {
						lastChild.destroy()
					}
					this.rollWithCell(position)
				}
			}, this.rollerData.rollSpeed)
		}
	}

	private addLastJoinIconIndex(stopIndex: number, value: number) {
			let newValue = stopIndex + value;
			if (newValue >= this.rollerData.data.length) {
					this.lastJoinIconIndex = newValue - this.rollerData.data.length;
			} else {
					this.lastJoinIconIndex = newValue;
			}
	}

	update(deltaTime: number) {
		if (this.isRoll) {
			this.RollerLayOut.children.forEach(icon => {
				icon.setPosition(new Vec3(icon.position.x, icon.position.y - this.rollerData.rollSpeed))
			})
			if (this.RollerLayOut.children.length) {
				if (this.RollerLayOut.children[0].position.y <= -(this.rollerData.rollerheight + this.rollerData.intervalHeight)) {
					const deviation = 0// Math.abs(this.RollerLayOut.children[0].position.y) - (this.rollerData.rollerheight + this.rollerData.intervalHeight) //瞬时的纵向误差
					this.joinIcon()

					// 这里要注意
					let _lastJoinIconIndex = this.lastJoinIconIndex + 1
					if (this.lastJoinIconIndex + 1 >= this.rollerData.data.length) {
						_lastJoinIconIndex = 0
					}
					if (this.endFlag && this.rollerData.showResult.stopIndex - 1 === _lastJoinIconIndex) {
						this.isRoll = false
						let count = 0
						this.RollerLayOut.children.forEach((icon, index) => {
							tween().target(icon).to(0.5, {
								position: new Vec3(icon.position.x, icon.position.y + deviation - (this.rollerData.rollerheight + this.rollerData.intervalHeight) + index * 18)
							}, {
								easing: "backOut"//"elasticOut"
							}).call(() => {
								count++
								if (count === this.RollerLayOut.children.length) {
									this.stopCallBack()
								}
							}).start()
						})
					}
				}
				const lastChild = this.RollerLayOut.children[this.RollerLayOut.children.length - 1]
				if (lastChild.position.y <= -(this.rollerData.rollerheight + this.rollerData.intervalHeight) * (this.rollerData.portraitNum + 1)) {
					lastChild.destroy()
				}
			}
		}
	}
	lateUpdate() {
		// if (this.RollerLayOut.children.length) {
		// 	const lastChild = this.RollerLayOut.children[this.RollerLayOut.children.length - 1]
		// 	if (lastChild.position.y <= -(this.rollerData.rollerheight + this.rollerData.intervalHeight) * (this.rollerData.portraitNum + 1)) {
		// 		lastChild.destroy()
		// 	}
		// }
	}
}

