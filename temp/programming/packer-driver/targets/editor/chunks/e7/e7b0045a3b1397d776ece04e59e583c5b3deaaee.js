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

      _cclegacy._RF.push({}, "a2c35rYTchMXpZOXPGFmd93", "ApplicationGlobal", undefined);

      __checkObsolete__(['Node']);

      _export("ApplicationGlobal", ApplicationGlobal = class ApplicationGlobal {});

      ApplicationGlobal.mainPanel = null;
      ApplicationGlobal.BaseUrl = 'http://139.9.242.13:8002';

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e7b0045a3b1397d776ece04e59e583c5b3deaaee.js.map