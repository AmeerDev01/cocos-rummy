import { Component, Node, Vec3, sp } from "cc";
import { createSkeleton, toNodeSpaceAR } from "./FishTool";
import SourceManage from "../../base/SourceManage";
import { ICreateObj } from "./ObjectPool";


/**
  鱼网
 */
const fishNetZOrder = 900000

export const FishNetCreate: ICreateObj = {
  create: (info) => {
    return new FishNet();
  }
}

//////////////////////////////////////////////-

export class FishNet {
  private fishNetConfig;
  private sourceManage: SourceManage;
  private fshn_cfg;
  private object_id;
  private is_alive: boolean;
  private end_call;
  private net_obj: Node;
  public uiRoot: Node;
  private rootNode: Node;

  constructor() {
    this.uiRoot = new Node();
  }

  public init(info, fnConfig, sourceManage: SourceManage, rootNode: Node) {
    this.rootNode = rootNode
    this.fishNetConfig = fnConfig
    this.sourceManage = sourceManage;
    this.fshn_cfg = this.fishNetConfig[info.id]
    this.object_id = info.obj_id
    this.is_alive = false
    this.end_call = null

    this.net_obj = createSkeleton(this.sourceManage, this.uiRoot, this.fshn_cfg.src);
    this.net_obj.setPosition(0, 0)
    this.uiRoot.addChild(this.net_obj)
    this.net_obj.active = (true)

    this.uiRoot.setPosition(0, 0)
    this.uiRoot.active = (false)

    this.uiRoot.setSiblingIndex(fishNetZOrder)
  }

  public getDataId() {
    return this.fshn_cfg.id
  }

  public getObjectId() {
    return this.object_id
  }

  public setUseState(buse) {
    this.is_alive = buse
  }

  public getUseState() {
    return this.is_alive
  }

  //call(obj)
  public setPlayEndCall(call) {
    this.end_call = call
  }

  public play(pos) {
    // this.uiRoot.setWorldPosition(new Vec3(pos.x, pos.y))
    this.uiRoot.setPosition(toNodeSpaceAR(this.rootNode, pos))
    this.uiRoot.active = true

    const sk = this.net_obj.getComponent(sp.Skeleton)
    sk.setAnimation(0, this.fshn_cfg.ani, false)
    sk.setCompleteListener(() => {
      this.end_call && this.end_call(this);
    })
  }
}


// /**
// 	info = [obj_id, id,]
//  */
// public create(info) {
//   let obj = FishNet.new()
//   if (obj) {
//     obj.init(info)
//   }

//   return obj
// }

