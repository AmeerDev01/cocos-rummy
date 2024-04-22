import { _decorator, Component, Node } from 'cc';
import { BaseEventZCH } from '../../base/BaseEventZCH';
import { GameConfigZCH } from '../../config/GameConfigZCH';
import { BaseGameDataMgeZCH } from '../../base/BaseGameDataMgeZCH';
const { ccclass, property } = _decorator;

@ccclass('GameLineMgeZCH')
export class GameLineMgeZCH extends Component {
    /**线条 */
    @property(Node)
    ndLine: Node[] = [];
    /**左边线条标识 列表 */
    @property(Node)
    ndLine1: Node[] = [];
    /**右边线条标识列表 */
    @property(Node)
    ndLine2: Node[] = [];
    protected onLoad(): void {
        BaseEventZCH.Instance.on(GameConfigZCH.gameInitData.bundleName, this.onEventMsg.bind(this));
    }
    protected start(): void {

        this.initShow();
    }
    onEventMsg(name: string, data) {
        switch (name) {
            case GameConfigZCH.publicEventName.gameInit: {
                this.initShow();
            } break;
            case GameConfigZCH.gameEventName.startRoll: {
                this.startRoll();
            } break;
            case GameConfigZCH.gameEventName.showLine: {
                this.showAllLine();
            } break;
        }
    }
    initShow() {
        for (let i = 0; i < this.ndLine.length; ++i) {
            this.ndLine[i].active = false;
            this.ndLine1[i].children[1].active = false;
            this.ndLine2[i].children[1].active = false;
        }
    }
    startRoll() {
        let isFree = BaseGameDataMgeZCH.Instance.getCurrIsFreeGame();
        let isLastFree = BaseGameDataMgeZCH.Instance.getLastFreeGame();
        if (isFree && !isLastFree) {
            return;
        }
        this.initShow();
    }
    showAllLine() {
        this.initShow();
        let list = BaseGameDataMgeZCH.Instance.getSpineLines();
        for (let i = 0; i < list.length; ++i) {
            this.showLine(list[i] - 1);
        }
    }
    /**播放线条 */
    showLine(index: number) {
        this.ndLine[index].active = true;
        this.ndLine1[index].children[1].active = true;
        this.ndLine2[index].children[1].active = true;
    }
}


