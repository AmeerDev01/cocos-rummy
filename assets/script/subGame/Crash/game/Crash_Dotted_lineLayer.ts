import { _decorator, Label, Node ,instantiate,tween} from 'cc';
import {Crash_ViewBase} from "../BaseView/Crash_ViewBase";
const { ccclass, property } = _decorator;
@ccclass('Dotted_lineLayer')
export class Crash_Dotted_lineLayer extends Crash_ViewBase {
    init(seconds,total){
        this._nodes['dot_box'].destroyAllChildren()
        let quotient = Math.floor(total)
        for(let i = 1;i<= quotient + 4; i++){
            let node:Node=instantiate(this._nodes['dot_item'])
            node.active=true
            node.getChildByName('Label').getComponent(Label).string= i + 'X'
            this._nodes['dot_box'].addChild(node)
        }
    }
    update(deltaTime: number) {

    }
}


