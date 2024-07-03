import { _decorator, instantiate, ITweenOption, Node, sp, Tween, tween, UITransform, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import config from '../config';
import { cacheData } from '../dataTransfer';
import { IconPool } from '../IconPool';
import { playThorAnimation } from '../store/actions/game';
import { GameModeType, GameType, GameTypeInfo, IconId, RollerLaunchResult } from '../type';
import { ThorV2Icon } from './ThorV2_Icon';
import { mainViewModel, thorv2_Audio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	gameTypeInfo: GameTypeInfo,
	/** 选择的线id */
	positionId: number,
	gameModeType: GameModeType,
}
export interface IEvent {
	onCheckNextLeftCount: () => void
}

const TWEEN_ICON_TAG = 1;

enum SingleRollerStatus {
	/**清理 */
	CLEAN,
	/**等待 */
	WAIT,
	/**添加 */
	ADD,
	/**开奖 */
	OPEN,
}

@ccclass('ThorV2_Roller')
export class ThorV2_Roller extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	/**当前最后添加的图标索引位置 */
	private lastIndex = 0;
	/**显示图标数量 */
	private showIconCount = config.normalRollOption.showIconCount;
	/**停止图标索引 */
	private stopIconIndex = -1;
	/**列的索引 */
	private columnIndex = -1;
	/**图标池 */
	private iconPool: IconPool;
	/**图标轮播队列 */
	private iconRollerQueue: any[]
	/**是否正在滚动 */
	private isRoll = false;
	/**滚轴上的图标，包含看不见的 */
	private iconArr: ThorV2Icon[] = [];
	/**滚动结束回调方法 */
	private rollOverCallback;
	/**大图标 */
	private bigNode: Node;
	private rollerLaunchResult: RollerLaunchResult;
	private sendBetTime = 0;

	/**是否加速 */
	private isSpeed = false;
	private singleRollerStatus: SingleRollerStatus = SingleRollerStatus.CLEAN;

	private cleanAllIconOverCallback;
	private props_shandian_iconSk: sp.Skeleton;

	/**待播放动画的图标 */
	private waitPlayAnimationIcon: number[] = [];

	private isWaitAddIcon = false;

	protected propertyNode = {
		props_icon_list: new Node(),
		props_big_icon: new Node(),
		props_number: new Node(),
		props_shandian_icon: new Node(),
	}

	public props: IProps = {
		gameTypeInfo: {
			lastGameType: GameType.MAIN,
			currGameType: GameType.MAIN,
			viewGameType: GameType.MAIN,
			leftCount: 0
		},
		positionId: 0,
		gameModeType: null,
	}

	public events: IEvent = {
		onCheckNextLeftCount: () => { }
	}

	protected initState() {
		return {}
	}

	public initSlot(columnIndex: number, iconPool: IconPool) {
		this.iconPool = iconPool;
		this.columnIndex = columnIndex;
		this.setIconRollerQueue();
		this.lastIndex = Math.floor(Math.random() * this.iconRollerQueue.length);

		this.initColumn(this.showIconCount);
	}

	private setIconRollerQueue() {
		if (this.columnIndex === -1) {
			return;
		}

		if (this.props.gameModeType === GameModeType.buyToWin && this.isMainGame()) {
			this.iconRollerQueue = config.rateIconRollerQueue[this.columnIndex]
		} else {
			this.iconRollerQueue = config.iconRollerQueue[this.columnIndex]
		}
	}

	private initColumn(iconCount: number) {
		for (let i = 0; i < iconCount; i++) {
			this.joinIcon();
		}
	}

	private isSubGame1() {
		return this.props.gameTypeInfo.viewGameType === GameType.SUBGAME1;
	}

	private isMainGame() {
		return this.props.gameTypeInfo.viewGameType === GameType.MAIN;
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

		// 初始化时不加入倍率图标
		if ((iconConfig.id >= IconId.ODDS_ICON_GREEN && iconConfig.id <= IconId.ODDS_ICON_RED) || iconConfig.id === IconId.SCATTER) {
			return this.joinIcon();
		}

		const icon = this.iconPool.getIcon(iconConfig, this.propertyNode.props_icon_list, this.lastIndex);
		const position = new Vec3(0, this.getRollerPaddingBottom() + icon.getHeight() / 2);
		position.y -= this.getIconContainerAnchorPos();
		if (length > 0) {
			const lastNode = this.iconArr[length - 1];
			position.y = lastNode.getPosition().y + lastNode.getHeight() + this.getIntervalHeight();
		}

		icon.getNode().setPosition(position);
		this.iconArr.push(icon);

		// this.setBeetleAmount(icon);
	}

	/**创建新的图标 */
	private newIcon() {
		this.lastIndex = this.lastIndex + 1 >= this.iconRollerQueue.length ? 0 : ++this.lastIndex;
		const iconId = this.iconRollerQueue[this.lastIndex];
		const iconConfig = config.icon.find(v => v.id === iconId);

		const icon = this.iconPool.getIcon(iconConfig, this.propertyNode.props_icon_list, this.lastIndex);
		icon.setWidth(this.getSingleRollerWidth());
		const position = this.geticonBirthPos();

		icon.getNode().setPosition(position);
		return icon
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
		this.props_shandian_iconSk.setCompleteListener(() => {
			this.scheduleOnce(() => {
				this.props_shandian_iconSk.node.active = false;
				this.props_shandian_iconSk.clearTracks();
			})
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (this.node && this.node.isValid) {
			if (key === 'gameTypeInfo') {
				this.changeRollerHeight(this.props.gameTypeInfo.viewGameType);
			} else if (key === 'gameModeType') {
				this.setIconRollerQueue();
			}
		}
	}

	/**隐藏图标中奖效果 */
	private hideIconWin() {
		this.resetFaceAnimationNodeOrOdds();
		this.bigNode && this.bigNode.destroy();
		this.bigNode = null;
		this.propertyNode.props_big_icon.removeAllChildren();
	}

	public startRoll(isSpeed, done) {
		this.cleanAllIconOverCallback = done;
		this.singleRollerStatus = SingleRollerStatus.CLEAN

		this.setIconRollerQueue();

		this.unscheduleAllCallbacks();
		this.waitPlayAnimationIcon = [];
		this.hideIconWin();
		this.hideScatterAnimation();
		this.stopIconIndex = -1;
		this.isSpeed = isSpeed;
		this.isRoll = true;

		this.clearAllIconHandle(1);
	}

	public stopRoll(stopIconIndex: number, rollOverCallback: Function, isSpeedBorder: boolean, rollerLaunchResult: RollerLaunchResult) {
		this.rollOverCallback = rollOverCallback;
		this.rollerLaunchResult = rollerLaunchResult;
		this.sendBetTime = cacheData.sendBetTime;
		this.subLastJoinIconIndex(stopIconIndex, 1);
		this.stopIconIndex = stopIconIndex;

		// console.log("roller stop time " + this.sendBetTime, "singleRollerStatus", this.singleRollerStatus);
		if (this.singleRollerStatus === SingleRollerStatus.WAIT) {
			this.fillIconData();
			this.addIconHandle();
		} else {
			this.isWaitAddIcon = true;
		}
	}

	/**清理所有图标处理 */
	private clearAllIconHandle(type) {
		// console.log(`clearAllIconHandle start columnIndex:${this.columnIndex} singleRollerStatus:${this.singleRollerStatus}`)
		this.clearAllIcon(!this.isSpeed, () => {
			// console.log(`clearAllIconHandle  end columnIndex:${this.columnIndex} singleRollerStatus:${this.singleRollerStatus} type:${type}`)
			this.singleRollerStatus = SingleRollerStatus.WAIT;

			this.cleanAllIconOverCallback && this.cleanAllIconOverCallback()
			this.cleanAllIconOverCallback = null;
		})
	}

	private addIconHandle() {
		this.addIcon(() => {
			this.rollOverHandle(this.rollerLaunchResult);
		})
	}

	/**消除后补充图标 */
	public clearAfterFillIconHandle(done) {
		this.fillIconData();

		this.addIcon(() => {
			done && done();
			thorv2_Audio.playOneShot(SoundPathDefine.SINGLE_ICON_FALL)
		});
	}

	/**填充图标数据，未掉落到插槽 */
	private fillIconData() {
		const emptyStartIndex = this.getFirstEmptyIconIndex();

		// 计算从空图标位置之后有几个非空图标
		let notEmptyCount = 0;
		for (let i = emptyStartIndex + 1; i < this.iconArr.length; i++) {
			const element = this.iconArr[i];
			if (element) {
				notEmptyCount++;
			}
		}

		// console.log(`fillIconData columnIndex:${this.columnIndex}, emptyStartIndex:${emptyStartIndex}, notEmptyCount:${notEmptyCount}`)

		const addIconCount = this.showIconCount - this.getFirstEmptyIconIndex()
		if (addIconCount > notEmptyCount) {
			for (let i = 0; i < addIconCount - notEmptyCount; i++) {
				this.addNewIcon();
			}
		}
	}

	private getOdds(index: number, id: number, rollerLaunchResult: RollerLaunchResult) {
		if (!rollerLaunchResult) {
			return '';
		}

		const rates = rollerLaunchResult.dl.si[0].otherGameAttributesVo.rates;
		for (let i = 0; i < rates.length; i++) {
			const v = rates[i];
			const itemId = v[2];
			if (this.columnIndex === v[0] && itemId === id) {
				const odds = v[3] + 'X';
				return odds;
			}
		}

		return '';
	}

	/**加速 */
	public speed() {
		if (this.isSpeed) {
			return;
		}

		// console.log(`speed ===========================`)
		this.isSpeed = true;
		if (this.singleRollerStatus === SingleRollerStatus.CLEAN) {
			this.clearAllIconHandle(2);
		} else if (this.singleRollerStatus === SingleRollerStatus.ADD) {
			this.addIconHandle();
		}
	}

	private subLastJoinIconIndex(stopIndex: number, value: number) {
		if (stopIndex < 0) {
			return;
		}
		let newValue = stopIndex - value;
		if (newValue < 0) {
			newValue = this.iconRollerQueue.length + newValue;
		}
		this.lastIndex = newValue;
	}

	protected bindUI(): void {
		this.props_shandian_iconSk = this.propertyNode.props_shandian_icon.getComponent(sp.Skeleton);
	}

	/**是否中奖图标 */
	private isWinIcon(index: number, rollerLaunchResult: RollerLaunchResult, iconId: IconId = undefined) {
		const wp = rollerLaunchResult.dl.si[0].winningPosition
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

	/**是否有中奖图标wild */
	public isWinWild() {
		if (this.rollerLaunchResult) {
			for (let i = 0; i < this.showIconCount; i++) {
				if (this.isWinIcon(i, this.rollerLaunchResult, IconId.WILD)) {
					return true;
				}
			}
		}
		return false;
	}

	private buildSkeleton(parentNode: Node, pos: Vec3, iconCount: number) {
		// const fileName = iconCount === 2 ? PrefabPathDefine.TWO_ICON : PrefabPathDefine.THREE_ICON;
		// this.bigNode = instantiate(sourceManageSeletor().getFile(fileName).source);
		// this.bigNode.name = "bigNode-" + iconCount;
		// parentNode.addChild(this.bigNode);
		// this.bigNode.setWorldPosition(pos);

		// this.bigNode.setScale(new Vec3(1, this.getBigNodeScaleY(iconCount)))
	}

	/**还原倍率图标和scatter图标 */
	public resetFaceAnimationNodeOrOdds() {
		this.iconArr.filter(v => v).forEach(v => v.resetFaceAnimationNodeOrOdds());
	}

	private hideScatterAnimation() {
		// this.iconArr.filter(v => v.getId() === IconId.SCATTER).forEach(v => v.hideWin());
	}

	/**消除图标 */
	public clearIcon(indexs: number[], roundIndex: number, done) {
		const timeScale = this.isSpeed ? config.iconTimeScaleSpeed : config.iconTimeScaleCommon;
		if (this.node.isValid) {
			let count = 0;
			let skeletonOverCount = 0;
			indexs.forEach(index => {
				const icon = this.iconArr[index];
				icon.setSkeletonOverCallback(() => {
					skeletonOverCount++;
					if (skeletonOverCount >= indexs.length) {
						this.playWinSound(roundIndex);
					}
				})
				icon.playWin(this.propertyNode.props_big_icon, roundIndex, timeScale, true, false, () => {
					this.iconArr[index] = null;
					count++;
					if (count >= indexs.length) {
						done && done();
					}
				})
			})
		}
	}

	private playWinSound(roundIndex: number) {
		let soundStr = SoundPathDefine.WIN1;
		if (roundIndex === 0) {
			soundStr = SoundPathDefine.WIN1;
		} else if (roundIndex === 1) {
			soundStr = SoundPathDefine.WIN2;
		} else if (roundIndex === 2) {
			soundStr = SoundPathDefine.WIN3;
		} else if (roundIndex === 3) {
			soundStr = SoundPathDefine.WIN4;
		} else if (roundIndex === 4) {
			soundStr = SoundPathDefine.WIN5;
		} else if (roundIndex === 5) {
			soundStr = SoundPathDefine.WIN6;
		} else if (roundIndex === 6) {
			soundStr = SoundPathDefine.WIN7;
		} else if (roundIndex === 7) {
			soundStr = SoundPathDefine.WIN8;
		} else if (roundIndex === 8) {
			soundStr = SoundPathDefine.WIN9;
		} else if (roundIndex === 9) {
			soundStr = SoundPathDefine.WIN10;
		}
		thorv2_Audio.playOneShot(soundStr)
	}

	/**播放scatter的动画，然后进入小游戏弹窗 */
	public playScatterAnimation(done) {
		const scatterIcons: ThorV2Icon[] = [];
		for (let i = 0; i < this.showIconCount; i++) {
			const icon = this.iconArr[i];
			if (icon && icon.isScatterIcon()) {
				scatterIcons.push(icon);
			}
		}
		if (scatterIcons.length === 0) {
			done && done();
			return;
		}
		const timeScale = this.isSpeed ? config.iconTimeScaleSpeed : config.iconTimeScaleCommon;
		let count = 0;
		scatterIcons.forEach(icon => {
			icon.playWin(this.propertyNode.props_big_icon, 0, timeScale, false, false, () => {
				count++;
				if (count >= scatterIcons.length) {
					done && done();
				}
			})
		})
	}

	private rollOverHandle(rollerLaunchResult: RollerLaunchResult) {
		// console.log("roller over handle stop time " + this.sendBetTime, this.columnIndex);
		this.isRoll = false;
		this.stopIconIndex = -1;

		// if (this.isSpeed) {
		// 	thorv2_Audio.playOneShot(SoundPathDefine.QUICK_STOP)
		// } else {
		// 	thorv2_Audio.playOneShot(SoundPathDefine.DROP_BOTTOM)
		// }

		// 滚动停止之后需要延迟的时间
		const time = 0.05;
		this.events.onCheckNextLeftCount();
		// const time = 0.05;
		this.scheduleOnce(() => {
			this.node.isValid && this.rollOverCallback();
		}, time)

	}

	private getIconDropTime() {
		return config.normalRollOption.iconDropTime;
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

		if (index >= this.showIconCount) {
			y += 20;
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
		let rollerWidth = config.normalRollOption.rollerWidth;
		if (gameType === GameType.SUBGAME1) {
			rollerHeight = config.subGameRollOption.rollerHeight;
			rollerWidth = config.subGameRollOption.rollerWidth;
		}

		if (this.columnIndex === 0) {
			rollerWidth = config.normalRollOption.rollerWidth0;
		} else if (this.columnIndex === 5) {
			rollerWidth = config.normalRollOption.rollerWidth5;
		}
		const uiTransform = this.propertyNode.props_icon_list.getComponent(UITransform);
		uiTransform.height = rollerHeight;
		uiTransform.width = rollerWidth;
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

	/**清空所有图标 */
	private clearAllIcon(isDelay: boolean, done) {
		this.unscheduleAllCallbacks();
		Tween.stopAllByTag(TWEEN_ICON_TAG);
		const columnDelayTime = isDelay ? this.columnIndex * 0.01 : 0;
		let count = 0;
		this.scheduleOnce(() => {
			const icons = this.iconArr.filter(v => v);
			this.iconArr.forEach((v, i) => {
				if (v) {
					this.dropIcon(i, v, i, -1, () => {
						this.iconArr[i] = null;
						count++;
						if (count >= icons.length) {
							done && done();
						}
					}, isDelay)
				}
			})
		}, columnDelayTime)
	}

	private addIcon(done) {
		const isDelay = !this.isSpeed;
		let startIndex = this.getFirstEmptyIconIndex();
		if (startIndex === -1) {
			done && done();
			return;
		}

		this.unscheduleAllCallbacks();
		Tween.stopAllByTag(TWEEN_ICON_TAG);

		// 需要填充的索引
		const fillIndexs = [];
		const fillIcons = [];

		for (let i = startIndex; i < this.showIconCount; i++) {
			fillIndexs.push(i);

			for (let j = startIndex + 1; j < this.iconArr.length; j++) {
				const element = this.iconArr[j];
				if (element && !fillIcons.find(v => v.index === j)) {
					fillIcons.push({
						icon: element,
						index: j
					})
					break;
				}
			}
		}

		const time = isDelay ? this.columnIndex * 0.05 : 0;
		let count = 0;

		/**所有动画播放结束之后的处理 */
		const executeOver = () => {
			count++;
			if (count >= fillIndexs.length) {
				done && done();
			}
		}

		this.scheduleOnce(() => {
			fillIndexs.forEach((fillIndex, i) => {
				const nextIndex = fillIndex;
				const { icon, index } = fillIcons[i];

				const iconObj = icon as ThorV2Icon;

				if (iconObj.isOddsIcon()) {
					const oddsValue = this.getOdds(nextIndex, iconObj.getId(), this.rollerLaunchResult);
					if (oddsValue) {
						iconObj.setOddsIcon(oddsValue);
					}
					thorv2_Audio.playOneShot(SoundPathDefine.WILD_SHOW);
				}

				// console.log(`addIcon index:${index} nextIndex:${nextIndex}`);
				this.dropIcon(i, iconObj, index, nextIndex, () => {
					this.iconArr[index] = null;
					this.iconArr[nextIndex] = iconObj;
					iconObj.setIconIndex(nextIndex);
					if (this.deleteWaitPlayAnimationIcon(iconObj.getId())) {
						if (iconObj.isScatterIcon()) {
							thorv2_Audio.playOneShot(SoundPathDefine.SCATTER_SHOW)
						}

						iconObj.playWin(this.propertyNode.props_big_icon, 0, 1, false, false);
						iconObj.playLabelRate(this.propertyNode.props_number);
						this.scheduleOnce(() => {
							executeOver();
						}, 0.2)
					} else {
						executeOver();
					}
				}, isDelay);
			});
		}, time)
	}

	private deleteWaitPlayAnimationIcon(id: number) {
		for (let i = 0; i < this.waitPlayAnimationIcon.length; i++) {
			const element = this.waitPlayAnimationIcon[i];
			if (element === id) {
				this.waitPlayAnimationIcon.splice(i, 1);
				return true;
			}
		}
		return false;
	}

	private addNewIcon() {
		let index = -1;
		const newIcon = this.newIcon();
		for (let i = this.showIconCount; i < this.iconArr.length; i++) {
			const element = this.iconArr[i];
			if (!element) {
				this.iconArr[i] = newIcon;
				index = i;
				break;
			}
		}
		if (index === -1) {
			this.iconArr.push(newIcon);
			index = this.iconArr.length - 1;
		}
		newIcon.setPosition(this.getIconPosByIndex(index));
		if (newIcon.isOddsIcon()) {
			this.dispatch(playThorAnimation({
				time: Date.now(),
				timeScale: this.isSpeed ? config.iconTimeScaleSpeed : config.iconTimeScaleCommon
			}));

			this.waitPlayAnimationIcon.push(newIcon.getId())
		} else if (newIcon.isScatterIcon()) {
			this.waitPlayAnimationIcon.push(newIcon.getId())
		}
		return { icon: newIcon, index };
	}

	/**获得第一个空图标位置 */
	private getFirstEmptyIconIndex() {
		for (let i = 0; i < this.showIconCount; i++) {
			if (!this.iconArr[i]) {
				return i;
			}
		}
		return -1;
	}

	/**
	 * 掉落图标
	 * @param icon 
	 * @param curIndex 图标当前位置
	 * @param nextindex -1表示直接隐藏图标
	 * @param done 
	 * @param isDelay 
	 */
	private dropIcon(orderIndex: number, icon: ThorV2Icon, curIndex: number, nextindex: number, done, isDelay: boolean = false) {
		const rowDelayTime = orderIndex * 0.02;
		const delayTime = isDelay ? this.columnIndex * 0.1 + rowDelayTime : 0;
		const pos = nextindex === -1 ? this.getIconHidePos(icon.getPosition()) : this.getIconPosByIndex(nextindex);

		const dropTime = this.getIconDropTime()
		if (icon.isOddsIcon() && nextindex >= 0) {
			this.playLightning(pos, icon, delayTime + dropTime);
		}

		let opts: ITweenOption = undefined;
		if (nextindex >= 0) {
			// opts = {
			// 	easing: 'backOut',
			// }
		}

		const tw = tween(icon.getNode()).tag(TWEEN_ICON_TAG).delay(delayTime).to(dropTime, { position: new Vec3(pos.x, pos.y) }, opts)

		if (nextindex >= 0) {
			// tw.to(0.08, { position: new Vec3(pos.x, pos.y + 8, 1) }, { easing: 'sineOut' }) // 初次回弹向上
			// tw.to(0.05, { position: new Vec3(pos.x, pos.y, 1) }, { easing: 'sineIn' }) // 最终回到原位
			tw.to(0.05, { position: new Vec3(pos.x, pos.y - 25, 1) }, { easing: 'sineOut' }) // 初次回弹向上
			tw.to(0.05, { position: new Vec3(pos.x, pos.y, 1) }, { easing: 'sineIn' }) // 最终回到原位
		}

		tw.call(() => {
			if (nextindex === -1) {
				icon.restore();
			}
			done && done();
			// console.log(`dropIcon icon:${icon.getId()} curIndex:${curIndex} nextindex:${nextindex},pos:${pos}`);
		}).start();
	}

	/**出生位置 */
	private geticonBirthPos() {
		let y = this.getIconContainerAnchorPos() + config.normalRollOption.singleRollerHeight;
		let pos = new Vec3();
		pos.y += y;
		return pos
	}

	/**所有图标隐藏的位置 */
	private getIconHidePos(startPos: Vec3) {
		// let y = this.getIconContainerAnchorPos() + config.normalRollOption.singleRollerHeight;
		const iconListUI = this.propertyNode.props_icon_list.getComponent(UITransform)
		let pos = new Vec3(startPos.x, startPos.y);
		pos.y -= iconListUI.height;
		return pos
	}

	/**播放数字 */
	public playAmount(indexs: number[], amount: number) {
		// console.log(`playAmount columnIndex:${this.columnIndex}, indexs ${indexs} amount:${amount}`)
		let startIndex = 0;
		const middleIndex = Math.floor(this.showIconCount / 2);

		const indexsTemp = indexs.map(v => v + '');

		for (let i = 0; i < this.showIconCount; i++) {
			const leftIndex = middleIndex - startIndex;
			const rightIndex = middleIndex + startIndex;
			if (leftIndex < 0 || rightIndex >= this.showIconCount) {
				break;
			}

			if (indexsTemp.find(v => v === leftIndex + '')) {
				this.iconArr[leftIndex].playAmount(this.propertyNode.props_number, amount);
				break;
			}

			if (indexsTemp.find(v => v === rightIndex + '')) {
				this.iconArr[rightIndex].playAmount(this.propertyNode.props_number, amount);
				break;
			}
			startIndex++;
		}
	}

	/**获得中间位置排序 */
	public getMiddleOrder(indexs: number[]) {
		if (indexs.length === 0) {
			return 99;
		}
		const middleColumnIndex = config.columnCount % 2 === 0 ? (config.columnCount - 1) / 2 : config.columnCount / 2;
		let order = Math.abs(middleColumnIndex - this.columnIndex) * 5;

		let startIndex = 0;
		const middleIndex = Math.floor(this.showIconCount / 2);
		const indexsTemp = indexs.map(v => v + '');

		for (let i = 0; i < this.showIconCount; i++) {
			const leftIndex = middleIndex - startIndex;
			const rightIndex = middleIndex + startIndex;

			if (indexsTemp.find(v => v === leftIndex + '')) {
				order += startIndex;
				break;
			}

			if (indexsTemp.find(v => v === rightIndex + '')) {
				order += startIndex;
				break;
			}
			startIndex++;
		}
		// console.log(`playAmount columnIndex:${this.columnIndex}, indexs ${indexs} order:${order}, middleColumnIndex:${middleColumnIndex}`)
		return order;
	}

	public isIconType(index: number, iconId: number) {
		return this.iconArr[index].getId() === iconId;
	}

	/**播放闪电 */
	public playLightning(endPos: Vec3, icon: ThorV2Icon, time: number) {
		if (icon.isLightningIcon()) {
			return;
		}
		let an = "sd_red";
		if (icon.getId() === IconId.ODDS_ICON_BLUE) {
			an = 'sd_blue';
		} else if (icon.getId() === IconId.ODDS_ICON_GREEN) {
			an = 'sd_green';
		} else if (icon.getId() === IconId.ODDS_ICON_PURPLE) {
			an = 'sd_purple';
		} else if (icon.getId() === IconId.ODDS_ICON_RED) {
			an = 'sd_red';
		}
		time += config.normalRollOption.lightningDetryShowTime;

		icon.setPlayLightning(true)
		this.scheduleOnce(() => {
			// this.props_shandian_iconSk.node.active = true;
			// this.props_shandian_iconSk.node.setPosition(endPos);
			// this.props_shandian_iconSk.setAnimation(0, an, false);

			this.playLightningAnimation(an, endPos);
		}, time)
	}

	private playLightningAnimation(an: string, endPos: Vec3) {
		const topNode = mainViewModel.comp.getTopNode();

		this.props_shandian_iconSk.node.active = true;
		this.props_shandian_iconSk.node.removeAllChildren();

		topNode.addChild(this.props_shandian_iconSk.node);

		const worldPos = this.toWorldSpaceAR(this.propertyNode.props_icon_list, endPos);
		endPos = this.toNodeSpaceAR(topNode, worldPos);

		this.props_shandian_iconSk.node.setPosition(endPos);
		this.props_shandian_iconSk.setAnimation(0, an, false);
	}


	private toNodeSpaceAR(parent: Node, pos) {
		return parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(pos.x, pos.y));
	}
	private toWorldSpaceAR(parent: Node, pos) {
		return parent.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(pos.x, pos.y));
	}

	/**播放倍率节点 */
	public playOddsAnimation(done) {
		let totalCount = 0;
		for (let i = 0; i < this.showIconCount; i++) {
			if (this.iconArr[i].isOddsIcon()) {
				totalCount++;
			}
		}

		if (totalCount === 0) {
			done && done();
			return;
		}
		let count = 0;
		for (let i = 0; i < this.showIconCount; i++) {
			const element = this.iconArr[i];
			if (element.isOddsIcon()) {
				element.playOddsIcon(this.propertyNode.props_big_icon, () => {
					count++;
					if (count >= totalCount) {
						done && done();
					}
				})
			}
		}
	}

	/**获得所有的倍率节点 */
	public getOddsLabelNodes() {
		const labelNodes: ThorV2Icon[] = [];
		for (let i = 0; i < this.showIconCount; i++) {
			if (this.iconArr[i].isOddsIcon()) {
				labelNodes.push(this.iconArr[i]);
			}
		}
		return labelNodes;
	}

	public playLabelAnimation(parentNode: Node, endPos: Vec3, done) {
		const labelNodes = this.getOddsLabelNodes();
		if (labelNodes.length === 0) {
			done && done();
			return;
		}
	}

	private getSingleRollerWidth() {
		return this.props.gameTypeInfo.viewGameType === GameType.MAIN ?
			config.normalRollOption.singleRollerWidth : config.subGameRollOption.singleRollerWidth;
	}

	protected onDestroy(): void {
		this.isRoll = false;
		this.isWaitAddIcon = false;
	}

	update(deltaTime: number) {
		if (this.isWaitAddIcon && this.singleRollerStatus === SingleRollerStatus.WAIT) {
			this.isWaitAddIcon = false;
			this.fillIconData();
			this.addIconHandle();
		}
	}
}

