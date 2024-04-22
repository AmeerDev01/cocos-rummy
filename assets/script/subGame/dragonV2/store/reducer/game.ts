import { instantiate } from "cc";
import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/game";
import { default as reduxAct } from 'redux-act'
import { AutoLauncherType, GameType } from "../../type";
import { cacheData } from "../../dataTransfer";
import UseSetOption from "../../../../utils/UseSetOption";
import config from "../../config";

export default reduxAct.createReducer<InitStateType>({
  [ActionTypes.DRAGONV2_QUIT_GAME]: (state, payload: ActionPayLoad<ActionTypes.DRAGONV2_QUIT_GAME>): InitStateType => {
    cacheData.rollerLaunchResult = null;
    return {
      gameTypeInfo: {
        lastGameType: GameType.NONE,
        currGameType: GameType.NONE,
        viewGameType: GameType.NONE,
        leftCount: 0
      },
      betDropDownlist: false,
      autoLauncherInfo: null,
      positionId: 1,
      winloss: 0,
      gold: 0,
      dialogInfo: null,
      subGameAnimationPlayInfo: null,
      jackpotDatas: [],
      jackpotTotalAmount: 0,
      theDragonSpitsFire: 0,
    }
  },
  [ActionTypes.DRAGONV2_CHANGE_GAME]: (state, payload: ActionPayLoad<ActionTypes.DRAGONV2_CHANGE_GAME>): InitStateType => {
    return {
      ...state,
      gameTypeInfo: payload.gameTypeInfo
    }
  },
  [ActionTypes.DRAGONV2_BET_DROP_DOWN_LIST]: (state, payload: ActionPayLoad<ActionTypes.DRAGONV2_BET_DROP_DOWN_LIST>): InitStateType => {
    return {
      ...state,
      betDropDownlist: payload.bool
    }
  },
  [ActionTypes.DRAGONV2_UPDATE_AUTO_LAUNCHER_INFO]: (state, payload: ActionPayLoad<ActionTypes.DRAGONV2_UPDATE_AUTO_LAUNCHER_INFO>): InitStateType => {
    return {
      ...state,
      autoLauncherInfo: payload.autoLauncherInfo
    }
  },
  [ActionTypes.DRAGONV2_UPDATE_POSITION_ID]: (state, payload: ActionPayLoad<ActionTypes.DRAGONV2_UPDATE_POSITION_ID>): InitStateType => {
    const positionItem = config.betSwitcher[0].amount.find(v => v.positionId === payload.positionId)
    const positionId = positionItem ? positionItem.positionId : config.betSwitcher[0].amount[0].positionId;
    UseSetOption.Instance().setGameOption("dragonV2", { betTarget: positionId })
    return {
      ...state,
      positionId: positionId
    }
  },
  [ActionTypes.DRAGONV2_UPDATE_WINLOSS]: (state, payload: ActionPayLoad<ActionTypes.DRAGONV2_UPDATE_WINLOSS>): InitStateType => {
    return {
      ...state,
      winloss: payload.winloss
    }
  },
  [ActionTypes.DRAGONV2_UPDATE_GOLD]: (state, payload: ActionPayLoad<ActionTypes.DRAGONV2_UPDATE_GOLD>): InitStateType => {
    return {
      ...state,
      gold: payload.gold
    }
  },
  [ActionTypes.DRAGONV2_UPDATE_DIALOGINFO]: (state, payload: ActionPayLoad<ActionTypes.DRAGONV2_UPDATE_DIALOGINFO>): InitStateType => {
    return {
      ...state,
      dialogInfo: payload.dialogInfo
    }
  },
  [ActionTypes.DRAGONV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO]: (state, payload: ActionPayLoad<ActionTypes.DRAGONV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO>): InitStateType => {
    return {
      ...state,
      subGameAnimationPlayInfo: payload.subGameAnimationPlayInfo
    }
  },
  [ActionTypes.DRAGONV2_UPDATE_JACKPOT_LIST]: (state, payload: ActionPayLoad<ActionTypes.DRAGONV2_UPDATE_JACKPOT_LIST>): InitStateType => {
    return {
      ...state,
      jackpotDatas: payload.jackpotDatas
    }
  },
  [ActionTypes.DRAGONV2_UPDATE_THEDRAGONSPITSFIRE]: (state, payload: ActionPayLoad<ActionTypes.DRAGONV2_UPDATE_THEDRAGONSPITSFIRE>): InitStateType => {
    return {
      ...state,
      theDragonSpitsFire: payload.theDragonSpitsFire
    }
  },
  [ActionTypes.DRAGONV2_UPDATE_JACKPOT_AMOUNT]: (state, payload: ActionPayLoad<ActionTypes.DRAGONV2_UPDATE_JACKPOT_AMOUNT>): InitStateType => {
    return {
      ...state,
      jackpotTotalAmount: payload.jackpotTotalAmount
    }
  },
  [ActionTypes.DRAGONV2_RESET_STORE]: (state, payload: ActionPayLoad<ActionTypes.DRAGONV2_RESET_STORE>): InitStateType => {
    return instantiate(initState)
  }
}, initState);
