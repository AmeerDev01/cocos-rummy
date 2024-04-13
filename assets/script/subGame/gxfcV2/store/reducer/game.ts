import { default as reduxAct } from 'redux-act';
import UseSetOption from "../../../../utils/UseSetOption";
import { ActionPayLoad, ActionTypes, InitStateType, initState } from "../actions/game";
import config from '../../config';

export default reduxAct.createReducer<InitStateType>({
  [ActionTypes.GXFCV2_INIT_GAME_STORE]: (state, payload: ActionPayLoad<ActionTypes.GXFCV2_INIT_GAME_STORE>): InitStateType => {
    return {
      ...payload.initState,
    }
  },
  [ActionTypes.GXFCV2_CHANGE_GAME]: (state, payload: ActionPayLoad<ActionTypes.GXFCV2_CHANGE_GAME>): InitStateType => {
    return {
      ...state,
      gameTypeInfo: payload.gameTypeInfo
    }
  },
  [ActionTypes.GXFCV2_BET_DROP_DOWN_LIST]: (state, payload: ActionPayLoad<ActionTypes.GXFCV2_BET_DROP_DOWN_LIST>): InitStateType => {
    return {
      ...state,
      betDropDownlist: payload.bool
    }
  },
  [ActionTypes.GXFCV2_UPDATE_AUTO_LAUNCHER_INFO]: (state, payload: ActionPayLoad<ActionTypes.GXFCV2_UPDATE_AUTO_LAUNCHER_INFO>): InitStateType => {
    return {
      ...state,
      autoLauncherInfo: payload.autoLauncherInfo
    }
  },
  [ActionTypes.GXFCV2_UPDATE_POSITION_ID]: (state, payload: ActionPayLoad<ActionTypes.GXFCV2_UPDATE_POSITION_ID>): InitStateType => {
    const positionItem = config.betSwitcher[0].amount.find(v => v.positionId === payload.positionId)
    const positionId = positionItem ? positionItem.positionId : config.betSwitcher[0].amount[0].positionId;
    UseSetOption.Instance().setGameOption("gxfcv2", { betTarget: positionId })
    return {
      ...state,
      positionId: positionId
    }
  },
  [ActionTypes.GXFCV2_UPDATE_WINLOSS]: (state, payload: ActionPayLoad<ActionTypes.GXFCV2_UPDATE_WINLOSS>): InitStateType => {
    return {
      ...state,
      winloss: payload.winloss
    }
  },
  [ActionTypes.GXFCV2_UPDATE_GOLD]: (state, payload: ActionPayLoad<ActionTypes.GXFCV2_UPDATE_GOLD>): InitStateType => {
    return {
      ...state,
      gold: payload.gold
    }
  },
  [ActionTypes.GXFCV2_UPDATE_DIALOGINFO]: (state, payload: ActionPayLoad<ActionTypes.GXFCV2_UPDATE_DIALOGINFO>): InitStateType => {
    return {
      ...state,
      dialogInfo: payload.dialogInfo
    }
  },
  [ActionTypes.GXFCV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO]: (state, payload: ActionPayLoad<ActionTypes.GXFCV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO>): InitStateType => {
    return {
      ...state,
      subGameAnimationPlayInfo: payload.subGameAnimationPlayInfo
    }
  },
  [ActionTypes.GXFCV2_UPDATE_JACKPOT_LIST]: (state, payload: ActionPayLoad<ActionTypes.GXFCV2_UPDATE_JACKPOT_LIST>): InitStateType => {
    return {
      ...state,
      jackpotDatas: payload.jackpotDatas
    }
  },
  [ActionTypes.GXFCV2_UPDATE_JACKPOT_AMOUNT]: (state, payload: ActionPayLoad<ActionTypes.GXFCV2_UPDATE_JACKPOT_AMOUNT>): InitStateType => {
    return {
      ...state,
      jackpotTotalAmount: payload.jackpotTotalAmount
    }
  }
}, initState);
