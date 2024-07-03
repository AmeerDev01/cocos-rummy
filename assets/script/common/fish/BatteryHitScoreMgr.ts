import { Node, Vec3 } from "cc";
import SourceManage from "../../base/SourceManage"
import { BatteryHitScore } from "./BatteryHitScore";

/**
  打中分数管理
 */
export class BatteryHitScoreMgr {
  private sourceManage: SourceManage;
  private parent: Node;
  private labConfig;
  private fntConfig;
  private objLst: BatteryHitScore[];
  private rootNode: Node;

  constructor(sourceManage: SourceManage, parent, labConfig, fntConfig, rootNode: Node) {
    this.sourceManage = sourceManage;
    this.objLst = []
    this.parent = parent
    this.labConfig = labConfig
    this.fntConfig = fntConfig
    this.rootNode = rootNode
  }

  public newSomeObject() {
    for (const k in this.labConfig) {
      const v = this.labConfig[k];
      if (v === null) continue;
      for (let i = 0; i < 5; i++) {
        let obj = new BatteryHitScore(this.sourceManage, this.parent, this.fntConfig[v.src_id], v.id, this.rootNode)
        this.objLst.push(obj)
      }
    }
  }

  public clear() {
    this.objLst.forEach(v => {
      v.destory();
    })
    this.objLst = [];
  }

  public show(pos: Vec3, rot: number, score: number, id: number, call) {
    let show_obj: BatteryHitScore = null

    for (let i = 0; i < this.objLst.length; i++) {
      const v = this.objLst[i];
      if (v.getUseState() === false && v.getId() === id) {
        show_obj = v
        break
      }
    }

    if (!show_obj) {
      show_obj = new BatteryHitScore(this.sourceManage, this.parent, this.fntConfig[this.labConfig[id].src_id], id, this.rootNode)
      this.objLst.push(show_obj)
    }
    show_obj.show(pos, rot, score, call)
  }

}

