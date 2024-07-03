import { instantiate, log } from "cc";
import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/bet";
import { default as reduxAct } from 'redux-act'
import { BetData } from "../../type";
import config from "../../config";

export default reduxAct.createReducer<InitStateType>({
  [ActionTypes.YXX_BET]: (state, payload: ActionPayLoad<ActionTypes.YXX_BET>): InitStateType => {
    const _state = instantiate(state)

    let currentBetData = _state.betData.find(v => v.betType === payload.betData.betType);
    if (!currentBetData) {
      currentBetData = {
        index: payload.betData.index,
        userId: payload.betData.userId,
        betId: payload.betData.betId,
        betAmount: payload.betData.betAmount,
        betType: payload.betData.betType,
        totalBetAmount: payload.betData.betAmount,
        meTotalBetAmount: 0,
        isFly: payload.betData.isFly,
      }
      _state.betData.push(currentBetData);
    } else {
      currentBetData.totalBetAmount += payload.betData.betAmount;
    }
    if (payload.betData.totalBetAmount > 0) {
      currentBetData.totalBetAmount = payload.betData.totalBetAmount;
    }
    if (payload.betData.isMyBet) {
      currentBetData.meTotalBetAmount += payload.betData.betAmount;
    }

    _state.newBetData = {
      ...payload.betData,
      totalBetAmount: currentBetData.totalBetAmount,
      meTotalBetAmount: currentBetData.meTotalBetAmount
    };

    // console.log("_state.newBetData --- ", _state.betData);
    return {
      ..._state,
    }
  },
  [ActionTypes.YXX_INIT_BET]: (state, payload: ActionPayLoad<ActionTypes.YXX_INIT_BET>): InitStateType => {
    return {
      ...state,
      betData: payload.betDatas
    }
  },
  [ActionTypes.YXX_SELECT_CHIP]: (state, payload: ActionPayLoad<ActionTypes.YXX_SELECT_CHIP>): InitStateType => {
    return {
      ...state,
      selectChip: payload.selectChip
    }
  },
  [ActionTypes.YXX_CLEAR_BET]: (state, payload: ActionPayLoad<ActionTypes.YXX_CLEAR_BET>): InitStateType => {
    const _state = instantiate(state)

    const lastBet: BetData[] = [];
    if (state.betData) {
      // 记录上一局下注
      state.betData.forEach(v => {
        if (v.meTotalBetAmount > 0) {
          lastBet.push({
            index: v.index,
            userId: v.userId,
            betId: v.betId,
            meTotalBetAmount: v.meTotalBetAmount,
            betAmount: v.meTotalBetAmount,
            betType: v.betType,
            totalBetAmount: 0,
            isMyBet: true,
          })
        }
      })
    }
    _state.lastBet = lastBet;
    _state.betData = [];
    _state.cancelBetData = null;
    _state.newBetData = null;
    if (payload.isQuit) {
      _state.selectChip = config.chipTypes[0].value;
    }
    return {
      ..._state,
    }
  },
  [ActionTypes.YXX_CANCEL_BET]: (state, payload: ActionPayLoad<ActionTypes.YXX_CANCEL_BET>): InitStateType => {
    const _state = instantiate(state)
    const currentBetData = _state.betData.find(v => v.betType === payload.betData.betType)
    currentBetData.betAmount -= payload.betData.betAmount;
    currentBetData.meTotalBetAmount -= payload.betData.betAmount;
    currentBetData.totalBetAmount -= payload.betData.betAmount;

    payload.betData.totalBetAmount = currentBetData.totalBetAmount;
    payload.betData.meTotalBetAmount = currentBetData.meTotalBetAmount;

    _state.cancelBetData = payload.betData;
    return {
      ..._state,
    }
  },
}, initState);