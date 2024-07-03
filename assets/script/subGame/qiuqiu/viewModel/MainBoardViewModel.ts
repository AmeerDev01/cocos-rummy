import ViewModel, { StoreInject } from "../../../base/ViewModel"
import ModalBox from "../../../common/ModalBox"
import BaseViewModel from "../../../common/viewModel/BaseViewModel"
import { global, lang } from "../../../hall"
import { addToastAction } from "../../../hall/store/actions/baseBoard"
import CountdownTool from "../../../utils/CountdownTool"
import { EffectType } from "../../../utils/NodeIOEffect"
import { Qiuqiu_MainBoard, IEvent, IProps } from "../components/Qiuqiu_MainBoard"
import { Qiuqiu_SetPanel, IEvent as SPIEvent, IProps as SPIProps, IState as SPIState } from "../components/Qiuqiu_SetPanel"
import config from "../config"
import { playGameBegin, sourceManageSeletor } from "../index"
import { getPlayer, getRoomUpper } from "../qiuqiu_tool"
import { SKT_MAG_TYPE, sktInstance, sktMsgListener } from "../socketConnect"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { getStore } from "../store"
import { beginGameCountdown, changeDealer, changeDeskStatus, changeOperationPlayer, clearRoomData, dealHandCard, joinSeat, operationCountdown, playerBet, playerChangeOpType, playerReady, quitSeat, saveBalanceInfo, saveWinBalanceInfo, updateCallAmount } from "../store/action/game"
import { StateType } from "../store/reducer"
import { BalanceInfo, BalancePlayerVo, Countdown, DeskStatus, OperationType, OperationVo, Player, PushDealerVo, QiuQiuCardVo, RoomInfo, convertCardValue, convertOpType, convertServerAction } from "../type"
import GameRuleViewModel from "./GameRuleViewModel"
import MineViewModel from "./MineViewModel"
import OperationViewModel from "./OperationViewModel"
import OpponentViewModel from "./OpponentViewModel"
import SendCardViewModel from "./SendCardViewModel"

@StoreInject(getStore())
class MainBoardViewModel extends ViewModel<Qiuqiu_MainBoard, IProps, IEvent> {
	private roomInfo: RoomInfo;
	private tableId: string;
	private onComplate: () => void;
	private myChairId: number;
	private memberId: string;

	private mineViewModel: MineViewModel;
	private opponentViewModels: OpponentViewModel[] = [];

	/**发牌组件 */
	private sendCardViewModel: SendCardViewModel;
	private operationViewModel: OperationViewModel;

	private openationCountdownTool: CountdownTool;
	private beginGameCountdownTool: CountdownTool;

	constructor(roomInfo: RoomInfo, tableId: string, onComplate, myChairId: number, memberId: string) {
		super('Qiuqiu_MainBoard')
		this.roomInfo = roomInfo;
		this.tableId = tableId;
		this.onComplate = onComplate;
		this.myChairId = myChairId;
		this.memberId = memberId;
	}

