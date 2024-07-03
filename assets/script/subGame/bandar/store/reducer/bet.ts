import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/bet";
import { default as reduxAct } from 'redux-act'

export default reduxAct.createReducer<InitStateType>({

  [ActionTypes.BANDAR_BET_DATA]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_BET_DATA>): InitStateType => ({
    ...state,
    betData:payload.betData
  }),

  [ActionTypes.BANDAR_NEW_BET_DATA]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_NEW_BET_DATA>): InitStateType => ({
    ...state,
    newBetData:payload.newBetData
  }),

  
  [ActionTypes.BANDAR_MEMBER_BET]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_MEMBER_BET>): InitStateType => ({
    ...state,
    memberBet:payload.memberBet
  }),

  [ActionTypes.BANDAR_LAST_BET_DATA]:(state,payload:ActionPayLoad<ActionTypes.BANDAR_LAST_BET_DATA>):InitStateType=>({
    ...state,
    lastBet:payload.lastBet,
  }),

  [ActionTypes.BANDER_CHANGE_SELECT_CHIP]:(state,payload:ActionPayLoad<ActionTypes.BANDER_CHANGE_SELECT_CHIP>):InitStateType=>({
    ...state,
    selectChip:payload.selectChip,
  }),
  [ActionTypes.BANDAR_GOLD_DATA]:(state,payload:ActionPayLoad<ActionTypes.BANDAR_GOLD_DATA>):InitStateType=>({
    ...state,
    goldData:payload.goldData,
  }),
  [ActionTypes.BANDAR_CARD_RATE]:(state,payload:ActionPayLoad<ActionTypes.BANDAR_CARD_RATE>):InitStateType=>({
    ...state,
    cardRate:payload.cardRate,
  }),
  [ActionTypes.BANDAR_CARD_TYPE]:(state,payload:ActionPayLoad<ActionTypes.BANDAR_CARD_TYPE>):InitStateType=>({
    ...state,
    cardType:payload.cardType,
  }),
  [ActionTypes.BANDAR_ALL_CARD_RATE]:(state,payload:ActionPayLoad<ActionTypes.BANDAR_ALL_CARD_RATE>):InitStateType=>({
    ...state,
    allCardRate:payload.allCardRate,
  }),
  [ActionTypes.BANDAR_ALL_WIN_USER]:(state,payload:ActionPayLoad<ActionTypes.BANDAR_ALL_WIN_USER>):InitStateType=>({
    ...state,
    allWinUsers:payload.allWinUsers,
  }),
  [ActionTypes.BANDAR_AREA_WIN_LOSE]:(state,payload:ActionPayLoad<ActionTypes.BANDAR_AREA_WIN_LOSE>):InitStateType=>({
    ...state,
    areaWinLose:payload.areaWinLose,
  }),
  [ActionTypes.BANDAR_CANCEL_BET_DATA]:(state,payload:ActionPayLoad<ActionTypes.BANDAR_CANCEL_BET_DATA>):InitStateType=>({
    ...state,
    cancelBetData:payload.cancelBetData,
  }),
}, initState);
