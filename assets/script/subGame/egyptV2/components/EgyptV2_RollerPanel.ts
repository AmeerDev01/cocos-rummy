import { _decorator, instantiate, Layout, Node, tween, UITransform, Vec2, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { IconPool } from '../IconPool';
import config from '../config';
import EgyptV2RollerViewModel from '../viewModel/EgyptV2RollerViewModel';
import { AutoLauncherInfo, DialogType, GameType, GameTypeInfo, getBigWinConfig, IconId, isAuto, isSubGameToSubGame, RollerLaunchResult, RollerStatus } from '../type';
import { updateRollerStatus } from '../store/actions/roller';
import { cacheData } from '../dataTransfer';
import { changeGame, updateGold, updateSubGameAnimationPlayInfo, updateWinloss } from '../store/actions/game';
import { egyptv2_Audio, mainViewModel, sourceManageSeletor } from '../index';
import game from '../store/reducer/game';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { EgyptV2Icon } from './EgyptV2_Icon';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	/**滚动状态 */
	rollerStatus: RollerStatus,
	/**是否加速 */
	isSpeed: boolean,
	/** 自动运行信息 */
	autoLauncherInfo: AutoLauncherInfo,
	/**游戏类型信息 */
	gameTypeInfo: GameTypeInfo,
	/**总输赢 */
	winloss: number,
}
export interface IEvent {

}

