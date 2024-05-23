import { _decorator, instantiate, Label, Layout, Node, sp, tween, UITransform, Vec2, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { IconPool } from '../IconPool';
import config from '../config';
import PhoenixV2RollerViewModel from '../viewModel/PhoenixV2RollerViewModel';
import { AutoLauncherInfo, DialogType, GameType, GameTypeInfo, IconId, isAuto, isSubGameToSubGame, RollerLaunchResult, RollerStatus, SmallGame } from '../type';
import { updateRollerStatus } from '../store/actions/roller';
import { cacheData } from '../dataTransfer';
import { changeGame, updateGold, updateSubGameAnimationPlayInfo, updateWinloss } from '../store/actions/game';
import { mainViewModel, phoenixV2_Audio, sourceManageSeletor } from '../index';
import game from '../store/reducer/game';
import { EffectType } from '../../../utils/NodeIOEffect';
import PhoenixV2SgChooseSmallViewMode from '../viewModel/PhoenixV2SgChooseSmallViewModel';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import SkeletonAnimationPlayer from '../../../utils/SkeletonPlay';
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
	/**小游戏选择后的信息 */
	chooseSmallGame:SmallGame
}
export interface IEvent {

}

@ccclass('PhoenixV2_RollerPanel')
export class PhoenixV2_RollerPanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	private rollerViewModelArr: PhoenixV2RollerViewModel[] = [];
	private iconPool: IconPool = new IconPool(config.icon);
	private isManualStop: boolean = false;
	private inStop = false;

	private isWaitEnding = false;

	private sendBetTime = 0;

	/** 当前滚轴 */
	public rollIndex: number = 0;

	private chooseSmallGame
	private isShowMultip: boolean = false;

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
		chooseSmallGame:null,
	}

	public events: IEvent = {

	}

	protected initState() {
		return {}
	}

	private initRoller() {
		for (let i = 0; i < config.columnCount; i++) {
			const column = instantiate(this.propertyNode.props_roller_column);
			const roller = new PhoenixV2RollerViewModel().mountViewNode(column).appendTo(this.propertyNode.props_column_list).connect();
			this.rollerViewModelArr.push(roller);
			roller.comp.setColumnEffectNode(this.propertyNode.props_column_effect);
		}
	}

	public initSlot(smallGameInfo?:SmallGame) {
		this.rollerViewModelArr.forEach((v, index) => {
			if (this.props.gameTypeInfo.viewGameType !==GameType.MAIN && smallGameInfo) {
				config.icon[config.icon.length - 2].fileName = smallGameInfo.wildSprite;
				config.icon[config.icon.length - 2].skeletonName = smallGameInfo.wildSkeleton;
				// this.iconPool=new IconPool(config.icon,this.props.gameTypeInfo.viewGameType,smallGameInfo.id)
			}
			
			v.comp.initSlot(index, this.iconPool);
		})
	}

	private startRoll() {
		let sendBetTime = cacheData.sendBetTime;
		this.sendBetTime = sendBetTime;
		this.isManualStop = false;
		this.isShowMultip = false;
		// console.log("start roll time " + sendBetTime)
		const isMainGame = this.props.gameTypeInfo.viewGameType === GameType.MAIN;
		if (isMainGame) {
			this.dispatch(updateWinloss(0))
		}
		mainViewModel.comp.getSmallMultipleNode().active = false;
		mainViewModel.comp.getSmallMultipleNode().getComponent(Label).string = '';
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

		// console.log("rollerpanel stop roll time " + sendBetTime);
		this.stopRoll(0, this.rollEndHandle.bind(this, rollerLaunchResult), rollerLaunchResult);
	}

	/**
	 * 动画滚动结束处理
	 */
	private rollEndHandle(rollerLaunchResult: RollerLaunchResult) {
		const magnification = rollerLaunchResult.dl.si[0].magnification;
		const bigWinConfig = this.getBigWinConfig(magnification)
		// 是否小游戏最后一局
		const isSubGameLastPoint = !this.isMain() && this.props.gameTypeInfo.leftCount <= 1;

		this.inStop = false;
		const auto = isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo);
		let winLine: number = 0;
		let yuanBaoLine = this.showYuanBaoIcon(config.normalRollOption.winIconFlickerTime, () => {
			winLine = this.startPlayWinIcon(config.normalRollOption.winIconFlickerTime, () => {
			}, rollerLaunchResult);
		 }, rollerLaunchResult)
		
		// const winLine = this.startPlayWinIcon(config.normalRollOption.winIconFlickerTime, () => {
		// }, rollerLaunchResult);

		if (yuanBaoLine === 0) {
			 this.playBigWinHandle(bigWinConfig, auto, isSubGameLastPoint, rollerLaunchResult);
		} else {

			// 中奖之后延迟一点结束
			this.scheduleOnce(() => {
				this.playBigWinHandle(bigWinConfig, auto, isSubGameLastPoint, rollerLaunchResult);
			}, 1)
		}

		// if (!auto || winLine === 0 || yuanBaoLine === 0) {
		// 	this.updateRollerStatusEnd(bigWinConfig, auto, isSubGameLastPoint, rollerLaunchResult);
		// } else {
		// 	// 中奖之后延迟一点结束
		// 	this.scheduleOnce(() => {
		// 		this.updateRollerStatusEnd(bigWinConfig, auto, isSubGameLastPoint, rollerLaunchResult);
		// 	}, 1)
		// }

		if (!bigWinConfig) {
			this.updateWinloss(rollerLaunchResult);
		}
	}

	private playWinAudio() {
		// if (this.isWinWild()) {
		// 	phoenixV2_Audio.playOneShot(SoundPathDefine.wild)
		// } else {
		// 	phoenixV2_Audio.playOneShot(SoundPathDefine.haveCoin)
		// }
	}

	private updateWinloss(rollerLaunchResult: RollerLaunchResult,amount?:number) {
		const si = rollerLaunchResult && rollerLaunchResult.dl.si[0];
		// 本局输赢
		const roundTw = si.totalRewards
		if (this.isMain()) {
			if (roundTw <= 0) {
				return;
			}

			// 在切到小游戏2时，输赢金额不更新，因为中奖的金额在加到小游戏里
			if (!this.isChangeGame() || this.props.gameTypeInfo.currGameType !== GameType.SUBGAME2) {
				this.dispatch(updateWinloss(roundTw))
				// 小游戏要在结算时更新余额
				this.dispatch(updateGold(si.balanceAfterSettlement))
			}
		} else {
			// 小游戏1在游戏中余额之后在切换到主游戏时才加上去
			// console.log("amount",amount,si.freeGameAmount );
			
			if (amount && si.totalRewards > amount ) {
				if (this.isSubGame1()) {
					this.dispatch(updateWinloss(si.freeGameAmount-amount))
				}
			} else {
				this.dispatch(updateWinloss(si.freeGameAmount))
			}

			if (this.isChangeGame()) {
				this.dispatch(updateGold(si.balanceAfterSettlement))
				this.dispatch(updateWinloss(si.freeGameAmount))
			}

		}
	}

	/**播放元宝中奖处理 */
	private playBigWinHandle(bigWinConfig, auto: boolean, isSubGameLastPoint: boolean, rollerLaunchResult: RollerLaunchResult) {

		const showYuanBao = rollerLaunchResult && rollerLaunchResult.dl.si[0].otherGameAttributesVo.yuanBaoSpecialEffect;//是否有特殊位置（1 、5列）元宝中奖

		// 进入小游戏2时不播放大奖
		if (showYuanBao) {

			const yuanBaoDialogCallBack = () => {
				// 延迟一点点播放大奖
				this.startPlayWinIcon(config.normalRollOption.winIconFlickerTime, () => {
				}, rollerLaunchResult);

			// this.scheduleOnce(() => {
				this.updateRollerStatusEnd(bigWinConfig, auto, isSubGameLastPoint, rollerLaunchResult);
			// }, 1)
	
				
			}
			this.flyYinBi(() => {
				const yuanBaoAmount = rollerLaunchResult && rollerLaunchResult.dl.si[0].otherGameAttributesVo.yuanBaoAmount;
				const yuanBaoMagnification = rollerLaunchResult && rollerLaunchResult.dl.si[0].otherGameAttributesVo.yuanBaoMagnification;
				this.updateWinloss(rollerLaunchResult,yuanBaoAmount);
				// 元宝中奖框
				const totalRewards = rollerLaunchResult && rollerLaunchResult.dl.si[0].totalRewards
				mainViewModel.showDialogWin({
					dialogType: DialogType.YUAN_BAO_WIN,
					params: [/*yuanBaoAmount,*/totalRewards,yuanBaoMagnification],	//测试非要这么改
				},() => yuanBaoDialogCallBack())
			})
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
		// 是否小游戏2，包含下一次游戏
		const isSubGame2 = this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2 || this.props.gameTypeInfo.currGameType === GameType.SUBGAME2;
		const isChangeGame = this.isChangeGame();
		if (bigWinConfig) {
			// 大奖提示框消失后的回调
			const dialogCallback = () => {
				if (isChangeGame) {
					if (this.props.gameTypeInfo.currGameType === GameType.SUBGAME1) {
						phoenixV2_Audio.playOneShot(SoundPathDefine.LING, 1, false)
					}
					// 如果是免费游戏，要接着弹出的免费次数框
					this.changeGameHandle(isSubGameLastPoint, rollerLaunchResult);
				} else {
					//处理wild加次数飞动画
					if (this.props.gameTypeInfo.viewGameType === GameType.SUBGAME1) {
						this.playWildAnimation(() => {
							this.dispatch(changeGame({
								lastGameType: GameType.NONE,
								viewGameType: this.props.gameTypeInfo.viewGameType,
								currGameType: rollerLaunchResult && rollerLaunchResult.dl.si[0].nextGameType,
								leftCount:  rollerLaunchResult && rollerLaunchResult.dl.si[0].freeCount,
								freeGameAmount: rollerLaunchResult && rollerLaunchResult.dl.si[0].freeGameAmount,
								nextLeftCount: undefined
							}))
							this.scheduleOnce(() => {
								this.dispatch(updateRollerStatus(RollerStatus.END))
							},1)
						})
					} else {
						this.dispatch(updateRollerStatus(RollerStatus.END))
					}
				}
			}
				
				// 延迟一点点播放大奖
				this.scheduleOnce(() => {
					this.updateWinloss(rollerLaunchResult);
					// 中大奖提示框
					this.node.isValid && mainViewModel.showDialogWin({
						dialogType: bigWinConfig.name,
						params: [rollerLaunchResult && rollerLaunchResult.dl.si[0].totalRewards],
					}, () => dialogCallback())
				}, 0.8)
		} else {
			if (isChangeGame) {
				if (this.props.gameTypeInfo.currGameType === GameType.SUBGAME2) {
					// this.playBeetleAnimation(isSubGameLastPoint, rollerLaunchResult);
				} else {
					if (this.props.gameTypeInfo.currGameType === GameType.SUBGAME1) {
						phoenixV2_Audio.playOneShot(SoundPathDefine.LING, 1, false)
					}
					this.scheduleOnce(() => {
						this.changeGameHandle(isSubGameLastPoint, rollerLaunchResult);
					},1)
				}
			} else {
				if (this.props.gameTypeInfo.viewGameType === GameType.SUBGAME1) {
					this.playWildAnimation(() => {
						this.dispatch(changeGame({
							lastGameType: GameType.NONE,
							viewGameType: this.props.gameTypeInfo.viewGameType,
							currGameType: rollerLaunchResult && rollerLaunchResult.dl.si[0].nextGameType,
							leftCount: rollerLaunchResult && rollerLaunchResult.dl.si[0].freeCount,
							freeGameAmount: rollerLaunchResult && rollerLaunchResult.dl.si[0].freeGameAmount,
							nextLeftCount: undefined
						}))
						if (isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
							this.scheduleOnce(() => {
								this.dispatch(updateRollerStatus(RollerStatus.END))
							},1)
						} else {
							this.dispatch(updateRollerStatus(RollerStatus.END))
						}
					})
				} else {
					if (isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
						this.scheduleOnce(() => {
							this.dispatch(updateRollerStatus(RollerStatus.END))
						},1)
					} else {
						this.dispatch(updateRollerStatus(RollerStatus.END))
					}
				}
			}
		}
	}

	/** 播放元宝上的银币动画 */
	private flyYinBi(done) {
		/**第1 、5列中奖的银币才飞银币 */
		/**飞完后打开元宝中奖弹框 */
		let nodes: Node[] = [];
		this.rollerViewModelArr.forEach(v => {
			nodes = nodes.concat(v.comp.getYuanBaoYinBiNode());
		})

		const endPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(mainViewModel.getGoodLuckPos());

		let count = 0;
		
		nodes.forEach(v => {
			const startPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(v.getWorldPosition());
			const cloneNode = instantiate(v)
			this.node.parent.addChild(cloneNode);
			cloneNode.setPosition(startPos)
			v.active = false;
			tween(cloneNode).to(config.subGameRollOption.beetleFlyTime, { position: endPos }).call(() => {
				cloneNode.destroy();
				count++;
				if (count >= nodes.length) {
					done && done();
				}
			}).start()
		})


	}

	// /**播放甲壳虫动画，播放完成之后进去切换游戏 */
	// private playBeetleAnimation(isSubGameLastPoint: boolean, rollerLaunchResult: RollerLaunchResult) {
	// 	let count = 0;
	// 	this.rollerViewModelArr.forEach(v => {
	// 		v.comp.playBeetleAnimation(() => {
	// 			count++;
	// 			if (count >= this.rollerViewModelArr.length) {
	// 				this.changeGameHandle(isSubGameLastPoint, rollerLaunchResult);
	// 			}
	// 		})
	// 	})
	// }

	/**播放甲壳虫的飞数字动画 */
	private playBeeteFlyAmount(done) {
		let nodes: Node[] = [];
		this.rollerViewModelArr.forEach(v => {
			nodes = nodes.concat(v.comp.getBeetleAmountNode());
		})

		const endPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(mainViewModel.getGoodLuckPos());

		let count = 0;
		nodes.forEach(v => {
			const startPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(v.getWorldPosition());
			const cloneNode = instantiate(v)
			this.node.parent.addChild(cloneNode);
			cloneNode.setPosition(startPos)
			tween(cloneNode).to(config.subGameRollOption.beetleFlyTime, { position: endPos }).call(() => {
				cloneNode.destroy();
				count++;
				if (count >= nodes.length) {
					done && done();
				}
			}).start()
		})
	}

	/**显示wild的动画 */
	private playWildAnimation(done) {
		let amountNodes: Node[] = [];
		let nodes: Node[] = [];
		this.rollerViewModelArr.forEach(v => {
			nodes = nodes.concat(v.comp.getWildLiZiNode().nodes);
			amountNodes = amountNodes.concat(v.comp.getWildLiZiNode().amountNodes);
		})
		// console.log("amountNodes---------",amountNodes);
		
		if (amountNodes.length > 0) {
			
			amountNodes.forEach((n, i) => {
				amountNodes[i].active = true;
				nodes[i].active = false;
				amountNodes[i].setSiblingIndex(amountNodes[i].parent.children.length);
				amountNodes[i].setWorldPosition(amountNodes[i].parent.worldPosition);
				const skeleton = n.getComponent(sp.Skeleton);
				let count = 0;
				// const skeletonPlayer = new SkeletonAnimationPlayer(skeleton, "animation", true, () => { 
				// 	count++
				// 	if (count >= 2) {
				// 		skeletonPlayer.stopAnimation()
				// 	}
				// })
				// skeletonPlayer.playAnimation();
				if (i === amountNodes.length - 1) {
					this.scheduleOnce(() => {
						this.playWild2DFlyNum(done)
					},1)
				}
				
			})
		} else {
			done && done()
		}
		// return amountNodes
	}
	/**播放wild的加次数动画 */
	private playWild2DFlyNum(done) {
		let nodes: Node[] = [];
		this.rollerViewModelArr.forEach(v => {
			nodes = nodes.concat(v.comp.getWildLiZiNode().nodes);
		})
		// const amountNodes = this.playWildAnimation()
		
		if (nodes.length > 0) {
			const endPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(mainViewModel.getFreeNumPos());
			let count1 = 0;
			phoenixV2_Audio.playOneShot(SoundPathDefine.PHOENIX_ADD_NUM)
			nodes.forEach((v, i) => {
				v.active = true;
				const startPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(v.getWorldPosition());
				const cloneNode = instantiate(v)
				cloneNode.active = true;
				this.node.addChild(cloneNode);
				cloneNode.setPosition(startPos)
				v.active = false;
				tween(cloneNode).delay(0.5).to(config.subGameRollOption.beetleFlyTime, { position: endPos }).call(() => {
					cloneNode.destroy();
					count1++;
					if (count1 >= nodes.length) {
						done && done();
					}
				}).start()
			})
	
		} else {
			done && done();
		}
	}

	private changeGameHandle(isSubGameLastPoint: boolean, rollerLaunchResult: RollerLaunchResult) {
		// console.log("this.props.gameTypeInfo.currGameType",this.props.gameTypeInfo.currGameType);
		
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
			this.rollerViewModelArr.forEach((v, index) => { 
				v.comp.playScatterAnimation()
			})
			this.scheduleOnce(() => {
				mainViewModel.comp.getSlotNode().active = false;
				mainViewModel.rollerPanelViewModel.viewNode.active = false;
				mainViewModel.comp.getFreeNumNode().active = false;
				mainViewModel.showSmallGame(() => {
					// this.dispatch(updateRollerStatus(RollerStatus.END))
					// 播放切换游戏动画
					this.dispatch(updateSubGameAnimationPlayInfo({
						gameType: currGameType,
						param: 0 //开门类型
					}))
				})
			},2)
			// // 如果是免费游戏，要接着弹出的免费次数框
			// mainViewModel.showDialogWin({
			// 	dialogType: DialogType.FREE_GAME_ENTRY,
			// 	params: [rollerLaunchResult.dl.si[0].freeCount],
			// }, () => {
			// 	// this.dispatch(updateRollerStatus(RollerStatus.END))
			// 	// 播放切换游戏动画
			// 	this.dispatch(updateSubGameAnimationPlayInfo({
			// 		gameType: currGameType,
			// 		param: 0 //开门类型
			// 	}))
			// })
		}

	}

	/**切换到主游戏的处理 */
	private changeToMainGame(gameType: GameType, rollerLaunchResult: RollerLaunchResult) {
		if (this.isSubGame(gameType)) {
			// 弹出结算面板
			mainViewModel.showDialogWin({
				dialogType: DialogType.FREE_GAME_SETTLEMENT,
				params: [rollerLaunchResult && rollerLaunchResult.dl.si[0].freeGameAmount],
			}, () => {
				// 播放切换游戏动画
				this.dispatch(updateSubGameAnimationPlayInfo({
					gameType: gameType,
					param: 1 // 关门动画
				}))
				// 在切换回主游戏时，改变滚轴的高度
				this.changeRollerHeight(GameType.MAIN);
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

	private stopRoll(i: number, callBack: (rollerLaunchResult: RollerLaunchResult) => void, rollerLaunchResult: RollerLaunchResult) {
		// 这里调停止滚动的速度
		const time = this.getIsSpeed() ? 0 : 0.2;
		const isEnd = i >= this.rollerViewModelArr.length - 1;
		const rollerComp = this.rollerViewModelArr[i];
		this.rollIndex = i;
		// const stopIconIndex = Math.floor(Math.random() * config.iconRollerQueue[i].length);
		// 获得停下来的数据
		const stopIconIndex = rollerLaunchResult && rollerLaunchResult.dl.si[0].rollerId[i];

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
		const rollerId = rollerLaunchResult && rollerLaunchResult.dl.si[0].rollerId;
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
			const wp = rollerLaunchResult.dl.si[0].winningPosition
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
			if (this.isSubGame1()) {
				linePlayTime = 4;
			} else {
				linePlayTime = 2;
			}
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
		const magnification = cacheData.rollerLaunchResult && cacheData.rollerLaunchResult.dl.si[0].otherGameAttributesVo.phoenixMagnification;
		const labelNode = mainViewModel.comp.getSmallMultipleNode();
		labelNode.active = magnification > 0 && this.isSubGame1();
		// console.log("!this.isShowMultip",!this.isShowMultip,magnification > 0,this.isSubGame1());
		
		labelNode.getComponent(Label).string = "X" + magnification; 
		if (!this.isShowMultip && this.isSubGame1() && magnification > 0) {
			tween(labelNode).to(0.5, { scale: new Vec3(1.5, 1.5) }).to(0.5, { scale: new Vec3(1, 1) }).call(() => {
				this.isShowMultip = true;
			}).start()
		}

		if (this.isMain()) {
			this.scheduleOnce(() => {
				this.executeWinIcon(++index, lines, wp, linePlayTime, done);
			}, linePlayTime);
		} else {
			this.scheduleOnce(() => {
				this.executeWinIcon(-1, lines, wp, linePlayTime, done);
			}, linePlayTime);
		}
	}

	/**播放元宝出现 及特殊（1 、5列）中奖动画 */
	private showYuanBaoIcon(linePlayTime: number, done, rollerLaunchResult: RollerLaunchResult) {
		let winLine = 0;
		const showYuanBao = rollerLaunchResult.dl.si[0].otherGameAttributesVo.yuanBaoSpecialEffect;//是否有特殊位置（1 、5列）元宝中奖
		const yuanBaoWp = rollerLaunchResult.dl.si[0].otherGameAttributesVo.yuanBaoPosition;

		const lines: any[] = [];
		if (showYuanBao) {
			for (const key in yuanBaoWp) {
				lines.push(key);
			}
			winLine = lines.length;
			this.executeYuanBaoWinIcon(0, lines, yuanBaoWp, linePlayTime, done);
		} else {
			done()
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
	private executeYuanBaoWinIcon(index: number, lines: any[], wp, linePlayTime: number, done) {
		if (!cacheData.rollerLaunchResult) {
			return;
		}
		if (index >= lines.length) {
			index = -1;
			done && done();
		}
		let winIconArr = [];
		if (index === -1) {
			linePlayTime = 2;
			winIconArr = wp
		} else {
			winIconArr = wp
			// 一条线中了几个图标就播放多少秒
			linePlayTime = wp.length;
		}
		// this.rollerViewModelArr.forEach(v => v.comp.pauseWinIcon())
		
		winIconArr.forEach(v => {
			const columnIndex = v[0];
			const iconIndex = v[1];
			this.rollerViewModelArr[columnIndex].comp.playYuanBaoWinIcon(iconIndex);
		})

		// this.scheduleOnce(() => {
		// 	this.executeYuanBaoWinIcon(++index, lines, wp, linePlayTime, done);
		// }, linePlayTime);
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

