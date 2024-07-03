import { instantiate } from "cc";
import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/pokerDetail";
import { default as reduxAct } from 'redux-act'

export default reduxAct.createReducer<InitStateType>({
  [ActionTypes.DRAGONTGER_POKER_INFO]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTGER_POKER_INFO>): InitStateType => ({
    ...state,

    pokerInfo: payload.pokerInfo,
  }),

  [ActionTypes.DRAGONTGER_POKER_LEFT]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTGER_POKER_LEFT>): InitStateType => ({
    ...state,

    pokerLeftNum: payload.pokerLeftNum,
 
  }),
  [ActionTypes.DRAGONTGER_POKER_RIGHT]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTGER_POKER_RIGHT>): InitStateType => ({
    ...state,

    pokerRightNum: payload.pokerRightNum,
 
  }),
  [ActionTypes.DRAGONTGER_POKER_SENDEDP]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTGER_POKER_SENDEDP>): InitStateType => ({
    ...state,

    sendedP: payload.sendedP,
 
  }),
  [ActionTypes.DRAGONTGER_POKER_READYSENDP]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTGER_POKER_READYSENDP>): InitStateType => ({
    ...state,

    readySendP: payload.readySendP,
 
  }),
  [ActionTypes.DRAGONTGER_POKER_WIN]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTGER_POKER_WIN>): InitStateType => ({
    ...state,

    win: payload.win,
 
  }),

  [ActionTypes.DRAGONTGER_TIPS]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTGER_TIPS>): InitStateType => ({
    ...state,

    tips: payload.tips,
 
  }),

  [ActionTypes.DRAGONTGER_VIP]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTGER_VIP>): InitStateType => ({
    ...state,

    vip: payload.vip,
 
  }),

  [ActionTypes.DRAGONTGER_LEVEL]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTGER_LEVEL>): InitStateType => ({
    ...state,

    level: payload.level,
 
  }),
  [ActionTypes.DRAGONTGER_POKER_RESET_STORE]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTGER_POKER_RESET_STORE>): InitStateType => {
    return instantiate(initState)
  }
}, initState);
