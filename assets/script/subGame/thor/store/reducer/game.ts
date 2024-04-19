import { instantiate, log } from "cc";
import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/game";
import { default as reduxAct } from 'redux-act'
import { AutoLauncherType, GameType } from "../../type";

export default reduxAct.createReducer<InitStateType>({
  [ActionTypes.THOR_CHANGE_CURRGAMETYPE]: (state, payload: ActionPayLoad<ActionTypes.THOR_CHANGE_CURRGAMETYPE>): InitStateType => {
    return {
      ...state,
      currGameType: payload.currGameType
    }
  },
  [ActionTypes.THOR_CHANGE_VIEW_GAME]: (state, payload: ActionPayLoad<ActionTypes.THOR_CHANGE_VIEW_GAME>): InitStateType => {
    return {
      ...state,
      viewGameType: payload.viewGameType
    }
  },
  [ActionTypes.THOR_SET_GAMEMODE]: (state, payload: ActionPayLoad<ActionTypes.THOR_SET_GAMEMODE>): InitStateType => {
    return {
      ...state,
      gameMode: payload.gameMode
    }
  },
 
  [ActionTypes.THOR_UPDATE_BALANCE]: (state, payload: ActionPayLoad<ActionTypes.THOR_UPDATE_BALANCE>): InitStateType => {
    return {
      ...state,
      balance: payload.balance
    }
  },
  [ActionTypes.THOR_CHANGE_PROFIT]: (state, payload: ActionPayLoad<ActionTypes.THOR_CHANGE_PROFIT>): InitStateType => {
    return {
      ...state,
      profit: payload.profit
    }
  },
  [ActionTypes.THOR_SET_BETTINGINFORMATION]: (state, payload: ActionPayLoad<ActionTypes.THOR_SET_BETTINGINFORMATION>): InitStateType => {
    return {
      ...state,
      bettingInformation: payload.bettingInformation
    }
  },
  [ActionTypes.THOR_SET_APOSTILLE]: (state, payload: ActionPayLoad<ActionTypes.THOR_SET_APOSTILLE>): InitStateType => {
    return {
      ...state,
      apostille: payload.apostille
    }
  },
  [ActionTypes.THOR_SET_ISHASTEN]: (state, payload: ActionPayLoad<ActionTypes.THOR_SET_ISHASTEN>): InitStateType => {
    return {
      ...state,
      isHasten: payload.isHasten
    }
  },
  [ActionTypes.THOR_SET_MULTIPLETOTAL]: (state, payload: ActionPayLoad<ActionTypes.THOR_SET_MULTIPLETOTAL>): InitStateType => {
    return {
      ...state,
      multipleTotal: payload.multipleTotal
    }
  },
  [ActionTypes.THOR_SET_MINIGAMECOUNT]: (state, payload: ActionPayLoad<ActionTypes.THOR_SET_MINIGAMECOUNT>): InitStateType => {
    return {
      ...state,
      minigameCount: payload.minigameCount
    }
  },
  [ActionTypes.THOR_SET_ROLEATTACK]: (state, payload: ActionPayLoad<ActionTypes.THOR_SET_ROLEATTACK>): InitStateType => {
    return {
      ...state,
      roleAttack: payload.roleAttack
    }
  },
  [ActionTypes.THOR_CHANGE_AUTO_LAUNCHER_TYPE]: (state, payload: ActionPayLoad<ActionTypes.THOR_CHANGE_AUTO_LAUNCHER_TYPE>): InitStateType => {
    return {
      ...state,
      autoLauncherType: payload.autoLauncherType
    }
  },
  [ActionTypes.THOR_UPDATE_SUBGAME_TIMES]: (state, payload: ActionPayLoad<ActionTypes.THOR_UPDATE_SUBGAME_TIMES>): InitStateType => {
    return {
      ...state,
      remainSubGameTimes: payload.subGameTimes
    }
  },
  [ActionTypes.THOR_SET_GAMEFREEGAMETOTALMULTIPLIER]: (state, payload: ActionPayLoad<ActionTypes.THOR_SET_GAMEFREEGAMETOTALMULTIPLIER>): InitStateType => {
    return {
      ...state,
      gameFreeGametotalMultiplier: payload.gameFreeGametotalMultiplier
    }
  },
  [ActionTypes.THOR_SET_SUBGAME_TIMES]: (state, payload: ActionPayLoad<ActionTypes.THOR_SET_SUBGAME_TIMES>): InitStateType => {
    return {
      ...state,
      subGameTimes: payload.subGameTimes
    }
  },
  [ActionTypes.THOR_UPDATE_JACKPOT_AMOUNT]: (state, payload: ActionPayLoad<ActionTypes.THOR_UPDATE_JACKPOT_AMOUNT>): InitStateType => {
    return {
      ...state,
      jackpotAmount: payload.jackpotAmount
    }
  },
  [ActionTypes.THOR_SET_WAITING]: (state, payload: ActionPayLoad<ActionTypes.THOR_SET_WAITING>): InitStateType => {
    return {
      ...state,
      isWaiting: payload.isWaiting
    }
  },
  [ActionTypes.THOR_SET_AUTO_LAUNCH]: (state, payload: ActionPayLoad<ActionTypes.THOR_SET_AUTO_LAUNCH>): InitStateType => {
    return {
      ...state,
      isShowAutoLaunch: payload.isShowAutoLaunch
    }
  },
  [ActionTypes.THOR_SET_AUTO_LAUNCHED_TIMES]: (state, payload: ActionPayLoad<ActionTypes.THOR_SET_AUTO_LAUNCHED_TIMES>): InitStateType => {
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
  [ActionTypes.THOR_RESET_STORE]: (state, payload: ActionPayLoad<ActionTypes.THOR_RESET_STORE>): InitStateType => {
    return instantiate(initState)
  }
}, initState);
