import { Battery } from "./Battery"
import { BatteryManager } from "./BatteryManager"
import { Bullet } from "./Bullet"
import { BulletManager } from "./BulletManager"
import { Fish } from "./Fish"
import { FishManager } from "./FishManager"

export type ShotInfo = {
  bulletObj: Bullet,
  fishObj: Fish
}

/**
  对象作用世界，碰撞
 */

//////////////////////////////////////////
export class ObjectEffectWorld {

  private bulletManager: BulletManager
  private batteryManager: BatteryManager
  private fishManager: FishManager
  private shotCallback = null
  constructor(bulletManager: BulletManager, batteryManager: BatteryManager, fishManager: FishManager) {
    this.bulletManager = bulletManager
    this.batteryManager = batteryManager
    this.fishManager = fishManager
  }

  public init() {
    this.shotCallback = null
  }

  public uninit() {
    this.shotCallback = null
  }

  public registerCallback(func) {
    this.shotCallback = func
  }

  public update() {
    let shotLst = {}
    let bullets = this.bulletManager.getBulletBondingInfoLst()
    for (const k in bullets) {
      const v = bullets[k];
      if (v === null) continue;
      let battery = this.batteryManager.getBatteryByPlayerId(v.player_id) as Battery;
      if (battery) {
        const bullet = v.bullet as Bullet;
        const lockFishID = battery.getLockFishId()
        const lockFish = this.fishManager.getFishObjById(lockFishID) as Fish

        // console.log(`lockFishID = ${lockFishID}, bulletLockFishID = ${bullet.getCurLockFishId()}`);
        if (lockFish && bullet.getCurLockFishId() === lockFishID) { //锁定
          if (lockFish.isShotFish(v.bbx) === true) {
            shotLst[k] = { bulletObj: bullet, fishObj: lockFish }
            lockFish.showFishEff()
          }
        } else { //没有锁定
          const fish = this.fishManager.shotFish(v.bbx) as Fish
          if (fish) {
            shotLst[k] = { bulletObj: bullet, fishObj: fish }
            fish.showFishEff()
          }
        }
      }
    }
    this.shotCallback(shotLst)
  }
}


