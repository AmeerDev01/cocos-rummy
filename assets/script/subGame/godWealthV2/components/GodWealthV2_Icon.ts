import { Node, UITransform, Vec3, instantiate, sp, Sprite, Label, Component } from "cc";
import { mainViewModel, sourceManageSeletor } from "../index";
import { PrefabPathDefine } from "../sourceDefine/prefabDefine";
import { getNodeByNameDeep } from "../../../utils/tool";
import config from "../config";
import { IconId } from "../type";

class IconComponent extends Component {

}

export class GodWealthV2Icon {
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
  public Particle2DNode: Node;

  private isPoolObject = true;
  private callback;

  private iconComponent: IconComponent;


  constructor(iconConfig, isPoolObject: boolean = true) {
    this.iconConfig = iconConfig;
    this.isPoolObject = isPoolObject;
    this.node = instantiate(sourceManageSeletor().getFile(PrefabPathDefine.ICON).source);
    this.node.getComponent(UITransform).width = config.normalRollOption.singleRollerWidth;
    this.node.getComponent(UITransform).height = config.normalRollOption.singleRollerHeight;

    this.iconComponent = this.node.addComponent(IconComponent);

    this.faceNode = getNodeByNameDeep("face", this.node);
    this.faceAnimationNode = getNodeByNameDeep("face-animation", this.node);

    this.sprite = this.faceNode.getComponent(Sprite);
    this.skeleton = this.faceAnimationNode.getComponent(sp.Skeleton);

    this.borderNode = getNodeByNameDeep("focusBorder", this.node);
    this.borderNode.active = true;
    this.borderNode.removeFromParent();

    this.borderNode2 = getNodeByNameDeep("focusBorder2", this.node);
    // this.borderNode2.active = true;
    this.borderNode2.removeFromParent();

    if (this.iconConfig.id === IconId.BEETLE) {
      this.amountNode = getNodeByNameDeep("amount", this.node);
      this.amountNode.active = true;
      this.Particle2DNode = this.amountNode.getChildByName("props_Particle");
      this.amountNode.getChildByName("label_number").getComponent(Label).string = Math.ceil((Math.random() * 100)) + '';
      this.listenerSkeletonEvent();
    }

    this.buildIcon();
  }

  private listenerSkeletonEvent() {
    this.skeleton.setCompleteListener(() => {
      this.iconComponent.scheduleOnce(() => {
        if (this.node && this.node.isValid && this.callback) {
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
    this.node && this.node.isValid && this.amountNode && (this.amountNode.getChildByName("label_number").getComponent(Label).string = Math.ceil((Math.random() * 100)) + '');
    if (this.iconConfig.id === IconId.BEETLE) {
      this.amountNode.active = true;
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
    this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);
    this.sprite.spriteFrame = sourceManageSeletor().getFile(this.iconConfig.fileName).source;

  }

  /**播放普通中奖 */
  public playWin(parentNode: Node, isBorder: boolean = true, loop: boolean = true) {
    const offset = new Vec3(this.iconConfig.distance[0], this.iconConfig.distance[1]);
    if (this.iconConfig.id === IconId.WILD) {
      this.faceAnimationNode.setScale(this.iconConfig.scale[0], this.iconConfig.scale[1]);
    }
    this.faceAnimationNode.active = true;
    parentNode.addChild(this.faceAnimationNode)
    this.faceAnimationNode.setWorldPosition(this.node.worldPosition.clone().add(offset));


    if (isBorder) {
      this.borderNode.active = true;
      parentNode.addChild(this.borderNode)
      this.borderNode.setWorldPosition(this.node.worldPosition);
    }

    this.faceNode.active = false;
    this.skeleton.setAnimation(0, this.iconConfig.animationArr[1], loop);
    if (!loop && this.iconConfig.id === IconId.SCATTER) {// && mainViewModel.rollerPanelViewModel.comp.isAllEnd

      this.faceAnimationNode.getComponent(sp.Skeleton).timeScale = 2.5;
    }

  }

  /**播放宝盒动画 */
  public playBaoHeAnimation(parentNode, done) {
    this.callback = done;
    this.faceAnimationNode.active = true;
    this.node.addChild(this.faceAnimationNode);
    this.faceAnimationNode.setWorldPosition(this.node.worldPosition);
    this.faceNode.active = false;

    this.borderNode2.active = true;
    this.borderNode2.setScale(1, 0.95);
    // if (!this.borderNode2.parent) {
    parentNode.addChild(this.borderNode2)
    this.borderNode2.setWorldPosition(this.node.worldPosition);
    // }
    // this.borderNode2.active = true;
    // this.node.addChild(this.borderNode2)

    this.amountNode.setSiblingIndex(this.node.children.length);

    this.skeleton.setAnimation(0, this.iconConfig.animationArr[1], true);
  }

  public pauseWin() {
    this.borderNode.active = false;
    if (this.iconConfig.id === 6) {
      this.skeleton.clearTracks()
    }
    // this.skeleton.clearTracks()
    this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);
  }

  /**隐藏普通中奖 */
  public hideWin() {
    this.faceAnimationNode.active = false;
    this.faceAnimationNode.removeFromParent();
    this.borderNode.active = false;
    this.borderNode.removeFromParent();
    this.faceNode.active = true;
    this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);
  }

  /**隐藏宝盒中奖 */
  public hideBaoHeWin() {
    this.faceAnimationNode.active = false;
    this.faceAnimationNode.removeFromParent();
    this.borderNode2.active = false;
    this.borderNode2.removeFromParent();
    this.faceNode.active = true;
    this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);
  }

  /**是否使用 */
  public isUse() {
    return this.use;
  }

  public setAmount(amount) {
    const miniNum = mainViewModel.comp.miniNum;
    const majorNum = mainViewModel.comp.majorNum;
    if (this.node && this.node.isValid) {

      if (amount >= miniNum && amount < majorNum) {
        this.amountNode.getChildByName("label_number").getComponent(Label).string = "MINI";
      } else if (amount >= majorNum) {
        this.amountNode.getChildByName("label_number").getComponent(Label).string = "MAJOR";

      } else if (amount < miniNum) {

        this.amountNode.getChildByName("label_number").getComponent(Label).string = amount >= 10000 ? amount.formatAmountWithLetter() : amount.formatAmountWithCommas();
      }
    }
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

  public getParticleNode() {
    return this.Particle2DNode;
  }

  public destory() {
    this.node && this.node.isValid && this.node.destroy();
    this.faceAnimationNode.destroy();
    this.borderNode.destroy();
    this.node = null;
    this.iconConfig = null;
    this.skeleton = null;
  }
}