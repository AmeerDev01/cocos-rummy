import { Node, UITransform, Vec3, instantiate, sp, Sprite, Label, Mask, Graphics } from "cc";
import { sourceManageSeletor } from "../index";
import { PrefabPathDefine } from "../sourceDefine/prefabDefine";
import { getNodeByNameDeep } from "../../../utils/tool";
import { IconId } from "../type";
import config from "../config";
import { SpriteFramePathDefine } from "../sourceDefine/spriteDefine";
import { SkeletalPathDefine } from "../sourceDefine/skeletalDefine";
import SkeletonAnimationPlayer from "../../../utils/SkeletonPlay";

export class GxfcV2Icon {
  private node: Node;
  public faceNode: Node;
  private faceAnimationNode: Node;
  public jinFaFaceNode: Node;
  public jinFaFaceAnimationNode: Node;
  private jinFaSkeleton: sp.Skeleton;
  private iconConfig;
  private skeleton: sp.Skeleton;
  private sprite: Sprite
  private use = false;
  private iconIndex = 0;

  private borderNode: Node;
  private amountNode: Node;

  private amount: number = 0;

  private isPoolObject = true;
  private callback;

  constructor(iconConfig, isPoolObject: boolean = true) {
    this.iconConfig = iconConfig;
    this.isPoolObject = isPoolObject;
    this.node = instantiate(sourceManageSeletor().getFile(PrefabPathDefine.ICON).source);
    this.node.getComponent(UITransform).width = config.normalRollOption.singleRollerWidth;
    this.node.getComponent(UITransform).height = config.normalRollOption.singleRollerHeight;

    this.faceNode = getNodeByNameDeep("face", this.node);
    this.faceAnimationNode = getNodeByNameDeep("face-animation", this.node);

    this.jinFaFaceNode= getNodeByNameDeep("jinfaface", this.node);
    this.jinFaFaceAnimationNode = getNodeByNameDeep("jinfaface-animation", this.node);
    this.jinFaSkeleton = this.jinFaFaceAnimationNode.getComponent(sp.Skeleton);

    this.sprite = this.faceNode.getComponent(Sprite);
    this.skeleton = this.faceAnimationNode.getComponent(sp.Skeleton);

    this.borderNode = getNodeByNameDeep("focusBorder", this.node);
    this.borderNode.active = true;
    this.borderNode.removeFromParent();

    // if (this.isBeetleIcon() || this.isSunGod()) {
      // this.amountNode = getNodeByNameDeep("amount", this.node);
      // this.amountNode.active = true;
      // this.amountNode.getComponent(Label).string = this.isBeetleIcon() ? "0" : "";
      // this.listenerSkeletonEvent();
      // this.amount = 0;
    // }

    this.buildIcon();
  }

  // public isBeetleIcon() {
    // return this.iconConfig.id === IconId.BEETLE
  // }

  // public isSunGod() {
    // return this.iconConfig.id === IconId.SUN_GOD
  // }

  /**获得图标 */
  public resetIcon(iconConfig, parentNode?: Node, iconIndex?: number) {
    
    this.use = true;
    this.iconConfig = iconConfig;
    this.iconIndex = iconIndex;
    parentNode && parentNode.addChild(this.node);
    this.node.setScale(iconConfig.scale[0], iconConfig.scale[1]);
    this.faceAnimationNode.setScale(iconConfig.scale[0], iconConfig.scale[1]);

    this.jinFaFaceAnimationNode.setScale(iconConfig.scale[0], iconConfig.scale[1]);
    // if (parentNode && parentNode.name === "props_wild_icon_list") {
    //   console.log("this.node",this.node);
      
    //   console.log("parentNode",parentNode);
    //   console.log("iconConfig",iconConfig);
      
    // }
  }

  public getId() {
    return this.iconConfig.id;
  }

