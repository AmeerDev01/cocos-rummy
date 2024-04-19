System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Sprite, BaseComponent, sourceManageSeletor, SpriteFramePathDefine, _dec, _class, _crd, ccclass, property, Domino_Ending;

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
      Animation = _cc.Animation;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      sourceManageSeletor = _unresolved_3.sourceManageSeletor;
    }, function (_unresolved_4) {
      SpriteFramePathDefine = _unresolved_4.SpriteFramePathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "02cb4AwDhJIrbH5ZYr8FF7H", "Domino_Ending", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Component', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Domino_Ending", Domino_Ending = (_dec = ccclass('Domino_Ending'), _dec(_class = class Domino_Ending extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_spr_word: new Sprite(),
            props_spr_times: new Sprite()
          };
          this.props = {
            odds: 0
          };
          this.events = {
            animeOver: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === 'odds') {
            if (this.props.odds === 1) {
              this.propertyNode.props_spr_word.spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).WORD_SINGLE).source;
              this.propertyNode.props_spr_times.spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).WORD_TIMES_1).source;
            } else if (this.props.odds === 2) {
              this.propertyNode.props_spr_word.spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).WORD_DOUBLE).source;
              this.propertyNode.props_spr_times.spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).WORD_TIMES_2).source;
            } else if (this.props.odds === 3) {
              this.propertyNode.props_spr_word.spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).WORD_TRIPLE).source;
              this.propertyNode.props_spr_times.spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).WORD_TIMES_3).source;
            } else if (this.props.odds === 4) {
              this.propertyNode.props_spr_word.spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).WORD_QUARTET).source;
              this.propertyNode.props_spr_times.spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).WORD_TIMES_4).source;
            } else if (this.props.odds === 5) {
              this.propertyNode.props_spr_word.spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).WORD_QUINTET).source;
              this.propertyNode.props_spr_times.spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).WORD_TIMES_5).source;
            }
          }
        }

        bindUI() {
          this.propertyNode.props_spr_word.node.getComponent(Animation).on(Animation.EventType.FINISHED, () => {
            this.events.animeOver();
          });
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a11f919eb2eae5bbc6d48c6e47f15e8f05f9ffbf.js.map