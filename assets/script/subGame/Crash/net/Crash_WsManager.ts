import { assetManager, sys } from "cc";
import Crash_GameManager from "../manager/Crash_GameManager";
import Crash_NetMsgDispatcher from "./Crash_NetMsgDispatcher";
import { ProtocolCode } from "./protocol/ProtocolDef";
import { WsProtocol } from "./protocol/WsProtocol";
import {global, lang} from "db://assets/script/hall";
import { addToastAction } from "../../../hall/store/actions/baseBoard";

enum WebSocketState {
    Normal = 0,
    Connecting = 1,
    Connected = 2,
    Closed = 3
}

export default class Crash_WsManager {

    private static instance: Crash_WsManager = null;
    public static getInstance() {
        if(this.instance == null) {
            this.instance = new Crash_WsManager();
        }
        return this.instance;
    }

    private url = null;
    private ws: WebSocket = null;
    public wsState: WebSocketState = WebSocketState.Normal;

    private sendedMsgs: Map<number,WsProtocol> = new Map();
    private queueId: number = 0;

    private isReConnect: boolean = false;
    private reConnectCnt: number = 0;

    private isForceClose: boolean = false;

    private lastSendTm: number = 1;
    private heartbeatCount = 0;
    private heartbeatTimer = null;
    public connect( url ) {
        // let queryString=''
        // for (const key in data) {
        //     if (queryString) {
        //         queryString += '&';
        //     }
        //     queryString += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
        // }
        // this.url = `${url}?${queryString}`;
         this.url = url;
        this.isReConnect = false;
        this.reConnectCnt = 0;
        this.isForceClose = false;
        this.sendedMsgs.clear();
        this.createConnect();
    }

    public reConnect() {
        if(this.ws) {
            this.ws.close();
        }

        if(this.reConnectCnt > 5) {
            Crash_GameManager.getInstance().logout();
            return;
        }

        this.isReConnect = true;
        ++ this.reConnectCnt;
        setTimeout(() => {
            this.createConnect();
        }, 1000);
    }

    public closeConnect() {
        this.isForceClose = true;
        if(this.ws) {
            this.ws.close();
        }
    }

    private createConnect() {
        console.log("Create connect:", String(this.url));
        //data
        if(sys.isNative){
            this.ws = new WebSocket(this.url);
        }else{
            this.ws = new WebSocket(this.url);
        }
        this.ws.onopen = (ev: Event) => {
            Crash_WsManager.getInstance().onOpen(ev);
        };
        this.ws.onclose = (ev: CloseEvent) => {
            Crash_WsManager.getInstance().onClosed(ev);
        };
        this.ws.onerror = (ev: Event) => {
            Crash_WsManager.getInstance().onError(ev);
        };
        this.ws.onmessage = (ev: MessageEvent)=> {
            Crash_WsManager.getInstance().onMessage(ev);
        };

        this.wsState = WebSocketState.Connecting;
    }

    private onOpen(ev: Event) {
        this.wsState = WebSocketState.Connected;
        console.log("[onOpen]:", ev);
        if(this.isReConnect) {
            this.isReConnect = false;
            this.reConnectCnt = 0;
            this.sendedMsgs.clear();
        }
    }

    private onClosed(ev: CloseEvent) {
        this.wsState = WebSocketState.Closed;
        console.log("[onClosed]:", ev);
        if(!this.isForceClose){
            setTimeout(() => {
                this.reConnect();
            }, 1000);
        }
    }

    private onError(ev: Event) {
        console.log("[onError]:", ev);
        global.hallDispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.socketConnectDateFail, {}, { placeStr: "连接失败" }) }))
    }

    private onMessage(ev: MessageEvent) {
       // console.log("[onMessage]:", JSON.parse(ev.data));
       this.dealMessge(JSON.parse(ev.data));
    //    if(JSON.parse(ev.data).code===ProtocolCode.RES_HEART_BEAT){
    //         // this.heartbeatCount++;
    //         // this.resetHeartbeatTimer();
    //    }else{
    //     this.dealMessge(JSON.parse(ev.data));
    //    }
    }
    resetHeartbeatTimer() {
        clearTimeout(this.heartbeatTimer);
        this.heartbeatTimer = setTimeout(() => {
            if (this.heartbeatCount < 3) {
                console.log("Heartbeat check failed, closing WebSocket.");
                this.ws.close();
            } else {
                this.heartbeatCount = 0; // 重置计数器
                this.resetHeartbeatTimer(); // 重启计时器
            }
        }, 5000); // 5秒计时器
    }
    public send(protocol: WsProtocol) {
        if(this.wsState != WebSocketState.Connected) {
            return;
        }
        protocol.queueId = ++this.queueId;
        this.sendedMsgs.set(protocol.queueId, protocol);
        let tm = Crash_GameManager.getInstance().getServerTime();
        protocol.sendTm = tm;
        this.ws.send(protocol.toString());

        this.lastSendTm = tm;
    }

    private dealMessge( data: any ) {
        let code = data.code;
        let queueId = data.queueId;
        let success=data.success
        let args = null;
        // if(queueId > 0) {
        //     let protocol: WsProtocol = this.sendedMsgs.get(queueId);
        //     args = protocol.args;
        //     this.sendedMsgs.delete(queueId);
        // }
        if(data.success &&data.success===false){
            global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.CrashBottomFailed, {}, { placeStr: data.reason }) }))
        }
        Crash_NetMsgDispatcher.getInstance().doMsgCallBack(success, code, data, args);
        if(code == "NOT_AUTH"){
            this.closeConnect();
            Crash_GameManager.getInstance().logout();
        }else if(code == "NOTIFY_REPEATED_LOGIN"){
            this.closeConnect();
            Crash_GameManager.getInstance().logout();
        }
    }

    public getLastSendTm() { return this.lastSendTm; }

    private secondTm = 0;
    public update(ft) {
        // let tm = Crash_GameManager.getInstance().getServerTime();
        this.secondTm += ft;
        if(this.secondTm >= 1) {
            this.secondTm = 0;
            if(Crash_GameManager.getInstance().getIsLogin()) {
                this.sendHeartPkgReq();
                // if(this.lastSendTm > 1){
                //     this.sendHeartPkgReq();
                // }
            }
        }

        // for(let key of this.sendedMsgs.keys()) {
        //     let info = this.sendedMsgs.get(key);
        //     if(info.sendTm + 300 <= tm) {
        //         if(info.sendTm + 10000 <= tm){
        //             this.closeConnect();
        //             this.sendedMsgs.clear();
        //                 Crash_GameManager.getInstance().logout();
        //         }
        //         break;
        //     }
        // }
    }

    private sendHeartPkgReq(){
        new WsProtocol(ProtocolCode.REQ_HEART_BEAT).send();
    }
}
