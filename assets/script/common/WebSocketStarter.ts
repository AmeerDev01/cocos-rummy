import Singleton from "../utils/Singleton";
import SktListener from "./SktListener";
import AES from "../utils/encryption"
import { baseBoardView, global, lang } from "../hall";
import { ToastType, addToastAction, setLoadingAction, setSocketConnectStatus } from "../hall/store/actions/baseBoard";
import { HallGameGateType, config, subGameList } from "../hall/config";
import { log, sys } from "cc";
import { getIsTest } from "../config/GameConfig";
import { DEV } from "cc/env";

export enum SKT_OPERATION {
  GENERAL = "GENERAL", //非加密操作
  ENCRYPT = "ENCRYPT", //加密操作
  LOGIN = "LOGIN", //登录房间
  LOGOUT = "LOGOUT", //登出房间
  HEART = "HEART", //心跳
  INTERACTION = "INTERACTION", //交互指令
  /**服务端推的错误消息 */
  ERROR = "ERROR",
  /**恢复到游戏 */
  RECOVER = "RECOVER"
}


export enum SKT_HOST {
  HALL = "HALL",
  SLOTS = "SLOTS",
  MULTI = "MULTI",
  BATTLE = "BATTLE"
}
export type MessageBody = {
  messageId: string,
  operation: SKT_OPERATION,
  host: SKT_HOST,
  sktCode: any,
  gameId: number,
  length: number,
  data: any
}

