System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Throttler, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        static isDebouncerAsync(key, time, debounce, inform) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (debounce === void 0) {
              debounce = false;
            }

            return new Promise(reslove => {
              if (_this.debouncerMap[key] && _this.debouncerMap[key].waiting) {
                inform && inform();

                if (debounce || _this.debouncerMap[key].done) {
                  return;
                }

                _this.debouncerMap[key].done = true;
                _this.debouncerMap[key].endHeadler = reslove;
              } else {
                _this.debouncerMap[key] = {
                  waiting: true,
                  done: false
                };
                window.setTimeout(() => {
                  if (_this.debouncerMap[key].done && _this.debouncerMap[key].endHeadler) {
                    _this.debouncerMap[key].endHeadler(true);
                  }

                  delete _this.debouncerMap[key];
                }, time);
                reslove(true);
              }
            });
          })();
        }

      });

      Throttler.throttler = void 0;
      Throttler.debouncerMap = {};

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f7d4fb59648dcd8ade68c822cac4b2789f24a2fe.js.map