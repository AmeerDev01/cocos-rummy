import { global, lang } from "../../hall"
import { initConfig, subGameList } from "../../hall/config"
import { ToastType, addToastAction, setLoadingAction } from "../../hall/store/actions/baseBoard"
import config from "./config"
import { getStore } from "../../hall/store"
import { titleViewModel } from "./viewModel/BandarGameBoardViewModel"
import { confirmDoneAfterFn } from "./viewModel/BandarTitleViewModel"
import WebSocketStarter, { SKT_OPERATION, WebSocketDriver } from "../../common/WebSocketStarter"

export enum SKT_MAG_TYPE {
  LOGIN = "41",
  LOGOUT = "46",
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
  BET_ALL="42",
  /**下注返回 */
  BET_RESPONSE="8102",
  /** 结算 */
  SETTLEMENT="804",
  /** 获取牌 */
  POKER = "805",
  /** 历史记录 */
  HISTORY="43",
  /** 房间总人数 */
  ALL_USERS='807',
  /** 其他玩家赢 */
  OTHER_WIN="808",
  /** 重复下注 */
  REPEAT_BET = "809",
  /**游戏唤醒消息 */
  GAME_SHOW = "44",
  /**赠送礼物 */
  GIVE_GIFT = "45",
}

// export const sktMsgListener = listenerFactoy<SKT_MAG_TYPE>()

// export let sktInstance: WebSocketToDo<SKT_MAG_TYPE> = null
export let bandarWebSocketDriver: WebSocketDriver<SKT_MAG_TYPE> = null
export default () => {
  return new Promise((resolve, reject) => {
    initConfig().then(() => {
      const { gameId, gameHost } = subGameList.find(i => i.gameId === config.gameId)
      WebSocketStarter.Instance().initSocket().then(() => {
        bandarWebSocketDriver = new WebSocketDriver<SKT_MAG_TYPE>(gameId, gameHost)
        console.log("bandarWebSocketDriver",bandarWebSocketDriver);
        
        bandarWebSocketDriver.filterData = (data,source) => {
          // console.log("data",data);
          if (source.operation === SKT_OPERATION.RECOVER) {
            bandarGameLogin();
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
        // const msgObj = bandarWebSocketDriver.loginGame(SKT_MAG_TYPE.LOGIN)
        // msgObj.bindReceiveHandler((message) => {
        //   if (!message.data.success) {
        //     global.closeSubGame({ confirmContent: lang.write(k => k.WebSocketModule.socketConnectAuthFaild, {}, { placeStr: "认证失败" }) })
        //   }
        // })
        //超时
        // msgObj.bindTimeoutHandler(() => {
        //   global.closeSubGame({ confirmContent: lang.write(k => k.WebSocketModule.ConfigGameFaild, {}, { placeStr: "对不起，连接游戏失败" }) })
        //   return false
        // })
        resolve(bandarWebSocketDriver)
      })
    }).catch((e) => {
      reject(e)
    })
  })
}

export const bandarGameLogin = () => {
  const msgObj = bandarWebSocketDriver.loginGame(SKT_MAG_TYPE.LOGIN)
  msgObj.bindReceiveHandler((message) => {
    if (!message.data.success) {
     // global.closeSubGame({ confirmContent: lang.write(k => k.WebSocketModule.socketConnectAuthFaild, {}, { placeStr: "认证失败" }) })
     global.closeSubGame({ confirmContent:message.data.reason })
    }
  })
  //超时
  msgObj.bindTimeoutHandler(() => {
    global.closeSubGame({ confirmContent: lang.write(k => k.WebSocketModule.ConfigGameFaild, {}, { placeStr: "对不起，连接游戏失败" }) })
    return false
  })
}

export const removeInstance = () => {
  bandarWebSocketDriver && bandarWebSocketDriver.logoutGame(SKT_MAG_TYPE.LOGOUT)

  // sktMsgListener && sktMsgListener.removeAll()
  // sktInstance && sktInstance.close()
  // sktInstance = null
}


