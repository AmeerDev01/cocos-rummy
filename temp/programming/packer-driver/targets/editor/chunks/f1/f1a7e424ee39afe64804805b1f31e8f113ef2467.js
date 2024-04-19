System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Label, Node, BaseComponent, thorv2_Audio, SoundPathDefine, _dec, _class, _crd, ccclass, property, ThorV2_BuyMiniGame;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfthorv2_Audio(extras) {
    _reporterNs.report("thorv2_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      thorv2_Audio = _unresolved_3.thorv2_Audio;
    }, function (_unresolved_4) {
      SoundPathDefine = _unresolved_4.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc216n706hDL6hObQzfxQGW", "ThorV2_BuyMiniGame", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Label', 'Node', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ThorV2_BuyMiniGame", ThorV2_BuyMiniGame = (_dec = ccclass('ThorV2_BuyMiniGame'), _dec(_class = class ThorV2_BuyMiniGame extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_bg_node: new Node(),
            props_btn_box_on: new Node(),
            props_btn_box_off: new Node(),
            props_label_box_gold: new Label()
          };
          this.props = {
            buyAmount: 0
          };
          this.events = {
            onClose: () => {},
            onBuy: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_bg_node.on(Node.EventType.TOUCH_END, () => {
            this.events.onClose();
          });
          this.propertyNode.props_btn_box_on.on(Button.EventType.CLICK, () => {
            this.events.onClose();
            this.events.onBuy();
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BUY_FREE_DIALOG_CLOSE);
          });
          this.propertyNode.props_btn_box_off.on(Button.EventType.CLICK, () => {
            this.events.onClose();
          });
        }

        useProps(key, value) {
          if (this.node && this.node.isValid) {
            if (key === 'buyAmount') {
              this.propertyNode.props_label_box_gold.string = this.props.buyAmount.formatAmountWithCommas();
            }
          }
        }

        onDestroy() {
          (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
            error: Error()
          }), thorv2_Audio) : thorv2_Audio).longStop();
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f1a7e424ee39afe64804805b1f31e8f113ef2467.js.map