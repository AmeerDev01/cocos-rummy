System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, assetManager, LoaderPanelViewModel, global, lang, SubGameRunState, getStore, addToastAction, setSubGameRunState, fishFileMap, fishBundlePkgName, PrefabPathDefine, fishStore, config, MainViewModel, TestViewModel, socketConnect, removeInstance, _crd, sourceManageMap, bundleFish, sourceManageSelector, rootNode, initTimeoutId, mainViewModel, startUp, stopGame;

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoaderPanelViewModel(extras) {
    _reporterNs.report("LoaderPanelViewModel", "../../common/viewModel/LoaderPanelViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubGameRunState(extras) {
    _reporterNs.report("SubGameRunState", "../../hall/config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../../hall/store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetSubGameRunState(extras) {
    _reporterNs.report("setSubGameRunState", "../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishFileMap(extras) {
    _reporterNs.report("fishFileMap", "./sourceDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishBundlePkgName(extras) {
    _reporterNs.report("fishBundlePkgName", "./sourceDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "./sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishStore(extras) {
    _reporterNs.report("fishStore", "./store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "./config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainViewModel(extras) {
    _reporterNs.report("MainViewModel", "./viewModel/MainViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTestViewModel(extras) {
    _reporterNs.report("TestViewModel", "./viewModel/TestViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsocketConnect(extras) {
    _reporterNs.report("socketConnect", "./socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfremoveInstance(extras) {
    _reporterNs.report("removeInstance", "./socketConnect", _context.meta, extras);
  }

  _export({
    rootNode: void 0,
    mainViewModel: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Prefab = _cc.Prefab;
      assetManager = _cc.assetManager;
    }, function (_unresolved_2) {
      LoaderPanelViewModel = _unresolved_2.default;
    }, function (_unresolved_3) {
      global = _unresolved_3.global;
      lang = _unresolved_3.lang;
    }, function (_unresolved_4) {
      SubGameRunState = _unresolved_4.SubGameRunState;
    }, function (_unresolved_5) {
      getStore = _unresolved_5.getStore;
    }, function (_unresolved_6) {
      addToastAction = _unresolved_6.addToastAction;
      setSubGameRunState = _unresolved_6.setSubGameRunState;
    }, function (_unresolved_7) {
      fishFileMap = _unresolved_7.default;
      fishBundlePkgName = _unresolved_7.fishBundlePkgName;
    }, function (_unresolved_8) {
      PrefabPathDefine = _unresolved_8.PrefabPathDefine;
    }, function (_unresolved_9) {
      fishStore = _unresolved_9.default;
    }, function (_unresolved_10) {
      config = _unresolved_10.default;
    }, function (_unresolved_11) {
      MainViewModel = _unresolved_11.default;
    }, function (_unresolved_12) {
      TestViewModel = _unresolved_12.default;
    }, function (_unresolved_13) {
      socketConnect = _unresolved_13.default;
      removeInstance = _unresolved_13.removeInstance;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41d0e1yCDdDsrJ3RB6vVkJH", "index", undefined);

      __checkObsolete__(['AssetManager', 'Node', 'Prefab', 'assetManager']);

      sourceManageMap = [];

      _export("bundleFish", bundleFish = null);

      _export("sourceManageSelector", sourceManageSelector = (bundleName = _crd && fishBundlePkgName === void 0 ? (_reportPossibleCrUseOffishBundlePkgName({
        error: Error()
      }), fishBundlePkgName) : fishBundlePkgName) => sourceManageMap.find(i => i.bundle.name === bundleName));

      initTimeoutId = 0;

      _export("startUp", startUp = rootNode => {
        const dispatch = (_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
          error: Error()
        }), getStore) : getStore)().dispatch;
        rootNode = rootNode;
        (_crd && fishStore === void 0 ? (_reportPossibleCrUseOffishStore({
          error: Error()
        }), fishStore) : fishStore).configureStore();
        assetManager.loadBundle(_crd && fishBundlePkgName === void 0 ? (_reportPossibleCrUseOffishBundlePkgName({
          error: Error()
        }), fishBundlePkgName) : fishBundlePkgName, (err, bundle) => {
          _export("bundleFish", bundleFish = bundle);

          bundleFish.load((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).LOAING_PANEL, Prefab, (progress, total) => {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).hallDispatch((_crd && setSubGameRunState === void 0 ? (_reportPossibleCrUseOfsetSubGameRunState({
              error: Error()
            }), setSubGameRunState) : setSubGameRunState)((_crd && SubGameRunState === void 0 ? (_reportPossibleCrUseOfSubGameRunState({
              error: Error()
            }), SubGameRunState) : SubGameRunState).LOADING));
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).setSubGameGate((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameId, progress / total);
          }, (err, prefab) => {
            if (!(_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).isAllowOpenSubGame((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameId)) return;
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).hallDispatch((_crd && setSubGameRunState === void 0 ? (_reportPossibleCrUseOfsetSubGameRunState({
              error: Error()
            }), setSubGameRunState) : setSubGameRunState)((_crd && SubGameRunState === void 0 ? (_reportPossibleCrUseOfSubGameRunState({
              error: Error()
            }), SubGameRunState) : SubGameRunState).READY));
            const loaderviweModel = new (_crd && LoaderPanelViewModel === void 0 ? (_reportPossibleCrUseOfLoaderPanelViewModel({
              error: Error()
            }), LoaderPanelViewModel) : LoaderPanelViewModel)().mountView(prefab).appendTo(rootNode).setProps({
              loadBarType: 1,
              reverseProgress: false
            }).setEvent({
              onLoadDone: _sourceManageMap => {
                sourceManageMap = _sourceManageMap;
                loaderviweModel.comp.setTipContent("game init..."); // 默认给10秒进入游戏超时处理，有时候socket连接成功之后，服务器没有发送进入房间 消息，导致卡住

                initTimeoutId = window.setTimeout(() => {
                  (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                    error: Error()
                  }), global) : global).closeSubGame({
                    confirmContent: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                      error: Error()
                    }), lang) : lang).write(k => k.InitGameModule.GameBoardInit)
                  });
                  dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                    error: Error()
                  }), addToastAction) : addToastAction)({
                    content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                      error: Error()
                    }), lang) : lang).write(k => k.InitGameModule.GameBoardInit, {}, {
                      placeStr: "game init failed"
                    })
                  }));
                }, 10000);

                const socketHandle = () => {
                  initTimeoutId && window.clearTimeout(initTimeoutId);

                  _export("mainViewModel", mainViewModel = new (_crd && MainViewModel === void 0 ? (_reportPossibleCrUseOfMainViewModel({
                    error: Error()
                  }), MainViewModel) : MainViewModel)(() => {
                    loaderviweModel.unMount();
                  }).mountView(sourceManageSelector().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                    error: Error()
                  }), PrefabPathDefine) : PrefabPathDefine).GAME_MAIN_PANEL).source).appendTo(rootNode).connect());

                  if ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                    error: Error()
                  }), config) : config).isTest) {
                    new (_crd && TestViewModel === void 0 ? (_reportPossibleCrUseOfTestViewModel({
                      error: Error()
                    }), TestViewModel) : TestViewModel)().mountView(sourceManageSelector().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                      error: Error()
                    }), PrefabPathDefine) : PrefabPathDefine).TEST).source).appendTo(rootNode).connect();
                  }
                };

                if ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).isTest) {
                  (_crd && socketConnect === void 0 ? (_reportPossibleCrUseOfsocketConnect({
                    error: Error()
                  }), socketConnect) : socketConnect)();
                  socketHandle();
                } else {
                  (_crd && socketConnect === void 0 ? (_reportPossibleCrUseOfsocketConnect({
                    error: Error()
                  }), socketConnect) : socketConnect)().then(socketHandle).catch(e => loaderviweModel.comp.setTipContent(e || 'error'));
                }
              }
            });
            loaderviweModel.comp.startLoad([bundle], [...(_crd && fishFileMap === void 0 ? (_reportPossibleCrUseOffishFileMap({
              error: Error()
            }), fishFileMap) : fishFileMap)]);
          });
        });
      });

      _export("stopGame", stopGame = () => {
        initTimeoutId && window.clearTimeout(initTimeoutId);
        mainViewModel && mainViewModel.unMount();
        (_crd && removeInstance === void 0 ? (_reportPossibleCrUseOfremoveInstance({
          error: Error()
        }), removeInstance) : removeInstance)();
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c164df704141911fb597f88ae0c407e659aaa99e.js.map