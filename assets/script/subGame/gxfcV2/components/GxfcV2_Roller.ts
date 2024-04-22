import { _decorator, Game, instantiate, Node, sp, tween, UITransform, Vec2, Vec3, view } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { IconPool } from '../IconPool';
import config from '../config';
import { GxfcV2Icon } from './GxfcV2_Icon';
import { calBetAmount, GameType, GameTypeInfo, getColumnLockIconArr, IconId, LockIcon, RollerInfo, RollerLaunchResult, RollerStatus } from '../type';
import { GxfcV2_Audio, mainViewModel, sourceManageSeletor } from '../index';
import { SkeletalPathDefine } from '../sourceDefine/skeletalDefine';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { getNodeByNameDeep } from '../../../utils/tool';
import { GxfcV2_SingleIconRoller } from './GxfcV2_SingleIconRoller';
import GxfcV2SingleIconRollerViewModel from '../viewModel/GxfcV2SingleIconRollerViewModel';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { cacheData } from '../dataTransfer';
import game from '../store/reducer/game';
const { ccclass, property } = _decorator;


type WildIcon = {
	index: number,
	wildIcon:Node
}
export interface IState {

}

export interface IProps {
	gameTypeInfo: GameTypeInfo,
	/** 选择的线id */
	positionId: number,
}
export interface IEvent {
	onCheckNextLeftCount: () => void
}

@ccclass('GxfcV2_Roller')
export class GxfcV2_Roller extends BaseComponent<IState, IProps, IEvent> {
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
	public isRoll = false;
	/**滚轴上的图标，包含看不见的 */
	public iconArr: GxfcV2Icon[] = [];

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
	private lockIcons: GxfcV2Icon[] = [];
	/**单个图标的滚动 */
	private singleIconRollerViewModels: GxfcV2SingleIconRollerViewModel[] = [];

	private wildIcon
	// public winWildIcon: WildIcon[] = []
	public winWildIcon = []
	

	/**滚动次数 */
	private rollerCount = -1;

	/**大图标 */
	private bigNode: Node;
	private rollerLaunchResult: RollerLaunchResult;
	private sendBetTime = 0;

	protected propertyNode = {
		props_icon_list: new Node(),
		props_big_icon: new Node(),
		props_wild_icon_list: new Node(),
		
	}

	public props: IProps = {
		gameTypeInfo: {
			lastGameType: GameType.MAIN,
			currGameType: GameType.MAIN,
			viewGameType: GameType.MAIN,
			leftCount: 0
		},
		positionId: 0,
	}

	public events: IEvent = {
		onCheckNextLeftCount: () => { }
	}

	protected initState() {
		return {}
	}

