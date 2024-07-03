import { Color, Graphics, Label, Node, Sprite, UITransform, Vec3, instantiate, misc, tween } from "cc";
import SourceManage from "../../base/SourceManage";
import { ActionCurve } from "./ActionCurve";
import { ActionEffectPlayer } from "./ActionEffectPlayer";
import { createAnimationNode, createParticleSystemNode, createSpriteNode, g_ByRandomSelectID, getAnimation, toNodeSpaceAR } from "./FishTool";
import { BatteryManager } from "./BatteryManager";
import { Battery } from "./Battery";
import { FishGoldManager } from "./FishGoldManager";
import { FishLabelFntManager } from "./FishLabelFntManager";
import { SkillPlayer } from "./SkillPlayer";
import { SkillItemLine } from "./utils/skills/SkillItemLine";
import { MusicEffectPlayer } from "./MusicEffectPlayer";
import { CURVE_TYPE } from "./CalculteRule";

const sin = Math.sin
const cos = Math.cos
const sqrt = Math.sqrt
const pow = Math.pow
const deg = misc.degreesToRadians

const pia = 180
const pi = Math.PI

type FishItem = {
  loop: number,
  act_id: number,
  src_id: number,
  stype: number,
  sspos: any,
  ani_key: string,
  spr: Node
}

const fishZOrder = 20000;
/**是否绘制出包围盒 */
const isDrawBondingBox = false;
/**是否绘制路径 */
const isDrawCurve = false;
/**测试坐标 */
const useTestLabel = false;

export class Fish {

  private commonConfig;
  private actionConfig;
  private skillConfig;

  private objectID;
  private isSkew;
  private runedSeconds: number;
  private userInfo;
  private sceneID;
  private bbConfig;
  private cvConfig;
  private curveObject: ActionCurve;
  private curveDrawObj: Node;
  private currentAngle;
  private fishLevel;
  private fishScore;
  private skewMod;
  private isUseChangeBGM;
  public aliveList: FishItem[];
  private deathList: FishItem[];
  private curRlineObjList;
  private curLineObjList: SkillItemLine[];
  private goldEndPos: Vec3;
  private currentPos: Vec3;
  public uiRoot: Node;
  private textureConfig = [];
  private fishConfigs;
  private fishConfig;
  private bondingBoxConfig = [];
  private curveConfig = [];
  private parantNode: Node;
  /**包围盒节点 */
  private draw: Node;
  /**label坐标节点 */
  private tesLabelObj: Node;
  private sourceManage: SourceManage;
  private batteryManager: BatteryManager
  private fishGoldManager: FishGoldManager;
  private fishLabelFntManager: FishLabelFntManager;
  private skillPlayer: SkillPlayer;
  private musicEffectPlayer: MusicEffectPlayer;
  /**缩放比例 */
  private scaleRatio: number = 1;
  private rootNode: Node;

  constructor(objID, fishID, curveID, isSkew, runSeconds, startPos: Vec3, isReserve, angle, userInfo, sceneID, textureConfig,
    fishConfigs, bondingBoxConfig, curveConfig, actionConfig, commonConfig, sourceManage: SourceManage, parantNode: Node, batteryManager: BatteryManager,
    fishGoldManager: FishGoldManager, fishLabelFntManager: FishLabelFntManager, skillPlayer: SkillPlayer, musicEffectPlayer: MusicEffectPlayer,
    scaleRatio: number, rootNode: Node) {
    this.textureConfig = textureConfig;
    this.fishConfigs = fishConfigs;
    this.bondingBoxConfig = bondingBoxConfig;
    this.curveConfig = curveConfig;
    this.sourceManage = sourceManage;
    this.parantNode = parantNode;
    this.actionConfig = actionConfig;
    this.commonConfig = commonConfig;
    this.batteryManager = batteryManager;
    this.fishGoldManager = fishGoldManager;
    this.fishLabelFntManager = fishLabelFntManager;
    this.skillPlayer = skillPlayer;
    this.musicEffectPlayer = musicEffectPlayer;
    this.scaleRatio = scaleRatio;
    this.rootNode = rootNode;
    this.init(objID, fishID, curveID, isSkew, runSeconds, startPos, isReserve, angle, userInfo, sceneID)
  }

