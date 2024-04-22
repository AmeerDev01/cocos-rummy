import { instantiate } from "cc";
import { default as reduxAct } from 'redux-act';
import { ActionPayLoad, ActionTypes, InitStateType, initState } from "../action/game";
import { BalanceInfo, CardType, DeskStatus, OperationType } from "../../type";
import config from "../../config";
import { getPlayer } from "../../qiuqiu_tool";

export default reduxAct.createReducer<InitStateType>({
	[ActionTypes.QIUQIU_JOIN_SEAT]: (state, payload: ActionPayLoad<ActionTypes.QIUQIU_JOIN_SEAT>): InitStateType => {
		const _state = instantiate(state)
		_state.playerMap[payload.player.seatIndex] = payload.player
		return {
			..._state
		}
	},
	[ActionTypes.QIUQIU_QUIT_SEAT]: (state, payload: ActionPayLoad<ActionTypes.QIUQIU_QUIT_SEAT>): InitStateType => {
		const _state = instantiate(state)
		const player = getPlayer(_state.playerMap, payload.memberId)
		player && (_state.playerMap[player.seatIndex] = null);
		return {
			..._state
		}
	},
	[ActionTypes.QIUQIU_UPDATE_GOLD]: (state, payload: ActionPayLoad<ActionTypes.QIUQIU_UPDATE_GOLD>): InitStateType => {
		return {
			...state,
			gold: payload.gold
		}
	},
	[ActionTypes.QIUQIU_CLEAR_DATA]: (state, payload: ActionPayLoad<ActionTypes.QIUQIU_CLEAR_DATA>): InitStateType => {
		const _state = instantiate(state)
		_state.deskStatus = DeskStatus.WAITING;
		_state.playerMap = new Array(config.seatNumber).fill(null);
		_state.lastActiveSeatIndex = -1;
		_state.currActiveSeatIndex = -1;
		_state.operationCountdown = null;
		_state.betAmount = 0;
		_state.maxAmount = 0;
		_state.totalBetAmount = 0;
		_state.newBetInfo = null;
		_state.balanceInfo = null;
		_state.balanceInfos = null;
		_state.beginGameCountdown = null;
		_state.dealCount = 0;
		return {
			..._state,
		}
	},
	[ActionTypes.QIUQIU_CHANGE_DESK_STATUS]: (state, payload: ActionPayLoad<ActionTypes.QIUQIU_CHANGE_DESK_STATUS>): InitStateType => {
		const _state = instantiate(state)
		_state.deskStatus = payload.deskStatus;
		switch (payload.deskStatus) {
			case DeskStatus.WAITING:
			case DeskStatus.COUNTDOWNING:
				_state.operationCountdown = null;
				_state.beginGameCountdown = null;
				_state.newBetInfo = null;
				_state.balanceInfo = null;
				_state.betAmount = 0;
				_state.maxAmount = 0;
				_state.totalBetAmount = 0;
				_state.dealCount = 0;
				_state.balanceInfos = [];

				_state.lastActiveSeatIndex = -1;
				_state.currActiveSeatIndex = -1;
				_state.playerMap.filter(v => v).forEach(v => {
					v.gameData.isMaster = false;
					v.gameData.winloss = 0;
					v.gameData.dealCardCount = 0;
					v.gameData.totalBetAmount = 0;
					v.gameData.betAmount = 0;
					v.gameData.opType = OperationType.WAIT;
					v.gameData.cards = [];
					v.gameData.cardType = CardType.DISERSE;
				})
				break;
		}
		if (DeskStatus.WAITING === payload.deskStatus) {
			_state.playerMap.filter(v => v).forEach(v => {
				v.gameData.isReady = false;
				v.gameData.isGame = false;
			})
		} else if (DeskStatus.SECOND_DISTRIBUTE === payload.deskStatus) { // 第二次发牌，清楚当前下注
			_state.betAmount = 0;
		}
		return {
			..._state,
		}
	},
	[ActionTypes.QIUQIU_BET]: (state, payload: ActionPayLoad<ActionTypes.QIUQIU_BET>): InitStateType => {
		const _state = instantiate(state)
		const player = getPlayer(_state.playerMap, payload.memberId);
		player.gameData.opType = payload.opType;
		if (OperationType.WAIT !== payload.opType && payload.betAmount > _state.betAmount) {
			_state.betAmount = payload.betAmount;
		}
		if (payload.betAmount > _state.maxAmount) {
			_state.maxAmount = payload.betAmount;
		}
		player.gameData.betAmount += payload.betAmount;
		player.glodAmount = payload.gold;
		_state.totalBetAmount += payload.betAmount;
		if (payload.opType !== OperationType.GIVE_UP && payload.opType !== OperationType.PASS) {
			_state.newBetInfo = {
				seatIndex: player.seatIndex,
				amount: payload.betAmount,
				time: Date.now() + Math.random(),
			}
		}
		return {
			..._state,
		}
	},
	[ActionTypes.QIUQIU_READY]: (state, payload: ActionPayLoad<ActionTypes.QIUQIU_READY>): InitStateType => {
		const _state = instantiate(state)
		const player = getPlayer(_state.playerMap, payload.memberId);
		player.gameData.isReady = true;
		// player.gameData.isGame = true;
		return {
			..._state,
		}
	},
	[ActionTypes.QIUQIU_DEAL_ACTION]: (state, payload: ActionPayLoad<ActionTypes.QIUQIU_DEAL_ACTION>): InitStateType => {
		const _state = instantiate(state)
		const player = _state.playerMap[payload.seatIndex];
		player && (player.gameData.dealCardCount = payload.dealIndex);
		return {
			..._state,
		}
	},
	[ActionTypes.QIUQIU_DEAL_HAND_CARD]: (state, payload: ActionPayLoad<ActionTypes.QIUQIU_DEAL_HAND_CARD>): InitStateType => {
		const _state = instantiate(state)
		_state.playerMap[0].gameData.cards = payload.cards;
		return {
			..._state,
		}
	},
	[ActionTypes.QIUQIU_CHANGE_DEALER]: (state, payload: ActionPayLoad<ActionTypes.QIUQIU_CHANGE_DEALER>): InitStateType => {
		const _state = instantiate(state)
		const player = getPlayer(_state.playerMap, payload.memberId);
		player.gameData.isMaster = true;
		// _state.playerMap[player.seatIndex].gameData.isMaster = true;
		_state.lastActiveSeatIndex = -1;
		_state.currActiveSeatIndex = player.seatIndex;

		// 设置当前列表中的玩家状态为游戏状态
		_state.playerMap.forEach(v => v && v.gameData.isReady && (v.gameData.isGame = true))
		return {
			..._state,
		}
	},
	[ActionTypes.QIUQIU_ADD_GOLD_ANMIE]: (state, payload: ActionPayLoad<ActionTypes.QIUQIU_ADD_GOLD_ANMIE>): InitStateType => {
		const balanceInfo: BalanceInfo = {
			seatIndex: payload.seatIndex,
			winloss: payload.winloss,
			time: Date.now()
		}
		return {
			...state,
			balanceInfo
		}
	},
	[ActionTypes.QIUQIU_SAVE_BALANCE_INFO]: (state, payload: ActionPayLoad<ActionTypes.QIUQIU_SAVE_BALANCE_INFO>): InitStateType => {
		const _state = instantiate(state)
		const player = getPlayer(_state.playerMap, payload.memberId)
		player.balanceGoldAmount = payload.gold;
		player.gameData.winloss = payload.winloss;
		player.gameData.cards = payload.cards;
		player.seatIndex > 0 && (player.gameData.dealCardCount = 0);
		return {
			..._state,
		}
	},
	[ActionTypes.QIUQIU_SYNC_BALANCE_GOLD_TO_GOLD]: (state, payload: ActionPayLoad<ActionTypes.QIUQIU_SYNC_BALANCE_GOLD_TO_GOLD>): InitStateType => {
		const _state = instantiate(state)
		if (payload.memberId) {
			const player = getPlayer(_state.playerMap, payload.memberId)
			player.glodAmount = player.balanceGoldAmount;
		} else {
			_state.playerMap.filter(v => v).forEach(v => v.glodAmount = v.balanceGoldAmount);
		}
		return {
			..._state,
		}
	},
	[ActionTypes.QIUQIU_OPERATION_COUNTDOWN]: (state, payload: ActionPayLoad<ActionTypes.QIUQIU_OPERATION_COUNTDOWN>): InitStateType => {
		return {
			...state,
			operationCountdown: payload.countdown
		}
	},
	[ActionTypes.QIUQIU_CHANGE_OPERATION_PLAYER]: (state, payload: ActionPayLoad<ActionTypes.QIUQIU_CHANGE_OPERATION_PLAYER>): InitStateType => {
		const _state = instantiate(state)
		const player = getPlayer(_state.playerMap, payload.memberId)
		player.gameData.opType = OperationType.WAIT;
		_state.lastActiveSeatIndex = _state.currActiveSeatIndex;
		_state.currActiveSeatIndex = player.seatIndex;
		return {
			..._state,
		}
	},
	[ActionTypes.QIUQIU_PLAYER_CHANGE_OP_TYPE]: (state, payload: ActionPayLoad<ActionTypes.QIUQIU_PLAYER_CHANGE_OP_TYPE>): InitStateType => {
		const _state = instantiate(state)
		const player = getPlayer(_state.playerMap, payload.memberId)
		player.gameData.opType = payload.opType;
		player.glodAmount = payload.gold;
		return {
			..._state,
		}
	},
	[ActionTypes.QIUQIU_BEGIN_GAME_COUNTDOWN]: (state, payload: ActionPayLoad<ActionTypes.QIUQIU_BEGIN_GAME_COUNTDOWN>): InitStateType => {
		return {
			...state,
			beginGameCountdown: payload.countdown
		}
	},
	[ActionTypes.QIUQIU_UPDATE_CALL_AMOUNT]: (state, payload: ActionPayLoad<ActionTypes.QIUQIU_UPDATE_CALL_AMOUNT>): InitStateType => {
		const _state = instantiate(state)
		const player = getPlayer(_state.playerMap, payload.memberId)
		player.gameData.callAmount = payload.callAmount;
		return {
			..._state,
		}
	},
	[ActionTypes.QIUQIU_SAVE_WIN_BALANCE_INFO]: (state, payload: ActionPayLoad<ActionTypes.QIUQIU_SAVE_WIN_BALANCE_INFO>): InitStateType => {
		return {
			...state,
			balanceInfos: payload.balanceInfos
		}
	},
	[ActionTypes.QIUQIU_RECONNECT_RECOVER_BET]: (state, payload: ActionPayLoad<ActionTypes.QIUQIU_RECONNECT_RECOVER_BET>): InitStateType => {
		const _state = instantiate(state)
		const player = getPlayer(_state.playerMap, payload.memberId);
		if (payload.betAmount > _state.betAmount) {
			// _state.betAmount = payload.betAmount;
		}
		if (payload.betAmount > _state.maxAmount) {
			_state.maxAmount = payload.betAmount;
		}
		_state.totalBetAmount += payload.betAmount;
		_state.newBetInfo = {
			seatIndex: player.seatIndex,
			amount: payload.betAmount,
			time: Date.now() + Math.random(),
		}
		return {
			..._state,
		}
	},
	[ActionTypes.QIUQIU_SET_PLAYER_GAME_STATUS]: (state, payload: ActionPayLoad<ActionTypes.QIUQIU_SET_PLAYER_GAME_STATUS>): InitStateType => {
		const _state = instantiate(state)
		_state.playerMap.forEach(v => v && v.gameData.isReady && (v.gameData.isGame = payload.isGame))
		return {
			..._state,
		}
	},
	[ActionTypes.QIUQIU_RECONNECT_GAME_DATA]: (state, payload: ActionPayLoad<ActionTypes.QIUQIU_RECONNECT_GAME_DATA>): InitStateType => {
		return {
			...state,
			betAmount: payload.betAmount,
			dealCount: payload.dealCount,
		}
	}
}, initState);