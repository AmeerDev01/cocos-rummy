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

  CARD_NUMBER_SMALL_0 = "img/cards_misNum_0/spriteFrame",
  CARD_NUMBER_SMALL_1 = "img/cards_misNum_1/spriteFrame",
  CARD_NUMBER_SMALL_2 = "img/cards_misNum_2/spriteFrame",
  CARD_NUMBER_SMALL_3 = "img/cards_misNum_3/spriteFrame",
  CARD_NUMBER_SMALL_4 = "img/cards_misNum_4/spriteFrame",
  CARD_NUMBER_SMALL_5 = "img/cards_misNum_5/spriteFrame",
  CARD_NUMBER_SMALL_6 = "img/cards_misNum_6/spriteFrame",
  
  WORD_SINGLE = "img/word_single/spriteFrame",
  WORD_DOUBLE = "img/word_double/spriteFrame",
  WORD_TRIPLE = "img/word_triple/spriteFrame",
  WORD_QUARTET = "img/word_quartet/spriteFrame",
  WORD_QUINTET = "img/word_quintet/spriteFrame",

  WORD_TIMES_1 = "img/word_times_1/spriteFrame",
  WORD_TIMES_2 = "img/word_times_2/spriteFrame",
  WORD_TIMES_3 = "img/word_times_3/spriteFrame",
  WORD_TIMES_4 = "img/word_times_4/spriteFrame",
  WORD_TIMES_5 = "img/word_times_5/spriteFrame",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, SpriteFrame, SpriteFramePathDefine)