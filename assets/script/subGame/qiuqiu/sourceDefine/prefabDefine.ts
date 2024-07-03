import { Prefab } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum PrefabPathDefine {
  LOAING_PANEL = "prefabs/prefabs_quiqui_loading",
  ROOM_CHOOSE = "prefabs/prefabs_quiqui_room",
  MAIN_BOARD = "prefabs/prefabs_quiqui_main",
  prefabs_quiqui_left1 = "prefabs/prefabs_quiqui_left1",
  prefabs_quiqui_left2 = "prefabs/prefabs_quiqui_left2",
  prefabs_quiqui_left3 = "prefabs/prefabs_quiqui_left3",
  prefabs_quiqui_right1 = "prefabs/prefabs_quiqui_right1",
  prefabs_quiqui_right2 = "prefabs/prefabs_quiqui_right2",
  prefabs_quiqui_right3 = "prefabs/prefabs_quiqui_right3",
  prefabs_quiqui_mine = "prefabs/prefabs_quiqui_mine",
  SET_PANEL = "prefabs/prefabs_quiqui_set",
  prefabs_quiqui_sure = "prefabs/prefabs_quiqui_sure",
  prefads_quiqui_sendcard = "prefabs/prefads_quiqui_sendcard",
  prefabs_quiqui_bigCard = "prefabs/prefabs_quiqui_bigCard",
  prefabs_quiqui_chip = "prefabs/prefabs_quiqui_chip",
  prefabs_quiqui_operate = "prefabs/prefabs_quiqui_operate",
  prefabs_quiqui_modal = "prefabs/prefabs_quiqui_modal",

  
  TEST = "prefabs/prefabs_quiqui_test"
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Prefab, PrefabPathDefine)
