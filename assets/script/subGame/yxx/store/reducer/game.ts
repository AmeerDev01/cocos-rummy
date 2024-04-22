import { instantiate, log } from "cc";
import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/game";
import { default as reduxAct } from 'redux-act'
import config from "../../config";
import { copy } from "../../../../utils/tool";

export default reduxAct.createReducer<InitStateType>({
  [ActionTypes.YXX_INIT_SEATS]: (state, payload: ActionPayLoad<ActionTypes.YXX_INIT_SEATS>): InitStateType => {
    const seats = payload.seats;
    return {
      ...state,
      seats
    }
  },
  [ActionTypes.YXX_CHANGE_ONLINE_NUMBER]: (state, payload: ActionPayLoad<ActionTypes.YXX_CHANGE_ONLINE_NUMBER>): InitStateType => {
    return {
      ...state,
      onlineNumber: payload.onlineNumber
    }
  },
  [ActionTypes.YXX_CHANGE_SEAT]: (state, payload: ActionPayLoad<ActionTypes.YXX_CHANGE_SEAT>): InitStateType => {
    const seats = copy(state.seats);
    let myHead = copy(state.myHead);
    if (payload.headType.index < config.gameOption.seatNumber) {
      seats[payload.headType.index] = payload.headType;
    }
    if (myHead && myHead.userId === payload.headType.userId) {
      myHead = copy(payload.headType);
    }
    // log("YXX_CHANGE_SEAT ,", payload.headType.index, _state.seats[payload.headType.index].joggle);
    return {
      ...state,
      seats,
      myHead
    }
  },
  [ActionTypes.YXX_CHANGE_ME_GOLD]: (state, payload: ActionPayLoad<ActionTypes.YXX_CHANGE_ME_GOLD>): InitStateType => {
    const myHead = instantiate(state.myHead)
    myHead.gold = payload.gold;
    return {
      ...state,
      myHead
    }
  },
  [ActionTypes.YXX_CHANGE_JOIN_GAME]: (state, payload: ActionPayLoad<ActionTypes.YXX_CHANGE_JOIN_GAME>): InitStateType => {
    const seats = copy(state.seats);
    if (payload.headType.index < config.gameOption.seatNumber) {
      const headType = seats[payload.headType.index];
      if (headType.has) {
        log(` ${headType.userId} 加入 到 ${headType.index} 座位上有人了，之前的人是 ${headType.has}`);
        return { ...state }
      }
      payload.headType.has = true;
      seats[payload.headType.index] = payload.headType;
    }
    const myHead = { ...payload.headType };
    return {
      ...state,
      seats,
      myHead
    }
  },
  [ActionTypes.YXX_CHANGE_OTHER_JOIN_GAME]: (state, payload: ActionPayLoad<ActionTypes.YXX_CHANGE_OTHER_JOIN_GAME>): InitStateType => {
    const seats = copy(state.seats);
    if (payload.headType.index < config.gameOption.seatNumber) {
      const headType = seats[payload.headType.index];
      if (headType.has) {
        log(` ${headType.userId} 加入 到 ${headType.index} 座位上有人了，之前的人是 ${headType.has}`);
        return { ...state }
      }
      payload.headType.has = true;
      seats[payload.headType.index] = payload.headType;
    }
    const onlineNumber = state.onlineNumber + 1;
    return {
      ...state,
      seats,
      onlineNumber
    }
  },
  [ActionTypes.YXX_CHANGE_SEAT_BET]: (state, payload: ActionPayLoad<ActionTypes.YXX_CHANGE_SEAT_BET>): InitStateType => {
    // const _state = instantiate(state)
    const seats = copy(state.seats);
    seats.forEach(v => {
      if (v.userId === payload.betData.userId) {
        v.gold -= payload.betData.betAmount;
        v.betAmount += payload.betData.betAmount;
      }
    })

    const myHead = copy(state.myHead);
    if (myHead && payload.betData.isMyBet) {
      // 金币变化会通过服务器推送10消息来改变，这里不做处理
      // 2023-11-21 避免感觉卡顿，下注之后等服务器返回数据之后再执行动画，前端先做下注动画，如果下注之后前端再把下注金额加上去
      config.preBet && (myHead.gold -= payload.betData.betAmount);
      myHead.betAmount += payload.betData.betAmount;
    }

    // console.log('YXX_CHANGE_SEAT_BET', _state.myHead.gold, payload.betData.betAmount)

    return {
      ...state,
      seats,
      myHead
    }
  },
  [ActionTypes.YXX_CHANGE_QUIT_GAME]: (state, payload: ActionPayLoad<ActionTypes.YXX_CHANGE_QUIT_GAME>): InitStateType => {
    const myHead = null;
    const onlineNumber = 0;
    const powers = [];
    return {
      ...state,
      myHead,
      onlineNumber,
      powers,
    }
  },
  [ActionTypes.YXX_CHANGE_CLEAR_DATA]: (state, payload: ActionPayLoad<ActionTypes.YXX_CHANGE_CLEAR_DATA>): InitStateType => {
    const seats = copy(state.seats);
    seats.forEach(v => {
      v.betAmount = 0;
      v.winloss = 0;
    })
    let myHead;
    if (state.myHead) {
      myHead = copy(state.myHead);
      myHead.winloss = 0;
      myHead.betAmount = 0;
    }
    return {
      ...state,
      seats,
      myHead
    }
  },
  [ActionTypes.YXX_CHANGE_SEAT_WINLOSS]: (state, payload: ActionPayLoad<ActionTypes.YXX_CHANGE_SEAT_WINLOSS>): InitStateType => {
    const seats = copy(state.seats);
    if (payload.index < config.gameOption.seatNumber) {
      seats[payload.index].winloss = payload.winloss;
      seats[payload.index].gold = payload.gold;
    }
    return {
      ...state,
      seats
    }
  },
  [ActionTypes.YXX_UPDATE_POWER]: (state, payload: ActionPayLoad<ActionTypes.YXX_UPDATE_POWER>): InitStateType => {
    return {
      ...state,
      powers: payload.powers
    }
  },
  [ActionTypes.YXX_GAME_CANCEL_BET]: (state, payload: ActionPayLoad<ActionTypes.YXX_GAME_CANCEL_BET>): InitStateType => {
    const seats = copy(state.seats);
    seats.forEach(v => {
      if (state.myHead && v.userId === state.myHead.userId) {
        v.gold += payload.cancelAmount;
        v.betAmount -= payload.cancelAmount;
      }
    })

    let myHead;
    if (state.myHead) {
      myHead = copy(state.myHead);
      // _state.myHead.gold += payload.cancelAmount;
      myHead.betAmount -= payload.cancelAmount;
    }
    return {
      ...state,
      myHead,
      seats
    }
  },
}, initState);