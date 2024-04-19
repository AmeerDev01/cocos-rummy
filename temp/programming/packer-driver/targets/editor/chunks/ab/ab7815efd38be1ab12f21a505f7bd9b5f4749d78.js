System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AssetManager, assetManager, resources, EDITOR, config, subGameList, _crd, gameBundle;

  function createBundle(id, data, options, onComplete) {
    let bundle = assetManager.bundles.get(data.name);

    if (!bundle) {
      bundle = data.name === AssetManager.BuiltinBundleName.RESOURCES ? resources : new AssetManager.Bundle();
      data.base = data.base || `${id}/`;
      bundle.init(data);
    } //HACK: Can not import scripts in GameView due to the difference of Scripting System between the GameView and Preview


    if (!EDITOR && (_crd && subGameList === void 0 ? (_reportPossibleCrUseOfsubGameList({
      error: Error()
    }), subGameList) : subGameList).map(i => i.bundleName).indexOf(bundle.name) !== -1) {
      // if (!EDITOR && bundle.name !== bundleName) {
      try {
        _context.import(`virtual:///prerequisite-imports/${bundle.name}`).then(() => {
          onComplete(null, bundle);
        }).catch(() => {
          onComplete(null, bundle);
        });
      } catch (e) {
        onComplete(null, bundle);
      }
    } else {
      onComplete(null, bundle);
    }
  }

  function _reportPossibleCrUseOfHallGameGateType(extras) {
    _reporterNs.report("HallGameGateType", "../hall/config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../hall/config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsubGameList(extras) {
    _reporterNs.report("subGameList", "../hall/config", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AssetManager = _cc.AssetManager;
      assetManager = _cc.assetManager;
      resources = _cc.resources;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      config = _unresolved_2.config;
      subGameList = _unresolved_2.subGameList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "91e21OPXgdNDYe/dlhUXdoh", "BundleSplit", undefined);

      __checkObsolete__(['AssetManager', 'assetManager', 'resources']);

      gameBundle = {};

      _export("default", {
        init: () => {
          assetManager.factory.register("bundle", createBundle);
        },
        getRemoteBundle: (subGameInfo, progressFn) => {
          // return new Promise((reslove, reject) => {
          //   assetManager.loadBundle("http://54.251.66.82:8008/subGame/yxx",
          //     {
          //       version: "9a011",
          //       onFileProgress: (n, t) => {
          //         console.log(`${n}&${t}`)
          //       }
          //     }, (err, _bundle) => {
          //       if (!err) {
          //         reslove(_bundle)
          //       } else {
          //         reject(err)
          //       }
          //     })
          // })
          return new Promise((reslove, reject) => {
            const gemeConfig = (_crd && subGameList === void 0 ? (_reportPossibleCrUseOfsubGameList({
              error: Error()
            }), subGameList) : subGameList).find(i => i.gameId === subGameInfo.gameId);
            const option = {
              onFileProgress: (n, t) => {
                progressFn(n, t);
              }
            };
            const url = gemeConfig.enableRemote ? `${(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameBundleUrl}/subGame/${subGameInfo.bundleName}` : subGameInfo.bundleName;
            gemeConfig.enableRemote && (option["version"] = gemeConfig.md5);

            const loadGame = () => {
              assetManager.loadBundle(url, option, (err1, _bundle) => {
                if (!err1) {
                  gameBundle[subGameInfo.bundleName] = _bundle;
                  reslove(_bundle); // this.node.getChildByName("Label").getComponent(Label).string = "done"
                } else {
                  reject(err1); // this.node.getChildByName("Label").getComponent(Label).string = err1.message
                }
              });
            };

            loadGame(); // if (!DEV && getPackageName() === 'web' && window['installBundle']) {
            //   // (document.querySelector("#loading2") as any).style.display = 'block'
            //   window['installBundle'](subGameInfo.bundleName)
            //   window['onBundleInstallProgress'] = (bundleName: string, progress: number) => {
            //     if (progress === 1) {
            //       // (document.querySelector("#loading2") as any).style.display = 'none'
            //       loadGame()
            //     } else {
            //     }
            //   }
            // } else {
            //   loadGame()
            // }
          });
        },
        releaseBundle: gameId => {
          const gemeConfig = (_crd && subGameList === void 0 ? (_reportPossibleCrUseOfsubGameList({
            error: Error()
          }), subGameList) : subGameList).find(i => i.gameId === gameId);
          gameBundle[gemeConfig.bundleName].releaseAll();
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ab7815efd38be1ab12f21a505f7bd9b5f4749d78.js.map