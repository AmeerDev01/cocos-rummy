System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Observer, View, _crd;

  function _reportPossibleCrUseOfIMediator(extras) {
    _reporterNs.report("IMediator", "../interfaces/IMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfINotification(extras) {
    _reporterNs.report("INotification", "../interfaces/INotification", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIObserver(extras) {
    _reporterNs.report("IObserver", "../interfaces/IObserver", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIView(extras) {
    _reporterNs.report("IView", "../interfaces/IView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObserver(extras) {
    _reporterNs.report("Observer", "../patterns/observer/Observer", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Observer = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d7a83Q6CLRCJZhIXs+ZLqjo", "view", undefined);

      _export("default", View = class View {
        constructor() {
          this.mediatorMap = null;
          this.observerMap = null;
          if (View._instance) throw Error("View singleton already constructed!");
          View._instance = this;
          this.mediatorMap = {};
          this.observerMap = {};
          this.initializeView();
        }

        static get Instance() {
          if (!View._instance) View._instance = new View();
          return View._instance;
        }

        initializeView() {}

        registerObserver(notificationName, observer) {
          let observers = this.observerMap[notificationName];

          if (observers) {
            observers.push(observer);
          } else {
            this.observerMap[notificationName] = [observer];
          }
        }

        removeObserver(notificationName, notifyContext) {
          let observers = this.observerMap[notificationName];
          let i = observers.length;

          while (i--) {
            let observer = observers[i];

            if (observer.compareNotifyContext(notifyContext)) {
              observers.splice(i, 1);
              break;
            }
          }

          if (observers.length == 0) {
            delete this.observerMap[notificationName];
          }
        }

        notifyObservers(notification) {
          let notificationName = notification.getName();
          let observersRef = this.observerMap[notificationName];

          if (observersRef) {
            let observers = observersRef.slice(0);
            let len = observers.length;

            for (let i = 0; i < len; i++) {
              let observer = observers[i];
              observer.notifyObserver(notification);
            }
          }
        }

        registerMediator(mediator) {
          let name = mediator.getMediatorName();
          if (this.mediatorMap[name]) return;
          this.mediatorMap[name] = mediator;
          let interests = mediator.listNotificationInterests();
          let len = interests.length;

          if (len > 0) {
            let observer = new (_crd && Observer === void 0 ? (_reportPossibleCrUseOfObserver({
              error: Error()
            }), Observer) : Observer)(mediator.handleNotification, mediator);

            for (let i = 0; i < len; i++) this.registerObserver(interests[i], observer);
          }

          mediator.onRegister();
        }

        retrieveMediator(mediatorName) {
          return this.mediatorMap[mediatorName] || null;
        }

        removeMediator(mediatorName) {
          let mediator = this.mediatorMap[mediatorName];
          if (!mediator) return null;
          let interests = mediator.listNotificationInterests();
          let i = interests.length;

          while (i--) {
            this.removeObserver(interests[i], mediator);
          }

          delete this.mediatorMap[mediatorName];
          mediator.onRemove();
          return mediator;
        }

        hasMediator(mediatorName) {
          return this.mediatorMap[mediatorName] != null;
        }

      });

      View._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ac214365cfb57fc108a1a8876aef85db73c9e6b9.js.map