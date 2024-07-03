System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, NumberRoller, _crd;

  _export("NumberRoller", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7bcdeYOsQFFoJk9TtoYcoJi", "NumberRoller", undefined);

      __checkObsolete__(['Label']);

      _export("NumberRoller", NumberRoller = class NumberRoller {
        constructor() {
          this.rolling = false;
          this.startTime = 0;
          this.duration = 0;
          this.startNumber = 0;
          this.endNumber = 0;
          this.targetLabel = null;
          this.updateCallback = null;
        }

        onUpdate(dt) {
          if (this.rolling) {
            var elapsed = Date.now() - this.startTime;
            var progress = Math.min(1, elapsed / this.duration);
            var currentNumber = this.startNumber + (this.endNumber - this.startNumber) * progress;
            this.targetLabel.string = Math.floor(currentNumber).formatAmountWithCommas();

            if (progress >= 1) {
              this.rolling = false;

              if (this.updateCallback) {
                this.updateCallback();
              }
            }
          }
        }

        startRolling(startNumber, endNumber, duration, targetLabel, onComplete) {
          if (this.rolling) {
            return;
          }

          this.startNumber = startNumber;
          this.endNumber = endNumber;
          this.duration = duration;
          this.targetLabel = targetLabel;
          this.startTime = Date.now();
          this.rolling = true;
          this.updateCallback = onComplete || null;
        } // 新增的方法，用于手动触发滚动逻辑


        update(dt) {
          this.onUpdate(dt);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c5b29bed4c22c0c2c40c393e3583fb9c516bd55c.js.map