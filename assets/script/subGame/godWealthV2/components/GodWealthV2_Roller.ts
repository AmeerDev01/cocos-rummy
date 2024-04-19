import { _decorator, instantiate, Node, sp, tween, UITransform, Vec2, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { IconPool } from '../IconPool';
import config from '../config';
import { GodWealthV2Icon } from './GodWealthV2_Icon';
import { calBetAmount, GameType, GameTypeInfo, getColumnLockIconArr, IconId, RollerInfo, RollerStatus } from '../type';
import { godWealthV2_Audio, mainViewModel, sourceManageSeletor } from '../index';
import { SkeletalPathDefine } from '../sourceDefine/skeletalDefine';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { cacheData } from '../dataTransfer';
import GodWealthV2SingleIconRollerViewModel from '../viewModel/GodWealthV2SingleIconRollerViewModel';
import { getNodeByNameDeep } from '../../../utils/tool';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	gameTypeInfo: GameTypeInfo,
	/** 选择的线id */
	positionId: number,
	rollerStatus: RollerStatus,
	isSpeed:boolean,
}
export interface IEvent {
	onCheckNextLeftCount: () => void
}

@ccclass('GodWealthV2_Roller')
export class GodWealthV2_Roller extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	/**当前最后添加的图标索引位置 */
	private lastIndex = 0;
	/**显示图标数量 */
	private showIconCount = config.normalRollOption.showIconCount;
	/**停止图标索引 */
	private stopIconIndex = -1;
	/**列的索引 */
	private columnIndex = 0;
	/**图标池 */
	private iconPool: IconPool;
	/**图标轮播队列 */
	private iconRollerQueue: any[]
	/**是否正在滚动 */
	private isRoll = false;
	/**滚轴上的图标，包含看不见的 */
	private iconArr: GodWealthV2Icon[] = [];
	/**图标间隔 */
	private intervalHeight = config.normalRollOption.intervalHeight;

	/**滚动结束回调方法 */
	private rollOverCallback;
	/**是否快速边框（期待scatter中奖边框） */
	private isSpeedBorder;
	/**列特效层 */
	private props_column_effect_node: Node;
	/**图标动画层节点 */
	private iconAnimationNode: Node;
	/**锁定图标节点 */
	private props_lock_icon_list: Node;
	/**快速滚动层节点 */
	private speddBorderNode: Node;
	/**是否合并图标了 */
	private isMergeIcon = false;

	/**锁定图标列表 */
	public lockIcons: GodWealthV2Icon[] = [];
	/**单个图标的滚动 */
	private singleIconRollerViewModels: GodWealthV2SingleIconRollerViewModel[] = [];

	/**滚动次数 */
	private rollerCount = -1;

	/**大图标 */
	private bigNode: Node;

	/**scatter图标数 */
	private scatterNum: number = 0;

	protected propertyNode = {
		props_icon_list: new Node(),
		props_big_icon: new Node(),

	}

	public props: IProps = {
		// rollerInfo: undefined,
		// rollerStatus: RollerStatus.END,
		gameTypeInfo: {
			lastGameType: GameType.MAIN,
			viewGameType: GameType.MAIN,
			currGameType: GameType.MAIN,
			leftCount: 0,
		},
		positionId: 0,
		rollerStatus: null,
		isSpeed: false,
		
	}

	public events: IEvent = {
		onCheckNextLeftCount: () => { }
	}

	protected initState() {
		return {}
	}

	public setColumnEffectNode(props_column_effect_node: Node) {
		this.props_column_effect_node = props_column_effect_node;
		this.iconAnimationNode = this.props_column_effect_node.getChildByName("props_icon_animation")
		this.speddBorderNode = this.props_column_effect_node.getChildByName("props_speed_border")
		this.props_lock_icon_list = getNodeByNameDeep("props_lock_icon_list", this.props_column_effect_node);
	}

	public initSlot(columnIndex: number, iconPool: IconPool) {
		this.iconPool = iconPool;
		this.columnIndex = columnIndex;
		this.iconRollerQueue = config.iconRollerQueue[this.columnIndex]
		this.lastIndex = Math.floor(Math.random() * this.iconRollerQueue.length);

		this.initColumn(this.showIconCount + 1);

		if (this.isSubGame2()) {
			this.addLockIcon()
			this.replaceSingleRollerIcon();
		}
	}

	private initColumn(iconCount: number) {
		for (let i = 0; i < iconCount; i++) {
			this.joinIcon();
		}
	}

	private isSubGame2() {
		return this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2;
	}

	private addIconIndex(index: number, value: number) {
		let newValue = index + value;
		if (newValue >= this.iconRollerQueue.length) {
			newValue = newValue - this.iconRollerQueue.length;
		}
		return newValue;
	}

	/**是否小游戏2的特殊图标 */
	private isSubGame2SpecialIcon(id: number) {
		return id === IconId.BEETLE 
	}

	private joinIcon() {
	
		const length = this.iconArr.length

		this.lastIndex = this.lastIndex - 1 < 0 ? this.iconRollerQueue.length - 1 : --this.lastIndex;
		const iconId = this.iconRollerQueue[this.lastIndex];
		const iconConfig = config.icon.find(v => v.id === iconId);

		// 在子游戏2中，初始化不显示宝盒
		if (this.isSubGame2() && this.isSubGame2SpecialIcon(iconConfig.id)) {
			this.joinIcon();
			return;
		}

		const icon = this.iconPool.getIcon(iconConfig, this.propertyNode.props_icon_list, this.lastIndex);
		const position = new Vec3(0, this.intervalHeight + icon.getHeight() / 2);
		if (length > 0) {
			const lastNode = this.iconArr[length - 1];
			position.y = lastNode.getPosition().y + lastNode.getHeight() + this.intervalHeight;
		}

		icon.getNode().setPosition(position);
		this.iconArr.push(icon);
		if (iconConfig.id === 12) {
			icon.amountNode.active = true;
		}
		this.setBeetleAmount(icon);
	}

	/**
	 * 设置宝盒上面的数字
	 */
	private setBeetleAmount(icon: GodWealthV2Icon) {
		if (icon.getId() !== IconId.BEETLE) {
			return;
		}

		if (this.props.gameTypeInfo.currGameType !== GameType.SUBGAME2 && this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2) {
			return;
		}

		const diff = this.calIndexDiff(this.lastIndex, this.stopIconIndex);
		if (diff >= 3) {
			return;
		}

		// console.log(`setBeetleAmount--- diff:${diff},stopIconIndex:${this.stopIconIndex},lastIndex:${this.lastIndex},columnIndex:${this.columnIndex}`);

		const lockIconDatas = getColumnLockIconArr(cacheData.fixedChessboardIcon, this.columnIndex)
		
		if (lockIconDatas.length === 0) {
			// 没有锁定图标就随机一个金额
			const betAmount = calBetAmount(this.props.positionId)
			let amount = Math.ceil(Math.random() * betAmount)
			amount = amount <= 0 ? amount = 1 : amount
			icon.setAmount(amount)
			return;
		}
		const index = diff === 2 ? 0 : diff === 0 ? 2 : 1;

		const lockIconData = lockIconDatas.find(v => v.index === index)
		if (lockIconData) {
			const amount = lockIconData.amount >= 10000 ? lockIconData.amount : lockIconData.amount;
			icon.setAmount(amount)
		}
	}

	/**计算两个索引的差值 */
	private calIndexDiff(index1: number, index2: number) {
		let diff = index1 - index2;
		if (index1 < index2) {
			diff = index1 + this.iconRollerQueue.length - index2
		}
		return diff;
	}

	protected bindEvent(): void {
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (this.node && this.node.isValid) {
			
			if (key === 'gameTypeInfo') {
				if (this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2 && this.singleIconRollerViewModels.length === 0) {
					this.replaceSingleRollerIcon();
				}
			} else if (key === "rollerStatus") {
				// if (RollerStatus.END === value.cur) {
				// 	if (this.props.isSpeed) {
						
				// 		godWealthV2_Audio.playOneShot(SoundPathDefine.SHELL_END)
				// 	}
				// }
			}
		}
	}

	/**隐藏图标中奖效果 */
	private hideIconWin() {
		this.stopWinIcon();
		this.iconAnimationNode.children.forEach(v => {
			v.name === 'bigNode' && v.destroy();
		})
		this.bigNode && this.bigNode.destroy();
		this.bigNode = null;
		this.iconAnimationNode.removeAllChildren();
		
		if (this.props.gameTypeInfo.currGameType !== GameType.SUBGAME2) {
			this.propertyNode.props_big_icon.removeAllChildren();
		}
	}


	public startRoll() {
		this.hideIconWin();
		this.hideScatterAnimation();
		this.rollerCount = -1;
		this.isMergeIcon = false;
		this.isSpeedBorder = false;
		this.isRoll = true;

		if (this.isSubGame2()) {
			this.singleIconRollerViewModels.forEach(v => v.comp.startRoll());
		}
	}

	public stopRoll(stopIconIndex: number, rollOverCallback: Function, isSpeedBorder: boolean = false) {
		// console.log("this.columnIndex--------",this.columnIndex);
		
		this.isSpeedBorder = isSpeedBorder;
		this.stopIconIndex = stopIconIndex;
		this.rollOverCallback = rollOverCallback;
		// let value = isSpeedBorder ? 15 : this.columnIndex + 1

		this.rollerCount = 0;

		if (!this.isSubGame2()) {
			isSpeedBorder && this.setSpeedBorderStatus(true);
			// let value = isSpeedBorder ? 30 : 3;
			// this.addLastJoinIconIndex(this.stopIconIndex, 30);
		} else {
			this.stopSingleRollerIcon();
			
		}
	}

	private addLastJoinIconIndex(stopIndex: number, value: number) {
		if (stopIndex < 0) {
			return;
		}
		let newValue = stopIndex + value;
		if (newValue >= this.iconRollerQueue.length) {
			newValue = newValue - this.iconRollerQueue.length;
		}
		this.lastIndex = newValue;
	}

	private getStopIconIndex() {
		// console.log(`getStopIconIndex--- rollerCount:${this.rollerCount},columnIndex:${this.columnIndex},lastIndex:${this.lastIndex}`);
		let totalCount = 1 * (this.columnIndex + 1);
		if (this.isSpeedBorder) {
			totalCount = 30;
		}
		if (this.rollerCount <= totalCount) {
			if (this.rollerCount === totalCount) {
				// console.log(`getStopIconIndex--- rollerCount:${this.rollerCount},columnIndex:${this.columnIndex},lastIndex:${this.lastIndex},	stopIconIndex:${this.stopIconIndex}`);
				this.addLastJoinIconIndex(this.stopIconIndex, 3)
			}
			return -1;
		}
		return this.stopIconIndex;
	}

	protected bindUI(): void {
	}

	/**获得滚动速度 */
	private getRollSpeed() {
		if (this.isSpeedBorder) {
			return config.normalRollOption.expectRollerSpeed;
		}
		return config.normalRollOption.rollerSpeed;
	}

	private mergeIcon(parentNode: Node) {
		let iconCount = this.getAlikeIconCount();
		let pos: Vec3;
		if (iconCount === this.showIconCount) {
			for (let i = 0; i < this.showIconCount; i++) {
				if (!this.isWinIcon(i)) {
					return;
				}
			}
			// 3个图标取中间的图标的坐标
			pos = this.iconArr[1].getNode().worldPosition;
		} else if (iconCount === this.showIconCount - 1) {
			// 找出两个相邻的图标
			for (let i = 0; i < this.showIconCount - 1; i++) {
				if (this.iconArr[i].getId() === this.iconArr[i + 1].getId() && this.isWinIcon(i) && this.isWinIcon(i + 1)) {
					pos = this.iconArr[i].getNode().worldPosition.clone().add(new Vec3(0, this.iconArr[i].getHeight() / 2 + this.intervalHeight));
				}
			}
		}

		// if (pos) {
		// 	this.buildSkeleton(parentNode, pos, iconCount);
		// 	this.isMergeIcon = true;
		// }
	}

	/**是否中奖图标 */
	public isWinIcon(index: number,iconId: IconId = undefined) {
		const wp = cacheData.rollerLaunchResult.dl.si[0].wp
		for (const key in wp) {
			const values = wp[key] as [];
			const iconIndexs = values.find(v => v[0] === this.columnIndex)
			if (iconIndexs && iconIndexs[1] === index) {
				return true;
			}
		}
		return false;
	}

	/**是否有中奖图标wild */
	public isWinWild() {
		if (cacheData.rollerLaunchResult) {
			for (let i = 0; i < this.showIconCount; i++) {
				if (this.isWinIcon(i,  IconId.WILD)) {
					return true;
				}
			}
		}
		return false;
	}

	private setSpeedBorderStatus(show: boolean) {
		this.speddBorderNode.active = show;
		if (show) {
			this.speddBorderNode.setWorldPosition(new Vec3(this.node.worldPosition.x + 11, this.node.worldPosition.y + 13));
			godWealthV2_Audio.playOneShot(SoundPathDefine.FAST_ROLLER)
		}
	}

	private buildSkeleton(parentNode: Node, pos: Vec3, iconCount: number) {
		// const fileName = iconCount === 2 ? PrefabPathDefine.TWO_ICON : PrefabPathDefine.THREE_ICON;
		// this.bigNode = instantiate(sourceManageSeletor().getFile(fileName).source);
		// this.bigNode.name = "bigNode";
		// parentNode.addChild(this.bigNode);
		// this.bigNode.setWorldPosition(pos);
	}

	/**获得相同图标个数 */
	private getAlikeIconCount() {
		let count = 1;
		for (let i = 0; i < this.showIconCount - 1; i++) {
			if (this.iconArr[i].getId() === IconId.WILD && this.iconArr[i].getId() === this.iconArr[i + 1].getId()) {
				count++;
			}
		}
		return count;
	}

	/**停止赢的图标闪烁 */
	public stopWinIcon() {
		this.iconArr.filter(v => v.getId() !== IconId.SCATTER).forEach(v => v.hideWin());
	}

	/**暂停赢的图标 */
	public pauseWinIcon() {
		this.iconArr.filter(v => v.getId() !== IconId.SCATTER).forEach(v => v.pauseWin());
	}

	private hideScatterAnimation() {
		this.iconArr.filter(v => v.getId() === IconId.SCATTER).forEach(v => v.hideWin());
	}

	/**播放中奖图标动画 */
	public playWinIcon(index) {
		if (this.isRoll) {
			return;
		}
		const icon = this.iconArr[index];
		// 如果是WILD图标，并且合并了图标，就不在显示边框了
		if (icon.getId() !== IconId.WILD || !this.isMergeIcon) {
			icon.playWin(this.propertyNode.props_big_icon)
		}
	}
	/**播放宝盒动画 */
	public playBaoHeAnimation(done) {
		let count = 0;
		const beetleArr = this.iconArr.filter((v, index) => v.getId() === IconId.BEETLE && index < this.showIconCount)
		// console.log("beetleArr--------",beetleArr);
		
		if (beetleArr.length === 0) {
			done && done();
			return;
		}
		beetleArr.forEach(v => {
			v.playBaoHeAnimation(this.propertyNode.props_big_icon,() => {
				count++;
				if (count >= beetleArr.length) {
					done && done();
				}
			})
		})
	}

	/**播放一次scatter动画 */
	private playOneScatterAnimation() {
		
		// 小游戏2不播放
		if (this.isSubGame2()) {
			return;
		}
		for (let i = 0; i < this.showIconCount; i++) {
			const element = this.iconArr[i];
			if (this.node && this.node.isValid && cacheData.rollerLaunchResult) {
				const rollIndex = mainViewModel.rollerPanelViewModel.comp.rollIndex;
				const freeGame = cacheData.rollerLaunchResult.dl.si[0].freegame;
				const isLoop = Object.keys(freeGame).length > 0 ? true : false;	
				// this.scatterNum = mainViewModel.rollerPanelViewModel.comp.getScatterCount(rollIndex);
				// console.log("rollIndex",rollIndex);
				
				if (element.getId() === IconId.SCATTER) {
					godWealthV2_Audio.playOneShot(SoundPathDefine.HA)
					// if (rollIndex < 3) {
						element.faceAnimationNode.scale = new Vec3(0.9, 0.9);
						element.playWin(this.propertyNode.props_big_icon, false, isLoop);
						// console.log("this.scatterNum",this.scatterNum)

					// } else {
						// if (this.scatterNum >=2) {
						// 	element.faceAnimationNode.scale = new Vec3(0.9, 0.9);
						// 	element.playWin(this.propertyNode.props_big_icon, false, isLoop);
						// 	console.log("this.scatterNum",this.scatterNum)

						// }
					// }
					
				}
			}
		}
	}

	private rollOverHandle() {
		this.isRoll = false;
		this.stopIconIndex = -1;

		this.isSpeedBorder && this.setSpeedBorderStatus(false);
		// this.mergeIcon(this.propertyNode.props_big_icon);
		if (this.props.gameTypeInfo.currGameType !== GameType.SUBGAME2) {
			
			this.playOneScatterAnimation();
		}
		// 滚动结束时，只有在小游戏2才立马添加锁定图标
		this.isSubGame2() && this.addLockIcon();

		// if (!this.props.isSpeed) {
			
			godWealthV2_Audio.playOneShot(SoundPathDefine.SHELL_END)
		// }
		// 滚动停止之后需要延迟的时间
		const time = this.isSubGame2() ? 1.5 : 0.05;
		this.events.onCheckNextLeftCount();
		this.scheduleOnce(() => {
			this.node && this.node.isValid && this.rollOverCallback();
		}, time)

	}

	/**添加锁定图标 */
	private addLockIcon(isPlayAnimation: boolean = true) {
		const lockValues = getColumnLockIconArr(cacheData.fixedChessboardIcon, this.columnIndex)
			
		lockValues.forEach(v => {
			let godWealthV2Icon = this.lockIcons.find(iconv => iconv.getIconIndex() === v.index)
			if (!godWealthV2Icon) {
				const iconConfig = config.icon.find(icon => icon.id === v.iconId)
				godWealthV2Icon = this.iconPool.getIcon(iconConfig, this.propertyNode.props_icon_list, v.index);
				godWealthV2Icon.setAmount(v.amount);

				const replaceIcon = this.iconArr[v.index];
				godWealthV2Icon.setPosition(replaceIcon.getPosition())
				if (iconConfig.id === 12) {
					godWealthV2Icon.amountNode.active = true;
				}
				replaceIcon.restore();

				this.iconArr[v.index] = godWealthV2Icon;
				this.lockIcons.push(godWealthV2Icon)

				this.removeSingleRollerIcon(v.index);

				isPlayAnimation && godWealthV2Icon.playBaoHeAnimation(this.propertyNode.props_big_icon,() => {
					// const endPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(mainViewModel.getStartBtnPos());
					// let ParticleNode = instantiate(sourceManageSeletor().getFile(PrefabPathDefine.Particle2D).source);
					// const startPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(ParticleNode.getWorldPosition());
					// ParticleNode.active = true;
					// console.log("ParticleNode",ParticleNode);
					
					// mainViewModel.rollerPanelViewModel.viewNode.addChild(ParticleNode);
					// ParticleNode.setPosition(startPos)
					// tween(ParticleNode).to(config.subGameRollOption.beetleFlyTime, { position: endPos }).call(() => {
					// 	ParticleNode.destroy();
					// }).start()
				})
			}
		})
	}

	private removeSingleRollerIcon(index: number) {
		for (let i = 0; i < this.singleIconRollerViewModels.length; i++) {
			const element = this.singleIconRollerViewModels[i];
			if (element.comp.getSlotIndex() === index) {
				element.unMount();
				this.singleIconRollerViewModels.splice(i, 1);
				break;
			}
		}
	}

	/**删除锁定图标 */
	public removeLockIcon() {
		this.lockIcons.forEach(v => {
			v.borderNode2.active = false;
			v.borderNode2.removeFromParent();
		})
		if (this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2 && this.props.gameTypeInfo.currGameType !== GameType.SUBGAME2) {
			
			this.propertyNode.props_big_icon.removeAllChildren();
		}
		// this.lockIcons.forEach(v => v.destory());
		this.lockIcons = [];
	}

	/**
	 * 根据索引获得图标的位置
	 * @param index 
	 * @returns 
	 */
	private getIconPosByIndex(index: number) {
		const height = config.normalRollOption.singleRollerHeight;
		const interval = this.intervalHeight * (index + 1)
		const y = interval + height / 2 + height * index;
		return new Vec3(0, y);
	}

	/**替换单个滚动图标 */
	public replaceSingleRollerIcon() {
		const lockValues = getColumnLockIconArr(cacheData.fixedChessboardIcon, this.columnIndex)
		for (let i = 0; i < this.iconArr.length; i++) {
			const v = this.iconArr[i];
			// 替换不是甲壳虫和太阳神图标
			// if (!this.isSubGame2SpecialIcon(v.getId())) {
			if (!lockValues.find(lock => lock.index === i)) {
				this.buildSingleRollerIcon(i, v.getPosition(), v);
				v.getNode().active = false;
			}
		}
	}

	/**替换多个滚动图标 */
	public replaceMultiRollerIcon() {
		this.singleIconRollerViewModels.forEach(v => {
			const firstIcon = v.comp.getFirstIcon();
			firstIcon.getNode().removeFromParent();

			const index = v.comp.getSlotIndex();
			this.propertyNode.props_icon_list.addChild(firstIcon.getNode());
			firstIcon.setPosition(this.getIconPosByIndex(index))
			this.iconArr[index] = firstIcon;

			v.unMount();
		})

		this.lockIcons = [];
		this.singleIconRollerViewModels = [];
	}

	/**构建单个图标滚动 */
	private buildSingleRollerIcon(index: number, pos: Vec3, icon: GodWealthV2Icon) {
		const viewModel = new GodWealthV2SingleIconRollerViewModel()
			.mountView(sourceManageSeletor().getFile(PrefabPathDefine.SINGLE_ICON_ROLLER).source)
			.appendTo(this.propertyNode.props_icon_list)
		viewModel.viewNode.getComponent(UITransform).height = config.subGameRollOption.singleIconMaskHeight;
		this.singleIconRollerViewModels.push(viewModel);
		viewModel.viewNode.setPosition(pos);

		viewModel.comp.initSlot(this.columnIndex, index, icon.getIconIndex(), this.iconPool);
	}

	/**多图标滚动 */
	private multiIconRoller() {
		this.iconArr.forEach(v => {
			v.setPosition(new Vec3(v.getPosition().x, v.getPosition().y - this.getRollSpeed()));
		})

		const frist = this.iconArr[0];
		if (frist.getPosition().y <= -(frist.getHeight() / 2 + this.intervalHeight)) {
			if (this.rollerCount >= 0) {
				this.rollerCount++;
			}
			this.iconArr.shift()
			frist.restore();
			this.joinIcon();

			const endIcon = this.iconArr[2]

			if (endIcon.getIconIndex() === this.getStopIconIndex()) {
				// console.log(`xxxxxxxxxxx-----columnIndex:${this.columnIndex},stopIconIndex:${this.stopIconIndex},endIcon.getIconIndex():${endIcon.getIconIndex()},this.getStopIconIndex():${this.getStopIconIndex()}`);
				this.isRoll = false;
				this.stopIconIndex = -1;

				// 结束之后计算每个图标的最终位置，
				let count = 0;
				for (let i = 0; i < this.iconArr.length; i++) {
					const icon = this.iconArr[i];
					tween(icon.getNode()).to(0.1, { position: this.getIconPosByIndex(i) }).call(() => {
						count++;
						if (count >= this.iconArr.length) {
							this.node && this.node.isValid && this.rollOverHandle();
						}
					}).start();
				}
			}
		}
	}

	private isMultiRoll() {
		return this.props.gameTypeInfo.viewGameType === GameType.MAIN || this.props.gameTypeInfo.viewGameType === GameType.SUBGAME1;
	}

	/**停止单个图标的滚动 */
	private stopSingleRollerIcon() {
		let count = 0;
		if (this.singleIconRollerViewModels.length === 0) {
			this.isRoll = false;
			this.node && this.node.isValid && this.rollOverHandle();
		} else {
			this.singleIconRollerViewModels.forEach(v => v.comp.stopRoll(this.stopIconIndex, () => {
				count++;
				if (count >= this.singleIconRollerViewModels.length) {
					this.isRoll = false;
					this.node && this.node.isValid && this.rollOverHandle();
				}
			}));
		}
	}

	/**获得宝盒上面的数字节点 */
	public getBeetleAmountNode() {
		const nodes: Node[] = [];
		for (let i = 0; i < this.showIconCount; i++) {
			const element = this.iconArr[i];
			if (this.isSubGame2SpecialIcon(element.getId())) {
				const amountNode = element.getAmountNode();
				amountNode && nodes.push(amountNode);
			}
		}
		return nodes;
	}

	/**获得宝盒上面的数字节点 */
	public getBaoHeParticleNode() {
		const ParticleNodes: Node[] = [];
		for (let i = 0; i < this.showIconCount; i++) {
			const element = this.iconArr[i];
			if (this.isSubGame2SpecialIcon(element.getId())) {
				const ParticleNode = element.getParticleNode();
				ParticleNode && ParticleNodes.push(ParticleNode);
			}
		}
		return ParticleNodes;
	}

	update(deltaTime: number) {
		if (this.isRoll  && this.iconArr.length > 0) {
			if (this.isMultiRoll()) {
				this.multiIconRoller();
			}
		}
	}
}