	protected begin() {
		this.initSeat();
		this.initSendCardViewModel();
		this.initOperationViewModel();
		this.listenerSocket();

		const setPanel = new BaseViewModel<Qiuqiu_SetPanel, SPIState, SPIProps, SPIEvent>('Qiuqiu_SetPanel')
			.mountView(sourceManageSeletor().getFile(PrefabPathDefine.SET_PANEL).source).appendTo(this.viewNode)
		this.setEvent({
			openSetPanel: (toggle) => {
				setPanel.comp.showToggle(toggle)
			},
			openShopPanel: () => {
				global.openShop();
			},
			onQuitRoom: () => {
				this.quitRoom();
			},
			dealerBeginOut: () => {
			},
			getSeatFlyClipStartPos: (seatIndex) => {
				if (seatIndex === 0) {
					return this.mineViewModel.comp.getFlyChipStartPosition();
				}
				const viewModel = this.opponentViewModels[seatIndex];
				if (!viewModel) return null;
				return viewModel.comp.getFlyChipStartPosition();
			},
		})

		setPanel.setEvent({
			onQuitGame: () => {
				this.quitRoom();
			},
			onChangeRoom: () => {
				// this.changeRoom();
			},
			openGameRule: () => {
				new GameRuleViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.prefabs_quiqui_modal).source).appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: true });
			}
		})

		this.onComplate && this.onComplate();
	}

	private initSeat() {
		for (let i = 0; i < config.seatNumber; i++) {
			if (i === 0) {
				this.mineViewModel = new MineViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.prefabs_quiqui_mine).source)
					.appendTo(this.comp.getPlayerWrapNode())
					.setEvent({
						getHealerPosition: () => {
							return this.comp.getHealerPosition();
						}
					})
					.connect();
				this.opponentViewModels.push(null);
			} else {
				let prefabName = '';
				if (i === 1) prefabName = PrefabPathDefine.prefabs_quiqui_left1;
				else if (i === 2) prefabName = PrefabPathDefine.prefabs_quiqui_left2;
				else if (i === 3) prefabName = PrefabPathDefine.prefabs_quiqui_left3;
				else if (i === 4) prefabName = PrefabPathDefine.prefabs_quiqui_right3;
				else if (i === 5) prefabName = PrefabPathDefine.prefabs_quiqui_right2;
				else if (i === 6) prefabName = PrefabPathDefine.prefabs_quiqui_right1;
				const opponentViewModel = new OpponentViewModel(i).mountView(sourceManageSeletor().getFile(prefabName).source)
					.appendTo(this.comp.getPlayerWrapNode())
					.setEvent({
						getHealerPosition: () => {
							return this.comp.getHealerPosition();
						}
					})
					.connect();

				this.opponentViewModels.push(opponentViewModel);
			}
		}
	}

	private ready() {
		if (this.comp.props.gold < this.roomInfo.lower || this.comp.props.gold > getRoomUpper(this.roomInfo)) {
			this.quitRoom();

			ModalBox.Instance().show({ content: lang.write(k => k.palyingModule.ExceedUpper, {}, { placeStr: "对不起，您的金币改房间进入要求!" }), type: "Prompt" }, () => {
				// _option.confirmDoneBeforeFn()
				// baseBoardView.comp.closeSubGame(_option.isPre)
				// _option.confirmDoneAfterFn()
				return true
			})

			return;
		}
		sktInstance.sendSktMessage(SKT_MAG_TYPE.READY, {
			roomId: this.roomInfo.roomId,
			tableId: this.tableId,
			memberId: this.memberId
		})
	}

	private isGameIn() {
		if (!getPlayer(this.comp.props.playerMap, this.memberId).gameData.isGame) {
			return false;
		}
		const notGameIn = this.comp.props.deskStatus === DeskStatus.WAITING || this.comp.props.deskStatus === DeskStatus.CLSOE;
		if (notGameIn) {
			return false;
		}

		if (this.comp.props.deskStatus === DeskStatus.COUNTDOWNING && this.getBeginGameCountdown() > 1) {
			return false;
		}

		this.dispatch(addToastAction({ content: lang.write(k => k.palyingModule.GameExit, {}, { placeStr: "您正在游戏中，退出失败，请游戏结束后重试。" }) }))
		return true;
	}

	private getBeginGameCountdown() {
		const c = this.comp.props.beginGameCountdown;
		return c ? c.countdown : 0;
	}

	public quitRoom() {
		// 游戏中不能退出游戏
		if (this.isGameIn()) {
			return;
		}
		sktInstance.sendSktMessage(SKT_MAG_TYPE.QUIT_ROOM, {
			memberId: this.memberId,
			tableId: this.tableId,
		});
		config.isReconnect = false;
		this.comp.clearData();
		this.unMount();
		this.dispatch(clearRoomData(0));
	}

	private changeRoom() {
		// 游戏中不能退出游戏
		if (this.isGameIn()) {
			return;
		}

		sktInstance.sendSktMessage(SKT_MAG_TYPE.CHANGE_ROOM, {
			gameId: config.gameId,
			tableId: this.tableId,
			roomId: this.roomInfo.roomId,
		});
		this.comp.clearData();
		this.stopCountdown();
		this.dispatch(clearRoomData(0));

	}

	/**
	 * 玩家操作
	 * @param opType 操作类型
	 * @param betAmount 下注金额
	 */
	public playerOp(opType: OperationType, betAmount: number) {
		sktInstance.sendSktMessage(SKT_MAG_TYPE.PLAYER_OP, {
			tableId: this.tableId,
			memberId: this.memberId,
			chairId: this.myChairId,
			betAmount: betAmount,
			action: convertServerAction(opType)
		});
	}

	public enterGame(player: Player) {
		if (player.isSelf) {
			player.seatIndex = 0;
			this.dispatch(joinSeat(player))
			if (!player.gameData.isReady) {
				this.ready();
			}
		} else {
			this.setPlayerSeatIndex(player);
			this.dispatch(joinSeat(player))
		}
	}

	/**设置本地座位 */
	private setPlayerSeatIndex(player: Player) {
		// 如果自己的座位号小于对手座位号，直接用对手的座位减去自己的座位号就得到了本地座位号
		// 如果自己的座位号大于对手座位号，用最大座位号减去自己的座位号然后再加上对手的座位号就得到了本地座位号
		const seatIndex = this.myChairId < player.chairId ? player.chairId - this.myChairId : config.seatNumber - this.myChairId + player.chairId;
		player.seatIndex = seatIndex;
	}

	protected unMountCallBack(): void {
		this.removeListener();
		this.stopCountdown();
	}

	private stopCountdown() {
		this.openationCountdownTool && this.openationCountdownTool.stop();
		this.beginGameCountdownTool && this.beginGameCountdownTool.stop();
		this.openationCountdownTool = undefined;
		this.beginGameCountdownTool = undefined;
	}

	private removeListener() {
		sktMsgListener.remove(SKT_MAG_TYPE.READY);
		sktMsgListener.remove(SKT_MAG_TYPE.BEGIN_GAME_COUNTDOWN);
		sktMsgListener.remove(SKT_MAG_TYPE.GAME_STATE_CHANGE);
		sktMsgListener.remove(SKT_MAG_TYPE.PUSH_DEALER);
		sktMsgListener.remove(SKT_MAG_TYPE.PUSH_DEAL);
		sktMsgListener.remove(SKT_MAG_TYPE.PLAYER_OP);
		sktMsgListener.remove(SKT_MAG_TYPE.BALANCE);
		sktMsgListener.remove(SKT_MAG_TYPE.QUIT_ROOM);
		sktMsgListener.remove(SKT_MAG_TYPE.CHANGE_ROOM);
		sktMsgListener.remove(SKT_MAG_TYPE.SECOND_PUSH_DEAL);
	}

	private listenerSocket() {
		sktMsgListener.add(SKT_MAG_TYPE.READY, 'room', (data) => {
			this.dispatch(playerReady(data.memberId));
		});

		sktMsgListener.add(SKT_MAG_TYPE.BEGIN_GAME_COUNTDOWN, 'room', (data) => {
			if (this.comp && this.comp.isValid) {
				const seatIndex = this.comp.props.currActiveSeatIndex;
				const coutndown: Countdown = {
					countdown: data,
					seatIndex: seatIndex,
					time: Date.now(),
				}

				this.dispatch(changeDeskStatus(DeskStatus.COUNTDOWNING))
				this.dispatch(beginGameCountdown(coutndown));
			}
		});
		sktMsgListener.add(SKT_MAG_TYPE.PUSH_DEALER, 'room', (data: PushDealerVo) => {
			this.dispatch(changeDealer(data.bankerId));
			this.beginGameBetAnte();
			this.startCountdown(data.countdown, false);
		});
		sktMsgListener.add(SKT_MAG_TYPE.GAME_STATE_CHANGE, 'room', (data) => {
		});

		sktMsgListener.add(SKT_MAG_TYPE.PUSH_DEAL, 'room', (data: QiuQiuCardVo) => {
			const values = data.pokers.map(v => convertCardValue(v.smallNum, v.bigNum));
			if (data.stage === 1) {
				this.dispatch(dealHandCard(values));
				window.setTimeout(() => {
					this.dispatch(changeDeskStatus(DeskStatus.FIRST_DISTRIBUTE))
				}, 1000)
			} else if (data.stage === 2) {
				// const cards = this.comp.props.playerMap[0].gameData.cards.concat(values[values.length - 1]);
				const cards = values;
				this.dispatch(dealHandCard(cards));
				// 延迟执行是为了让创建手牌之后真实坐标
				this.comp.scheduleOnce(() => {
					this.dispatch(changeDeskStatus(DeskStatus.SECOND_DISTRIBUTE))
				}, 0.1)
			}
		});
		sktMsgListener.add(SKT_MAG_TYPE.SECOND_PUSH_DEAL, 'room', (data) => {
			const fourCard = data >= 0 ? data : -1;
			if (fourCard >= 0) {
				const cards = this.comp.props.playerMap[0].gameData.cards.concat(fourCard);
				this.dispatch(dealHandCard(cards));
			}
			// 延迟执行是为了让创建手牌之后真实坐标
			this.comp.scheduleOnce(() => {
				this.dispatch(changeDeskStatus(DeskStatus.SECOND_DISTRIBUTE))
			}, 0.1)
		});
		sktMsgListener.add(SKT_MAG_TYPE.PLAYER_OP, 'room', (data: OperationVo) => {
			this.dispatch(playerBet(data.memBerInfo.memberId, data.betAmount, convertOpType(data.action, data.betAmount), data.memBerInfo.gold))
			if (data.qiuqiuNext) {
				const completionPlayer = data.qiuqiuNext.completionPlayer;
				for (const key in completionPlayer) {
					if (Object.hasOwnProperty.call(completionPlayer, key)) {
						const callAmount = completionPlayer[key];
						this.dispatch(updateCallAmount(key, callAmount))
					}
				}
				this.dispatch(changeOperationPlayer(data.qiuqiuNext.memberId))
				this.startCountdown(data.qiuqiuNext.leftTime)
			} else {
				this.startCountdown(0);
			}
		});
		sktMsgListener.add(SKT_MAG_TYPE.BALANCE, 'room', (data: BalancePlayerVo[]) => {
			let balances: BalanceInfo[] = [];
			data.forEach(v => {
				const player = getPlayer(this.comp.props.playerMap, v.memberId)
				let cards: number[] = v.pokers ? v.pokers.map(poker => convertCardValue(poker.smallNum, poker.bigNum)) : [];
				if (v.memberId === this.memberId) {
					cards = player.gameData.cards;
				}
				this.dispatch(saveBalanceInfo(v.memberId, v.memBerGold, v.gold, cards));
				balances.push({
					winloss: v.gold,
					seatIndex: player.seatIndex,
				})
			})

			this.dispatch(saveWinBalanceInfo(balances));
			this.dispatch(changeDeskStatus(DeskStatus.CLSOE))

			// 收到结算之后，延迟一哈发送准备
			window.setTimeout(() => {
				if (this.comp.node.isValid) {
					this.dispatch(changeDeskStatus(DeskStatus.WAITING))
					this.ready();
				}
			}, 3000)
		});

		sktMsgListener.add(SKT_MAG_TYPE.QUIT_ROOM, 'room', (data) => {
			this.pushQuitRoom(data.memberId);
		});
		sktMsgListener.add(SKT_MAG_TYPE.CHANGE_ROOM, 'room', (data) => {
			this.pushQuitRoom(data.memberId);
		});
	}

	/**开局下底注 */
	private beginGameBetAnte() {
		this.comp.props.playerMap.filter(v => v && v.gameData.isGame).forEach(v => {
			const gold = v.glodAmount - config.afee;
			this.dispatch(playerBet(v.uid, config.afee, OperationType.WAIT, gold));
		})
	}

	private pushQuitRoom(memberId) {
		// if (this.memberId === memberId) {
		//   this.comp.clearData();
		//   this.unMount();
		//   this.dispatch(clearRoomData(0));
		// } else {
		this.dispatch(quitSeat(memberId));

		if (this.comp.props.deskStatus === DeskStatus.COUNTDOWNING) {
			// 小于2人了，暂停倒计时
			const roomLength = this.comp.props.playerMap.filter(v => v).length
			if (roomLength < 2) {
				this.dispatch(changeDeskStatus(DeskStatus.WAITING));
			}
		}

		// }
	}

	/**获得下一个操作的座位号 */
	public getNextSeatIndex(lastIndex: number, count: number = 0) {
		if (count > config.seatNumber || !this.comp.props || !this.comp.isValid) return -1;
		const nextIndex = lastIndex + 1 >= config.seatNumber ? 0 : lastIndex + 1;
		const player = this.comp.props.playerMap[nextIndex];
		if (player && player.gameData.isGame && player.gameData.opType !== OperationType.GIVE_UP) {
			return player.seatIndex;
		}
		return this.getNextSeatIndex(nextIndex, ++count);
	}

	/**开始出牌倒计时 */
	public startCountdown(count: number, isStart: boolean = true) {
		if (!this.openationCountdownTool) {
			this.openationCountdownTool = new CountdownTool((schedule: number) => {
				if (this.comp && this.comp.isValid) {
					const seatIndex = this.comp.props.currActiveSeatIndex;
					const coutndown: Countdown = {
						countdown: schedule,
						seatIndex: seatIndex,
						time: Date.now(),
					}
					this.dispatch(operationCountdown(coutndown));
				}
				if (schedule === 0) {
					playGameBegin();
				}
			});
		}

		if (isStart) {
			count = count === -1 ? this.openationCountdownTool.getCountdown() : count;
			this.openationCountdownTool.start(count);
		} else {
			this.openationCountdownTool.setCountdown(count);
		}
	}

	/**开始游戏倒计时 */
	public beginGameCountdownHandle(count: number) {
		if (!this.beginGameCountdownTool) {
			this.beginGameCountdownTool = new CountdownTool((schedule: number) => {
				if (this.comp && this.comp.isValid) {
					const seatIndex = this.comp.props.currActiveSeatIndex;
					const coutndown: Countdown = {
						countdown: schedule,
						seatIndex: seatIndex,
						time: Date.now(),
					}
					this.dispatch(beginGameCountdown(coutndown));
				}
			});
		}

		this.beginGameCountdownTool.start(count);
	}

	private initSendCardViewModel() {
		this.sendCardViewModel = new SendCardViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.prefads_quiqui_sendcard).source)
			.appendTo(this.comp.node).connect();
		this.sendCardViewModel.setEvent({
			getNextSeatIndex: (lastIndex: number) => {
				if (lastIndex === -1) return this.comp.props.currActiveSeatIndex;
				return this.getNextSeatIndex(lastIndex, 0);
			},
			getSeatCardPoint: (seatIndex: number, index: number) => {
				if (seatIndex === 0) {
					return this.mineViewModel.comp.getHandCardPosition(index);
				}
				const viewModel = this.opponentViewModels[seatIndex];
				if (!viewModel) return null;
				return viewModel.comp.getHandCardPosition(index);
			},
			dealOver: () => {
				this.dispatch(changeDeskStatus(DeskStatus.PLAYING));
				this.startCountdown(-1, true);
			}
		})
	}

	private initOperationViewModel() {
		this.operationViewModel = new OperationViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.prefabs_quiqui_operate).source)
			.appendTo(this.comp.node).connect();
	}

	public connect() {
		this.inject({}, (state: StateType) => {
			return {
				deskStatus: state.deskData.deskStatus,
				playerMap: state.deskData.playerMap,
				lastActiveSeatIndex: state.deskData.lastActiveSeatIndex,
				currActiveSeatIndex: state.deskData.currActiveSeatIndex,
				gold: state.deskData.gold,
				totalBetAmount: state.deskData.totalBetAmount,
				newBetInfo: state.deskData.newBetInfo,
				beginGameCountdown: state.deskData.beginGameCountdown,
				balanceInfos: state.deskData.balanceInfos,
			}
		})
		return this
	}
}

export default MainBoardViewModel