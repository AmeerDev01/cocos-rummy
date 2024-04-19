System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, LocalStorageUtils, _crd, LOCAL_DATA_KEY;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e2d44oyul1Nt5K3rOog5WO3", "LocalStorageUtils", undefined);

      __checkObsolete__(['sys']);

      _export("LOCAL_DATA_KEY", LOCAL_DATA_KEY = {
        OPTION: "option"
      });

      _export("default", LocalStorageUtils = class LocalStorageUtils {
        static setItem(key, value) {
          sys.localStorage.setItem(key, String(value));
        }

        static getItem(key, type, defValue) {
          if (type === void 0) {
            type = null;
          }

          if (defValue === void 0) {
            defValue = null;
          }

          var strValue = sys.localStorage.getItem(key);

          if (!strValue) {
            return defValue;
          }

          if (type == Number) {
            return Number(strValue);
          }

          if (type == Boolean) {
            return strValue != "false";
          }

          if (type == JSON) {
            return JSON.parse(strValue);
          }

          return strValue;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e390f9c81d869f5ffce8090606255ee0744e87e2.js.map