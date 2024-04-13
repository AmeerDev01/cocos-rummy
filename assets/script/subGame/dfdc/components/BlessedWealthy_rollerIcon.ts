import { _decorator, Component, debug, instantiate, Label, Node, bezier, ParticleSystem2D, Skeleton, sp, Sprite, tween, UIOpacity, UITransform, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { GameType, IconEffectType, IconType } from '../type';
import { sourceManageSeletor } from '../index';
import { SkeletalPathDefine } from '../sourceDefine/skeletalDefine';
import dataTransfer, { DataKeyType } from '../dataTransfer';
import BaseViewModel from '../../../common/viewModel/BaseViewModel';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { EffectType } from '../../../utils/NodeIOEffect';
import { rollerPanelViewModel } from '../viewModel/GameBoardViewModel';
import { getNodePositionInCanvas } from '../../../utils/tool';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	iconData?: IconType
	/**将这个属性单拎出来，节约性能，不然每次都要重新初始化icon的界面 */
	iconEffect?: IconEffectType,
	iconYuanBaoEffect?: IconEffectType,
	iconFreeGameEffect?:IconEffectType,
	viewGameType: GameType,
	isRollEnd:boolean,
}
export interface IEvent {

}

@ccclass('BlessedWealthy_rollerIcon')
export class BlessedWealthy_rollerIcon extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	protected propertyNode = {
		props_iconWrap: new Node(),
		props_iconId: new Label(),
		props_index: new Label(),
		props_dfdc_huoyankuangxiao: new Node(),

	}

	public props: IProps = {
		iconData: null,
		iconEffect: IconEffectType.NONE,
		iconYuanBaoEffect: IconEffectType.NONE,
		iconFreeGameEffect: IconEffectType.NONE,
		viewGameType: GameType.NONE,
		isRollEnd:true,
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
			console.log("iconData",value.cur);
			
			const uiTrasform = this.node.getComponent(UITransform)
			uiTrasform.width = this.props.iconData.width
			uiTrasform.height = this.props.iconData.height
			// const iconNodeSkeleton = this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton")
			const iconNodeSprite = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite")
			// iconNodeSkeleton.active = false
			iconNodeSprite.active = false

			let iconNode: Node
			iconNode = iconNodeSprite
			iconNodeSprite.active = true
			iconNodeSprite.getComponent(sp.Skeleton).skeletonData = sourceManageSeletor().getFile(this.props.iconData.uiData.fileName).source
			iconNodeSprite.getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[0];

			iconNode.setScale(new Vec3(...this.props.iconData.uiData.scale))
	
			const { x, y, z } = iconNode.getPosition()
			iconNode.setPosition(new Vec3(x + this.props.iconData.uiData.distance[0], y + this.props.iconData.uiData.distance[1], x))
			this.propertyNode.props_iconId.string = this.props.iconData.iconId + ""
			this.propertyNode.props_index.string = this.props.iconData.queueIndex + "";
			
		}
		if (key === "iconEffect") {
			// if (this.props && this.props.isRollEnd) {
				
			// }

			//闪动框
			const iconNodeSprite = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite")
			const isActive = (value.cur === IconEffectType.NORMAIL && !this.props.iconData.LargeIcon)
			this.propertyNode.props_dfdc_huoyankuangxiao.active = isActive
			const uiOpacity = this.propertyNode.props_dfdc_huoyankuangxiao.getComponent(UIOpacity) as UIOpacity;
			// if (isActive) {
			// 	//闪动 repeatForever 重复执行一个动作
			// 	const t = tween(uiOpacity).to(0.4, { opacity: 255 }).to(0.4, { opacity: 0 });
			// 	t.start();
			// }

			iconNodeSprite.getComponent(sp.Skeleton).updateRenderer()
			iconNodeSprite.getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[isActive ? 1 : 0];
			const { x, y, z } = iconNodeSprite.getPosition()
			// iconNodeSprite.setPosition(new Vec3(x + this.props.iconData.uiData.distance[0], y + this.props.iconData.uiData.distance[1], x))
		}
		// if (key === "iconYuanBaoEffect") {
		// 	if (!value.cur) { return }
		// 	//元宝闪动框
		// 	const iconNodeSprite = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite")
		// 	const isActive = (value.cur === IconEffectType.YUANBAO && !this.props.iconData.LargeIcon);
		// 	iconNodeSprite.getComponent(sp.Skeleton).updateRenderer();
		// 	iconNodeSprite.getComponent(sp.Skeleton).skeletonData = sourceManageSeletor().getFile(SkeletalPathDefine.TUBIAO_YUANBAO).source;
		// 	iconNodeSprite.getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[isActive ? 1 : 0];
		// 	tween(iconNodeSprite).delay(1).call(() => { 
		// 		let yuanBaoRate = dataTransfer(DataKeyType.ICON_YUANBAO_EFFECT_DATA).yuanBaoMagnification;
		// 		let yuanBaoWinNum = dataTransfer(DataKeyType.ICON_YUANBAO_EFFECT_DATA).yuanBaoAmount;
		// 		/**展示元宝中奖框 */
		// 		if (!this.node) { return }
		// 		const yuanBaoTotalBet = new BaseViewModel("phoenix_yuanbao_totalBet").mountView(sourceManageSeletor().getFile(PrefabPathDefine.PHOENIX_TOTAL_BET).source)
		// 			.appendTo(rollerPanelViewModel.viewNode, { effectType: EffectType.EFFECT1, isModal: true })
		// 			.setEvent({}).setProps({
		// 				yuanBaoRate: "X" + yuanBaoRate,
		// 				yuanBaoWinNum: yuanBaoWinNum + "",
		// 			}).connect()
		// 	}).start()
		
		// 	const { x, y, z } = iconNodeSprite.getPosition();
		// 	iconNodeSprite.setPosition(new Vec3(x + this.props.iconData.uiData.distance[0], y + this.props.iconData.uiData.distance[1], x))
		// }
		
		// if (key === "iconFreeGameEffect") {
		// 	if (!value.cur) { return }
		// 	//元宝闪动框
		// 	const iconNodeSprite = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite")
		// 	const isActive = (value.cur === IconEffectType.FREEEGAMEZ && !this.props.iconData.LargeIcon);
		// 	iconNodeSprite.getComponent(sp.Skeleton).updateRenderer();
		// 	iconNodeSprite.getComponent(sp.Skeleton).skeletonData = sourceManageSeletor().getFile(SkeletalPathDefine.TUBIAO_SKELETON).source;
		// 	iconNodeSprite.getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[isActive ? 1 : 0];
		// 	const { x, y, z } = iconNodeSprite.getPosition();
		// 	iconNodeSprite.setPosition(new Vec3(x + this.props.iconData.uiData.distance[0], y + this.props.iconData.uiData.distance[1], x))
		// }
	}


	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

