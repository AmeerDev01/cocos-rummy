System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, UIOpacity, UITransform, Vec3, tween, createAnimationNode, createSpriteAtlasNode, createSpriteNode, SkillItemBossComing, _crd;

  function _reportPossibleCrUseOfcreateAnimationNode(extras) {
    _reporterNs.report("createAnimationNode", "../../FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateSpriteAtlasNode(extras) {
    _reporterNs.report("createSpriteAtlasNode", "../../FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateSpriteNode(extras) {
    _reporterNs.report("createSpriteNode", "../../FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillPlayer(extras) {
    _reporterNs.report("SkillPlayer", "../../SkillPlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../../../base/SourceManage", _context.meta, extras);
  }

  _export("SkillItemBossComing", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      createAnimationNode = _unresolved_2.createAnimationNode;
      createSpriteAtlasNode = _unresolved_2.createSpriteAtlasNode;
      createSpriteNode = _unresolved_2.createSpriteNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3775fa2d3pMobdTbPyiNgjS", "SkillItemBossComing", undefined);
      /**
        boss 来临
       */


      __checkObsolete__(['Node', 'UIOpacity', 'UITransform', 'Vec2', 'Vec3', 'tween']);

      _export("SkillItemBossComing", SkillItemBossComing = class SkillItemBossComing {
        constructor(skillPlayer, sourceManage, parentNode, config, textureConfig) {
          this.uiRoot = void 0;
          this.spr = void 0;
          this.spr_ani = void 0;
          this.skillPlayer = void 0;
          this.sourceManage = void 0;
          this.skillPlayer = skillPlayer;
          this.sourceManage = sourceManage;
          this.uiRoot = new Node();
          parentNode.addChild(this.uiRoot);
          this.uiRoot.setSiblingIndex(parentNode.children.length);
          this.init(config, textureConfig);
        }

        init(config, textureConfig) {
          if (this.skillPlayer.getUseSkew() == true) {
            this.uiRoot.setScale(new Vec3(-1, -1));
          }

          const firstTexture = config.src_id_lst[0];
          const secondTexture = config.src_id_lst[1];

          if (firstTexture) {
            let src_cfg = textureConfig[firstTexture];
            this.spr = (_crd && createSpriteNode === void 0 ? (_reportPossibleCrUseOfcreateSpriteNode({
              error: Error()
            }), createSpriteNode) : createSpriteNode)(this.sourceManage, this.uiRoot, src_cfg.file);
            const op = this.spr.addComponent(UIOpacity);
            this.spr.setPosition(0, 0);
            this.spr.setScale(new Vec3(1.5, 1.5));
            const scale = this.spr.getScale().multiplyScalar(this.skillPlayer.getScaleRatio());
            this.spr.setScale(scale);
            tween(op).then(tween().to(0.5, {
              opacity: 0
            }).to(0.5, {
              opacity: 255
            })).repeatForever().start();
          }

          if (secondTexture) {
            let ani_config = textureConfig[secondTexture];
            this.spr_ani = (_crd && createAnimationNode === void 0 ? (_reportPossibleCrUseOfcreateAnimationNode({
              error: Error()
            }), createAnimationNode) : createAnimationNode)(this.sourceManage, this.uiRoot, ani_config, true, false);
            this.spr_ani.setPosition(0, 0);
            tween(this.spr_ani).delay(3).call(() => {
              this.spr_ani.isValid && this.destroy();
            }).start();
          }

          for (let k = 0; k < config.icon_id_lst.length; k++) {
            const v = config.icon_id_lst[k];
            let ani_config1 = textureConfig[v];

            if (ani_config1) {
              const spriteFrame = String(ani_config1.pattern).format(1);
              let spr = (_crd && createSpriteAtlasNode === void 0 ? (_reportPossibleCrUseOfcreateSpriteAtlasNode({
                error: Error()
              }), createSpriteAtlasNode) : createSpriteAtlasNode)(this.sourceManage, this.uiRoot, ani_config1, spriteFrame);
              let spr_size = spr.getComponent(UITransform); // spr.setPosition(-568 - spr_size.width / 2 - 10, 0)

              spr.setPosition(-568 - spr_size.width, 0);
              tween(spr).to(0.6, {
                position: new Vec3(-450, 0)
              }).start();
            }
          }
        }

        destroy() {
          this.uiRoot.destroy();
          this.spr = null;
          this.spr_ani = null;
          this.skillPlayer = null;
          this.sourceManage = null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=14351a0dac1141d872d9cdfdee9a7af96e49e14c.js.map