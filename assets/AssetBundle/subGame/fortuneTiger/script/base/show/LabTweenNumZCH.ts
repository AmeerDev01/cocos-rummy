import { _decorator, Component, Label, Node, tween, Tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LabTweenNumZCH')
export class LabTweenNumZCH extends Component {
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
        this.numLength = this.countDecimals(gold);
        if (this.numLength > 3) {
            this.numLength = 3;
        }
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
    stopTween() {
        Tween.stopAllByTarget(this);
        this.showGold = this.gold;
    }
    setNumLength(num: number) {
        this.numLength = num;
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
    countDecimals(value: number): number {
        if (Math.floor(value) === value) return 0; // 检查数字是否为整数
        const text = value.toString();
        // 检查是否存在小数点，以避免在没有小数点的情况下调用split方法
        if (text.indexOf('.') > -1) {
            const parts = text.split('.');
            return parts[1] ? parts[1].length : 0; // 返回小数部分的长度
        }
        return 0; // 没有小数点，返回0
    }
}


