/**
  boss 来临
 */

import { Node, UIOpacity, UITransform, Vec2, Vec3, tween } from "cc";
import { createAnimationNode, createSpriteAtlasNode, createSpriteNode } from "../../FishTool";
import { SkillPlayer } from "../../SkillPlayer";
import SourceManage from "../../../../base/SourceManage";

export class SkillItemBossComing {
  public uiRoot: Node;
  private spr: Node;
  private spr_ani: Node;
  private skillPlayer: SkillPlayer;
  private sourceManage: SourceManage;

  constructor(skillPlayer: SkillPlayer, sourceManage: SourceManage, parentNode: Node, config, textureConfig) {
    this.skillPlayer = skillPlayer
    this.sourceManage = sourceManage
    this.uiRoot = new Node();
    parentNode.addChild(this.uiRoot)
    this.uiRoot.setSiblingIndex(parentNode.children.length)
    this.init(config, textureConfig);
  }
  public init(config, textureConfig) {
    if (this.skillPlayer.getUseSkew() == true) {
      this.uiRoot.setScale(new Vec3(-1, -1))
    }

    const firstTexture = config.src_id_lst[0];
    const secondTexture = config.src_id_lst[1];

    if (firstTexture) {
      let src_cfg = textureConfig[firstTexture]
      this.spr = createSpriteNode(this.sourceManage, this.uiRoot, src_cfg.file)
      const op = this.spr.addComponent(UIOpacity)
      this.spr.setPosition(0, 0)
      this.spr.setScale(new Vec3(1.5, 1.5));

      const scale = this.spr.getScale().multiplyScalar(this.skillPlayer.getScaleRatio())
      this.spr.setScale(scale)

      tween(op).then(tween().to(0.5, { opacity: 0 }).to(0.5, { opacity: 255 })).repeatForever().start()
    }

    if (secondTexture) {
      let ani_config = textureConfig[secondTexture]
      this.spr_ani = createAnimationNode(this.sourceManage, this.uiRoot, ani_config, true, false)
      this.spr_ani.setPosition(0, 0)

      tween(this.spr_ani).delay(3).call(() => {
        this.spr_ani.isValid && this.destroy();
      }).start();
    }

    for (let k = 0; k < config.icon_id_lst.length; k++) {
      const v = config.icon_id_lst[k];
      let ani_config1 = textureConfig[v]
      if (ani_config1) {
        const spriteFrame = String(ani_config1.pattern).format(1);
        let spr = createSpriteAtlasNode(this.sourceManage, this.uiRoot, ani_config1, spriteFrame);
        let spr_size = spr.getComponent(UITransform);
        // spr.setPosition(-568 - spr_size.width / 2 - 10, 0)
        spr.setPosition(-568 - spr_size.width, 0)

        tween(spr).to(0.6, { position: new Vec3(-450, 0) }).start();
      }
    }
  }

  public destroy() {
    this.uiRoot.destroy();
    this.spr = null;
    this.spr_ani = null;
    this.skillPlayer = null;
    this.sourceManage = null;
  }
}

