import { Node, UITransform, Vec3, instantiate, sp, Sprite, Label, Mask, Graphics, Component } from "cc";
import { sourceManageSeletor } from "../index";
import { PrefabPathDefine } from "../sourceDefine/prefabDefine";
import { getNodeByNameDeep } from "../../../utils/tool";
import { IconId } from "../type";
import config from "../config";

class IconComponent extends Component {

}

export class EgyptV2Icon {
  private node: Node;
  private faceNode: Node;
  private faceAnimationNode: Node;
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

    if (this.isBeetleIcon() || this.isSunGod()) {
      this.amountNode = getNodeByNameDeep("amount", this.node);
      this.amountNode.active = true;
      this.amountNode.getComponent(Label).string = this.isBeetleIcon() ? "0" : "";
      this.listenerSkeletonEvent();
      this.amount = 0;
    }

    this.buildIcon();
  }

  public isBeetleIcon() {
    return this.iconConfig.id === IconId.BEETLE
  }

  public isSunGod() {
    return this.iconConfig.id === IconId.SUN_GOD
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
      if (this.amountNode) {
        this.amount = 0;
        this.amountNode.getComponent(Label).string = this.isBeetleIcon() ? '0' : '';
      }
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
      this.borderNode.setWorldPosition(this.node.worldPosition);
    }
  }

  public getPosition() {
    return this.node.getPosition();
  }

  private buildIcon() {
    this.faceAnimationNode.active = false;
    //this.faceAnimationNode.removeFromParent();

    const skeletonData = sourceManageSeletor().getFile(this.iconConfig.skeletonName).source;
    this.skeleton.skeletonData = skeletonData;
    ///this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);
    this.sprite.spriteFrame = sourceManageSeletor().getFile(this.iconConfig.fileName).source;

  }

  /**播放普通中奖 */
  public playWin(parentNode: Node, isBorder: boolean = true, loop: boolean = true) {
    const offset = new Vec3(this.iconConfig.distance[0], this.iconConfig.distance[1]);
    this.faceAnimationNode.active = true;
    if (!this.faceAnimationNode.parent) {
      parentNode.addChild(this.faceAnimationNode)
    }
    this.faceAnimationNode.setWorldPosition(this.node.worldPosition.clone().add(offset));
    if (isBorder && !this.borderNode.active) {
      this.borderNode.active = true;
      if (!this.borderNode.parent) {
        parentNode.addChild(this.borderNode)
        this.borderNode.setWorldPosition(this.node.worldPosition);
      }
    }

    this.faceNode.active = false;
    this.skeleton.setAnimation(0, this.iconConfig.animationArr[1], loop);
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

  /**隐藏普通中奖 */
  public hideWin() {
    this.faceAnimationNode.active = false;
    this.faceAnimationNode.removeFromParent();
    this.borderNode.active = false;
    this.borderNode.removeFromParent();

    this.faceNode.active = true;
    //this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);
  }

  public pauseWin() {
    this.borderNode.active = false;
    this.faceAnimationNode.active = false;
    //this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);
  }

  /**是否使用 */
  public isUse() {
    return this.use;
  }

  public setAmount(amount) {
    this.amount = amount;
    if (amount > 0) {
      this.amountNode.active = true;
    }
    const amountStr = amount >= 10000 ? amount.formatAmountWithLetter() : amount.formatAmountWithCommas()
    this.amountNode.getComponent(Label).string = amountStr;
  }

  public showBg() {
    this.node.getChildByName("bg").active = true;
  }

  public hideBg() {
    this.node.getChildByName("bg").active = false;
  }

  public showAmount() {
    this.isBeetleIcon() && (this.amountNode.active = false);
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
    this.borderNode.destroy();
    this.node = null;
    this.iconConfig = null;
    this.skeleton = null;
  }
}