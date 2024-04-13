import { _decorator, Label, Node, instantiate} from 'cc';
import {Crash_ViewBase} from "../BaseView/Crash_ViewBase";
const { ccclass, property } = _decorator;

@ccclass('Pre_dotLayer')
export class Crash_Pre_dotLayer extends Crash_ViewBase {
    init(seconds,total){
        this._nodes['pre_box'].destroyAllChildren()
        let quotient = Math.floor(total)
        for(let i = 1;i<= quotient + 10; i++){
            let node:Node=instantiate(this._nodes['pre_item'])
            node.active=true
            node.getChildByName('dot_label').getComponent(Label).string= i + 'S'
            this._nodes['pre_box'].addChild(node)
        }
    }
    update(deltaTime: number) {

    }
}


