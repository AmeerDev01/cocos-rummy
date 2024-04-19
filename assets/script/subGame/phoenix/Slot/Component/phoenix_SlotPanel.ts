import { _decorator, Label, Node, tween, UIOpacity } from 'cc';
import phoenix_BaseComponent from "./phoenix_BaseComponent";
import { NumberRoller } from '../utils/NumberRoller'
import { getSocketProxy } from "../phoenix_utils";

const { ccclass, property } = _decorator;

@ccclass('phoenix_SlotPanel')
export class phoenix_SlotPanel extends phoenix_BaseComponent {
    @property(Label)
    majorLabel: Label = null
    @property(Label)
    miniLabel: Label = null
    @property(Label)
    jackTotal: Label = null
    @property(Node)
    btn_jackPot: Node = null
    private majorNumberRoller: NumberRoller = new NumberRoller();
    private miniNumberRoller: NumberRoller = new NumberRoller();
    private jackTotalNumberRoller: NumberRoller = new NumberRoller();

    start() {
        // this.btn_jackPot.on(Node.EventType.TOUCH_END, this.jackIsShow, this)
    }

    protected bindUI(): void {
        // this.isBgShow(getSocketProxy().getTransferGameInfo().gameType(0) == 0)

        this.showSlot(getSocketProxy().getTransferGameInfo().gameType(0) == 0, false, null);

    }

    protected bindEvent(): void {

    }

    public jackIsShow() {

    }
    public isBgShow(state) {
        // this._nodes['spr_phoenix_sgBg'].active = state
        // this._nodes['spr_smallGame_multipleBg'].active = !state
    }
    public lostHidden(state) {
        // this._nodes['slotListPanel'].active = state
    }
    public setLost(total) {
        let node = this.node.getChildByName('spr_smallGame_multipleBg').getChildByName('Label_smallGame_multiple').getComponent(Label)
        total > 0 ? node.string = 'X' + total : node.string = ''
    }

    /**
     * 隐藏插槽
     * @param isSlow 是否缓动
     * @param done 完成函数
     */
    public hideSlot(isMain: boolean, isSlow: boolean, done) {
        const slotListPanelNode = this.node.getChildByName("slotListPanel");
        const upBgNode = this.node.getChildByName("spr_phoenix_upBg");
        const slotBgNode = this.getSlotBgNode(isMain);

        this.node.getChildByName("spr_smallGame_multipleBg").active = false;
        if (isSlow) {
            tween(slotBgNode.getComponent(UIOpacity)).to(0.3, { opacity: 0 }).start();
            tween(slotListPanelNode.getComponent(UIOpacity)).to(0.3, { opacity: 0 }).start();
            tween(upBgNode.getComponent(UIOpacity)).to(0.3, { opacity: 0 }).call(() => {
                if (!this.node.isValid) return;
                done && done();
                slotBgNode.active = false;
                slotListPanelNode.active = false;
                upBgNode.active = false;
            }).start();
        } else {
            slotBgNode.active = false;
            slotListPanelNode.active = false;
            upBgNode.active = false;
            done && done();
        }
    }

    /**
     * 显示插槽
     * @param isMain 
     * @param isSlow 
     * @param done 
     */
    public showSlot(isMain: boolean, isSlow: boolean, done) {
        const slotBgNode = this.getSlotBgNode(isMain);
        slotBgNode.active = true;
        slotBgNode.getComponent(UIOpacity).opacity = 255;
        
        const slotListPanelNode = this.node.getChildByName("slotListPanel");
        const upBgNode = this.node.getChildByName("spr_phoenix_upBg");
        slotListPanelNode.active = true;
        upBgNode.active = true;
        slotListPanelNode.getComponent(UIOpacity).opacity = 255;
        upBgNode.getComponent(UIOpacity).opacity = 255;

        // 倍数气泡
        this._nodes['spr_smallGame_multipleBg'].active = !isMain;

        done && done();
    }

    private getSlotBgNode(isMain: boolean) {
        // 获得背景的同时，把另外一个背景隐藏了
        this.node.getChildByName(!isMain ? 'spr_phoenix_bg' : 'spr_phoenix_sgBg').active = false;
        return this.node.getChildByName(isMain ? 'spr_phoenix_bg' : 'spr_phoenix_sgBg');
    }

    public set_jack_total(num) {
        // let startNumberMajor = parseInt(this.jackTotal.string.replace(/,/g, ""));
        // this.jackTotalNumberRoller.startRolling(startNumberMajor, num, 500, this.jackTotal)
    }

    public setGod_MAJOR(mini: number, major: number) {
        // let startNumberMini = parseInt(this.miniLabel.string.replace(/,/g, ""));
        // let startNumberMajor = parseInt(this.majorLabel.string.replace(/,/g, ""));
        // this.majorNumberRoller.startRolling(startNumberMini, mini, 500, this.miniLabel)
        // this.miniNumberRoller.startRolling(startNumberMajor, major, 500, this.majorLabel);
    }

    update(deltaTime: number) {
        // this.majorNumberRoller.update(deltaTime); // 手动触发滚动逻辑
        // this.miniNumberRoller.update(deltaTime); // 手动触发滚动逻辑
        // this.jackTotalNumberRoller.update(deltaTime); // 手动触发滚动逻辑
    }
}

