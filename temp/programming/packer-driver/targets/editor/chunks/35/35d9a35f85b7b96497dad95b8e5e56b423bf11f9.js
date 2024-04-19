System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Throttler, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "73d24UhPIVOyZ+Gw94pPgcN", "Throttler", undefined);

      /**节流/防抖辅助类 */
      _export("default", Throttler = class Throttler {
        static getInstance() {
          if (!this.throttler) this.throttler = new Throttler();
          return this.throttler;
        }

        /**
         * 节流：使用示例：if (!await Throttler.isDebouncerAsync(soleKey, 200, true)) return; trip：非async函数使用then
         * @param key 输入唯一的字符串，一般可以是url、path、id等
         * @param time 节流等待时间
         * @param debounce 防抖，设为true，time时间内的事件都会被取消的同时，禁用期内发生的调用，在倒计时完成亦不会发生调用，直到再次发起，值为false：倒计时结束自动发起一次
         * @returns reslove：正常执行
         */
        static async isDebouncerAsync(key, time, debounce = false, inform) {
          return new Promise(reslove => {
            if (this.debouncerMap[key] && this.debouncerMap[key].waiting) {
              inform && inform();

              if (debounce || this.debouncerMap[key].done) {
                return;
              }

              this.debouncerMap[key].done = true;
              this.debouncerMap[key].endHeadler = reslove;
            } else {
              this.debouncerMap[key] = {
                waiting: true,
                done: false
              };
              window.setTimeout(() => {
                if (this.debouncerMap[key].done && this.debouncerMap[key].endHeadler) {
                  this.debouncerMap[key].endHeadler(true);
                }

                delete this.debouncerMap[key];
              }, time);
              reslove(true);
            }
          });
        }

      });

      Throttler.throttler = void 0;
      Throttler.debouncerMap = {};

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=35d9a35f85b7b96497dad95b8e5e56b423bf11f9.js.map