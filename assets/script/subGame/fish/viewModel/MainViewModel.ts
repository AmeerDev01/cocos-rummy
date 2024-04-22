; import { sourceManageSelector } from "../index";
import SourceManage from "../../../base/SourceManage";
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { BatteryManager } from "../../../common/fish/BatteryManager";
import { BulletCreate } from "../../../common/fish/Bullet";
import { BulletManager } from "../../../common/fish/BulletManager";
import { FishGoldManager } from "../../../common/fish/FishGoldManager";
import { FishManager } from "../../../common/fish/FishManager";
import { FishNetCreate } from "../../../common/fish/FishNet";
import { FishNetManager } from "../../../common/fish/FishNetManager";
import { ObjectEffectWorld, ShotInfo } from "../../../common/fish/ObjectEffectWorld";
import { ObjectClassType, ObjectPool } from "../../../common/fish/ObjectPool";
import { Fish_Main, IEvent, IProps } from "../components/Fish_Main"
import { fishActionConfig } from "../config/ByActionConfig";
import { fishBatteryConfig } from "../config/ByBatteryConfig";
import { fishBatteryPosConfig } from "../config/ByBatteryPositionConfig";
import { fishBatterySkinConfig } from "../config/ByBatterySkinConfig";
import { fishBondingBoxConfig } from "../config/ByBondingBoxConfig";
import { fishBullteConfig } from "../config/ByBulletConfig";
import { fishCommondConfig } from "../config/ByCommonConfig";
import { fishCurveConfig } from "../config/ByCurveConfig";
import { fishConfig } from "../config/ByFishConfig";
import { fishGoldConfig } from "../config/ByFishGoldConfig";
import { fishHitLabelConfig } from "../config/ByFishHitLabelConfig";
import { fishLabelFntConfig } from "../config/ByFishLabelFntConfig";
import { fishNetConfig } from "../config/ByFishNetConfig";
import { fishTexturesConfig } from "../config/ByTexturesConfig";
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import { fishFntResConfig } from "../config/ByFntResConfig";
import { FishLabelFntManager } from "../../../common/fish/FishLabelFntManager";
import { FishGoldCreate } from "../../../common/fish/FishGold";
import { FishLabelFntCreate } from "../../../common/fish/FishLabelFnt";
import { SkillPlayer } from "../../../common/fish/SkillPlayer";
import { fishSkillConfig } from "../config/BySkillConfig";
import { BackgroundSceneManager } from "../../../common/fish/BackgroundSceneManager";
import { fishBackgroundConfig } from "../config/ByBackgroundConfig";
import { Fish } from "../../../common/fish/Fish";
import { Battery } from "../../../common/fish/Battery";
import { SkillRegisterFunc } from "../../../common/fish/utils/SkillRegisterFunc";
import { MusicEffectPlayer } from "../../../common/fish/MusicEffectPlayer";
import { fishMusicResConfig } from "../config/ByMusicResConfig";
import { fishMusicEffectConfig } from "../config/ByMusicEffectConfig";
import { fishBgmConfig } from "../config/ByBgmConfig";
import RoomChooseViewModel from "./RoomChooseViewModel";
import { PrefabPathDefine } from "../sourceDefine/prefabDefine";
import { SKT_MAG_TYPE, sktInstance, sktMsgListener } from "../socketConnect";
import config from "../config";
import RoomViewModel from "./RoomViewModel";
import { EnterRoomVo, ErrorMsgVo } from "../type";
import { quitGame } from "../store/action/game";
import { UITransform, view } from "cc";
import { global } from "../../../hall";
import { ToastType, addToastAction } from "../../../hall/store/actions/baseBoard";

@StoreInject(getStore())
class MainViewModel extends ViewModel<Fish_Main, IProps, IEvent> {
  private fishManager: FishManager;
  private objectPool: ObjectPool;
  private bulletManager: BulletManager;
  private batteryManager: BatteryManager;
  private objectEffectWorld: ObjectEffectWorld;
  private fishNetManager: FishNetManager;
  private fishGoldManager: FishGoldManager;
  private fishLabelFntManager: FishLabelFntManager;
  private skillPlayer: SkillPlayer;
  private backgroundSceneManager: BackgroundSceneManager;
  private musicEffectPlayer: MusicEffectPlayer;

  private sourceManage: SourceManage;
  private skillRegisterFunc: SkillRegisterFunc;

  private send_yrby_ReqHit;

