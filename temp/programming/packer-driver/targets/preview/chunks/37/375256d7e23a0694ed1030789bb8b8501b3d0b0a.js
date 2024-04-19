System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "cc/env", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Asset, Component, director, game, Label, native, Node, ProgressBar, screen, sys, Hot, HotOptions, App, GameConfig, config, initConfig, lang, NATIVE, BridgeCode, getAppVersionName, getPackageName, hideNativeSplash, installApk, getRedirectUrl, LanguageItemType, ApiUrl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, Common_HotUpdate;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfHot(extras) {
    _reporterNs.report("Hot", "../../utils/HotUpdate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHotOptions(extras) {
    _reporterNs.report("HotOptions", "../../utils/HotUpdate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApp(extras) {
    _reporterNs.report("App", "../../App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "../../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../../hall/config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitConfig(extras) {
    _reporterNs.report("initConfig", "../../hall/config", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBridgeCode(extras) {
    _reporterNs.report("BridgeCode", "../bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetAppVersionName(extras) {
    _reporterNs.report("getAppVersionName", "../bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetPackageName(extras) {
    _reporterNs.report("getPackageName", "../bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhideNativeSplash(extras) {
    _reporterNs.report("hideNativeSplash", "../bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinstallApk(extras) {
    _reporterNs.report("installApk", "../bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetRedirectUrl(extras) {
    _reporterNs.report("getRedirectUrl", "../bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLanguageItemType(extras) {
    _reporterNs.report("LanguageItemType", "../../language/languagePkg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../../hall/apiUrl", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Asset = _cc.Asset;
      Component = _cc.Component;
      director = _cc.director;
      game = _cc.game;
      Label = _cc.Label;
      native = _cc.native;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      screen = _cc.screen;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      Hot = _unresolved_2.default;
      HotOptions = _unresolved_2.HotOptions;
    }, function (_unresolved_3) {
      App = _unresolved_3.default;
    }, function (_unresolved_4) {
      GameConfig = _unresolved_4.GameConfig;
    }, function (_unresolved_5) {
      config = _unresolved_5.config;
      initConfig = _unresolved_5.initConfig;
    }, function (_unresolved_6) {
      lang = _unresolved_6.lang;
    }, function (_ccEnv) {
      NATIVE = _ccEnv.NATIVE;
    }, function (_unresolved_7) {
      BridgeCode = _unresolved_7.BridgeCode;
      getAppVersionName = _unresolved_7.getAppVersionName;
      getPackageName = _unresolved_7.getPackageName;
      hideNativeSplash = _unresolved_7.hideNativeSplash;
      installApk = _unresolved_7.installApk;
      getRedirectUrl = _unresolved_7.getRedirectUrl;
    }, function (_unresolved_8) {
      LanguageItemType = _unresolved_8.LanguageItemType;
    }, function (_unresolved_9) {
      ApiUrl = _unresolved_9.ApiUrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e842dSMZBtE9r0/N1h4wTxv", "Common_HotUpdate", undefined);

      __checkObsolete__(['_decorator', 'Asset', 'assetManager', 'Component', 'director', 'dynamicAtlasManager', 'game', 'Label', 'log', 'macro', 'native', 'Node', 'ProgressBar', 'screen', 'sys', 'view']);

      ({
        ccclass,
        property
      } = _decorator); // macro.CLEANUP_IMAGE_CACHE = false;
      // dynamicAtlasManager.enabled = true;

      _export("Common_HotUpdate", Common_HotUpdate = (_dec = ccclass('Common_HotUpdate'), _dec2 = property(ProgressBar), _dec3 = property({
        displayName: 'project.manifest',
        type: Asset
      }), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Label), _dec(_class = (_class2 = class Common_HotUpdate extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "updateProgress", _descriptor, this);

          _initializerDefineProperty(this, "manifest", _descriptor2, this);

          _initializerDefineProperty(this, "versionLabel", _descriptor3, this);

          _initializerDefineProperty(this, "tipsLabel", _descriptor4, this);

          _initializerDefineProperty(this, "logLabel", _descriptor5, this);

          _initializerDefineProperty(this, "updateConfirm", _descriptor6, this);

          _initializerDefineProperty(this, "updateContent", _descriptor7, this);

          this.versionInfo = {
            local: "",
            server: ""
          };
        }

        start() {
          window['pageDone'] && window['pageDone']();
        }

        onLoad() {
          !NATIVE && sys.isMobile && screen.requestFullScreen(); // console.log('getPackageName ====', getPackageName())

          (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
            error: Error()
          }), lang) : lang).use((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
            error: Error()
          }), GameConfig) : GameConfig).isDev ? (_crd && LanguageItemType === void 0 ? (_reportPossibleCrUseOfLanguageItemType({
            error: Error()
          }), LanguageItemType) : LanguageItemType).ZH : (_crd && LanguageItemType === void 0 ? (_reportPossibleCrUseOfLanguageItemType({
            error: Error()
          }), LanguageItemType) : LanguageItemType).IDA);

          if (NATIVE) {
            (_crd && hideNativeSplash === void 0 ? (_reportPossibleCrUseOfhideNativeSplash({
              error: Error()
            }), hideNativeSplash) : hideNativeSplash)();

            native.bridge.onNative = (arg0, arg1) => {
              if ((_crd && BridgeCode === void 0 ? (_reportPossibleCrUseOfBridgeCode({
                error: Error()
              }), BridgeCode) : BridgeCode).APP_VERSION === arg0) {
                (_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
                  error: Error()
                }), GameConfig) : GameConfig).appLocalVersion = arg1;
                this.initGame();
              }
            };

            (_crd && getAppVersionName === void 0 ? (_reportPossibleCrUseOfgetAppVersionName({
              error: Error()
            }), getAppVersionName) : getAppVersionName)();
          } else {
            this.initGame();
          }
        }

        initGame() {
          (_crd && initConfig === void 0 ? (_reportPossibleCrUseOfinitConfig({
            error: Error()
          }), initConfig) : initConfig)().then(_config => {
            /**修改热更地址 */
            _config.hotUpdateUrl && this.handleManifestFile(_config.hotUpdateUrl);
            this.getPackageInfo().then(content => {
              //有限判断AB面开启状态
              if (content && content.abState) {
                director.loadScene("game");
              } else {
                var isApkUpdate = NATIVE; // 要 isApkUpdate 为false，才表示设置了该值，返回一个undefined也要更新包

                if (NATIVE && content && content.isApkUpdate === false) {
                  isApkUpdate = false;
                }

                if (isApkUpdate && (_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
                  error: Error()
                }), GameConfig) : GameConfig).appLocalVersion < (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).appOnlineVersion) {
                  //弹出更新提示
                  this.initConfirm([(_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                    error: Error()
                  }), lang) : lang).write(k => k.UpdateModule.GameConfig, {
                    version: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                      error: Error()
                    }), config) : config).appOnlineVersion
                  }, {
                    placeStr: "\u8BF7\u66F4\u65B0App\u81F3\u6700\u65B0\u7248(" + (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                      error: Error()
                    }), config) : config).appOnlineVersion + ")"
                  }), (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                    error: Error()
                  }), config) : config).upgradeDesc], () => {
                    sys.openURL((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                      error: Error()
                    }), config) : config).shareUrl + "?pkgId=" + (_crd && getPackageName === void 0 ? (_reportPossibleCrUseOfgetPackageName({
                      error: Error()
                    }), getPackageName) : getPackageName)() + "&version=" + (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                      error: Error()
                    }), config) : config).appOnlineVersion); // window.setTimeout(() => {
                    // 	native.bridge.onNative = (arg0: string, arg1: string) => {
                    // 		if (BridgeCode.DOWNLOAD_APK === arg0) {
                    // 			if ('failed' === arg1) {
                    // 				this.initConfirm([lang.write(k => k.UpdateModule.RestartProgram), config.upgradeDesc], () => {
                    // 					this.downloadApkHandle(`${config.appDumpUrl}?ap=${getPackageName()}&version=${config.appOnlineVersion}`, config.appOnlineVersion)
                    // 				}, () => {
                    // 					game.end()
                    // 				})
                    // 			}
                    // 		}
                    // 	}
                    // 	this.downloadApkHandle(config.appDumpUrl, config.appOnlineVersion)
                    // }, 10)
                  }, () => {
                    if ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                      error: Error()
                    }), config) : config).forceUpgrade) {
                      game.end();
                    } else {
                      this.init();
                    }
                  });
                } else {
                  this.init();
                }
              }
            });
          }).catch(e => {
            if (e === 'config_error') {
              this.initConfirm([(_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.InitGameModule.GameBoardInitAndGotoUrl)], () => {
                game.restart();
                return true;
              }, () => {
                sys.openURL('https://hugewin777d.com/');
              });
            }
          });
        }

        update(deltaTime) {}

        enterGame() {
          this.updateProgress.progress = 1;
          window.setTimeout(() => {
            (_crd && App === void 0 ? (_reportPossibleCrUseOfApp({
              error: Error()
            }), App) : App).Instance().start(); // effect1(this.node).out().then(() => {
            // 	App.Instance().start()
            // })
          }, 500);
        }

        initConfirm(content, okFn, cancle) {
          this.updateConfirm.active = true;
          this.updateConfirm.getChildByName("Label_updata_tips").getComponent(Label).string = content[0];
          content[1] && (this.updateConfirm.getChildByName("Label_updata_content").getComponent(Label).string = content[1]);
          this.updateConfirm.getChildByName("btn_updata_ok").once(Node.EventType.TOUCH_END, () => {
            if (!okFn()) {
              this.updateConfirm.active = false;
            }
          });
          this.updateConfirm.getChildByName("btn_updata_cancel").once(Node.EventType.TOUCH_END, () => {
            this.updateConfirm.active = false;

            if (!cancle) {
              this.updateConfirm.active = false;
            } else if (cancle && !cancle()) {
              this.updateConfirm.active = false;
            } // game.end()

          });
        }

        init() {
          var hotInstance = new (_crd && Hot === void 0 ? (_reportPossibleCrUseOfHot({
            error: Error()
          }), Hot) : Hot)(this.logLabel); // this.loadingLab.string = TextCfg.getTextUi(5012);
          // this._nodes["spr_loading"].getComponent(Label).string = TextCfg.getTextUi(5018);

          var options = new (_crd && HotOptions === void 0 ? (_reportPossibleCrUseOfHotOptions({
            error: Error()
          }), HotOptions) : HotOptions)();

          options.OnVersionInfo = data => {
            var {
              local,
              server
            } = data;
            this.versionInfo = data;
            this.versionLabel.string = (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
              error: Error()
            }), lang) : lang).write(k => k.UpdateModule.VersionLabel, {
              localVersion: local,
              serverVersion: server
            }, {
              placeStr: "\u672C\u5730\u7248\u672C:v" + local + ", \u7EBF\u4E0A\u7248\u672C:v" + server
            });

            if (local > server) {
              var storagePath = (native.fileUtils ? native.fileUtils.getWritablePath() : '/') + 'remote-asset';
              native.fileUtils.removeDirectory(storagePath);
              this.versionLabel.string += ' &Cache clear';
              console.log('Cache clear');
            }
          };

          options.OnUpdateProgress = event => {
            var bytes = event.getDownloadedBytes() + '/' + event.getTotalBytes();
            var files = event.getDownloadedFiles() + '/' + event.getTotalFiles();
            var file = event.getPercentByFile().toFixed(2);
            var byte = event.getPercent().toFixed(2);
            var msg = event.getMessage(); // console.log('[update]: 进度=' + file);

            this.updateProgress.progress = 1 - parseFloat(file);
            this.tipsLabel.string = (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
              error: Error()
            }), lang) : lang).write(k => k.UpdateModule.UpdateProgress, {
              time: (parseFloat(file) * 100).toFixed(0)
            }, {
              placeStr: "\u6B63\u5728\u66F4\u65B0\u4E2D,\u8BF7\u8010\u5FC3\u7B49\u5F85\uFF08" + (parseFloat(file) * 100).toFixed(0) + "%\uFF09..."
            });
            console.log(msg);
          };

          options.OnNeedToUpdate = data => {
            this.initConfirm([(_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
              error: Error()
            }), lang) : lang).write(k => k.UpdateModule.OnNeedToUpdate, {
              version: this.versionInfo.local + '→' + this.versionInfo.server
            }, {
              placeStr: "\u68C0\u6D4B\u5230\u65B0\u7248\u672C\uFF0C\u786E\u8BA4\u81EA\u52A8\u5F00\u59CB\u66F4\u65B0"
            })], () => {
              hotInstance.hotUpdate();
            }, () => {
              // this.enterGame();
              game.end();
            });
          };

          options.OnNoNeedToUpdate = () => {
            this.logLabel.string += (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
              error: Error()
            }), lang) : lang).write(k => k.UpdateModule.DetectCompleted, {}, {
              placeStr: "\u68C0\u6D4B\u5B8C\u6210\uFF0C\u5373\u5C06\u8FDB\u5165\u6E38\u620F>>"
            });
            this.tipsLabel.string = (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
              error: Error()
            }), lang) : lang).write(k => k.UpdateModule.DetectComplete, {}, {
              placeStr: "\u68C0\u6D4B\u5B8C\u6210\uFF0C\u5373\u5C06\u8FDB\u5165\u6E38\u620F"
            }); // 不需要更新，直接进入游戏

            this.enterGame();
          };

          options.OnUpdateSucceed = () => {
            game.restart();
          };

          options.OnUpdateFailed = () => {
            this.tipsLabel.string = (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
              error: Error()
            }), lang) : lang).write(k => k.UpdateModule.UpdateFail, {}, {
              placeStr: "\u66F4\u65B0\u5931\u8D25"
            });
            this.initConfirm([(_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
              error: Error()
            }), lang) : lang).write(k => k.UpdateModule.RestartProgram, {}, {
              placeStr: "\u66F4\u65B0\u5931\u8D25\uFF0C\u662F\u5426\u8981\u91CD\u542F\u7A0B\u5E8F\uFF1F"
            })], () => {
              game.restart();
            }, () => {
              game.end();
            });
          };

          if (sys.isNative) {
            if (!(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).isCheckHotUpdate) {
              this.enterGame();
            } else {
              this.logLabel.string += (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.UpdateModule.ClientCheck, {}, {
                placeStr: "\u5BA2\u6237\u7AEF\u5F00\u59CB\u68C0\u67E5>>"
              });
              this.tipsLabel.string = (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.UpdateModule.CheckUpdatedPkg, {}, {
                placeStr: "\u68C0\u67E5\u66F4\u65B0\u5305..."
              });

              if (this.manifest) {
                hotInstance.init(this.manifest, options);
                hotInstance.checkUpdate();
              }
            }
          } else {
            this.tipsLabel.string = (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
              error: Error()
            }), lang) : lang).write(k => k.UpdateModule.isNative, {}, {
              placeStr: "\u975Enative\u7248\u672C\u4E0D\u68C0\u67E5\u66F4\u65B0\uFF0C\u5373\u5C06\u8FDB\u5165\u6E38\u620F"
            });
            this.enterGame();
          }
        }

        handleManifestFile(newRemotUr) {
          if (!NATIVE) return;
          var storagePath = (native.fileUtils ? native.fileUtils.getWritablePath() : "/") + 'remote-asset'; // this.storagePath = storagePath
          // console.log('updateManifestFile - Storage path for remote asset:' + storagePath)

          this.updateManifestFile(newRemotUr, storagePath + '/project.manifest');
          this.updateManifestFile(newRemotUr, storagePath + '/version.manifest');
        }

        updateManifestFile(newRemotUr, fileName) {
          var fileExist = native.fileUtils.isFileExist(fileName);
          console.log('updateManifestFile - filename:' + fileName, 'fileExist: ', fileExist);

          if (fileExist) {
            var filestring_version = native.fileUtils.getStringFromFile(fileName);
            var obj = JSON.parse(filestring_version);
            console.log('updateManifestFile - handleManifestFile ', obj.packageUrl, ' newRemotUr: ', newRemotUr);
            obj.packageUrl = newRemotUr;
            obj.remoteManifestUrl = newRemotUr + '/project.manifest';
            obj.remoteVersionUrl = newRemotUr + '/version.manifest';
            var afterVersionString = JSON.stringify(obj);
            var res = native.fileUtils.writeStringToFile(afterVersionString, fileName); // this.mainfestObj = obj;

            console.log('updateManifestFile - Modify the results of the file: ', fileName, res);
          }
        }

        downloadApkHandle(appDumpUrl, appOnlineVersion) {
          var filePath = (native.fileUtils ? native.fileUtils.getWritablePath() : "/") + 'apkfiles/HugeWin-' + appOnlineVersion + '.apk';
          var downloader = new native.Downloader(); //下载失败回调

          downloader.onError = (task, errorCode, errorCodeInternal, errorStr) => {
            console.log("downloader --------- " + errorStr);
          }; //进度回调


          downloader.onProgress = (task, bytesReceived, totalBytesReceived, totalBytesExpected) => {
            var progress = totalBytesReceived / totalBytesExpected; //已经下载的字节数 / 需要下载的总字节数

            this.updateProgress.progress = 1 - progress; // this.getProgress(progress);

            var bKReceived = (totalBytesReceived / 1024).toFixed(1);
            var totalReceived = (totalBytesExpected / 1024).toFixed(1); // var strProgress: string = "Download APK:" + bKReceived + "kb / " + totalReceived + "kb";

            var strProgress = "Download Version " + appOnlineVersion + ": " + bKReceived + "kb / " + totalReceived + "kb";
            this.tipsLabel.string = strProgress;
          }; //下载成功回调


          downloader.onSuccess = task => {
            // this.updateLabel.string = "Download success!";
            (_crd && installApk === void 0 ? (_reportPossibleCrUseOfinstallApk({
              error: Error()
            }), installApk) : installApk)(filePath); //下载成功，执行安装apk操作
          };

          var url = (_crd && getRedirectUrl === void 0 ? (_reportPossibleCrUseOfgetRedirectUrl({
            error: Error()
          }), getRedirectUrl) : getRedirectUrl)(appDumpUrl);
          downloader.createDownloadTask(url, filePath); // const apkName = appDumpUrl.substring(appDumpUrl.lastIndexOf("/") + 1);
          // nativeDownloadApk(appDumpUrl, "HugeWin" + appOnlineVersion, "Please be patient while downloading");
          // this.updateProgress.node.active = false;
          // this.tipsLabel.string = `Version ${appOnlineVersion} is being downloading...`;
        }
        /**获得包信息 */


        getPackageInfo() {
          return new Promise((reslove, reject) => {
            var packageName = (_crd && getPackageName === void 0 ? (_reportPossibleCrUseOfgetPackageName({
              error: Error()
            }), getPackageName) : getPackageName)();

            if (!NATIVE) {
              reslove(undefined);
              return;
            } // const tip = () => {
            // 	//弹出更新提示
            // 	this.initConfirm([lang.write(k => k.UpdateModule.GameConfig), config.upgradeDesc], () => {
            // 	}, () => {
            // 		game.end()
            // 	})
            // }


            var url = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).httpBaseUrl + (_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
              error: Error()
            }), ApiUrl) : ApiUrl).CHANNEL_PACKAGE + "?number=" + packageName;
            fetch(url).then(response => {
              if (response.status === 200) {
                response.text().then(text => {
                  var data = JSON.parse(text);

                  if (data.content) {
                    reslove(data.content);
                  } else {
                    reslove(undefined);
                  }
                }).catch(e => {
                  reslove(undefined);
                  console.log("get url " + url + " failed, text catch, error: " + e);
                });
              } else {
                reslove(undefined);
                console.log("get url " + url + " failed, status: " + response.status);
              }
            }).catch(e => {
              reslove(undefined);
              console.log("get url " + url + " failed!!");
            });
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "updateProgress", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "manifest", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "versionLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tipsLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "logLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "updateConfirm", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "updateContent", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=375256d7e23a0694ed1030789bb8b8501b3d0b0a.js.map