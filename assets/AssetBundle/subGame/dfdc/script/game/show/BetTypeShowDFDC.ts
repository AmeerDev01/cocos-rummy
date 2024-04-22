import { _decorator, Component, Node, Sprite, SpriteFrame } from 'cc';
import { BaseEventDFDC } from '../../base/BaseEventDFDC';
import { GameConfigDFDC } from '../../config/GameConfigDFDC';
const { ccclass, property } = _decorator;

@ccclass('BetTypeShowDFDC')
export class BetTypeShowDFDC extends Component {
    /**5个基础图案 */
    @property(SpriteFrame)
    sfList1: SpriteFrame[] = [];
    /**5个金色图案 */
    @property(SpriteFrame)
    sfList2: SpriteFrame[] = [];
    /**5个显示图片 */
    @property(Sprite)
    sprList: Sprite[] = [];
    protected onLoad(): void {
        BaseEventDFDC.Instance.on(GameConfigDFDC.gameInitData.bundleName, this.onEventMsg.bind(this));
    }
    onEventMsg(name: string, data) {
        switch (name) {
            case GameConfigDFDC.publicEventName.betChange: {
                this.betChange(data);
            } break;
        }
    }
    /**投注变化 */
    betChange(data: { index: number }) {
        for (let i = 0; i < this.sprList.length; ++i) {
            this.sprList[i].spriteFrame = this.sfList1[i];
        }
        let list = GameConfigDFDC.gameInitData.changeIcon;
        for (let i = 0; i < list.length; ++i) {
            if (data.index >= list[i] && i + 1 < this.sprList.length) {
                this.sprList[i + 1].spriteFrame = this.sfList2[i + 1];
            }
        }
    }
}


