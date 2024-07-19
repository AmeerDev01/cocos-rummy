import {
  _decorator,
  Asset,
  Component,
  director,
  game,
  Label,
  native,
  Node,
  ProgressBar,
  screen,
  sys
} from "cc";
import Hot, { HotOptions } from "../../utils/HotUpdate";
import App from "../../App";
import { GameConfig } from "../../config/gameConfig";
import { config, initConfig } from "../../config/config";
import { lang } from "../../hall";
import { NATIVE } from "cc/env";
import {
  BridgeCode,
  getAppVersionName,
  getPackageName,
  hideNativeSplash,
  showNativeSplash
} from "../bridge";
import { LanguageItemType } from "../../language/languagePkg";
import { ApiUrl } from "../../hall/apiUrl";
const { ccclass, property } = _decorator;

@ccclass("Common_HotUpdate")
export class Common_HotUpdate extends Component {
  @property(ProgressBar)
  updateProgress: ProgressBar = null;

  @property({ displayName: "project.manifest", type: Asset })
  manifest: Asset = null;
  @property({ displayName: "project.versionManifest", type: Asset })
  versionManifest: Asset = null;

  @property(Label)
  versionLabel: Label = null;

  @property(Label)
  tipsLabel: Label = null;

  @property(Label)
  logLabel: Label = null;

  @property(Node)
  updateConfirm: Node = null;

  @property(Label)
  updateContent: Label = null;
  private versionInfo = {
    local: "",
    server: ""
  };

  private _storagePath: string;
  private localProjectManifest: native.Manifest;

  //!

  start() {
    window["pageDone"]?.();
    console.warn("envKsy", GameConfig.envKey);
  }

  protected onLoad(): void {
    lang.use(LanguageItemType.HI);
    if (NATIVE) {
      this._storagePath =
        (native.fileUtils ? native.fileUtils.getWritablePath() : "/") +
        "remote-asset";
      hideNativeSplash();
      native.bridge.onNative = (arg0: string, arg1: string) => {
        if (BridgeCode.APP_VERSION === arg0) {
          GameConfig.appLocalVersion = arg1;
          this.initGame();
        }
      };
      if (sys.os === sys.OS.OSX) {
        lang.use(LanguageItemType.HI);
        GameConfig.appLocalVersion = "V1.0.1";
        this.initGame();
        return;
      }
      getAppVersionName();
    } else {
      sys.isMobile && screen.requestFullScreen();
      this.initGame();
    }
  }

  shouldUpdate(oldVersion, newVersion) {
    const trnsfer = (version: string) => {
      const arr = version.split(".");
      const frist = +arr[0] * 10 + "";
      const second = (arr[1] === "0" ? "00" : +arr[1] * 10) + "";
      const thrid = (arr[2] === "0" ? "00" : +arr[2] * 10) + "";
      return +(frist + second + thrid);
    };
    const oldtansferVersion = trnsfer(oldVersion);
    const newtansferVersion = trnsfer(newVersion);
    return newtansferVersion > oldtansferVersion;
  }

  initGame() {
    initConfig()
      .then((_config) => {
        this.enterGame();
        return;
        if (sys.os === sys.OS.OSX) {
          this.enterGame();
          return;
        }
        if (sys.os === sys.OS.IOS) {
          let remoteUrl = _config.hotUpdateUrl;
          if (remoteUrl) {
            remoteUrl = remoteUrl.replace("appHotUpdate", "static");
            remoteUrl = `${remoteUrl}/iosHotUpdate/Version1/`;
            this.handleManifestFile(remoteUrl);
          }
          this.init();
          return;
        } else {
          _config.hotUpdateUrl && this.handleManifestFile(_config.hotUpdateUrl);
        }
        this.getPackageInfo().then((content) => {
          if (content && content.abState) {
            director.loadScene("game");
          } else {
            let isApkUpdate = NATIVE;
            if (NATIVE && content && content.isApkUpdate === false) {
              isApkUpdate = false;
            }
            if (
              isApkUpdate &&
              this.shouldUpdate(
                GameConfig.appLocalVersion,
                config.appOnlineVersion
              )
            ) {
              this.initConfirm(
                [
                  lang.write(
                    (k) => k.UpdateModule.GameConfig,
                    { version: config.appOnlineVersion },
                    {
                      placeStr: `请更新App至最新版(${config.appOnlineVersion})`
                    }
                  ),
                  config.upgradeDesc
                ],
                () => {
                  sys.openURL(
                    `${config.shareUrl}?pkgId=${getPackageName()}&version=${
                      config.appOnlineVersion
                    }`
                  );
                },
                () => {
                  if (config.forceUpgrade) {
                    game.end();
                  } else {
                    this.init();
                  }
                }
              );
            } else {
              this.init();
            }
          }
        });
      })
      .catch((e) => {
        if (e === "config_error") {
          this.initConfirm(
            [lang.write((k) => k.InitGameModule.GameBoardInitAndGotoUrl)],
            () => {
              game.restart();
              showNativeSplash();
              return true;
            },
            () => {}
          );
        }
      });
  }

