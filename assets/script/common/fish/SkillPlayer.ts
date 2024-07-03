/**
特技播放器
 */
////////////////////////////////////
export class SkillPlayer {
  private skillConfig = null
  private commonConfig = null
  private textureConfig = null

  private skillFuncList = null
  private sklUseSkew = false
  /**缩放比例 */
  private scaleRatio: number = 1;

  public init(sklConfig, comConfig, tConfig, skillList, scaleRatio: number) {
    this.skillConfig = sklConfig
    this.commonConfig = comConfig
    this.textureConfig = tConfig
    this.scaleRatio = scaleRatio

    this.sklUseSkew = false
    this.skillFuncList = skillList
  }

  public uninit() {
    this.skillFuncList = null
    this.sklUseSkew = false

    this.skillConfig = null
    this.commonConfig = null
    this.textureConfig = null
  }

  public getScaleRatio() {
    return this.scaleRatio
  }

  public setUseSkew(buse) {
    this.sklUseSkew = buse
  }

  public getUseSkew() {
    return this.sklUseSkew
  }

  public getConfigs() {
    return { skConfig: this.skillConfig, comConfig: this.commonConfig, tConfig: this.textureConfig }
  }

  public play(obj, id) {
    for (const k in this.skillFuncList) {
      const v = this.skillFuncList[k];
      for (const m in v.ids) {
        const n = v.ids[m];
        if (n === id) {
          if (v.func) {
            v.func(obj, id)
            break
          }
        }
      }
    }
  }

}

