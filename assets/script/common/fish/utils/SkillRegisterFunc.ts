/**
  技能注册
 */
import { Label, Node, Vec3 } from "cc";
import { BackgroundSceneManager } from "../BackgroundSceneManager";
import { SkillPlayer } from "../SkillPlayer"
import { Shake } from "../../../utils/Shake";
import { SkillItemBossComing } from "./skills/SkillItemBossComing";
import { SkillItemLine } from "./skills/SkillItemLine";
import { SkillItemRotationScore } from "./skills/SkillItemRotationScore";
import { createFont, createParticleSystemNode, toNodeSpaceAR } from "../FishTool";
import { BatteryManager } from "../BatteryManager";
import { Fish } from "../Fish";
import SourceManage from "../../../base/SourceManage";

//full screen shake

export class SkillRegisterFunc {
  private skillPlayer: SkillPlayer;
  private backgroundSceneManager: BackgroundSceneManager;
  private sourceManage: SourceManage;
  private batteryManager: BatteryManager;
  private prefabName: string;
  private rootNode: Node;

  constructor(skillPlayer: SkillPlayer, backgroundSceneManager: BackgroundSceneManager, sourceManage: SourceManage,
    batteryManager: BatteryManager, prefabName: string) {
    this.skillPlayer = skillPlayer;
    this.backgroundSceneManager = backgroundSceneManager;
    this.sourceManage = sourceManage;
    this.batteryManager = batteryManager;
    this.prefabName = prefabName;
  }

  public init(rootNode: Node) {
    this.rootNode = rootNode;
  }

  public uninit() {
    this.skillPlayer = null;
    this.backgroundSceneManager = null;
    this.sourceManage = null;
    this.batteryManager = null;
  }

  public fullScreenVibration(obj, id) {
    let skillConfig = this.skillPlayer.getConfigs().skConfig
    let commonConfig = this.skillPlayer.getConfigs().comConfig
    let bkObj = this.backgroundSceneManager.getCurrentBkSenceObj()
    if (bkObj && skillConfig[id]) {
      Shake.create().shake(bkObj.uiRoot, skillConfig[id].t, skillConfig[id].dx, skillConfig[id].loop).start();
    }
  }
  public lineFish(exeObj: Fish, skid) {
    let skillConfig = this.skillPlayer.getConfigs().skConfig
    let textureConfig = this.skillPlayer.getConfigs().tConfig
    let pt = exeObj.getParent()
    let spos = exeObj.getCurrentPos()
    let rlines = exeObj.getLineRelObjLst()
    let sid = skillConfig[skid].src_id

    for (let i = 0; i < rlines.length; i++) {
      let epos = rlines[i].getCurrentPos()
      let info = { pos1: spos, pos2: epos, parent: pt, src_id: sid, }
      exeObj.addCurrentLineObj(new SkillItemLine(this.sourceManage, info, textureConfig, this.rootNode))
    }

    console.log("execute line skill fshid =  " + exeObj.getObjectId() + ",line lst (" + spos.x + " " + spos.y + ")" + " cfg id = " + exeObj.getFishConfigId())
  }
  public addShowWord(exeObj, skid) {
    let skillConfig = this.skillPlayer.getConfigs().skConfig

    let buf = exeObj.getChildByName(skillConfig[skid].key) as Node
    let fl = exeObj.getFishLevel()
    if (buf != null) {
      buf.getComponent(Label).string = (`${fl}`)
    } else {
      buf = new Node()
      const label = buf.addComponent(Label);
      exeObj.addChild(buf)
      label.string = fl;
      // buf = cc.Label.createWithBMFont(skillConfig[skid].fnt_src, `${fl}`)
      label.font = createFont(this.sourceManage, skillConfig[skid].fnt_src);
      buf.name = skillConfig[skid].key
      // buf.setWorldPosition(new Vec3(skillConfig[skid].pos.x, skillConfig[skid].pos.y))
      const pos = skillConfig[skid].pos;
      buf.setPosition(toNodeSpaceAR(this.rootNode, pos))
    }
  }

