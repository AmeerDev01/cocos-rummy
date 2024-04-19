import {_decorator, Label, Node} from 'cc';
import { Crash_ViewBase, ViewType } from "./Crash_ViewBase";

const {ccclass, property} = _decorator;

@ccclass('CrashTipsLayer')
export default class Crash_TipsLayer extends Crash_ViewBase {

    protected _init() {
        console.log("TipsLayer init");
        this._viewType = ViewType.Tips;
        super._init();
    }

}
