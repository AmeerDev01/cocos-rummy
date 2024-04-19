import { CommandDefine } from "../Const/CommandDefine";
import { ProxyDefine } from "../Const/ProxyDefine";
import { BgMediatorConst } from "../Mediator/BgMediator";
import { RollerMediatorConst } from "../Mediator/RollerMediator";
import { SocketRepository } from "../Repositories/SocketRepository";
import config from "../GodWealth_config";
import { convertToMandK, getBgProxy, getSocketProxy } from "../GodWealth_utils";
import BaseProxy from "./BaseProxy";
import { LocalCacheDataProxy } from "./LocalCacheDataProxy";
import { log } from "cc";
import { global, lang } from "../../../../hall";
import { addToastAction } from "../../../../hall/store/actions/baseBoard";
export enum SubGameType {
    /**主滑槽游戏 */
    MAIN,
    /**开宝箱游戏 */
    SUB_GAME1,
    /**大滑槽游戏 */
    SUB_GAME2
}
export enum goldState {
    /**默认金币 || 结算金币*/
    OLD_GOLD,
    /**扣除金币 */
    PROCESS_GOLD,
    /**充值刷新金币 */
    topUpCoins
}
export enum SKT_MAG_TYPE {
    /**心跳 */
    HEART_BEAT = "1",
    /**认证 */
    AUTH = "2",
    /**排行榜 */
    JACKPOT = "8",
    /**总数 */
    JACKPOT_TOTAL = "7",
    /**退出 */
    EXIT = "3",
    /**启动 */
    LAUNCH = "501",
    /**通知刷新金币 */
    REFRESHCOINS = "10",
    /**清退房间 */
    VACATETHEROOM = "3"
}

type SktMessageType = {
    code: string,
    messageId: string,
    success: boolean,
    data?: any
}

let dataMap: Array<{
    key: SKT_MAG_TYPE,
    handlerList: Array<{
        id: string,
        sortId: number,
        handler: (data: any) => void
    }>
}> = []
/**自定义的监听器 */
export const sktMsgListener = {
    add: (key: SKT_MAG_TYPE, id: string, handler: (data: any) => void, sortId: number = 0) => {
        let item = dataMap.find(i => i.key === key)
        if (!item) {
            item = {
                key,
                handlerList: [{ id, sortId, handler }]
            }
            dataMap.push(item)
        } else {
            item.handlerList.push({ id, sortId, handler })
        }
    },
    dispath: (key: SKT_MAG_TYPE, data: any) => {
        const item = dataMap.find(i => i.key === key)
        item && item.handlerList.sort((a, b) => a.sortId - b.sortId).forEach(item => item.handler(data))
    },
    remove: (key: SKT_MAG_TYPE, id?: string) => {
        if (id) {
            let item = dataMap.find(item => item.key === key)
            item.handlerList = item.handlerList.filter(item => item.id !== id)
        } else {
            dataMap = dataMap.filter(item => item.key !== key)
        }
    },
    removeAllListener: () => {
        dataMap = []
    }
}

export class SocketProxy extends BaseProxy<SocketRepository> {
    private ws: WebSocket
    private heartBeatTimer: number
    private socketConfig: {
        socketIp: string;
        token: string;
        gameId: number;
        roomId: string;
    }
    private switcher = []
    constructor(proxyName: string = null, data: any = null) {
        super(proxyName, data)
        this.repository = new SocketRepository()
        this.socketConfig = null
    }

