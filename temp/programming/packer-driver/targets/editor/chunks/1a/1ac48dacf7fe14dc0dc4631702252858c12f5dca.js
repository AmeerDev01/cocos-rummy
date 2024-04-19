System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _class, _crd, ccclass, property, SkeletonAnimationPlayer;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "af530u55tZM6am6Gs0+JvpF", "SkeletonPlay", undefined);

      __checkObsolete__(['_decorator', 'Component', 'CCInteger', 'SpriteFrame', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", SkeletonAnimationPlayer = ccclass(_class = class SkeletonAnimationPlayer {
        constructor(skeleton, animationName, loop = false, onAnimationComplete) {
          this.skeleton = null;
          this.animationName = "";
          this.loop = false;
          this.onAnimationComplete = null;
          this.skeleton = skeleton;
          this.animationName = animationName;
          this.loop = loop;
          this.onAnimationComplete = onAnimationComplete || null; // 使用默认值为 null
        }

        playAnimation() {
          if (this.skeleton && this.animationName) {
            // 监听动画播放完成事件
            this.skeleton && this.skeleton.setCompleteListener(trackEntry => {
              if (trackEntry.animation.name === this.animationName && this.onAnimationComplete) {
                this.onAnimationComplete();
              }
            }); // 设置循环

            this.skeleton.setAnimation(0, this.animationName, this.loop);
          } else {
            console.error("Skeleton or animation name not assigned.");
          }
        }

        stopAnimation() {
          if (this.skeleton) {
            this.skeleton.clearTracks();
          }
        } // 切换到不同的动画


        changeAnimation(animationName, isLoop = false, onAnimationComplete = null) {
          this.animationName = animationName;
          this.loop = isLoop;
          this.onAnimationComplete = onAnimationComplete;
          this.playAnimation();
        }

      }) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1ac48dacf7fe14dc0dc4631702252858c12f5dca.js.map