import { instantiate } from "cc";
import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/game";
import { default as reduxAct } from 'redux-act'
import { AutoLauncherType, GameType } from "../../type";
import { cacheData } from "../../dataTransfer";
import UseSetOption from "../../../../utils/UseSetOption";
import config from "../../config";

export default reduxAct.createReducer<InitStateType>({
  [ActionTypes.PHOENIXV2_INIT_GAME_STORE]: (state, payload: ActionPayLoad<ActionTypes.PHOENIXV2_INIT_GAME_STORE>): InitStateType => {
    return {
      ...payload.initState,
    }
  },
  [ActionTypes.PHOENIXV2_CHANGE_GAME]: (state, payload: ActionPayLoad<ActionTypes.PHOENIXV2_CHANGE_GAME>): InitStateType => {
    return {
      ...state,
      gameTypeInfo: payload.gameTypeInfo
    }
  },
  [ActionTypes.PHOENIXV2_BET_DROP_DOWN_LIST]: (state, payload: ActionPayLoad<ActionTypes.PHOENIXV2_BET_DROP_DOWN_LIST>): InitStateType => {
    return {
      ...state,
      betDropDownlist: payload.bool
    }
  },
  [ActionTypes.PHOENIXV2_UPDATE_AUTO_LAUNCHER_INFO]: (state, payload: ActionPayLoad<ActionTypes.PHOENIXV2_UPDATE_AUTO_LAUNCHER_INFO>): InitStateType => {
    return {
      ...state,
      autoLauncherInfo: payload.autoLauncherInfo
    }
  },
  [ActionTypes.PHOENIXV2_UPDATE_POSITION_ID]: (state, payload: ActionPayLoad<ActionTypes.PHOENIXV2_UPDATE_POSITION_ID>): InitStateType => {
    const positionItem = config.betSwitcher[0].amount.find(v => v.positionId === payload.positionId)
    const positionId = positionItem ? positionItem.positionId : config.betSwitcher[0].amount[0].positionId;
    UseSetOption.Instance().setGameOption("phoenixV2", { betTarget: positionId })
    return {
      ...state,
      positionId: positionId
    }
  },
  [ActionTypes.PHOENIXV2_UPDATE_WINLOSS]: (state, payload: ActionPayLoad<ActionTypes.PHOENIXV2_UPDATE_WINLOSS>): InitStateType => {
    return {
      ...state,
      winloss: payload.winloss
    }
  },
  [ActionTypes.PHOENIXV2_UPDATE_GOLD]: (state, payload: ActionPayLoad<ActionTypes.PHOENIXV2_UPDATE_GOLD>): InitStateType => {
    return {
      ...state,
      gold: payload.gold
    }
  },
  [ActionTypes.PHOENIXV2_UPDATE_DIALOGINFO]: (state, payload: ActionPayLoad<ActionTypes.PHOENIXV2_UPDATE_DIALOGINFO>): InitStateType => {
    return {
      ...state,
      dialogInfo: payload.dialogInfo
    }
  },
  [ActionTypes.PHOENIXV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO]: (state, payload: ActionPayLoad<ActionTypes.PHOENIXV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO>): InitStateType => {
    return {
      ...state,
      subGameAnimationPlayInfo: payload.subGameAnimationPlayInfo
    }
  },
  [ActionTypes.PHOENIXV2_UPDATE_JACKPOT_LIST]: (state, payload: ActionPayLoad<ActionTypes.PHOENIXV2_UPDATE_JACKPOT_LIST>): InitStateType => {
    return {
      ...state,
      jackpotDatas: payload.jackpotDatas
    }
  },
  [ActionTypes.PHOENIXV2_UPDATE_JACKPOT_AMOUNT]: (state, payload: ActionPayLoad<ActionTypes.PHOENIXV2_UPDATE_JACKPOT_AMOUNT>): InitStateType => {
    return {
      ...state,
      jackpotTotalAmount: payload.jackpotTotalAmount
    }
  },
  [ActionTypes.PHOENIXV2_CHOOSE_SMALL_GAME]: (state, payload: ActionPayLoad<ActionTypes.PHOENIXV2_CHOOSE_SMALL_GAME>): InitStateType => {
    return {
      ...state,
      chooseSmallGame:payload.chooseSmallGame
    }
  }
}, initState);
