System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Command, BaseCommand, _crd;

  function _reportPossibleCrUseOfINotification(extras) {
    _reporterNs.report("INotification", "../../Framework/interfaces/INotification", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommand(extras) {
    _reporterNs.report("Command", "../../Framework/patterns/command/Command", _context.meta, extras);
  }

  _export("BaseCommand", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Command = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca7c5yT2zpKKJR6khYsFK+1", "BaseCommand", undefined);

      _export("BaseCommand", BaseCommand = class BaseCommand extends (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
        error: Error()
      }), Command) : Command) {
        constructor() {
          super(...arguments);
          this.listExecute = void 0;
        }

        execute(notification) {
          //处理完之后再将type转换为name为mediator发送通知
          var listenr = this.listExecute.find(item => item.type === notification.getType());
          var payload = null;

          if (listenr) {
            try {
              payload = listenr.handler.bind(this)(notification);

              if (payload !== undefined) {
                this.sendNotification(notification.getType(), payload);
              }
            } catch (e) {
              console.error(e);
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e40e4554230a4f3e9e685e9416ec66455720e09d.js.map