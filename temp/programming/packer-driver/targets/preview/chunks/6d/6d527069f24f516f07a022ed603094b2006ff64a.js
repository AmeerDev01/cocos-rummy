System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, UITransform, Vec3, Widget, Battery, getFileName, toNodeSpaceAR, BatteryManager, _crd;

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattery(extras) {
    _reporterNs.report("Battery", "./Battery", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishManager(extras) {
    _reporterNs.report("FishManager", "./FishManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletManager(extras) {
    _reporterNs.report("BulletManager", "./BulletManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetFileName(extras) {
    _reporterNs.report("getFileName", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOftoNodeSpaceAR(extras) {
    _reporterNs.report("toNodeSpaceAR", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBackgroundSceneManager(extras) {
    _reporterNs.report("BackgroundSceneManager", "./BackgroundSceneManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMusicEffectPlayer(extras) {
    _reporterNs.report("MusicEffectPlayer", "./MusicEffectPlayer", _context.meta, extras);
  }

  _export("BatteryManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      Battery = _unresolved_2.Battery;
    }, function (_unresolved_3) {
      getFileName = _unresolved_3.getFileName;
      toNodeSpaceAR = _unresolved_3.toNodeSpaceAR;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1d573jpSy5NYJJvu0R/8LQd", "BatteryManager", undefined);

      __checkObsolete__(['EventTouch', 'Node', 'UITransform', 'Vec3', 'Widget']);

      ////////////////////////////////////////////////////////////////////////////////
      _export("BatteryManager", BatteryManager = class BatteryManager {
        constructor() {
          // config
          this.batteryPositionConfig = [];
          this.textureConfig = null;
          this.commonConfig = null;
          this.batteryConfig = null;
          this.batterySkinConfig = null;
          this.batteryScoreConfig = null;
          this.fntScoreConfig = null;
          // member
          this.objectListSet = {};
          this.objectList = new Map();
          this.batteryParent = void 0;
          this.uiCreaterList = [];
          this.controlCallback = void 0;
          this.sourceManage = void 0;
          this.fishManager = void 0;
          this.bulletManager = void 0;
          this.backgroundSceneManager = void 0;
          this.musicEffectPlayer = void 0;

          /**缩放比例 */
          this.scaleRatio = 1;
          this.rootNode = void 0;
          this.bulletServerID = 0;

          this.resumeBulletID = () => {
            this.bulletServerID = 0;
          };
        }

        getBulletID() {
          return ++this.bulletServerID;
        }

        init(parent, rootNode, posConfig, tConfig, cConfig, bConfig, bsConfig, scoreConfig, fntConfig, sourceManage, bulletManager, fishManager, backgroundSceneManager, musicEffectPlayer, scaleRatio) {
          this.batteryPositionConfig = posConfig;
          this.textureConfig = tConfig;
          this.commonConfig = cConfig;
          this.batteryConfig = bConfig;
          this.batterySkinConfig = bsConfig;
          this.batteryScoreConfig = scoreConfig;
          this.fntScoreConfig = fntConfig;
          this.objectListSet = {};
          this.objectList.clear();
          this.uiCreaterList = [];
          this.batteryParent = parent;
          this.rootNode = rootNode;
          this.sourceManage = sourceManage;
          this.bulletManager = bulletManager;
          this.fishManager = fishManager;
          this.backgroundSceneManager = backgroundSceneManager;
          this.musicEffectPlayer = musicEffectPlayer;
          this.scaleRatio = scaleRatio;

          for (var k in this.batteryPositionConfig) {
            var v = this.batteryPositionConfig[k].prefab;
            this.uiCreaterList.push(this.sourceManage.getFile((_crd && getFileName === void 0 ? (_reportPossibleCrUseOfgetFileName({
              error: Error()
            }), getFileName) : getFileName)(v)).source);
          }

          this.resumeBulletID();
          this.registerTouch();
        }

        getRootNode() {
          return this.rootNode;
        }

        getBackgroundSceneManager() {
          return this.backgroundSceneManager;
        }

        uninit() {
          this.batteryPositionConfig = null;
          this.textureConfig = null;
          this.commonConfig = null;
          this.batteryConfig = null;
          this.batterySkinConfig = null;
          this.batteryScoreConfig = null;
          this.fntScoreConfig = null;
          this.objectListSet = null;
          this.objectList = null;
          this.batteryParent = null;
          this.uiCreaterList = null;
          this.controlCallback = null;
          this.sourceManage = null;
          this.fishManager = null;
          this.bulletManager = null;
          this.resumeBulletID();
        }
        /**
        * @param sendFuncs 发送消息函数
        * @param sceneParam 场景参数
        */


        createAllBatteryByPosition(sendFuncs, sceneParam) {
          var i = 1;

          for (var k in this.batteryPositionConfig) {
            var v = this.batteryPositionConfig[k];
            var ui = this.uiCreaterList[i - 1];

            if (ui !== null) {
              var node = new Node();
              node.name = "barrery" + i;
              var uit = node.addComponent(UITransform);
              var obj = node.addComponent(_crd && Battery === void 0 ? (_reportPossibleCrUseOfBattery({
                error: Error()
              }), Battery) : Battery);
              this.batteryParent.addChild(node);
              obj.create(ui, this.textureConfig, this.commonConfig, this.batteryConfig, this.batterySkinConfig, this.batteryScoreConfig, this.fntScoreConfig, sendFuncs, sceneParam, this.sourceManage, this.fishManager, this.bulletManager, this, this.backgroundSceneManager, this.musicEffectPlayer);
              var pos = new Vec3(v.pos.x, v.pos.y).multiplyScalar(this.scaleRatio);
              obj.node.setPosition((_crd && toNodeSpaceAR === void 0 ? (_reportPossibleCrUseOftoNodeSpaceAR({
                error: Error()
              }), toNodeSpaceAR) : toNodeSpaceAR)(this.batteryParent, pos));
              var widget = node.addComponent(Widget);

              if (i === 1 || i === 2) {
                widget.isAlignBottom = true;
                widget.bottom = v.pos.y;
                uit.setAnchorPoint(0.5, 0);
              } else {
                widget.isAlignTop = true;
                widget.top = v.pos.y;
                uit.setAnchorPoint(0.5, 1);
              }

              this.objectListSet[i] = obj;
            }

            i++;
          }

          console.log("create all battery object information  +  +  +  +  +  +  +  +  +  +  +  +  +  +  +  +  + ");
        }

        setPos() {// let i = 1;
          // for (const k in this.batteryPositionConfig) {
          //   const v = this.batteryPositionConfig[k];
          //   const battery = this.objectListSet[i] as Battery;
          //   const node = battery.node;
          //   const uit = node.getComponent(UITransform)
          //   const widget = node.getComponent(Widget)
          //   if (i === 1 || i === 2) {
          //     widget.isAlignBottom = true;
          //     widget.bottom = v.pos.y;
          //     uit.setAnchorPoint(0.5, 0)
          //   } else {
          //     widget.isAlignTop = true;
          //     widget.top = v.pos.y;
          //     uit.setAnchorPoint(0.5, 0)
          //   }
          //   i++;
          // }
        }
        /**
        info = {
          user_info = {
            player_id 	  = 0,//玩家id
            set_id 		  = -1,//坐位id
            is_let 	  = false,//是否为本地，区别自己与别人的炮台
            gold 		  = 0,//金币
            head_id 	  = 0,//头像
            level 		  = 0,//等级
            vip_level 	  = 0,//vip等级
            nick_name 	  = "1234",//昵称
            battery_id 	  = 0 //炮id
              battery_score  = 0.01
              isPowerBattery = false
              room_id
               + + 
            },
          }
         */


        setBatteryInfo(info) {
          if (!this.objectList.has(info.user_info.player_id)) {
            var batteryObj = this.objectListSet[info.user_info.set_id];

            if (batteryObj) {
              var pinfo = this.batteryPositionConfig[info.user_info.set_id];
              var pos = new Vec3(pinfo.pos.x, pinfo.pos.y).multiplyScalar(this.scaleRatio);
              var linfo = {
                config_id: pinfo.batt_cfg_id,
                user_info: info.user_info,
                side: pinfo.side,
                local_pos: pos
              };
              this.objectList.set(info.user_info.player_id, batteryObj);
              batteryObj.setBatteryInfo(linfo, this.batteryParent);
            }

            return true;
          }

          return false;
        }

        rotationOtherUserInfo() {
          for (var i in this.objectListSet) {
            var v = this.objectListSet[i];
            v.rotationInformation(i);
          }
        }

        resetRotation() {
          for (var i in this.objectListSet) {
            var v = this.objectListSet[i];
            v.resetRotation();
          }
        }

        removeBatteryByPlayerId(playerID) {
          var batteryObj = this.objectList.get(playerID);

          if (batteryObj) {
            batteryObj.resumeBatteryState();
          }

          this.objectList.delete(playerID);
        }

        getBatteryByPlayerId(playerID) {
          return this.objectList.get(playerID);
        }

        update(dt) {// for (const k in this.objectList) {
          //   const v = this.objectList[k];
          //   if (!v) continue;
          //   v.update(dt)
          // }
        }
        /**获得自己位置的炮台 */


        getMyselfBatteryObj() {
          var myBattery = null;
          this.objectList.forEach((v, k) => {
            if (v.isMyBattery()) {
              myBattery = v;
            }
          });
          return myBattery;
        }

        clearAllLockState() {
          this.objectList.forEach((v, k) => {
            v.unLockFish();
          });
        }

        setControlCall(call) {
          this.controlCallback = call;
        }

        callControl() {
          if (this.controlCallback) {
            this.controlCallback();
          }
        }

        getParentObj() {
          return this.batteryParent;
        }

        seteAllUserUIHidden() {
          this.objectList.forEach((v, k) => {
            v.setUserUIHidden();
          });
        }

        setStartGame() {
          for (var i in this.objectListSet) {
            var v = this.objectListSet[i];
            if (!v) continue;
            v.setStartGame();
          }
        }

        removeAllBattery() {
          for (var i in this.objectListSet) {
            var v = this.objectListSet[i];
            v.node.destroy();
          }

          this.objectListSet = {};
          this.objectList.clear();
        }

        registerTouch() {
          this.batteryParent.on(Node.EventType.TOUCH_START, e => {
            var myBattery = this.getMyselfBatteryObj();
            myBattery && myBattery.onTouchBegan(e);
          });
          this.batteryParent.on(Node.EventType.TOUCH_MOVE, e => {
            var myBattery = this.getMyselfBatteryObj();
            myBattery && myBattery.onTouchMoved(e);
          });
          this.batteryParent.on(Node.EventType.TOUCH_END, e => {
            var myBattery = this.getMyselfBatteryObj();
            myBattery && myBattery.onTouchEnded(e);
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6d527069f24f516f07a022ed603094b2006ff64a.js.map