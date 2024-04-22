import { Prefab, sp } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SkeletalPathDefine {
  rhombic = "car/icon/thor_icon_1",
  triangle = "car/icon/thor_icon_2",
  hexagonal = "car/icon/thor_icon_3",
  inverted_triangle = "car/icon/thor_icon_4",
  pentagon = "car/icon/thor_icon_5",
  grail = "car/icon/hw_thor_icon_6",
  ring = "car/icon/thor_icon_7",
  hourglass = "car/icon/thor_hourglass",
  crown = "car/icon/thor_icon_9",
  scatter = "car/icon/thor_scatter",
  green = "car/icon/thor_anim_wild_green",
  blue = "car/icon/thor_anim_wild_blue",
  purple = "car/icon/thor_anim_wild",
  red = "car/icon/thor_anim_wild_red",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, sp.SkeletonData, SkeletalPathDefine)