System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, WebSocketToDo, initConfig, hallConfig, subGameList, ToastType, addToastAction, setLoadingAction, setSocketConnectStatus, listenerFactoy, getStore, baseBoardView, global, lang, _crd, SKT_MAG_TYPE, sktMsgListener, sktInstance, removeInstance;

  function _reportPossibleCrUseOfWebSocketToDo(extras) {
    _reporterNs.report("WebSocketToDo", "../common/WebSocketToDo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitConfig(extras) {
    _reporterNs.report("initConfig", "./config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhallConfig(extras) {
    _reporterNs.report("hallConfig", "./config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsubGameList(extras) {
    _reporterNs.report("subGameList", "./config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastType(extras) {
    _reporterNs.report("ToastType", "./store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "./store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetLoadingAction(extras) {
    _reporterNs.report("setLoadingAction", "./store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetSocketConnectStatus(extras) {
    _reporterNs.report("setSocketConnectStatus", "./store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOflistenerFactoy(extras) {
    _reporterNs.report("listenerFactoy", "../common/listenerFactoy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "./store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbaseBoardView(extras) {
    _reporterNs.report("baseBoardView", "./index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "./index", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "./index", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      WebSocketToDo = _unresolved_2.default;
    }, function (_unresolved_3) {
      initConfig = _unresolved_3.initConfig;
      hallConfig = _unresolved_3.config;
      subGameList = _unresolved_3.subGameList;
    }, function (_unresolved_4) {
      ToastType = _unresolved_4.ToastType;
      addToastAction = _unresolved_4.addToastAction;
      setLoadingAction = _unresolved_4.setLoadingAction;
      setSocketConnectStatus = _unresolved_4.setSocketConnectStatus;
    }, function (_unresolved_5) {
      listenerFactoy = _unresolved_5.listenerFactoy;
    }, function (_unresolved_6) {
      getStore = _unresolved_6.getStore;
    }, function (_unresolved_7) {
      baseBoardView = _unresolved_7.baseBoardView;
      global = _unresolved_7.global;
    }, function (_unresolved_8) {
      lang = _unresolved_8.lang;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f5017UjeUFOsbnUONMayQ7i", "socketConnect", undefined);

      _export("SKT_MAG_TYPE", SKT_MAG_TYPE = /*#__PURE__*/function (SKT_MAG_TYPE) {
        SKT_MAG_TYPE["LOG_EXIT"] = "0";
        SKT_MAG_TYPE["HEART_BEAT"] = "1";
        SKT_MAG_TYPE["AUTH"] = "2";
        SKT_MAG_TYPE["EXIT"] = "3";
        SKT_MAG_TYPE["GET_WITH_DRAW_CHANNEL"] = "411";
        SKT_MAG_TYPE["RECHARGE_ORDER"] = "412";
        SKT_MAG_TYPE["MEMBER_INFO"] = "400";
        SKT_MAG_TYPE["MODIFY_MEMBER_INFO"] = "416";
        SKT_MAG_TYPE["MODIFY_BIND_PHONE"] = "408";
        SKT_MAG_TYPE["MAEQUEE"] = "404";
        SKT_MAG_TYPE["WITH_DRAW_LIST"] = "419";
        SKT_MAG_TYPE["VIP_CHANGE"] = "420";
        SKT_MAG_TYPE["GIVE_GLOD"] = "423";
        SKT_MAG_TYPE["GIFT_LIST"] = "424";
        SKT_MAG_TYPE["WINNING_BOX"] = "425";
        SKT_MAG_TYPE["TURNTABLEDATA"] = "426";
        SKT_MAG_TYPE["TURNTABLESEND"] = "427";
        SKT_MAG_TYPE["TURNTABLETNOTIFICATION"] = "428";
        SKT_MAG_TYPE["RECHANGE_CALLBACK"] = "429";
        SKT_MAG_TYPE["FRIST_LOGIN"] = "430";
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

            sktInstance.maxReConnectTimes = 5;
            (_crd && initConfig === void 0 ? (_reportPossibleCrUseOfinitConfig({
              error: Error()
            }), initConfig) : initConfig)().then(config => {
              const {
                gameId,
                websocketUrl
              } = (_crd && subGameList === void 0 ? (_reportPossibleCrUseOfsubGameList({
                error: Error()
              }), subGameList) : subGameList).find(i => i.gameId === (_crd && hallConfig === void 0 ? (_reportPossibleCrUseOfhallConfig({
                error: Error()
              }), hallConfig) : hallConfig).gameId);
              sktInstance.init(config.sktCode, gameId, websocketUrl, {
                onMessage: (code, data) => {
                  dispatch((_crd && setSocketConnectStatus === void 0 ? (_reportPossibleCrUseOfsetSocketConnectStatus({
                    error: Error()
                  }), setSocketConnectStatus) : setSocketConnectStatus)({
                    isConnect: true,
                    retryConnectTimes: 1
                  }));
                  sktMsgListener.dispath(code, data || undefined);
                },
                onDataFail: data => {
                  dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                    error: Error()
                  }), addToastAction) : addToastAction)({
                    content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                      error: Error()
                    }), lang) : lang).write(k => k.WebSocketModule.socketConnectDateFail, {}, {
                      placeStr: "连接失败~"
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
                onAnthFail: () => {
                  (_crd && baseBoardView === void 0 ? (_reportPossibleCrUseOfbaseBoardView({
                    error: Error()
                  }), baseBoardView) : baseBoardView) && (_crd && baseBoardView === void 0 ? (_reportPossibleCrUseOfbaseBoardView({
                    error: Error()
                  }), baseBoardView) : baseBoardView).mainPanelViewModel && (_crd && baseBoardView === void 0 ? (_reportPossibleCrUseOfbaseBoardView({
                    error: Error()
                  }), baseBoardView) : baseBoardView).mainPanelViewModel.logOut();
                },
                onDisconnect: data => {
                  dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                    error: Error()
                  }), addToastAction) : addToastAction)({
                    content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                      error: Error()
                    }), lang) : lang).write(k => k.WebSocketModule.socketConnectDisconnect, {}, {
                      placeStr: "Network disconnect"
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
                  dispatch((_crd && setSocketConnectStatus === void 0 ? (_reportPossibleCrUseOfsetSocketConnectStatus({
                    error: Error()
                  }), setSocketConnectStatus) : setSocketConnectStatus)({
                    isConnect: false
                  }));
                },
                onReConnect: times => {
                  console.log('retry', times);

                  if (times > sktInstance.maxReConnectTimes) {
                    return false;
                  }

                  return true;
                }
              });
              sktInstance.initSocket().then(() => {
                // dispatch(addToastAction({ content: "socket已连接" }))
                dispatch((_crd && setSocketConnectStatus === void 0 ? (_reportPossibleCrUseOfsetSocketConnectStatus({
                  error: Error()
                }), setSocketConnectStatus) : setSocketConnectStatus)({
                  isConnect: true,
                  retryConnectTimes: 1
                }));
                (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                  error: Error()
                }), global) : global).hallDispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
                  error: Error()
                }), setLoadingAction) : setLoadingAction)({
                  isShow: false
                }));
                resolve(sktInstance);
              });
            }).catch(e => {
              reject(e); // dispatch(addToastAction({ content: "配置文件获取失败:" + e }))
            }); // sktInstance.initSocket().then(() => {
            //   // dispatch(addToastAction({ content: "socket已连接" }))
            //   resolve(sktInstance)
            // })
            // initConfig().then((config) => {
            // }).catch((e) => {
            //   reject(e)
            //   // dispatch(addToastAction({ content: "配置文件获取失败:" + e }))
            // })
          }
        });
      });

      _export("removeInstance", removeInstance = () => {
        _export("sktInstance", sktInstance = null);
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=29af652f63285e4bc13698a27f1a391ae42bdd5f.js.map