  private init(objID, fishID, curveID, isSkew, runSeconds, startPos: Vec3, isReserve, angle, userInfo, sceneID) {
    startPos = startPos.multiplyScalar(this.scaleRatio);
    this.objectID = objID
    this.isSkew = isSkew
    this.runedSeconds = runSeconds //鱼运动时间
    this.userInfo = userInfo //用户数据
    this.sceneID = sceneID //场景ID
    this.fishConfig = this.fishConfigs[fishID]
    this.bbConfig = this.bondingBoxConfig[this.fishConfig.bbx_id]
    this.cvConfig = this.curveConfig[curveID]

    //print("birth fish ========== "  +  this.fishConfig.desc  +  " id =========== "  +  this.fishConfig.id)

    // 创建路径计算对象
    this.curveObject = new ActionCurve(startPos, this.cvConfig.ratio)
    for (let i = 0; i < this.cvConfig.data.length; i++) {
      const cveinfo = instantiate(this.cvConfig.data[i])
      // if (cveinfo.type !== CURVE_TYPE.pbl && cveinfo.type !== CURVE_TYPE.ccve) {
      cveinfo.x1 *= this.scaleRatio;
      cveinfo.x2 *= this.scaleRatio;
      // }
      cveinfo.fparam.r *= this.scaleRatio;
      cveinfo.fparam.a *= this.scaleRatio;
      cveinfo.fparam.b *= this.scaleRatio;
      cveinfo.fparam.c *= this.scaleRatio;
      cveinfo.fparam.k *= this.scaleRatio;
      this.curveObject.addCurve(cveinfo)
    }
    this.curveObject.setActionReserve(isReserve)
    angle = angle > 0 ? angle : this.cvConfig.angle;
    this.curveObject.setActionRotation(angle)

    // member
    this.currentAngle = 0 //当前偏转角度
    this.fishLevel = 0 //鱼等级
    this.fishScore = 0 //鱼分数
    this.skewMod = 1 //翻转值
    this.isUseChangeBGM = false //是否改变背景音
    this.aliveList = [] //出生特效列表
    this.deathList = [] //死亡特效列表
    this.curRlineObjList = [] //当前关联鱼对象列表
    this.curLineObjList = [] //连接线对象
    this.goldEndPos = new Vec3() //金币飞往的最后位置
    this.currentPos = new Vec3() //当前运动到的点

    // ui
    this.uiRoot = new Node();
    this.uiRoot.setSiblingIndex(fishZOrder)
    this.parantNode.addChild(this.uiRoot)
    this.createFishItem(this.fishConfig.alive, this.aliveList, true)
    this.createFishItem(this.fishConfig.death, this.deathList, false)
    // this.showAliveSpr(false)
    // this.showDeadSpr(false)

    if (isDrawCurve) {
      this.drawFishCurve(startPos)
    }

    if (isDrawBondingBox) {
      this.draw = new Node();
      this.addGraphics(this.draw);
      this.uiRoot.insertChild(this.draw, 1000)
    }

    if (useTestLabel) {
      this.tesLabelObj = new Node();
      const label = this.tesLabelObj.addComponent(Label);
      this.tesLabelObj.setPosition(0, 0)
      this.uiRoot.addChild(this.tesLabelObj)
      label.string = "test";
      label.fontSize = 40;
    }
  }

  public deadEffEndCall() {
    let info = {
      spos: this.currentPos,
      angle: this.currentAngle,
      number: this.fishScore,
      end_pos: new Vec3(this.goldEndPos.x, this.goldEndPos.y),
      beishu: this.fishConfig.max_rate,
    }
    this.fishGoldManager.play(info)

    this.curLineObjList.forEach(v => v.destroy())

    if (isDrawCurve) {
      this.curveDrawObj.destroy()
    }
    this.uiRoot.destroy();
    this.clear();
  }

  private clear() {
    this.textureConfig = null;
    this.fishConfigs = null;
    this.bondingBoxConfig = null;
    this.curveConfig = null;
    this.sourceManage = null;
    this.parantNode = null;
    this.actionConfig = null;
    this.batteryManager = null;
    this.fishGoldManager = null;
    this.fishLabelFntManager = null;
    this.skillPlayer = null;
    this.musicEffectPlayer = null;
  }

  public addOtherTime(dt) {
    this.runedSeconds = this.runedSeconds + dt
  }

