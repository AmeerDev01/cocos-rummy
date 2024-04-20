import WebSocketToDo from "../../common/WebSocketToDo"
import { listenerFactoy } from "../../common/listenerFactoy"
import { initConfig, subGameList } from "../../hall/config"
import config from "./config"
import { ToastType, addToastAction, setLoadingAction } from "../../hall/store/actions/baseBoard"
import store, { getStore } from "./store"
import { global, lang } from "../../hall"
import WebSocketStarter, { SKT_OPERATION, WebSocketDriver } from "../../common/WebSocketStarter"

export enum SKT_MAG_TYPE {
  /**认证 */
  LOGIN = "2",
  /**退出房间 */
  QUIT_ROOM = "3",
  /**进入房间 */
  JOIN_ROOM = "4",
  /**准备 */
  READY = "5",
  EXIT = "10",
}

export let rummyWebSocketDriver: WebSocketDriver<SKT_MAG_TYPE> = null
export default () => {
  const dispatch = getStore().dispatch
  return new Promise((resolve, reject) => {
    initConfig().then(() => {
      const { gameId, gameHost } = subGameList.find(i => i.gameId === config.gameId)
      WebSocketStarter.Instance().initSocket().then(() => {
        rummyWebSocketDriver = new WebSocketDriver<SKT_MAG_TYPE>(gameId, gameHost)
        rummyWebSocketDriver.filterData = (data, source) => {
          if (source.operation === SKT_OPERATION.RECOVER) {
            starlightGameLogin();
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
        resolve(rummyWebSocketDriver)
      })
    }).catch((e) => {
      reject(e)
    })
  })
}

export const starlightGameLogin = () => {
  const msgObj = rummyWebSocketDriver.loginGame(SKT_MAG_TYPE.LOGIN)
  msgObj.bindReceiveHandler((message) => {
    if (!message.data.success) {
      // global.closeSubGame({ confirmContent: lang.write(k => k.WebSocketModule.socketConnectAuthFaild, {}, { placeStr: "认证失败" }) })
      global.closeSubGame({ confirmContent: message.data.reason })
    }
  })
  //超时
  msgObj.bindTimeoutHandler(() => {
    global.closeSubGame({ confirmContent: lang.write(k => k.WebSocketModule.ConfigGameFaild, {}, { placeStr: "对不起，连接游戏失败" }) })
    return false
  })
}

export const removeInstance = () => {
  rummyWebSocketDriver && rummyWebSocketDriver.logoutGame(SKT_MAG_TYPE.EXIT);
}