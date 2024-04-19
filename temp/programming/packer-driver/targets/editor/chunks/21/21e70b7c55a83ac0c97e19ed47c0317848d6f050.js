System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ObjectPool, _crd, ObjectClassType;

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "./Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBatteryManager(extras) {
    _reporterNs.report("BatteryManager", "./BatteryManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishNet(extras) {
    _reporterNs.report("FishNet", "./FishNet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishNetManager(extras) {
    _reporterNs.report("FishNetManager", "./FishNetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishGold(extras) {
    _reporterNs.report("FishGold", "./FishGold", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishLabelFntManager(extras) {
    _reporterNs.report("FishLabelFntManager", "./FishLabelFntManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishLabelFnt(extras) {
    _reporterNs.report("FishLabelFnt", "./FishLabelFnt", _context.meta, extras);
  }

  _export("ObjectPool", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e83b1f+7vVGSoN8M4dtlfag", "ObjectPool", undefined);

      /**
        对象池
       */
      __checkObsolete__(['Node']);

      //对象类型
      _export("ObjectClassType", ObjectClassType = {
        type_fish: 1,
        //鱼
        type_bullet: 2,
        //子弹
        type_fish_net: 3,
        //鱼网
        type_fish_gold: 4,
        //金币
        type_fish_fnt: 5 //鱼字体

      });

      //////////////////////////////////////-
      _export("ObjectPool", ObjectPool = class ObjectPool {
        constructor() {
          this.defaultNewObjectNum = 5;
          this.objectClassList = [];
          this.objectParent = null;
          this.bulletConfig = void 0;
          this.batteryConfig = void 0;
          this.commonConfig = void 0;
          this.fishConfig = void 0;
          this.textureConfig = void 0;
          this.fishHitLabelConfig = void 0;
          this.fishLabelFntConfig = void 0;
          this.fishFntResConfig = void 0;
          this.fishNetConfig = void 0;
          this.fishGoldConfig = void 0;
          this.activeConfig = void 0;
          this.batteryManager = void 0;
          this.sourceManage = void 0;
          this.fishNetManager = void 0;
          this.fishLabelFntManager = void 0;

          /**缩放比例 */
          this.scaleRatio = 1;
          this.rootNode = void 0;
        }

        initConfig(bulletConfig, batteryConfig, commonConfig, fishConfig, textureConfig, fishHitLabelConfig, fishLabelFntConfig, fishNetConfig, fishGoldConfig, activeConfig, fishFntResConfig, batteryManager, sourceManage, scaleRatio = 1, rootNode) {
          this.bulletConfig = bulletConfig;
          this.batteryConfig = batteryConfig;
          this.commonConfig = commonConfig;
          this.fishConfig = fishConfig;
          this.textureConfig = textureConfig;
          this.fishHitLabelConfig = fishHitLabelConfig;
          this.fishLabelFntConfig = fishLabelFntConfig;
          this.fishFntResConfig = fishFntResConfig;
          this.fishNetConfig = fishNetConfig;
          this.fishGoldConfig = fishGoldConfig;
          this.activeConfig = activeConfig;
          this.fishNetConfig = fishNetConfig;
          this.batteryManager = batteryManager;
          this.sourceManage = sourceManage;
          this.scaleRatio = scaleRatio;
          this.rootNode = rootNode;
        }

        setFishNetManager(fishNetManager) {
          this.fishNetManager = fishNetManager;
        }

        setFishLabelFntManager(fishLabelFntManager) {
          this.fishLabelFntManager = fishLabelFntManager;
        }

        init(parent) {
          this.objectClassList = [];
          this.objectParent = parent;

          for (const k in ObjectClassType) {
            const v = ObjectClassType[k];
            if (!v) continue;
            this.objectClassList[v] = {
              object_id: 0,
              creater: null,
              object_lst: {}
            };
          }
        }

        uninit() {
          this.objectClassList = null;
          this.objectParent = null;
          this.bulletConfig = null;
          this.batteryConfig = null;
          this.commonConfig = null;
          this.fishConfig = null;
          this.textureConfig = null;
          this.fishHitLabelConfig = null;
          this.fishLabelFntConfig = null;
          this.fishNetConfig = null;
          this.batteryManager = null;
          this.sourceManage = null;
          this.fishNetManager = null;
        }

        registerObjectCreater(cType, creater) {
          let item = this.objectClassList[cType];

          if (item) {
            item.creater = creater;
          }
        }

        newSomeObject(cType, dataID, number) {
          let cItem = this.objectClassList[cType];

          if (cItem && cItem.creater) {
            for (let i = 1; i <= number; i++) {
              cItem.object_id = cItem.object_id + 1;
              let info = {
                obj_id: cItem.object_id,
                id: dataID
              };
              let creater = cItem.creater;
              let newObj = creater.create(info);

              if (cType === ObjectClassType.type_bullet) {
                let bullet = newObj;
                bullet.initEnv(this.bulletConfig, this.commonConfig.bonding_size, this.batteryManager, this.sourceManage, this.fishNetManager, this.scaleRatio);
                bullet.init(info);
                this.objectParent.addChild(bullet.uiRoot);
                bullet.uiRoot.setPosition(0, 0);
              } else {
                if (ObjectClassType.type_fish_net === cType) {
                  let fishNet = newObj;
                  fishNet.init(info, this.fishNetConfig, this.sourceManage, this.rootNode);
                } else if (ObjectClassType.type_fish_gold === cType) {
                  let fishGold = newObj;
                  fishGold.init(info, this.sourceManage, this.fishGoldConfig, this.textureConfig, this.activeConfig, this.commonConfig, this.rootNode);
                } else if (ObjectClassType.type_fish_fnt === cType) {
                  let fishLabelFnt = newObj;
                  fishLabelFnt.init(info, this.sourceManage, this.fishLabelFntManager, this.fishLabelFntConfig, this.fishFntResConfig, this.activeConfig, this.commonConfig, this.rootNode);
                }

                this.objectParent.addChild(newObj.uiRoot); // this.objectParent.setPosition(0, 0)
              }

              cItem.object_lst[cItem.object_id] = newObj;
            }
          }
        }

        getObject(cType, dataID) {
          let obj = null;
          let cItem = this.objectClassList[cType];

          if (cItem) {
            for (const k in cItem.object_lst) {
              const v = cItem.object_lst[k];
              if (!v) continue;
              let buse = v.getUseState();
              let dID = v.getDataId();

              if (buse === false && dID === dataID) {
                obj = v;
                break;
              }
            }
          }

          if (!obj) {
            this.newSomeObject(cType, dataID, this.defaultNewObjectNum);
            cItem = this.objectClassList[cType];
            obj = cItem.object_lst[cItem.object_id];
          }

          return obj;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=21e70b7c55a83ac0c97e19ed47c0317848d6f050.js.map