/**
  炮台皮肤配置,skin
 */

import { ISourceFile } from "../../../base/SourceManage";
import { getFileName, getFileType } from "../../../common/fish/FishTool";

export const getFishBatterySkinConfigSourceFiles = (bundlePkgName: string) => {
  const arr: ISourceFile[] = []
  for (const key in fishBatterySkinConfig) {
    const v = fishBatterySkinConfig[key];
    const file = v.src;
    if (typeof(file) === 'string' && file.indexOf('.') !== -1) {
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
export const fishBatterySkinConfig = {
  // --普通炮台
  [0]: { id: 0, name: "默认皮肤", src: 1001, ani1: "cannon0_%d", ani2: "cannon_norm", time: 0.05, },
  [1]: { id: 1, name: "超人归来", src: "battery/pao-1.json", ani1: "jing", ani2: "dong", time: 0.2, time_scale: 3.5, },
  [2]: { id: 2, name: "黑暗骑士", src: "battery/pao-2.json", ani1: "jing", ani2: "dong", time: 0.2, time_scale: 3.5, },
  [3]: { id: 3, name: "钢铁之躯", src: "battery/pao-3.json", ani1: "jing", ani2: "dong", time: 0.2, time_scale: 3.5, },
  [4]: { id: 4, name: "正义盟友", src: "battery/pao-4.json", ani1: "jing", ani2: "dong", time: 0.2, time_scale: 3.5, },
  [5]: { id: 5, name: "雷神之锤", src: "battery/pao-5.json", ani1: "jing", ani2: "dong", time: 0.2, time_scale: 3.5, },
  [6]: { id: 6, name: "狮吼礼炮", src: "battery/pao-6.json", ani1: "jing", ani2: "dong", time: 0.2, time_scale: 3.5, },
  [7]: { id: 7, name: "霸之龙炮", src: "battery/pao-7.json", ani1: "jing", ani2: "dong", time: 0.2, time_scale: 3.5, },
}
