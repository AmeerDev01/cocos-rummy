import { _decorator, Component, math, Node, sp, tween, Tween, UIOpacity, Widget } from 'cc';
import { BaseGameDataMgeDFDC } from '../../base/BaseGameDataMgeDFDC';
import { JackpotItemDFDC } from './JackpotItemDFDC';
import { BaseEventDFDC } from '../../base/BaseEventDFDC';
import { GameConfigDFDC } from '../../config/GameConfigDFDC';
import { jackpotType } from '../../config/DefinedDataTypeDFDC';
import { BaseSocketDFDC } from '../../base/BaseSocketDFDC';
const { ccclass, property } = _decorator;

@ccclass('JackpotGameDFDC')
export class JackpotGameDFDC extends Component {
    /**左边动画节点 */
    @property(Node)
    ndTw1: Node = null;
    /**右边滑动节点 */
    @property(Node)
    ndTw2: Node = null;
    /**背景节点 */
    @property(Node)
    ndBg: Node = null;
    /**人物动画容器 */
    @property(Node)
    ndGroup: Node = null;
    /**开始动画 */
    @property(sp.Skeleton)
    spStart: sp.Skeleton = null;
    /**飞金币动画 */
    @property(sp.Skeleton)
    spGold: sp.Skeleton = null;
    /**点击遮罩 */
    @property(Node)
    ndMask1: Node = null;

    /**遮罩节点 */
    @property(Node)
    ndMask: Node = null;
    @property(Node)
    ndMaskGroup: Node = null;
    /**点击了的 jacpot */
    jackList: { x: number, y: number, icon: jackpotType }[] = [];
    /**当前动画名称 */
    currSpineName: string = "";
    /**是否点击翻牌完成 */
    isEnd: boolean = false;
    currType: number = 0;
    protected onLoad(): void {
        this.spGold.setCompleteListener(() => {
            tween(this).delay(0.2).call(() => {
                this.initShow();
            }).start();

        })
        this.spStart.setCompleteListener(() => {
            // this.spStart.node.active = false;
        })
        BaseEventDFDC.Instance.on(GameConfigDFDC.gameInitData.bundleName, this.onEventMsg.bind(this));
    }
    onEventMsg(name: string, data) {
        if (!this || !this.node || !this.node.active) {
            return;
        }
        switch (name) {
            case GameConfigDFDC.gameEventName.touchJackpo: {
                this.onTouchJack(data);
            } break;
            case GameConfigDFDC.wsReceive.bet: {
                Tween.stopAllByTarget(this);
                tween(this).delay(1).call(() => {
                    BaseEventDFDC.Instance.emit(GameConfigDFDC.gamePopShow.showJackPotWin_open);
                }).delay(1).call(() => {
                    this.twShowOut();
                }).start();
            } break;
        }
    }


