System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, CountdownTool, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4143cs3G4VGz7m5ucXhCDIg", "CountdownTool", undefined);

      /**
       * 倒计时工具
       */
      _export("default", CountdownTool = class CountdownTool {
        constructor(update) {
          this.t = -1;
          this.countdown = 0;
          this.isStart = false;
          this.update = void 0;
          this.update = update;
        }

        setCountdown(countdown) {
          this.countdown = countdown;
        }

        getCountdown() {
          return this.countdown;
        }

        getIsStart() {
          return this.isStart;
        }

        start(countdown) {
          this.countdown = countdown;
          this.stop();

          if (this.countdown > 0) {
            this.isStart = true;
            this.update(this.countdown);
            this.t = window.setInterval(() => {
              this.update(--this.countdown);

              if (this.countdown <= 0) {
                this.stop();
              }
            }, 1000);
          } else {
            this.update(this.countdown);
          }
        }

        stop() {
          this.isStart = false;
          window.clearInterval(this.t);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=894298c88ff9625c5cb562f798d4f32047c40f73.js.map