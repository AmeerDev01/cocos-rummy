import { _decorator, instantiate, Node, sp, tween, UITransform, Vec2, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { IconPool } from '../IconPool';
import config from '../config';
import { DragonV2Icon } from './DragonV2Icon';
import { GameType, GameTypeInfo, getColumnLockIconArr, IconId, RollerInfo, RollerStatus } from '../type';
import { Dragonv2_Audio, sourceManageSeletor } from '../index';
import { SkeletalPathDefine } from '../sourceDefine/skeletalDefine';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { cacheData } from '../dataTransfer';
import { getNodeByNameDeep } from '../../../utils/tool';
import { DragonV2_SingleIconRoller } from './DragonV2_SingleIconRoller';
import DragonV2SingleIconRollerViewModel from '../viewModel/DragonV2SingleIconRollerViewModel';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
	gameTypeInfo: GameTypeInfo,
}
export interface IEvent {
	onCheckNextLeftCount: () => void
}
@ccclass('DragonV2_Roller')
export class DragonV2_Roller extends BaseComponent<IState, IProps, IEvent> {
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
	private iconArr: DragonV2Icon[] = [];
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
	private lockIcons: DragonV2Icon[] = [];
	/**单个图标的滚动 */
	private singleIconRollerViewModels: DragonV2SingleIconRollerViewModel[] = [];

	/**滚动次数 */
	private rollerCount = -1;

	/**大图标 */
	private bigNode: Node;

