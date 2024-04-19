import { _decorator, Component, debug, instantiate, Label, Node, bezier, ParticleSystem2D, Skeleton, sp, Sprite, tween, UIOpacity, UITransform, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { GameType, IconEffectType, IconType } from '../type';
import { footerViewModel, sourceManageSeletor } from '../index';
import { SkeletalPathDefine } from '../sourceDefine/skeletalDefine';
import dataTransfer, { DataKeyType } from '../dataTransfer';
import BaseViewModel from '../../../common/viewModel/BaseViewModel';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { EffectType } from '../../../utils/NodeIOEffect';
import { rollerPanelViewModel } from '../viewModel/GameBoardViewModel';
import { getNodePositionInCanvas } from '../../../utils/tool';
import { changeProfit, updateSubGameTimes } from '../store/actions/game';
import config from '../config';
import SkeletonAnimationPlayer from '../SkeletonPlay';
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
	openTotalPanel: () => void,
	
}

@ccclass('phoenix_rollerIcon')
export class phoenix_rollerIcon extends BaseComponent<IState, IProps, IEvent> {
	private isFirstShow: number = 0;
	start() { 
	}

	protected propertyNode = {
		props_iconWrap: new Node(),
		props_iconId: new Label(),
		props_index: new Label(),
		props_focusBorder: new Node(),
		props_amount: new Node(),
		props_Particle2D: new Node(),
		props_yinbi: new Node(),
		props_addOne:new Node(),
	}

	public props: IProps = {
		iconData: null,
		iconEffect: IconEffectType.NONE,
		iconYuanBaoEffect: IconEffectType.NONE,
		iconFreeGameEffect: IconEffectType.NONE,
		viewGameType: GameType.NONE,
		isRollEnd: true,
	}

