// import { default as redux } from "redux"
import WebSocketToDo from "../../common/WebSocketToDo"
import { listenerFactoy } from "../../common/listenerFactoy"
import { global, lang } from "../../hall"
import { initConfig, subGameList } from "../../hall/config"
import { ToastType, addToastAction, setLoadingAction } from "../../hall/store/actions/baseBoard"
import config from "./config"
import { getStore } from "../../hall/store"
import { titleViewModel } from "./viewModel/BandarGameBoardViewModel"
import { confirmDoneAfterFn } from "./viewModel/BandarTitleViewModel"

export enum SKT_MAG_TYPE {
  /**心跳 */
  HEART_BEAT = "1",
  /** 认证 */
  AUTH="2",
  /**获取用户信息 */
  JOIN_GAME = "4",
  /**充值返回 */
  TOP_UP = "10",
  /**游戏权限提示语 */
  GAME_TIP = "11",
  /** 倒计时 */
  GAMESTATUS_CRASH="8101",
  /** 下注总金币数 */
  BET_ALL="802",
  /**下注返回 */
  BET_RESPONSE="8102",
  /** 结算 */
  SETTLEMENT="804",
  /** 获取牌 */
  POKER = "805",
  /** 历史记录 */
  HISTORY="806",
  /** 房间总人数 */
  ALL_USERS='807',
  /** 其他玩家赢 */
  OTHER_WIN="808",
  /** 重复下注 */
  REPEAT_BET = "809",
  /**游戏唤醒消息 */
  GAME_SHOW = "810",
  /**赠送礼物 */
  GIVE_GIFT = "812",
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
  sktMsgListener && sktMsgListener.removeAll()
  sktInstance && sktInstance.close()
  sktInstance = null
}


