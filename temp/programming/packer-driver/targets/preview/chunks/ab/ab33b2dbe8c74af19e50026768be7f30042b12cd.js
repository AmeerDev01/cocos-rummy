System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, ViewModel, StoreInject, config, SKT_MAG_TYPE, sktInstance, sktMsgListener, getStore, isSelf, GetnewwwepViewModel, sourceManageSelector, PrefabPathDefine, EffectType, _dec, _class, _crd, RoomViewModel;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBatteryManager(extras) {
    _reporterNs.report("BatteryManager", "../../../common/fish/BatteryManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletManager(extras) {
    _reporterNs.report("BulletManager", "../../../common/fish/BulletManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishManager(extras) {
    _reporterNs.report("FishManager", "../../../common/fish/FishManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish_Room(extras) {
    _reporterNs.report("Fish_Room", "../components/Fish_Room", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Fish_Room", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Fish_Room", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktInstance(extras) {
    _reporterNs.report("sktInstance", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktMsgListener(extras) {
    _reporterNs.report("sktMsgListener", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBatteryChangeVo(extras) {
    _reporterNs.report("BatteryChangeVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChangeBatterySkinVo(extras) {
    _reporterNs.report("ChangeBatterySkinVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChipsChangeVo(extras) {
    _reporterNs.report("ChipsChangeVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnterRoomVo(extras) {
    _reporterNs.report("EnterRoomVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFireVo(extras) {
    _reporterNs.report("FireVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishDieInfo(extras) {
    _reporterNs.report("FishDieInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishInfo(extras) {
    _reporterNs.report("FishInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHitFishVo(extras) {
    _reporterNs.report("HitFishVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLockVo(extras) {
    _reporterNs.report("LockVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOtherJoinRoomVo(extras) {
    _reporterNs.report("OtherJoinRoomVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProduceFishVo(extras) {
    _reporterNs.report("ProduceFishVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResScenceVo(extras) {
    _reporterNs.report("ResScenceVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBackgroundSceneManager(extras) {
    _reporterNs.report("BackgroundSceneManager", "../../../common/fish/BackgroundSceneManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattery(extras) {
    _reporterNs.report("Battery", "../../../common/fish/Battery", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserInfo(extras) {
    _reporterNs.report("UserInfo", "../../../common/fish/Battery", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish(extras) {
    _reporterNs.report("Fish", "../../../common/fish/Fish", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisSelf(extras) {
    _reporterNs.report("isSelf", "../fishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillPlayer(extras) {
    _reporterNs.report("SkillPlayer", "../../../common/fish/SkillPlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishLabelFntManager(extras) {
    _reporterNs.report("FishLabelFntManager", "../../../common/fish/FishLabelFntManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetnewwwepViewModel(extras) {
    _reporterNs.report("GetnewwwepViewModel", "./GetnewwwepViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSelector(extras) {
    _reporterNs.report("sourceManageSelector", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
      StoreInject = _unresolved_2.StoreInject;
    }, function (_unresolved_3) {
      config = _unresolved_3.default;
    }, function (_unresolved_4) {
      SKT_MAG_TYPE = _unresolved_4.SKT_MAG_TYPE;
      sktInstance = _unresolved_4.sktInstance;
      sktMsgListener = _unresolved_4.sktMsgListener;
    }, function (_unresolved_5) {
      getStore = _unresolved_5.getStore;
    }, function (_unresolved_6) {
      isSelf = _unresolved_6.isSelf;
    }, function (_unresolved_7) {
      GetnewwwepViewModel = _unresolved_7.default;
    }, function (_unresolved_8) {
      sourceManageSelector = _unresolved_8.sourceManageSelector;
    }, function (_unresolved_9) {
      PrefabPathDefine = _unresolved_9.PrefabPathDefine;
    }, function (_unresolved_10) {
      EffectType = _unresolved_10.EffectType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "44198ciOg9DWYLF6hMJQR7Y", "RoomViewModel", undefined);

      __checkObsolete__(['Vec3', 'view']);

      RoomViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class RoomViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor(fishManager, bulletManager, batteryManager, backgroundSceneManager, skillPlayer, fishLabelFntManager) {
          super('Fish_Room');
          this.fishManager = void 0;
          this.bulletManager = void 0;
          this.batteryManager = void 0;
          this.backgroundSceneManager = void 0;
          this.skillPlayer = void 0;
          this.fishLabelFntManager = void 0;
          this.roomId = void 0;
          this.userInfos = void 0;
          this.isListenerWs = false;

          /**当前阶段 */
          this.stage = 0;
          this.is_use_rotation = false;

          /**自己的信息 */
          this.selfUserInfo = void 0;
          this.fishManager = fishManager;
          this.bulletManager = bulletManager;
          this.batteryManager = batteryManager;
          this.backgroundSceneManager = backgroundSceneManager;
          this.skillPlayer = skillPlayer;
          this.fishLabelFntManager = fishLabelFntManager;
        }

        begin() {
          this.initUI();
          this.listenerSocket();
          this.setEvent({
            setLockFisState: isChecked => {
              this.batteryManager.getMyselfBatteryObj().setLockFisState(isChecked);
            },
            setAutoFire: isChecked => {
              this.batteryManager.getMyselfBatteryObj().setFireState(isChecked);
            },
            exitRoom: () => {
              this.onExitRoom();
            }
          });
        }

        unListenerSocket() {
          if (!this.isListenerWs) return;
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GENERATE_FISH, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).SEND_BULLET, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).HIT_FISH, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LOCK, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).CANCEL_LOCK, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).CHANGE_BATTERY, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).CHIPS_CHANGE, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).CHANGE_SCENCE, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).CHANGE_BATTERY_SKIN, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).REQ_SCENCE, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).OTHER_JOIN_ROOM, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LEAVE_ROOM, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).EXIT_TABLE, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name);
        }

        listenerSocket() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GENERATE_FISH, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name, data => {
            this.addFish(data.fishs);
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).SEND_BULLET, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name, data => {
            this.runSendBullet(data.playerId, data.angle, data.bulletId);
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).HIT_FISH, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name, data => {
            this.fishLstDeath(data.playerId, data.dies);
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LOCK, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name, data => {
            this.lockFish(data.playerId, data.fishId);
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).CANCEL_LOCK, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name, data => {
            this.unLockFish(data.playerId);
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).CHANGE_BATTERY, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name, data => {
            this.setBatteryBeishu(data.battery.playerId, data.battery.score, true, data.battery.power > 0);
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).CHIPS_CHANGE, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name, data => {
            this.updateScore(data.playerId, data.chips);
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).CHANGE_SCENCE, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name, data => {
            this.backgroundSceneManager.cutBackgroundScene(data.scene);
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).CHANGE_BATTERY_SKIN, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name, data => {
            this.cutBattery(data.playerId, data.skin);
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).REQ_SCENCE, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name, data => {
            this.enterScene(data);
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).OTHER_JOIN_ROOM, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name, data => {
            this.otherJoinRoom(data);
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LEAVE_ROOM, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name, data => {
            this.levelRoom(data.playerId);
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).EXIT_TABLE, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name, data => {
            this.levelRoom(data.playerId);
          });
          this.isListenerWs = true;
        }

        enterScene(data) {
          data.batterys.forEach(v => {
            this.setBatteryInfo(v.playerId, v.score, v.skin, false, v.power > 0);
          });
          this.backgroundSceneManager.cutBackgroundScene(data.scenceId);
          this.addFish(data.fishs);
          this.comp.scheduleOnce(() => {
            this.batteryManager.seteAllUserUIHidden();
          }, 2);
        }

        otherJoinRoom(data) {
          if (this.userInfos.find(v => v.player_id === data.seats.playerId)) {
            return;
          }

          var userInfo = {
            player_id: data.seats.playerId,
            server_id: 1,
            set_id: data.seats.order + 1,
            is_local: (_crd && isSelf === void 0 ? (_reportPossibleCrUseOfisSelf({
              error: Error()
            }), isSelf) : isSelf)(data.seats.playerId),
            //是否为本地，区别自己与别人的炮台
            gold: data.seats.cedit,
            //金币
            head_id: parseInt(data.seats.icon),
            //头像
            level: data.seats.level || 100,
            //等级
            vip_level: data.seats.vip || 0,
            //vip等级
            nick_name: data.seats.nickName,
            //昵称
            battery_id: data.battery.skin,
            //炮id
            battery_score: data.battery.score,
            //炮分数
            isPowerBattery: data.battery.power > 0,
            //是否能量炮
            room_id: this.roomId,
            //房间号
            ready: data.seats.ready,
            //0:准备,1未准备
            offline: data.seats.offline,
            //0:没有离线,非0:离线
            bullet: data.seats.bullet //剩余子弹  

          };
          this.userInfos.push(userInfo);
          this.setBatteryInfo(data.seats.playerId, data.battery.score, data.battery.skin, false, data.battery.power > 0);
        }

        levelRoom(playerId) {
          if ((_crd && isSelf === void 0 ? (_reportPossibleCrUseOfisSelf({
            error: Error()
          }), isSelf) : isSelf)(playerId)) {} else {
            this.batteryManager.removeBatteryByPlayerId(playerId);
            this.bulletManager.removeBulletObjectByPlayerId(playerId);
            this.userInfos = this.userInfos.filter(v => v.player_id !== playerId);
          }
        }

        updateScore(playerId, score) {
          var battery = this.batteryManager.getBatteryByPlayerId(playerId);

          if (battery) {
            battery.setScoreVal(score);
          } else {
            var userInfo = this.userInfos.find(v => v.player_id === playerId);

            if (userInfo) {
              userInfo.gold = score;
            }
          }
        }

        runSendBullet(player_id, angle, bulletId) {
          var obj = this.batteryManager.getBatteryByPlayerId(player_id);

          if (obj) {
            obj.runSendBullet(angle, true, bulletId);
          }
        }

        addFish(fishs) {
          fishs.forEach(v => {
            this.fishManager.addFish({
              object_id: v.id,

              /**鱼配置id */
              fish_id: v.type,

              /**曲线id */
              cve_id: v.road,

              /**已经运动时间t */
              run_t: v.t / 1000,

              /**起始坐标 */
              spos: new Vec3(v.x, v.y),

              /**路径是否反向 */
              breserve: false,

              /**是否旋转 */
              angle: v.angle,

              /**用户数据 */
              user_info: {}
            });
          });
        }

        fishDeath(player_id, fshid, score) {
          var bat_obj = this.batteryManager.getBatteryByPlayerId(player_id);
          var fsh_obj = this.fishManager.getFishObjById(fshid);

          if (bat_obj && fsh_obj) {
            fsh_obj.setScoreVal(score);
            fsh_obj.setGoldMoveEndPos(bat_obj.getBatteryPos());
            fsh_obj.setUserInfo(bat_obj.getUserInfo());
          }

          this.fishManager.removeFish(fshid);
        }

        fishLstDeath(player_id, lst) {
          if (lst.length <= 0) {
            return;
          }

          var score = 0;
          var fsh_id = -1;

          for (var i = 0; i < lst.length; i++) {
            if (i === 0) {
              fsh_id = lst[i].fishId;
            }

            if (i > 0) {
              var fsh_obj = this.fishManager.getFishObjById(lst[i].fishId);
              var first_obj = this.fishManager.getFishObjById(fsh_id);

              if (first_obj && fsh_obj) {
                first_obj.addLineRelObj(fsh_obj);
              }

              this.fishDeath(player_id, lst[i].fishId, lst[i].score);
            }

            score = score + lst[i].score;
          }

          this.fishDeath(player_id, lst[0].fishId, lst[0].score); // if( BuyuManager.getRoomType() != GAME_TYPE_FRIENDROOM ){

          var bat_obj = this.batteryManager.getBatteryByPlayerId(player_id);
          bat_obj.setHitScore(score); // }
          // print("get hit score ===== "  +  score)
        }

        enterRoom(data) {
          this.viewNode.active = true;
          this.comp.initSideBoard();
          this.comp.getBatteryNode().angle = 0;
          this.comp.getFishPondNode().angle = 0;
          this.createAllBatteryByPosition();
          this.userInfos = data.seats.map(v => {
            var userInfo = {
              player_id: v.playerId,
              server_id: 1,
              set_id: v.order + 1,
              is_local: (_crd && isSelf === void 0 ? (_reportPossibleCrUseOfisSelf({
                error: Error()
              }), isSelf) : isSelf)(v.playerId),
              //是否为本地，区别自己与别人的炮台
              gold: v.cedit,
              //金币
              head_id: parseInt(v.icon),
              //头像
              level: v.level || 100,
              //等级
              vip_level: v.vip || 0,
              //vip等级
              nick_name: v.nickName,
              //昵称
              battery_id: undefined,
              //炮id
              battery_score: 0,
              //炮分数
              isPowerBattery: false,
              //是否能量炮
              room_id: data.roomId,
              //房间号
              ready: v.ready,
              //0:准备,1未准备
              offline: v.offline,
              //0:没有离线,非0:离线
              bullet: v.bullet //剩余子弹  

            };
            userInfo.is_local && (this.selfUserInfo = userInfo);
            return userInfo;
          });
          this.stage = data.stage;
          this.roomId = data.roomId;

          if (this.selfUserInfo.set_id === 3 || this.selfUserInfo.set_id === 4) {
            this.fishManager.setUseSkew(true);
            this.skillPlayer.setUseSkew(true);
            this.batteryManager.rotationOtherUserInfo();
            this.fishLabelFntManager.setUseSkew(true);
            this.comp.getBatteryNode().angle = 180;
            this.comp.getFishPondNode().angle = 180;
            this.is_use_rotation = true;
          } else {
            this.fishManager.setUseSkew(false);
            this.skillPlayer.setUseSkew(false); // this.batteryManager.resetRotation();

            this.fishLabelFntManager.setUseSkew(false);
            this.comp.getBatteryNode().angle = 0;
            this.comp.getFishPondNode().angle = 0;
            this.is_use_rotation = false;
          }

          !(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).isTest && (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).REQ_SCENCE, {}); // if (this.stage === 1) {
          // } else {
          //   this.backgroundSceneManager.cutBackgroundScene(1);
          //   if (this.seats.find(v => v.playerId + '' === config.selfUserId).ready !== 0) {
          //     sktInstance.sendSktMessage(SKT_MAG_TYPE.READY, {});
          //   }
          // }
        }

        setBatteryInfo(player_id, score, skin, isEff, isPower) {
          var userInfo = this.userInfos.find(v => v.player_id === player_id);
          this.batteryManager.setPos();
          var res = this.batteryManager.setBatteryInfo({
            user_info: _extends({}, userInfo, {
              battery_id: skin,
              //炮id
              battery_score: score,
              //炮分数
              isPowerBattery: isPower //是否能量炮

            })
          });
          this.comp.setBtnLocaltion(this.fishManager.getScaleRatio());
        }

        setBatteryBeishu(playerId, score, isEff, isPower) {
          var battery = this.batteryManager.getBatteryByPlayerId(playerId);

          if (battery) {
            battery.setBatteryBeishu(score, isEff);
            battery.setPowerBattery(isPower);
          }
        }

        cutBattery(playerId, skin) {
          var battery = this.batteryManager.getBatteryByPlayerId(playerId);

          if (battery) {
            battery.cutBattery(skin);
          }
        }

        lockFish(playerId, fishId) {
          var battery = this.batteryManager.getBatteryByPlayerId(playerId);

          if (battery) {
            battery.setLockFish(fishId);
          }
        }

        unLockFish(playerId) {
          var battery = this.batteryManager.getBatteryByPlayerId(playerId);

          if (battery) {
            battery.setUnlockFish();
          }
        }

        unMountCallBack() {
          this.unListenerSocket();
          this.fishManager = null;
          this.bulletManager = null;
          this.batteryManager = null;
          this.backgroundSceneManager = null;
        }

        clearAllFish() {
          this.fishManager.clearAllSceneAllFish();
          this.fishManager.clearFishCacheData();
          this.comp.getFishPondNode().removeAllChildren();
        }

        onExitRoom() {
          this.clearAllFish();
          this.comp.hideSideBoard();
          this.viewNode.active = false;
          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).EXIT_TABLE, {});
          this.backgroundSceneManager.quitRoom();
          this.batteryManager.removeAllBattery();
        }

        initUI() {}

        createAllBatteryByPosition() {
          this.batteryManager.createAllBatteryByPosition({
            lock: this.send_yrby_ReqLock.bind(this),
            fire: this.send_yrby_ReqFire.bind(this),
            cancelLock: this.send_yrby_ReqCancelLock.bind(this),
            switchBattery: this.send_yrby_ReqSwitchBattery.bind(this)
          }, {
            wepShow: {
              show: (textureConfig, batterySkinConfig) => {
                this.showChangeBatteryUI(textureConfig, batterySkinConfig);
              }
            },
            dataManager: {
              getRoomType: () => {
                return 1;
              },
              getRoomInfo: param => {
                return {
                  lower: 10
                };
              }
            },
            noMoney: {}
          });
        }

        changeScence(scenceId) {}

        send_yrby_ReqFire(msg) {
          !(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).isTest && (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).SEND_BULLET, msg);
        }

        send_yrby_ReqLock(msg) {
          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LOCK, msg);
        }

        send_yrby_ReqCancelLock(msg) {
          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).CANCEL_LOCK, msg);
        }

        send_yrby_ReqSwitchBattery(msg) {
          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).CHANGE_BATTERY, msg);
        }

        showChangeBatteryUI(textureConfig, batterySkinConfig) {
          var getnewwwepViewModel = new (_crd && GetnewwwepViewModel === void 0 ? (_reportPossibleCrUseOfGetnewwwepViewModel({
            error: Error()
          }), GetnewwwepViewModel) : GetnewwwepViewModel)().mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).GET_NEWWAP).source).appendTo(this.viewNode.parent, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT2
          }).connect().setProps({
            vipLevel: this.selfUserInfo.vip_level,
            myBatteryId: this.batteryManager.getMyselfBatteryObj().getUserInfo().battery_id,
            textureConfig: textureConfig,
            batterySkinConfig: batterySkinConfig
          });
          getnewwwepViewModel.setEvent({
            changeBattery: batteryId => {
              (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                error: Error()
              }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                error: Error()
              }), SKT_MAG_TYPE) : SKT_MAG_TYPE).CHANGE_BATTERY_SKIN, {
                skin: batteryId
              });
            }
          });
        }

        connect() {
          this.inject({}, state => {
            return {};
          });
          return this;
        }

      }) || _class);

      _export("default", RoomViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ab33b2dbe8c74af19e50026768be7f30042b12cd.js.map