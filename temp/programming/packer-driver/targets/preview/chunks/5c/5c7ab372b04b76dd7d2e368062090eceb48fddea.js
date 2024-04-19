System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, instantiate, Prefab, PrefabDefine, BaseMediator, AudioManager, global, addToastAction, setSubGameRunState, SubGameRunState, phoenix_config, LoaderMediator, _crd, LoaderViewType;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  function _reportPossibleCrUseOfphoenix_Loader(extras) {
    _reporterNs.report("phoenix_Loader", "../Component/phoenix_Loader", _context.meta, extras);
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

  function _reportPossibleCrUseOfphoenix_config(extras) {
    _reporterNs.report("phoenix_config", "../phoenix_config", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
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
      phoenix_config = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8b3eaxZs8tNsbKKidXMDCEc", "LoaderMediator", undefined);

      __checkObsolete__(['assetManager', 'instantiate', 'Prefab']);

      _export("LoaderViewType", LoaderViewType = /*#__PURE__*/function (LoaderViewType) {
        LoaderViewType["INIT_LOADER_PANEL"] = "initLoaderPanel";
        return LoaderViewType;
      }({}));

      _export("default", LoaderMediator = class LoaderMediator extends (_crd && BaseMediator === void 0 ? (_reportPossibleCrUseOfBaseMediator({
        error: Error()
      }), BaseMediator) : BaseMediator) {
        constructor(mediatorName, viewComponent) {
          if (mediatorName === void 0) {
            mediatorName = null;
          }

          if (viewComponent === void 0) {
            viewComponent = null;
          }

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
              var _this = this;

              var panel = this.getSource((_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
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

              assetManager.loadBundle("phoenix", /*#__PURE__*/_asyncToGenerator(function* (err, _bundle) {
                // 首先贴入加载框面板
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
                  }), global) : global).setSubGameGate((_crd && phoenix_config === void 0 ? (_reportPossibleCrUseOfphoenix_config({
                    error: Error()
                  }), phoenix_config) : phoenix_config).gameId, progress / total);
                }, (err, prefab) => {
                  if (!(_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                    error: Error()
                  }), global) : global).isAllowOpenSubGame((_crd && phoenix_config === void 0 ? (_reportPossibleCrUseOfphoenix_config({
                    error: Error()
                  }), phoenix_config) : phoenix_config).gameId)) return;
                  (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                    error: Error()
                  }), global) : global).hallDispatch((_crd && setSubGameRunState === void 0 ? (_reportPossibleCrUseOfsetSubGameRunState({
                    error: Error()
                  }), setSubGameRunState) : setSubGameRunState)((_crd && SubGameRunState === void 0 ? (_reportPossibleCrUseOfSubGameRunState({
                    error: Error()
                  }), SubGameRunState) : SubGameRunState).READY));
                  var node = instantiate(prefab);

                  _this.viewComponent.addChild(node);

                  var fileList = notification.getBody().data;
                  var loaderScript = node.getComponent("phoenix_Loader");
                  var remainNum = fileList.length; //加载面板

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
              }));
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
//# sourceMappingURL=5c7ab372b04b76dd7d2e368062090eceb48fddea.js.map