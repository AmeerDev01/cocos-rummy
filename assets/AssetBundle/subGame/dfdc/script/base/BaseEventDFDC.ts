import { _decorator, Component, EventTarget, Node } from 'cc';
import { GameConfigDFDC } from '../config/GameConfigDFDC';

const { ccclass, property } = _decorator;
/**子游戏事件类 */
@ccclass('BaseEventDFDC')
export class BaseEventDFDC extends Component {
    private static _gameEvent: BaseEventDFDC = null;
    evnetTaget: EventTarget = null;
    eventNameList: string[] = [];
    public static get Instance(): BaseEventDFDC {
        if (!BaseEventDFDC._gameEvent) {
            BaseEventDFDC._gameEvent = new BaseEventDFDC();
        }
        return BaseEventDFDC._gameEvent;
    }
    /**销毁 */
    release() {
        this.offAll();
        BaseEventDFDC._gameEvent = null;
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
        let eventName: string = GameConfigDFDC.gameInitData.bundleName;
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