  /**归还到缓存池 */
  public restore() {
    if (this.node && this.node.isValid) {
      this.use = false;
      this.iconIndex = -1;
      this.node.active = true;
      this.node.removeFromParent();
      // if (this.amountNode) {
        // this.amount = 0;
        // this.amountNode.getComponent(Label).string = this.isBeetleIcon() ? '0' : '';
      // }
      const skeletonData = sourceManageSeletor().getFile(this.iconConfig.skeletonName).source;
      this.skeleton.skeletonData = skeletonData;
      this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);
      this.sprite.spriteFrame = sourceManageSeletor().getFile(this.iconConfig.fileName).source;
      !this.isPoolObject && this.destory();
    }
  }

  public getNode() {
    return this.node;
  }

  public getHeight() {
    return this.node.getComponent(UITransform).height;
  }

  public getIconIndex() {
    return this.iconIndex;
  }

  public setPosition(value: Vec3) {
    if (this.node) {
      this.node.setPosition(value);
      const offset = new Vec3(this.iconConfig.distance[0], this.iconConfig.distance[1]);
      this.faceAnimationNode.setWorldPosition(this.node.worldPosition.clone().add(offset));

      this.jinFaFaceAnimationNode.setWorldPosition(this.node.worldPosition.clone().add(offset));
      this.borderNode.setWorldPosition(this.node.worldPosition);
    }
  }

  public setJinWildPosition() {
    if (this.node) {
      this.node.setPosition(this.getPosition());
      this.node.getComponent(UITransform).width = 160;
      this.node.getComponent(UITransform).height = 146;

      const offset = new Vec3(-4, 5);
      this.jinFaFaceAnimationNode.setWorldPosition(this.node.worldPosition.clone().add(offset));
      this.borderNode.setWorldPosition(this.node.worldPosition);

    }
  }

  public getPosition() {
    return this.node.getPosition();
  }

  private buildIcon() {
    this.faceAnimationNode.active = false;
    this.faceAnimationNode.removeFromParent();

    this.jinFaFaceAnimationNode.active = false;
    this.jinFaFaceAnimationNode.removeFromParent();

    const skeletonData = sourceManageSeletor().getFile(this.iconConfig.skeletonName).source;
    this.skeleton.skeletonData = skeletonData;
    this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);
    this.sprite.spriteFrame = sourceManageSeletor().getFile(this.iconConfig.fileName).source;

  }

  /**播放普通中奖 */
  public playWin(parentNode: Node, isBorder: boolean = true, loop: boolean = true) {
    const offset = new Vec3(this.iconConfig.distance[0], this.iconConfig.distance[1]);
    if (!this.faceAnimationNode.active && !this.jinFaFaceAnimationNode.active && !this.jinFaFaceNode.active) {
      this.faceAnimationNode.active = true;
      // console.log("playWin ", this.iconConfig.id, " parent " + this.faceAnimationNode.parent);
      if (!this.faceAnimationNode.parent) {
        parentNode.addChild(this.faceAnimationNode)
        this.faceAnimationNode.setWorldPosition(this.node.worldPosition.clone().add(offset));
      }
    } else if (this.jinFaFaceAnimationNode.active || this.jinFaFaceNode.active) {
      // this.skeleton = this.jinFaSkeleton;
      this.jinFaFaceAnimationNode.active = true;
      this.jinFaFaceNode.active = false;
      if (!this.jinFaFaceAnimationNode.parent) {
        parentNode.addChild(this.jinFaFaceAnimationNode)
        this.jinFaFaceAnimationNode.setWorldPosition(this.node.worldPosition.clone().add(offset));
      }
    }

    if (isBorder && !this.borderNode.active) {
      this.borderNode.active = true;
      if (!this.borderNode.parent) {
        parentNode.addChild(this.borderNode)
        const offset1 = new Vec3(this.iconConfig.distance[0], this.iconConfig.distance[1]+5);

        this.borderNode.setWorldPosition(this.node.worldPosition.clone().add(offset1));
      }
    }

    this.faceNode.active = false;

    // if (this.sprite.spriteFrame !== sourceManageSeletor().getFile(this.iconConfig.fileName).source) {
    //   this.skeleton.setAnimation(0, "dynamic", loop);
    //   // let count
    //   // let skeletonPlayer=  new SkeletonAnimationPlayer(this.skeleton, "dynamic", true, () => {
    //     // count++
    //     // if (count >= 1) {
    //       // skeletonPlayer.stopAnimation()
    //       // this.sprite.spriteFrame = sourceManageSeletor().getFile(SpriteFramePathDefine.icon_jinfa).source;
    //       // this.faceNode.active = true;
    //       // this.faceAnimationNode.active = false;
    //     // }
    // //  })
    // //  skeletonPlayer.playAnimation()
    // } else {
      if (this.iconConfig.id === IconId.SCATTER) {
        this.skeleton.setAnimation(0, this.iconConfig.animationArr[2], loop);
      } else {
        if (this.jinFaFaceAnimationNode.active) {
          this.jinFaSkeleton.setAnimation(0, "dynamic", loop);
        } else {
          this.skeleton.setAnimation(0, this.iconConfig.animationArr[1], loop);
        }
      }
    // }
  }

  /**播放甲壳虫动画 */
  public playBeetleAnimation(done) {
    // if (!this.isBeetleIcon()) {
    //   done && done();
    //   return;
    // }
    this.callback = done;
    this.faceAnimationNode.active = true;
    this.node.addChild(this.faceAnimationNode);
    this.faceAnimationNode.setWorldPosition(this.node.worldPosition);
    this.faceNode.active = false;

    this.amountNode.setSiblingIndex(this.node.children.length);
    this.skeleton.setAnimation(0, this.iconConfig.animationArr[1], true);
  }

  /**播放金wild撒元宝动画 */
  public playJinWild(parentNode,done) {
    if (this.iconConfig.id !== IconId.WILD2) {
      this.setJinWildPosition()
      done && done();
      return
    }
    const offset = new Vec3(this.iconConfig.distance[0], this.iconConfig.distance[1]);
    if (!this.faceAnimationNode.active) {
      this.faceAnimationNode.active = true;
      // console.log("playWin ", this.iconConfig.id, " parent " + this.faceAnimationNode.parent);
      if (!this.faceAnimationNode.parent) {
        parentNode.addChild(this.faceAnimationNode)
        this.faceAnimationNode.setWorldPosition(this.node.worldPosition.clone().add(offset));
      }
    }
    this.faceNode.active = false;
    // this.skeleton.setAnimation(0, this.iconConfig.animationArr[2], true);
    new SkeletonAnimationPlayer(this.skeleton, "animation4", false, () => {
      done && done();
    }).playAnimation()
  }

    /**播放scatter进入小游戏动画 */
    public playScatterWin(parentNode: Node, done, loop: boolean = false) {
      const offset = new Vec3(this.iconConfig.distance[0], this.iconConfig.distance[1]);
      if (!this.faceAnimationNode.active) {
        this.faceAnimationNode.active = true;
        if (!this.faceAnimationNode.parent) {
          parentNode.addChild(this.faceAnimationNode)
          this.faceAnimationNode.setWorldPosition(this.node.worldPosition.clone().add(offset));
        }
      }
  
      this.faceNode.active = false;
      // if (this.iconConfig.id === IconId.SCATTER) {//scatter
      //   const skeletonData = sourceManageSeletor().getFile(SkeletalPathDefine.TUBIAO_SCATTER).source;
      //   this.skeleton.skeletonData = skeletonData;
      // }
      let count = 0;
      const skeletonPlayer = new SkeletonAnimationPlayer(this.skeleton, this.iconConfig.animationArr[1], false, () => {
        count++;
        if (count >= 1) {
          skeletonPlayer.stopAnimation()
          this.skeleton.clearTracks()
          this.faceNode.active = true;
          this.faceAnimationNode.active = false;
        }
      })
      skeletonPlayer.playAnimation()
  
    }

  /**隐藏普通中奖 */
  public hideWin() {
    this.faceAnimationNode.active = false;
    this.faceAnimationNode.removeFromParent();
    this.borderNode.active = false;
    this.borderNode.removeFromParent();

    this.faceNode.active = true;
    this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);

    this.jinFaSkeleton.setAnimation(0, "static", false);
    this.jinFaFaceAnimationNode.active = false;
    this.jinFaFaceNode.active = false;
  }

  public pauseWin() {
    this.borderNode.active = false;
    
    if (this.iconConfig.id === IconId.WILD1 || this.iconConfig.id === IconId.WILD2) {
      this.skeleton.clearTracks()
    } 
    // if (this.sprite.spriteFrame !== sourceManageSeletor().getFile(this.iconConfig.fileName).source) {
    //   this.sprite.spriteFrame = sourceManageSeletor().getFile(SpriteFramePathDefine.icon_jinfa).source;
    //   this.skeleton.setAnimation(0, "static", false);
    // }
    this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);
    if (this.jinFaFaceAnimationNode.active) {
      this.jinFaFaceAnimationNode.active = false;
      this.jinFaFaceNode.active = true;
    }
    this.jinFaSkeleton.setAnimation(0, "static", false);
  }

  public changeToJinWild() {
    this.faceNode.active = false;
    this.faceAnimationNode.active = false;
    this.jinFaFaceAnimationNode.active = true;
    this.jinFaFaceNode.active = true;
    // this.sprite.spriteFrame = sourceManageSeletor().getFile(SpriteFramePathDefine.icon_jinfa).source;
    // this.skeleton.skeletonData = sourceManageSeletor().getFile(SkeletalPathDefine.icon_jin_wild).source;
    
  }

  /**是否使用 */
  public isUse() {
    return this.use;
  }

  public setAmount(amount) {
    // this.amount = amount;
    // if (amount > 0) {
    //   this.amountNode.active = true;
    // }
    // const amountStr = amount >= 10000 ? amount.formatAmountWithLetter() : amount.formatAmountWithCommas()
    // this.amountNode.getComponent(Label).string = amountStr;
  }

  public showBg() {
    this.node.getChildByName("bg").active = true;
  }

  public hideBg() {
    this.node.getChildByName("bg").active = false;
  }

  public showAmount() {
    // this.isBeetleIcon() && (this.amountNode.active = false);
  }
  public hideAmount() {
    this.amountNode.active = false;
    this.amount = 0;
  }

  public getAmountNode() {
    return this.amountNode;
  }

  public getAmount() {
    return this.amount;
  }

  public destory() {
    this.node.isValid && this.node.destroy();
    this.faceAnimationNode.destroy();
    this.jinFaFaceAnimationNode.destroy()
    this.borderNode.destroy();
    this.node = null;
    this.iconConfig = null;
    this.skeleton = null;
    this.jinFaSkeleton = null;
  }
}