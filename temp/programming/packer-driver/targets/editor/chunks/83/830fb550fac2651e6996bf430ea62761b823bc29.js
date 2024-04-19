System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, BaseComponent, hallAudio, SoundPathDefine, _dec, _class, _crd, ccclass, property, TurntableWin;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhallAudio(extras) {
    _reporterNs.report("hallAudio", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../../sourceDefine/soundDefine", _context.meta, extras);
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
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      hallAudio = _unresolved_3.hallAudio;
    }, function (_unresolved_4) {
      SoundPathDefine = _unresolved_4.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "87d2ayF5XBNNLTWB/BH1r8j", "TurntableWin", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'Button', 'Component', 'ImageAsset', 'instantiate', 'Label', 'log', 'native', 'Node', 'ScrollView', 'Sprite', 'SpriteFrame', 'sys', 'systemEvent', 'Texture2D', 'tween', 'UIOpacity', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TurntableWin", TurntableWin = (_dec = ccclass('TurntableWin'), _dec(_class = class TurntableWin extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_btn_off: new Node(),
            props_win_gift_name: new Node(),
            props_win_gift_num: new Node()
          };
          this.props = {
            TurntableData: {}
          };
          this.events = {
            onClosePanel: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_off.on(Node.EventType.TOUCH_END, () => {
            (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
              error: Error()
            }), hallAudio) : hallAudio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BTU_CLICK);
            this.events.onClosePanel();
          });
        }

        useProps(key, value) {
          if (key === 'TurntableData') {
            if (value.cur && value.cur.turntablePrizeEntity) {
              this.propertyNode.props_win_gift_name.getComponent(Label).string = value.cur.turntablePrizeEntity.prizeName; // this.propertyNode.props_win_gift_num.getComponent(Label).string=value.cur.turntablePrizeEntity.prizeValue
            }
          }
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=830fb550fac2651e6996bf430ea62761b823bc29.js.map