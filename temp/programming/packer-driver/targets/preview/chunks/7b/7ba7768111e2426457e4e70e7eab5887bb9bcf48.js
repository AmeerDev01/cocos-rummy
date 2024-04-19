System.register(["__unresolved_0", "cc", "__unresolved_1", "redux-act", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, ActionTypes, initState, reduxAct, config, copy, _crd;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _reportPossibleCrUseOfActionTypes(extras) {
    _reporterNs.report("ActionTypes", "../actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionPayLoad(extras) {
    _reporterNs.report("ActionPayLoad", "../actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitStateType(extras) {
    _reporterNs.report("InitStateType", "../actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitState(extras) {
    _reporterNs.report("initState", "../actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../../config", _context.meta, extras);
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
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      ActionTypes = _unresolved_2.ActionTypes;
      initState = _unresolved_2.initState;
    }, function (_reduxAct) {
      reduxAct = _reduxAct.default;
    }, function (_unresolved_3) {
      config = _unresolved_3.default;
    }, function (_unresolved_4) {
      copy = _unresolved_4.copy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "80245qL9vhMTaHfX+TA6GqB", "roller", undefined);

      __checkObsolete__(['instantiate']);

      _export("default", (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createReducer({
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).PHOENIX_BEGIN_ROLL]: (state, payload) => {
          var _state = instantiate(state);

          if (payload.rollerIndex !== -1) {
            var rollData = _state.rollerMap[payload.rollerIndex];
            _state.rollerMap[payload.rollerIndex].rolling = true;
            _state.rollerMap[payload.rollerIndex].direction = payload.direction || (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption.direction;
            payload.speed && (_state.rollerMap[payload.rollerIndex].speed = payload.speed); // _state.rollerMap[payload.rollerIndex].speed = payload.speed || (rollData.LargeRoller ? config.largeRollOption.rollerSpeed : config.normalRollOption.rollerSpeed)
            // _state.rollerMap[payload.rollerIndex].speedBackUp = payload.speed || (rollData.LargeRoller ? config.largeRollOption.rollerSpeed : config.normalRollOption.rollerSpeed)

            _state.rollerMap[payload.rollerIndex].stopIconIndex = -1;
          } else {
            _state.rollerMap.forEach(item => {
              item.rolling = true;
              item.direction = payload.direction || (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).normalRollOption.direction;
              payload.speed && (item.speed = payload.speed); // item.speed = payload.speed || (item.LargeRoller ? config.largeRollOption.rollerSpeed : config.normalRollOption.rollerSpeed)
              // item.speedBackUp = payload.speed || (item.LargeRoller ? config.largeRollOption.rollerSpeed : config.normalRollOption.rollerSpeed)

              item.stopIconIndex = -1;
            });
          }

          _state.roundAllEnd = false;
          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).PHOENIX_INIT_ROLL]: (state, payload) => {
          // const _state = instantiate(state)
          // _state.rollerMap = payload.rollerMap
          // return {
          //   ..._state
          // }
          return _extends({}, state, {
            rollerMap: (_crd && copy === void 0 ? (_reportPossibleCrUseOfcopy({
              error: Error()
            }), copy) : copy)(payload.rollerMap)
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).PHOENIX_SET_STOP_ROLL]: (state, payload) => {
          var rollerMapItem = instantiate(state.rollerMap[payload.rollerIndex]);
          rollerMapItem.stopIconIndex = payload.stopIconIndex;
          state.rollerMap[payload.rollerIndex] = rollerMapItem; // const _state = instantiate(state)
          // _state.rollerMap[payload.rollerIndex].stopIconIndex = payload.stopIconIndex

          return _extends({}, state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).PHOENIX_END_ROLLING]: (state, payload) => {
          // const _state = instantiate(state)
          state.rollerMap[payload.rollerIndex].rolling = payload.rolling;
          return _extends({}, state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).PHOENIX_SET_FLICKER]: (state, payload) => {
          return _extends({}, state, {
            iconEffectData: {
              iconEffect: payload.iconEffect,
              coord: payload.flickerCoord
            }
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).PHOENIX_SET_ROUNT_END]: (state, payload) => {
          return _extends({}, state, {
            roundAllEnd: payload.roundAllEnd
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).PHOENIX_SET_ROLL_SPEED]: (state, payload) => {
          var _state = instantiate(state);

          if (payload.rollerIndex) {
            _state.rollerMap[payload.rollerIndex].speed = _state.rollerMap[payload.rollerIndex].speedBackUp * payload.speedMultiple;
          } else {
            _state.rollerMap.forEach(i => i.speed = i.speedBackUp * payload.speedMultiple);
          }

          return _extends({}, _state);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).PHOENIX_SET_YUANBAO_FLICKER]: (state, payload) => {
          return _extends({}, state, {
            iconYuanBaoEffectData: {
              iconEffect: payload.iconEffect,
              coord: payload.flickerCoord
            }
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).PHOENIX_SET_FREEGAME_FLICKER]: (state, payload) => {
          return _extends({}, state, {
            iconFreeGameEffectData: {
              iconEffect: payload.iconEffect,
              coord: payload.flickerCoord
            }
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
//# sourceMappingURL=7ba7768111e2426457e4e70e7eab5887bb9bcf48.js.map