import {
    _decorator,
    Component,
    Node,
    Vec3,
    tween,
    Sprite,
    SpriteFrame,
    UITransform,
    Label,
    math,
    sp,
  } from "cc";
  import { DEV } from 'cc/env'
  const { ccclass, property } = _decorator;
  

  
@ccclass("wheel")
export class PlayChouJiang extends Component { 
    /**转盘节点 */
    @property(Node)
    wheelNode: Node = null;
    /**中奖框 */
    @property(Node)
    jackPot: Node = null;
    @property(Node)
    closeJack: Node = null;
    @property(Label)
    gold_num: Label = null;
    /**中奖提示语 */
    @property(Label)
    tipLabel: Label = null;  
    @property(Node)
    strawberry: Node = null;
    @property(Node)
    banana: Node = null;
    @property(Node)
    apple: Node = null;
    @property(Node)
    grape: Node = null;
    @property(Node)
    watermelon: Node = null;
    @property(Node)
    wild: Node = null;
    /**模块数 */
    private itemNum: number = 6;
    /**转盘是否在转动 */
    private isSpinning: boolean = false;

    /**获取随机角度值 */
    private getRandom(e:number, t:number):number{
        return Math.floor(Math.random() * (t - e)) + e
    }
    /**开始游戏 */
    playGame():void {
        let that = this;
        if(that.isSpinning){ return }
        that.wheelNode.angle = 30;
        that.isSpinning = true;
        let target = that.getRandom(0, 360);
        // console.log('target:' + target)
        tween(that.wheelNode)
        .by(2, { angle: -2160 }, { easing: 'quartIn' }) 
        .by(3, { angle: -(target + 1080)}, { easing: 'quartOut' })
        .call(() => { that.getJackPot(target) })
        .start()
    }

    closeJackPot() {
        let that = this;
        that.jackPot.active = false;
    }
    /**正则 laji*/
    private getUrlParams = (name: string) => {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
        var r = window.location.search.substring(1).match(reg)
        if (r != null) {
            return unescape(r[2])
        }
        return null
    }
    /**中奖提示语内容切换 控制弹框显隐 */
    private getJackPot(target:number):void {
        let that = this;
        let num = Math.floor(target / (360 / that.itemNum));
        // console.log("num",num);
        let SkeletonNode: Node = null;
        let isWild: boolean = false;
        switch (num) {
            case 0:
                that.tipLabel.string = '1,000 ';
                SkeletonNode = that.wild;
                isWild = true;
                break;
            case 1:
                that.tipLabel.string = '500';
                SkeletonNode = that.strawberry;
                break;
            case 2:
                that.tipLabel.string = '300';
                SkeletonNode = that.banana;
                break;
            case 3:
                that.tipLabel.string = '200';
                SkeletonNode = that.apple;
                break;
            case 4:
                that.tipLabel.string = '100';
                SkeletonNode = that.grape;
                break;
            case 5:
                that.tipLabel.string = '50';//Congratulations on winning 50 points  Selamat telah memenangkan 50 poin
                SkeletonNode = that.watermelon;
                break;
        }
        if (isWild) {
            that.wild.getComponent(sp.Skeleton).animation = "animation";
            
        } else {
            
            SkeletonNode.getComponent(sp.Skeleton).animation = "animation2";
        }
        tween(that.jackPot)
        .delay(2)
        .call(() => { 
            that.jackPot.active = true;
        })
        .start()
        let gold = removeComma(that.gold_num.string);
        let TipNum = removeComma(that.tipLabel.string) ;
        that.gold_num.string = (Number(gold) + Number(TipNum)).formatAmountWithCommas();
        tween(that.jackPot)
        .delay(4)
        .call(() => { 
            that.jackPot.active = false;
            that.isSpinning = false;
            SkeletonNode.getComponent(sp.Skeleton).animation = "";
        })
        .start()
    }
    /**laji*/
    private convertToMandK(number:number):string {
        if (number >= 1000000) {
            let M = (number / 1000000).toFixed(2);
            return `${M}M`;
        } else if (number >= 1000) {
            let K = (number / 1000).toFixed(2);
            return `${K}k`;
        } else {
            return `${number}`;
        }
    }


}


export const getRootPosition = (node: Node, totalX?: number, totalY?: number): math.Vec3 => {
    if (node.parent.name === 'Canvas') {
        return new Vec3(totalX, totalY, 0)
    } else {
        const x = node.position.x + node.parent.position.x
        const y = node.position.y + node.parent.position.y
        return getRootPosition(node.parent, x, y)
    }
}

export function removeComma(str){
	const newStr=str.replace(/,/g,"")
	return newStr
}


  

