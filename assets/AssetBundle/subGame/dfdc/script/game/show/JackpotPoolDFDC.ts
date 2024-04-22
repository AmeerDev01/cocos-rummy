import { _decorator, Component, Label, Node, Tween, tween } from 'cc';
import { BaseEventDFDC } from '../../base/BaseEventDFDC';
import { BaseGameDataMgeDFDC } from '../../base/BaseGameDataMgeDFDC';
import { GameConfigDFDC } from '../../config/GameConfigDFDC';
import { LabTweenNumDFDC } from '../../base/show/LabTweenNumDFDC';
import { jackpotType } from '../../config/DefinedDataTypeDFDC';
const { ccclass, property } = _decorator;

@ccclass('JackpotPoolDFDC')
export class JackpotPoolDFDC extends Component {
    /**奖池金额 */
    @property(Node)
    ndGold: Node = null;
    /**提示节点 */
    @property(Node)
    ndShow: Node = null;
    /**提示文字 */
    @property(Label)
    labTips: Label = null;
    /**jackpot类型 */
    @property
    jackpotType: number = 0;

    protected onLoad(): void {
        BaseEventDFDC.Instance.on(GameConfigDFDC.gameInitData.bundleName, this.onEventMsg.bind(this));


    }
    onEventMsg(name: string, data) {
        switch (name) {
            case GameConfigDFDC.publicEventName.betChange: {
                this.showLab(data.index);
            } break;

        }
    }
    /**设置显示 */
    showLab(index1: number) {
        let list = BaseGameDataMgeDFDC.Instance.getBetList();
        let num = 0;

        let jt = [jackpotType.mini,
        jackpotType.minor,
        jackpotType.major,
        jackpotType.grand]
        num = list[index1] * BaseGameDataMgeDFDC.Instance.getJackpotPool(jt[this.jackpotType]);
        let change = GameConfigDFDC.gameInitData.changeIcon;
        let index = -1;
        for (let i = 0; i < change.length; ++i) {
            if (change[i] == index1 + 1) {
                index = i;
                break;
            }
        }

        this.ndGold.getComponent(LabTweenNumDFDC).showLab(num, true, 2);
        if (index == this.jackpotType) {
            Tween.stopAllByTarget(this);
            this.ndShow.active = true;
            let str = BaseGameDataMgeDFDC.Instance.getLangTxt("jackpotTips");
            let types = ["MINI", "MINOR", "MAJOR", "GRAND"];
            str = str.replace("{bet}", list[index1 + 1] + "");
            str = str.replace("{type}", types[this.jackpotType]);
            this.labTips.string = str;
            tween(this).delay(2).call(() => {
                this.ndShow.active = false;
            }).start();
        } else {
            this.ndShow.active = false;
        }
    }
}


