import { Font } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum FontPathDefine {
  WU_BET = "chips/num_wu",
  BLUE_BET = "chips/num_blue",
  DARK_BLUE_BET = "chips/num_darkBlue",
  GREEN_BET = "chips/num_green",
  ORANGE_BET = "chips/num_orange",
  PURPLE_BET = "chips/num_purple",
  RED_BET = "chips/num_red",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Font, FontPathDefine)