import { EventTouch, Node, Scene, Sprite, UITransform, Vec3, director, screen, tween, view } from "cc";
import SourceManage from "../../base/SourceManage";
import { createAnimationNode, createSpriteNode, getAnimation, getFileName, getSpriteAtlasBySpriteFrame, getSpriteFrame } from "./FishTool";
import { MusicEffectPlayer } from "./MusicEffectPlayer";

/**
  背景
 */
const backgroundZOrder = 0

export class BackgroundScene {
  private sourceManage: SourceManage;
  private orgMusicID: number;
  public uiRoot: Node;
  /**缩放比例 */
  private scaleRatio = 1;
  private sceneParent: Node;


  constructor(sceneParent: Node, sourceManage: SourceManage, sceneSize, scaleRatio: number) {
    this.sourceManage = sourceManage;
    this.scaleRatio = scaleRatio;
    this.sceneParent = sceneParent;
  }

  private convertToNodeSpaceAR(pos) {
    return this.uiRoot.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(pos.x, pos.y))
  }

  public createView(view, parent: Node, textureConfig) {
    for (const k in view) {
      const v = view[k];
      let config = textureConfig[v.src_id]
      if (config) {
        if (config.stype === 1) { //animation
          let spr = createAnimationNode(this.sourceManage, parent, config, true, true);
          // spr.setPosition(this.convertToNodeSpaceAR(v.pos))
          spr.setWorldPosition(new Vec3(v.pos.x, v.pos.y))
          window.setTimeout(() => {
            parent.isValid && getAnimation(spr).play();
          }, 100)
        } else if (config.stype === 2) { //pic
          let spr = createSpriteNode(this.sourceManage, parent, config.file);
          // spr.setPosition(this.convertToNodeSpaceAR(v.pos))
          spr.setWorldPosition(new Vec3(v.pos.x, v.pos.y))
        }
      }
    }
  }

  public init(state, cutSeconds, scInfo, bgmConfig, textureConfig, sceneSize, musicEffectPlayer: MusicEffectPlayer) {
    this.orgMusicID = scInfo.bk_mus_id

    let musicSrc = bgmConfig[scInfo.bk_mus_id]
    if (musicSrc) {
      // AudioEngine.playMusic(musicSrc.file, true)
      musicEffectPlayer.playBgm(musicSrc.file);
    }

    // console.log(view.getResolutionPolicy());
    // console.log(view.getVisibleSize());
    // console.log(view.getDesignResolutionSize());
    // console.log(screen.windowSize);
    // console.log(screen.resolution);
    // console.log(screen.devicePixelRatio);

    let bkSrc = textureConfig[scInfo.bk_pic_id].file
    this.uiRoot = createSpriteNode(this.sourceManage, this.sceneParent, getFileName(bkSrc))
    let picSize = this.uiRoot.getComponent(UITransform)
    picSize.setAnchorPoint(0, 0)
    // let pos = new Vec3(sceneSize.width + picSize.width / 2, sceneSize.height / 2)
    let pos = new Vec3(sceneSize.width, 0)

    if (state === 0) {
      // pos.x = sceneSize.width / 2
      // pos.y = sceneSize.height / 2
      pos.x = 0;
      pos.y = 0;
      // this.uiRoot.setWorldPosition(pos)
      // this.createView(scInfo.view_inf, this.uiRoot, textureConfig)
    }
    this.uiRoot.setWorldPosition(new Vec3(0, 0))
    pos = pos.multiplyScalar(this.scaleRatio)
    this.createView(scInfo.view_inf, this.uiRoot, textureConfig)

    this.uiRoot.setScale(new Vec3(this.scaleRatio, this.scaleRatio))
    this.uiRoot.setWorldPosition(pos)

    this.uiRoot.setSiblingIndex(this.uiRoot.parent.children.length)

    if (state === 1) {
      // tween(this.uiRoot).to(cutSeconds, { worldPosition: new Vec3(sceneSize.width / 2, sceneSize.height / 2).multiplyScalar(this.scaleRatio) }).start();
      tween(this.uiRoot).to(cutSeconds, { worldPosition: new Vec3(0, 0).multiplyScalar(this.scaleRatio) }).start();
    }
  }

  public getBkMusicId() {
    return this.orgMusicID
  }

  public destroy() {
    this.uiRoot.destroy();
    this.sourceManage = null;
  }
}