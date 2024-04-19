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

      _cclegacy._RF.push({}, "2109caDYxBNXbBZbmiEGGur", "SkeletonPlay", undefined);

      __checkObsolete__(['_decorator', 'Component', 'CCInteger', 'SpriteFrame', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);
      /* Skeleton播放类 new SkeletonAnimationPlayer(sp.Skeleton, 动画string, 循环true,是否需要回调()=>{}).playAnimation();*/

      _export("default", SkeletonAnimationPlayer = ccclass(_class = class SkeletonAnimationPlayer {
        constructor(skeleton, animationName, loop, onAnimationComplete) {
          if (loop === void 0) {
            loop = false;
          }

          this.skeleton = null;
          this.animationName = "";
          this.loop = false;
          this.onAnimationComplete = null;
          this.skeleton = skeleton;
          this.animationName = animationName;
          this.loop = loop;
          this.onAnimationComplete = onAnimationComplete || null; // 使用默认值为 null
        }
        /* 播放 */


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
        /* 暂停 */


        stopAnimation() {
          if (this.skeleton) {
            this.skeleton.clearTracks();
          }
        }
        /*切换到不同的动画 */


        changeAnimation(animationName, isLoop, onAnimationComplete) {
          if (isLoop === void 0) {
            isLoop = false;
          }

          if (onAnimationComplete === void 0) {
            onAnimationComplete = null;
          }

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
//# sourceMappingURL=72a620ad0ee984c33d978d45a4384836237f7753.js.map