	public events: IEvent = {
		openTotalPanel: () => { },
		
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "iconData") {
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
			//闪动框
			this.isFirstShow++
			
			const iconNodeSprite = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite")
			if (this.props.iconData.uiData.id === 13) {
				iconNodeSprite.getComponent(sp.Skeleton).skeletonData = sourceManageSeletor().getFile(this.props.iconData.uiData.fileName).source
			}
			// if (this.props.iconData.uiData.id === 12 && this.isFirstShow === 1) {//初始展示特效
				// this.scheduleOnce(() => {
				// 	// this.propertyNode.props_Particle2D.active = true;
				// 	this.propertyNode.props_amount.active = true;
				// },2.5)
			// }
			const isActive = (value.cur === IconEffectType.NORMAIL && !this.props.iconData.LargeIcon )
			this.propertyNode.props_focusBorder.active = isActive
			const uiOpacity = this.propertyNode.props_focusBorder.getComponent(UIOpacity) as UIOpacity;
			if (isActive) {

				//闪动 repeatForever 重复执行一个动作
				const t = tween(uiOpacity).repeatForever(tween().to(0.4, { opacity: 255 }).to(0.4, { opacity: 0 }));
				t.start();
				// this.activeAmount()
			}
			
			const skeletal=iconNodeSprite.getComponent(sp.Skeleton)
			skeletal.updateRenderer()
			skeletal.animation = this.props.iconData.uiData.animationArr[isActive ? 1 : 0];
			const { x, y, z } = iconNodeSprite.getPosition()
			// iconNodeSprite.setPosition(new Vec3(x + this.props.iconData.uiData.distance[0], y + this.props.iconData.uiData.distance[1], x))
			if (!isActive) {
				new SkeletonAnimationPlayer(skeletal,"animation",false).stopAnimation()
				// this.propertyNode.props_amount.active = false;
			}
		}
		if (key === "iconYuanBaoEffect") {
			//元宝闪动框
			const iconNodeSprite = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite")
			const isActive = (value.cur === IconEffectType.YUANBAO && !this.props.iconData.LargeIcon);
			console.log("yuanbao",isActive);
			const skeletal=iconNodeSprite.getComponent(sp.Skeleton)
			
			skeletal.updateRenderer();
			skeletal.skeletonData = sourceManageSeletor().getFile(SkeletalPathDefine.TUBIAO_YUANBAO).source;
			skeletal.animation = this.props.iconData.uiData.animationArr[isActive ? 1 : 0];
			const { x, y, z } = iconNodeSprite.getPosition();
			iconNodeSprite.setPosition(new Vec3(x + this.props.iconData.uiData.distance[0], y + this.props.iconData.uiData.distance[1], x))
			if (isActive) {
				this.showYinBi()
				tween(iconNodeSprite).delay(1).call(() => { 
					/**展示元宝中奖框 */
					if (!this.node) { return }
					this.events.openTotalPanel()
				}).start()
			}else{
				new SkeletonAnimationPlayer(skeletal,"animation",false).stopAnimation()
			}
		}
		if (key === "iconFreeGameEffect") {
			if (!value.cur) { return }
			//转轴闪动框
			this.node.setSiblingIndex(10)
			const iconNodeSprite = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite")
			const isActive = (value.cur === IconEffectType.FREEEGAMEZ && !this.props.iconData.LargeIcon);
			const skeletal=iconNodeSprite.getComponent(sp.Skeleton)
			skeletal.updateRenderer();
			skeletal.skeletonData = sourceManageSeletor().getFile(SkeletalPathDefine.TUBIAO_SKELETON).source;
			skeletal.animation = this.props.iconData.uiData.animationArr[isActive ? 1 : 0];
			const { x, y, z } = iconNodeSprite.getPosition();
			iconNodeSprite.setPosition(new Vec3(x + this.props.iconData.uiData.distance[0], y + this.props.iconData.uiData.distance[1], x))
			if (!isActive) {
				new SkeletonAnimationPlayer(skeletal,"animation",false).stopAnimation()
			}
		}
	}

	public playallPurpose(callBack) {
		
		// console.log("this.node", this.node, this.propertyNode.props_Particle2D.active);
		// console.log("isFIRst",this.isFirstShow);
		
		if (this.node && this.isFirstShow <= 0) {
			callBack()
			return
		};
		this.propertyNode.props_amount.active = true;

		// 获取起始和目标的世界坐标
		let startWorldPos = this.propertyNode.props_Particle2D.worldPosition;
		// console.log(footerViewModel.comp.getPropertyNode().props_btn_down_putar as Node);
		
		let targetWorldPos = (footerViewModel.comp.getPropertyNode().props_btn_down_putar as Node).worldPosition;
		// 创建节点的实例
		let node = instantiate(this.propertyNode.props_Particle2D);
		// 将节点添加到目标节点所在的父节点
		footerViewModel.comp.node.addChild(node);
		// 获取父节点的 UITransform 组件
		let uiTransform = footerViewModel.comp.node.getComponent(UITransform);
		// 将世界坐标转换为新父节点的局部坐标
		let startLocalPos = uiTransform.convertToNodeSpaceAR(startWorldPos);
		let targetLocalPos = uiTransform.convertToNodeSpaceAR(targetWorldPos);
		// 设置节点的初始位置
		node.setPosition(startLocalPos);
		this.propertyNode.props_Particle2D.active = false;
		this.scheduleOnce(() => {
			this.propertyNode.props_amount.active = false;
		},1)
		// 执行缓动动画
		tween(node)
			.to(1, { position: targetLocalPos }, { easing: 'sineInOut' })
			.call(() => {
				node.destroy()
				callBack()
			})
			.start();

	}

	public showYinBi() {
		this.propertyNode.props_yinbi.active = true;
		// 获取起始和目标的世界坐标
		let startWorldPos = this.propertyNode.props_yinbi.worldPosition;
		// console.log(footerViewModel.comp.getPropertyNode().props_btn_down_putar as Node);
		
		let targetWorldPos = (footerViewModel.comp.getPropertyNode().props_word_down_winNum as Node).worldPosition;
		// 创建节点的实例
		let node = instantiate(this.propertyNode.props_yinbi);
		// 将节点添加到目标节点所在的父节点
		footerViewModel.comp.node.addChild(node);
		// 获取父节点的 UITransform 组件
		let uiTransform = footerViewModel.comp.node.getComponent(UITransform);
		// 将世界坐标转换为新父节点的局部坐标
		let startLocalPos = uiTransform.convertToNodeSpaceAR(startWorldPos);
		let targetLocalPos = uiTransform.convertToNodeSpaceAR(targetWorldPos);
		// 设置节点的初始位置
		node.setPosition(startLocalPos);
		this.propertyNode.props_yinbi.active = false;
		this.scheduleOnce(() => {
			this.propertyNode.props_yinbi.active = false;
		},1)
	
		// 执行缓动动画
		tween(node)
			.to(1, { position: targetLocalPos }, { easing: 'sineInOut' })
			.call(() => {
				this.dispatch( changeProfit(dataTransfer(DataKeyType.FREE_GAME_AMOUNT)) ); //更新盈亏
				node.destroy()
			})
			.start();
	}

	protected bindUI(): void {
		this.propertyNode.props_amount.active = false;
	}

	update(deltaTime: number) {

	}
}

