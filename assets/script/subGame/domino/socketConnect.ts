import WebSocketToDo from "../../common/WebSocketToDo"
import { listenerFactoy } from "../../common/listenerFactoy"
import { initConfig, subGameList } from "../../hall/config"
import config from "./config"
import { ToastType, addToastAction, setLoadingAction } from "../../hall/store/actions/baseBoard"
import store, { getStore } from "./store"
import { lang } from "../../hall"

export enum SKT_MAG_TYPE {
  /**认证 */
  AUTH = "2",
  /**进入房间 */
  JOIN_ROOM = "4",
  /**金币变化 */
  GOLD_CHANGE = "10",
  /**结算 */
  SETTLEMENT = "608",
  /**准备 */
  READY = "610",
  /**开始游戏倒计时 */
  BEGIN_GAME_COUNTDOWN = "602",
  /**发牌 */
  PUSH_DEAL = "603",
  /**游戏状态变化 */
  GAME_STATE_CHANGE = "605",
  /**开始出牌 */
  OUT_CARD = "606",
  /**推送庄家 */
  PUSH_DEALER = "612",
  /**结算 */
  BALANCE = "608",
  /**重连 */
  RECONNECT = "614",
  /**退出房间 */
  QUIT_ROOM = "611",
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
          // const { gameId, websocketUrl } = subGameList.find(i => i.gameId === config.gameId)
          // wsUrl = websocketUrl;
          // gameIdTmp = gameId;
          wsUrl = "ws://192.168.110.243:10016/ws";
          gameIdTmp = 2;
        }
        sktInstance.init(config.sktCode, gameIdTmp, wsUrl, {
          onMessage: (code, data) => {
            sktMsgListener.dispath(code, data)
          },
          onDataFail: (data: any) => {
            dispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.socketConnectDateFail, {}, { placeStr: "连接失败" }) }))
            dispatch(setLoadingAction({ isShow: false, flagId: "" }))
          },
          onAnthFail: () => {
            dispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.socketConnectAuthFaild, {}, { placeStr: "Auth Faild" }) }))
          },
          onDisconnect: (data: any) => {
            dispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.socketConnectDisconnect, {}, { placeStr: "socket disconnect" }), type: ToastType.ERROR }))
            dispatch(setLoadingAction({ isShow: false, flagId: "" }))
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