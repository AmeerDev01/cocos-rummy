System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, WebSocketToDo, listenerFactoy, initConfig, subGameList, config, ToastType, addToastAction, setLoadingAction, getStore, lang, _crd, SKT_MAG_TYPE, sktMsgListener, sktInstance, removeInstance;

  function _reportPossibleCrUseOfWebSocketToDo(extras) {
    _reporterNs.report("WebSocketToDo", "../../common/WebSocketToDo", _context.meta, extras);
  }

  function _reportPossibleCrUseOflistenerFactoy(extras) {
    _reporterNs.report("listenerFactoy", "../../common/listenerFactoy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitConfig(extras) {
    _reporterNs.report("initConfig", "../../hall/config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsubGameList(extras) {
    _reporterNs.report("subGameList", "../../hall/config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "./config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastType(extras) {
    _reporterNs.report("ToastType", "../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetLoadingAction(extras) {
    _reporterNs.report("setLoadingAction", "../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "./store", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../hall", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      WebSocketToDo = _unresolved_2.default;
    }, function (_unresolved_3) {
      listenerFactoy = _unresolved_3.listenerFactoy;
    }, function (_unresolved_4) {
      initConfig = _unresolved_4.initConfig;
      subGameList = _unresolved_4.subGameList;
    }, function (_unresolved_5) {
      config = _unresolved_5.default;
    }, function (_unresolved_6) {
      ToastType = _unresolved_6.ToastType;
      addToastAction = _unresolved_6.addToastAction;
      setLoadingAction = _unresolved_6.setLoadingAction;
    }, function (_unresolved_7) {
      getStore = _unresolved_7.getStore;
    }, function (_unresolved_8) {
      lang = _unresolved_8.lang;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "29448FiHUhDapo6qIbvEjzZ", "socketConnect", undefined);

      _export("SKT_MAG_TYPE", SKT_MAG_TYPE = /*#__PURE__*/function (SKT_MAG_TYPE) {
        SKT_MAG_TYPE["AUTH"] = "2";
        SKT_MAG_TYPE["JOIN_ROOM"] = "4";
        SKT_MAG_TYPE["GOLD_CHANGE"] = "10";
        SKT_MAG_TYPE["SETTLEMENT"] = "608";
        SKT_MAG_TYPE["READY"] = "610";
        SKT_MAG_TYPE["BEGIN_GAME_COUNTDOWN"] = "602";
        SKT_MAG_TYPE["PUSH_DEAL"] = "603";
        SKT_MAG_TYPE["GAME_STATE_CHANGE"] = "605";
        SKT_MAG_TYPE["OUT_CARD"] = "606";
        SKT_MAG_TYPE["PUSH_DEALER"] = "612";
        SKT_MAG_TYPE["BALANCE"] = "608";
        SKT_MAG_TYPE["RECONNECT"] = "614";
        SKT_MAG_TYPE["QUIT_ROOM"] = "611";
        SKT_MAG_TYPE["CHANGE_ROOM"] = "613";
        return SKT_MAG_TYPE;
      }({}));

      _export("sktMsgListener", sktMsgListener = (_crd && listenerFactoy === void 0 ? (_reportPossibleCrUseOflistenerFactoy({
        error: Error()
      }), listenerFactoy) : listenerFactoy)());

      _export("sktInstance", sktInstance = null);

      _export("default", () => {
        const dispatch = (_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
          error: Error()
        }), getStore) : getStore)().dispatch;
        return new Promise((resolve, reject) => {
          if (sktInstance) {
            resolve(sktInstance);
          } else {
            _export("sktInstance", sktInstance = new (_crd && WebSocketToDo === void 0 ? (_reportPossibleCrUseOfWebSocketToDo({
              error: Error()
            }), WebSocketToDo) : WebSocketToDo)());

            !(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).isTest && (_crd && initConfig === void 0 ? (_reportPossibleCrUseOfinitConfig({
              error: Error()
            }), initConfig) : initConfig)().then(() => {
              let gameIdTmp = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).gameId;
              let wsUrl = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).testConfig.wsUrl;

              if (!(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).testConfig.wsUrl) {
                const {
                  gameId,
                  websocketUrl
                } = (_crd && subGameList === void 0 ? (_reportPossibleCrUseOfsubGameList({
                  error: Error()
                }), subGameList) : subGameList).find(i => i.gameId === (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).gameId);
                wsUrl = websocketUrl;
                gameIdTmp = gameId;
              }

              sktInstance.init((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).sktCode, gameIdTmp, wsUrl, {
                onMessage: (code, data) => {
                  sktMsgListener.dispath(code, data);
                },
                onDataFail: data => {
                  dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                    error: Error()
                  }), addToastAction) : addToastAction)({
                    content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                      error: Error()
                    }), lang) : lang).write(k => k.WebSocketModule.socketConnectDateFail, {}, {
                      placeStr: "连接失败"
                    })
                  }));
                  dispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
                    error: Error()
                  }), setLoadingAction) : setLoadingAction)({
                    isShow: false
                  }));
                },
                onAnthFail: () => {
                  dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                    error: Error()
                  }), addToastAction) : addToastAction)({
                    content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                      error: Error()
                    }), lang) : lang).write(k => k.WebSocketModule.socketConnectAuthFaild, {}, {
                      placeStr: "Auth Faild"
                    })
                  }));
                },
                onDisconnect: data => {
                  dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                    error: Error()
                  }), addToastAction) : addToastAction)({
                    content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                      error: Error()
                    }), lang) : lang).write(k => k.WebSocketModule.socketConnectDisconnect, {}, {
                      placeStr: "socket disconnect"
                    }),
                    type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                      error: Error()
                    }), ToastType) : ToastType).ERROR
                  }));
                  dispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
                    error: Error()
                  }), setLoadingAction) : setLoadingAction)({
                    isShow: false
                  }));
                },
                onReConnect: () => true
              });
              sktInstance.initSocket().then(() => {
                resolve(sktInstance);
              });
            });
          }
        });
      });

      _export("removeInstance", removeInstance = () => {
        sktMsgListener && sktMsgListener.removeAll();
        sktInstance && sktInstance.close();

        _export("sktInstance", sktInstance = null);
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3eec4e2f71c477eb1a560a2fe560c0dfe4596ef5.js.map