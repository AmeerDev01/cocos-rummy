import { _decorator, Prefab, Node,instantiate,Label } from 'cc';
import {Crash_ViewBase} from "../BaseView/Crash_ViewBase";
import {RoomDrawingRecords} from "../net/protocol/WsProtocol";
import Crash_NetMsgDispatcher from "../net/Crash_NetMsgDispatcher";
import {Crash_DataManager} from "../manager/Crash_DataManager";
import {ProtocolCode} from "../net/protocol/ProtocolDef";
import { Crash_RecordItem } from './Crash_RecordItem';
const { ccclass, property } = _decorator;

@ccclass('Game_teenLayer')
export class Crash_Game_teenLayer extends Crash_ViewBase {
    @property(Prefab)
    recordItem:Prefab=null
    timeAccumulator=0
    timer
    start() {
        this._nodes['close'].on(Node.EventType.TOUCH_END, () => {
            clearInterval(this.timer)
            this.node.destroy()
        })
        let data={
            tableId:Crash_DataManager.getInstance().getUserInfo().getTableId()
        }
        Crash_NetMsgDispatcher.getInstance().regCallBack(ProtocolCode.RES_ROOM_DRAWING_RECORDS, this, this.sendChatRsp);
        new RoomDrawingRecords().setParams(data).send();
        this.timer=window.setInterval(()=>{
            new RoomDrawingRecords().setParams(data).send();
        },4000)
    }
    private remNetCallBacks() {
        Crash_NetMsgDispatcher.getInstance().removeAllProtocolByObj(this);
    }
    sendChatRsp(bl, data, args){
        this._nodes['list1'].destroyAllChildren()
        this._nodes['list2'].destroyAllChildren()
        this._nodes['list3'].destroyAllChildren()
        this._nodes['list4'].destroyAllChildren()
        this._nodes['list5'].destroyAllChildren()
        this._nodes['list6'].destroyAllChildren()
        this._nodes['list7'].destroyAllChildren()
        if(bl){
            let teenList=data.data
            teenList.data.forEach((item,index)=>{
                let node:Node=instantiate(this.recordItem)
                let  style={
                    width:65,
                    height:35,
                    color:1,
                    fontSize:18,
                }
                node.getChildByName('record_new').active=false
                node.getComponent(Crash_RecordItem).init(item,style)
                if(index<15){
                    this._nodes['list1'].addChild(node)
                    return
                }
                if(index<30){
                    this._nodes['list2'].addChild(node)
                    return
                }
                if(index<45){
                    this._nodes['list3'].addChild(node)
                    return
                }
                if(index<60){
                    this._nodes['list4'].addChild(node)
                    return
                }
                if(index<75){
                    this._nodes['list5'].addChild(node)
                    return
                }
                if(index<90){
                    this._nodes['list6'].addChild(node)
                    return
                }
                if(index<100){
                    if(index===99){
                        node.getChildByName('record_new').active=true
                    }
                    this._nodes['list7'].addChild(node)
                }
            })
            this._nodes['Label_One'].getComponent(Label).string=teenList.extraSmall
            this._nodes['Label_Two'].getComponent(Label).string=teenList.small
            this._nodes['Label_Three'].getComponent(Label).string=teenList.centre
            this._nodes['Label_Four'].getComponent(Label).string=teenList.big
            this._nodes['Label_Five'].getComponent(Label).string=teenList.max
        }
    }
    protected onDestroy() {
        this.remNetCallBacks()
    }
}


