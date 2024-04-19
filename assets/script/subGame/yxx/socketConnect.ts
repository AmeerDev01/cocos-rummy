import { default as redux } from "redux"
import WebSocketToDo from "../../common/WebSocketToDo"
import { sktListenerFactoy } from "../../common/sktListenerFactoy"
import { initConfig, subGameList } from "../../hall/config"
import config from "./config"
import { getStore } from "../../hall/store"
import { ToastType, addToastAction, setLoadingAction } from "../../hall/store/actions/baseBoard"
import { global, lang } from "../../hall"

export enum SKT_MAG_TYPE {
  /**心跳 */
  HEART_BEAT = "1",
  /**认证 */
  AUTH = "2",
  /**进入游戏 */
  JOIN_GAME = "4",
  /**金额变化 */
  GOLD_CHANGE = "10",
  /**权限验证 */
  POWER_VERIFY = "11",
  /**启动下注 */
  LAUNCHER_BET = "802",
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
  QUIT_GAME = "506",
  /**游戏唤醒消息 */
  GAME_SHOW = "810",
  /**赠送礼物 */
  GIVE_GIFT = "812",
}

export const sktMsgListener = sktListenerFactoy<SKT_MAG_TYPE>()

export let sktInstance: WebSocketToDo<SKT_MAG_TYPE> = null
export default () => {
  const dispatch = getStore().dispatch
  return new Promise((resolve, reject) => {
    if (sktInstance) {
      resolve(sktInstance)
    } else {
      sktInstance = new WebSocketToDo<SKT_MAG_TYPE>()
      initConfig().then(() => {
        let gameIdTmp = config.gameId;
        let wsUrl = config.testConfig.wsUrl;
        if (!config.testConfig.wsUrl) {
          const { gameId, websocketUrl } = subGameList.find(i => i.gameId === config.gameId)
          wsUrl = websocketUrl;
          gameIdTmp = gameId;
        }
        sktInstance.init(config.sktCode, gameIdTmp, wsUrl, {
          onMessage: (code, data, error?: string) => {
            sktMsgListener.dispath(code, data, error)
          },
          onDataFail: (data: any) => {

            dispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.socketConnectDateFail, {}, { placeStr: "连接失败" }) }))
            dispatch(setLoadingAction({ isShow: false }))
          },
          onAnthFail: () => {
            dispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.socketConnectAuthFaild, {}, { placeStr: "Auth Faild" }) }))
            global.closeSubGame({
              confirmContent: lang.write(k => k.WebSocketModule.socketConnectAuthFaild)
            });
          },
          onDisconnect: (data: any) => {
            // dispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.socketConnectDisconnect, {}, { placeStr: "socket disconnect" }), type: ToastType.ERROR }))
            // dispatch(setLoadingAction({ isShow: false }))
            global.closeSubGame({ confirmContent: lang.write(k => k.WebSocketModule.socketConnectDisconnect) })
          },
          onReConnect: () => true
        })
        sktInstance.initSocket().then(() => {
          resolve(sktInstance)
        })
      })
    }
  })
}

export const removeInstance = () => {
  sktInstance && sktInstance.close();
  sktInstance = null
  sktMsgListener && sktMsgListener.removeById("yxx");
}