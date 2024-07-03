System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Notifier, Proxy, _crd;

  function _reportPossibleCrUseOfINotifier(extras) {
    _reporterNs.report("INotifier", "../../interfaces/INotifier", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProxy(extras) {
    _reporterNs.report("IProxy", "../../interfaces/IProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifier(extras) {
    _reporterNs.report("Notifier", "../observer/Notifier", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Notifier = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b29b3E1691G3ruBQT1dVQx9", "Proxy", undefined);

      _export("default", Proxy = class Proxy extends (_crd && Notifier === void 0 ? (_reportPossibleCrUseOfNotifier({
        error: Error()
      }), Notifier) : Notifier) {
        constructor(proxyName, data) {
          if (proxyName === void 0) {
            proxyName = null;
          }

          if (data === void 0) {
            data = null;
          }

          super();
          this.proxyName = null;
          this.data = null;
          this.proxyName = proxyName != null ? proxyName : Proxy.NAME;
          if (data != null) this.setData(data);
        }

        getProxyName() {
          return this.proxyName;
        }

        setData(data) {
          this.data = data;
        }

        getData() {
          return this.data;
        }

        onRegister() {}

        onRemove() {}

      });

      Proxy.NAME = "Proxy";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9e3484249461c1da9c6dd18b613b378ae5b1a27f.js.map