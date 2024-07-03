import { Prefab } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum PrefabPathDefine {
  LOAING_PANEL = "prefabs/prefabs_gxfcv2_loading",
  MAIN_GAME = "prefabs/slotBgnew",
  ICON = "prefabs/icon",
  DIALOG_WIN = "prefabs/dialogWin",
  RULEPANEL = "prefabs/rulePanel",
  Particle2D = "prefabs/Particle2D",
  FLY_BG = "prefabs/flyBg",
  SINGLE_ICON_ROLLER = "prefabs/singleIconRoller",
  
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Prefab, PrefabPathDefine)
