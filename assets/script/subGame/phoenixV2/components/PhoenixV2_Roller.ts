import { _decorator, Game, instantiate, Node, sp, tween, UITransform, Vec2, Vec3, view } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { IconPool } from '../IconPool';
import config from '../config';
import { PhoenixV2Icon } from './PhoenixV2_Icon';
import { calBetAmount, DialogType, GameType, GameTypeInfo, getColumnLockIconArr, IconId, LockIcon, RollerInfo, RollerLaunchResult, RollerStatus, SmallGame } from '../type';
import { mainViewModel, phoenixV2_Audio, sourceManageSeletor } from '../index';
import { SkeletalPathDefine } from '../sourceDefine/skeletalDefine';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { getNodeByNameDeep } from '../../../utils/tool';
import { PhoenixV2_SingleIconRoller } from './PhoenixV2_SingleIconRoller';
import PhoenixV2SingleIconRollerViewModel from '../viewModel/PhoenixV2SingleIconRollerViewModel';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { cacheData } from '../dataTransfer';
import SkeletonAnimationPlayer from '../../../utils/SkeletonPlay';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	gameTypeInfo: GameTypeInfo,
	/** 选择的线id */
	positionId: number,
	/**小游戏选择后的信息 */
	chooseSmallGame:SmallGame
}
export interface IEvent {

}

@ccclass('PhoenixV2_Roller')
export class PhoenixV2_Roller extends BaseComponent<IState, IProps, IEvent> {
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
	private iconArr: PhoenixV2Icon[] = [];

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
	private lockIcons: PhoenixV2Icon[] = [];
	/**单个图标的滚动 */
	private singleIconRollerViewModels: PhoenixV2SingleIconRollerViewModel[] = [];

	/**滚动次数 */
	private rollerCount = -1;

	/**大图标 */
	private bigNode: Node;
	private rollerLaunchResult: RollerLaunchResult;
	private sendBetTime = 0;

	protected propertyNode = {
		props_icon_list: new Node(),
		props_big_icon: new Node(),
	}

	public props: IProps = {
		gameTypeInfo: {
			lastGameType: GameType.NONE,
			viewGameType: GameType.NONE,
			currGameType: GameType.NONE,
			leftCount: 0,
		},
		positionId: 0,
		chooseSmallGame:null
	}

	public events: IEvent = {

	}

	protected initState() {
		return {}
	}