  public bigFishBoom(exeObj, skid) {
    let skillConfig = this.skillPlayer.getConfigs().skConfig
    let textureConfig = this.skillPlayer.getConfigs().tConfig
    let pos = exeObj.getCurrentPos()
    let ski = skillConfig[skid]

    for (const k in ski.src_id_lst) {
      const v = ski.src_id_lst[k];
      if (v == null) continue;
      let srcItem = textureConfig[v]
      if (srcItem.stype == 1) {

      } else if (srcItem.stype == 2) {

      } else if (srcItem.stype == 3) {
        let pobj = createParticleSystemNode(this.sourceManage, exeObj.getParent(), srcItem)
        pobj.setPosition(toNodeSpaceAR(this.rootNode, pos))
        pobj.setSiblingIndex(pobj.parent.children.length);
      }
    }
  }
  public bossComming(obj, id) {
    let skillConfig = this.skillPlayer.getConfigs().skConfig
    let textureConfig = this.skillPlayer.getConfigs().tConfig
    let config = skillConfig[id]
    if (config) {
      let obj = new SkillItemBossComing(this.skillPlayer, this.sourceManage, this.batteryManager.getParentObj(), config, textureConfig);
      obj.uiRoot.setPosition(0, 0);
    }
  }
  public changeBGM(obj, id) {
    let skillConfig = this.skillPlayer.getConfigs().skConfig

    let config = skillConfig[id]
    if (config) {
      this.backgroundSceneManager.forceChangeBkMus(config.bgm_id)
      obj.setUseChangeBgm(true)
    }
  }
  public resumeCurrentBGM(obj, id) {
    this.backgroundSceneManager.resumeBkMus()
  }


  public rotationScore(obj, id) {
    let skillConfig = this.skillPlayer.getConfigs().skConfig
    let textureConfig = this.skillPlayer.getConfigs().tConfig
    let config = skillConfig[id]
    if (config) {
      let userInfo = obj.getUserInfo()
      let batObj = this.batteryManager.getBatteryByPlayerId(userInfo.player_id)
      if (batObj) {
        let pos = batObj.getBatteryPos()
        let info = {
          beishu: obj.getBeishu(),
          score: obj.getScoreVal(),
          spr_name: config.spr_name,
          src_id: config.src_id,
        }

        let skItem = new SkillItemRotationScore(this.sourceManage, this.prefabName, this.batteryManager.getParentObj(), info, textureConfig)
        if (batObj.getSide() == 3) {
          skItem.uiRoot.setPosition(toNodeSpaceAR(this.rootNode, new Vec3(pos.x, pos.y - 200)))
          // skItem.uiRoot.setWorldPosition(new Vec3(pos.x, pos.y - 200))
        } else {
          skItem.uiRoot.setPosition(toNodeSpaceAR(this.rootNode, new Vec3(pos.x, pos.y + 200)))
          // skItem.uiRoot.setWorldPosition(new Vec3(pos.x, pos.y + 200))
        }

        skItem.uiRoot.setSiblingIndex(skItem.uiRoot.parent.children.length);
        if (this.skillPlayer.getUseSkew() == true) {
          skItem.uiRoot.setScale(new Vec3(-1, -1))
        }
      }
    }
  }

  public funs = [
    { func: this.fullScreenVibration.bind(this), ids: [1] },
    { func: this.lineFish.bind(this), ids: [3, 4] },
    { func: this.bigFishBoom.bind(this), ids: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14] },
    { func: this.rotationScore.bind(this), ids: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29] },
    { func: this.bossComming.bind(this), ids: [50, 51, 52] },
    { func: this.changeBGM.bind(this), ids: [55] },
    { func: this.resumeCurrentBGM.bind(this), ids: [56] },
    { func: this.addShowWord.bind(this), ids: [100] },
  ]

}
