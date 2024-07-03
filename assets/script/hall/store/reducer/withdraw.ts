import { instantiate } from "cc";
import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/withdraw";
import { default as reduxAct } from 'redux-act'

export default reduxAct.createReducer<InitStateType>({
  [ActionTypes.SET_BANK_CHANNEL_LIST]: (state, payload: ActionPayLoad<ActionTypes.SET_BANK_CHANNEL_LIST>): InitStateType => ({
    ...state,
    withdrawBankChannelList: payload.list
  }),
  [ActionTypes.SET_BANK_CHANNEL_CHOOSE]: (state, payload: ActionPayLoad<ActionTypes.SET_BANK_CHANNEL_CHOOSE>): InitStateType => {
    return {
      ...state,
      withdrawBankChannelChoose: payload.item
    }
  },
  [ActionTypes.RESET_WITHDRAW_DATA]: (): InitStateType => instantiate(initState)
}, initState);