import { _decorator, instantiate, Layout, Node, tween, UITransform, Vec2, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { IconPool } from '../IconPool';
import config from '../config';
import GodWealthV2RollerViewModel from '../viewModel/GodWealthV2RollerViewModel';
import { AutoLauncherInfo, DialogType, GameType, GameTypeInfo, IconId, isAuto, isSubGameToSubGame, RollerStatus } from '../type';
import { updateRollerStatus } from '../store/actions/roller';
import { cacheData } from '../dataTransfer';
import { changeGame, updateGold, updateSubGameAnimationPlayInfo, updateWinloss } from '../store/actions/game';
import { godWealthV2_Audio, mainViewModel } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import StepNumber from '../../../utils/StepNumber';
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
	gold: number,
	
}
export interface IEvent {

}

@ccclass('GodWealthV2_RollerPanel')
export class GodWealthV2_RollerPanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	private rollerViewModelArr: GodWealthV2RollerViewModel[] = [];
	private iconPool: IconPool = new IconPool(config.icon);
	private isManualStop: boolean = false;
	private inStop = false;

	private isWaitEnding = false;

	/**所有滚轴结束 */
	public isAllEnd: boolean = false;
	/** 当前滚轴 */
	public rollIndex: number = 0;
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
		gold: 0,
		
	}

	public events: IEvent = {

	}

	protected initState() {
		return {}
	}
	private initRoller() {
		for (let i = 0; i < config.columnCount; i++) {
			const column = instantiate(this.propertyNode.props_roller_column);
			const roller = new GodWealthV2RollerViewModel().mountViewNode(column).appendTo(this.propertyNode.props_column_list).connect();
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

	/**
	 * 动画滚动结束处理
	 */
	private rollEndHandle() {
		const magnification = cacheData.rollerLaunchResult.dl.si[0].magnification;
		const bigWinConfig = this.getBigWinConfig(magnification)
		// 是否小游戏最后一局
		const isSubGameLastPoint = this.props.gameTypeInfo.leftCount <= 1;

		this.inStop = false;
		const auto = isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo);
		const winLine = this.startPlayWinIcon(config.normalRollOption.winIconFlickerTime, () => {
		});
		this.playWildAudio()
		if (!auto || winLine === 0) {
			this.updateRollerStatusEnd(bigWinConfig, auto, isSubGameLastPoint);
		} else {
			// 中奖之后延迟一点结束
			this.scheduleOnce(() => {
				this.updateRollerStatusEnd(bigWinConfig, auto, isSubGameLastPoint);
			}, 1)
		}

		if (!bigWinConfig) {
			this.updateWinloss();
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

	private playWildAudio() {
		if (this.isWinWild()) {
			godWealthV2_Audio.playOneShot(SoundPathDefine.WILD)
		} else {
			// godWealthV2_Audio.playOneShot(SoundPathDefine.haveCoin)
		}
	}

	private updateWinloss() {
		// 本局输赢
		const si=cacheData.rollerLaunchResult && cacheData.rollerLaunchResult.dl.si[0]
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
			// this.dispatch(updateWinloss(roundTw))
			// if (!this.isChangeGame()) {
			// 	// 小游戏要在结算时更新余额
			// 	this.dispatch(updateGold(cacheData.rollerLaunchResult.dl.si[0].bl))
			// }
		} else {
			if (!this.isSubGame2()) {
				const winloss = this.props.winloss + roundTw;
				this.dispatch(updateWinloss(winloss))
			} else if (this.isChangeGame()) {
				// this.dispatch(updateGold(cacheData.rollerLaunchResult.dl.si[0].bl))
				this.dispatch(updateWinloss(cacheData.rollerLaunchResult.dl.si[0].freeGameAmount))
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
		// 是否进入小游戏2
		// let isEnterSubGame2 = this.props.gameTypeInfo.viewGameType !== GameType.SUBGAME2 && this.props.gameTypeInfo.currGameType === GameType.SUBGAME2;
		let isEnterSubGame2 = false;
		const isChangeGame = this.isChangeGame();
		if (!isEnterSubGame2 && bigWinConfig) {
			// 大奖提示框消失后的回调
			const dialogCallback = () => {

				if (isChangeGame) {
					if (this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2 && this.props.gameTypeInfo.currGameType !== GameType.SUBGAME2) {

						this.playBeetleAnimation(() => {
							this.dispatch(updateWinloss(cacheData.rollerLaunchResult.dl.si[0].freeGameAmount))
							this.dispatch(updateGold(cacheData.rollerLaunchResult.dl.si[0].bl))
							this.rollerViewModelArr.forEach((v, i) => {
								v.comp.removeLockIcon()
							})
							// 如果是免费游戏，要接着弹出的免费次数框
							this.scheduleOnce(() => {
								this.changeGameHandle(isSubGameLastPoint);
							},1)
						})
					} else {
						if (this.props.gameTypeInfo.currGameType === GameType.SUBGAME2) {
							godWealthV2_Audio.playOneShot(SoundPathDefine.LING, 1.0, false)
							this.playBaoHeAnimation(isSubGameLastPoint);
						} else {
							
							if (this.props.gameTypeInfo.currGameType === GameType.SUBGAME1) {
								godWealthV2_Audio.playOneShot(SoundPathDefine.LING, 1.0, false)
								this.scheduleOnce(() => {
									this.changeGameHandle(isSubGameLastPoint);
								},1)
							} else {
								this.changeGameHandle(isSubGameLastPoint);
							}
						}
						
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

				!this.isSubGame2() && this.updateWinloss();
			}, 1)
		}else {
			if (isChangeGame) {
				if (this.props.gameTypeInfo.currGameType === GameType.SUBGAME2) {
				    // godWealthV2_Audio.playOneShot(SoundPathDefine.LING,1.0,false)

					this.playBaoHeAnimation(isSubGameLastPoint);
				} else {
					if (this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2) {
						this.playBeetleAnimation(() => {
							this.rollerViewModelArr.forEach((v, i) => {
								v.comp.removeLockIcon()
							})
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


	private playBeetleAnimation(done) {
		let nodes: Node[] = [];
		let ParticleNodes: Node[] = [];
		this.rollerViewModelArr.forEach(v => {
			nodes = nodes.concat(v.comp.getBeetleAmountNode());
			ParticleNodes = ParticleNodes.concat(v.comp.getBaoHeParticleNode());
		})
	
		const endPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(mainViewModel.getGoodLuckPos());
		let count = 0;
		godWealthV2_Audio.playOneShot(SoundPathDefine.SUN_GOD,1.0,false)
		ParticleNodes.forEach((p, i) => {
			const startPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(p.getWorldPosition());
			const cloneNode = instantiate(p);
			cloneNode.active = true;
			this.node.addChild(cloneNode);
			cloneNode.setPosition(startPos);
			nodes[i].active = false;
			tween(cloneNode)
				.to(config.subGameRollOption.beetleFlyTime, { position: endPos })
				.call(() => {
					cloneNode.destroy();
					count++;
					if (count >= nodes.length) {
						done && done();
					}
				})
				.start();
		});

		// let currentIndex = 0;
	
		// function flyNextParticle(that) {
		// 	godWealthV2_Audio.playOneShot(SoundPathDefine.SUN_GOD)
		// 	if (currentIndex >= ParticleNodes.length) {
		// 		// 所有粒子都飞完了，执行完成回调
		// 		done && done();
		// 		return;
		// 	}
	
		// 	const p = ParticleNodes[currentIndex];
			
		// 	const startPos = that.node.getComponent(UITransform).convertToNodeSpaceAR(p.getWorldPosition());
		// 	const cloneNode = instantiate(p);
		// 	cloneNode.active = true;
		// 	that.node.addChild(cloneNode);
		// 	cloneNode.setPosition(startPos);
		// 	nodes[currentIndex].active = false;
	       
		// 	tween(cloneNode)
		// 		.to(config.subGameRollOption.beetleFlyTime, { position: endPos })
		// 		.call(() => {
		// 			cloneNode.destroy();
		// 			currentIndex++;
		// 			flyNextParticle(that); // 递归调用处理下一个粒子
		// 		})
		// 		.start();
		// }
	
		// // 开始飞行第一个粒子
		// flyNextParticle(this);
	}

	private changeGameHandle(isSubGameLastPoint: boolean) {
		if (this.isSubGame(this.props.gameTypeInfo.currGameType)) {
			this.changeToSubGame(this.props.gameTypeInfo.currGameType, isSubGameLastPoint);
		} else if (this.props.gameTypeInfo.currGameType === GameType.MAIN) {
			this.changeToMainGame(this.props.gameTypeInfo.viewGameType)
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
			// console.log("changeToSubGame````` gameTypeInfo",this.props.gameTypeInfo);
			// 如果是免费游戏，要接着弹出的免费次数框
			mainViewModel.showDialogWin({
				dialogType: this.props.gameTypeInfo.currGameType === GameType.SUBGAME1? DialogType.FREE_GAME_ENTRY:DialogType.BAO_HE_GAME_ENTRY,
				params: [cacheData.rollerLaunchResult.dl.si[0].freeCount],
			}, () => {
				// console.log("dispatch updateSubGameAnimationPlayInfo",currGameType);
				
				// this.dispatch(updateRollerStatus(RollerStatus.END))
				// 播放切换游戏动画
				this.dispatch(updateSubGameAnimationPlayInfo({
					gameType: currGameType,
					param: 0 //开门类型
				}))
				if (currGameType === GameType.SUBGAME1) {
					
					this.dispatch(updateGold(cacheData.rollerLaunchResult.dl.si[0].bl))
				}
			})

		}

	}

	/**切换到主游戏的处理 */
	private changeToMainGame(gameType: GameType) {

		// console.log("changeToMainGame  this.props.gameTypeInfo``````````",this.props.gameTypeInfo);
		// console.log("this.isSubGame(gameType)",this.isSubGame(gameType),gameType);
		
		if (this.isSubGame(gameType)) {
			// 弹出结算面板
			mainViewModel.showDialogWin({
				dialogType: this.props.gameTypeInfo.viewGameType === GameType.SUBGAME1? DialogType.FREE_GAME_SETTLEMENT:DialogType.BAO_HE_GAME_SETTLEMENT,
				params: [cacheData.rollerLaunchResult.dl.si[0].freeGameAmount],
			}, () => {
				// console.log("dispatch updateSubGameAnimationPlayInfo222",gameType);

				// 播放切换游戏动画
				this.dispatch(updateSubGameAnimationPlayInfo({
					gameType: gameType,
					param: 1 // 关门动画
				}))
				// 在开始切回主游戏时，就要把插槽的位置重置，等到gameTypeInfo数据变化时已经晚了，会看到坐标不正确
				this.changeGame(GameType.MAIN);
				this.dispatch(updateGold(cacheData.rollerLaunchResult.dl.si[0].bl))
			})
		} else {
			this.changeGame(GameType.MAIN);
			this.dispatch(updateRollerStatus(RollerStatus.END))
		}
	}

	/**切换小游戏到小游戏，弹出结算面板 */
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
	private getIsSpeed() {
		if (this.isSubGame2()) {
			return false;
		}
		if (this.isManualStop) {
			return true;
		}
		return this.props.isSpeed;
	}

	private stopRoll(i: number, callBack: () => void) {
		const isSpeed = this.isManualStop ? true : this.props.isSpeed;
		// 这里调停止滚动的速度
		const time = this.getIsSpeed() ? 0 : 0.2;
		const isEnd = i >= this.rollerViewModelArr.length - 1;
		this.isAllEnd = i >= this.rollerViewModelArr.length - 1;
		// console.log("iiiiiiii",i);
		
		this.rollIndex = i;
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
	public getScatterCount(endColumnIndex: number) {
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
		if (this.node && this.node.isValid) {
			
			if (key === 'rollerStatus') {
				if (RollerStatus.RUNNING === value.cur) {
					this.startRoll();
				} else if (RollerStatus.ENDING === value.cur) {
					this.stopRollAll(true);	
				}
			} else if (key === 'gameTypeInfo') {
				this.changeGame(this.props.gameTypeInfo.viewGameType);
			}
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
			this.node && this.node.isValid && this.stopRollAll();
		}
	}
}