	public getWildListNode() {
		return this.propertyNode.props_wild_icon_list
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

		if (this.isSubGame1()) {
			// this.initWildColumn(this.showIconCount + 1);
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
	private isSubGame2SpecialIcon(id: number) {
		// return id === IconId.BEETLE || id === IconId.SUN_GOD;
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

		// 在子游戏2中，初始化不显示甲壳虫和太阳神
		// if (this.isSubGame2() && this.isSubGame2SpecialIcon(iconConfig.id)) {
		// 	this.joinIcon();
		// 	return;
		// }

		const icon = this.iconPool.getIcon(iconConfig, this.propertyNode.props_icon_list, this.lastIndex);
		icon.showAmount();
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
	private setBeetleAmount(icon: GxfcV2Icon) {
		// if (icon.getId() !== IconId.BEETLE) {
		// 	return;
		// }

		if (this.props.gameTypeInfo.currGameType !== GameType.SUBGAME2 && this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2) {
			this.randomBeetleAmount(icon);
			return;
		}

		const diff = this.calIndexDiff(this.lastIndex, this.stopIconIndex);
		if (diff >= 3) {
			this.randomBeetleAmount(icon);
			return;
		}

		// console.log(`setBeetleAmount--- diff:${diff},stopIconIndex:${this.stopIconIndex},lastIndex:${this.lastIndex},columnIndex:${this.columnIndex}`);

		const lockIconDatas = getColumnLockIconArr(this.getFixedChessboardIcon(), this.columnIndex)
		if (lockIconDatas.length === 0) {
			// 没有锁定图标就随机一个金额
			this.randomBeetleAmount(icon);
			return;
		}
		const index = diff === 2 ? 0 : diff === 0 ? 2 : 1;

		const lockIconData = lockIconDatas.find(v => v.index === index)
		if (lockIconData) {
			icon.setAmount(lockIconData.amount)
		}
	}

	private randomBeetleAmount(icon: GxfcV2Icon) {
		// 没有锁定图标就随机一个金额
		const betAmount = calBetAmount(this.props.positionId)
		let amount = Math.floor(Math.random() * betAmount)
		amount = amount <= 0 ? amount + 1 : amount
		icon.setAmount(amount)
	}

	private getFixedChessboardIcon() {
		if (this.rollerLaunchResult) {
			const si = this.rollerLaunchResult.dl.si[0]
			if (si.gameType === GameType.SUBGAME2 || this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2) {
				return si.fixedChessboardIcon;
			}
			return undefined;
		} else {
			return cacheData.fixedChessboardIcon;
		}
	}

	public joinJinWildIcon(rollerId, rollerLaunchResult: RollerLaunchResult) {
		this.propertyNode.props_wild_icon_list.active = true;
		let icon = this.wildIcon;
		this.propertyNode.props_wild_icon_list.removeAllChildren();
		for (let i = 0; i < this.showIconCount; i++) {
			const jinWildicon = instantiate(icon);
			jinWildicon.setPosition(0, -150);
			this.propertyNode.props_wild_icon_list.addChild(jinWildicon);
			const endPos = new Vec3(0, -150 + (config.normalRollOption.jinFaRollerHeight * i));
			tween(jinWildicon).to(0.5, { position: endPos }).start();
			// console.log("this.isWinJinWildIcon(i, rollerLaunchResult, rollerId)",this.isWinJinWildIcon(i, rollerLaunchResult, rollerId));
			
			if (this.isWinJinWildIcon(i, rollerLaunchResult, rollerId)) {
				// const wild = {
				// 	index: i,
				// 	wildIcon:jinWildicon
				// }
				// this.winWildIcon.push(wild);
				this.winWildIcon.push(jinWildicon);

				// mainViewModel.rollerPanelViewModel.comp.winWildIcon.push(jinWildicon)
			}
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
	public hideIconWin() {
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
		this.propertyNode.props_wild_icon_list.active = false;
		this.propertyNode.props_wild_icon_list.removeAllChildren();
		this.winWildIcon = [];
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
		// if (this.isSpeedBorder) {
		// 	totalCount = 20;
		// }
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
		this.wildIcon=this.propertyNode.props_wild_icon_list.getChildByName("icon")
	}

	/**获得滚动速度 */
	private getRollSpeed() {
		// if (this.isSpeedBorder) {
		// 	return config.normalRollOption.expectRollerSpeed;
		// }
		return config.normalRollOption.rollerSpeed;
	}

	private mergeIcon(parentNode: Node, rollerLaunchResult: RollerLaunchResult) {
		let iconCount = this.getAlikeIconCount(rollerLaunchResult);
		let pos: Vec3 = this.getMergeIconPos(rollerLaunchResult);

		if (pos) {
			this.buildSkeleton(parentNode, pos, iconCount);
			this.isMergeIcon = true;
		}
	}

	/**获得合并图标的位置 */
	private getMergeIconPos(rollerLaunchResult: RollerLaunchResult, gameType: GameType = undefined) {
		if (gameType === undefined) {
			gameType = this.props.gameTypeInfo.viewGameType;
		}
		let iconCount = this.getAlikeIconCount(rollerLaunchResult);
		let pos: Vec3;
		if (iconCount === this.showIconCount) {
			let bool = true;
			for (let i = 0; i < this.showIconCount; i++) {
				if (!this.isWinIcon(i, rollerLaunchResult)) {
					bool = false;
					break;
				}
			}
			if (bool) {
				// 3个图标取中间的图标的坐标
				pos = this.iconArr[1].getNode().worldPosition;
			}
		} else if (iconCount == this.showIconCount - 1) {
			// 找出两个相邻的图标
			for (let i = 0; i < this.showIconCount - 1; i++) {
				if (this.iconArr[i].getId() === this.iconArr[i + 1].getId() && this.isWinIcon(i, rollerLaunchResult) && this.isWinIcon(i + 1, rollerLaunchResult)) {
					// 用开始的图标的坐标 + 图标的一半 + 间隔的一半
					pos = this.iconArr[i].getNode().worldPosition.clone().add(new Vec3(0, this.iconArr[i].getHeight() / 2 + this.getIntervalHeight(gameType) / 2));
					// console.log(`getMergeIconPos begin`, pos.x, pos.y);
				}
			}
		}
		return pos;
	}

	/**是否中奖图标 */
	private isWinIcon(index: number, rollerLaunchResult: RollerLaunchResult, iconId: IconId = undefined) {
		const wp = rollerLaunchResult.dl.si[0].wp
		for (const key in wp) {
			const values = wp[key] as [];
			const iconIndexs = values.find(v => v[0] === this.columnIndex)
			if (iconIndexs && iconIndexs[1] === index) {
				if (iconId) {
					return this.iconArr[index].getId() === iconId;
				}
				return true;
			}
		}
		return false;
	}

	/**是否中奖图标 */
	private isWinJinWildIcon(index: number, rollerLaunchResult: RollerLaunchResult, columnIndex) {
		const wp = rollerLaunchResult.dl.si[0].wp
		for (const key in wp) {
			const values = wp[key] as [];
			const iconIndexs = values.find(v => v[0] === columnIndex)
			if (iconIndexs && iconIndexs[1] === index) {
				// if (iconId) {
				// 	return this.iconArr[index].getId() === iconId;
				// }
				return true;
			}
		}
		return false;
	}

	/**是否有中奖图标wild */
	public isWinWild() {
		if (this.rollerLaunchResult) {
			for (let i = 0; i < this.showIconCount; i++) {
				if (this.isWinIcon(i, this.rollerLaunchResult, IconId.WILD1) ||this.isWinIcon(i, this.rollerLaunchResult, IconId.WILD2)) {
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
			// GxfcV2_Audio.playOneShot(SoundPathDefine.fast_roller)

			let scaleX = config.normalRollOption.expectBorderScaleX;
			let scaleY = config.normalRollOption.expectBorderScaleY;
			if (this.props.gameTypeInfo.viewGameType === GameType.SUBGAME1) {
				scaleX = config.subGameRollOption.expectBorderScaleX;
				scaleY = config.subGameRollOption.expectBorderScaleY;
			}
			this.speddBorderNode.setScale(new Vec3(scaleX, scaleY, 1));
		}
	}

	private buildSkeleton(parentNode: Node, pos: Vec3, iconCount: number) {
		// const fileName = iconCount === 2 ? PrefabPathDefine.TWO_ICON : PrefabPathDefine.THREE_ICON;
		// this.bigNode = instantiate(sourceManageSeletor().getFile(fileName).source);
		// this.bigNode.name = "bigNode-" + iconCount;
		// parentNode.addChild(this.bigNode);
		// this.bigNode.setWorldPosition(pos);

		// this.bigNode.setScale(new Vec3(1, this.getBigNodeScaleY(iconCount)))
	}

	private getBigNodeScaleY(iconCount: number, gameType: GameType = undefined) {
		if (gameType === undefined) {
			gameType = this.props.gameTypeInfo.viewGameType;
		}

		if (gameType !== GameType.SUBGAME1) {
			return iconCount ? config.normalRollOption.twoIconScaleY : config.normalRollOption.threeIconScaleY;
		} else {
			return iconCount ? config.subGameRollOption.twoIconScaleY : config.subGameRollOption.threeIconScaleY;
		}
	}

	/**获得相同图标个数 */
	private getAlikeIconCount(rollerLaunchResult: RollerLaunchResult) {
		let count = 1;
		for (let i = 0; i < this.showIconCount - 1; i++) {
			if ((this.iconArr[i].getId() === IconId.WILD1 || this.iconArr[i].getId() === IconId.WILD2) &&
				this.iconArr[i].getId() === this.iconArr[i + 1].getId() &&
				this.isWinIcon(i, rollerLaunchResult) && this.isWinIcon(i + 1, rollerLaunchResult)) {
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
		// console.log("222222222",this.isRoll);
		
		if (this.isRoll) {
			return;
		}
		// console.log("222222222");
		// debugger

		if (!this.isMergeIcon) {
			this.mergeIcon(this.propertyNode.props_big_icon, this.rollerLaunchResult);
		}

		this.scheduleOnce(() => {
			if (this.node.isValid) {
				const icon = this.iconArr[index];
				// 如果是WILD图标，并且合并了图标，就不在显示边框了
				if (icon.getId() !== IconId.WILD1 ||icon.getId() !== IconId.WILD2 || !this.isMergeIcon) {
					icon.playWin(this.propertyNode.props_big_icon)
				}
			}
		}, 0.2)
	}

	/**是否是与金发同一列的图标 */
	// private isChangeJinFa(rollerLaunchResult: RollerLaunchResult,index,RollerId) {
	// 	const wildRollerId = rollerLaunchResult.dl.si[0].wildRollerId
	// 	const wp = rollerLaunchResult.dl.si[0].wp
	// 	for (const key in wp) {
	// 		const values = wp[key] as [];
	// 		const iconIndexs = values.find(v => v[0] === RollerId)
	// 		if (iconIndexs ) {//&& iconIndexs[1] === index
	// 			return true
	// 		}
	// 	}
	// 	return false
	// }

	/**播放金发wild动画
	 * @param RollerId 滚轴的id值
	 */
	public playJinFaWild(rollerLaunchResult: RollerLaunchResult, RollerId, done) {
		// console.log("playJinFaWild", RollerId);
		const wildRollerId = rollerLaunchResult.dl.si[0].wildRollerId
		for (let i = this.showIconCount - 1; i >= 0; i--) {
			
			const element = this.iconArr[i];
			// console.log("element", element);
			// console.log(this.isChangeJinFa(rollerLaunchResult, i, RollerId));
			
			if (wildRollerId && wildRollerId.length > 0) {
				// if (i === 2) {
					element.playJinWild(this.propertyNode.props_big_icon, () => {
						this.scheduleOnce(() => {
							if (i !== 2) {
								element.changeToJinWild()
								// element.faceNode.getComponent(UITransform).width = 160;
								// element.faceNode.getComponent(UITransform).height = 146;
								if (i === 0) {
									this.scheduleOnce(() => {
										done && done()
									}, 1)
								}
							}
						},1)
					})
				// } else {
				// }
			}
		}
	}
	/**播放甲壳虫动画 */
	// public playBeetleAnimation(done) {
		// let count = 0;
		// const beetleArr = this.iconArr.filter((v, index) => v.getId() === IconId.BEETLE && index < this.showIconCount)
		// if (beetleArr.length === 0) {
		// 	done && done();
		// 	return;
		// }
		// beetleArr.forEach(v => {
		// 	v.playBeetleAnimation(() => {
		// 		count++;
		// 		if (count >= beetleArr.length) {
		// 			done && done();
		// 		}
		// 	})
		// })
	// }

	/**播放一次scatter动画 */
	private playOneScatterAnimation() {
		// 小游戏2不播放
		if (this.isSubGame2()) {
			return;
		}
		for (let i = 0; i < this.showIconCount; i++) {
			const element = this.iconArr[i];
			if (element.getId() === IconId.SCATTER) {
				element.playWin(this.propertyNode.props_big_icon, false, false);
			}
		}
	}

	
	/**播放scatter动画 进入小游戏 */
	public playScatterAnimation() {
		// this.hideIconWin();
		const freeGame = cacheData.rollerLaunchResult && cacheData.rollerLaunchResult.dl.si[0].freegame;
		const isLoop = Object.keys(freeGame).length > 0 ? true : false;	
		if (isLoop) {
			for (let i = 0; i < this.showIconCount; i++) {
				const element = this.iconArr[i];
				if (element.getId() === IconId.SCATTER) {
					element.playScatterWin(this.propertyNode.props_big_icon, true);
				}
			}
		}
	}

	private rollOverHandle(rollerLaunchResult: RollerLaunchResult) {
		// console.log("roller over handle stop time " + this.sendBetTime);
		this.isRoll = false;
		this.stopIconIndex = -1;

		this.isSpeedBorder && this.setSpeedBorderStatus(false);
		// this.mergeIcon(this.propertyNode.props_big_icon, rollerLaunchResult);
		this.playOneScatterAnimation();
		// 滚动结束时，只有在小游戏2才立马添加锁定图标
		this.isSubGame2() && this.addLockIcon();

		GxfcV2_Audio.playOneShot(SoundPathDefine.beatDrum)

		// 滚动停止之后需要延迟的时间
		const time = this.isSubGame2() ? 1.5 : 0.05;
		this.events.onCheckNextLeftCount();
		// const time = 0.05;
		this.scheduleOnce(() => {
			this.node.isValid && this.rollOverCallback();
		}, time)

	}



	/**添加锁定图标 */
	public addLockIcon(isPlayAnimation: boolean = true) {
		if (!this.iconPool) {
			return;
		}

		let playCount = 0;
		const lockValues = getColumnLockIconArr(this.getFixedChessboardIcon(), this.columnIndex)
		lockValues.forEach(v => {
			let GxfcV2Icon = this.lockIcons.find(iconv => iconv.getIconIndex() === v.index)
			if (!GxfcV2Icon) {
				const iconConfig = config.icon.find(icon => icon.id === v.iconId)
				GxfcV2Icon = this.iconPool.getIcon(iconConfig, this.propertyNode.props_icon_list, v.index);
				// if (!isPlayAnimation || GxfcV2Icon.isBeetleIcon()) {
				// 	GxfcV2Icon.setAmount(v.amount);
				// } else if (GxfcV2Icon.isSunGod()) {
				// 	// 播放太阳神出现的音效
				// 	// GxfcV2_Audio.playOneShot(SoundPathDefine.sunGod)
				// }

				const replaceIcon = this.iconArr[v.index];
				GxfcV2Icon.setPosition(replaceIcon.getPosition())
				replaceIcon.restore();

				this.iconArr[v.index] = GxfcV2Icon;
				this.lockIcons.push(GxfcV2Icon)

				this.removeSingleRollerIcon(v.index);

				isPlayAnimation && GxfcV2Icon.playBeetleAnimation(() => {
					GxfcV2Icon.hideWin();
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


		if (this.isMergeIcon) {
			// console.log(`bigNode11 setWorldPosition begin`, this.bigNode.getWorldPosition().x, this.bigNode.getWorldPosition().y);
			const pos = this.getMergeIconPos(this.rollerLaunchResult, gameType);
			// 重新设置合并图标位置
			// this.bigNode.setWorldPosition(pos);
			// console.log(`bigNode11 setWorldPosition end`, pos.x, pos.y);
		}
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

		if (this.isMergeIcon) {
			// console.log(`bigNode setWorldPosition begin`, this.bigNode.getWorldPosition().x, this.bigNode.getWorldPosition().y);
			const pos = this.getMergeIconPos(this.rollerLaunchResult, gameType);
			// 重新设置合并图标位置
			this.bigNode.setWorldPosition(pos);
			// console.log(`bigNode setWorldPosition end`, pos.x, pos.y);
			let iconCount = this.getAlikeIconCount(this.rollerLaunchResult);
			this.bigNode.setScale(new Vec3(1, this.getBigNodeScaleY(iconCount, gameType)));
		}
	}

	/**替换单个滚动图标 */
	public replaceSingleRollerIcon() {
		this.addLockIcon(false);

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

		// 只有从小游戏2退出去的才隐藏甲壳虫上面的数字
		if (this.props.gameTypeInfo.lastGameType === GameType.SUBGAME2 ||
			this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2) {
			// 在切到游戏之后，把甲壳虫上面的数字隐藏了
			for (let i = 0; i < this.showIconCount; i++) {
				if (i >= this.iconArr.length) {
					break;
				}
				const v = this.iconArr[i];
				// if (v.isBeetleIcon() || v.getId() === IconId.SUN_GOD) {
				// 	v.hideAmount();
				// }
			}
		}

		this.lockIcons = [];
		this.singleIconRollerViewModels = [];
	}

	/**构建单个图标滚动 */
	private buildSingleRollerIcon(index: number, pos: Vec3, icon: GxfcV2Icon) {
		// const viewModel = new GxfcV2SingleIconRollerViewModel()
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

				const duration = 0.1;
				// 结束之后计算每个图标的最终位置，
				for (let i = 0; i < this.iconArr.length; i++) {
					const icon = this.iconArr[i];
					tween(icon.getNode()).to(duration, { position: this.getIconPosByIndex(i) }).start();
				}

				// if(this.isSubGame1() && )

				this.scheduleOnce(() => {
					this.rollOverHandle(this.rollerLaunchResult);
				}, duration)
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
	// public getBeetleNode(isIncludeSunGod: boolean = false) {
	// 	const nodes: GxfcV2Icon[] = [];
	// 	for (let i = 0; i < this.showIconCount; i++) {
	// 		const element = this.iconArr[i];
	// 		// 获得太阳神图标，数字必须要大于0的
	// 		const isSunGod = isIncludeSunGod && element.getId() === IconId.SUN_GOD && element.getAmount() > 0;
	// 		if (element.getId() === IconId.BEETLE || isSunGod) {
	// 			nodes.push(element);
	// 		}
	// 	}
	// 	return nodes;
	// }

	/**获得太阳神图标 */
	// public getSunGodIconNode() {
	// 	const lockValues = getColumnLockIconArr(this.getFixedChessboardIcon(), this.columnIndex)
	// 	for (let i = 0; i < this.showIconCount; i++) {
	// 		const element = this.iconArr[i];
	// 		// 并且要是锁定的图标
	// 		if (element.getId() === IconId.SUN_GOD && element.getAmount() === 0 && lockValues.find(v => v.index === i)) {
	// 			return element;
	// 		}
	// 	}
	// 	return undefined;
	// }

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