export enum EVEVT_TYPE {
  /**建立连接成功 */
  OPEN,
  /**建立连接失败 */
  CONNECT_ERROR,
  /**返回的数据错误 */
  DATA_ERROR,
  /**警告 */
  WARN,
  /**断线 */
  DISCONNECT,
  /**开始重连 */
  RECONNECT,
  /**重连成功 */
  RECONNECT_SUCCESS,
  /**收到消息 */
  MESSAGE,
  /**心跳 */
  HEART_BEAT
}
const msgMap: { [key: number]: SktMessager<any> } = {}
/**专门为单一socket、多类型而设计 */
export default class WebSocketStarter extends Singleton {
  public ws: WebSocket
  public isConnect: boolean = false
  /**循环连接timer */
  public connectTimer: number = 0
  public heartBeatTimer: number = 0
  private websocketUrl: string
  private heart_beatList: Array<SktMessager<unknown>> = []
  public eventListener = new SktListener<EVEVT_TYPE>()
  /**最大重连次数 */
  public maxReconnectTime: number = 5
  /**剩余重试次数 */
  public remainRetryCount: number = 0
  public isReconnecting: boolean = false
  private isAllowReconnect: boolean = true
  private reconnectTimeOutTimer: number = 0
  /**socket是否已经出发open，用于判断在promise中，如果socket已经open之后，将不会再调用reject */
  private isSocketOpen: boolean = false
  public initSocket(websocketUrl?: string) {
    this.websocketUrl = websocketUrl || (config.websocketUrl + `?Token=${sys.localStorage.getItem("token")}`)
    this.reconnectTimeOutTimer && window.clearTimeout(this.reconnectTimeOutTimer)
    return new Promise((resolve, reject) => {
      this.isSocketOpen = false
      if (this.ws && WebSocket.OPEN == this.ws.readyState) {
        resolve(true)
      } else {
        /**当连接建立成功后，这个函数就会被调用 */
        this.ws = new WebSocket(this.websocketUrl)
        this.ws.onopen = (event) => {
          console.log("WebSocket has connected")
          // log("WebSocket has connected")
          this.isAllowReconnect = true
          this.isConnect = true
          let count = 1
          this.reconnectTimeOutTimer && window.clearTimeout(this.reconnectTimeOutTimer)
          this.connectTimer && window.clearInterval(this.connectTimer)
          this.connectTimer = window.setInterval(() => {
            // console.log('readyState', this.ws.readyState)
            if (this.ws && this.ws.readyState === 1) {
              this.isSocketOpen = true
              this.heartBeatTimer && window.clearInterval(this.heartBeatTimer)
              this.heart_beatList = []
              this.isConnect = true
              this.isReconnecting = false
              this.remainRetryCount = this.maxReconnectTime
              this.heartBeatTimer = window.setInterval(() => {
                const heart_beat = new SktMessager<unknown>(this.ws, SKT_OPERATION.HEART, '', 0)
                this.heart_beatList.push(heart_beat)
                heart_beat.send()
                if (this.heart_beatList.length === 2) {
                  //如果发起心跳的时候，还有未收到回复的心跳，就要预警
                  this.eventListener.dispath(EVEVT_TYPE.WARN, 'no heart beat reply')
                } else if (this.heart_beatList.length > 2) {
                  if (this.ws) {
                    this.ws.close()
                    window.clearInterval(this.heartBeatTimer)
                    console.log('心跳超时断开')
                    this.reConnect()
                  }
                }
              }, 4000)
              window.clearInterval(this.connectTimer)
              this.eventListener.dispath(EVEVT_TYPE.OPEN, true)
              resolve(true)
            } else {
              count++
              if (count === 20) {
                window.clearInterval(this.connectTimer)
                console.log('重连超时')
                this.ws && this.ws.close()
                !this.isSocketOpen && reject('time out')
              }
            }
          }, 200)
        }
        this.ws.onerror = (event) => {
          console.log('连接错误')
          this.connectTimer && window.clearInterval(this.connectTimer)
          this.onDisconnect()
        }
        this.ws.onmessage = (ev) => {
          //先解析
          const [messageId, operation, host, sktCode, gameIdStr, length, dataBody] = ev.data.toString().split('|')
          const gameId: number = +gameIdStr
          let data = dataBody
          if (operation === SKT_OPERATION.HEART) {
            this.heart_beatList = []
            this.eventListener.dispath(EVEVT_TYPE.HEART_BEAT, {})
          } else if (operation === SKT_OPERATION.ERROR) {
            this.eventListener.dispath(EVEVT_TYPE.DATA_ERROR, dataBody)
          } else {
            data = dataBody
            // operation === SKT_OPERATION.ENCRYPT && (data = AES.decode(data))
            try {
              data = JSON.parse(dataBody)
            } catch (e) {
              console.log('skt json data error', dataBody, e)
              // this.eventListener.dispath(EVEVT_TYPE.MESSAGE, { messageId, operation, host, sktCode, gameId: +gameId, length: +length, data: dataBody })
              // this.eventListener.dispath(EVEVT_TYPE.DATA_ERROR, dataBody)
            }
            try {
              this.eventListener.dispath(EVEVT_TYPE.MESSAGE, { messageId, operation, host, sktCode, gameId: +gameId, length: +length, data })
            } catch (e) {
              global.hallDispatch(addToastAction({
                content: lang.write(k => k.WebSocketModule.ErrorGeneral, {}, { placeStr: "服务数据错误" }) + `[${sktCode}]:${e}`,
                type: ToastType.ERROR, forceLandscape: false
              }))
              console.error(e)
            }
          }
          operation !== SKT_OPERATION.HEART && global.hallDispatch(setLoadingAction({ isShow: false, flagId: messageId }))
          msgMap[messageId] && msgMap[messageId].receive({ messageId, operation, host, sktCode, gameId, length, data })
        }
        this.ws.onclose = () => {
          this.isConnect = false
          this.connectTimer && window.clearInterval(this.connectTimer)
          console.log('连接已关闭')
          this.isAllowReconnect && this.onDisconnect()
        }
        this.reconnectTimeOutTimer = window.setTimeout(() => {
          this.ws && this.ws.close()
        }, 5000)
      }
    })
  }
  /**发起重连 */
  public reConnect(force: boolean = false) {
    if (!force && this.isReconnecting) {
      this.isReconnecting = false
      console.log('重连取消', this)
      return
    }
    this.isReconnecting = true
    this.isConnect = false
    if (this.remainRetryCount <= 0) {
      console.log('次数达上限')
      this.isReconnecting = false
    } else {
      this.remainRetryCount--
      console.log('发起重连', this.remainRetryCount)
      this.eventListener.dispath(EVEVT_TYPE.RECONNECT, this.remainRetryCount)
      this.ws = null
      // 500ms后重试
      window.setTimeout(() => {
        console.log('500ms后重试')
        this.initSocket().then(e => {
          console.log('连接成功！！')
          this.isReconnecting = false
          this.eventListener.dispath(EVEVT_TYPE.RECONNECT_SUCCESS, {})
        }).catch(e => {
          console.log('重连失败')
          this.isReconnecting = false
          this.reConnect(true)
        })
      }, 1000)
    }
  }
  private onDisconnect(message?: string) {
    console.log('通知断连')
    this.isConnect = false
    this.eventListener.dispath(EVEVT_TYPE.DISCONNECT, message)
    this.reConnect()
  }
  public exit() {
    console.log('连接退出')
    this.isAllowReconnect = false
    window.clearInterval(this.heartBeatTimer)
    this.ws && this.ws.close()
  }
}
/**websocket的实际驱动类 */
export class WebSocketDriver<SKT_TYPE> {
  constructor(gameId: number, host: SKT_HOST) {
    this.gameId = gameId
    this.host = host
    this.driverId = parseInt((Math.random() * Math.pow(10, 10)).toString()).toString()
    this.sktMsgListener = new SktListener<SKT_TYPE>()
    //每个Driver都会监听一个全局的message事件，然后在这里判读分流
    WebSocketStarter.Instance().eventListener.add(EVEVT_TYPE.MESSAGE, this.driverId, (messageBody: MessageBody) => {
      if (messageBody.operation === SKT_OPERATION.ERROR) {
        //消息出现业务错误
        this.sktMsgListener.dispath(messageBody.sktCode as SKT_TYPE, {}, messageBody.data)
      } else if (messageBody.operation === SKT_OPERATION.RECOVER) {
        this.filterData(messageBody.data, messageBody)
      } else {
        if (messageBody.host === this.host && messageBody.gameId === this.gameId) {
          const { data, error } = this.filterData(messageBody.data, messageBody)
          DEV && this.gameId > 0 && console.log(`${new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai' })} 收到${this.gameId}--${messageBody.sktCode}消息`, data)
          this.sktMsgListener.dispath(messageBody.sktCode as SKT_TYPE, data, error)
        }
      }
    })
  }
  private driverId: string
  public gameId: number
  public server: string
  public host: SKT_HOST
  // public messagerMap: { [key: number]: SktMessager<SKT_TYPE> }
  public sktMsgListener: SktListener<SKT_TYPE> = null
  public filterData(data: any, source: MessageBody): { data: any, error: any } {
    return { data, error: undefined }
  }
  public sendSktMessage(sktCode: SKT_TYPE, payLoad?: string | ArrayBuffer | Blob | ArrayBufferView | any,
    option?: {
      isLoading?: boolean,
      operation?: SKT_OPERATION,
      /**超时时间，大于这个时间未收到回复，将会调用超时函数 */
      timeOut?: number,
    }) {
    const _option = Object.assign({ isLoading: false, operation: SKT_OPERATION.GENERAL, timeOut: 3000 }, option || {})
    DEV && this.gameId > 0 && console.log(`${new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai' })} 发送${this.gameId}--${sktCode}消息`, payLoad)
    const sktMessager = new SktMessager(WebSocketStarter.Instance().ws, _option.operation, payLoad, this.gameId, sktCode, this.host)
    // this.messagerMap[sktMessager.messageId] = sktMessager
    _option.isLoading && global.hallDispatch(setLoadingAction({ isShow: true, isAllowCloseLoading: false, flagId: sktMessager.messageId }))
    sktMessager.send(_option.timeOut)
    return sktMessager
  }
  public loginGame(loginMethod: string) {
    const sktMessager = new SktMessager(WebSocketStarter.Instance().ws, SKT_OPERATION.LOGIN, { gameId: this.gameId }, this.gameId, loginMethod, this.host)
    sktMessager.send(3000)
    sktMessager.bindReceiveHandler((message) => {
      //收到反馈消息的回调
    })
    return sktMessager
  }
  public logoutGame(logoutMethod: string) {
    const sktMessager = new SktMessager(WebSocketStarter.Instance().ws, SKT_OPERATION.LOGOUT, { gameId: this.gameId }, this.gameId, logoutMethod, this.host)
    sktMessager.send()
    WebSocketStarter.Instance().eventListener.removeById(this.driverId)
    this.sktMsgListener.clearLinster()
    return sktMessager
  }
}

