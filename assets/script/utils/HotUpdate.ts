import { Asset, Label, game, loader, log, native, sys } from "cc";
import { GameConfig } from "../config/GameConfig";
import UseSetOption from "./UseSetOption";

export class HotOptions {
    OnVersionInfo: Function;
    OnNeedToUpdate: Function;
    OnNoNeedToUpdate: Function;
    OnUpdateFailed: Function;
    OnUpdateSucceed: Function;
    OnUpdateProgress: Function;

    check() {
        for (let key in this) {
            if (key !== 'check') {
                if (!this[key]) {
                    console.log(`HotOptions.${key}！set`);
                    return false;
                }
            }
        }
        return true
    }
}

// const native = window.jsb

class Hot {
    constructor(label: Label) {
        this.logLabel = label
    }
    private logLabel: Label
    _assetsMgr: native.AssetsManager = null;
    _options: HotOptions = null;
    _state = Hot.State.None;

    static State = {
        None: 0,
        Check: 1,
        Update: 2,
    }
    checkUpdate() {
        if (!this._assetsMgr) {
            console.log('please initialize')
            this.logLabel.string += "未初始化AssetsManager=>"
            // log.string += 'please initialize'
            return;
        }
        if (this._assetsMgr.getState() === native.AssetsManager.State.UNINITED) {
            console.log('uninitialized')
            this.logLabel.string += `状态错误：${this._assetsMgr.getState()}=>`
            // log.string += 'uninitialized'

            this._assetsMgr.loadLocalManifest("")

            this._assetsMgr.loadLocalManifest("")
            return;
        }
        if (!this._assetsMgr.getLocalManifest().isLoaded()) {
            console.log('Load the local manifest lose ...');
            this.logLabel.string += "manifest未找到=>"
            // log.string += 'Load the local manifest lose ...'
            return;
        }
        this._assetsMgr.setEventCallback(this._hotUpdateCallBack.bind(this));
        this._state = Hot.State.Check;
        this.logLabel.string += "开始checkUpdate=>"
        this._assetsMgr.checkUpdate();

    }

    hotUpdate() {
        if (!this._assetsMgr) {
            console.log('Please initialize first')
            return
        }
        this._assetsMgr.setEventCallback(this._hotUpdateCallBack.bind(this));
        this._state = Hot.State.Update;
        this._assetsMgr.update();
    }

    _hotUpdateCallBack(event: native.EventAssetsManager) {
        let code = event.getEventCode();
        log(`hotUpdate Code: ${code}`);
        this.logLabel.string += `hotUpdate Code: ${code}`
        switch (code) {
            case native.EventAssetsManager.ALREADY_UP_TO_DATE:
                console.log("It is the same as the remote version and does not need to be updated");
                this.logLabel.string += "ALREADY_UP_TO_DATE=>"
                this._options.OnNoNeedToUpdate && this._options.OnNoNeedToUpdate(code)
                break;
            case native.EventAssetsManager.NEW_VERSION_FOUND:
                console.log('New version found, please update');
                this.logLabel.string += "NEW_VERSION_FOUND=>"
                this._options.OnNeedToUpdate && this._options.OnNeedToUpdate(event.getTotalBytes());
                break;
            case native.EventAssetsManager.UPDATE_PROGRESSION:
                this.logLabel.string += "UPDATE_PROGRESSION=>"
                if (this._state === Hot.State.Update) {
                    this._options.OnUpdateProgress && this._options.OnUpdateProgress(event);
                } else {
                    // 检查状态下，不回调更新进度
                }
                break;
            case native.EventAssetsManager.UPDATE_FINISHED:
                console.log('update successfully');
                this.logLabel.string += "UPDATE_FINISHED=>"
                this._onUpdateFinished();
                break;
            case native.EventAssetsManager.ASSET_UPDATED:
                this.logLabel.string += "ASSET_UPDATED=>"
                break;
            case native.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case native.EventAssetsManager.ERROR_PARSE_MANIFEST:
                console.log('Fail to download manifest file, hot update skipped.: ' + event.getMessage())
                this.logLabel.string += "失败=>"
                this._onUpdateFailed(code);
                break;
            case native.EventAssetsManager.ERROR_UPDATING:
                console.log('ERROR_UPDATING Asset update error: ' + event.getAssetId() + ', ' + event.getMessage())
                this.logLabel.string = 'Asset update error: ' + event.getAssetId() + ', ' + event.getMessage();
                break;
            case native.EventAssetsManager.ERROR_DECOMPRESS:
                console.log('ERROR_DECOMPRESS: ' + event.getMessage())
                this.logLabel.string = event.getMessage();
                break;
            case native.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case native.EventAssetsManager.ERROR_PARSE_MANIFEST:
                console.log('Fail to download manifest file, hot update skipped.: ' + event.getMessage())
                this.logLabel.string += "失败=>"
                this._onUpdateFailed(code);
                break;
            case native.EventAssetsManager.ERROR_UPDATING:
                console.log('ERROR_UPDATING Asset update error: ' + event.getAssetId() + ', ' + event.getMessage())
                this.logLabel.string = 'Asset update error: ' + event.getAssetId() + ', ' + event.getMessage();
                break;
            case native.EventAssetsManager.ERROR_DECOMPRESS:
                console.log('ERROR_DECOMPRESS: ' + event.getMessage())
                this.logLabel.string = event.getMessage();
                break;
            default:
                this.logLabel.string += "失败=>"
                this._onUpdateFailed(code);
                break;
        }
    }

