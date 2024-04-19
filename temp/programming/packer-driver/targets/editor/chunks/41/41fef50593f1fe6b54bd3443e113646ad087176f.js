System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ObjectEffectWorld, _crd;

  function _reportPossibleCrUseOfBattery(extras) {
    _reporterNs.report("Battery", "./Battery", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBatteryManager(extras) {
    _reporterNs.report("BatteryManager", "./BatteryManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "./Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletManager(extras) {
    _reporterNs.report("BulletManager", "./BulletManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish(extras) {
    _reporterNs.report("Fish", "./Fish", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishManager(extras) {
    _reporterNs.report("FishManager", "./FishManager", _context.meta, extras);
  }

  _export("ObjectEffectWorld", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "44f4d1/HhtAuqW7bcfkViDd", "ObjectEffectWorld", undefined);

      /**
        对象作用世界，碰撞
       */
      //////////////////////////////////////////
      _export("ObjectEffectWorld", ObjectEffectWorld = class ObjectEffectWorld {
        constructor(bulletManager, batteryManager, fishManager) {
          this.bulletManager = void 0;
          this.batteryManager = void 0;
          this.fishManager = void 0;
          this.shotCallback = null;
          this.bulletManager = bulletManager;
          this.batteryManager = batteryManager;
          this.fishManager = fishManager;
        }

        init() {
          this.shotCallback = null;
        }

        uninit() {
          this.shotCallback = null;
        }

        registerCallback(func) {
          this.shotCallback = func;
        }

        update() {
          let shotLst = {};
          let bullets = this.bulletManager.getBulletBondingInfoLst();

          for (const k in bullets) {
            const v = bullets[k];
            if (v === null) continue;
            let battery = this.batteryManager.getBatteryByPlayerId(v.player_id);

            if (battery) {
              const bullet = v.bullet;
              const lockFishID = battery.getLockFishId();
              const lockFish = this.fishManager.getFishObjById(lockFishID); // console.log(`lockFishID = ${lockFishID}, bulletLockFishID = ${bullet.getCurLockFishId()}`);

              if (lockFish && bullet.getCurLockFishId() === lockFishID) {
                //锁定
                if (lockFish.isShotFish(v.bbx) === true) {
                  shotLst[k] = {
                    bulletObj: bullet,
                    fishObj: lockFish
                  };
                  lockFish.showFishEff();
                }
              } else {
                //没有锁定
                const fish = this.fishManager.shotFish(v.bbx);

                if (fish) {
                  shotLst[k] = {
                    bulletObj: bullet,
                    fishObj: fish
                  };
                  fish.showFishEff();
                }
              }
            }
          }

          this.shotCallback(shotLst);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=41fef50593f1fe6b54bd3443e113646ad087176f.js.map