export class SktMessager<SKT_TYPE> {
  constructor(ws: WebSocket, operation: SKT_OPERATION, payLoad: Object, gameId: number, sktCode?: SKT_TYPE, host?: SKT_HOST) {
    this.ws = ws
    this.operation = operation
    this.host = host
    this.sktCode = sktCode
    this.gameId = gameId
    this.payLoad = payLoad
    this.messageId = this.generateMessageId().toString()
    this.status = 'INIT'
  }
  public operation: SKT_OPERATION
  public host: SKT_HOST
  public sktCode: SKT_TYPE
  public gameId: number
  public messageId: string
  public status: 'INIT' | 'SENDED' | 'DONE'
  private ws: WebSocket = null
  private payLoad: Object = null
  private receiveData: MessageBody = null
  private sendTime: number = 0
  private receiveTime: number = 0
  /**响应的样本数据 */
  private verifySampleData: { [key: string]: any }
  /**返回false，或者不调用bindTimeoutHandler函数，收到回复后将自动删除此message */
  private timeoutHandler: () => boolean
  private receiveHandler: (receiveData: MessageBody, isPassDataVerify?: boolean) => void
  /**生成信息ID */
  private generateMessageId() {
    const readom = parseInt((Math.random() * Math.pow(10, 10)).toString())
    return Date.now() + readom
  }
  /**
   * 设置超时的时间函数
   * @param handler 返回false会自动清除消息
   */
  public bindTimeoutHandler(handler: () => boolean) {
    this.timeoutHandler = handler
  }
  /**
   * 设置校验数据
   * @param sampleData 校验的样本数据
   */
  public setSampleData(sampleData: { [key: string]: any }) {
    this.verifySampleData = sampleData
  }
  /**
   * 绑定回复消息的回调函数
   * @param handler 回调函数(若传入了samplaData，函数会给出是否通过数据验证isPassDataVerify，若不传samplaData则isPassDataVerify将默认回传true)
   * @param sampleData 如果要验证数据，此处要传入样本数据
   */
  public bindReceiveHandler(handler: (receiveData: MessageBody, isPassDataVerify?: boolean) => void, sampleData?: { [key: string]: any }) {
    this.verifySampleData = sampleData
    this.receiveHandler = handler
  }
  public send(timeOut: number = 0) {
    if (!this.ws || (this.ws && this.ws.readyState !== 1)) {
      console.warn('websocket unconnected, send cancel!')
      return false
    }
    this.payLoad = this.payLoad
    if (this.operation === SKT_OPERATION.HEART) {
      this.ws.send(`${this.messageId}|${this.operation}`)
    } else {
      // const data = this.operation === SKT_OPERATION.ENCRYPT ? AES.encode(JSON.stringify(this.payLoad)) : JSON.stringify(this.payLoad)
      const data = JSON.stringify(this.payLoad || '')
      this.ws.send(`${this.messageId}|${this.operation}|${this.host}|${this.sktCode}|${this.gameId}|${data.length}|${data}`)
      this.sendTime = Date.now()
      timeOut && window.setTimeout(() => {
        if (this && !this.receiveData && this.timeoutHandler) {
          console.warn('The corresponding message was not received：' + this.messageId)
          if (!this.timeoutHandler()) {
            delete msgMap[this.messageId]
          }
        }
      }, timeOut)
    }
    msgMap[this.messageId] = this
    this.status = 'SENDED'
    return true
  }
  public receive(receiveData: MessageBody) {
    if (receiveData.messageId === this.messageId) {
      this.receiveData = receiveData
      this.receiveTime = Date.now()
      this.status = 'DONE'
      let isPassDataVerify = true
      if (this.verifySampleData && !validateJson(this.verifySampleData, receiveData.data || {})) {
        console.warn('The socket response data did not pass validation', receiveData)
        isPassDataVerify = false
      }
      if (!this.timeoutHandler) {
        delete msgMap[this.messageId]
      }
      this.receiveHandler && this.receiveHandler(receiveData, isPassDataVerify)
    }
  }
}

