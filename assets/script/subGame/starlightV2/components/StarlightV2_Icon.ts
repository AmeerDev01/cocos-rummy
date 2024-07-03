import { Node, UITransform, Vec3, instantiate, sp, Sprite, Label, Mask, Graphics, Animation, Component } from "cc";
import { sourceManageSeletor, starlightv2_Audio } from "../index";
import { PrefabPathDefine } from "../sourceDefine/prefabDefine";
import { getNodeByNameDeep } from "../../../utils/tool";
import { IconId } from "../type";
import config from "../config";
import { SoundPathDefine } from "../sourceDefine/soundDefine";

class IconComponent extends Component {

}
export class StarlightV2Icon {
  private node: Node;
  private faceNode: Node;
  private faceAnimationNode: Node;
  private iconConfig;
  private skeleton: sp.Skeleton;
  private sprite: Sprite
  private use = false;
  private iconIndex = 0;

  private props_skeleton_bomb: sp.Skeleton
  private props_win_number: Node;
  private props_iconWrap: Node;
  private props_iconId: Node;
  private props_label_rate_num: Node;
  private props_label_rate_num_origin_pos: Vec3;
  private faceAnimationNodeOriginPos: Vec3;

  private borderNode: Node;

  private isPoolObject = true;
  private callback;
  /**骨骼动画播放结束回调方法 */
  private skeletonOverCallback;
  private roundIndex: number = 0;

  /**是否播放闪电 */
  private playLightning = false;
  private iconComponent: IconComponent;

  constructor(iconConfig, isPoolObject: boolean = true) {
    this.iconConfig = iconConfig;
    this.isPoolObject = isPoolObject;
    this.node = instantiate(sourceManageSeletor().getFile(PrefabPathDefine.ICON).source);
    this.node.getComponent(UITransform).width = config.normalRollOption.singleRollerWidth;
    this.node.getComponent(UITransform).height = config.normalRollOption.singleRollerHeight;

    this.iconComponent = this.node.addComponent(IconComponent);

    this.props_iconWrap = getNodeByNameDeep("props_iconWrap", this.node);
    this.faceNode = getNodeByNameDeep("iconNode_sprite", this.node);
    this.faceAnimationNode = getNodeByNameDeep("iconNode_skeleton", this.node);
    this.faceAnimationNodeOriginPos = this.faceAnimationNode.position.clone();

    this.props_skeleton_bomb = getNodeByNameDeep("props_skeleton_bomb", this.node).getComponent(sp.Skeleton);
    this.props_win_number = getNodeByNameDeep("props_win_number", this.node);
    this.props_iconId = this.props_win_number.getChildByName("props_iconId");
    this.props_label_rate_num = getNodeByNameDeep("props_label_rate_num", this.node);
    this.props_label_rate_num_origin_pos = this.props_label_rate_num.position.clone();

    if (this.isScatterIcon()) {
      this.faceNode.setPosition(new Vec3(this.iconConfig.distance[0], this.iconConfig.distance[1]));
    }

    this.sprite = this.faceNode.getComponent(Sprite);
    this.skeleton = this.faceAnimationNode.getComponent(sp.Skeleton);
    // this.skeleton.timeScale = 3;

    this.borderNode = getNodeByNameDeep("props_focusBorder", this.node);
    this.borderNode.active = false;

    this.props_label_rate_num.active = false;

    this.listenerSkeletonEvent();
    this.listenerBombSkeletonEvent();
    this.listenerAmountEvent();
    this.buildIcon();
  }

  private listenerSkeletonEvent() {
    this.skeleton.setCompleteListener(() => {
      if (this.node.isValid) {
        this.iconComponent.scheduleOnce(() => {
          if (this.isOddsIcon() || this.isScatterIcon()) {
            this.resetFaceAnimationNodeOrOdds();
            this.callback && this.callback();
            this.callback = null;
          } else {
            this.hideWin();
            this.skeletonOverCallback && this.skeletonOverCallback();
            this.skeletonOverCallback = undefined;
            this.playBomb();
          }
        });
      }
    })
  }

  private listenerBombSkeletonEvent() {
    this.props_skeleton_bomb.setCompleteListener(() => {
      if (this.node.isValid) {
        this.iconComponent.scheduleOnce(() => {
          this.restore();
          this.callback && this.callback();
          this.callback = null;
        });
      }
    })
  }

  private listenerAmountEvent() {
    this.props_iconId.getComponent(Animation).on(Animation.EventType.FINISHED, () => {
      this.props_win_number.active = false;
    })
  }

  /**获得图标 */
  public resetIcon(iconConfig, parentNode?: Node, iconIndex?: number) {
    this.use = true;
    this.iconConfig = iconConfig;
    this.iconIndex = iconIndex;
    parentNode && parentNode.addChild(this.node);
    this.faceAnimationNode.setScale(iconConfig.scale[0], iconConfig.scale[1]);
    this.faceNode.setScale(iconConfig.scale[0], iconConfig.scale[1]);
  }

  public resetFaceAnimationNodeOrOdds() {
    if (this.isOddsIcon() || this.isScatterIcon()) {
      this.props_iconWrap.insertChild(this.faceAnimationNode, 0);
      const offset = new Vec3(this.iconConfig.distance[0], this.iconConfig.distance[1]);
      this.faceAnimationNode.setPosition(offset);

      this.props_iconWrap.addChild(this.props_label_rate_num);
      this.props_label_rate_num.setPosition(this.props_label_rate_num_origin_pos)
    }
  }

