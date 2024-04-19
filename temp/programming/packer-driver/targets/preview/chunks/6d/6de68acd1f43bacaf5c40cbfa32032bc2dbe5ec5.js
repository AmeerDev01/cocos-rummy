System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, cacheData, clearCacheData;

  function _reportPossibleCrUseOfAuthDataVo(extras) {
    _reporterNs.report("AuthDataVo", "./type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerLaunchResult(extras) {
    _reporterNs.report("RollerLaunchResult", "./type", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0c6fbEvZbVGzYBcWYGDLWtF", "dataTransfer", undefined);

      /**缓存数据 */
      _export("cacheData", cacheData = {
        rollerLaunchResult: null,
        authData: null,
        initJackpotNumber: null,
        sendBetTime: 0
      });

      _export("clearCacheData", clearCacheData = () => {
        for (var key in cacheData) {
          cacheData[key] = null;
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6de68acd1f43bacaf5c40cbfa32032bc2dbe5ec5.js.map