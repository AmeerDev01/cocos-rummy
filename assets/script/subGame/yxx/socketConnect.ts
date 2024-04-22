import { initConfig, subGameList } from "../../hall/config"
import config from "./config"
import { getStore } from "../../hall/store"
import { ToastType, addToastAction, setLoadingAction } from "../../hall/store/actions/baseBoard"
import { global, lang } from "../../hall"
import WebSocketStarter, { WebSocketDriver } from "../../common/WebSocketStarter"

export enum SKT_MAG_TYPE {
  /**心跳 */
  HEART_BEAT = "1",
  /**认证 */
  AUTH = "2",
  /**进入游戏 */
  JOIN_GAME = "21",
  /**金额变化 */
  GOLD_CHANGE = "10",
  /**权限验证 */
  POWER_VERIFY = "11",
  /**启动下注 */
  LAUNCHER_BET = "22",
  /**推送下注 */
  PUSH_BET = "8102",
  /**游戏状态 */
  GAME_STATUE = "8101",
  /**推送结果 */
  PUSH_RESULT = "805",
  /**在线人数变化 */
  ONLINE_NUMBER_CHANGE = "807",
  /**自己的结算数据推送 */
  MY_BALANCE_PUSH = "804",
  /**其他数据 */
  BALANCE_PUSH = "808",
  /**退出游戏 */
  QUIT_GAME = "26",
  /**游戏唤醒消息 */
  GAME_SHOW = "24",
  /**赠送礼物 */
  GIVE_GIFT = "25",
}


export let yxxWebSocketDriver: WebSocketDriver<SKT_MAG_TYPE> = null
export default () => {
  return new Promise((resolve, reject) => {
    initConfig().then(() => {
      let gameIdTmp = config.gameId;
      const { gameId, gameHost } = subGameList.find(i => i.gameId === config.gameId)
      gameIdTmp = gameId;

      WebSocketStarter.Instance().initSocket().then(() => {
        yxxWebSocketDriver = new WebSocketDriver<SKT_MAG_TYPE>(gameIdTmp, gameHost)
        yxxWebSocketDriver.filterData = (data) => {
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

        // const msgObj = yxxWebSocketDriver.loginGame(SKT_MAG_TYPE.JOIN_GAME)
        // msgObj.bindTimeoutHandler(() => {
        //   global.closeSubGame({ confirmContent: lang.write(k => k.WebSocketModule.ConfigGameFaild, {}, { placeStr: "对不起，连接游戏失败" }) })
        //   return false
        // })
        resolve(yxxWebSocketDriver)
      })
    })
  })
}

export const removeInstance = () => {
  yxxWebSocketDriver && yxxWebSocketDriver.logoutGame(SKT_MAG_TYPE.QUIT_GAME)
}