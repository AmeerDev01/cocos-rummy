import { sys } from "cc";
import Singleton from "../utils/Singleton";
import SktListener from "./SktListener";
import { global, lang } from "../hall";
import {
  ToastType,
  addToastAction,
  setLoadingAction
} from "../hall/store/actions/baseBoard";
import { config } from "../config/config";
import { MessageBody } from "./allTypes";
import { EVEVT_TYPE, SKT_HOST, SKT_OPERATION } from "./allEnums";

export default class WebSocketStarter extends Singleton {
  public ws: WebSocket;
  public isConnect: boolean = false;
  public connectTimer: number = 0;
  public heartBeatTimer: number = 0;
  private websocketUrl: string;
  private heart_beatList: Array<SktMessager<unknown>> = [];
  public eventListener = new SktListener<EVEVT_TYPE>();
  public maxReconnectTime: number = 5;
  public remainRetryCount: number = 0;
  public isReconnecting: boolean = false;
  private isAllowReconnect: boolean = true;
  private reconnectTimeOutTimer: number = 0;
  private isSocketOpen: boolean = false;

  public initSocket(websocketUrl?: string) {
    this.websocketUrl =
      websocketUrl ||
      config.websocketUrl + `?Token=${sys.localStorage.getItem("token")}`;

    this.reconnectTimeOutTimer &&
      window.clearTimeout(this.reconnectTimeOutTimer);

    return new Promise((resolve, reject) => {
      this.isSocketOpen = false;
      if (this.ws && WebSocket.OPEN == this.ws.readyState) {
        resolve(true);
      } else {
        this.ws = new WebSocket(this.websocketUrl);
        this.ws.onopen = (event) => {
          console.log("01: WebSocket has connected");

          this.isAllowReconnect = true;
          this.isConnect = true;
          let count = 1;
          this.reconnectTimeOutTimer &&
            window.clearTimeout(this.reconnectTimeOutTimer);
          this.connectTimer && window.clearInterval(this.connectTimer);

          this.connectTimer = window.setInterval(() => {
            if (this.ws && this.ws.readyState === 1) {
              this.isSocketOpen = true;
              this.heartBeatTimer && window.clearInterval(this.heartBeatTimer);
              this.heart_beatList = [];
              this.isConnect = true;
              this.isReconnecting = false;
              this.remainRetryCount = this.maxReconnectTime;

              this.heartBeatTimer = window.setInterval(() => {
                const heart_beat = new SktMessager<unknown>(
                  this.ws,
                  SKT_OPERATION.HEART,
                  "",
                  0
                );
                this.heart_beatList.push(heart_beat);
                heart_beat.send();
                if (this.heart_beatList.length === 2) {
                  this.eventListener.dispath(
                    EVEVT_TYPE.WARN,
                    "no heart beat reply"
                  );
                } else if (this.heart_beatList.length > 2) {
                  if (this.ws) {
                    this.ws.close();
                    window.clearInterval(this.heartBeatTimer);
                    console.log("02: Heartbeat timeout disconnection");
                    this.reConnect();
                  }
                }
              }, 4000);
              window.clearInterval(this.connectTimer);
              this.eventListener.dispath(EVEVT_TYPE.OPEN, true);
              resolve(true);
            } else {
              count++;
              if (count === 20) {
                window.clearInterval(this.connectTimer);
                console.log("03: Reconnection timeout");
                this.ws && this.ws.close();
                !this.isSocketOpen && reject(new Error("04: Timeout"));
              }
            }
          }, 200);
        };
        this.ws.onerror = (event) => {
          console.log("05: Connection error");
          this.connectTimer && window.clearInterval(this.connectTimer);
          this.onDisconnect();
        };
        this.ws.onmessage = (ev) => {
          const [
            messageId,
            operation,
            host,
            sktCode,
            gameIdStr,
            length,
            dataBody
          ] = ev.data.toString().split("|");
          const gameId: number = +gameIdStr;
          let data = dataBody;
          if (operation === SKT_OPERATION.HEART) {
            this.heart_beatList = [];
            this.eventListener.dispath(EVEVT_TYPE.HEART_BEAT, {});
          } else if (operation === SKT_OPERATION.ERROR) {
            this.eventListener.dispath(EVEVT_TYPE.DATA_ERROR, dataBody);
          } else {
            data = dataBody;

            try {
              data = JSON.parse(dataBody);
              if (gameId === 0) {
                console.log(`↓↓↓: Socket[${sktCode}] [${operation}[`);
              } else {
                console.log(
                  `↓↓↓[${gameId}]: Socket[${sktCode}] [${operation}[`
                );
              }
            } catch (e) {
              console.log("08: Socket json data error", dataBody, e);
            }
            try {
              this.eventListener.dispath(EVEVT_TYPE.MESSAGE, {
                messageId,
                operation,
                host,
                sktCode,
                gameId: +gameId,
                length: +length,
                data
              });
            } catch (e) {
              global.hallDispatch(
                addToastAction({
                  content:
                    lang.write(
                      (k) => k.WebSocketModule.ErrorGeneral,
                      {},
                      { placeStr: "09: Service data error" }
                    ) + `[${sktCode}]:${e}`,
                  type: ToastType.ERROR,
                  forceLandscape: false
                })
              );
              console.error(e);
            }
          }
          operation !== SKT_OPERATION.HEART &&
            global.hallDispatch(
              setLoadingAction({ isShow: false, flagId: messageId })
            );
          msgMap[messageId] &&
            msgMap[messageId].receive({
              messageId,
              operation,
              host,
              sktCode,
              gameId,
              length,
              data
            });
        };
        this.ws.onclose = () => {
          this.isConnect = false;
          this.connectTimer && window.clearInterval(this.connectTimer);
          console.log("10: Connection closed");
          this.isAllowReconnect && this.onDisconnect();
        };
        this.reconnectTimeOutTimer = window.setTimeout(() => {
          this.ws && this.ws.close();
        }, 5000);
      }
    });
  }

