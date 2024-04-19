System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Facade, Notifier, _crd;

  function _reportPossibleCrUseOfFacade(extras) {
    _reporterNs.report("Facade", "../../care/Facade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFacade(extras) {
    _reporterNs.report("IFacade", "../../interfaces/IFacade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfINotifier(extras) {
    _reporterNs.report("INotifier", "../../interfaces/INotifier", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Facade = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "74b14ia8VpDf4RsUyZYAgqo", "Notifier", undefined);

      _export("default", Notifier = class Notifier {
        constructor() {
          this.facade = null;
          this.facade = (_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
            error: Error()
          }), Facade) : Facade).Instance;
        }

        sendNotification(name, body, type) {
          this.facade.sendNotification(name, body, type);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=61b7ac5295d626ace6d9456d692660874e95e4b8.js.map