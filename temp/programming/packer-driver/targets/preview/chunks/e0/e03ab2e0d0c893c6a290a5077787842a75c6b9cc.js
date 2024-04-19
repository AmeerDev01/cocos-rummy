System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Proxy, BaseProxy, _crd;

  function _reportPossibleCrUseOfProxy(extras) {
    _reporterNs.report("Proxy", "../../Framework/patterns/proxy/Proxy", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Proxy = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9259c2vwYlHypfnKLpN5nyn", "BaseProxy", undefined);

      _export("default", BaseProxy = class BaseProxy extends (_crd && Proxy === void 0 ? (_reportPossibleCrUseOfProxy({
        error: Error()
      }), Proxy) : Proxy) {
        constructor(proxyName, data) {
          if (proxyName === void 0) {
            proxyName = null;
          }

          if (data === void 0) {
            data = null;
          }

          super(proxyName, data);
          this.keyMapToData = {};
          this.keyMapToSys = {};
          this.repository = void 0;
        }

        getRepository() {
          return this.repository;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e03ab2e0d0c893c6a290a5077787842a75c6b9cc.js.map