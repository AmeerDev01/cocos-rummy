System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, hallStore, getStore, Prefab, SpriteFrame, assetManager, BundleSplit, HallPrefabPathDefine, SoundPathDefine, hallFileMap, commonFileMap, LoaderPanelViewModel, BaseBoardViewModel, AudioMgr, Fetcher, config, Internationalization, languagePkg, LanguageItemType, GameConfig, ModalBox, GiftUserViewModel, getPackageName, SKT_MAG_TYPE, sktInstance, TaskSchedulerDefault, _crd, sourceManageMap, rootNodeWrap, baseBoardView, sourceManageSeletor, bundleCommon, bundleHall, hallAudio, commonAudio, fetcher, lang, startUp, playBgMusic, global;

  function _reportPossibleCrUseOfhallStore(extras) {
    _reporterNs.report("hallStore", "./store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "./store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBundleSplit(extras) {
    _reporterNs.report("BundleSplit", "../utils/BundleSplit", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallPrefabPathDefine(extras) {
    _reporterNs.report("HallPrefabPathDefine", "../hall/sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../hall/sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonSoundPathDefine(extras) {
    _reporterNs.report("CommonSoundPathDefine", "../common/sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhallFileMap(extras) {
    _reporterNs.report("hallFileMap", "./sourceDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcommonFileMap(extras) {
    _reporterNs.report("commonFileMap", "../common/sourceDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoaderPanelViewModel(extras) {
    _reporterNs.report("LoaderPanelViewModel", "../common/viewModel/LoaderPanelViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseBoardViewModel(extras) {
    _reporterNs.report("BaseBoardViewModel", "./viewModel/BaseBoardViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "../utils/AudioMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnyAction(extras) {
    _reporterNs.report("AnyAction", "redux", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFetcher(extras) {
    _reporterNs.report("Fetcher", "../utils/Fetcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "./apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "./config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInternationalization(extras) {
    _reporterNs.report("Internationalization", "../language/Internationalization", _context.meta, extras);
  }

  function _reportPossibleCrUseOflanguagePkg(extras) {
    _reporterNs.report("languagePkg", "../language/languagePkg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLanguageItemType(extras) {
    _reporterNs.report("LanguageItemType", "../language/languagePkg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuyType(extras) {
    _reporterNs.report("BuyType", "./components/Hall_ShopPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModalBox(extras) {
    _reporterNs.report("ModalBox", "../common/ModalBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGiftUserViewModel(extras) {
    _reporterNs.report("GiftUserViewModel", "../common/viewModel/GiftUserViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../common/viewModel/GiftUserViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserInfo(extras) {
    _reporterNs.report("UserInfo", "../common/viewModel/GiftUserViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetPackageName(extras) {
    _reporterNs.report("getPackageName", "../common/bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "./socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktInstance(extras) {
    _reporterNs.report("sktInstance", "./socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskSchedulerDefault(extras) {
    _reporterNs.report("TaskSchedulerDefault", "../utils/TaskScheduler", _context.meta, extras);
  }

  _export({
    baseBoardView: void 0,
    hallAudio: void 0,
    commonAudio: void 0,
    fetcher: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Prefab = _cc.Prefab;
      SpriteFrame = _cc.SpriteFrame;
      assetManager = _cc.assetManager;
    }, function (_unresolved_2) {
      hallStore = _unresolved_2.default;
      getStore = _unresolved_2.getStore;
    }, function (_unresolved_3) {
      BundleSplit = _unresolved_3.default;
    }, function (_unresolved_4) {
      HallPrefabPathDefine = _unresolved_4.PrefabPathDefine;
    }, function (_unresolved_5) {
      SoundPathDefine = _unresolved_5.SoundPathDefine;
    }, function (_unresolved_6) {
      hallFileMap = _unresolved_6.default;
    }, function (_unresolved_7) {
      commonFileMap = _unresolved_7.default;
    }, function (_unresolved_8) {
      LoaderPanelViewModel = _unresolved_8.default;
    }, function (_unresolved_9) {
      BaseBoardViewModel = _unresolved_9.default;
    }, function (_unresolved_10) {
      AudioMgr = _unresolved_10.AudioMgr;
    }, function (_unresolved_11) {
      Fetcher = _unresolved_11.default;
    }, function (_unresolved_12) {
      config = _unresolved_12.config;
    }, function (_unresolved_13) {
      Internationalization = _unresolved_13.default;
    }, function (_unresolved_14) {
      languagePkg = _unresolved_14.default;
      LanguageItemType = _unresolved_14.LanguageItemType;
    }, function (_unresolved_15) {
      GameConfig = _unresolved_15.GameConfig;
    }, function (_unresolved_16) {
      ModalBox = _unresolved_16.default;
    }, function (_unresolved_17) {
      GiftUserViewModel = _unresolved_17.default;
    }, function (_unresolved_18) {
      getPackageName = _unresolved_18.getPackageName;
    }, function (_unresolved_19) {
      SKT_MAG_TYPE = _unresolved_19.SKT_MAG_TYPE;
      sktInstance = _unresolved_19.sktInstance;
    }, function (_unresolved_20) {
      TaskSchedulerDefault = _unresolved_20.TaskSchedulerDefault;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c2a0fgaeo5BSIBV0ewb5HS/", "index", undefined);

      __checkObsolete__(['Asset', 'AssetManager', 'AudioClip', 'ImageAsset', 'Node', 'Prefab', 'Sprite', 'SpriteFrame', 'TextAsset', 'Vec3', '__private', 'assetManager', 'director', 'find', 'instantiate']);

      sourceManageMap = [];

      _export("sourceManageSeletor", sourceManageSeletor = function sourceManageSeletor(bundleName) {
        if (bundleName === void 0) {
          bundleName = 'hall';
        }

        return sourceManageMap.find(i => i.bundle.name === bundleName);
      });

      _export("bundleCommon", bundleCommon = null);

      _export("bundleHall", bundleHall = null);

      _export("lang", lang = new (_crd && Internationalization === void 0 ? (_reportPossibleCrUseOfInternationalization({
        error: Error()
      }), Internationalization) : Internationalization)(_crd && languagePkg === void 0 ? (_reportPossibleCrUseOflanguagePkg({
        error: Error()
      }), languagePkg) : languagePkg));

      _export("startUp", startUp = rootNode => {
        rootNodeWrap = rootNode;
        (_crd && hallStore === void 0 ? (_reportPossibleCrUseOfhallStore({
          error: Error()
        }), hallStore) : hallStore).configureStore();
        (_crd && BundleSplit === void 0 ? (_reportPossibleCrUseOfBundleSplit({
          error: Error()
        }), BundleSplit) : BundleSplit).init();
        lang.use((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
          error: Error()
        }), GameConfig) : GameConfig).isDev ? (_crd && LanguageItemType === void 0 ? (_reportPossibleCrUseOfLanguageItemType({
          error: Error()
        }), LanguageItemType) : LanguageItemType).ZH : (_crd && LanguageItemType === void 0 ? (_reportPossibleCrUseOfLanguageItemType({
          error: Error()
        }), LanguageItemType) : LanguageItemType).IDA); // BuryPoint.Instance().init()

        _export("fetcher", fetcher = new (_crd && Fetcher === void 0 ? (_reportPossibleCrUseOfFetcher({
          error: Error()
        }), Fetcher) : Fetcher)((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
          error: Error()
        }), config) : config).httpBaseUrl)); // const LOADER_PANEL = "prefabs/loaderPanel"


        assetManager.loadBundle("common", (err, commonBundle) => {
          _export("bundleCommon", bundleCommon = commonBundle);

          assetManager.loadBundle("hall", (err, hallBundle) => {
            _export("bundleHall", bundleHall = hallBundle); // 首先贴入加载框面板


            hallBundle.load((_crd && HallPrefabPathDefine === void 0 ? (_reportPossibleCrUseOfHallPrefabPathDefine({
              error: Error()
            }), HallPrefabPathDefine) : HallPrefabPathDefine).LOADER_PANEL, Prefab, (err, prefab) => {
              // const loaderPanel = instantiate(prefab)
              // rootNode.addChild(loaderPanel)
              // const loaderviweModel = loaderPanel.getComponent("Common_LoaderPanel") as Common_LoaderPanel
              var loaderviweModel = new (_crd && LoaderPanelViewModel === void 0 ? (_reportPossibleCrUseOfLoaderPanelViewModel({
                error: Error()
              }), LoaderPanelViewModel) : LoaderPanelViewModel)().mountView(prefab).appendTo(rootNode).setProps({
                loadBarType: 2
              }).setEvent({
                onLoadDone: _sourceManageMap => {
                  sourceManageMap = _sourceManageMap;

                  _export("hallAudio", hallAudio = new (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                    error: Error()
                  }), AudioMgr) : AudioMgr)(sourceManageSeletor("hall")));

                  _export("commonAudio", commonAudio = new (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                    error: Error()
                  }), AudioMgr) : AudioMgr)(sourceManageSeletor("common")));

                  loaderviweModel.unMount().then(() => {
                    _export("baseBoardView", baseBoardView = new (_crd && BaseBoardViewModel === void 0 ? (_reportPossibleCrUseOfBaseBoardViewModel({
                      error: Error()
                    }), BaseBoardViewModel) : BaseBoardViewModel)().mountView(sourceManageSeletor("hall").getSourceFile((_crd && HallPrefabPathDefine === void 0 ? (_reportPossibleCrUseOfHallPrefabPathDefine({
                      error: Error()
                    }), HallPrefabPathDefine) : HallPrefabPathDefine).BASE_BOARD)).appendTo(rootNode));

                    baseBoardView.connect(); // playBgMusic(baseBoardView)

                    (_crd && getPackageName === void 0 ? (_reportPossibleCrUseOfgetPackageName({
                      error: Error()
                    }), getPackageName) : getPackageName)() !== 'web' && hallAudio.play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                      error: Error()
                    }), SoundPathDefine) : SoundPathDefine).MAIN_BGM, true);
                  });
                }
              }).setProps({
                versionStr: (_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
                  error: Error()
                }), GameConfig) : GameConfig).appLocalVersion
              }); //开始加载大厅和通用的资源

              loaderviweModel.comp.startLoad([hallBundle, commonBundle], [...(_crd && hallFileMap === void 0 ? (_reportPossibleCrUseOfhallFileMap({
                error: Error()
              }), hallFileMap) : hallFileMap), ...(_crd && commonFileMap === void 0 ? (_reportPossibleCrUseOfcommonFileMap({
                error: Error()
              }), commonFileMap) : commonFileMap)]);
            });
          });
        });
      });

      playBgMusic = baseBoardView => {
        if ((_crd && getPackageName === void 0 ? (_reportPossibleCrUseOfgetPackageName({
          error: Error()
        }), getPackageName) : getPackageName)() === 'web') {
          var fn = () => {
            // let element = document.documentElement
            // if (element.requestFullscreen) {
            //   element.requestFullscreen()
            // } else if (element['msRequestFullscreen']) { 
            //   element['msRequestFullscreen']()
            // } else if (element['mozRequestFullScreen']) {
            //   element['mozRequestFullScreen']()
            // } else if (element['webkitRequestFullscreen']) {
            //   element['webkitRequestFullscreen']()
            // }
            hallAudio.play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).MAIN_BGM, true);
            document.getElementById('GameDiv').removeEventListener('click', fn);
            document.getElementById('GameDiv').removeEventListener('touchstart', fn);
          };

          document.getElementById('GameDiv').addEventListener('click', fn);
          document.getElementById('GameDiv').addEventListener("touchstart", fn);
        } else {
          hallAudio.play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).MAIN_BGM, true);
        }
      };
      /**大厅暴露出来的通用方法 */


      _export("global", global = {
        /**使用大厅的store */
        hallDispatch: action => {
          (_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
            error: Error()
          }), getStore) : getStore)().dispatch(action);
        },

        /**
         * 关闭子游戏
         * @param isPre 是否在初始化完成之前退出，一般指在加载的时候退出
         * @param confirmContent 如果值非空的话，则会弹出确认框
         * @param confirmDoneAfterFn 点击确认后，在实施关闭游戏之后要做的事情
         * @param confirmDoneBeforeFn 点击确认后，在实施关闭游戏之前要做的事情
         */
        closeSubGame: option => {
          var _option = Object.assign({
            isPre: false,
            confirmContent: "",
            confirmDoneAfterFn: () => {},
            confirmDoneBeforeFn: () => {}
          }, option || {}); // (find("Canvas/baseBoard").getComponent('Hall_Baseboard') as Hall_Baseboard).closeSubGame()
          //避免重复弹窗


          if (_option.confirmContent) {
            if (!(_crd && ModalBox === void 0 ? (_reportPossibleCrUseOfModalBox({
              error: Error()
            }), ModalBox) : ModalBox).Instance().isShow && _option.confirmContent !== (_crd && ModalBox === void 0 ? (_reportPossibleCrUseOfModalBox({
              error: Error()
            }), ModalBox) : ModalBox).Instance().contentStr) {
              (_crd && ModalBox === void 0 ? (_reportPossibleCrUseOfModalBox({
                error: Error()
              }), ModalBox) : ModalBox).Instance().show({
                content: _option.confirmContent,
                type: "Prompt"
              }, () => {
                _option.confirmDoneBeforeFn();

                baseBoardView.comp && baseBoardView.comp.closeSubGame(_option.isPre);

                _option.confirmDoneAfterFn();

                return true;
              });
            }
          } else {
            baseBoardView.comp && baseBoardView.comp.closeSubGame(_option.isPre);
          }

          (_crd && TaskSchedulerDefault === void 0 ? (_reportPossibleCrUseOfTaskSchedulerDefault({
            error: Error()
          }), TaskSchedulerDefault) : TaskSchedulerDefault)().stopQueue(false);
          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).MEMBER_INFO, {}, {
            isLoading: false
          });
        },

        /**打开商城 */
        openShop: buyType => {
          baseBoardView && baseBoardView.mainPanelViewModel.openShop(buyType);
        },

        /**打开个人中心 */
        openPersonCenter: index => {
          baseBoardView && baseBoardView.mainPanelViewModel.openPc(index);
        },

        /**打开vip主界面 */
        openVipMain: () => {
          baseBoardView && baseBoardView.mainPanelViewModel.openVipMain();
        },
        openSign: () => {
          baseBoardView && baseBoardView.mainPanelViewModel.openSign();
        },

        /**加载头像 */
        loadHeadSprite: (icon, sprite) => {
          bundleCommon && bundleCommon.load("resource/head/head_circle_" + icon + "/spriteFrame", SpriteFrame, (err, sp) => {
            if (!err) {
              sprite.spriteFrame = sp;
            }
          });
        },

        /**更新子游戏的进度信息 */
        setSubGameGate: (gameId, progress) => {
          baseBoardView && baseBoardView.mainPanelViewModel.comp.setSubGameGate(gameId, progress);
        },

        /**是否允许打开子游戏,一半用于子游戏的第一个首预制体已经加载完毕 */
        isAllowOpenSubGame: gameId => {
          if (baseBoardView) {
            return baseBoardView.isAllowOpenSubGame(gameId);
          }

          return true;
        },
        // 打开
        showGiftWindow: (gameType, userInfo, callback) => {
          if (rootNodeWrap && rootNodeWrap.isValid) {
            (_crd && GiftUserViewModel === void 0 ? (_reportPossibleCrUseOfGiftUserViewModel({
              error: Error()
            }), GiftUserViewModel) : GiftUserViewModel).show(rootNodeWrap, gameType, userInfo, callback);
          }
        },
        flyGift: (fromMemberId, toMemberId, startPos, endPos, value, parentNode) => {
          if (!parentNode) {
            parentNode = rootNodeWrap;
          }

          if (parentNode && parentNode.isValid) {
            (_crd && GiftUserViewModel === void 0 ? (_reportPossibleCrUseOfGiftUserViewModel({
              error: Error()
            }), GiftUserViewModel) : GiftUserViewModel).flyGift(parentNode, fromMemberId, toMemberId, startPos, endPos, value);
          }
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2750069557887f1fe339dd7c5c53689f2006cd90.js.map