  public reConnect(force: boolean = false) {
    if (!force && this.isReconnecting) {
      this.isReconnecting = false;
      console.log("11: Reconnection Canceled", this);
      return;
    }
    this.isReconnecting = true;
    this.isConnect = false;
    if (this.remainRetryCount <= 0) {
      console.log("12: Retry has reached limit");
      this.isReconnecting = false;
    } else {
      this.remainRetryCount--;
      console.log(`13: Initiate reconnection ${this.remainRetryCount}`);
      this.eventListener.dispath(EVEVT_TYPE.RECONNECT, this.remainRetryCount);
      this.ws = null;

      window.setTimeout(() => {
        console.log("14: Retry after 500ms");
        this.initSocket()
          .then((e) => {
            console.log("15: Connection SUCCESSFULL!");
            this.isReconnecting = false;
            this.eventListener.dispath(EVEVT_TYPE.RECONNECT_SUCCESS, {});
          })
          .catch((e) => {
            console.log("16: Reconnection failed");
            this.isReconnecting = false;
            this.reConnect(true);
          });
      }, 1000);
    }
  }

  private onDisconnect(message?: string) {
    console.log("17: Disconnected");
    this.isConnect = false;
    this.eventListener.dispath(EVEVT_TYPE.DISCONNECT, message);
    this.reConnect();
  }

  public exit() {
    console.log("18: Exit");
    this.isAllowReconnect = false;
    window.clearInterval(this.heartBeatTimer);
    this.ws && this.ws.close();
  }
}
export class WebSocketDriver<SKT_TYPE> {
  constructor(gameId: number, host: SKT_HOST) {
    this.gameId = gameId;
    this.host = host;
    this.driverId = parseInt(
      (Math.random() * Math.pow(10, 10)).toString()
    ).toString();
    this.sktMsgListener = new SktListener<SKT_TYPE>();

    WebSocketStarter.Instance().eventListener.add(
      EVEVT_TYPE.MESSAGE,
      this.driverId,
      (messageBody: MessageBody) => {
        if (messageBody.operation === SKT_OPERATION.ERROR) {
          this.sktMsgListener.dispath(
            messageBody.sktCode as SKT_TYPE,
            {},
            messageBody.data
          );
        } else if (messageBody.operation === SKT_OPERATION.RECOVER) {
          this.filterData(messageBody.data, messageBody);
        } else {
          if (
            messageBody.host === this.host &&
            messageBody.gameId === this.gameId
          ) {
            const { data, error } = this.filterData(
              messageBody.data,
              messageBody
            );

            this.sktMsgListener.dispath(
              messageBody.sktCode as SKT_TYPE,
              data,
              error
            );
          }
        }
      }
    );
  }
  private driverId: string;
  public gameId: number;
  public server: string;
  public host: SKT_HOST;

