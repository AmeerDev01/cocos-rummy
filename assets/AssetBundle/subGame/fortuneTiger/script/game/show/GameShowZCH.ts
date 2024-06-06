import { _decorator, Component, math, Node, tween, Tween, UITransform } from 'cc';
import { BaseEventZCH } from '../../base/BaseEventZCH';
import { GameConfigZCH } from '../../config/GameConfigZCH';
import { BaseGameDataMgeZCH } from '../../base/BaseGameDataMgeZCH';
const { ccclass, property } = _decorator;

@ccclass('GameShowZCH')
export class GameShowZCH extends Component {
    /**需要缩放的节点 */
    @property(Node)
    ndList: Node[] = [];
    /**当前是否是10倍旋转 */
    is10: boolean = false;
    onLoad() {
        let ndp = this.node.parent.getComponent(UITransform);
        let w = ndp.width;
        let h = ndp.height;
        this.node.getComponent(UITransform).width = Math.min(w, h);
        this.node.getComponent(UITransform).height = Math.max(w, h);
        BaseEventZCH.Instance.on(GameConfigZCH.gameInitData.bundleName, this.onEventMsg.bind(this));

    }
    protected start(): void {
        this.initShow();
    }
    onEventMsg(name: string, data) {
        if (name == "iconSpineEnd" || name == "iconSpineIng" || name == "showIocnSpr") {

        } else {
        }
        switch (name) {
            case GameConfigZCH.gameEventName.setIconPos: {
                this.initShow();
                BaseEventZCH.Instance.emit(GameConfigZCH.publicEventName.gameInit);
            } break;
            case GameConfigZCH.gameEventName.showViewSmall: {
                this.showSmall();
            } break;
            case GameConfigZCH.gameEventName.showViewBig: {
                this.showBig();
            } break;
        }
    }
    showSmall() {
        for (let i = 0; i < this.ndList.length; ++i) {
            Tween.stopAllByTarget(this.ndList[i]);
            tween(this.ndList[i]).to(0.3, { scale: math.v3(0.9, 0.9, 0.9) }).call(() => {

            }).start();
        }
    }
    showBig() {
        for (let i = 0; i < this.ndList.length; ++i) {
            Tween.stopAllByTarget(this.ndList[i]);
            tween(this.ndList[i]).to(0.3, { scale: math.v3(1, 1, 1) }).call(() => {
                // BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.newGame);
            }).start();
        }
    }
    initShow() {
        let isFree = BaseGameDataMgeZCH.Instance.getCurrIsFreeGame();
        for (let i = 0; i < this.ndList.length; ++i) {
            Tween.stopAllByTarget(this.ndList[i]);
            if (isFree) {
                this.ndList[i].setScale(math.v3(0.9, 0.9, 0.9));
            } else {
                this.ndList[i].setScale(math.v3(1, 1, 1));
            }
        }
    }
}


