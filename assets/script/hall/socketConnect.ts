import { default as redux } from "redux"
import { initConfig, config as hallConfig, subGameList, config, HallGameGateType } from "./config"
import { ToastType, addToastAction, setLoadingAction, setSocketConnectStatus } from "./store/actions/baseBoard"
import { listenerFactoy } from "../common/listenerFactoy"
import { getStore } from "./store"
import { baseBoardView, global } from "./index"
import { lang } from "./index"
import { sys } from "cc"
import WebSocketStarter, { EVEVT_TYPE, SKT_OPERATION, WebSocketDriver } from "../common/WebSocketStarter"
import ModalBox from "../common/ModalBox"
import { Task, TaskSchedulerDefault } from "../utils/TaskScheduler"

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
  /**邮箱最新消息推送 */
  NEW_MAIL = "409",
  /**首页弹出 */
  POP_UPS = "403",
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

// export const sktMsgListener = listenerFactoy<SKT_MAG_TYPE>()
// export let sktInstance: WebSocketToDo<SKT_MAG_TYPE> = null
export let hallWebSocketDriver: WebSocketDriver<SKT_MAG_TYPE> = new WebSocketDriver<SKT_MAG_TYPE>(config.gameId, config.gameHost)
hallWebSocketDriver.filterData = (data, source) => {
  if (source.operation === SKT_OPERATION.RECOVER && baseBoardView) {
    if (!baseBoardView.comp.props.openGameInfo) {
      const hallGameGate: HallGameGateType = subGameList.find(i => i.gameId === source.gameId)
      if (hallGameGate) {
        const openResetConfirm = (callback?: Function) => {
          window.setTimeout(() => {
            ModalBox.Instance().show({ content: lang.write(k => k.HallModule.UnfinishedGames, { game: hallGameGate.gameName }, { placeStr: "您还有未完成的游戏，请继续" }), type: "Prompt" }, () => {
              try {
                const gateViewModel = baseBoardView.mainPanelViewModel.comp.gateViewModelList.find(vm => vm.comp.props.gamesIds.indexOf(hallGameGate.gameId) !== -1)
                if (gateViewModel && gateViewModel.comp) {
                  gateViewModel.comp.openGateGame(hallGameGate.gameId)
                } else {
                  global.hallDispatch(addToastAction({ content: `gameId error:${source.gameId}`, type: ToastType.ERROR, forceLandscape: false }))
                }
              } catch (e) {
                global.hallDispatch(addToastAction({ content: e, type: ToastType.ERROR, forceLandscape: false }))
              }
              callback && callback()
              return true
            })
          }, 1000)
        }
        if (baseBoardView.mainPanelViewModel && baseBoardView.mainPanelViewModel.isBeginPop) {
          //已经开始弹窗了
          TaskSchedulerDefault().joinQueue(new Task((done) => {
            openResetConfirm(done)
          }))
        } else {
          //还没开始弹窗，那弹个der，直接弹恢复游戏的弹窗
          baseBoardView.mainPanelViewModel && (baseBoardView.mainPanelViewModel.isBeginPop = true)
          openResetConfirm()
        }
      }
    } else {
      //游戏中，需要游戏自行LOGIN
    }
    return
  }
  if (data.code === '200') {
    return {
      data: data.data,
      error: undefined
    }
  } else {
    console.error(data, source)
    global.hallDispatch(addToastAction({ content: `${data.message}[${data.code}]`, type: ToastType.ERROR, forceLandscape: false }))
    return {
      data: '', error: data.message
    }
  }
}
export default () => {
  return new Promise((resolve, reject) => {
    initConfig().then((config) => {
      WebSocketStarter.Instance().initSocket().then(() => {
        const wss = WebSocketStarter.Instance()
        wss.eventListener.add(EVEVT_TYPE.HEART_BEAT, '', () => {
          if (!wss.isConnect || wss.isReconnecting) {
            global.hallDispatch(setSocketConnectStatus({ isConnect: true, remainRetryCount: wss.maxReconnectTime }))
          }
        })
        wss.eventListener.add(EVEVT_TYPE.DISCONNECT, '', () => {
          global.hallDispatch(setSocketConnectStatus({ isConnect: false, remainRetryCount: wss.remainRetryCount }))
        })
        wss.eventListener.add(EVEVT_TYPE.OPEN, '', () => {
          global.hallDispatch(setSocketConnectStatus({ isConnect: true, remainRetryCount: wss.maxReconnectTime }))
        })
        wss.eventListener.add(EVEVT_TYPE.WARN, '', () => {
          global.hallDispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.NetworkInstability, {}, { placeStr: "网络不稳定" }), type: ToastType.ERROR, forceLandscape: false }))
        })
        wss.eventListener.add(EVEVT_TYPE.RECONNECT, '', (remainRetryCount) => {
          global.hallDispatch(setSocketConnectStatus({ isConnect: false, remainRetryCount }))
        })
        resolve(hallWebSocketDriver)
      })
    }).catch((e) => {
      reject(e)
    })
  })
}

