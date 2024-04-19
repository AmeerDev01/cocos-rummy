System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, tween, Label, sp, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, PlayChouJiang, getRootPosition;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function removeComma(str) {
    var newStr = str.replace(/,/g, "");
    return newStr;
  }

  _export("removeComma", removeComma);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      Label = _cc.Label;
      sp = _cc.sp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca2ceE/RZNAsLTIWV68ygpE", "wheel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'tween', 'Sprite', 'SpriteFrame', 'UITransform', 'Label', 'math', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayChouJiang", PlayChouJiang = (_dec = ccclass("wheel"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec(_class = (_class2 = class PlayChouJiang extends Component {
        constructor() {
          super(...arguments);

          /**转盘节点 */
          _initializerDefineProperty(this, "wheelNode", _descriptor, this);

          /**中奖框 */
          _initializerDefineProperty(this, "jackPot", _descriptor2, this);

          _initializerDefineProperty(this, "closeJack", _descriptor3, this);

          _initializerDefineProperty(this, "gold_num", _descriptor4, this);

          /**中奖提示语 */
          _initializerDefineProperty(this, "tipLabel", _descriptor5, this);

          _initializerDefineProperty(this, "strawberry", _descriptor6, this);

          _initializerDefineProperty(this, "banana", _descriptor7, this);

          _initializerDefineProperty(this, "apple", _descriptor8, this);

          _initializerDefineProperty(this, "grape", _descriptor9, this);

          _initializerDefineProperty(this, "watermelon", _descriptor10, this);

          _initializerDefineProperty(this, "wild", _descriptor11, this);

          /**模块数 */
          this.itemNum = 6;

          /**转盘是否在转动 */
          this.isSpinning = false;

          /**正则 laji*/
          this.getUrlParams = name => {
            var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
            var r = window.location.search.substring(1).match(reg);

            if (r != null) {
              return unescape(r[2]);
            }

            return null;
          };
        }

        /**获取随机角度值 */
        getRandom(e, t) {
          return Math.floor(Math.random() * (t - e)) + e;
        }
        /**开始游戏 */


        playGame() {
          var that = this;

          if (that.isSpinning) {
            return;
          }

          that.wheelNode.angle = 30;
          that.isSpinning = true;
          var target = that.getRandom(0, 360); // console.log('target:' + target)

          tween(that.wheelNode).by(2, {
            angle: -2160
          }, {
            easing: 'quartIn'
          }).by(3, {
            angle: -(target + 1080)
          }, {
            easing: 'quartOut'
          }).call(() => {
            that.getJackPot(target);
          }).start();
        }

        closeJackPot() {
          var that = this;
          that.jackPot.active = false;
        }

        /**中奖提示语内容切换 控制弹框显隐 */
        getJackPot(target) {
          var that = this;
          var num = Math.floor(target / (360 / that.itemNum)); // console.log("num",num);

          var SkeletonNode = null;
          var isWild = false;

          switch (num) {
            case 0:
              that.tipLabel.string = '1,000 ';
              SkeletonNode = that.wild;
              isWild = true;
              break;

            case 1:
              that.tipLabel.string = '500';
              SkeletonNode = that.strawberry;
              break;

            case 2:
              that.tipLabel.string = '300';
              SkeletonNode = that.banana;
              break;

            case 3:
              that.tipLabel.string = '200';
              SkeletonNode = that.apple;
              break;

            case 4:
              that.tipLabel.string = '100';
              SkeletonNode = that.grape;
              break;

            case 5:
              that.tipLabel.string = '50'; //Congratulations on winning 50 points  Selamat telah memenangkan 50 poin

              SkeletonNode = that.watermelon;
              break;
          }

          if (isWild) {
            that.wild.getComponent(sp.Skeleton).animation = "animation";
          } else {
            SkeletonNode.getComponent(sp.Skeleton).animation = "animation2";
          }

          tween(that.jackPot).delay(2).call(() => {
            that.jackPot.active = true;
          }).start();
          var gold = removeComma(that.gold_num.string);
          var TipNum = removeComma(that.tipLabel.string);
          that.gold_num.string = (Number(gold) + Number(TipNum)).formatAmountWithCommas();
          tween(that.jackPot).delay(4).call(() => {
            that.jackPot.active = false;
            that.isSpinning = false;
            SkeletonNode.getComponent(sp.Skeleton).animation = "";
          }).start();
        }
        /**laji*/


        convertToMandK(number) {
          if (number >= 1000000) {
            var M = (number / 1000000).toFixed(2);
            return M + "M";
          } else if (number >= 1000) {
            var K = (number / 1000).toFixed(2);
            return K + "k";
          } else {
            return "" + number;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "wheelNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "jackPot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "closeJack", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gold_num", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tipLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "strawberry", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "banana", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "apple", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "grape", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "watermelon", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "wild", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _export("getRootPosition", getRootPosition = (node, totalX, totalY) => {
        if (node.parent.name === 'Canvas') {
          return new Vec3(totalX, totalY, 0);
        } else {
          var x = node.position.x + node.parent.position.x;
          var y = node.position.y + node.parent.position.y;
          return getRootPosition(node.parent, x, y);
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8f97af6b1309f4ec1d65d2ef9402b83b843dbee4.js.map