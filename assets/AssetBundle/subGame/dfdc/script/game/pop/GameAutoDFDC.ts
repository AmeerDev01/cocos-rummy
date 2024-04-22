import { _decorator, Component, instantiate, Label, Node, Toggle, ToggleContainer } from 'cc';
import { BaseEventDFDC } from '../../base/BaseEventDFDC';
import { GameConfigDFDC } from '../../config/GameConfigDFDC';
const { ccclass, property } = _decorator;

@ccclass('GameAutoDFDC')
export class GameAutoDFDC extends Component {
    /**按钮容器 */
    @property(Node)
    ndGroup: Node = null;
    /**按钮节点 */
    @property(Node)
    ndBtn: Node = null;
    /**自动 列表 */
    autoList: number[] = [10, 20, 50, 100, 500, 1001];

    protected start(): void {
        this.ndGroup.removeAllChildren();
        for (let i = 0; i < this.autoList.length; ++i) {
            let nd = instantiate(this.ndBtn);
            nd.parent = this.ndGroup;
            let nd1 = nd.getChildByName("num1");
            let nd2 = nd.getChildByPath("Checkmark/num2");
            let num = this.autoList[i] + "";
            if (nd1) {
                if (i == this.autoList.length - 1) {
                    nd1.angle = 90;
                    num = "8";

                    nd1.getComponent(Label).fontSize = 45
                }
                nd1.getComponent(Label).string = num;
            }
            if (nd2) {
                if (i == this.autoList.length - 1) {
                    nd2.angle = 90;
                    num = "8";
                    nd2.getComponent(Label).fontSize = 45
                }
                nd2.getComponent(Label).string = num;

            }
            if (i == this.autoList.length - 1) {
                this.ndGroup.children[0].getComponent(Toggle).isChecked = true;
            }
        }
    }
    onTouch() {
        let list: Toggle[] = this.ndGroup.getComponent(ToggleContainer).toggleItems;
        for (let i = 0; i < list.length; i++) {
            if (list[i].isChecked) {
                this.closePop();
                BaseEventDFDC.Instance.emit(GameConfigDFDC.publicEventName.autoBet, { index: i, num: this.autoList[i] });
                console.error("点击了--", i)
                return;
            }
        }
    }
    closePop() {
        BaseEventDFDC.Instance.emit(GameConfigDFDC.gamePopShow.closePop, GameConfigDFDC.prefabName.autoShow);
    }
}


