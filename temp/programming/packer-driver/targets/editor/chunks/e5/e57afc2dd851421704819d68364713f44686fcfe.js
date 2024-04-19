System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, Tween, Vec3, _dec, _class, _crd, ccclass, MW_Shake;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      tween = _cc.tween;
      Tween = _cc.Tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3a89dHDLYlF+YdlWy+3URaM", "MW_Shake", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'Tween', 'Vec3']);

      ({
        ccclass
      } = _decorator);

      _export("MW_Shake", MW_Shake = (_dec = ccclass('MW_Shake'), _dec(_class = class MW_Shake extends Component {
        constructor(...args) {
          super(...args);
          this._originalPos = new Vec3();
          this._shakeXTween = new Tween();
          this._shakeYTween = new Tween();
          this._shakeXYTween = new Tween();
        }

        start() {}

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


        shake(target, duration = 0.5, offset = 1, repeat = 1, direction = "x") {
          this._originalPos = target.getPosition().clone();
          let tw;

          if (direction.toLowerCase() === "x") {
            tw = this._shakeX(target, duration, offset);
          } else if (direction.toLowerCase() === "y") {
            tw = this._shakeY(target, duration, offset);
          } else {
            tw = this._shakeXY(target, duration, offset);
          }

          tw.to(0, {
            position: this._originalPos
          });
          tw.union();

          if (repeat === -1) {
            tw.repeatForever();
          } else {
            tw.repeat(repeat);
          }

          tw.start();
        }

        stopShaking() {
          this._shakeXTween.stop();

          this._shakeYTween.stop();

          this.node.setPosition(this._originalPos);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e57afc2dd851421704819d68364713f44686fcfe.js.map