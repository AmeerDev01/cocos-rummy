import { _decorator, Component, math, Node, sp, Sprite, SpriteFrame, tween, Tween } from 'cc';
import { BaseGameDataMgeZCH } from '../../base/BaseGameDataMgeZCH';
import { GameConfigZCH } from '../../config/GameConfigZCH';
import { BaseEventZCH } from '../../base/BaseEventZCH';
import { BaseSoundMgeZCH } from '../../base/BaseSoundMgeZCH';
const { ccclass, property } = _decorator;

@ccclass('TigerSpineZCH')
export class TigerSpineZCH extends Component {

    /**红包动画 */
    @property(sp.Skeleton)
    redPacket: sp.Skeleton = null;
    /**老虎动画 */
    @property(sp.Skeleton)
    spTiger: sp.Skeleton = null;
    /**位置节点 */
    @property(Node)
    ndPos1: Node = null;
    @property(Node)
    ndPos2: Node = null;
    /**icon 列表*/
    @property(SpriteFrame)
    sfList: SpriteFrame[] = [];
    @property(Sprite)
    sprIcon: Sprite = null;
    /**下10图片 */
    @property(Node)
    ndX10: Node = null;
    /**当前动画名称 */
    currName: string = "";
    currHandle: Function = null;
    protected onLoad(): void {
        this.spTiger.setCompleteListener(() => {
            if (this.currName == GameConfigZCH.tigetSpinName.flyEnd) {
                this.initTiger();
            } else if (this.currName == GameConfigZCH.tigetSpinName.scale_S) {
                this.showTiger(GameConfigZCH.tigetSpinName.scale_S_idle, true, null)
            } else if (this.currName == GameConfigZCH.tigetSpinName.noGetFreeGame) {
                // this.initTiger();
            } else if (this.currName == "idle2") {
                this.showTiger(GameConfigZCH.tigetSpinName.redPk, false, null)
                this.redPacket.node.active = true;
                this.redPacket.setAnimation(0, "re_starthongbao", false);
            } else if (this.currName == GameConfigZCH.tigetSpinName.freeWin) {
                this.showTiger(GameConfigZCH.tigetSpinName.freeWin_idle, true, null)
            } else if (this.currName == GameConfigZCH.tigetSpinName.freeOut) {
                this.initShow();
            }
        })

        this.redPacket.setCompleteListener(() => {
            this.redPacket.node.active = false;
            //打开红包动画  
            //显示icon
        })
        BaseEventZCH.Instance.on(GameConfigZCH.gameInitData.bundleName, this.onEventMsg.bind(this));
    }
    onEventMsg(name: string, data) {
        switch (name) {
            case GameConfigZCH.gameEventName.newGame: {
                this.initTiger();
            } break;
            case GameConfigZCH.publicEventName.gameInit: {
                this.initTiger();
            } break;
            case GameConfigZCH.gameEventName.wildTweenEnd: {
                this.flyEnd();
            } break;
            case GameConfigZCH.showTigerSpine.tiger_free_ing: {
                this.freeGame();
            } break;
            case GameConfigZCH.gameEventName.showViewSmall: {
                this.inMiniGame();
            } break;
            case GameConfigZCH.gameEventName.showViewBig: {
                // this.exitMiniGame();
            } break;
            case GameConfigZCH.showTigerSpine.tiger_in_out: {
                this.noMiniGame();
            } break;
            case GameConfigZCH.showTigerSpine.tiger_free_win: {
                this.showWin();
            } break;
            case GameConfigZCH.showTigerSpine.tiger_redPak: {
                this.showRedPak();
            } break;
        }
    }
    /**播放老虎动画 */
    showTiger(name: string, loop: boolean, cd: Function) {

        this.currName = name;
        this.spTiger.setAnimation(0, name, loop);
    }
    /**默认播放 */
    initTiger() {
        let isFree = BaseGameDataMgeZCH.Instance.getCurrIsFreeGame();
        let lastFree = BaseGameDataMgeZCH.Instance.getLastFreeGame();
        if (isFree && !lastFree) {
            this.ndX10.active = true;
            this.freeGame();
            return;
        }
        if (lastFree) {
            this.exitMiniGame();
            return
        }
        this.initShow();
    }
    initShow() {
        this.redPacket.node.active = false;
        this.sprIcon.node.active = false;
        this.ndX10.active = false;
        BaseSoundMgeZCH.Instance.playMusic(1);
        this.showTiger(GameConfigZCH.tigetSpinName.idle, true, null);
    }
    /** 游戏中的动画*/
    freeGame() {
        if (this.currName != GameConfigZCH.tigetSpinName.freeGameIng) {
            BaseSoundMgeZCH.Instance.playMusic(2);
            this.showTiger(GameConfigZCH.tigetSpinName.freeGameIng, true, null)
        }
    }
    /**wild 飞行动画完成 */
    flyEnd() {
        BaseSoundMgeZCH.Instance.playSound(GameConfigZCH.soundData.wild, false);
        this.showTiger(GameConfigZCH.tigetSpinName.flyEnd, false, null)
    }
    /**窗口缩小播放动画 */
    inMiniGame() {
        BaseSoundMgeZCH.Instance.playSound(GameConfigZCH.soundData.rollSmall, false);
        this.showTiger(GameConfigZCH.tigetSpinName.scale_S, false, null)
    }
    /**没有获得10倍 */
    noMiniGame() {
        BaseSoundMgeZCH.Instance.playSound(GameConfigZCH.soundData.noFree, false);
        this.showTiger(GameConfigZCH.tigetSpinName.noGetFreeGame, false, null);
    }
    /**播放红包 */
    showRedPak() {
        BaseSoundMgeZCH.Instance.playSound(GameConfigZCH.soundData.freeGame, false);

        this.showTiger(GameConfigZCH.tigetSpinName.redPk, false, null);
        this.redPacket.node.active = true;
        Tween.stopAllByTarget(this.redPacket.node);
        this.redPacket.node.setPosition(this.ndPos1.getPosition());
        tween(this.redPacket.node).to(0.2, { position: this.ndPos2.getPosition() }).call(() => {
            this.sprIcon.node.active = true;
            let index = BaseGameDataMgeZCH.Instance.getIcon10();
            this.sprIcon.spriteFrame = this.sfList[index - 1];
            Tween.stopAllByTarget(this.sprIcon.node);
            this.sprIcon.node.setPosition(math.v3(0, 0, 0));
            this.freeGame();
            tween(this.sprIcon.node).to(0.3, { position: math.v3(0, 200, 0) })
                .to(0.3, { position: math.v3(0, 0, 0) }).call(() => {
                    BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.stopRoll);
                }).delay(0.5)
                .call(() => {
                    this.sprIcon.node.active = false;
                    this.ndX10.active = true;

                }).start();
        }).start();
    }
    /**小游戏结算 */
    showWin() {
        this.showTiger(GameConfigZCH.tigetSpinName.freeWin, false, null)
    }
    /**小游戏流程退出 */
    exitMiniGame() {
        BaseSoundMgeZCH.Instance.playSound(GameConfigZCH.soundData.rollBig, false);
        BaseSoundMgeZCH.Instance.playMusic(1);
        this.showTiger(GameConfigZCH.tigetSpinName.freeOut, false, null)
    }


}


