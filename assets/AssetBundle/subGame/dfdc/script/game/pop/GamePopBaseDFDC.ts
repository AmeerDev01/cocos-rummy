import { _decorator, Component, math, Node, tween, Tween, UIOpacity, Widget } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GamePopBaseDFDC')
export class GamePopBaseDFDC extends Component {
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
    setWG() {
        let list: Node[] = [this.ndPop];
        for (let i = 0; i < list.length; ++i) {
            let wg = list[i].getComponent(Widget);
            if (wg) {
                wg.left = 0;
                wg.right = 0;
                wg.top = 0;
                wg.bottom = 0;
            }
            wg.updateAlignment();
        }
    }
    /**显示弹窗 */
    showPop(nd: Node, name: string, cd?: () => void) {
        // this.setWG();
        this.showName = name;
        console.error("添加节点-    ------", name)
        Tween.stopAllByTarget(this.ndPop);
        let opacity = this.ndPopBg.getComponent(UIOpacity);
        Tween.stopAllByTarget(opacity);
        let time = 0.5;
        this.ndPop.setScale(math.v3(0.1, 0.1, 0.1));
        opacity.opacity = 0;
        this.ndMask.active = false;
        nd.parent = this.ndPop;
        tween(opacity).to(time, { opacity: 180 }).start();
        tween(this.ndPop).to(time, { scale: math.v3(1, 1, 1) }, { easing: "backOut" }).call(() => {
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

