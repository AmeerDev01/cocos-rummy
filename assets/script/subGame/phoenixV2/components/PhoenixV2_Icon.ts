import { Node, UITransform, Vec3, instantiate, sp, Sprite, Label, Animation, Mask, Graphics, UIOpacity, tween, Component } from "cc";
import { sourceManageSeletor } from "../index";
import { PrefabPathDefine } from "../sourceDefine/prefabDefine";
import { getNodeByNameDeep } from "../../../utils/tool";
import { GameType, IconId, getWild } from "../type";
import config from "../config";
import { SkeletalPathDefine } from "../sourceDefine/skeletalDefine";
import SkeletonAnimationPlayer from "../../../utils/SkeletonPlay";
class IconComponent extends Component {

}

export class PhoenixV2Icon {
  private node: Node;
  private faceNode: Node;
  private faceAnimationNode: Node;
  private iconConfig;
  private skeleton: sp.Skeleton;
  private sprite: Sprite
  private use = false;
  private iconIndex = 0;

  private borderNode: Node;
  public amountNode: Node;
  private Particle2D: Node;

  public yinBiNode: Node;

  private isPoolObject = true;
  private callback;
  private iconComponent: IconComponent;

  constructor(iconConfig, isPoolObject: boolean = true) {
    this.iconConfig = iconConfig;
    this.isPoolObject = isPoolObject;
    this.node = instantiate(sourceManageSeletor().getFile(PrefabPathDefine.ICON).source);
    this.node.getComponent(UITransform).width = config.normalRollOption.singleRollerWidth;
    this.node.getComponent(UITransform).height = config.normalRollOption.singleRollerHeight;

    this.iconComponent = this.node.addComponent(IconComponent)

    this.faceNode = getNodeByNameDeep("face", this.node);
    this.faceAnimationNode = getNodeByNameDeep("face-animation", this.node);

    this.sprite = this.faceNode.getComponent(Sprite);
    this.skeleton = this.faceAnimationNode.getComponent(sp.Skeleton);

    this.borderNode = getNodeByNameDeep("focusBorder", this.node);
    this.borderNode.active = true;
    this.borderNode.removeFromParent();

    this.yinBiNode = getNodeByNameDeep("yinBi", this.node);
    this.yinBiNode.active = false;
    if (this.iconConfig.id === IconId.WILD) {
      this.amountNode = getNodeByNameDeep("amount", this.node);
      this.Particle2D = getNodeByNameDeep("props_Particle2D", this.node);
      // this.amountNode.active = true;
      this.listenerSkeletonEvent();
    }

    this.buildIcon();
  }

  private listenerSkeletonEvent() {
    this.skeleton.setCompleteListener(() => {
      this.iconComponent.scheduleOnce(() => {
        if (this.node.isValid && this.callback) {
          this.callback && this.callback();
          this.callback = null;
          this.hideWin();
        }
      })
    })
  }

