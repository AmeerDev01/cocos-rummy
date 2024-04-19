System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfINotification(extras) {
    _reporterNs.report("INotification", "./INotification", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67c78lPlFFN+KxcPKyWkguQ", "IObserver", undefined);
      /** 
       * PureMVC Observer 接口定义。
       * 
       * 在PureMVC中，IObserver实现者承担以下责任：
       * 封装注册对象的回调方法。
       * 封装注册对象的通知内容。
       * 提供用于设置注册对象的方法。
       * 提供一种通知注册对象的方法。
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ea57247d4e0056c36947ca0d1a2348c5e005fcb4.js.map