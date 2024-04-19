System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Notifier, Mediator, _crd;

  function _reportPossibleCrUseOfIMediator(extras) {
    _reporterNs.report("IMediator", "../../interfaces/IMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfINotification(extras) {
    _reporterNs.report("INotification", "../../interfaces/INotification", _context.meta, extras);
  }

  function _reportPossibleCrUseOfINotifier(extras) {
    _reporterNs.report("INotifier", "../../interfaces/INotifier", _context.meta, extras);
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
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      Notifier = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d4935GgwF5LJa4bKv7cBA27", "Mediator", undefined);

      __checkObsolete__(['Node']);

      _export("default", Mediator = class Mediator extends (_crd && Notifier === void 0 ? (_reportPossibleCrUseOfNotifier({
        error: Error()
      }), Notifier) : Notifier) {
        constructor(mediatorName = null, viewComponent = null) {
          super();
          this.mediatorName = null;
          this.viewComponent = null;
          this.mediatorName = mediatorName != null ? mediatorName : Mediator.NAME;
          this.viewComponent = viewComponent;
        }

        getMediatorName() {
          return this.mediatorName;
        }

        getViewComponent() {
          return this.viewComponent;
        }

        setViewComponent(viewComponent) {
          this.viewComponent = viewComponent;
        }
        /**
         * @description 监听事件列表
         */


        listNotificationInterests() {
          return new Array();
        }
        /**
         * @description 监听事件处理
         * @param {INotification} notification 接收事件
         */


        handleNotification(notification) {}

        onRegister() {}

        onRemove() {}

      });

      Mediator.NAME = 'Mediator';

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=787af4f20a1da596c56e46b9502373c32c552e93.js.map