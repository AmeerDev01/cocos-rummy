import { Vec3, view } from "cc";
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { BatteryManager } from "../../../common/fish/BatteryManager";
import { BulletManager } from "../../../common/fish/BulletManager";
import { FishManager } from "../../../common/fish/FishManager";
import { Fish_Room, IEvent, IProps } from "../components/Fish_Room"
import config from "../config";
import { SKT_MAG_TYPE, fishWebSocketDriver } from "../socketConnect";
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import { BatteryChangeVo, ChangeBatterySkinVo, ChipsChangeVo, EnterRoomVo, FireVo, FishDieInfo, FishInfo, HitFishVo, LockVo, MemInfo, OtherJoinRoomVo, Player, ProduceFishVo, ReadyVo, ResScenceVo, SeatInfo } from "../type";
import { BackgroundSceneManager } from "../../../common/fish/BackgroundSceneManager";
import { Battery, UserInfo } from "../../../common/fish/Battery";
import { Fish } from "../../../common/fish/Fish";
import { isSelf } from "../fishTool";
import { SkillPlayer } from "../../../common/fish/SkillPlayer";
import { FishLabelFntManager } from "../../../common/fish/FishLabelFntManager";

@StoreInject(getStore())
class RoomViewModel extends ViewModel<Fish_Room, IProps, IEvent> {

  private fishManager: FishManager;
  private bulletManager: BulletManager;
  private batteryManager: BatteryManager;
  private backgroundSceneManager: BackgroundSceneManager;
  private skillPlayer: SkillPlayer;
  private fishLabelFntManager: FishLabelFntManager;
  private roomId: string;
  private userInfos: UserInfo[];
  private isListenerWs = false;
  /**当前阶段 */
  private stage: number = 0;

  private is_use_rotation = false;

  constructor(fishManager: FishManager, bulletManager: BulletManager, batteryManager: BatteryManager, backgroundSceneManager: BackgroundSceneManager,
    skillPlayer: SkillPlayer, fishLabelFntManager: FishLabelFntManager) {
    super('Fish_Room')
    this.fishManager = fishManager
    this.bulletManager = bulletManager
    this.batteryManager = batteryManager
    this.backgroundSceneManager = backgroundSceneManager
    this.skillPlayer = skillPlayer
    this.fishLabelFntManager = fishLabelFntManager
  }
  protected begin() {
    this.initUI();
    this.listenerSocket();
    this.setEvent({
      setLockFisState: (isChecked: boolean) => {
        this.batteryManager.getMyselfBatteryObj().setLockFisState(isChecked)
      },
      setAutoFire: (isChecked) => {
        this.batteryManager.getMyselfBatteryObj().setFireState(isChecked)
      },
      exitRoom: () => {
        this.onExitRoom();
      },
    })
  }

