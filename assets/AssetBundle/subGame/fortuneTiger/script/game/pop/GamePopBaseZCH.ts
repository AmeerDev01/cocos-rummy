import { _decorator, Component, math, Node, Tween, tween, UIOpacity } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GamePopBaseZCH')
export class GamePopBaseZCH extends Component {
    /**弹窗节点 */
    @property(Node)
    ndPop: Node = null;
    /**弹窗背景 */
    @property(Node)
    ndPopBg: Node = null;
    /**遮罩层 */
    @property(Node)
    ndMask: Node = null;
    showName: string = "";
    protected start(): void {
        if (!this.ndPop.getComponent(UIOpacity)) {
            this.ndPop.addComponent(UIOpacity);
        }
    }
    /**显示弹窗 */
    showPop(nd: Node, name: string, cd?: () => void) {
        this.showName = name;
        Tween.stopAllByTarget(this.ndPop);
        let opacity = this.ndPopBg.getComponent(UIOpacity);
        Tween.stopAllByTarget(opacity);
        let time = 0.5;
        this.ndPop.setScale(math.v3(0, 0, 0));
        this.ndPop.parent.active = true;
        opacity.opacity = 0;
       
        nd.parent = this.ndPop;
        tween(opacity).to(time, { opacity: 180 }).start();
        tween(this.ndPop).to(time, { scale: math.v3(1, 1, 1) }, { easing: "backOut" }).call(() => {
            this.ndMask.active = false;
            if (cd) {
                cd();
            }
        }).start();
    }
    /**关闭弹窗 */
    closePop(cd?: () => void) {
        Tween.stopAllByTarget(this.ndPop);
        let opacity = this.ndPopBg.getComponent(UIOpacity);
        Tween.stopAllByTarget(opacity);
        this.ndMask.active = true;
        let time = 0.5;
        tween(opacity).to(time, { opacity: 0 }).start();
        tween(this.ndPop).to(time, { scale: math.v3(0, 0, 0) }, { easing: "backIn" }).call(() => {
            this.ndPop.removeAllChildren();
            this.ndPop.parent.active = false;
            if (cd) {
                cd();
            }
        }).start();
    }
    /**获取当前名字 */
    getPopName(): string {
        return this.showName;
    }
}


