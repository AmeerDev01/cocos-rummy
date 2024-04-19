System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfIMediator(extras) {
    _reporterNs.report("IMediator", "./IMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfINotification(extras) {
    _reporterNs.report("INotification", "./INotification", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIObserver(extras) {
    _reporterNs.report("IObserver", "./IObserver", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b80apeRTNAa46+ZAwhn6YL", "IView", undefined);
      /**
       * PureMVC View 接口定义。
       *
       * View实例：
       * 维护IMediator实例缓存。
       * 提供用于注册，查找和删除IMediator的方法。
       * 在注册或删除IMediator钩子函数。
       * 管理Observer列表中的每个INotification。
       * 将INotification添加到Observer列表中。
       * 提供一种广播INotification的方法。
       * 在接受INotification时通知对应IObserver。
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=52533d68d49c08f1fb9fbdc2563b7846b2d8a72c.js.map