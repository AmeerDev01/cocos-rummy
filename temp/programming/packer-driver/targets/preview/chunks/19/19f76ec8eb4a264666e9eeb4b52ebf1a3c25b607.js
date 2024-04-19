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

      _cclegacy._RF.push({}, "1a084dXj5NKm4fxM0mnEViA", "view", undefined);

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
          var observers = this.observerMap[notificationName];

          if (observers) {
            observers.push(observer);
          } else {
            this.observerMap[notificationName] = [observer];
          }
        }

        removeObserver(notificationName, notifyContext) {
          var observers = this.observerMap[notificationName];
          var i = observers.length;

          while (i--) {
            var observer = observers[i];

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
          var notificationName = notification.getName();
          var observersRef = this.observerMap[notificationName];

          if (observersRef) {
            var observers = observersRef.slice(0);
            var len = observers.length;

            for (var i = 0; i < len; i++) {
              var observer = observers[i];
              observer.notifyObserver(notification);
            }
          }
        }

        registerMediator(mediator) {
          var name = mediator.getMediatorName();
          if (this.mediatorMap[name]) return;
          this.mediatorMap[name] = mediator;
          var interests = mediator.listNotificationInterests();
          var len = interests.length;

          if (len > 0) {
            var observer = new (_crd && Observer === void 0 ? (_reportPossibleCrUseOfObserver({
              error: Error()
            }), Observer) : Observer)(mediator.handleNotification, mediator);

            for (var i = 0; i < len; i++) this.registerObserver(interests[i], observer);
          }

          mediator.onRegister();
        }

        retrieveMediator(mediatorName) {
          return this.mediatorMap[mediatorName] || null;
        }

        removeMediator(mediatorName) {
          var mediator = this.mediatorMap[mediatorName];
          if (!mediator) return null;
          var interests = mediator.listNotificationInterests();
          var i = interests.length;

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
//# sourceMappingURL=19f76ec8eb4a264666e9eeb4b52ebf1a3c25b607.js.map