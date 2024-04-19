import { Node, UITransform, Vec3, instantiate, sp, Sprite, Label } from "cc";
import { sourceManageSeletor } from "../index";
import { PrefabPathDefine } from "../sourceDefine/prefabDefine";
import { getNodeByNameDeep } from "../../../utils/tool";
import { IconId } from "../type";
import config from "../config";
import SkeletonAnimationPlayer from "../../../utils/SkeletonPlay";
import { SpriteFramePathDefine } from "../sourceDefine/spriteDefine";
import { SkeletalPathDefine } from "../sourceDefine/skeletalDefine";
export class DragonV2Icon {
  private node: Node;
  private faceNode: Node;
  public faceAnimationNode: Node;
  private iconConfig;
  private skeleton: sp.Skeleton;
  private sprite: Sprite
  private use = false;
  private iconIndex = 0;

  private borderNode: Node;
  public borderNode2: Node;

  public amountNode: Node;
  // public Particle2DNode: Node;

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

    this.sprite = this.faceNode.getComponent(Sprite);
    this.skeleton = this.faceAnimationNode.getComponent(sp.Skeleton);

    this.borderNode = getNodeByNameDeep("focusBorder", this.node);
    this.borderNode.active = false;
    this.borderNode.removeFromParent();

    // this.borderNode2 = getNodeByNameDeep("focusBorder2", this.node);
    // this.borderNode2.active = true;
    // this.borderNode2.removeFromParent();
    
    if (this.iconConfig.id === IconId.BEETLE) {
      this.amountNode = getNodeByNameDeep("amount", this.node);
      this.amountNode.active = true;
      // this.Particle2DNode = this.amountNode.getChildByName("props_Particle");
      this.amountNode.getChildByName("label_number").getComponent(Label).string = Math.ceil((Math.random() * 100))  + '';
      this.listenerSkeletonEvent();
    }
    this.buildIcon();
  }

  private listenerSkeletonEvent() {
    this.skeleton.setCompleteListener(() => {
      if (this.node && this.node.isValid && this.callback) {
        this.callback && this.callback();
        this.callback = null;
        this.hideWin();
      }
    })
  }
  public pauseWin() {
    this.borderNode.active = false;
    this.skeleton.clearTracks()
  }
  changeIcon(bl){
    if(bl){
      this.sprite.spriteFrame = sourceManageSeletor().getFile(SpriteFramePathDefine.baicai1).source
      this.skeleton.skeletonData =sourceManageSeletor().getFile(SkeletalPathDefine.baicai1).source
    }else{
      this.sprite.spriteFrame = sourceManageSeletor().getFile(SpriteFramePathDefine.baicai).source
      this.skeleton.skeletonData = sourceManageSeletor().getFile(SkeletalPathDefine.baicai).source
    }
  }
    /**获得图标 */
  public resetIcon(iconConfig, parentNode?: Node, iconIndex?: number) {
    this.use = true;
    this.iconConfig = iconConfig;
    this.iconIndex = iconIndex;
    parentNode && parentNode.addChild(this.node);
    this.node.setScale(iconConfig.scale[0], iconConfig.scale[1]);
  }

  public getId() {
    return this.iconConfig.id;
  }

 /**归还到缓存池 */
 public restore() {
  this.use = false;
  this.iconIndex = -1;
  this.node.active = true;
  this.node.removeFromParent();
  if (this.node && this.node.isValid) {
   this.amountNode && (this.amountNode.getChildByName("label_number").getComponent(Label).string =  (Math.random() * 100).toFixed(0) + '');
  if (this.iconConfig.id === IconId.BEETLE) {
    this.amountNode.active = false;
  }
}
  !this.isPoolObject && this.destory();
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
  }
}

public getPosition() {
  return this.node.getPosition();
}

private buildIcon() {
  this.faceAnimationNode.active = true;
  this.faceAnimationNode.removeFromParent();
  const skeletonData = sourceManageSeletor().getFile(this.iconConfig.skeletonName).source;
  this.skeleton.skeletonData = skeletonData;
  // this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);
  this.sprite.spriteFrame = sourceManageSeletor().getFile(this.iconConfig.fileName).source;

}

/**播放普通中奖 */
public playWin(parentNode: Node, isBorder: boolean = true, loop: boolean = true) {
  const offset = new Vec3(this.iconConfig.distance[0], this.iconConfig.distance[1]);
  this.faceAnimationNode.active = true;
  parentNode.addChild(this.faceAnimationNode)
  this.faceAnimationNode.setWorldPosition(this.node.worldPosition.clone().add(offset));
  
  if (isBorder && !this.borderNode.active) {
    this.borderNode.active = true;
    if (!this.borderNode.parent) {
      parentNode.addChild(this.borderNode)
      this.borderNode.setWorldPosition(this.node.worldPosition);
    }
  }
  this.faceNode.active = false;
  if(loop){
    this.skeleton.setAnimation(0, this.iconConfig.animationArr[1], loop);
  }else{ // 播放一次切换回图片
    new SkeletonAnimationPlayer(this.skeleton, this.iconConfig.animationArr[1], false, () => {
      this.faceNode.active = true;
      this.faceAnimationNode.active = false;
    }).playAnimation()
  }
}

/**播放宝盒动画 */
public playBaoHeAnimation(done) {
  this.callback = done;
  this.faceAnimationNode.active = true;
  this.node.addChild(this.faceAnimationNode);
  this.faceAnimationNode.setWorldPosition(this.node.worldPosition);
  this.faceNode.active = true;
  this.amountNode.setSiblingIndex(this.node.children.length);
  this.skeleton.setAnimation(0, this.iconConfig.animationArr[1], true);
}
public playGame2BaoHeAnimation(done){
  this.callback = done;
}
/**隐藏普通中奖 */
public hideWin() {
  this.faceAnimationNode.active = false;
  this.faceAnimationNode.removeFromParent();
  this.borderNode.active = false;
  this.skeleton.clearTrack(1)
  this.borderNode.removeFromParent();
  this.faceNode.active = true;
}

/**是否使用 */
public isUse() {
  return this.use;
}

public setAmount(amount) {
  this.amountNode.getChildByName("label_number").getComponent(Label).string = amount >= 10000 ? amount.formatAmountWithLetter() : amount.formatAmountWithCommas();
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

// public getParticleNode() {
//   return this.Particle2DNode;
// }

public destory() {
  this.node && this.node.isValid && this.node.destroy();
  this.faceAnimationNode.destroy();
  this.borderNode.destroy();
  this.node = null;
  this.iconConfig = null;
  this.skeleton = null;
}
}