System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, assetManager, bundlePkgName, PrefabPathDefine, LoaderPanelViewModel, DragonTigerFileMap, SubGameRunState, config, subGameList, dtConfig, socketConnect, DragonTigerMainViewModel, AudioMgr, SoundPathDefine, UseSetOption, global, lang, setSubGameRunState, _crd, sourceManageMap, bundleCommon, bundleDragonTiger, mainGameViewModel, dragonTiger_Audio, sourceManageSeletor, startUp, playMainBg, playGame, playBtnClick, playChip, playDefeat, playWin, playTimeout, playGetCoin, playTurnCard, playTigerCard, playDragonCard;

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

  function _reportPossibleCrUseOfDragonTigerFileMap(extras) {
    _reporterNs.report("DragonTigerFileMap", "./sourceDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubGameRunState(extras) {
    _reporterNs.report("SubGameRunState", "../../hall/config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../../hall/config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsubGameList(extras) {
    _reporterNs.report("subGameList", "../../hall/config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdtConfig(extras) {
    _reporterNs.report("dtConfig", "./config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsocketConnect(extras) {
    _reporterNs.report("socketConnect", "./socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDragonTigerMainViewModel(extras) {
    _reporterNs.report("DragonTigerMainViewModel", "./ViewModel/DragonTigerMainViewModel", _context.meta, extras);
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

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetSubGameRunState(extras) {
    _reporterNs.report("setSubGameRunState", "../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  _export({
    mainGameViewModel: void 0,
    dragonTiger_Audio: void 0
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
      bundlePkgName = _unresolved_2.bundlePkgName;
    }, function (_unresolved_3) {
      PrefabPathDefine = _unresolved_3.PrefabPathDefine;
    }, function (_unresolved_4) {
      LoaderPanelViewModel = _unresolved_4.default;
    }, function (_unresolved_5) {
      DragonTigerFileMap = _unresolved_5.default;
    }, function (_unresolved_6) {
      SubGameRunState = _unresolved_6.SubGameRunState;
      config = _unresolved_6.config;
      subGameList = _unresolved_6.subGameList;
    }, function (_unresolved_7) {
      dtConfig = _unresolved_7.default;
    }, function (_unresolved_8) {
      socketConnect = _unresolved_8.default;
    }, function (_unresolved_9) {
      DragonTigerMainViewModel = _unresolved_9.default;
    }, function (_unresolved_10) {
      AudioMgr = _unresolved_10.AudioMgr;
    }, function (_unresolved_11) {
      SoundPathDefine = _unresolved_11.SoundPathDefine;
    }, function (_unresolved_12) {
      UseSetOption = _unresolved_12.default;
    }, function (_unresolved_13) {
      global = _unresolved_13.global;
      lang = _unresolved_13.lang;
    }, function (_unresolved_14) {
      setSubGameRunState = _unresolved_14.setSubGameRunState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6f5a2Ni9C1HoLoRVQjhQ30I", "index", undefined);

      __checkObsolete__(['AssetManager', 'Node', 'Prefab', 'assetManager', 'find', 'instantiate']);

      sourceManageMap = [];

      _export("bundleCommon", bundleCommon = null);

      _export("bundleDragonTiger", bundleDragonTiger = null);

      _export("sourceManageSeletor", sourceManageSeletor = (bundleName = 'dragonTiger') => sourceManageMap.find(i => i.bundle.name === bundleName));

      _export("startUp", startUp = rootNode => {
        assetManager.loadBundle("common", (err, commonBundle) => {
          _export("bundleCommon", bundleCommon = commonBundle);

          assetManager.loadBundle(_crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, Prefab, (err, bundle) => {
            _export("bundleDragonTiger", bundleDragonTiger = bundle);

            bundleDragonTiger.load((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).LOADING_PANEL, Prefab, (progress, total) => {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && setSubGameRunState === void 0 ? (_reportPossibleCrUseOfsetSubGameRunState({
                error: Error()
              }), setSubGameRunState) : setSubGameRunState)((_crd && SubGameRunState === void 0 ? (_reportPossibleCrUseOfSubGameRunState({
                error: Error()
              }), SubGameRunState) : SubGameRunState).LOADING));
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).setSubGameGate((_crd && dtConfig === void 0 ? (_reportPossibleCrUseOfdtConfig({
                error: Error()
              }), dtConfig) : dtConfig).gameId, progress / total);
            }, (err, prefab) => {
              if (!(_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).isAllowOpenSubGame((_crd && dtConfig === void 0 ? (_reportPossibleCrUseOfdtConfig({
                error: Error()
              }), dtConfig) : dtConfig).gameId)) return;
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

                  _export("dragonTiger_Audio", dragonTiger_Audio = new (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                    error: Error()
                  }), AudioMgr) : AudioMgr)(sourceManageSeletor("dragonTiger")));

                  (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                    error: Error()
                  }), config) : config).gameConfig.find(item => item.name === "dragonTiger");
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
                    loaderviweModel.unMount().then(() => {
                      _export("mainGameViewModel", mainGameViewModel = new (_crd && DragonTigerMainViewModel === void 0 ? (_reportPossibleCrUseOfDragonTigerMainViewModel({
                        error: Error()
                      }), DragonTigerMainViewModel) : DragonTigerMainViewModel)().mountView(sourceManageSeletor("dragonTiger").getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                        error: Error()
                      }), PrefabPathDefine) : PrefabPathDefine).MAIN_GAME).source).appendTo(rootNode).connect());

                      dragonTiger_Audio.play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                        error: Error()
                      }), SoundPathDefine) : SoundPathDefine).MAIN_BG, (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
                        error: Error()
                      }), UseSetOption) : UseSetOption).Instance().option.music);
                    });
                  }).catch(e => loaderviweModel.comp.setTipContent(e || 'error'));
                }
              }).setProps({
                versionStr: `md5: ${(_crd && subGameList === void 0 ? (_reportPossibleCrUseOfsubGameList({
                  error: Error()
                }), subGameList) : subGameList).find(i => i.gameId === (_crd && dtConfig === void 0 ? (_reportPossibleCrUseOfdtConfig({
                  error: Error()
                }), dtConfig) : dtConfig).gameId).md5}`
              });
              loaderviweModel.comp.startLoad([bundle], [...(_crd && DragonTigerFileMap === void 0 ? (_reportPossibleCrUseOfDragonTigerFileMap({
                error: Error()
              }), DragonTigerFileMap) : DragonTigerFileMap)]);
            });
          });
        });
      });
      /**
       * 背景音乐
       */


      _export("playMainBg", playMainBg = () => {
        dragonTiger_Audio.play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).MAIN_BG, true);
      });
      /**
      * 游戏开始
      */


      _export("playGame", playGame = () => {
        dragonTiger_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).VOICE_CHIP);
      });
      /**
      * 按钮单击音效
      */


      _export("playBtnClick", playBtnClick = () => {
        dragonTiger_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).BTN_CLICK);
      });
      /**
      * 下注筹码音效
      */


      _export("playChip", playChip = () => {
        dragonTiger_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).CHIP);
      });
      /**
      * 失败音效
      */


      _export("playDefeat", playDefeat = () => {
        dragonTiger_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).DEFEAT);
      });
      /**
      * 胜利音效
      */


      _export("playWin", playWin = () => {
        dragonTiger_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).WIN);
      });
      /**
      * 5秒倒计时
      */


      _export("playTimeout", playTimeout = () => {
        dragonTiger_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).TIME_OUT);
      });
      /**
      * 金币收集音效
      */


      _export("playGetCoin", playGetCoin = () => {
        dragonTiger_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).GET_COIN);
      });
      /**
      * 翻牌声
      */


      _export("playTurnCard", playTurnCard = () => {
        dragonTiger_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).TURN_CARD);
      });
      /**
      * 翻虎
      */


      _export("playTigerCard", playTigerCard = () => {
        dragonTiger_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).TIGER_CARD);
      });
      /**
      * 翻龙
      */


      _export("playDragonCard", playDragonCard = () => {
        dragonTiger_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).DRAGON_CARD);
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=60a9b0e28920e1f8e3bf97ac1464cc5d20a27c49.js.map