/**
   * 用于验证数据是否非法
   * @param sampleData 样本数据
   * @param data 被验证的数据
   * @param isCheckUnexpected 是否检查多余的字段
   * @returns 
   */
export const validateJson = (sampleData: Object, data: Object, isCheckUnexpected: boolean = true) => {
  // 检查是否为对象
  if (typeof data !== 'object' || data === null || data === undefined) {
    return false
  }
  // 遍历样本数据的字段
  for (const key in sampleData) {
    if (sampleData.hasOwnProperty(key)) {
      // 检查字段是否存在
      if (!(key in data)) {
        console.error(`Missing field: ${key}`)
        return false
      }
      // 检查字段的数据格式，这里假设样本数据中定义了数据格式
      const expectedType = typeof sampleData[key];
      const actualType = typeof data[key];
      if (actualType !== expectedType && (Array.isArray(sampleData[key]) && !Array.isArray(data[key]))) {
        console.error(`Invalid data type for field ${key}. Expected ${expectedType}, got ${actualType}`)
        return false
      }
    }
  }
  if (isCheckUnexpected) {
    // 遍历传入数据的字段，检查是否多余
    for (const key in data) {
      if (data.hasOwnProperty(key) && !(key in sampleData)) {
        console.warn(`Unexpected field: ${key}`)
        // 如果需要禁止多余的字段，可以返回false
      }
    }
  }
  return true
}
