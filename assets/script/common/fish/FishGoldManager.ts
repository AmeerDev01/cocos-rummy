import { Node, Vec3, tween } from "cc"
import { ObjectClassType, ObjectPool } from "./ObjectPool"
import { FishGold } from "./FishGold"
import { MusicEffectPlayer } from "./MusicEffectPlayer"
import { toNodeSpaceAR } from "./FishTool"

/**
  金币管理
 */
const sin = Math.sin
const cos = Math.cos
const sqrt = Math.sqrt
const pow = Math.pow
const ceil = Math.ceil
const pi = Math.PI

const goldConfigID = 1;

////////////////////////////////////////////////////////////////////////-
export class FishGoldManager {
  private fishGoldConfig = null
  private textureConfig = null
  private actionConfig = null
  private commonConfig = null
  private objectPool: ObjectPool;
  private musicEffectPlayer: MusicEffectPlayer;
  private rootNode: Node;

  public init(fishGoldConfig, textureConfig, actionConfig, commonConfig, objectPool: ObjectPool, musicEffectPlayer: MusicEffectPlayer, rootNode: Node) {
    this.fishGoldConfig = fishGoldConfig
    this.textureConfig = textureConfig
    this.actionConfig = actionConfig
    this.commonConfig = commonConfig
    this.objectPool = objectPool
    this.musicEffectPlayer = musicEffectPlayer
    this.rootNode = rootNode
  }

  public uninit() {
    this.fishGoldConfig = null
    this.textureConfig = null
    this.actionConfig = null
    this.commonConfig = null
    this.objectPool = null
    this.musicEffectPlayer = null
  }

  public getRootNode() {
    return this.rootNode
  }

  public fgmOnEndCall(obj: FishGold) {
    let end_pos = toNodeSpaceAR(this.rootNode, obj.getEndPos());
    let t = obj.getEndMoveTime()
    if (t <= 0 || t > 10) {
      t = 2
    }

    obj.uiRoot.setSiblingIndex(obj.uiRoot.parent.children.length);
    tween(obj.uiRoot).to(t, { position: end_pos }).call(() => {
      if (obj.uiRoot.isValid) {
        obj.runLastEff()
        this.musicEffectPlayer.play(this.commonConfig.gold_recl_id)
      }
    }).start();
  }

  public getObjPos(max_num, cur_num, angle, dis) {
    let pos = new Vec3();
    let ranti = (angle / 180) * pi

    if (cur_num < max_num / 2) {
      pos.x = dis * cos(pi - ranti)
      pos.y = dis * sin(pi - ranti)
    } else {
      pos.x = -dis * cos(pi - ranti)
      pos.y = -dis * sin(pi - ranti)
    }

    return pos
  }

  public getUnitGoldNumber(score) {
    if (score !== null) {

      for (const k in this.fishGoldConfig) {
        const v = this.fishGoldConfig[k];
        if (score > v.gold_num) {
          return v.gold_num
        }
      }
    }

    return this.fishGoldConfig[goldConfigID].gold_num
  }

  //info = [spos, end_pos, number, angle, beishu]
  public play(info) {
    let id = goldConfigID
    for (const k in this.fishGoldConfig) {
      const v = this.fishGoldConfig[k];
      if (info.number > v.gold_num) {
        id = parseInt(k);
        break
      }
    }

    let max_num = ceil(info.beishu / 10)
    if (max_num > this.commonConfig.max_gold_num) {
      max_num = this.commonConfig.max_gold_num
    }

    let distance = 0
    for (let i = 1; i <= max_num; i++) {
      let obj = this.objectPool.getObject(ObjectClassType.type_fish_gold, id) as FishGold;
      if (obj) {
        let content_size = obj.getSize()
        obj.setUseState(true)
        obj.setPlayEndCall((obj) => {
          this.fgmOnEndCall(obj)
        })
        let index = i - 1
        if (i >= max_num / 2 && max_num > 1) {
          index = max_num - i + 1
        }
        distance = (index) * (sqrt(pow(content_size.width, 2) + pow(content_size.height, 2)) + this.commonConfig.gold_distance)
        let new_spos = this.getObjPos(max_num, i, info.angle, distance)
        new_spos.x = new_spos.x + info.spos.x
        new_spos.y = new_spos.y + info.spos.y
        obj.play(new_spos, info.end_pos)
      }
    }

    this.musicEffectPlayer.play(this.commonConfig.gold_mus_id)
  }
}


