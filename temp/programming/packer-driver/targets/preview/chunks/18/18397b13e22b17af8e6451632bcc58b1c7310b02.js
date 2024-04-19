System.register(["__unresolved_0", "cc", "__unresolved_1", "redux-act", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, ActionTypes, initState, reduxAct, DeskStatus, PlayerSatus, SeatPosition, calCardAzimuth, getCardAlignValue, config, _crd;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _reportPossibleCrUseOfActionTypes(extras) {
    _reporterNs.report("ActionTypes", "../action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionPayLoad(extras) {
    _reporterNs.report("ActionPayLoad", "../action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitStateType(extras) {
    _reporterNs.report("InitStateType", "../action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitState(extras) {
    _reporterNs.report("initState", "../action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeskStatus(extras) {
    _reporterNs.report("DeskStatus", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerSatus(extras) {
    _reporterNs.report("PlayerSatus", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSeatPosition(extras) {
    _reporterNs.report("SeatPosition", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcalCardAzimuth(extras) {
    _reporterNs.report("calCardAzimuth", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetCardAlignValue(extras) {
    _reporterNs.report("getCardAlignValue", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../../config", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      ActionTypes = _unresolved_2.ActionTypes;
      initState = _unresolved_2.initState;
    }, function (_reduxAct) {
      reduxAct = _reduxAct.default;
    }, function (_unresolved_3) {
      DeskStatus = _unresolved_3.DeskStatus;
      PlayerSatus = _unresolved_3.PlayerSatus;
      SeatPosition = _unresolved_3.SeatPosition;
      calCardAzimuth = _unresolved_3.calCardAzimuth;
      getCardAlignValue = _unresolved_3.getCardAlignValue;
    }, function (_unresolved_4) {
      config = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e49c83a+25GWI2tsiNE+rbC", "game", undefined);

      __checkObsolete__(['instantiate']);

      _export("default", (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createReducer({
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DOMINO_INIT_SELF_SEAT]: (state, payload) => {
          var _state = instantiate(state);

          payload.player.seatIndex = 0;
          _state.playerMap[0] = payload.player;
          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DOMINO_JOIN_SEAT]: (state, payload) => {
          var _state = instantiate(state);

          switch (payload.seatPostion) {
            case (_crd && SeatPosition === void 0 ? (_reportPossibleCrUseOfSeatPosition({
              error: Error()
            }), SeatPosition) : SeatPosition).LEFT:
              _state.playerMap[1] = payload.player;
              payload.player.seatIndex = 1;
              break;

            case (_crd && SeatPosition === void 0 ? (_reportPossibleCrUseOfSeatPosition({
              error: Error()
            }), SeatPosition) : SeatPosition).TOP:
              _state.playerMap[2] = payload.player;
              payload.player.seatIndex = 2;
              break;

            case (_crd && SeatPosition === void 0 ? (_reportPossibleCrUseOfSeatPosition({
              error: Error()
            }), SeatPosition) : SeatPosition).RIGHT:
              _state.playerMap[3] = payload.player;
              payload.player.seatIndex = 3;
              break;

            case (_crd && SeatPosition === void 0 ? (_reportPossibleCrUseOfSeatPosition({
              error: Error()
            }), SeatPosition) : SeatPosition).DOWN:
              _state.playerMap[0] = payload.player;
              payload.player.seatIndex = 0;
              break;
          }

          console.log("DOMINO_JOIN_SEAT", _state);
          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DOMINO_CHANGE_DESK_STATUS]: (state, payload) => {
          var _state = instantiate(state);

          _state.statue = payload.status;

          if (payload.status === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
            error: Error()
          }), DeskStatus) : DeskStatus).WAITING) {
            _state.playerMap.filter(v => v).forEach(v => {
              v.gameData.isMaster = false;
              v.gameData.remainCardCount = 0;
              v.gameData.cardIList = [];
              v.gameData.noWayCardNumber = [];
            });
          } else if (payload.status === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
            error: Error()
          }), DeskStatus) : DeskStatus).CLSOE) {
            _state.playerMap.filter(v => v).forEach(v => {
              v.gameData.state = (_crd && PlayerSatus === void 0 ? (_reportPossibleCrUseOfPlayerSatus({
                error: Error()
              }), PlayerSatus) : PlayerSatus).WAITING;
              v.gameData.noWayCardNumber = [];
            });
          }

          switch (payload.status) {
            case (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).WAITING:
            case (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).COUNTDOWNING:
            case (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).CLSOE:
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
          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DOMINO_UPDATE_PLAYER_GAME_DATA]: (state, payload) => {
          var _state = instantiate(state);

          var player = _state.playerMap.find(i => i && i.uid === payload.palyerId);

          player && (player.gameData = payload.playGame);
          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DOMINO_DEAL]: (state, payload) => {
          var player = instantiate(state.playerMap[0]);
          player.gameData.cardIList = payload.cardItems;
          state.playerMap[0] = player;
          return _extends({}, state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DOMINO_CHANGE_OUT_CARD_PLAYER]: (state, payload) => {
          /**上一个激活的用户 */
          var lastActiveSeatIndex = state.currActiveSeatIndex;
          /**当前正激活等待的用户 */

          var currActiveSeatIndex = payload.seatIndex;
          console.log("\u5207\u6362\u7528\u6237\uFF0C\u4E0A\u4E00\u4E2A\u7528\u6237 " + lastActiveSeatIndex + ", \u4E0B\u4E00\u4E2A\u7528\u6237 " + payload.seatIndex);
          return _extends({}, state, {
            lastActiveSeatIndex,
            currActiveSeatIndex
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DOMINO_SHOW_OUT_CARD]: (state, payload) => {
          var _state = instantiate(state);

          var cardItem = payload.showOutCard;

          if (_state.outCardItem.length) {
            (_crd && calCardAzimuth === void 0 ? (_reportPossibleCrUseOfcalCardAzimuth({
              error: Error()
            }), calCardAzimuth) : calCardAzimuth)(cardItem, _state.outCardItem[0], _state.leftOutCardItem, _state.rightOutCardItem);
            var alignValue = (_crd && getCardAlignValue === void 0 ? (_reportPossibleCrUseOfgetCardAlignValue({
              error: Error()
            }), getCardAlignValue) : getCardAlignValue)(_state.outCardItem[0], cardItem.azimuth === 0 ? _state.leftOutCardItem : _state.rightOutCardItem, cardItem);
            cardItem.alignValue = alignValue;
            console.log("\u6700\u65B0\u51FA\u724C\u503C: " + cardItem.value + ", \u4E0A\u4E0B\u503C: " + cardItem.upFace + "-" + cardItem.downFace + ", \u65B9\u4F4D\uFF1A " + cardItem.azimuth + ", \u5BF9\u9F50\u503C\uFF1A" + cardItem.alignValue);
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
          var player = _state.playerMap[cardItem.seatIndex];
          player.gameData.cardIList = player.gameData.cardIList.filter(v => v.value !== cardItem.value);
          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DOMINO_OUT_COUTNDOWN]: (state, payload) => {
          return _extends({}, state, {
            outCountdown: payload.outCountdown
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DOMINO_CLEAR_ROOM_DATA]: (state, payload) => {
          var _state = instantiate(state);

          _state.currActiveSeatIndex = -1;
          _state.lastActiveSeatIndex = -1;
          _state.newCardItem = null;
          _state.intendOutCard = null;
          _state.leftOutCardItem = [];
          _state.rightOutCardItem = [];
          _state.outCardItem = [];
          _state.outCountdown = null;
          _state.readyCountdown = null;
          _state.playerMap = new Array((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).seatNumber).fill(null);
          _state.statue = (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
            error: Error()
          }), DeskStatus) : DeskStatus).WAITING;
          _state.quitRoomAction = 0;
          _state.balanceOdds = 0;
          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DOMINO_SET_DESK_CARD_OUTLINE]: (state, payload) => {
          return _extends({}, state, {
            intendOutCard: payload.intendOutCard
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DOMINO_QUIT_ROOM]: (state, payload) => {
          return _extends({}, state, {
            quitRoomAction: Date.now()
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DOMINO_GAME_IN_WINLOSS]: (state, payload) => {
          var winloss = Math.abs(payload.winlossType.winloss);

          var _state = instantiate(state);

          _state.playerMap[payload.winlossType.lossSeatIndex].glodAmount -= winloss;
          _state.playerMap[payload.winlossType.lossSeatIndex].winloss = -winloss;
          _state.playerMap[payload.winlossType.winSeatIndex].glodAmount += winloss;
          _state.playerMap[payload.winlossType.winSeatIndex].winloss = winloss;
          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DOMINO_QUIT_SEAT]: (state, payload) => {
          var player = state.playerMap.find(v => v && v.uid === payload.playerId);

          if (!player) {
            return _extends({}, state);
          }

          var _state = instantiate(state);

          _state.playerMap[player.seatIndex] = null;
          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DOMINO_UPDATE_LEWAT]: (state, payload) => {
          var player = state.playerMap.find(v => v && v.uid === payload.playerId);

          if (!player) {
            return _extends({}, state);
          }

          var playerNew = instantiate(state.playerMap[player.seatIndex]);
          playerNew.gameData.noWayCardNumber = payload.lewatPokers;
          state.playerMap[playerNew.seatIndex] = playerNew;
          return _extends({}, state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DOMINO_BALANCE]: (state, payload) => {
          var _state = instantiate(state);

          _state.playerMap.forEach(v => {
            if (v) {
              var balancePlayer = payload.balances.find(balance => v.uid === balance.memberId);

              if (balancePlayer) {
                v.glodAmount = balancePlayer.balance;

                if (v.seatIndex === 0) {
                  _state.gold = v.glodAmount;
                }
              }
            }
          });

          _state.balanceOdds = payload.balances[0].odds;
          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DOMINO_UPDATE_GOLD]: (state, payload) => {
          return _extends({}, state, {
            gold: payload.gold
          });
        }
      }, _crd && initState === void 0 ? (_reportPossibleCrUseOfinitState({
        error: Error()
      }), initState) : initState));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=18397b13e22b17af8e6451632bcc58b1c7310b02.js.map