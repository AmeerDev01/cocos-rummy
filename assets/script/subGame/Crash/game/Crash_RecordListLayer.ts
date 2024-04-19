import { _decorator, Node, instantiate,Prefab } from 'cc';
import {Crash_DataManager} from "../manager/Crash_DataManager";
import {Crash_ViewBase} from "../BaseView/Crash_ViewBase";
import {Crash_RecordItem} from "./Crash_RecordItem";
const { ccclass, property } = _decorator;

@ccclass('RecordListLayer')
export class Crash_RecordListLayer extends Crash_ViewBase {
    @property(Prefab)
    recordItem:Prefab=null
    init(){
        this.node.destroyAllChildren()
        let OddsList=Crash_DataManager.getInstance().getUserInfo().getOddsList()
        OddsList.forEach((res,index)=>{
            let node:Node=instantiate(this.recordItem)
            node.getChildByName('record_new').active=false
            if(index===9){
                node.getChildByName('record_new').active=true
            }
            node.getComponent(Crash_RecordItem).init(res)
            node.active=true
            this.node.addChild(node)
        })
    }
    update(deltaTime: number) {
        if (Crash_DataManager.getInstance().getCrashStageVo() && Crash_DataManager.getInstance().getCrashStageVo().gameType === 3) {
            this.init()
        }
    }
}


