import { _decorator, instantiate, Label, Layout, Node, tween, UITransform, Vec2, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { IconPool } from '../IconPool';
import config from '../config';
import ThorV2RollerViewModel from '../viewModel/ThorV2RollerViewModel';
import { AutoLauncherInfo, ClearIconData, ClearRoundData, DialogType, GameType, GameTypeInfo, getBigWinConfig, isAuto, RollerLaunchResult, RollerStatus, WinIconData } from '../type';
import { updateRollerStatus } from '../store/actions/roller';
import { cacheData } from '../dataTransfer';
import { changeGame, playWinOddsAnimation, updateFreeGameOdds, updateGold, updateSubGameAnimationPlayInfo, updateSubGameWinloss, updateWinIconDataItem, updateWinloss } from '../store/actions/game';
import { thorv2_Audio, mainViewModel, sourceManageSeletor } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { ThorV2Icon } from './ThorV2_Icon';
import { global } from '../../../hall';
import { setLoadingAction } from '../../../hall/store/actions/baseBoard';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	/**滚动状态 */
	rollerStatus: RollerStatus,
	/**是否加速 */
	isSpeed: boolean,
	isManualSpeed: boolean,
	/** 自动运行信息 */
	autoLauncherInfo: AutoLauncherInfo,
	/**游戏类型信息 */
	gameTypeInfo: GameTypeInfo,
	/**总输赢 */
	winloss: number,
	/** 小游戏的总输赢 */
	subGameWinloss: number,
	/**免费游戏倍数 */
	freeGameOdds: number,
}
export interface IEvent {

}