  public update(dt) {
    if (this.batteryManager.getBackgroundSceneManager().getSceneState() === 2
      && this.sceneID !== this.batteryManager.getBackgroundSceneManager().getCurrentSceneId() && this.sceneID !== -1) {
      dt = dt * this.commonConfig.cut_scene_fish_vx
    }

    this.runedSeconds = this.runedSeconds + dt
    const res = this.curveObject.getPosAndAngleByTime(this.runedSeconds);
    this.currentPos = res[0]
    this.currentAngle = res[1];
    this.setFishPosAndAngle()
    this.skewFish()

    if (isDrawBondingBox) {
      const graphics = this.draw.getComponent(Graphics);
      graphics.clear();
      for (const key in this.bbConfig.data) {
        const v = this.bbConfig.data[key];
        if (!v) continue;
        graphics.circle(v.a, v.b, v.r);
        graphics.stroke();

        // graphics.circle(v.a, v.b, 5);
        // graphics.stroke();
      }

      // graphics.circle(0, 0, 5);
      // graphics.stroke();
    }
  }

  private addGraphics(node: Node) {
    let graphics = node.getComponent(Graphics);
    if (!graphics) {
      graphics = node.addComponent(Graphics);
    }
    // 设置线条宽度和颜色
    graphics.lineWidth = 2;
    graphics.strokeColor = Color.WHITE;
    return graphics
  }

  public isShotFish(cirLst) {
    // let ranti = (this.currentAngle / pia) * pi
    // 这里 360 - this.currentAngle，是在碰撞检测的时候有时候距离有点远
    let ranti = deg(360 - this.currentAngle);
    if (this.currentPos) {
      for (let i = 0; i < cirLst.length; i++) {
        const v = cirLst[i];
        for (const m in this.bbConfig.data) {
          const n = this.bbConfig.data[m];
          let newA = (n.a * cos(ranti) + this.skewMod * n.b * sin(ranti)) * this.scaleRatio
          let newB = (this.skewMod * n.b * cos(ranti) - n.a * sin(ranti)) * this.scaleRatio
          let dist = sqrt(pow(newA + this.currentPos.x - v.a, 2) + pow(newB + this.currentPos.y - v.b, 2))
          if (v.r + n.r > dist) {
            return true
          }
        }
      }
    }

    return false
  }

  public getCurrentBBX() {
    let bbx = instantiate(this.bbConfig.data)
    // let ranti = (this.currentAngle / pia) * pi
    // 这里 360 - this.currentAngle，是在碰撞检测的时候有时候距离有点远
    let ranti = deg(360 - this.currentAngle);

    for (const k in this.bbConfig.data) {
      const v = this.bbConfig.data[k];
      bbx[k].a = (v.a * cos(ranti) + this.skewMod * v.b * sin(ranti)) * this.scaleRatio + this.currentPos.x
      bbx[k].b = (this.skewMod * v.b * cos(ranti) - v.a * sin(ranti)) * this.scaleRatio + this.currentPos.y
      // 把鱼的包围盒坐标转换为世界坐标
      // const world = this.convertToWorldSpaceAR(new Vec3(bbx[k].a, bbx[k].b))
      // bbx[k].a = world.x
      // bbx[k].b = world.y
    }
    // console.log(' currentPos : ', this.currentPos, ' currentAngle : ', this.currentAngle, " bbx : ", JSON.stringify(bbx));
    return bbx
  }

  public isPointInFish(pos) {
    if (this.currentPos) {
      // let ranti = (this.currentAngle / pia) * pi
      // 这里 360 - this.currentAngle，是在碰撞检测的时候有时候距离有点远
      let ranti = deg(360 - this.currentAngle);
      for (const m in this.bbConfig.data) {
        const n = this.bbConfig.data[m];
        let newA = (n.a * cos(ranti) + this.skewMod * n.b * sin(ranti)) * this.scaleRatio
        let newB = (this.skewMod * n.b * cos(ranti) - n.a * sin(ranti)) * this.scaleRatio
        let dist = sqrt(pow(newA + this.currentPos.x - pos.x, 2) + pow(newB + this.currentPos.y - pos.y, 2))
        if (n.r > dist) {
          return true
        }
      }
    }
    return false
  }

  public fishDead() {
    this.showAliveSpr(false)
    this.showDeadSpr(true)
    this.uiRoot.setSiblingIndex(this.uiRoot.parent.children.length);
    this.runDeadEff()
  }

  public fishOut() {
    if (isDrawCurve) {
      this.curveDrawObj.destroy()
    }
    if (this.isUseChangeBGM) {
      // BackgroundSceneManager.resumeBkMus()
    }
    this.uiRoot.destroy()
  }

  public isOutofTime() {
    return this.curveObject.isCurveEnd()
  }

  public fishStart() {
    this.showAliveSpr(true)
    this.showDeadSpr(false)
    this.runStartEff()


    const res = this.curveObject.getPosAndAngleByTime(0.00001);
    this.currentPos = res[0]
    this.currentAngle = res[1];
    this.setFishPosAndAngle()
  }

