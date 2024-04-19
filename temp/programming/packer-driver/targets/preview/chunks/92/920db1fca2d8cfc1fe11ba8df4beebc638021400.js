System.register(["__unresolved_0", "cc", "__unresolved_1", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ActionTypes, initState, reduxAct, _crd;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _reportPossibleCrUseOfActionTypes(extras) {
    _reporterNs.report("ActionTypes", "../actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionPayLoad(extras) {
    _reporterNs.report("ActionPayLoad", "../actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitStateType(extras) {
    _reporterNs.report("InitStateType", "../actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitState(extras) {
    _reporterNs.report("initState", "../actions/history", _context.meta, extras);
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

      _cclegacy._RF.push({}, "bea7d5cWtVFyL3NOmzM2jUU", "history", undefined);

      _export("default", (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createReducer({
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_HISTORY_RESULT1]: (state, payload) => _extends({}, state, {
          result1: payload.result1
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_HISTORY_RESULT2]: (state, payload) => _extends({}, state, {
          result2: payload.result2
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_HISTORY_RESULT3]: (state, payload) => _extends({}, state, {
          result3: payload.result3
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_HISTORY_RESULT4]: (state, payload) => _extends({}, state, {
          result4: payload.result4
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_HISTORY_TREN]: (state, payload) => _extends({}, state, {
          tren: payload.tren
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_HISTORY_STATISTIK]: (state, payload) => _extends({}, state, {
          statistik: payload.statistik
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_HISTORY_REKOR]: (state, payload) => _extends({}, state, {
          rekor: payload.rekor
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_JACKPOT_WIN]: (state, payload) => _extends({}, state, {
          jackpotWin: payload.jackpotWin
        })
      }, _crd && initState === void 0 ? (_reportPossibleCrUseOfinitState({
        error: Error()
      }), initState) : initState));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=920db1fca2d8cfc1fe11ba8df4beebc638021400.js.map