System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, getFishBatteryConfigSourceFiles, getFishBatterySkinConfigSourceFiles, getFishBgmConfigSourceFiles, getFishBullteConfigSourceFiles, getFishNetConfigSourceFiles, getFishFntResConfigSourceFiles, getFishMusicResConfigSourceFiles, getFishTexturesConfigSourceFiles, _crd, fishSourceFiles;

  function _reportPossibleCrUseOfgetFishBatteryConfigSourceFiles(extras) {
    _reporterNs.report("getFishBatteryConfigSourceFiles", "./ByBatteryPositionConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetFishBatterySkinConfigSourceFiles(extras) {
    _reporterNs.report("getFishBatterySkinConfigSourceFiles", "./ByBatterySkinConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetFishBgmConfigSourceFiles(extras) {
    _reporterNs.report("getFishBgmConfigSourceFiles", "./ByBgmConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetFishBullteConfigSourceFiles(extras) {
    _reporterNs.report("getFishBullteConfigSourceFiles", "./ByBulletConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetFishNetConfigSourceFiles(extras) {
    _reporterNs.report("getFishNetConfigSourceFiles", "./ByFishNetConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetFishFntResConfigSourceFiles(extras) {
    _reporterNs.report("getFishFntResConfigSourceFiles", "./ByFntResConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetFishMusicResConfigSourceFiles(extras) {
    _reporterNs.report("getFishMusicResConfigSourceFiles", "./ByMusicResConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetFishTexturesConfigSourceFiles(extras) {
    _reporterNs.report("getFishTexturesConfigSourceFiles", "./ByTexturesConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      getFishBatteryConfigSourceFiles = _unresolved_2.getFishBatteryConfigSourceFiles;
    }, function (_unresolved_3) {
      getFishBatterySkinConfigSourceFiles = _unresolved_3.getFishBatterySkinConfigSourceFiles;
    }, function (_unresolved_4) {
      getFishBgmConfigSourceFiles = _unresolved_4.getFishBgmConfigSourceFiles;
    }, function (_unresolved_5) {
      getFishBullteConfigSourceFiles = _unresolved_5.getFishBullteConfigSourceFiles;
    }, function (_unresolved_6) {
      getFishNetConfigSourceFiles = _unresolved_6.getFishNetConfigSourceFiles;
    }, function (_unresolved_7) {
      getFishFntResConfigSourceFiles = _unresolved_7.getFishFntResConfigSourceFiles;
    }, function (_unresolved_8) {
      getFishMusicResConfigSourceFiles = _unresolved_8.getFishMusicResConfigSourceFiles;
    }, function (_unresolved_9) {
      getFishTexturesConfigSourceFiles = _unresolved_9.getFishTexturesConfigSourceFiles;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "98a0a9Z4N5MyJQGio9XpDWQ", "FishConfig", undefined);

      _export("fishSourceFiles", fishSourceFiles = pkgName => {
        return [...(_crd && getFishTexturesConfigSourceFiles === void 0 ? (_reportPossibleCrUseOfgetFishTexturesConfigSourceFiles({
          error: Error()
        }), getFishTexturesConfigSourceFiles) : getFishTexturesConfigSourceFiles)(pkgName), ...(_crd && getFishBullteConfigSourceFiles === void 0 ? (_reportPossibleCrUseOfgetFishBullteConfigSourceFiles({
          error: Error()
        }), getFishBullteConfigSourceFiles) : getFishBullteConfigSourceFiles)(pkgName), ...(_crd && getFishBatteryConfigSourceFiles === void 0 ? (_reportPossibleCrUseOfgetFishBatteryConfigSourceFiles({
          error: Error()
        }), getFishBatteryConfigSourceFiles) : getFishBatteryConfigSourceFiles)(pkgName), ...(_crd && getFishBatterySkinConfigSourceFiles === void 0 ? (_reportPossibleCrUseOfgetFishBatterySkinConfigSourceFiles({
          error: Error()
        }), getFishBatterySkinConfigSourceFiles) : getFishBatterySkinConfigSourceFiles)(pkgName), ...(_crd && getFishNetConfigSourceFiles === void 0 ? (_reportPossibleCrUseOfgetFishNetConfigSourceFiles({
          error: Error()
        }), getFishNetConfigSourceFiles) : getFishNetConfigSourceFiles)(pkgName), ...(_crd && getFishFntResConfigSourceFiles === void 0 ? (_reportPossibleCrUseOfgetFishFntResConfigSourceFiles({
          error: Error()
        }), getFishFntResConfigSourceFiles) : getFishFntResConfigSourceFiles)(pkgName), ...(_crd && getFishMusicResConfigSourceFiles === void 0 ? (_reportPossibleCrUseOfgetFishMusicResConfigSourceFiles({
          error: Error()
        }), getFishMusicResConfigSourceFiles) : getFishMusicResConfigSourceFiles)(pkgName), ...(_crd && getFishBgmConfigSourceFiles === void 0 ? (_reportPossibleCrUseOfgetFishBgmConfigSourceFiles({
          error: Error()
        }), getFishBgmConfigSourceFiles) : getFishBgmConfigSourceFiles)(pkgName)];
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8fcde24ce22b820e8d8274370d33360b261b753a.js.map