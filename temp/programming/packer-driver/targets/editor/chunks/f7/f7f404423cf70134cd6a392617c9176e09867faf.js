System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, Egypt_SlotPanel;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "456dakuh7hK4paLMERNuK95", "Egypt_SlotPanel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'sp', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Egypt_SlotPanel", Egypt_SlotPanel = (_dec = ccclass('Egypt_SlotPanel'), _dec(_class = class Egypt_SlotPanel extends Component {
        start() {}

        hidePanels(bl) {
          this.node.getChildByName('bg1').active = bl;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f7f404423cf70134cd6a392617c9176e09867faf.js.map