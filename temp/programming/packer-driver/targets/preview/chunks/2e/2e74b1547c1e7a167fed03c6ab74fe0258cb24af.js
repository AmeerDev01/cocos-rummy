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
            var keys = [];
            Object.keys(this).forEach(key => {
              if (key != "code" && key != "method" && key != "url") {
                keys.push(key);
              }
            });
            var ret = "";

            if (keys.length > 0) {
              ret += "?";
            }

            for (var i = 0; i < keys.length; ++i) {
              var key = keys[i];
              ret += key + "=" + encodeURIComponent(this[key]);

              if (i < keys.length - 1) {
                ret += "&";
              }
            }

            return ret;
          }

          if (this.method == "POST") {
            var _keys = [];
            Object.keys(this).forEach(key => {
              if (key != "code" && key != "method" && key != "url") {
                _keys.push(key);
              }
            });
            var _ret = "";

            if (_keys.length > 0) {
              var obj = {};

              for (var _i = 0; _i < _keys.length; ++_i) {
                obj[_keys[_i]] = this[_keys[_i]];
              }

              return JSON.stringify(obj);
            }

            return _ret;
          }

          return "";
        }

        send() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

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
//# sourceMappingURL=2e74b1547c1e7a167fed03c6ab74fe0258cb24af.js.map