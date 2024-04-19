System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Crash_HttpManager, ProtocolCode, HttpProtocol, UserLoginProtocol, _crd;

  function _reportPossibleCrUseOfCrash_HttpManager(extras) {
    _reporterNs.report("Crash_HttpManager", "../Crash_HttpManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocolCode(extras) {
    _reporterNs.report("ProtocolCode", "./ProtocolDef", _context.meta, extras);
  }

  _export({
    HttpProtocol: void 0,
    UserLoginProtocol: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Crash_HttpManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      ProtocolCode = _unresolved_3.ProtocolCode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "33f66jEr2JNbZbm1a64mlwu", "HttpProtocol", undefined);

      _export("HttpProtocol", HttpProtocol = class HttpProtocol {
        constructor() {
          this.code = 0;
          this.method = "";
          this.url = "";
        }

        toString() {
          if (this.method == "GET") {
            let keys = [];
            Object.keys(this).forEach(key => {
              if (key != "code" && key != "method" && key != "url") {
                keys.push(key);
              }
            });
            let ret = "";

            if (keys.length > 0) {
              ret += "?";
            }

            for (let i = 0; i < keys.length; ++i) {
              let key = keys[i];
              ret += key + "=" + encodeURIComponent(this[key]);

              if (i < keys.length - 1) {
                ret += "&";
              }
            }

            return ret;
          }

          if (this.method == "POST") {
            let keys = [];
            Object.keys(this).forEach(key => {
              if (key != "code" && key != "method" && key != "url") {
                keys.push(key);
              }
            });
            let ret = "";

            if (keys.length > 0) {
              let obj = {};

              for (let i = 0; i < keys.length; ++i) {
                obj[keys[i]] = this[keys[i]];
              }

              return JSON.stringify(obj);
            }

            return ret;
          }

          return "";
        }

        send(...args) {
          (_crd && Crash_HttpManager === void 0 ? (_reportPossibleCrUseOfCrash_HttpManager({
            error: Error()
          }), Crash_HttpManager) : Crash_HttpManager).getInstance().send(this, args);
        }

      });

      _export("UserLoginProtocol", UserLoginProtocol = class UserLoginProtocol extends HttpProtocol {
        constructor() {
          super();
          this.code = (_crd && ProtocolCode === void 0 ? (_reportPossibleCrUseOfProtocolCode({
            error: Error()
          }), ProtocolCode) : ProtocolCode).NATIVE_USER_LOGIN;
          this.method = "GET";
          this.url = "api/game/wsList";
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f9b0d3b0415e34d44bc1f0df01908fd98005e557.js.map