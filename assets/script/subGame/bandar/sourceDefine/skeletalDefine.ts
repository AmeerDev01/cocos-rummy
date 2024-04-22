import { Prefab, sp } from "cc"
import { loopFiles } from "../../../base/SourceManage"

//动画资源 路径
export enum SkeletalPathDefine {

}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, sp.SkeletonData, SkeletalPathDefine)