  private unListenerSocket() {
    console.log("unListenerSocket ============= ", this.isListenerWs);
    if (!this.isListenerWs) return;
    fishWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.GENERATE_FISH, config.name)
    fishWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.SEND_BULLET, config.name)
    fishWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.HIT_FISH, config.name)
    fishWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.LOCK, config.name)
    fishWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.CANCEL_LOCK, config.name)
    fishWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.CHANGE_BATTERY, config.name)
    fishWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.CHIPS_CHANGE, config.name)
    fishWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.CHANGE_SCENCE, config.name)
    fishWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.CHANGE_BATTERY_SKIN, config.name)
    fishWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.REQ_SCENCE, config.name)
    fishWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.OTHER_JOIN_ROOM, config.name)
    fishWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.LEAVE_ROOM, config.name)
    fishWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.EXIT_TABLE, config.name)
  }

  private listenerSocket() {
    fishWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.GENERATE_FISH, config.name, (data: ProduceFishVo) => {
      this.addFish(data.fishs)
    })
    fishWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.SEND_BULLET, config.name, (data: FireVo) => {
      this.runSendBullet(data.playerId, data.angle, data.bulletId);
    })
    fishWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.HIT_FISH, config.name, (data: HitFishVo) => {
      this.fishLstDeath(data.playerId, data.dies)
    })
    fishWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.LOCK, config.name, (data: LockVo) => {
      this.lockFish(data.playerId, data.fishId);
    })
    fishWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.CANCEL_LOCK, config.name, (data: LockVo) => {
      this.unLockFish(data.playerId);
    })
    fishWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.CHANGE_BATTERY, config.name, (data: BatteryChangeVo) => {
      this.setBatteryBeishu(data.battery.playerId, data.battery.score, true, data.battery.power > 0)
    })
    fishWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.CHIPS_CHANGE, config.name, (data: ChipsChangeVo) => {
      this.updateScore(data.playerId, data.chips);
    })
    fishWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.CHANGE_SCENCE, config.name, (data) => {
      this.backgroundSceneManager.cutBackgroundScene(data.scene);
    })
    fishWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.CHANGE_BATTERY_SKIN, config.name, (data: ChangeBatterySkinVo) => {
      this.cutBattery(data.playerId, data.skin);
    })
    fishWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.REQ_SCENCE, config.name, (data: ResScenceVo) => {
      this.enterScene(data)
    })
    fishWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.OTHER_JOIN_ROOM, config.name, (data: OtherJoinRoomVo) => {
      this.otherJoinRoom(data);
    })
    fishWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.LEAVE_ROOM, config.name, (data) => {
      this.levelRoom(data.playerId);
    })
    fishWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.EXIT_TABLE, config.name, (data) => {
      this.levelRoom(data.playerId);
    })
    this.isListenerWs = true;
  }

  private enterScene(data: ResScenceVo) {
    data.batterys.forEach(v => {
      this.setBatteryInfo(v.playerId, v.score, v.skin, false, v.power > 0)
    })
    this.backgroundSceneManager.cutBackgroundScene(data.scenceId);
    this.addFish(data.fishs)

    this.comp.scheduleOnce(() => {
      this.batteryManager.seteAllUserUIHidden();
    }, 2);
  }

  private otherJoinRoom(data: OtherJoinRoomVo) {
    if (this.userInfos.find(v => v.player_id === data.seats.playerId)) {
      return;
    }
    const userInfo: UserInfo = {
      player_id: data.seats.playerId,
      server_id: 1,
      set_id: data.seats.order + 1,
      is_local: isSelf(data.seats.playerId),//是否为本地，区别自己与别人的炮台
      gold: data.seats.cedit,//金币
      head_id: parseInt(data.seats.icon),//头像
      level: data.seats.level || 100,//等级
      vip_level: data.seats.vip || 0,//vip等级
      nick_name: data.seats.nickName,//昵称
      battery_id: data.battery.skin,//炮id
      battery_score: data.battery.score,//炮分数
      isPowerBattery: data.battery.power > 0, //是否能量炮
      room_id: this.roomId,//房间号
      ready: data.seats.ready, //0:准备,1未准备
      offline: data.seats.offline, //0:没有离线,非0:离线
      bullet: data.seats.bullet, //剩余子弹  
    }

    this.userInfos.push(userInfo);
    this.setBatteryInfo(data.seats.playerId, data.battery.score, data.battery.skin, false, data.battery.power > 0);
  }

  private levelRoom(playerId: string) {
    if (isSelf(playerId)) {
      
    } else {
      this.batteryManager.removeBatteryByPlayerId(playerId);
      this.bulletManager.removeBulletObjectByPlayerId(playerId);
      this.userInfos = this.userInfos.filter(v => v.player_id !== playerId);
    }
  }

  private updateScore(playerId: string, score: number) {
    const battery = this.batteryManager.getBatteryByPlayerId(playerId);
    if (battery) {
      battery.setScoreVal(score)
    } else {
      const userInfo = this.userInfos.find(v => v.player_id === playerId)
      if (userInfo) {
        userInfo.gold = score;
      }
    }
  }

  private runSendBullet(player_id: string, angle: number, bulletId: number) {
    let obj = this.batteryManager.getBatteryByPlayerId(player_id)
    if (obj) {
      obj.runSendBullet(angle, true, bulletId)
    }
  }


  private addFish(fishs: FishInfo[]) {
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
        user_info: {},
      })
    })
  }

  private fishDeath(player_id, fshid, score) {
    let bat_obj = this.batteryManager.getBatteryByPlayerId(player_id) as Battery
    let fsh_obj = this.fishManager.getFishObjById(fshid) as Fish

    if (bat_obj && fsh_obj) {
      fsh_obj.setScoreVal(score)
      fsh_obj.setGoldMoveEndPos(bat_obj.getBatteryPos())
      fsh_obj.setUserInfo(bat_obj.getUserInfo())
    }
    this.fishManager.removeFish(fshid)
  }

  private fishLstDeath(player_id, lst: FishDieInfo[]) {
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

  public enterRoom(data: EnterRoomVo) {
    this.viewNode.active = true;
    this.comp.initSideBoard();
    this.comp.getBatteryNode().angle = 0;
    this.comp.getFishPondNode().angle = 0;
    this.createAllBatteryByPosition();

    let selfUserInfo: UserInfo = null;
    this.userInfos = data.seats.map(v => {
      const userInfo: UserInfo = {
        player_id: v.playerId,
        server_id: 1,
        set_id: v.order + 1,
        is_local: isSelf(v.playerId),//是否为本地，区别自己与别人的炮台
        gold: v.cedit,//金币
        head_id: parseInt(v.icon),//头像
        level: v.level || 100,//等级
        vip_level: v.vip || 0,//vip等级
        nick_name: v.nickName,//昵称
        battery_id: undefined,//炮id
        battery_score: 0,//炮分数
        isPowerBattery: false, //是否能量炮
        room_id: data.roomId,//房间号
        ready: v.ready, //0:准备,1未准备
        offline: v.offline, //0:没有离线,非0:离线
        bullet: v.bullet, //剩余子弹  
      }
      userInfo.is_local && (selfUserInfo = userInfo);
      return userInfo;
    });
    this.stage = data.stage;
    this.roomId = data.roomId;

    if (selfUserInfo.set_id === 3 || selfUserInfo.set_id === 4) {
      this.fishManager.setUseSkew(true);
      this.skillPlayer.setUseSkew(true);
      this.batteryManager.rotationOtherUserInfo();
      this.fishLabelFntManager.setUseSkew(true)
      this.comp.getBatteryNode().angle = 180;
      this.comp.getFishPondNode().angle = 180;
      this.is_use_rotation = true;
    } else {
      this.fishManager.setUseSkew(false);
      this.skillPlayer.setUseSkew(false);
      // this.batteryManager.resetRotation();
      this.fishLabelFntManager.setUseSkew(false)
      this.comp.getBatteryNode().angle = 0;
      this.comp.getFishPondNode().angle = 0;
      this.is_use_rotation = false;
    }

    !config.isTest && fishWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.REQ_SCENCE, {});
    // if (this.stage === 1) {
    // } else {
    //   this.backgroundSceneManager.cutBackgroundScene(1);
    //   if (this.seats.find(v => v.playerId + '' === config.selfUserId).ready !== 0) {
    //     fishWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.READY, {});
    //   }
    // }
  }

  private setBatteryInfo(player_id: string, score: number, skin: number, isEff: boolean, isPower: boolean) {
    const userInfo = this.userInfos.find(v => v.player_id === player_id)
    this.batteryManager.setPos();
    const res = this.batteryManager.setBatteryInfo({
      user_info: {
        ...userInfo,
        battery_id: skin,//炮id
        battery_score: score,//炮分数
        isPowerBattery: isPower, //是否能量炮
      },
    })
    this.comp.setBtnLocaltion(this.fishManager.getScaleRatio());
  }

  private setBatteryBeishu(playerId: string, score: number, isEff: boolean, isPower: boolean) {
    const battery = this.batteryManager.getBatteryByPlayerId(playerId);
    if (battery) {
      battery.setBatteryBeishu(score, isEff);
      battery.setPowerBattery(isPower)
    }
  }

  private cutBattery(playerId: string, skin: number) {
    const battery = this.batteryManager.getBatteryByPlayerId(playerId);
    if (battery) {
      battery.cutBattery(skin);
    }
  }

  private lockFish(playerId: string, fishId: number) {
    const battery = this.batteryManager.getBatteryByPlayerId(playerId);
    if (battery) {
      battery.setLockFish(fishId)
    }
  }
  private unLockFish(playerId: string) {
    const battery = this.batteryManager.getBatteryByPlayerId(playerId);
    if (battery) {
      battery.setUnlockFish();
    }
  }

  protected unMountCallBack(): void {
    this.unListenerSocket();
    this.fishManager = null;
    this.bulletManager = null;
    this.batteryManager = null;
    this.backgroundSceneManager = null;
  }

  public clearAllFish() {
    this.fishManager.clearAllSceneAllFish();
    this.fishManager.clearFishCacheData();
    this.comp.getFishPondNode().removeAllChildren();
  }

  private onExitRoom() {
    this.clearAllFish();
    this.comp.hideSideBoard();
    this.viewNode.active = false;

    fishWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.EXIT_TABLE, {});
    this.backgroundSceneManager.quitRoom();
    this.batteryManager.removeAllBattery();
  }

  private initUI() {

  }

  private createAllBatteryByPosition() {
    this.batteryManager.createAllBatteryByPosition({
      lock: this.send_yrby_ReqLock.bind(this),
      fire: this.send_yrby_ReqFire.bind(this),
      cancelLock: this.send_yrby_ReqCancelLock.bind(this),
      switchBattery: this.send_yrby_ReqSwitchBattery.bind(this),
    }, {
      wepShow: {},
      dataManager: {
        getRoomType: () => { return 1 },
        getRoomInfo: (param) => {
          return {
            lower: 10,
          }
        }
      },
      noMoney: {},
    })
  }

  private changeScence(scenceId: number) {

  }

  private send_yrby_ReqFire(msg) {
    !config.isTest && fishWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.SEND_BULLET, msg);
  }

  private send_yrby_ReqLock(msg) {
    fishWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.LOCK, msg);
  }

  private send_yrby_ReqCancelLock(msg) {
    fishWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.CANCEL_LOCK, msg);
  }

  private send_yrby_ReqSwitchBattery(msg) {
    fishWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.CHANGE_BATTERY, msg);
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
      }
    })
    return this
  }
}

export default RoomViewModel