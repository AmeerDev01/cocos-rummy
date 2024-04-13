import { _decorator, Component, instantiate, Node, Animation, Skeleton, sp, Sprite, SpriteAtlas, SpriteFrame, UITransform, Vec3, Widget } from 'cc';
import BaseComponent from './BaseComponent';
import iconConfig from '../config'
import {getSocketProxy } from "../utils";
const { ccclass, property } = _decorator;

type ConfigType = {
	id: number
	name: string
	fileName: string
	animationArr?: string[]
	distance: number[]
	scale: number[]
}

@ccclass('gxfc_Icon')
export class gxfc_Icon extends BaseComponent {
	@property(Node)
	face: Node = null

	@property(sp.SkeletonData)
	tongqian: sp.SkeletonData = null

	@property(sp.SkeletonData)
	bianpao: sp.SkeletonData = null

	@property(sp.SkeletonData)
	yupei: sp.SkeletonData = null

	@property(sp.SkeletonData)
	gu: sp.SkeletonData = null

	@property(sp.SkeletonData)
	girl: sp.SkeletonData = null

	@property(sp.SkeletonData)
	boy: sp.SkeletonData = null

	@property(sp.SkeletonData)
	baihuzi: sp.SkeletonData = null

	@property(sp.SkeletonData)
	heihuzi: sp.SkeletonData = null

	@property(sp.SkeletonData)
	wild1: sp.SkeletonData = null

	@property(sp.SkeletonData)
	wild2: sp.SkeletonData = null

	@property(sp.SkeletonData)
	scatter: sp.SkeletonData = null

	@property(Node)
	effectBorder: Node = null
    @property({ type: [SpriteFrame], displayName: 'BG' })
    bg_1: Array<SpriteFrame> = [];

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
		this.face.setScale(this.iconConfig.scale[0], this.iconConfig.scale[1])
        if (this.iconConfig.name === 'scatter') { //|| this.iconConfig.name === 'wild'
            this.node.getChildByName('focusBorder').destroy()
        }
        let gameType= getSocketProxy().getTransferGameInfo().gameType()
        this.setBg(gameType===1?3:1)
	}
    /**设置背景图片 */
    public setBg(bgNameIndex) {
        this.node.getChildByName('bg').getComponent(Sprite).spriteFrame = this.bg_1[bgNameIndex!==3?0:1]
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
    public layout2setEffect(aniKEY:number,isLoop=true){
        const animationNameArr=['animation','animation3','animation4','dynamic','static']
        let Animation=this.node.getChildByName("face").getComponent(sp.Skeleton)
        Animation.clearTracks()
        Animation.setAnimation(0, animationNameArr[aniKEY], isLoop)
    }
    public  monitorAnimations(onEndCall?: (entry: sp.spine.TrackEntry) => void, ){
        let Ani=this.node.getChildByName("face").getComponent(sp.Skeleton)
        // 监听动画播放完成事件
        Ani.setCompleteListener((entry: sp.spine.TrackEntry) => {
            onEndCall(entry)
        })
    }
    onAnimationEnd() {
        console.log("");
        // 在这里可以执行你需要的逻辑
    }
	protected bindEvent(): void {

	}

	start() {

	}

	update(deltaTime: number) {

	}
}

