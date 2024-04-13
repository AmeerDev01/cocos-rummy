import { listenerFactoy } from "../../common/listenerFactoy"
import { initConfig, subGameList } from "../../hall/config"
import config from "./config"
import { ToastType, addToastAction, setLoadingAction } from "../../hall/store/actions/baseBoard"
import store, { getStore } from "./store"
import { global, lang } from "../../hall"
import WebSocketStarter, { SKT_OPERATION, WebSocketDriver } from "../../common/WebSocketStarter"

export enum SKT_MAG_TYPE {
    /**心跳 */
    LOGIN= "CRASH:1",
    EXIT= "CRASH:-1",
    /** WEBSOCKET */
    REQ_USER_INFORMATION= 'CRASH:2',
    RES_USER_INFORMATION= 'CRASH:-2',

    // 玩家下注请求
    REQ_PLAYER_WAGERING= 'CRASH:802',
    //玩家下注返回
    RES_PLAYER_WAGERING= 'CRASH:-802',

    // 进入房间返回
    RES_ROOM_RETURN= 'CRASH:-4',

    //游戏开奖返回
    RES_LOTTERY_RETURN= 'CRASH:-805',

    //游戏结算返回
    RES_SETTLEMENT_RETURN= 'CRASH:-804',

    //查看房间开奖记录请求
    REQ_ROOM_DRAWING_RECORDS= 'CRASH:8013',

    //查看房间开奖记录返回
    RES_ROOM_DRAWING_RECORDS= 'CRASH:-8013',
    // 玩家总下注
    RES_ROOM_TOTAL_BETS= 'CRASH:-8102',
    // 时间同步
    RES_TIME_SYNCHRONIZATION= 'CRASH:-8101',
    // 下注列表
    LIST_OF_BETS= 'CRASH:-8104',
    // 后台充值金币
    REFRESH_COINS= "CRASH:-10",
    // vip等级
    VIPLEVEL= "CRASH:-11",
}

export const sktMsgListener = listenerFactoy<SKT_MAG_TYPE>()

export let dragonV2WebSocketDriver: WebSocketDriver<SKT_MAG_TYPE> = null
export default () => {
  const dispatch = getStore().dispatch
  return new Promise((resolve, reject) => {
    initConfig().then(() => {
      const { gameId, gameHost } = subGameList.find(i => i.gameId === config.gameId)
      WebSocketStarter.Instance().initSocket().then(() => {
        dragonV2WebSocketDriver = new WebSocketDriver<SKT_MAG_TYPE>(gameId, gameHost)
        dragonV2WebSocketDriver.filterData = (data,source) => {
          if (source.operation === SKT_OPERATION.RECOVER) {
            dragonV2GameLogin();
            return;
          }
          if (data.success) {
            return {
              data: data.data,
              error: undefined
            }
          } else {
            let error = ''
            if (data.success === undefined) {
              //数据格式错误
              error = 'data format error'
              console.error('data format error', data)
            } else {
              error = data.reason || 'error'
              console.error(data.reason)
            }
            global.hallDispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.SocketDataError, {}, { placeStr: "服务数据错误" }), type: ToastType.ERROR }))
            return {
              data: '', error
            }
          }
        }
        // const msgObj = egyptWebSocketDriver.loginGame(SKT_MAG_TYPE.LOGIN)
        // msgObj.bindReceiveHandler((message) => {
        //   if (!message.data.success) {
        //     global.closeSubGame({ confirmContent: lang.write(k => k.WebSocketModule.socketConnectAuthFaild, {}, { placeStr: "认证失败" }) })
        //   }
        // })
        // //超时
        // msgObj.bindTimeoutHandler(() => {
        //   global.closeSubGame({ confirmContent: lang.write(k => k.WebSocketModule.ConfigGameFaild, {}, { placeStr: "对不起，连接游戏失败" }) })
        //   return false
        // })
        resolve(dragonV2WebSocketDriver)
      })
    }).catch((e) => {
      reject(e)
    })
  })
}
export const dragonV2GameLogin = () => {
  const msgObj = dragonV2WebSocketDriver.loginGame(SKT_MAG_TYPE.LOGIN)
  msgObj.bindReceiveHandler((message) => {
  console.log(message);
    if (!message.data.success) {
      global.closeSubGame({ confirmContent: lang.write(message.data.reason, {}, { placeStr: "认证失败" }) })
    }
  })
  //超时
  msgObj.bindTimeoutHandler(() => {
    global.closeSubGame({ confirmContent: lang.write(k => k.WebSocketModule.ConfigGameFaild, {}, { placeStr: "对不起，连接游戏失败" }) })
    return false
  })
}
export const removeInstance = () => {
  dragonV2WebSocketDriver && dragonV2WebSocketDriver.logoutGame(SKT_MAG_TYPE.EXIT);
}