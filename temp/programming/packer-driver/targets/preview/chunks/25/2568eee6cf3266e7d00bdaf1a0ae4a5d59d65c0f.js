System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, assetManager, listenerFactoy, LoaderPanelViewModel, global, lang, SubGameRunState, subGameList, addToastAction, setSubGameRunState, AudioMgr, setActiveAudio, config, socketConnect, removeInstance, egyptV2FileMap, bundlePkgName, PrefabPathDefine, fruitStore, getStore, ThorV2MainViewModel, initGameStore, initRoller, _crd, sourceManageMap, bundleEgyptv2, mainViewModel, thorv2_Audio, sourceManageSeletor, NORMAL_MAG_TYPE, msgListener, initTimeoutId, startUp, stopGame;

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOflistenerFactoy(extras) {
    _reporterNs.report("listenerFactoy", "../../common/listenerFactoy", _context.meta, extras);
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

  function _reportPossibleCrUseOfsubGameList(extras) {
    _reporterNs.report("subGameList", "../../hall/config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetSubGameRunState(extras) {
    _reporterNs.report("setSubGameRunState", "../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "../../utils/AudioMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetActiveAudio(extras) {
    _reporterNs.report("setActiveAudio", "../../utils/UseSetOption", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "./config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsocketConnect(extras) {
    _reporterNs.report("socketConnect", "./socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfremoveInstance(extras) {
    _reporterNs.report("removeInstance", "./socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfegyptV2FileMap(extras) {
    _reporterNs.report("egyptV2FileMap", "./sourceDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbundlePkgName(extras) {
    _reporterNs.report("bundlePkgName", "./sourceDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "./sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "./sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOffruitStore(extras) {
    _reporterNs.report("fruitStore", "./store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "./store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThorV2MainViewModel(extras) {
    _reporterNs.report("ThorV2MainViewModel", "./viewModel/ThorV2MainViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitGameStore(extras) {
    _reporterNs.report("initGameStore", "./store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitRoller(extras) {
    _reporterNs.report("initRoller", "./store/actions/roller", _context.meta, extras);
  }

  _export({
    mainViewModel: void 0,
    thorv2_Audio: void 0
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
      listenerFactoy = _unresolved_2.listenerFactoy;
    }, function (_unresolved_3) {
      LoaderPanelViewModel = _unresolved_3.default;
    }, function (_unresolved_4) {
      global = _unresolved_4.global;
      lang = _unresolved_4.lang;
    }, function (_unresolved_5) {
      SubGameRunState = _unresolved_5.SubGameRunState;
      subGameList = _unresolved_5.subGameList;
    }, function (_unresolved_6) {
      addToastAction = _unresolved_6.addToastAction;
      setSubGameRunState = _unresolved_6.setSubGameRunState;
    }, function (_unresolved_7) {
      AudioMgr = _unresolved_7.AudioMgr;
    }, function (_unresolved_8) {
      setActiveAudio = _unresolved_8.setActiveAudio;
    }, function (_unresolved_9) {
      config = _unresolved_9.default;
    }, function (_unresolved_10) {
      socketConnect = _unresolved_10.default;
      removeInstance = _unresolved_10.removeInstance;
    }, function (_unresolved_11) {
      egyptV2FileMap = _unresolved_11.default;
      bundlePkgName = _unresolved_11.bundlePkgName;
    }, function (_unresolved_12) {
      PrefabPathDefine = _unresolved_12.PrefabPathDefine;
    }, function (_unresolved_13) {
      fruitStore = _unresolved_13.default;
      getStore = _unresolved_13.getStore;
    }, function (_unresolved_14) {
      ThorV2MainViewModel = _unresolved_14.default;
    }, function (_unresolved_15) {
      initGameStore = _unresolved_15.initGameStore;
    }, function (_unresolved_16) {
      initRoller = _unresolved_16.initRoller;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "178eeV561hOu7aasbaNBI8T", "index", undefined);

      __checkObsolete__(['AssetManager', 'Node', 'Prefab', 'assetManager']);

      sourceManageMap = [];

      _export("bundleEgyptv2", bundleEgyptv2 = null);

      _export("sourceManageSeletor", sourceManageSeletor = function sourceManageSeletor(bundleName) {
        if (bundleName === void 0) {
          bundleName = _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName;
        }

        return sourceManageMap.find(i => i.bundle.name === bundleName);
      });

      _export("NORMAL_MAG_TYPE", NORMAL_MAG_TYPE = /*#__PURE__*/function (NORMAL_MAG_TYPE) {
        NORMAL_MAG_TYPE[NORMAL_MAG_TYPE["CHANGE_GAME"] = 0] = "CHANGE_GAME";
        return NORMAL_MAG_TYPE;
      }({}));
      /**用于一般逻辑的监听器 */


      _export("msgListener", msgListener = (_crd && listenerFactoy === void 0 ? (_reportPossibleCrUseOflistenerFactoy({
        error: Error()
      }), listenerFactoy) : listenerFactoy)());

      initTimeoutId = 0;

      _export("startUp", startUp = rootNode => {
        (_crd && fruitStore === void 0 ? (_reportPossibleCrUseOffruitStore({
          error: Error()
        }), fruitStore) : fruitStore).configureStore();
        assetManager.loadBundle(_crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
          error: Error()
        }), bundlePkgName) : bundlePkgName, (err, bundle) => {
          _export("bundleEgyptv2", bundleEgyptv2 = bundle);

          bundleEgyptv2.load((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
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
            var loaderviweModel = new (_crd && LoaderPanelViewModel === void 0 ? (_reportPossibleCrUseOfLoaderPanelViewModel({
              error: Error()
            }), LoaderPanelViewModel) : LoaderPanelViewModel)().mountView(prefab).appendTo(rootNode).setProps({
              loadBarType: 1
            }).setEvent({
              onLoadDone: _sourceManageMap => {
                sourceManageMap = _sourceManageMap;

                _export("thorv2_Audio", thorv2_Audio = new (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                  error: Error()
                }), AudioMgr) : AudioMgr)(sourceManageSeletor()));

                (_crd && setActiveAudio === void 0 ? (_reportPossibleCrUseOfsetActiveAudio({
                  error: Error()
                }), setActiveAudio) : setActiveAudio)(thorv2_Audio); // 默认给10秒进入游戏超时处理，有时候socket连接成功之后，服务器没有发送进入房间 消息，导致卡住

                initTimeoutId = window.setTimeout(() => {
                  (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                    error: Error()
                  }), global) : global).closeSubGame({
                    confirmContent: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                      error: Error()
                    }), lang) : lang).write(k => k.InitGameModule.GameBoardInit),
                    confirmDoneBeforeFn: () => destoryGame(loaderviweModel, initTimeoutId)
                  });
                  (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                    error: Error()
                  }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                    error: Error()
                  }), addToastAction) : addToastAction)({
                    content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                      error: Error()
                    }), lang) : lang).write(k => k.InitGameModule.GameBoardInit, {}, {
                      placeStr: "game init failed"
                    })
                  })); // egyptv2_Audio.playOneShot(SoundPathDefine.ding)
                }, 10000); // 卸载游戏方法

                var destoryGame = (loaderviweModel, timeId) => {
                  loaderviweModel.unMount();
                  window.clearTimeout(timeId);
                };

                loaderviweModel.comp.setTipContent((_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.WebSocketModule.GameInit, {}, {
                  placeStr: "Game init..."
                }));
                (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                  error: Error()
                }), global) : global).hallDispatch((_crd && setSubGameRunState === void 0 ? (_reportPossibleCrUseOfsetSubGameRunState({
                  error: Error()
                }), setSubGameRunState) : setSubGameRunState)((_crd && SubGameRunState === void 0 ? (_reportPossibleCrUseOfSubGameRunState({
                  error: Error()
                }), SubGameRunState) : SubGameRunState).RUN));
                (_crd && socketConnect === void 0 ? (_reportPossibleCrUseOfsocketConnect({
                  error: Error()
                }), socketConnect) : socketConnect)().then(() => {
                  (_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
                    error: Error()
                  }), getStore) : getStore)().dispatch((_crd && initGameStore === void 0 ? (_reportPossibleCrUseOfinitGameStore({
                    error: Error()
                  }), initGameStore) : initGameStore)(0));
                  (_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
                    error: Error()
                  }), getStore) : getStore)().dispatch((_crd && initRoller === void 0 ? (_reportPossibleCrUseOfinitRoller({
                    error: Error()
                  }), initRoller) : initRoller)(0));

                  _export("mainViewModel", mainViewModel = new (_crd && ThorV2MainViewModel === void 0 ? (_reportPossibleCrUseOfThorV2MainViewModel({
                    error: Error()
                  }), ThorV2MainViewModel) : ThorV2MainViewModel)(() => {
                    destoryGame(loaderviweModel, initTimeoutId);
                  }).mountView(sourceManageSeletor().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                    error: Error()
                  }), PrefabPathDefine) : PrefabPathDefine).MAIN_GAME).source).appendTo(rootNode).connect()); // 调整loader层级到最上层，让主界面初始化完成后才卸载


                  loaderviweModel.viewNode.isValid && loaderviweModel.viewNode.setSiblingIndex(loaderviweModel.viewNode.parent.children.length);
                }).catch(e => loaderviweModel.comp.setTipContent(e || 'error'));
              }
            }).setProps({
              versionStr: "md5: " + (_crd && subGameList === void 0 ? (_reportPossibleCrUseOfsubGameList({
                error: Error()
              }), subGameList) : subGameList).find(i => i.gameId === (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).gameId).md5
            });
            loaderviweModel.comp.startLoad([bundle], [...(_crd && egyptV2FileMap === void 0 ? (_reportPossibleCrUseOfegyptV2FileMap({
              error: Error()
            }), egyptV2FileMap) : egyptV2FileMap)]);
          });
        });
      });

      _export("stopGame", stopGame = () => {
        // log("stopGame", initTimeoutId);
        (_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
          error: Error()
        }), getStore) : getStore)().dispatch((_crd && initGameStore === void 0 ? (_reportPossibleCrUseOfinitGameStore({
          error: Error()
        }), initGameStore) : initGameStore)(0));
        (_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
          error: Error()
        }), getStore) : getStore)().dispatch((_crd && initRoller === void 0 ? (_reportPossibleCrUseOfinitRoller({
          error: Error()
        }), initRoller) : initRoller)(0));
        initTimeoutId && window.clearTimeout(initTimeoutId);
        mainViewModel && mainViewModel.unMount();
        thorv2_Audio && thorv2_Audio.remove();
        (_crd && removeInstance === void 0 ? (_reportPossibleCrUseOfremoveInstance({
          error: Error()
        }), removeInstance) : removeInstance)();
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2568eee6cf3266e7d00bdaf1a0ae4a5d59d65c0f.js.map