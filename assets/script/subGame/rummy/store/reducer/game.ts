import { instantiate } from "cc";
import { default as reduxAct } from 'redux-act';
import { ActionPayLoad, ActionTypes, InitStateType, initState } from "../action/game";
import { copy } from "../../../../utils/tool";
import { Player, PlayerStatus } from "../../type";
import { equalUid } from "../../rummyTool";

export default reduxAct.createReducer<InitStateType>({
	[ActionTypes.RUMMY_INIT_ROOM_LIST]: (state, payload: ActionPayLoad<ActionTypes.RUMMY_INIT_ROOM_LIST>): InitStateType => {
		return {
			...state,
			roomInfos: payload.roomInfos,
		}
	},
	[ActionTypes.RUMMY_INIT_DATA]: (state, payload: ActionPayLoad<ActionTypes.RUMMY_INIT_DATA>): InitStateType => {
		return {
			...payload.initState,
		}
	},
	[ActionTypes.RUMMY_QUIT_ROOM]: (state, payload: ActionPayLoad<ActionTypes.RUMMY_QUIT_ROOM>): InitStateType => {
		return {
			...state,
			players: [],
			flowInfo: undefined,
			isShowOpBtn: false,
			isShowSwitchBtn: false,
			selectCardCount: 0,
			action: undefined,
			deskInfo: undefined,
			balanceCountdown: undefined,
			dropAmount: 0,
		}
	},
	[ActionTypes.RUMMY_UPDATE_GOLD]: (state, payload: ActionPayLoad<ActionTypes.RUMMY_UPDATE_GOLD>): InitStateType => {
		return {
			...state,
			gold: payload.gold,
		}
	},
	[ActionTypes.RUMMY_UPDATE_SEAT]: (state, payload: ActionPayLoad<ActionTypes.RUMMY_UPDATE_SEAT>): InitStateType => {
		const players = copy(state.players)
		players[payload.seatIndex] = payload.player;
		return {
			...state,
			players: players,
		}
	},
	[ActionTypes.RUMMY_UPDATE_SHOW_OP_BTN]: (state, payload: ActionPayLoad<ActionTypes.RUMMY_UPDATE_SHOW_OP_BTN>): InitStateType => {
		return {
			...state,
			isShowOpBtn: payload.isShowOpBtn,
		}
	},
	[ActionTypes.RUMMY_UPDATE_SWITCH_BTN]: (state, payload: ActionPayLoad<ActionTypes.RUMMY_UPDATE_SWITCH_BTN>): InitStateType => {
		return {
			...state,
			isShowSwitchBtn: payload.isShowSwitchBtn,
		}
	},
	[ActionTypes.RUMMY_UPDATE_FLOW_INFO]: (state, payload: ActionPayLoad<ActionTypes.RUMMY_UPDATE_FLOW_INFO>): InitStateType => {
		return {
			...state,
			flowInfo: payload.flowInfo,
		}
	},
	[ActionTypes.RUMMY_UPDATE_SELECT_CARD_COUNT]: (state, payload: ActionPayLoad<ActionTypes.RUMMY_UPDATE_SELECT_CARD_COUNT>): InitStateType => {
		return {
			...state,
			selectCardCount: payload.selectCardCount,
		}
	},
	[ActionTypes.RUMMY_UPDATE_ACTION]: (state, payload: ActionPayLoad<ActionTypes.RUMMY_UPDATE_ACTION>): InitStateType => {
		return {
			...state,
			action: payload.action,
		}
	},
	[ActionTypes.RUMMY_UPDATE_DESK_INFO]: (state, payload: ActionPayLoad<ActionTypes.RUMMY_UPDATE_DESK_INFO>): InitStateType => {
		return {
			...state,
			deskInfo: payload.deskInfo,
		}
	},
	[ActionTypes.RUMMY_UPDATE_BALANCE_COUNTDOWN]: (state, payload: ActionPayLoad<ActionTypes.RUMMY_UPDATE_BALANCE_COUNTDOWN>): InitStateType => {
		return {
			...state,
			balanceCountdown: payload.balanceCountdown,
		}
	},
	[ActionTypes.RUMMY_UPDATE_DROP_AMOUNT]: (state, payload: ActionPayLoad<ActionTypes.RUMMY_UPDATE_DROP_AMOUNT>): InitStateType => {
		return {
			...state,
			dropAmount: payload.dropAmount,
		}
	},
	[ActionTypes.RUMMY_UPDATE_INIT_PLAYER_STATUS]: (state, payload: ActionPayLoad<ActionTypes.RUMMY_UPDATE_INIT_PLAYER_STATUS>): InitStateType => {
		const players = copy(state.players) as Player[];
		players.forEach(v => {
			if (v) {
				v.isBanker = equalUid(v.uid, payload.bankerId);
				v.status = PlayerStatus.NONE;
				v.winloss = 0;
				v.isWin = false;
				v.isGame = true;
			}
		})
		return {
			...state,
			players: players,
		}
	},
}, initState);