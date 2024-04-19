System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BatteryManager, BulletManager, FishGoldManager, FishManager, FishNetManager, ObjectEffectWorld, ObjectPool, BuyuScene, _crd;

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBatteryManager(extras) {
    _reporterNs.report("BatteryManager", "../../../common/fish/BatteryManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletManager(extras) {
    _reporterNs.report("BulletManager", "../../../common/fish/BulletManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishGoldManager(extras) {
    _reporterNs.report("FishGoldManager", "../../../common/fish/FishGoldManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishManager(extras) {
    _reporterNs.report("FishManager", "../../../common/fish/FishManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishNetManager(extras) {
    _reporterNs.report("FishNetManager", "../../../common/fish/FishNetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectEffectWorld(extras) {
    _reporterNs.report("ObjectEffectWorld", "../../../common/fish/ObjectEffectWorld", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectPool(extras) {
    _reporterNs.report("ObjectPool", "../../../common/fish/ObjectPool", _context.meta, extras);
  }

  _export("BuyuScene", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BatteryManager = _unresolved_2.BatteryManager;
    }, function (_unresolved_3) {
      BulletManager = _unresolved_3.BulletManager;
    }, function (_unresolved_4) {
      FishGoldManager = _unresolved_4.FishGoldManager;
    }, function (_unresolved_5) {
      FishManager = _unresolved_5.FishManager;
    }, function (_unresolved_6) {
      FishNetManager = _unresolved_6.FishNetManager;
    }, function (_unresolved_7) {
      ObjectEffectWorld = _unresolved_7.ObjectEffectWorld;
    }, function (_unresolved_8) {
      ObjectPool = _unresolved_8.ObjectPool;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5083cdgS8tBtI8Padwggc1y", "BuyuScene", undefined);

      _export("BuyuScene", BuyuScene = class BuyuScene {
        constructor() {
          this.fishManager = void 0;
          this.objectPool = void 0;
          this.bulletManager = void 0;
          this.batteryManager = void 0;
          this.objectEffectWorld = void 0;
          this.fishNetManager = void 0;
          this.fishGoldManager = void 0;
          this.sourceManage = void 0;
          this.fishManager = new (_crd && FishManager === void 0 ? (_reportPossibleCrUseOfFishManager({
            error: Error()
          }), FishManager) : FishManager)();
          this.objectPool = new (_crd && ObjectPool === void 0 ? (_reportPossibleCrUseOfObjectPool({
            error: Error()
          }), ObjectPool) : ObjectPool)();
          this.bulletManager = new (_crd && BulletManager === void 0 ? (_reportPossibleCrUseOfBulletManager({
            error: Error()
          }), BulletManager) : BulletManager)();
          this.batteryManager = new (_crd && BatteryManager === void 0 ? (_reportPossibleCrUseOfBatteryManager({
            error: Error()
          }), BatteryManager) : BatteryManager)();
          this.objectEffectWorld = new (_crd && ObjectEffectWorld === void 0 ? (_reportPossibleCrUseOfObjectEffectWorld({
            error: Error()
          }), ObjectEffectWorld) : ObjectEffectWorld)(this.bulletManager, this.batteryManager, this.fishManager);
          this.fishNetManager = new (_crd && FishNetManager === void 0 ? (_reportPossibleCrUseOfFishNetManager({
            error: Error()
          }), FishNetManager) : FishNetManager)(this.objectPool);
          this.fishGoldManager = new (_crd && FishGoldManager === void 0 ? (_reportPossibleCrUseOfFishGoldManager({
            error: Error()
          }), FishGoldManager) : FishGoldManager)();
        }

        initFish() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e3f228101c1fea4eef4e82e86aad1fc3f1597548.js.map