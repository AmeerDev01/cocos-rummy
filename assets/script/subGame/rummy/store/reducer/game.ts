import { instantiate } from "cc";
import { default as reduxAct } from 'redux-act';
import { ActionPayLoad, ActionTypes, InitStateType, initState } from "../action/game";

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
			cardHeapInfo: undefined,
			laiziPoint: 0,
			selectCardCount: 0,
			action: undefined,
			touchCard: undefined,
		}
	},
	[ActionTypes.RUMMY_UPDATE_GOLD]: (state, payload: ActionPayLoad<ActionTypes.RUMMY_UPDATE_GOLD>): InitStateType => {
		return {
			...state,
			gold: payload.gold,
		}
	},
	[ActionTypes.RUMMY_UPDATE_SHOW_OP_BTN]: (state, payload: ActionPayLoad<ActionTypes.RUMMY_UPDATE_SHOW_OP_BTN>): InitStateType => {
		return {
			...state,
			isShowOpBtn: payload.isShowOpBtn,
		}
	},
	[ActionTypes.RUMMY_UPDATE_FLOW_INFO]: (state, payload: ActionPayLoad<ActionTypes.RUMMY_UPDATE_FLOW_INFO>): InitStateType => {
		return {
			...state,
			flowInfo: payload.flowInfo,
		}
	},
	[ActionTypes.RUMMY_UPDATE_CARD_HEAP_INFO]: (state, payload: ActionPayLoad<ActionTypes.RUMMY_UPDATE_CARD_HEAP_INFO>): InitStateType => {
		return {
			...state,
			cardHeapInfo: payload.cardHeapInfo,
		}
	},
	[ActionTypes.RUMMY_UPDATE_LAIZI_POINT]: (state, payload: ActionPayLoad<ActionTypes.RUMMY_UPDATE_LAIZI_POINT>): InitStateType => {
		return {
			...state,
			laiziPoint: payload.laiziPoint,
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
	[ActionTypes.RUMMY_UPDATE_TOUCH_CARD]: (state, payload: ActionPayLoad<ActionTypes.RUMMY_UPDATE_TOUCH_CARD>): InitStateType => {
		return {
			...state,
			touchCard: payload.touchCard,
		}
	},
	[ActionTypes.RUMMY_UPDATE_DESK_INFO]: (state, payload: ActionPayLoad<ActionTypes.RUMMY_UPDATE_DESK_INFO>): InitStateType => {
		return {
			...state,
			deskInfo: payload.deskInfo,
		}
	},
}, initState);