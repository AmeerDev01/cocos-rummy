System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ObjectClassType, BulletManager, _crd;

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBatteryManager(extras) {
    _reporterNs.report("BatteryManager", "./BatteryManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "./Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectClassType(extras) {
    _reporterNs.report("ObjectClassType", "./ObjectPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectPool(extras) {
    _reporterNs.report("ObjectPool", "./ObjectPool", _context.meta, extras);
  }

  _export("BulletManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ObjectClassType = _unresolved_2.ObjectClassType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0d326rstCtA26s2O3r9iJFo", "BulletManager", undefined);
      /**
        子弹对象管理
       */


      //////////////////////////////////////////////////////-
      _export("BulletManager", BulletManager = class BulletManager {
        constructor() {
          // config
          this.bulletConfig = null;
          // member
          this.bulletBondingSize = null;
          this.aliveBulletObjectList = [];
          this.aliveBulletBBXList = {};
          this.objectPool = void 0;
          this.sourceManage = void 0;
          this.batteryManager = void 0;

          /**缩放比例 */
          this.scaleRatio = 1;
        }

        /**
         * 初始化
         * @param bondSize 子弹绑定尺寸
         * @param bulConfig 子弹配置
         * @param objectPool 对象池
         * @param sourceManage 资源管理
         * @param batteryManager 炮台管理
         */
        init(bondSize, bulConfig, objectPool, sourceManage, batteryManager, scaleRatio = 1) {
          this.bulletConfig = bulConfig;
          this.bulletBondingSize = bondSize;
          this.objectPool = objectPool;
          this.sourceManage = sourceManage;
          this.batteryManager = batteryManager;
          this.scaleRatio = scaleRatio;
          this.aliveBulletObjectList = [];
          this.aliveBulletBBXList = {};
        }

        uninit() {
          this.bulletConfig = null;
          this.bulletBondingSize = null;
          this.aliveBulletObjectList = null;
          this.aliveBulletBBXList = null;
          this.objectPool = null;
          this.sourceManage = null;
          this.batteryManager = null;
        }
        /**
         * 发射子弹
         * @param bulletID 子弹ID
         * @param startPos 子弹起始位置
         * @param angle 子弹角度
         * @param side 子弹方向
         * @param playerID 玩家ID
         * @param serverID 服务器ID
         * @param lockFishID 锁定鱼ID
         * @param isLocal 是否是本地
         */


        sendBullet(bulletID, startPos, angle, side, playerID, serverID, lockFishID, isLocal) {
          let obj = this.objectPool.getObject((_crd && ObjectClassType === void 0 ? (_reportPossibleCrUseOfObjectClassType({
            error: Error()
          }), ObjectClassType) : ObjectClassType).type_bullet, bulletID);

          if (obj) {
            obj.reset(startPos, angle, lockFishID, playerID, serverID, isLocal);
            this.aliveBulletObjectList[obj.getObjectId()] = obj;
            this.aliveBulletBBXList[obj.getObjectId()] = {
              player_id: playerID,
              bbx: obj.getBondingBox(),
              bullet: obj
            };
          }
        }

        update(dt) {
          for (let k = 0; k < this.aliveBulletObjectList.length; k++) {
            const v = this.aliveBulletObjectList[k];
            if (v == null) continue;
            v.update(dt);
            this.aliveBulletBBXList[k].bbx = v.getBondingBox();
          }
        }

        getBulletAliveLst() {
          return this.aliveBulletObjectList;
        }

        getBulletBondingInfoLst() {
          return this.aliveBulletBBXList;
        }

        removeBulletObject(objID) {
          let obj = this.aliveBulletObjectList[objID];

          if (obj) {
            obj.shotSomething();
            obj.resumeOrgin();
            this.aliveBulletObjectList[objID] = null;
            this.aliveBulletBBXList[objID] = null;
          }
        }

        removeBulletObjectByPlayerId(playerID) {
          for (let k = 0; k < this.aliveBulletObjectList.length; k++) {
            const v = this.aliveBulletObjectList[k];
            if (v == null) continue;

            if (playerID == v.getBulletPlayerId()) {
              v.resumeOrgin();
              this.aliveBulletObjectList[k] = null;
              this.aliveBulletBBXList[k] = null;
            }
          }
        }

        getBulletBBX(objID) {
          return this.aliveBulletBBXList[objID];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e327a3a9f848d46e268a69535a085eed5ba0123c.js.map