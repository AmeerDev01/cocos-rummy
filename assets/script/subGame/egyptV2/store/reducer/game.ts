import { default as reduxAct } from 'redux-act';
import UseSetOption from "../../../../utils/UseSetOption";
import { ActionPayLoad, ActionTypes, InitStateType, initState } from "../actions/game";

export default reduxAct.createReducer<InitStateType>({
  [ActionTypes.EGYPTV2_INIT_GAME_STORE]: (state, payload: ActionPayLoad<ActionTypes.EGYPTV2_INIT_GAME_STORE>): InitStateType => {
    return {
      ...payload.initState,
    }
  },
  [ActionTypes.EGYPTV2_CHANGE_GAME]: (state, payload: ActionPayLoad<ActionTypes.EGYPTV2_CHANGE_GAME>): InitStateType => {
    return {
      ...state,
      gameTypeInfo: payload.gameTypeInfo
    }
  },
  [ActionTypes.EGYPTV2_BET_DROP_DOWN_LIST]: (state, payload: ActionPayLoad<ActionTypes.EGYPTV2_BET_DROP_DOWN_LIST>): InitStateType => {
    return {
      ...state,
      betDropDownlist: payload.bool
    }
  },
  [ActionTypes.EGYPTV2_UPDATE_AUTO_LAUNCHER_INFO]: (state, payload: ActionPayLoad<ActionTypes.EGYPTV2_UPDATE_AUTO_LAUNCHER_INFO>): InitStateType => {
    return {
      ...state,
      autoLauncherInfo: payload.autoLauncherInfo
    }
  },
  [ActionTypes.EGYPTV2_UPDATE_POSITION_ID]: (state, payload: ActionPayLoad<ActionTypes.EGYPTV2_UPDATE_POSITION_ID>): InitStateType => {
    UseSetOption.Instance().setGameOption("egyptV2", { betTarget: payload.positionId })
    return {
      ...state,
      positionId: payload.positionId
    }
  },
  [ActionTypes.EGYPTV2_UPDATE_WINLOSS]: (state, payload: ActionPayLoad<ActionTypes.EGYPTV2_UPDATE_WINLOSS>): InitStateType => {
    return {
      ...state,
      winloss: payload.winloss
    }
  },
  [ActionTypes.EGYPTV2_UPDATE_GOLD]: (state, payload: ActionPayLoad<ActionTypes.EGYPTV2_UPDATE_GOLD>): InitStateType => {
    return {
      ...state,
      gold: Number(payload.gold.toFixed(0))
    }
  },
  [ActionTypes.EGYPTV2_UPDATE_DIALOGINFO]: (state, payload: ActionPayLoad<ActionTypes.EGYPTV2_UPDATE_DIALOGINFO>): InitStateType => {
    return {
      ...state,
      dialogInfo: payload.dialogInfo
    }
  },
  [ActionTypes.EGYPTV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO]: (state, payload: ActionPayLoad<ActionTypes.EGYPTV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO>): InitStateType => {
    return {
      ...state,
      subGameAnimationPlayInfo: payload.subGameAnimationPlayInfo
    }
  },
  [ActionTypes.EGYPTV2_UPDATE_JACKPOT_LIST]: (state, payload: ActionPayLoad<ActionTypes.EGYPTV2_UPDATE_JACKPOT_LIST>): InitStateType => {
    return {
      ...state,
      jackpotDatas: payload.jackpotDatas
    }
  },
  [ActionTypes.EGYPTV2_UPDATE_JACKPOT_AMOUNT]: (state, payload: ActionPayLoad<ActionTypes.EGYPTV2_UPDATE_JACKPOT_AMOUNT>): InitStateType => {
    return {
      ...state,
      jackpotTotalAmount: payload.jackpotTotalAmount
    }
  }
}, initState);
