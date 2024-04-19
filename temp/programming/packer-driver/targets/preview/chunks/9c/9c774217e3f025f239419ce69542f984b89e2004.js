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

      _cclegacy._RF.push({}, "049285kUYRDqKz4IONokEks", "IMediator", undefined);
      /**
       * PureMVC Mediator 接口定义。
       * 
       * Mediator实例：
       * 实现一个通用方法，该方法返回IMediator实例所有注册的INotification列表
       * 实现INotification回调方法
       * 注册或删除时的钩子方法
       * 充当一个或多个视图组件（例如文本框或文本框）之间的中介控件，维护引用并协调其行为
       * 在PureMVC应用程序中，这是添加事件侦听器及其实现的处理程序，响应并生成INotifications
       * 
       * 当IMediator在 IView 中注册时，IView 将调用IMediator的listNotificationInterests方法，IMediator将返回 INotification 名称列表
       * IView将创建一个 Observer 对象以获得通知。
       * 封装该IMediator的handleNotification方法，用于处理INotification发送的通知
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9c774217e3f025f239419ce69542f984b89e2004.js.map