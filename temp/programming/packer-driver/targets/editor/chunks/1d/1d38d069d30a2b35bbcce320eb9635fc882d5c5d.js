System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Notification, Controller, Model, View, Facade, _crd;

  function _reportPossibleCrUseOfIController(extras) {
    _reporterNs.report("IController", "../interfaces/IController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFacade(extras) {
    _reporterNs.report("IFacade", "../interfaces/IFacade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMediator(extras) {
    _reporterNs.report("IMediator", "../interfaces/IMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIModel(extras) {
    _reporterNs.report("IModel", "../interfaces/IModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfINotification(extras) {
    _reporterNs.report("INotification", "../interfaces/INotification", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProxy(extras) {
    _reporterNs.report("IProxy", "../interfaces/IProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIView(extras) {
    _reporterNs.report("IView", "../interfaces/IView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotification(extras) {
    _reporterNs.report("Notification", "../patterns/observer/Notification", _context.meta, extras);
  }

  function _reportPossibleCrUseOfController(extras) {
    _reporterNs.report("Controller", "./Controller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModel(extras) {
    _reporterNs.report("Model", "./Model", _context.meta, extras);
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
      Notification = _unresolved_2.default;
    }, function (_unresolved_3) {
      Controller = _unresolved_3.default;
    }, function (_unresolved_4) {
      Model = _unresolved_4.default;
    }, function (_unresolved_5) {
      View = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9701d1E1PNPM6yDwDlEvETJ", "Facade", undefined);

      _export("default", Facade = class Facade {
        constructor() {
          this.model = null;
          this.view = null;
          this.controller = null;
          // if (Facade._instance) throw Error("Facade singleton already constructed!");
          Facade._instance = this;
          this.initializeFacade();
        }

        static get Instance() {
          if (!Facade._instance) Facade._instance = new Facade();
          return Facade._instance;
        }

        initializeFacade() {
          this.initializeModel();
          this.initializeController();
          this.initializeView();
        }

        initializeModel() {
          if (!this.model) {
            this.model = (_crd && Model === void 0 ? (_reportPossibleCrUseOfModel({
              error: Error()
            }), Model) : Model).Instance;
          }
        }

        initializeController() {
          if (!this.controller) {
            this.controller = (_crd && Controller === void 0 ? (_reportPossibleCrUseOfController({
              error: Error()
            }), Controller) : Controller).Instance;
          }
        }

        initializeView() {
          if (!this.view) {
            this.view = (_crd && View === void 0 ? (_reportPossibleCrUseOfView({
              error: Error()
            }), View) : View).Instance;
          }
        }

        registerCommand(notificationName, commandClassRef) {
          this.controller.registerCommand(notificationName, commandClassRef);
        }

        removeCommand(notificationName) {
          this.controller.removeCommand(notificationName);
        }

        hasCommand(notificationName) {
          return this.controller.hasCommand(notificationName);
        }

        registerProxy(proxy) {
          this.model.registerProxy(proxy);
        }

        retrieveProxy(proxyName) {
          return this.model.retrieveProxy(proxyName);
        }

        removeProxy(proxyName) {
          let proxy;

          if (this.model) {
            proxy = this.model.removeProxy(proxyName);
          }

          return proxy;
        }

        hasProxy(proxyName) {
          return this.model.hasProxy(proxyName);
        }

        registerMediator(mediator) {
          if (this.view) {
            this.view.registerMediator(mediator);
          }
        }

        retrieveMediator(mediatorName) {
          return this.view.retrieveMediator(mediatorName);
        }

        removeMediator(mediatorName) {
          let mediator;

          if (this.view) {
            mediator = this.view.removeMediator(mediatorName);
          }

          return mediator;
        }

        hasMediator(mediatorName) {
          return this.view.hasMediator(mediatorName);
        }

        notifyObservers(notification) {
          if (this.view) {
            this.view.notifyObservers(notification);
          }
        }

        sendNotification(name, body = null, type = null) {
          this.notifyObservers(new (_crd && Notification === void 0 ? (_reportPossibleCrUseOfNotification({
            error: Error()
          }), Notification) : Notification)(name, body, type));
        }

      });

      Facade._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1d38d069d30a2b35bbcce320eb9635fc882d5c5d.js.map