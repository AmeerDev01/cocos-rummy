System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UIOpacity, Vec3, tween, _crd, EffectType, getEffectByType, effect1, effect2, effectFade;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ddf30mMoqdEkbE/TKV3DhbY", "NodeIOEffect", undefined);

      __checkObsolete__(['Node', 'UIOpacity', 'Vec3', 'tween']);

      _export("EffectType", EffectType = /*#__PURE__*/function (EffectType) {
        EffectType[EffectType["EFFECT1"] = 0] = "EFFECT1";
        EffectType[EffectType["EFFECT2"] = 1] = "EFFECT2";
        EffectType[EffectType["EFFECT_FADE"] = 2] = "EFFECT_FADE";
        return EffectType;
      }({}));

      _export("getEffectByType", getEffectByType = effectType => {
        switch (effectType) {
          case EffectType.EFFECT1:
            return effect1;

          case EffectType.EFFECT2:
            return effect2;

          case EffectType.EFFECT_FADE:
            return effectFade;
        }
      });
      /**缩放0.9，并渐变 */


      _export("effect1", effect1 = target => {
        return {
          enter: option => {
            return new Promise(resolve => {
              var _option = Object.assign({
                tweenDuration: 0.3,
                scaleOrigin: {
                  x: 1,
                  y: 1
                }
              }, option || {});

              try {
                var opacityUI = target.getComponent(UIOpacity);
                !target.getComponent(UIOpacity) && (opacityUI = target.addComponent(UIOpacity));
                opacityUI.opacity = 0;
                target.setScale(_option.scaleOrigin.x * 0.9, _option.scaleOrigin.y * 0.9);
                tween(opacityUI).to(_option.tweenDuration, {
                  opacity: 255
                }).start();
                tween(target).to(_option.tweenDuration, {
                  scale: new Vec3(_option.scaleOrigin.x * 1, _option.scaleOrigin.x * 1, 1)
                }, {
                  easing: "backOut" //"elasticOut"

                }).call(() => {
                  resolve(target);
                }).start();
              } catch (e) {
                resolve(target);
              }
            });
          },
          out: function out(isDestroy, tweenDuration) {
            if (isDestroy === void 0) {
              isDestroy = true;
            }

            if (tweenDuration === void 0) {
              tweenDuration = 0.2;
            }

            return new Promise(resolve => {
              try {
                var opacityUI = target.getComponent(UIOpacity);
                !target.getComponent(UIOpacity) && (opacityUI = target.addComponent(UIOpacity));
                tween(opacityUI).to(tweenDuration, {
                  opacity: 0
                }).start();
                tween(target).to(tweenDuration, {
                  scale: new Vec3(0.9, 0.9, 1)
                }).call(() => {
                  isDestroy && target.destroy();
                  resolve(target);
                }).start();
              } catch (e) {
                resolve(target);
              }
            });
          }
        };
      });
      /**放大0.9，并渐变 */


      _export("effect2", effect2 = target => {
        return {
          enter: option => {
            return new Promise(resolve => {
              var _option = Object.assign({
                tweenDuration: 0.2,
                scaleOrigin: {
                  x: 1,
                  y: 1
                }
              }, option || {});

              try {
                var opacityUI = target.getComponent(UIOpacity);
                !target.getComponent(UIOpacity) && (opacityUI = target.addComponent(UIOpacity));
                opacityUI.opacity = 0;
                target.setScale(_option.scaleOrigin.x * 1.1, _option.scaleOrigin.y * 1.1);
                tween(opacityUI).to(_option.tweenDuration, {
                  opacity: 255
                }).start();
                tween(target).to(_option.tweenDuration, {
                  scale: new Vec3(_option.scaleOrigin.x * 1, _option.scaleOrigin.y * 1, 1)
                }).call(() => {
                  resolve(target);
                }).start();
              } catch (e) {
                resolve(target);
              }
            });
          },
          out: function out(isDestroy, tweenDuration) {
            if (isDestroy === void 0) {
              isDestroy = true;
            }

            if (tweenDuration === void 0) {
              tweenDuration = 0.2;
            }

            return new Promise(resolve => {
              try {
                var opacityUI = target.getComponent(UIOpacity);
                !target.getComponent(UIOpacity) && (opacityUI = target.addComponent(UIOpacity));
                tween(opacityUI).to(tweenDuration, {
                  opacity: 0
                }).start();
                tween(target).to(tweenDuration, {
                  scale: new Vec3(1.1, 1.1, 1)
                }).call(() => {
                  isDestroy && target.destroy();
                  resolve(target);
                }).start();
              } catch (e) {
                resolve(target);
              }
            });
          }
        };
      });

      _export("effectFade", effectFade = target => {
        return {
          enter: option => {
            return new Promise(resolve => {
              try {
                var _option = Object.assign({
                  tweenDuration: 0.3
                }, option || {});

                var opacityUI = target.getComponent(UIOpacity);
                !target.getComponent(UIOpacity) && (opacityUI = target.addComponent(UIOpacity));
                opacityUI.opacity = 0;
                tween(opacityUI).to(_option.tweenDuration, {
                  opacity: 255
                }).call(() => {
                  resolve(target);
                }).start();
              } catch (e) {
                resolve(target);
              }
            });
          },
          out: function out(isDestroy, tweenDuration) {
            if (isDestroy === void 0) {
              isDestroy = true;
            }

            if (tweenDuration === void 0) {
              tweenDuration = 0.3;
            }

            return new Promise(resolve => {
              try {
                var opacityUI = target.getComponent(UIOpacity);
                !target.getComponent(UIOpacity) && (opacityUI = target.addComponent(UIOpacity));
                tween(opacityUI).to(tweenDuration, {
                  opacity: 0
                }).call(() => {
                  isDestroy && target.destroy();
                  resolve(target);
                }).start();
              } catch (e) {
                resolve(target);
              }
            });
          }
        };
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ef494213ffe911246531c80c4ac3b6f87a2bd2bb.js.map