import { initConfig, subGameList } from "../../hall/config"
import config from "./config"
import { getStore } from "../../hall/store"
import { ToastType, addToastAction, setLoadingAction } from "../../hall/store/actions/baseBoard"
import { global, lang } from "../../hall"
import WebSocketStarter, { SKT_OPERATION, WebSocketDriver } from "../../common/WebSocketStarter"

export enum SKT_MAG_TYPE {

  LOGIN = "31",
  LOGOUT = "36",
  /**充值返回 */
  TOP_UP = "10",
   /**游戏权限提示语 */
   GAME_TIP = "11",
  /** 倒计时 */
  CRASH = "801",
  /** 下注总金币数 */
  BET_ALL = "802",
  /**下注 */
  BET_RESPONSE = "32",
  /** 历史记录 */
  HISTORY = "33",
  /** 所有用户信息 */
  ALL_USERS = '807',
  /**游戏唤醒消息 */
  GAME_SHOW = "34",
  /**赠送礼物 */
  GIVE_GIFT = "35",
}

// export const sktMsgListener = listenerFactoy<SKT_MAG_TYPE>()

// export let sktInstance: WebSocketToDo<SKT_MAG_TYPE> = null
export let dragonTigerWebSocketDriver: WebSocketDriver<SKT_MAG_TYPE> = null
export default () => {
  return new Promise((resolve, reject) => {
    initConfig().then(() => {
      const { gameId, gameHost } = subGameList.find(i => i.gameId === config.gameId)
      WebSocketStarter.Instance().initSocket().then(() => {
        dragonTigerWebSocketDriver = new WebSocketDriver<SKT_MAG_TYPE>(gameId, gameHost)
        dragonTigerWebSocketDriver.filterData = (data,source) => {
          // console.log("data",data);
          if (source.operation === SKT_OPERATION.RECOVER) {
            dragonTigerGameLogin();
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
        // const msgObj = dragonTigerWebSocketDriver.loginGame(SKT_MAG_TYPE.LOGIN)
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
        resolve(dragonTigerWebSocketDriver)
      })
    }).catch((e) => {
      reject(e)
    })
  })
}

export const dragonTigerGameLogin = () => {
  const msgObj = dragonTigerWebSocketDriver.loginGame(SKT_MAG_TYPE.LOGIN)
  msgObj.bindReceiveHandler((message) => {
    if (!message.data.success) {
      // global.closeSubGame({ confirmContent: lang.write(k => k.WebSocketModule.socketConnectAuthFaild, {}, { placeStr: "认证失败" }) })
      global.closeSubGame({ confirmContent:message.data.reason })
    }
  })
  //超时
  msgObj.bindTimeoutHandler(() => {
    global.closeSubGame({ confirmContent: lang.write(k => k.WebSocketModule.ConfigGameFaild, {}, { placeStr: "对不起，连接游戏失败" }) })
    return false
  })
}

export const removeInstance = () => {
  dragonTigerWebSocketDriver && dragonTigerWebSocketDriver.logoutGame(SKT_MAG_TYPE.LOGOUT)

  // sktMsgListener && sktMsgListener.removeAll()
  // sktInstance && sktInstance.close()
  // sktInstance = null
}
