import { initConfig, subGameList } from "../../hall/config"
import config from "./config"
import { ToastType, addToastAction, setLoadingAction } from "../../hall/store/actions/baseBoard"
import store, { getStore } from "./store"
import { global, lang } from "../../hall"
import  { EVEVT_TYPE, SKT_OPERATION, WebSocketDriver } from "../../common/WebSocketStarter"

export enum SKT_MAG_TYPE {
  LOGIN = "1",
  LOGOUT = "3",
  /**认证 */
  /**启动下注 */
  LAUNCHER_BET = "2",
  /**JACKPOT */
  JACKPOT = "7",
  /**更新金币 */
  BALANCE_UPDATE = "10",
  /**清退房间 */
  VACATETHEROOM = "3"
}

export let fruit777WebSocketDriver: WebSocketDriver<SKT_MAG_TYPE> = null
export default () => {
  return new Promise((resolve, reject) => {
    initConfig().then(() => {
      const { gameId, gameHost } = subGameList.find(i => i.gameId === config.gameId)
      window.HALL_GLOBAL.wsInstance.initSocket().then(() => {
        fruit777WebSocketDriver = new WebSocketDriver<SKT_MAG_TYPE>(gameId, gameHost)
        fruit777WebSocketDriver.filterData = (data, source) => {
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
        resolve(fruit777WebSocketDriver)
      })
      window.HALL_GLOBAL.wsInstance.eventListener.add(EVEVT_TYPE.RECONNECT_SUCCESS, 'fruit777', () => {
        
      })
    }).catch((e) => {
      reject(e)
    })
  })
}

export const gameLogin = () => {
  const msgObj = fruit777WebSocketDriver.loginGame(SKT_MAG_TYPE.LOGIN)
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
  fruit777WebSocketDriver && fruit777WebSocketDriver.logoutGame(SKT_MAG_TYPE.LOGOUT)
  window.HALL_GLOBAL.wsInstance.eventListener.removeById('fruit777')
}