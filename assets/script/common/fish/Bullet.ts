import { Color, Graphics, Node, Rect, UITransform, Vec3, misc, sp, view } from "cc"
import { BatteryManager } from "./BatteryManager"
import { createSkeleton, createSpriteNode, toNodeSpaceAR } from "./FishTool";
import SourceManage from "../../base/SourceManage";
import { ICreateObj } from "./ObjectPool";
import { Battery, UserInfo } from "./Battery";
import { FishNetManager } from "./FishNetManager";


export const BulletCreate: ICreateObj = {
  create: (info) => {
    return new Bullet(info);
  }
}

/**
  子弹
  side 1->left,2->right,3->top,4->bottom
 */
const pi = Math.PI
const pia = 180
const sin = Math.sin
const cos = Math.cos
const deg = misc.radiansToDegrees
const rad = misc.degreesToRadians
const atan2 = Math.atan2
const BULLET_INVALIDE_ID = -1;
const bulletZOrder = 600000
const ORGIN_X = -100;
const ORGIN_Y = -100;
/**是否绘制包围盒 */
const isDrawBondingBox = false;

function pointDeg(dx, dy) {
  let rad = atan2(dy, dx)
  let r = deg(rad)
  if (r > 360) {
    return r - 360
  } else if (r < -360) {
    return r + 360
  } else {
    return r
  }
}

export class Bullet {
  private bulletConfig = null
  private bondRect: Rect = null
  private bulletObj: Node;
  public uiRoot: Node = null;
  private moveV = null
  private bondingBox = null
  private dataID = null
  private netID = null
  private objectID: number = null
  private isAlive = null
  private angle: number = 0
  private refectPos: Vec3 = new Vec3(0, 0)
  private linePos: Vec3 = new Vec3(0, 0)
  private objPos: Vec3 = new Vec3(0, 0)
  private offset: Vec3 = new Vec3(0, 0)
  private battery: Battery = null
  private isOutX = null
  private isOutY = null
  private userInfo: UserInfo = null
  private lockFishID: number
  private runSeconds: number

  /**包围盒节点 */
  private draw: Node;

  private batteryManager: BatteryManager;
  private sourceManage: SourceManage;
  private fishNetManager: FishNetManager;
  /**缩放比例 */
  private scaleRatio: number = 1;

  constructor(info) {
  }

