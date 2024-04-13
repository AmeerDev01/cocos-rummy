import Crash_HttpManager from "../Crash_HttpManager";
import { ProtocolCode } from "./ProtocolDef";


export class HttpProtocol {
    code: any = 0;
    method: string = "";
    url: string = "";

    toString(): string {
        if(this.method == "GET") {
            let keys = [];
            Object.keys(this).forEach( key => {
                if( key != "code" && key != "method" && key != "url") {
                    keys.push(key);
                }
            })
            let ret = "";
            if(keys.length > 0) {
                ret += "?"
            }
            for(let i = 0; i < keys.length; ++i) {
                let key = keys[i];
                ret += key + "=" + encodeURIComponent(this[key]);
                if(i < keys.length - 1) {
                    ret += "&";
                }
            }
            return ret;
        }

        if(this.method == "POST") {
            let keys = [];
            Object.keys(this).forEach( key => {
                if( key != "code" && key != "method" && key != "url") {
                    keys.push(key);
                }
            })
            let ret = "";
            if(keys.length > 0) {
                let obj = {};
                for(let i = 0; i < keys.length; ++i) {
                    obj[keys[i]] = this[keys[i]];
                }

                return JSON.stringify(obj);
            }
            return ret;
        }
        return "";
    }

    send( ...args ) {
        Crash_HttpManager.getInstance().send(this, args);
    }
}




export class UserLoginProtocol extends HttpProtocol {
    constructor() {
        super();
        this.code = ProtocolCode.NATIVE_USER_LOGIN;
        this.method = "GET";
        this.url = "api/game/wsList";
    }
}
