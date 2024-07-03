import { ISourceFile } from "../../../base/SourceManage";
import { getFileName, getFileType } from "../../../common/fish/FishTool";

export const getFishBatteryConfigSourceFiles = (bundlePkgName: string) => {
  const arr: ISourceFile[] = []
  for (const key in fishBatteryPosConfig) {
    const v = fishBatteryPosConfig[key];
    const file = v.prefab as string;
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

/**
  炮台位置配置
  id: 位置id
  side: 在哪条边上 1->左,2->右,3->上,4->下
  batt_cfg_id: 炮台配置id ByBatteryConfig.lua
  pos: 所在位置
 */
export const fishBatteryPosConfig = {
  [1]: { id: 1, side: 4, pos: { x: 335, y: 5, }, prefab: "prefabs/ui_battery_1.prefab" },
  [2]: { id: 2, side: 4, pos: { x: 800, y: 5, }, prefab: "prefabs/ui_battery_2.prefab" },
  [3]: { id: 3, side: 3, pos: { x: 800, y: 5, }, prefab: "prefabs/ui_battery_3.prefab" },
  [4]: { id: 4, side: 3, pos: { x: 335, y: 5, }, prefab: "prefabs/ui_battery_4.prefab" },
}