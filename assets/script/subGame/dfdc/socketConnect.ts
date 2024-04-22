import { default as redux } from "redux"
import WebSocketToDo from "../../common/WebSocketToDo"
import { listenerFactoy } from "../../common/listenerFactoy"
import { initConfig, subGameList } from "../../hall/config"
import config from "./config"
import { ToastType, addToastAction, setLoadingAction } from "../../hall/store/actions/baseBoard"
import store, { getStore } from "./store"
import { global, lang } from "../../hall"

export enum SKT_MAG_TYPE {
  /**心跳 */
  HEART_BEAT = "1",
  /**认证 */
  AUTH = "2",
  /**启动下注 */
  LAUNCHER_BET = "501",
  /**JACKPOT */
  JACKPOT = "7",
  /**jackpot用户列表 */
  JACKPOT_USER = "8",
  /**更新金币 */
  BALANCE_UPDATE = "10"
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
      initConfig().then(() => {
        const { gameId, websocketUrl } = subGameList.find(i => i.gameId === config.gameId)
        sktInstance.init(config.sktCode, gameId, websocketUrl, {
          // sktInstance.init(config.sktCode, 13, "ws://192.168.110.243:18004/ws", {
          onMessage: (code, data, error) => {
            sktMsgListener.dispath(code, data || undefined, error)
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
            // dispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.socketConnectDisconnect, {}, { placeStr: "socket disconnect" }),type: ToastType.ERROR }))
            // dispatch(setLoadingAction({ isShow: false }))
            global.closeSubGame({ confirmContent: lang.write(k => k.WebSocketModule.socketConnectDisconnect) })
          },
          onReConnect: (times) => {
            if (times >= 5) {

              global.closeSubGame({
                confirmContent: lang.write(k => k.WebSocketModule.socketConnectDisconnect),
              });
              // removeInstance()
              return false;
            } else {
              return true;
            }
          }
        })
        sktInstance.initSocket().then((d) => {
          resolve(sktInstance)
        }).catch(e => {
          global.hallDispatch(addToastAction({ content: lang.write(k => k.InitGameModule.GameBoardInit, {}, { placeStr: "游戏初始化失败" }) }))
          removeInstance()
          window.setTimeout(() => {
            global.closeSubGame()
          }, 1500)
        })
      }).catch(e => {
        global.hallDispatch(addToastAction({ content: lang.write(k => k.InitGameModule.GameBoardInit, {}, { placeStr: "游戏初始化失败" }) }))
        global.closeSubGame({
          confirmContent: lang.write(k => k.WebSocketModule.ConfigGameFaild)
        });
      })
    }
  })
}

export const removeInstance = () => {
  sktMsgListener.removeAll()
  sktInstance.close()
  sktInstance = null
}