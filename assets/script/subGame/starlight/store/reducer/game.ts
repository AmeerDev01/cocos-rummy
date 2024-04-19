import { instantiate, log } from "cc";
import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/game";
import { default as reduxAct } from 'redux-act'
import { AutoLauncherType, GameType } from "../../type";

export default reduxAct.createReducer<InitStateType>({
  [ActionTypes.STARLIGHT_CHANGE_CURRGAMETYPE]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_CHANGE_CURRGAMETYPE>): InitStateType => {
    return {
      ...state,
      currGameType: payload.currGameType
    }
  },
  [ActionTypes.STARLIGHT_CHANGE_VIEW_GAME]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_CHANGE_VIEW_GAME>): InitStateType => {
    return {
      ...state,
      viewGameType: payload.viewGameType
    }
  },
  [ActionTypes.STARLIGHT_SET_GAMEMODE]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_SET_GAMEMODE>): InitStateType => {
    return {
      ...state,
      gameMode: payload.gameMode
    }
  },
 
  [ActionTypes.STARLIGHT_UPDATE_BALANCE]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_UPDATE_BALANCE>): InitStateType => {
    return {
      ...state,
      balance:Number(payload.balance.toFixed(0))
    }
  },
  [ActionTypes.STARLIGHT_CHANGE_PROFIT]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_CHANGE_PROFIT>): InitStateType => {
    return {
      ...state,
      profit: payload.profit
    }
  },
  [ActionTypes.STARLIGHT_SET_BETTINGINFORMATION]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_SET_BETTINGINFORMATION>): InitStateType => {
    return {
      ...state,
      bettingInformation: payload.bettingInformation
    }
  },
  [ActionTypes.STARLIGHT_SET_APOSTILLE]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_SET_APOSTILLE>): InitStateType => {
    return {
      ...state,
      apostille: payload.apostille
    }
  },
  [ActionTypes.STARLIGHT_SET_ISHASTEN]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_SET_ISHASTEN>): InitStateType => {
    return {
      ...state,
      isHasten: payload.isHasten
    }
  },
  [ActionTypes.STARLIGHT_SET_MULTIPLETOTAL]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_SET_MULTIPLETOTAL>): InitStateType => {
    return {
      ...state,
      multipleTotal: payload.multipleTotal
    }
  },
  [ActionTypes.STARLIGHT_SET_MINIGAMECOUNT]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_SET_MINIGAMECOUNT>): InitStateType => {
    return {
      ...state,
      minigameCount: payload.minigameCount
    }
  },
  [ActionTypes.STARLIGHT_SET_ROLEATTACK]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_SET_ROLEATTACK>): InitStateType => {
    return {
      ...state,
      roleAttack: payload.roleAttack
    }
  },
  [ActionTypes.STARLIGHT_CHANGE_AUTO_LAUNCHER_TYPE]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_CHANGE_AUTO_LAUNCHER_TYPE>): InitStateType => {
    console.log(payload.autoLauncherType);
    return {
      ...state,
      autoLauncherType: payload.autoLauncherType
    }
  },
  [ActionTypes.STARLIGHT_UPDATE_SUBGAME_TIMES]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_UPDATE_SUBGAME_TIMES>): InitStateType => {
    return {
      ...state,
      remainSubGameTimes: payload.subGameTimes
    }
  },
  [ActionTypes.STARLIGHT_SET_GAMEFREEGAMETOTALMULTIPLIER]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_SET_GAMEFREEGAMETOTALMULTIPLIER>): InitStateType => {
    return {
      ...state,
      gameFreeGametotalMultiplier: payload.gameFreeGametotalMultiplier
    }
  },
  [ActionTypes.STARLIGHT_SET_SUBGAME_TIMES]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_SET_SUBGAME_TIMES>): InitStateType => {
    return {
      ...state,
      subGameTimes: payload.subGameTimes
    }
  },
  [ActionTypes.STARLIGHT_UPDATE_JACKPOT_AMOUNT]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_UPDATE_JACKPOT_AMOUNT>): InitStateType => {
    return {
      ...state,
      jackpotAmount: payload.jackpotAmount
    }
  },
  [ActionTypes.STARLIGHT_SET_WAITING]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_SET_WAITING>): InitStateType => {
    return {
      ...state,
      isWaiting: payload.isWaiting
    }
  },
  [ActionTypes.STARLIGHT_SET_AUTO_LAUNCH]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_SET_AUTO_LAUNCH>): InitStateType => {
    return {
      ...state,
      isShowAutoLaunch: payload.isShowAutoLaunch
    }
  },
  [ActionTypes.STARLIGHT_SET_AUTO_LAUNCHED_TIMES]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_SET_AUTO_LAUNCHED_TIMES>): InitStateType => {
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
  [ActionTypes.STARLIGHT_RESET_STORE]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_RESET_STORE>): InitStateType => {
    return instantiate(initState)
  }
}, initState);
