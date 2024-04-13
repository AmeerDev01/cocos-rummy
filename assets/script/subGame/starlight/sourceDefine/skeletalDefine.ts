import { Prefab, sp } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SkeletalPathDefine {
  yellow_gem = "car/iconCar/st_icon_8",
  blue_green_gem = "car/iconCar/st_icon_5",
  green_gem = "car/iconCar/st_icon_6",
  blue_gem = "car/iconCar/st_icon_9",
  red_gem = "car/iconCar/st_icon_7",
  star = "car/iconCar/st_icon_4",
  moon = "car/iconCar/st_icon_3",
  heart = "car/iconCar/icon_2",
  sun = "car/iconCar/st_icon_1",
  scatter = "car/iconCar/scatter",
  green_heart = "car/iconCar/icon_bl",
  blue_heart = "car/iconCar/icon_bl",
  purple_heart = "car/iconCar/icon_bl",
  yellow_heart = "car/iconCar/icon_bl",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, sp.SkeletonData, SkeletalPathDefine)