	public setColumnEffectNode(props_column_effect_node: Node) {
		this.props_column_effect_node = props_column_effect_node;
		this.iconAnimationNode = this.props_column_effect_node.getChildByName("props_icon_animation")
		// this.speddBorderNode = this.props_column_effect_node.getChildByName("props_speed_border")
		this.speddBorderNode = mainViewModel.comp.getBorderNode();
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
			// if (this.props.gameTypeInfo.viewGameType === GameType.MAIN) {
			// 	this.props.chooseSmallGame.id = 1;
			// }
			this.joinIcon();
		}
	}

	private isSubGame2() {
		return this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2;
	}
	private isSubGame1() {
		return this.props.gameTypeInfo.viewGameType === GameType.SUBGAME1;
	}

	private addIconIndex(index: number, value: number) {
		let newValue = index + value;
		if (newValue >= this.iconRollerQueue.length) {
			newValue = newValue - this.iconRollerQueue.length;
		}
		return newValue;
	}

	/**是否小游戏2的特殊图标 */
	private isSubGame1SpecialIcon(id: number) {
		return id === IconId.BEETLE || id === IconId.WILD;
	}

	private getIntervalHeight(gameType: GameType = undefined) {
		if (gameType === undefined) {
			gameType = this.props.gameTypeInfo.viewGameType;
		}
		if (gameType === GameType.SUBGAME1) {
			return config.subGameRollOption.intervalHeight1
		} else if (gameType === GameType.SUBGAME2) {
			return config.subGameRollOption.intervalHeight2;
		}
		return config.normalRollOption.intervalHeight;
	}

	private joinIcon() {
		const length = this.iconArr.length

		this.lastIndex = this.lastIndex - 1 < 0 ? this.iconRollerQueue.length - 1 : --this.lastIndex;
		const iconId = this.iconRollerQueue[this.lastIndex];
		const iconConfig = config.icon.find(v => v.id === iconId);
		// 在子游戏1中，初始化不显示甲壳虫和太阳神
		if (this.isSubGame2() && this.isSubGame1SpecialIcon(iconConfig.id)) {
			this.joinIcon();
			return;
		}
		const icon = this.iconPool.getIcon(iconConfig, this.propertyNode.props_icon_list, this.lastIndex);
		if (iconConfig.id === IconId.WILD && this.props.gameTypeInfo.viewGameType !== GameType.MAIN) {
			icon.changeIcon(this.props.chooseSmallGame.id);
		} else if(iconConfig.id === IconId.WILD && this.props.gameTypeInfo.viewGameType === GameType.MAIN) {
			icon.changeIcon(0);
		}
		const position = new Vec3(0, this.getRollerPaddingBottom() + icon.getHeight() / 2);
		position.y -= this.getIconContainerAnchorPos();
		if (length > 0) {
			const lastNode = this.iconArr[length - 1];
			position.y = lastNode.getPosition().y + lastNode.getHeight() + this.getIntervalHeight();
		}


		icon.getNode().setPosition(position);
		this.iconArr.push(icon);

		this.setBeetleAmount(icon);
	}


	/**
	 * 设置甲壳虫上面的数字
	 */
	private setBeetleAmount(icon: PhoenixV2Icon) {
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

		const lockIconDatas = getColumnLockIconArr(this.getFixedChessboardIcon(), this.columnIndex)
		if (lockIconDatas.length === 0) {
			// 没有锁定图标就随机一个金额
			const betAmount = calBetAmount(this.props.positionId)
			let amount = Math.floor(Math.random() * betAmount)
			amount = amount <= 0 ? amount = 1 : amount
			icon.setAmount(amount)
			return;
		}
		const index = diff === 2 ? 0 : diff === 0 ? 2 : 1;

		const lockIconData = lockIconDatas.find(v => v.index === index)
		if (lockIconData) {
			const amount = lockIconData.amount >= 10000 ? lockIconData.amount.formatAmountWithLetter() : lockIconData.amount;
			icon.setAmount(amount)
		}
	}

	private getFixedChessboardIcon() {
		if (this.rollerLaunchResult) {
			const si = this.rollerLaunchResult.dl.si[0]
			if (si.nextGameType === GameType.SUBGAME2 || this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2) {
				// return si.fixedChessboardIcon;
			}
			return undefined;
		} else {
			return cacheData.fixedChessboardIcon;
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
				this.changeRollerHeight(this.props.gameTypeInfo.viewGameType);
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
		this.propertyNode.props_big_icon.removeAllChildren();
	}

	public startRoll() {
		this.unscheduleAllCallbacks();
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

	public stopRoll(stopIconIndex: number, rollOverCallback: Function, isSpeedBorder: boolean, rollerLaunchResult: RollerLaunchResult) {
		this.isSpeedBorder = isSpeedBorder;
		this.stopIconIndex = stopIconIndex;
		this.rollOverCallback = rollOverCallback;
		this.rollerLaunchResult = rollerLaunchResult;
		this.sendBetTime = cacheData.sendBetTime;
		// console.log("roller stop time " + this.sendBetTime);
		// let value = isSpeedBorder ? 15 : this.columnIndex + 1
		
		this.rollerCount = 0;

		if (!this.isSubGame2()) {
			isSpeedBorder && this.setSpeedBorderStatus(true);
			// let value = isSpeedBorder ? 30 : 3;
			// this.addLastJoinIconIndex(this.stopIconIndex, 30);
		} else {
			this.stopSingleRollerIcon(rollerLaunchResult);
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

	private mergeIcon(parentNode: Node, rollerLaunchResult: RollerLaunchResult) {
		let iconCount = this.getAlikeIconCount();
		let pos: Vec3;
		if (iconCount === this.showIconCount) {
			for (let i = 0; i < this.showIconCount; i++) {
				if (!this.isWinIcon(i, rollerLaunchResult)) {
					return;
				}
			}
			// 3个图标取中间的图标的坐标
			pos = this.iconArr[1].getNode().worldPosition;
		} else if (iconCount === this.showIconCount - 1) {
			// 找出两个相邻的图标
			for (let i = 0; i < this.showIconCount - 1; i++) {
				if (this.iconArr[i].getId() === this.iconArr[i + 1].getId() && this.isWinIcon(i, rollerLaunchResult) && this.isWinIcon(i + 1, rollerLaunchResult)) {
					pos = this.iconArr[i].getNode().worldPosition.clone().add(new Vec3(0, this.iconArr[i].getHeight() / 2 + this.getIntervalHeight()));
				}
			}
		}
	}

	/**是否中奖图标 */
	private isWinIcon(index: number, rollerLaunchResult: RollerLaunchResult) {
		const wp = rollerLaunchResult && rollerLaunchResult.dl.si[0].winningPosition
		for (const key in wp) {
			const values = wp[key] as [];
			const iconIndexs = values.find(v => v[0] === this.columnIndex)
			if (iconIndexs && iconIndexs[1] === index) {
				return true;
			}
		}
		return false;
	}

	private setSpeedBorderStatus(show: boolean) {
		this.speddBorderNode.active = show;
		if (show) {
			this.speddBorderNode.setWorldPosition(new Vec3(this.node.worldPosition.x , this.node.worldPosition.y));
			phoenixV2_Audio.playOneShot(SoundPathDefine.FAST_ROLLER)

			let scaleX = config.normalRollOption.expectBorderScaleX;
			let scaleY = config.normalRollOption.expectBorderScaleY;
			if (this.props.gameTypeInfo.viewGameType === GameType.SUBGAME1) {
				scaleX = config.subGameRollOption.expectBorderScaleX;
				scaleY = config.subGameRollOption.expectBorderScaleY;
			}
			this.speddBorderNode.setScale(new Vec3(scaleX, scaleY, 1));
		}
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

		// this.scheduleOnce(() => {
			if (this.node.isValid) {
				const icon = this.iconArr[index];
				// 如果是WILD图标，并且合并了图标，就不在显示边框了
				if (icon.getId() !== IconId.WILD || !this.isMergeIcon) {
					icon.playWin(this.propertyNode.props_big_icon)
				}
			}
		// }, 0.2)
	}

	
	/**播放中奖图标动画 */
	public playYuanBaoWinIcon(index) {
		if (this.isRoll) {
			return;
		}

		this.scheduleOnce(() => {
			if (this.node.isValid) {
				const icon = this.iconArr[index];
				// 如果是元宝第1列 第5列中奖
				if (icon.getId() === IconId.BEETLE) {
					icon.playYuanBaoWinIcon(this.propertyNode.props_big_icon,true)
				}
			}
		}, 0.2)
	}
	// /**播放甲壳虫动画 */
	// public playBeetleAnimation(done) {
	// 	let count = 0;
	// 	const beetleArr = this.iconArr.filter((v, index) => v.getId() === IconId.BEETLE && index < this.showIconCount)
	// 	if (beetleArr.length === 0) {
	// 		done && done();
	// 		return;
	// 	}
	// 	beetleArr.forEach(v => {
	// 		v.playBeetleAnimation(() => {
	// 			count++;
	// 			if (count >= beetleArr.length) {
	// 				done && done();
	// 			}
	// 		})
	// 	})
	// }

	/**播放一次scatter动画 */
	private playOneScatterAnimation() {
		// 小游戏2不播放
		if (this.isSubGame2()) {
			return;
		}
		for (let i = 0; i < this.showIconCount; i++) {
			const element = this.iconArr[i];
			// const freeGame = cacheData.rollerLaunchResult && cacheData.rollerLaunchResult.dl.si[0].freeGame;
			// const isLoop = Object.keys(freeGame).length > 0 ? true : false;	
			if (element.getId() === IconId.SCATTER) {
				phoenixV2_Audio.playOneShot(SoundPathDefine.SCATTER)
				element.playWin(this.propertyNode.props_big_icon, false, false);
			}
		}
	}

	/**播放scatter动画 进入小游戏 */
	public playScatterAnimation() {
		// this.hideIconWin();
		const freeGame = cacheData.rollerLaunchResult && cacheData.rollerLaunchResult.dl.si[0].freeGame;
		const isLoop = Object.keys(freeGame).length > 0 ? true : false;	
		if (isLoop) {
			for (let i = 0; i < this.showIconCount; i++) {
				const element = this.iconArr[i];
				if (element.getId() === IconId.SCATTER) {
					element.playScatterWin(this.propertyNode.props_big_icon, false);
				}
			}
		}
	}

	/**播放一次元宝动画 */
	private playOneYuanBaoAnimation(isWin: boolean = false) {
		for (let i = 0; i < this.showIconCount; i++) {
			const element = this.iconArr[i];
			if (element.getId() === IconId.BEETLE) {
				element.yinBiNode.active = false;
				element.playYuanBaoWinIcon(this.propertyNode.props_big_icon,isWin);
			}
		}
	}

	private rollOverHandle(rollerLaunchResult: RollerLaunchResult) {
		// console.log("roller over handle stop time " + this.sendBetTime);
		this.isRoll = false;
		this.stopIconIndex = -1;

		this.isSpeedBorder && this.setSpeedBorderStatus(false);

		if (this.columnIndex === 0 || this.columnIndex === 4) {
			this.playOneYuanBaoAnimation(false)
		}

		this.playOneScatterAnimation();
		const lockIconCount = this.addLockIcon();
		phoenixV2_Audio.playOneShot(SoundPathDefine.SHELL_END)
		
		// 有播放甲壳虫动画，晚一点结束
		const time = lockIconCount > 0 && this.isSubGame2() ? 4 : 0.05;
		this.scheduleOnce(() => {
			this.node.isValid && this.rollOverCallback();
		}, time)

	}

	/**添加锁定图标 */
	private addLockIcon() {
		let playCount = 0;
		const lockValues = getColumnLockIconArr(this.getFixedChessboardIcon(), this.columnIndex)
		lockValues.forEach(v => {
			let phoenixV2Icon = this.lockIcons.find(iconv => iconv.getIconIndex() === v.index)
			if (!phoenixV2Icon) {
				const iconConfig = config.icon.find(icon => icon.id === v.iconId)
				phoenixV2Icon = this.iconPool.getIcon(iconConfig, this.propertyNode.props_icon_list, v.index);
				phoenixV2Icon.setAmount(v.amount);

				const replaceIcon = this.iconArr[v.index];
				phoenixV2Icon.setPosition(replaceIcon.getPosition())
				replaceIcon.restore();

				this.iconArr[v.index] = phoenixV2Icon;
				this.lockIcons.push(phoenixV2Icon)

				this.removeSingleRollerIcon(v.index);

				phoenixV2Icon.playBeetleAnimation(() => {
					phoenixV2Icon.hideWin();
				})
				playCount++;
				// console.log(`addlockicon columnIndex ${this.columnIndex} index ${v.index} amount ${v.amount}, this.lockIcons.length ${this.lockIcons.length}`);
			}
		})
		return playCount;
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
		this.lockIcons.forEach(v => v.destory());
		this.lockIcons = [];
	}

	/**
	 * 根据索引获得图标的位置
	 * @param index 
	 * @returns 
	 */
	private getIconPosByIndex(index: number, gameType: GameType = undefined) {
		if (gameType === undefined) {
			gameType = this.props.gameTypeInfo.viewGameType;
		}
		const height = config.normalRollOption.singleRollerHeight;
		const halfHeight = height / 2;
		const paddingBottom = this.getRollerPaddingBottom(gameType)
		let y = 0;
		if (index === 0) {
			// 第一个图标的坐标位置 = 下边距 + icon高度的一半
			y = paddingBottom + halfHeight;
		} else {
			// 从第二开始的坐标 = 下边距 + icon高度的一半 + 图标间隔个数 + icon高度个数
			const interval = this.getIntervalHeight(gameType) * index
			y = paddingBottom + halfHeight + interval + height * index;
		}
		y -= this.getIconContainerAnchorPos();
		return new Vec3(0, y);
	}

	/**获得图标容器锚点的起始位置 */
	private getIconContainerAnchorPos() {
		const iconListUI = this.propertyNode.props_icon_list.getComponent(UITransform)
		return iconListUI.height * iconListUI.anchorY
	}

	public changeRollerHeight(gameType: GameType) {
		let rollerHeight = config.normalRollOption.rollerHeight
		if (gameType === GameType.SUBGAME2) {
			rollerHeight = config.subGameRollOption.rollerHeight2;
		} else if (gameType === GameType.SUBGAME1) {
			rollerHeight = config.subGameRollOption.rollerHeight1;
		}
		this.propertyNode.props_icon_list.getComponent(UITransform).height = rollerHeight;
	}

	/**重置图标位置 */
	public resetIconPos(gameType: GameType) {
		this.changeRollerHeight(gameType);
		if (gameType !== GameType.SUBGAME2) {
			for (let i = 0; i < this.iconArr.length; i++) {
				const icon = this.iconArr[i];
				const pos = this.getIconPosByIndex(i, gameType);
				icon.setPosition(pos);
			}
		}
	}

	/**替换单个滚动图标 */
	public replaceSingleRollerIcon() {
		const lockValues = getColumnLockIconArr(this.getFixedChessboardIcon(), this.columnIndex)
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
	private buildSingleRollerIcon(index: number, pos: Vec3, icon: PhoenixV2Icon) {
		// const viewModel = new PhoenixV2SingleIconRollerViewModel()
		// 	.mountView(sourceManageSeletor().getFile(PrefabPathDefine.SINGLE_ICON_ROLLER).source)
		// 	.appendTo(this.propertyNode.props_icon_list);
		// viewModel.viewNode.getComponent(UITransform).width = config.subGameRollOption.singleIconMaskWidth;
		// viewModel.viewNode.getComponent(UITransform).height = config.subGameRollOption.singleIconMaskHeight;
		// this.singleIconRollerViewModels.push(viewModel);
		// viewModel.viewNode.setPosition(pos);

		// viewModel.comp.initSlot(this.columnIndex, index, icon.getIconIndex(), this.iconPool);
	}

	private getRollerPaddingBottom(gameType: GameType = undefined) {
		if (gameType === undefined) {
			gameType = this.props.gameTypeInfo.viewGameType;
		}
		if (gameType === GameType.SUBGAME1) {
			return config.subGameRollOption.rollerPaddingBottom;
		}
		return config.normalRollOption.rollerPaddingBottom;
	}

	/**多图标滚动 */
	private multiIconRoller() {
		this.iconArr.forEach(v => {
			v.setPosition(new Vec3(v.getPosition().x, v.getPosition().y - this.getRollSpeed()));
		})

		const frist = this.iconArr[0];
		// 图标隐藏的Y坐标 = 图标一半高度 + 滚轴下内边距 + 容器锚点的高度
		let iconHideY = -(frist.getHeight() / 2 + this.getRollerPaddingBottom())
		iconHideY -= this.getIconContainerAnchorPos()
		if (frist.getPosition().y <= iconHideY) {
			// console.log(`columnIndex:${this.columnIndex},stopIconIndex:${this.stopIconIndex}, rollerCount:${this.rollerCount}`);
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
							this.node.isValid && this.rollOverHandle(this.rollerLaunchResult);
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
	private stopSingleRollerIcon(rollerLaunchResult: RollerLaunchResult) {
		let count = 0;
		if (this.singleIconRollerViewModels.length === 0) {
			this.isRoll = false;
			this.node.isValid && this.rollOverHandle(this.rollerLaunchResult);
		} else {
			this.singleIconRollerViewModels.forEach(v => v.comp.stopRoll(this.stopIconIndex, () => {
				count++;
				if (count >= this.singleIconRollerViewModels.length) {
					this.isRoll = false;
					this.node.isValid && this.rollOverHandle(this.rollerLaunchResult);
				}
			}, rollerLaunchResult));
		}
	}

	/**获得甲壳虫上面的数字节点 */
	public getBeetleAmountNode() {
		const nodes: Node[] = [];
		for (let i = 0; i < this.showIconCount; i++) {
			const element = this.iconArr[i];
			if (this.isSubGame1SpecialIcon(element.getId())) {
				const amountNode = element.getAmountNode();
				amountNode && nodes.push(amountNode);
			}
		}
		return nodes;
	}

	public getWildLiZiNode() {
		const amountNodes: Node[] = [];
		const nodes: Node[] = [];
		// console.log(" this.iconArr111", this.iconArr);
		// console.log("this.columnIndex111",this.columnIndex);
		for (let i = 0; i < this.showIconCount; i++) {
			const element = this.iconArr[i];
			
			const isWinIcon = this.isWinIconPhoenix(cacheData.rollerLaunchResult,i);
			// console.log("amount111 isWinIcon",isWinIcon);
			if (isWinIcon && element.getId() === IconId.WILD) {
				
				const amount = element.getAmountNode();
				const amount2DNode = element.getParticle2DNode();
				if (amount) {
					amountNodes.push(amount)
					nodes.push(amount2DNode);
				}
			}
		}
		// console.log("amountNodes------->:",amountNodes);
		
		return {amountNodes,nodes};
	}

	// /**是否wild中奖图标 */
	public isWinIconPhoenix(rollerLaunchResult:RollerLaunchResult,index:number) {
		const wp = rollerLaunchResult && rollerLaunchResult.dl.si[0].winningPosition
		// console.log("phoenixCount111",rollerLaunchResult.dl.si[0].otherGameAttributesVo.phoenixCount);
		
		const result: number[][] = []
		// let iconIndexs;
		for (const key in wp) {
			const values = wp[key] as [];
			const iconIndexs = values.find(v => v[0] === this.columnIndex)
			if (iconIndexs && iconIndexs[1] === index && this.iconArr[index].getId() === IconId.WILD) {
				return true;
			}
		}
		// for (const key in wp) {
		// 	result.push(...wp[key])
		// }
		// console.log("result111",result);
		
		// iconIndexs = result.find(v => v[0] === this.columnIndex)
		// // for (let i = 0; i < this.showIconCount; i++) {
		// 	if (iconIndexs && iconIndexs[1] === index && this.iconArr[index].getId() === IconId.WILD) {
		// 		// console.log("iconIndexs111",iconIndexs);
		// 		return true;
		// 	}
		// // }
		return false;
	}

	/**是否元宝中奖图标 */
	public isYuanBaoWinIcon(rollerLaunchResult: RollerLaunchResult) {
		
		const wp = rollerLaunchResult && rollerLaunchResult.dl.si[0].otherGameAttributesVo.yuanBaoPosition
		const values = wp
		const iconIndexs = values.find(v => v[0] === this.columnIndex)
		for (let i = 0; i < this.showIconCount; i++) {
			if (iconIndexs && iconIndexs[1] === i) {
				return true;
			}
		}
		return false;
	}
	/**获得元宝上面的银币节点 */
	public getYuanBaoYinBiNode() {
		const nodes: Node[] = [];
		for (let i = 0; i < this.showIconCount; i++) {
			const element = this.iconArr[i];
			if (element.getId() === IconId.BEETLE) {
				const yinBINode = element.getYinBiNode();
				// console.log("yinBINode",yinBINode);
				// console.log("yinBINode", yinBINode.active);
				// console.log("yinBINode isYuanBaoWinIcon",this.isWinIconPhoenix(cacheData.rollerLaunchResult));
				const isYuanBaoWinIcon = this.isYuanBaoWinIcon(cacheData.rollerLaunchResult);
				yinBINode && isYuanBaoWinIcon && nodes.push(yinBINode);
			}
		}
		return nodes;
	}

	protected onDestroy(): void {
		this.isRoll = false;
	}

	update(deltaTime: number) {
		if (this.isRoll && this.iconArr.length > 0) {
			if (this.isMultiRoll()) {
				this.multiIconRoller();
			}
		}
	}
}