    _onUpdateFailed(code) {
        this._assetsMgr.setEventCallback(null)
        this._options.OnUpdateFailed && this._options.OnUpdateFailed(code);
    }

    _onUpdateFinished() {
        this._assetsMgr.setEventCallback(null)
        let searchPaths = native.fileUtils.getSearchPaths();
        // this.log.string += "=>searchPaths2:" +searchPaths
        let newPaths = this._assetsMgr.getLocalManifest().getSearchPaths();
        // this.log.string += "=>newPaths:" + newPaths
        Array.prototype.unshift(searchPaths, newPaths);
        sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
        native.fileUtils.setSearchPaths(searchPaths);
        // this.log.string += "=>setSearchPaths done"
        this._options.OnUpdateSucceed && this._options.OnUpdateSucceed();
    }

    showSearchPath() {
        let searchPaths = native.fileUtils.getSearchPaths();
        for (let i = 0; i < searchPaths.length; i++) {
            log("[" + i + "]: " + searchPaths[i]);
        }
    }

    init(customManifest: native.Manifest, storagePath: string, opt: HotOptions) {
        // log.string += "=>INIT开始"
        // log.string += "=>fileUtils:" + native.fileUtils.getSearchPaths()
        // log.string += "=>INIT失败？"
        if (!sys.isNative) {
            UseSetOption.Instance().setGameOption("hall", { hotUpdateVersion: "vh5" })
            return;
        }
        if (!opt.check()) {
            return;
        }
        this._options = opt;
        if (this._assetsMgr) {
            return;
        }
        let curVerStr = sys.localStorage.getItem('currentVersion');
        if (curVerStr) {
            const previousVersion = parseInt(curVerStr);
            if (previousVersion < GameConfig.HotUpdateVersion) {
                let newPaths = this._assetsMgr.getLocalManifest().getSearchPaths();
                for (let i = 0; i < newPaths.length; ++i) {
                    native.fileUtils.removeDirectory(newPaths[i]);
                }
                sys.localStorage.setItem('currentVersion', String(GameConfig.HotUpdateVersion));
                game.restart();
            }
        } else {
            sys.localStorage.setItem('currentVersion', String(GameConfig.HotUpdateVersion));
        }


        this.showSearchPath();

        this._assetsMgr = new native.AssetsManager('', storagePath, (versionA, versionB) => {
            // const localVersion = sys.localStorage.getItem('currentVersion') || versionA
            console.log("Client Version: " + versionA + ', The Latest Version: ' + versionB);
            UseSetOption.Instance().setGameOption("hall", { hotUpdateVersion: versionA })
            this.logLabel.string += `Client Version: ${versionA}, The Latest Version: ${versionB}`
            // log.string += "Client Version: " + versionA + ', The Latest Version: ' + versionB

            this._options.OnVersionInfo({ local: versionA, server: versionB });
            let vA = versionA.split('.');
            let vB = versionB.split('.');
            for (let i = 0; i < vA.length; ++i) {
                let a = parseInt(vA[i]);
                let b = parseInt(vB[i] || '0');
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


        console.log(`local packageUrl ${customManifest.getPackageUrl()} 
            remoteManifestUrl ${customManifest.getManifestFileUrl()} remoteVersionUrl ${customManifest.getVersionFileUrl()}`);
        this._assetsMgr.loadLocalManifest(customManifest, storagePath);

        this._assetsMgr.setVerifyCallback((assetsFullPath, asset) => {
            let { compressed, md5, path, size } = asset;
            if (compressed) {
                return true;
            } else {
                return true;
            }
        })
        if (sys.os === sys.OS.ANDROID) {

        }
        // let localManifest = this._assetsMgr.getLocalManifest()
        // log.string += "showSearchPath--"
        // log.string += ('=》[HotUpdate] 热更新资源存放路径: ' + storagePath);
        // log.string += ('=》[HotUpdate] 本地manifest路径: ' + url);
        // log.string += ('=》[HotUpdate] local packageUrl: ' + localManifest.getPackageUrl());
        // log.string += ('=》[HotUpdate] project.manifest remote url: ' + localManifest.getManifestFileUrl());
        // log.string += ('=》[HotUpdate] version.manifest remote url: ' + localManifest.getVersionFileUrl());
    }
}



export default Hot;

// let hotInstance = new Hot();
// export default hotInstance;
