System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, Crash_GameManager, Crash_NetMsgDispatcher, ProtocolCode, WsProtocol, global, lang, addToastAction, Crash_WsManager, _crd, WebSocketState;

  function _reportPossibleCrUseOfCrash_GameManager(extras) {
    _reporterNs.report("Crash_GameManager", "../manager/Crash_GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_NetMsgDispatcher(extras) {
    _reporterNs.report("Crash_NetMsgDispatcher", "./Crash_NetMsgDispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocolCode(extras) {
    _reporterNs.report("ProtocolCode", "./protocol/ProtocolDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWsProtocol(extras) {
    _reporterNs.report("WsProtocol", "./protocol/WsProtocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "db://assets/script/hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "db://assets/script/hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      Crash_GameManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      Crash_NetMsgDispatcher = _unresolved_3.default;
    }, function (_unresolved_4) {
      ProtocolCode = _unresolved_4.ProtocolCode;
    }, function (_unresolved_5) {
      WsProtocol = _unresolved_5.WsProtocol;
    }, function (_unresolved_6) {
      global = _unresolved_6.global;
      lang = _unresolved_6.lang;
    }, function (_unresolved_7) {
      addToastAction = _unresolved_7.addToastAction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ff266hxt+lJA6IEoseMWyFn", "Crash_WsManager", undefined);

      __checkObsolete__(['assetManager', 'sys']);

      WebSocketState = /*#__PURE__*/function (WebSocketState) {
        WebSocketState[WebSocketState["Normal"] = 0] = "Normal";
        WebSocketState[WebSocketState["Connecting"] = 1] = "Connecting";
        WebSocketState[WebSocketState["Connected"] = 2] = "Connected";
        WebSocketState[WebSocketState["Closed"] = 3] = "Closed";
        return WebSocketState;
      }(WebSocketState || {});

      _export("default", Crash_WsManager = class Crash_WsManager {
        constructor() {
          this.url = null;
          this.ws = null;
          this.wsState = WebSocketState.Normal;
          this.sendedMsgs = new Map();
          this.queueId = 0;
          this.isReConnect = false;
          this.reConnectCnt = 0;
          this.isForceClose = false;
          this.lastSendTm = 1;
          this.heartbeatCount = 0;
          this.heartbeatTimer = null;
          this.secondTm = 0;
        }

        static getInstance() {
          if (this.instance == null) {
            this.instance = new Crash_WsManager();
          }

          return this.instance;
        }

        connect(url) {
          // let queryString=''
          // for (const key in data) {
          //     if (queryString) {
          //         queryString += '&';
          //     }
          //     queryString += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
          // }
          // this.url = `${url}?${queryString}`;
          this.url = url;
          this.isReConnect = false;
          this.reConnectCnt = 0;
          this.isForceClose = false;
          this.sendedMsgs.clear();
          this.createConnect();
        }

        reConnect() {
          if (this.ws) {
            this.ws.close();
          }

          if (this.reConnectCnt > 5) {
            (_crd && Crash_GameManager === void 0 ? (_reportPossibleCrUseOfCrash_GameManager({
              error: Error()
            }), Crash_GameManager) : Crash_GameManager).getInstance().logout();
            return;
          }

          this.isReConnect = true;
          ++this.reConnectCnt;
          setTimeout(() => {
            this.createConnect();
          }, 1000);
        }

        closeConnect() {
          this.isForceClose = true;

          if (this.ws) {
            this.ws.close();
          }
        }

        createConnect() {
          console.log("Create connect:", String(this.url)); //data

          if (sys.isNative) {
            this.ws = new WebSocket(this.url);
          } else {
            this.ws = new WebSocket(this.url);
          }

          this.ws.onopen = ev => {
            Crash_WsManager.getInstance().onOpen(ev);
          };

          this.ws.onclose = ev => {
            Crash_WsManager.getInstance().onClosed(ev);
          };

          this.ws.onerror = ev => {
            Crash_WsManager.getInstance().onError(ev);
          };

          this.ws.onmessage = ev => {
            Crash_WsManager.getInstance().onMessage(ev);
          };

          this.wsState = WebSocketState.Connecting;
        }

        onOpen(ev) {
          this.wsState = WebSocketState.Connected;
          console.log("[onOpen]:", ev);

          if (this.isReConnect) {
            this.isReConnect = false;
            this.reConnectCnt = 0;
            this.sendedMsgs.clear();
          }
        }

        onClosed(ev) {
          this.wsState = WebSocketState.Closed;
          console.log("[onClosed]:", ev);

          if (!this.isForceClose) {
            setTimeout(() => {
              this.reConnect();
            }, 1000);
          }
        }

        onError(ev) {
          console.log("[onError]:", ev);
          (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
            error: Error()
          }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
            error: Error()
          }), addToastAction) : addToastAction)({
            content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
              error: Error()
            }), lang) : lang).write(k => k.WebSocketModule.socketConnectDateFail, {}, {
              placeStr: "连接失败"
            })
          }));
        }

        onMessage(ev) {
          // console.log("[onMessage]:", JSON.parse(ev.data));
          this.dealMessge(JSON.parse(ev.data)); //    if(JSON.parse(ev.data).code===ProtocolCode.RES_HEART_BEAT){
          //         // this.heartbeatCount++;
          //         // this.resetHeartbeatTimer();
          //    }else{
          //     this.dealMessge(JSON.parse(ev.data));
          //    }
        }

        resetHeartbeatTimer() {
          clearTimeout(this.heartbeatTimer);
          this.heartbeatTimer = setTimeout(() => {
            if (this.heartbeatCount < 3) {
              console.log("Heartbeat check failed, closing WebSocket.");
              this.ws.close();
            } else {
              this.heartbeatCount = 0; // 重置计数器

              this.resetHeartbeatTimer(); // 重启计时器
            }
          }, 5000); // 5秒计时器
        }

        send(protocol) {
          if (this.wsState != WebSocketState.Connected) {
            return;
          }

          protocol.queueId = ++this.queueId;
          this.sendedMsgs.set(protocol.queueId, protocol);
          var tm = (_crd && Crash_GameManager === void 0 ? (_reportPossibleCrUseOfCrash_GameManager({
            error: Error()
          }), Crash_GameManager) : Crash_GameManager).getInstance().getServerTime();
          protocol.sendTm = tm;
          this.ws.send(protocol.toString());
          this.lastSendTm = tm;
        }

        dealMessge(data) {
          var code = data.code;
          var queueId = data.queueId;
          var success = data.success;
          var args = null; // if(queueId > 0) {
          //     let protocol: WsProtocol = this.sendedMsgs.get(queueId);
          //     args = protocol.args;
          //     this.sendedMsgs.delete(queueId);
          // }

          if (data.success && data.success === false) {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
              error: Error()
            }), addToastAction) : addToastAction)({
              content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.palyingModule.CrashBottomFailed, {}, {
                placeStr: data.reason
              })
            }));
          }

          (_crd && Crash_NetMsgDispatcher === void 0 ? (_reportPossibleCrUseOfCrash_NetMsgDispatcher({
            error: Error()
          }), Crash_NetMsgDispatcher) : Crash_NetMsgDispatcher).getInstance().doMsgCallBack(success, code, data, args);

          if (code == "NOT_AUTH") {
            this.closeConnect();
            (_crd && Crash_GameManager === void 0 ? (_reportPossibleCrUseOfCrash_GameManager({
              error: Error()
            }), Crash_GameManager) : Crash_GameManager).getInstance().logout();
          } else if (code == "NOTIFY_REPEATED_LOGIN") {
            this.closeConnect();
            (_crd && Crash_GameManager === void 0 ? (_reportPossibleCrUseOfCrash_GameManager({
              error: Error()
            }), Crash_GameManager) : Crash_GameManager).getInstance().logout();
          }
        }

        getLastSendTm() {
          return this.lastSendTm;
        }

        update(ft) {
          // let tm = Crash_GameManager.getInstance().getServerTime();
          this.secondTm += ft;

          if (this.secondTm >= 1) {
            this.secondTm = 0;

            if ((_crd && Crash_GameManager === void 0 ? (_reportPossibleCrUseOfCrash_GameManager({
              error: Error()
            }), Crash_GameManager) : Crash_GameManager).getInstance().getIsLogin()) {
              this.sendHeartPkgReq(); // if(this.lastSendTm > 1){
              //     this.sendHeartPkgReq();
              // }
            }
          } // for(let key of this.sendedMsgs.keys()) {
          //     let info = this.sendedMsgs.get(key);
          //     if(info.sendTm + 300 <= tm) {
          //         if(info.sendTm + 10000 <= tm){
          //             this.closeConnect();
          //             this.sendedMsgs.clear();
          //                 Crash_GameManager.getInstance().logout();
          //         }
          //         break;
          //     }
          // }

        }

        sendHeartPkgReq() {
          new (_crd && WsProtocol === void 0 ? (_reportPossibleCrUseOfWsProtocol({
            error: Error()
          }), WsProtocol) : WsProtocol)((_crd && ProtocolCode === void 0 ? (_reportPossibleCrUseOfProtocolCode({
            error: Error()
          }), ProtocolCode) : ProtocolCode).REQ_HEART_BEAT).send();
        }

      });

      Crash_WsManager.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2f5d8308d7300c45b0e3333a609d55aad6bb0d5b.js.map