  public initEnv(bulConfig, bSize, batteryManager: BatteryManager, sourceManage: SourceManage, fishNetManager: FishNetManager, scaleRatio: number = 1) {
    this.batteryManager = batteryManager;
    this.sourceManage = sourceManage;
    this.bulletConfig = bulConfig
    this.fishNetManager = fishNetManager;
    this.scaleRatio = scaleRatio;
    this.bondRect = new Rect(0, 0, view.getVisibleSize().width, view.getVisibleSize().height)
    // this.bondRect = new Rect(0, 0, bSize.width, bSize.height)
  }
  public init(info) {
    // ui root
    this.uiRoot = new Node();
    this.uiRoot.setSiblingIndex(bulletZOrder);

    // create bullet obj
    let bulletItem = this.bulletConfig[info.id]
    this.bulletObj = null
    if (bulletItem.ani === "") {
      this.bulletObj = createSpriteNode(this.sourceManage, this.uiRoot, bulletItem.src);
    } else {
      // let jsFile = bulletItem.src + ".json"
      // let asFile = bulletItem.src + ".atlas"
      this.bulletObj = createSkeleton(this.sourceManage, this.uiRoot, bulletItem.src)
      this.bulletObj.getComponent(sp.Skeleton).setAnimation(0, bulletItem.ani, true)
    }
    this.bulletObj.angle = 90;
    this.bulletObj.active = (true)
    this.bulletObj.setWorldPosition(new Vec3(0, 0))

    this.uiRoot.active = (false)
    this.uiRoot.setWorldPosition(new Vec3(ORGIN_X, ORGIN_Y))
    this.uiRoot.angle = 0

    this.moveV = bulletItem.act_v
    this.bondingBox = bulletItem.bonding_box
    this.dataID = bulletItem.id
    this.netID = bulletItem.net_id
    this.objectID = info.obj_id
    this.isAlive = false
    this.angle = 0
    // this.refectPos = { x: 0, y: 0 }
    // this.linePos = { x: 0, y: 0 }
    // this.objPos = { x: 0, y: 0 }
    // this.offset = { rx: 0, ry: 0 }
    this.battery = null
    this.isOutX = false
    this.isOutY = false

    this.userInfo = {
      player_id: '',//玩家id
      set_id: 0,
      is_local: false,//是否为本地，区别自己与别人的炮台
      server_id: BULLET_INVALIDE_ID,//服务器子弹id标识
      gold: 0,//金币
      head_id: 0,//头像
      level: 0,//等级
      vip_level: 0,//vip等级
      nick_name: '',//昵称
      battery_id: 0,//炮id
      battery_score: 0,//炮分数
      isPowerBattery: false, //是否能量炮
      room_id: '',//房间号
      ready: 0, //0:准备,1未准备
      offline: 0, //0:没有离线,非0:离线
      bullet: 0, //剩余子弹  
    }

    this.lockFishID = -1
    this.runSeconds = 0


    if (isDrawBondingBox) {
      this.draw = new Node();
      this.addGraphics(this.draw);
      this.uiRoot.addChild(this.draw)
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

  public resumeOrgin() {
    this.uiRoot.angle = 0
    this.uiRoot.active = (false)
    this.uiRoot.setWorldPosition(new Vec3(ORGIN_X, ORGIN_Y))

    this.userInfo.player_id = ''
    this.userInfo.is_local = false
    this.userInfo.server_id = BULLET_INVALIDE_ID
    this.lockFishID = -1
    this.runSeconds = 0
    this.isAlive = false
    this.battery = null
  }

  public reset(pos, angle, lockFishID, playerID, serverID, isLocal) {
    this.refectPos.x = pos.x
    this.refectPos.y = pos.y
    this.objPos.x = pos.x
    this.objPos.y = pos.y
    this.linePos.x = 0
    this.linePos.y = 0
    this.angle = angle
    this.lockFishID = lockFishID
    this.runSeconds = 0
    this.userInfo.player_id = playerID
    this.userInfo.server_id = serverID
    this.userInfo.is_local = isLocal
    this.isAlive = true
    this.battery = this.batteryManager.getBatteryByPlayerId(playerID)

    // this.uiRoot.setWorldPosition(new Vec3(pos.x, pos.y))
    this.uiRoot.setPosition(toNodeSpaceAR(this.batteryManager.getRootNode(), pos));
    // this.uiRoot.angle = 2 * pia - angle;
    this.uiRoot.angle = pia + angle;
    this.uiRoot.active = (true)

    let ranti = rad(this.angle)
    this.offset.x = cos(ranti)
    this.offset.y = sin(ranti)
  }

  public shotSomething() {
    this.fishNetManager.play({ pos: this.objPos, id: this.netID })
  }

  /**
   * 获取子弹的碰撞盒
   */
  public getBondingBox() {
    let ranti = rad(this.angle)
    let bbxs = []
    for (const k in this.bondingBox) {
      const v = this.bondingBox[k];
      if (!v) continue;
      let newA = 0
      let newB = 0
      if (v.a !== 0 || v.b !== 0) {
        newA = v.a * cos(ranti) + v.b * sin(ranti)
        newB = v.b * cos(ranti) - v.a * sin(ranti)
      }
      bbxs.push({ a: newA + this.objPos.x, b: newB + this.objPos.y, r: v.r })
    }
    // console.log("bullet bbxs ", JSON.stringify(bbxs));
    return bbxs
  }

  public update(dt) {
    let offset = this.offset
    let linePos = this.linePos
    let refPos = this.refectPos
    let objPos = this.objPos
    let curX = refPos.x + linePos.x
    let curY = refPos.y + linePos.y

    if (!this.isOutX) {
      if (curX < 0 || curX > this.bondRect.width) {
        offset.x = -offset.x
        this.isOutX = true
      }
    } else if (curX > 0 && curX < this.bondRect.width) {
      this.isOutX = false
    }

    if (!this.isOutY) {
      if (curY < 0 || curY > this.bondRect.height) {
        offset.y = -offset.y
        this.isOutY = true
      }
    } else if (curY > 0 && curY < this.bondRect.height) {
      this.isOutY = false
    }

    let isChange = false
    if (this.isOutX || this.isOutY) {
      isChange = true
      this.angle = pointDeg(offset.x, offset.y)
      this.runSeconds = 0
      refPos.x = curX
      refPos.y = curY
      linePos.x = 0
      linePos.y = 0
      // this.uiRoot.angle = 2 * pia - this.angle
      this.uiRoot.angle = pia + this.angle
    }

    let battery = this.battery
    if (battery && isChange === false) {
      if (battery.isLockFish() && (battery.getLockFishId() === this.lockFishID && this.lockFishID !== -1)) {
        this.angle = battery.getLockAngle()
        let ranti = rad(this.angle)
        offset.x = cos(ranti)
        offset.y = sin(ranti)
        // this.uiRoot.angle = 2 * pia - this.angle
        this.uiRoot.angle = pia + this.angle
      }
    } else {
      this.lockFishID = -1
    }

    this.runSeconds = this.runSeconds + dt
    let distance = this.moveV * this.runSeconds
    linePos.x = offset.x * distance
    linePos.y = offset.y * distance
    objPos.x = refPos.x + linePos.x
    objPos.y = refPos.y + linePos.y


    this.uiRoot.setPosition(toNodeSpaceAR(this.batteryManager.getRootNode(), objPos));
    // this.uiRoot.setWorldPosition(new Vec3(objPos.x, objPos.y))
    // console.log('ballet pos -------  : ', objPos.x, objPos.y);

    if (isDrawBondingBox) {
      const graphics = this.draw.getComponent(Graphics);
      graphics.clear();
      for (const key in this.bondingBox) {
        const v = this.bondingBox[key];
        if (!v) continue;
        graphics.circle(v.a, v.b, v.r);
        graphics.stroke();
      }
    }
  }
  public getCurrentPos() {
    return this.objPos
  }

  public getUserInfo() {
    return this.userInfo
  }

  public getDataId() {
    return this.dataID
  }

  public getObjectId() {
    return this.objectID
  }

  public getUseState() {
    return this.isAlive
  }

  public isMyBullet() {
    return this.userInfo.is_local
  }

  public getBulletPlayerId() {
    return this.userInfo.player_id
  }

  public getBulletServeId() {
    return this.userInfo.server_id
  }

  public getCurLockFishId() {
    return this.lockFishID
  }

}
