import { _decorator, Component, Node } from 'cc';
import {Crash_ViewBase} from "../BaseView/Crash_ViewBase";
const { ccclass, property } = _decorator;

@ccclass('Game_settingsLayer')
export class Crash_Game_settingsLayer extends Crash_ViewBase {
    start() {
        this._nodes['bg'].on(Node.EventType.TOUCH_END, () => {
            this.node.destroy()
        })
    }

    update(deltaTime: number) {

    }
}
