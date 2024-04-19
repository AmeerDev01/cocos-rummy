System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, assetManager, fruitStore, bundlePkgName, PrefabPathDefine, LoaderPanelViewModel, fruit777FileMap, SubGameRunState, subGameList, socketConnect, HeaderViewModel, FooterViewModel, GameBoardViewModel, listenerFactoy, AudioMgr, SoundPathDefine, UseSetOption, setActiveAudio, config, global, setSubGameRunState, JackPotViewModel, _crd, sourceManageMap, bundleGodWealth, gameBoardViewModel, footerViewModel, headerViewModel, godWealth_Audio, jackPotViewModel, sourceManageSeletor, NORMAL_MAG_TYPE, msgListener, startUp, playMainBg, playGame1Bg, playGame2Bg, playBtnClick, getCoin, playShellEnd, playLing, playTurn, playMaxCoin, playMinCoin, playFastRoller, playBiu, playSmallGameOver;

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

  function _reportPossibleCrUseOffruit777FileMap(extras) {
    _reporterNs.report("fruit777FileMap", "./sourceDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubGameRunState(extras) {
    _reporterNs.report("SubGameRunState", "../../hall/config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsubGameList(extras) {
    _reporterNs.report("subGameList", "../../hall/config", _context.meta, extras);
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

  function _reportPossibleCrUseOfUseSetOption(extras) {
    _reporterNs.report("UseSetOption", "../../utils/UseSetOption", _context.meta, extras);
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

  function _reportPossibleCrUseOfsetSubGameRunState(extras) {
    _reporterNs.report("setSubGameRunState", "../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJackPotViewModel(extras) {
    _reporterNs.report("JackPotViewModel", "./viewModel/JackPotViewModel", _context.meta, extras);
  }

  _export({
    gameBoardViewModel: void 0,
    footerViewModel: void 0,
    headerViewModel: void 0,
    godWealth_Audio: void 0,
    jackPotViewModel: void 0
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
      fruit777FileMap = _unresolved_6.default;
    }, function (_unresolved_7) {
      SubGameRunState = _unresolved_7.SubGameRunState;
      subGameList = _unresolved_7.subGameList;
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
      SoundPathDefine = _unresolved_14.SoundPathDefine;
    }, function (_unresolved_15) {
      UseSetOption = _unresolved_15.default;
      setActiveAudio = _unresolved_15.setActiveAudio;
    }, function (_unresolved_16) {
      config = _unresolved_16.default;
    }, function (_unresolved_17) {
      global = _unresolved_17.global;
    }, function (_unresolved_18) {
      setSubGameRunState = _unresolved_18.setSubGameRunState;
    }, function (_unresolved_19) {
      JackPotViewModel = _unresolved_19.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4d337eS28ZJ6aHoLUPLNIgC", "index", undefined);

      __checkObsolete__(['AssetManager', 'Node', 'Prefab', 'assetManager', 'sys']);

      sourceManageMap = [];

      _export("bundleGodWealth", bundleGodWealth = null);

      _export("sourceManageSeletor", sourceManageSeletor = function sourceManageSeletor(bundleName) {
        if (bundleName === void 0) {
          bundleName = 'godWealth111';
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

      _export("startUp", startUp = rootNode => {
        (_crd && fruitStore === void 0 ? (_reportPossibleCrUseOffruitStore({
          error: Error()
        }), fruitStore) : fruitStore).configureStore();
        assetManager.loadBundle(_crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
          error: Error()
        }), bundlePkgName) : bundlePkgName, (err, bundle) => {
          _export("bundleGodWealth", bundleGodWealth = bundle);

          bundleGodWealth.load((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
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

                _export("godWealth_Audio", godWealth_Audio = new (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                  error: Error()
                }), AudioMgr) : AudioMgr)(sourceManageSeletor()));

                (_crd && setActiveAudio === void 0 ? (_reportPossibleCrUseOfsetActiveAudio({
                  error: Error()
                }), setActiveAudio) : setActiveAudio)(godWealth_Audio); // hallConfig.gameConfig.find(item => item.name === "godWealth")

                loaderviweModel.comp.setTipContent("game init...");
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
                  loaderviweModel.unMount().then(() => {
                    _export("gameBoardViewModel", gameBoardViewModel = new (_crd && GameBoardViewModel === void 0 ? (_reportPossibleCrUseOfGameBoardViewModel({
                      error: Error()
                    }), GameBoardViewModel) : GameBoardViewModel)().mountView(sourceManageSeletor().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                      error: Error()
                    }), PrefabPathDefine) : PrefabPathDefine).GAME_BOARD).source).appendTo(rootNode).connect());

                    _export("headerViewModel", headerViewModel = new (_crd && HeaderViewModel === void 0 ? (_reportPossibleCrUseOfHeaderViewModel({
                      error: Error()
                    }), HeaderViewModel) : HeaderViewModel)().mountView(sourceManageSeletor().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                      error: Error()
                    }), PrefabPathDefine) : PrefabPathDefine).HEADER_UP).source).appendTo(gameBoardViewModel.comp.getWrapNode()).connect());

                    _export("footerViewModel", footerViewModel = new (_crd && FooterViewModel === void 0 ? (_reportPossibleCrUseOfFooterViewModel({
                      error: Error()
                    }), FooterViewModel) : FooterViewModel)().mountView(sourceManageSeletor().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                      error: Error()
                    }), PrefabPathDefine) : PrefabPathDefine).FOOTER_DOWN).source).appendTo(gameBoardViewModel.comp.getWrapNode()).connect());

                    _export("jackPotViewModel", jackPotViewModel = new (_crd && JackPotViewModel === void 0 ? (_reportPossibleCrUseOfJackPotViewModel({
                      error: Error()
                    }), JackPotViewModel) : JackPotViewModel)().mountView(sourceManageSeletor().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                      error: Error()
                    }), PrefabPathDefine) : PrefabPathDefine).JACK_POT).source).appendTo(gameBoardViewModel.comp.getWrapNode()).connect());

                    godWealth_Audio.play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                      error: Error()
                    }), SoundPathDefine) : SoundPathDefine).MAIN_BG, (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
                      error: Error()
                    }), UseSetOption) : UseSetOption).Instance().option.music);
                  });
                }).catch(e => loaderviweModel.comp.setTipContent(e || 'error'));
              }
            }).setProps({
              versionStr: "md5: " + (_crd && subGameList === void 0 ? (_reportPossibleCrUseOfsubGameList({
                error: Error()
              }), subGameList) : subGameList).find(i => i.gameId === (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).gameId).md5
            });
            loaderviweModel.comp.startLoad([bundle], [...(_crd && fruit777FileMap === void 0 ? (_reportPossibleCrUseOffruit777FileMap({
              error: Error()
            }), fruit777FileMap) : fruit777FileMap)]);
          });
        });
      });
      /**
       * 背景音乐
       */


      _export("playMainBg", playMainBg = () => {
        godWealth_Audio.play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).MAIN_BG, true);
      });
      /**
      * 小游戏1背景
      */


      _export("playGame1Bg", playGame1Bg = () => {
        godWealth_Audio.play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).GAME1_BG);
      });
      /**
      * 小游戏2背景
      */


      _export("playGame2Bg", playGame2Bg = () => {
        godWealth_Audio.play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).GAME2_BG);
      });
      /**点击按钮 */


      _export("playBtnClick", playBtnClick = () => {
        godWealth_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).BTN_CLICK);
      });
      /**金币收集结算 */


      _export("getCoin", getCoin = () => {
        godWealth_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).GET_COIN);
      });
      /**滚轴停止滚动 */


      _export("playShellEnd", playShellEnd = () => {
        godWealth_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).SHELL_END);
      });
      /** 小游戏进入前铃声*/


      _export("playLing", playLing = () => {
        godWealth_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).LING);
      });
      /**规则翻页 */


      _export("playTurn", playTurn = () => {
        godWealth_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).TURN);
      });
      /** 增加下注*/


      _export("playMaxCoin", playMaxCoin = () => {
        godWealth_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).MAX_COIN);
      });
      /** 减小下注*/


      _export("playMinCoin", playMinCoin = () => {
        godWealth_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).MIN_COIN);
      });
      /** 滚轴加速*/


      _export("playFastRoller", playFastRoller = () => {
        godWealth_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).FAST_ROLLER);
      });
      /** 选择自转次数时音效*/


      _export("playBiu", playBiu = () => {
        godWealth_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).BIU);
      });
      /** 小游戏结束*/


      _export("playSmallGameOver", playSmallGameOver = () => {
        godWealth_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).GAME_OVER_BG);
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=58e071ac7e2c8e6cc565f5ac35e7f935c95f647d.js.map