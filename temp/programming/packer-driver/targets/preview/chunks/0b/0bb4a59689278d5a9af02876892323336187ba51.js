System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, UIOpacity, UITransform, Vec3, instantiate, tween, StepNumberV2, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      instantiate = _cc.instantiate;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d51545G2NhN7J4nczFE+kn2", "StepNumberV2", undefined);

      /**
       * 步进数字
       */
      __checkObsolete__(['Component', 'Label', 'Node', 'UIOpacity', 'UITransform', 'Vec3', 'instantiate', 'tween']);

      _export("default", StepNumberV2 = class StepNumberV2 {
        constructor(component) {
          this.targetNode = void 0;
          this.flyLabelNode = void 0;
          this.flyHeight = void 0;
          this.flyHandler = void 0;
          this.component = void 0;
          this.update = void 0;
          this.done = void 0;

          /**默认的步进时间 */
          this.defaultStepTime = 20;

          /**最小持续时间 */
          this.minKeepTime = 500;

          /**最大持续时间 */
          this.maxKeepTime = 2000;

          /**步进量 */
          this.step = 10;

          /**在变化的值 */
          this.currNum = 0;
          this.beginNum = 0;
          this.endNum = 0;
          this.callback_fn = void 0;
          this.component = component;
        }

        /**
         * 激活飘数字效果
         * @param targetNode 
         * @param flyLabelNode 
         */
        setFlyNode(targetNode, flyLabelNode, flyHeight) {
          flyHeight && (this.flyHeight = flyHeight);
          this.targetNode = targetNode;
          this.flyLabelNode = flyLabelNode;

          this.flyHandler = num => {
            if (!this.flyLabelNode) return;
            var flyNode = instantiate(this.flyLabelNode);
            flyNode.active = true;

            if (this.targetNode) {
              flyNode.getComponent(Label).string = (num > 0 ? '+' : '-') + Math.abs(num).formatAmountWithCommas();
              flyNode.setScale(0.9, 0.9);
              this.targetNode.addChild(flyNode);
              var {
                x,
                y,
                z
              } = flyNode.position;
              tween(flyNode).to(0.7, {
                position: new Vec3(x, y + this.flyHeight || flyNode.getComponent(UITransform).height, z)
              }, {
                easing: "backOut"
              }).start();
              !flyNode.getComponent(UIOpacity) && flyNode.addComponent(UIOpacity);
              tween(flyNode.getComponent(UIOpacity)).to(0.8, {
                opacity: 0
              }).call(() => {
                flyNode.destroy();
              }).start();
            }
          };
        }
        /**设置步进时间(默认步进时间20ms)，传入步进时间，你可以通过控制步进时间间接控制步进量 */


        set(stepTime) {
          if (stepTime === void 0) {
            stepTime = 20;
          }

          stepTime && (this.defaultStepTime = stepTime); // 比如50ms一次，每次变量10，持续时间最低1000ms~5000ms，那么数字间隔最低为1000/50 * 10 = 200,最高5000/50 * 10=1000，如果超越这个区间，将动态调整变量

          var minDistance = this.minKeepTime / this.defaultStepTime * this.step;
          var maxDistance = this.maxKeepTime / this.defaultStepTime * this.step;
          var distance = this.endNum - this.beginNum;

          if (Math.abs(distance) <= minDistance || Math.abs(distance) >= maxDistance) {
            // 重算步进量
            this.step = distance / (this.minKeepTime / this.defaultStepTime);
          } else {
            distance < 0 && (this.step = this.step * -1);
          } // distance < 0 && (this.step = this.step * -1)


          return this;
        }
        /**
         * 开始执行
         * @param isFlyNumber 是否激活数字飘动效果，前提是要设置flyHandler
         * @returns 
         */


        start(beginNum, endNum, update, done, stepTime, isFlyNumber) {
          if (stepTime === void 0) {
            stepTime = 20;
          }

          if (isFlyNumber === void 0) {
            isFlyNumber = true;
          }

          this.beginNum = beginNum;
          this.endNum = endNum;
          this.update = update;
          this.done = done;
          this.set(stepTime);
          this.currNum = this.beginNum;
          this.callback_fn && this.component.unschedule(this.callback_fn); // console.log(this.endNum - this.beginNum)

          this.flyHandler && isFlyNumber && this.flyHandler(this.endNum - this.beginNum);
          this.callback_fn = this.timeHandle.bind(this);
          this.component.schedule(this.callback_fn, stepTime / 1000);
        }

        timeHandle() {
          this.currNum += this.step; //乘以2是怕越过终点，这样就停不下来了

          if (Math.abs(this.currNum - this.endNum) <= Math.abs(this.step)) {
            this.stop();
          } else {
            this.update(this.currNum);
          }
        }
        /**调过过程，直接变成目标值 */


        stop() {
          this.currNum = this.endNum;
          this.update && this.update(this.endNum);
          this.component.unschedule(this.callback_fn);
          this.update = undefined;
          this.callback_fn = undefined;
          this.done && this.done();
          this.done = undefined;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0bb4a59689278d5a9af02876892323336187ba51.js.map