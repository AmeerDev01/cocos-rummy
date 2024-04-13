import { _decorator, Component, Label, Node, SkelAnimDataHub, Skeleton, sp, Sprite, SpriteAtlas, SpriteFrame, UITransform, Vec3, Widget } from 'cc';
import BaseComponent from './BaseComponent';
import iconConfig from '../config'
const { ccclass, property } = _decorator;

type ConfigType = {
	id: number
	name: string
	fileName: string
	animationArr?: string[]
	distance: number[],
	scale: number[]
}

@ccclass('Egypt_Icon')
export class Egypt_Icon extends BaseComponent {
	@property(Node)
	face: Node = null

	@property(sp.SkeletonData)
	iconA: sp.SkeletonData = null

	@property(sp.SkeletonData)
	iconB: sp.SkeletonData = null

	@property(sp.SkeletonData)
	iconC: sp.SkeletonData = null

	@property(sp.SkeletonData)
	iconD: sp.SkeletonData = null

	@property(sp.SkeletonData)
	iconE: sp.SkeletonData = null

	@property(sp.SkeletonData)
	iconF: sp.SkeletonData = null

	@property(sp.SkeletonData)
	iconG: sp.SkeletonData = null

	@property(sp.SkeletonData)
	iconH: sp.SkeletonData = null

	@property(sp.SkeletonData)
	iconI: sp.SkeletonData = null

	@property(sp.SkeletonData)
	iconJ: sp.SkeletonData = null

	@property(sp.SkeletonData)
	scatter: sp.SkeletonData = null

	@property(sp.SkeletonData)
	wild: sp.SkeletonData = null

	@property(sp.SkeletonData)
	bettle: sp.SkeletonData = null

	@property(sp.SkeletonData)
	sunGod: sp.SkeletonData = null

	@property(sp.SkeletonData)
	wild1: sp.SkeletonData = null

	@property(sp.SkeletonData)
	wild2: sp.SkeletonData = null

	@property(sp.SkeletonData)
	wild3: sp.SkeletonData = null

	@property(Node)
	effectBorder: Node = null

	@property(Node)
	effectBorder2: Node = null

	@property(Node)
	effectBorder3: Node = null

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
	private iconConfigData: ConfigType

	protected bindUI(): void {
		const rootUi = this.root.getComponent(UITransform) as UITransform
		rootUi.anchorY = 1

		// rootUi.anchorX = 0
	}
	/**传入图标的ID */
	public setFace(iconId: number) {
		this.iconId = iconId
		this.iconDir = iconConfig.icon
		this.iconConfigData = this.iconDir.find(item => item.id === iconId)
		this.node.getChildByName("face").active = true
		this.face.getComponent(sp.Skeleton).skeletonData = this[this.iconConfigData.name]
		this.face.getComponent(sp.Skeleton).premultipliedAlpha = false
		this.node.getChildByName("face").getComponent(sp.Skeleton).animation = this.iconConfigData.animationArr[0]
		this.node.getChildByName("face").getComponent(Widget).left = this.iconConfigData.distance[0]
		this.node.getChildByName("face").getComponent(Widget).top = this.iconConfigData.distance[1]
		this.face.setScale(this.iconConfigData.scale[0], this.iconConfigData.scale[1])
        if(this.iconConfigData.name === 'scatter'){
            this.node.getChildByName('focusBorder').destroy()
        }
		if (this.iconConfigData.name === 'scatter' || this.iconConfigData.name === 'wild') {

		}
		// this.effectBorder.active = true
	}
    public hiddenAmounts(amountNum){
        let amount=this.node.getChildByName('amount')
        amount.getComponent(Label).string=amountNum+''
    }
	/**启动或停止效果
	 * animationIndex设置为0，或不设置的话，就停止效果
	 */
	public setEffect(animationIndex: number, borderHeight: 1 | 2 | 3 = 1) {
		// this.face.getComponent(sp.Skeleton).setAnimation(1, this.iconConfig.animationArr[animationIndex], true)
		if (this.iconSize === 'large') return
		if (animationIndex > this.iconConfigData.animationArr.length - 1) {
			animationIndex = this.iconConfigData.animationArr.length - 1
		}
		this.node.getChildByName("face").getComponent(sp.Skeleton).animation = this.iconConfigData.animationArr[animationIndex]
		const iseff = animationIndex === 0 ? false : true
		if (!iseff) {
			this.effectBorder.active = false
			this.effectBorder2.active = false
			this.effectBorder3.active = false
		} else {
			if (borderHeight === 1) {
				this.effectBorder.active = true
			} else if (borderHeight === 2) {
				this.effectBorder2.active = true
			} else if (borderHeight === 3) {
				this.effectBorder3.active = true
			}
		}
	}


	protected bindEvent(): void {

	}

	start() {

	}

	update(deltaTime: number) {

	}
}

