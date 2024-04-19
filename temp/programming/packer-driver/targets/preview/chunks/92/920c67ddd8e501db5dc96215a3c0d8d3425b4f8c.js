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

      _cclegacy._RF.push({}, "c7691DdWSJK7Iuya1UZ9zwT", "Singleton", undefined);

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
//# sourceMappingURL=920c67ddd8e501db5dc96215a3c0d8d3425b4f8c.js.map