  public getObjectId() {
    return this.objectID
  }

  public getDataId() {
    return this.fishConfig.id
  }

  public setUserInfo(info) {
    this.userInfo = info
  }

  public getUserInfo() {
    return this.userInfo
  }

  public getCurrentPosAndAngle() {
    return [this.currentPos, this.currentAngle]
  }

  public getCurrentAngle() {
    return this.currentAngle
  }

  public setGoldMoveEndPos(pos) {
    this.goldEndPos = pos
  }

  public setScoreVal(val) {
    this.fishScore = val
  }

  public getScoreVal() {
    return this.fishScore
  }

  public getBeishu() {
    return this.fishConfig.max_rate
  }

  public getLockLevel() {
    return this.fishConfig.lock_level
  }

  public getCurrentPos() {
    return this.currentPos
  }

  public addLineRelObj(obj) {
    this.curRlineObjList.push(obj)
  }

  public getLineRelObjLst() {
    return this.curRlineObjList
  }

  public addCurrentLineObj(obj) {
    this.curLineObjList.push(obj)
  }

  public setFishLevel(level) {
    this.fishLevel = level
  }

  public getFishLevel() {
    return this.fishLevel
  }

  public getFishConfigId() {
    return this.fishConfig.id
  }

  public getFishSceneId() {
    return this.sceneID
  }

  public showFishEff() {
    for (let k = 0; k < this.aliveList.length; k++) {
      const v = this.aliveList[k];
      v.spr.getComponent(Sprite).color = new Color(255, 0, 0);
      window.setTimeout(() => {
        v.spr.isValid && (v.spr.getComponent(Sprite).color = new Color(255, 255, 255));
      }, 100)
    }
  }

  public setUseChangeBgm(buse) {
    this.isUseChangeBGM = buse
  }

  public getParent() {
    return this.uiRoot.getParent()
  }

  private createFishItem(data, lst, busepit) {
    let len = data.view_inf.length - 1
    for (let i = 0; i <= len; i++) {
      let src_cfg = this.textureConfig[data.view_inf[i].src_id]
      if (!src_cfg) {
        debugger
      }
      let item: FishItem = {
        loop: data.view_inf[i].loop,
        act_id: data.view_inf[i].act_id,
        src_id: data.view_inf[i].src_id,
        stype: src_cfg.stype,
        sspos: data.view_inf[i].pos,
        ani_key: src_cfg.key,
        spr: new Node()
      }

      if (src_cfg.stype === 1) { //序列帧
        item.spr = createAnimationNode(this.sourceManage, this.uiRoot, src_cfg, false, item.loop === -1)
        item.spr.setPosition(data.view_inf[i].pos.x, data.view_inf[i].pos.y)
      } else if (src_cfg.stype === 2) {//图片
        item.spr = createSpriteNode(this.sourceManage, this.uiRoot, src_cfg.file);
        item.spr.setPosition(data.view_inf[i].pos.x, data.view_inf[i].pos.y)
      } else if (src_cfg.stype === 3) {//粒子
        if (busepit) {
          let pit_obj = createParticleSystemNode(this.sourceManage, this.uiRoot, src_cfg);
          pit_obj.setPosition(data.view_inf[i].pos.x, data.view_inf[i].pos.y)
        }
      }
      lst.push(item)
    }
  }

  private showAliveSpr(bshow) {
    this.aliveList.forEach(v => v && v.spr && (v.spr.active = bshow));
  }
  private showDeadSpr(bshow) {
    this.deathList.forEach(v => v && v.spr && (v.spr.active = bshow));
  }

  private drawFishCurve(startPos) {
    let tmpCurveObj = instantiate(this.curveObject)
    this.curveDrawObj = new Node();
    const graphics = this.addGraphics(this.curveDrawObj)
    this.parantNode.insertChild(this.curveDrawObj, 100000000)

    // let spos = instantiate(startPos);
    let spos = toNodeSpaceAR(this.rootNode, startPos);
    let drawDt = 0
    while (!tmpCurveObj.isCurveEnd()) {
      let epos = tmpCurveObj.getPosAndSlopeByTime(drawDt)[0]
      // console.log(epos.x, epos.y);
      epos = toNodeSpaceAR(this.rootNode, epos);
      graphics.moveTo(spos.x, spos.y);
      graphics.lineTo(epos.x, epos.y);
      graphics.stroke();
      // spos = instantiate(epos)
      spos = instantiate(epos)
      drawDt = drawDt + 0.1
    }
  }
  private setFishPosAndAngle() {
    if (useTestLabel) {
      this.tesLabelObj.getComponent(Label).string = `${this.currentPos.x}, ${this.currentPos.y}`
    }

    // this.uiRoot.setWorldPosition(new Vec3(this.currentPos.x, this.currentPos.y))
    this.uiRoot.setPosition(toNodeSpaceAR(this.rootNode, new Vec3(this.currentPos.x, this.currentPos.y)))
    this.uiRoot.angle = this.currentAngle;

    // console.log(this.currentPos.x, this.currentPos.y,  this.uiRoot.position.x, this.uiRoot.position.y);
  }

