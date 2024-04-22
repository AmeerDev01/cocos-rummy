import { _decorator, Component, Font, Label, Layout, math, Node, Tween, tween, UITransform, Widget } from 'cc';
import { BaseGameDataMgeZCH } from '../../base/BaseGameDataMgeZCH';
import { BaseEventZCH } from '../../base/BaseEventZCH';
import { GameConfigZCH } from '../../config/GameConfigZCH';
const { ccclass, property } = _decorator;

@ccclass('TwLabTipsZCH')
export class TwLabTipsZCH extends Component {
    @property(Node)
    ndShow: Node = null;
    /**文字显示 */
    @property(Label)
    labTips1: Label = null;
    /**文字显示 */
    @property(Label)
    labTips2: Label = null;
    /**文字显示 */
    @property(Label)
    labTips3: Label = null;
    /**当前是否是 免费 */
    isFree: boolean = false;
    /**字体文件 */
    @property(Font)
    fntList: Font[] = [];
    protected onLoad(): void {
        BaseEventZCH.Instance.on(GameConfigZCH.gameInitData.bundleName, this.onEventMsg.bind(this));
    }
    onEventMsg(name: string, data) {
        switch (name) {
            case GameConfigZCH.publicEventName.gameInit: {
                this.initShow();
            } break;
            case GameConfigZCH.gameEventName.showViewSmall: {
                let isFree = BaseGameDataMgeZCH.Instance.getCurrIsFreeGame();
                if (isFree) {
                    this.changeType(true);
                }
            } break;
            case GameConfigZCH.gameEventName.showViewBig: {
                let isFree = BaseGameDataMgeZCH.Instance.getCurrIsFreeGame();
                if (isFree) {
                    this.changeType(false);
                }
            } break;
        }
    }
    protected start(): void {
        this.labTips1.string = BaseGameDataMgeZCH.Instance.getLangTxt("tips1");
        this.labTips2.string = BaseGameDataMgeZCH.Instance.getLangTxt("tips2");
        this.labTips3.string = BaseGameDataMgeZCH.Instance.getLangTxt("tips3");
        let loy = this.ndShow.getComponent(Layout);
        loy.updateLayout();
    }
    initShow() {
        let isFree = BaseGameDataMgeZCH.Instance.getCurrIsFreeGame();
        this.changeType(isFree);
    }
    showTw() {
        Tween.stopAllByTarget(this.ndShow);
        tween(this.ndShow).call(() => {
            let time = 20;
            let w = this.ndShow.getComponent(UITransform).width + 20;

            tween(this.ndShow).to(time, { position: math.v3(-w, 0) }).call(() => {
                let w2 = this.ndShow.parent.getComponent(UITransform).width;
                this.ndShow.setPosition(math.v3(w2, 0, 0));
                this.showTw();
            }).start();
        }).start();
    }

    /**获奖类型改变 */
    changeType(isFree: boolean) {
        Tween.stopAllByTarget(this.ndShow);
        this.isFree = isFree;
        if (this.isFree) {
            this.labTips1.font = this.fntList[1];
            this.labTips2.font = this.fntList[1];
            this.labTips3.font = this.fntList[1];
        } else {
            this.labTips1.font = this.fntList[0];
            this.labTips2.font = this.fntList[0];
            this.labTips3.font = this.fntList[0];
        }
        this.ndShow.setPosition(math.v3(150, 0, 0));
        tween(this.ndShow).delay(3).call(() => {
            this.showTw();
        }).start();

    }

}


