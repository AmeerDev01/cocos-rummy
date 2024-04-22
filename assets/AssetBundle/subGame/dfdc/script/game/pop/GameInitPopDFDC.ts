import { _decorator, Component, Node, Sprite, SpriteFrame, tween } from 'cc';
import { BaseEventDFDC } from '../../base/BaseEventDFDC';
import { GameConfigDFDC } from '../../config/GameConfigDFDC';
import { BaseSoundMgeDFDC } from '../../base/BaseSoundMgeDFDC';
import { BaseGameDataMgeDFDC } from '../../base/BaseGameDataMgeDFDC';
const { ccclass, property } = _decorator;

@ccclass('GameInitPopDFDC')
export class GameInitPopDFDC extends Component {
    /**4个图标 */
    @property(Sprite)
    sprList: Sprite[] = [];
    /**小 投注图片 */
    @property(SpriteFrame)
    sf1: SpriteFrame[] = [];
    /**大 投注图片 */
    @property(SpriteFrame)
    sf2: SpriteFrame[] = [];
    @property
    isTouch: boolean = false;
    /**是否是免费 */
    @property
    isFree: boolean = false;

    isEnd: boolean = false;
    protected onLoad(): void {
       
    }
    start() {
        BaseSoundMgeDFDC.Instance.playSound(GameConfigDFDC.soundData.initShow, false);

        if (!this.isFree && this.sprList.length) {
            this.setShow();
        }
        if (!this.isTouch) {
            tween(this).delay(2).call(() => {
                this.closePop();
            }).start();
        }

    }
    setShow() {
        let changeBet: number[] = GameConfigDFDC.gameInitData.changeIcon;
        let index = BaseGameDataMgeDFDC.Instance.getCurrBetIndex();
        for (let i = 0; i < changeBet.length; ++i) {
            if (index >= changeBet[i]) {
                this.sprList[i].spriteFrame = this.sf2[i];
            } else {
                this.sprList[i].spriteFrame = this.sf1[i];
            }
        }
    }
    onTouch() {
        this.closePop();
    }
    closePop() {
        if (this.isEnd) {
            return;
        }
        this.isEnd = true;

        if (this.isFree) {
            BaseEventDFDC.Instance.emit(GameConfigDFDC.gamePopShow.closePop, "gameFree");
            BaseEventDFDC.Instance.emit(GameConfigDFDC.gamePopShow.closeInitFree);
        } else {
            BaseEventDFDC.Instance.emit(GameConfigDFDC.gamePopShow.closePop, "gamePay");
        }

    }
}


