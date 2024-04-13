import { Prefab } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum PrefabPathDefine {
  LOAING_PANEL = "prefabs/prefabs_egyptv2_loading",
  MAIN_GAME = "prefabs/slotBg_new",
  ICON = "prefabs/icon",
  TWO_ICON = "prefabs/two_icon",
  THREE_ICON = "prefabs/three_icon",
  DIALOG_WIN = "prefabs/dialogWin",
  SINGLE_ICON_ROLLER = "prefabs/singleIconRoller",
  RULEPANEL = "prefabs/rulePanel",
  Particle2D = "prefabs/Particle2D",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Prefab, PrefabPathDefine)
