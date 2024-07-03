System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Observer, View, Controller, _crd;

  function _reportPossibleCrUseOfICommand(extras) {
    _reporterNs.report("ICommand", "../interfaces/ICommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIController(extras) {
    _reporterNs.report("IController", "../interfaces/IController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfINotification(extras) {
    _reporterNs.report("INotification", "../interfaces/INotification", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIView(extras) {
    _reporterNs.report("IView", "../interfaces/IView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObserver(extras) {
    _reporterNs.report("Observer", "../patterns/observer/Observer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfView(extras) {
    _reporterNs.report("View", "./view", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Observer = _unresolved_2.default;
    }, function (_unresolved_3) {
      View = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f53d069oTxDxIG6/S6M0YYi", "Controller", undefined);

      _export("default", Controller = class Controller {
        constructor() {
          this.view = null;
          this.commandMap = null;
          if (Controller._instance) throw Error("Controller singleton already constructed!");
          Controller._instance = this;
          this.commandMap = {};
          this.initializeController();
        }

        static get Instance() {
          if (!Controller._instance) Controller._instance = new Controller();
          return Controller._instance;
        }

        initializeController() {
          this.view = (_crd && View === void 0 ? (_reportPossibleCrUseOfView({
            error: Error()
          }), View) : View).Instance;
        }

        executeCommand(notification) {
          var commandClassRef = this.commandMap[notification.getName()];

          if (commandClassRef) {
            var command = new commandClassRef();
            command.execute(notification);
          }
        }

        registerCommand(notificationName, commandClassRef) {
          if (!this.commandMap[notificationName]) {
            this.view.registerObserver(notificationName, new (_crd && Observer === void 0 ? (_reportPossibleCrUseOfObserver({
              error: Error()
            }), Observer) : Observer)(this.executeCommand, this));
          }

          this.commandMap[notificationName] = commandClassRef;
        }

        removeCommand(notificationName) {
          if (this.hasCommand(notificationName)) {
            this.view.removeObserver(notificationName, this);
            delete this.commandMap[notificationName];
          }
        }

        hasCommand(notificationName) {
          return this.commandMap[notificationName] != null;
        }

      });

      Controller._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=125c8764e262d09e5c85f12daa982b3497a1e097.js.map