import Crash_Singleton from "./Crash_Singleton";

class MessageCallBack {
    code: string = null;
    callBacks: Array<{obj: Object, callBack: (bl: boolean, data: any, ...args: any)=> void}> = [];

    doCallBack(bl: boolean, data: any, args) {
        for(let i = 0; i < this.callBacks.length; ++i ) {
            let info = this.callBacks[i];
            if(info.obj) {
                info.callBack.call(info.obj, bl, data, args);
            }
        }
    }

    removeCallBackByObj( obj: Object ) {
        for(let i = 0; i < this.callBacks.length; ++i ) {
            if(this.callBacks[i].obj === obj) {
                this.callBacks.splice(i, 1);
                break;
            }
        }
    }
}

export default class Crash_NetMsgDispatcher {
    private static instance: Crash_NetMsgDispatcher = null;
    public static getInstance() {
        if(this.instance == null) {
            this.instance = new Crash_NetMsgDispatcher();
        }
        return this.instance;
    }

    private msgCallBacks: Array<MessageCallBack> = [];
    // // private static instance: NetMsgDispatcher = null;
    // private instance:NetMsgDispatcher
    // static getInstance() {
    //     if(!this.instance) {
    //         this.instance = new NetMsgDispatcher();
    //     }
    //     return this.instance;
    // }
    // static  msgCallBacks: Array<MessageCallBack> = [];
    // constructor() {
    //     super()
    //     NetMsgDispatcher.msgCallBacks=[]
    // }


    public regCallBack( code: string, obj: Object, callBack: (bl: boolean, data: any, ...args: any)=> void) {
        let msg: MessageCallBack = this.getMsgCallBackByCode(code);
        if(!msg) {
            msg = new MessageCallBack();
            msg.code = code;
            this.msgCallBacks.push(msg);
        }
        msg.callBacks.push({
            obj: obj,
            callBack: callBack
        });
    }

    public removeCallBack( code: string, obj: Object ) {
        let msg: MessageCallBack = this.getMsgCallBackByCode(code);
        if(!msg) {
            return;
        }

        msg.removeCallBackByObj(obj);
    }

    public removeAllProtocolByObj( obj: Object ) {
        for(let i = 0; i < this.msgCallBacks.length; ++i) {
            this.msgCallBacks[i].removeCallBackByObj(obj);
            // Mark: remove MessageCallBack
        }
    }


    private getMsgCallBackByCode( code: string ): MessageCallBack {
        return this.msgCallBacks.find((item)=>{
            return item.code === code;
        });
    }

    public doMsgCallBack(bl: boolean, code: string, data: any, args: any) {
        let callBackInfo = this.getMsgCallBackByCode(code);
        if(callBackInfo) {
            callBackInfo.doCallBack(bl, data, args);
        }
    }

}
