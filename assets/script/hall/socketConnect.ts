import { default as redux } from "redux"
import WebSocketToDo from "../common/WebSocketToDo"
import { initConfig, config as hallConfig, subGameList, config } from "./config"
import { ToastType, addToastAction, setLoadingAction, setSocketConnectStatus } from "./store/actions/baseBoard"
import { listenerFactoy } from "../common/listenerFactoy"
import { getStore } from "./store"
import { baseBoardView, global } from "./index"
import { lang } from "./index"

export enum SKT_MAG_TYPE {
  /**强制退出 */
  LOG_EXIT = "0",
  /**心跳 */
  HEART_BEAT = "1",
  /**认证 */
  AUTH = "2",
  /**退出 */
  EXIT = "3",
  /**获取充值渠道 */
  GET_WITH_DRAW_CHANNEL = "411",
  /**充值下单 */
  RECHARGE_ORDER = "412",
  /**获取用户信息 */
  MEMBER_INFO = "400",
  /**修改用户信息 */
  MODIFY_MEMBER_INFO = "416",
  /**修改绑定手机 */
  MODIFY_BIND_PHONE = "408",
  /**跑马灯 */
  MAEQUEE = "404",
  /**提现人员列表 */
  WITH_DRAW_LIST = "419",
  /**VIP变化 */
  VIP_CHANGE = "420",
  /**赠送的金币 */
  GIVE_GLOD = "423",
  /**礼包列表 */
  GIFT_LIST = "424",
  /**中奖广播 */
  WINNING_BOX = "425",
  /**转盘数据 */
  TURNTABLEDATA = "426",
  /**转盘发送数据 */
  TURNTABLESEND = "427",
  /**转盘消息通知 */
  TURNTABLETNOTIFICATION = "428",
  /**充值回调 */
  RECHANGE_CALLBACK = "429",
  /**首次登录 */
  FRIST_LOGIN = "430"
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
      sktInstance.maxReConnectTimes = 5
      initConfig().then((config) => {
        const { gameId, websocketUrl } = subGameList.find(i => i.gameId === hallConfig.gameId)
        sktInstance.init(config.sktCode, gameId, websocketUrl, {
          onMessage: (code, data) => {
            dispatch(setSocketConnectStatus({ isConnect: true, retryConnectTimes: 1 }))
            sktMsgListener.dispath(code, data || undefined)
          },
          onDataFail: (data: any) => {
            dispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.socketConnectDateFail, {}, { placeStr: "连接失败~" }), type: ToastType.ERROR }))
            dispatch(setLoadingAction({ isShow: false }))
          },
          onAnthFail: () => {
            baseBoardView && baseBoardView.mainPanelViewModel && baseBoardView.mainPanelViewModel.logOut()
          },
          onDisconnect: (data: any) => {
            dispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.socketConnectDisconnect, {}, { placeStr: "Network disconnect" }), type: ToastType.ERROR }))
            dispatch(setLoadingAction({ isShow: false }))
            dispatch(setSocketConnectStatus({ isConnect: false }))
          },
          onReConnect: (times) => {
            console.log('retry', times)
            if (times > sktInstance.maxReConnectTimes) {
              return false
            }
            return true
          }
        })
        sktInstance.initSocket().then(() => {
          // dispatch(addToastAction({ content: "socket已连接" }))
          dispatch(setSocketConnectStatus({ isConnect: true, retryConnectTimes: 1 }))
          global.hallDispatch(setLoadingAction({ isShow: false }))
          resolve(sktInstance)
        })
      }).catch((e) => {
        reject(e)
        // dispatch(addToastAction({ content: "配置文件获取失败:" + e }))
      })
      // sktInstance.initSocket().then(() => {
      //   // dispatch(addToastAction({ content: "socket已连接" }))
      //   resolve(sktInstance)
      // })
      // initConfig().then((config) => {

      // }).catch((e) => {
      //   reject(e)
      //   // dispatch(addToastAction({ content: "配置文件获取失败:" + e }))
      // })
    }
  })
}

export const removeInstance = () => {
  sktInstance = null
}