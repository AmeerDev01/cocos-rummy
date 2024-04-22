import { _decorator, Component, EventTarget, Node } from 'cc';
import { GameConfigZCH } from '../config/GameConfigZCH';


const { ccclass, property } = _decorator;
/**子游戏事件类 */
@ccclass('BaseEventZCH')
export class BaseEventZCH extends Component {
    private static _gameEvent: BaseEventZCH = null;
    evnetTaget: EventTarget = null;
    eventNameList: string[] = [];
    public static get Instance(): BaseEventZCH {
        if (!BaseEventZCH._gameEvent) {
            BaseEventZCH._gameEvent = new BaseEventZCH();
        }
        return BaseEventZCH._gameEvent;
    }
    /**销毁 */
    release() {
        this.offAll();
        BaseEventZCH._gameEvent = null;
    }
    on(name: string, call: (msgName: string, data: any) => void) {
        if (!this.evnetTaget) {
            this.evnetTaget = new EventTarget();
        }
        this.evnetTaget.on(name, call);
        let h = false;
        for (let i = 0; i < this.eventNameList.length; ++i) {
            if (this.eventNameList[i] == name) {
                h = true;
                break;
            }
        }
        if (!h) {
            this.eventNameList.push(name);
        }
    }
    emit(msgName: string, data: any = null) {
        if (!this.evnetTaget) {
            this.evnetTaget = new EventTarget();
        }
        let eventName: string = GameConfigZCH.gameInitData.bundleName;
        this.evnetTaget.emit(eventName, msgName, data);
    }
    offAll() {
        if (this.evnetTaget) {
            for (let i = 0; i < this.eventNameList.length; ++i) {
                this.evnetTaget.removeAll(this.eventNameList[i]);
            }
        }
    }
}


