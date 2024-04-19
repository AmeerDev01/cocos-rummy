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

      _cclegacy._RF.push({}, "30904eGospFzrAohys5RyOm", "Singleton", undefined);

      _export("default", Singleton = class Singleton {
        static _getInstance() {
          if (this._instance === null) {
            this._instance = new this();
          }

          return this._instance;
        }

        constructor() {}

      });

      Singleton._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=20bd3a090f0efc703ed385b1b918176e92f894a2.js.map