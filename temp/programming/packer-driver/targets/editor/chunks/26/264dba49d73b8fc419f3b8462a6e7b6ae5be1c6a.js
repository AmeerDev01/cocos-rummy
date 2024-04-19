System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Observer, _crd;

  function _reportPossibleCrUseOfINotification(extras) {
    _reporterNs.report("INotification", "../../interfaces/INotification", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIObserver(extras) {
    _reporterNs.report("IObserver", "../../interfaces/IObserver", _context.meta, extras);
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

      _cclegacy._RF.push({}, "a51066jckBGQLrIPHAz3D2N", "Observer", undefined);

      _export("default", Observer = class Observer {
        constructor(notifyMethod, notifyContext) {
          this.notify = null;
          this.context = null;
          this.setNotifyMethod(notifyMethod);
          this.setNotifyContext(notifyContext);
        }

        _getNotifyMethod() {
          return this.notify;
        }

        setNotifyMethod(notifyMethod) {
          this.notify = notifyMethod;
        }

        _getNotifyContext() {
          return this.context;
        }

        setNotifyContext(notifyContext) {
          this.context = notifyContext;
        }

        notifyObserver(notification) {
          this._getNotifyMethod().call(this._getNotifyContext(), notification);
        }

        compareNotifyContext(object) {
          return object === this.context;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=264dba49d73b8fc419f3b8462a6e7b6ae5be1c6a.js.map