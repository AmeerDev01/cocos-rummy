System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UITransform, Vec3, tween, createAnimationNode, createSpriteNode, getAnimation, getFileName, BackgroundScene, _crd, backgroundZOrder;

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateAnimationNode(extras) {
    _reporterNs.report("createAnimationNode", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateSpriteNode(extras) {
    _reporterNs.report("createSpriteNode", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetAnimation(extras) {
    _reporterNs.report("getAnimation", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetFileName(extras) {
    _reporterNs.report("getFileName", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMusicEffectPlayer(extras) {
    _reporterNs.report("MusicEffectPlayer", "./MusicEffectPlayer", _context.meta, extras);
  }

  _export("BackgroundScene", void 0);

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
      createSpriteNode = _unresolved_2.createSpriteNode;
      getAnimation = _unresolved_2.getAnimation;
      getFileName = _unresolved_2.getFileName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "37e46uiWARGnpvHmhSbsq5Y", "BackgroundScene", undefined);

      __checkObsolete__(['EventTouch', 'Node', 'Scene', 'Sprite', 'UITransform', 'Vec3', 'director', 'screen', 'tween', 'view']);

      /**
        背景
       */
      backgroundZOrder = 0;

      _export("BackgroundScene", BackgroundScene = class BackgroundScene {
        constructor(sceneParent, sourceManage, sceneSize, scaleRatio) {
          this.sourceManage = void 0;
          this.orgMusicID = void 0;
          this.uiRoot = void 0;

          /**缩放比例 */
          this.scaleRatio = 1;
          this.sceneParent = void 0;
          this.sourceManage = sourceManage;
          this.scaleRatio = scaleRatio;
          this.sceneParent = sceneParent;
        }

        convertToNodeSpaceAR(pos) {
          return this.uiRoot.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(pos.x, pos.y));
        }

        createView(view, parent, textureConfig) {
          for (const k in view) {
            const v = view[k];
            let config = textureConfig[v.src_id];

            if (config) {
              if (config.stype === 1) {
                //animation
                let spr = (_crd && createAnimationNode === void 0 ? (_reportPossibleCrUseOfcreateAnimationNode({
                  error: Error()
                }), createAnimationNode) : createAnimationNode)(this.sourceManage, parent, config, true, true); // spr.setPosition(this.convertToNodeSpaceAR(v.pos))

                spr.setWorldPosition(new Vec3(v.pos.x, v.pos.y));
                window.setTimeout(() => {
                  parent.isValid && (_crd && getAnimation === void 0 ? (_reportPossibleCrUseOfgetAnimation({
                    error: Error()
                  }), getAnimation) : getAnimation)(spr).play();
                }, 100);
              } else if (config.stype === 2) {
                //pic
                let spr = (_crd && createSpriteNode === void 0 ? (_reportPossibleCrUseOfcreateSpriteNode({
                  error: Error()
                }), createSpriteNode) : createSpriteNode)(this.sourceManage, parent, config.file); // spr.setPosition(this.convertToNodeSpaceAR(v.pos))

                spr.setWorldPosition(new Vec3(v.pos.x, v.pos.y));
              }
            }
          }
        }

        init(state, cutSeconds, scInfo, bgmConfig, textureConfig, sceneSize, musicEffectPlayer) {
          this.orgMusicID = scInfo.bk_mus_id;
          let musicSrc = bgmConfig[scInfo.bk_mus_id];

          if (musicSrc) {
            // AudioEngine.playMusic(musicSrc.file, true)
            musicEffectPlayer.playBgm(musicSrc.file);
          } // console.log(view.getResolutionPolicy());
          // console.log(view.getVisibleSize());
          // console.log(view.getDesignResolutionSize());
          // console.log(screen.windowSize);
          // console.log(screen.resolution);
          // console.log(screen.devicePixelRatio);


          let bkSrc = textureConfig[scInfo.bk_pic_id].file;
          this.uiRoot = (_crd && createSpriteNode === void 0 ? (_reportPossibleCrUseOfcreateSpriteNode({
            error: Error()
          }), createSpriteNode) : createSpriteNode)(this.sourceManage, this.sceneParent, (_crd && getFileName === void 0 ? (_reportPossibleCrUseOfgetFileName({
            error: Error()
          }), getFileName) : getFileName)(bkSrc));
          let picSize = this.uiRoot.getComponent(UITransform);
          picSize.setAnchorPoint(0, 0); // let pos = new Vec3(sceneSize.width + picSize.width / 2, sceneSize.height / 2)

          let pos = new Vec3(sceneSize.width, 0);

          if (state === 0) {
            // pos.x = sceneSize.width / 2
            // pos.y = sceneSize.height / 2
            pos.x = 0;
            pos.y = 0; // this.uiRoot.setWorldPosition(pos)
            // this.createView(scInfo.view_inf, this.uiRoot, textureConfig)
          }

          this.uiRoot.setWorldPosition(new Vec3(0, 0));
          pos = pos.multiplyScalar(this.scaleRatio);
          this.createView(scInfo.view_inf, this.uiRoot, textureConfig);
          this.uiRoot.setScale(new Vec3(this.scaleRatio, this.scaleRatio));
          this.uiRoot.setWorldPosition(pos);
          this.uiRoot.setSiblingIndex(this.uiRoot.parent.children.length);

          if (state === 1) {
            // tween(this.uiRoot).to(cutSeconds, { worldPosition: new Vec3(sceneSize.width / 2, sceneSize.height / 2).multiplyScalar(this.scaleRatio) }).start();
            tween(this.uiRoot).to(cutSeconds, {
              worldPosition: new Vec3(0, 0).multiplyScalar(this.scaleRatio)
            }).start();
          }
        }

        getBkMusicId() {
          return this.orgMusicID;
        }

        destroy() {
          this.uiRoot.destroy();
          this.sourceManage = null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=55e8dc63f66fead86284db948ea380ea5d1c6a4d.js.map