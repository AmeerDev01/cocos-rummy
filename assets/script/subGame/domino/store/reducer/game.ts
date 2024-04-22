import { instantiate } from "cc";
import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../action/game"
import { default as reduxAct } from 'redux-act'
import { DeskStatus, PlayerSatus, SeatPosition, calCardAzimuth, getCardAlignValue, getComposeCardValue } from "../../type";
import config from "../../config";

export default reduxAct.createReducer<InitStateType>({
  [ActionTypes.DOMINO_INIT_SELF_SEAT]: (state, payload: ActionPayLoad<ActionTypes.DOMINO_INIT_SELF_SEAT>): InitStateType => {
    const _state = instantiate(state)
    payload.player.seatIndex = 0;
    _state.playerMap[0] = payload.player
    return {
      ..._state
    }
  },
  [ActionTypes.DOMINO_JOIN_SEAT]: (state, payload: ActionPayLoad<ActionTypes.DOMINO_JOIN_SEAT>): InitStateType => {
    const _state = instantiate(state)
    switch (payload.seatPostion) {
      case SeatPosition.LEFT:
        _state.playerMap[1] = payload.player;
        payload.player.seatIndex = 1; break;
      case SeatPosition.TOP:
        _state.playerMap[2] = payload.player;
        payload.player.seatIndex = 2;
        break;
      case SeatPosition.RIGHT:
        _state.playerMap[3] = payload.player;
        payload.player.seatIndex = 3;
        break;
      case SeatPosition.DOWN:
        _state.playerMap[0] = payload.player;
        payload.player.seatIndex = 0;
        break;
    }
    console.log("DOMINO_JOIN_SEAT", _state);
    return {
      ..._state
    }
  },
  [ActionTypes.DOMINO_CHANGE_DESK_STATUS]: (state, payload: ActionPayLoad<ActionTypes.DOMINO_CHANGE_DESK_STATUS>): InitStateType => {
    const _state = instantiate(state)
    _state.statue = payload.status;
    if (payload.status === DeskStatus.WAITING) {
      _state.playerMap.filter(v => v).forEach(v => {
        v.gameData.isMaster = false;
        v.gameData.remainCardCount = 0;
        v.gameData.cardIList = [];
        v.gameData.noWayCardNumber = [];
      })
    } else if (payload.status === DeskStatus.CLSOE) {
      _state.playerMap.filter(v => v).forEach(v => {
        v.gameData.state = PlayerSatus.WAITING;
        v.gameData.noWayCardNumber = [];
      })
    }

    switch (payload.status) {
      case DeskStatus.WAITING:
      case DeskStatus.COUNTDOWNING:
      case DeskStatus.CLSOE:
        _state.newCardItem = null;
        _state.readyCountdown = null;
        _state.rightOutCardItem = [];
        _state.leftOutCardItem = [];
        _state.outCardItem = [];
        _state.intendOutCard = null;
        _state.lastActiveSeatIndex = -1;
        _state.currActiveSeatIndex = -1;
        _state.balanceOdds = 0;
        break;
    }
    _state.readyCountdown = payload.countdown;

    return {
      ..._state,
    }
  },
  [ActionTypes.DOMINO_UPDATE_PLAYER_GAME_DATA]: (state, payload: ActionPayLoad<ActionTypes.DOMINO_UPDATE_PLAYER_GAME_DATA>): InitStateType => {
    const _state = instantiate(state)
    const player = _state.playerMap.find(i => i && i.uid === payload.palyerId)
    player && (player.gameData = payload.playGame)
    return {
      ..._state
    }
  },
  [ActionTypes.DOMINO_DEAL]: (state, payload: ActionPayLoad<ActionTypes.DOMINO_DEAL>): InitStateType => {
    const player = instantiate(state.playerMap[0])
    player.gameData.cardIList = payload.cardItems;
    state.playerMap[0] = player;
    return {
      ...state
    }
  },
  [ActionTypes.DOMINO_CHANGE_OUT_CARD_PLAYER]: (state, payload: ActionPayLoad<ActionTypes.DOMINO_CHANGE_OUT_CARD_PLAYER>): InitStateType => {
    /**上一个激活的用户 */
    const lastActiveSeatIndex = state.currActiveSeatIndex;
    /**当前正激活等待的用户 */
    const currActiveSeatIndex = payload.seatIndex;
    console.log(`切换用户，上一个用户 ${lastActiveSeatIndex}, 下一个用户 ${payload.seatIndex}`);
    return {
      ...state,
      lastActiveSeatIndex,
      currActiveSeatIndex
    }
  },
  [ActionTypes.DOMINO_SHOW_OUT_CARD]: (state, payload: ActionPayLoad<ActionTypes.DOMINO_SHOW_OUT_CARD>): InitStateType => {
    const _state = instantiate(state)
    const cardItem = payload.showOutCard;

    if (_state.outCardItem.length) {
      calCardAzimuth(cardItem, _state.outCardItem[0], _state.leftOutCardItem, _state.rightOutCardItem);
      const alignValue = getCardAlignValue(_state.outCardItem[0], cardItem.azimuth === 0 ? _state.leftOutCardItem : _state.rightOutCardItem, cardItem);
      cardItem.alignValue = alignValue;

      console.log(`最新出牌值: ${cardItem.value}, 上下值: ${cardItem.upFace}-${cardItem.downFace}, 方位： ${cardItem.azimuth}, 对齐值：${cardItem.alignValue}`);
    } else {
      // 第一张牌（也就是中间一张牌），对齐值不管是上下相等还是不等，都用上面的值，因为中间值横向摆放始终是小的向左
      cardItem.alignValue = cardItem.upFace;
      cardItem.azimuth = 2;
    }

    _state.outCardItem.push(cardItem);
    if (cardItem.azimuth === 0) {
      _state.leftOutCardItem.push(cardItem);
    } else if (cardItem.azimuth === 1) {
      _state.rightOutCardItem.push(cardItem);
    }
    _state.newCardItem = cardItem;
    const player = _state.playerMap[cardItem.seatIndex];
    player.gameData.cardIList = player.gameData.cardIList.filter(v => v.value !== cardItem.value);
    return {
      ..._state,
    }
  },
  [ActionTypes.DOMINO_OUT_COUTNDOWN]: (state, payload: ActionPayLoad<ActionTypes.DOMINO_OUT_COUTNDOWN>): InitStateType => {
    return {
      ...state,
      outCountdown: payload.outCountdown
    }
  },
  [ActionTypes.DOMINO_CLEAR_ROOM_DATA]: (state, payload: ActionPayLoad<ActionTypes.DOMINO_CLEAR_ROOM_DATA>): InitStateType => {
    const _state = instantiate(state)
    _state.currActiveSeatIndex = -1;
    _state.lastActiveSeatIndex = -1;
    _state.newCardItem = null;
    _state.intendOutCard = null;
    _state.leftOutCardItem = [];
    _state.rightOutCardItem = [];
    _state.outCardItem = [];
    _state.outCountdown = null;
    _state.readyCountdown = null;
    _state.playerMap = new Array(config.seatNumber).fill(null);
    _state.statue = DeskStatus.WAITING;
    _state.quitRoomAction = 0;
    _state.balanceOdds = 0;
    return {
      ..._state,
    }
  },
  [ActionTypes.DOMINO_SET_DESK_CARD_OUTLINE]: (state, payload: ActionPayLoad<ActionTypes.DOMINO_SET_DESK_CARD_OUTLINE>): InitStateType => {
    return {
      ...state,
      intendOutCard: payload.intendOutCard
    }
  },
  [ActionTypes.DOMINO_QUIT_ROOM]: (state, payload: ActionPayLoad<ActionTypes.DOMINO_QUIT_ROOM>): InitStateType => {
    return {
      ...state,
      quitRoomAction: Date.now()
    }
  },
  [ActionTypes.DOMINO_GAME_IN_WINLOSS]: (state, payload: ActionPayLoad<ActionTypes.DOMINO_GAME_IN_WINLOSS>): InitStateType => {
    const winloss = Math.abs(payload.winlossType.winloss)
    const _state = instantiate(state);
    _state.playerMap[payload.winlossType.lossSeatIndex].glodAmount -= winloss;
    _state.playerMap[payload.winlossType.lossSeatIndex].winloss = -winloss;
    _state.playerMap[payload.winlossType.winSeatIndex].glodAmount += winloss;
    _state.playerMap[payload.winlossType.winSeatIndex].winloss = winloss;
    return {
      ..._state,
    }
  },
  [ActionTypes.DOMINO_QUIT_SEAT]: (state, payload: ActionPayLoad<ActionTypes.DOMINO_QUIT_SEAT>): InitStateType => {
    const player = state.playerMap.find(v => v && v.uid === payload.playerId);
    if (!player) {
      return { ...state };
    }
    const _state = instantiate(state);
    _state.playerMap[player.seatIndex] = null;
    return {
      ..._state,
    }
  },
  [ActionTypes.DOMINO_UPDATE_LEWAT]: (state, payload: ActionPayLoad<ActionTypes.DOMINO_UPDATE_LEWAT>): InitStateType => {
    const player = state.playerMap.find(v => v && v.uid === payload.playerId);
    if (!player) {
      return { ...state };
    }
    const playerNew = instantiate(state.playerMap[player.seatIndex]);
    playerNew.gameData.noWayCardNumber = payload.lewatPokers;
    state.playerMap[playerNew.seatIndex] = playerNew;
    return {
      ...state,
    }
  },
  [ActionTypes.DOMINO_BALANCE]: (state, payload: ActionPayLoad<ActionTypes.DOMINO_BALANCE>): InitStateType => {
    const _state = instantiate(state);
    _state.playerMap.forEach(v => {
      if (v) {
        const balancePlayer = payload.balances.find(balance => v.uid === balance.memberId);
        if (balancePlayer) {
          v.glodAmount = balancePlayer.balance
          if (v.seatIndex === 0) {
            _state.gold = v.glodAmount;
          }
        }
      }
    })
    _state.balanceOdds = payload.balances[0].odds;
    return {
      ..._state,
    }
  },
  [ActionTypes.DOMINO_UPDATE_GOLD]: (state, payload: ActionPayLoad<ActionTypes.DOMINO_UPDATE_GOLD>): InitStateType => {
    return {
      ...state,
      gold: payload.gold
    }
  }
}, initState);