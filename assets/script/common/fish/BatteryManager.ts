import { EventTouch, Node, UITransform, Vec3, Widget } from "cc"
import SourceManage from "../../base/SourceManage"
import { Battery } from "./Battery"
import { FishManager } from "./FishManager"
import { BulletManager } from "./BulletManager"
import { getFileName, toNodeSpaceAR } from "./FishTool"
import { BackgroundSceneManager } from "./BackgroundSceneManager"
import { MusicEffectPlayer } from "./MusicEffectPlayer"

////////////////////////////////////////////////////////////////////////////////

export class BatteryManager {
  // config
  public batteryPositionConfig = []
  public textureConfig = null
  public commonConfig = null
  public batteryConfig = null
  public batterySkinConfig = null
  public batteryScoreConfig = null
  public fntScoreConfig = null

  // member
  public objectListSet = {}
  public objectList: Map<String, Battery> = new Map();
  public batteryParent: Node
  public uiCreaterList = []
  public controlCallback
  public sourceManage: SourceManage
  public fishManager: FishManager
  private bulletManager: BulletManager;
  private backgroundSceneManager: BackgroundSceneManager;
  private musicEffectPlayer: MusicEffectPlayer;
  /**缩放比例 */
  private scaleRatio: number = 1;

  private rootNode: Node;

  private bulletServerID = 0;
  public getBulletID() {
    return ++this.bulletServerID;
  }

  public resumeBulletID = () => {
    this.bulletServerID = 0
  }


  public init(parent: Node, rootNode: Node, posConfig, tConfig, cConfig, bConfig, bsConfig, scoreConfig, fntConfig, sourceManage: SourceManage,
    bulletManager: BulletManager, fishManager: FishManager, backgroundSceneManager: BackgroundSceneManager, musicEffectPlayer: MusicEffectPlayer,
    scaleRatio: number) {
    this.batteryPositionConfig = posConfig
    this.textureConfig = tConfig
    this.commonConfig = cConfig
    this.batteryConfig = bConfig
    this.batterySkinConfig = bsConfig
    this.batteryScoreConfig = scoreConfig
    this.fntScoreConfig = fntConfig

    this.objectListSet = {}
    this.objectList.clear();
    this.uiCreaterList = []
    this.batteryParent = parent
    this.rootNode = rootNode
    this.sourceManage = sourceManage
    this.bulletManager = bulletManager
    this.fishManager = fishManager
    this.backgroundSceneManager = backgroundSceneManager
    this.musicEffectPlayer = musicEffectPlayer
    this.scaleRatio = scaleRatio

    for (const k in this.batteryPositionConfig) {
      const v = this.batteryPositionConfig[k].prefab;
      this.uiCreaterList.push(this.sourceManage.getFile(getFileName(v)).source);
    }
    this.resumeBulletID();
    this.registerTouch();
  }

  public getRootNode() {
    return this.rootNode
  }

  public getBackgroundSceneManager() {
    return this.backgroundSceneManager
  }

  public uninit() {
    this.batteryPositionConfig = null
    this.textureConfig = null
    this.commonConfig = null
    this.batteryConfig = null
    this.batterySkinConfig = null
    this.batteryScoreConfig = null
    this.fntScoreConfig = null

    this.objectListSet = null
    this.objectList = null
    this.batteryParent = null
    this.uiCreaterList = null
    this.controlCallback = null
    this.sourceManage = null
    this.fishManager = null
    this.bulletManager = null

    this.resumeBulletID();
  }

