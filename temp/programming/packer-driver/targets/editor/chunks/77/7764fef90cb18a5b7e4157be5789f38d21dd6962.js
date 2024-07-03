System.register(["__unresolved_0", "cc", "__unresolved_1", "redux-act", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, log, ActionTypes, initState, reduxAct, config, copy, _crd;

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
      log = _cc.log;
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

      _cclegacy._RF.push({}, "d50e22kf/5LNLYsEmiMeedf", "game", undefined);

      __checkObsolete__(['instantiate', 'log']);

      _export("default", (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createReducer({
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).YXX_INIT_SEATS]: (state, payload) => {
          const seats = payload.seats;
          return { ...state,
            seats
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).YXX_CHANGE_ONLINE_NUMBER]: (state, payload) => {
          return { ...state,
            onlineNumber: payload.onlineNumber
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).YXX_CHANGE_SEAT]: (state, payload) => {
          const seats = (_crd && copy === void 0 ? (_reportPossibleCrUseOfcopy({
            error: Error()
          }), copy) : copy)(state.seats);
          let myHead = (_crd && copy === void 0 ? (_reportPossibleCrUseOfcopy({
            error: Error()
          }), copy) : copy)(state.myHead);

          if (payload.headType.index < (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.seatNumber) {
            seats[payload.headType.index] = payload.headType;
          }

          if (myHead && myHead.userId === payload.headType.userId) {
            myHead = (_crd && copy === void 0 ? (_reportPossibleCrUseOfcopy({
              error: Error()
            }), copy) : copy)(payload.headType);
          } // log("YXX_CHANGE_SEAT ,", payload.headType.index, _state.seats[payload.headType.index].joggle);


          return { ...state,
            seats,
            myHead
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).YXX_CHANGE_ME_GOLD]: (state, payload) => {
          const myHead = instantiate(state.myHead);
          myHead.gold = payload.gold;
          return { ...state,
            myHead
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).YXX_CHANGE_JOIN_GAME]: (state, payload) => {
          const seats = (_crd && copy === void 0 ? (_reportPossibleCrUseOfcopy({
            error: Error()
          }), copy) : copy)(state.seats);

          if (payload.headType.index < (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.seatNumber) {
            const headType = seats[payload.headType.index];

            if (headType.has) {
              log(` ${headType.userId} 加入 到 ${headType.index} 座位上有人了，之前的人是 ${headType.has}`);
              return { ...state
              };
            }

            payload.headType.has = true;
            seats[payload.headType.index] = payload.headType;
          }

          const myHead = { ...payload.headType
          };
          return { ...state,
            seats,
            myHead
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).YXX_CHANGE_OTHER_JOIN_GAME]: (state, payload) => {
          const seats = (_crd && copy === void 0 ? (_reportPossibleCrUseOfcopy({
            error: Error()
          }), copy) : copy)(state.seats);

          if (payload.headType.index < (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.seatNumber) {
            const headType = seats[payload.headType.index];

            if (headType.has) {
              log(` ${headType.userId} 加入 到 ${headType.index} 座位上有人了，之前的人是 ${headType.has}`);
              return { ...state
              };
            }

            payload.headType.has = true;
            seats[payload.headType.index] = payload.headType;
          }

          const onlineNumber = state.onlineNumber + 1;
          return { ...state,
            seats,
            onlineNumber
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).YXX_CHANGE_SEAT_BET]: (state, payload) => {
          // const _state = instantiate(state)
          const seats = (_crd && copy === void 0 ? (_reportPossibleCrUseOfcopy({
            error: Error()
          }), copy) : copy)(state.seats);
          seats.forEach(v => {
            if (v.userId === payload.betData.userId) {
              v.gold -= payload.betData.betAmount;
              v.betAmount += payload.betData.betAmount;
            }
          });
          const myHead = (_crd && copy === void 0 ? (_reportPossibleCrUseOfcopy({
            error: Error()
          }), copy) : copy)(state.myHead);

          if (myHead && payload.betData.isMyBet) {
            // 金币变化会通过服务器推送10消息来改变，这里不做处理
            // 2023-11-21 避免感觉卡顿，下注之后等服务器返回数据之后再执行动画，前端先做下注动画，如果下注之后前端再把下注金额加上去
            (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).preBet && (myHead.gold -= payload.betData.betAmount);
            myHead.betAmount += payload.betData.betAmount;
          } // console.log('YXX_CHANGE_SEAT_BET', _state.myHead.gold, payload.betData.betAmount)


          return { ...state,
            seats,
            myHead
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).YXX_CHANGE_QUIT_GAME]: (state, payload) => {
          const myHead = null;
          const onlineNumber = 0;
          const powers = [];
          return { ...state,
            myHead,
            onlineNumber,
            powers
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).YXX_CHANGE_CLEAR_DATA]: (state, payload) => {
          const seats = (_crd && copy === void 0 ? (_reportPossibleCrUseOfcopy({
            error: Error()
          }), copy) : copy)(state.seats);
          seats.forEach(v => {
            v.betAmount = 0;
            v.winloss = 0;
          });
          let myHead;

          if (state.myHead) {
            myHead = (_crd && copy === void 0 ? (_reportPossibleCrUseOfcopy({
              error: Error()
            }), copy) : copy)(state.myHead);
            myHead.winloss = 0;
            myHead.betAmount = 0;
          }

          return { ...state,
            seats,
            myHead
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).YXX_CHANGE_SEAT_WINLOSS]: (state, payload) => {
          const seats = (_crd && copy === void 0 ? (_reportPossibleCrUseOfcopy({
            error: Error()
          }), copy) : copy)(state.seats);

          if (payload.index < (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.seatNumber) {
            seats[payload.index].winloss = payload.winloss;
            seats[payload.index].gold = payload.gold;
          }

          return { ...state,
            seats
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).YXX_UPDATE_POWER]: (state, payload) => {
          return { ...state,
            powers: payload.powers
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).YXX_GAME_CANCEL_BET]: (state, payload) => {
          const seats = (_crd && copy === void 0 ? (_reportPossibleCrUseOfcopy({
            error: Error()
          }), copy) : copy)(state.seats);
          seats.forEach(v => {
            if (state.myHead && v.userId === state.myHead.userId) {
              v.gold += payload.cancelAmount;
              v.betAmount -= payload.cancelAmount;
            }
          });
          let myHead;

          if (state.myHead) {
            myHead = (_crd && copy === void 0 ? (_reportPossibleCrUseOfcopy({
              error: Error()
            }), copy) : copy)(state.myHead); // _state.myHead.gold += payload.cancelAmount;

            myHead.betAmount -= payload.cancelAmount;
          }

          return { ...state,
            myHead,
            seats
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
//# sourceMappingURL=7764fef90cb18a5b7e4157be5789f38d21dd6962.js.map