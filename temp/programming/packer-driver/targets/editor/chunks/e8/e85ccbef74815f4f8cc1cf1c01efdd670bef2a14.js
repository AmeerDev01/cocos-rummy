System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, WebSocketToDo, sktListenerFactoy, initConfig, subGameList, config, getStore, addToastAction, setLoadingAction, global, lang, _crd, SKT_MAG_TYPE, sktMsgListener, sktInstance, removeInstance;

  function _reportPossibleCrUseOfWebSocketToDo(extras) {
    _reporterNs.report("WebSocketToDo", "../../common/WebSocketToDo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktListenerFactoy(extras) {
    _reporterNs.report("sktListenerFactoy", "../../common/sktListenerFactoy", _context.meta, extras);
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

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../../hall/store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetLoadingAction(extras) {
    _reporterNs.report("setLoadingAction", "../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../hall", _context.meta, extras);
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
      sktListenerFactoy = _unresolved_3.sktListenerFactoy;
    }, function (_unresolved_4) {
      initConfig = _unresolved_4.initConfig;
      subGameList = _unresolved_4.subGameList;
    }, function (_unresolved_5) {
      config = _unresolved_5.default;
    }, function (_unresolved_6) {
      getStore = _unresolved_6.getStore;
    }, function (_unresolved_7) {
      addToastAction = _unresolved_7.addToastAction;
      setLoadingAction = _unresolved_7.setLoadingAction;
    }, function (_unresolved_8) {
      global = _unresolved_8.global;
      lang = _unresolved_8.lang;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ab0baHDV+xDq4Zvl8CkY9QX", "socketConnect", undefined);

      _export("SKT_MAG_TYPE", SKT_MAG_TYPE = /*#__PURE__*/function (SKT_MAG_TYPE) {
        SKT_MAG_TYPE["HEART_BEAT"] = "1";
        SKT_MAG_TYPE["AUTH"] = "2";
        SKT_MAG_TYPE["JOIN_GAME"] = "4";
        SKT_MAG_TYPE["GOLD_CHANGE"] = "10";
        SKT_MAG_TYPE["POWER_VERIFY"] = "11";
        SKT_MAG_TYPE["LAUNCHER_BET"] = "802";
        SKT_MAG_TYPE["PUSH_BET"] = "8102";
        SKT_MAG_TYPE["GAME_STATUE"] = "8101";
        SKT_MAG_TYPE["PUSH_RESULT"] = "805";
        SKT_MAG_TYPE["ONLINE_NUMBER_CHANGE"] = "807";
        SKT_MAG_TYPE["MY_BALANCE_PUSH"] = "804";
        SKT_MAG_TYPE["BALANCE_PUSH"] = "808";
        SKT_MAG_TYPE["QUIT_GAME"] = "506";
        SKT_MAG_TYPE["GAME_SHOW"] = "810";
        SKT_MAG_TYPE["GIVE_GIFT"] = "812";
        return SKT_MAG_TYPE;
      }({}));

      _export("sktMsgListener", sktMsgListener = (_crd && sktListenerFactoy === void 0 ? (_reportPossibleCrUseOfsktListenerFactoy({
        error: Error()
      }), sktListenerFactoy) : sktListenerFactoy)());

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

            (_crd && initConfig === void 0 ? (_reportPossibleCrUseOfinitConfig({
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
                onMessage: (code, data, error) => {
                  sktMsgListener.dispath(code, data, error);
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
                  (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                    error: Error()
                  }), global) : global).closeSubGame({
                    confirmContent: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                      error: Error()
                    }), lang) : lang).write(k => k.WebSocketModule.socketConnectAuthFaild)
                  });
                },
                onDisconnect: data => {
                  // dispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.socketConnectDisconnect, {}, { placeStr: "socket disconnect" }), type: ToastType.ERROR }))
                  // dispatch(setLoadingAction({ isShow: false }))
                  (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                    error: Error()
                  }), global) : global).closeSubGame({
                    confirmContent: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                      error: Error()
                    }), lang) : lang).write(k => k.WebSocketModule.socketConnectDisconnect)
                  });
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
        sktInstance && sktInstance.close();

        _export("sktInstance", sktInstance = null);

        sktMsgListener && sktMsgListener.removeById("yxx");
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e85ccbef74815f4f8cc1cf1c01efdd670bef2a14.js.map