import { _decorator, Component, instantiate, math, Node, Prefab, tween, Tween, UIOpacity } from 'cc';
import { GameConfigZCH } from '../../config/GameConfigZCH';
import { BaseLoadResZCH } from '../../base/BaseLoadResZCH';
import { BaseEventZCH } from '../../base/BaseEventZCH';
import { GamePopBaseZCH } from './GamePopBaseZCH';
const { ccclass, property } = _decorator;

@ccclass('GamePopMgeZCH')
export class GamePopMgeZCH extends Component {

    /**弹窗预制体 */
    @property(Prefab)
    pfbPop: Prefab = null;

    onLoad(): void {
        BaseEventZCH.Instance.on(GameConfigZCH.gameInitData.bundleName, this.onMsg.bind(this));
    }
    protected start(): void {

        this.initShow();
    }
    onMsg(name: string, data) {
        switch (name) {
            case GameConfigZCH.gamePopShow.showRule: {
                this.showRule();
            } break;
            case GameConfigZCH.gamePopShow.closePop: {
                this.closePop(data);
            } break;
            case GameConfigZCH.gamePopShow.showBigWin_open: {
                this.showBigWin();
            } break;
            case GameConfigZCH.gamePopShow.showBigWin_close: {
                this.closePop(data);
            } break;

            case GameConfigZCH.gamePopShow.showSetUp: {
                this.showSet();
            } break;
            case GameConfigZCH.gamePopShow.showShop: {
                window.HALL_GLOBAL.openShop();
            } break;
            case GameConfigZCH.gamePopShow.showVip: {
                window.HALL_GLOBAL.openVipMain();
            } break;
            case GameConfigZCH.gamePopShow.showAutoBet_open: {
                this.showAuto();
            } break;
        }
    }
    initShow() {

    }
    /**显示帮助界面 */
    showRule() {
        let url = GameConfigZCH.prefabName.gameRule;
        this.showPopPre(url);
    }
    /**显示大奖界面 */
    showBigWin() {
        let url = GameConfigZCH.prefabName.gameBigWin;
        this.showPopPre(url);
    }

    /**自动弹窗 */
    showAuto() {
        let url = GameConfigZCH.prefabName.autoShow;
        this.showPopPre(url);
    }
    /**设置界面 */
    showSet() {
        let url = GameConfigZCH.prefabName.gameSet;
        this.showPopPre(url);
    }

    /**显示弹窗 */
    showPopPre(url: string) {
        BaseLoadResZCH.Instance.loadPrefab(url, null, (err, ass) => {
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
            let popName = this.node.children[i].getComponent(GamePopBaseZCH).getPopName();
            if (name == popName) {
                nd = this.node.children[i];
                break;
            }
        }
        if (!nd) {
            nd = instantiate(this.pfbPop);
        }
        nd.parent = this.node;
        nd.getComponent(GamePopBaseZCH).showPop(showNd, name, cd);
    }
    /**关闭弹窗 */
    closePop(name: string) {
        for (let i = 0; i < this.node.children.length; ++i) {
            let popName = this.node.children[i].getComponent(GamePopBaseZCH).getPopName();
            if (name == popName) {
                this.node.children[i].getComponent(GamePopBaseZCH).closePop(() => {
                    this.node.children[i].removeFromParent();
                });

            }
        }
    }


    /** */
}


