/**
  子弹配置
  id,子弹id
  act_v,子弹发运动速度
  bonding_box : {--包围盒
    [1] : {--一个圆
      a,b,r：圆心坐标，半径
    },
  }

  src,子弹资源
  my_fnet_id,为自己炮台时鱼网资源id
  oth_net_id,为其它人炮台时鱼网资源id
  desc,描述信息
 */

import { ISourceFile } from "../../../base/SourceManage";
import { getFileName, getFileType } from "../../../common/fish/FishTool";

export const getFishBullteConfigSourceFiles = (bundlePkgName: string) => {
  const arr: ISourceFile[] = []
  for (const key in fishBullteConfig) {
    const v = fishBullteConfig[key];
    const file = v.src as string;
    if (file) {
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
export const fishBullteConfig = {
  [0]: { id: 0, desc: "默认皮肤", act_v: 1300, bonding_box: { [1]: { a: 0, b: 0, r: 16, }, }, src: "bullets/bullet_pifu1.json", ani: "animation", net_id: 0, },
  [1]: { id: 1, desc: "超人归来", act_v: 1300, bonding_box: { [1]: { a: 0, b: 0, r: 16, }, }, src: "bullets/bullet_pifu1.json", ani: "animation", net_id: 1, },
  [2]: { id: 2, desc: "黑暗骑士", act_v: 1300, bonding_box: { [1]: { a: 0, b: 0, r: 16, }, }, src: "bullets/bullet_pifu2.json", ani: "pifu2", net_id: 2, },
  [3]: { id: 3, desc: "钢铁之躯", act_v: 1300, bonding_box: { [1]: { a: 0, b: 0, r: 16, }, }, src: "bullets/bullet_pifu3.json", ani: "pifu3", net_id: 3, },
  [4]: { id: 4, desc: "正义盟友", act_v: 1300, bonding_box: { [1]: { a: 0, b: 0, r: 16, }, }, src: "bullets/bullet_pifu4.json", ani: "pifu3", net_id: 4, },
  [5]: { id: 5, desc: "雷神之锤", act_v: 1300, bonding_box: { [1]: { a: 0, b: 0, r: 16, }, }, src: "bullets/bullet_pifu5.json", ani: "pifu5", net_id: 5, },
  [6]: { id: 6, desc: "狮吼礼炮", act_v: 1300, bonding_box: { [1]: { a: 0, b: 0, r: 16, }, }, src: "bullets/zidan-cth.json", ani: "animation", net_id: 6, },
  [7]: { id: 7, desc: "霸之龙炮", act_v: 1300, bonding_box: { [1]: { a: 0, b: 0, r: 16, }, }, src: "bullets/zidan-3.json", ani: "pifu5", net_id: 7, },
  // [8]: { id: 8, desc: "默认皮肤", act_v: 1300, bonding_box: { [1]: { a: 0, b: 0, r: 16, }, }, src: "1jizidan1.png", ani: "", net_id: 0, },
}