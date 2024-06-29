import { _decorator, Component, Node, sys, Tween, tween } from 'cc';

import { GameConfigZCH } from '../config/GameConfigZCH';

import { BaseEventZCH } from './BaseEventZCH';



import { EVEVT_TYPE, MessageBody, SKT_OPERATION, WebSocketDriver } from '../../../../../script/common/WebSocketStarter';
import { BaseGameDataMgeZCH } from './BaseGameDataMgeZCH';
import { BaseLoadResZCH } from './BaseLoadResZCH';
import { BaseSoundMgeZCH } from './BaseSoundMgeZCH';

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

@ccclass('BaseSocketZCH')
export class BaseSocketZCH {
    private static _BaseSocketZCH: BaseSocketZCH = null;
    public static get Instance(): BaseSocketZCH {
        if (!BaseSocketZCH._BaseSocketZCH) {
            BaseSocketZCH._BaseSocketZCH = new BaseSocketZCH();
        }
        return BaseSocketZCH._BaseSocketZCH;
    }
    ws_driver: WebSocketDriver<MSG_TYPE> = null;
    /**登录时服务器返回的tableid */
    tableId: string = "";
    /**玩家id */
    playerID: number = 0;
    /**超时时间秒 */
    times: number = 5;
    /**游戏初始化 */
    gameInitWS() {

        let gameid = GameConfigZCH.gameInitData.gameID;
        let gameHost: any = GameConfigZCH.gameInitData.gameHost;
        window.HALL_GLOBAL.wsInstance.initSocket().then(() => {
            // game.on(Game.EVENT_HIDE, () => {//游戏切入后台
            //     WebSocketStarter.Instance().ws.close();
            // })
            // game.on(Game.EVENT_SHOW, () => {//游戏进入
            //     WebSocketStarter.Instance().reConnect();
            // })
            this.ws_driver = new WebSocketDriver<MSG_TYPE>(gameid, gameHost);
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
                        console.error(data.reason, "##################")

                    }
                    if (data.data) {
                        window.HALL_GLOBAL.closeSubGame({ confirmContent: data.reason });
                    } else {
                        window.HALL_GLOBAL.closeSubGame({ confirmContent: window.HALL_GLOBAL.lang.write(k => k.WebSocketModule.SocketDataError, {}, { placeStr: "服务数据错误" }) })
                    }
                    Tween.stopAllByTarget(this);
                    BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.touchStop);
                    // BaseEventZCH.Instance.release();
                    // BaseSoundMgeZCH.Instance.release();
                    this.ws_driver.logoutGame(MSG_TYPE.LOGOUT);
                    return {
                        data: '', error
                    }
                }
            }
        })
        window.HALL_GLOBAL.wsInstance.eventListener.add(EVEVT_TYPE.DISCONNECT, GameConfigZCH.gameInitData.bundleName, () => {

        });
    }
    /**登录 */
    gameLogin() {
        const msgObj = this.ws_driver.loginGame(MSG_TYPE.LOGIN);

        // //超时
        msgObj.bindTimeoutHandler(() => {
            this.exitGameRelease();
            window.HALL_GLOBAL.closeSubGame({ confirmContent: window.HALL_GLOBAL.lang.write(k => k.WebSocketModule.SocketMsgTimeOut, {}, { placeStr: "对不起，网络超时" }) })
            return false;
        })
    }
    onLogin(data) {
        if (data && data.data && data.data.tableId) {
            this.tableId = data.data.tableId;
            this.playerID = data.data.memberId;
            BaseGameDataMgeZCH.Instance.initGame(data.data);
            GameConfigZCH.gameInitData.isInitWs = true;
            BaseEventZCH.Instance.emit(GameConfigZCH.publicEventName.gameWSLogin);
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
        if (data.operation == SKT_OPERATION.LOGIN) {
            this.onLogin(data.data);
        } else if (data.sktCode == MSG_TYPE.LAUNCHER_BET) {
            BaseGameDataMgeZCH.Instance.setGameRollData(data.data.data.dl.si[0]);
            Tween.stopAllByTarget(this);
        } else if (data.sktCode == MSG_TYPE.BALANCE_UPDATE) {
            BaseGameDataMgeZCH.Instance.setMyGold({ gold: data.data.data });
        } else if (data.sktCode == MSG_TYPE.VACATETHEROOM) {
            window.HALL_GLOBAL.closeSubGame({ confirmContent: window.HALL_GLOBAL.lang.write(k => k.UpdateModule.GameNotice, {}, { placeStr: "对不起，系统维护中，请稍后再尝试登录" }) })
        }

    }
    a = 1;
    /**发送数据 */
    sendMsg(data: any) {
        // tween(this).delay(0.1).call(() => {
        //     BaseGameDataMgeZCH.Instance.setGameRollData(data);

        //     // if (BaseGameDataMgeZCH.Instance["test" + this.a])
        //     //     BaseGameDataMgeZCH.Instance["test" + this.a]();
        //     // this.a++;
        // }).start();
        // return 
        if (this.ws_driver) {
            data.tableId = this.tableId;
            data.gameId = GameConfigZCH.gameInitData.gameID;
            data.memberId = this.playerID;
            this.ws_driver.sendSktMessage(MSG_TYPE.LAUNCHER_BET, data);
            this.timeoutHandle();
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
        // BaseLoadResZCH.Instance.release();
        // BaseEventZCH.Instance.release();
        // BaseGameDataMgeZCH.Instance.release();
        // BaseSoundMgeZCH.Instance.release();
        // BaseSocketZCH.Instance.release();
    }
    /**销毁 */
    release() {
        this.ws_driver = null;
        BaseSocketZCH._BaseSocketZCH = null;
    }
}
