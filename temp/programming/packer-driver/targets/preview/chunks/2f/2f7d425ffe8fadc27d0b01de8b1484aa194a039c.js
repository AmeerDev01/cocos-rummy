System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Countdown, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f9932CLNv5C0K+0U6yn40CV", "Countdown", undefined);

      _export("default", Countdown = class Countdown {
        constructor() {
          this._time = 0;
          this._timer = 0;
          this._onUpdate = void 0;
          this._onEnd = void 0;
        }

        startCountdown(options) {
          this._time = options.duration;
          this._onUpdate = options.onUpdate;
          this._onEnd = options.onEnd;
          this._timer = setInterval(() => {
            this.updateCountdown();
          }, 100);
        }

        stopCountdown() {
          clearInterval(this._timer);
        }

        updateCountdown() {
          this._time--;

          if (this._onUpdate) {
            this._onUpdate(this._time);
          }

          if (this._time <= 0) {
            this.stopCountdown();

            if (this._onEnd) {
              this._onEnd();
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2f7d425ffe8fadc27d0b01de8b1484aa194a039c.js.map