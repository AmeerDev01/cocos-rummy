import { default as redux } from "redux"
import WebSocketToDo from "../../common/WebSocketToDo"
import { listenerFactoy } from "../../common/listenerFactoy"
import { initConfig, subGameList } from "../../hall/config"
import config from "./config"
import { ToastType, addToastAction, setLoadingAction } from "../../hall/store/actions/baseBoard"
import store, { getStore } from "./store"
import { global, lang } from "../../hall"
import { changeAutoLauncherType } from "./store/actions/game"
import { AutoLauncherType } from "./type"
import {headerViewModel } from "./index"

export enum SKT_MAG_TYPE {
  /**心跳 */
  HEART_BEAT = "1",
  /**认证 */
  AUTH = "2",
  /**启动下注 */
  LAUNCHER_BET = "501",
  /**JACKPOT */
  JACKPOT = "7",
  /**更新金币 */
  BALANCE_UPDATE = "10",
   /**清退房间 */
   VACATETHEROOM = "3"
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
          onMessage: (code, data, error) => {
            sktMsgListener.dispath(code, data, error)
          },
          onDataFail: (code: any) => {
            if(code === SKT_MAG_TYPE.LAUNCHER_BET){
              headerViewModel.comp.closeGame()
              global.closeSubGame({
                confirmContent:(lang.write(k => k.WebSocketModule.socketConnectDateFail) + ' (-' + code +')')
              });
            }else{
              dispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.socketConnectDateFail, {}, { placeStr: "连接失败" }) + ' (-' + code+ ')'}))
              dispatch(setLoadingAction({ isShow: false }))
            }
          },
          onAnthFail: (error) => {
            global.closeSubGame({
              confirmContent: error || lang.write(k => k.WebSocketModule.socketConnectDateFail)
            });
          },
          onDisconnect: (data: any) => {
            // dispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.socketConnectDisconnect, {}, { placeStr: "socket disconnect" }),type: ToastType.ERROR }))
            // dispatch(setLoadingAction({ isShow: false }))
            global.closeSubGame({ confirmContent: lang.write(k => k.WebSocketModule.socketConnectDisconnect) })
          },
          onReConnect: (times) => {
            if (times >= 1) {
              dispatch(changeAutoLauncherType(AutoLauncherType.NONE))
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
            global.closeSubGame({ isPre: true })
          }, 1500)
        })
      }).catch(e => {
        global.hallDispatch(addToastAction({ content: lang.write(k => k.InitGameModule.GameBoardInit, {}, { placeStr: "游戏初始化失败" }) }))
        global.closeSubGame({
          confirmContent: lang.write(k => k.WebSocketModule.ConfigGameFaild)
        } );
      })
    }
  })
}

export const removeInstance = () => {
  if(sktMsgListener){
    sktMsgListener.removeAll()
    sktInstance.close()
    sktInstance = null
  }
}