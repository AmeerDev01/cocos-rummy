import { _decorator, Component, Node, sp, Tween, tween } from 'cc';
import { BaseEventDFDC } from '../../base/BaseEventDFDC';
import { BaseGameDataMgeDFDC } from '../../base/BaseGameDataMgeDFDC';
import { BaseSoundMgeDFDC } from '../../base/BaseSoundMgeDFDC';
import { LabTweenNumDFDC } from '../../base/show/LabTweenNumDFDC';
import { jackpotType } from '../../config/DefinedDataTypeDFDC';
import { GameConfigDFDC } from '../../config/GameConfigDFDC';
const { ccclass, property } = _decorator;

@ccclass('JackpotWinDFDC')
export class JackpotWinDFDC extends Component {
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

    /**赢钱 */
    winGold: number = 0;
    /**状态 1弹出2跑分3等待关闭 */
    bwType: number = 0;

    protected onLoad(): void {
        this.spGold.setCompleteListener(() => {
            if (this.goldName == "Appear") {
                this.showGold("loop", true);
            }
        })

    }
    protected start(): void {
        this.showWin();
        BaseSoundMgeDFDC.Instance.playSound(GameConfigDFDC.soundData.popFreeWin, true);

    }
    onTouch() {
        if (this.bwType == 1) {
            this.showWinLab();
        } else if (this.bwType == 2) {
            Tween.stopAllByTarget(this);
            this.ndWin.active = true;
            this.ndWin.getComponent(LabTweenNumDFDC).showLab(this.winGold, false);
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
        Tween.stopAllByTarget(this);
        this.bwType = 2;
        this.ndWin.active = true;
        this.ndWin.getComponent(LabTweenNumDFDC).showLab(this.winGold, true, 2, () => {
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

    showWin() {
        this.ndWin.getComponent(LabTweenNumDFDC).showLab(0);
        let jackpotT = BaseGameDataMgeDFDC.Instance.getJackpotType();
        this.winGold = BaseGameDataMgeDFDC.Instance.getJackpoWin();
        console.error(this.winGold)
        let num = 0;
        if (jackpotT == jackpotType.mini) {
            num = 0;
        } else if (jackpotT == jackpotType.minor) {
            num = 1;
        } else if (jackpotT == jackpotType.major) {
            num = 2;
        } else if (jackpotT == jackpotType.grand) {
            num = 3;
        }
        this.spGold.skeletonData = this.spGoldList[num];
        this.spBW.skeletonData = this.spBWList[num];
        this.showGold("Appear", false);
        this.spBW.setAnimation(0, "animation", true);
        this.showWinLab();
        this.bwType = 1;
    }
    closePop() {
        BaseSoundMgeDFDC.Instance.stopSoundName(GameConfigDFDC.soundData.popFreeWin);
        BaseEventDFDC.Instance.emit(GameConfigDFDC.gamePopShow.showJackPotWin_close);
    }
}


