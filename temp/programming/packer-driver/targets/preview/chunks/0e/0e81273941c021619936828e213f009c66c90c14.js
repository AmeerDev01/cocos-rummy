System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, game, loader, log, native, sys, GameConfig, UseSetOption, HotOptions, Hot, _crd;

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUseSetOption(extras) {
    _reporterNs.report("UseSetOption", "./UseSetOption", _context.meta, extras);
  }

  _export("HotOptions", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      game = _cc.game;
      loader = _cc.loader;
      log = _cc.log;
      native = _cc.native;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      GameConfig = _unresolved_2.GameConfig;
    }, function (_unresolved_3) {
      UseSetOption = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "74d95EQtYFACax4vT0T0Hiu", "HotUpdate", undefined);

      __checkObsolete__(['Asset', 'Label', 'game', 'loader', 'log', 'native', 'sys']);

      _export("HotOptions", HotOptions = class HotOptions {
        constructor() {
          this.OnVersionInfo = void 0;
          this.OnNeedToUpdate = void 0;
          this.OnNoNeedToUpdate = void 0;
          this.OnUpdateFailed = void 0;
          this.OnUpdateSucceed = void 0;
          this.OnUpdateProgress = void 0;
        }

        check() {
          for (var key in this) {
            if (key !== 'check') {
              if (!this[key]) {
                console.log("HotOptions." + key + "\uFF01set");
                return false;
              }
            }
          }

          return true;
        }

      }); // const native = window.jsb


      Hot = class Hot {
        constructor(label) {
          this.logLabel = void 0;
          this._assetsMgr = null;
          this._options = null;
          this._state = Hot.State.None;
          this.logLabel = label;
        }

        checkUpdate() {
          if (!this._assetsMgr) {
            console.log('please initialize');
            this.logLabel.string += "未初始化AssetsManager=>"; // log.string += 'please initialize'

            return;
          }

          if (this._assetsMgr.getState() === native.AssetsManager.State.UNINITED) {
            console.log('uninitialized');
            this.logLabel.string += "\u72B6\u6001\u9519\u8BEF\uFF1A" + this._assetsMgr.getState() + "=>"; // log.string += 'uninitialized'

            return;
          }

          if (!this._assetsMgr.getLocalManifest().isLoaded()) {
            console.log('Load the local manifest lose ...');
            this.logLabel.string += "manifest未找到=>"; // log.string += 'Load the local manifest lose ...'

            return;
          }

          this._assetsMgr.setEventCallback(this._hotUpdateCallBack.bind(this));

          this._state = Hot.State.Check;
          this.logLabel.string += "开始checkUpdate=>";

          this._assetsMgr.checkUpdate();
        }

        hotUpdate() {
          if (!this._assetsMgr) {
            console.log('Please initialize first');
            return;
          }

          this._assetsMgr.setEventCallback(this._hotUpdateCallBack.bind(this));

          this._state = Hot.State.Update;

          this._assetsMgr.update();
        }

        _hotUpdateCallBack(event) {
          var code = event.getEventCode();
          log("hotUpdate Code: " + code);
          this.logLabel.string += "hotUpdate Code: " + code;

          switch (code) {
            case native.EventAssetsManager.ALREADY_UP_TO_DATE:
              console.log("It is the same as the remote version and does not need to be updated");
              this.logLabel.string += "ALREADY_UP_TO_DATE=>";
              this._options.OnNoNeedToUpdate && this._options.OnNoNeedToUpdate(code);
              break;

            case native.EventAssetsManager.NEW_VERSION_FOUND:
              console.log('New version found, please update');
              this.logLabel.string += "NEW_VERSION_FOUND=>";
              this._options.OnNeedToUpdate && this._options.OnNeedToUpdate(event.getTotalBytes());
              break;

            case native.EventAssetsManager.UPDATE_PROGRESSION:
              this.logLabel.string += "UPDATE_PROGRESSION=>";

              if (this._state === Hot.State.Update) {
                this._options.OnUpdateProgress && this._options.OnUpdateProgress(event);
              } else {// 检查状态下，不回调更新进度
              }

              break;

            case native.EventAssetsManager.UPDATE_FINISHED:
              console.log('update successfully');
              this.logLabel.string += "UPDATE_FINISHED=>";

              this._onUpdateFinished();

              break;

            case native.EventAssetsManager.ASSET_UPDATED:
              this.logLabel.string += "ASSET_UPDATED=>";
              break;

            default:
              this.logLabel.string += "失败=>";

              this._onUpdateFailed(code);

              break;
          }
        }

        _onUpdateFailed(code) {
          this._assetsMgr.setEventCallback(null);

          this._options.OnUpdateFailed && this._options.OnUpdateFailed(code);
        }

        _onUpdateFinished() {
          this._assetsMgr.setEventCallback(null);

          var searchPaths = native.fileUtils.getSearchPaths(); // this.log.string += "=>searchPaths2:" +searchPaths

          var newPaths = this._assetsMgr.getLocalManifest().getSearchPaths(); // this.log.string += "=>newPaths:" + newPaths


          Array.prototype.unshift(searchPaths, newPaths);
          sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
          native.fileUtils.setSearchPaths(searchPaths); // this.log.string += "=>setSearchPaths done"

          this._options.OnUpdateSucceed && this._options.OnUpdateSucceed();
        }

        showSearchPath() {
          var searchPaths = native.fileUtils.getSearchPaths();

          for (var i = 0; i < searchPaths.length; i++) {
            log("[" + i + "]: " + searchPaths[i]);
          }
        }

        init(manifest, opt) {
          // log.string += "=>INIT开始"
          // log.string += "=>fileUtils:" + native.fileUtils.getSearchPaths()
          // log.string += "=>INIT失败？"
          if (!sys.isNative) {
            (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
              error: Error()
            }), UseSetOption) : UseSetOption).Instance().setGameOption("hall", {
              hotUpdateVersion: "vh5"
            });
            return;
          }

          if (!opt.check()) {
            return;
          }

          this._options = opt;

          if (this._assetsMgr) {
            return;
          }

          var curVerStr = sys.localStorage.getItem('currentVersion');

          if (curVerStr) {
            var previousVersion = parseInt(curVerStr);

            if (previousVersion < (_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).HotUpdateVersion) {
              var newPaths = this._assetsMgr.getLocalManifest().getSearchPaths();

              for (var i = 0; i < newPaths.length; ++i) {
                native.fileUtils.removeDirectory(newPaths[i]);
              }

              sys.localStorage.setItem('currentVersion', String((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
                error: Error()
              }), GameConfig) : GameConfig).HotUpdateVersion));
              game.restart();
            }
          } else {
            sys.localStorage.setItem('currentVersion', String((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).HotUpdateVersion));
          }

          this.showSearchPath(); // log.string += "showSearchPath--"

          var url = manifest.nativeUrl;

          if (loader.md5Pipe) {
            url = loader.md5Pipe.transformURL(url);
          }

          var storagePath = (native.fileUtils ? native.fileUtils.getWritablePath() : '/') + 'remote-asset';
          this._assetsMgr = new native.AssetsManager(url, storagePath, (versionA, versionB) => {
            // const localVersion = sys.localStorage.getItem('currentVersion') || versionA
            console.log("Client Version: " + versionA + ', The Latest Version: ' + versionB);
            (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
              error: Error()
            }), UseSetOption) : UseSetOption).Instance().setGameOption("hall", {
              hotUpdateVersion: versionA
            });
            this.logLabel.string += "Client Version: " + versionA + ", The Latest Version: " + versionB; // log.string += "Client Version: " + versionA + ', The Latest Version: ' + versionB

            this._options.OnVersionInfo({
              local: versionA,
              server: versionB
            });

            var vA = versionA.split('.');
            var vB = versionB.split('.');

            for (var _i = 0; _i < vA.length; ++_i) {
              var a = parseInt(vA[_i]);
              var b = parseInt(vB[_i] || '0');

              if (a !== b) {
                return a - b;
              }
            }

            if (vB.length > vA.length) {
              return -1;
            } else {
              return 0;
            }
          });

          this._assetsMgr.setVerifyCallback((assetsFullPath, asset) => {
            var {
              compressed,
              md5,
              path,
              size
            } = asset;

            if (compressed) {
              return true;
            } else {
              return true;
            }
          });

          if (sys.os === sys.OS.ANDROID) {}

          var localManifest = this._assetsMgr.getLocalManifest(); // log.string += "showSearchPath--"
          // log.string += ('=》[HotUpdate] 热更新资源存放路径: ' + storagePath);
          // log.string += ('=》[HotUpdate] 本地manifest路径: ' + url);
          // log.string += ('=》[HotUpdate] local packageUrl: ' + localManifest.getPackageUrl());
          // log.string += ('=》[HotUpdate] project.manifest remote url: ' + localManifest.getManifestFileUrl());
          // log.string += ('=》[HotUpdate] version.manifest remote url: ' + localManifest.getVersionFileUrl());

        }

      };
      Hot.State = {
        None: 0,
        Check: 1,
        Update: 2
      };

      _export("default", Hot); // let hotInstance = new Hot();
      // export default hotInstance;


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0e81273941c021619936828e213f009c66c90c14.js.map