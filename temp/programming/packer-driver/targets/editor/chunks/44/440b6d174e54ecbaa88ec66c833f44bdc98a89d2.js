System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Notifier, Command, _crd;

  function _reportPossibleCrUseOfICommand(extras) {
    _reporterNs.report("ICommand", "../../interfaces/ICommand", _context.meta, extras);
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
    }, function (_unresolved_2) {
      Notifier = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "deecauYd4BLqKBVvH3dtHR9", "Command", undefined);

      _export("default", Command = class Command extends (_crd && Notifier === void 0 ? (_reportPossibleCrUseOfNotifier({
        error: Error()
      }), Notifier) : Notifier) {
        constructor() {
          super();
          this.subCommands = null;
          this.subCommands = new Array();
          this.initializeMacroCommand();
        }

        initializeMacroCommand() {}

        addSubCommand(commandClassRef) {
          this.subCommands.push(commandClassRef);
        }

        execute(notification) {
          let subCommands = this.subCommands.slice(0);
          let len = this.subCommands.length;

          for (let i = 0; i < len; i++) {
            let commandClassRef = subCommands[i];
            let commandInstance = new commandClassRef();
            commandInstance.execute(notification);
          }

          this.subCommands.splice(0);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=440b6d174e54ecbaa88ec66c833f44bdc98a89d2.js.map