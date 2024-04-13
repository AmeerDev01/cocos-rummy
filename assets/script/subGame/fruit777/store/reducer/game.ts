import { instantiate } from "cc";
import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/game";
import { default as reduxAct } from 'redux-act'
import { AutoLauncherType, GameType } from "../../type";

export default reduxAct.createReducer<InitStateType>({
  [ActionTypes.FRUIT777_CHANGE_GAME]: (state, payload: ActionPayLoad<ActionTypes.FRUIT777_CHANGE_GAME>): InitStateType => {
    // const _state = instantiate(state)
    // _state.lastGameType = _state.currGameType === GameType.NONE ? payload.gameType : _state.currGameType
    // _state.currGameType = payload.gameType
    return {
      ...state,
      lastGameType: state.currGameType === GameType.NONE ? payload.gameType : state.currGameType,
      currGameType: payload.gameType
    }
  },
  [ActionTypes.FRUIT777_CHANGE_VIEW_GAME]: (state, payload: ActionPayLoad<ActionTypes.FRUIT777_CHANGE_VIEW_GAME>): InitStateType => {
    return {
      ...state,
      viewGameType: payload.gameType
    }
  },
  [ActionTypes.FRUIT777_UPDATE_BALANCE]: (state, payload: ActionPayLoad<ActionTypes.FRUIT777_UPDATE_BALANCE>): InitStateType => {
    return {
      ...state,
      balance: payload.balance
    }
  },
  [ActionTypes.FRUIT777_CHANGE_PROFIT]: (state, payload: ActionPayLoad<ActionTypes.FRUIT777_CHANGE_PROFIT>): InitStateType => {
    return {
      ...state,
      profit: payload.profit
    }
  },
  [ActionTypes.FRUIT777_CHANGE_AUTO_LAUNCHER_TYPE]: (state, payload: ActionPayLoad<ActionTypes.FRUIT777_CHANGE_AUTO_LAUNCHER_TYPE>): InitStateType => {
    return {
      ...state,
      autoLauncherType: payload.autoLauncherType
    }
  },
  [ActionTypes.FRUIT777_UPDATE_SUBGAME_TIMES]: (state, payload: ActionPayLoad<ActionTypes.FRUIT777_UPDATE_SUBGAME_TIMES>): InitStateType => {
    return {
      ...state,
      remainSubGameTimes: payload.subGameTimes
    }
  },
  [ActionTypes.FRUIT777_SET_SUBGAME_TIMES]: (state, payload: ActionPayLoad<ActionTypes.FRUIT777_SET_SUBGAME_TIMES>): InitStateType => {
    return {
      ...state,
      subGameTimes: payload.subGameTimes
    }
  },
  [ActionTypes.FRUIT777_UPDATE_JACKPOT_AMOUNT]: (state, payload: ActionPayLoad<ActionTypes.FRUIT777_UPDATE_JACKPOT_AMOUNT>): InitStateType => {
    return {
      ...state,
      jackpotAmount: payload.jackpotAmount
    }
  },
  [ActionTypes.FRUIT777_SET_WAITING]: (state, payload: ActionPayLoad<ActionTypes.FRUIT777_SET_WAITING>): InitStateType => {
    return {
      ...state,
      isWaiting: payload.isWaiting
    }
  },
  [ActionTypes.FRUIT777_SET_AUTO_LAUNCH]: (state, payload: ActionPayLoad<ActionTypes.FRUIT777_SET_AUTO_LAUNCH>): InitStateType => {
    return {
      ...state,
      isShowAutoLaunch: payload.isShowAutoLaunch
    }
  },
  [ActionTypes.FRUIT777_SET_AUTO_LAUNCHED_TIMES]: (state, payload: ActionPayLoad<ActionTypes.FRUIT777_SET_AUTO_LAUNCHED_TIMES>): InitStateType => {
    if (payload.autoLaunchedTimes === undefined) {
      return {
        ...state,
        autoLaunchedTimes: state.autoLaunchedTimes + 1
      }
    }
    return {
      ...state,
      autoLaunchedTimes: payload.autoLaunchedTimes
    }
  },
  [ActionTypes.FRUIT777_SET_STOP_MODE]: (state, payload: ActionPayLoad<ActionTypes.FRUIT777_SET_STOP_MODE>): InitStateType => {
    return {
      ...state,
      stopMode: payload.stopMode
    }
  },
  [ActionTypes.FRUIT777_SET_SORT]: (state, payload: ActionPayLoad<ActionTypes.FRUIT777_SET_SORT>): InitStateType => {
    return {
      ...state,
      isSortStop: payload.isSortStop
    }
  },
  [ActionTypes.FRUIT777_RESET_STORE]: (state, payload: ActionPayLoad<ActionTypes.FRUIT777_RESET_STORE>): InitStateType => {
    return instantiate(initState)
  }
}, initState);