@ccclass('EgyptV2_RollerPanel')
export class EgyptV2_RollerPanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	private rollerViewModelArr: EgyptV2RollerViewModel[] = [];
	private iconPool: IconPool = new IconPool(config.icon);
	private isManualStop: boolean = false;
	private inStop = false;

	private isWaitEnding = false;

	private sendBetTime = 0;

	protected propertyNode = {
		props_column_list: new Node(),
		props_roller_column: new Node(),
		props_column_effect: new Node(),
	}

	public props: IProps = {
		/**滚动状态 */
		rollerStatus: RollerStatus.END,
		isSpeed: false,
		autoLauncherInfo: null,
		gameTypeInfo: {
			lastGameType: GameType.MAIN,
			currGameType: GameType.MAIN,
			viewGameType: GameType.MAIN,
			leftCount: 0
		},
		winloss: 0,
	}

	public events: IEvent = {

	}

	protected initState() {
		return {}
	}

	private initRoller() {
		for (let i = 0; i < config.columnCount; i++) {
			const column = instantiate(this.propertyNode.props_roller_column);
			const roller = new EgyptV2RollerViewModel().mountViewNode(column).appendTo(this.propertyNode.props_column_list).connect();
			this.rollerViewModelArr.push(roller);
			roller.comp.setColumnEffectNode(this.propertyNode.props_column_effect);
			roller.setEvent({
				onCheckNextLeftCount: () => {
					this.checkNextLeftCount()
				},
			})
		}
	}

	public initSlot() {
		this.rollerViewModelArr.forEach((v, index) => {
			v.comp.initSlot(index, this.iconPool);
		})
	}

	private startRoll() {
		let sendBetTime = cacheData.sendBetTime;
		this.sendBetTime = sendBetTime;
		this.isManualStop = false;
		console.log("start roll time " + sendBetTime)
		const isMainGame = this.props.gameTypeInfo.viewGameType === GameType.MAIN;
		if (isMainGame) {
			this.dispatch(updateWinloss(0))
		}
		this.unscheduleAllCallbacks();
		this.rollerViewModelArr.forEach((v, index) => {
			v.comp.startRoll()
		});

		this.endRoll(sendBetTime);
	}

	private endRoll(sendBetTime: number) {
		// 前期滚动的事件
		const rollTime = this.getIsSpeed() ? 0.1 : 1;

		this.scheduleOnce(() => {
			// console.log("endRoll scheduleOnce " + sendBetTime + " currentTime " + new Date().getTime());
			if (!cacheData.rollerLaunchResult) {
				this.isWaitEnding = true;
			} else {
				this.node.isValid && this.stopRollAll(false, sendBetTime, cacheData.rollerLaunchResult);
			}
		}, rollTime)
	}

	private stopRollAll(isManualStop: boolean = false, sendBetTime: number, rollerLaunchResult: RollerLaunchResult) {
		if (this.inStop) {
			return;
		}
		this.unscheduleAllCallbacks();
		this.inStop = true;
		this.isManualStop = isManualStop;

		if (RollerStatus.RUNNING === this.props.rollerStatus) {
			this.dispatch(updateRollerStatus(RollerStatus.ENDING))
		}

		console.log("rollerpanel stop roll time " + sendBetTime);
		this.stopRoll(0, this.rollEndHandle.bind(this, rollerLaunchResult), rollerLaunchResult);
	}

	/**
	 * 动画滚动结束处理
	 */
	private rollEndHandle(rollerLaunchResult: RollerLaunchResult) {
		const magnification = rollerLaunchResult.dl.si[0].magnification;
		const bigWinConfig = getBigWinConfig(magnification)
		// 是否小游戏最后一局
		const isSubGameLastPoint = !this.isMain() && this.props.gameTypeInfo.leftCount <= 1;

		this.inStop = false;
		const auto = isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo);
		const winLine = this.startPlayWinIcon(config.normalRollOption.winIconFlickerTime, () => {
		}, rollerLaunchResult);

		// 最开始就看是否有太阳神图标
		this.playBeeteFlyAmountToSunGod(() => {
			if (winLine === 0) {
				this.playBigWinHandle(bigWinConfig, auto, isSubGameLastPoint, rollerLaunchResult);
			} else {
				this.playWinAudio();
				// 中奖之后延迟一点结束
				this.scheduleOnce(() => {
					this.playBigWinHandle(bigWinConfig, auto, isSubGameLastPoint, rollerLaunchResult);
				}, 1)
			}
		})

		if (!bigWinConfig) {
			this.updateWinloss(rollerLaunchResult);
		}
	}

	private checkNextLeftCount() {
		const nextLeftCount = this.props.gameTypeInfo.nextLeftCount;
		// 在转动结束之后如果发现下一局的剩余局数有值，就变更一次
		if (this.isSubGame2() && nextLeftCount >= 0) {
			this.dispatch(changeGame({
				...this.props.gameTypeInfo,
				leftCount: nextLeftCount,
				nextLeftCount: undefined
			}))
		}
	}

	private playWinAudio() {
		if (this.isWinWild()) {
			egyptv2_Audio.playOneShot(SoundPathDefine.wild)
		} else {
			egyptv2_Audio.playOneShot(SoundPathDefine.haveCoin)
		}
	}

	private updateWinloss(rollerLaunchResult: RollerLaunchResult) {
		const si = rollerLaunchResult.dl.si[0];
		// 本局输赢
		const roundTw = si.tw
		if (this.isMain()) {
			if (roundTw <= 0) {
				return;
			}

			// 在切到小游戏2时，输赢金额不更新，因为中奖的金额在加到小游戏里
			if (!this.isChangeGame() || this.props.gameTypeInfo.currGameType !== GameType.SUBGAME2) {
				this.dispatch(updateWinloss(roundTw))
				// 小游戏要在结算时更新余额
				this.dispatch(updateGold(si.bl))
			}
		} else {
			// 小游戏1在游戏中余额之后在切换到主游戏时才加上去
			if (this.isSubGame1()) {
				this.dispatch(updateWinloss(si.freeGameAmount))
			}

			if (this.isChangeGame()) {
				this.dispatch(updateGold(si.bl))
				this.dispatch(updateWinloss(si.freeGameAmount))
			}

		}
	}

	/**播放大奖处理 */
	private playBigWinHandle(bigWinConfig, auto: boolean, isSubGameLastPoint: boolean, rollerLaunchResult: RollerLaunchResult) {

		// 是否进入小游戏2
		// let isEnterSubGame2 = this.props.gameTypeInfo.viewGameType !== GameType.SUBGAME2 && this.props.gameTypeInfo.currGameType === GameType.SUBGAME2;
		let isEnterSubGame2 = false;
		// 进入小游戏2时不播放大奖
		if (!isEnterSubGame2 && bigWinConfig) {
			// 延迟一点点播放大奖
			this.scheduleOnce(() => {
				!this.isSubGame2() && this.updateWinloss(rollerLaunchResult);
				const si = rollerLaunchResult.dl.si[0];
				let winloss = si.tw;
				winloss = winloss === 0 ? si.freeGameAmount : winloss;
				const isChangeGame = this.isChangeGame();
				if (isChangeGame && si.freeGameAmount > 0) {
					winloss = si.freeGameAmount;
				}

				// 中大奖提示框
				this.node.isValid && mainViewModel.showDialogWin({
					dialogType: bigWinConfig.name,
					params: [winloss],
				}, () => {
					this.updateRollerStatusEnd(bigWinConfig, auto, isSubGameLastPoint, rollerLaunchResult);
				})
			}, 0.8)
		} else {
			this.updateRollerStatusEnd(bigWinConfig, auto, isSubGameLastPoint, rollerLaunchResult);
		}
	}

	/**
	 * 更新结束滚动状态
	 * @param bigWinConfig 大奖配置
	 * @param auto 
	 * @param isSubGameLastPoint 是否小游戏最后一局
	 */
	private updateRollerStatusEnd(bigWinConfig, auto: boolean, isSubGameLastPoint: boolean, rollerLaunchResult: RollerLaunchResult) {
		const isChangeGame = this.isChangeGame();
		if (isChangeGame) {
			if (this.props.gameTypeInfo.currGameType === GameType.SUBGAME2) {
				egyptv2_Audio.playOneShot(SoundPathDefine.ling, 1, false)
				this.playBeetleAnimation(isSubGameLastPoint, rollerLaunchResult);
			} else {
				if (this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2) {
					this.playBeeteFlyAmount(() => {
						this.updateWinloss(rollerLaunchResult);
						// 飞完之后间隔1秒再继续
						this.scheduleOnce(() => {
							this.changeGameHandle(isSubGameLastPoint, rollerLaunchResult);
						}, 1)
					})
				} else {
					if (this.props.gameTypeInfo.currGameType === GameType.SUBGAME1) {
						egyptv2_Audio.playOneShot(SoundPathDefine.ling, 1, false)
					}

					this.changeGameHandle(isSubGameLastPoint, rollerLaunchResult);
				}
			}
		} else {
			this.dispatch(updateRollerStatus(RollerStatus.END))
		}
	}

	/**播放甲壳虫动画，播放完成之后进去切换游戏 */
	private playBeetleAnimation(isSubGameLastPoint: boolean, rollerLaunchResult: RollerLaunchResult) {
		let count = 0;
		this.rollerViewModelArr.forEach(v => {
			v.comp.playBeetleAnimation(() => {
				count++;
				if (count >= this.rollerViewModelArr.length) {
					this.changeGameHandle(isSubGameLastPoint, rollerLaunchResult);
				}
			})
		})
	}

	/**播放甲壳虫的飞数字动画 */
	private playBeeteFlyAmount(done) {
		let nodes: EgyptV2Icon[] = [];
		this.rollerViewModelArr.forEach(v => {
			nodes = nodes.concat(v.comp.getBeetleNode(true));
		})

		const endPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(mainViewModel.getGoodLuckPos());

		let count = 0;
		nodes.forEach(v => {
			const startPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(v.getAmountNode().getWorldPosition());
			const cloneNode = instantiate(v.getAmountNode())
			this.node.parent.addChild(cloneNode);
			cloneNode.setPosition(startPos)
			tween(cloneNode).to(config.subGameRollOption.beetleFlyTime, { position: endPos }).call(() => {
				cloneNode.destroy();
				count++;
				if (count >= nodes.length) {
					done && done();
				}
			}).start()
			this.playParticle2D(startPos, endPos, this.node.parent);
		})
	}

	/**飞数字到太阳神图标上 */
	private playBeeteFlyAmountToSunGod(done) {
		if (!this.isSubGame2()) {
			done && done();
			return;
		}
		let sunGodIcons: EgyptV2Icon[] = this.getWinSunGodIconNode();
		if (sunGodIcons.length === 0) {
			done && done();
			return;
		}

		this.eachSunGodIcon(0, sunGodIcons, done);
	}

	/**遍历太阳神图标 */
	private eachSunGodIcon(index: number, sunGodIcons: EgyptV2Icon[], done) {
		const sunGodIcon = sunGodIcons[index];

		let nodes: EgyptV2Icon[] = [];
		this.rollerViewModelArr.forEach(v => {
			nodes = nodes.concat(v.comp.getBeetleNode(true));
		})

		// 按照行的顺序排序，从上往下
		nodes.sort((a, b) => b.getIconIndex() - a.getIconIndex());

		const endPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(sunGodIcon.getNode().worldPosition);
		this.playAmountToSunGodCourse(nodes, sunGodIcon, 0, config.subGameRollOption.beetleFlyTime, endPos, () => {
			index++;
			if (index >= sunGodIcons.length) {
				done && done();
			} else {
				this.eachSunGodIcon(index, sunGodIcons, done);
			}
		});
	}

	/**
	 * 获得中奖的太阳神图标
	 * @returns 
	 */
	private getWinSunGodIconNode() {
		const sunGodIcons: EgyptV2Icon[] = [];
		for (let i = 0; i < this.rollerViewModelArr.length; i++) {
			const element = this.rollerViewModelArr[i];
			if (element.comp.getSunGodIconNode()) {
				sunGodIcons.push(element.comp.getSunGodIconNode());
			}
		}
		return sunGodIcons;
	}

	/**飞向太阳神图标的过程处理 */
	private playAmountToSunGodCourse(nodes: EgyptV2Icon[], sunGoldIcon: EgyptV2Icon, index: number, beetleFlyTime: number, endPos: Vec3, done) {
		const egyptV2Icon = nodes[index];
		const startPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(egyptV2Icon.getAmountNode().getWorldPosition());
		const cloneNode = instantiate(egyptV2Icon.getAmountNode())

		this.node.parent.addChild(cloneNode);
		cloneNode.setPosition(startPos)
		// 播放音效
		egyptv2_Audio.playOneShot(SoundPathDefine.sunGodNum)
		tween(cloneNode).to(beetleFlyTime, { position: endPos }).call(() => {
			cloneNode.destroy();
			sunGoldIcon.setAmount(sunGoldIcon.getAmount() + egyptV2Icon.getAmount());
			index++;
			if (index >= nodes.length) {
				done && done();
			} else {
				this.playAmountToSunGodCourse(nodes, sunGoldIcon, index, beetleFlyTime, endPos, done);
			}
		}).start()
		this.playParticle2D(startPos, endPos, this.node.parent);
	}

	private playParticle2D(startPos: Vec3, endPos: Vec3, parentNode: Node) {
		const particleNode = instantiate(sourceManageSeletor().getFile(PrefabPathDefine.Particle2D).source) as Node
		particleNode.setPosition(startPos);
		parentNode.addChild(particleNode);
		tween(particleNode).to(config.subGameRollOption.beetleFlyTime, { position: endPos }).removeSelf().start();
	}

	private changeGameHandle(isSubGameLastPoint: boolean, rollerLaunchResult: RollerLaunchResult) {
		this.updateWinloss(rollerLaunchResult);
		if (this.isSubGame(this.props.gameTypeInfo.currGameType)) {
			this.changeToSubGame(this.props.gameTypeInfo.currGameType, isSubGameLastPoint, rollerLaunchResult);
		} else if (this.props.gameTypeInfo.currGameType === GameType.MAIN) {
			this.changeToMainGame(this.props.gameTypeInfo.viewGameType, rollerLaunchResult)
		}
	}

	/**
	 * 切换到小游戏处理
	 * @param currGameType 当前游戏
	 * @param viewGameCountOver 当前小游戏次数是否结束
	 * @param nextGameType 下一个游戏
	 */
	private changeToSubGame(currGameType: GameType, viewGameCountOver: boolean, rollerLaunchResult: RollerLaunchResult) {
		if (viewGameCountOver) {
			this.changeSubGameToSubGame(currGameType, rollerLaunchResult);
		} else {
			// 如果是免费游戏，要接着弹出的免费次数框
			mainViewModel.showDialogWin({
				dialogType: DialogType.FREE_GAME_ENTRY,
				params: [rollerLaunchResult.dl.si[0].freeCount],
			}, () => {
				// this.dispatch(updateRollerStatus(RollerStatus.END))
				// 播放切换游戏动画
				this.dispatch(updateSubGameAnimationPlayInfo({
					gameType: currGameType,
					param: 0 //开门类型
				}))
			})
		}

	}

	/**切换到主游戏的处理 */
	private changeToMainGame(gameType: GameType, rollerLaunchResult: RollerLaunchResult) {
		if (this.isSubGame(gameType)) {
			// 弹出结算面板
			mainViewModel.showDialogWin({
				dialogType: DialogType.FREE_GAME_SETTLEMENT,
				params: [rollerLaunchResult.dl.si[0].freeGameAmount],
			}, () => {
				// 在切换回主游戏时，改变滚轴的高度
				// 这里要注意：小游戏退回到大厅有一个放大缩小的过程，如果把 changeRollerHeight 放到放大后执行，获取的坐标是不准确的
				this.changeRollerHeight(GameType.MAIN);
				// 播放切换游戏动画
				this.dispatch(updateSubGameAnimationPlayInfo({
					gameType: gameType,
					param: 1 // 关门动画
				}))
				// this.changeRollerHeight(GameType.MAIN);

				// 在开始切回主游戏时，就要把插槽的位置重置，等到gameTypeInfo数据变化时已经晚了，会看到坐标不正确
				this.changeGame(GameType.MAIN);
			})
		}
	}

	/**切换小游戏到小游戏，弹出结算面板 */
	private changeSubGameToSubGame(gameType: GameType, rollerLaunchResult: RollerLaunchResult) {
		// 弹出结算面板
		mainViewModel.showDialogWin({
			dialogType: DialogType.FREE_GAME_SETTLEMENT,
			params: [rollerLaunchResult.dl.si[0].freeGameAmount],
		}, () => {
			// 播放切换游戏动画
			this.dispatch(updateSubGameAnimationPlayInfo({
				gameType: gameType,
				param: 1 // 关门动画
			}))
			// 只有在切回到小游戏1时，才改变滚轴的高度
			gameType === GameType.SUBGAME1 && this.changeRollerHeight(gameType);
			// 在开始切回主游戏时，就要把插槽的位置重置，等到gameTypeInfo数据变化时已经晚了，会看到坐标不正确
			this.changeGame(gameType);
		})
	}

	/**是否准备切换游戏 */
	private isChangeGame() {
		if (!this.props.gameTypeInfo) {
			return false;
		}

		if (isSubGameToSubGame(this.props.gameTypeInfo.viewGameType, this.props.gameTypeInfo.currGameType)) {
			return true;
		}

		return this.props.gameTypeInfo.viewGameType !== this.props.gameTypeInfo.currGameType;
	}

	private isMain() {
		return this.props.gameTypeInfo.viewGameType === GameType.MAIN;
	}

	private isSubGame(gameType: GameType) {
		return gameType === GameType.SUBGAME1 || gameType === GameType.SUBGAME2
	}

	private getIsSpeed() {
		if (this.isSubGame2()) {
			return false;
		}
		if (this.isManualStop) {
			return true;
		}
		return this.props.isSpeed;
	}

	private stopRoll(i: number, callBack: (rollerLaunchResult: RollerLaunchResult) => void, rollerLaunchResult: RollerLaunchResult) {
		// 这里调停止滚动的速度
		const time = this.getIsSpeed() ? 0 : 0.2;
		const isEnd = i >= this.rollerViewModelArr.length - 1;
		const rollerComp = this.rollerViewModelArr[i];
		// const stopIconIndex = Math.floor(Math.random() * config.iconRollerQueue[i].length);
		// 获得停下来的数据
		const stopIconIndex = rollerLaunchResult.dl.si[0].rollerId[i];

		const scatterCount = this.getScatterCount(i, rollerLaunchResult);
		// 下一个列是否有边框
		const nextColmunIsBorder = this.getScatterCount(i + 1, rollerLaunchResult) >= 2;

		// console.log("scatterCount", scatterCount, i, stopIconIndex);
		// 是否快速边框，前面出现2个以上的scatter，这个参数才为true
		const isSpeedBorder = scatterCount >= 2;
		rollerComp.comp.stopRoll(stopIconIndex, () => {
			if (this.node.isValid) {
				if (isEnd) {
					callBack(rollerLaunchResult)
				} else {
					nextColmunIsBorder && this.stopRoll(i + 1, callBack, rollerLaunchResult)
				}
			}
		}, isSpeedBorder, rollerLaunchResult)
		// 小游戏2滚轴一起停
		if (this.isSubGame2()) {
			if (!isEnd) {
				this.stopRoll(i + 1, callBack, rollerLaunchResult)
			}
		} else {
			// console.log("stoproll time ", i, time)
			!nextColmunIsBorder && this.scheduleOnce(() => {
				if (this.node.isValid) {
					if (!isEnd) {
						this.stopRoll(i + 1, callBack, rollerLaunchResult)
					}
				}
			}, time)
		}
	}

	private isSubGame2() {
		return this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2;
	}
	private isSubGame1() {
		return this.props.gameTypeInfo.viewGameType === GameType.SUBGAME1;
	}

	/**获得前面几列的scatter个数 */
	private getScatterCount(endColumnIndex: number, rollerLaunchResult: RollerLaunchResult) {
		// 前两列不计算数量或者小游戏2也不计算
		if (endColumnIndex < 2 || this.isSubGame2()) {
			return 0;
		}
		endColumnIndex = endColumnIndex >= this.rollerViewModelArr.length ? this.rollerViewModelArr.length : endColumnIndex;
		const rollerId = rollerLaunchResult.dl.si[0].rollerId;
		let scatter = 0;
		for (let i = 0; i < endColumnIndex; i++) {
			let iconIndex = rollerId[i] as number;
			const queue = config.iconRollerQueue[i]
			for (let i = 0; i < config.normalRollOption.showIconCount; i++) {
				if (queue[iconIndex] === IconId.SCATTER) {
					scatter++;
					break;
				}
				if (++iconIndex >= queue.length) {
					iconIndex = 0;
				}
			}
		}
		return scatter;
	}

	/**
	 * 显示中奖图标
	 * @param linePlayTime 
	 * @param done 所有线路播放完之后执行
	 */
	private startPlayWinIcon(linePlayTime: number, done, rollerLaunchResult: RollerLaunchResult) {
		let winLine = 0;
		if (rollerLaunchResult) {
			const wp = rollerLaunchResult.dl.si[0].wp
			const lines: any[] = [];
			for (const key in wp) {
				lines.push(key);
			}

			winLine = lines.length;

			if (lines.length > 0) {
				this.executeWinIcon(-1, lines, wp, linePlayTime, done);
			} else {
				done();
			}
		}
		return winLine;
	}

	/**
	 * 播放赢的图标
	 * @param index 线的索引
	 * @param lines 中奖线的数组
	 * @param wp 中间对象
	 * @param linePlayTime 播放一条线的时间
	 * @param done
	 * @returns 
	 */
	private executeWinIcon(index: number, lines: any[], wp, linePlayTime: number, done) {
		if (!cacheData.rollerLaunchResult) {
			return;
		}
		if (index >= lines.length) {
			index = -1;
			done && done();
		}
		const lineNumber = lines[index];
		let winIconArr = [];
		if (index === -1) {
			linePlayTime = 2;
			for (const key in wp) {
				winIconArr = winIconArr.concat(wp[key])
			}
		} else {
			winIconArr = winIconArr.concat(wp[lineNumber])
			// 一条线中了几个图标就播放多少秒
			linePlayTime = winIconArr.length;
		}
		this.rollerViewModelArr.forEach(v => v.comp.pauseWinIcon())
		winIconArr.forEach(v => {
			const columnIndex = v[0];
			const iconIndex = v[1];
			this.rollerViewModelArr[columnIndex].comp.playWinIcon(iconIndex);
		})

		this.scheduleOnce(() => {
			this.executeWinIcon(++index, lines, wp, linePlayTime, done);
		}, linePlayTime);
	}


	protected bindEvent(): void {
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (this.node && this.node.isValid) {
			if (key === 'rollerStatus') {
				if (RollerStatus.RUNNING === value.cur) {
					this.startRoll();
				} else if (RollerStatus.ENDING === value.cur) {
					this.stopRollAll(true, this.sendBetTime, cacheData.rollerLaunchResult);
				}
			} else if (key === 'gameTypeInfo') {
				this.changeGame(this.props.gameTypeInfo.viewGameType);
			}
		}
	}

	private changeGame(gameType: GameType) {
		const columnListLayout = this.propertyNode.props_column_list.getComponent(Layout);
		const isSubGame2 = gameType === GameType.SUBGAME2;
		const isSubGame1 = gameType === GameType.SUBGAME1;
		const isMain = gameType === GameType.MAIN;
		if (isMain || isSubGame2) {
			this.node.position = new Vec3(config.normalRollOption.rollerWindowX, config.normalRollOption.rollerWindowY);
			columnListLayout.spacingX = config.normalRollOption.columnInterval;
		} else {
			this.node.position = new Vec3(config.subGameRollOption.rollerWindowX, config.subGameRollOption.rollerWindowY);
			columnListLayout.spacingX = config.subGameRollOption.columnInterval;

			this.changeRollerHeight(gameType);
		}

		if (isMain || isSubGame1) {
			this.rollerViewModelArr.forEach(v => v.comp.replaceMultiRollerIcon());
		}
	}

	/**改变滚轴的高度 */
	private changeRollerHeight(gameType: GameType) {
		let rollerHeight = config.normalRollOption.rollerHeight
		if (gameType === GameType.SUBGAME2) {
			rollerHeight = config.subGameRollOption.rollerHeight2;
		} else if (gameType === GameType.SUBGAME1) {
			rollerHeight = config.subGameRollOption.rollerHeight1;
		}
		this.node.getComponent(UITransform).height = rollerHeight;

		this.rollerViewModelArr.forEach(v => v.comp.resetIconPos(gameType));
	}

	public isWinWild() {
		for (let i = 0; i < this.rollerViewModelArr.length; i++) {
			const element = this.rollerViewModelArr[i];
			if (element.comp.isWinWild()) {
				return true;
			}
		}
		return false;
	}

	protected bindUI(): void {
		this.propertyNode.props_column_list.removeAllChildren();

		this.initRoller();
	}

	update(deltaTime: number) {
		if (this.isWaitEnding && cacheData.rollerLaunchResult) {
			this.isWaitEnding = false;
			this.node.isValid && this.stopRollAll(false, this.sendBetTime, cacheData.rollerLaunchResult);
		}
	}
}

