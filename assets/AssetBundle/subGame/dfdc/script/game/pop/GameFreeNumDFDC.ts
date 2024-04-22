import { _decorator, Component, Label, Node, sp, Tween, tween } from 'cc';
import { BaseGameDataMgeDFDC } from '../../base/BaseGameDataMgeDFDC';
import { BaseEventDFDC } from '../../base/BaseEventDFDC';
import { GameConfigDFDC } from '../../config/GameConfigDFDC';
import { BaseSoundMgeDFDC } from '../../base/BaseSoundMgeDFDC';
const { ccclass, property } = _decorator;

@ccclass('GameFreeNumDFDC')
export class GameFreeNumDFDC extends Component {
    /**免费次数 */
    @property(Node)
    ndFree: Node = null;
    /**展开动画 */
    @property(sp.Skeleton)
    spFree: sp.Skeleton = null;
    /**动画是否播放完成 */
    isShow: boolean = false;
    isEnd: boolean = false;
    protected onLoad(): void {
        this.spFree.setCompleteListener(() => {
            this.isShow = true;
            tween(this).delay(2).call(() => {
                this.closePop();
            }).start();
        });
    }
    protected start(): void {
        BaseSoundMgeDFDC.Instance.playSound(GameConfigDFDC.soundData.popFreeNum, false);
        let num = BaseGameDataMgeDFDC.Instance.getCurrGetFreeNum();
        this.ndFree.getComponent(Label).string = num + "";
        tween(this).delay(1).call(() => {
            this.ndFree.active = true;
        }).start();
    }
    onTouch() {
        // Tween.stopAllByTarget(this);
        if (this.isShow) {
            this.closePop();
        }
    }
    closePop() {
        if (this.isEnd) {
            return;
        }
        this.isEnd = true;
        BaseSoundMgeDFDC.Instance.stopSoundName(GameConfigDFDC.soundData.popFreeNum);
        BaseEventDFDC.Instance.emit(GameConfigDFDC.gamePopShow.showCurrFreeNum_close);
    }
}


