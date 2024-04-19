System.register(["__unresolved_0", "cc", "__unresolved_1", "redux-act", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ActionTypes, initState, reduxAct, config, copy, _crd;

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

  function _reportPossibleCrUseOfRollerType(extras) {
    _reporterNs.report("RollerType", "../../type", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
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

      _cclegacy._RF.push({}, "28a44Yt2dpFXId6Z2KkXV0H", "roller", undefined);

      __checkObsolete__(['instantiate']);

      _export("default", (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createReducer({
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THOR_BEGIN_ROLL]: (state, payload) => {
          const rollerMap = (_crd && copy === void 0 ? (_reportPossibleCrUseOfcopy({
            error: Error()
          }), copy) : copy)(state.rollerMap);

          if (payload.rollerIndex !== -1) {
            const rollData = rollerMap[payload.rollerIndex];
            rollerMap[payload.rollerIndex].rolling = true;
            rollerMap[payload.rollerIndex].direction = payload.direction || (rollData.LargeRoller ? (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).largeRollOption.direction : (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption.direction);
            payload.speed && (rollerMap[payload.rollerIndex].speed = payload.speed); // _state.rollerMap[payload.rollerIndex].speed = payload.speed || (rollData.LargeRoller ? config.largeRollOption.rollerSpeed : config.normalRollOption.rollerSpeed)
            // _state.rollerMap[payload.rollerIndex].speedBackUp = payload.speed || (rollData.LargeRoller ? config.largeRollOption.rollerSpeed : config.normalRollOption.rollerSpeed)

            rollerMap[payload.rollerIndex].stopIconIndex = -1;
          } else {
            rollerMap.forEach(item => {
              item.rolling = true;
              item.direction = payload.direction || (item.LargeRoller ? (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).largeRollOption.direction : (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).normalRollOption.direction);
              payload.speed && (item.speed = payload.speed); // item.speed = payload.speed || (item.LargeRoller ? config.largeRollOption.rollerSpeed : config.normalRollOption.rollerSpeed)
              // item.speedBackUp = payload.speed || (item.LargeRoller ? config.largeRollOption.rollerSpeed : config.normalRollOption.rollerSpeed)

              item.stopIconIndex = -1;
            });
          }

          return { ...state,
            rollerMap,
            roundAllEnd: false
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THOR_INIT_ROLL]: (state, payload) => {
          return { ...state,
            rollerMap: payload.rollerMap
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THOR_SET_STOP_ROLL]: (state, payload) => {
          const rollerMap = (_crd && copy === void 0 ? (_reportPossibleCrUseOfcopy({
            error: Error()
          }), copy) : copy)(state.rollerMap);
          rollerMap[payload.rollerIndex].stopIconIndex = payload.stopIconIndex;
          return { ...state,
            rollerMap
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THOR_END_ROLLING]: (state, payload) => {
          const rollerMap = (_crd && copy === void 0 ? (_reportPossibleCrUseOfcopy({
            error: Error()
          }), copy) : copy)(state.rollerMap);
          rollerMap[payload.rollerIndex].rolling = payload.rolling;
          return { ...state,
            rollerMap
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THOR_SET_FLICKER]: (state, payload) => {
          return { ...state,
            iconEffectData: {
              iconEffect: payload.iconEffect,
              coord: payload.flickerCoord
            }
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THOR_SET_ROUNT_END]: (state, payload) => {
          return { ...state,
            roundAllEnd: payload.roundAllEnd
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THOR_SET_ROLL_SMALLBOX]: (state, payload) => {
          // console.log('THOR_SET_ROLL_SMALLBOX -- ', payload.smallBox);
          return { ...state,
            smallBox: payload.smallBox
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THOR_SET_ROLL_SPEED]: (state, payload) => {
          const rollerMap = (_crd && copy === void 0 ? (_reportPossibleCrUseOfcopy({
            error: Error()
          }), copy) : copy)(state.rollerMap);

          if (payload.rollerIndex) {
            rollerMap[payload.rollerIndex].speed = rollerMap[payload.rollerIndex].speedBackUp * payload.speedMultiple;
          } else {
            rollerMap.forEach(i => i.speed = i.speedBackUp * payload.speedMultiple);
          }

          return { ...state,
            rollerMap
          };
        }
      }, _crd && initState === void 0 ? (_reportPossibleCrUseOfinitState({
        error: Error()
      }), initState) : initState));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f67f620fcd40ee21a6cc813bba419b3f29fc2156.js.map