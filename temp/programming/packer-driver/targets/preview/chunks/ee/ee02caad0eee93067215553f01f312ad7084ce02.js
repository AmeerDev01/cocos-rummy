System.register(["__unresolved_0", "cc", "redux-act", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, reduxAct, ActionTypes, initState, CardType, DeskStatus, OperationType, config, getPlayer, _crd;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionPayLoad(extras) {
    _reporterNs.report("ActionPayLoad", "../action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionTypes(extras) {
    _reporterNs.report("ActionTypes", "../action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitStateType(extras) {
    _reporterNs.report("InitStateType", "../action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitState(extras) {
    _reporterNs.report("initState", "../action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBalanceInfo(extras) {
    _reporterNs.report("BalanceInfo", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardType(extras) {
    _reporterNs.report("CardType", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeskStatus(extras) {
    _reporterNs.report("DeskStatus", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationType(extras) {
    _reporterNs.report("OperationType", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetPlayer(extras) {
    _reporterNs.report("getPlayer", "../../qiuqiu_tool", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
    }, function (_reduxAct) {
      reduxAct = _reduxAct.default;
    }, function (_unresolved_2) {
      ActionTypes = _unresolved_2.ActionTypes;
      initState = _unresolved_2.initState;
    }, function (_unresolved_3) {
      CardType = _unresolved_3.CardType;
      DeskStatus = _unresolved_3.DeskStatus;
      OperationType = _unresolved_3.OperationType;
    }, function (_unresolved_4) {
      config = _unresolved_4.default;
    }, function (_unresolved_5) {
      getPlayer = _unresolved_5.getPlayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "69145ijFWtL3oCov3yR4tng", "game", undefined);

      __checkObsolete__(['instantiate']);

      _export("default", (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createReducer({
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).QIUQIU_JOIN_SEAT]: (state, payload) => {
          var _state = instantiate(state);

          _state.playerMap[payload.player.seatIndex] = payload.player;
          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).QIUQIU_QUIT_SEAT]: (state, payload) => {
          var _state = instantiate(state);

          var player = (_crd && getPlayer === void 0 ? (_reportPossibleCrUseOfgetPlayer({
            error: Error()
          }), getPlayer) : getPlayer)(_state.playerMap, payload.memberId);
          player && (_state.playerMap[player.seatIndex] = null);
          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).QIUQIU_UPDATE_GOLD]: (state, payload) => {
          return _extends({}, state, {
            gold: payload.gold
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).QIUQIU_CLEAR_DATA]: (state, payload) => {
          var _state = instantiate(state);

          _state.deskStatus = (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
            error: Error()
          }), DeskStatus) : DeskStatus).WAITING;
          _state.playerMap = new Array((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).seatNumber).fill(null);
          _state.lastActiveSeatIndex = -1;
          _state.currActiveSeatIndex = -1;
          _state.operationCountdown = null;
          _state.betAmount = 0;
          _state.maxAmount = 0;
          _state.totalBetAmount = 0;
          _state.newBetInfo = null;
          _state.balanceInfo = null;
          _state.balanceInfos = null;
          _state.beginGameCountdown = null;
          _state.dealCount = 0;
          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).QIUQIU_CHANGE_DESK_STATUS]: (state, payload) => {
          var _state = instantiate(state);

          _state.deskStatus = payload.deskStatus;

          switch (payload.deskStatus) {
            case (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).WAITING:
            case (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).COUNTDOWNING:
              _state.operationCountdown = null;
              _state.beginGameCountdown = null;
              _state.newBetInfo = null;
              _state.balanceInfo = null;
              _state.betAmount = 0;
              _state.maxAmount = 0;
              _state.totalBetAmount = 0;
              _state.dealCount = 0;
              _state.balanceInfos = [];
              _state.lastActiveSeatIndex = -1;
              _state.currActiveSeatIndex = -1;

              _state.playerMap.filter(v => v).forEach(v => {
                v.gameData.isMaster = false;
                v.gameData.winloss = 0;
                v.gameData.dealCardCount = 0;
                v.gameData.totalBetAmount = 0;
                v.gameData.betAmount = 0;
                v.gameData.opType = (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
                  error: Error()
                }), OperationType) : OperationType).WAIT;
                v.gameData.cards = [];
                v.gameData.cardType = (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
                  error: Error()
                }), CardType) : CardType).DISERSE;
              });

              break;
          }

          if ((_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
            error: Error()
          }), DeskStatus) : DeskStatus).WAITING === payload.deskStatus) {
            _state.playerMap.filter(v => v).forEach(v => {
              v.gameData.isReady = false;
              v.gameData.isGame = false;
            });
          } else if ((_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
            error: Error()
          }), DeskStatus) : DeskStatus).SECOND_DISTRIBUTE === payload.deskStatus) {
            // 第二次发牌，清楚当前下注
            _state.betAmount = 0;
          }

          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).QIUQIU_BET]: (state, payload) => {
          var _state = instantiate(state);

          var player = (_crd && getPlayer === void 0 ? (_reportPossibleCrUseOfgetPlayer({
            error: Error()
          }), getPlayer) : getPlayer)(_state.playerMap, payload.memberId);
          player.gameData.opType = payload.opType;

          if ((_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
            error: Error()
          }), OperationType) : OperationType).WAIT !== payload.opType && payload.betAmount > _state.betAmount) {
            _state.betAmount = payload.betAmount;
          }

          if (payload.betAmount > _state.maxAmount) {
            _state.maxAmount = payload.betAmount;
          }

          player.gameData.betAmount += payload.betAmount;
          player.glodAmount = payload.gold;
          _state.totalBetAmount += payload.betAmount;

          if (payload.opType !== (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
            error: Error()
          }), OperationType) : OperationType).GIVE_UP && payload.opType !== (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
            error: Error()
          }), OperationType) : OperationType).PASS) {
            _state.newBetInfo = {
              seatIndex: player.seatIndex,
              amount: payload.betAmount,
              time: Date.now() + Math.random()
            };
          }

          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).QIUQIU_READY]: (state, payload) => {
          var _state = instantiate(state);

          var player = (_crd && getPlayer === void 0 ? (_reportPossibleCrUseOfgetPlayer({
            error: Error()
          }), getPlayer) : getPlayer)(_state.playerMap, payload.memberId);
          player.gameData.isReady = true; // player.gameData.isGame = true;

          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).QIUQIU_DEAL_ACTION]: (state, payload) => {
          var _state = instantiate(state);

          var player = _state.playerMap[payload.seatIndex];
          player && (player.gameData.dealCardCount = payload.dealIndex);
          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).QIUQIU_DEAL_HAND_CARD]: (state, payload) => {
          var _state = instantiate(state);

          _state.playerMap[0].gameData.cards = payload.cards;
          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).QIUQIU_CHANGE_DEALER]: (state, payload) => {
          var _state = instantiate(state);

          var player = (_crd && getPlayer === void 0 ? (_reportPossibleCrUseOfgetPlayer({
            error: Error()
          }), getPlayer) : getPlayer)(_state.playerMap, payload.memberId);
          player.gameData.isMaster = true; // _state.playerMap[player.seatIndex].gameData.isMaster = true;

          _state.lastActiveSeatIndex = -1;
          _state.currActiveSeatIndex = player.seatIndex; // 设置当前列表中的玩家状态为游戏状态

          _state.playerMap.forEach(v => v && v.gameData.isReady && (v.gameData.isGame = true));

          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).QIUQIU_ADD_GOLD_ANMIE]: (state, payload) => {
          var balanceInfo = {
            seatIndex: payload.seatIndex,
            winloss: payload.winloss,
            time: Date.now()
          };
          return _extends({}, state, {
            balanceInfo
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).QIUQIU_SAVE_BALANCE_INFO]: (state, payload) => {
          var _state = instantiate(state);

          var player = (_crd && getPlayer === void 0 ? (_reportPossibleCrUseOfgetPlayer({
            error: Error()
          }), getPlayer) : getPlayer)(_state.playerMap, payload.memberId);
          player.balanceGoldAmount = payload.gold;
          player.gameData.winloss = payload.winloss;
          player.gameData.cards = payload.cards;
          player.seatIndex > 0 && (player.gameData.dealCardCount = 0);
          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).QIUQIU_SYNC_BALANCE_GOLD_TO_GOLD]: (state, payload) => {
          var _state = instantiate(state);

          if (payload.memberId) {
            var player = (_crd && getPlayer === void 0 ? (_reportPossibleCrUseOfgetPlayer({
              error: Error()
            }), getPlayer) : getPlayer)(_state.playerMap, payload.memberId);
            player.glodAmount = player.balanceGoldAmount;
          } else {
            _state.playerMap.filter(v => v).forEach(v => v.glodAmount = v.balanceGoldAmount);
          }

          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).QIUQIU_OPERATION_COUNTDOWN]: (state, payload) => {
          return _extends({}, state, {
            operationCountdown: payload.countdown
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).QIUQIU_CHANGE_OPERATION_PLAYER]: (state, payload) => {
          var _state = instantiate(state);

          var player = (_crd && getPlayer === void 0 ? (_reportPossibleCrUseOfgetPlayer({
            error: Error()
          }), getPlayer) : getPlayer)(_state.playerMap, payload.memberId);
          player.gameData.opType = (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
            error: Error()
          }), OperationType) : OperationType).WAIT;
          _state.lastActiveSeatIndex = _state.currActiveSeatIndex;
          _state.currActiveSeatIndex = player.seatIndex;
          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).QIUQIU_PLAYER_CHANGE_OP_TYPE]: (state, payload) => {
          var _state = instantiate(state);

          var player = (_crd && getPlayer === void 0 ? (_reportPossibleCrUseOfgetPlayer({
            error: Error()
          }), getPlayer) : getPlayer)(_state.playerMap, payload.memberId);
          player.gameData.opType = payload.opType;
          player.glodAmount = payload.gold;
          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).QIUQIU_BEGIN_GAME_COUNTDOWN]: (state, payload) => {
          return _extends({}, state, {
            beginGameCountdown: payload.countdown
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).QIUQIU_UPDATE_CALL_AMOUNT]: (state, payload) => {
          var _state = instantiate(state);

          var player = (_crd && getPlayer === void 0 ? (_reportPossibleCrUseOfgetPlayer({
            error: Error()
          }), getPlayer) : getPlayer)(_state.playerMap, payload.memberId);
          player.gameData.callAmount = payload.callAmount;
          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).QIUQIU_SAVE_WIN_BALANCE_INFO]: (state, payload) => {
          return _extends({}, state, {
            balanceInfos: payload.balanceInfos
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).QIUQIU_RECONNECT_RECOVER_BET]: (state, payload) => {
          var _state = instantiate(state);

          var player = (_crd && getPlayer === void 0 ? (_reportPossibleCrUseOfgetPlayer({
            error: Error()
          }), getPlayer) : getPlayer)(_state.playerMap, payload.memberId);

          if (payload.betAmount > _state.betAmount) {// _state.betAmount = payload.betAmount;
          }

          if (payload.betAmount > _state.maxAmount) {
            _state.maxAmount = payload.betAmount;
          }

          _state.totalBetAmount += payload.betAmount;
          _state.newBetInfo = {
            seatIndex: player.seatIndex,
            amount: payload.betAmount,
            time: Date.now() + Math.random()
          };
          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).QIUQIU_SET_PLAYER_GAME_STATUS]: (state, payload) => {
          var _state = instantiate(state);

          _state.playerMap.forEach(v => v && v.gameData.isReady && (v.gameData.isGame = payload.isGame));

          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).QIUQIU_RECONNECT_GAME_DATA]: (state, payload) => {
          return _extends({}, state, {
            betAmount: payload.betAmount,
            dealCount: payload.dealCount
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
//# sourceMappingURL=ee02caad0eee93067215553f01f312ad7084ce02.js.map