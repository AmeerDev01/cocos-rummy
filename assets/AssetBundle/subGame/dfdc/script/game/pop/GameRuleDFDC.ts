import { _decorator, Component, Node, PageView } from 'cc';
import { BaseEventDFDC } from '../../base/BaseEventDFDC';
import { GameConfigDFDC } from '../../config/GameConfigDFDC';
const { ccclass, property } = _decorator;

@ccclass('GameRuleDFDC')
export class GameRuleDFDC extends Component {
    /**视图界面 */
    @property(Node)
    ndShow: Node[] = [];
    /**当前页面显示 */
    @property(Node)
    ndShowPage: Node[] = [];
    /** 翻页列表*/
    @property(PageView)
    pv_list: PageView = null;

    /**当前页面 */
    showIndex: number = 0;
    protected onLoad(): void {

    }


    showPage2() {
        let num = this.pv_list.getCurrentPageIndex();
        for (let i = 0; i < this.ndShowPage.length; i++) {
            this.ndShowPage[i].active = false;
        }
        this.ndShowPage[num].active = true;
        this.showIndex = num;

    }
    /**点击向左按钮 */
    onTouchLeft() {
        let num = this.showIndex - 1;
        if (num < 0) {
            num = this.ndShow.length - 1;
        }
        this.showIndex = num;
        this.pv_list.setCurrentPageIndex(this.showIndex);


    }
    /**点击向左按钮 */
    onTouchRight() {
        let num = this.showIndex + 1;
        if (num >= this.ndShow.length) {
            num = 0;
        }
        this.showIndex = num;
        this.pv_list.setCurrentPageIndex(this.showIndex);

    }
    closePop() {
        BaseEventDFDC.Instance.emit(GameConfigDFDC.gamePopShow.closePop, GameConfigDFDC.prefabName.gameRule);
    }
}

