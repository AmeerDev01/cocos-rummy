import { default as redux } from "redux"
import WebSocketToDo from "../../common/WebSocketToDo"
import { listenerFactoy } from "../../common/listenerFactoy"
import { initConfig, subGameList } from "../../hall/config"
import config from "./config"
import { ToastType, addToastAction, setLoadingAction } from "../../hall/store/actions/baseBoard"
import store, { getStore } from "./store"
import { global, lang } from "../../hall"
import { SKT_OPERATION, WebSocketDriver } from "../../common/WebSocketStarter"

export enum SKT_MAG_TYPE {
  /**认证 */
  AUTH = "2",
  /**退出房间 */
  QUIT_ROOM = "3",
  /**进入房间 */
  JOIN_ROOM = "520102",
  /**准备 */
  READY = "520111",
  /**退出牌桌 */
  EXIT_TABLE = "520112",
  /**请求场景数据 */
  REQ_SCENCE = "520120",
  /**筹码变化的消息 */
  CHIPS_CHANGE = "520202",
  /**生产鱼 */
  GENERATE_FISH = "520236",
  /**发送子弹 */
  SEND_BULLET = "520106",
  /**打中鱼 */
  HIT_FISH = "520108",
  /**请求锁定 */
  LOCK = "520121",
  /**取消锁定 */
  CANCEL_LOCK = "520122",
  /**切换炮台 */
  CHANGE_BATTERY = "520107",
  /**切换炮台皮肤 */
  CHANGE_BATTERY_SKIN = "520116",
  /**其他玩家进入房间 */
  OTHER_JOIN_ROOM = "520221",
  /**离开房间 */
  LEAVE_ROOM = "520216",
  /**切换场景 */
  CHANGE_SCENCE = "520234",
  /**结算消息 */
  BILL = "520243",
  /**错误消息通知 */
  ERROR_MSG = "105201",
}

export let fishWebSocketDriver: WebSocketDriver<SKT_MAG_TYPE> = null
export default () => {
  return new Promise((resolve, reject) => {
    initConfig().then(() => {
      const { gameId, gameHost } = subGameList.find(i => i.gameId === config.gameId)
      window.HALL_GLOBAL.wsInstance.initSocket().then(() => {
        fishWebSocketDriver = new WebSocketDriver<SKT_MAG_TYPE>(gameId, gameHost)
        fishWebSocketDriver.filterData = (data, source) => {
          if (source.operation === SKT_OPERATION.RECOVER) {
            gameLogin()
            return
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
        resolve(fishWebSocketDriver)
      })
      // window.HALL_GLOBAL.wsInstance.eventListener.add(EVEVT_TYPE.RECONNECT_SUCCESS, 'fruit777', () => {
        
      // })
    }).catch((e) => {
      reject(e)
    })
  })
}

export const gameLogin = () => {
  const msgObj = fishWebSocketDriver.loginGame(SKT_MAG_TYPE.JOIN_ROOM)
  msgObj.bindReceiveHandler((message) => {
    if (!message.data.success) {
      // global.closeSubGame({ confirmContent: lang.write(k => k.WebSocketModule.socketConnectAuthFaild, {}, { placeStr: "认证失败" }) })
      global.closeSubGame({ confirmContent: message.data.reason })
    }
  })
  //超时
  msgObj.bindTimeoutHandler(() => {
    global.closeSubGame({ confirmContent: lang.write(k => k.WebSocketModule.SocketMsgTimeOut, {}, { placeStr: "对不起，网络超时" }) })
    return false
  })
}

export const removeInstance = () => {
  fishWebSocketDriver && fishWebSocketDriver.logoutGame(SKT_MAG_TYPE.QUIT_ROOM)
  window.HALL_GLOBAL.wsInstance.eventListener.removeById('fish')
}

// export const sktMsgListener = listenerFactoy<SKT_MAG_TYPE>()
// export let sktInstance: WebSocketToDo<SKT_MAG_TYPE> = null
// export default () => {
//   const dispatch = getStore().dispatch
//   return new Promise((resolve, reject) => {
//     if (sktInstance) {
//       resolve(sktInstance)
//     } else {
//       sktInstance = new WebSocketToDo<SKT_MAG_TYPE>()
//       !config.isTest && initConfig().then(() => {
//         let gameIdTmp = config.gameId;
//         let wsUrl = config.testConfig.wsUrl;
//         if (!config.testConfig.wsUrl) {
//           const { gameId, websocketUrl } = subGameList.find(i => i.gameId === config.gameId)
//           wsUrl = websocketUrl;
//           gameIdTmp = gameId;
//           // wsUrl = "ws://192.168.110.244:10018/ws";
//           // gameIdTmp = 17;
//         }
//         sktInstance.init(config.sktCode, gameIdTmp, wsUrl, {
//           onMessage: (code, data, error: string) => {
//             sktMsgListener.dispath(code, data, error)
//           },
//           onDataFail: (data: any) => {
//             dispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.socketConnectDateFail, {}, { placeStr: "连接失败" }) }))
//           },
//           onAnthFail: () => {
//             dispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.socketConnectAuthFaild, {}, { placeStr: "Auth Faild" }) }))
//           },
//           onDisconnect: (data: any) => {
//             dispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.socketConnectDisconnect, {}, { placeStr: "socket disconnect" }) }))
//           },
//           onReConnect: () => true
//         })
//         sktInstance.initSocket().then(() => {
//           resolve(sktInstance)
//         })
//       })
//     }
//   })
// }

// export const removeInstance = () => {
//   sktMsgListener && sktMsgListener.removeAll()
//   sktInstance && sktInstance.close()
//   sktInstance = null
// }