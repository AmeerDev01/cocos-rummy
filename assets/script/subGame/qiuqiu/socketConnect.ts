import WebSocketToDo from "../../common/WebSocketToDo"
import { listenerFactoy } from "../../common/listenerFactoy"
import { initConfig, subGameList } from "../../hall/config"
import config from "./config"
import { ToastType, addToastAction, setLoadingAction } from "../../hall/store/actions/baseBoard"
import store, { getStore } from "./store"
import { global, lang } from "../../hall"

export enum SKT_MAG_TYPE {
  /**认证 */
  AUTH = "2",
  /**退出房间 */
  QUIT_ROOM = "3",
  /**进入房间 */
  JOIN_ROOM = "4",
  /**准备 */
  READY = "5",
  /**开始游戏倒计时 */
  BEGIN_GAME_COUNTDOWN = "6",
  /**金币变化 */
  GOLD_CHANGE = "10",
  /**发牌 */
  PUSH_DEAL = "703",
  /**推送庄家 */
  PUSH_DEALER = "704",
  /**玩家操作 */
  PLAYER_OP = "705",
  /**结算 */
  BALANCE = "706",
  /**第二次发牌 */
  SECOND_PUSH_DEAL = "604",
  /**游戏状态变化 */
  GAME_STATE_CHANGE = "605",
  /**重连 */
  RECONNECT = "710",
  /**切换桌子 */
  CHANGE_ROOM = "613",
}

export const sktMsgListener = listenerFactoy<SKT_MAG_TYPE>()
export let sktInstance: WebSocketToDo<SKT_MAG_TYPE> = null
export default () => {
  const dispatch = getStore().dispatch
  return new Promise((resolve, reject) => {
    if (sktInstance) {
      resolve(sktInstance)
    } else {
      sktInstance = new WebSocketToDo<SKT_MAG_TYPE>()
      !config.isTest && initConfig().then(() => {
        let gameIdTmp = config.gameId;
        let wsUrl = config.testConfig.wsUrl;
        if (!config.testConfig.wsUrl) {
          const { gameId, websocketUrl } = subGameList.find(i => i.gameId === config.gameId)
          wsUrl = websocketUrl;
          gameIdTmp = gameId;
        }
        sktInstance.init(config.sktCode, gameIdTmp, wsUrl, {
          onMessage: (code, data) => {
            sktMsgListener.dispath(code, data)
          },
          onDataFail: (data: any) => {
            dispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.socketConnectDateFail, {}, { placeStr: "连接失败" }) }))
            dispatch(setLoadingAction({ isShow: false }))
          },
          onAnthFail: () => {
            dispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.socketConnectAuthFaild, {}, { placeStr: "Auth Faild" }) }))
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
  sktMsgListener && sktMsgListener.removeAll()
  sktInstance && sktInstance.close()
  sktInstance = null
}