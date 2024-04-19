/**
  背景声音资源配置
  id,资源id
  file,资源路径
  desc,描述信息
 */

import { ISourceFile } from "../../../base/SourceManage";
import { getFileName, getFileType } from "../../../common/fish/FishTool";

export const getFishBgmConfigSourceFiles = (bundlePkgName: string) => {
  const arr: ISourceFile[] = []
  for (const key in fishBgmConfig) {
    const v = fishBgmConfig[key];
    const file = v.file;
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

export const fishBgmConfig = {
  [1]: { id: 1, file: "music/bgm/bgm1.mp3", desc: "场景1背景音乐", },
  [2]: { id: 2, file: "music/bgm/bgm2.mp3", desc: "场景2背景音乐", },
  [3]: { id: 3, file: "music/bgm/bgm3.mp3", desc: "场景3背景音乐", },
  [4]: { id: 4, file: "music/bgm/bgm4.mp3", desc: "场景4背景音乐", },
  [5]: { id: 5, file: "music/bgm/bgm5.mp3", desc: "场景5背景音乐", },
  [6]: { id: 6, file: "music/bgm/bgm6.mp3", desc: "场景6背景音乐", },
  [7]: { id: 7, file: "music/bgm/bgm7.mp3", desc: "场景7背景音乐", },
  [8]: { id: 8, file: "music/bgm/bossbgm.mp3", desc: "场景boss背景音乐", },
}