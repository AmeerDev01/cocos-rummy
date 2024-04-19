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

      _cclegacy._RF.push({}, "2e31cizWP1Dwbb/NurO+BI6", "dataTransfer", undefined);

      /**缓存数据 */
      _export("cacheData", cacheData = {
        rollerLaunchResult: null,
        authData: null,
        fixedChessboardIcon: null,
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
//# sourceMappingURL=3f32cb1fbf097058225d533e03d6e9eed7f4ec7e.js.map