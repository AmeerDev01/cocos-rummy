import WebSocketStarter, { SKT_OPERATION, WebSocketDriver } from "../../common/WebSocketStarter"
import { global, lang } from "../../hall"
import { initConfig, subGameList } from "../../hall/config"
import { ToastType, addToastAction } from "../../hall/store/actions/baseBoard"
import config from "./config"

export enum SKT_MAG_TYPE {
  /**认证 */
  LOGIN = "1",
  /**进入房间 */
  JOIN_ROOM = "2",
  /**发牌 */
  DEAL = "3",
  /**摸牌 */
  TOUCH_CARD = "4",
  /**出牌 */
  OUT = "5",
  /**分组 */
  GROUP = "6",
  /**发送确认消息 */
  SEND_CONFIRM = "7",
  /**结算消息 */
  BALANCE = "8",
  /**投降 */
  DROP = "9",
  /**提前结算 */
  SHOW = "10",
  /**发送确认消息 */
  CONFIRM_11 = "11",
  /**换桌 */
  CHANGE_ROOM = "12",
  /**其他用户退出房间 */
  OTHER_PLAYER_QUIT_ROOM = "13",
  /**退出房间 */
  QUIT_ROOM = "14",
  /**退出游戏 */
  EXIT_GAME = "15",
  /**更新余额 */
  UPDATE_GOLD = "16",
}

export let rummyWebSocketDriver: WebSocketDriver<SKT_MAG_TYPE> = null
export default () => {
  return new Promise((resolve, reject) => {
    initConfig().then(() => {
      const { gameId, gameHost } = subGameList.find(i => i.gameId === config.gameId)
      WebSocketStarter.Instance().initSocket().then(() => {
        rummyWebSocketDriver = new WebSocketDriver<SKT_MAG_TYPE>(gameId, gameHost)
        rummyWebSocketDriver.filterData = (data, source) => {
          if (source.operation === SKT_OPERATION.RECOVER) {
            rummyGameLogin();
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
              global.hallDispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.SocketDataError, {}, { placeStr: "服务数据错误" }), type: ToastType.ERROR }))
            } else {
              error = data.message || 'error'
              console.error(data.message)
              global.hallDispatch(addToastAction({ content: data.message, type: ToastType.WARN }))
            }
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

export const rummyGameLogin = () => {
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
  rummyWebSocketDriver && rummyWebSocketDriver.logoutGame(SKT_MAG_TYPE.EXIT_GAME);
}