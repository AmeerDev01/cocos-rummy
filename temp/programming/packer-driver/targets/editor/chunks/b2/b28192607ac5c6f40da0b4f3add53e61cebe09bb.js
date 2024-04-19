System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, assetManager, fruitStore, bundlePkgName, PrefabPathDefine, LoaderPanelViewModel, thorFileMap, SubGameRunState, socketConnect, HeaderViewModel, FooterViewModel, GameBoardViewModel, listenerFactoy, AudioMgr, setActiveAudio, config, global, lang, addToastAction, setSubGameRunState, WinShowViewModel, RoleViewModel, _crd, sourceManageMap, bundleThor, gameBoardViewModel, footerViewModel, headerViewModel, winShowViewModel, roleViewModel, thor_Audio, sourceManageSeletor, NORMAL_MAG_TYPE, msgListener, startUp;

  function _reportPossibleCrUseOffruitStore(extras) {
    _reporterNs.report("fruitStore", "./store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbundlePkgName(extras) {
    _reporterNs.report("bundlePkgName", "./sourceDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "./sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoaderPanelViewModel(extras) {
    _reporterNs.report("LoaderPanelViewModel", "../../common/viewModel/LoaderPanelViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfthorFileMap(extras) {
    _reporterNs.report("thorFileMap", "./sourceDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubGameRunState(extras) {
    _reporterNs.report("SubGameRunState", "../../hall/config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsocketConnect(extras) {
    _reporterNs.report("socketConnect", "./socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeaderViewModel(extras) {
    _reporterNs.report("HeaderViewModel", "./viewModel/HeaderViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFooterViewModel(extras) {
    _reporterNs.report("FooterViewModel", "./viewModel/FooterViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameBoardViewModel(extras) {
    _reporterNs.report("GameBoardViewModel", "./viewModel/GameBoardViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOflistenerFactoy(extras) {
    _reporterNs.report("listenerFactoy", "../../common/listenerFactoy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "../../utils/AudioMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "./sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetActiveAudio(extras) {
    _reporterNs.report("setActiveAudio", "../../utils/UseSetOption", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "./config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetSubGameRunState(extras) {
    _reporterNs.report("setSubGameRunState", "../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinShowViewModel(extras) {
    _reporterNs.report("WinShowViewModel", "./viewModel/WinShowViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleViewModel(extras) {
    _reporterNs.report("RoleViewModel", "./viewModel/RoleViewModel", _context.meta, extras);
  }

  _export({
    gameBoardViewModel: void 0,
    footerViewModel: void 0,
    headerViewModel: void 0,
    winShowViewModel: void 0,
    roleViewModel: void 0,
    thor_Audio: void 0
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
      fruitStore = _unresolved_2.default;
    }, function (_unresolved_3) {
      bundlePkgName = _unresolved_3.bundlePkgName;
    }, function (_unresolved_4) {
      PrefabPathDefine = _unresolved_4.PrefabPathDefine;
    }, function (_unresolved_5) {
      LoaderPanelViewModel = _unresolved_5.default;
    }, function (_unresolved_6) {
      thorFileMap = _unresolved_6.default;
    }, function (_unresolved_7) {
      SubGameRunState = _unresolved_7.SubGameRunState;
    }, function (_unresolved_8) {
      socketConnect = _unresolved_8.default;
    }, function (_unresolved_9) {
      HeaderViewModel = _unresolved_9.default;
    }, function (_unresolved_10) {
      FooterViewModel = _unresolved_10.default;
    }, function (_unresolved_11) {
      GameBoardViewModel = _unresolved_11.default;
    }, function (_unresolved_12) {
      listenerFactoy = _unresolved_12.listenerFactoy;
    }, function (_unresolved_13) {
      AudioMgr = _unresolved_13.AudioMgr;
    }, function (_unresolved_14) {
      setActiveAudio = _unresolved_14.setActiveAudio;
    }, function (_unresolved_15) {
      config = _unresolved_15.default;
    }, function (_unresolved_16) {
      global = _unresolved_16.global;
      lang = _unresolved_16.lang;
    }, function (_unresolved_17) {
      addToastAction = _unresolved_17.addToastAction;
      setSubGameRunState = _unresolved_17.setSubGameRunState;
    }, function (_unresolved_18) {
      WinShowViewModel = _unresolved_18.default;
    }, function (_unresolved_19) {
      RoleViewModel = _unresolved_19.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "35a35F6VxxGFrJThxrVXaWL", "index", undefined);

      __checkObsolete__(['AssetManager', 'Node', 'Prefab', 'assetManager', 'sys']);

      sourceManageMap = [];

      _export("bundleThor", bundleThor = null);

      _export("sourceManageSeletor", sourceManageSeletor = (bundleName = 'thor') => sourceManageMap.find(i => i.bundle.name === bundleName));

      _export("NORMAL_MAG_TYPE", NORMAL_MAG_TYPE = /*#__PURE__*/function (NORMAL_MAG_TYPE) {
        NORMAL_MAG_TYPE[NORMAL_MAG_TYPE["CHANGE_GAME"] = 0] = "CHANGE_GAME";
        return NORMAL_MAG_TYPE;
      }({}));
      /**用于一般逻辑的监听器 */


      _export("msgListener", msgListener = (_crd && listenerFactoy === void 0 ? (_reportPossibleCrUseOflistenerFactoy({
        error: Error()
      }), listenerFactoy) : listenerFactoy)());

      _export("startUp", startUp = rootNode => {
        (_crd && fruitStore === void 0 ? (_reportPossibleCrUseOffruitStore({
          error: Error()
        }), fruitStore) : fruitStore).configureStore();
        let initTimeoutId = 0;
        assetManager.loadBundle(_crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
          error: Error()
        }), bundlePkgName) : bundlePkgName, (err, bundle) => {
          _export("bundleThor", bundleThor = bundle);

          bundleThor.load((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
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
              loadBarType: 1
            }).setEvent({
              onLoadDone: _sourceManageMap => {
                sourceManageMap = _sourceManageMap;

                _export("thor_Audio", thor_Audio = new (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                  error: Error()
                }), AudioMgr) : AudioMgr)(sourceManageSeletor()));

                (_crd && setActiveAudio === void 0 ? (_reportPossibleCrUseOfsetActiveAudio({
                  error: Error()
                }), setActiveAudio) : setActiveAudio)(thor_Audio); // hallConfig.gameConfig.find(item => item.name === "thor")

                loaderviweModel.comp.setTipContent((_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.WebSocketModule.GameInit, {}, {
                  placeStr: "Game init..."
                }));
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
                  }));
                }, 15000);

                const destoryGame = (loaderviweModel, timeId) => {
                  loaderviweModel.unMount();
                  window.clearTimeout(timeId);
                };

                (_crd && socketConnect === void 0 ? (_reportPossibleCrUseOfsocketConnect({
                  error: Error()
                }), socketConnect) : socketConnect)().then(() => {
                  (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                    error: Error()
                  }), global) : global).hallDispatch((_crd && setSubGameRunState === void 0 ? (_reportPossibleCrUseOfsetSubGameRunState({
                    error: Error()
                  }), setSubGameRunState) : setSubGameRunState)((_crd && SubGameRunState === void 0 ? (_reportPossibleCrUseOfSubGameRunState({
                    error: Error()
                  }), SubGameRunState) : SubGameRunState).RUN));

                  _export("gameBoardViewModel", gameBoardViewModel = new (_crd && GameBoardViewModel === void 0 ? (_reportPossibleCrUseOfGameBoardViewModel({
                    error: Error()
                  }), GameBoardViewModel) : GameBoardViewModel)().mountView(sourceManageSeletor().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                    error: Error()
                  }), PrefabPathDefine) : PrefabPathDefine).GAME_BOARD).source).appendTo(rootNode).connect());

                  _export("winShowViewModel", winShowViewModel = new (_crd && WinShowViewModel === void 0 ? (_reportPossibleCrUseOfWinShowViewModel({
                    error: Error()
                  }), WinShowViewModel) : WinShowViewModel)().mountView(sourceManageSeletor().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                    error: Error()
                  }), PrefabPathDefine) : PrefabPathDefine).WINSHOW).source).appendTo(gameBoardViewModel.comp.getWrapNode()).connect());

                  _export("roleViewModel", roleViewModel = new (_crd && RoleViewModel === void 0 ? (_reportPossibleCrUseOfRoleViewModel({
                    error: Error()
                  }), RoleViewModel) : RoleViewModel)().mountView(sourceManageSeletor().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                    error: Error()
                  }), PrefabPathDefine) : PrefabPathDefine).THORROLE).source).appendTo(gameBoardViewModel.comp.getWrapNode()).connect());

                  _export("footerViewModel", footerViewModel = new (_crd && FooterViewModel === void 0 ? (_reportPossibleCrUseOfFooterViewModel({
                    error: Error()
                  }), FooterViewModel) : FooterViewModel)().mountView(sourceManageSeletor().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                    error: Error()
                  }), PrefabPathDefine) : PrefabPathDefine).FOOTER_DOWN).source).appendTo(gameBoardViewModel.comp.getWrapNode()).connect());

                  _export("headerViewModel", headerViewModel = new (_crd && HeaderViewModel === void 0 ? (_reportPossibleCrUseOfHeaderViewModel({
                    error: Error()
                  }), HeaderViewModel) : HeaderViewModel)().mountView(sourceManageSeletor().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                    error: Error()
                  }), PrefabPathDefine) : PrefabPathDefine).HEADER_UP).source).appendTo(gameBoardViewModel.comp.getWrapNode()).connect());

                  loaderviweModel.viewNode.isValid && loaderviweModel.viewNode.setSiblingIndex(loaderviweModel.viewNode.parent.children.length);
                  loaderviweModel.comp.scheduleOnce(() => {
                    destoryGame(loaderviweModel, initTimeoutId);
                  }, 1);
                }).catch(e => loaderviweModel.comp.setTipContent(e || 'error'));
              }
            }).setProps({// versionStr: `md5: ${subGameList.find(i => i.gameId === config.gameId).md5}`
            });
            loaderviweModel.comp.startLoad([bundle], [...(_crd && thorFileMap === void 0 ? (_reportPossibleCrUseOfthorFileMap({
              error: Error()
            }), thorFileMap) : thorFileMap)]);
          });
        });
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b28192607ac5c6f40da0b4f3add53e61cebe09bb.js.map