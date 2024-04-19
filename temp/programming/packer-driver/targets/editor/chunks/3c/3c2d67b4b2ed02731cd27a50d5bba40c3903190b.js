System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Facade, CommandDefine, StartupCommand, MainFacade, _crd;

  function _reportPossibleCrUseOfFacade(extras) {
    _reporterNs.report("Facade", "../Framework/care/Facade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommandDefine(extras) {
    _reporterNs.report("CommandDefine", "./Const/CommandDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStartupCommand(extras) {
    _reporterNs.report("StartupCommand", "./Command/StartupCommand", _context.meta, extras);
  }

  _export("MainFacade", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      Facade = _unresolved_2.default;
    }, function (_unresolved_3) {
      CommandDefine = _unresolved_3.CommandDefine;
    }, function (_unresolved_4) {
      StartupCommand = _unresolved_4.StartupCommand;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "09683PVzINHOblrIKrF/9ok", "MainFacade", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'v2']);

      _export("MainFacade", MainFacade = class MainFacade extends (_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
        error: Error()
      }), Facade) : Facade) {
        initializeController() {
          super.initializeController();
          this.registerCommand((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
            error: Error()
          }), CommandDefine) : CommandDefine).START_UP, _crd && StartupCommand === void 0 ? (_reportPossibleCrUseOfStartupCommand({
            error: Error()
          }), StartupCommand) : StartupCommand);
        }

        initializeModel() {
          super.initializeModel(); //this.registerProxy(new LoginRequestProxy(ProxyDefine.LoginRequest));
        }

        initializeView() {
          super.initializeView();
        }

        startup() {
          this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
            error: Error()
          }), CommandDefine) : CommandDefine).START_UP);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3c2d67b4b2ed02731cd27a50d5bba40c3903190b.js.map