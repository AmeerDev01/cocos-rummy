System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfIProxy(extras) {
    _reporterNs.report("IProxy", "./IProxy", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd9f33xBwJINZSPJT3N0CCk", "IModel", undefined);
      /**
       * PureMVC Proxy 接口定义。
       * 
       * 在PureMVC中， IModel类提供对模型对象的访问，通过IProxy命名查找
       *
       * Model实例：
       * 维护IProxy实例的缓存。
       * 提供用于注册，查找和删除Proxy实例的方法。
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5ddf2d345f4b97273010b577c51d948b45f5f56a.js.map