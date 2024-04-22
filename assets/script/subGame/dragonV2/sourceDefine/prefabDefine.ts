import { Prefab } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum PrefabPathDefine {
  LOAING_PANEL = "prefabs/prefabs_dragonV2_loading",
  MAIN_GAME = "prefabs/slotBg_new",
  ICON = "prefabs/icon",
  FLY_BG = "prefabs/flyBg",
  DIALOG_WIN = "prefabs/dialogWin",
  SINGLE_ICON_ROLLER = "prefabs/singleIconRoller",
  PYROSPHERE = "prefabs/pyrosphere",
  RULEPANEL = "prefabs/rulePanel",
  Particle2D = "prefabs/Particle2D",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Prefab, PrefabPathDefine)
