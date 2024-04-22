import { _decorator, instantiate, Layout, log, Node, tween, UITransform, Vec2, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { IconPool } from '../IconPool';
import config from '../config';
import DragonV2RollerViewModel from '../viewModel/DragonV2RollerViewModel';
import { AutoLauncherInfo, DialogType, GameType, GameTypeInfo, IconId, isAuto, isSubGameToSubGame, RollerStatus } from '../type';
import { updateRollerStatus } from '../store/actions/roller';
import { cacheData } from '../dataTransfer';
import { changeGame, updateGold, updateSubGameAnimationPlayInfo, updateWinloss } from '../store/actions/game';
import { Dragonv2_Audio, mainViewModel } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
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

@ccclass('DragonV2_RollerPanel')
export class DragonV2_RollerPanel extends BaseComponent<IState, IProps, IEvent> {
	start() {
	}
	private rollerViewModelArr: DragonV2RollerViewModel[] = [];
	private iconPool: IconPool = new IconPool(config.icon);
	private isManualStop: boolean = false;
	private inStop = false;

	private isWaitEnding = false;

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
			lastGameType: GameType.NONE,
			currGameType: GameType.NONE,
			viewGameType: GameType.NONE,
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
			const roller = new DragonV2RollerViewModel().mountViewNode(column).appendTo(this.propertyNode.props_column_list).connect();
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
	private startRoll() {
		const isMainGame = this.props.gameTypeInfo.viewGameType === GameType.MAIN;
		if (isMainGame) {
			this.dispatch(updateWinloss(0))
		}
		this.unscheduleAllCallbacks();
		this.rollerViewModelArr.forEach((v, index) => {
			v.comp.startRoll()
		});
		this.endRoll();
	}

	private endRoll() {
		// 前期滚动的事件
		const rollTime = this.props.isSpeed ? 0.1 : 1;
		this.scheduleOnce(() => {
			if (!cacheData.rollerLaunchResult) {
				this.isWaitEnding = true;
			} else {
				this.node && this.node.isValid && this.stopRollAll();
			}
		}, rollTime)
	}

	private stopRollAll(isManualStop: boolean = false) {
		if (this.inStop) {
			return;
		}
		this.unscheduleAllCallbacks();
		this.inStop = true;
		this.isManualStop = isManualStop;
		if (RollerStatus.RUNNING === this.props.rollerStatus) {
			this.dispatch(updateRollerStatus(RollerStatus.ENDING))
		}
		this.stopRoll(0, this.rollEndHandle.bind(this));
	}
	/* 移除隐藏火圈 */
	hidePyrosphere(state) {
		this.rollerViewModelArr.forEach((v, index) => {
			v.comp.hidePyrosphere(state)
		});
	}
	/* 加入火圈 */
	public joinTheRingOfFire(key, callback?) {
		for (let i in key) {
			this.rollerViewModelArr.forEach((v, index) => {
				if (index == key[i][0]) {
					v.comp.thePresenceOrAbsenceOfARingOfFire(key[i], (res) => {
						if (!res) {
							v.comp.joinringOfFireIcon(key[i])
						}
					})
				}
			});
		}
		callback && callback()
	}
	/* 先移动老火圈 */
	public oldFireCircle() {
		this.rollerViewModelArr.forEach((v, index) => {
			v.comp.renderTheRingOfFire(() => { })
		})
	}
	public getDragonBalls() {
		return cacheData.rollerLaunchResult.dl.si[0].fixedChessboardIconAndAmount
	}
	/**
	 * 动画滚动结束处理
	 */
	private rollEndHandle() {
		const magnification = cacheData.rollerLaunchResult.dl.si[0].magnification;
		if (this.isSubGame2()) { //如果小游戏2刷新龙珠状态
			mainViewModel.showTheNumberOfDragonBalls(this.getDragonBalls().length)
		}
		const bigWinConfig = this.getBigWinConfig(magnification)
		// 是否小游戏最后一局
		const isSubGameLastPoint = this.props.gameTypeInfo.leftCount <= 1;
		this.inStop = false;
		const auto = isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo);
		this.scheduleOnce(() => {
			const winLine = this.startPlayWinIcon(config.normalRollOption.winIconFlickerTime, () => {
			});
			if (!auto || winLine === 0) {
				this.updateRollerStatusEnd(bigWinConfig, auto, isSubGameLastPoint);
			} else {
				// 中奖之后延迟一点结束
				this.scheduleOnce(() => {
					this.updateRollerStatusEnd(bigWinConfig, auto, isSubGameLastPoint);
				}, 1)
			}
		},0.8)


		if (!bigWinConfig) {
			this.updateWinloss();
		}
	}

	private updateWinloss() {
		const si = cacheData.rollerLaunchResult.dl.si[0]
		// 本局输赢
		const roundTw = si.tw
		if (this.isMain()) {
			if (roundTw <= 0) {
				return;
			}

			// 在切到小游戏2时，输赢金额不更新，因为中奖的金额在加到小游戏里
			if (!this.isChangeGame() || this.props.gameTypeInfo.currGameType !== GameType.SUBGAME2) {
				this.scheduleOnce(() => {
					this.dispatch(updateWinloss(roundTw))
					// 小游戏要在结算时更新余额
					this.dispatch(updateGold(si.bl))
				},0.8)
			} else {
				if (this.props.gameTypeInfo.currGameType === GameType.SUBGAME2) {
					if (roundTw > 0) {
						this.dispatch(updateWinloss(roundTw))
						this.dispatch(updateGold(si.bl))
					}
				}
			}
		} else {
			// 小游戏1在游戏中余额之后在切换到主游戏时才加上去
			if (this.isSubGame1()) {
				this.scheduleOnce(() => {
					this.dispatch(updateWinloss(si.freeGameAmount))
				},1)
			}
			if (this.isChangeGame()) {
				if (this.isSubGame2()) {
					this.dispatch(updateWinloss(roundTw))
				}
				this.dispatch(updateGold(si.bl))
				this.dispatch(updateWinloss(si.freeGameAmount))
			}

		}
	}

	/**
	 * 更新结束滚动状态
	 * @param bigWinConfig 大奖配置
	 * @param auto 
	 * @param isSubGameLastPoint 是否小游戏最后一局
	 */
	private updateRollerStatusEnd(bigWinConfig, auto: boolean, isSubGameLastPoint: boolean) {
		/// 是否进入小游戏2
		// let isEnterSubGame2 = this.props.gameTypeInfo.viewGameType !== GameType.SUBGAME2 && this.props.gameTypeInfo.currGameType === GameType.SUBGAME2;
		let isEnterSubGame2 = false;
		// 是否小游戏2，包含下一次游戏
		const isSubGame2 = this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2 || this.props.gameTypeInfo.currGameType === GameType.SUBGAME2;
		// 是否下一次小游戏2
		let isNextSubGame2 = this.props.gameTypeInfo.currGameType === GameType.SUBGAME2;
		const isChangeGame = this.isChangeGame();
		if (!isEnterSubGame2 && bigWinConfig) {
			// let time = this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2 && isSubGameLastPoint  ? config.subGameRollOption.beetleFlyTime * cacheData.fixedChessboardIcon.length : 1;
			if (this.props.gameTypeInfo.viewGameType !== GameType.SUBGAME1 && this.props.gameTypeInfo.currGameType === GameType.SUBGAME1) {
				Dragonv2_Audio.playOneShot(SoundPathDefine.ling)
			}
			// 大奖提示框消失后的回调
			const dialogCallback = () => {
				if (isChangeGame) {
					this.dispatch(updateWinloss(cacheData.rollerLaunchResult.dl.si[0].tw))
					if (this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2 && this.props.gameTypeInfo.currGameType !== GameType.SUBGAME2) {
						this.playBeeteFlyAmount(() => {
							// this.rollerViewModelArr.forEach((v, i) => {
							// 	v.comp.removeLockIcon()
							// })
							this.dispatch(updateWinloss(cacheData.rollerLaunchResult.dl.si[0].freeGameAmount))
							// this.changeGameHandle(isSubGameLastPoint);
							this.dispatch(updateGold(cacheData.rollerLaunchResult.dl.si[0].bl))
							// 如果是免费游戏，要接着弹出的免费次数框
							this.changeGameHandle(isSubGameLastPoint);
						})
					} else {
						if (this.props.gameTypeInfo.currGameType === GameType.SUBGAME1) {
							// godWealthV2_Audio.playOneShot(SoundPathDefine.LING)

						}
						// 如果是免费游戏，要接着弹出的免费次数框
						this.changeGameHandle(isSubGameLastPoint);
					}
				} else {
					this.dispatch(updateRollerStatus(RollerStatus.END))
				}

			}

			// 延迟一点点播放大奖
			this.scheduleOnce(() => {
				const si = cacheData.rollerLaunchResult.dl.si[0];
				const winloss = this.isSubGame2() && isSubGameLastPoint ? si.freeGameAmount : si.tw;
				// 中大奖提示框
				this.node && this.node.isValid && mainViewModel.showDialogWin({
					dialogType: bigWinConfig.name,
					params: [winloss],
				}, () => dialogCallback())

				this.updateWinloss();
			}, 1)

		} else {
			if (isChangeGame) {
				if (this.props.gameTypeInfo.currGameType === GameType.SUBGAME2) {
					Dragonv2_Audio.playOneShot(SoundPathDefine.ling)
					this.playBaoHeAnimation(isSubGameLastPoint);
				} else {
					if (this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2) {
						this.playBeeteFlyAmount(() => {
							// this.rollerViewModelArr.forEach((v, i) => {
							// 	v.comp.removeLockIcon()
							// })
							this.dispatch(updateWinloss(cacheData.rollerLaunchResult.dl.si[0].freeGameAmount))
							this.changeGameHandle(isSubGameLastPoint);
							this.dispatch(updateGold(cacheData.rollerLaunchResult.dl.si[0].bl))
						})
					} else {
						this.changeGameHandle(isSubGameLastPoint);
					}
				}
			} else {
				this.dispatch(updateRollerStatus(RollerStatus.END))
			}
		}
	}

	/**播放宝盒动画，播放完成之后进去切换游戏 */
	private playBaoHeAnimation(isSubGameLastPoint: boolean) {
		let count = 0;
		this.rollerViewModelArr.forEach(v => {
			v.comp.playBaoHeAnimation(() => {
				count++;
				if (count >= this.rollerViewModelArr.length) {
					this.changeGameHandle(isSubGameLastPoint);
				}
			})
		})
	}

	/**播放宝盒的飞数字动画 */
	private playBeeteFlyAmount(done) {
		let nodes: Node[] = [];
		let ParticleNodes: Node[] = [];
		this.rollerViewModelArr.forEach(v => {
			nodes = nodes.concat(v.comp.getBeetleAmountNode());
			ParticleNodes = ParticleNodes.concat(v.comp.getBaoHeParticleNode());
		})
		const endPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(mainViewModel.getGoodLuckPos());
		let count = 0;
		if (ParticleNodes.length > 0 && cacheData.fixedChessboardIcon.length > 0) {
			ParticleNodes.forEach((p, i) => {
				const startPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(p.getWorldPosition());
				const cloneNode = instantiate(p)
				cloneNode.active = true;
				this.node.parent.addChild(cloneNode);
				cloneNode.setPosition(startPos)
				nodes[i].active = false;
				tween(cloneNode).to(config.subGameRollOption.beetleFlyTime, { position: endPos }).call(() => {
					cloneNode.destroy();
					count++;
					if (count >= nodes.length) {
						done && done();
					}
				}).start()
			})
		} else {
			done && done();
		}
		// })
	}

	private changeGameHandle(isSubGameLastPoint: boolean) {

		if (this.isSubGame(this.props.gameTypeInfo.currGameType)) {
			this.dispatch(updateWinloss(0))
			this.changeToSubGame(this.props.gameTypeInfo.currGameType, isSubGameLastPoint);
		} else if (this.props.gameTypeInfo.currGameType === GameType.MAIN) {
			this.scheduleOnce(() => {
				this.changeToMainGame(this.props.gameTypeInfo.viewGameType)
			}, 1.5)

		}
	}

	/**
	 * 切换到小游戏处理
	 * @param currGameType 当前游戏
	 * @param viewGameCountOver 当前小游戏次数是否结束
	 * @param nextGameType 下一个游戏
	 */
	private changeToSubGame(currGameType: GameType, viewGameCountOver: boolean) {
		if (viewGameCountOver) {
			this.changeSubGameToSubGame(currGameType);
		} else {
			// 如果是免费游戏，要接着弹出的免费次数框
			mainViewModel.showDialogWin({
				dialogType: this.props.gameTypeInfo.currGameType === GameType.SUBGAME1 ? DialogType.FREE_GAME_ENTRY : DialogType.BAO_HE_GAME_ENTRY,
				params: [cacheData.rollerLaunchResult.dl.si[0].freeCount],
			}, () => {
				this.dispatch(updateSubGameAnimationPlayInfo({
					gameType: currGameType,
					param: 0 //开门类型
				}))
			})

		}

	}

	/**切换到主游戏的处理 */
	private changeToMainGame(gameType: GameType) {
		if (this.isSubGame(gameType)) {
			// 弹出结算面板
			mainViewModel.showDialogWin({
				dialogType: this.props.gameTypeInfo.viewGameType === GameType.SUBGAME1 ? DialogType.FREE_GAME_SETTLEMENT : DialogType.BAO_HE_GAME_SETTLEMENT,
				params: [cacheData.rollerLaunchResult.dl.si[0].freeGameAmount],
			}, () => {
				// 播放切换游戏动画
				this.dispatch(updateSubGameAnimationPlayInfo({
					gameType: gameType,
					param: 1 // 关门动画
				}))
				// 在开始切回主游戏时，就要把插槽的位置重置，等到gameTypeInfo数据变化时已经晚了，会看到坐标不正确
				this.changeGame(GameType.MAIN);
				mainViewModel.initOfDragonBalls()
			})
		} else {
			this.changeGame(GameType.MAIN);
			this.dispatch(updateRollerStatus(RollerStatus.END))
		}
	}

	/**切换小游戏到小游戏 */
	private changeSubGameToSubGame(gameType: GameType) {
		// 弹出结算面板
		mainViewModel.showDialogWin({
			dialogType: DialogType.FREE_GAME_SETTLEMENT,
			params: [cacheData.rollerLaunchResult.dl.si[0].freeGameAmount],
		}, () => {
			// 播放切换游戏动画
			this.dispatch(updateSubGameAnimationPlayInfo({
				gameType: gameType,
				param: 1 // 关门动画
			}))
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

	private getBigWinConfig(magnification: number) {
		return config.winning.find(v => v.minRate <= magnification && magnification <= v.maxRate)
	}

	private stopRoll(i: number, callBack: () => void) {
		const isSpeed = this.isManualStop ? true : this.props.isSpeed;
		// 这里调停止滚动的速度
		const time = isSpeed ? 0 : 0.2;
		const isEnd = i >= this.rollerViewModelArr.length - 1;
		const rollerComp = this.rollerViewModelArr[i];
		// const stopIconIndex = Math.floor(Math.random() * config.iconRollerQueue[i].length);
		// 获得停下来的数据
		const stopIconIndex = cacheData.rollerLaunchResult.dl.si[0].rollerId[i];

		const scatterCount = this.getScatterCount(i);
		// 下一个列是否有边框
		const nextColmunIsBorder = this.getScatterCount(i + 1) >= 2;

		// console.log("scatterCount", scatterCount, i, stopIconIndex);
		// 是否快速边框，前面出现2个以上的scatter，这个参数才为true
		const isSpeedBorder = scatterCount >= 2;
		rollerComp.comp.stopRoll(stopIconIndex, () => {
			if (this.node && this.node.isValid) {
				if (isEnd) {
					callBack()
				} else {
					nextColmunIsBorder && this.stopRoll(i + 1, callBack)
				}
			}
		}, isSpeedBorder)
		// 小游戏2滚轴一起停
		if (this.isSubGame2()) {
			if (!isEnd) {
				this.stopRoll(i + 1, callBack)
			}
		} else {
			!nextColmunIsBorder && this.scheduleOnce(() => {
				if (this.node && this.node.isValid) {
					if (!isEnd) {
						this.stopRoll(i + 1, callBack)
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
	private getScatterCount(endColumnIndex: number) {
		// 前两列不计算数量或者小游戏2也不计算
		if (endColumnIndex < 2 || this.isSubGame2()) {
			return 0;
		}
		endColumnIndex = endColumnIndex >= this.rollerViewModelArr.length ? this.rollerViewModelArr.length : endColumnIndex;
		const rollerId = cacheData.rollerLaunchResult.dl.si[0].rollerId;
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
	private startPlayWinIcon(linePlayTime: number, done) {
		let winLine = 0;
		if (cacheData.rollerLaunchResult) {
			const wp = cacheData.rollerLaunchResult.dl.si[0].wp
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
		if (key === 'rollerStatus') {
			if (RollerStatus.RUNNING === value.cur) {
				this.startRoll();
			} else if (RollerStatus.ENDING === value.cur) {
				this.stopRollAll(true);
				Dragonv2_Audio.playOneShot(SoundPathDefine.shell_end)
			}
		} else if (key === 'gameTypeInfo') {
			this.changeGame(this.props.gameTypeInfo.viewGameType);
		}
	}

	private changeGame(gameType: GameType) {
		const columnListLayout = this.propertyNode.props_column_list.getComponent(Layout);
		const isSubGame2 = gameType === GameType.SUBGAME2;
		const isMain = gameType === GameType.MAIN;
		if (isMain || isSubGame2) {
			this.node.position = new Vec3(config.normalRollOption.rollerWindowX, config.normalRollOption.rollerWindowY);
			columnListLayout.spacingX = config.normalRollOption.columnInterval;
		} else {
			this.node.position = new Vec3(config.subGameRollOption.rollerWindowX, config.subGameRollOption.rollerWindowY);
			columnListLayout.spacingX = config.subGameRollOption.columnInterval;
		}
		if (isMain) {
			this.rollerViewModelArr.forEach(v => v.comp.replaceMultiRollerIcon());
		}
	}

	protected bindUI(): void {
		this.propertyNode.props_column_list.removeAllChildren();

		this.initRoller();
	}

	update(deltaTime: number) {
		if (this.isWaitEnding && cacheData.rollerLaunchResult) {
			this.isWaitEnding = false;
			this.node && this.node.isValid && this.stopRollAll();
		}
	}
}

