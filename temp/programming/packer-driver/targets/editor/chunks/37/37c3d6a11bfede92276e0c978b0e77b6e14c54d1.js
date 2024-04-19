System.register(["__unresolved_0", "cc", "__unresolved_1", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, ActionTypes, initState, reduxAct, _crd;

  function _reportPossibleCrUseOfActionTypes(extras) {
    _reporterNs.report("ActionTypes", "../actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionPayLoad(extras) {
    _reporterNs.report("ActionPayLoad", "../actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitStateType(extras) {
    _reporterNs.report("InitStateType", "../actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitState(extras) {
    _reporterNs.report("initState", "../actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "40104Ya5OBGQpv7Ii2ZB0QP", "game", undefined);

      __checkObsolete__(['instantiate']);

      _export("default", (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createReducer({
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DRAGONTIGER_CHANGE_MY_INFO]: (state, payload) => ({ ...state,
          myInfo: payload.myInfo
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DRAGONTIGER_USERS_INFO]: (state, payload) => ({ ...state,
          usersInfo: payload.usersInfo
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DRAGONTIGER_COUNT_DOWN]: (state, payload) => ({ ...state,
          countDown: payload.countDown
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DRAGONTIGER_GOLD_DATA]: (state, payload) => ({ ...state,
          goldData: payload.goldData
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DRAGONTIGER_NEW_BET_DATA]: (state, payload) => ({ ...state,
          newBetData: payload.newBetData
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DRAGONTIGER_ALL_WIN_USER]: (state, payload) => ({ ...state,
          allWinUsers: payload.allWinUsers
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DRAGONTIGER_CHANGE_ONLINE_NUMBER]: (state, payload) => ({ ...state,
          onlineNum: payload.onlineNum
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DRAGONTGER_CANCEL_BET_DATA]: (state, payload) => ({ ...state,
          cancelBetData: payload.cancelBetData
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DRAGONTGER_RESET_STORE]: (state, payload) => {
          return instantiate(_crd && initState === void 0 ? (_reportPossibleCrUseOfinitState({
            error: Error()
          }), initState) : initState);
        }
      }, _crd && initState === void 0 ? (_reportPossibleCrUseOfinitState({
        error: Error()
      }), initState) : initState));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=37c3d6a11bfede92276e0c978b0e77b6e14c54d1.js.map