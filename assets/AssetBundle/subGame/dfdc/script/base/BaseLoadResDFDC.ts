import { _decorator, assetManager, AssetManager, AudioClip, Component, Node, Prefab, SpriteFrame } from 'cc';
import { GameConfigDFDC } from '../config/GameConfigDFDC';

const { ccclass, property } = _decorator;
/**子游戏中加载资源类 */
@ccclass('BaseLoadResDFDC')
export class BaseLoadResDFDC extends Component {
    private static _baseLoadResDFDC: BaseLoadResDFDC = null;
    private _gameBundle: AssetManager.Bundle = null;
    public static get Instance(): BaseLoadResDFDC {
        if (!BaseLoadResDFDC._baseLoadResDFDC) {
            BaseLoadResDFDC._baseLoadResDFDC = new BaseLoadResDFDC();
        }
        return BaseLoadResDFDC._baseLoadResDFDC;
    }
    get gameBundle(): AssetManager.Bundle {
        if (!this._gameBundle) {
            this._gameBundle = assetManager.getBundle(GameConfigDFDC.gameInitData.bundleName);
        }
        return this._gameBundle;
    }
    /**加载单个资源 图片*/
    loadImg(url: string, fun: (err, ass) => void) {
        url += "/spriteFrame"
        let res = this.gameBundle.get(url, SpriteFrame);
        if (res) {
            if (fun && !GameConfigDFDC.isExitGame) {
                fun(null, res);
            }
            return;
        }
        this.gameBundle.load(url, SpriteFrame, (err, ass) => {
            if (ass) {

            } else {
                console.error("图片加载失败---", url);
            }
            if (fun) {
                fun(err, ass);
            }
        })
    }
    /**加载预制体 
     * onProgress 加载进度
    */
    loadPrefab(url: string, onProgress: (finished: number, total: number) => void, fun: (err, ass) => void) {
        if (url.indexOf("prefabs/") == -1) {
            url = "prefabs/" + url;
        }
        console.error("加载预制体", url, GameConfigDFDC.isExitGame)
        let res = this.gameBundle.get(url);
        if (res) {
            if (fun && !GameConfigDFDC.isExitGame) {
                fun(null, res);
            }
            return;
        }
        this.gameBundle.load(url, (a, b, c) => {
            if (onProgress && !GameConfigDFDC.isExitGame) {
                onProgress(a, b);
            }
        }, (err, ass) => {
            if (ass) {

            } else {
                console.error("预制体加载失败---", url);
            }
            if (fun && !GameConfigDFDC.isExitGame) {
                fun(err, ass);
            }
        })
    }
    /**加载文件夹资源 */
    loadDir(url: string, fun: (err, ass) => void) {
        let res = this.gameBundle.get(url);
        if (res) {
            if (fun) {
                fun(null, res);
            }
            return
        }
        this.gameBundle.loadDir(url, (err, ass) => {
            if (ass) {

            } else {
                console.error("文件夹资源加载失败---", url);
            }
            if (fun && !GameConfigDFDC.isExitGame) {
                fun(err, ass);
            }
        })
    }
    /**加载 MP3*/
    loadAudio(url: string, fun: (err, ass) => void) {
        let res = this.gameBundle.get(url, AudioClip);
        if (res) {
            if (fun && !GameConfigDFDC.isExitGame) {
                fun(null, res);
            }
            return;
        }
        this.gameBundle.load(url, AudioClip, (err, ass) => {
            if (ass) {

            } else {
                console.error("音频加载失败---", url);
            }
            if (fun && !GameConfigDFDC.isExitGame) {
                fun(err, ass);
            }
        })
    }
    /**退出时释放资源 */
    release() {
        // if (this.gameBundle) {
        //     this.gameBundle.releaseAll();
        // }
        this._gameBundle = null;
        GameConfigDFDC.isExitGame = true;
        BaseLoadResDFDC._baseLoadResDFDC = null;
        console.error("子游戏资源释放---", GameConfigDFDC.gameInitData.bundleName)
    }
}


