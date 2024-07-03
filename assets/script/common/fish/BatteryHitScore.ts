import { Label, Node, UIOpacity, Vec3, tween } from "cc";
import SourceManage from "../../base/SourceManage";
import { createFont, llcompare, toNodeSpaceAR } from "./FishTool";

/**
  提示分数字体显示
 */
export class BatteryHitScore {
  private sourceManage: SourceManage;
  public uiRoot: Node;
  private label: Label;
  private opacity: UIOpacity;
  private bused_state: boolean;
  private id: number;
  private rootNode: Node;

  constructor(sourceManage: SourceManage, parentNode: Node, config, id, rootNode: Node) {
    this.sourceManage = sourceManage;
    this.rootNode = rootNode;
    this.uiRoot = new Node();
    parentNode.addChild(this.uiRoot)
    this.opacity = this.uiRoot.addComponent(UIOpacity)
    this.label = this.uiRoot.addComponent(Label);

    this.init(config, id);
  }

  public init(config, id) {
    this.label.string = "0"
    this.label.font = createFont(this.sourceManage, config.src);
    this.uiRoot.active = (false)
    // this.uiRoot.setWorldPosition(new Vec3(0, 0))
    this.uiRoot.setPosition(toNodeSpaceAR(this.rootNode, new Vec3(0, 0)))
    this.bused_state = false
    this.id = id
  }

  public show(pos: Vec3, rot: number, score: number, call) {
    this.bused_state = true
    this.uiRoot.setWorldPosition(new Vec3(pos.x, pos.y))
    // this.uiRoot.setPosition(toNodeSpaceAR(this.rootNode, pos))
    this.uiRoot.angle = rot
    let strScore = `${score}`
    if (llcompare(score, 0) >= 0) {
      strScore = `+${score}`
    }
    this.label.string = (strScore)

    const y = pos.y > 200 ? -80 : 80;

    tween(this.uiRoot)
      .delay(2.5)
      .call(() => {
        if (this.uiRoot.isValid) {
          this.uiRoot.active = true
          call && call();
        }
      })
      .by(0.3, { worldPosition: new Vec3(0, y) })
      .delay(0.8).call(() => {
        tween(this.opacity)
          .to(0.3, { opacity: 0 }).call(() => {
            if (this.uiRoot.isValid) {
              this.uiRoot.active = false
              this.uiRoot.setWorldPosition(new Vec3(0, 0))
              // this.uiRoot.setPosition(toNodeSpaceAR(this.rootNode, new Vec3(0, 0)))
              this.bused_state = false
              this.opacity.opacity = 255
            }
          }).start();
      })
      .start()
    // this.runAction(cc.sequence({
    //   cc.delayTime(2.5), cc.callFunc(() => {
    //     this.active = (true)
    //     if (call) {
    //       call()
    //     }
    //   }), cc.MoveBy.create(0.3, cc.v2(0, 80)), cc.delayTime(0.8), cc.fadeOut(0.3), cc.callFunc(() => {
    //     this.active = (false)
    //     this.active = (false)
    //     this.setPosition(0, 0)
    //     this.bused_state = false
    //     this.opacity = (255)
    //   })
    // }))
  }

  public getUseState() {
    return this.bused_state
  }

  public getId() {
    return this.id
  }

  public destory() {
    this.uiRoot.destroy();
    this.sourceManage = null;
    this.label = null;
    this.opacity = null;
  }
}
// public create(config, id) {
// 	let obj = BatteryHitScore.new()
// 	if( obj ){
// 		obj.init(config, id)
// 	}
// 	return obj
// }

