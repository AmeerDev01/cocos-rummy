import { _decorator, Component, Node, sp, Tween, tween } from 'cc';
import { LabTweenNumZCH } from '../../base/show/LabTweenNumZCH';
import { BaseGameDataMgeZCH } from '../../base/BaseGameDataMgeZCH';
import { bigWinType } from '../../config/DefinedDataTypeZCH';
import { BaseEventZCH } from '../../base/BaseEventZCH';
import { GameConfigZCH } from '../../config/GameConfigZCH';
import { BaseSoundMgeZCH } from '../../base/BaseSoundMgeZCH';
const { ccclass, property } = _decorator;

@ccclass('GameBigWinZCH')
export class GameBigWinZCH extends Component {
    /**金币动画节点 */
    @property(sp.Skeleton)
    spGold: sp.Skeleton = null;
    /**金币动画数据 */
    @property(sp.SkeletonData)
    spGoldList: sp.SkeletonData[] = [];
    /**bigwin 动画节点 */
    @property(sp.Skeleton)
    spBW: sp.Skeleton = null;
    /**bigwin 动画数据 */
    @property(sp.SkeletonData)
    spBWList: sp.SkeletonData[] = [];
    /**赢钱金币节点 */
    @property(Node)
    ndWin: Node = null;
    /**播放金币动画名称 */
    goldName: string = "";
    /**播放bigwin动画名称 */
    bwName: string = "";
    /**赢钱 */
    winGold: number = 0;
    /**状态 1弹出2跑分3等待关闭 */
    bwType: number = 0;
    soundName: string = "";
    protected onLoad(): void {
        this.spGold.setCompleteListener(() => {
            if (this.goldName == "Appear") {
                this.showGold("loop", true);
                this.showWinLab();
            }
        })

    }
    protected start(): void {
        this.showWin();
        this.ndWin.getComponent(LabTweenNumZCH).setNumLength(3);
        let winT = BaseGameDataMgeZCH.Instance.getBigWinType();

        if (winT == bigWinType.bigWin) {
            this.soundName = GameConfigZCH.soundData.bigwin;
        } else if (winT == bigWinType.megaWin) {
            this.soundName = GameConfigZCH.soundData.mageewin;
        } else if (winT == bigWinType.superWin) {
            this.soundName = GameConfigZCH.soundData.superwin;
        }
        BaseSoundMgeZCH.Instance.playSound(this.soundName, true);
    }
    onTouch() {
        if (this.bwType == 1) {
            this.showWinLab();
        } else if (this.bwType == 2) {
            Tween.stopAllByTarget(this);
            this.ndWin.active = true;
            this.ndWin.getComponent(LabTweenNumZCH).showLab(this.winGold, false);
            this.bwType = 3;
            tween(this).delay(2).call(() => {
                this.closePop();
            }).start();
        } else if (this.bwType) {
            Tween.stopAllByTarget(this);
            this.closePop();
        }
    }
    /**播放跑分 */
    showWinLab() {
        console.error("播放跑分", this.winGold)
        Tween.stopAllByTarget(this);
        this.bwType = 2;
        this.ndWin.active = true;
        this.ndWin.getComponent(LabTweenNumZCH).showLab(this.winGold, true, 2, () => {
            this.bwType = 3;
            tween(this).delay(2).call(() => {
                this.closePop();
            }).start();
        })
    }
    /**播放金币动画 */
    showGold(name: string, loop: boolean) {
        this.goldName = name;
        this.spGold.premultipliedAlpha = false;
        this.spGold.setAnimation(0, name, loop);
    }
    /**播放bw动画 */
    showBigWin(name: string, loop: boolean) {
        this.bwName = name;
        this.spBW.premultipliedAlpha = false;
        this.spBW.setAnimation(0, name, loop);
    }
    showWin() {
        this.ndWin.getComponent(LabTweenNumZCH).showLab(0);
        let winT = BaseGameDataMgeZCH.Instance.getBigWinType();
        this.winGold = BaseGameDataMgeZCH.Instance.getAllWin();
        console.error(this.winGold)
        let num = 0;
        if (winT == bigWinType.bigWin) {
            num = 0;
        } else if (winT == bigWinType.megaWin) {
            num = 1;
        } else if (winT == bigWinType.superWin) {
            num = 2;
        }
        this.spGold.skeletonData = this.spGoldList[num];
        this.spBW.skeletonData = this.spBWList[num];
        this.showGold("Appear", false);
        this.showBigWin("animation", false);
        this.bwType = 1;
    }
    closePop() {
        BaseSoundMgeZCH.Instance.stopSoundName(this.soundName);
        BaseEventZCH.Instance.emit(GameConfigZCH.gamePopShow.showBigWin_close, GameConfigZCH.prefabName.gameBigWin);
    }

}


