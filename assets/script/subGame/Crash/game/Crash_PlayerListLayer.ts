import { _decorator, Component, Node, instantiate, Prefab, log } from 'cc';
import { Crash_ViewBase } from "../BaseView/Crash_ViewBase";
import { Crash_DataManager } from "../manager/Crash_DataManager";
import { Crash_PlayerItem } from "./Crash_PlayerItem";
import Crash_NetMsgDispatcher from "db://assets/script/subGame/Crash/net/Crash_NetMsgDispatcher";
import { ProtocolCode } from "db://assets/script/subGame/Crash/net/protocol/ProtocolDef";
const { ccclass, property } = _decorator;

@ccclass('PlayerListLayer')
export class Crash_PlayerListLayer extends Crash_ViewBase {
    @property(Prefab)
    playerItem: Prefab = null
    timeAccumulator = 0
    crashStageVo
    sate = true
    type1 = true
    isMe = false
    totalNumberOfRoomOccupants = []
    protected start() {
        super.start();
        this.totalNumberOfRoomOccupants = []
        Crash_NetMsgDispatcher.getInstance().regCallBack(ProtocolCode.LIST_OF_BETS, this, this.sendChatRsp);
        // 创建一个代理对象并将其应用到 this.crashStageVo 上
        // this.crashStageVo = Crash_DataManager.getInstance().getCrashStageVo();
        // // 使用 Object.defineProperty 定义属性 gameType 的 getter 和 setter
        // Object.defineProperty(this.crashStageVo, 'gameType', {
        //     get: function() {
        //         return this._gameType; // 返回属性的值
        //     },
        //     set: function(newValue) {
        //         this._gameType = newValue; // 设置属性的值
        //         console.log('gameType 被设置为:', newValue);
        //     }
        // });
    }
    syncOncePerSecond() {
        let val = Crash_DataManager.getInstance().getCurrentParameters()
        this._nodes['content'].children.forEach(item => {
            if (Number(item.getComponent(Crash_PlayerItem).getItemInfo().odds) <= Number(val) && item.getComponent(Crash_PlayerItem).getoperated()) {
                item.getComponent(Crash_PlayerItem).isShowWin()
                item.getComponent(Crash_PlayerItem).operated()
                if (!item.getComponent(Crash_PlayerItem).getisMe()) {
                    this._nodes['content'].removeChild(item);
                    this._nodes['content'].insertChild(item, this.isMe ? 1 : 0);
                }
            }
        })

    }
    initList() {
        // this.totalNumberOfRoomOccupants = []
        // this._nodes['content'].destroyAllChildren()
        // let RoomInfoVos = Crash_DataManager.getInstance().getUserInfo().getRoomInfoVos()
        // RoomInfoVos.length > 0 && RoomInfoVos.forEach((res: any, index) => {
        //     let node: Node = instantiate(this.playerItem)
        //     node.active = true
        //     if (Crash_DataManager.getInstance().getUserInfo().getUserInfo().memberId === res.data.memberId) {
        //         node.getComponent(Crash_PlayerItem).init(res, true)
        //         this._nodes['content'].insertChild(node)
        //     } else {
        //         node.getComponent(Crash_PlayerItem).init(res)
        //         this._nodes['content'].addChild(node)
        //     }
        // })
    }
    sendChatRsp(bl, data, args) {
        if (this.type1) {
            this.type1 = false
            this._nodes['content'].destroyAllChildren()
            this.totalNumberOfRoomOccupants = []
        }
        this.totalNumberOfRoomOccupants?.push(data.data)
        Crash_DataManager.getInstance().getUserInfo().setRoomInfoVos(this.totalNumberOfRoomOccupants)
        let node: Node = instantiate(this.playerItem)
        if (node) {
            if (Crash_DataManager.getInstance().getUserInfo().getUserInfo().memberId != data.data.memberId) {
                node.getComponent(Crash_PlayerItem).init(data.data)
                node.active = true
                console.log(this.isMe);
                if(this.isMe){
                    this._nodes['content'].insertChild(node,1)
                }else{
                    this._nodes['content'].insertChild(node,0)
                }
            } else {
                this.isMe = true
                node.getComponent(Crash_PlayerItem).init(data.data, true)
                node.active = true
                this._nodes['content'].insertChild(node, 0);
            }
        }
    }
    protected onDestroy(): void {

    }
    update(deltaTime: number) {
        this.timeAccumulator += deltaTime;
        if (this.timeAccumulator > 1) {
            let crashStageVo = Crash_DataManager.getInstance().getCrashStageVo()
            if (!crashStageVo) return;
            if (crashStageVo.gameType === 2) {
                if (this.sate) {
                    this.timeAccumulator = 0;
                    this.sate = false
                    this.type1 = true
                    this.initList()
                }
                this.syncOncePerSecond();
            } else if (crashStageVo.gameType === 1) {
                this.sate = true
            }else{
                this.isMe=false
            }
        }
    }
}


