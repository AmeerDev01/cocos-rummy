System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "__unresolved_26", "__unresolved_27", "__unresolved_28", "__unresolved_29", "__unresolved_30", "__unresolved_31", "__unresolved_32", "__unresolved_33", "__unresolved_34", "__unresolved_35", "__unresolved_36", "__unresolved_37", "__unresolved_38", "__unresolved_39", "__unresolved_40", "__unresolved_41", "__unresolved_42", "__unresolved_43", "__unresolved_44", "__unresolved_45", "__unresolved_46", "__unresolved_47"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sourceManageSelector, ViewModel, StoreInject, BatteryManager, BulletCreate, BulletManager, FishGoldManager, FishManager, FishNetCreate, FishNetManager, ObjectEffectWorld, ObjectClassType, ObjectPool, fishActionConfig, fishBatteryConfig, fishBatteryPosConfig, fishBatterySkinConfig, fishBondingBoxConfig, fishBullteConfig, fishCommondConfig, fishCurveConfig, fishConfig, fishGoldConfig, fishHitLabelConfig, fishLabelFntConfig, fishNetConfig, fishTexturesConfig, getStore, fishFntResConfig, FishLabelFntManager, FishGoldCreate, FishLabelFntCreate, SkillPlayer, fishSkillConfig, BackgroundSceneManager, fishBackgroundConfig, SkillRegisterFunc, MusicEffectPlayer, fishMusicResConfig, fishMusicEffectConfig, fishBgmConfig, RoomChooseViewModel, PrefabPathDefine, SKT_MAG_TYPE, sktInstance, sktMsgListener, config, RoomViewModel, quitGame, view, global, ToastType, addToastAction, _dec, _class, _crd, MainViewModel;

  function _reportPossibleCrUseOfsourceManageSelector(extras) {
    _reporterNs.report("sourceManageSelector", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBatteryManager(extras) {
    _reporterNs.report("BatteryManager", "../../../common/fish/BatteryManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletCreate(extras) {
    _reporterNs.report("BulletCreate", "../../../common/fish/Bullet", _context.meta, extras);
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

  function _reportPossibleCrUseOfFishNetCreate(extras) {
    _reporterNs.report("FishNetCreate", "../../../common/fish/FishNet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishNetManager(extras) {
    _reporterNs.report("FishNetManager", "../../../common/fish/FishNetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectEffectWorld(extras) {
    _reporterNs.report("ObjectEffectWorld", "../../../common/fish/ObjectEffectWorld", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShotInfo(extras) {
    _reporterNs.report("ShotInfo", "../../../common/fish/ObjectEffectWorld", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectClassType(extras) {
    _reporterNs.report("ObjectClassType", "../../../common/fish/ObjectPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectPool(extras) {
    _reporterNs.report("ObjectPool", "../../../common/fish/ObjectPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish_Main(extras) {
    _reporterNs.report("Fish_Main", "../components/Fish_Main", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Fish_Main", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Fish_Main", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishActionConfig(extras) {
    _reporterNs.report("fishActionConfig", "../config/ByActionConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishBatteryConfig(extras) {
    _reporterNs.report("fishBatteryConfig", "../config/ByBatteryConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishBatteryPosConfig(extras) {
    _reporterNs.report("fishBatteryPosConfig", "../config/ByBatteryPositionConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishBatterySkinConfig(extras) {
    _reporterNs.report("fishBatterySkinConfig", "../config/ByBatterySkinConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishBondingBoxConfig(extras) {
    _reporterNs.report("fishBondingBoxConfig", "../config/ByBondingBoxConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishBullteConfig(extras) {
    _reporterNs.report("fishBullteConfig", "../config/ByBulletConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishCommondConfig(extras) {
    _reporterNs.report("fishCommondConfig", "../config/ByCommonConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishCurveConfig(extras) {
    _reporterNs.report("fishCurveConfig", "../config/ByCurveConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishConfig(extras) {
    _reporterNs.report("fishConfig", "../config/ByFishConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishGoldConfig(extras) {
    _reporterNs.report("fishGoldConfig", "../config/ByFishGoldConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishHitLabelConfig(extras) {
    _reporterNs.report("fishHitLabelConfig", "../config/ByFishHitLabelConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishLabelFntConfig(extras) {
    _reporterNs.report("fishLabelFntConfig", "../config/ByFishLabelFntConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishNetConfig(extras) {
    _reporterNs.report("fishNetConfig", "../config/ByFishNetConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishTexturesConfig(extras) {
    _reporterNs.report("fishTexturesConfig", "../config/ByTexturesConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishFntResConfig(extras) {
    _reporterNs.report("fishFntResConfig", "../config/ByFntResConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishLabelFntManager(extras) {
    _reporterNs.report("FishLabelFntManager", "../../../common/fish/FishLabelFntManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishGoldCreate(extras) {
    _reporterNs.report("FishGoldCreate", "../../../common/fish/FishGold", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishLabelFntCreate(extras) {
    _reporterNs.report("FishLabelFntCreate", "../../../common/fish/FishLabelFnt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillPlayer(extras) {
    _reporterNs.report("SkillPlayer", "../../../common/fish/SkillPlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishSkillConfig(extras) {
    _reporterNs.report("fishSkillConfig", "../config/BySkillConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBackgroundSceneManager(extras) {
    _reporterNs.report("BackgroundSceneManager", "../../../common/fish/BackgroundSceneManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishBackgroundConfig(extras) {
    _reporterNs.report("fishBackgroundConfig", "../config/ByBackgroundConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish(extras) {
    _reporterNs.report("Fish", "../../../common/fish/Fish", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattery(extras) {
    _reporterNs.report("Battery", "../../../common/fish/Battery", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillRegisterFunc(extras) {
    _reporterNs.report("SkillRegisterFunc", "../../../common/fish/utils/SkillRegisterFunc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMusicEffectPlayer(extras) {
    _reporterNs.report("MusicEffectPlayer", "../../../common/fish/MusicEffectPlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishMusicResConfig(extras) {
    _reporterNs.report("fishMusicResConfig", "../config/ByMusicResConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishMusicEffectConfig(extras) {
    _reporterNs.report("fishMusicEffectConfig", "../config/ByMusicEffectConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishBgmConfig(extras) {
    _reporterNs.report("fishBgmConfig", "../config/ByBgmConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomChooseViewModel(extras) {
    _reporterNs.report("RoomChooseViewModel", "./RoomChooseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
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

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomViewModel(extras) {
    _reporterNs.report("RoomViewModel", "./RoomViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnterRoomVo(extras) {
    _reporterNs.report("EnterRoomVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorMsgVo(extras) {
    _reporterNs.report("ErrorMsgVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfquitGame(extras) {
    _reporterNs.report("quitGame", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastType(extras) {
    _reporterNs.report("ToastType", "../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      view = _cc.view;
    }, function (_unresolved_2) {
      sourceManageSelector = _unresolved_2.sourceManageSelector;
    }, function (_unresolved_3) {
      ViewModel = _unresolved_3.default;
      StoreInject = _unresolved_3.StoreInject;
    }, function (_unresolved_4) {
      BatteryManager = _unresolved_4.BatteryManager;
    }, function (_unresolved_5) {
      BulletCreate = _unresolved_5.BulletCreate;
    }, function (_unresolved_6) {
      BulletManager = _unresolved_6.BulletManager;
    }, function (_unresolved_7) {
      FishGoldManager = _unresolved_7.FishGoldManager;
    }, function (_unresolved_8) {
      FishManager = _unresolved_8.FishManager;
    }, function (_unresolved_9) {
      FishNetCreate = _unresolved_9.FishNetCreate;
    }, function (_unresolved_10) {
      FishNetManager = _unresolved_10.FishNetManager;
    }, function (_unresolved_11) {
      ObjectEffectWorld = _unresolved_11.ObjectEffectWorld;
    }, function (_unresolved_12) {
      ObjectClassType = _unresolved_12.ObjectClassType;
      ObjectPool = _unresolved_12.ObjectPool;
    }, function (_unresolved_13) {
      fishActionConfig = _unresolved_13.fishActionConfig;
    }, function (_unresolved_14) {
      fishBatteryConfig = _unresolved_14.fishBatteryConfig;
    }, function (_unresolved_15) {
      fishBatteryPosConfig = _unresolved_15.fishBatteryPosConfig;
    }, function (_unresolved_16) {
      fishBatterySkinConfig = _unresolved_16.fishBatterySkinConfig;
    }, function (_unresolved_17) {
      fishBondingBoxConfig = _unresolved_17.fishBondingBoxConfig;
    }, function (_unresolved_18) {
      fishBullteConfig = _unresolved_18.fishBullteConfig;
    }, function (_unresolved_19) {
      fishCommondConfig = _unresolved_19.fishCommondConfig;
    }, function (_unresolved_20) {
      fishCurveConfig = _unresolved_20.fishCurveConfig;
    }, function (_unresolved_21) {
      fishConfig = _unresolved_21.fishConfig;
    }, function (_unresolved_22) {
      fishGoldConfig = _unresolved_22.fishGoldConfig;
    }, function (_unresolved_23) {
      fishHitLabelConfig = _unresolved_23.fishHitLabelConfig;
    }, function (_unresolved_24) {
      fishLabelFntConfig = _unresolved_24.fishLabelFntConfig;
    }, function (_unresolved_25) {
      fishNetConfig = _unresolved_25.fishNetConfig;
    }, function (_unresolved_26) {
      fishTexturesConfig = _unresolved_26.fishTexturesConfig;
    }, function (_unresolved_27) {
      getStore = _unresolved_27.getStore;
    }, function (_unresolved_28) {
      fishFntResConfig = _unresolved_28.fishFntResConfig;
    }, function (_unresolved_29) {
      FishLabelFntManager = _unresolved_29.FishLabelFntManager;
    }, function (_unresolved_30) {
      FishGoldCreate = _unresolved_30.FishGoldCreate;
    }, function (_unresolved_31) {
      FishLabelFntCreate = _unresolved_31.FishLabelFntCreate;
    }, function (_unresolved_32) {
      SkillPlayer = _unresolved_32.SkillPlayer;
    }, function (_unresolved_33) {
      fishSkillConfig = _unresolved_33.fishSkillConfig;
    }, function (_unresolved_34) {
      BackgroundSceneManager = _unresolved_34.BackgroundSceneManager;
    }, function (_unresolved_35) {
      fishBackgroundConfig = _unresolved_35.fishBackgroundConfig;
    }, function (_unresolved_36) {
      SkillRegisterFunc = _unresolved_36.SkillRegisterFunc;
    }, function (_unresolved_37) {
      MusicEffectPlayer = _unresolved_37.MusicEffectPlayer;
    }, function (_unresolved_38) {
      fishMusicResConfig = _unresolved_38.fishMusicResConfig;
    }, function (_unresolved_39) {
      fishMusicEffectConfig = _unresolved_39.fishMusicEffectConfig;
    }, function (_unresolved_40) {
      fishBgmConfig = _unresolved_40.fishBgmConfig;
    }, function (_unresolved_41) {
      RoomChooseViewModel = _unresolved_41.default;
    }, function (_unresolved_42) {
      PrefabPathDefine = _unresolved_42.PrefabPathDefine;
    }, function (_unresolved_43) {
      SKT_MAG_TYPE = _unresolved_43.SKT_MAG_TYPE;
      sktInstance = _unresolved_43.sktInstance;
      sktMsgListener = _unresolved_43.sktMsgListener;
    }, function (_unresolved_44) {
      config = _unresolved_44.default;
    }, function (_unresolved_45) {
      RoomViewModel = _unresolved_45.default;
    }, function (_unresolved_46) {
      quitGame = _unresolved_46.quitGame;
    }, function (_unresolved_47) {
      global = _unresolved_47.global;
    }, function (_unresolved_48) {
      ToastType = _unresolved_48.ToastType;
      addToastAction = _unresolved_48.addToastAction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "18c3frvLZVEvago4v28tZd0", "MainViewModel", undefined);

      ;

      __checkObsolete__(['UITransform', 'view']);

      MainViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class MainViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor(initCallback) {
          super('Fish_Main');
          this.fishManager = void 0;
          this.objectPool = void 0;
          this.bulletManager = void 0;
          this.batteryManager = void 0;
          this.objectEffectWorld = void 0;
          this.fishNetManager = void 0;
          this.fishGoldManager = void 0;
          this.fishLabelFntManager = void 0;
          this.skillPlayer = void 0;
          this.backgroundSceneManager = void 0;
          this.musicEffectPlayer = void 0;
          this.sourceManage = void 0;
          this.skillRegisterFunc = void 0;
          this.send_yrby_ReqHit = void 0;
          this.bsend_shot_to_server = true;
          this.insteadSendBulletPlayers = {
            1: 1
          };
          this.roomChooseViewModel = void 0;
          this.roomViewModel = void 0;
          this.scale = 0;
          this.initCallback = void 0;
          this.initCallback = initCallback;
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
          this.fishLabelFntManager = new (_crd && FishLabelFntManager === void 0 ? (_reportPossibleCrUseOfFishLabelFntManager({
            error: Error()
          }), FishLabelFntManager) : FishLabelFntManager)(this.objectPool);
          this.skillPlayer = new (_crd && SkillPlayer === void 0 ? (_reportPossibleCrUseOfSkillPlayer({
            error: Error()
          }), SkillPlayer) : SkillPlayer)();
          this.backgroundSceneManager = new (_crd && BackgroundSceneManager === void 0 ? (_reportPossibleCrUseOfBackgroundSceneManager({
            error: Error()
          }), BackgroundSceneManager) : BackgroundSceneManager)();
          this.objectPool.setFishNetManager(this.fishNetManager);
          this.objectPool.setFishLabelFntManager(this.fishLabelFntManager);
          this.sourceManage = (_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)();
          this.skillRegisterFunc = new (_crd && SkillRegisterFunc === void 0 ? (_reportPossibleCrUseOfSkillRegisterFunc({
            error: Error()
          }), SkillRegisterFunc) : SkillRegisterFunc)(this.skillPlayer, this.backgroundSceneManager, this.sourceManage, this.batteryManager, '');
        }

        begin() {
          this.scale = view.getVisibleSize().width / (_crd && fishCommondConfig === void 0 ? (_reportPossibleCrUseOffishCommondConfig({
            error: Error()
          }), fishCommondConfig) : fishCommondConfig).scene_size.width;
          this.initManager();
          this.listenerSocket();
          this.initUI();
          this.comp.scheduleOnce(() => {
            this.initCallback && this.initCallback();
          }, 0.5);
        }

        initManager() {
          this.initRoomChooseNode();
          this.initRoomModel();
          this.initMusicEffectPlayer();
          this.initObjectPool();
          this.initFish();
          this.initBullet();
          this.initObjectEffectWorld();
          this.initFishGold();
          this.initBattery();
          this.initBackgroundSceneManager();
          this.initFishLabelFntManager();
          this.initSkillPlayer();
          this.initSkillRegisterFunc();
          this.setEvent({
            update: deltaTime => {
              this.fishManager.update(deltaTime);
              this.bulletManager.update(deltaTime);
              this.objectEffectWorld.update();
              this.backgroundSceneManager.update(deltaTime);
              this.fishLabelFntManager.update(deltaTime);
              this.musicEffectPlayer.update(deltaTime);
            }
          });
        }
        /**获得缩放比例 */


        getScaleRatio() {
          // let scale = view.getDesignResolutionSize().width / fishCommondConfig.scene_size.width
          // this.scale = 1;
          return this.scale;
        }

        setScale(scale) {
          this.scale = scale;
          (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).isTest && this.initManager();
        }

        getFishManager() {
          return this.fishManager;
        }

        getBatteryManager() {
          return this.batteryManager;
        }

        getBackgroundSceneManager() {
          return this.backgroundSceneManager;
        }

        initMusicEffectPlayer() {
          this.musicEffectPlayer = new (_crd && MusicEffectPlayer === void 0 ? (_reportPossibleCrUseOfMusicEffectPlayer({
            error: Error()
          }), MusicEffectPlayer) : MusicEffectPlayer)(this.viewNode, this.sourceManage, _crd && fishMusicResConfig === void 0 ? (_reportPossibleCrUseOffishMusicResConfig({
            error: Error()
          }), fishMusicResConfig) : fishMusicResConfig, _crd && fishMusicEffectConfig === void 0 ? (_reportPossibleCrUseOffishMusicEffectConfig({
            error: Error()
          }), fishMusicEffectConfig) : fishMusicEffectConfig);
        }

        initBattery() {
          this.batteryManager.init(this.getBatteryNode(), this.getRootNode(), _crd && fishBatteryPosConfig === void 0 ? (_reportPossibleCrUseOffishBatteryPosConfig({
            error: Error()
          }), fishBatteryPosConfig) : fishBatteryPosConfig, _crd && fishTexturesConfig === void 0 ? (_reportPossibleCrUseOffishTexturesConfig({
            error: Error()
          }), fishTexturesConfig) : fishTexturesConfig, _crd && fishCommondConfig === void 0 ? (_reportPossibleCrUseOffishCommondConfig({
            error: Error()
          }), fishCommondConfig) : fishCommondConfig, _crd && fishBatteryConfig === void 0 ? (_reportPossibleCrUseOffishBatteryConfig({
            error: Error()
          }), fishBatteryConfig) : fishBatteryConfig, _crd && fishBatterySkinConfig === void 0 ? (_reportPossibleCrUseOffishBatterySkinConfig({
            error: Error()
          }), fishBatterySkinConfig) : fishBatterySkinConfig, _crd && fishHitLabelConfig === void 0 ? (_reportPossibleCrUseOffishHitLabelConfig({
            error: Error()
          }), fishHitLabelConfig) : fishHitLabelConfig, _crd && fishFntResConfig === void 0 ? (_reportPossibleCrUseOffishFntResConfig({
            error: Error()
          }), fishFntResConfig) : fishFntResConfig, this.sourceManage, this.bulletManager, this.fishManager, this.backgroundSceneManager, this.musicEffectPlayer, this.getScaleRatio());
        }

        initObjectPool() {
          this.objectPool.init(this.getBatteryNode());
          this.objectPool.initConfig(_crd && fishBullteConfig === void 0 ? (_reportPossibleCrUseOffishBullteConfig({
            error: Error()
          }), fishBullteConfig) : fishBullteConfig, _crd && fishBatteryConfig === void 0 ? (_reportPossibleCrUseOffishBatteryConfig({
            error: Error()
          }), fishBatteryConfig) : fishBatteryConfig, _crd && fishCommondConfig === void 0 ? (_reportPossibleCrUseOffishCommondConfig({
            error: Error()
          }), fishCommondConfig) : fishCommondConfig, _crd && fishConfig === void 0 ? (_reportPossibleCrUseOffishConfig({
            error: Error()
          }), fishConfig) : fishConfig, _crd && fishTexturesConfig === void 0 ? (_reportPossibleCrUseOffishTexturesConfig({
            error: Error()
          }), fishTexturesConfig) : fishTexturesConfig, _crd && fishHitLabelConfig === void 0 ? (_reportPossibleCrUseOffishHitLabelConfig({
            error: Error()
          }), fishHitLabelConfig) : fishHitLabelConfig, _crd && fishLabelFntConfig === void 0 ? (_reportPossibleCrUseOffishLabelFntConfig({
            error: Error()
          }), fishLabelFntConfig) : fishLabelFntConfig, _crd && fishNetConfig === void 0 ? (_reportPossibleCrUseOffishNetConfig({
            error: Error()
          }), fishNetConfig) : fishNetConfig, _crd && fishGoldConfig === void 0 ? (_reportPossibleCrUseOffishGoldConfig({
            error: Error()
          }), fishGoldConfig) : fishGoldConfig, _crd && fishActionConfig === void 0 ? (_reportPossibleCrUseOffishActionConfig({
            error: Error()
          }), fishActionConfig) : fishActionConfig, _crd && fishFntResConfig === void 0 ? (_reportPossibleCrUseOffishFntResConfig({
            error: Error()
          }), fishFntResConfig) : fishFntResConfig, this.batteryManager, this.sourceManage, this.getScaleRatio(), this.getRootNode()); // --注册子弹

          this.objectPool.registerObjectCreater((_crd && ObjectClassType === void 0 ? (_reportPossibleCrUseOfObjectClassType({
            error: Error()
          }), ObjectClassType) : ObjectClassType).type_bullet, _crd && BulletCreate === void 0 ? (_reportPossibleCrUseOfBulletCreate({
            error: Error()
          }), BulletCreate) : BulletCreate);

          for (var k in _crd && fishBullteConfig === void 0 ? (_reportPossibleCrUseOffishBullteConfig({
            error: Error()
          }), fishBullteConfig) : fishBullteConfig) {
            var v = (_crd && fishBullteConfig === void 0 ? (_reportPossibleCrUseOffishBullteConfig({
              error: Error()
            }), fishBullteConfig) : fishBullteConfig)[k];
            this.objectPool.newSomeObject((_crd && ObjectClassType === void 0 ? (_reportPossibleCrUseOfObjectClassType({
              error: Error()
            }), ObjectClassType) : ObjectClassType).type_bullet, v.id, 5); //预分配子弹对象
          } //	--注册鱼网


          this.objectPool.registerObjectCreater((_crd && ObjectClassType === void 0 ? (_reportPossibleCrUseOfObjectClassType({
            error: Error()
          }), ObjectClassType) : ObjectClassType).type_fish_net, _crd && FishNetCreate === void 0 ? (_reportPossibleCrUseOfFishNetCreate({
            error: Error()
          }), FishNetCreate) : FishNetCreate);

          for (var _k in _crd && fishNetConfig === void 0 ? (_reportPossibleCrUseOffishNetConfig({
            error: Error()
          }), fishNetConfig) : fishNetConfig) {
            var _v = (_crd && fishNetConfig === void 0 ? (_reportPossibleCrUseOffishNetConfig({
              error: Error()
            }), fishNetConfig) : fishNetConfig)[_k];
            this.objectPool.newSomeObject((_crd && ObjectClassType === void 0 ? (_reportPossibleCrUseOfObjectClassType({
              error: Error()
            }), ObjectClassType) : ObjectClassType).type_fish_net, _v.id, 5); //预分配鱼网对象
          } // --注册金币


          this.objectPool.registerObjectCreater((_crd && ObjectClassType === void 0 ? (_reportPossibleCrUseOfObjectClassType({
            error: Error()
          }), ObjectClassType) : ObjectClassType).type_fish_gold, _crd && FishGoldCreate === void 0 ? (_reportPossibleCrUseOfFishGoldCreate({
            error: Error()
          }), FishGoldCreate) : FishGoldCreate);

          for (var _k2 in _crd && fishGoldConfig === void 0 ? (_reportPossibleCrUseOffishGoldConfig({
            error: Error()
          }), fishGoldConfig) : fishGoldConfig) {
            var _v2 = (_crd && fishGoldConfig === void 0 ? (_reportPossibleCrUseOffishGoldConfig({
              error: Error()
            }), fishGoldConfig) : fishGoldConfig)[_k2];
            this.objectPool.newSomeObject((_crd && ObjectClassType === void 0 ? (_reportPossibleCrUseOfObjectClassType({
              error: Error()
            }), ObjectClassType) : ObjectClassType).type_fish_gold, _v2.id, 20); //预分配金币对象
          } // --注册鱼数字对象


          this.objectPool.registerObjectCreater((_crd && ObjectClassType === void 0 ? (_reportPossibleCrUseOfObjectClassType({
            error: Error()
          }), ObjectClassType) : ObjectClassType).type_fish_fnt, _crd && FishLabelFntCreate === void 0 ? (_reportPossibleCrUseOfFishLabelFntCreate({
            error: Error()
          }), FishLabelFntCreate) : FishLabelFntCreate);

          for (var _k3 in _crd && fishLabelFntConfig === void 0 ? (_reportPossibleCrUseOffishLabelFntConfig({
            error: Error()
          }), fishLabelFntConfig) : fishLabelFntConfig) {
            var _v3 = (_crd && fishLabelFntConfig === void 0 ? (_reportPossibleCrUseOffishLabelFntConfig({
              error: Error()
            }), fishLabelFntConfig) : fishLabelFntConfig)[_k3];
            this.objectPool.newSomeObject((_crd && ObjectClassType === void 0 ? (_reportPossibleCrUseOfObjectClassType({
              error: Error()
            }), ObjectClassType) : ObjectClassType).type_fish_fnt, _v3.id, 20); //预分配字体对象
          }
        }

        initFish() {
          this.fishManager.init(this.getFishPondNode(), this.getRootNode(), this.sourceManage, _crd && fishConfig === void 0 ? (_reportPossibleCrUseOffishConfig({
            error: Error()
          }), fishConfig) : fishConfig, _crd && fishBondingBoxConfig === void 0 ? (_reportPossibleCrUseOffishBondingBoxConfig({
            error: Error()
          }), fishBondingBoxConfig) : fishBondingBoxConfig, _crd && fishCurveConfig === void 0 ? (_reportPossibleCrUseOffishCurveConfig({
            error: Error()
          }), fishCurveConfig) : fishCurveConfig, _crd && fishSkillConfig === void 0 ? (_reportPossibleCrUseOffishSkillConfig({
            error: Error()
          }), fishSkillConfig) : fishSkillConfig, _crd && fishTexturesConfig === void 0 ? (_reportPossibleCrUseOffishTexturesConfig({
            error: Error()
          }), fishTexturesConfig) : fishTexturesConfig, _crd && fishActionConfig === void 0 ? (_reportPossibleCrUseOffishActionConfig({
            error: Error()
          }), fishActionConfig) : fishActionConfig, _crd && fishCommondConfig === void 0 ? (_reportPossibleCrUseOffishCommondConfig({
            error: Error()
          }), fishCommondConfig) : fishCommondConfig, this.batteryManager, this.fishGoldManager, this.fishLabelFntManager, this.skillPlayer, this.musicEffectPlayer, this.backgroundSceneManager, this.getScaleRatio());
        }

        initBullet() {
          this.bulletManager.init((_crd && fishCommondConfig === void 0 ? (_reportPossibleCrUseOffishCommondConfig({
            error: Error()
          }), fishCommondConfig) : fishCommondConfig).bonding_size, _crd && fishBullteConfig === void 0 ? (_reportPossibleCrUseOffishBullteConfig({
            error: Error()
          }), fishBullteConfig) : fishBullteConfig, this.objectPool, this.sourceManage, this.batteryManager, this.getScaleRatio());
        }

        initObjectEffectWorld() {
          this.objectEffectWorld.registerCallback(this.onShotCallback.bind(this));
        }

        initFishGold() {
          this.fishGoldManager.init(_crd && fishGoldConfig === void 0 ? (_reportPossibleCrUseOffishGoldConfig({
            error: Error()
          }), fishGoldConfig) : fishGoldConfig, _crd && fishTexturesConfig === void 0 ? (_reportPossibleCrUseOffishTexturesConfig({
            error: Error()
          }), fishTexturesConfig) : fishTexturesConfig, _crd && fishActionConfig === void 0 ? (_reportPossibleCrUseOffishActionConfig({
            error: Error()
          }), fishActionConfig) : fishActionConfig, _crd && fishCommondConfig === void 0 ? (_reportPossibleCrUseOffishCommondConfig({
            error: Error()
          }), fishCommondConfig) : fishCommondConfig, this.objectPool, this.musicEffectPlayer, this.getRootNode());
        }

        initSkillPlayer() {
          this.skillPlayer.init(_crd && fishSkillConfig === void 0 ? (_reportPossibleCrUseOffishSkillConfig({
            error: Error()
          }), fishSkillConfig) : fishSkillConfig, _crd && fishCommondConfig === void 0 ? (_reportPossibleCrUseOffishCommondConfig({
            error: Error()
          }), fishCommondConfig) : fishCommondConfig, _crd && fishTexturesConfig === void 0 ? (_reportPossibleCrUseOffishTexturesConfig({
            error: Error()
          }), fishTexturesConfig) : fishTexturesConfig, this.skillRegisterFunc.funs, this.getScaleRatio());
        }

        initSkillRegisterFunc() {
          this.skillRegisterFunc.init(this.getRootNode());
        }

        initBackgroundSceneManager() {
          this.backgroundSceneManager.init(this.getBackgroundNode(), _crd && fishBackgroundConfig === void 0 ? (_reportPossibleCrUseOffishBackgroundConfig({
            error: Error()
          }), fishBackgroundConfig) : fishBackgroundConfig, _crd && fishTexturesConfig === void 0 ? (_reportPossibleCrUseOffishTexturesConfig({
            error: Error()
          }), fishTexturesConfig) : fishTexturesConfig, _crd && fishBgmConfig === void 0 ? (_reportPossibleCrUseOffishBgmConfig({
            error: Error()
          }), fishBgmConfig) : fishBgmConfig, (_crd && fishCommondConfig === void 0 ? (_reportPossibleCrUseOffishCommondConfig({
            error: Error()
          }), fishCommondConfig) : fishCommondConfig).scene_size, this.sourceManage, this.fishManager, this.musicEffectPlayer, this.getScaleRatio());
          this.backgroundSceneManager.createSeawaveObj();
        }

        initFishLabelFntManager() {
          this.fishLabelFntManager.init(this.getRootNode());
        } //鱼碰撞回调


        onShotCallback(shotLst) {
          for (var k in shotLst) {
            var v = shotLst[k];
            if (v == null) continue;

            if (this.bsend_shot_to_server === true) {
              if (v.bulletObj.isMyBullet()) {
                //自身子弹
                var msg = {
                  playerId: v.bulletObj.getBulletPlayerId(),
                  bulletId: v.bulletObj.getBulletServeId(),
                  fishId: v.fishObj.getObjectId(),
                  fishConfigId: v.fishObj.getFishConfigId()
                };
                this.send_yrby_ReqHit(msg);
                var battery = this.batteryManager.getBatteryByPlayerId(msg.playerId);
                battery.minusBulletNum();
              }
            } //代发子弹


            for (var m in this.insteadSendBulletPlayers) {
              var n = this.insteadSendBulletPlayers[m];
              if (n == null) continue;

              if (v.bulletObj.getBulletPlayerId() === n) {
                var _msg = {
                  playerId: v.bulletObj.getBulletPlayerId(),
                  bulletId: v.bulletObj.getBulletServeId(),
                  fishId: v.fishObj.getObjectId(),
                  fishConfigId: v.fishObj.getFishConfigId()
                };
                this.send_yrby_ReqHit(_msg);
                break;
              }
            }

            this.bulletManager.removeBulletObject(k);
          }
        }

        setSendYrbyReqHit(send_yrby_ReqHit) {
          this.send_yrby_ReqHit = send_yrby_ReqHit;
        }

        initUI() {
          this.send_yrby_ReqHit = msg => {
            !(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).isTest && (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
              error: Error()
            }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
              error: Error()
            }), SKT_MAG_TYPE) : SKT_MAG_TYPE).HIT_FISH, msg);
          };
        }

        fishDeath(player_id, fshid, score) {
          var bat_obj = this.batteryManager.getBatteryByPlayerId(player_id);
          var fsh_obj = this.fishManager.getFishObjById(fshid);

          if (bat_obj && fsh_obj) {
            fsh_obj.setScoreVal(score);
            fsh_obj.setGoldMoveEndPos(bat_obj.getBatteryPos());
            fsh_obj.setUserInfo(bat_obj.getUserInfo()); // let pos = fsh_obj.getCurrentPos()
            // bat_obj.setHitScore(score)
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

        unMountCallBack() {
          this.fishManager.uninit();
          this.backgroundSceneManager.uninit();
          this.objectPool.uninit();
          this.objectEffectWorld.uninit();
          this.bulletManager.uninit();
          this.batteryManager.uninit();
          this.fishGoldManager.uninit();
          this.fishLabelFntManager.uninit();
          this.fishNetManager.uninit();
          this.skillPlayer.uninit();
          this.musicEffectPlayer.uninit();
          this.skillRegisterFunc.uninit();
          this.roomChooseViewModel.unMount();
          this.unListenerSocket();
          this.dispatch((_crd && quitGame === void 0 ? (_reportPossibleCrUseOfquitGame({
            error: Error()
          }), quitGame) : quitGame)(0));
        }

        initRoomChooseNode() {
          if (this.roomChooseViewModel) return;
          this.roomChooseViewModel = new (_crd && RoomChooseViewModel === void 0 ? (_reportPossibleCrUseOfRoomChooseViewModel({
            error: Error()
          }), RoomChooseViewModel) : RoomChooseViewModel)().mountView(this.sourceManage.getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).ROOM_CHOOSE).source).appendTo(this.comp.getRoomListNode()).connect();
          this.roomChooseViewModel.comp.setEvent({
            exitGame: () => {
              this.onExitGame();
            }
          });
        }

        initRoomModel() {
          if (this.roomViewModel) {
            // this.roomViewModel.viewNode.setScale(this.getScaleRatio(), this.getScaleRatio())
            return;
          }

          this.roomViewModel = new (_crd && RoomViewModel === void 0 ? (_reportPossibleCrUseOfRoomViewModel({
            error: Error()
          }), RoomViewModel) : RoomViewModel)(this.fishManager, this.bulletManager, this.batteryManager, this.backgroundSceneManager, this.skillPlayer, this.fishLabelFntManager).mountView(this.sourceManage.getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).GAME_ROOM).source).appendTo(this.comp.getGameMainSenceNode()).connect(); // this.roomViewModel.viewNode.getComponent(UITransform).width = fishCommondConfig.scene_size.width;
          // this.roomViewModel.viewNode.getComponent(UITransform).height = fishCommondConfig.scene_size.height;
          // this.roomViewModel.viewNode.setScale(this.getScaleRatio(), this.getScaleRatio())
          // this.roomViewModel.comp.setScale(this.getScaleRatio());

          this.roomViewModel.viewNode.active = false;
        }

        onExitGame() {
          (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
            error: Error()
          }), global) : global).closeSubGame();
        }

        getRootNode() {
          return this.viewNode;
        }
        /**获得炮台层 */


        getBatteryNode() {
          return this.roomViewModel.comp.getBatteryNode();
        }
        /**获得鱼池层 */


        getFishPondNode() {
          return this.roomViewModel.comp.getFishPondNode();
        }
        /**获得背景层 */


        getBackgroundNode() {
          return this.roomViewModel.comp.getBackgroundNode();
        }

        enterRoom() {}

        listenerSocket() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).JOIN_ROOM, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name, (data, error) => {
            // data.members.forEach(v=>{
            //   this.roomViewModel.enterRoom('1', v)
            // })
            // this.backgroundSceneManager.cutBackgroundScene(0);
            this.roomViewModel.enterRoom(data);
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).ERROR_MSG, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name, (data, error) => {
            if (data.msgId === 32) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: '余额低于下限',
                type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                  error: Error()
                }), ToastType) : ToastType).NORMAL
              }));
            } else if (data.msgId === 33) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: '余额超过上限',
                type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                  error: Error()
                }), ToastType) : ToastType).NORMAL
              }));
            } else if (data.msgId === 100002) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: '超过最大人数',
                type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                  error: Error()
                }), ToastType) : ToastType).NORMAL
              }));
            }
          });
        }

        unListenerSocket() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).JOIN_ROOM, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).ERROR_MSG, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).name);
        }

        connect() {
          this.inject({}, state => {
            return {};
          });
          return this;
        }

      }) || _class);

      _export("default", MainViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8f3864bff1b608f9b525b45636bcbfbcfe578480.js.map