import { _decorator, animation, find, Label, Node, sp } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global } from '../../../hall';
import { BuyType } from '../../../hall/components/Hall_ShopPanel';
import StepNumber from '../../../utils/StepNumber';
import { DialogInfo, DialogType, GameType, GameTypeInfo } from '../type';
import { getNodeByNameDeep } from '../../../utils/tool';
import config from '../config';
import SkeletonAnimationPlayer from '../../../utils/SkeletonPlay';
const { ccclass, property } = _decorator;

export interface IState {
    miniVal: number,
    majorVal: number,
    grandVal: number,
}

export interface IProps {
    miniVal?: number,
    majorVal?: number,
    grandVal?: number,
    gameTypeInfo: GameTypeInfo,
    amountInfo?: any
}
export interface IEvent {
}

@ccclass('DragonV2topValue')
export class DragonV2topValue extends BaseComponent<IState, IProps, IEvent> {
    private mini_numer: Node
    private major_numer: Node
    private jackpot_number: Node
    private mini_numerSpecial: Node
    private major_numerSpecial: Node
    private jackpot_numberSpecial: Node
    private theNumberOfDragonBalls : number = 0
    start() {

    }
    protected propertyNode = {

    }

    public props: IProps = {
        miniVal: null,
        majorVal: null,
        grandVal: null,
        amountInfo: null,
        gameTypeInfo: {
            lastGameType: GameType.NONE,
            currGameType: GameType.NONE,
            viewGameType: GameType.NONE,
            leftCount: 0
        },
    }

    public events: IEvent = {
        onWindowCloseHandler: (dialogType: DialogType) => { }
    }

    protected initState() {
        return {
            miniVal: 0,
            majorVal: 0,
            grandVal: 0,
        }
    }

    protected bindEvent(): void {
        this.mini_numer = this.node.getChildByName('mini_numer')
        this.major_numer = this.node.getChildByName('major_numer')
        this.jackpot_number = this.node.getChildByName('jackpot_number')
        this.mini_numerSpecial = this.mini_numer.getChildByName('special')
        this.major_numerSpecial = this.major_numer.getChildByName('special')
        this.jackpot_numberSpecial = this.jackpot_number.getChildByName('special')
        this.isDisplaysAFlashingBox(false)
    }
   /*  显示闪动框 */
    isDisplaysAFlashingBox(isShow:boolean){
        this.mini_numerSpecial.active=isShow
        this.major_numerSpecial.active=isShow
        this.jackpot_numberSpecial.active=isShow
    }
    /* 闪动框回调 */
    public flashbox(done?) {
        this.isDisplaysAFlashingBox(true)
        let mini_numerSpecial = new SkeletonAnimationPlayer(this.mini_numerSpecial.getComponent(sp.Skeleton), 'animation2', false,()=>{
            // mini_numerSpecial.changeAnimation('animation1',false)
        })
        mini_numerSpecial.playAnimation()
        let major_numerSpecial = new SkeletonAnimationPlayer(this.major_numerSpecial.getComponent(sp.Skeleton), 'animation2', false,()=>{
            // major_numerSpecial.changeAnimation('animation1',false)
        })
        major_numerSpecial.playAnimation()
        let jackpot_numberSpecial = new SkeletonAnimationPlayer(this.jackpot_numberSpecial.getComponent(sp.Skeleton), 'animation2', false, () => {
            // jackpot_numberSpecial.changeAnimation('animation1',false,()=>{
            //     jackpot_numberSpecial.stopAnimation()
            //     this.isDisplaysAFlashingBox(false)
            //     done && done()
            // })
            this.isDisplaysAFlashingBox(false)
            done && done()
        })
        jackpot_numberSpecial.playAnimation()
    }
   public initTamako(){
    this.node.getChildByName('smallDragonBeadPanel').children.forEach((item, index) => {
        item.active = false
    })
    this.isDisplaysAFlashingBox(false)
    }
    /* 显示小龙珠 */
    public setTamako(num: number) {
        if(this.theNumberOfDragonBalls == num){ //如果龙珠和上把一样
            return
        }else{
            this.theNumberOfDragonBalls=num
            this.node.getChildByName('smallDragonBeadPanel').active=true
            this.node.getChildByName('smallDragonBeadPanel').children.forEach((item, index) => {
                item.active = (index <= num - 1)
            })
        }
        if (num == 5) {
            this.mini_numerSpecial.active=true
            let mini = new SkeletonAnimationPlayer(this.mini_numerSpecial.getComponent(sp.Skeleton), 'animation1', false, () => {
                mini.changeAnimation('animation2', true)
            })
            mini.playAnimation()
        } else if (num == 10) {
            this.major_numerSpecial.active=true
            let major = new SkeletonAnimationPlayer(this.major_numerSpecial.getComponent(sp.Skeleton), 'animation1', false, () => {
                major.changeAnimation('animation2', true)
            })
            major.playAnimation()
        } else if (num == 15) {
            this.jackpot_numberSpecial.active=true
            let jackpot = new SkeletonAnimationPlayer(this.jackpot_numberSpecial.getComponent(sp.Skeleton), 'animation1', false, () => {
                jackpot.changeAnimation('animation2', true)
            })
            jackpot.playAnimation()
        }
    }
    protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
        if (key === 'amountInfo') {
            this.flashbox()
            this.setState({ miniVal: value.cur.value * config.winning[1].maxRate })
            this.setState({ majorVal: value.cur.value * config.winning[2].maxRate })
            if (this.props.amountInfo.positionId <= config.betAmountLimit) {
                this.setState({ grandVal: value.cur.value * config.winning[3].maxRate })
            }
        }
        if (key === 'gameTypeInfo') {
            this.node.getChildByName('mini_bg').active = this.isSubgame2()
            this.node.getChildByName('main_bg').active = !this.isSubgame2()
        }
        if (key === 'grandVal') {
            if (this.props.amountInfo.positionId > config.betAmountLimit) {
                this.setState({ grandVal: value.cur })
            }
            if (value.cur === 1) {
                this.setState({ grandVal: this.props.amountInfo.value * config.winning[3].maxRate })
            }
        }
    }
    protected bindUI(): void {
        this.useState((key, value) => {
            new StepNumber(value.pre, value.cur, (num) => {
                if (this.node && this.node.isValid) {
                    const value = Number(num.toFixed(2));
                    this.mini_numer.getChildByName('number').getComponent(Label).string = value.formatAmountWithCommas();
                }
            }).start();
        }, ["miniVal"])

        this.useState((key, value) => {
            new StepNumber(value.pre, value.cur, (num) => {
                if (this.node && this.node.isValid) {
                    const value = Number(num.toFixed(2));
                    this.major_numer.getChildByName('number').getComponent(Label).string = value.formatAmountWithCommas();
                }
            }).start();
        }, ["majorVal"])

        this.useState((key, value) => {
            new StepNumber(value.pre, value.cur, (num) => {
                if (this.node && this.node.isValid) {
                    const value = Number(num.toFixed(0));
                    this.jackpot_number.getChildByName('number').getComponent(Label).string = value.formatAmountWithCommas();
                }
            }).start();
        }, ["grandVal"])
    }
    private isSubgame2() {
        return this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2
    }
    update(deltaTime: number) {

    }
}