  private bsend_shot_to_server = true;
  private insteadSendBulletPlayers = { 1: 1 };

  private roomChooseViewModel: RoomChooseViewModel;
  public roomViewModel: RoomViewModel;
  private scale = 0;

  constructor() {
    super('Fish_Main')

    this.fishManager = new FishManager();
    this.objectPool = new ObjectPool();
    this.bulletManager = new BulletManager();
    this.batteryManager = new BatteryManager();
    this.objectEffectWorld = new ObjectEffectWorld(this.bulletManager, this.batteryManager, this.fishManager);
    this.fishNetManager = new FishNetManager(this.objectPool);
    this.fishGoldManager = new FishGoldManager();
    this.fishLabelFntManager = new FishLabelFntManager(this.objectPool);
    this.skillPlayer = new SkillPlayer();
    this.backgroundSceneManager = new BackgroundSceneManager();

    this.objectPool.setFishNetManager(this.fishNetManager);
    this.objectPool.setFishLabelFntManager(this.fishLabelFntManager);

    this.sourceManage = sourceManageSelector();

    this.skillRegisterFunc = new SkillRegisterFunc(this.skillPlayer, this.backgroundSceneManager, this.sourceManage, this.batteryManager, '');
  }
  protected begin() {
    this.scale = view.getVisibleSize().width / fishCommondConfig.scene_size.width;
    this.initManager();

    this.listenerSocket();
    this.initUI();
  }

