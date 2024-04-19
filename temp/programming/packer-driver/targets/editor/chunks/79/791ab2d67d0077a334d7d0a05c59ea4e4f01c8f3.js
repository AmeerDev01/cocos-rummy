System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Sprite, BaseComponent, config, sourceManageSelector, _dec, _class, _crd, ccclass, property, Bandar_chip;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSelector(extras) {
    _reporterNs.report("sourceManageSelector", "../index", _context.meta, extras);
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
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      config = _unresolved_3.default;
    }, function (_unresolved_4) {
      sourceManageSelector = _unresolved_4.sourceManageSelector;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3640do9EntPxIG/9FjwfyT1", "Bandar_chip", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Font', 'Label', 'Node', 'resources', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bandar_chip", Bandar_chip = (_dec = ccclass('Bandar_chip'), _dec(_class = class Bandar_chip extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_spr_chips: new Sprite(),
            props_label_chips: new Label()
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
          if (key === 'value') {
            const chip = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).chipTypes.find(v => v.value === value.cur);
            this.propertyNode.props_label_chips.string = chip.valueStr;
            this.loadResource(chip);
          }
        }
        /** 加载金币资源 */


        loadResource(chip) {
          this.propertyNode.props_spr_chips.spriteFrame = (_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile(chip.fileUrl).source;
          this.propertyNode.props_label_chips.font = (_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile(chip.fontUrl).source;
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=791ab2d67d0077a334d7d0a05c59ea4e4f01c8f3.js.map