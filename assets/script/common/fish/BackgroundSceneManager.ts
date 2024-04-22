import { Node, Sprite, UITransform, Vec3, tween } from "cc"
import SourceManage from "../../base/SourceManage"
import { createAnimationNode, getAnimation, setSpriteFrameBySpriteAtlas } from "./FishTool"
import { FishManager } from "./FishManager"
import { BackgroundScene } from "./BackgroundScene"
import { MusicEffectPlayer } from "./MusicEffectPlayer"

/**
  背景场景切换管理
 */
let seaWaveZOrder = 1000000



////////////////////////////////////////////////////////////////////
export class BackgroundSceneManager {
  // config
  private backgroundConfig = null
  private gameTextureConfig = null
  private backgroundMusConfig = null

  // val
  private sceneSize = null
  private sceneParent: Node = null
  private seaWaveObject: Node = null
  private seaWaveSize = null
  private backgroundCommon = null
  private currentScene: BackgroundScene = null
  private frontScene: BackgroundScene = null
  private cutSceneState = 0 //背景场景状态  0 无场景，1 场景切换完成，2 正在切换场景
  private cutSceneTime = 0
  private cutSceneTimeAdd = 0
  private currentSceneID = -1
  private frontSceneID = -1

  private sourceManage: SourceManage;
  private fishManager: FishManager;
  private musicEffectPlayer: MusicEffectPlayer;

  /**缩放比例 */
  private scaleRatio = 1;
  private lastChangeTime = 0;

  public init(parent, backgroundConfig, textureConfig, backgroundMusConfig, sceneSize, sourceManage: SourceManage,
    fishManager: FishManager, musicEffectPlayer: MusicEffectPlayer, scaleRatio: number) {
    this.sceneParent = parent
    this.backgroundConfig = backgroundConfig
    this.gameTextureConfig = textureConfig
    this.backgroundMusConfig = backgroundMusConfig

    this.backgroundCommon = this.backgroundConfig.common
    this.cutSceneTime = this.backgroundCommon.cut_t
    this.sceneSize = sceneSize
    this.sourceManage = sourceManage
    this.fishManager = fishManager
    this.musicEffectPlayer = musicEffectPlayer
    this.scaleRatio = scaleRatio;

    for (const k in this.backgroundConfig.data) {
      const v = this.backgroundConfig.data[k];
      if (v === null) continue;
      // textureCaheMgr.addImage(this.gameTextureConfig[v.bk_pic_id].file)
    }
  }

  public quitRoom() {
    this.cutSceneState = 0
  }

  public uninit() {
    if (this.backgroundConfig) {
      for (const k in this.backgroundConfig.data) {
        const v = this.backgroundConfig.data[k];
        if (v === null) continue;
        // textureCaheMgr.removeTextureForKey(this.gameTextureConfig[v.bk_pic_id].file)
      }
    }

    this.backgroundConfig = null
    this.gameTextureConfig = null
    this.backgroundMusConfig = null

    this.sceneSize = null
    this.sceneParent = null
    this.seaWaveObject = null
    this.seaWaveSize = null
    this.backgroundCommon = null
    this.currentScene = null
    this.frontScene = null
    this.cutSceneState = 0
    this.cutSceneTime = 0
    this.cutSceneTimeAdd = 0
    this.currentSceneID = -1
    this.frontSceneID = -1
  }

  public createSeawaveObj() {
    // this.seaWaveObject = g_CreateSprite(this.gameTextureConfig[this.backgroundCommon.wave_src_id])
    this.seaWaveObject = createAnimationNode(this.sourceManage, this.sceneParent, this.gameTextureConfig[this.backgroundCommon.wave_src_id], false, true)
    this.sceneParent.addChild(this.seaWaveObject)
    this.seaWaveObject.setWorldPosition(new Vec3(0, 0))
    this.seaWaveObject.active = false
    this.seaWaveObject.setSiblingIndex(seaWaveZOrder)
    this.seaWaveSize = this.seaWaveObject.getComponent(UITransform);

    this.seaWaveObject.setScale(new Vec3(this.scaleRatio, this.scaleRatio))
  }

