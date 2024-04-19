System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, assetManager, bundlePkgName, PrefabPathDefine, LoaderPanelViewModel, BandarQiuQiuFileMap, SubGameRunState, config, subGameList, dtConfig, socketConnect, GameBoardViewModel, AudioMgr, SoundPathDefine, UseSetOption, global, setSubGameRunState, _crd, sourceManageMap, bundleCommon, bundleBanDarQiuQiu, mainGameViewModel, bandarQiuQiu_Audio, sourceManageSelector, startUp, playMainBg, playGame, playBtnClick, playChip, playTimeout, playGetCoin, playTurnCard, playDealCard, stopBet, playMyWin, playMyLose, playChooseChip, playPK;

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

  function _reportPossibleCrUseOfBandarQiuQiuFileMap(extras) {
    _reporterNs.report("BandarQiuQiuFileMap", "./sourceDefine", _context.meta, extras);
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

  function _reportPossibleCrUseOfGameBoardViewModel(extras) {
    _reporterNs.report("GameBoardViewModel", "./viewModel/BandarQiuQiuGameBoardViewModel", _context.meta, extras);
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

  function _reportPossibleCrUseOfsetSubGameRunState(extras) {
    _reporterNs.report("setSubGameRunState", "../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  _export({
    mainGameViewModel: void 0,
    bandarQiuQiu_Audio: void 0
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
      BandarQiuQiuFileMap = _unresolved_5.default;
    }, function (_unresolved_6) {
      SubGameRunState = _unresolved_6.SubGameRunState;
      config = _unresolved_6.config;
      subGameList = _unresolved_6.subGameList;
    }, function (_unresolved_7) {
      dtConfig = _unresolved_7.default;
    }, function (_unresolved_8) {
      socketConnect = _unresolved_8.default;
    }, function (_unresolved_9) {
      GameBoardViewModel = _unresolved_9.default;
    }, function (_unresolved_10) {
      AudioMgr = _unresolved_10.AudioMgr;
    }, function (_unresolved_11) {
      SoundPathDefine = _unresolved_11.SoundPathDefine;
    }, function (_unresolved_12) {
      UseSetOption = _unresolved_12.default;
    }, function (_unresolved_13) {
      global = _unresolved_13.global;
    }, function (_unresolved_14) {
      setSubGameRunState = _unresolved_14.setSubGameRunState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "df1d9wiH3RA4oMjhXamUQQU", "index", undefined);

      __checkObsolete__(['AssetManager', 'Node', 'Prefab', 'assetManager', 'find', 'instantiate', 'log']);

      sourceManageMap = [];

      _export("bundleCommon", bundleCommon = null);

      _export("bundleBanDarQiuQiu", bundleBanDarQiuQiu = null);

      _export("sourceManageSelector", sourceManageSelector = (bundleName = 'bandar-qiuqiu') => sourceManageMap.find(i => i.bundle.name === bundleName));

      _export("startUp", startUp = rootNode => {
        assetManager.loadBundle("common", (err, commonBundle) => {
          _export("bundleCommon", bundleCommon = commonBundle);

          assetManager.loadBundle(_crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, Prefab, (err, bundle) => {
            _export("bundleBanDarQiuQiu", bundleBanDarQiuQiu = bundle);

            bundleBanDarQiuQiu.load((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
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
              const loaderViewModel = new (_crd && LoaderPanelViewModel === void 0 ? (_reportPossibleCrUseOfLoaderPanelViewModel({
                error: Error()
              }), LoaderPanelViewModel) : LoaderPanelViewModel)().mountView(prefab).appendTo(rootNode).setProps({
                loadBarType: 1
              }).setEvent({
                onLoadDone: _sourceManageMap => {
                  sourceManageMap = _sourceManageMap;

                  _export("bandarQiuQiu_Audio", bandarQiuQiu_Audio = new (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                    error: Error()
                  }), AudioMgr) : AudioMgr)(sourceManageSelector("bandar-qiuqiu")));

                  (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                    error: Error()
                  }), config) : config).gameConfig.find(item => item.name === "bandar-qiuqiu");
                  loaderViewModel.comp.setTipContent("Game init...");
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
                    loaderViewModel.unMount().then(() => {
                      _export("mainGameViewModel", mainGameViewModel = new (_crd && GameBoardViewModel === void 0 ? (_reportPossibleCrUseOfGameBoardViewModel({
                        error: Error()
                      }), GameBoardViewModel) : GameBoardViewModel)().mountView(sourceManageSelector("bandar-qiuqiu").getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                        error: Error()
                      }), PrefabPathDefine) : PrefabPathDefine).MAIN_GAME).source).appendTo(rootNode).connect());

                      bandarQiuQiu_Audio.play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                        error: Error()
                      }), SoundPathDefine) : SoundPathDefine).MAIN_BG, (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
                        error: Error()
                      }), UseSetOption) : UseSetOption).Instance().option.music);
                    });
                  }).catch(e => loaderViewModel.comp.setTipContent(e || 'error'));
                }
              }).setProps({
                versionStr: `md5: ${(_crd && subGameList === void 0 ? (_reportPossibleCrUseOfsubGameList({
                  error: Error()
                }), subGameList) : subGameList).find(i => i.gameId === (_crd && dtConfig === void 0 ? (_reportPossibleCrUseOfdtConfig({
                  error: Error()
                }), dtConfig) : dtConfig).gameId).md5}`
              });
              loaderViewModel.comp.startLoad([bundle], [...(_crd && BandarQiuQiuFileMap === void 0 ? (_reportPossibleCrUseOfBandarQiuQiuFileMap({
                error: Error()
              }), BandarQiuQiuFileMap) : BandarQiuQiuFileMap)]);
            });
          });
        });
      });
      /**
       * 背景音乐
       */


      _export("playMainBg", playMainBg = () => {
        bandarQiuQiu_Audio.play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).MAIN_BG, true);
      });
      /**
      * 游戏开始 停止
      */


      _export("playGame", playGame = () => {
        bandarQiuQiu_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).START_STOP_BET);
      });
      /**
      * 按钮单击音效
      */


      _export("playBtnClick", playBtnClick = () => {
        bandarQiuQiu_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).BTN_CLICK);
      });
      /**
      * 下注飞筹码音效
      */


      _export("playChip", playChip = () => {
        bandarQiuQiu_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).FLY_CHIP);
      });
      /**
      * 3秒倒计时
      */


      _export("playTimeout", playTimeout = () => {
        bandarQiuQiu_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).TIME_OUT);
      });
      /**
      * 金币收集音效
      */


      _export("playGetCoin", playGetCoin = () => {
        bandarQiuQiu_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).GET_COIN);
      });
      /**
      * 翻牌声
      */


      _export("playTurnCard", playTurnCard = () => {
        bandarQiuQiu_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).TURN_CARD);
      });
      /**
      * 发牌声
      */


      _export("playDealCard", playDealCard = () => {
        bandarQiuQiu_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).SEND_CARD);
      });
      /**
      * 停止下注 打铃
      */


      _export("stopBet", stopBet = () => {
        bandarQiuQiu_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).STOP_BET);
      });
      /**
       * 玩家赢
       */


      _export("playMyWin", playMyWin = () => {
        bandarQiuQiu_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).MY_WIN);
      });
      /**
       * 玩家输
       */


      _export("playMyLose", playMyLose = () => {
        bandarQiuQiu_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).MY_LOSE);
      });
      /**
       * 选择筹码
       */


      _export("playChooseChip", playChooseChip = () => {
        bandarQiuQiu_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).CHOOSE_CHIP);
      });
      /**
       * PK声
       */


      _export("playPK", playPK = () => {
        bandarQiuQiu_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).CARD_PK);
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a221516d164d6270b0b7058d3ea2de263757a324.js.map