  private enterGame() {
    this.updateProgress.progress = 0;
    window.setTimeout(() => {
      App.Instance().start();
    }, 500);
  }

  private initConfirm(content: string[], okFn: () => any, cancle?: () => any) {
    this.updateConfirm.active = true;
    this.updateConfirm
      .getChildByName("Label_updata_tips")
      .getComponent(Label).string = content[0];
    content[1] &&
      (this.updateConfirm
        .getChildByName("Label_updata_content")
        .getComponent(Label).string = content[1]);
    this.updateConfirm
      .getChildByName("btn_updata_ok")
      .once(Node.EventType.TOUCH_END, () => {
        if (!okFn()) {
          this.updateConfirm.active = false;
        }
      });
    this.updateConfirm
      .getChildByName("btn_updata_cancel")
      .once(Node.EventType.TOUCH_END, () => {
        this.updateConfirm.active = false;
        if (!cancle) {
          this.updateConfirm.active = false;
        } else if (cancle && !cancle()) {
          this.updateConfirm.active = false;
        }
      });
  }

  private init() {
    const hotInstance = new Hot(this.logLabel);
    let options = new HotOptions();
    options.OnVersionInfo = (data) => {
      console.log("OnVersionInfo", JSON.stringify(data || {}));
      let { local, server } = data || {};
      this.versionInfo = data || {};
      this.versionLabel.string = lang.write(
        (k) => k.UpdateModule.VersionLabel,
        { localVersion: local, serverVersion: server },
        { placeStr: `本地版本:v${local}, 线上版本:v${server}` }
      );
    };
    options.OnUpdateProgress = (event: jsb.EventAssetsManager) => {
      let file = event.getPercentByFile().toFixed(2);
      let msg = event.getMessage();

      this.updateProgress.progress = parseFloat(file);
      this.tipsLabel.string = lang.write(
        (k) => k.UpdateModule.UpdateProgress,
        { time: (parseFloat(file) * 100).toFixed(0) },
        {
          placeStr: `正在更新中,请耐心等待（${(parseFloat(file) * 100).toFixed(
            0
          )}%）...`
        }
      );
      console.log(msg);
    };
    options.OnNeedToUpdate = (data) => {
      this.initConfirm(
        [
          lang.write(
            (k) => k.UpdateModule.OnNeedToUpdate,
            { version: this.versionInfo.local + "→" + this.versionInfo.server },
            { placeStr: `检测到新版本，确认自动开始更新` }
          )
        ],
        () => {
          hotInstance.hotUpdate();
        },
        () => {
          // this.enterGame();
          game.end();
        }
      );
    };
    options.OnNoNeedToUpdate = () => {
      this.logLabel.string += lang.write(
        (k) => k.UpdateModule.DetectCompleted,
        {},
        { placeStr: `检测完成，即将进入游戏>>` }
      );
      this.tipsLabel.string = lang.write(
        (k) => k.UpdateModule.DetectComplete,
        {},
        { placeStr: `检测完成，即将进入游戏` }
      );
      // 不需要更新，直接进入游戏
      this.enterGame();
    };
    options.OnUpdateSucceed = () => {
      native.fileUtils.purgeCachedEntries();
      game.restart();
      showNativeSplash();
    };
    options.OnUpdateFailed = (code) => {
      console.log("OnUpdateFailed code: " + code);
      this.tipsLabel.string = lang.write(
        (k) => k.UpdateModule.UpdateFail,
        {},
        { placeStr: `更新失败` }
      );
      this.initConfirm(
        [
          lang.write(
            (k) => k.UpdateModule.RestartProgram,
            {},
            { placeStr: `更新失败，是否要重启程序？` }
          )
        ],
        () => {
          game.restart();
          showNativeSplash();
        },
        () => {
          game.end();
        }
      );
    };
    if (sys.isNative) {
      if (!config.isCheckHotUpdate) {
        this.enterGame();
      } else {
        this.logLabel.string += lang.write(
          (k) => k.UpdateModule.ClientCheck,
          {},
          { placeStr: `客户端开始检查>>` }
        );
        this.tipsLabel.string = lang.write(
          (k) => k.UpdateModule.CheckUpdatedPkg,
          {},
          { placeStr: `检查更新包...` }
        );
        if (this.manifest) {
          hotInstance.init(
            this.localProjectManifest,
            this._storagePath,
            options
          );
          hotInstance.checkUpdate();
        }
      }
    } else {
      this.tipsLabel.string = lang.write(
        (k) => k.UpdateModule.isNative,
        {},
        { placeStr: `非native版本不检查更新，即将进入游戏` }
      );
      this.enterGame();
    }
  }

