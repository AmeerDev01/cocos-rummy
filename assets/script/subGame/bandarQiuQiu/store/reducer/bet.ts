import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/bet";
import { default as reduxAct } from 'redux-act'

export default reduxAct.createReducer<InitStateType>({

  [ActionTypes.BANDARQIUQIU_BET_DATA]: (state, payload: ActionPayLoad<ActionTypes.BANDARQIUQIU_BET_DATA>): InitStateType => ({
    ...state,
    betData:payload.betData
  }),

  [ActionTypes.BANDARQIUQIU_NEW_BET_DATA]: (state, payload: ActionPayLoad<ActionTypes.BANDARQIUQIU_NEW_BET_DATA>): InitStateType => ({
    ...state,
    newBetData:payload.newBetData
  }),

  
  [ActionTypes.BANDARQIUQIU_MEMBER_BET]: (state, payload: ActionPayLoad<ActionTypes.BANDARQIUQIU_MEMBER_BET>): InitStateType => ({
    ...state,
    memberBet:payload.memberBet
  }),

  [ActionTypes.BANDARQIUQIU_LAST_BET_DATA]:(state,payload:ActionPayLoad<ActionTypes.BANDARQIUQIU_LAST_BET_DATA>):InitStateType=>({
    ...state,
    lastBet:payload.lastBet,
  }),

  [ActionTypes.BANDARQIUQIU_CHANGE_SELECT_CHIP]:(state,payload:ActionPayLoad<ActionTypes.BANDARQIUQIU_CHANGE_SELECT_CHIP>):InitStateType=>({
    ...state,
    selectChip:payload.selectChip,
  }),
  [ActionTypes.BANDARQIUQIU_GOLD_DATA]:(state,payload:ActionPayLoad<ActionTypes.BANDARQIUQIU_GOLD_DATA>):InitStateType=>({
    ...state,
    goldData:payload.goldData,
  }),
  [ActionTypes.BANDARQIUQIU_CARD_RATE]:(state,payload:ActionPayLoad<ActionTypes.BANDARQIUQIU_CARD_RATE>):InitStateType=>({
    ...state,
    winAreaRate:payload.winAreaRate,
  }),
  [ActionTypes.BANDARQIUQIU_CARD_TYPE]:(state,payload:ActionPayLoad<ActionTypes.BANDARQIUQIU_CARD_TYPE>):InitStateType=>({
    ...state,
    cardType:payload.cardType,
  }),
  [ActionTypes.BANDARQIUQIU_ALL_CARD_RATE]:(state,payload:ActionPayLoad<ActionTypes.BANDARQIUQIU_ALL_CARD_RATE>):InitStateType=>({
    ...state,
    allCardRate:payload.allCardRate,
  }),
  [ActionTypes.BANDARQIUQIU_ALL_WIN_USER]:(state,payload:ActionPayLoad<ActionTypes.BANDARQIUQIU_ALL_WIN_USER>):InitStateType=>({
    ...state,
    allWinUsers:payload.allWinUsers,
  }),
  [ActionTypes.BANDARQIUQIU_AREA_WIN_LOSE]:(state,payload:ActionPayLoad<ActionTypes.BANDARQIUQIU_AREA_WIN_LOSE>):InitStateType=>({
    ...state,
    areaWinLose:payload.areaWinLose,
  }),
  [ActionTypes.BANDARQIUQIU_CANCEL_BET_DATA]:(state,payload:ActionPayLoad<ActionTypes.BANDARQIUQIU_CANCEL_BET_DATA>):InitStateType=>({
    ...state,
    cancelBetData:payload.cancelBetData,
  }),
}, initState);
