import { instantiate } from "cc";
import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/userInfo";
import { default as reduxAct } from 'redux-act'

export default reduxAct.createReducer<InitStateType>({

  [ActionTypes.DRAGONTGER_MENBER_INFO]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTGER_MENBER_INFO>): InitStateType => ({
    ...state,
    gold:payload.gold,
    memberName: payload.memberName,
    memberId:payload.memberId,
    icon: payload.icon,
    winGold:payload.winGold,
    winType:payload.winType,
    memberBet:payload.memberBet
  }),
  [ActionTypes.DRAGONTGER_MENBER_RESET_STORE]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTGER_MENBER_RESET_STORE>): InitStateType => {
    return instantiate(initState)
  }
}, initState);