  private initManager() {
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
      update: (deltaTime: number) => {
        this.fishManager.update(deltaTime);
        this.bulletManager.update(deltaTime);
        this.objectEffectWorld.update();
        this.backgroundSceneManager.update(deltaTime);
        this.fishLabelFntManager.update(deltaTime);
        this.musicEffectPlayer.update(deltaTime);
      }
    })
  }

  /**获得缩放比例 */
  public getScaleRatio() {
    // let scale = view.getDesignResolutionSize().width / fishCommondConfig.scene_size.width
    // this.scale = 1;
    return this.scale;
  }

  public setScale(scale) {
    this.scale = scale;
    config.isTest && this.initManager();
  }

  public getFishManager() {
    return this.fishManager;
  }

  public getBatteryManager() {
    return this.batteryManager;
  }

  public getBackgroundSceneManager() {
    return this.backgroundSceneManager;
  }

  private initMusicEffectPlayer() {
    this.musicEffectPlayer = new MusicEffectPlayer(this.viewNode, this.sourceManage, fishMusicResConfig, fishMusicEffectConfig);
  }

  private initBattery() {
    this.batteryManager.init(this.getBatteryNode(), this.getRootNode(), fishBatteryPosConfig, fishTexturesConfig, fishCommondConfig, fishBatteryConfig, fishBatterySkinConfig,
      fishHitLabelConfig, fishFntResConfig, this.sourceManage, this.bulletManager, this.fishManager, this.backgroundSceneManager, this.musicEffectPlayer,
      this.getScaleRatio());
  }
  private initObjectPool() {
    this.objectPool.init(this.getBatteryNode());

    this.objectPool.initConfig(fishBullteConfig, fishBatteryConfig, fishCommondConfig, fishConfig, fishTexturesConfig, fishHitLabelConfig,
      fishLabelFntConfig, fishNetConfig, fishGoldConfig, fishActionConfig, fishFntResConfig, this.batteryManager, this.sourceManage,
      this.getScaleRatio(), this.getRootNode())

    // --注册子弹
    this.objectPool.registerObjectCreater(ObjectClassType.type_bullet, BulletCreate);
    for (const k in fishBullteConfig) {
      const v = fishBullteConfig[k];
      this.objectPool.newSomeObject(ObjectClassType.type_bullet, v.id, 5)//预分配子弹对象
    }

    //	--注册鱼网
    this.objectPool.registerObjectCreater(ObjectClassType.type_fish_net, FishNetCreate);
    for (const k in fishNetConfig) {
      const v = fishNetConfig[k];
      this.objectPool.newSomeObject(ObjectClassType.type_fish_net, v.id, 5)//预分配鱼网对象
    }
    // --注册金币
    this.objectPool.registerObjectCreater(ObjectClassType.type_fish_gold, FishGoldCreate);
    for (const k in fishGoldConfig) {
      const v = fishGoldConfig[k];
      this.objectPool.newSomeObject(ObjectClassType.type_fish_gold, v.id, 20)//预分配金币对象
    }
    // --注册鱼数字对象
    this.objectPool.registerObjectCreater(ObjectClassType.type_fish_fnt, FishLabelFntCreate);
    for (const k in fishLabelFntConfig) {
      const v = fishLabelFntConfig[k];
      this.objectPool.newSomeObject(ObjectClassType.type_fish_fnt, v.id, 20)//预分配字体对象
    }
  }

  private initFish() {
    this.fishManager.init(this.getFishPondNode(), this.getRootNode(), this.sourceManage, fishConfig, fishBondingBoxConfig, fishCurveConfig, fishSkillConfig,
      fishTexturesConfig, fishActionConfig, fishCommondConfig, this.batteryManager, this.fishGoldManager,
      this.fishLabelFntManager, this.skillPlayer, this.musicEffectPlayer, this.backgroundSceneManager, this.getScaleRatio());
  }

  private initBullet() {
    this.bulletManager.init(fishCommondConfig.bonding_size, fishBullteConfig, this.objectPool, this.sourceManage, this.batteryManager, this.getScaleRatio())
  }

  private initObjectEffectWorld() {
    this.objectEffectWorld.registerCallback(this.onShotCallback.bind(this));
  }

  private initFishGold() {
    this.fishGoldManager.init(fishGoldConfig, fishTexturesConfig, fishActionConfig, fishCommondConfig, this.objectPool, this.musicEffectPlayer, this.getRootNode());
  }

  private initSkillPlayer() {
    this.skillPlayer.init(fishSkillConfig, fishCommondConfig, fishTexturesConfig, this.skillRegisterFunc.funs, this.getScaleRatio())
  }

  private initSkillRegisterFunc() {
    this.skillRegisterFunc.init(this.getRootNode());
  }

  private initBackgroundSceneManager() {
    this.backgroundSceneManager.init(this.getBackgroundNode(), fishBackgroundConfig, fishTexturesConfig, fishBgmConfig, fishCommondConfig.scene_size,
      this.sourceManage, this.fishManager, this.musicEffectPlayer, this.getScaleRatio());

    this.backgroundSceneManager.createSeawaveObj();
  }

  private initFishLabelFntManager() {
    this.fishLabelFntManager.init(this.getRootNode());
  }

  //鱼碰撞回调
  private onShotCallback(shotLst) {
    for (const k in shotLst) {
      const v = shotLst[k] as ShotInfo;
      if (v == null) continue;
      if (this.bsend_shot_to_server === true) {
        if (v.bulletObj.isMyBullet()) {//自身子弹
          let msg = {
            playerId: v.bulletObj.getBulletPlayerId(),
            bulletId: v.bulletObj.getBulletServeId(),
            fishId: v.fishObj.getObjectId(),
            fishConfigId: v.fishObj.getFishConfigId(),
          }
          this.send_yrby_ReqHit(msg)
          const battery = this.batteryManager.getBatteryByPlayerId(msg.playerId)
          battery.minusBulletNum()
        }
      }

      //代发子弹
      for (const m in this.insteadSendBulletPlayers) {
        const n = this.insteadSendBulletPlayers[m];
        if (n == null) continue;
        if (v.bulletObj.getBulletPlayerId() === n) {
          let msg = {
            playerId: v.bulletObj.getBulletPlayerId(),
            bulletId: v.bulletObj.getBulletServeId(),
            fishId: v.fishObj.getObjectId(),
            fishConfigId: v.fishObj.getFishConfigId(),
          }
          this.send_yrby_ReqHit(msg)
          break
        }
      }

      this.bulletManager.removeBulletObject(k)
    }
  }

  public setSendYrbyReqHit(send_yrby_ReqHit) {
    this.send_yrby_ReqHit = send_yrby_ReqHit;
  }

  private initUI() {
    this.send_yrby_ReqHit = (msg) => {
      !config.isTest && sktInstance.sendSktMessage(SKT_MAG_TYPE.HIT_FISH, msg);
    }
  }

  public fishDeath(player_id, fshid, score) {
    let bat_obj = this.batteryManager.getBatteryByPlayerId(player_id) as Battery
    let fsh_obj = this.fishManager.getFishObjById(fshid) as Fish

    if (bat_obj && fsh_obj) {
      fsh_obj.setScoreVal(score)
      fsh_obj.setGoldMoveEndPos(bat_obj.getBatteryPos())
      fsh_obj.setUserInfo(bat_obj.getUserInfo())
      // let pos = fsh_obj.getCurrentPos()
      // bat_obj.setHitScore(score)
    }
    this.fishManager.removeFish(fshid)
  }

  public fishLstDeath(player_id, lst) {
    if (lst.length <= 0) { return }
    let score = 0

    let fsh_id = -1
    for (let i = 0; i < lst.length; i++) {
      if (i === 0) {
        fsh_id = lst[i].fishId
      }

      if (i > 0) {
        let fsh_obj = this.fishManager.getFishObjById(lst[i].fishId) as Fish
        let first_obj = this.fishManager.getFishObjById(fsh_id) as Fish
        if (first_obj && fsh_obj) {
          first_obj.addLineRelObj(fsh_obj)
        }
        this.fishDeath(player_id, lst[i].fishId, lst[i].score)
      }
      score = score + lst[i].score
    }

    this.fishDeath(player_id, lst[0].fishId, lst[0].score)

    // if( BuyuManager.getRoomType() != GAME_TYPE_FRIENDROOM ){
    let bat_obj = this.batteryManager.getBatteryByPlayerId(player_id) as Battery;
    bat_obj.setHitScore(score)
    // }

    // print("get hit score ===== "  +  score)
  }

  protected unMountCallBack(): void {
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
    this.dispatch(quitGame(0));
  }

  public initRoomChooseNode() {
    if (this.roomChooseViewModel) return;
    this.roomChooseViewModel = new RoomChooseViewModel().mountView(this.sourceManage.getFile(PrefabPathDefine.ROOM_CHOOSE).source)
      .appendTo(this.comp.getRoomListNode()).connect();
    this.roomChooseViewModel.comp.setEvent({
      exitGame: () => {
        this.onExitGame();
      }
    })
  }

  private initRoomModel() {
    if (this.roomViewModel) {
      // this.roomViewModel.viewNode.setScale(this.getScaleRatio(), this.getScaleRatio())
      return
    }
    this.roomViewModel = new RoomViewModel(this.fishManager, this.bulletManager, this.batteryManager, this.backgroundSceneManager, this.skillPlayer, this.fishLabelFntManager)
      .mountView(this.sourceManage.getFile(PrefabPathDefine.GAME_ROOM).source)
      .appendTo(this.comp.getGameMainSenceNode()).connect();
    // this.roomViewModel.viewNode.getComponent(UITransform).width = fishCommondConfig.scene_size.width;
    // this.roomViewModel.viewNode.getComponent(UITransform).height = fishCommondConfig.scene_size.height;
    // this.roomViewModel.viewNode.setScale(this.getScaleRatio(), this.getScaleRatio())
    // this.roomViewModel.comp.setScale(this.getScaleRatio());
    this.roomViewModel.viewNode.active = false;
  }

  private onExitGame() {
    global.closeSubGame();
  }

  private getRootNode() {
    return this.viewNode;
  }

  /**获得炮台层 */
  private getBatteryNode() {
    return this.roomViewModel.comp.getBatteryNode();
  }

  /**获得鱼池层 */
  private getFishPondNode() {
    return this.roomViewModel.comp.getFishPondNode();
  }

  /**获得背景层 */
  public getBackgroundNode() {
    return this.roomViewModel.comp.getBackgroundNode();
  }

  public enterRoom() {
  }

  private listenerSocket() {
    sktMsgListener.add(SKT_MAG_TYPE.JOIN_ROOM, config.name, (data: EnterRoomVo, error: string) => {
      // data.members.forEach(v=>{
      //   this.roomViewModel.enterRoom('1', v)
      // })
      // this.backgroundSceneManager.cutBackgroundScene(0);
      this.roomViewModel.enterRoom(data)
    })
    sktMsgListener.add(SKT_MAG_TYPE.ERROR_MSG, config.name, (data: ErrorMsgVo, error: string) => {
      if (data.msgId === 32) {
        global.hallDispatch(addToastAction({ content: '余额低于下限', type: ToastType.NORMAL }))
      } else if (data.msgId === 33) {
        global.hallDispatch(addToastAction({ content: '余额超过上限', type: ToastType.NORMAL }))
      } else if (data.msgId === 100002) {
        global.hallDispatch(addToastAction({ content: '超过最大人数', type: ToastType.NORMAL }))
      }
    })
  }

  private unListenerSocket() {
    sktMsgListener.remove(SKT_MAG_TYPE.JOIN_ROOM, config.name)
    sktMsgListener.remove(SKT_MAG_TYPE.ERROR_MSG, config.name)
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
      }
    })
    return this
  }
}

export default MainViewModel