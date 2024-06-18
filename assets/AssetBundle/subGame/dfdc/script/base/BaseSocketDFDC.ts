import { _decorator, Tween, tween } from 'cc';

import { GameConfigDFDC } from '../config/GameConfigDFDC';

import { BaseEventDFDC } from './BaseEventDFDC';


import { BaseGameDataMgeDFDC } from './BaseGameDataMgeDFDC';
import { BaseLoadResDFDC } from './BaseLoadResDFDC';
import { BaseSoundMgeDFDC } from './BaseSoundMgeDFDC';
import { WebSocketDriver, MessageBody, SKT_OPERATION } from '../../../../../script/common/WebSocketStarter';



const { ccclass, property } = _decorator;
export enum MSG_TYPE {
    /** 登录 */
    LOGIN = "1",
    /** 启动下注 */
    LAUNCHER_BET = "2",
    /** 登出 */
    LOGOUT = "3",
    /** Jackpot */
    JACKPOT = "7",
    /** 更新金币 */
    BALANCE_UPDATE = "10",
    /** 清退房间 */
    VACATETHEROOM = "4"
}

@ccclass('BaseSocketDFDC')
export class BaseSocketDFDC {
    private static _BaseSocketDFDC: BaseSocketDFDC = null;
    public static get Instance(): BaseSocketDFDC {
        if (!BaseSocketDFDC._BaseSocketDFDC) {
            BaseSocketDFDC._BaseSocketDFDC = new BaseSocketDFDC();
        }
        return BaseSocketDFDC._BaseSocketDFDC;
    }
    ws_driver: WebSocketDriver<MSG_TYPE> = null;
    /**登录时服务器返回的tableid */
    tableId: string = "";
    /**玩家id */
    playerID: number = 0;
    /**超时时间秒 */
    times: number = 5;
    /**登录超时 */
    logintime: boolean = false;
    /**游戏初始化 */
    gameInitWS() {
        GameConfigDFDC.gameInitData.isInitWs = false;
        let gameid = GameConfigDFDC.gameInitData.gameID;
        let gameHost: any = GameConfigDFDC.gameInitData.gameHost;
        console.error("初始化网络组件", gameid, gameHost)
        window.HALL_GLOBAL.wsInstance.initSocket().then(() => {
            // game.on(Game.EVENT_HIDE, () => {//游戏切入后台
            //     WebSocketStarter.Instance().ws.close();
            // })
            // game.on(Game.EVENT_SHOW, () => {//游戏进入
            //     WebSocketStarter.Instance().reConnect();
            // })
            this.ws_driver = new WebSocketDriver<MSG_TYPE>(gameid, gameHost);
            console.error("WebSocketDriver-----")
            this.gameLogin();
            this.ws_driver.filterData = (data, source) => {

                if (data.success) {
                    this.onWS_reply(source);
                    return {
                        data: data.data,
                        error: undefined
                    }
                } else {
                    if (source && source.operation == "RECOVER") {
                        this.gameLogin();
                        return;
                    }
                    let error = ''
                    if (data.success === undefined) {
                        //数据格式错误
                        error = 'data format error'
                        console.error('data format error################', data)
                    } else {
                        error = data.reason || 'error'
                        console.error(data.reason, "##################", data, source)
                    }
                    if (data.data) {
                        window.HALL_GLOBAL.closeSubGame({ confirmContent: data.reason });
                    } else {
                        window.HALL_GLOBAL.closeSubGame({ confirmContent: window.HALL_GLOBAL.lang.write(k => k.WebSocketModule.SocketDataError, {}, { placeStr: "服务数据错误" }) })
                    }
                    Tween.stopAllByTarget(this);
                    BaseEventDFDC.Instance.emit(GameConfigDFDC.gameEventName.touchStop);
                    BaseEventDFDC.Instance.release();
                    BaseSoundMgeDFDC.Instance.release();
                    this.ws_driver.logoutGame(MSG_TYPE.LOGOUT);
                    this.release();
                    return {
                        data: '', error
                    }
                }
            }
        })
    }
    /**登录 */
    gameLogin() {
        this.logintime = false;
        const msgObj = this.ws_driver.loginGame(MSG_TYPE.LOGIN);
        console.error("发送登录---", msgObj)
        /**登录绑定 */
        // msgObj.bindReceiveHandler((message) => {
        //     console.error("登录---返回", message)
        //     if (message && message.data && message.data.data && message.data.data.tableId) {
        //         this.tableId = message.data.data.tableId;
        //         this.playerID = message.data.data.memberId;
        //         BaseGameDataMgeDFDC.Instance.initGame(message.data.data);
        //         GameConfigDFDC.gameInitData.isInitWs = true;
        //         BaseEventDFDC.Instance.emit(GameConfigDFDC.publicEventName.gameWSLogin);
        //     } else {
        //         if (this.ws_driver) {
        //             this.ws_driver.logoutGame(MSG_TYPE.LOGOUT);
        //         }
        //         this.exitGameRelease();
        //         if (!message.data.success) {
        //             window.HALL_GLOBAL.closeSubGame({ confirmContent: message.data.reason })
        //         } else {
        //             window.HALL_GLOBAL.closeSubGame();
        //         }
        //     }
        // })
        // //超时
        msgObj.bindTimeoutHandler(() => {
            this.exitGameRelease();
            this.logintime = true;
            window.HALL_GLOBAL.closeSubGame({ confirmContent: window.HALL_GLOBAL.lang.write(k => k.WebSocketModule.SocketMsgTimeOut, {}, { placeStr: "对不起，网络超时" }) })
            return false;
        })
    }
    onLogin(data) {
        if (data && data.data && data.data.tableId) {
            if (this.logintime) {
                return;
            }
            this.tableId = data.data.tableId;
            this.playerID = data.data.memberId;
            BaseGameDataMgeDFDC.Instance.initGame(data.data);
            GameConfigDFDC.gameInitData.isInitWs = true;
            BaseEventDFDC.Instance.emit(GameConfigDFDC.publicEventName.gameWSLogin);
        } else {
            this.exitGameRelease();
            if (!data.success) {
                window.HALL_GLOBAL.closeSubGame({ confirmContent: data.reason });
            } else {
                window.HALL_GLOBAL.closeSubGame();
            }
        }
    }
    /**网络消息回复 */
    onWS_reply(data: MessageBody) {
        console.error("网络消息回复", data)
        if (data.operation == SKT_OPERATION.LOGIN) {
            this.onLogin(data.data);
        } else if (data.sktCode == MSG_TYPE.LAUNCHER_BET) {
            BaseGameDataMgeDFDC.Instance.setGameRollData(data.data.data.dl.si[0]);
            Tween.stopAllByTarget(this);
        } else if (data.sktCode == MSG_TYPE.BALANCE_UPDATE) {
            BaseGameDataMgeDFDC.Instance.setMyGold(data);
        } else if (data.sktCode == MSG_TYPE.VACATETHEROOM) {
            window.HALL_GLOBAL.closeSubGame({ confirmContent: window.HALL_GLOBAL.lang.write(k => k.UpdateModule.GameNotice, {}, { placeStr: "对不起，系统维护中，请稍后再尝试登录" }) })
        }
        // 
    }
    /**发送数据 */
    sendMsg(data: any) {
        // tween(this).delay(0.1).call(() => {
        //     BaseGameDataMgeDFDC.Instance.test();

        // }).start();
        // return
        if (this.ws_driver) {
            data.tableId = this.tableId;
            data.gameId = GameConfigDFDC.gameInitData.gameID;
            data.memberId = this.playerID;
            console.error("发送数据", data)
            this.ws_driver.sendSktMessage(MSG_TYPE.LAUNCHER_BET, data);
            this.timeoutHandle();
            // msgObj.bindTimeoutHandler(() => {
            //     window.HALL_GLOBAL.closeSubGame({ confirmContent: window.HALL_GLOBAL.lang.write(k => k.WebSocketModule.SocketMsgTimeOut, {}, { placeStr: "数据超时---" }) })
            //     return false
            // })
        }
    }
    /** 超时处理*/
    timeoutHandle() {
        tween(this).delay(this.times).call(() => {
            this.exitGameRelease();
            window.HALL_GLOBAL.closeSubGame({ confirmContent: window.HALL_GLOBAL.lang.write(k => k.WebSocketModule.SocketMsgTimeOut, {}, { placeStr: "数据超时---" }) })
        }).start();
    }
    /**退出游戏 */
    exitGame() {
        if (this.ws_driver) {
            this.ws_driver.logoutGame(MSG_TYPE.LOGOUT);
        }
        window.HALL_GLOBAL.closeSubGame();
    }
    /**退出游戏 */
    exitGameRelease() {
        if (this.ws_driver) {
            this.ws_driver.logoutGame(MSG_TYPE.LOGOUT);
        }
        BaseLoadResDFDC.Instance.release();
        BaseEventDFDC.Instance.release();
        BaseGameDataMgeDFDC.Instance.release();
        BaseSoundMgeDFDC.Instance.release();
        BaseSocketDFDC.Instance.release();
    }
    /**销毁 */
    release() {
        this.ws_driver = null;
        BaseSocketDFDC._BaseSocketDFDC = null;
    }
}


