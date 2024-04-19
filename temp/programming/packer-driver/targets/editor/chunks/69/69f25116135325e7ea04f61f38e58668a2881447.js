System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ApplicationGlobal, GodWealth_MainFacade, _dec, _class, _crd, ccclass, property, GodWealth_Game;

  function _reportPossibleCrUseOfApplicationGlobal(extras) {
    _reporterNs.report("ApplicationGlobal", "./Const/ApplicationGlobal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGodWealth_MainFacade(extras) {
    _reporterNs.report("GodWealth_MainFacade", "./GodWealth_MainFacade", _context.meta, extras);
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
      GodWealth_MainFacade = _unresolved_3.GodWealth_MainFacade;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a443eIrnHhJZpj2hwiPFhgn", "GodWealth_Game", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'v2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GodWealth_Game", GodWealth_Game = (_dec = ccclass('GodWealth_Game'), _dec(_class = class GodWealth_Game extends Component {
        // @property(Prefab)
        // gateView: Prefab = null;
        start() {
          new (_crd && GodWealth_MainFacade === void 0 ? (_reportPossibleCrUseOfGodWealth_MainFacade({
            error: Error()
          }), GodWealth_MainFacade) : GodWealth_MainFacade)().startup();
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
//# sourceMappingURL=69f25116135325e7ea04f61f38e58668a2881447.js.map