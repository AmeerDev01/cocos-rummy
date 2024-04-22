import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/history";
import { default as reduxAct } from 'redux-act'

export default reduxAct.createReducer<InitStateType>({

  [ActionTypes.BANDAR_HISTORY_RESULT1]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_HISTORY_RESULT1>): InitStateType => ({
    ...state,
    result1: payload.result1,
   
  }),
  [ActionTypes.BANDAR_HISTORY_RESULT2]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_HISTORY_RESULT2>): InitStateType => ({
    ...state,
    result2: payload.result2,
   
  }),

  [ActionTypes.BANDAR_HISTORY_RESULT3]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_HISTORY_RESULT3>): InitStateType => ({
    ...state,
    result3: payload.result3,
   
  }),

  [ActionTypes.BANDAR_HISTORY_RESULT4]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_HISTORY_RESULT4>): InitStateType => ({
    ...state,
    result4: payload.result4,
   
  }),
  [ActionTypes.BANDAR_HISTORY_TREN]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_HISTORY_TREN>): InitStateType => ({
    ...state,
    tren: payload.tren,
   
  }),
  [ActionTypes.BANDAR_HISTORY_STATISTIK]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_HISTORY_STATISTIK>): InitStateType => ({
    ...state,
    statistik: payload.statistik,
   
  }),
  [ActionTypes.BANDAR_HISTORY_REKOR]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_HISTORY_REKOR>): InitStateType => ({
    ...state,
    rekor: payload.rekor,
   
  }),
  [ActionTypes.BANDAR_JACKPOT_WIN]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_JACKPOT_WIN>): InitStateType => ({
    ...state,
    jackpotWin: payload.jackpotWin,
   
  }),


}, initState);
