import { ISourceFile } from "../../../base/SourceManage";
import { getFileName, getFileType } from "../../../common/fish/FishTool";

/**
  字体资源配置
 */
export const getFishFntResConfigSourceFiles = (bundlePkgName: string) => {
  const arr: ISourceFile[] = []
  for (const key in fishFntResConfig) {
    const v = fishFntResConfig[key];
    const file = v.src;
    if (typeof (file) === 'string' && file.indexOf('.') !== -1) {
      arr.push({
        bundlePkgName: bundlePkgName,
        path: getFileName(file),
        sourceType: getFileType(file),
        source: null,
        isPreLoad: true
      })
    }
  }
  return arr
}
export const fishFntResConfig = {
  [1]: { id: 1, desc: "鱼死亡时的分数", src: "fnt/battle2.fnt", },
  [2]: { id: 2, desc: "炮台积分", src: "fnt/battlejinbi.fnt", },
  [3]: { id: 3, desc: "倒时计", src: "fnt/countime.fnt", },
  [4]: { id: 4, desc: "大鱼死亡时的分数1", src: "fnt/fishdeadlabel.fnt", },
  [5]: { id: 5, desc: "大鱼死亡时的分数1", src: "fnt/fishdeadlabel1.fnt", },
  [6]: { id: 6, desc: "自己炮台加分提示", src: "fnt/hitnumber.fnt", },
  [7]: { id: 7, desc: "炮台倍数", src: "fnt/paobei.fnt", },
  [8]: { id: 8, desc: "大鱼转盘倍数", src: "fnt/zhuanpanft.fnt", },
  [9]: { id: 9, desc: "大鱼转盘分数", src: "fnt/zhuanpanft1.fnt", },
  [10]: { id: 10, desc: "别人炮台加分提示/分数为负", src: "fnt/hitnumber1.fnt", },
  [11]: { id: 11, desc: "分数为正", src: "fnt/scorewinnum.fnt", },
  [12]: { id: 12, desc: "分数为负", src: "fnt/scorelosenum.fnt", },
}

