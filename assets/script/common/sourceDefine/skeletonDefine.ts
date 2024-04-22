import { sp } from "cc"
import { loopFiles } from "../../base/SourceManage"

export enum SkeletonPathDefine {
  egg = "gift/car/jidan",
  durian = "gift/car/liulian",
  rose = "gift/car/meigui",
  pan = "gift/car/pdg",
  beer = "gift/car/pjgb",
  money = "gift/car/qian",
  bucket = "gift/car/shuitong",
  shoe = "gift/car/tuoxie",
  kiss = "gift/car/wen",
  cock = "gift/car/zhuaji",
  brick = "gift/car/zhuantou",
  tomato = "gift/car/xihongshi",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, sp.SkeletonData, SkeletonPathDefine)