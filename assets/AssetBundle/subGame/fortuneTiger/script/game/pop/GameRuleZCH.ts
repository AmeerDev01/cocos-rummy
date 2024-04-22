import { _decorator, Component, Node, PageView } from 'cc';
import { BaseEventZCH } from '../../base/BaseEventZCH';
import { GameConfigZCH } from '../../config/GameConfigZCH';
import { BaseSocketZCH } from '../../base/BaseSocketZCH';
const { ccclass, property } = _decorator;

@ccclass('GameRuleZCH')
export class GameRuleZCH extends Component {
    /**翻页视图 */
    @property(PageView)
    pv_show: PageView = null;
    /**当前页面显示 */
    @property(Node)
    ndShowPage: Node[] = [];
    /**当前页面 */
    showIndex: number = 0;

    showPage2() {
        let num = this.pv_show.getCurrentPageIndex();
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
            num = this.ndShowPage.length - 1;
        }
        this.showIndex = num;
        this.pv_show.setCurrentPageIndex(this.showIndex);


    }
    /**点击向左按钮 */
    onTouchRight() {
        let num = this.showIndex + 1;
        if (num >= this.ndShowPage.length) {
            num = 0;
        }
        this.showIndex = num;
        this.pv_show.setCurrentPageIndex(this.showIndex);

    }
    closePop() {
        // BaseSocketZCH.Instance.exitGameRelease();
        // window.HALL_GLOBAL.closeSubGame({ confirmContent: window.HALL_GLOBAL.lang.write(k => k.WebSocketModule.SocketMsgTimeOut, {}, { placeStr: "数据超时---" }) })
        BaseEventZCH.Instance.emit(GameConfigZCH.gamePopShow.closePop, GameConfigZCH.prefabName.gameRule);
    }
}

