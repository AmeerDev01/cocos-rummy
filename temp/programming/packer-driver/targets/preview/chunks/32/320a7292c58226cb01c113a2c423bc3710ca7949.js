System.register(["__unresolved_0", "cc", "__unresolved_1", "redux-act", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, ActionTypes, initState, reduxAct, config, _crd;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _reportPossibleCrUseOfActionTypes(extras) {
    _reporterNs.report("ActionTypes", "../actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionPayLoad(extras) {
    _reporterNs.report("ActionPayLoad", "../actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitStateType(extras) {
    _reporterNs.report("InitStateType", "../actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitState(extras) {
    _reporterNs.report("initState", "../actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetData(extras) {
    _reporterNs.report("BetData", "../../type", _context.meta, extras);
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
      config = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ffff3VtbERElqpkn1YVcodo", "bet", undefined);

      __checkObsolete__(['instantiate', 'log']);

      _export("default", (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createReducer({
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).YXX_BET]: (state, payload) => {
          var _state = instantiate(state);

          var currentBetData = _state.betData.find(v => v.betType === payload.betData.betType);

          if (!currentBetData) {
            currentBetData = {
              index: payload.betData.index,
              userId: payload.betData.userId,
              betId: payload.betData.betId,
              betAmount: payload.betData.betAmount,
              betType: payload.betData.betType,
              totalBetAmount: payload.betData.betAmount,
              meTotalBetAmount: 0,
              isFly: payload.betData.isFly
            };

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

          _state.newBetData = _extends({}, payload.betData, {
            totalBetAmount: currentBetData.totalBetAmount,
            meTotalBetAmount: currentBetData.meTotalBetAmount
          }); // console.log("_state.newBetData --- ", _state.betData);

          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).YXX_INIT_BET]: (state, payload) => {
          return _extends({}, state, {
            betData: payload.betDatas
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).YXX_SELECT_CHIP]: (state, payload) => {
          return _extends({}, state, {
            selectChip: payload.selectChip
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).YXX_CLEAR_BET]: (state, payload) => {
          var _state = instantiate(state);

          var lastBet = [];

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
                  isMyBet: true
                });
              }
            });
          }

          _state.lastBet = lastBet;
          _state.betData = [];
          _state.cancelBetData = null;
          _state.newBetData = null;

          if (payload.isQuit) {
            _state.selectChip = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).chipTypes[0].value;
          }

          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).YXX_CANCEL_BET]: (state, payload) => {
          var _state = instantiate(state);

          var currentBetData = _state.betData.find(v => v.betType === payload.betData.betType);

          currentBetData.betAmount -= payload.betData.betAmount;
          currentBetData.meTotalBetAmount -= payload.betData.betAmount;
          currentBetData.totalBetAmount -= payload.betData.betAmount;
          payload.betData.totalBetAmount = currentBetData.totalBetAmount;
          payload.betData.meTotalBetAmount = currentBetData.meTotalBetAmount;
          _state.cancelBetData = payload.betData;
          return _extends({}, _state);
        }
      }, _crd && initState === void 0 ? (_reportPossibleCrUseOfinitState({
        error: Error()
      }), initState) : initState));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=320a7292c58226cb01c113a2c423bc3710ca7949.js.map