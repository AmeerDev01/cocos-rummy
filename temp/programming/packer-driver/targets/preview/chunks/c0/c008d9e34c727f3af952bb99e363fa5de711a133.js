System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Sprite, _decorator, BaseComponent, sourceManageSeletor, config, _dec, _class, _crd, ccclass, property, Qiuqiu_Chip;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      sourceManageSeletor = _unresolved_3.sourceManageSeletor;
    }, function (_unresolved_4) {
      config = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a8574Y2fy1H7J35VyvW2MhS", "Qiuqiu_Chip", undefined);

      __checkObsolete__(['Label', 'Sprite', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Qiuqiu_Chip", Qiuqiu_Chip = (_dec = ccclass('Qiuqiu_Chip'), _dec(_class = class Qiuqiu_Chip extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_spr_chips: new Sprite(),
            props_label_chip_num: new Label()
          };
          this.props = {
            value: 0
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === "value") {
            this.setChip();
          }
        }

        getChipSprite(value) {
          return (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).chips.find(v => v.value === value).spriteFrame;
        }

        setChip() {
          var value = this.props.value;
          this.propertyNode.props_spr_chips.spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile(this.getChipSprite(value)).source;
          this.propertyNode.props_label_chip_num.string = value + '';
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c008d9e34c727f3af952bb99e363fa5de711a133.js.map