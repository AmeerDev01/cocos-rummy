import { Node, UITransform, Vec3 } from "cc"
import SourceManage from "../../base/SourceManage"
import { Fish } from "./Fish"
import { BatteryManager } from "./BatteryManager"
import { FishGoldManager } from "./FishGoldManager"
import { FishLabelFntManager } from "./FishLabelFntManager"
import { SkillPlayer } from "./SkillPlayer"
import { MusicEffectPlayer } from "./MusicEffectPlayer"
import { BackgroundSceneManager } from "./BackgroundSceneManager"

export type FishObj = {
  /**对象id */
  object_id: number
  /**鱼配置id */
  fish_id: number
  /**曲线id */
  cve_id: number
  /**已经运动时间t */
  run_t: number
  /**起始坐标 */
  spos: Vec3
  /**路径是否反向 */
  breserve: boolean
  /**是否旋转 */
  angle: number
  /**用户数据 */
  user_info: any,
}

// 鱼对象管理
let sqrt = Math.sqrt
let pow = Math.pow

// 缓存服务端刷鱼数据
// lst = {
// 	[x] = {
// 		object_id :对象id
// 		fish_id :鱼配置id
// 		spos =[x,y] :起始坐标
// 		breserve,路径是否反向
// 		angle :是否旋转
// 		cve_id :曲线id
// 		run_t :已经运动时间t
// 		user_info = {
// 			用户数据
// 		},
// 	}
// }
////////////////////////////////////

export class FishManager {
  private fishConfig = null
  private bondingBoxConfig = null
  private curveConfig = null
  private skillConfig = null
  private textureConfig = null
  private actionConfig = null
  private commonConfig = null

  private fishDataList = []

  // member
  private aliveFishList = new Map<Number, Fish>()
  private aliveFishBBList = new Map<Number, Fish>()
  private fishParent: Node = null
  private bUseSkew = false
  private sourceManage: SourceManage;
  private batteryManager: BatteryManager;
  private fishGoldManager: FishGoldManager;
  private fishLabelFntManager: FishLabelFntManager;
  private skillPlayer: SkillPlayer;
  private musicEffectPlayer: MusicEffectPlayer;
  private backgroundSceneManager: BackgroundSceneManager
  /**缩放比例 */
  private scaleRatio: number = 1;
  private rootNode: Node;

  public init(parent: Node, rootNode: Node, sourceManage: SourceManage, fConfig, bbConfig, cveConfig, sklConfig, ttConfig, actConfig, comConfig,
    batteryManager: BatteryManager, fishGoldManager: FishGoldManager, fishLabelFntManager: FishLabelFntManager, skillPlayer: SkillPlayer,
    musicEffectPlayer: MusicEffectPlayer, backgroundSceneManager: BackgroundSceneManager, scaleRatio: number) {
    this.fishConfig = fConfig
    this.sourceManage = sourceManage
    this.bondingBoxConfig = bbConfig
    this.curveConfig = cveConfig
    this.skillConfig = sklConfig
    this.textureConfig = ttConfig
    this.actionConfig = actConfig
    this.commonConfig = comConfig
    this.batteryManager = batteryManager
    this.fishGoldManager = fishGoldManager
    this.fishLabelFntManager = fishLabelFntManager
    this.skillPlayer = skillPlayer
    this.musicEffectPlayer = musicEffectPlayer
    this.backgroundSceneManager = backgroundSceneManager
    this.scaleRatio = scaleRatio

    this.aliveFishList = new Map();
    this.aliveFishBBList = new Map()
    this.fishDataList = []
    this.fishParent = parent
    this.rootNode = rootNode
  }

  public uninit() {
    // config
    this.fishConfig = null
    this.bondingBoxConfig = null
    this.curveConfig = null
    this.skillConfig = null
    this.textureConfig = null
    this.actionConfig = null
    this.commonConfig = null

    this.aliveFishList && this.aliveFishList.clear();
    this.aliveFishList && this.aliveFishBBList.clear();
    this.fishDataList = [];
    // member
    this.aliveFishList = null
    this.aliveFishBBList = null
    this.fishParent = null
    this.fishDataList = null
    this.bUseSkew = false
    this.sourceManage = null;
    this.batteryManager = null;
    this.musicEffectPlayer = null;
  }

  public getRootNode() {
    return this.rootNode
  }

  public getScaleRatio() {
    return this.scaleRatio
  }

  public freshFish(dt) {
    // console.log(this.uuid + " 等待刷鱼数量 -------- ", fishDatas.length);
    for (let i = 0; i < this.fishDataList.length; i++) {
      const v = this.fishDataList[i];
      if (!v) {
        continue;
      }

      if (v.run_t >= 0) {
        if (v.run_t < 0.02) {
          v.run_t = 0
        }

        // create fish
        let fObj = new Fish(
          v.object_id,
          v.fish_id,
          v.cve_id,
          this.bUseSkew,
          v.run_t,
          v.spos,
          v.breserve,
          v.angle,
          v.user_info,
          this.backgroundSceneManager.getCurrentSceneId(), this.textureConfig, this.fishConfig, this.bondingBoxConfig,
          this.curveConfig, this.actionConfig, this.commonConfig, this.sourceManage, this.fishParent,
          this.batteryManager, this.fishGoldManager, this.fishLabelFntManager, this.skillPlayer, this.musicEffectPlayer,
          this.scaleRatio, this.rootNode
        )
        // this.fishParent.addChild(fObj.uiRoot)
        this.aliveFishList.set(v.object_id, fObj);
        this.aliveFishBBList.set(v.object_id, fObj.getCurrentBBX());
        // this.aliveFishList[v.object_id] = fObj
        // this.aliveFishBBList[v.object_id] = fObj.getCurrentBBX()

        fObj.fishStart()
        // this.fishDataList[k] = null
        this.fishDataList.splice(i, 1);
        i--;
      } else {
        v.run_t = v.run_t + dt
      }
    }
  }

