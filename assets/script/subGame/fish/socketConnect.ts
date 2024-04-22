import { default as redux } from "redux"
import WebSocketToDo from "../../common/WebSocketToDo"
import { listenerFactoy } from "../../common/listenerFactoy"
import { initConfig, subGameList } from "../../hall/config"
import config from "./config"
import { addToastAction, setLoadingAction } from "../../hall/store/actions/baseBoard"
import store, { getStore } from "./store"
import { lang } from "../../hall"

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
          onMessage: (code, data, error: string) => {
            sktMsgListener.dispath(code, data, error)
          },
          onDataFail: (data: any) => {
            dispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.socketConnectDateFail, {}, { placeStr: "连接失败" }) }))
          },
          onAnthFail: () => {
            dispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.socketConnectAuthFaild, {}, { placeStr: "Auth Faild" }) }))
          },
          onDisconnect: (data: any) => {
            dispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.socketConnectDisconnect, {}, { placeStr: "socket disconnect" }) }))
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