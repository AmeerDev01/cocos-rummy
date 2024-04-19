System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, Vec3, _dec, _class, _crd, ccclass, property, phoenix_sgChoose;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1708lwDvNENL8R0j7tQs3F", "phoenix_sgChoose", undefined);

      __checkObsolete__(['_decorator', 'Component', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("phoenix_sgChoose", phoenix_sgChoose = (_dec = ccclass('phoenix_sgChoose'), _dec(_class = class phoenix_sgChoose extends Component {
        start() {
          this.sgChooseShow();
        }

        sgChooseShow() {
          tween(this.node.getChildByName('props_btn_sgChoose_25')).to(0.2, {
            position: new Vec3(-392, -4, 0)
          }).start();
          tween(this.node.getChildByName('props_props_btn_sgChoose_20')).to(0.4, {
            position: new Vec3(-194, -4, 0)
          }).start();
          tween(this.node.getChildByName('props_btn_sgChoose_15')).to(0.6, {
            position: new Vec3(-4, -4, 0)
          }).start();
          tween(this.node.getChildByName('props_btn_sgChoose_13')).to(0.8, {
            position: new Vec3(202, -4, 0)
          }).start();
          tween(this.node.getChildByName('props_btn_sgChoose_10')).to(1, {
            position: new Vec3(400, -4, 0)
          }).start();
        }

        sgChooseHide() {
          this.node.destroy();
        }

        bindUI() {}

        bindEvent() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=af90edc97eb00bdcae1d39260b64b264db67d6e7.js.map