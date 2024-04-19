System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, assetManager, LoaderPanelViewModel, AudioMgr, config, socketConnect, removeInstance, yxxFileMap, bundlePkgName, PrefabPathDefine, SoundPathDefine, fruitStore, GameBoardViewModel, TestViewModel, getStore, addToastAction, setSubGameRunState, global, lang, SubGameRunState, subGameList, _crd, sourceManageMap, bundleyxx, gameBoardViewModel, yxxAudio, sourceManageSeletor, initTimeoutId, startUp, stopGame, playBtnClick, playChip, playDefeat, playWin, playDong, playSieve, playGetCoin, playTimeout, playMainBg, longStop;

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoaderPanelViewModel(extras) {
    _reporterNs.report("LoaderPanelViewModel", "../../common/viewModel/LoaderPanelViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "../../utils/AudioMgr", _context.meta, extras);
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

  function _reportPossibleCrUseOfyxxFileMap(extras) {
    _reporterNs.report("yxxFileMap", "./sourceDefine", _context.meta, extras);
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

  function _reportPossibleCrUseOfGameBoardViewModel(extras) {
    _reporterNs.report("GameBoardViewModel", "./viewModel/GameBoardViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTestViewModel(extras) {
    _reporterNs.report("TestViewModel", "./viewModel/TestViewModel", _context.meta, extras);
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

  _export({
    gameBoardViewModel: void 0,
    yxxAudio: void 0
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
      AudioMgr = _unresolved_3.AudioMgr;
    }, function (_unresolved_4) {
      config = _unresolved_4.default;
    }, function (_unresolved_5) {
      socketConnect = _unresolved_5.default;
      removeInstance = _unresolved_5.removeInstance;
    }, function (_unresolved_6) {
      yxxFileMap = _unresolved_6.default;
      bundlePkgName = _unresolved_6.bundlePkgName;
    }, function (_unresolved_7) {
      PrefabPathDefine = _unresolved_7.PrefabPathDefine;
    }, function (_unresolved_8) {
      SoundPathDefine = _unresolved_8.SoundPathDefine;
    }, function (_unresolved_9) {
      fruitStore = _unresolved_9.default;
    }, function (_unresolved_10) {
      GameBoardViewModel = _unresolved_10.default;
    }, function (_unresolved_11) {
      TestViewModel = _unresolved_11.default;
    }, function (_unresolved_12) {
      getStore = _unresolved_12.getStore;
    }, function (_unresolved_13) {
      addToastAction = _unresolved_13.addToastAction;
      setSubGameRunState = _unresolved_13.setSubGameRunState;
    }, function (_unresolved_14) {
      global = _unresolved_14.global;
      lang = _unresolved_14.lang;
    }, function (_unresolved_15) {
      SubGameRunState = _unresolved_15.SubGameRunState;
      subGameList = _unresolved_15.subGameList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fb8d7xC+oZNSLzEJhAYcjjb", "index", undefined);

      __checkObsolete__(['AssetManager', 'Node', 'Prefab', 'assetManager', 'log']);

      sourceManageMap = [];

      _export("bundleyxx", bundleyxx = null);

      _export("sourceManageSeletor", sourceManageSeletor = function sourceManageSeletor(bundleName) {
        if (bundleName === void 0) {
          bundleName = 'yxx';
        }

        return sourceManageMap.find(i => i.bundle.name === bundleName);
      });

      initTimeoutId = 0;

      _export("startUp", startUp = rootNode => {
        var dispatch = (_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
          error: Error()
        }), getStore) : getStore)().dispatch;
        (_crd && fruitStore === void 0 ? (_reportPossibleCrUseOffruitStore({
          error: Error()
        }), fruitStore) : fruitStore).configureStore();
        assetManager.loadBundle(_crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
          error: Error()
        }), bundlePkgName) : bundlePkgName, (err, bundle) => {
          _export("bundleyxx", bundleyxx = bundle);

          bundleyxx.load((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
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
                // window.clearTimeout(initTimeoutId);
                // 默认给10秒进入游戏超时处理，有时候socket连接成功之后，服务器没有发送进入房间 消息，导致卡住
                initTimeoutId = window.setTimeout(() => {
                  (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                    error: Error()
                  }), global) : global).closeSubGame({
                    confirmContent: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                      error: Error()
                    }), lang) : lang).write(k => k.InitGameModule.GameBoardInit),
                    confirmDoneBeforeFn: () => destoryGame(loaderviweModel, initTimeoutId)
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
                sourceManageMap = _sourceManageMap; // hallConfig.gameConfig.find(item => item.name === "yxx")

                _export("yxxAudio", yxxAudio = new (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                  error: Error()
                }), AudioMgr) : AudioMgr)(sourceManageSeletor("yxx")));

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
                }), SubGameRunState) : SubGameRunState).RUN)); // 卸载游戏方法

                var destoryGame = (loaderviweModel, timeId) => {
                  loaderviweModel.unMount();
                  window.clearTimeout(timeId);
                };

                (_crd && removeInstance === void 0 ? (_reportPossibleCrUseOfremoveInstance({
                  error: Error()
                }), removeInstance) : removeInstance)();
                (_crd && socketConnect === void 0 ? (_reportPossibleCrUseOfsocketConnect({
                  error: Error()
                }), socketConnect) : socketConnect)().then(() => {
                  _export("gameBoardViewModel", gameBoardViewModel = new (_crd && GameBoardViewModel === void 0 ? (_reportPossibleCrUseOfGameBoardViewModel({
                    error: Error()
                  }), GameBoardViewModel) : GameBoardViewModel)().mountView(sourceManageSeletor().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                    error: Error()
                  }), PrefabPathDefine) : PrefabPathDefine).GAME_BOARD).source).appendTo(rootNode).connect().initConnect(() => {
                    destoryGame(loaderviweModel, initTimeoutId);
                  }));
                  /**测试界面，可以随时注释 */


                  if ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                    error: Error()
                  }), config) : config).isTest) {
                    new (_crd && TestViewModel === void 0 ? (_reportPossibleCrUseOfTestViewModel({
                      error: Error()
                    }), TestViewModel) : TestViewModel)().mountView(sourceManageSeletor().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                      error: Error()
                    }), PrefabPathDefine) : PrefabPathDefine).TEST_PANEL).source).appendTo(gameBoardViewModel.comp.getGameNode()).connect();
                  }
                }).catch(e => loaderviweModel.comp.setTipContent(e || 'error'));
              }
            }).setProps({
              versionStr: "md5: " + (_crd && subGameList === void 0 ? (_reportPossibleCrUseOfsubGameList({
                error: Error()
              }), subGameList) : subGameList).find(i => i.gameId === (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).gameId).md5
            });
            loaderviweModel.comp.startLoad([bundle], [...(_crd && yxxFileMap === void 0 ? (_reportPossibleCrUseOfyxxFileMap({
              error: Error()
            }), yxxFileMap) : yxxFileMap)]);
          });
        });
      });

      _export("stopGame", stopGame = () => {
        // log("stopGame", initTimeoutId);
        initTimeoutId && window.clearTimeout(initTimeoutId);
        gameBoardViewModel && gameBoardViewModel.unMount();
        yxxAudio && yxxAudio.remove();
        (_crd && removeInstance === void 0 ? (_reportPossibleCrUseOfremoveInstance({
          error: Error()
        }), removeInstance) : removeInstance)();
      });
      /**
       * 按钮单击音效
       */


      _export("playBtnClick", playBtnClick = () => {
        yxxAudio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).BTN_CLICK);
      });
      /**
       * 下注筹码音效
       */


      _export("playChip", playChip = () => {
        yxxAudio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).CHIP);
      });
      /**
       * 失败音效
       */


      _export("playDefeat", playDefeat = () => {
        yxxAudio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).DEFEAT);
      });
      /**
       * 胜利音效
       */


      _export("playWin", playWin = () => {
        yxxAudio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).WIN);
      });
      /**
       * 开盖，关盖音效
       */


      _export("playDong", playDong = () => {
        yxxAudio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).DONG);
      });
      /**
       * 摇骰子
       */


      _export("playSieve", playSieve = () => {
        yxxAudio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).SIEVE);
      });
      /**
       * 金币收集音效
       */


      _export("playGetCoin", playGetCoin = () => {
        yxxAudio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).GET_COIN);
      });
      /**
       * 3秒倒计时
       */


      _export("playTimeout", playTimeout = () => {
        yxxAudio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).TIME_OUT);
      });
      /**
       * 背景音乐
       */


      _export("playMainBg", playMainBg = () => {
        yxxAudio.play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).MAIN_BG, true);
      });

      _export("longStop", longStop = () => {
        yxxAudio.longStop();
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6e99845396fbf577a42602c43ef74fa3fcdb2f15.js.map