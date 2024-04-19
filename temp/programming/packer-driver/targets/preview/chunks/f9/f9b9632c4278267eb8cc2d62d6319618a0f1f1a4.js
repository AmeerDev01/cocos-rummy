System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Crash_GameConfig, Crash_NetMsgDispatcher, Crash_HttpManager, _crd;

  function _reportPossibleCrUseOfCrash_GameConfig(extras) {
    _reporterNs.report("Crash_GameConfig", "../config/Crash_GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_NetMsgDispatcher(extras) {
    _reporterNs.report("Crash_NetMsgDispatcher", "./Crash_NetMsgDispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpProtocol(extras) {
    _reporterNs.report("HttpProtocol", "./protocol/HttpProtocol", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Crash_GameConfig = _unresolved_2.Crash_GameConfig;
    }, function (_unresolved_3) {
      Crash_NetMsgDispatcher = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57296T7b55BTavO25IkyIf1", "Crash_HttpManager", undefined);

      _export("default", Crash_HttpManager = class Crash_HttpManager {
        constructor() {
          this.baseUrl = (_crd && Crash_GameConfig === void 0 ? (_reportPossibleCrUseOfCrash_GameConfig({
            error: Error()
          }), Crash_GameConfig) : Crash_GameConfig).HttpUrl;
          this.isEncrypt = false;
        }

        static getInstance() {
          if (this.instance == null) {
            this.instance = new Crash_HttpManager();
          }

          return this.instance;
        }

        send(protocol, args) {
          var timeOut = (_crd && Crash_GameConfig === void 0 ? (_reportPossibleCrUseOfCrash_GameConfig({
            error: Error()
          }), Crash_GameConfig) : Crash_GameConfig).TimeOut || 25000;
          this.httpSend(protocol, timeOut, args);
        }

        httpSend(protocol, timeOut, args) {
          var url = this.baseUrl + protocol.url;
          var xhr = new XMLHttpRequest(); // let token: string = DataManager.getInstance().getUserInfo().getToken() || "";

          var token = '';
          xhr.timeout = timeOut;

          xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
              var response = xhr.responseText;

              if (xhr.status == 200) {
                var data = JSON.parse(response);

                if (this.isEncrypt) {// data = decrypt(data);
                }

                this.onResponse(protocol, true, data, args);
              } else if (xhr.status == 0) {
                this.onResponse(protocol, false, {
                  rtnCode: 500,
                  msg: "The server cannot connect!"
                }, args);
              } else {
                this.onResponse(protocol, false, {
                  rtnCode: 500,
                  msg: '2'
                }, args);
              }
            }
          };

          if (protocol.method == "GET") {
            url += protocol.toString();
            xhr.open("GET", url, true);
            xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            xhr.setRequestHeader("token", token);
            xhr.send();
            console.log("[Http][GET]" + url);
          }

          if (protocol.method == "POST") {
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("token", token);

            if (this.isEncrypt) {// xhr.send(encrypt(protocol.toString()));
            } else {
              xhr.send(protocol.toString());
            }

            console.log("[Http][POST]" + url + "  DATA = " + protocol.toString());
          }

          xhr.timeout = timeOut;
        }

        onResponse(protocol, bl, data, args) {
          console.log(data);
          (_crd && Crash_NetMsgDispatcher === void 0 ? (_reportPossibleCrUseOfCrash_NetMsgDispatcher({
            error: Error()
          }), Crash_NetMsgDispatcher) : Crash_NetMsgDispatcher).getInstance().doMsgCallBack(bl, protocol.code, data, args);
        }

      });

      Crash_HttpManager.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f9b9632c4278267eb8cc2d62d6319618a0f1f1a4.js.map