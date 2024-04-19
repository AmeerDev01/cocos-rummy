System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, _decorator, sp, BaseComponent, _dec, _class, _crd, ccclass, property, Hall_VipUp;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      _decorator = _cc._decorator;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f4e9aZuYjFOia8Fmc5ZS3+2", "Hall_VipUp", undefined);

      __checkObsolete__(['Node', '_decorator', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_VipUp", Hall_VipUp = (_dec = ccclass('Hall_VipUp'), _dec(_class = class Hall_VipUp extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_vipshengji: new Node()
          };
          this.props = {};
          this.events = {
            close: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_vipshengji.getComponent(sp.Skeleton).setCompleteListener(() => {
            this.events.close();
          });
        }

        bindUI() {}

        useProps(key, value) {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6607b15c2a28cfa7dd0514a4219f5565d51324da.js.map