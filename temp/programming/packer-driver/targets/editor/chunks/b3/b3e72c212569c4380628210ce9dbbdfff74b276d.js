System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ApplicationGlobal, Phoenix_MainFacade, _dec, _class, _crd, ccclass, property, Phoenix_Game;

  function _reportPossibleCrUseOfApplicationGlobal(extras) {
    _reporterNs.report("ApplicationGlobal", "./Const/ApplicationGlobal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPhoenix_MainFacade(extras) {
    _reporterNs.report("Phoenix_MainFacade", "./phoenix_MainFacade", _context.meta, extras);
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
      Phoenix_MainFacade = _unresolved_3.Phoenix_MainFacade;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0175cBkWeNLeYyiNGS8uX93", "phoenix_Game", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Phoenix_Game", Phoenix_Game = (_dec = ccclass('Phoenix_Game'), _dec(_class = class Phoenix_Game extends Component {
        // @property(Prefab)
        // gateView: Prefab = null;
        start() {
          new (_crd && Phoenix_MainFacade === void 0 ? (_reportPossibleCrUseOfPhoenix_MainFacade({
            error: Error()
          }), Phoenix_MainFacade) : Phoenix_MainFacade)().startup();
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
//# sourceMappingURL=b3e72c212569c4380628210ce9dbbdfff74b276d.js.map