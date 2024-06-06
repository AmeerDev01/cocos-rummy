import { _decorator, Component, instantiate, Label, Node, Toggle, ToggleContainer } from 'cc';
import { BaseEventZCH } from '../../base/BaseEventZCH';
import { GameConfigZCH } from '../../config/GameConfigZCH';
const { ccclass, property } = _decorator;

@ccclass('GameAutoZCH')
export class GameAutoZCH extends Component {
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
                    nd1.getComponent(Label).fontSize = 50
                }
                nd1.getComponent(Label).string = num;
            }
            if (nd2) {
                if (i == this.autoList.length - 1) {
                    nd2.angle = 90;
                    num = "8";
                    nd2.getComponent(Label).fontSize = 50
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
                BaseEventZCH.Instance.emit(GameConfigZCH.publicEventName.autoBet, { index: i, num: this.autoList[i] });
                return;
            }
        }
    }
    closePop() {
        BaseEventZCH.Instance.emit(GameConfigZCH.gamePopShow.closePop, GameConfigZCH.prefabName.autoShow);
    }
}