  /**获得图标 */
  public resetIcon(iconConfig, parentNode?: Node, iconIndex?: number) {
    this.use = true;
    this.iconConfig = iconConfig;
    this.iconIndex = iconIndex;
    parentNode && parentNode.addChild(this.node);
    this.node.setScale(iconConfig.scale[0], iconConfig.scale[1]);
    this.faceAnimationNode.setScale(iconConfig.scale[0], iconConfig.scale[1]);
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
      this.amountNode && (this.amountNode.active = false);
      this.Particle2D && (this.Particle2D.active = true);
      this.yinBiNode && (this.yinBiNode.active = false);
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
    }
  }

  public getPosition() {
    return this.node.getPosition();
  }

  public changeIcon(id) {
    const { fileName, skeletonName } = getWild(id);
    this.sprite.spriteFrame = sourceManageSeletor().getFile(fileName).source;
    // this.skeleton.skeletonData = sourceManageSeletor().getFile(skeletonName).source;
  }

  private buildIcon() {
    this.faceAnimationNode.active = false;
    this.faceAnimationNode.removeFromParent();

    const skeletonData = sourceManageSeletor().getFile(this.iconConfig.skeletonName).source;
    this.skeleton.skeletonData = skeletonData;
    if (this.iconConfig && this.iconConfig.animationArr[0] !== " ") {
      this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);
    } else {
      this.skeleton.clearTracks()
    }
    // if (this.iconConfig.id === 12) {

    //   console.log("this.iconConfig.fileName",this.iconConfig.fileName,this.iconConfig.skeletonName);
    // }

    this.sprite.spriteFrame = sourceManageSeletor().getFile(this.iconConfig.fileName).source;

  }

  /**播放普通中奖 */
  public playWin(parentNode: Node, isBorder: boolean = true, loop: boolean = true) {
    const offset = new Vec3(this.iconConfig.distance[0], this.iconConfig.distance[1]);
    this.yinBiNode && (this.yinBiNode.active = false);
    this.yinBiNode && (this.yinBiNode.removeFromParent());
    this.faceAnimationNode.active = true;
    parentNode.addChild(this.faceAnimationNode)
    this.faceAnimationNode.setWorldPosition(this.node.worldPosition.clone().add(offset));
    // if (!this.faceAnimationNode.active) {
    // this.faceAnimationNode.active = true;
    //   if (!this.faceAnimationNode.parent) {
    //     parentNode.addChild(this.faceAnimationNode)
    //     this.faceAnimationNode.setWorldPosition(this.node.worldPosition.clone().add(offset));
    //   }
    // }

    if (isBorder && !this.borderNode.active) {
      this.borderNode.active = true;
      if (!this.borderNode.parent) {
        parentNode.addChild(this.borderNode);
        this.borderNode.setWorldPosition(this.node.worldPosition);
        this.borderNode.getComponent(Animation).play();
      }
    }

    this.faceNode.active = false;
    if (this.iconConfig.id === IconId.BEETLE) {//元宝
      const skeletonData = sourceManageSeletor().getFile(SkeletalPathDefine.TUBIAO_YUANBAO_ZHONG_JIANG).source;
      this.skeleton.skeletonData = skeletonData;
    }

    if (this.iconConfig.id === IconId.SCATTER) {//出现金钱图标时
      const skeletonData = sourceManageSeletor().getFile(SkeletalPathDefine.TUBIAO_SCATTER_CHUXIAN).source;
      this.skeleton.skeletonData = skeletonData;
      new SkeletonAnimationPlayer(this.skeleton, this.iconConfig.animationArr[1], false, () => {
        this.faceNode.active = true;
        this.faceAnimationNode.active = false;
      }).playAnimation()
    } else {

      this.skeleton.setAnimation(0, this.iconConfig.animationArr[1], loop);
    }


  }

  /**播放scatter进入小游戏动画 */
  public playScatterWin(parentNode: Node, loop: boolean = false) {
    const offset = new Vec3(this.iconConfig.distance[0], this.iconConfig.distance[1]);
    if (!this.faceAnimationNode.active) {
      this.faceAnimationNode.active = true;
      if (!this.faceAnimationNode.parent) {
        parentNode.addChild(this.faceAnimationNode)
        this.faceAnimationNode.setWorldPosition(this.node.worldPosition.clone().add(offset));
      }
    }

    this.faceNode.active = false;
    if (this.iconConfig.id === IconId.SCATTER) {//scatter
      const skeletonData = sourceManageSeletor().getFile(SkeletalPathDefine.TUBIAO_SCATTER).source;
      this.skeleton.skeletonData = skeletonData;
    }
    let count = 0;
    const skeletonPlayer = new SkeletonAnimationPlayer(this.skeleton, this.iconConfig.animationArr[1], false, () => {
      count++;
      if (count >= 1) {
        skeletonPlayer.stopAnimation()

      }
    })
    skeletonPlayer.playAnimation()

  }

  /**播放特殊元宝动画 */
  public playYuanBaoWinIcon(parentNode: Node,isWin:boolean,) {
    this.faceAnimationNode.active = true;
    this.node.addChild(this.faceAnimationNode);
    this.faceAnimationNode.setWorldPosition(this.node.worldPosition);
    this.faceNode.active = false;
    let count = 0;
    if (!isWin) {
      const skeletonData = sourceManageSeletor().getFile(SkeletalPathDefine.TUBIAO_CHUXIAN).source;
      this.skeleton.skeletonData = skeletonData;
      this.skeleton.setAnimation(0, this.iconConfig.animationArr[1], false);
      this.yinBiNode.active = false;
    } else {
      const skeletonData = sourceManageSeletor().getFile(SkeletalPathDefine.TUBIAO_YUANBAO_ZHONG_JIANG).source;
      this.skeleton.skeletonData = skeletonData;
      this.skeleton.setAnimation(0, this.iconConfig.animationArr[1], false);
      const skeletonPlayer = new SkeletonAnimationPlayer(this.skeleton, this.iconConfig.animationArr[1], false, () => {
        count++;
        if (count >= 1) {
          skeletonPlayer.stopAnimation()
          this.faceNode.active = true;
          this.faceAnimationNode.active = false;
          this.yinBiNode.active = true;
          this.node.addChild(this.faceAnimationNode);
          this.yinBiNode.setWorldPosition(this.node.worldPosition);
        }
      })
      skeletonPlayer.playAnimation()

    }

  }




  /**播放甲壳虫动画 */
  public playBeetleAnimation(done) {
    this.callback = done;
    this.faceAnimationNode.active = true;
    this.node.addChild(this.faceAnimationNode);
    this.faceAnimationNode.setWorldPosition(this.node.worldPosition);
    this.faceNode.active = false;

    this.amountNode.setSiblingIndex(this.node.children.length);
    this.skeleton.setAnimation(0, this.iconConfig.animationArr[1], true);
  }

  /**隐藏普通中奖 */
  public hideWin() {
    this.faceAnimationNode.active = false;
    this.faceAnimationNode.removeFromParent();
    this.borderNode.active = false;
    this.borderNode.removeFromParent();

    this.faceNode.active = true;
    this.yinBiNode.active = false;
    this.yinBiNode.removeFromParent();
    this.skeleton.clearTracks()
    this.Particle2D && (this.Particle2D.active = false);
  }

  public pauseWin() {
    this.borderNode.active = false;
    // this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);
    this.skeleton.clearTracks();
  }

  /**是否使用 */
  public isUse() {
    return this.use;
  }

  public setAmount(amount) {
    // this.amountNode.getComponent(Label).string = amount;
  }

  public showBg() {
    this.node.getChildByName("bg").active = true;
  }

  public hideBg() {
    this.node.getChildByName("bg").active = false;
  }

  public getAmountNode() {
    return this.amountNode;
  }

  public getParticle2DNode() {
    return this.Particle2D;
  }

  public getYinBiNode() {
    return this.yinBiNode;
  }

  public destory() {
    this.node.isValid && this.node.destroy();
    this.faceAnimationNode.destroy();
    this.borderNode.destroy();
    this.node = null;
    this.iconConfig = null;
    this.skeleton = null;
    this.yinBiNode.destroy();
    this.Particle2D.destroy();
    this.amountNode.destroy();
  }
}