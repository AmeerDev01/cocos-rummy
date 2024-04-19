import { error, log, sys } from "cc";
import { InitStateType, ToastType, addToastAction, setLoadingAction } from "../hall/store/actions/baseBoard";
import Singleton from "../utils/Singleton";
import { default as redux } from "redux"
import { getStore } from "../hall/store";
import { global, lang } from "../hall";
import { decodeRSA, encodeRSA } from '../utils/RSA';
import { sendNativeVibrate } from "./bridge";

type SktMessageType = {
  code: string,
  messageId: string,
  success: boolean,
  data?: any
}

export enum SKT_MAG_TYPE {
  /**心跳 */
  HEART_BEAT = "1",
  /**认证 */
  AUTH = "2",
  /**退出 */
  EXIT = "3"
}

/**webSocket单例，泛型请传入可能获取的消息Code枚举 */
export default class WebSocketToDo<T> {
  constructor() {
    // this.dispatch = getStore().dispatch
  }
  private ws: WebSocket
  private sktCode: string
  private websocketUrl: string
  private heartBeatTimer: number
  private connectTimer: number
  private connectCallBackHandlerMap: Function[] = []
  private gameId: number
  private onMessage: (code: T, data: any, error?: string) => void
  private onDisconnect: (data: any) => void
  private onReConnect: (times: number) => boolean
  private onDataFail: (code: T, data: any) => void
  private onAnthFail: (reason?: string) => void
  private isAutoConnect: boolean = true
  public dispatch: redux.Dispatch
  public reConnectTimes: number = 0
  public maxReConnectTimes: number = 10
  public isConnect: boolean = false
  private resendTime: number = 0
  /**第几次心跳无反馈 */
  private heat_beat_norepayTime: number = 0
  /**心跳无反馈判断为掉线的最大值 */
  private timeOut_norepayTime: number = 3
  private timeoutArr: { [key: string | number]: number } = {}
  /**初始化websocket */
  public init(sktCode: string, gameId: number, websocketUrl: string,
    eventHandler: {
      onMessage: (code: T, data: any, error?: string) => void,
      onDataFail: (code: T, data: any) => void,
      onAnthFail: (reason?: string) => void,
      onDisconnect: (data: any) => void
      /**return false将会取消重连 */
      onReConnect: (times: number) => boolean
    }) {
    this.sktCode = sktCode
    this.gameId = gameId
    this.websocketUrl = websocketUrl
    this.onMessage = eventHandler.onMessage
    this.onDisconnect = eventHandler.onDisconnect
    this.onDataFail = eventHandler.onDataFail
    this.onAnthFail = eventHandler.onAnthFail
    this.onReConnect = eventHandler.onReConnect
    return this
  }
  public async initSocket() {
    return new Promise(async (resolve, reject) => {
      if (this.ws && WebSocket.OPEN == this.ws.readyState) {
        this.ws.close()
        this.ws = null
      }
      this.ws = new WebSocket(this.websocketUrl)
      /**当连接建立成功后，这个函数就会被调用 */
      this.ws.onopen = (event) => {
        console.log("WebSocket has connected")
        this.isAutoConnect = true
        this.connectCallBackHandlerMap.forEach(handler => handler())

        let count = 1
        this.connectTimer && window.clearInterval(this.connectTimer)
        this.connectTimer = window.setInterval(() => {
          console.log('readyState', this.ws.readyState)
          if (this.ws.readyState === 1) {
            this.heartBeatTimer && window.clearInterval(this.heartBeatTimer)
            this.isConnect = true
            this.heartBeatTimer = window.setInterval(() => {
              this.sendSktMessage(SKT_MAG_TYPE.HEART_BEAT, undefined)
              this.heat_beat_norepayTime++
              // console.log('this.heat_beat_norepayTime', this.heat_beat_norepayTime)
              this.isConnect = this.heat_beat_norepayTime >= this.timeOut_norepayTime ? false : true
              if (this.heat_beat_norepayTime === this.timeOut_norepayTime) {
                this.onDisconnect('heat beat to time out')
                window.clearInterval(this.heartBeatTimer)
              }
            }, 5000)
            window.clearInterval(this.connectTimer)
            this.reConnectTimes = 0
            resolve(true)
          } else {
            count++
            if (count === 20) {
              reject('time out')
            }
          }
        }, 200)
      }
      this.ws.onerror = (event) => {
        this.onDisconnect(event)
        this.isConnect = false
        reject(event)
      }
      this.ws.onmessage = (ev: MessageEvent<any>) => {
        this.onmessage(ev)
      }
      this.ws.onclose = async () => {
        this.isConnect = false
        await this.reconnect(() => {
          reject('reconnect cancel')
        })
      }
    })
  }
  public getWsStatus() {
    return (this.ws && this.ws.readyState === 1) ? true : false
  }
  public async reconnect(errFn?: () => void) {
    //断线重连
    window.clearInterval(this.heartBeatTimer)
    window.clearInterval(this.connectTimer)
    if (!this.isAutoConnect) return
    // this.ws = new WebSocket(this.websocketUrl)
    const subGameInfo = (getStore().getState().baseBoard as InitStateType).subGameInfo
    this.reConnectTimes++
    if (!this.onReConnect(this.reConnectTimes)) {
      // reject('reconnect cancel')
      errFn && errFn()
    } else {
      console.log("exit and reconnect")
      const result = await this.initSocket()
      // result && this.sendSktMessage(SKT_MAG_TYPE.AUTH, sys.localStorage.getItem("token"))
      result && (this.isConnect = true)
      result && this.sendSktMessage(SKT_MAG_TYPE.AUTH, {
        token: sys.localStorage.getItem("token"),
        gameId: this.gameId,
        isReconnection: 1
      })
    }
  }
  /**接受socket消息 */
  public onmessage(ev: MessageEvent<any> | SktMessageType) {
    // const result = decodeRSA(ev.data)

    const evData = JSON.parse(ev.data) as SktMessageType
    // evData.code !== `${this.sktCode}:-${SKT_MAG_TYPE.HEART_BEAT}` && evData.code !== `${this.sktCode}:-7` && console.log(evData)
    const msgArr = evData.code.split(":-")
    // evData.success = true;
    if (this.timeoutArr[evData.code]) {
      //清理掉超时等待的数据
      // console.log(this.timeoutArr)
      delete this.timeoutArr[evData.code]
      global.hallDispatch(setLoadingAction({ isShow: false }))
    }
    if (evData.success) {
      const typeCode = msgArr[1] as T
      if (msgArr[0] !== this.sktCode) {
        const errorStr = lang.write(k => k.WebSocketModule.WebSocketError, {}, { placeStr: "错误的游戏代" })
        global.hallDispatch(addToastAction({ content: errorStr, type: ToastType.ERROR }))
        // console.error('服务错误', '错误的游戏代码')
        this.onDataFail(typeCode, errorStr)
        this.onMessage(typeCode, '', errorStr)
        return
      }
      if (typeCode === SKT_MAG_TYPE.HEART_BEAT) {
        this.heat_beat_norepayTime = 0
      }
      this.onMessage(typeCode, evData.data)
      // sktMsgListener.dispath(typeCode as T, evData.data || undefined)
    } else {
      // this.sendNotification(BgMediatorConst.SHOW_TOAST, { content: evData['reason'] })
      const typeCode = msgArr[1] as T
      global.hallDispatch(addToastAction({ content: evData['reason'], type: ToastType.ERROR }))
      console.error(`服务错误`, evData)
      this.onDataFail(typeCode, evData)
      this.onMessage(typeCode, evData.data, evData['reason'])
      this.isAutoConnect = false
      if (evData.code === `${this.sktCode}:-${SKT_MAG_TYPE.AUTH}`) {
        // global.hallDispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.WebSocketFreeze, {}, { placeStr: "对不起，您的账户已冻结" }) }))
        window.setTimeout(() => {
          this.onAnthFail && this.onAnthFail(evData['reason'])
        }, 2000)
      }
    }
  }
  /**
   * 发送socket消息
   * @param msgType 协议头
   * @param data 数据
   * @param option 
   *  isLoading: 是否出加载
   * isReSend: 是否超时重发
   * reSendTimeOut: 重发超时时间,下一条同协议出现的时间间隔,isReSend=true,此值才生效
   * @returns 
   */
  public sendSktMessage(msgType: T | SKT_MAG_TYPE, data?: string | ArrayBuffer | Blob | ArrayBufferView | any, option?: {
    isLoading?: boolean,
    isReSend?: boolean,
    reSendTimeOut?: number
  }) {
    // (msgType === '501' || msgType === '802') && sendNativeVibrate(50)
    if (this.ws.readyState !== 1) {
      global.hallDispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.WebSocketError, {}, { placeStr: "network error" }), type: ToastType.ERROR }))
      return
    }
    const _option = Object.assign({
      isLoading: false,
      isReSend: false,
      reSendTimeOut: 2000
    }, option || {})
    if (_option.isLoading) {
      global.hallDispatch(setLoadingAction({ isShow: true }))
    }
    // if (_option.isReSend) {
    //   this.timeoutArr[`${this.sktCode}:-${msgType}`] = new Date().getTime()
    //   // console.log(this.timeoutArr)
    //   this.resendTime && window.clearTimeout(this.resendTime)
    //   this.resendTime = window.setTimeout(() => {
    //     //如果超时后对应的信息还在，说明没被清理掉，那么就重发
    //     if (this.timeoutArr[`${this.sktCode}:-${msgType}`]) {
    //       global.hallDispatch(setLoadingAction({ isShow: true, isAllowCloseLoading: true }))
    //       this.sendSktMessage(msgType, data, option)
    //     }
    //   }, _option.reSendTimeOut)
    // }
    // console.log('sendmessage ======== ' + JSON.stringify({ code: `${this.sktCode}:${msgType}`, data }))
    this.ws && this.ws.send(JSON.stringify({ code: `${this.sktCode}:${msgType}`, data }))
  }
  /**主动关闭ws，不会默认重连 */
  public close() {
    this.isConnect = false
    this.isAutoConnect = false
    this.ws && this.ws.close()
  }


  public connectCallback(callBack: () => void) {
    this.connectCallBackHandlerMap.push(callBack)
  }
}