import { Prefab } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum PrefabPathDefine {
  MAIN_GAME = "prefabs/slotBg_new",
  LOAING_PANEL = "prefabs/prefab_godWealth_loading",
  ICON = "prefabs/icon",
  ICON2 = "prefabs/icon2",
  RULE = "prefabs/rulePanel",
  DIALOG_WIN = 'prefabs/dialogWin',
  FLY_BG = "prefabs/flyBg",
  SINGLE_ICON_ROLLER = "prefabs/singleIconRoller",
  Particle2D = "prefabs/Particle2D",
  
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Prefab, PrefabPathDefine)