  public sktMsgListener: SktListener<SKT_TYPE> = null;
  public filterData(data: any, source: MessageBody): { data: any; error: any } {
    return { data, error: undefined };
  }
  public sendSktMessage(
    sktCode: SKT_TYPE,
    payLoad?: string | ArrayBuffer | Blob | ArrayBufferView | any,
    option?: {
      isLoading?: boolean;
      operation?: SKT_OPERATION;
      timeOut?: number;
    }
  ) {
    const _option = {
      isLoading: false,
      operation: SKT_OPERATION.GENERAL,
      timeOut: 3000,
      ...(option || {})
    };

    const sktMessager = new SktMessager(
      WebSocketStarter.Instance().ws,
      _option.operation,
      payLoad,
      this.gameId,
      sktCode,
      this.host
    );

    _option.isLoading &&
      global.hallDispatch(
        setLoadingAction({
          isShow: true,
          isAllowCloseLoading: false,
          flagId: sktMessager.messageId
        })
      );
    sktMessager.send(_option.timeOut);
    return sktMessager;
  }
  public loginGame(loginMethod: string) {
    const sktMessager = new SktMessager(
      WebSocketStarter.Instance().ws,
      SKT_OPERATION.LOGIN,
      { gameId: this.gameId },
      this.gameId,
      loginMethod,
      this.host
    );
    sktMessager.send(3000);
    sktMessager.bindReceiveHandler((message) => {});
    return sktMessager;
  }
  public logoutGame(logoutMethod: string) {
    const sktMessager = new SktMessager(
      WebSocketStarter.Instance().ws,
      SKT_OPERATION.LOGOUT,
      { gameId: this.gameId },
      this.gameId,
      logoutMethod,
      this.host
    );
    sktMessager.send();
    WebSocketStarter.Instance().eventListener.removeById(this.driverId);
    this.sktMsgListener.clearLinster();
    return sktMessager;
  }
}
export class SktMessager<SKT_TYPE> {
  constructor(
    ws: WebSocket,
    operation: SKT_OPERATION,
    payLoad: Object,
    gameId: number,
    sktCode?: SKT_TYPE,
    host?: SKT_HOST
  ) {
    this.ws = ws;
    this.operation = operation;
    this.host = host;
    this.sktCode = sktCode;
    this.gameId = gameId;
    this.payLoad = payLoad;
    this.messageId = this.generateMessageId().toString();
    this.status = "INIT";
  }
  public operation: SKT_OPERATION;
  public host: SKT_HOST;
  public sktCode: SKT_TYPE;
  public gameId: number;
  public messageId: string;
  public status: "INIT" | "SENDED" | "DONE";
  private ws: WebSocket = null;
  private payLoad: Object = null;
  private receiveData: MessageBody = null;
  private sendTime: number = 0;
  private receiveTime: number = 0;
  private verifySampleData: { [key: string]: any };
  private timeoutHandler: () => boolean;
  private receiveHandler: (
    receiveData: MessageBody,
    isPassDataVerify?: boolean
  ) => void;
  private generateMessageId() {
    const readom = parseInt((Math.random() * Math.pow(10, 10)).toString());
    return Date.now() + readom;
  }

  public bindTimeoutHandler(handler: () => boolean) {
    this.timeoutHandler = handler;
  }

  public setSampleData(sampleData: { [key: string]: any }) {
    this.verifySampleData = sampleData;
  }

  public bindReceiveHandler(
    handler: (receiveData: MessageBody, isPassDataVerify?: boolean) => void,
    sampleData?: { [key: string]: any }
  ) {
    this.verifySampleData = sampleData;
    this.receiveHandler = handler;
  }

  public send(timeOut: number = 0) {
    if (!this.ws || (this.ws && this.ws.readyState !== 1)) {
      console.log("19: Websocket unconnected, send cancel!");
      return false;
    }
    if (this.operation === SKT_OPERATION.HEART) {
      this.ws.send(`${this.messageId}|${this.operation}`);
    } else {
      const data = JSON.stringify(this.payLoad || "");
      this.ws.send(
        `${this.messageId}|${this.operation}|${this.host}|${this.sktCode}|${this.gameId}|${data.length}|${data}`
      );
      if (this.gameId === 0) {
        console.log(`↑↑↑: Socket[${this.sktCode}] [${this.operation}]`);
      } else {
        console.log(
          `↑↑↑[${this.gameId}]: Socket[${this.sktCode}] [${this.operation}]`
        );
      }
      this.sendTime = Date.now();
      timeOut &&
        window.setTimeout(() => {
          if (this && !this.receiveData && this.timeoutHandler) {
            console.log(
              `22: The corresponding message was not received：${this.messageId}`
            );

            if (!this.timeoutHandler()) {
              delete msgMap[this.messageId];
            }
          }
        }, timeOut);
    }
    msgMap[this.messageId] = this;
    this.status = "SENDED";
    return true;
  }

  public receive(receiveData: MessageBody) {
    if (receiveData.messageId === this.messageId) {
      this.receiveData = receiveData;
      this.receiveTime = Date.now();
      this.status = "DONE";
      let isPassDataVerify = true;
      if (
        this.verifySampleData &&
        !validateJson(this.verifySampleData, receiveData.data || {})
      ) {
        console.log(
          `23: The socket response data did not pass validation：${receiveData}`
        );
        isPassDataVerify = false;
      }
      if (!this.timeoutHandler) {
        delete msgMap[this.messageId];
      }
      this.receiveHandler && this.receiveHandler(receiveData, isPassDataVerify);
    }
  }
}

export const validateJson = (
  sampleData: Object,
  data: Object,
  isCheckUnexpected: boolean = true
) => {
  if (typeof data !== "object" || data === null || data === undefined) {
    return false;
  }

  for (const key in sampleData) {
    if (sampleData.hasOwnProperty(key)) {
      if (!(key in data)) {
        console.log(`24: Missing field: ${key}`);
        return false;
      }

      const expectedType = typeof sampleData[key];
      const actualType = typeof data[key];
      if (
        actualType !== expectedType &&
        Array.isArray(sampleData[key]) &&
        !Array.isArray(data[key])
      ) {
        console.log(
          `25: Invalid data type for field ${key}. Expected ${expectedType}, got ${actualType}`
        );
        return false;
      }
    }
  }
  if (isCheckUnexpected) {
    for (const key in data) {
      if (data.hasOwnProperty(key) && !(key in sampleData)) {
        console.log(`26: Unexpected field: ${key}`);
      }
    }
  }
  return true;
};

const msgMap: { [key: number]: SktMessager<any> } = {};
