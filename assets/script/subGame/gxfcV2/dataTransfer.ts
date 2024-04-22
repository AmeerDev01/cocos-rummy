import { AuthDataVo, RollerLaunchResult } from "./type";

export type CacheData = {
  rollerLaunchResult: RollerLaunchResult,
  authData: AuthDataVo,
  fixedChessboardIcon: any[],
  initJackpotNumber: number,
  sendBetTime: number,
}

/**缓存数据 */
export const cacheData: CacheData = {
  rollerLaunchResult: null,
  authData: null,
  fixedChessboardIcon: null,
  initJackpotNumber: null,
  sendBetTime: 0
};

export const clearCacheData = () => {
  for (const key in cacheData) {
    cacheData[key] = null;
  }
}