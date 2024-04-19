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

      _cclegacy._RF.push({}, "937bexhj0tNwYCBrkMvLlAW", "LocalStorageUtils", undefined);

      __checkObsolete__(['sys']);

      _export("LOCAL_DATA_KEY", LOCAL_DATA_KEY = {
        OPTION: "option"
      });

      _export("default", LocalStorageUtils = class LocalStorageUtils {
        static setItem(key, value) {
          sys.localStorage.setItem(key, String(value));
        }

        static getItem(key, type = null, defValue = null) {
          let strValue = sys.localStorage.getItem(key);

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
//# sourceMappingURL=98721af99a44073068bb5b4a5fa9b9869050c805.js.map