System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, tween, BaseComponent, _dec, _class, _crd, ccclass, property, phoenix_small_result;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "be043j3yWtKub3dFjVaJGY6", "phoenix_small_result", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("phoenix_small_result", phoenix_small_result = (_dec = ccclass('phoenix_small_result'), _dec(_class = class phoenix_small_result extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_label_result_num: new Label()
          };
          this.props = {
            goldAmount: 0
          };
          this.events = {
            killSelfHadler: () => {}
          };
        }

        start() {
          this.destroyView();
        }

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === "goldAmount") {
            console.log("goldAmount", value.cur);
            this.propertyNode.props_label_result_num.string = value.cur.formatAmountWithCommas();
          }
        }

        destroyView() {
          tween(this.node).delay(2).call(() => {
            this.node.destroy();
          }).start();
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a10f93d7dbf128f7636d76a2869f75db5d8dc192.js.map