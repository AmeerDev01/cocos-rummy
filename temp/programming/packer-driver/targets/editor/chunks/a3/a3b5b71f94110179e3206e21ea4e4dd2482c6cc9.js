System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ApplicationGlobal, _crd;

  _export("ApplicationGlobal", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "85c0b9CZkZNmZHfwzWCpNQI", "ApplicationGlobal", undefined);

      __checkObsolete__(['Node']);

      _export("ApplicationGlobal", ApplicationGlobal = class ApplicationGlobal {});

      ApplicationGlobal.mainPanel = null;
      ApplicationGlobal.BaseUrl = 'http://139.9.242.13:8002';

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a3b5b71f94110179e3206e21ea4e4dd2482c6cc9.js.map