import { Font } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum FontPathDefine {
  WU_BET = "font/shuzi_longhu_cm_wu",
  BLUE_BET = "font/shuzi_longhu_cm_lan",
  DARK_BLUE_BET = "font/shuzi_longhu_cm_shenlan",
  GREEN_BET = "font/shuzi_longhu_cm_lv",
  ORANGE_BET = "font/shuzi_longhu_cm_cheng",
  PURPLE_BET = "font/shuzi_longhu_cm_zi",
  RED_BET = "font/shuzi_longhu_cm_hong",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Font, FontPathDefine)