  public cutBackgroundScene(id) {
    const currentTime = Date.now();
    // 如果切换场景的事件小于5秒，就不切换
    if (currentTime - this.lastChangeTime <= 5 * 1000) {
      return;
    }
    this.lastChangeTime = currentTime;
    this.fishManager.clearFishCacheData()

    if (this.currentScene) {
      this.frontScene = this.currentScene
      this.currentScene = null
    }

    let sceneInfo = this.backgroundConfig.data[id]
    if (sceneInfo) {
      this.currentScene = new BackgroundScene(this.sceneParent, this.sourceManage, this.sceneSize, this.scaleRatio);
      this.currentScene.init(this.cutSceneState, this.backgroundCommon.cut_t, sceneInfo,
        this.backgroundMusConfig, this.gameTextureConfig, this.sceneSize, this.musicEffectPlayer)

      this.frontSceneID = this.currentSceneID
      this.currentSceneID = id

      let pos = new Vec3(this.sceneSize.width + this.seaWaveSize.width / 4, this.sceneSize.height / 2)
      this.seaWaveObject.setWorldPosition(pos.multiplyScalar(this.scaleRatio))
      this.seaWaveObject.setSiblingIndex(this.sceneParent.children.length);
      if (this.cutSceneState === 0) {
        this.seaWaveObject.active = false
      } else {
        this.seaWaveObject.active = true
      }

      if (this.cutSceneState === 1) {
        this.musicEffectPlayer.play(this.backgroundCommon.mus_id)
        getAnimation(this.seaWaveObject).play();
        let need_t = this.backgroundCommon.cut_t * ((this.sceneSize.width + 2.8 * this.seaWaveSize.width / 4) / this.sceneSize.width)
        this.cutSceneTime = need_t
        tween(this.seaWaveObject)
          .to(need_t, { worldPosition: new Vec3(-this.seaWaveSize.width / 2, this.sceneSize.height / 2, 0).multiplyScalar(this.scaleRatio) })
          .call(() => {
            // this.seaWaveObject.active = false
          }).start()

        this.cutSceneState = 2
        this.cutSceneTimeAdd = 0
        // currentScene.zIndex = (seaWaveZOrder - 100)
      } else {
        this.cutSceneState = 1
        this.cutSceneTimeAdd = 0
        this.fishManager.clearAllFish()
        console.log("cut background scene complete, currentSceneID ========== " + this.currentSceneID)
      }
    } else {
      this.cutSceneState = 0
      this.cutSceneTimeAdd = 0
      this.currentSceneID = -1
      this.frontSceneID = -1
      console.log("cut background scene failed, scene is !exist.")
    }
  }

  public getSceneState() {
    return this.cutSceneState
  }

  public forceChangeBkMus(id) {
    let musSrc = this.backgroundMusConfig && this.backgroundMusConfig[id]
    if (musSrc) {
      // AudioEngine.playMusic(musSrc.file, true)
      this.musicEffectPlayer.playBgm(musSrc.file);
    }
  }

  public resumeBkMus() {
    let musSrc = this.backgroundMusConfig && this.backgroundMusConfig[this.currentScene.getBkMusicId()]
    if (this.currentScene && musSrc) {
      // AudioEngine.playMusic(musSrc.file, true)
      this.musicEffectPlayer.playBgm(musSrc.file);
    }
  }

  public update(dt) {
    if (this.cutSceneState === 2) {
      if (this.cutSceneTimeAdd >= this.cutSceneTime) {
        this.cutSceneState = 1
        this.cutSceneTimeAdd = 0
        this.seaWaveObject.active = (false)
        getAnimation(this.seaWaveObject).stop();
        this.currentScene.uiRoot.setSiblingIndex(0)

        if (this.frontScene) {
          this.frontScene.destroy()

          this.frontScene = null
          this.cutSceneState = 1
          this.cutSceneTimeAdd = 0

          this.fishManager.clearAllFish()

          console.log("cut background scene complete, currentSceneID ========== " + this.currentSceneID)
        }
      } else {
        this.cutSceneTimeAdd = this.cutSceneTimeAdd + dt
      }
    }
  }

  public getCurrentBkSenceObj() {
    return this.currentScene
  }

  public getCurrentSceneId() {
    return this.currentSceneID
  }

  public getFrontSceneId() {
    return this.frontSceneID
  }
}

