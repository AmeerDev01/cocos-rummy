/**
  鱼网管理
 */

import { FishNet } from "./FishNet";
import { ObjectClassType, ObjectPool } from "./ObjectPool"

////////////////////////////////////////-
export class FishNetManager {
  private objectPool: ObjectPool;
  constructor(objectPool: ObjectPool) {
    this.objectPool = objectPool;
  }
  public fnmOnPlayEndCall(obj) {
    if (obj) {
      obj.setUseState(false)
      obj.active = (false)
    }
  }

  public uninit() {
    this.objectPool = null;
  }

  /**
  info = [pos, id]
   */
  public play(info) {
    let fnObj = this.objectPool.getObject(ObjectClassType.type_fish_net, info.id) as FishNet
    if (fnObj) {
      fnObj.setUseState(true)
      fnObj.setPlayEndCall(this.fnmOnPlayEndCall)
      fnObj.play(info.pos)
    }
  }
}


