System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, error, sys, ToastType, addToastAction, setLoadingAction, getStore, global, lang, WebSocketToDo, _crd, SKT_MAG_TYPE;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfInitStateType(extras) {
    _reporterNs.report("InitStateType", "../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastType(extras) {
    _reporterNs.report("ToastType", "../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetLoadingAction(extras) {
    _reporterNs.report("setLoadingAction", "../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfredux(extras) {
    _reporterNs.report("redux", "redux", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../hall/store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../hall", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      error = _cc.error;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      ToastType = _unresolved_2.ToastType;
      addToastAction = _unresolved_2.addToastAction;
      setLoadingAction = _unresolved_2.setLoadingAction;
    }, function (_unresolved_3) {
      getStore = _unresolved_3.getStore;
    }, function (_unresolved_4) {
      global = _unresolved_4.global;
      lang = _unresolved_4.lang;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9b5b06yHexGOJMRGo5DtlHM", "WebSocketToDo", undefined);

      __checkObsolete__(['error', 'log', 'sys']);

      _export("SKT_MAG_TYPE", SKT_MAG_TYPE = /*#__PURE__*/function (SKT_MAG_TYPE) {
        SKT_MAG_TYPE["HEART_BEAT"] = "1";
        SKT_MAG_TYPE["AUTH"] = "2";
        SKT_MAG_TYPE["EXIT"] = "3";
        return SKT_MAG_TYPE;
      }({}));
      /**webSocket单例，泛型请传入可能获取的消息Code枚举 */


      _export("default", WebSocketToDo = class WebSocketToDo {
        constructor() {// this.dispatch = getStore().dispatch

          this.ws = void 0;
          this.sktCode = void 0;
          this.websocketUrl = void 0;
          this.heartBeatTimer = void 0;
          this.connectTimer = void 0;
          this.connectCallBackHandlerMap = [];
          this.gameId = void 0;
          this.onMessage = void 0;
          this.onDisconnect = void 0;
          this.onReConnect = void 0;
          this.onDataFail = void 0;
          this.onAnthFail = void 0;
          this.isAutoConnect = true;
          this.dispatch = void 0;
          this.reConnectTimes = 0;
          this.maxReConnectTimes = 10;
          this.isConnect = false;
          this.resendTime = 0;

          /**第几次心跳无反馈 */
          this.heat_beat_norepayTime = 0;

          /**心跳无反馈判断为掉线的最大值 */
          this.timeOut_norepayTime = 3;
          this.timeoutArr = {};
        }

        /**初始化websocket */
        init(sktCode, gameId, websocketUrl, eventHandler) {
          this.sktCode = sktCode;
          this.gameId = gameId;
          this.websocketUrl = websocketUrl;
          this.onMessage = eventHandler.onMessage;
          this.onDisconnect = eventHandler.onDisconnect;
          this.onDataFail = eventHandler.onDataFail;
          this.onAnthFail = eventHandler.onAnthFail;
          this.onReConnect = eventHandler.onReConnect;
          return this;
        }

        initSocket() {
          var _this = this;

          return _asyncToGenerator(function* () {
            return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve, reject) {
              if (_this.ws && WebSocket.OPEN == _this.ws.readyState) {
                _this.ws.close();

                _this.ws = null;
              }

              _this.ws = new WebSocket(_this.websocketUrl);
              /**当连接建立成功后，这个函数就会被调用 */

              _this.ws.onopen = event => {
                console.log("WebSocket has connected");
                _this.isAutoConnect = true;

                _this.connectCallBackHandlerMap.forEach(handler => handler());

                var count = 1;
                _this.connectTimer && window.clearInterval(_this.connectTimer);
                _this.connectTimer = window.setInterval(() => {
                  console.log('readyState', _this.ws.readyState);

                  if (_this.ws.readyState === 1) {
                    _this.heartBeatTimer && window.clearInterval(_this.heartBeatTimer);
                    _this.isConnect = true;
                    _this.heartBeatTimer = window.setInterval(() => {
                      _this.sendSktMessage(SKT_MAG_TYPE.HEART_BEAT, undefined);

                      _this.heat_beat_norepayTime++; // console.log('this.heat_beat_norepayTime', this.heat_beat_norepayTime)

                      _this.isConnect = _this.heat_beat_norepayTime >= _this.timeOut_norepayTime ? false : true;

                      if (_this.heat_beat_norepayTime === _this.timeOut_norepayTime) {
                        _this.onDisconnect('heat beat to time out');

                        window.clearInterval(_this.heartBeatTimer);
                      }
                    }, 5000);
                    window.clearInterval(_this.connectTimer);
                    _this.reConnectTimes = 0;
                    resolve(true);
                  } else {
                    count++;

                    if (count === 20) {
                      reject('time out');
                    }
                  }
                }, 200);
              };

              _this.ws.onerror = event => {
                _this.onDisconnect(event);

                _this.isConnect = false;
                reject(event);
              };

              _this.ws.onmessage = ev => {
                _this.onmessage(ev);
              };

              _this.ws.onclose = /*#__PURE__*/_asyncToGenerator(function* () {
                _this.isConnect = false;
                yield _this.reconnect(() => {
                  reject('reconnect cancel');
                });
              });
            }));
          })();
        }

        getWsStatus() {
          return this.ws && this.ws.readyState === 1 ? true : false;
        }

        reconnect(errFn) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            //断线重连
            window.clearInterval(_this2.heartBeatTimer);
            window.clearInterval(_this2.connectTimer);
            if (!_this2.isAutoConnect) return; // this.ws = new WebSocket(this.websocketUrl)

            var subGameInfo = (_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
              error: Error()
            }), getStore) : getStore)().getState().baseBoard.subGameInfo;
            _this2.reConnectTimes++;

            if (!_this2.onReConnect(_this2.reConnectTimes)) {
              // reject('reconnect cancel')
              errFn && errFn();
            } else {
              console.log("exit and reconnect");
              var result = yield _this2.initSocket(); // result && this.sendSktMessage(SKT_MAG_TYPE.AUTH, sys.localStorage.getItem("token"))

              result && (_this2.isConnect = true);
              result && _this2.sendSktMessage(SKT_MAG_TYPE.AUTH, {
                token: sys.localStorage.getItem("token"),
                gameId: _this2.gameId,
                isReconnection: 1
              });
            }
          })();
        }
        /**接受socket消息 */


        onmessage(ev) {
          // const result = decodeRSA(ev.data)
          var evData = JSON.parse(ev.data); // evData.code !== `${this.sktCode}:-${SKT_MAG_TYPE.HEART_BEAT}` && evData.code !== `${this.sktCode}:-7` && console.log(evData)

          var msgArr = evData.code.split(":-"); // evData.success = true;

          if (this.timeoutArr[evData.code]) {
            //清理掉超时等待的数据
            // console.log(this.timeoutArr)
            delete this.timeoutArr[evData.code];
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).hallDispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
              error: Error()
            }), setLoadingAction) : setLoadingAction)({
              isShow: false
            }));
          }

          if (evData.success) {
            var typeCode = msgArr[1];

            if (msgArr[0] !== this.sktCode) {
              var errorStr = (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.WebSocketModule.WebSocketError, {}, {
                placeStr: "错误的游戏代"
              });
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: errorStr,
                type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                  error: Error()
                }), ToastType) : ToastType).ERROR
              })); // console.error('服务错误', '错误的游戏代码')

              this.onDataFail(typeCode, errorStr);
              this.onMessage(typeCode, '', errorStr);
              return;
            }

            if (typeCode === SKT_MAG_TYPE.HEART_BEAT) {
              this.heat_beat_norepayTime = 0;
            }

            this.onMessage(typeCode, evData.data); // sktMsgListener.dispath(typeCode as T, evData.data || undefined)
          } else {
            // this.sendNotification(BgMediatorConst.SHOW_TOAST, { content: evData['reason'] })
            var _typeCode = msgArr[1];
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
              error: Error()
            }), addToastAction) : addToastAction)({
              content: evData['reason'],
              type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                error: Error()
              }), ToastType) : ToastType).ERROR
            }));
            console.error("\u670D\u52A1\u9519\u8BEF", evData);
            this.onDataFail(_typeCode, evData);
            this.onMessage(_typeCode, evData.data, evData['reason']);
            this.isAutoConnect = false;

            if (evData.code === this.sktCode + ":-" + SKT_MAG_TYPE.AUTH) {
              // global.hallDispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.WebSocketFreeze, {}, { placeStr: "对不起，您的账户已冻结" }) }))
              window.setTimeout(() => {
                this.onAnthFail && this.onAnthFail(evData['reason']);
              }, 2000);
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


        sendSktMessage(msgType, data, option) {
          // (msgType === '501' || msgType === '802') && sendNativeVibrate(50)
          if (this.ws.readyState !== 1) {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
              error: Error()
            }), addToastAction) : addToastAction)({
              content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.WebSocketModule.WebSocketError, {}, {
                placeStr: "network error"
              }),
              type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                error: Error()
              }), ToastType) : ToastType).ERROR
            }));
            return;
          }

          var _option = Object.assign({
            isLoading: false,
            isReSend: false,
            reSendTimeOut: 2000
          }, option || {});

          if (_option.isLoading) {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).hallDispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
              error: Error()
            }), setLoadingAction) : setLoadingAction)({
              isShow: true
            }));
          } // if (_option.isReSend) {
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


          this.ws && this.ws.send(JSON.stringify({
            code: this.sktCode + ":" + msgType,
            data
          }));
        }
        /**主动关闭ws，不会默认重连 */


        close() {
          this.isConnect = false;
          this.isAutoConnect = false;
          this.ws && this.ws.close();
        }

        connectCallback(callBack) {
          this.connectCallBackHandlerMap.push(callBack);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b0d490450c302e5831d5b85f5c71b355e091e569.js.map