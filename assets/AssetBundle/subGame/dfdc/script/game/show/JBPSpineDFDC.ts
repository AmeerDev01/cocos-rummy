import { _decorator, Component, Node, sp, tween } from 'cc';
import { BaseEventDFDC } from '../../base/BaseEventDFDC';
import { BaseGameDataMgeDFDC } from '../../base/BaseGameDataMgeDFDC';
import { GameConfigDFDC } from '../../config/GameConfigDFDC';
import { gameType } from '../../config/DefinedDataTypeDFDC';
const { ccclass, property } = _decorator;

@ccclass('JBPSpineDFDC')
export class JBPSpineDFDC extends Component {
    /**动画名称 0最小的 1最小的 闪光*/
    listName: string[] = ["jbp1", "jbp2", "jbp3"];
    /**当前动画名称 */
    currName: string = "";
    /**当前投注 */
    currIndex: number = 0;
    protected onLoad(): void {
        BaseEventDFDC.Instance.on(GameConfigDFDC.gameInitData.bundleName, this.onEventMsg.bind(this));
        let spk = this.node.getComponent(sp.Skeleton);
        spk.setCompleteListener(() => {
            this.spineEnd();
        })
    }
    onEventMsg(name: string, data) {
        switch (name) {
            case GameConfigDFDC.publicEventName.gameInit: {
                this.initShow();
            } break;
            case GameConfigDFDC.gameEventName.wildTweenEnd: {
                this.tweenEnd();
            } break;
            case GameConfigDFDC.publicEventName.betChange: {
                this.betChange(data.index);
            } break;
            case GameConfigDFDC.gamePopShow.showJackPotWin_close: {
                this.betChange(this.currIndex);
            } break;
            case GameConfigDFDC.gameEventName.showCurrGameType: {
                this.showJackpot();
            } break;
        }
    }
    initShow() {
        let bet = BaseGameDataMgeDFDC.Instance.getCurrBetGold();
        let list = BaseGameDataMgeDFDC.Instance.getBetList();
        for (let i = 0; i < list.length; ++i) {
            if (list[i] == bet) {
                this.betChange(i);
            }
        }
    }
    tweenEnd() {
        if (this.currName.indexOf("_sj") >= 0) {
            this.currName = this.currName.replace("_sj", "");
        }
        let name = this.currName + "_sj";
        this.showSpine(name, false);
    }
    spineEnd() {
        if (this.currName == "jp1") {
            this.showSpine("jbp1", true);
        } else {
            if (this.currName == "jbp1_sj" || this.currName == "jbp2_sj" || this.currName == "jbp3_sj") {
                this.betChange(this.currIndex);
            }
        }
    }
    showJackpot() {
        let type = BaseGameDataMgeDFDC.Instance.getNextGameType();
        if (type == gameType.jackpot) {
            this.node.active = false;
        }
    }
    /**播放动画 */
    showSpine(name: string, loop: boolean) {
        console.error("播放动画---", name)
        this.currName = name;
        this.node.getComponent(sp.Skeleton).setAnimation(0, name, loop);
    }
    /**投注改变 */
    betChange(index: number) {
        this.node.active = true;
        this.currIndex = index;
        let num = this.getIndexToWild(index);
        let list1 = GameConfigDFDC.gameInitData.jackpotWildList;
        let list2 = GameConfigDFDC.gameInitData.jackpotGrandList;
        let num1 = 0;
        if (list1[index]) {
            num1 = num / list1[index];
        }
        if (num1 < list2[0]) {
            this.showSpine("jbp1", true);
        } else if (num1 < list2[1]) {
            this.showSpine("jbp2", true);
        } else {
            this.showSpine("jbp3", true);
        }
    }
    /**获取投注下标 的wild值 */
    getIndexToWild(index: number): number {
        let num = BaseGameDataMgeDFDC.Instance.getJBPWildNum(index + 1);
        return num;
    }
}


