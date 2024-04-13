/**
  子弹对象管理
 */

import SourceManage from "../../base/SourceManage"
import { BatteryManager } from "./BatteryManager"
import { Bullet } from "./Bullet"
import { ObjectClassType, ObjectPool } from "./ObjectPool"

//////////////////////////////////////////////////////-
export class BulletManager {
  // config
  private bulletConfig = null

  // member
  private bulletBondingSize = null
  private aliveBulletObjectList: Bullet[] = []
  private aliveBulletBBXList = {}

  private objectPool: ObjectPool;
  private sourceManage: SourceManage;
  private batteryManager: BatteryManager;
  /**缩放比例 */
  private scaleRatio: number = 1;

  /**
   * 初始化
   * @param bondSize 子弹绑定尺寸
   * @param bulConfig 子弹配置
   * @param objectPool 对象池
   * @param sourceManage 资源管理
   * @param batteryManager 炮台管理
   */
  public init(bondSize, bulConfig, objectPool: ObjectPool, sourceManage: SourceManage, batteryManager: BatteryManager, scaleRatio: number = 1) {
    this.bulletConfig = bulConfig
    this.bulletBondingSize = bondSize
    this.objectPool = objectPool
    this.sourceManage = sourceManage
    this.batteryManager = batteryManager
    this.scaleRatio = scaleRatio

    this.aliveBulletObjectList = []
    this.aliveBulletBBXList = {}
  }

  public uninit() {
    this.bulletConfig = null
    this.bulletBondingSize = null
    this.aliveBulletObjectList = null
    this.aliveBulletBBXList = null
    this.objectPool = null
    this.sourceManage = null
    this.batteryManager = null
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
  public sendBullet(bulletID, startPos, angle, side, playerID, serverID, lockFishID, isLocal) {
    let obj: Bullet = this.objectPool.getObject(ObjectClassType.type_bullet, bulletID)
    if (obj) {
      obj.reset(startPos, angle, lockFishID, playerID, serverID, isLocal)
      this.aliveBulletObjectList[obj.getObjectId()] = obj
      this.aliveBulletBBXList[obj.getObjectId()] = { player_id: playerID, bbx: obj.getBondingBox(), bullet: obj }
    }
  }

  public update(dt) {
    for (let k = 0; k < this.aliveBulletObjectList.length; k++) {
      const v = this.aliveBulletObjectList[k];
      if (v == null) continue;
      v.update(dt)
      this.aliveBulletBBXList[k].bbx = v.getBondingBox()
    }
  }
  public getBulletAliveLst() {
    return this.aliveBulletObjectList
  }
  public getBulletBondingInfoLst() {
    return this.aliveBulletBBXList
  }

  public removeBulletObject(objID) {
    let obj = this.aliveBulletObjectList[objID]
    if (obj) {
      obj.shotSomething()
      obj.resumeOrgin()
      this.aliveBulletObjectList[objID] = null
      this.aliveBulletBBXList[objID] = null
    }
  }

  public removeBulletObjectByPlayerId(playerID) {
    for (let k = 0; k < this.aliveBulletObjectList.length; k++) {
      const v = this.aliveBulletObjectList[k];
      if (v == null) continue;
      if (playerID == v.getBulletPlayerId()) {
        v.resumeOrgin()
        this.aliveBulletObjectList[k] = null
        this.aliveBulletBBXList[k] = null
      }
    }
  }

  public getBulletBBX(objID) {
    return this.aliveBulletBBXList[objID]
  }

}


