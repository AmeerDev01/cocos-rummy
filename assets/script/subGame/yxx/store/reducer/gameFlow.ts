import { instantiate, log } from 'cc';
import { default as reduxAct } from 'redux-act';
import config from '../../config';
import { AnimationStatus, GameStatus } from '../../type';
import { ActionPayLoad, ActionTypes, InitStateType, initState } from "../actions/gameFlow";
import { copy } from '../../../../utils/tool';

export default reduxAct.createReducer<InitStateType>({
  [ActionTypes.YXX_COUNTDOWN]: (state, payload: ActionPayLoad<ActionTypes.YXX_COUNTDOWN>): InitStateType => {
    return {
      ...state,
      countdown: payload.countdown
    }
  },
  [ActionTypes.YXX_CHANGE_GAME_STATUS]: (state, payload: ActionPayLoad<ActionTypes.YXX_CHANGE_GAME_STATUS>): InitStateType => {
    if (state.gameStatus === payload.gameStatus) {
      return { ...state };
    }

    // const _state = instantiate(state);

    let results = copy(state.results);
    const gameStatus = payload.gameStatus;
    let newResult = null;
    let countdown = 0;
    let animationStatus = null;

    if (payload.gameStatus === GameStatus.STOP_BET && payload.result) {
      // log("YXX_CHANGE_GAME_STATUS: ", payload.result);
      newResult = payload.result;
      // 数组操作了最大值就删除
      if (results.length >= config.gameOption.resultArrayMax) {
        results.shift();
      }
      results.push(payload.result);
    } else if (payload.gameStatus === GameStatus.BET) {
      animationStatus = AnimationStatus.IDLE;
      countdown = payload.second;
    } else if (payload.gameStatus === GameStatus.QUIT_GAME) {
      animationStatus = AnimationStatus.IDLE;
      results = [];
      newResult = null;
    }

    // log("YXX_CHANGE_GAME_STATUS", payload.gameStatus, payload.result);
    return {
      ...state,
      gameStatus: gameStatus,
      results: results,
      newResult: newResult,
      countdown: countdown,
      animationStatus: animationStatus,
    }
  },
  [ActionTypes.YXX_INIT_RESULT]: (state, payload: ActionPayLoad<ActionTypes.YXX_INIT_RESULT>): InitStateType => {
    // log("YXX_INIT_RESULT", payload.results);
    return {
      ...state,
      results: payload.results
    }
  },
  [ActionTypes.YXX_CHNAGE_ANIMATION_STATUS]: (state, payload: ActionPayLoad<ActionTypes.YXX_CHNAGE_ANIMATION_STATUS>): InitStateType => {
    // log("YXX_CHNAGE_ANIMATION_STATUS == ", payload.animationStatus);
    return {
      ...state,
      animationStatus: payload.animationStatus
    }
  },
  [ActionTypes.YXX_TIP_TYPE]: (state, payload: ActionPayLoad<ActionTypes.YXX_TIP_TYPE>): InitStateType => {
    return {
      ...state,
      tipType: payload.tipType
    }
  },
}, initState);