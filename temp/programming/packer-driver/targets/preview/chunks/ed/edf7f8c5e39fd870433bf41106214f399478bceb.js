System.register(["__unresolved_0", "cc", "redux-act", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, reduxAct, config, AnimationStatus, GameStatus, ActionTypes, initState, copy, _crd;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationStatus(extras) {
    _reporterNs.report("AnimationStatus", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionPayLoad(extras) {
    _reporterNs.report("ActionPayLoad", "../actions/gameFlow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionTypes(extras) {
    _reporterNs.report("ActionTypes", "../actions/gameFlow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitStateType(extras) {
    _reporterNs.report("InitStateType", "../actions/gameFlow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitState(extras) {
    _reporterNs.report("initState", "../actions/gameFlow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcopy(extras) {
    _reporterNs.report("copy", "../../../../utils/tool", _context.meta, extras);
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
      config = _unresolved_2.default;
    }, function (_unresolved_3) {
      AnimationStatus = _unresolved_3.AnimationStatus;
      GameStatus = _unresolved_3.GameStatus;
    }, function (_unresolved_4) {
      ActionTypes = _unresolved_4.ActionTypes;
      initState = _unresolved_4.initState;
    }, function (_unresolved_5) {
      copy = _unresolved_5.copy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0729alAc5tDjpLcV/PGnBhe", "gameFlow", undefined);

      __checkObsolete__(['instantiate', 'log']);

      _export("default", (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createReducer({
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).YXX_COUNTDOWN]: (state, payload) => {
          return _extends({}, state, {
            countdown: payload.countdown
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).YXX_CHANGE_GAME_STATUS]: (state, payload) => {
          if (state.gameStatus === payload.gameStatus) {
            return _extends({}, state);
          } // const _state = instantiate(state);


          var results = (_crd && copy === void 0 ? (_reportPossibleCrUseOfcopy({
            error: Error()
          }), copy) : copy)(state.results);
          var gameStatus = payload.gameStatus;
          var newResult = null;
          var countdown = 0;
          var animationStatus = null;

          if (payload.gameStatus === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).STOP_BET && payload.result) {
            // log("YXX_CHANGE_GAME_STATUS: ", payload.result);
            newResult = payload.result; // 数组操作了最大值就删除

            if (results.length >= (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.resultArrayMax) {
              results.shift();
            }

            results.push(payload.result);
          } else if (payload.gameStatus === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).BET) {
            animationStatus = (_crd && AnimationStatus === void 0 ? (_reportPossibleCrUseOfAnimationStatus({
              error: Error()
            }), AnimationStatus) : AnimationStatus).IDLE;
            countdown = payload.second;
          } else if (payload.gameStatus === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).QUIT_GAME) {
            animationStatus = (_crd && AnimationStatus === void 0 ? (_reportPossibleCrUseOfAnimationStatus({
              error: Error()
            }), AnimationStatus) : AnimationStatus).IDLE;
            results = [];
            newResult = null;
          } // log("YXX_CHANGE_GAME_STATUS", payload.gameStatus, payload.result);


          return _extends({}, state, {
            gameStatus: gameStatus,
            results: results,
            newResult: newResult,
            countdown: countdown,
            animationStatus: animationStatus
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).YXX_INIT_RESULT]: (state, payload) => {
          // log("YXX_INIT_RESULT", payload.results);
          return _extends({}, state, {
            results: payload.results
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).YXX_CHNAGE_ANIMATION_STATUS]: (state, payload) => {
          // log("YXX_CHNAGE_ANIMATION_STATUS == ", payload.animationStatus);
          return _extends({}, state, {
            animationStatus: payload.animationStatus
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).YXX_TIP_TYPE]: (state, payload) => {
          return _extends({}, state, {
            tipType: payload.tipType
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
//# sourceMappingURL=edf7f8c5e39fd870433bf41106214f399478bceb.js.map