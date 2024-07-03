import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/history";
import { default as reduxAct } from 'redux-act'

export default reduxAct.createReducer<InitStateType>({

  [ActionTypes.BANDARQIUQIU_MIN_HISTORY]: (state, payload: ActionPayLoad<ActionTypes.BANDARQIUQIU_MIN_HISTORY>): InitStateType => ({
    ...state,
    minHistory: payload.minHistory,
   
  }),

  [ActionTypes.BANDARQIUQIU_MAX_HISTORY]: (state, payload: ActionPayLoad<ActionTypes.BANDARQIUQIU_MAX_HISTORY>): InitStateType => ({
    ...state,
    maxHistory: payload.maxHistory,
   
  }),

}, initState);
