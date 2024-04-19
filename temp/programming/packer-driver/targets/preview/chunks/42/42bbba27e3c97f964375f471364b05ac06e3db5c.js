System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UITransform, Vec3, instantiate, sp, Sprite, Label, Animation, sourceManageSeletor, thorv2_Audio, PrefabPathDefine, getNodeByNameDeep, IconId, config, SoundPathDefine, ThorV2Icon, _crd;

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfthorv2_Audio(extras) {
    _reporterNs.report("thorv2_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconId(extras) {
    _reporterNs.report("IconId", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  _export("ThorV2Icon", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      instantiate = _cc.instantiate;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      sourceManageSeletor = _unresolved_2.sourceManageSeletor;
      thorv2_Audio = _unresolved_2.thorv2_Audio;
    }, function (_unresolved_3) {
      PrefabPathDefine = _unresolved_3.PrefabPathDefine;
    }, function (_unresolved_4) {
      getNodeByNameDeep = _unresolved_4.getNodeByNameDeep;
    }, function (_unresolved_5) {
      IconId = _unresolved_5.IconId;
    }, function (_unresolved_6) {
      config = _unresolved_6.default;
    }, function (_unresolved_7) {
      SoundPathDefine = _unresolved_7.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "23f38e6Y1FAJ5bu0ulfT8j0", "ThorV2_Icon", undefined);

      __checkObsolete__(['Node', 'UITransform', 'Vec3', 'instantiate', 'sp', 'Sprite', 'Label', 'Mask', 'Graphics', 'Animation']);

      _export("ThorV2Icon", ThorV2Icon = class ThorV2Icon {
        constructor(iconConfig, isPoolObject) {
          if (isPoolObject === void 0) {
            isPoolObject = true;
          }

          this.node = void 0;
          this.faceNode = void 0;
          this.faceAnimationNode = void 0;
          this.iconConfig = void 0;
          this.skeleton = void 0;
          this.sprite = void 0;
          this.use = false;
          this.iconIndex = 0;
          this.props_skeleton_bomb = void 0;
          this.props_win_number = void 0;
          this.props_iconWrap = void 0;
          this.props_iconId = void 0;
          this.props_label_rate_num = void 0;
          this.props_label_rate_num_origin_pos = void 0;
          this.faceAnimationNodeOriginPos = void 0;
          this.borderNode = void 0;
          this.isPoolObject = true;
          this.callback = void 0;
          this.roundIndex = 0;

          /**是否播放闪电 */
          this.playLightning = false;
          this.iconConfig = iconConfig;
          this.isPoolObject = isPoolObject;
          this.node = instantiate((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).ICON).source);
          this.node.getComponent(UITransform).width = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.singleRollerWidth;
          this.node.getComponent(UITransform).height = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.singleRollerHeight;
          this.props_iconWrap = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("props_iconWrap", this.node);
          this.faceNode = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("iconNode_sprite", this.node);
          this.faceAnimationNode = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("iconNode_skeleton", this.node);
          this.faceAnimationNodeOriginPos = this.faceAnimationNode.position.clone();
          this.props_skeleton_bomb = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("props_skeleton_bomb", this.node).getComponent(sp.Skeleton);
          this.props_win_number = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("props_win_number", this.node);
          this.props_iconId = this.props_win_number.getChildByName("props_iconId");
          this.props_label_rate_num = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_rate_num", this.node);
          this.props_label_rate_num_origin_pos = this.props_label_rate_num.position.clone();

          if (this.isScatterIcon()) {
            this.faceNode.setPosition(new Vec3(this.iconConfig.distance[0], this.iconConfig.distance[1]));
          }

          this.sprite = this.faceNode.getComponent(Sprite);
          this.skeleton = this.faceAnimationNode.getComponent(sp.Skeleton); // this.skeleton.timeScale = 3;

          this.borderNode = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("props_focusBorder", this.node);
          this.borderNode.active = false;
          this.props_label_rate_num.active = false;
          this.listenerSkeletonEvent();
          this.listenerBombSkeletonEvent();
          this.listenerAmountEvent();
          this.buildIcon();
        }

        listenerSkeletonEvent() {
          this.skeleton.setCompleteListener(() => {
            if (this.node.isValid) {
              if (this.isOddsIcon() || this.isScatterIcon()) {
                this.resetFaceAnimationNodeOrOdds();
                this.callback && this.callback();
                this.callback = null;
              } else {
                this.hideWin();
                this.playBomb();
              }
            }
          });
        }

        listenerBombSkeletonEvent() {
          this.props_skeleton_bomb.setCompleteListener(() => {
            if (this.node.isValid) {
              this.restore();
              this.callback && this.callback();
              this.callback = null;
            }
          });
        }

        listenerAmountEvent() {
          this.props_iconId.getComponent(Animation).on(Animation.EventType.FINISHED, () => {
            this.props_win_number.active = false;
          });
        }
        /**获得图标 */


        resetIcon(iconConfig, parentNode, iconIndex) {
          this.use = true;
          this.iconConfig = iconConfig;
          this.iconIndex = iconIndex;
          parentNode && parentNode.addChild(this.node);
          this.faceAnimationNode.setScale(iconConfig.scale[0], iconConfig.scale[1]);
          this.faceNode.setScale(iconConfig.scale[0], iconConfig.scale[1]);
        }

        resetFaceAnimationNodeOrOdds() {
          if (this.isOddsIcon() || this.isScatterIcon()) {
            this.props_iconWrap.insertChild(this.faceAnimationNode, 0);
            var offset = new Vec3(this.iconConfig.distance[0], this.iconConfig.distance[1]);
            this.faceAnimationNode.setPosition(offset);
            this.props_iconWrap.addChild(this.props_label_rate_num);
            this.props_label_rate_num.setPosition(this.props_label_rate_num_origin_pos);
          }
        }

        getId() {
          return this.iconConfig.id;
        }
        /**归还到缓存池 */


        restore() {
          if (this.node && this.node.isValid) {
            this.playLightning = false;
            this.use = false;
            this.iconIndex = -1;
            this.node.active = true;
            this.node.removeFromParent();
            this.faceNode.active = true;
            this.skeleton.clearTracks();
            this.props_skeleton_bomb.node.active = false;
            this.props_skeleton_bomb.clearTracks();
            this.hideWin();
            !this.isPoolObject && this.destory();
          }
        }

        getNode() {
          return this.node;
        }

        getHeight() {
          return this.node.getComponent(UITransform).height;
        }

        getIconIndex() {
          return this.iconIndex;
        }

        setIconIndex(iconIndex) {
          this.iconIndex = iconIndex;
        }

        setPosition(value) {
          if (this.node) {
            this.node.setPosition(value);
            var offset = new Vec3(this.iconConfig.distance[0], this.iconConfig.distance[1]);
            this.faceAnimationNode.setWorldPosition(this.node.worldPosition.clone().add(offset));
            this.borderNode.setWorldPosition(this.node.worldPosition);
          }
        }

        getPosition() {
          return this.node.getPosition();
        }

        buildIcon() {
          this.faceAnimationNode.active = false; // this.faceAnimationNode.removeFromParent();

          var skeletonData = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile(this.iconConfig.skeletonName).source;
          this.skeleton.skeletonData = skeletonData;
          this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);
          this.sprite.spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile(this.iconConfig.fileName).source;
        }
        /**播放普通中奖 */


        playWin(parentNode, roundIndex, timeScale, isBorder, loop, callback) {
          if (roundIndex === void 0) {
            roundIndex = 0;
          }

          if (timeScale === void 0) {
            timeScale = 1;
          }

          if (isBorder === void 0) {
            isBorder = true;
          }

          if (loop === void 0) {
            loop = false;
          }

          if (callback === void 0) {
            callback = undefined;
          }

          this.callback = callback;
          this.roundIndex = roundIndex;
          this.showFaceAnimationNode(parentNode);

          if (isBorder && !this.borderNode.active) {
            this.borderNode.active = true;
            parentNode.addChild(this.borderNode);
            this.borderNode.setWorldPosition(this.node.worldPosition);
          }

          this.faceNode.active = false; // this.skeleton.paused = false;

          this.skeleton.timeScale = timeScale;
          this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], loop);
        }

        playBomb() {
          this.faceNode.active = false;
          this.props_skeleton_bomb.node.active = true;
          this.props_skeleton_bomb.setAnimation(0, 'animation', false);
          this.playWinSound();
        }

        playWinSound() {
          var soundStr = (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).WIN1;

          if (this.roundIndex === 0) {
            soundStr = (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).WIN1;
          } else if (this.roundIndex === 1) {
            soundStr = (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).WIN2;
          } else if (this.roundIndex === 2) {
            soundStr = (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).WIN3;
          } else if (this.roundIndex === 3) {
            soundStr = (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).WIN4;
          } else if (this.roundIndex === 4) {
            soundStr = (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).WIN5;
          } else if (this.roundIndex === 5) {
            soundStr = (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).WIN6;
          } else if (this.roundIndex === 6) {
            soundStr = (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).WIN7;
          } else if (this.roundIndex === 7) {
            soundStr = (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).WIN8;
          } else if (this.roundIndex === 8) {
            soundStr = (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).WIN9;
          } else if (this.roundIndex === 9) {
            soundStr = (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).WIN10;
          }

          (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
            error: Error()
          }), thorv2_Audio) : thorv2_Audio).playOneShot(soundStr);
        }
        /**隐藏普通中奖 */


        hideWin() {
          this.faceAnimationNode.active = false;
          this.borderNode.active = false;
          this.faceNode.active = true;
          this.skeleton.clearTracks();
          this.props_label_rate_num.active = false;
        }

        pauseWin() {
          this.borderNode.active = false;
        }
        /**是否使用 */


        isUse() {
          return this.use;
        }

        showBg() {
          this.node.getChildByName("bg").active = true;
        }

        hideBg() {
          this.node.getChildByName("bg").active = false;
        }
        /**播放数字 */


        playAmount(parentNode, amount) {
          // const str = amount > 10000 ? amount.formatAmountWithLetter() : amount + '';
          var str = amount.formatAmountWithCommas(); // this.props_win_number.removeFromParent();

          parentNode.addChild(this.props_win_number);
          this.props_win_number.setWorldPosition(this.node.worldPosition);
          this.props_win_number.active = true;
          this.props_win_number.setSiblingIndex(parentNode.children.length);
          this.props_iconId.getComponent(Label).string = str;
          this.props_iconId.getComponent(Animation).play(); // console.log(`playAmount ${str}, id ${this.iconConfig.id}, props_win_number: ${this.props_win_number.worldPosition}`);
        }

        setOddsIcon(value) {
          if (!this.isOddsIcon()) {
            return;
          }

          this.props_label_rate_num.active = true;
          this.props_label_rate_num.getComponent(Label).string = value;
        }
        /**获得倍率的label节点 */


        getOddsLabelNode() {
          return this.props_label_rate_num;
        }
        /**播放倍率的图标动画，准备进行飞倍率 */


        playOddsIcon(parentNode, done) {
          this.callback = done;
          this.showFaceAnimationNode(parentNode);
          this.skeleton.setAnimation(0, this.iconConfig.animationArr[1], false);
          this.playLabelRate(parentNode);
        }
        /**播放倍率label数字，提升上层节点 */


        playLabelRate(parentNode) {
          if (!this.isOddsIcon()) {
            return;
          }

          parentNode.addChild(this.props_label_rate_num);
          this.props_label_rate_num.setWorldPosition(this.node.worldPosition.clone().add(this.props_label_rate_num_origin_pos));
        }

        showFaceAnimationNode(parentNode) {
          var offset = new Vec3(this.iconConfig.distance[0], this.iconConfig.distance[1]);
          this.faceAnimationNode.active = true;
          parentNode.addChild(this.faceAnimationNode);
          this.faceAnimationNode.setWorldPosition(this.node.worldPosition.clone().add(offset));
        }

        isLightningIcon() {
          return this.playLightning;
        }

        setPlayLightning(playLightning) {
          this.playLightning = playLightning;
        }

        isOddsIcon() {
          return this.iconConfig.id >= (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).ODDS_ICON_GREEN && this.iconConfig.id <= (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).ODDS_ICON_RED;
        }

        isScatterIcon() {
          return this.iconConfig.id === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).SCATTER;
        }

        setWidth(width) {
          this.node.getComponent(UITransform).width = width;
        }

        destory() {
          this.node.isValid && this.node.destroy();
          this.faceAnimationNode.destroy();
          this.borderNode.destroy();
          this.node = null;
          this.iconConfig = null;
          this.skeleton = null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=42bbba27e3c97f964375f471364b05ac06e3db5c.js.map