@ccclass('ThorV2_RollerPanel')
export class ThorV2_RollerPanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	private rollerViewModelArr: ThorV2RollerViewModel[] = [];
	private iconPool: IconPool = new IconPool(config.icon);
	private inStop = false;

	private isWaitEnding = false;

	private sendBetTime = 0;

	protected propertyNode = {
	}

	public props: IProps = {
		/**滚动状态 */
		rollerStatus: RollerStatus.END,
		isSpeed: false,
		isManualSpeed: false,
		autoLauncherInfo: null,
		gameTypeInfo: {
			lastGameType: GameType.MAIN,
			currGameType: GameType.MAIN,
			viewGameType: GameType.MAIN,
			leftCount: 0
		},
		winloss: 0,
		subGameWinloss: 0,
		freeGameOdds: 0,
	}

	public events: IEvent = {

	}

	protected initState() {
		return {}
	}

	private initRoller() {
		for (let i = 0; i < config.columnCount; i++) {
			const column = sourceManageSeletor().getFile(PrefabPathDefine.ROLLER).source;
			const roller = new ThorV2RollerViewModel().mountView(column).appendTo(this.node).connect();
			this.rollerViewModelArr.push(roller);
			// roller.comp.setColumnEffectNode(this.propertyNode.props_column_effect);
			roller.setEvent({
				onCheckNextLeftCount: () => {
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
		console.log("start roll time " + sendBetTime)

		thorv2_Audio.playOneShot(SoundPathDefine.ROLLER_BEGIN)

		this.dispatch(updateWinloss(0))
		this.unscheduleAllCallbacks();
		let count = 0;
		this.rollerViewModelArr.forEach((v, index) => {
			v.comp.startRoll(this.props.isSpeed, () => {
				count++;
				if (count >= this.rollerViewModelArr.length) {
					this.isWaitEnding = true;
					this.setWaitReturnSchedule();
				}
			})
		});
	}

	/**等待数据返回定时器 */
	private setWaitReturnSchedule() {
		this.scheduleOnce(() => {
			global.hallDispatch(setLoadingAction({
				isShow: true
			}));
		}, config.waitDataReturnTime)
	}

	private speedRoller() {
		this.rollerViewModelArr.forEach((v, index) => {
			v.comp.speed();
		})
	}

	private stopRollAll(sendBetTime: number, rollerLaunchResult: RollerLaunchResult) {
		if (this.inStop) {
			return;
		}
		this.unscheduleAllCallbacks();
		global.hallDispatch(setLoadingAction({
			isShow: false
		}));
		this.inStop = true;

		if (RollerStatus.RUNNING === this.props.rollerStatus) {
			this.dispatch(updateRollerStatus(RollerStatus.ENDING))
		}

		this.playStopRollSound();

		console.log("rollerpanel stop roll time " + sendBetTime);

		let count = 0;
		this.rollerViewModelArr.forEach((v, i) => {
			// 获得停下来的数据
			const stopIconIndex = rollerLaunchResult.dl.si[0].rollerId[i];
			v.comp.stopRoll(stopIconIndex, () => {
				count++;
				if (this.node.isValid && count >= this.rollerViewModelArr.length) {
					this.rollEndHandle(rollerLaunchResult)
				}
			}, false, rollerLaunchResult);
		})
	}

	private playStopRollSound() {
		this.scheduleOnce(() => {
			if (!this.props.isManualSpeed && !this.props.isSpeed) {
				thorv2_Audio.playOneShot(SoundPathDefine.DROP_BOTTOM)
			} else {
				thorv2_Audio.playOneShot(SoundPathDefine.QUICK_STOP)
			}
		}, 0.3)
	}

	/**
	 * 动画滚动结束处理
	 */
	private rollEndHandle(rollerLaunchResult: RollerLaunchResult) {
		this.inStop = false;
		const clearIconPositions = this.getClearIconPos(rollerLaunchResult);
		this.clearFlowHandle(rollerLaunchResult, clearIconPositions);
	}

	private playScatterAnimation(rollerLaunchResult: RollerLaunchResult, done) {
		let count = 0;
		this.rollerViewModelArr.forEach(v => {
			v.comp.playScatterAnimation(() => {
				count++;
				if (count >= this.rollerViewModelArr.length) {
					done && done();
				}
			})
		})
	}

	/**消除流程处理 */
	private clearFlowHandle(rollerLaunchResult: RollerLaunchResult, clearRoundDatas: ClearRoundData[]) {
		if (clearRoundDatas.length === 0) {
			this.updateEndStatus(rollerLaunchResult);
			return;
		}

		const si = rollerLaunchResult.dl.si[0]
		this.clearIconHandle(0, clearRoundDatas, () => {
			if (clearRoundDatas.length > 1 && si.otherGameAttributesVo.itemTotalMultiplier > 0) {
				mainViewModel.comp.flyFreeGameTotalOdds((isFly: boolean) => {
					this.playOddsAnimation(rollerLaunchResult)
					this.playLabelAnimation(rollerLaunchResult, isFly, () => {
						this.updateEndStatus(rollerLaunchResult);
					})
				})
			} else {
				this.updateEndStatus(rollerLaunchResult);
			}
		})
	}

	private updateEndStatus(rollerLaunchResult: RollerLaunchResult) {
		const si = rollerLaunchResult.dl.si[0]
		const isChangeGame = this.isChangeGame();
		const overHandle = (isUpdateGold: boolean = true) => {
			if (!isChangeGame) {
				mainViewModel.comp.updateEndStatus(isUpdateGold);
			} else {
				this.changeGameHandle(rollerLaunchResult);
			}
		}

		this.dispatch(updateWinloss(si.totalRewards));

		const overHandleBeforeHandle = () => {
			if (this.isSubGame1()) {
				this.subGameOverHandle(rollerLaunchResult, () => {
					overHandle(false);
				});
			} else {
				overHandle();
			}
		}

		// 有大奖播放大奖
		const bigWinConfig = getBigWinConfig(si.magnification)
		if (bigWinConfig) {
			this.playBigWinHandle(bigWinConfig, rollerLaunchResult, () => {
				overHandleBeforeHandle();
			})
		} else {
			overHandleBeforeHandle();
		}
	}

	/**子游戏的结束处理 */
	private subGameOverHandle(rollerLaunchResult: RollerLaunchResult, done) {
		const si = rollerLaunchResult.dl.si[0]
		let firstDelayTime = 0;
		if (si.freeGameAmount > this.props.subGameWinloss) {
			this.dispatch(updateSubGameWinloss(si.freeGameAmount));
			firstDelayTime = 0.5;
		}

		if (si.otherGameAttributesVo.gameFreeGametotalMultiplier > this.props.freeGameOdds) {
			tween(this.node).delay(0.5).call(() => {
				this.dispatch(updateFreeGameOdds(si.otherGameAttributesVo.gameFreeGametotalMultiplier));
			}).delay(0.5).call(() => {
				done && done();
			}).start();
		} else {
			done && done();
		}
	}

	/**播放倍率动画 */
	private playOddsAnimation(rollerLaunchResult: RollerLaunchResult) {
		this.rollerViewModelArr.forEach(v => {
			v.comp.playOddsAnimation(() => {
			})
		})

	}

	/**获得总的倍率 */
	private getTotalOdds(rollerLaunchResult: RollerLaunchResult) {
		let odds = 0;
		rollerLaunchResult.dl.si[0].otherGameAttributesVo.rates.forEach((v: number[]) => {
			if (v && v.length >= 4) {
				odds += v[3]
			} else {
				odds -= 999;
			}
		})
		return odds;
	}

	/**播放倍率label动画 */
	private playLabelAnimation(rollerLaunchResult: RollerLaunchResult, isFlyTotalOdds: boolean, done) {
		const odds = this.getTotalOdds(rollerLaunchResult)
		const parentNode = mainViewModel.viewNode;
		const endPos = mainViewModel.comp.getWinOddsPosition();
		let count = 0;

		let oddsIcons: ThorV2Icon[] = [];
		this.rollerViewModelArr.forEach(v => {
			oddsIcons = oddsIcons.concat(v.comp.getOddsLabelNodes());
		})

		if (oddsIcons.length === 0) {
			done && done();
			return;
		}

		const isMoreOddsLabel = oddsIcons.length > 1 || isFlyTotalOdds;
		const intervalTime = config.normalRollOption.oddsLabelAnimationParam.moreIntervalTime;
		oddsIcons.forEach((v, i) => {
			this.scheduleOnce(() => {
				this.playSingleLabelAnimation(parentNode, v.getOddsLabelNode(), endPos, () => {
					count++;
					const isEnd = count >= oddsIcons.length;
					if (isMoreOddsLabel) {
						mainViewModel.comp.playWinlossAnimation(this.getOddsLabelValue(v.getOddsLabelNode()), isEnd)
					}
					if (isEnd) {
						// 在结束的时候如果有倍率增加，就播放倍率的动画，否则直接结束
						if (odds <= 0) {
							done && done();
						} else {
							this.dispatch(playWinOddsAnimation({
								time: Date.now(),
								timeScale: 1,
								params: [odds, isMoreOddsLabel ? 1 : 0, done]
							}))
						}
					}
				})
			}, i * intervalTime)
		})
	}

	private getOddsLabelValue(labelNode: Node) {
		const oddsLabel = labelNode.getComponent(Label).string;
		const odds = parseInt(oddsLabel.toUpperCase().replace("X", ""));
		return odds;
	}

	private playSingleLabelAnimation(parentNode: Node, labelNode: Node, endPos: Vec3, done) {
		let count = 0;
		const labelTemp = instantiate(labelNode) as Node;
		labelNode.active = false;
		parentNode.addChild(labelTemp);
		labelTemp.setWorldPosition(labelNode.worldPosition);

		thorv2_Audio.playOneShot(SoundPathDefine.WILD_FLASH)

		const delayTime = config.normalRollOption.oddsLabelAnimationParam.delayTime;
		const magnifyTime = config.normalRollOption.oddsLabelAnimationParam.magnifyTime;
		const magnifyScale = config.normalRollOption.oddsLabelAnimationParam.magnifyScale;
		const lessenTime = config.normalRollOption.oddsLabelAnimationParam.lessenTime;
		const lessenScale = config.normalRollOption.oddsLabelAnimationParam.lessenScale;

		tween(labelTemp).delay(delayTime)
			.to(magnifyTime, { scale: new Vec3(magnifyScale, magnifyScale) })
			.to(lessenTime, { worldPosition: endPos, scale: new Vec3(lessenScale, lessenScale) }).call(() => {
				count++;
				labelTemp.destroy();
				done && done();
			}).start();
	}

	/**消除图标处理 */
	private clearIconHandle(index: number, clearRoundDatas: ClearRoundData[], done) {
		const clearRoundData = clearRoundDatas[index];

		/**动画完成之后执行 */
		const doneHandle = () => {
			index++;
			if (index >= clearRoundDatas.length) {
				// console.log("clearIconHandle over ====================")
				done && done();
			} else {
				this.clearIconHandle(index, clearRoundDatas, done);
			}
		}

		if (clearRoundData.clearIconDatas.length === 0) {
			done && done();
			// console.log("clearIconHandle over  111====================")
			return;
		}

		if (index < clearRoundDatas.length - 1) {
			if (clearRoundDatas[index + 1].clearIconDatas.length === 0) {
				thorv2_Audio.playOneShot(SoundPathDefine.SP_WIN)
			} else {
				thorv2_Audio.playOneShot(SoundPathDefine.SP_WIN_SHOW)
			}
		}

		// 播放金额
		this.showPlayWinAmount(clearRoundData);

		let count = 0;
		clearRoundData.clearIconDatas.forEach(v => {
			this.rollerViewModelArr[v.columnIndex].comp.clearIcon(v.iconIndex, index, () => {
				count++;
				if (count >= clearRoundData.clearIconDatas.length) {
					this.addIconHandle(clearRoundData.clearIconDatas, doneHandle);
				}
			});
		})
	}

	/**添加图标处理 */
	private addIconHandle(clearIconDatas: ClearIconData[], done) {
		let count = 0;
		clearIconDatas.forEach(v => {
			this.rollerViewModelArr[v.columnIndex].comp.clearAfterFillIconHandle(() => {
				count++;
				if (count >= clearIconDatas.length) {
					done && done();
				}
			});
		})
	}

	/**显示中奖金额 */
	private showPlayWinAmount(clearRoundData: ClearRoundData) {
		const rounds = this.splitClearRoundData(clearRoundData);

		// let winloss = this.props.winloss;
		rounds.forEach(round => {
			round.clearIconDatas.sort((v1, v2) => this.rollerViewModelArr[v1.columnIndex].comp.getMiddleOrder(v1.iconIndex)
				- this.rollerViewModelArr[v2.columnIndex].comp.getMiddleOrder(v2.iconIndex))

			const winIconData = round.winIconDatas[0];
			const iconData = round.clearIconDatas[0];
			this.rollerViewModelArr[iconData.columnIndex].comp.playAmount(iconData.iconIndex, winIconData.amount);

			this.dispatch(updateWinIconDataItem({
				...winIconData,
				time: Date.now(),
			}))

			const winloss = this.props.winloss + winIconData.amount;
			this.dispatch(updateWinloss(winloss));
			if (this.isSubGame1()) {
				const subGameWinloss = this.props.subGameWinloss + winIconData.amount;
				this.dispatch(updateSubGameWinloss(subGameWinloss));
			}
		})
	}

	private splitClearRoundData(clearRoundData: ClearRoundData) {
		if (clearRoundData.winIconDatas.length <= 1) {
			return [clearRoundData];
		}

		const rounds: ClearRoundData[] = [];
		clearRoundData.winIconDatas.forEach(roundData => {

			const data: ClearRoundData = {
				clearIconDatas: [],
				winIconDatas: [],
			}

			data.winIconDatas.push(roundData);

			clearRoundData.clearIconDatas.forEach(iconData => {
				const iconDataTemp: ClearIconData = {
					columnIndex: iconData.columnIndex,
					iconIndex: [],
				};

				iconData.iconIndex.forEach(iconIndex => {
					if (this.rollerViewModelArr[iconData.columnIndex].comp.isIconType(iconIndex, roundData.itemId)) {
						iconDataTemp.iconIndex.push(iconIndex);
					}
				})

				data.clearIconDatas.push(iconDataTemp);
			})

			rounds.push(data);
		})

		return rounds;
	}

	private playWinAudio() {
		// if (this.isWinWild()) {
		// 	egyptv2_Audio.playOneShot(SoundPathDefine.wild)
		// } else {
		// 	egyptv2_Audio.playOneShot(SoundPathDefine.haveCoin)
		// }
	}

	/**播放大奖处理 */
	private playBigWinHandle(bigWinConfig, rollerLaunchResult: RollerLaunchResult, done) {
		if (!bigWinConfig) {
			done && done();
			return;
		}

		// 延迟一点点播放大奖
		this.scheduleOnce(() => {
			const si = rollerLaunchResult.dl.si[0];
			let winloss = si.totalRewards;
			// winloss = winloss === 0 ? si.freeGameAmount : winloss;
			// const isChangeGame = this.isChangeGame();
			// if (isChangeGame && si.freeGameAmount > 0) {
			// 	winloss = si.freeGameAmount;
			// }
			// 中大奖提示框
			this.node.isValid && mainViewModel.showDialogWin(bigWinConfig, winloss, () => {
				done && done();
			})
		}, 0.1)
	}

	private changeGameHandle(rollerLaunchResult: RollerLaunchResult) {
		if (this.isSubGame(this.props.gameTypeInfo.currGameType)) {
			this.changeToSubGame(this.props.gameTypeInfo.currGameType, rollerLaunchResult);
		} else if (this.props.gameTypeInfo.currGameType === GameType.MAIN) {
			this.changeToMainGame(this.props.gameTypeInfo.currGameType, rollerLaunchResult)
		}
	}

	/**
	 * 切换到小游戏处理
	 * @param currGameType 当前游戏
	 * @param viewGameCountOver 当前小游戏次数是否结束
	 * @param nextGameType 下一个游戏
	 */
	private changeToSubGame(currGameType: GameType, rollerLaunchResult: RollerLaunchResult) {
		const si = rollerLaunchResult.dl.si[0];
		this.scheduleOnce(() => {
			this.playScatterAnimation(rollerLaunchResult, () => {
				// 如果是免费游戏，要接着弹出的免费次数框
				mainViewModel.enterExitSubGame({
					dialogType: DialogType.FREE_GAME_ENTRY,
					params: [si.freeCount],
				}, () => {
					// 播放切换游戏动画
					this.dispatch(updateSubGameAnimationPlayInfo({
						gameType: currGameType,
						param: 0 //开门类型
					}))
				})
			})

			this.dispatch(updateWinloss(si.totalRewards));
			this.dispatch(updateGold(si.balanceAfterSettlement));
		}, 0.5)
	}

	/**切换到主游戏的处理 */
	private changeToMainGame(gameType: GameType, rollerLaunchResult: RollerLaunchResult) {
		// 如果是免费游戏，要接着弹出的免费次数框
		mainViewModel.enterExitSubGame({
			dialogType: DialogType.FREE_GAME_SETTLEMENT,
			params: [rollerLaunchResult.dl.si[0].freeGameAmount],
		}, () => {
			// 播放切换游戏动画
			this.dispatch(updateSubGameAnimationPlayInfo({
				gameType: gameType,
				param: 1
			}))
		})
		// 弹出结算面板
		// mainViewModel.showDialogWin({
		// 	dialogType: DialogType.FREE_GAME_SETTLEMENT,
		// 	params: [rollerLaunchResult.dl.si[0].freeGameAmount],
		// }, () => {
		// 	// 播放切换游戏动画
		// 	this.dispatch(updateSubGameAnimationPlayInfo({
		// 		gameType: gameType,
		// 		param: 1 // 关门动画
		// 	}))
		// 	// this.changeRollerHeight(GameType.MAIN);

		// 	// 在开始切回主游戏时，就要把插槽的位置重置，等到gameTypeInfo数据变化时已经晚了，会看到坐标不正确
		// 	this.changeGame(GameType.MAIN);
		// })
	}

	/**是否准备切换游戏 */
	private isChangeGame() {
		if (!this.props.gameTypeInfo) {
			return false;
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
		return this.props.isSpeed;
	}

	private isSubGame1() {
		return this.props.gameTypeInfo.viewGameType === GameType.SUBGAME1;
	}

	/**获得要消除的图标位置 */
	private getClearIconPos(rollerLaunchResult: RollerLaunchResult) {
		let clearRoundDatas: ClearRoundData[] = [];
		if (rollerLaunchResult) {
			const singleResults = rollerLaunchResult.dl.si[0].otherGameAttributesVo.singleResults

			for (let i = 0; i < singleResults.length; i++) {
				const results = singleResults[i];
				const wp = results.winningPosition;

				const clearRoundData: ClearRoundData = {
					clearIconDatas: [],
					winIconDatas: []
				};

				clearRoundData.winIconDatas = results.gameWinningVos.map((v: any) => {
					const winIconData: WinIconData = {
						amount: v.amount,
						itemId: v.itemId,
						count: v.count,
					}
					return winIconData;
				})

				for (const key in wp) {
					const iconPositions = wp[key];

					iconPositions.forEach(iconPosition => {
						const columnIndex = iconPosition[0];
						let clearIconData = clearRoundData.clearIconDatas.find(v => v.columnIndex === columnIndex);
						if (!clearIconData) {
							clearIconData = {
								columnIndex: columnIndex,
								iconIndex: []
							}
							clearRoundData.clearIconDatas.push(clearIconData);
						}

						clearIconData.iconIndex.push(iconPosition[1]);
					})
					// 按照列排序
					// clearRoundData.clearIconDatas.sort((v1, v2) => v1.columnIndex - v2.columnIndex)
				}

				clearRoundDatas.push(clearRoundData);
			}
		}
		return clearRoundDatas;
	}

	protected bindEvent(): void {
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (this.node && this.node.isValid) {
			if (key === 'rollerStatus') {
				if (RollerStatus.RUNNING === value.cur) {
					this.startRoll();
				} else if (RollerStatus.ENDING === value.cur) {
					// this.stopRollAll(true, this.sendBetTime, cacheData.rollerLaunchResult);
				}
			} else if (key === 'gameTypeInfo') {
				this.changeGame(this.props.gameTypeInfo.viewGameType);
			} else if (key === 'isManualSpeed' && value.cur) {
				this.speedRoller();
			}
		}
	}

	private changeGame(gameType: GameType) {
		// const columnListLayout = this.propertyNode.props_column_list.getComponent(Layout);
		const isSubGame1 = gameType === GameType.SUBGAME1;
		const isMain = gameType === GameType.MAIN;
		if (isMain) {
			this.node.position = new Vec3(config.normalRollOption.rollerWindowX, config.normalRollOption.rollerWindowY);
			// columnListLayout.spacingX = config.normalRollOption.columnInterval;
		} else {
			this.node.position = new Vec3(config.subGameRollOption.rollerWindowX, config.subGameRollOption.rollerWindowY);
			// columnListLayout.spacingX = config.subGameRollOption.columnInterval;
		}
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
		// this.propertyNode.props_column_list.removeAllChildren();

		this.initRoller();
	}

	update(deltaTime: number) {
		if (this.isWaitEnding && cacheData.rollerLaunchResult) {
			this.isWaitEnding = false;
			this.node.isValid && this.stopRollAll(this.sendBetTime, cacheData.rollerLaunchResult);
		}
	}
}

