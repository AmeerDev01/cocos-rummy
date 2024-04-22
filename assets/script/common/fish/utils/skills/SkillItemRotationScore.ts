/**
  分数旋转效果
*/
/**
  info = {
    beishu,
    score,
    spr_name,
    src_id
  }
  */

import { Label, Node, instantiate, tween } from "cc";
import { addAnimation, setSpriteFrame } from "../../FishTool";
import SourceManage from "../../../../base/SourceManage";

export class SkillItemRotationScore {
  public uiRoot: Node;
  private sourceManage: SourceManage;
  private prefabName: string;
  private ui: Node;
  constructor(sourceManage: SourceManage, prefabName: string, parentNode: Node, info, textureConfig) {
    this.sourceManage = sourceManage
    this.prefabName = prefabName
    this.uiRoot = new Node();
    parentNode.addChild(this.uiRoot)
    this.init(info, textureConfig)
  }

  public init(info, textureConfig) {
    // this.ui = instantiate(this.sourceManage.getFile(this.prefabName).source)
    // this.uiRoot.addChild(this.ui)
    // this.ui.setPosition(0, 0)

    // let ani_cfg = textureConfig[info.src_id]

    // addAnimation(this.sourceManage, this.ui.getChildByName('spr_bk'), ani_cfg, true, true);

    // setSpriteFrame(this.sourceManage, this.ui.getChildByName('spr_fish'), info.spr_name)
    // this.ui.getChildByName('fnt_beishu').getComponent(Label).string = ("x" + info.beishu)
    // this.ui.getChildByName('fnt_score').getComponent(Label).string = (`${info.score}`)

    // tween(this.uiRoot).delay(2.5).call(() => {
    //   this.destroy();
    // }).start();
  }

  public destroy() {
    this.uiRoot.destroy();
    this.sourceManage = null;
    this.ui = null;
  }
}
