import { Crash_GameConfig } from "../config/Crash_GameConfig";
import Crash_NetMsgDispatcher from "./Crash_NetMsgDispatcher";
import { HttpProtocol } from "./protocol/HttpProtocol";


export default class Crash_HttpManager {

    private static instance: Crash_HttpManager = null;

    private baseUrl = Crash_GameConfig.HttpUrl;


    private isEncrypt: boolean = false;

    public static getInstance() {
        if(this.instance == null) {
            this.instance = new Crash_HttpManager();
        }

        return this.instance;
    }

    public send( protocol: HttpProtocol,  args ) {
        let timeOut = Crash_GameConfig.TimeOut || 25000;
        this.httpSend(protocol, timeOut, args);
    }

    private httpSend( protocol: HttpProtocol,  timeOut: number, args ) {
        let url = this.baseUrl + protocol.url;
        let xhr = new XMLHttpRequest();
       // let token: string = DataManager.getInstance().getUserInfo().getToken() || "";
        let token=''
        xhr.timeout = timeOut;
        xhr.onreadystatechange =  ()=> {
            if (xhr.readyState === 4) {
                let response = xhr.responseText;
                if (xhr.status == 200) {
                    let data = JSON.parse(response);

                    if(this.isEncrypt) {
                        // data = decrypt(data);
                    }
                    this.onResponse(protocol, true, data, args);
                }
                else if( xhr.status == 0 ) {
                    this.onResponse(protocol, false, {
                        rtnCode: 500,
                        msg: "The server cannot connect!",
                    }, args);
                }
                else {
                    this.onResponse(protocol, false, {
                        rtnCode: 500,
                        msg: '2',
                    }, args);
                }
            }
        };

        if(protocol.method == "GET"){
            url += protocol.toString();
            xhr.open("GET", url, true);
            xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            xhr.setRequestHeader("token", token);
            xhr.send();
            console.log("[Http][GET]" + url)
        }

        if(protocol.method == "POST"){
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("token", token);
            if(this.isEncrypt) {
                // xhr.send(encrypt(protocol.toString()));
            }else{
                xhr.send(protocol.toString());
            }
            console.log("[Http][POST]" + url + "  DATA = " + protocol.toString());
        }


        xhr.timeout = timeOut;
    }

    private onResponse( protocol: HttpProtocol, bl: boolean, data: any, args ) {
        console.log(data);
        Crash_NetMsgDispatcher.getInstance().doMsgCallBack(bl, protocol.code, data, args);
    }

}
