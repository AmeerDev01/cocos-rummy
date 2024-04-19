System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, WebSocketToDo, listenerFactoy, initConfig, subGameList, config, addToastAction, setLoadingAction, getStore, global, lang, changeAutoLauncherType, AutoLauncherType, headerViewModel, _crd, SKT_MAG_TYPE, sktMsgListener, sktInstance, removeInstance;

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

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetLoadingAction(extras) {
    _reporterNs.report("setLoadingAction", "../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "./store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeAutoLauncherType(extras) {
    _reporterNs.report("changeAutoLauncherType", "./store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherType(extras) {
    _reporterNs.report("AutoLauncherType", "./type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfheaderViewModel(extras) {
    _reporterNs.report("headerViewModel", "./index", _context.meta, extras);
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
      addToastAction = _unresolved_6.addToastAction;
      setLoadingAction = _unresolved_6.setLoadingAction;
    }, function (_unresolved_7) {
      getStore = _unresolved_7.getStore;
    }, function (_unresolved_8) {
      global = _unresolved_8.global;
      lang = _unresolved_8.lang;
    }, function (_unresolved_9) {
      changeAutoLauncherType = _unresolved_9.changeAutoLauncherType;
    }, function (_unresolved_10) {
      AutoLauncherType = _unresolved_10.AutoLauncherType;
    }, function (_unresolved_11) {
      headerViewModel = _unresolved_11.headerViewModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "34f1aiG9ypICqEMt9vbMqzG", "socketConnect", undefined);

      _export("SKT_MAG_TYPE", SKT_MAG_TYPE = /*#__PURE__*/function (SKT_MAG_TYPE) {
        SKT_MAG_TYPE["HEART_BEAT"] = "1";
        SKT_MAG_TYPE["AUTH"] = "2";
        SKT_MAG_TYPE["LAUNCHER_BET"] = "501";
        SKT_MAG_TYPE["JACKPOT"] = "7";
        SKT_MAG_TYPE["BALANCE_UPDATE"] = "10";
        SKT_MAG_TYPE["VACATETHEROOM"] = "3";
        return SKT_MAG_TYPE;
      }({}));

      _export("sktMsgListener", sktMsgListener = (_crd && listenerFactoy === void 0 ? (_reportPossibleCrUseOflistenerFactoy({
        error: Error()
      }), listenerFactoy) : listenerFactoy)());

      _export("sktInstance", sktInstance = null);

      _export("default", () => {
        var dispatch = (_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
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
              var {
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
                onMessage: (code, data, error) => {
                  sktMsgListener.dispath(code, data, error);
                },
                onDataFail: code => {
                  if (code === SKT_MAG_TYPE.LAUNCHER_BET) {
                    (_crd && headerViewModel === void 0 ? (_reportPossibleCrUseOfheaderViewModel({
                      error: Error()
                    }), headerViewModel) : headerViewModel).comp.closeGame();
                    (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                      error: Error()
                    }), global) : global).closeSubGame({
                      confirmContent: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                        error: Error()
                      }), lang) : lang).write(k => k.WebSocketModule.socketConnectDateFail) + ' (-' + code + ')'
                    });
                  } else {
                    dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                      error: Error()
                    }), addToastAction) : addToastAction)({
                      content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                        error: Error()
                      }), lang) : lang).write(k => k.WebSocketModule.socketConnectDateFail, {}, {
                        placeStr: "连接失败"
                      }) + ' (-' + code + ')'
                    }));
                    dispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
                      error: Error()
                    }), setLoadingAction) : setLoadingAction)({
                      isShow: false
                    }));
                  }
                },
                onAnthFail: error => {
                  (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                    error: Error()
                  }), global) : global).closeSubGame({
                    confirmContent: error || (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                      error: Error()
                    }), lang) : lang).write(k => k.WebSocketModule.socketConnectDateFail)
                  });
                },
                onDisconnect: data => {
                  // dispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.socketConnectDisconnect, {}, { placeStr: "socket disconnect" }),type: ToastType.ERROR }))
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
                  if (times >= 1) {
                    dispatch((_crd && changeAutoLauncherType === void 0 ? (_reportPossibleCrUseOfchangeAutoLauncherType({
                      error: Error()
                    }), changeAutoLauncherType) : changeAutoLauncherType)((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                      error: Error()
                    }), AutoLauncherType) : AutoLauncherType).NONE));
                    (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                      error: Error()
                    }), global) : global).closeSubGame({
                      confirmContent: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                        error: Error()
                      }), lang) : lang).write(k => k.WebSocketModule.socketConnectDisconnect)
                    }); // removeInstance()

                    return false;
                  } else {
                    return true;
                  }
                }
              });
              sktInstance.initSocket().then(d => {
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
        if (sktMsgListener) {
          sktMsgListener.removeAll();
          sktInstance.close();

          _export("sktInstance", sktInstance = null);
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f7aa77eed7df6c6b50c34be374075a6d5d93f744.js.map