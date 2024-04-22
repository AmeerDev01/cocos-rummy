/**
  金钱字体对象管理
 */

import { Node } from "cc";
import { FishLabelFnt } from "./FishLabelFnt";
import { ObjectClassType, ObjectPool } from "./ObjectPool"


////////////////////////////////////////-
export class FishLabelFntManager {
  private showAddScoreList: FishLabelFnt[] = null
  private bUseRotation = false
  private objectPool: ObjectPool;
  private rootNode: Node;
  constructor(objectPool: ObjectPool) {
    this.objectPool = objectPool
  }

  public flfmOnEndCall(obj: FishLabelFnt) {
    if (obj) {
      obj.setUseState(false)
      obj.resumeOrgin()
    }
  }

  public getRootNode() {
    return this.rootNode
  }

  public init(rootNode: Node) {
    this.rootNode = rootNode;
    this.showAddScoreList = []
  }

  public uninit() {
    this.showAddScoreList = null
    this.bUseRotation = false
  }

  public setUseSkew(buse) {
    this.bUseRotation = buse
  }

  public getUseSkew() {
    return this.bUseRotation
  }

  public pushShowAddScore(obj: FishLabelFnt) {
    if (obj) {
      this.showAddScoreList.push(obj)
    }
  }

  public play(spos, number: number, id, mul) {
    let fObj = this.objectPool.getObject(ObjectClassType.type_fish_fnt, id) as FishLabelFnt
    if (fObj) {
      fObj.setUseState(true)
      fObj.setEndCallback(this.flfmOnEndCall)
      fObj.play(spos, number, mul)
    }
  }

  public update(dt) {
    this.showAddScoreList.forEach(v => v.update(dt));
    this.showAddScoreList = this.showAddScoreList.filter(v => v.getAddScoreState());
  }
}



