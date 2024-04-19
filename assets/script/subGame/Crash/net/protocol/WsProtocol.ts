import Crash_WsManager from "../Crash_WsManager";
import { ProtocolCode } from "./ProtocolDef";


export class WsProtocol {
    queueId: number = null;
    code: string = null;
    data: any = null;
    token:any=null
    args: any = null;
    sendTm: number = null;
    constructor(code: string) {
        this.code = code;
    }

    toString(): string {
        let obj:any= {
            code: this.code,
            data:this.data,
            queueId: this.queueId,
        };
        if(this.token){
            obj.token=this.token
        }
        return JSON.stringify(obj);
    }

    setData(data: any) {
        this.data = data;
    }
    send(...args) {
        this.args = args;
        Crash_WsManager.getInstance().send(this);
    }
}
// 获取用户信息
export class establishAConnection extends WsProtocol {
    constructor() {
        super(ProtocolCode.REQ_USER_INFORMATION);
    }
    setParams(token: string) {
        this.token = token
        return this;
    }
}
//获取玩家下注请求
export class PlayerWagering extends WsProtocol {
    constructor() {
        super(ProtocolCode.REQ_PLAYER_WAGERING);
    }
    setParams(data) {
        this.data = {
            roomId: data.tableId,
            memberName: data.memberName,
            memberId: data.memberId,
            gold: data.gold,
            odds: data.odds,
        }
        return this;
    }
}
// 获取查看房间开奖记录
export class RoomDrawingRecords extends WsProtocol {
    constructor() {
        super(ProtocolCode.REQ_ROOM_DRAWING_RECORDS);
    }
    setParams(data) {
        this.data = data.tableId
        return this;
    }
}
