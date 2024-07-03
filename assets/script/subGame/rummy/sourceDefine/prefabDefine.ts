import { Prefab } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum PrefabPathDefine {
  LOAING_PANEL = "prefabs/prefabs_rummy_loading",
  ROOM_CHOOSE = "prefabs/prefabs_rummy_chooseRoom1",
  GAME_MAIN = "prefabs/prefabs_rummy_main",
  HEADER = "prefabs/prefabs_rummy_header",
  FOOTER = "prefabs/prefabs_rummy_footer",
  HEAD = "prefabs/prefabs_rummy_head",
  MINE = "prefabs/prefabs_rummy_mine",
  CARD = "prefabs/prefabs_rummy_card",
  HELP_PANEL = "prefabs/prefabs_rummy_help",
  PROMPT_PANEL = "prefabs/prefabs_rummy_prompt",
  RESULT_PANEL = "prefabs/prefabs_rummy_result",
  SETTING_PANEL = "prefabs/prefabs_rummy_setting",
  RULE_PANEL = "prefabs/prefabs_rummy_rules",


  TEST = "prefabs/prefabs_rummy_test"
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Prefab, PrefabPathDefine)
