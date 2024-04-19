System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, SkillItemRotationScore, _crd;

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../../../base/SourceManage", _context.meta, extras);
  }

  _export("SkillItemRotationScore", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "83ad1IIkRJPD4106qslh3sI", "SkillItemRotationScore", undefined);
      /**
        分数旋转效果
      */

      /**
        info = {
          beishu,
          score,
          spr_name,
          src_id
        }
        */


      __checkObsolete__(['Label', 'Node', 'instantiate', 'tween']);

      _export("SkillItemRotationScore", SkillItemRotationScore = class SkillItemRotationScore {
        constructor(sourceManage, prefabName, parentNode, info, textureConfig) {
          this.uiRoot = void 0;
          this.sourceManage = void 0;
          this.prefabName = void 0;
          this.ui = void 0;
          this.sourceManage = sourceManage;
          this.prefabName = prefabName;
          this.uiRoot = new Node();
          parentNode.addChild(this.uiRoot);
          this.init(info, textureConfig);
        }

        init(info, textureConfig) {// this.ui = instantiate(this.sourceManage.getFile(this.prefabName).source)
          // this.uiRoot.addChild(this.ui)
          // this.ui.setPosition(0, 0)
          // let ani_cfg = textureConfig[info.src_id]
          // addAnimation(this.sourceManage, this.ui.getChildByName('spr_bk'), ani_cfg, true, true);
          // setSpriteFrame(this.sourceManage, this.ui.getChildByName('spr_fish'), info.spr_name)
          // this.ui.getChildByName('fnt_beishu').getComponent(Label).string = ("x" + info.beishu)
          // this.ui.getChildByName('fnt_score').getComponent(Label).string = (`${info.score}`)
          // tween(this.uiRoot).delay(2.5).call(() => {
          //   this.destroy();
          // }).start();
        }

        destroy() {
          this.uiRoot.destroy();
          this.sourceManage = null;
          this.ui = null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bb3a572795a34ead9a707efba7f5712a75a8802b.js.map