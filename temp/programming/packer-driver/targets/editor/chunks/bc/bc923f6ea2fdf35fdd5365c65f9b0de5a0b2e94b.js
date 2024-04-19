System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, WebSocketToDo, listenerFactoy, initConfig, subGameList, config, getStore, addToastAction, setLoadingAction, global, lang, _crd, SKT_MAG_TYPE, sktMsgListener, sktInstance, dispatch, removeInstance;

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
      listenerFactoy = _unresolved_3.listenerFactoy;
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

      _cclegacy._RF.push({}, "6f6e2/e8+NLda1J5FjljOY+", "socketConnect", undefined);

      _export("SKT_MAG_TYPE", SKT_MAG_TYPE = /*#__PURE__*/function (SKT_MAG_TYPE) {
        SKT_MAG_TYPE["HEART_BEAT"] = "1";
        SKT_MAG_TYPE["AUTH"] = "2";
        SKT_MAG_TYPE["MY_INFO"] = "4";
        SKT_MAG_TYPE["TOP_UP"] = "10";
        SKT_MAG_TYPE["GAME_TIP"] = "11";
        SKT_MAG_TYPE["CRASH"] = "801";
        SKT_MAG_TYPE["BET_ALL"] = "802";
        SKT_MAG_TYPE["BET_RESPONSE"] = "803";
        SKT_MAG_TYPE["SETTLEMENT"] = "804";
        SKT_MAG_TYPE["POKER"] = "805";
        SKT_MAG_TYPE["HISTORY"] = "806";
        SKT_MAG_TYPE["ALL_USERS"] = "807";
        SKT_MAG_TYPE["OTHER_WIN"] = "808";
        SKT_MAG_TYPE["REPEAT_BET"] = "809";
        SKT_MAG_TYPE["GAME_SHOW"] = "810";
        SKT_MAG_TYPE["GIVE_GIFT"] = "812";
        return SKT_MAG_TYPE;
      }({}));

      _export("sktMsgListener", sktMsgListener = (_crd && listenerFactoy === void 0 ? (_reportPossibleCrUseOflistenerFactoy({
        error: Error()
      }), listenerFactoy) : listenerFactoy)());

      _export("sktInstance", sktInstance = null);

      dispatch = (_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)().dispatch;

      _export("default", () => {
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
              const {
                gameId,
                websocketUrl
              } = (_crd && subGameList === void 0 ? (_reportPossibleCrUseOfsubGameList({
                error: Error()
              }), subGameList) : subGameList).find(i => i.gameId === (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).gameId);
              sktInstance.init((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).sktCode, gameId, websocketUrl, {
                // sktInstance.init(config.sktCode, 12, "ws://192.168.110.243:18003/ws", {
                onMessage: (code, data, error) => {
                  sktMsgListener.dispath(code, data || undefined, error);
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
                onReConnect: times => {
                  if (times >= 5) {
                    (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                      error: Error()
                    }), global) : global).closeSubGame({
                      confirmContent: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                        error: Error()
                      }), lang) : lang).write(k => k.WebSocketModule.socketConnectDisconnect)
                    });
                    return false;
                  } else {
                    return true;
                  }
                }
              });
              sktInstance.initSocket().then(() => {
                resolve(sktInstance);
              }).catch(e => {
                (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                  error: Error()
                }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                  error: Error()
                }), addToastAction) : addToastAction)({
                  content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                    error: Error()
                  }), lang) : lang).write(k => k.InitGameModule.GameBoardInit, {}, {
                    placeStr: "游戏初始化失败"
                  })
                }));
                removeInstance();
                window.setTimeout(() => {
                  (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                    error: Error()
                  }), global) : global).closeSubGame({
                    isPre: true
                  });
                }, 1500);
              });
            }).catch(e => {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.InitGameModule.GameBoardInit, {}, {
                  placeStr: "游戏初始化失败"
                })
              }));
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).closeSubGame({
                confirmContent: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.WebSocketModule.ConfigGameFaild)
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
//# sourceMappingURL=bc923f6ea2fdf35fdd5365c65f9b0de5a0b2e94b.js.map