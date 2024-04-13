import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/userInfo";
import { default as reduxAct } from 'redux-act'

export default reduxAct.createReducer<InitStateType>({

  // [ActionTypes.DRAGONTGER_MENBER_INFO]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTGER_MENBER_INFO>): InitStateType => ({
  //   ...state,

  // }),

}, initState);
