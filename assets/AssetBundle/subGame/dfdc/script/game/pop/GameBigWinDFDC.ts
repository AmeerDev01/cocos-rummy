import { _decorator, Component, Node, sp, Tween, tween } from 'cc';
import { LabTweenNumDFDC } from '../../base/show/LabTweenNumDFDC';
import { BaseGameDataMgeDFDC } from '../../base/BaseGameDataMgeDFDC';
import { bigWinType } from '../../config/DefinedDataTypeDFDC';
import { BaseEventDFDC } from '../../base/BaseEventDFDC';
import { GameConfigDFDC } from '../../config/GameConfigDFDC';
import { BaseSoundMgeDFDC } from '../../base/BaseSoundMgeDFDC';
const { ccclass, property } = _decorator;

@ccclass('GameBigWinDFDC')
export class GameBigWinDFDC extends Component {
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
        let winT = BaseGameDataMgeDFDC.Instance.getBigWinType();

        if (winT == bigWinType.bigWin) {
            this.soundName = GameConfigDFDC.soundData.popBigWin1;
        } else if (winT == bigWinType.megaWin) {
            this.soundName = GameConfigDFDC.soundData.popBigWin2;
        } else if (winT == bigWinType.superWin) {
            this.soundName = GameConfigDFDC.soundData.popBigWin3;
        }
        BaseSoundMgeDFDC.Instance.playSound(this.soundName, true);
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
        } else if (this.bwType == 3) {
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
        this.ndWin.getComponent(LabTweenNumDFDC).showLab(this.winGold, true, 2, () => {
            this.bwType = 3;
            tween(this).delay(1).call(() => {

            }).delay(2).call(() => {
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
        this.ndWin.getComponent(LabTweenNumDFDC).showLab(0);
        let winT = BaseGameDataMgeDFDC.Instance.getBigWinType();
        this.winGold = BaseGameDataMgeDFDC.Instance.getCurrWin();
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
        this.showBigWin("animation", false)
        this.bwType = 1;
    }
    closePop() {
        BaseSoundMgeDFDC.Instance.stopSoundName(this.soundName);
        BaseEventDFDC.Instance.emit(GameConfigDFDC.gamePopShow.showBigWin_close);
    }

}


