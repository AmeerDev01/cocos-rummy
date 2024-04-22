import { _decorator, Component, Label, Node, tween, Tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LabTweenNumDFDC')
export class LabTweenNumDFDC extends Component {
    /**当前金币 */
    gold: number = 0;
    currGold: number = 0;
    numLength: number = 2;
    set showGold(num: number) {
        if (!num) {
            num = 0;
        }
        this.currGold = num;
        this.node.getComponent(Label).string = this.getStr(this.currGold);
    }
    get showGold(): number {
        return this.currGold;
    }
    showLab(gold: number, isTween: boolean = false, time: number = 2, cd: Function = null) {
        this.gold = gold;
        if (isTween) {
            Tween.stopAllByTarget(this);
            tween(<any>this).to(time, { showGold: gold }).call(() => {
                if (cd) {
                    cd();
                }
            }).start();
        } else {
            this.stopTween();
        }
    }
    setNumLength(num: number) {
        this.numLength = num;
    }
    stopTween() {
        Tween.stopAllByTarget(this);
        this.showGold = this.gold;
    }
    initShow() {
        Tween.stopAllByTarget(this);
        this.gold = 0;
    }
    getStr(num: number): string {
        let str = "0";
        str = num.toFixed(this.numLength);
        let n1 = parseFloat(str);
        str = n1 + "";
        str = str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        return str;
    }
}