  /**
  * @param sendFuncs 发送消息函数
  * @param sceneParam 场景参数
  */
  public createAllBatteryByPosition(sendFuncs, sceneParam) {
    let i = 1;
    for (const k in this.batteryPositionConfig) {
      const v = this.batteryPositionConfig[k];
      let ui = this.uiCreaterList[i - 1]
      if (ui !== null) {
        let node = new Node();
        node.name = "barrery" + i;
        const uit = node.addComponent(UITransform)
        let obj = node.addComponent(Battery);
        this.batteryParent.addChild(node)
        obj.create(ui, this.textureConfig, this.commonConfig, this.batteryConfig, this.batterySkinConfig, this.batteryScoreConfig,
          this.fntScoreConfig, sendFuncs, sceneParam, this.sourceManage, this.fishManager, this.bulletManager, this,
          this.backgroundSceneManager, this.musicEffectPlayer)
        const pos = new Vec3(v.pos.x, v.pos.y).multiplyScalar(this.scaleRatio);
        obj.node.setPosition(toNodeSpaceAR(this.batteryParent, pos))
        const widget = node.addComponent(Widget)
        if (i === 1 || i === 2) {
          widget.isAlignBottom = true;
          widget.bottom = v.pos.y;
          uit.setAnchorPoint(0.5, 0)
        } else {
          widget.isAlignTop = true;
          widget.top = v.pos.y;
          uit.setAnchorPoint(0.5, 1)
        }

        this.objectListSet[i] = obj
      }
      i++;
    }
    console.log("create all battery object information  +  +  +  +  +  +  +  +  +  +  +  +  +  +  +  +  + ")
  }

  public setPos() {
    // let i = 1;
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
  public setBatteryInfo(info) {
    if (!this.objectList.has(info.user_info.player_id)) {
      let batteryObj = this.objectListSet[info.user_info.set_id] as Battery
      if (batteryObj) {
        let pinfo = this.batteryPositionConfig[info.user_info.set_id]
        const pos = new Vec3(pinfo.pos.x, pinfo.pos.y).multiplyScalar(this.scaleRatio);
        let linfo = {
          config_id: pinfo.batt_cfg_id,
          user_info: info.user_info,
          side: pinfo.side,
          local_pos: pos,
        }
        this.objectList.set(info.user_info.player_id, batteryObj);
        batteryObj.setBatteryInfo(linfo, this.batteryParent);
      }
      return true;
    }
    return false;
  }

  public rotationOtherUserInfo() {
    for (const i in this.objectListSet) {
      const v = this.objectListSet[i] as Battery;
      v.rotationInformation(i)
    }
  }

  public resetRotation() {
    for (const i in this.objectListSet) {
      const v = this.objectListSet[i] as Battery;
      v.resetRotation()
    }
  }

  public removeBatteryByPlayerId(playerID) {
    let batteryObj = this.objectList.get(playerID) as Battery;
    if (batteryObj) {
      batteryObj.resumeBatteryState()
    }
    this.objectList.delete(playerID);
  }

  public getBatteryByPlayerId(playerID) {
    return this.objectList.get(playerID) as Battery
  }

  public update(dt) {
    // for (const k in this.objectList) {
    //   const v = this.objectList[k];
    //   if (!v) continue;
    //   v.update(dt)
    // }
  }

  /**获得自己位置的炮台 */
  public getMyselfBatteryObj(): Battery {
    let myBattery = null;
    this.objectList.forEach((v, k) => {
      if (v.isMyBattery()) {
        myBattery = v;
      }
    })
    return myBattery
  }

  public clearAllLockState() {
    this.objectList.forEach((v, k) => {
      v.unLockFish();
    })
  }

  public setControlCall(call) {
    this.controlCallback = call
  }

  public callControl() {
    if (this.controlCallback) {
      this.controlCallback()
    }
  }

  public getParentObj() {
    return this.batteryParent
  }

  public seteAllUserUIHidden() {
    this.objectList.forEach((v, k) => {
      v.setUserUIHidden();
    })
  }

  public setStartGame() {
    for (const i in this.objectListSet) {
      const v = this.objectListSet[i] as Battery;
      if (!v) continue;
      v.setStartGame()
    }
  }

  public removeAllBattery() {
    for (const i in this.objectListSet) {
      const v = this.objectListSet[i] as Battery;
      v.node.destroy();
    }

    this.objectListSet = {};
    this.objectList.clear();
  }

  private registerTouch() {
    this.batteryParent.on(Node.EventType.TOUCH_START, (e: EventTouch) => {
      const myBattery = this.getMyselfBatteryObj();
      myBattery && myBattery.onTouchBegan(e);
    });
    this.batteryParent.on(Node.EventType.TOUCH_MOVE, (e: EventTouch) => {
      const myBattery = this.getMyselfBatteryObj();
      myBattery && myBattery.onTouchMoved(e);
    });
    this.batteryParent.on(Node.EventType.TOUCH_END, (e: EventTouch) => {
      const myBattery = this.getMyselfBatteryObj();
      myBattery && myBattery.onTouchEnded(e);
    });
  }
}