  private handleManifestFile(newRemotUr: string) {
    if (!NATIVE) return;
    const afterVersionString = this.updateManifestFile(
      newRemotUr,
      this._storagePath + "/project.manifest",
      this.manifest
    );
    this.loadManifestFile(afterVersionString);

    this.updateManifestFile(
      newRemotUr,
      this._storagePath + "/version.manifest",
      this.versionManifest
    );
  }

  private loadManifestFile(data: string) {
    this.localProjectManifest = new native.Manifest(data, this._storagePath);
  }

  private updateManifestFile(
    newRemotUr: string,
    fileName: string,
    manifest: Asset
  ) {
    const fileExist = native.fileUtils.isFileExist(fileName);
    console.log(
      "updateManifestFile - filename:" + fileName,
      "fileExist: ",
      fileExist
    );
    let obj = undefined;
    if (fileExist) {
      let filestring_version = native.fileUtils.getStringFromFile(fileName);
      obj = JSON.parse(filestring_version);
      console.log(
        "updateManifestFile - handleManifestFile ",
        obj.packageUrl,
        " newRemotUr: ",
        newRemotUr
      );
    } else {
      obj = JSON.parse(manifest._nativeAsset);
    }
    obj.packageUrl = newRemotUr;
    obj.remoteManifestUrl = newRemotUr + "/project.manifest";
    obj.remoteVersionUrl = newRemotUr + "/version.manifest";
    let afterVersionString = JSON.stringify(obj);
    const res = native.fileUtils.writeStringToFile(
      afterVersionString,
      fileName
    );
    // this.mainfestObj = obj;
    console.log(
      "updateManifestFile - Modify the results of the file: ",
      fileName,
      res
    );
    return afterVersionString;
  }

  private getPackageInfo() {
    return new Promise<any>((reslove, reject) => {
      const packageName = getPackageName();
      if (!NATIVE) {
        reslove(undefined);
        return;
      }
      const url =
        config.httpBaseUrl + ApiUrl.CHANNEL_PACKAGE + "?number=" + packageName;
      fetch(url)
        .then((response) => {
          if (response.status === 200) {
            response
              .text()
              .then((text) => {
                const data = JSON.parse(text);
                if (data.content) {
                  reslove(data.content);
                } else {
                  reslove(undefined);
                }
              })
              .catch((e) => {
                reslove(undefined);
                console.log(`get url ${url} failed, text catch, error: ${e}`);
              });
          } else {
            reslove(undefined);
            console.log(`get url ${url} failed, status: ${response.status}`);
          }
        })
        .catch((e) => {
          reslove(undefined);
          console.log(`get url ${url} failed!!`);
        });
    });
  }
}