    /**初始化*/
    initShow() {
        this.spStart.node.active = false;
        this.ndMask1.active = false;
        Tween.stopAllByTarget(this);
        this.ndMask.active = false;
        this.spGold.node.active = false;
        this.ndGroup.active = true;
        this.isEnd = false;
        this.ndMaskGroup.removeAllChildren();
        this.jackList = [];
        let list: jackpotType[][] = BaseGameDataMgeDFDC.Instance.getJackpotOpenData();
        for (let i = 0; i < this.ndGroup.children.length; ++i) {
            let nd = this.ndGroup.children[i];
            nd.getComponent(JackpotItemDFDC).initShow();
            let jpt = list[Math.floor(i / 4)][i % 4];
            nd.getComponent(JackpotItemDFDC).setShow({ x: i % 4, y: Math.floor(i / 4), icon: jpt });
        }
    }
    onTouchJack(data) {
        this.jackList.push(data);
        let num = 0;
        let win = BaseGameDataMgeDFDC.Instance.getJackpotType();
        for (let i = 0; i < this.jackList.length; ++i) {
            if (this.jackList[i].icon == win) {
                num++;
            }
        }
        if (num >= 3) {
            for (let i = 0; i < this.ndGroup.children.length; ++i) {
                let nd = this.ndGroup.children[i];
                nd.getComponent(JackpotItemDFDC).setTouchEnd();
            }
            this.ndMask.active = true;
            this.ndMask1.active = true;
            if (this.isEnd) {
                return;
            }
            this.isEnd = true;
            tween(this).delay(0.5).call(() => {
                this.openPrize();
            }).start();
        }
    }
    /**启动 jackpot 游戏*/
    showStartJackpot(isInit: boolean) {
        this.initShow();
        if (isInit) {
            this.showType(2);
        } else {
            this.showType(0);
        }

    }
    touch1() {
        this.showType(0);
    }
    touch2() {
        this.twShowOut();
    }
    /**开奖 */
    openPrize() {
        this.ndMask.active = true;
        this.ndMaskGroup.removeAllChildren();
        let win = BaseGameDataMgeDFDC.Instance.getJackpotType();
        for (let i = 0; i < this.jackList.length; ++i) {
            if (this.jackList[i].icon == win) {
                let index = this.jackList[i].y * 4 + this.jackList[i].x;
                let nd = this.ndGroup.children[index];
                let data: { nd: Node, wpos: math.Vec3 } = nd.getComponent(JackpotItemDFDC).getSpineNode();
                data.nd.parent = this.ndMaskGroup;
                data.nd.active = true;
                data.nd.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
                data.nd.setWorldPosition(data.wpos);
            }
        }
        Tween.stopAllByTarget(this);
        this.sendData();

    }
    sendData() {
        let bet = BaseGameDataMgeDFDC.Instance.getBetIndex();

        BaseSocketDFDC.Instance.sendMsg({ positionId: bet + 1 })
    }
    /**显示 状态0不显示的初始状态1播放动画2动画播放完成 */
    showType(type: number) {
        this.currType = type;
        if (type == 0) {
            this.ndBg.active = false;
            this.ndGroup.active = false;
            this.spStart.node.active = true;
            this.spGold.node.active = false;
            this.spStart.setAnimation(0, "jp1", false);
            tween(this).delay(0.6).call(() => {
                this.spGold.node.active = true;
                this.spGold.setAnimation(0, "jp2", false);
                this.twShowIn(0);
            }).delay(1.6).call(() => {
                this.spStart.node.active = false;
            }).start();
        } else {
            this.ndBg.active = true;
            this.ndBg.getComponent(UIOpacity).opacity = 255;
            this.ndGroup.active = true;
            this.spStart.node.active = false;
            this.twShowIn(type);
        }

    }
    /**左右动画显示 */
    twShowIn(type: number) {
        if (type == 1) {
            return;
        }
        let wg1 = this.ndTw1.getComponent(Widget);
        Tween.stopAllByTarget(wg1);
        let wg2 = this.ndTw2.getComponent(Widget);
        Tween.stopAllByTarget(wg2);
        let wait = 1.4;
        if (type == 0) {
            wg1.left = -380;
            wg2.right = -380;
            tween(wg1).delay(wait).to(0.3, { left: 0 }).start();
            tween(wg2).delay(wait).to(0.3, { right: 0 }).start();
            let opac = this.ndBg.getComponent(UIOpacity);
            this.ndBg.active = true;
            opac.opacity = 0;
            tween(opac).delay(wait).to(0.6, { opacity: 255 }).start();
        } else if (type == 2) {
            wg1.left = 0;
            wg2.right = 0;
        }
    }
    /**退出游戏2的动画 */
    twShowOut() {
        let wg1 = this.ndTw1.getComponent(Widget);
        Tween.stopAllByTarget(wg1);
        let wg2 = this.ndTw2.getComponent(Widget);
        Tween.stopAllByTarget(wg2);
        tween(wg1).to(0.3, { left: -380 }).start();
        tween(wg2).to(0.3, { right: -380 }).start();
        let opac = this.ndBg.getComponent(UIOpacity);
        this.ndBg.active = true;
        opac.opacity = 255;
        tween(opac).to(0.6, { opacity: 0 }).call(() => {
            this.node.active = false;
        }).start();


    }
}


