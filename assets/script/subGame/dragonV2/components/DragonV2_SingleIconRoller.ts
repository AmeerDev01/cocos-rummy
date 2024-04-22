import { _decorator, instantiate, Mask, Node, sp, tween, UITransform, Vec2, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { IconPool } from '../IconPool';
import config from '../config';
import { DragonV2Icon } from './DragonV2Icon';
import { GameType, GameTypeInfo, getColumnLockIconArr, IconId, LockIcon, RollerInfo, RollerStatus } from '../type';
import { sourceManageSeletor } from '../index';
import { SkeletalPathDefine } from '../sourceDefine/skeletalDefine';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { cacheData } from '../dataTransfer';
import { getNodeByNameDeep } from '../../../utils/tool';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	gameTypeInfo: GameTypeInfo,
}
export interface IEvent {

}

@ccclass('DragonV2_SingleIconRoller')
export class DragonV2_SingleIconRoller extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	/**当前最后添加的图标索引位置 */
	private lastIndex = 0;
	/**显示图标数量 */
	private showIconCount = 1;
	/**停止图标索引 */
	private stopIconIndex = -1;
	/**列的索引 */
	private columnIndex = 0;
	/**插槽索引 */
	private slotIndex = 0;
	/**图标池 */
	private iconPool: IconPool;
	/**图标轮播队列 */
	private iconRollerQueue: any[]
	/**滚轴上的图标，包含看不见的 */
	private iconArr: DragonV2Icon[] = [];
	/**图标间隔 */
	private intervalHeight = config.normalRollOption.intervalHeight;

	/**滚动结束回调方法 */
	private rollOverCallback;
	/**列特效层 */
	private props_column_effect_node: Node;
	/**图标动画层节点 */
	private iconAnimationNode: Node;

	private isRoll = false;
	private rollCount = 0;
	private rollerSpeed = config.subGameRollOption.rollerSpeed;

	protected propertyNode = {
		props_icon_list: new Node(),
	}

	public props: IProps = {
		gameTypeInfo: {
			lastGameType: GameType.NONE,
			viewGameType: GameType.NONE,
			currGameType: GameType.NONE,
			leftCount: 0,
		},
	}

	public events: IEvent = {

	}

	protected initState() {
		return {}
	}

	public setColumnEffectNode(props_column_effect_node: Node) {
		this.props_column_effect_node = props_column_effect_node;
		this.iconAnimationNode = this.props_column_effect_node.getChildByName("props_icon_animation")
	}

	public initSlot(columnIndex: number, slotIndex: number, lastIndex: number, iconPool: IconPool) {
		this.columnIndex = columnIndex;
		this.iconRollerQueue = config.iconRollerQueue[this.columnIndex]
		this.slotIndex = slotIndex;
		this.lastIndex = this.addIconIndex(lastIndex, 1);
		this.iconPool = iconPool;

		this.initColumn(this.showIconCount + 1);
	}

	public getSlotIndex() {
		return this.slotIndex;
	}

	private initColumn(iconCount: number) {
		for (let i = 0; i < iconCount; i++) {
			this.joinIcon();
		}
	}

	private joinIcon() {
		const length = this.iconArr.length
		this.lastIndex = this.lastIndex - 1 < 0 ? this.iconRollerQueue.length - 1 : --this.lastIndex;
		const iconId = this.iconRollerQueue[this.lastIndex];
		const iconConfig = config.icon.find(v => v.id === iconId);

		const icon = this.iconPool.getIcon(iconConfig, this.propertyNode.props_icon_list, this.lastIndex);
		const position = new Vec3(0, 0);
		if (iconConfig.id === 12) {
			icon.amountNode.active = true;
			icon.changeIcon(true)
		}
		if (length > 0) {
			const lastNode = this.iconArr[length - 1];
			position.y = lastNode.getPosition().y + lastNode.getHeight() + this.intervalHeight;
		}
		icon.getNode().setPosition(position);
		this.iconArr.push(icon);
		this.setBeetleAmount(icon);
	}

	/**
	 * 设置甲壳虫上面的数字
	 */
	private setBeetleAmount(icon: DragonV2Icon) {
		if (icon.getId() !== IconId.BEETLE) {
			return;
		}

		if (this.props.gameTypeInfo.currGameType !== GameType.SUBGAME2 && this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2) {
			return;
		}
		const diff = this.calIndexDiff(this.lastIndex, this.stopIconIndex);
		if (diff > 1) {
			return;
		}

		const lockIconDatas = getColumnLockIconArr(cacheData.fixedChessboardIcon, this.columnIndex)
		if (lockIconDatas.length === 0) {
			return;
		}
		const lockIconData = lockIconDatas.find(v => v.index === this.slotIndex)
		if (lockIconData) {
			icon.setAmount(lockIconData.amount)
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
	}

	/**隐藏图标中奖效果 */
	private hideIconWin() {
		this.stopWinIcon();
		this.iconAnimationNode.children.forEach(v => {
			v.name === 'bigNode' && v.destroy();
		})
		this.iconAnimationNode.removeAllChildren();
	}

	public startRoll() {
		this.isRoll = true;
		this.rollCount = 0;
		this.rollerSpeed = config.subGameRollOption.rollerSpeed;
	}

	public stopRoll(stopIconIndex: number, rollOverCallback: Function) {
		this.stopIconIndex = stopIconIndex;
		this.rollOverCallback = rollOverCallback;

		const diff = this.slotIndex === 2 ? 0 : this.slotIndex === 0 ? 2 : 1;
		this.stopIconIndex = this.addIconIndex(this.stopIconIndex, diff);
		this.addLastJoinIconIndex(this.stopIconIndex, 3);

	}

	private addLastJoinIconIndex(stopIndex: number, value: number) {
		this.lastIndex = this.addIconIndex(stopIndex, value);
	}

	private addIconIndex(index: number, value: number) {
		let newValue = index + value;
		if (newValue >= this.iconRollerQueue.length) {
			newValue = newValue - this.iconRollerQueue.length;
		}
		return newValue;
	}

	private getStopIconIndex() {
		return this.stopIconIndex;
	}

	protected bindUI(): void {
	}

	/**获得滚动速度 */
	private getRollSpeed() {
		if (this.rollCount <= 30 || this.stopIconIndex === -1) {
			// this.rollCount >= 60 && this.addLastJoinIconIndex(this.stopIconIndex, 1)
			return this.rollerSpeed;
		}
		let rollerSpeed = this.rollerSpeed;
		if (this.rollCount % 5 === 0) {
			rollerSpeed -= 5;
			rollerSpeed = rollerSpeed <= 0 ? 1 : rollerSpeed;
			this.rollerSpeed = rollerSpeed;
		}
		// console.log(`columnIndex:${this.columnIndex},slotIndex:${this.slotIndex},rollCount:${this.rollCount},lastIndex:${this.lastIndex},stopIconIndex:${this.stopIconIndex},rollerSpeed:${rollerSpeed}`);

		return rollerSpeed;
	}

	/**停止赢的图标闪烁 */
	public stopWinIcon() {
		this.iconArr.forEach(v => v.hideWin());
	}

	/**播放中奖图标动画 */
	public playWinIcon(index) {
		const icon = this.iconArr[index];
		
		// 如果是WILD图标，并且合并了图标，就不在显示边框了
		if (icon.getId() !== IconId.WILD) {
			icon.playWin(this.iconAnimationNode)
		}
	}

	private rollOverHandle(endIcon: DragonV2Icon) {
		this.scheduleOnce(() => {
			this.node.isValid && this.rollOverCallback();
		}, 0.05)
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

	/**获得第一个图标 */
	public getFirstIcon() {
		return this.iconArr.shift();
	}

	public rollerIcon() {
		this.rollCount++;
		const speed = this.getRollSpeed();
		this.iconArr.forEach(v => {
			v.setPosition(new Vec3(v.getPosition().x, v.getPosition().y - speed));
		})
		const frist = this.iconArr[0];
		const hideY = -(frist.getHeight() + this.intervalHeight)
		// console.log(`columnIndex:${this.columnIndex},slotIndex:${this.slotIndex},lastIndex:${this.lastIndex},stopIconIndex:${this.stopIconIndex},y:${frist.getPosition().y},hideY:${hideY}`);
		if (frist.getPosition().y <= hideY) {
			this.iconArr.shift()
			frist.restore();
			this.joinIcon();

			const endIcon = this.iconArr[0]
			if (endIcon.getIconIndex() === this.getStopIconIndex()) {
				this.isRoll = false;
				this.stopIconIndex = -1;
				this.rollOverHandle(endIcon);
			}
		}
	}
	protected onDestroy(): void {
		this.iconArr.forEach(v => v.restore());
		this.iconArr = [];
		this.iconRollerQueue = null;
		this.props_column_effect_node = null;
		this.iconAnimationNode = null;
	}
	update(deltaTime: number) {
		if (this.isRoll) {
			this.rollerIcon();
		}
	}
}

