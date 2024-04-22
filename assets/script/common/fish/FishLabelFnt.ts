import { Label, Node, Vec3 } from "cc"
import { ActionEffectPlayer } from "./ActionEffectPlayer"
import { ICreateObj } from "./ObjectPool";
import { FishLabelFntManager } from "./FishLabelFntManager";
import { createFont, toNodeSpaceAR } from "./FishTool";
import SourceManage from "../../base/SourceManage";

/**
  金钱显示字体
 */
const fishLabelFntZorder = 800000

/**
  info = {
    obj_id,
    id,
  }
 */
export const FishLabelFntCreate: ICreateObj = {
  create: (info) => {
    return new FishLabelFnt();
  }
}

export class FishLabelFnt {
  private fishLabelConfig = null
  private fishLabelResConfig = null
  private actionConfig = null
  private commonConfig = null
  private object_id = null
  private item_config = null
  private is_alive: boolean
  private end_call = null

  public uiRoot: Node;
  private label: Label;
  private total_gold: number;
  private add_step: number;
  private cur_add_time: number;
  private buse_add_score: boolean;
  private fishLabelFntManager: FishLabelFntManager
  private sourceManage: SourceManage;
  private rootNode: Node;

  constructor() {
    this.uiRoot = new Node();
    this.label = this.uiRoot.addComponent(Label)
  }

  public init(info, sourceManage: SourceManage, fishLabelFntManager: FishLabelFntManager, fishLabelConfig, fishLabelResConfig, actionConfig,
    commonConfig, rootNode: Node) {
    this.sourceManage = sourceManage;
    this.fishLabelConfig = fishLabelConfig;
    this.fishLabelResConfig = fishLabelResConfig;
    this.fishLabelFntManager = fishLabelFntManager;
    this.actionConfig = actionConfig;
    this.commonConfig = commonConfig;
    this.rootNode = rootNode;
    this.object_id = info.obj_id
    this.item_config = this.fishLabelConfig[info.id]
    this.is_alive = false
    this.end_call = null

    let scr_config = this.fishLabelResConfig[this.item_config.src_id]
    this.label.string = "0"
    this.label.font = createFont(this.sourceManage, scr_config.src);
    this.uiRoot.active = (false)
    // this.uiRoot.setWorldPosition(new Vec3(0, 0))
    this.uiRoot.setPosition(toNodeSpaceAR(this.rootNode, new Vec3(0, 0)))

    this.uiRoot.setSiblingIndex(fishLabelFntZorder);

    this.total_gold = 0
    this.add_step = 0
    this.cur_add_time = 0

    this.buse_add_score = false
  }

  public play(spos, number: number, mul) {
    if (this.fishLabelFntManager.getUseSkew() == true) {
      this.uiRoot.setScale(-1, -1)
    } else {
      this.uiRoot.setScale(1, 1)
    }

    if (mul > this.commonConfig.max_rate_show || number > 9.90) {
      this.label.string = "0"
      this.buse_add_score = true
      //s = 1/2*a*pow(t,2)
      this.add_step = 2 * number / (this.commonConfig.show_add_score_time * this.commonConfig.show_add_score_time)
      this.total_gold = number
      this.fishLabelFntManager.pushShowAddScore(this)
    } else {
      this.label.string = `+${number}`
      this.buse_add_score = false
    }

    // this.uiRoot.setWorldPosition(new Vec3(spos.x, spos.y))
    this.uiRoot.setPosition(toNodeSpaceAR(this.rootNode, spos))
    this.uiRoot.active = (true)

    ActionEffectPlayer.play(this.uiRoot, () => {
      if (this.end_call) {
        this.end_call(this)
      }
    }, this.actionConfig[this.item_config.act_id])
  }

  public getDataId() {
    return this.item_config.id
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

  public setEndCallback(call) {
    this.end_call = call
  }

  public resumeOrgin() {
    this.uiRoot.active = (false)
    // this.uiRoot.setWorldPosition(new Vec3(0, 0))
    this.uiRoot.setPosition(toNodeSpaceAR(this.rootNode, new Vec3(0, 0)))
    this.end_call = null
    this.label.string = "0"
    this.total_gold = 0
    this.add_step = 0
    this.cur_add_time = 0
    this.buse_add_score = false
  }

  public getAddScoreState() {
    return this.buse_add_score
  }

  public update(dt) {
    if (this.buse_add_score == true) {
      if (this.cur_add_time > this.commonConfig.show_add_score_time) {
        this.buse_add_score = false
        this.label.string = `+${this.total_gold}`
      } else {
        this.cur_add_time = this.cur_add_time + dt
        this.label.string = '+' + Math.floor(this.add_step * Math.pow(this.cur_add_time, 2) / 2);
      }
    }
  }

}

