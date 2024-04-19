System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ApplicationGlobal, MainFacade, _dec, _class, _crd, ccclass, property, Game;

  function _reportPossibleCrUseOfApplicationGlobal(extras) {
    _reporterNs.report("ApplicationGlobal", "./Const/ApplicationGlobal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainFacade(extras) {
    _reporterNs.report("MainFacade", "./MainFacade", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      ApplicationGlobal = _unresolved_2.ApplicationGlobal;
    }, function (_unresolved_3) {
      MainFacade = _unresolved_3.MainFacade;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8936dtAoZVJFJJgEQcYWKDz", "Game", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'v2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Game", Game = (_dec = ccclass('Game'), _dec(_class = class Game extends Component {
        // @property(Prefab)
        // gateView: Prefab = null;
        start() {
          new (_crd && MainFacade === void 0 ? (_reportPossibleCrUseOfMainFacade({
            error: Error()
          }), MainFacade) : MainFacade)().startup();
        }

        onLoad() {
          (_crd && ApplicationGlobal === void 0 ? (_reportPossibleCrUseOfApplicationGlobal({
            error: Error()
          }), ApplicationGlobal) : ApplicationGlobal).mainPanel = this.node;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e43fe73bf54fb3cd6c7b86685a7f137d90b9a4cf.js.map