import { GameType } from "../../type";
import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/game";
import { default as reduxAct } from 'redux-act'

export default reduxAct.createReducer<InitStateType>({
    [ActionTypes.PHOENIX_CHANGE_GAME]: (state, payload: ActionPayLoad<ActionTypes.PHOENIX_CHANGE_GAME>): InitStateType => {

        return {
          ...state,
          lastGameType: state.currGameType === GameType.NONE ? payload.gameType : state.currGameType,
          currGameType: payload.gameType
        }
    },
    [ActionTypes.PHOENIX_CHANGE_VIEW_GAME]: (state, payload: ActionPayLoad<ActionTypes.PHOENIX_CHANGE_VIEW_GAME>): InitStateType => {
    return {
        ...state,
        viewGameType: payload.gameType
    }
    },
    [ActionTypes.PHOENIX_UPDATE_BALANCE]: (state, payload: ActionPayLoad<ActionTypes.PHOENIX_UPDATE_BALANCE>): InitStateType => {
    return {
        ...state,
        balance: payload.balance
    }
    },
    [ActionTypes.PHOENIX_CHANGE_PROFIT]: (state, payload: ActionPayLoad<ActionTypes.PHOENIX_CHANGE_PROFIT>): InitStateType => {
    return {
        ...state,
        profit: payload.profit
    }
    },
    [ActionTypes.PHOENIX_CHANGE_AUTO_LAUNCHER_TYPE]: (state, payload: ActionPayLoad<ActionTypes.PHOENIX_CHANGE_AUTO_LAUNCHER_TYPE>): InitStateType => {
    return {
        ...state,
        autoLauncherType: payload.autoLauncherType
    }
    },
    [ActionTypes.PHOENIX_UPDATE_SUBGAME_TIMES]: (state, payload: ActionPayLoad<ActionTypes.PHOENIX_UPDATE_SUBGAME_TIMES>): InitStateType => {
    return {
        ...state,
        remainSubGameTimes: payload.subGameTimes
    }
    },
    [ActionTypes.PHOENIX_SET_SUBGAME_TIMES]: (state, payload: ActionPayLoad<ActionTypes.PHOENIX_SET_SUBGAME_TIMES>): InitStateType => {
    return {
        ...state,
        subGameTimes: payload.subGameTimes
    }
    },
    [ActionTypes.PHOENIX_UPDATE_JACKPOT_AMOUNT]: (state, payload: ActionPayLoad<ActionTypes.PHOENIX_UPDATE_JACKPOT_AMOUNT>): InitStateType => {
    return {
        ...state,
        jackpotAmount: payload.jackpotAmount
    }
    },
    [ActionTypes.PHOENIX_SET_WAITING]: (state, payload: ActionPayLoad<ActionTypes.PHOENIX_SET_WAITING>): InitStateType => {
    return {
        ...state,
        isWaiting: payload.isWaiting
    }
    },
    [ActionTypes.PHOENIX_SET_AUTO_LAUNCH]: (state, payload: ActionPayLoad<ActionTypes.PHOENIX_SET_AUTO_LAUNCH>): InitStateType => {
    return {
        ...state,
        isShowAutoLaunch: payload.isShowAutoLaunch
    }
    },
    [ActionTypes.PHOENIX_SET_AUTO_LAUNCHED_TIMES]: (state, payload: ActionPayLoad<ActionTypes.PHOENIX_SET_AUTO_LAUNCHED_TIMES>): InitStateType => {
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
    [ActionTypes.PHOENIX_SET_STOP_MODE]: (state, payload: ActionPayLoad<ActionTypes.PHOENIX_SET_STOP_MODE>): InitStateType => {
    return {
        ...state,
        stopMode: payload.stopMode
    }
    },
    [ActionTypes.PHOENIX_SET_SORT]: (state, payload: ActionPayLoad<ActionTypes.PHOENIX_SET_SORT>): InitStateType => {
    return {
        ...state,
        isSortStop: payload.isSortStop
    }
    },
    [ActionTypes.PHOENIX_FREE_GAME_ID]: (state, payload: ActionPayLoad<ActionTypes.PHOENIX_FREE_GAME_ID>): InitStateType => {
        return {
            ...state,
            freeGamePositionId: payload.freeGamePositionId
        }
    },
    [ActionTypes.PHOENIX_FREE_GAME_RATE]: (state, payload: ActionPayLoad<ActionTypes.PHOENIX_FREE_GAME_RATE>): InitStateType => {
        return {
            ...state,
            freeGameRate: payload.freeGameRate
        }
    }
}, initState);