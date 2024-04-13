import { _decorator, Component, instantiate, Node, Label, Skeleton, sp, Sprite, SpriteAtlas, SpriteFrame, UITransform, Vec3, Widget } from 'cc';
import BaseComponent from './BaseComponent';
import iconConfig from '../config'
const { ccclass, property } = _decorator;

type ConfigType = {
	id: number
	name: string
	fileName: string
	animationArr?: string[]
	distance: number[],
	scale: number[],
}

@ccclass('dragon_Icon')
export class dragon_Icon extends BaseComponent {
	@property(Node)
	face: Node = null

	@property(sp.SkeletonData)
	icon10: sp.SkeletonData = null

	@property(sp.SkeletonData)
	iconJ: sp.SkeletonData = null

	@property(sp.SkeletonData)
	iconQ: sp.SkeletonData = null

	@property(sp.SkeletonData)
	iconK: sp.SkeletonData = null

	@property(sp.SkeletonData)
	iconA: sp.SkeletonData = null

	@property(sp.SkeletonData)
	tongqian: sp.SkeletonData = null

	@property(sp.SkeletonData)
	yuanbao: sp.SkeletonData = null

	@property(sp.SkeletonData)
	yaoqianshu: sp.SkeletonData = null

	@property(sp.SkeletonData)
	baicai: sp.SkeletonData = null

	@property(sp.SkeletonData)
	wild: sp.SkeletonData = null

	@property(sp.SkeletonData)
	scatter: sp.SkeletonData = null

	@property(sp.SkeletonData)
	baohe: sp.SkeletonData = null

	@property(Node)
	effectBorder: Node = null

	// private iconDir = {
	// 	icon_1: this.apple,
	// 	icon_2: this.banana,
	// 	icon_3: this.strawberry,
	// 	icon_4: this.watermelon,
	// 	icon_5: this.grape,
	// 	icon_6: this.bell,
	// 	icon_7: this.wild,
	// 	icon_8: this.icon777,
	// 	icon_9: this.bar1,
	// 	icon_10: this.bar2,
	// 	icon_11: this.bar3
	// }

	public iconId: number = 0

	private iconDir: ConfigType[]
	private iconSize: 'normal' | 'large' = 'normal'
	private iconConfig: ConfigType

	protected bindUI(): void {
		const rootUi = this.root.getComponent(UITransform) as UITransform
		rootUi.anchorY = 1

		// rootUi.anchorX = 0
	}
	/**传入图标的ID */
	public setFace(iconId: number) {
		this.iconId = iconId
		this.iconDir = iconConfig.icon
		this.iconConfig = this.iconDir.find(item => item.id === iconId)
		this.node.getChildByName("face").active = true
		this.face.getComponent(sp.Skeleton).skeletonData = this[this.iconConfig.name]
		this.face.getComponent(sp.Skeleton).premultipliedAlpha = false
		this.node.getChildByName("face").getComponent(sp.Skeleton).animation = this.iconConfig.animationArr[0]
		this.node.getChildByName("face").getComponent(Widget).left = this.iconConfig.distance[0]
		this.node.getChildByName("face").getComponent(Widget).top = this.iconConfig.distance[1]
		if (this.iconConfig.name === 'scatter') {
			this.node.getChildByName('focusBorder').destroy()
		}
		this.face.setScale(this.iconConfig.scale[0], this.iconConfig.scale[1])
		// this.effectBorder.active = true
	}
	public hiddenAmounts(amountNum) {
		let amount = this.node.getChildByName('amount')
		amount.getComponent(Label).string = amountNum + ''
	}
	/**启动或停止效果
	 * animationIndex设置为0，或不设置的话，就停止效果
	 */
	public setEffect(animationIndex: number = 0) {
		// this.face.getComponent(sp.Skeleton).setAnimation(1, this.iconConfig.animationArr[animationIndex], true)
		if (this.iconSize === 'large') return
		if (animationIndex > this.iconConfig.animationArr.length - 1) {
			animationIndex = this.iconConfig.animationArr.length - 1
		}
		this.node.getChildByName("face").getComponent(sp.Skeleton).animation = this.iconConfig.animationArr[animationIndex]
		const iseff = animationIndex === 0 ? false : true
		this.effectBorder.active = iseff
	}


	protected bindEvent(): void {

	}

	start() {

	}

	update(deltaTime: number) {

	}
}

