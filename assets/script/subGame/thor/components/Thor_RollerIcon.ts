import { _decorator, Component, debug, instantiate, Label, Node, sp, Sprite, tween, UITransform, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { IconEffectType, IconType } from '../type';
import { sourceManageSeletor, winShowViewModel } from '../index';
import { SkeletalPathDefine } from '../sourceDefine/skeletalDefine';
import { getNodePositionInCanvas } from '../../../utils/tool';
import SkeletonAnimationPlayer from '../SkeletonPlay';
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

@ccclass('Thor_RollerIcon')
export class Thor_RollerIcon extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	protected propertyNode = {
		props_iconWrap: new Node(),
		props_iconId: new Label(),
		props_label_rate_num: new Node(),
		props_focusBorder: new Node(),
		props_skeleton_bomb: new Node(),
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

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "iconData") {
			if (this.props.iconData) {
				const uiTrasform = this.node.getComponent(UITransform)
				uiTrasform.width = this.props.iconData.width
				uiTrasform.height = this.props.iconData.height
				const iconNodeSkeleton = this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton")
				const iconNodeSprite = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite")
				iconNodeSkeleton.active = false
				iconNodeSprite.active = false
				let iconNode: Node
				// if (this.props.iconData.LargeIcon) {
				// 	iconNode = iconNodeSprite
				// 	iconNodeSprite.active = false
				// 	iconNodeSprite.getComponent(Sprite).spriteFrame = sourceManageSeletor().getFile(this.props.iconData.uiData.fileName).source
				// } else {

				// }
				iconNode = iconNodeSkeleton
				iconNodeSkeleton.active = true
				iconNodeSkeleton.getComponent(sp.Skeleton).skeletonData = sourceManageSeletor().getFile(this.props.iconData.uiData.fileName).source
				iconNodeSkeleton.getComponent(sp.Skeleton).setSkin(this.props.iconData.uiData.skin ? this.props.iconData.uiData.skin : 'default')
				iconNodeSkeleton.getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[0]
				this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton").active = false
				this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite").active = true
				this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite").getComponent(Sprite).spriteFrame = sourceManageSeletor().getFile(this.props.iconData.uiData.iconName).source
				if (this.props.iconData.iconId > 10) {
					this.propertyNode.props_label_rate_num.active = true
					this.propertyNode.props_label_rate_num.getComponent(Label).string = this.props.iconData.multiple + "X"
				}
				iconNode.setScale(new Vec3(...this.props.iconData.uiData.scale))
				const { x, y, z } = iconNode.getPosition()
				iconNode.setPosition(new Vec3(x + this.props.iconData.uiData.distance[0], y + this.props.iconData.uiData.distance[1], x))
				// this.propertyNode.props_iconId.string = this.props.iconData.iconId + ""
			}
		}
		if (key === "iconEffect") {
			//闪动框
			const isActive = (value.cur === IconEffectType.NORMAIL)
			this.propertyNode.props_focusBorder.active = isActive
			this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton").active = true
			this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite").active = false
			this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton").getComponent(sp.Skeleton).setSkin(this.props.iconData.uiData.skin ? this.props.iconData.uiData.skin : 'default')
			this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton").getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[isActive ? 1 : 0]
			this.scheduleOnce(() => {
				this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton").active = false
				this.propertyNode.props_skeleton_bomb.active = true
			}, 0.8)
		}
	}
	private playAni(isActive, callBack) {
		this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton").active = true
		this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite").active = false
		this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton").getComponent(sp.Skeleton).setSkin(this.props.iconData.uiData.skin ? this.props.iconData.uiData.skin : 'default')
		let i = 0
		let ani = new SkeletonAnimationPlayer(this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton").getComponent(sp.Skeleton), this.props.iconData.uiData.animationArr[isActive ? 2 : 0], true, () => {
			i++
			if (i == 2) {
				callBack()
			}
		});
		ani.playAnimation()
	}
	private playallPurpose(callBack) {
		this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton").active = true
		this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite").active = false
		this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton").getComponent(sp.Skeleton).setSkin(this.props.iconData.uiData.skin ? this.props.iconData.uiData.skin : 'default')
		let ani = new SkeletonAnimationPlayer(this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton").getComponent(sp.Skeleton), this.props.iconData.uiData.animationArr[1], false, () => {
			// 获取起始和目标的世界坐标
			let startWorldPos = this.propertyNode.props_label_rate_num.worldPosition;
			let targetWorldPos = winShowViewModel.comp.node.getChildByName('props_spr_win_box').worldPosition;
			// 创建节点的实例
			let node = instantiate(this.propertyNode.props_label_rate_num);
			// 将节点添加到目标节点所在的父节点
			winShowViewModel.comp.node.addChild(node);
			// 获取父节点的 UITransform 组件
			let uiTransform = winShowViewModel.comp.node.getComponent(UITransform);
			// 将世界坐标转换为新父节点的局部坐标
			let startLocalPos = uiTransform.convertToNodeSpaceAR(startWorldPos);
			let targetLocalPos = uiTransform.convertToNodeSpaceAR(targetWorldPos);
			targetLocalPos.y = targetLocalPos.y - 25
			// 设置节点的初始位置
			node.setPosition(startLocalPos);
			this.propertyNode.props_label_rate_num.active = false
			// 执行缓动动画
			tween(node)
				.to(1, { position: targetLocalPos }, { easing: 'sineInOut' })
				.call(() => {
					callBack()
					node.destroy()
				})
				.start();
		});
		ani.playAnimation()
	}
	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

