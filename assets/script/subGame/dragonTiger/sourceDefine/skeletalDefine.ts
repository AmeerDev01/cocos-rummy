import { Prefab, sp } from "cc"
import { loopFiles } from "../../../base/SourceManage"

//动画资源 路径
export enum SkeletalPathDefine {
    DRAGONTIGER_DJS5_1="car/djs5_1",
    DRAGONTIGER_DJS5_2="car/djs5_2",
    DRAGONTIGER_DJS5_3="car/djs5_3",
    DRAGONTIGER_DJS5_4="car/djs5_4",
    DRAGONTIGER_DJS5_5="car/djs5_5",
    DRAGONTIGER_VS="car/dragonTiger/VS",
    DRAGONTIGER_GAME_START_BET="car/start_bet",
    DRAGONTIGER_GAME_STOP_BET="car/stop_bet",

}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, sp.SkeletonData, SkeletalPathDefine)
