System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UITransform, Vec3, tween, createAnimationNode, getAnimation, BackgroundScene, BackgroundSceneManager, _crd, seaWaveZOrder;

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateAnimationNode(extras) {
    _reporterNs.report("createAnimationNode", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetAnimation(extras) {
    _reporterNs.report("getAnimation", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishManager(extras) {
    _reporterNs.report("FishManager", "./FishManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBackgroundScene(extras) {
    _reporterNs.report("BackgroundScene", "./BackgroundScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMusicEffectPlayer(extras) {
    _reporterNs.report("MusicEffectPlayer", "./MusicEffectPlayer", _context.meta, extras);
  }

  _export("BackgroundSceneManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      createAnimationNode = _unresolved_2.createAnimationNode;
      getAnimation = _unresolved_2.getAnimation;
    }, function (_unresolved_3) {
      BackgroundScene = _unresolved_3.BackgroundScene;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "18df7lfrcFHBbDuTIiUN7H/", "BackgroundSceneManager", undefined);

      __checkObsolete__(['Node', 'Sprite', 'UITransform', 'Vec3', 'tween']);

      /**
        背景场景切换管理
       */
      seaWaveZOrder = 1000000; ////////////////////////////////////////////////////////////////////

      _export("BackgroundSceneManager", BackgroundSceneManager = class BackgroundSceneManager {
        constructor() {
          // config
          this.backgroundConfig = null;
          this.gameTextureConfig = null;
          this.backgroundMusConfig = null;
          // val
          this.sceneSize = null;
          this.sceneParent = null;
          this.seaWaveObject = null;
          this.seaWaveSize = null;
          this.backgroundCommon = null;
          this.currentScene = null;
          this.frontScene = null;
          this.cutSceneState = 0;
          //背景场景状态  0 无场景，1 场景切换完成，2 正在切换场景
          this.cutSceneTime = 0;
          this.cutSceneTimeAdd = 0;
          this.currentSceneID = -1;
          this.frontSceneID = -1;
          this.sourceManage = void 0;
          this.fishManager = void 0;
          this.musicEffectPlayer = void 0;

          /**缩放比例 */
          this.scaleRatio = 1;
          this.lastChangeTime = 0;
        }

        init(parent, backgroundConfig, textureConfig, backgroundMusConfig, sceneSize, sourceManage, fishManager, musicEffectPlayer, scaleRatio) {
          this.sceneParent = parent;
          this.backgroundConfig = backgroundConfig;
          this.gameTextureConfig = textureConfig;
          this.backgroundMusConfig = backgroundMusConfig;
          this.backgroundCommon = this.backgroundConfig.common;
          this.cutSceneTime = this.backgroundCommon.cut_t;
          this.sceneSize = sceneSize;
          this.sourceManage = sourceManage;
          this.fishManager = fishManager;
          this.musicEffectPlayer = musicEffectPlayer;
          this.scaleRatio = scaleRatio;

          for (var k in this.backgroundConfig.data) {
            var v = this.backgroundConfig.data[k];
            if (v === null) continue; // textureCaheMgr.addImage(this.gameTextureConfig[v.bk_pic_id].file)
          }
        }

        quitRoom() {
          this.cutSceneState = 0;
        }

        uninit() {
          if (this.backgroundConfig) {
            for (var k in this.backgroundConfig.data) {
              var v = this.backgroundConfig.data[k];
              if (v === null) continue; // textureCaheMgr.removeTextureForKey(this.gameTextureConfig[v.bk_pic_id].file)
            }
          }

          this.backgroundConfig = null;
          this.gameTextureConfig = null;
          this.backgroundMusConfig = null;
          this.sceneSize = null;
          this.sceneParent = null;
          this.seaWaveObject = null;
          this.seaWaveSize = null;
          this.backgroundCommon = null;
          this.currentScene = null;
          this.frontScene = null;
          this.cutSceneState = 0;
          this.cutSceneTime = 0;
          this.cutSceneTimeAdd = 0;
          this.currentSceneID = -1;
          this.frontSceneID = -1;
        }

        createSeawaveObj() {
          // this.seaWaveObject = g_CreateSprite(this.gameTextureConfig[this.backgroundCommon.wave_src_id])
          this.seaWaveObject = (_crd && createAnimationNode === void 0 ? (_reportPossibleCrUseOfcreateAnimationNode({
            error: Error()
          }), createAnimationNode) : createAnimationNode)(this.sourceManage, this.sceneParent, this.gameTextureConfig[this.backgroundCommon.wave_src_id], false, true);
          this.sceneParent.addChild(this.seaWaveObject);
          this.seaWaveObject.setWorldPosition(new Vec3(0, 0));
          this.seaWaveObject.active = false;
          this.seaWaveObject.setSiblingIndex(seaWaveZOrder);
          this.seaWaveSize = this.seaWaveObject.getComponent(UITransform);
          this.seaWaveObject.setScale(new Vec3(this.scaleRatio, this.scaleRatio));
        }

        cutBackgroundScene(id) {
          var currentTime = Date.now(); // 如果切换场景的事件小于5秒，就不切换

          if (currentTime - this.lastChangeTime <= 5 * 1000) {
            return;
          }

          this.lastChangeTime = currentTime;
          this.fishManager.clearFishCacheData();

          if (this.currentScene) {
            this.frontScene = this.currentScene;
            this.currentScene = null;
          }

          var sceneInfo = this.backgroundConfig.data[id];

          if (sceneInfo) {
            this.currentScene = new (_crd && BackgroundScene === void 0 ? (_reportPossibleCrUseOfBackgroundScene({
              error: Error()
            }), BackgroundScene) : BackgroundScene)(this.sceneParent, this.sourceManage, this.sceneSize, this.scaleRatio);
            this.currentScene.init(this.cutSceneState, this.backgroundCommon.cut_t, sceneInfo, this.backgroundMusConfig, this.gameTextureConfig, this.sceneSize, this.musicEffectPlayer);
            this.frontSceneID = this.currentSceneID;
            this.currentSceneID = id;
            var pos = new Vec3(this.sceneSize.width + this.seaWaveSize.width / 4, this.sceneSize.height / 2);
            this.seaWaveObject.setWorldPosition(pos.multiplyScalar(this.scaleRatio));
            this.seaWaveObject.setSiblingIndex(this.sceneParent.children.length);

            if (this.cutSceneState === 0) {
              this.seaWaveObject.active = false;
            } else {
              this.seaWaveObject.active = true;
            }

            if (this.cutSceneState === 1) {
              this.musicEffectPlayer.play(this.backgroundCommon.mus_id);
              (_crd && getAnimation === void 0 ? (_reportPossibleCrUseOfgetAnimation({
                error: Error()
              }), getAnimation) : getAnimation)(this.seaWaveObject).play();
              var need_t = this.backgroundCommon.cut_t * ((this.sceneSize.width + 2.8 * this.seaWaveSize.width / 4) / this.sceneSize.width);
              this.cutSceneTime = need_t;
              tween(this.seaWaveObject).to(need_t, {
                worldPosition: new Vec3(-this.seaWaveSize.width / 2, this.sceneSize.height / 2, 0).multiplyScalar(this.scaleRatio)
              }).call(() => {// this.seaWaveObject.active = false
              }).start();
              this.cutSceneState = 2;
              this.cutSceneTimeAdd = 0; // currentScene.zIndex = (seaWaveZOrder - 100)
            } else {
              this.cutSceneState = 1;
              this.cutSceneTimeAdd = 0;
              this.fishManager.clearAllFish();
              console.log("cut background scene complete, currentSceneID ========== " + this.currentSceneID);
            }
          } else {
            this.cutSceneState = 0;
            this.cutSceneTimeAdd = 0;
            this.currentSceneID = -1;
            this.frontSceneID = -1;
            console.log("cut background scene failed, scene is !exist.");
          }
        }

        getSceneState() {
          return this.cutSceneState;
        }

        forceChangeBkMus(id) {
          var musSrc = this.backgroundMusConfig && this.backgroundMusConfig[id];

          if (musSrc) {
            // AudioEngine.playMusic(musSrc.file, true)
            this.musicEffectPlayer.playBgm(musSrc.file);
          }
        }

        resumeBkMus() {
          var musSrc = this.backgroundMusConfig && this.backgroundMusConfig[this.currentScene.getBkMusicId()];

          if (this.currentScene && musSrc) {
            // AudioEngine.playMusic(musSrc.file, true)
            this.musicEffectPlayer.playBgm(musSrc.file);
          }
        }

        update(dt) {
          if (this.cutSceneState === 2) {
            if (this.cutSceneTimeAdd >= this.cutSceneTime) {
              this.cutSceneState = 1;
              this.cutSceneTimeAdd = 0;
              this.seaWaveObject.active = false;
              (_crd && getAnimation === void 0 ? (_reportPossibleCrUseOfgetAnimation({
                error: Error()
              }), getAnimation) : getAnimation)(this.seaWaveObject).stop();
              this.currentScene.uiRoot.setSiblingIndex(0);

              if (this.frontScene) {
                this.frontScene.destroy();
                this.frontScene = null;
                this.cutSceneState = 1;
                this.cutSceneTimeAdd = 0;
                this.fishManager.clearAllFish();
                console.log("cut background scene complete, currentSceneID ========== " + this.currentSceneID);
              }
            } else {
              this.cutSceneTimeAdd = this.cutSceneTimeAdd + dt;
            }
          }
        }

        getCurrentBkSenceObj() {
          return this.currentScene;
        }

        getCurrentSceneId() {
          return this.currentSceneID;
        }

        getFrontSceneId() {
          return this.frontSceneID;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=93aa4fb29b8c3d442b9b7c6ccdd3ba4c3931fdbe.js.map