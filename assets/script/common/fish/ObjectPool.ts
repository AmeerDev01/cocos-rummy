/**
  对象池
 */

import { Node } from "cc";
import { Bullet } from "./Bullet";
import { BatteryManager } from "./BatteryManager";
import SourceManage from "../../base/SourceManage";
import { FishNet } from "./FishNet";
import { FishNetManager } from "./FishNetManager";
import { FishGold } from "./FishGold";
import { FishLabelFntManager } from "./FishLabelFntManager";
import { FishLabelFnt } from "./FishLabelFnt";

//对象类型
export const ObjectClassType = {
  type_fish: 1,//鱼
  type_bullet: 2,//子弹
  type_fish_net: 3,//鱼网
  type_fish_gold: 4,//金币
  type_fish_fnt: 5,//鱼字体
}

export interface ICreateObj {
  create(info);
}

type ObjectClass = {
  object_id: number,
  creater: ICreateObj,
  object_lst: any
}

//////////////////////////////////////-
export class ObjectPool {
  private defaultNewObjectNum = 5
  private objectClassList: ObjectClass[] = []
  private objectParent: Node = null

  private bulletConfig;
  private batteryConfig;
  private commonConfig;
  private fishConfig;
  private textureConfig;
  private fishHitLabelConfig;
  private fishLabelFntConfig;
  private fishFntResConfig;
  private fishNetConfig;
  private fishGoldConfig;
  private activeConfig;
  private batteryManager: BatteryManager;
  private sourceManage: SourceManage;
  private fishNetManager: FishNetManager;
  private fishLabelFntManager: FishLabelFntManager;
  /**缩放比例 */
  private scaleRatio: number = 1;
  private rootNode: Node;

  public initConfig(bulletConfig, batteryConfig, commonConfig, fishConfig, textureConfig,
    fishHitLabelConfig, fishLabelFntConfig, fishNetConfig, fishGoldConfig, activeConfig, fishFntResConfig,
    batteryManager: BatteryManager, sourceManage: SourceManage, scaleRatio: number = 1, rootNode: Node) {
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

  public setFishNetManager(fishNetManager: FishNetManager) {
    this.fishNetManager = fishNetManager;
  }

  public setFishLabelFntManager(fishLabelFntManager: FishLabelFntManager) {
    this.fishLabelFntManager = fishLabelFntManager
  }

  public init(parent: Node) {
    this.objectClassList = []
    this.objectParent = parent
    for (const k in ObjectClassType) {
      const v = ObjectClassType[k];
      if (!v) continue;
      this.objectClassList[v] = {
        object_id: 0,
        creater: null,
        object_lst: {},
      }
    }
  }

  public uninit() {
    this.objectClassList = null
    this.objectParent = null
    this.bulletConfig = null
    this.batteryConfig = null
    this.commonConfig = null
    this.fishConfig = null
    this.textureConfig = null
    this.fishHitLabelConfig = null
    this.fishLabelFntConfig = null
    this.fishNetConfig = null
    this.batteryManager = null
    this.sourceManage = null
    this.fishNetManager = null
  }

  public registerObjectCreater(cType, creater) {
    let item = this.objectClassList[cType]
    if (item) {
      item.creater = creater
    }
  }

  public newSomeObject(cType, dataID, number: number) {
    let cItem = this.objectClassList[cType]
    if (cItem && cItem.creater) {
      for (let i = 1; i <= number; i++) {
        cItem.object_id = cItem.object_id + 1
        let info = { obj_id: cItem.object_id, id: dataID, }

        let creater = cItem.creater
        let newObj = creater.create(info)
        if (cType === ObjectClassType.type_bullet) {
          let bullet: Bullet = newObj as Bullet;
          bullet.initEnv(this.bulletConfig, this.commonConfig.bonding_size, this.batteryManager, this.sourceManage, this.fishNetManager, this.scaleRatio)
          bullet.init(info);
          this.objectParent.addChild(bullet.uiRoot)
          bullet.uiRoot.setPosition(0, 0)
        } else {
          if (ObjectClassType.type_fish_net === cType) {
            let fishNet: FishNet = newObj as FishNet;
            fishNet.init(info, this.fishNetConfig, this.sourceManage, this.rootNode);
          } else if (ObjectClassType.type_fish_gold === cType) {
            let fishGold: FishGold = newObj as FishGold;
            fishGold.init(info, this.sourceManage, this.fishGoldConfig, this.textureConfig, this.activeConfig, this.commonConfig, this.rootNode);
          } else if (ObjectClassType.type_fish_fnt === cType) {
            let fishLabelFnt: FishLabelFnt = newObj as FishLabelFnt;
            fishLabelFnt.init(info, this.sourceManage, this.fishLabelFntManager, this.fishLabelFntConfig, this.fishFntResConfig, this.activeConfig, 
              this.commonConfig, this.rootNode);
          }
          this.objectParent.addChild(newObj.uiRoot)
          // this.objectParent.setPosition(0, 0)
        }

        cItem.object_lst[cItem.object_id] = newObj
      }
    }
  }

  public getObject(cType, dataID) {
    let obj = null
    let cItem = this.objectClassList[cType]
    if (cItem) {
      for (const k in cItem.object_lst) {
        const v = cItem.object_lst[k];
        if (!v) continue;
        let buse = v.getUseState()
        let dID = v.getDataId()

        if (buse === false && dID === dataID) {
          obj = v
          break
        }
      }
    }

    if (!obj) {
      this.newSomeObject(cType, dataID, this.defaultNewObjectNum)
      cItem = this.objectClassList[cType]
      obj = cItem.object_lst[cItem.object_id]
    }

    return obj
  }
}



