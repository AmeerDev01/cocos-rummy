/** 
  鱼网配置
  id,唯一标识
  src_id,资源id[spr_ani_config.lua]
  desc,描述信息
*/
import { ISourceFile } from "../../../base/SourceManage";
import { getFileName, getFileType } from "../../../common/fish/FishTool";

export const getFishNetConfigSourceFiles = (bundlePkgName: string) => {
  const arr: ISourceFile[] = []
  for (const key in fishNetConfig) {
    const v = fishNetConfig[key];
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

export const fishNetConfig = {
  [0]: { id: 0, desc: "默认皮肤", src: "bullets/hit_1ji.json", ani: "animation", },
  [1]: { id: 1, desc: "超人归来", src: "bullets/hit_pifu1.json", ani: "jibie1", },
  [2]: { id: 2, desc: "黑暗骑士", src: "bullets/hit_pifu2.json", ani: "jibie1", },
  [3]: { id: 3, desc: "钢铁之躯", src: "bullets/hit_pifu3.json", ani: "jibie1", },
  [4]: { id: 4, desc: "正义盟友", src: "bullets/hit_pifu4.json", ani: "jibie1", },
  [5]: { id: 5, desc: "雷神之锤", src: "bullets/hit_pifu5.json", ani: "jibie1", },
  [6]: { id: 6, desc: "狮吼礼炮", src: "bullets/yuwang-5.json", ani: "animation", },
  [7]: { id: 7, desc: "霸之龙炮", src: "bullets/yuwang-3.json", ani: "jibie1", },
}
