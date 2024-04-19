System.register(["__unresolved_0", "cc", "__unresolved_1", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ActionTypes, initState, reduxAct, _crd;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _reportPossibleCrUseOfActionTypes(extras) {
    _reporterNs.report("ActionTypes", "../actions/counter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionPayLoad(extras) {
    _reporterNs.report("ActionPayLoad", "../actions/counter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitStateType(extras) {
    _reporterNs.report("InitStateType", "../actions/counter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitState(extras) {
    _reporterNs.report("initState", "../actions/counter", _context.meta, extras);
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

      _cclegacy._RF.push({}, "44e86nZjF5AhIf07sIEP6Ww", "counter", undefined);

      _export("default", (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createReducer({
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).CHANGE_SIZE]: (state, payload) => _extends({}, state, {
          size: payload.size
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).CHANGE_COLOR]: (state, payload) => {
          return _extends({}, state, {
            color: payload.color
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
//# sourceMappingURL=bcb4f27117ce5451a6ac66e29bcb9f66e49fd4b6.js.map