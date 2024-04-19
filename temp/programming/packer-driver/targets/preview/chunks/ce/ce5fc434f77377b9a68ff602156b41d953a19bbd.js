System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, BaseComponent, playBtnClick, _dec, _class, _crd, ccclass, property, Bandar_pot;

  function numToString(num, length) {
    var str = num.toString();

    if (str.length < length) {
      str = "0".repeat(length - str.length) + str;
    }

    var result = str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return result;
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayBtnClick(extras) {
    _reporterNs.report("playBtnClick", "../index", _context.meta, extras);
  }

  _export("numToString", numToString);

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
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      playBtnClick = _unresolved_3.playBtnClick;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "171f4ALd5lNj793qO0JU4Dh", "Bandar_pot", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node', 'Skeleton', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bandar_pot", Bandar_pot = (_dec = ccclass('Bandar_pot'), _dec(_class = class Bandar_pot extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_spr_btn_pot_bg: new Node(),
            props_label_pot_num: new Label(),
            props_skeleton_pot: new Node()
          };
          this.props = {
            jackpot: 12345678900
          };
          this.events = {
            openJackpotPanel: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_spr_btn_pot_bg.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.openJackpotPanel();
          });
        }

        useProps(key, value) {}

        toggleCallback(event, customEventData) {}

        bindUI() {
          this.propertyNode.props_label_pot_num.string = numToString(this.props.jackpot, 13);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ce5fc434f77377b9a68ff602156b41d953a19bbd.js.map