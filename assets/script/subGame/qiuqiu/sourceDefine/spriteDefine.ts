import { Asset, Prefab, SpriteFrame, sp } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SpriteFramePathDefine {
    CARD_NUMBER_0 = "cards/card_big_0/spriteFrame",
    CARD_NUMBER_1 = "cards/card_big_1/spriteFrame",
    CARD_NUMBER_2 = "cards/card_big_2/spriteFrame",
    CARD_NUMBER_3 = "cards/card_big_3/spriteFrame",
    CARD_NUMBER_4 = "cards/card_big_4/spriteFrame",
    CARD_NUMBER_5 = "cards/card_big_5/spriteFrame",
    CARD_NUMBER_6 = "cards/card_big_6/spriteFrame",
    
    
    CHIP1 = "chips/chip_qiuqiu_1/spriteFrame",
    CHIP2 = "chips/chip_qiuqiu_2/spriteFrame",
    CHIP3 = "chips/chip_qiuqiu_3/spriteFrame",
    CHIP4 = "chips/chip_qiuqiu_4/spriteFrame",
    CHIP5 = "chips/chip_qiuqiu_5/spriteFrame",
    CHIP6 = "chips/chip_qiuqiu_6/spriteFrame",
    CHIP7 = "chips/chip_qiuqiu_7/spriteFrame",
    CHIP8 = "chips/chip_qiuqiu_8/spriteFrame",
    CHIP9 = "chips/chip_qiuqiu_9/spriteFrame",


    zi_qiuqiu_jiesuan_BigCards = "img/zi_qiuqiu_jiesuan_BigCards/spriteFrame",
    zi_qiuqiu_jiesuan_QiuQiu = "img/zi_qiuqiu_jiesuan_QiuQiu/spriteFrame",
    zi_qiuqiu_jiesuan_saix = "img/zi_qiuqiu_jiesuan_saix/spriteFrame",
    zi_qiuqiu_jiesuan_SmallCards = "img/zi_qiuqiu_jiesuan_SmallCards/spriteFrame",
    zi_qiuqiu_jiesuan_TwinCards = "img/zi_qiuqiu_jiesuan_TwinCards/spriteFrame",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, SpriteFrame, SpriteFramePathDefine)