System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, SkillPlayer, _crd;

  _export("SkillPlayer", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "486ffWUeghGbr2lB38sOsCh", "SkillPlayer", undefined);

      /**
      特技播放器
       */
      ////////////////////////////////////
      _export("SkillPlayer", SkillPlayer = class SkillPlayer {
        constructor() {
          this.skillConfig = null;
          this.commonConfig = null;
          this.textureConfig = null;
          this.skillFuncList = null;
          this.sklUseSkew = false;

          /**缩放比例 */
          this.scaleRatio = 1;
        }

        init(sklConfig, comConfig, tConfig, skillList, scaleRatio) {
          this.skillConfig = sklConfig;
          this.commonConfig = comConfig;
          this.textureConfig = tConfig;
          this.scaleRatio = scaleRatio;
          this.sklUseSkew = false;
          this.skillFuncList = skillList;
        }

        uninit() {
          this.skillFuncList = null;
          this.sklUseSkew = false;
          this.skillConfig = null;
          this.commonConfig = null;
          this.textureConfig = null;
        }

        getScaleRatio() {
          return this.scaleRatio;
        }

        setUseSkew(buse) {
          this.sklUseSkew = buse;
        }

        getUseSkew() {
          return this.sklUseSkew;
        }

        getConfigs() {
          return {
            skConfig: this.skillConfig,
            comConfig: this.commonConfig,
            tConfig: this.textureConfig
          };
        }

        play(obj, id) {
          for (const k in this.skillFuncList) {
            const v = this.skillFuncList[k];

            for (const m in v.ids) {
              const n = v.ids[m];

              if (n === id) {
                if (v.func) {
                  v.func(obj, id);
                  break;
                }
              }
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0dcf01d4bfc27dad64d694d0c7ad87d4e462bd05.js.map