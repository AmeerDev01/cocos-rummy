import { getFishBatteryConfigSourceFiles } from "./ByBatteryPositionConfig"
import { getFishBatterySkinConfigSourceFiles } from "./ByBatterySkinConfig"
import { getFishBgmConfigSourceFiles } from "./ByBgmConfig"
import { getFishBullteConfigSourceFiles } from "./ByBulletConfig"
import { getFishNetConfigSourceFiles } from "./ByFishNetConfig"
import { getFishFntResConfigSourceFiles } from "./ByFntResConfig"
import { getFishMusicResConfigSourceFiles } from "./ByMusicResConfig"
import { getFishTexturesConfigSourceFiles } from "./ByTexturesConfig"

export const fishSourceFiles = (pkgName) => {
  return [
    ...getFishTexturesConfigSourceFiles(pkgName),
    ...getFishBullteConfigSourceFiles(pkgName),
    ...getFishBatteryConfigSourceFiles(pkgName),
    ...getFishBatterySkinConfigSourceFiles(pkgName),
    ...getFishNetConfigSourceFiles(pkgName),
    ...getFishFntResConfigSourceFiles(pkgName),
    ...getFishMusicResConfigSourceFiles(pkgName),
    ...getFishBgmConfigSourceFiles(pkgName),
  ]
}