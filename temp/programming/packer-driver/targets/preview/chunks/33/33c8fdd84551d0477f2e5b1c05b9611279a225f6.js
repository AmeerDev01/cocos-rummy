System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, assetManager, LoaderPanelViewModel, AudioMgr, config, socketConnect, removeInstance, dominoFileMap, bundlePkgName, PrefabPathDefine, SoundPathDefine, dominoStore, RoomChooseViewModel, TestViewModel, global, lang, addToastAction, setSubGameRunState, SubGameRunState, getStore, _crd, sourceManageMap, bundleDomino, domino_Audio, roomChooseViewModel, sourceManageSeletor, rootNode, initTimeoutId, startUp, stopGame, playBg, playBtnClick, playChooseCard, playCoin, playFapai, playGameBegin, playGuoPai, playSend, playTimeout, playWin, playDead;

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

  function _reportPossibleCrUseOfdominoFileMap(extras) {
    _reporterNs.report("dominoFileMap", "./sourceDefine", _context.meta, extras);
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

  function _reportPossibleCrUseOfdominoStore(extras) {
    _reporterNs.report("dominoStore", "./store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomChooseViewModel(extras) {
    _reporterNs.report("RoomChooseViewModel", "./viewModel/RoomChooseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTestViewModel(extras) {
    _reporterNs.report("TestViewModel", "./viewModel/TestViewModel", _context.meta, extras);
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

  function _reportPossibleCrUseOfSubGameRunState(extras) {
    _reporterNs.report("SubGameRunState", "../../hall/config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../../hall/store", _context.meta, extras);
  }

  _export({
    domino_Audio: void 0,
    roomChooseViewModel: void 0,
    rootNode: void 0
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
      dominoFileMap = _unresolved_6.default;
      bundlePkgName = _unresolved_6.bundlePkgName;
    }, function (_unresolved_7) {
      PrefabPathDefine = _unresolved_7.PrefabPathDefine;
    }, function (_unresolved_8) {
      SoundPathDefine = _unresolved_8.SoundPathDefine;
    }, function (_unresolved_9) {
      dominoStore = _unresolved_9.default;
    }, function (_unresolved_10) {
      RoomChooseViewModel = _unresolved_10.default;
    }, function (_unresolved_11) {
      TestViewModel = _unresolved_11.default;
    }, function (_unresolved_12) {
      global = _unresolved_12.global;
      lang = _unresolved_12.lang;
    }, function (_unresolved_13) {
      addToastAction = _unresolved_13.addToastAction;
      setSubGameRunState = _unresolved_13.setSubGameRunState;
    }, function (_unresolved_14) {
      SubGameRunState = _unresolved_14.SubGameRunState;
    }, function (_unresolved_15) {
      getStore = _unresolved_15.getStore;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5972ao/g1lMC4KhiHGpzkL0", "index", undefined);

      __checkObsolete__(['AssetManager', 'Node', 'Prefab', 'assetManager']);

      sourceManageMap = [];

      _export("bundleDomino", bundleDomino = null);

      _export("sourceManageSeletor", sourceManageSeletor = function sourceManageSeletor(bundleName) {
        if (bundleName === void 0) {
          bundleName = _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName;
        }

        return sourceManageMap.find(i => i.bundle.name === bundleName);
      });

      initTimeoutId = 0;

      _export("startUp", startUp = rootNode => {
        var dispatch = (_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
          error: Error()
        }), getStore) : getStore)().dispatch;
        rootNode = rootNode;
        (_crd && dominoStore === void 0 ? (_reportPossibleCrUseOfdominoStore({
          error: Error()
        }), dominoStore) : dominoStore).configureStore();
        assetManager.loadBundle(_crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
          error: Error()
        }), bundlePkgName) : bundlePkgName, (err, bundle) => {
          _export("bundleDomino", bundleDomino = bundle);

          bundleDomino.load((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
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
                domino_Audio && domino_Audio.remove();

                _export("domino_Audio", domino_Audio = new (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                  error: Error()
                }), AudioMgr) : AudioMgr)(sourceManageSeletor()));

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
                }), SubGameRunState) : SubGameRunState).RUN)); // 默认给10秒进入游戏超时处理，有时候socket连接成功之后，服务器没有发送进入房间 消息，导致卡住

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

                var socketHandle = () => {
                  initTimeoutId && window.clearTimeout(initTimeoutId);
                  loaderviweModel.unMount().then(() => {
                    _export("roomChooseViewModel", roomChooseViewModel = new (_crd && RoomChooseViewModel === void 0 ? (_reportPossibleCrUseOfRoomChooseViewModel({
                      error: Error()
                    }), RoomChooseViewModel) : RoomChooseViewModel)().mountView(sourceManageSeletor().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                      error: Error()
                    }), PrefabPathDefine) : PrefabPathDefine).ROOM_CHOOSE).source).appendTo(rootNode).connect());

                    playBg();

                    if ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                      error: Error()
                    }), config) : config).isTest) {
                      new (_crd && TestViewModel === void 0 ? (_reportPossibleCrUseOfTestViewModel({
                        error: Error()
                      }), TestViewModel) : TestViewModel)().mountView(sourceManageSeletor().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                        error: Error()
                      }), PrefabPathDefine) : PrefabPathDefine).TEST).source).appendTo(rootNode).connect();
                    }
                  });
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
            loaderviweModel.comp.startLoad([bundle], [...(_crd && dominoFileMap === void 0 ? (_reportPossibleCrUseOfdominoFileMap({
              error: Error()
            }), dominoFileMap) : dominoFileMap)]);
          });
        });
      });

      _export("stopGame", stopGame = () => {
        // log("stopGame", initTimeoutId);
        initTimeoutId && window.clearTimeout(initTimeoutId);
        roomChooseViewModel && roomChooseViewModel.unMount();
        domino_Audio && domino_Audio.remove();
        (_crd && removeInstance === void 0 ? (_reportPossibleCrUseOfremoveInstance({
          error: Error()
        }), removeInstance) : removeInstance)();
      });

      _export("playBg", playBg = () => {
        domino_Audio.play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).domino_jl_bk, true);
      });

      _export("playBtnClick", playBtnClick = () => {
        domino_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).btn_click);
      });

      _export("playChooseCard", playChooseCard = () => {
        domino_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).domino_choose_card);
      });

      _export("playCoin", playCoin = () => {
        domino_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).domino_coin);
      });

      _export("playFapai", playFapai = () => {
        domino_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).domino_fapai);
      });

      _export("playGameBegin", playGameBegin = () => {
        domino_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).domino_game_begin);
      });

      _export("playGuoPai", playGuoPai = () => {
        domino_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).domino_guopai);
      });

      _export("playSend", playSend = () => {
        domino_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).domino_send);
      });

      _export("playTimeout", playTimeout = () => {
        domino_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).domino_time_out);
      });

      _export("playWin", playWin = () => {
        domino_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).domino_win);
      });

      _export("playDead", playDead = () => {
        domino_Audio.playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).domino_dead);
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=33c8fdd84551d0477f2e5b1c05b9611279a225f6.js.map