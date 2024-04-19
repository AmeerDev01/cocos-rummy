System.register(["__unresolved_0", "cc", "__unresolved_1", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ActionTypes, initState, reduxAct, _crd;

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

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ActionTypes = _unresolved_2.ActionTypes;
      initState = _unresolved_2.initState;
    }, function (_reduxAct) {
      reduxAct = _reduxAct.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57941JEhN9Mm75WZfbPbJUQ", "bet", undefined);

      _export("default", (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createReducer({
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_BET_DATA]: (state, payload) => ({ ...state,
          betData: payload.betData
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_NEW_BET_DATA]: (state, payload) => ({ ...state,
          newBetData: payload.newBetData
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_MEMBER_BET]: (state, payload) => ({ ...state,
          memberBet: payload.memberBet
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_LAST_BET_DATA]: (state, payload) => ({ ...state,
          lastBet: payload.lastBet
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDER_CHANGE_SELECT_CHIP]: (state, payload) => ({ ...state,
          selectChip: payload.selectChip
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_GOLD_DATA]: (state, payload) => ({ ...state,
          goldData: payload.goldData
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_CARD_RATE]: (state, payload) => ({ ...state,
          cardRate: payload.cardRate
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_CARD_TYPE]: (state, payload) => ({ ...state,
          cardType: payload.cardType
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_ALL_CARD_RATE]: (state, payload) => ({ ...state,
          allCardRate: payload.allCardRate
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_ALL_WIN_USER]: (state, payload) => ({ ...state,
          allWinUsers: payload.allWinUsers
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_AREA_WIN_LOSE]: (state, payload) => ({ ...state,
          areaWinLose: payload.areaWinLose
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_CANCEL_BET_DATA]: (state, payload) => ({ ...state,
          cancelBetData: payload.cancelBetData
        })
      }, _crd && initState === void 0 ? (_reportPossibleCrUseOfinitState({
        error: Error()
      }), initState) : initState));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=11a77b0c4fb87c6e85a848f8e4198cbaba686ff5.js.map