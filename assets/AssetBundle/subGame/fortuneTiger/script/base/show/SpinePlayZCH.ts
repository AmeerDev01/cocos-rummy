import { _decorator, Component, Node, sp } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpinePlayZCH')
export class SpinePlayZCH extends Component {
    /**动画名称列表 */
    nameList: string[] = [];
    /**动画回调函数 */
    handleList: Function[] = [];
    currName: string = "";
    protected onLoad(): void {
        this.node.getComponent(sp.Skeleton).setCompleteListener(() => {
            for (let i = 0; i < this.nameList.length; ++i) {
                if (this.currName == this.nameList[i]) {
                    if (this.handleList[i]) {
                        this.handleList[i]();
                        break;
                    }
                }
            }
        })
    }
    setListName(names: string[]) {
        this.nameList = names;
        this.handleList = [];
        for (let i = 0; i < names.length; ++i) {
            this.handleList.push(null);
        }
    }
    showSpine(index: number, loop: boolean = false, cd: Function = null) {
        this.handleList[index] = cd;
        this.currName = this.nameList[index];
        this.node.getComponent(sp.Skeleton).setAnimation(0, this.currName, loop);
    }
    protected onDestroy(): void {
        this.handleList = [];
    }
}


