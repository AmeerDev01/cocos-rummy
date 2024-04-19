System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Notification, _crd;

  function _reportPossibleCrUseOfINotification(extras) {
    _reporterNs.report("INotification", "../../interfaces/INotification", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "22736L80IpH/onb1YIIHVfj", "Notification", undefined);

      _export("default", Notification = class Notification {
        constructor(name, body, type) {
          if (body === void 0) {
            body = null;
          }

          if (type === void 0) {
            type = null;
          }

          this.name = null;
          this.body = null;
          this.type = null;
          this.name = name;
          this.body = body;
          this.type = type;
        }

        getName() {
          return this.name;
        }

        setBody(body) {
          this.body = body;
        }

        getBody() {
          return this.body;
        }

        setType(type) {
          this.type = type;
        }

        getType() {
          return this.type;
        }

        toString() {
          var msg = "Notification Name: " + this.getName();
          msg += "\nBody:" + (this.getBody() == null ? "null" : this.getBody().toString());
          msg += "\nType:" + (this.getType() == null ? "null" : this.getType());
          return msg;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=df9cdd27cd151572d975594099e3d16f41a81f63.js.map