import { Asset, Prefab, SpriteFrame, sp } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SpriteFramePathDefine {
    kuang1 = "img/bigImg/kuang1/spriteFrame",
    kuang2 = "img/bigImg/kuang2/spriteFrame",
    kuang3 = "img/bigImg/kuang3/spriteFrame",
    kuang4 = "img/bigImg/kuang4/spriteFrame",
    kuang5 = "img/bigImg/kuang5/spriteFrame",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, SpriteFrame, SpriteFramePathDefine)