System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UITransform, Vec3, Fish, FishManager, _crd, sqrt, pow;

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish(extras) {
    _reporterNs.report("Fish", "./Fish", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBatteryManager(extras) {
    _reporterNs.report("BatteryManager", "./BatteryManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishGoldManager(extras) {
    _reporterNs.report("FishGoldManager", "./FishGoldManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishLabelFntManager(extras) {
    _reporterNs.report("FishLabelFntManager", "./FishLabelFntManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillPlayer(extras) {
    _reporterNs.report("SkillPlayer", "./SkillPlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMusicEffectPlayer(extras) {
    _reporterNs.report("MusicEffectPlayer", "./MusicEffectPlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBackgroundSceneManager(extras) {
    _reporterNs.report("BackgroundSceneManager", "./BackgroundSceneManager", _context.meta, extras);
  }

  _export("FishManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Fish = _unresolved_2.Fish;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "51e4fe0kjRAr482OEO31gfV", "FishManager", undefined);

      __checkObsolete__(['Node', 'UITransform', 'Vec3']);

      // 鱼对象管理
      sqrt = Math.sqrt;
      pow = Math.pow; // 缓存服务端刷鱼数据
      // lst = {
      // 	[x] = {
      // 		object_id :对象id
      // 		fish_id :鱼配置id
      // 		spos =[x,y] :起始坐标
      // 		breserve,路径是否反向
      // 		angle :是否旋转
      // 		cve_id :曲线id
      // 		run_t :已经运动时间t
      // 		user_info = {
      // 			用户数据
      // 		},
      // 	}
      // }
      ////////////////////////////////////

      _export("FishManager", FishManager = class FishManager {
        constructor() {
          this.fishConfig = null;
          this.bondingBoxConfig = null;
          this.curveConfig = null;
          this.skillConfig = null;
          this.textureConfig = null;
          this.actionConfig = null;
          this.commonConfig = null;
          this.fishDataList = [];
          // member
          this.aliveFishList = new Map();
          this.aliveFishBBList = new Map();
          this.fishParent = null;
          this.bUseSkew = false;
          this.sourceManage = void 0;
          this.batteryManager = void 0;
          this.fishGoldManager = void 0;
          this.fishLabelFntManager = void 0;
          this.skillPlayer = void 0;
          this.musicEffectPlayer = void 0;
          this.backgroundSceneManager = void 0;

          /**缩放比例 */
          this.scaleRatio = 1;
          this.rootNode = void 0;
        }

        init(parent, rootNode, sourceManage, fConfig, bbConfig, cveConfig, sklConfig, ttConfig, actConfig, comConfig, batteryManager, fishGoldManager, fishLabelFntManager, skillPlayer, musicEffectPlayer, backgroundSceneManager, scaleRatio) {
          this.fishConfig = fConfig;
          this.sourceManage = sourceManage;
          this.bondingBoxConfig = bbConfig;
          this.curveConfig = cveConfig;
          this.skillConfig = sklConfig;
          this.textureConfig = ttConfig;
          this.actionConfig = actConfig;
          this.commonConfig = comConfig;
          this.batteryManager = batteryManager;
          this.fishGoldManager = fishGoldManager;
          this.fishLabelFntManager = fishLabelFntManager;
          this.skillPlayer = skillPlayer;
          this.musicEffectPlayer = musicEffectPlayer;
          this.backgroundSceneManager = backgroundSceneManager;
          this.scaleRatio = scaleRatio;
          this.aliveFishList = new Map();
          this.aliveFishBBList = new Map();
          this.fishDataList = [];
          this.fishParent = parent;
          this.rootNode = rootNode;
        }

        uninit() {
          // config
          this.fishConfig = null;
          this.bondingBoxConfig = null;
          this.curveConfig = null;
          this.skillConfig = null;
          this.textureConfig = null;
          this.actionConfig = null;
          this.commonConfig = null;
          this.aliveFishList && this.aliveFishList.clear();
          this.aliveFishList && this.aliveFishBBList.clear();
          this.fishDataList = []; // member

          this.aliveFishList = null;
          this.aliveFishBBList = null;
          this.fishParent = null;
          this.fishDataList = null;
          this.bUseSkew = false;
          this.sourceManage = null;
          this.batteryManager = null;
          this.musicEffectPlayer = null;
        }

        getRootNode() {
          return this.rootNode;
        }

        getScaleRatio() {
          return this.scaleRatio;
        }

        freshFish(dt) {
          // console.log(this.uuid + " 等待刷鱼数量 -------- ", fishDatas.length);
          for (let i = 0; i < this.fishDataList.length; i++) {
            const v = this.fishDataList[i];

            if (!v) {
              continue;
            }

            if (v.run_t >= 0) {
              if (v.run_t < 0.02) {
                v.run_t = 0;
              } // create fish


              let fObj = new (_crd && Fish === void 0 ? (_reportPossibleCrUseOfFish({
                error: Error()
              }), Fish) : Fish)(v.object_id, v.fish_id, v.cve_id, this.bUseSkew, v.run_t, v.spos, v.breserve, v.angle, v.user_info, this.backgroundSceneManager.getCurrentSceneId(), this.textureConfig, this.fishConfig, this.bondingBoxConfig, this.curveConfig, this.actionConfig, this.commonConfig, this.sourceManage, this.fishParent, this.batteryManager, this.fishGoldManager, this.fishLabelFntManager, this.skillPlayer, this.musicEffectPlayer, this.scaleRatio, this.rootNode); // this.fishParent.addChild(fObj.uiRoot)

              this.aliveFishList.set(v.object_id, fObj);
              this.aliveFishBBList.set(v.object_id, fObj.getCurrentBBX()); // this.aliveFishList[v.object_id] = fObj
              // this.aliveFishBBList[v.object_id] = fObj.getCurrentBBX()

              fObj.fishStart(); // this.fishDataList[k] = null

              this.fishDataList.splice(i, 1);
              i--;
            } else {
              v.run_t = v.run_t + dt;
            }
          }
        } // //[[
        // fish = {
        //   object_id,//对象id
        //   fish_id,//鱼配置id
        //   spos =[x, y,],//起始坐标
        //   breserve, 路径是否反向
        // 		angle,//是否旋转
        //   cve_id,//曲线id
        //   run_t,//已经运动时间t
        //   user_info = {
        //     //用户数据
        //   },
        // }
        // ]]


        addFish(fish) {
          // this.fishDataList[fish.object_id] = fish
          this.fishDataList.push(fish); // console.log(this.uuid + " 等待刷鱼数量", this.fishDataList.length);
        }

        addCacheDataTime(t) {
          this.fishDataList.forEach((v, k) => {
            v && (v.run_t = v.run_t + t);
          }); // for (const k in this.fishDataList) {
          //   const v = this.fishDataList[k];
          //   if (!v) continue;
          //   v.run_t = v.run_t + t
          // }
        }

        addAliveFishTime(t) {
          this.aliveFishList.forEach((v, k) => {
            v && v.addOtherTime(t);
          }); // for (const k in this.aliveFishList) {
          //   const v = this.aliveFishList[k];
          //   if (!v) continue;
          //   v.addOtherTime(t)
          // }
        }

        removeFish(objID) {
          let fObj = this.aliveFishList.get(objID);

          if (fObj) {
            fObj.fishDead(); // this.aliveFishList[objID] = null
            // this.aliveFishBBList[objID] = null

            this.aliveFishList.delete(objID);
            this.aliveFishBBList.delete(objID);
          } // this.fishDataList[objID] = null


          this.fishDataList = this.fishDataList.filter(v => v.object_id !== objID);
        }

        update(dt) {
          this.freshFish(dt);
          this.aliveFishList.forEach((v, k) => {
            if (v) {
              v.update(dt);
              this.aliveFishBBList.set(k, v.getCurrentBBX()); // this.aliveFishBBList[k] = v.getCurrentBBX()

              if (v.isOutofTime() === true) {
                v.fishOut(); // this.aliveFishList[k] = null
                // this.aliveFishBBList[k] = null

                this.aliveFishList.delete(k);
                this.aliveFishBBList.delete(k);
              }
            }
          });
        }

        convertToWorldSpaceAR(pos) {
          return this.fishParent.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(pos.x, pos.y));
        } // //[[
        // bonding_box = {
        //   [1] = { a = 0, b = 0, r = 10, },
        // }
        // ]]


        shotFish(bbx) {
          for (const [k, v] of this.aliveFishBBList.entries()) {
            if (v) {
              for (const m in bbx) {
                // 子弹的包围盒坐标
                const n = bbx[m];
                if (!n) continue;

                for (const i in v) {
                  // 鱼的包围盒坐标
                  const j = v[i];
                  const fish = this.aliveFishList.get(k);
                  const fishpos = fish.getCurrentPos(); // 计算两点间的距离

                  let dis = sqrt(pow(j.a - n.a, 2) + pow(j.b - n.b, 2)); // console.log(`bullet box ${n.a}, ${n.b}, ${n.r}, fish box ${j.a}, ${j.b}, ${j.r}, fish pos ${fishpos.x}, ${fishpos.y}, angle ${fish.getCurrentAngle()}, dis ${dis}`);

                  if (n.r + j.r > dis) {
                    // console.log('打中鱼了');
                    return this.aliveFishList.get(k);
                  }
                }
              }
            }
          }

          return null;
        }

        getAliveFishObjectLst() {
          return this.aliveFishList;
        }

        getFishObjById(objID) {
          return this.aliveFishList.get(objID);
        }
        /**
         * 清理非当前场景的鱼
         */


        clearAllFish() {
          this.aliveFishList.forEach((v, k) => {
            if (v && v.getFishSceneId() !== this.backgroundSceneManager.getCurrentSceneId() && v.getFishSceneId() !== -1) {
              let fishID = v.getObjectId();
              v.fishOut(); // this.aliveFishList[fishID] = null
              // this.aliveFishBBList[fishID] = null

              this.aliveFishList.delete(fishID);
              this.aliveFishBBList.delete(fishID);
            }
          });
        }
        /**
         * 清理所有场景的所有鱼
         */


        clearAllSceneAllFish() {
          this.aliveFishList.clear();
          this.aliveFishBBList.clear();
          this.fishDataList = [];
        }

        getParent() {
          return this.fishParent;
        }

        getFishIdByPoint(pos) {
          let fishID = -1;

          for (const [k, v] of this.aliveFishList.entries()) {
            if (v && v.isPointInFish(pos) === true) {
              fishID = v.getObjectId();
              break;
            }
          } // for (const k in this.aliveFishList) {
          //   const v = this.aliveFishList[k];
          //   if (!v) continue;
          //   if (v.isPointInFish(pos) === true) {
          //     fishID = v.getObjectId()
          //     break
          //   }
          // }


          return fishID;
        }

        setUseSkew(buse) {
          this.bUseSkew = buse;
        }

        clearFishCacheData() {
          this.fishDataList = [];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=29549f927414237b3118ca891a66cddc82a759e8.js.map