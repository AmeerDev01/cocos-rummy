import { Animation, AnimationClip, Node, Vec3 } from "cc"
import { createAnimationNode, createSpriteNode, getAnimation, toNodeSpaceAR } from "./FishTool"
import SourceManage from "../../base/SourceManage"
import { ActionEffectPlayer } from "./ActionEffectPlayer"
import { ICreateObj } from "./ObjectPool"

/**
  金币
 */
const sqrt = Math.sqrt
const pow = Math.pow

const fishGoldZOrder = 700000

export const FishGoldCreate: ICreateObj = {
  create: (info) => {
    return new FishGold();
  }
}

//////////////////////////////////////////////////////-

export class FishGold {
  public uiRoot: Node;

  private sourceManage: SourceManage;
  private fishGoldConfig;
  private textureConfig;
  private actionConfig;
  private commonConfig;
  private object_id;
  private data_config;
  private is_alive: boolean;
  private end_call;
  private end_pos: Vec3;
  private start_pos: Vec3;
  private spr_lst: Node[];
  private rootNode: Node;

  constructor() {
    this.uiRoot = new Node();
  }

  public init(info, sourceManage: SourceManage, fishGoldConfig, textureConfig, actionConfig, commonConfig, rootNode: Node) {
    this.sourceManage = sourceManage
    this.fishGoldConfig = fishGoldConfig
    this.textureConfig = textureConfig
    this.actionConfig = actionConfig
    this.commonConfig = commonConfig
    this.object_id = info.obj_id
    this.rootNode = rootNode
    this.data_config = this.fishGoldConfig[info.id]
    this.is_alive = false
    this.end_call = null
    this.end_pos = new Vec3();
    this.start_pos = new Vec3();

    this.spr_lst = []
    for (const i in this.data_config.view_inf) {
      const v = this.data_config.view_inf[i];
      let ani_cfg = textureConfig[v.src_id]
      this.spr_lst[i] = createAnimationNode(this.sourceManage, this.uiRoot, ani_cfg, false, false)
      this.spr_lst[i].setPosition(0, 0)
      this.spr_lst[i].active = (false)
    }

    this.uiRoot.active = false

    // this.uiRoot.setSiblingIndex(fishGoldZOrder)
  }

  public getDataId() {
    return this.data_config.id
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

  public getEndPos() {
    return this.end_pos
  }

  public play(spos, epos) {
    // this.uiRoot.setWorldPosition(new Vec3(spos.x, spos.y))
    this.uiRoot.setPosition(toNodeSpaceAR(this.rootNode, spos))
    this.uiRoot.active = (true)
    this.end_pos = epos
    this.start_pos = spos

    if (this.spr_lst[1] && this.spr_lst[2]) {
      this.spr_lst[1].active = (true)
      this.spr_lst[2].active = (false)

      const an = this.spr_lst[1].getComponent(Animation)
      an.play();

      an.on(Animation.EventType.FINISHED, () => {
        this.spr_lst[1].active = (false)
        this.spr_lst[2].active = (true)
        const an2 = this.spr_lst[2].getComponent(Animation);
        an2.defaultClip.wrapMode = AnimationClip.WrapMode.Loop;
        an2.play();
        an.off(Animation.EventType.FINISHED);

        ActionEffectPlayer.play(this.uiRoot, () => {
          if (this.end_call) {
            this.end_call(this)
          }
        }, this.actionConfig[this.data_config.view_inf[2].act_id])
      })
    }
  }

  public resumeOrgin() {
    // this.uiRoot.setWorldPosition(new Vec3(0, 0));
    this.uiRoot.setPosition(toNodeSpaceAR(this.rootNode, new Vec3(0, 0)))
    this.uiRoot.active = (false)
    this.end_pos = new Vec3()
    this.start_pos = new Vec3()
    this.end_call = null

    for (let i = 1; i <= this.data_config.view_inf.length; i++) {
      this.spr_lst[i].getComponent(Animation).stop();
      this.spr_lst[i].active = (false)
    }
    this.uiRoot.setSiblingIndex(this.uiRoot.parent.children.length)
  }

  public getEndMoveTime() {
    return (sqrt(pow(this.start_pos.x - this.end_pos.x, 2) + pow(this.start_pos.y - this.end_pos.y, 2)) / this.commonConfig.gold_move_v)
  }

  public getSize() {
    return this.data_config.size
  }

  public runLastEff() {
    if (this.spr_lst[3]) {
      this.spr_lst[1].active = (false)
      this.spr_lst[2].active = (false)
      this.spr_lst[3].active = (true)

      const an = this.spr_lst[3].getComponent(Animation)
      an.play();

      an.on(Animation.EventType.FINISHED, () => {
        this.resumeOrgin()
        this.setUseState(false)
        an.off(Animation.EventType.FINISHED);
      })
    }
  }
}


