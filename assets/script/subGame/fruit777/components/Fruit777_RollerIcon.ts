import { _decorator, Component, debug, instantiate, Label, Node, Skeleton, sp, Sprite, UITransform, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { IconEffectType, IconType } from '../type';
import { sourceManageSeletor } from '../index';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	iconData?: IconType
	/**将这个属性单拎出来，节约性能，不然每次都要重新初始化icon的界面 */
	iconEffect?: IconEffectType
}
export interface IEvent {

}

@ccclass('Fruit777_RollerIcon')
export class Fruit777_RollerIcon extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	protected propertyNode = {
		props_iconWrap: new Node(),
		props_iconId: new Label(),
		props_index: new Label(),
		props_focusBorder: new Node()
	}

	public props: IProps = {
		iconData: null,
		iconEffect: IconEffectType.NONE
	}

	public events: IEvent = {

	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {

	}
	private iconNodeSkeleton_copy: Node
	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "iconData") {
			const uiTrasform = this.node.getComponent(UITransform)
			uiTrasform.width = this.props.iconData.width
			uiTrasform.height = this.props.iconData.height
			const iconNodeSkeleton = this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton")
			const iconNodeSprite = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite")
			iconNodeSkeleton.active = false
			iconNodeSprite.active = false

			let iconNode: Node
			iconNode = iconNodeSprite
			iconNodeSprite.active = true
			iconNodeSprite.getComponent(Sprite).spriteFrame = sourceManageSeletor().getFile(this.props.iconData.uiData.fileName).source
			// if (this.props.iconData.LargeIcon) {
			// 	iconNode = iconNodeSprite
			// 	iconNodeSprite.active = true
			// 	iconNodeSprite.getComponent(Sprite).spriteFrame = sourceManageSeletor().getFile(this.props.iconData.uiData.fileName).source
			// } else {
			// 	iconNode = iconNodeSkeleton
			// 	iconNodeSkeleton.active = true
			// 	iconNodeSkeleton.getComponent(sp.Skeleton).skeletonData = sourceManageSeletor().getFile(this.props.iconData.uiData.fileName).source
			// 	iconNodeSkeleton.getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[0]
			// }

			// if (!this.props.iconData.LargeIcon) {
			// 	iconNodeSkeleton.getComponent(sp.Skeleton).skeletonData = sourceManageSeletor().getFile(this.props.iconData.uiData.skeleton).source
			// 	iconNodeSkeleton.getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[0]
			// }
			iconNode.setScale(new Vec3(...this.props.iconData.uiData.scale))
			if (this.props.iconData.LargeIcon) {
				const { x, y, z } = iconNode.getPosition()
				iconNode.setPosition(new Vec3(x + this.props.iconData.uiData.distance[0], y + this.props.iconData.uiData.distance[1], x))
			}
			this.propertyNode.props_iconId.string = this.props.iconData.iconId + ""
			this.propertyNode.props_index.string = this.props.iconData.queueIndex + ""

		}
		if (key === "iconEffect") {
			//闪动框
			const iconNodeSkeleton = this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton")
			const iconNodeSprite = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite")
			const isActive = (value.cur === IconEffectType.NORMAIL && !this.props.iconData.LargeIcon)
			this.propertyNode.props_focusBorder.active = isActive

			if (!this.props.iconData.LargeIcon) {
				
				// iconNodeSkeleton.active = isActive

				if (this.props.iconEffect === IconEffectType.NONE) {
					iconNodeSprite.active = !isActive
					if (this.iconNodeSkeleton_copy) {
						this.iconNodeSkeleton_copy.destroy()
						this.iconNodeSkeleton_copy = null
					} else {
						this.iconNodeSkeleton_copy = this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton_copy")
					}
				} else {
					sourceManageSeletor().getFileAsync(this.props.iconData.uiData.skeleton, sp.SkeletonData).then(file => {
						iconNodeSprite.active = !isActive
						if (this.iconNodeSkeleton_copy) {
							this.iconNodeSkeleton_copy.destroy()
							this.iconNodeSkeleton_copy = null
						}
						this.iconNodeSkeleton_copy = instantiate(iconNodeSkeleton)
						this.iconNodeSkeleton_copy.parent = this.node
						this.iconNodeSkeleton_copy.active = true
						this.iconNodeSkeleton_copy.name = "iconNode_skeleton_copy"
						this.iconNodeSkeleton_copy.getComponent(sp.Skeleton).skeletonData = file.source
						// this.iconNodeSkeleton_copy.getComponent(sp.Skeleton).skeletonData = (await sourceManageSeletor().getFileAsync(this.props.iconData.uiData.skeleton, sp.SkeletonData)).source
						this.iconNodeSkeleton_copy.getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[1]
						const { x, y, z } = this.iconNodeSkeleton_copy.getPosition()
						this.iconNodeSkeleton_copy.setPosition(new Vec3(x + this.props.iconData.uiData.distance[0], y + this.props.iconData.uiData.distance[1], x))
					})
					// this.iconNodeSkeleton_copy = instantiate(iconNodeSkeleton)
					// this.iconNodeSkeleton_copy.parent = this.node
					// this.iconNodeSkeleton_copy.active = true
					// this.iconNodeSkeleton_copy.name = "iconNode_skeleton_copy"
					// this.iconNodeSkeleton_copy.getComponent(sp.Skeleton).skeletonData = (sourceManageSeletor().getFile(this.props.iconData.uiData.skeleton)).source
					// // this.iconNodeSkeleton_copy.getComponent(sp.Skeleton).skeletonData = (await sourceManageSeletor().getFileAsync(this.props.iconData.uiData.skeleton, sp.SkeletonData)).source
					// this.iconNodeSkeleton_copy.getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[1]
					// const { x, y, z } = this.iconNodeSkeleton_copy.getPosition()
					// this.iconNodeSkeleton_copy.setPosition(new Vec3(x + this.props.iconData.uiData.distance[0], y + this.props.iconData.uiData.distance[1], x))
				}
			}



			// iconNodeSkeleton.getComponent(sp.Skeleton).updateRenderer()
			// console.log(this.props.iconData.iconId, this.props.iconData.uiData.skeleton, this.props.iconData.uiData.animationArr)
			// iconNodeSkeleton.getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[isActive ? 1 : 0]


		}
		// if (key === "iconEffect") {
		// 	//闪动框
		// 	const iconNodeSkeleton = this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton")
		// 	const iconNodeSprite = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite")
		// 	const isActive = (value.cur === IconEffectType.NORMAIL && !this.props.iconData.LargeIcon)
		// 	if (!this.props.iconData.LargeIcon) {
		// 		iconNodeSprite.active = !isActive
		// 		iconNodeSkeleton.active = isActive
		// 	}
		// 	this.propertyNode.props_focusBorder.active = isActive
		// 	iconNodeSkeleton.getComponent(sp.Skeleton).updateRenderer()

		// 	console.log(this.props.iconData.iconId, this.props.iconData.uiData.skeleton, this.props.iconData.uiData.animationArr)
		// 	iconNodeSkeleton.getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[isActive ? 1 : 0]
		// 	const { x, y, z } = iconNodeSkeleton.getPosition()
		// 	iconNodeSkeleton.setPosition(new Vec3(x + this.props.iconData.uiData.distance[0], y + this.props.iconData.uiData.distance[1], x))
		// }
	}

	protected bindUI(): void {
		this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton").getComponent(sp.Skeleton).setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME)
	}

	update(deltaTime: number) {

	}
}

