System.register(["__unresolved_0", "cc", "redux-act", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, reduxAct, ActionTypes, initState, _crd;

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

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_reduxAct) {
      reduxAct = _reduxAct.default;
    }, function (_unresolved_2) {
      ActionTypes = _unresolved_2.ActionTypes;
      initState = _unresolved_2.initState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b1cc9Jd6dFS5hcKvu3B5d3", "game", undefined);

      __checkObsolete__(['instantiate']);

      _export("default", (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createReducer({
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).FISH_INIT_ROOM_LIST]: (state, payload) => {
          return _extends({}, state, {
            roomInfos: payload.roomInfos
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).FISH_QUIT_GAME]: (state, payload) => {
          return _extends({}, payload.initState);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).FISH_CHANGE_BATTERY]: (state, payload) => {
          return _extends({}, state, {
            myBatteryId: payload.batteryId
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
//# sourceMappingURL=8b77845023645395c40ee9adc482e50316ae493c.js.map