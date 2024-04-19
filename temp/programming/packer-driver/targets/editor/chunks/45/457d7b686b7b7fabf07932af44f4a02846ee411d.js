System.register(["__unresolved_0", "cc", "__unresolved_1", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, ActionTypes, initState, reduxAct, _crd;

  function _reportPossibleCrUseOfActionTypes(extras) {
    _reporterNs.report("ActionTypes", "../actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionPayLoad(extras) {
    _reporterNs.report("ActionPayLoad", "../actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitStateType(extras) {
    _reporterNs.report("InitStateType", "../actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitState(extras) {
    _reporterNs.report("initState", "../actions/baseBoard", _context.meta, extras);
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

      _cclegacy._RF.push({}, "c8d040FXJ1HgpwVoexLQnjW", "baseBoard", undefined);

      __checkObsolete__(['instantiate']);

      _export("default", (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createReducer({
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).ADD_TOAST]: (state, payload) => {
          return { ...state,
            toastData: payload.toastData
          }; // state.toastData = { content: "", type: state.toastData.type }
          // return result
          // const _state = instantiate(state)
          // _state.toastData = { ...payload.toastData }
          // console.log('reducer',_state)
          // return _state
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).SET_LOADING]: (state, payload) => {
          return { ...state,
            loadPayload: Object.assign({
              isLoadPayload: false,
              isAllowCloseLoading: false
            }, payload.isLoadPayload)
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).SET_ACTIVE_SUBGAME]: (state, payload) => {
          return { ...state,
            subGameInfo: payload.subGameInfo
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).SET_SUBGAME_STATE]: (state, payload) => {
          const _state = instantiate(state);

          _state.subGameInfo && (_state.subGameInfo.runState = payload.subGameRunState);
          return _state;
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).CHANGE_WEB_VIEW]: (state, payload) => {
          return { ...state,
            isShowWebView: payload.value
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).LOAD_RECOMMEND_DATA]: (state, payload) => {
          return { ...state,
            isLoadRecommendData: Date.parse(new Date().toString()).toString()
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).APP_DOWNLOAD_GUIDE]: (state, payload) => {
          return { ...state,
            appDownLoadGuide: payload.appDownLoadGuide
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).SOCKET_CONNECT]: (state, payload) => {
          if (state.retryConnectTimes === undefined) {}

          return { ...state,
            isConnect: payload.connectData.isConnect,
            retryConnectTimes: payload.connectData.retryConnectTimes === undefined ? state.retryConnectTimes + 1 : payload.connectData.retryConnectTimes
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).RESET_DATA_BOARD]: () => instantiate(_crd && initState === void 0 ? (_reportPossibleCrUseOfinitState({
          error: Error()
        }), initState) : initState)
      }, _crd && initState === void 0 ? (_reportPossibleCrUseOfinitState({
        error: Error()
      }), initState) : initState));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=457d7b686b7b7fabf07932af44f4a02846ee411d.js.map