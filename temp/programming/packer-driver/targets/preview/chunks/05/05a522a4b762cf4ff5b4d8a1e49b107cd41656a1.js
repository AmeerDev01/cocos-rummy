System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Crash_Singleton, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e67318eyZlByb/B+OzfWYy2", "Crash_Singleton", undefined);

      _export("default", Crash_Singleton = class Crash_Singleton {
        static getInstance() {
          if (!this.instance) {
            this.instance = new this();
          }

          return this.instance;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=05a522a4b762cf4ff5b4d8a1e49b107cd41656a1.js.map