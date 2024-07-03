import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/pokerDetail";
import { default as reduxAct } from 'redux-act'

export default reduxAct.createReducer<InitStateType>({

  [ActionTypes.BANDAR_BANKER_POKER]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_BANKER_POKER>): InitStateType => ({
    ...state,

    bankerPoker: payload.bankerPoker,
 
  }),

  [ActionTypes.BANDAR_BLACK_POKER]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_BLACK_POKER>): InitStateType => ({
    ...state,

    blackPoker: payload.blackPoker,
 
  }),
  [ActionTypes.BANDAR_RED_POKER]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_RED_POKER>): InitStateType => ({
    ...state,

    redPoker: payload.redPoker,
 
  }),
  [ActionTypes.BANDAR_PLUM_POKER]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_PLUM_POKER>): InitStateType => ({
    ...state,

    plumPoker: payload.plumPoker,
 
  }),
  [ActionTypes.BANDAR_DIAMOND_POKER]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_DIAMOND_POKER>): InitStateType => ({
    ...state,

    diamondPoker: payload.diamondPoker,
 
  }),
  [ActionTypes.BANDAR_WIN_AREA]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_WIN_AREA>): InitStateType => ({
    ...state,

    winArea: payload.winArea,
 
  }),
  [ActionTypes.BANDAR_JACKPOT_WIN_CARD]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_JACKPOT_WIN_CARD>): InitStateType => ({
    ...state,

    jackpotCard: payload.jackpotCard,
 
  }),

  [ActionTypes.BANDAR_ALL_CARD_TYPE]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_ALL_CARD_TYPE>): InitStateType => ({
    ...state,

    allCardType: payload.allCardType,
 
  }),
  [ActionTypes.BANDAR_BLOCK_NUM]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_BLOCK_NUM>): InitStateType => ({
    ...state,

    blockNum: payload.blockNum,
 
  }),
  [ActionTypes.BANDAR_FARMHOUSE_NUM]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_FARMHOUSE_NUM>): InitStateType => ({
    ...state,

    farmhouse: payload.farmhouse,
 
  }),
  [ActionTypes.BANDAR_HEART_NUM]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_HEART_NUM>): InitStateType => ({
    ...state,

    heartNum: payload.heartNum,
 
  }),
  [ActionTypes.BANDAR_SAKURA_NUM]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_SAKURA_NUM>): InitStateType => ({
    ...state,

    sakuraNum: payload.sakuraNum,
 
  }),
  [ActionTypes.BANDAR_SPADE_NUM]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_SPADE_NUM>): InitStateType => ({
    ...state,

    spadeNum: payload.spadeNum,
 
  }),

}, initState);
