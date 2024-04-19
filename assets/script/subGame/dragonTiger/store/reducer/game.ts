import { instantiate } from "cc";
import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/game";
import { default as reduxAct } from 'redux-act'

export default reduxAct.createReducer<InitStateType>({
    [ActionTypes.DRAGONTIGER_CHANGE_MY_INFO]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTIGER_CHANGE_MY_INFO>): InitStateType => ({
        ...state,
        myInfo:payload.myInfo,
    }),
    [ActionTypes.DRAGONTIGER_USERS_INFO]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTIGER_USERS_INFO>): InitStateType => ({
        ...state,
        usersInfo:payload.usersInfo,
    }),
    [ActionTypes.DRAGONTIGER_COUNT_DOWN]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTIGER_COUNT_DOWN>): InitStateType => ({
        ...state,
        countDown:payload.countDown,
    }),
    [ActionTypes.DRAGONTIGER_GOLD_DATA]:(state,payload:ActionPayLoad<ActionTypes.DRAGONTIGER_GOLD_DATA>):InitStateType=>({
        ...state,
        goldData:payload.goldData,
    }),
    [ActionTypes.DRAGONTIGER_NEW_BET_DATA]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTIGER_NEW_BET_DATA>): InitStateType => ({
        ...state,
        newBetData:payload.newBetData
    }),
    [ActionTypes.DRAGONTIGER_ALL_WIN_USER]:(state,payload:ActionPayLoad<ActionTypes.DRAGONTIGER_ALL_WIN_USER>):InitStateType=>({
        ...state,
        allWinUsers:payload.allWinUsers,
    }),
    [ActionTypes.DRAGONTIGER_CHANGE_ONLINE_NUMBER]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTIGER_CHANGE_ONLINE_NUMBER>): InitStateType => ({
        ...state,
        onlineNum:payload.onlineNum,
    }),
    [ActionTypes.DRAGONTGER_CANCEL_BET_DATA]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTGER_CANCEL_BET_DATA>): InitStateType => ({
        ...state,
        cancelBetData:payload.cancelBetData,
    
    }),
    [ActionTypes.DRAGONTGER_RESET_STORE]: (state, payload: ActionPayLoad<ActionTypes.DRAGONTGER_RESET_STORE>): InitStateType => {
        return instantiate(initState)
      }
}, initState)