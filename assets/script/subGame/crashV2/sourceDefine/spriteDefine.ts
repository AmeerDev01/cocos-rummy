import { SpriteFrame } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SpriteFramePathDefine {
    hong = "img/icon_lishibox_hong/spriteFrame",
    huang = "img/icon_lishibox_huang/spriteFrame",
    lv = "img/icon_lishibox_lv/spriteFrame",
    lan = "img/icon_lishibox_lan/spriteFrame",
    zi = "img/icon_lishibox_zi/spriteFrame",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, SpriteFrame, SpriteFramePathDefine)