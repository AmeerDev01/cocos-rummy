System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, tween, BaseComponent, getNodeByNameDeep, _dec, _class, _crd, ccclass, property, GodWealth_small_win;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
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
      Node = _cc.Node;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      getNodeByNameDeep = _unresolved_3.getNodeByNameDeep;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "531ecrCfSRHSK0as+c8yv+Z", "GodWealth_small_win", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'instantiate', 'Label', 'Node', 'Sprite', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GodWealth_small_win", GodWealth_small_win = (_dec = ccclass('GodWealth_small_win'), _dec(_class = class GodWealth_small_win extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_free_spins: new Node(),
            props_pins_num: new Label(),
            props_baoHeGame_win: new Node(),
            props_freeGame_win: new Node(),
            props_baohe_box: new Node()
          };
          this.props = {
            spinsNum: -1,
            winNum: -1
          };
          this.events = {
            killSelfHandler: () => {}
          };
        }

        start() {
          this.killHandler();
        }

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === "spinsNum") {
            this.propertyNode.props_pins_num.string = value.cur + '';
          }

          if (key === "winNum") {
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("win_num", this.propertyNode.props_baoHeGame_win).getComponent(Label).string = value.cur.formatAmountWithCommas();
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("win_num", this.propertyNode.props_freeGame_win).getComponent(Label).string = value.cur.formatAmountWithCommas();
          }
        }

        killHandler() {
          tween(this.node).delay(2).call(() => {
            this.events.killSelfHandler();
          }).start();
        }

        getSpinsNode() {
          return this.propertyNode.props_free_spins;
        }

        getFreeNode() {
          return this.propertyNode.props_freeGame_win;
        }

        getBaoHeNode() {
          return this.propertyNode.props_baoHeGame_win;
        }

        getBaoHeBoxNode() {
          return this.propertyNode.props_baohe_box;
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a05390a9ab0cda2370d6b510621754160d201a22.js.map