  public getId() {
    return this.iconConfig.id;
  }

  /**归还到缓存池 */
  public restore() {
    if (this.node && this.node.isValid) {
      this.playLightning = false;
      this.use = false;
      this.iconIndex = -1;
      this.node.active = true;
      this.node.removeFromParent();
      this.faceNode.active = true;
      this.skeleton.clearTracks()
      this.props_skeleton_bomb.node.active = false;
      // this.props_skeleton_bomb.clearTracks();
      this.hideWin();

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

  public setIconIndex(iconIndex: number) {
    this.iconIndex = iconIndex;
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
    // this.faceAnimationNode.removeFromParent();

    const skeletonData = sourceManageSeletor().getFile(this.iconConfig.skeletonName).source;
    this.skeleton.skeletonData = skeletonData;
    this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);
    if (this.iconConfig.skin) {
      this.skeleton.setSkin(this.iconConfig.skin);
    }
    this.sprite.spriteFrame = sourceManageSeletor().getFile(this.iconConfig.fileName).source;

  }

  public setSkeletonOverCallback(skeletonOverCallback) {
    this.skeletonOverCallback = skeletonOverCallback;
  }

  /**播放普通中奖 */
  public playWin(parentNode: Node, roundIndex: number = 0, timeScale: number = 1, isBorder: boolean = true, loop: boolean = false, callback = undefined) {
    this.callback = callback;
    this.roundIndex = roundIndex;
    this.showFaceAnimationNode(parentNode);

    if (isBorder && !this.borderNode.active) {
      this.borderNode.active = true;
      parentNode.addChild(this.borderNode)
      this.borderNode.setWorldPosition(this.node.worldPosition);
    }

    this.faceNode.active = false;
    // this.skeleton.paused = false;
    this.skeleton.timeScale = timeScale;
    this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], loop);
    if (this.iconConfig.skin) {
      this.skeleton.setSkin(this.iconConfig.skin);
    }
  }

  public playBomb() {
    this.faceNode.active = false;
    this.props_skeleton_bomb.node.active = true;
    this.props_skeleton_bomb.setAnimation(0, 'animation', false);
  }

  /**隐藏普通中奖 */
  public hideWin() {
    this.faceAnimationNode.active = false;
    this.borderNode.active = false;

    this.faceNode.active = true;
    // this.skeleton.clearTracks();

    this.props_label_rate_num.active = false;
  }

  public pauseWin() {
    this.borderNode.active = false;
  }

  /**是否使用 */
  public isUse() {
    return this.use;
  }

  public showBg() {
    this.node.getChildByName("bg").active = true;
  }

  public hideBg() {
    this.node.getChildByName("bg").active = false;
  }

  /**播放数字 */
  public playAmount(parentNode: Node, amount: number) {
    // const str = amount > 10000 ? amount.formatAmountWithLetter() : amount + '';
    const str = amount.formatAmountWithCommas();
    // this.props_win_number.removeFromParent();
    parentNode.addChild(this.props_win_number);
    this.props_win_number.setWorldPosition(this.node.worldPosition)
    this.props_win_number.active = true;
    this.props_win_number.setSiblingIndex(parentNode.children.length);
    this.props_iconId.getComponent(Label).string = str;
    this.props_iconId.getComponent(Animation).play();

    // console.log(`playAmount ${str}, id ${this.iconConfig.id}, props_win_number: ${this.props_win_number.worldPosition}`);
  }

  public setOddsIcon(value: string) {
    if (!this.isOddsIcon()) {
      return;
    }
    this.props_label_rate_num.active = true;
    this.props_label_rate_num.getComponent(Label).string = value;
  }

  /**获得倍率的label节点 */
  public getOddsLabelNode() {
    return this.props_label_rate_num;
  }

  /**播放倍率的图标动画，准备进行飞倍率 */
  public playOddsIcon(parentNode: Node, done) {
    this.callback = done;

    this.showFaceAnimationNode(parentNode);
    this.faceNode.active = false;
    this.skeleton.setAnimation(0, this.iconConfig.animationArr[1], false);
    if (this.iconConfig.skin) {
      this.skeleton.setSkin(this.iconConfig.skin);
    }

    this.playLabelRate(parentNode);
  }

  /**播放倍率label数字，提升上层节点 */
  public playLabelRate(parentNode: Node) {
    if (!this.isOddsIcon()) {
      return;
    }
    parentNode.addChild(this.props_label_rate_num);
    this.props_label_rate_num.setWorldPosition(this.node.worldPosition.clone().add(this.props_label_rate_num_origin_pos))
  }

  private showFaceAnimationNode(parentNode: Node) {
    const offset = new Vec3(this.iconConfig.distance[0], this.iconConfig.distance[1]);
    this.faceAnimationNode.active = true;
    parentNode.addChild(this.faceAnimationNode)
    this.faceAnimationNode.setWorldPosition(this.node.worldPosition.clone().add(offset));
  }

  public isLightningIcon() {
    return this.playLightning;
  }

  public setPlayLightning(playLightning) {
    this.playLightning = playLightning;
  }

  public isOddsIcon() {
    return this.iconConfig.id >= IconId.ODDS_ICON_GREEN && this.iconConfig.id <= IconId.ODDS_ICON_YELLOW;
  }

  public isScatterIcon() {
    return this.iconConfig.id === IconId.SCATTER;
  }

  public setWidth(width: number) {
    this.node.getComponent(UITransform).width = width;
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