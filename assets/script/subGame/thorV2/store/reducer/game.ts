import { default as reduxAct } from 'redux-act';
import UseSetOption from "../../../../utils/UseSetOption";
import { ActionPayLoad, ActionTypes, InitStateType, initState } from "../actions/game";
import { GameModeType, GameType } from '../../type';
import config from '../../config';

export default reduxAct.createReducer<InitStateType>({
  [ActionTypes.THORV2_INIT_GAME_STORE]: (state, payload: ActionPayLoad<ActionTypes.THORV2_INIT_GAME_STORE>): InitStateType => {
    return {
      ...payload.initState,
    }
  },
  [ActionTypes.THORV2_CHANGE_GAME]: (state, payload: ActionPayLoad<ActionTypes.THORV2_CHANGE_GAME>): InitStateType => {
    return {
      ...state,
      gameTypeInfo: payload.gameTypeInfo
    }
  },
  [ActionTypes.THORV2_BET_DROP_DOWN_LIST]: (state, payload: ActionPayLoad<ActionTypes.THORV2_BET_DROP_DOWN_LIST>): InitStateType => {
    return {
      ...state,
      betDropDownlist: payload.bool
    }
  },
  [ActionTypes.THORV2_UPDATE_AUTO_LAUNCHER_INFO]: (state, payload: ActionPayLoad<ActionTypes.THORV2_UPDATE_AUTO_LAUNCHER_INFO>): InitStateType => {
    return {
      ...state,
      autoLauncherInfo: payload.autoLauncherInfo
    }
  },
  [ActionTypes.THORV2_UPDATE_POSITION_ID]: (state, payload: ActionPayLoad<ActionTypes.THORV2_UPDATE_POSITION_ID>): InitStateType => {
    const positionItem = config.betSwitcher[0].amount.find(v => v.positionId === payload.positionId)
    const positionId = positionItem ? positionItem.positionId : config.betSwitcher[0].amount[0].positionId;
    UseSetOption.Instance().setGameOption("thorV2", { betTarget: positionId })
    return {
      ...state,
      positionId: positionId
    }
  },
  [ActionTypes.THORV2_UPDATE_WINLOSS]: (state, payload: ActionPayLoad<ActionTypes.THORV2_UPDATE_WINLOSS>): InitStateType => {
    return {
      ...state,
      winloss: payload.winloss
    }
  },
  [ActionTypes.THORV2_UPDATE_SUB_GAME_WINLOSS]: (state, payload: ActionPayLoad<ActionTypes.THORV2_UPDATE_SUB_GAME_WINLOSS>): InitStateType => {
    return {
      ...state,
      subGameWinloss: payload.subGameWinloss
    }
  },
  [ActionTypes.THORV2_UPDATE_GOLD]: (state, payload: ActionPayLoad<ActionTypes.THORV2_UPDATE_GOLD>): InitStateType => {
    return {
      ...state,
      gold: payload.gold
    }
  },
  [ActionTypes.THORV2_UPDATE_DIALOGINFO]: (state, payload: ActionPayLoad<ActionTypes.THORV2_UPDATE_DIALOGINFO>): InitStateType => {
    return {
      ...state,
      dialogInfo: payload.dialogInfo
    }
  },
  [ActionTypes.THORV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO]: (state, payload: ActionPayLoad<ActionTypes.THORV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO>): InitStateType => {
    return {
      ...state,
      subGameAnimationPlayInfo: payload.subGameAnimationPlayInfo
    }
  },
  [ActionTypes.THORV2_UPDATE_JACKPOT_LIST]: (state, payload: ActionPayLoad<ActionTypes.THORV2_UPDATE_JACKPOT_LIST>): InitStateType => {
    return {
      ...state,
      jackpotDatas: payload.jackpotDatas
    }
  },
  [ActionTypes.THORV2_UPDATE_JACKPOT_AMOUNT]: (state, payload: ActionPayLoad<ActionTypes.THORV2_UPDATE_JACKPOT_AMOUNT>): InitStateType => {
    return {
      ...state,
      jackpotTotalAmount: payload.jackpotTotalAmount
    }
  },
  [ActionTypes.THORV2_UPDATE_WIN_ICON_DATA]: (state, payload: ActionPayLoad<ActionTypes.THORV2_UPDATE_WIN_ICON_DATA>): InitStateType => {
    return {
      ...state,
      winIconDataItem: payload.winIconDataItem
    }
  },
  [ActionTypes.THORV2_PLAY_THOR_ANIMATION]: (state, payload: ActionPayLoad<ActionTypes.THORV2_PLAY_THOR_ANIMATION>): InitStateType => {
    return {
      ...state,
      playThorAnimation: payload.playThorAnimation
    }
  },
  [ActionTypes.THORV2_PLAY_WIN_ODDS_ANIMATION]: (state, payload: ActionPayLoad<ActionTypes.THORV2_PLAY_WIN_ODDS_ANIMATION>): InitStateType => {
    return {
      ...state,
      playWinOddsAnimation: payload.playWinOddsAnimation
    }
  },
  [ActionTypes.THORV2_UPDATE_GAME_MODE]: (state, payload: ActionPayLoad<ActionTypes.THORV2_UPDATE_GAME_MODE>): InitStateType => {
    return {
      ...state,
      betAmount: payload.gameModeType === GameModeType.buyToWin ? config.rateAmount : config.betAmount,
      gameModeType: payload.gameModeType
    }
  },
  [ActionTypes.THORV2_UPDATE_FREE_GAME_ODDS]: (state, payload: ActionPayLoad<ActionTypes.THORV2_UPDATE_FREE_GAME_ODDS>): InitStateType => {
    return {
      ...state,
      freeGameOdds: payload.freeGameOdds
    }
  }
}, initState);