    public async initSocket(cbFn: () => void, err: (e) => void) {
        try {
            this.socketConfig = await this.repository.socketConfig()
            if (this.ws && WebSocket.OPEN == this.ws.readyState) {
                this.ws.close()
                this.ws = null
            }

            this.ws = new WebSocket(this.socketConfig.socketIp)
            /**当连接建立成功后，这个函数就会被调用 */
            this.ws.onopen = (event) => {
                console.log("WebSocket connected")
                this.connectCallback()
                cbFn && cbFn()
                //this.sendSktMessage(SKT_MAG_TYPE.JACKPOT_TOTAL, undefined)
                this.heartBeatTimer = window.setInterval(() => {
                    this.sendSktMessage(SKT_MAG_TYPE.HEART_BEAT, undefined)
                    //this.sendSktMessage(SKT_MAG_TYPE.JACKPOT_TOTAL, undefined)
                }, 5000)
                // this.sendNotification(CommandDefine.START_UP);
            }
            this.ws.onerror = (event) => {
                err && err(event)
            }
            this.ws.onmessage = (ev: MessageEvent<any>) => {
                this.onmessage(ev)
            }
            this.ws.onclose = () => {
                //重连
                window.clearInterval(this.heartBeatTimer)
                this.ws = new WebSocket(this.socketConfig.socketIp)
                console.log("exit and reconnect")
            }
        } catch (e) {
            this.sendNotification(BgMediatorConst.SHOW_TOAST, { content: `网络错误：${e}` })
        }
    }

