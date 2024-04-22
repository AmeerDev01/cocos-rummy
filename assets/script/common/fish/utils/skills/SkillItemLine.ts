import { Node, Sprite, UITransform, Vec2, Vec3 } from "cc"
import { addAnimation, createAnimationNode, toNodeSpaceAR } from "../../FishTool"
import SourceManage from "../../../../base/SourceManage"


/**
连线技能项
 */
let atan = Math.atan
let sqrt = Math.sqrt
let pow = Math.pow
let pi = Math.PI

let lineZOrder = 750000

export class SkillItemLine {
  private uiRoot: Node;
  private sourceManage: SourceManage;
  private rootNode: Node

  constructor(sourceManage: SourceManage, info, textureConfig, rootNode: Node) {
    this.sourceManage = sourceManage;
    this.rootNode = rootNode;
    this.init(info, textureConfig)
  }

  public init(info, textureConfig) {
    this.runLine(info, textureConfig)
  }

  public runLine(info, textureConfig) {
    let srcConfig = textureConfig[info.src_id]

    if (srcConfig) {
      this.uiRoot = createAnimationNode(this.sourceManage, info.parent, srcConfig, true, true)
      this.uiRoot.getComponent(UITransform).setAnchorPoint(new Vec2(0, 0.5))
      this.uiRoot.setSiblingIndex(this.uiRoot.parent.children.length);
      this.setPosAndRotate(info)
    }
  }


  public getSideByPos(pos1: Vec3, pos2: Vec3) {
    let side = 0

    // let sp = { x = pos2.x - pos1.x, y = pos2.y - pos1.y, }
    let sp = new Vec3(pos2.x - pos1.x, pos2.y - pos1.y);

    if (sp.x >= 0 && sp.y >= 0) {
      side = 1
    } else if (sp.x >= 0 && sp.y <= 0) {
      side = 4
    } else if (sp.x <= 0 && sp.y >= 0) {
      side = 2
    } else if (sp.x <= 0 && sp.y <= 0) {
      side = 3
    }

    return side
  }

  public getAngleByPos(pos1: Vec3, pos2: Vec3) {
    let angle = 0
    let side = this.getSideByPos(pos1, pos2)

    if (pos1.x == pos2.x) {
      if (side == 1) {
        angle = 90
      } else if (side == 4) {
        angle = 270
      } else if (side == 2) {
        angle = 90
      } else if (side == 3) {
        angle = 270
      }
    } else {
      let k = (pos1.y - pos2.y) / (pos1.x - pos2.x)
      angle = atan(k) * 180 / pi

      if (side == 1 && angle <= 0) {
        angle = -angle
      } else if (side == 2 && angle < 0) {
        angle = 180 + angle
      } else if (side == 3 && angle > 0) {
        angle = 180 + angle
      } else if (side == 3 && angle <= 0) {
        angle = 180 - angle
      } else if (side == 4 && angle <= 0) {
        angle = 2 * 180 + angle
      }
    }

    return angle
  }

  public setPosAndRotate(info) {
    // this.uiRoot.setWorldPosition(new Vec3(info.pos1.x, info.pos1.y))
    this.uiRoot.setPosition(toNodeSpaceAR(this.rootNode, info.pos1))

    let size = this.uiRoot.getComponent(UITransform)
    // 计算两点间的距离
    let pos_dis = sqrt(pow(info.pos1.x - info.pos2.x, 2) + pow(info.pos1.y - info.pos2.y, 2))
    if (pos_dis > size.width) {
      this.uiRoot.setScale(new Vec3(pos_dis / size.width, 1))
    }

    // 计算连线的角度，也就是两点间的夹角
    let angle = this.getAngleByPos(info.pos1, info.pos2)
    // this.uiRoot.angle = 360 - angle;
    this.uiRoot.angle = angle;
  }

  public destroy() {
    this.uiRoot.destroy();
    this.sourceManage = null;
  }
}