  // //[[
  // fish = {
  //   object_id,//对象id
  //   fish_id,//鱼配置id
  //   spos =[x, y,],//起始坐标
  //   breserve, 路径是否反向
  // 		angle,//是否旋转
  //   cve_id,//曲线id
  //   run_t,//已经运动时间t
  //   user_info = {
  //     //用户数据
  //   },
  // }
  // ]]
  public addFish(fish: FishObj) {
    // this.fishDataList[fish.object_id] = fish
    this.fishDataList.push(fish)
    // console.log(this.uuid + " 等待刷鱼数量", this.fishDataList.length);
  }
  public addCacheDataTime(t) {
    this.fishDataList.forEach((v, k) => {
      v && (v.run_t = v.run_t + t)
    })
    // for (const k in this.fishDataList) {
    //   const v = this.fishDataList[k];
    //   if (!v) continue;
    //   v.run_t = v.run_t + t
    // }
  }

  public addAliveFishTime(t) {
    this.aliveFishList.forEach((v, k) => {
      v && v.addOtherTime(t)
    })
    // for (const k in this.aliveFishList) {
    //   const v = this.aliveFishList[k];
    //   if (!v) continue;
    //   v.addOtherTime(t)
    // }
  }

  public removeFish(objID) {
    let fObj = this.aliveFishList.get(objID) as Fish
    if (fObj) {
      fObj.fishDead()
      // this.aliveFishList[objID] = null
      // this.aliveFishBBList[objID] = null
      this.aliveFishList.delete(objID);
      this.aliveFishBBList.delete(objID);
    }
    // this.fishDataList[objID] = null
    this.fishDataList = this.fishDataList.filter(v => v.object_id !== objID);
  }

  public update(dt) {
    this.freshFish(dt)
    this.aliveFishList.forEach((v, k) => {
      if (v) {
        v.update(dt)
        this.aliveFishBBList.set(k, v.getCurrentBBX())
        // this.aliveFishBBList[k] = v.getCurrentBBX()
        if (v.isOutofTime() === true) {
          v.fishOut()
          // this.aliveFishList[k] = null
          // this.aliveFishBBList[k] = null
          this.aliveFishList.delete(k)
          this.aliveFishBBList.delete(k)
        }
      }
    })
  }

  public convertToWorldSpaceAR(pos) {
    return this.fishParent.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(pos.x, pos.y));
  }

  // //[[
  // bonding_box = {
  //   [1] = { a = 0, b = 0, r = 10, },
  // }
  // ]]
  public shotFish(bbx) {
    for (const [k, v] of this.aliveFishBBList.entries()) {
      if (v) {
        for (const m in bbx) {
          // 子弹的包围盒坐标
          const n = bbx[m];
          if (!n) continue;
          for (const i in v) {
            // 鱼的包围盒坐标
            const j = v[i];
            const fish = this.aliveFishList.get(k);
            const fishpos = fish.getCurrentPos()
            // 计算两点间的距离
            let dis = sqrt(pow(j.a - n.a, 2) + pow(j.b - n.b, 2))
            // console.log(`bullet box ${n.a}, ${n.b}, ${n.r}, fish box ${j.a}, ${j.b}, ${j.r}, fish pos ${fishpos.x}, ${fishpos.y}, angle ${fish.getCurrentAngle()}, dis ${dis}`);
            if (n.r + j.r > dis) {
              // console.log('打中鱼了');
              return this.aliveFishList.get(k)
            }
          }
        }
      }
    }

    return null
  }

  public getAliveFishObjectLst() {
    return this.aliveFishList
  }

  public getFishObjById(objID) {
    return this.aliveFishList.get(objID)
  }

  /**
   * 清理非当前场景的鱼
   */
  public clearAllFish() {
    this.aliveFishList.forEach((v, k) => {
      if (v && v.getFishSceneId() !== this.backgroundSceneManager.getCurrentSceneId() && v.getFishSceneId() !== -1) {
        let fishID = v.getObjectId()
        v.fishOut()
        // this.aliveFishList[fishID] = null
        // this.aliveFishBBList[fishID] = null
        this.aliveFishList.delete(fishID)
        this.aliveFishBBList.delete(fishID)
      }
    })
  }

  /**
   * 清理所有场景的所有鱼
   */
  public clearAllSceneAllFish() {
    this.aliveFishList.clear();
    this.aliveFishBBList.clear();
    this.fishDataList = [];
  }

  public getParent() {
    return this.fishParent
  }

  public getFishIdByPoint(pos) {
    let fishID = -1
    for (const [k, v] of this.aliveFishList.entries()) {
      if (v && v.isPointInFish(pos) === true) {
        fishID = v.getObjectId()
        break
      }
    }
    // for (const k in this.aliveFishList) {
    //   const v = this.aliveFishList[k];
    //   if (!v) continue;
    //   if (v.isPointInFish(pos) === true) {
    //     fishID = v.getObjectId()
    //     break
    //   }
    // }
    return fishID
  }

  public setUseSkew(buse) {
    this.bUseSkew = buse
  }

  public clearFishCacheData() {
    this.fishDataList = []
  }
}