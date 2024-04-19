System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Singleton, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "18dbcMbF6dMVb1b7Ycn7kfd", "Singleton", undefined);

      _export("default", Singleton = class Singleton {
        constructor() {}

        static Instance() {
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
//# sourceMappingURL=9f1987fe5eb0a59e562033b480c888208603c945.js.map