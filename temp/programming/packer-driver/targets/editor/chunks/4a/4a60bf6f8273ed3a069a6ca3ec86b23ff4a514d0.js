System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Model, _crd;

  function _reportPossibleCrUseOfIModel(extras) {
    _reporterNs.report("IModel", "../interfaces/IModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProxy(extras) {
    _reporterNs.report("IProxy", "../interfaces/IProxy", _context.meta, extras);
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

      _cclegacy._RF.push({}, "8d4ae8fZ/1BUo70n7OqJUVl", "Model", undefined);

      /**
       * PureMVC Model 接口定义
       */
      _export("default", Model = class Model {
        constructor() {
          this.proxyMap = null;
          if (Model._instance) throw Error("Model singleton already constructed!");
          Model._instance = this;
          this.proxyMap = {};
          this.initializeModel();
        }

        static get Instance() {
          if (!Model._instance) {
            Model._instance = new Model();
          }

          return Model._instance;
        }
        /**
         * @description 初始化单例Model
         */


        initializeModel() {}

        registerProxy(proxy) {
          this.proxyMap[proxy.getProxyName()] = proxy;
          proxy.onRegister();
        }

        removeProxy(proxyName) {
          let proxy = this.proxyMap[proxyName];

          if (proxy != null) {
            delete this.proxyMap[proxyName];
            proxy.onRemove();
          }

          return proxy;
        }

        retrieveProxy(proxyName) {
          return this.proxyMap[proxyName] || null;
        }

        hasProxy(proxyName) {
          return this.proxyMap[proxyName] != null;
        }

      });

      Model._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4a60bf6f8273ed3a069a6ca3ec86b23ff4a514d0.js.map