import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/pokerDetail";
import { default as reduxAct } from 'redux-act'

export default reduxAct.createReducer<InitStateType>({

  [ActionTypes.BANDARQIUQIU_BLUE_CARD]: (state, payload: ActionPayLoad<ActionTypes.BANDARQIUQIU_BLUE_CARD>): InitStateType => ({
    ...state,
    blueCard: payload.blueCard,
   
  }),

  [ActionTypes.BANDARQIUQIU_RED_CARD]: (state, payload: ActionPayLoad<ActionTypes.BANDARQIUQIU_RED_CARD>): InitStateType => ({
    ...state,
    redCard: payload.redCard,
   
  }),
  [ActionTypes.BANDARQIUQIU_TWIN_NUM]: (state, payload: ActionPayLoad<ActionTypes.BANDARQIUQIU_TWIN_NUM>): InitStateType => ({
    ...state,
    twinNum: payload.twinNum,
   
  }),

  [ActionTypes.BANDARQIUQIU_WIN_AREA]: (state, payload: ActionPayLoad<ActionTypes.BANDARQIUQIU_WIN_AREA>): InitStateType => ({
    ...state,
    winArea: payload.winArea,
   
  }),

}, initState);
