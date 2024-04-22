import { instantiate } from "cc";
import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/history";
import { default as reduxAct } from 'redux-act'

export default reduxAct.createReducer<InitStateType>({

  [ActionTypes.DRAGONTGER_HISTORY_LIST]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTGER_HISTORY_LIST>): InitStateType => ({
    ...state,

    historyList: payload.historyList,
   
  }),
  [ActionTypes.DRAGONTGER_ROOM_LEFT_INFOS]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTGER_ROOM_LEFT_INFOS>): InitStateType => ({
    ...state,

    roomLeftInfoVos: payload.roomLeftInfoVos,
   
  }),
  [ActionTypes.DRAGONTGER_ROOM_RIGHT_INFOS]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTGER_ROOM_RIGHT_INFOS>): InitStateType => ({
    ...state,

    roomRightInfoVos: payload.roomRightInfoVos,
   
  }),
  [ActionTypes.DRAGONTGER_ROOM_WIN_INFO]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTGER_ROOM_WIN_INFO>): InitStateType => ({
    ...state,

    roomWinInfo: payload.roomWinInfo,
   
  }),
  [ActionTypes.DRAGONTGER_ROOM_INFO_SIZE]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTGER_ROOM_INFO_SIZE>): InitStateType => ({
    ...state,

    roomInfoSize: payload.roomInfoSize,
   
  }),
  [ActionTypes.DRAGONTGER_MEMBER_BET]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTGER_MEMBER_BET>): InitStateType => ({
    ...state,

    memberBet: payload.memberBet,
   
  }),
  [ActionTypes.DRAGONTGER_GOLD]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTGER_GOLD>): InitStateType => ({
    ...state,
    gold:payload.gold,

  }),
  [ActionTypes.DRAGONTGER_GAMETYPE]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTGER_GAMETYPE>): InitStateType => ({
    ...state,
    gameType:payload.gameType,

  }),
  [ActionTypes.DRAGONTGER_SELECT_CHIP]:(state,payload:ActionPayLoad<ActionTypes.DRAGONTGER_SELECT_CHIP>):InitStateType=>({
    ...state,
    selectChip:payload.selectChip,
  }),
  [ActionTypes.DRAGONTGER_HISTORY_RESET_STORE]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTGER_HISTORY_RESET_STORE>): InitStateType => {
    return instantiate(initState)
  }

}, initState);