	protected propertyNode = {
		props_icon_list: new Node(),
		props_big_icon: new Node(),
		props_pyrosphere: new Node(),
	}
	public props: IProps = {
		// rollerInfo: undefined,
		// rollerStatus: RollerStatus.END,
		gameTypeInfo: {
			lastGameType: GameType.NONE,
			viewGameType: GameType.NONE,
			currGameType: GameType.NONE,
			leftCount: 0,
		},
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
			icon.amountNode.active = false;
			icon.changeIcon(false)
		}
		this.setBeetleAmount(icon);
	}

	public hidePyrosphere(state: 1 | 2 | 3) {  // 1隐藏火圈 2显示火圈 3移除火圈
		if (state == 1) {
			this.propertyNode.props_pyrosphere.active = false
		}
		else if (state == 2) {
			this.propertyNode.props_pyrosphere.active = true
		}
		else {
			this.propertyNode.props_pyrosphere.removeAllChildren()
		}
	}
	removeDuplicatesByIndex(data: number[][]): number[][] {
		const seen: Set<number> = new Set();
		const uniqueData: number[][] = [];

		for (const array of data) {
			const indexValue = array[1];

			if (!seen.has(indexValue)) {
				seen.add(indexValue);
				uniqueData.push(array);
			}
		}

		return uniqueData;
	}

	public joinringOfFireIcon(key) { // 加入新火圈
		this.propertyNode.props_pyrosphere.active = true;
		this.joinToStartMoving(key);
	}
	public thePresenceOrAbsenceOfARingOfFire(key, callbak) { // 检测是否火圈是否存在
		let children = this.propertyNode.props_pyrosphere.children;
		if (children.length > 0) {
			let arr = children.filter((item: any) => item.key === key[1])
			if (arr.length > 0) {
				callbak(true)
			} else {
				callbak(false)
			}
		} else {
			callbak(false)
		}

	}
	private joinToStartMoving(key) {
		let node = instantiate(sourceManageSeletor().getFile(PrefabPathDefine.PYROSPHERE).source)
		node.key = key[1]
		this.nodeMOve(node, (key[1] * config.normalRollOption.singleRollerHeight + config.normalRollOption.singleRollerHeight), false)
		this.propertyNode.props_pyrosphere.addChild(node)
	}
	renderTheRingOfFire(callBack) { // 有老火圈先移动老火
		let children = this.propertyNode.props_pyrosphere.children
		if (children.length > 0) {
			children.forEach((item: any) => {
				item.key = item.key - 1
				item.getChildByName('wlid').active = false
				item.getChildByName('moveRingOfFire').active = true
				let ty=item.key < 0? -300 :(item.key * config.normalRollOption.singleRollerHeight + config.normalRollOption.singleRollerHeight)
				this.nodeMOve(item, ty, item.key < 0)
			})
		}
		this.scheduleOnce(() => {
			callBack()
		}, 0.5)
	}
	/* 火圈移动*/
	private nodeMOve(item: Node, targetY, isDestroy = false) {
		let duration = 0.3
		Dragonv2_Audio.playOneShot(SoundPathDefine.fallBall)
		tween(item).to(duration, { position: new Vec3(item.position.x, targetY, item.position.z) })
			.to(0.08, { position: new Vec3(item.position.x, targetY + 8, item.position.z) }, { easing: 'sineOut' }) // 初次回弹向上
			.to(0.05, { position: new Vec3(item.position.x, targetY, item.position.z) }, { easing: 'sineIn' }) // 最终回到原位
			.call(() => {
				if (isDestroy) {
					item.destroy()
				}
			})
			.start();
	}
	/**
	 * 设置宝盒上面的数字
	 */
	private setBeetleAmount(icon: DragonV2Icon) {
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
		if (key === 'gameTypeInfo') {
			if (this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2 && this.singleIconRollerViewModels.length === 0) {
				this.replaceSingleRollerIcon();
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
		this.hideIconWin();
		this.hideScatterAnimation();
		this.rollerCount = -1;
		this.isMergeIcon = false;
		this.isSpeedBorder = false;
		this.isRoll = true;
		Dragonv2_Audio.playOneShot(SoundPathDefine.fast_roller)
		if (this.isSubGame2()) {
			this.singleIconRollerViewModels.forEach(v => v.comp.startRoll());
		}
	}

	public stopRoll(stopIconIndex: number, rollOverCallback: Function, isSpeedBorder: boolean = false) {
		this.isSpeedBorder = isSpeedBorder;
		this.stopIconIndex = stopIconIndex;
		this.rollOverCallback = rollOverCallback;
		this.rollerCount = 0;
		if (!this.isSubGame2()) {
			isSpeedBorder && this.setSpeedBorderStatus(true);
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
	private isWinIcon(index: number) {
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

	private setSpeedBorderStatus(show: boolean) {
		this.speddBorderNode.active = show;
		if (show) {
			this.speddBorderNode.setWorldPosition(new Vec3(this.node.worldPosition.x, this.node.worldPosition.y));
			Dragonv2_Audio.playOneShot(SoundPathDefine.fast_roller)
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
		if (icon.getId() !== IconId.WILD) {
			if (this.propertyNode.props_pyrosphere.children.length > 0) {
				this.propertyNode.props_pyrosphere.children.forEach((item: any) => {
					if (item.key == index) {
						item.getChildByName('moveRingOfFire').active = false
						item.getChildByName('wlid').active = true
					} else {
						item.getChildByName('moveRingOfFire').active = true
						item.getChildByName('wlid').active = false
					}
				})
			}
			icon.playWin(this.propertyNode.props_big_icon)
		}
	}
	/**播放宝盒动画 */
	public playBaoHeAnimation(done) {
		let count = 0;
		const beetleArr = this.iconArr.filter((v, index) => v.getId() === IconId.BEETLE && index < this.showIconCount)
		if (beetleArr.length === 0) {
			done && done();
			return;
		}
		beetleArr.forEach(v => {
			if (this.isSubGame2()) {
				v.playGame2BaoHeAnimation(() => {
					count++;
					if (count >= beetleArr.length) {
						done && done();
					}
				})

			} else {
				v.playBaoHeAnimation(() => {
					count++;
					if (count >= beetleArr.length) {
						done && done();
					}
				})
			}
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
			const freeGame = cacheData.rollerLaunchResult.dl.si[0].freegame;
			if(freeGame){
				const isLoop = Object.keys(freeGame).length > 0 ? true : false;
				if (element.getId() === IconId.SCATTER) {
					element.faceAnimationNode.scale = new Vec3(0.9, 0.9);
					element.playWin(this.propertyNode.props_big_icon, false, isLoop);
				}
			}
		}
	}

	private rollOverHandle() {
		this.isRoll = false;
		this.stopIconIndex = -1;
		this.isSpeedBorder && this.setSpeedBorderStatus(false);
		// this.mergeIcon(this.propertyNode.props_big_icon, rollerLaunchResult);
		this.playOneScatterAnimation();
		// 滚动结束时，只有在小游戏2才立马添加锁定图标
		this.isSubGame2() && this.addLockIcon();
		Dragonv2_Audio.playOneShot(SoundPathDefine.shell_end)
		// 滚动停止之后需要延迟的时间
		const time = this.isSubGame2() ? 1.5 : 0.05;
		// const time = 0.05;
		this.events.onCheckNextLeftCount();
		this.scheduleOnce(() => {
			this.node.isValid && this.rollOverCallback();
		}, time)

	}

	/**添加锁定图标 */
	private addLockIcon() {
		const lockValues = getColumnLockIconArr(cacheData.fixedChessboardIcon, this.columnIndex)

		lockValues.forEach(v => {
			let DragonV2Icon = this.lockIcons.find(iconv => iconv.getIconIndex() === v.index)
			if (!DragonV2Icon) {
				const iconConfig = config.icon.find(icon => icon.id === v.iconId)
				DragonV2Icon = this.iconPool.getIcon(iconConfig, this.propertyNode.props_icon_list, v.index);
				DragonV2Icon.setAmount(v.amount);

				const replaceIcon = this.iconArr[v.index];
				DragonV2Icon.setPosition(replaceIcon.getPosition())
				if (iconConfig.id === 12) {
					DragonV2Icon.amountNode.active = true;
				}
				replaceIcon.restore();
				this.iconArr[v.index] = DragonV2Icon;
				let pot = DragonV2Icon.getPosition()
				DragonV2Icon.setPosition(new Vec3(pot.x + 15, pot.y))
				this.lockIcons.push(DragonV2Icon)
				this.removeSingleRollerIcon(v.index);
				DragonV2Icon.changeIcon(true)
				DragonV2Icon.playBaoHeAnimation(() => {
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
		// this.lockIcons.forEach(v => v.borderNode2.active = false)
		this.lockIcons.forEach(v => v.destory());
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
		console.log('替换滚动图标');
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
	private buildSingleRollerIcon(index: number, pos: Vec3, icon: DragonV2Icon) {
		const viewModel = new DragonV2SingleIconRollerViewModel()
			.mountView(sourceManageSeletor().getFile(PrefabPathDefine.SINGLE_ICON_ROLLER).source)
			.appendTo(this.propertyNode.props_icon_list);
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
		console.log(this.iconArr,this.columnIndex);
		
		const ParticleNodes: Node[] = [];
		for (let i = 0; i < this.showIconCount; i++) {
			const element = this.iconArr[i];
			
			if (this.isSubGame2SpecialIcon(element.getId())) {
				const amountNode = element.getAmountNode();
				amountNode && ParticleNodes.push(amountNode);
				//  const ParticleNode = element.getParticleNode();
				// console.log(ParticleNode,'sssssss');
				// ParticleNode && ParticleNodes.push(ParticleNode);
			}
		}
		console.log("ParticleNodes",ParticleNodes);
		return ParticleNodes;
	}


	update(deltaTime: number) {
		if (this.isRoll && this.iconArr.length > 0) {
			if (this.isMultiRoll()) {
				this.multiIconRoller();
			}
		}
	}
}

