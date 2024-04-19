System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, assetManager, ProgressBar, Prefab, instantiate, SpriteFrame, Label, Crash_GameConfig, Crash_WsManager, Crash_DataManager, ProtocolCode, Crash_NetMsgDispatcher, AudioManager, global, lang, initConfig, SubGameRunState, addToastAction, setSubGameRunState, _dec, _class, _crd, ccclass, property, Crash_Main;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfCrash_GameConfig(extras) {
    _reporterNs.report("Crash_GameConfig", "./config/Crash_GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_WsManager(extras) {
    _reporterNs.report("Crash_WsManager", "./net/Crash_WsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_DataManager(extras) {
    _reporterNs.report("Crash_DataManager", "./manager/Crash_DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocolCode(extras) {
    _reporterNs.report("ProtocolCode", "./net/protocol/ProtocolDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_NetMsgDispatcher(extras) {
    _reporterNs.report("Crash_NetMsgDispatcher", "./net/Crash_NetMsgDispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./manager/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitConfig(extras) {
    _reporterNs.report("initConfig", "../../hall/config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubGameRunState(extras) {
    _reporterNs.report("SubGameRunState", "../../hall/config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetSubGameRunState(extras) {
    _reporterNs.report("setSubGameRunState", "../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      assetManager = _cc.assetManager;
      ProgressBar = _cc.ProgressBar;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      SpriteFrame = _cc.SpriteFrame;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Crash_GameConfig = _unresolved_2.Crash_GameConfig;
    }, function (_unresolved_3) {
      Crash_WsManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      Crash_DataManager = _unresolved_4.Crash_DataManager;
    }, function (_unresolved_5) {
      ProtocolCode = _unresolved_5.ProtocolCode;
    }, function (_unresolved_6) {
      Crash_NetMsgDispatcher = _unresolved_6.default;
    }, function (_unresolved_7) {
      AudioManager = _unresolved_7.AudioManager;
    }, function (_unresolved_8) {
      global = _unresolved_8.global;
      lang = _unresolved_8.lang;
    }, function (_unresolved_9) {
      initConfig = _unresolved_9.initConfig;
      SubGameRunState = _unresolved_9.SubGameRunState;
    }, function (_unresolved_10) {
      addToastAction = _unresolved_10.addToastAction;
      setSubGameRunState = _unresolved_10.setSubGameRunState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f8e52luF9lPYJZfjXdB0qHA", "Crash_Main", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'assetManager', 'director', 'ProgressBar', 'AssetManager', 'Prefab', 'instantiate', 'SpriteFrame', 'Texture2D', 'Label']);

      ({
        ccclass,
        property
      } = _decorator); //场景类

      _export("Crash_Main", Crash_Main = (_dec = ccclass('CrashMain'), _dec(_class = class Crash_Main extends Component {
        constructor() {
          super(...arguments);
          // ab包
          this.BUNDLE = "Crash";
          //预加载资源
          this.PRELOAD_DIR = "res/preload";
          // 入口预制体
          this.ENTRY_PREFAB = "loader";
          this.BODY_PREFAB = "main";
          this.ApplicationGlobal = null;
          this.lbVersion = null;
          this.progressBar = null;
        }

        start() {
          this.init();
        }

        init(node) {
          if (node) {
            this.ApplicationGlobal = node;
          }

          this.createConnect(() => {
            this.scheduleOnce(() => {
              assetManager.loadBundle(this.BUNDLE, (_error, _bundle) => {
                if (_bundle) {
                  this.preload(_bundle);
                } else {
                  console.error(_error.stack);
                }
              });
            }, 1);
          });
        }

        preload(_bundle) {
          var _this = this;

          return _asyncToGenerator(function* () {
            try {
              yield (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).getInstance().init(_bundle);
            } catch (e) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: String(e)
              }));
            }

            _bundle.load("res/preload/loader", (progress, total) => {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && setSubGameRunState === void 0 ? (_reportPossibleCrUseOfsetSubGameRunState({
                error: Error()
              }), setSubGameRunState) : setSubGameRunState)((_crd && SubGameRunState === void 0 ? (_reportPossibleCrUseOfSubGameRunState({
                error: Error()
              }), SubGameRunState) : SubGameRunState).LOADING));
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).setSubGameGate((_crd && Crash_GameConfig === void 0 ? (_reportPossibleCrUseOfCrash_GameConfig({
                error: Error()
              }), Crash_GameConfig) : Crash_GameConfig).gameId, progress / total);
            }, (err, assets) => {
              if (err) {
                console.error(err);
                return;
              }

              if (!(_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).isAllowOpenSubGame((_crd && Crash_GameConfig === void 0 ? (_reportPossibleCrUseOfCrash_GameConfig({
                error: Error()
              }), Crash_GameConfig) : Crash_GameConfig).gameId)) return;
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && setSubGameRunState === void 0 ? (_reportPossibleCrUseOfsetSubGameRunState({
                error: Error()
              }), setSubGameRunState) : setSubGameRunState)((_crd && SubGameRunState === void 0 ? (_reportPossibleCrUseOfSubGameRunState({
                error: Error()
              }), SubGameRunState) : SubGameRunState).READY));

              var _prefabPath = _this.PRELOAD_DIR + "/" + _this.ENTRY_PREFAB;

              var _prefab = _bundle.get(_prefabPath, Prefab);

              var _node = instantiate(_prefab);

              _this.lbVersion = _node.getChildByName("Version").getComponent(Label);
              _this.progressBar = _node.getChildByName("loadProgress").getComponent(ProgressBar);

              _node.getChildByName("props_btn_return").on(Node.EventType.TOUCH_END, () => {
                (_crd && Crash_WsManager === void 0 ? (_reportPossibleCrUseOfCrash_WsManager({
                  error: Error()
                }), Crash_WsManager) : Crash_WsManager).getInstance().closeConnect();
                (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                  error: Error()
                }), global) : global).closeSubGame();
              }); // this.lbVersion.string =Crash_GameConfig.Version;


              _this.progressBar.progress = 1;

              _this.ApplicationGlobal.addChild(_node);

              _bundle.loadDir('res/main/head', SpriteFrame, null, (err, SpriteFrames) => {
                if (err) {
                  console.log("theResourceFailedToLoad " + name + "\uFF1A", err);
                }

                (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
                  error: Error()
                }), Crash_DataManager) : Crash_DataManager).getInstance().setHeadSpriteFrame(SpriteFrames);
              }); // 数字弹窗


              _bundle.loadDir("res/main/number", SpriteFrame, (err, assets) => {
                if (err) {
                  console.error(err);
                  return;
                }

                (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
                  error: Error()
                }), Crash_DataManager) : Crash_DataManager).getInstance().setNumberSpriteFrame(assets); // let timer=setInterval(()=>{
                //     console.log(Crash_WsManager.getInstance().wsState)
                //      if(Crash_WsManager.getInstance().wsState === 2 ){
                //          this.loadPreload( this.aaa)
                //          clearInterval(timer)
                //      }
                //  },500)

                setTimeout(() => {
                  _this.loadPreload(_bundle);
                }, 2000);
              });
            });
          })();
        }

        loadPreload(_bundle) {
          _bundle.loadDir(this.PRELOAD_DIR, (_finished, _total) => {
            this.progressBar.progress = 1 - _finished / _total;
            this.lbVersion.string = (_finished / _total * 100).toFixed(0) + '%';
          }, (error, data) => {
            this.lbVersion.string = (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
              error: Error()
            }), lang) : lang).write(k => k.WebSocketModule.GameInit, {}, {
              placeStr: "Game init..."
            });
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).hallDispatch((_crd && setSubGameRunState === void 0 ? (_reportPossibleCrUseOfsetSubGameRunState({
              error: Error()
            }), setSubGameRunState) : setSubGameRunState)((_crd && SubGameRunState === void 0 ? (_reportPossibleCrUseOfSubGameRunState({
              error: Error()
            }), SubGameRunState) : SubGameRunState).RUN));

            var _prefabPath = this.PRELOAD_DIR + "/" + this.BODY_PREFAB;

            var _prefab = _bundle.get(_prefabPath, Prefab);

            var _node = instantiate(_prefab);

            if (this.ApplicationGlobal) {
              this.ApplicationGlobal.addChild(_node);
            } else {
              this.node.addChild(_node);
            }

            this.progressBar.node.parent.destroy();
            this.progressBar.node.active = false;
          });
        }

        createConnect(cb) {
          (_crd && Crash_NetMsgDispatcher === void 0 ? (_reportPossibleCrUseOfCrash_NetMsgDispatcher({
            error: Error()
          }), Crash_NetMsgDispatcher) : Crash_NetMsgDispatcher).getInstance().regCallBack((_crd && ProtocolCode === void 0 ? (_reportPossibleCrUseOfProtocolCode({
            error: Error()
          }), ProtocolCode) : ProtocolCode).RES_USER_INFORMATION, this, this.bettingSituation);
          (_crd && initConfig === void 0 ? (_reportPossibleCrUseOfinitConfig({
            error: Error()
          }), initConfig) : initConfig)().then(response => {
            var item = response.gameConfig.find(item => item.id === 5);

            if ((_crd && Crash_GameConfig === void 0 ? (_reportPossibleCrUseOfCrash_GameConfig({
              error: Error()
            }), Crash_GameConfig) : Crash_GameConfig).isTest) {
              (_crd && Crash_WsManager === void 0 ? (_reportPossibleCrUseOfCrash_WsManager({
                error: Error()
              }), Crash_WsManager) : Crash_WsManager).getInstance().connect((_crd && Crash_GameConfig === void 0 ? (_reportPossibleCrUseOfCrash_GameConfig({
                error: Error()
              }), Crash_GameConfig) : Crash_GameConfig).WsUrl);
            } else {
              (_crd && Crash_WsManager === void 0 ? (_reportPossibleCrUseOfCrash_WsManager({
                error: Error()
              }), Crash_WsManager) : Crash_WsManager).getInstance().connect(item.ws);
            }

            cb();
          });
        }

        bettingSituation(bl, data) {
          if (!bl) {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
              error: Error()
            }), addToastAction) : addToastAction)({
              content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.WebSocketModule.socketConnectAuthFaild, {}, {
                placeStr: "认证失败"
              })
            }));
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().closeMusic(() => {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).closeSubGame({
                confirmContent: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.WebSocketModule.ConfigGameFaild)
              });
            });
          }
        }

        stopCrash_WsManage() {
          (_crd && Crash_WsManager === void 0 ? (_reportPossibleCrUseOfCrash_WsManager({
            error: Error()
          }), Crash_WsManager) : Crash_WsManager).getInstance().closeConnect();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0ecf634ac78fb0a632147f331f71265d7a16464d.js.map