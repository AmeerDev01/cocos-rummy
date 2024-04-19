System.register(["__unresolved_0", "cc", "__unresolved_1", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ActionTypes, initState, reduxAct, _crd;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
    }, function (_unresolved_2) {
      ActionTypes = _unresolved_2.ActionTypes;
      initState = _unresolved_2.initState;
    }, function (_reduxAct) {
      reduxAct = _reduxAct.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "05bb4QqU/tBk4EtLTyj/IKB", "game", undefined);

      _export("default", (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createReducer({
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_CHANGE_ONLINE_NUMBER]: (state, payload) => _extends({}, state, {
          onlineNum: payload.onlineNum
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_CHANGE_MY_INFO]: (state, payload) => _extends({}, state, {
          myInfo: payload.myInfo
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_MY_WIN_LOSE]: (state, payload) => _extends({}, state, {
          myWinLose: payload.myWinLose
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDER_GAME_USERS_INFO]: (state, payload) => _extends({}, state, {
          usersInfo: payload.usersInfo
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_COUNT_DOWN]: (state, payload) => _extends({}, state, {
          countDown: payload.countDown
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_SECONDS]: (state, payload) => _extends({}, state, {
          seconds: payload.seconds
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_GOLD]: (state, payload) => _extends({}, state, {
          gold: payload.gold
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDER_GAME_STATUS]: (state, payload) => _extends({}, state, {
          gameStatus: payload.gameStatus
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDER_INIT_GAME_STATUS]: (state, payload) => _extends({}, state, {
          initGameStatus: payload.initGameStatus
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDAR_GAME_JACKPOT]: (state, payload) => _extends({}, state, {
          jackpot: payload.jackpot
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDER_GAME_TRIG_JACKPOT]: (state, payload) => _extends({}, state, {
          trigJackpot: payload.trigJackpot
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).BANDER_GAME_TIPS]: (state, payload) => _extends({}, state, {
          tips: payload.tips
        })
      }, _crd && initState === void 0 ? (_reportPossibleCrUseOfinitState({
        error: Error()
      }), initState) : initState));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4dcea547ba636cbde2f8420a86318291a5fd3147.js.map