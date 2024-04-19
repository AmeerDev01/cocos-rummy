System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tween, Vec3, Shake, _crd, ccclass;

  _export("Shake", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "23d7ep0+odKEonEVFqejynO", "Shake", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'Tween', 'Vec3']);

      ({
        ccclass
      } = _decorator);
      /**
       * 摇动
       */

      _export("Shake", Shake = class Shake {
        constructor() {
          this._originalPos = new Vec3();
        }

        _shakeX(target, duration, offset) {
          return tween(target).to(duration / 7, {
            position: new Vec3(target.position).add3f(offset + 1, 0, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 7, {
            position: new Vec3(target.position).add3f(-offset * 2 - 2, 0, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 7, {
            position: new Vec3(target.position).add3f(offset * 3 + 3, 0, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 7, {
            position: new Vec3(target.position).add3f(-offset * 4 - 4, 0, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 7, {
            position: new Vec3(target.position).add3f(offset * 3 + 3, 0, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 7, {
            position: new Vec3(target.position).add3f(-offset * 2 - 2, 0, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 7, {
            position: new Vec3(target.position).add3f(offset + 1, 0, 0)
          }, {
            easing: "sineInOut"
          });
        }

        _shakeY(target, duration, offset) {
          return tween(target).to(duration / 7, {
            position: new Vec3(target.position).add3f(0, offset + 1, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 7, {
            position: new Vec3(target.position).add3f(0, -offset * 2 - 2, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 7, {
            position: new Vec3(target.position).add3f(0, offset * 3 + 3, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 7, {
            position: new Vec3(target.position).add3f(0, -offset * 4 - 4, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 7, {
            position: new Vec3(target.position).add3f(0, offset * 3 + 3, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 7, {
            position: new Vec3(target.position).add3f(0, -offset * 2 - 2, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 7, {
            position: new Vec3(target.position).add3f(0, offset + 1, 0)
          }, {
            easing: "sineInOut"
          });
        }

        _shakeXY(target, duration, offset) {
          return tween(target).to(duration / 14, {
            position: new Vec3(target.position).add3f(offset + 1, 0, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 14, {
            position: new Vec3(target.position).add3f(0, offset + 1, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 14, {
            position: new Vec3(target.position).add3f(0, -offset * 2 - 2, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 14, {
            position: new Vec3(target.position).add3f(-offset * 2 - 2, 0, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 14, {
            position: new Vec3(target.position).add3f(offset * 3 + 3, 0, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 14, {
            position: new Vec3(target.position).add3f(0, offset * 3 + 3, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 14, {
            position: new Vec3(target.position).add3f(0, -offset * 4 - 4, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 14, {
            position: new Vec3(target.position).add3f(-offset * 4 - 4, 0, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 14, {
            position: new Vec3(target.position).add3f(0, offset * 3 + 3, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 14, {
            position: new Vec3(target.position).add3f(offset * 3 + 3, 0, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 14, {
            position: new Vec3(target.position).add3f(0, -offset * 2 - 2, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 14, {
            position: new Vec3(target.position).add3f(-offset * 2 - 2, 0, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 14, {
            position: new Vec3(target.position).add3f(0, offset + 1, 0)
          }, {
            easing: "sineInOut"
          }).to(duration / 14, {
            position: new Vec3(target.position).add3f(offset + 1, 0, 0)
          }, {
            easing: "sineInOut"
          });
        }
        /*
        Shake the target.
        Pass "x" to shake to the left and right.
        Pass "y" to shake to the top and bottom.
        Pass "xy" to shake in all directions.
        */


        shake(target, duration, offset, repeat, direction, done) {
          if (duration === void 0) {
            duration = 0.5;
          }

          if (offset === void 0) {
            offset = 1;
          }

          if (repeat === void 0) {
            repeat = 1;
          }

          if (direction === void 0) {
            direction = "xy";
          }

          if (done === void 0) {
            done = null;
          }

          if (Shake.isShakeIn(target)) {
            return tween();
          }

          this._originalPos = target.getWorldPosition().clone();
          var tw;

          if (direction.toLowerCase() === "x") {
            tw = this._shakeX(target, duration, offset);
          } else if (direction.toLowerCase() === "y") {
            tw = this._shakeY(target, duration, offset);
          } else {
            tw = this._shakeXY(target, duration, offset);
          }

          tw.to(0, {
            worldPosition: this._originalPos
          });
          tw.union();

          if (repeat === -1) {
            tw.repeatForever();
          } else {
            tw.repeat(repeat);
          }

          tw.call(() => {
            // target.setWorldPosition(this._originalPos);
            Shake.remove(target);
            done && done();
          });
          return tw;
        }

        static isShakeIn(node) {
          var bool = Shake.currentShakeNodes.hasOwnProperty(node.uuid);

          if (bool) {
            return true;
          }

          Shake.currentShakeNodes[node.uuid] = true;
          return false;
        }

        static remove(node) {
          delete Shake.currentShakeNodes[node.uuid];
        }

        static create() {
          return new Shake();
        }

      });

      Shake.currentShakeNodes = {};

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9a3e5a3ba9529c668f001e975aa13a4fcbcb2733.js.map