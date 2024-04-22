import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { GameConfigDFDC } from '../../config/GameConfigDFDC';
import { BaseLoadResDFDC } from '../../base/BaseLoadResDFDC';
import { BaseEventDFDC } from '../../base/BaseEventDFDC';
import { BaseGameDataMgeDFDC } from '../../base/BaseGameDataMgeDFDC';
import { gameType } from '../../config/DefinedDataTypeDFDC';
import { GamePopBaseDFDC } from './GamePopBaseDFDC';

const { ccclass, property } = _decorator;

@ccclass('GamePopMgeDFDC')
export class GamePopMgeDFDC extends Component {
    /** 初始化游戏界面（付费） */
    @property(Prefab)
    preInitPay: Prefab = null;
    /** 初始化游戏界面（免费） */
    @property(Prefab)
    preInitFree: Prefab = null;
    /**弹窗预制体 */
    @property(Prefab)
    pfbPop: Prefab = null;


    onLoad(): void {
        BaseEventDFDC.Instance.on(GameConfigDFDC.gameInitData.bundleName, this.onMsg.bind(this));

    }
    protected start(): void {

        this.initShow();
    }
    onMsg(name: string, data) {
        switch (name) {
            case GameConfigDFDC.gamePopShow.showRule: {
                this.showRule();
            } break;
            case GameConfigDFDC.gamePopShow.closePop: {
                this.closePop(data);
            } break;
            case GameConfigDFDC.gamePopShow.showBigWin_open: {
                this.showBigWin();
            } break;
            case GameConfigDFDC.gamePopShow.showBigWin_close: {
                this.closePop(GameConfigDFDC.prefabName.gameBigWin);
            } break;
            case GameConfigDFDC.gamePopShow.showCurrFreeNum_open: {
                this.showFreeNum();
            } break;
            case GameConfigDFDC.gamePopShow.showCurrFreeNum_close: {
                this.closePop(GameConfigDFDC.prefabName.freeNumPre);
            } break;
            case GameConfigDFDC.gamePopShow.showFreeWin_open: {
                this.showFreeWin();
            } break;
            case GameConfigDFDC.gamePopShow.showFreeWin_close: {
                this.closePop(GameConfigDFDC.prefabName.freeWinPre);
            } break;
            case GameConfigDFDC.gamePopShow.showJackPotWin_open: {
                this.showJackpotWin();
            } break;
            case GameConfigDFDC.gamePopShow.showJackPotWin_close: {
                this.closePop(GameConfigDFDC.prefabName.jackpotWin);
            } break;
            case GameConfigDFDC.gamePopShow.showSetUp: {
                this.showSetUp();
            } break;
            case GameConfigDFDC.gamePopShow.showShop: {
                window.HALL_GLOBAL.openShop();
            } break;
            case GameConfigDFDC.gamePopShow.showVip: {
                window.HALL_GLOBAL.openVipMain();
            } break;
            case GameConfigDFDC.gamePopShow.showAutoBet_open: {
                this.showAuto();
            } break;
        }
    }
    initShow() {
        this.node.removeAllChildren();
        let gamet = BaseGameDataMgeDFDC.Instance.getNextGameType();
        if (gamet == gameType.gamePay) {
            let nd: Node = instantiate(this.preInitPay);
            this.showPop(nd, "gamePay");
        } else if (gamet == gameType.gameFree) {
            let nd: Node = instantiate(this.preInitFree);
            this.showPop(nd, "gameFree");
        }
    }
    /**显示帮助界面 */
    showRule() {
        let url = GameConfigDFDC.prefabName.gameRule;
        this.showPopPre(url);
    }
    /**显示大奖界面 */
    showBigWin() {
        console.error("显示大奖-----------------------")
        let url = GameConfigDFDC.prefabName.gameBigWin;
        this.showPopPre(url);
    }
    /**显示免费次数 */
    showFreeNum() {
        let url = GameConfigDFDC.prefabName.freeNumPre;
        this.showPopPre(url);
    }
    /**显示免费赢钱 */
    showFreeWin() {
        let url = GameConfigDFDC.prefabName.freeWinPre;
        this.showPopPre(url);
    }
    /**自动弹窗 */
    showAuto() {
        let url = GameConfigDFDC.prefabName.autoShow;
        this.showPopPre(url);
    }
    /**现金jackpot赢钱界面 */
    showJackpotWin() {
        let url = GameConfigDFDC.prefabName.jackpotWin;
        this.showPopPre(url);
    }
    /**显示设置弹窗 */
    showSetUp() {
        let url = GameConfigDFDC.prefabName.gameSet;
        this.showPopPre(url);
    }
    /**显示弹窗 */
    showPopPre(url: string) {
        BaseLoadResDFDC.Instance.loadPrefab(url, null, (err, ass) => {
            if (ass) {
                let nd: Node = instantiate(ass);
                this.showPop(nd, url, null);
            } else {
                console.error("加载预制体失败", url)
            }
        })
    }
    /**显示弹窗 */
    showPop(showNd: Node, name: string, cd?: () => void) {
        let nd = null;
        for (let i = 0; i < this.node.children.length; ++i) {
            let popName = this.node.children[i].getComponent(GamePopBaseDFDC).getPopName();
            if (name == popName) {
                nd = this.node.children[i];
                break;
            }
        }
        if (!nd) {
            nd = instantiate(this.pfbPop);
        }
        nd.parent = this.node;
        nd.getComponent(GamePopBaseDFDC).showPop(showNd, name, cd);
    }
    /**关闭弹窗 */
    closePop(name: string) {
        for (let i = 0; i < this.node.children.length; ++i) {
            let popName = this.node.children[i].getComponent(GamePopBaseDFDC).getPopName();
            if (name == popName) {
                this.node.children[i].getComponent(GamePopBaseDFDC).closePop(() => {
                    this.node.children[i].removeFromParent();
                });

            }
        }
    }

    /** */
}


