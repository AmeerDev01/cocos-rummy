System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Counter, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "be166rfdV5KtbTGWxb0aHIE", "Counter", undefined);

      _export("default", Counter = class Counter {
        constructor(duration, interval, total, callback) {
          this.duration = void 0;
          this.interval = void 0;
          this.total = void 0;
          this.timeElapsed = void 0;
          this.callback = void 0;
          this.currentValue = void 0;
          this.accumulatedTime = void 0;
          this.shouldStop = false;
          this.duration = duration;
          this.interval = interval;
          this.total = total;
          this.callback = callback;
          this.timeElapsed = 0;
          this.currentValue = 0;
          this.accumulatedTime = 0;
          this.callback(this.currentValue); // 立即执行回调函数
        }

        update(dt) {
          if (this.shouldStop) {
            return;
          }

          this.timeElapsed += dt;

          if (this.timeElapsed >= this.duration) {
            this.callback(this.total); // 确保最后一个值为22.22

            this.shouldStop = true;
            return;
          }

          this.accumulatedTime += dt;
          const intervalInSeconds = this.interval / 1000;

          if (this.accumulatedTime >= intervalInSeconds) {
            this.accumulatedTime -= intervalInSeconds;
            this.currentValue = this.timeElapsed / this.duration * this.total;
            this.callback(this.currentValue);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=49c3d1a8448e806af622cb10dc0a7c20e3b6f7ba.js.map