    public onmessage(ev: MessageEvent<any> | SktMessageType) {
        const evData = JSON.parse(ev.data) as SktMessageType
        // evData.code !== `${config.gameCode}:-${SKT_MAG_TYPE.HEART_BEAT}` && console.log(evData)
        const msgArr = evData.code.split(":-")
        if (evData.success) {
            if (msgArr[0] !== config.gameCode) {
                this.sendNotification(BgMediatorConst.SHOW_TOAST, { content: "错误的游戏代码" })
                console.error('服务错误', '错误的游戏代码')
                return
            }
            const typeCode = msgArr[1]//(parseInt(msgArr[1]) * -1) + ''
            sktMsgListener.dispath(typeCode as SKT_MAG_TYPE, evData.data)
        } else {
            global.hallDispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.socketConnectDateFail, {}, { placeStr: "连接失败" }) }))
            if (evData['code'].includes('-2')) {
                global.closeSubGame({ confirmContent: evData['reason'] })
            }
            console.error(`服务错误`, evData)
        }
    }

    public sendSktMessage(msgType: SKT_MAG_TYPE, data: string | ArrayBuffer | Blob | ArrayBufferView | any) {
        this.ws && this.ws.send(JSON.stringify({
            code: `${config.gameCode}:${msgType}`, data
        }))
    }
    public closeSocket() {
        if (this.ws) {
            this.ws.close()
            this.ws = null
        }
    }
    public sendAnth() {
        this.sendSktMessage(SKT_MAG_TYPE.AUTH,
            {
                "token": this.socketConfig.token,
                "gameId": this.socketConfig.gameId,
                "roomId": this.socketConfig.roomId
            }

        )
    }

    public calculateTheBalanceStatus() {
        let gold = this.repository.rollerLaunchResult.dl.si[0].bl
        let betAmount = (this.getShiftAmount("curr").value) * config.linesQueue.length
        this.sendNotification(BgMediatorConst.InsufficientBalanceDisplay, { bl: gold < betAmount });
        return gold < betAmount
    }
    /**发送下注请求 */
    public sendLaunch() {
        // socket断开的时候临时这样搞
        // window.setTimeout(() => {
        //   sktMsgListener.dispath(SKT_MAG_TYPE.LAUNCH, this.repository.rollerLaunchResult)
        // }, 100)
        // return
        let bl = this.calculateTheBalanceStatus()
        if (bl) {
            global.openShop()
        } else {
            this.sendSktMessage(SKT_MAG_TYPE.LAUNCH, {
                "positionId": this.getShiftAmount("curr").positionId,
                "tableId": this.repository.userServerData.tableId
            })
        }
    }
    /**获取下一档位数据(根据用户级别取得可以下注的额度列表),传max就是获取最大档位 */
    public getShiftAmount(direction: 'add' | 'subtract' | "max" | "curr") {
        //先获取用户
        if (direction === "add" && this.repository.userSwitch < this.switcher.length) {
            this.repository.userSwitch++
        } else if (direction === "add" && this.repository.userSwitch === this.switcher.length) {
            //this.repository.userSwitch = 1
        }

        if (direction === "subtract" && this.repository.userSwitch > 1) {
            this.repository.userSwitch--
        } else if (direction === "subtract" && this.repository.userSwitch === 1) {
            //this.repository.userSwitch = switcher.length
        }
        if (this.repository.userSwitch != 1 && this.repository.userSwitch !== this.switcher.length) {
            this.sendNotification(BgMediatorConst.SETGREYOUT, { state: 0 });
        } else if (this.repository.userSwitch - 1 <= 1) {
            this.sendNotification(BgMediatorConst.SETGREYOUT, { state: 1 });
        } else {
            this.sendNotification(BgMediatorConst.SETGREYOUT, { state: 2 });
        }
        if (direction === "max") {
            this.repository.userSwitch = this.switcher.length
        }
        if (this.repository.userSwitch < 6) {
           window.setTimeout(()=>{
            let val = this.switcher[this.repository.userSwitch - 1].value
            this.sendNotification(RollerMediatorConst.UPDATE_JACKPOT_TOTAL, { total: val * config.winning[3].maxRate })
           },1000)
        }
        return this.switcher[this.repository.userSwitch - 1]
    }
    public initUserSwitch(val) {
        this.repository.userSwitch = val - 1 < 1 ? 1 : val
        this.switcher = []
        config.betSwitcher.map(item => {
            if (this.repository.userServerData.lv >= item.level[0]) {
                this.switcher.push(...item.amount)
            }
        })
        if (this.repository.userSwitch <= 1) {
            window.setTimeout(() => {
                this.sendNotification(BgMediatorConst.SETGREYOUT, { state: 1 });
            }, 200)
        } else if (this.repository.userSwitch == this.switcher.length) {
            window.setTimeout(() => {
                this.sendNotification(BgMediatorConst.SETGREYOUT, { state: 2 });
            }, 200)
        }
        window.setTimeout(()=>{
            let val = this.switcher[this.repository.userSwitch - 1].value
            this.sendNotification(RollerMediatorConst.UPDATE_JACKPOT_TOTAL, { total: val * config.winning[3].maxRate })
        },200)
    }
    /**获取转义的游戏数据 */
    public getTransferGameInfo() {
        return {
            // 获取停止的序号
            stopIndexArr: () => {
                // return this.repository.rollerLaunchResult.dl.si[0].rl.map(item => item[0])
                return this.repository.rollerLaunchResult.dl.si[0].rollerId
            },
            /**获取需要闪动的图标列表，转成平铺数组，不闪动的加-1 */
            targetList: () => {
                let _linesDir = this.repository.rollerLaunchResult.dl.si[0].wp
                const freegameDir = this.repository.rollerLaunchResult.dl.si[0].freegame || {}
                const linesDir = {
                    ..._linesDir,
                    ...freegameDir
                }
                const lineList: Array<{ lineIndex: string, coord: Array<Array<any>> }> = []
                for (let lineIndex in linesDir) {
                    const lines: number[][] = linesDir[lineIndex]
                    /**
                     [[0,1],[0,2],[1,1],[2,2]]
                     */
                    const coord = [[0, []], [1, []], [2, []], [3, []], [4, []]]
                    coord.forEach((item2, index2) => {
                        const t = lines.filter((item3) => item3[0] === index2).map(i => i[1]);
                        // const t = lines.find((item3) => item3[0] === index2)
                        t.length && (item2[1] = t)
                    })
                    lineList.push({ lineIndex, coord })
                }
                return lineList
            },
            /**获取需要停靠的图标 */
            getDockIcon: () => {
                let lineList: { lineIndex: string, coord: Array<Array<any>> }
                const lines: number[][] = this.repository.rollerLaunchResult.dl.si[0].fixedChessboardIcon || []
                /**
                 [[0,1],[0,2],[1,1],[2,2]]
                 */
                const coord = [[0, []], [1, []], [2, []], [3, []], [4, []]]
                coord.forEach((item2, index2) => {
                    const t = lines.filter((line) => line[0] === index2).map(i => [i[1], i[2]]);
                    // const t = lines.find((item3) => item3[0] === index2)
                    t.length && (item2[1] = t)
                })
                return coord
            },
            /**获取gameType */
            gameType: () => {
                if (!this.repository.rollerLaunchResult) {
                    return SubGameType.MAIN
                }
                return this.repository.rollerLaunchResult.dl.si[0].gameType as SubGameType
            },
            getIconStay: () => {
                return this.repository.rollerLaunchResult.dl.si[0].iconStay
            },
            setIconStay(key) {
                this.repository.rollerLaunchResult.dl.si[0].iconStay = key
            },
            /**获取要执行的宝箱效果 */
            getOpenBoxEffect: () => {
                return this.repository.rollerLaunchResult.dl.si[0].lw
            },
            /**获取剩余抽奖次数 */
            getRemainTimes: () => {
                return this.repository.rollerLaunchResult.dl.si[0].freeCount
            },
            /**获取当前的总奖励 */
            getCurrentScore: (order: 'curr' | 'total' | 'auto') => {
                const fbg = getBgProxy()
                // if (order === 'curr') {
                //     return this.repository.rollerLaunchResult.dl.si[0].tw
                // } else if (order === "total") {
                //     return this.repository.rollerLaunchResult.dl.si[0].freeGameAmount
                // }
                if (this.repository.rollerLaunchResult.dl.si[0].tbb != 0) {
                    return this.repository.rollerLaunchResult.dl.si[0].tw
                } else {
                    if (order === 'curr') {
                        return this.repository.rollerLaunchResult.dl.si[0].tw || this.repository.rollerLaunchResult.dl.si[0].freeGameAmount
                    } else {
                        return this.repository.rollerLaunchResult.dl.si[0].freeGameAmount
                    }
                }
            },
            /**获取奖励倍数 */
            getMagnification: () => {
                return this.repository.rollerLaunchResult.dl.si[0].magnification
            },
            /**获取用户级别 */
            getUserLevel: () => {
                return this.repository.userServerData.lv
            },
            /* 获取第几局*/
            getNumberOfRounds: () => {
                return this.repository.rollerLaunchResult.dl.si[0].freeCount
            },
            getUserGold: (state: goldState) => {
                if (state === goldState.OLD_GOLD) {
                    return this.repository.rollerLaunchResult.dl.si[0].bl
                } else if (state === goldState.PROCESS_GOLD) {
                    return this.repository.rollerLaunchResult.dl.si[0].blab
                } else if (state === goldState.topUpCoins) {
                    return this.repository.rollerLaunchResult.dl.si[0].bl
                }
            }
        }
    }

    public setGametType(gameType: number) {
        this.repository.rollerLaunchResult.dl.si[0].gameType = gameType
    }

    public close() {
        this.ws.close()
    }

    getLocalCacheDataProxy(): LocalCacheDataProxy {
        return <LocalCacheDataProxy>this.facade.retrieveProxy(ProxyDefine.LOCAL_CACHE_DATA);
    }

    private connectCallback() {
        sktMsgListener.add(SKT_MAG_TYPE.AUTH, 'proxy', (data) => {
            this.repository.userServerData = Object.assign({}, data)
            this.setGametType(data.gameType)
            if (data.gameType === SubGameType.MAIN) {
                //主游戏
                this.sendNotification(CommandDefine.ROLLER, { gameType: 0 }, RollerMediatorConst.INIT_ROLLER_PANEL)
            } else if (data.gameType === SubGameType.SUB_GAME1) {
                // 次数游戏
                this.sendNotification(CommandDefine.ROLLER, { gameType: 1 }, RollerMediatorConst.INIT_ROLLER_PANEL)
            } else if (data.gameType === SubGameType.SUB_GAME2) {
                //大滑槽
                this.sendNotification(CommandDefine.ROLLER, { gameType: 2 }, RollerMediatorConst.INIT_ROLLER_PANEL)
            }
            this.initGameData(data)
        })
        sktMsgListener.add(SKT_MAG_TYPE.LAUNCH, 'proxy', (data) => {
            this.repository.rollerLaunchResult = Object.assign({}, data)
            this.sendNotification(BgMediatorConst.UPDATE_USER_GOLD, { state: goldState.PROCESS_GOLD })
            if (this.getTransferGameInfo().gameType() === 0) {
                // 按钮状态
                this.sendNotification(BgMediatorConst.TOGGLETHESTARTBUTTON, { state: false, type: 0 });
                this.sendNotification(BgMediatorConst.INITSCORE)
            }
            this.sendNotification(BgMediatorConst.UPDATE_BTN_LABEL, { frequency: false })
            this.setGameInfo()
        }, 1)
        sktMsgListener.add(SKT_MAG_TYPE.JACKPOT, 'proxy', (data) => {
            this.setJackPot(data)
        }, 1)
        sktMsgListener.add(SKT_MAG_TYPE.JACKPOT_TOTAL, 'proxy', (data) => {
            if (this.repository.userSwitch > 5) {
                this.sendNotification(RollerMediatorConst.UPDATE_JACKPOT_TOTAL, { total: data })
            }
        }, 1)
        // 后台刷新金币
        sktMsgListener.add(SKT_MAG_TYPE.REFRESHCOINS, 'proxy', (data) => {
            this.repository.rollerLaunchResult.dl.si[0].bl = data
            this.sendNotification(BgMediatorConst.UPDATE_USER_GOLD, { state: goldState.topUpCoins })
        }, 1)
        // 清退用户
        sktMsgListener.add(SKT_MAG_TYPE.VACATETHEROOM, 'proxy', (data) => {
            global.closeSubGame({ confirmContent: lang.write(k => k.UpdateModule.GameNotice, {}, { placeStr: "对不起，系统维护中，请稍后再尝试登录" }) })
        }, 1)
    }
    public setJackPot(data) {
        this.sendNotification(BgMediatorConst.UPDATE_JACKPOT, { jackPotData: data })
    }
    public setGameInfo() {
        const gameTypePre = this.getTransferGameInfo().gameType();
        //更新数据[
        const gameTypeNew = this.getTransferGameInfo().gameType();
        getBgProxy().setIsChangeNextGameType(gameTypePre, gameTypeNew)
        this.sendNotification(BgMediatorConst.UPDATE_GAME_STATUS)
    }
    public initGameData(data) {
        this.repository.rollerLaunchResult.dl.si[0].freeCount = data.freeGameCount
        Object.assign(this.repository.rollerLaunchResult.dl.si[0], data)
        this.sendNotification(BgMediatorConst.UPDATE_USER_GOLD, { state: goldState.OLD_GOLD })
        this.setGameInfo()
        if (data.gameType === 0) {
            this.sendNotification(BgMediatorConst.TOGGLETHESTARTBUTTON, { state: true, type: 0 });
        } else if (data.gameType === 1) {
            this.sendNotification(BgMediatorConst.TOGGLETHESTARTBUTTON, { state: true })
            this.sendNotification(BgMediatorConst.UPDATE_BTN_LABEL, { frequency: this.getTransferGameInfo().getNumberOfRounds() })
        }
        else if (data.gameType === 2) {
            this.sendNotification(BgMediatorConst.TOGGLETHESTARTBUTTON, { state: true })
            this.sendNotification(RollerMediatorConst.INITDOCKIOCN, { dockIocn: getSocketProxy().getTransferGameInfo().getDockIcon() })
            this.sendNotification(BgMediatorConst.UPDATE_BTN_LABEL, { frequency: this.getTransferGameInfo().getNumberOfRounds() })
            this.sendNotification(RollerMediatorConst.REMOVE_THECHEST_LAYER, { iconStay: 1 })
        }
    }
}
