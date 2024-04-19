System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Sprite, tween, UIOpacity, UITransform, Vec3, BaseComponent, sourceManageSeletor, SpriteFramePathDefine, _dec, _class, _crd, ccclass, property, Qiuqiu_Card;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "../sourceDefine/spriteDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      sourceManageSeletor = _unresolved_3.sourceManageSeletor;
    }, function (_unresolved_4) {
      SpriteFramePathDefine = _unresolved_4.SpriteFramePathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7ada4FOmANK55Z1GN0euOXY", "Qiuqiu_Card", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Sprite', 'tween', 'UIOpacity', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Qiuqiu_Card", Qiuqiu_Card = (_dec = ccclass('Qiuqiu_Card'), _dec(_class = class Qiuqiu_Card extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.cardImageMap = [(_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CARD_NUMBER_0, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CARD_NUMBER_1, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CARD_NUMBER_2, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CARD_NUMBER_3, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CARD_NUMBER_4, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CARD_NUMBER_5, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CARD_NUMBER_6];
          this.propertyNode = {
            props_spr_card_up: new Sprite(),
            props_spr_card_down: new Sprite(),
            props_spr_handcard_bg: new Node(),
            props_beimian: new Node()
          };
          this.props = {
            upFace: -1,
            downFace: -1
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === "upFace" && value.cur >= 0) {
            this.propertyNode.props_spr_card_up.spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile(this.cardImageMap[value.cur]).source;
          }

          if (key === "downFace" && value.cur >= 0) {
            this.propertyNode.props_spr_card_down.spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile(this.cardImageMap[value.cur]).source;
          }
        }

        setScale(scale) {
          this.node.setScale(new Vec3(scale, scale));
          var tf = this.node.getComponent(UITransform);
          tf.width *= scale;
        }
        /**翻牌 */


        openCard(isAnima) {
          if (isAnima) {
            this.propertyNode.props_spr_handcard_bg.setScale(new Vec3(0, 1));
            var t1 = tween(this.propertyNode.props_beimian).to(0.2, {
              scale: new Vec3(0, 1)
            });
            var t2 = tween(this.propertyNode.props_spr_handcard_bg).to(0.2, {
              scale: new Vec3(1, 1)
            });
            t1.call(() => {
              t2.start();
            }).start();
          } else {
            this.propertyNode.props_beimian.active = false;
          }

          this.setOpacity(true);
        }

        setOpacity(show) {
          this.node.getComponent(UIOpacity).opacity = show ? 255 : 0;
        }

        bindUI() {
          this.setOpacity(false);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=74be2ba8a2eacc655497a046bab78933184ecfa7.js.map