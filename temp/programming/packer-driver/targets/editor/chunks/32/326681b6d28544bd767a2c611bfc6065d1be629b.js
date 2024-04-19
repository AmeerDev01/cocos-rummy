System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, assetManager, instantiate, PrefabDefine, BaseMediator, AudioManager, global, addToastAction, setSubGameRunState, SubGameRunState, config, LoaderMediator, _crd, LoaderViewType;

  function _reportPossibleCrUseOfINotification(extras) {
    _reporterNs.report("INotification", "../../Framework/interfaces/INotification", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabDefine(extras) {
    _reporterNs.report("PrefabDefine", "../Const/PrefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseMediator(extras) {
    _reporterNs.report("BaseMediator", "./BaseMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIlistTypeHander(extras) {
    _reporterNs.report("IlistTypeHander", "../types/IlistTypeHander", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISourceFile(extras) {
    _reporterNs.report("ISourceFile", "../types/ISourceFile", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgxfc_Loader(extras) {
    _reporterNs.report("gxfc_Loader", "../Component/gxfc_Loader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Managr/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetSubGameRunState(extras) {
    _reporterNs.report("setSubGameRunState", "../../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubGameRunState(extras) {
    _reporterNs.report("SubGameRunState", "../../../../hall/config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Prefab = _cc.Prefab;
      assetManager = _cc.assetManager;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      PrefabDefine = _unresolved_2.PrefabDefine;
    }, function (_unresolved_3) {
      BaseMediator = _unresolved_3.default;
    }, function (_unresolved_4) {
      AudioManager = _unresolved_4.AudioManager;
    }, function (_unresolved_5) {
      global = _unresolved_5.global;
    }, function (_unresolved_6) {
      addToastAction = _unresolved_6.addToastAction;
      setSubGameRunState = _unresolved_6.setSubGameRunState;
    }, function (_unresolved_7) {
      SubGameRunState = _unresolved_7.SubGameRunState;
    }, function (_unresolved_8) {
      config = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "81a7au3HPxNY5wEFLQjNyPL", "LoaderMediator", undefined);

      __checkObsolete__(['Prefab', 'Script', 'TypeScript', 'Widget', 'assetManager', 'instantiate', 'AudioClip']);

      _export("LoaderViewType", LoaderViewType = /*#__PURE__*/function (LoaderViewType) {
        LoaderViewType["INIT_LOADER_PANEL"] = "initLoaderPanel";
        return LoaderViewType;
      }({}));

      _export("default", LoaderMediator = class LoaderMediator extends (_crd && BaseMediator === void 0 ? (_reportPossibleCrUseOfBaseMediator({
        error: Error()
      }), BaseMediator) : BaseMediator) {
        constructor(mediatorName = null, viewComponent = null) {
          super(mediatorName, viewComponent);
          this.sourceMap = [{
            key: 'loaderPanel',
            path: (_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
              error: Error()
            }), PrefabDefine) : PrefabDefine).LOADER_PANEL,
            sourceType: Prefab,
            source: null
          }];
          this.listNotificationConst = [{
            name: LoaderViewType.INIT_LOADER_PANEL,

            handler(notification) {
              const panel = this.getSource((_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
                error: Error()
              }), PrefabDefine) : PrefabDefine).LOADER_PANEL, false); // resources.load(panel.path, Prefab, (err, prefab) => {
              //   // 首先贴入加载框面板
              //   const node = instantiate(prefab)
              //   this.viewComponent.addChild(node)
              //   const fileList: ISourceFile[] = notification.getBody().data
              //   const loaderScript = <Loader>node.getComponent("Loader")
              //   let remainNum = fileList.length
              //   //加载面板
              //   fileList.forEach((file, i) => {
              //     resources.load(file.path, Prefab, (err, prefab) => {
              //       file.source = prefab
              //       loaderScript.setLoadingProgress(file.key, fileList.length, --remainNum)
              //       !remainNum && notification.getBody().done()
              //     })
              //   })
              // })

              assetManager.loadBundle("gxfc", async (err, _bundle) => {
                // 首先贴入加载框面板
                try {
                  await (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
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

                _bundle.load(panel.path, Prefab, (progress, total) => {
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
                  const node = instantiate(prefab);
                  this.viewComponent.addChild(node);
                  const fileList = notification.getBody().data;
                  const loaderScript = node.getComponent("gxfc_Loader");
                  let remainNum = fileList.length; //加载面板

                  fileList.forEach((file, i) => {
                    _bundle.load(file.path, Prefab, (err, prefab) => {
                      file.source = prefab;
                      loaderScript.setLoadingProgress(file.key, fileList.length, --remainNum);

                      if (loaderScript.getLoaderState()) {
                        if (!remainNum) {
                          notification.getBody().done();
                          (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                            error: Error()
                          }), global) : global).hallDispatch((_crd && setSubGameRunState === void 0 ? (_reportPossibleCrUseOfsetSubGameRunState({
                            error: Error()
                          }), setSubGameRunState) : setSubGameRunState)((_crd && SubGameRunState === void 0 ? (_reportPossibleCrUseOfSubGameRunState({
                            error: Error()
                          }), SubGameRunState) : SubGameRunState).RUN));
                        }
                      }
                    });
                  });
                });
              });
            }

          }];
        }

        listenerEvent() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=326681b6d28544bd767a2c611bfc6065d1be629b.js.map