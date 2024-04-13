import { _decorator, instantiate, Label, Node, Sprite, sp, find } from 'cc';
import config from '../config';
import BaseComponent from "./BaseComponent";
import { NumberRoller } from '../utils/NumberRoller'
import { getBgProxy } from '../utils';
const { ccclass, property } = _decorator;

@ccclass('dragon_SlotPanel')
export class dragon_SlotPanel extends BaseComponent {

    @property(Node)
    triangletwoButton: Node = null
    @property(Node)
    boardtwoScrollView: Node = null
    @property(Label)
    majorLabel: Label = null
    @property(Label)
    miniLabel: Label = null
    @property(Label)
    jackTotal: Label = null
    @property(Node)
    @property(Node)
    JackPotContent: Node = null
    @property(Node)
    JackPotItem: Node = null
    private majorNumberRoller: NumberRoller = new NumberRoller();
    private miniNumberRoller: NumberRoller = new NumberRoller();
    private jackTotalNumberRoller: NumberRoller = new NumberRoller();
    private dragonBallCollection = []
    start() {
        const item = config.winning.find(i => i.id === 2)
        this.majorLabel.getComponent(Label).string = item.maxRate.formatAmountWithCommas()
        this.miniLabel.getComponent(Label).string = config.winning[0].maxRate.formatAmountWithCommas()
    }
    protected bindUI(): void {
        let left = this._nodes['God_tk_left'].getChildByName('Charge_order').children
        let center = this._nodes['God_tk_center'].getChildByName('Charge_order').children
        let right = this._nodes['God_tk_right'].getChildByName('Charge_order').children
        this.dragonBallCollection = [...left, ...center, ...right]
        // console.log(this.dragonBallCollection, '龙设置');
    }
    protected bindEvent(): void {
        this.triangletwoButton.on(Node.EventType.TOUCH_END, () => {
            this.boardtwoScrollView.active = !this.boardtwoScrollView.active
        })
    }
    public spitfire(data) {
        let RinghtAnger_dragon = this._nodes['RinghtAnger_dragon']
        let God_tk_right: Node = this._nodes['God_tk_right'];
        let God_tk_left: Node = this._nodes['God_tk_left'];
        let God_tk_center: Node = this._nodes['God_tk_center'];
        RinghtAnger_dragon.active = true
        this._nodes['Ringht_dragon'].active = false
        let spine = RinghtAnger_dragon.getComponent(sp.Skeleton)
        spine.setCompleteListener((entry: sp.spine.TrackEntry) => {
            // 龙吐火后mini特效出现
            God_tk_right.getChildByName('special').active = true
            God_tk_left.getChildByName('special').active = true
            God_tk_center.getChildByName('special').active = true
            // 回到默认值
            RinghtAnger_dragon.active = false
            this._nodes['Ringht_dragon'].active = true
            window.setTimeout(() => {
                God_tk_right.getChildByName('special').active = false
                God_tk_left.getChildByName('special').active = false
                God_tk_center.getChildByName('special').active = false
            }, 1500)
        })
    }
    public bgController(gameType) {
        this._nodes['bg_sg_kuang1'].active = false
        this.dragonBallStatus(true)
        const God_tk_right: Node = this._nodes['God_tk_right'];
        const God_tk_left: Node = this._nodes['God_tk_left'];
        const God_tk_center: Node = this._nodes['God_tk_center'];
        if (gameType === 0) {
            this.leftDragonSwitching(false)
            this._nodes['bg_sg_kuang'].active = true
            God_tk_right.getChildByName('special').active = false
            God_tk_left.getChildByName('special').active = false
            God_tk_center.getChildByName('special').active = false
            this.dragonBallCollection.forEach((item, index) => {
                item.active = false
            })
        }
        else if (gameType === 1) {
            this._nodes['bg_sg_kuang'].active = true
        }
        else if (gameType === 2) {
            this.leftDragonSwitching(true)
            this._nodes['bg_sg_kuang1'].active = true
            this.dragonBallStatus(true)
        }

    }
    dragonBallStatus(type) { // 龙珠状态
        const God_tk_right: Node = this._nodes['God_tk_right'];
        const God_tk_left: Node = this._nodes['God_tk_left'];
        const God_tk_center: Node = this._nodes['God_tk_center'];
        God_tk_left.getChildByName('Charge_order').active = type
        God_tk_center.getChildByName('Charge_order').active = type
        God_tk_right.getChildByName('Charge_order').active = type
    }
    setdragonBallLightsUp(num) {
        let God_tk_right: Node = this._nodes['God_tk_right'];
        let God_tk_left: Node = this._nodes['God_tk_left'];
        let God_tk_center: Node = this._nodes['God_tk_center'];
        if(num>=15){
            God_tk_right.getChildByName('special').active = true
            God_tk_left.getChildByName('special').active = true
            God_tk_center.getChildByName('special').active = true
        }else if(num>=10){
            God_tk_left.getChildByName('special').active = true
            God_tk_center.getChildByName('special').active = true
        }else if(num>=5){
            God_tk_left.getChildByName('special').active = true 
        }
        this.dragonBallCollection.forEach((item, index) => {
            if (index <= num - 1) {
                item.active = true
            } else {
                item.active = false
            }
        })
    }
    leftDragonSwitching(bl) { // 左边龙
        this._nodes['Left_dragon'].active = bl
        this._nodes['Dragon_Tail'].active = !bl
        console.log(this._nodes['Dragon_Tail'].active)
    }
    /**排行榜 */
    public initJACKPOT(jackPotData) { // 排行榜
        this.JackPotContent.destroyAllChildren()
        let sprList = getBgProxy().getSpriteFrames()
        jackPotData.forEach(item => {
            let headImgUrl = `head_circle_${item.avatarIndex}`
            let spr = sprList.find(item => {
                return item.name == headImgUrl
            })
            let node = instantiate(this.JackPotItem)
            node.getChildByName('One_Right').getComponent(Label).string = item.nickName + ''
            find('One_Left/One_Label', node).getComponent(Label).string = item.winningAmount.formatAmountWithCommas()
            find('One_Left/One_head', node).getComponent(Sprite).spriteFrame = spr
            node.active = true
            this.JackPotContent.addChild(node)
        })
    }
    /**mini,major */
    public setGod_MAJOR(mini, major) {
        let startNumberMini = parseInt(this.miniLabel.string.replace(/,/g, ""));
        let startNumberMajor = parseInt(this.majorLabel.string.replace(/,/g, ""));
        this.majorNumberRoller.startRolling(startNumberMini, mini, 500, this.miniLabel)
        this.miniNumberRoller.startRolling(startNumberMajor, major, 500, this.majorLabel);
    }
    /**jack_total */
    public set_jack_total(num) {
        let startNumberMajor = parseInt(this.jackTotal.string.replace(/,/g, ""));
        this.jackTotalNumberRoller.startRolling(startNumberMajor, num, 500, this.jackTotal)
    }
    update(deltaTime: number) {
        this.majorNumberRoller.update(deltaTime); // 手动触发滚动逻辑
        this.miniNumberRoller.update(deltaTime); // 手动触发滚动逻辑
        this.jackTotalNumberRoller.update(deltaTime); // 手动触发滚动逻辑
    }
}
function Stateswitch() {
    throw new Error('Function not implemented.');
}