  private skewFish() {

    if (this.isSkew === true && this.curveObject.getActionWay() === 1) {
      this.aliveList.filter(v => v && v.spr && v.stype === 1).forEach(v => {
        const scale = v.spr.getScale();
        v.spr.setScale(scale.x, scale.y > 0 ? -scale.y : scale.y)
      })
      this.draw && this.draw.setScale(1, -1)
      // v.spr.setRotationSkewX(180)
      this.skewMod = -1
    } else if (this.isSkew === false && this.curveObject.getActionWay() === -1) {
      this.aliveList.filter(v => v && v.spr && v.stype === 1).forEach(v => {
        const scale = v.spr.getScale();
        v.spr.setScale(scale.x, scale.y > 0 ? -scale.y : scale.y)
      })
      this.draw && this.draw.setScale(1, -1)
      // v.spr.setRotationSkewX(180)
      this.skewMod = -1
    }
  }

  public runStartEff() {
    for (let k = 0; k < this.aliveList.length; k++) {
      const v = this.aliveList[k];
      if (v.stype === 1) {
        getAnimation(v.spr).play();
      } else if (v.stype === 2) {
        //todo
      } else if (v.stype === 3) {
        //todo
        let srcConfig = this.textureConfig[v.src_id]
        let pit_obj = createParticleSystemNode(this.sourceManage, this.uiRoot, srcConfig);
        pit_obj.setPosition(v.sspos.x, v.sspos.y)

        // let piObj = createParticleSystemNode(this.sourceManage, this.uiRoot, srcConfig);
        // piObj.setPosition(v.sspos.x, v.sspos.y)
      }

      if (v.spr) {
        ActionEffectPlayer.play(v.spr, () => {

        }, this.actionConfig[v.act_id])
      }
    }

    this.musicEffectPlayer.play(g_ByRandomSelectID(this.fishConfig.alive.mus_lst))
    for (let i = 0; i <= this.fishConfig.alive.skl_id_lst.length; i++) {
      this.skillPlayer.play(this, this.fishConfig.alive.skl_id_lst[i])
    }
  }
  public runDeadEff() {
    this.deathList.forEach(v => {
      if (v.stype === 1) {
        getAnimation(v.spr).play();
      } else if (v.stype === 2) {
        //todo
      } else if (v.stype === 3) {
        //todo
        let tc = this.textureConfig[v.src_id]
        let pobj = createParticleSystemNode(this.sourceManage, this.uiRoot, tc);
        pobj.setPosition(v.sspos.x, v.sspos.y)
      }

      ActionEffectPlayer.play(v.spr, null, this.actionConfig[v.act_id], this)
    })

    let fntID = 1
    let btObj: Battery = this.batteryManager.getBatteryByPlayerId(this.userInfo.player_id)
    if (btObj) {
      let fnt = btObj.getDEfntConfig()
      if (fnt) {
        fntID = btObj.isMyBattery() === true ? fnt[0] : fnt[1];
      }
    }

    this.fishLabelFntManager.play(this.currentPos, this.fishScore, fntID, this.fishConfig.max_rate)
    this.musicEffectPlayer.play(g_ByRandomSelectID(this.fishConfig.death.mus_lst))
    for (let i = 0; i < this.fishConfig.death.skl_id_lst.length; i++) {
      this.skillPlayer.play(this, this.fishConfig.death.skl_id_lst[i])
    }

    if (this.fishConfig.death.dead_act_id) {
      ActionEffectPlayer.play(this.uiRoot, () => {
        this.deadEffEndCall()
      }, this.actionConfig[this.fishConfig.death.dead_act_id], null)
    } else {
      tween(this.uiRoot).delay(0.2).call(() => {
        this.uiRoot.isValid && this.deadEffEndCall();
      }).start();
    }
  }
}

