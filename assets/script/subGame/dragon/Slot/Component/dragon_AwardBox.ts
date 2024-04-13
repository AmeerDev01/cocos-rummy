import { _decorator, Component, Label, Node, sp, tween, UIOpacity, Vec3 } from 'cc';
import BaseComponent from './BaseComponent';
import config from '../config';
import { bindClickEvent } from '../utils';
const { ccclass, property } = _decorator;


export enum BoxState {
	OPEN,
	CLOSE,
	OPRNING
}


@ccclass('dragon_AwardBox')
export class dragon_AwardBox extends BaseComponent {
	/**宝箱ID */
	public boxId: string = ''
	/**宝箱状态 */
	public status: BoxState = BoxState.CLOSE

	@property(Node)
	subIcon: Node = null

	@property(sp.SkeletonData)
	BxApple: sp.SkeletonData = null

	@property(sp.SkeletonData)
	BxStrawberry: sp.SkeletonData = null

	@property(sp.SkeletonData)
	BxGrape: sp.SkeletonData = null

	@property(sp.SkeletonData)
	BxWatermelon: sp.SkeletonData = null

	@property(sp.SkeletonData)
	BxBanana: sp.SkeletonData = null

	@property(sp.SkeletonData)
	up: sp.SkeletonData = null

	@property(sp.SkeletonData)
	addtimes: sp.SkeletonData = null

	start() {

	}

	update(deltaTime: number) {

	}


	private showScore(amount: number) {
		const score = this.node.getChildByName("score")
		score.getComponent(Label).string = amount.formatAmountWithCommas() + ''
		const ui = score.getComponent(UIOpacity)
		score.active = true
		score.setScale(0.7, 0.7)
		ui.opacity = 0
		tween().target(ui).to(0.2, { opacity: 255 }).start()
		tween().target(score).to(0.2, { scale: new Vec3(1, 1) }).start()
	}
	/**执行响应的效果 */
	public setEffect(effectId: string, amount: number, cb: () => void) {
		// console.log(this.boxId, '开始效果')
		const skeletonRoot = this.node.getComponent(sp.Skeleton)
		skeletonRoot.animation = 'diankaibaoxiang';
		// skeletonRoot.loop = false //这个居然没有作用，MMP
		const awardBoxItem = config.awardBoxItem.find(item => item.id === effectId)
		window.setTimeout(() => {
			// 打开贝壳等一秒钟
			this.subIcon.active = true
			const skeleton = this.subIcon.getComponent(sp.Skeleton)
			skeleton.skeletonData = this[awardBoxItem.name]
			skeleton.animation = awardBoxItem.animafild
			window.setTimeout(() => {
				// 展示结果耗时
				this.status = BoxState.OPEN
				amount && this.showScore(amount)
				cb && cb()
			}, 1500)
		}, 1000)
		window.setTimeout(() => skeletonRoot.destroy(), 1500)
	}

	/**执行响应的效果 */
	public setBoxId(boxId: string) {
		this.boxId = boxId
		this.node.getChildByName("boxId").getComponent(Label).string = boxId
	}

	protected bindEvent(): void {
		// this.node.on(Node.EventType.TOUCH_END, () => { })
	}

	protected bindUI(): void {
		bindClickEvent(this.node)
		this.node.setScale(0.9, 0.9)
	}
}

