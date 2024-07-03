import { default as reduxAct } from 'redux-act';
import UseSetOption from "../../../../utils/UseSetOption";
import { ActionPayLoad, ActionTypes, InitStateType, initState } from "../actions/game";
import { GameModeType, GameType } from '../../type';
import config from '../../config';

export default reduxAct.createReducer<InitStateType>({
  [ActionTypes.STARLIGHTV2_INIT_GAME_STORE]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHTV2_INIT_GAME_STORE>): InitStateType => {
    return {
      ...payload.initState,
    }
  },
  [ActionTypes.STARLIGHTV2_CHANGE_GAME]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHTV2_CHANGE_GAME>): InitStateType => {
    return {
      ...state,
      gameTypeInfo: payload.gameTypeInfo
    }
  },
  [ActionTypes.STARLIGHTV2_BET_DROP_DOWN_LIST]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHTV2_BET_DROP_DOWN_LIST>): InitStateType => {
    return {
      ...state,
      betDropDownlist: payload.bool
    }
  },
  [ActionTypes.STARLIGHTV2_UPDATE_AUTO_LAUNCHER_INFO]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_AUTO_LAUNCHER_INFO>): InitStateType => {
    return {
      ...state,
      autoLauncherInfo: payload.autoLauncherInfo
    }
  },
  [ActionTypes.STARLIGHTV2_UPDATE_POSITION_ID]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_POSITION_ID>): InitStateType => {
    const positionItem = config.betSwitcher[0].amount.find(v => v.positionId === payload.positionId)
    const positionId = positionItem ? positionItem.positionId : config.betSwitcher[0].amount[0].positionId;
    UseSetOption.Instance().setGameOption("starlightV2", { betTarget: positionId })
    return {
      ...state,
      positionId: positionId
    }
  },
  [ActionTypes.STARLIGHTV2_UPDATE_WINLOSS]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_WINLOSS>): InitStateType => {
    return {
      ...state,
      winloss: payload.winloss
    }
  },
  [ActionTypes.STARLIGHTV2_UPDATE_SUB_GAME_WINLOSS]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_SUB_GAME_WINLOSS>): InitStateType => {
    return {
      ...state,
      subGameWinloss: payload.subGameWinloss
    }
  },
  [ActionTypes.STARLIGHTV2_UPDATE_GOLD]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_GOLD>): InitStateType => {
    return {
      ...state,
      gold: payload.gold
    }
  },
  [ActionTypes.STARLIGHTV2_UPDATE_DIALOGINFO]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_DIALOGINFO>): InitStateType => {
    return {
      ...state,
      dialogInfo: payload.dialogInfo
    }
  },
  [ActionTypes.STARLIGHTV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO>): InitStateType => {
    return {
      ...state,
      subGameAnimationPlayInfo: payload.subGameAnimationPlayInfo
    }
  },
  [ActionTypes.STARLIGHTV2_UPDATE_JACKPOT_LIST]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_JACKPOT_LIST>): InitStateType => {
    return {
      ...state,
      jackpotDatas: payload.jackpotDatas
    }
  },
  [ActionTypes.STARLIGHTV2_UPDATE_JACKPOT_AMOUNT]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_JACKPOT_AMOUNT>): InitStateType => {
    return {
      ...state,
      jackpotTotalAmount: payload.jackpotTotalAmount
    }
  },
  [ActionTypes.STARLIGHTV2_UPDATE_WIN_ICON_DATA]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_WIN_ICON_DATA>): InitStateType => {
    return {
      ...state,
      winIconDataItem: payload.winIconDataItem
    }
  },
  [ActionTypes.STARLIGHTV2_PLAY_THOR_ANIMATION]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHTV2_PLAY_THOR_ANIMATION>): InitStateType => {
    return {
      ...state,
      playThorAnimation: payload.playThorAnimation
    }
  },
  [ActionTypes.STARLIGHTV2_PLAY_WIN_ODDS_ANIMATION]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHTV2_PLAY_WIN_ODDS_ANIMATION>): InitStateType => {
    return {
      ...state,
      playWinOddsAnimation: payload.playWinOddsAnimation
    }
  },
  [ActionTypes.STARLIGHTV2_UPDATE_GAME_MODE]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_GAME_MODE>): InitStateType => {
    return {
      ...state,
      betAmount: payload.gameModeType === GameModeType.buyToWin ? config.rateAmount : config.betAmount,
      gameModeType: payload.gameModeType
    }
  },
  [ActionTypes.STARLIGHTV2_UPDATE_FREE_GAME_ODDS]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_FREE_GAME_ODDS>): InitStateType => {
    return {
      ...state,
      freeGameOdds: payload.freeGameOdds
    }
  }
}, initState);
