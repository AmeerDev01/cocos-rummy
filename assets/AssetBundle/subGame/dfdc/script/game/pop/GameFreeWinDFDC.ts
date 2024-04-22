import { _decorator, Component, Label, Node, Tween, tween } from 'cc';
import { BaseGameDataMgeDFDC } from '../../base/BaseGameDataMgeDFDC';
import { LabTweenNumDFDC } from '../../base/show/LabTweenNumDFDC';
import { BaseEventDFDC } from '../../base/BaseEventDFDC';
import { GameConfigDFDC } from '../../config/GameConfigDFDC';
import { BaseSoundMgeDFDC } from '../../base/BaseSoundMgeDFDC';
const { ccclass, property } = _decorator;

@ccclass('GameFreeWinDFDC')
export class GameFreeWinDFDC extends Component {
    /**免费次数 */
    @property(Label)
    labFreeNum: Label = null;
    /**总共赢钱 */
    @property(Node)
    ndFreeWin: Node = null;
    /**确认按钮 */
    @property(Node)
    ndConfirm: Node = null;
    /**当前类型 1 跑分 2 等待关闭*/
    type: number = 0;
    isEnd: boolean = false;
    protected start(): void {
        this.ndFreeWin.active = true;
        let win = BaseGameDataMgeDFDC.Instance.getAllWin();
        this.type = 1;
        this.ndConfirm.active = true;
        BaseSoundMgeDFDC.Instance.playSound(GameConfigDFDC.soundData.popFreeWin, true);
        this.ndFreeWin.getComponent(LabTweenNumDFDC).showLab(win, true, 3, () => {
            this.type = 2;
            tween(this).delay(2).call(() => {
                this.closePop();
            }).start();
        })
        let num = BaseGameDataMgeDFDC.Instance.getAllFreeNum();
        this.labFreeNum.string = num + "";
    }
    onTouch() {
        if (this.type == 1) {
            let win = BaseGameDataMgeDFDC.Instance.getAllWin();
            this.ndFreeWin.getComponent(LabTweenNumDFDC).showLab(win, true);
            Tween.stopAllByTarget(this);

            this.type = 2;
            tween(this).delay(2).call(() => {
                this.closePop();
            }).start();
        } else if (this.type == 2) {
            Tween.stopAllByTarget(this);
            this.closePop();
        }
    }
    closePop() {
        if (this.isEnd) {
            return;
        }
        let win = BaseGameDataMgeDFDC.Instance.getAllWin();
        this.ndFreeWin.getComponent(LabTweenNumDFDC).showLab(win, false);
        this.type = 2;
        this.isEnd = true;
        BaseSoundMgeDFDC.Instance.stopSoundName(GameConfigDFDC.soundData.popFreeWin);
        BaseEventDFDC.Instance.emit(GameConfigDFDC.gamePopShow.showFreeWin_close);
    }
}


