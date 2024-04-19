System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, IconEffectType, DirectionType, IconSizeType, GameType, SMALLGAME, AutoLauncherType, DialogType, JactpotType, autoLauncherTypeWithTimes;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "06d4bVhI4pFhoxd2GThXQdz", "type", undefined);

      _export("IconEffectType", IconEffectType = /*#__PURE__*/function (IconEffectType) {
        IconEffectType[IconEffectType["NONE"] = 0] = "NONE";
        IconEffectType[IconEffectType["NORMAIL"] = 1] = "NORMAIL";
        IconEffectType[IconEffectType["BAOHE"] = 2] = "BAOHE";
        IconEffectType[IconEffectType["FREEEGAMEZ"] = 3] = "FREEEGAMEZ";
        return IconEffectType;
      }({}));

      _export("DirectionType", DirectionType = /*#__PURE__*/function (DirectionType) {
        DirectionType[DirectionType["UP"] = 0] = "UP";
        DirectionType[DirectionType["DOWN"] = 1] = "DOWN";
        return DirectionType;
      }({}));

      _export("IconSizeType", IconSizeType = /*#__PURE__*/function (IconSizeType) {
        IconSizeType[IconSizeType["NORMAIL"] = 0] = "NORMAIL";
        IconSizeType[IconSizeType["LARGE"] = 1] = "LARGE";
        return IconSizeType;
      }({}));

      _export("GameType", GameType = /*#__PURE__*/function (GameType) {
        GameType[GameType["NONE"] = -1] = "NONE";
        GameType[GameType["MAIN"] = 0] = "MAIN";
        GameType[GameType["SUBGAME1"] = 1] = "SUBGAME1";
        GameType[GameType["SUBGAME2"] = 2] = "SUBGAME2";
        return GameType;
      }({}));
      /**小游戏 */


      _export("SMALLGAME", SMALLGAME = /*#__PURE__*/function (SMALLGAME) {
        SMALLGAME[SMALLGAME["CHOSSE0"] = 0] = "CHOSSE0";
        SMALLGAME[SMALLGAME["CHOOSE25"] = 1] = "CHOOSE25";
        SMALLGAME[SMALLGAME["CHOOSE20"] = 2] = "CHOOSE20";
        SMALLGAME[SMALLGAME["CHOOSE15"] = 3] = "CHOOSE15";
        SMALLGAME[SMALLGAME["CHOOSE13"] = 4] = "CHOOSE13";
        SMALLGAME[SMALLGAME["CHOOSE10"] = 5] = "CHOOSE10";
        return SMALLGAME;
      }({}));
      /**自动运行类型 */


      _export("AutoLauncherType", AutoLauncherType = /*#__PURE__*/function (AutoLauncherType) {
        AutoLauncherType["NONE"] = "none";
        AutoLauncherType["LIMIT"] = "limit";
        AutoLauncherType["LAMIT_FAST"] = "limit_fast";
        AutoLauncherType["TIME_500"] = "t500";
        AutoLauncherType["TIME_100"] = "t100";
        AutoLauncherType["TIME_50"] = "t50";
        AutoLauncherType["TIME_20"] = "t20";
        AutoLauncherType["TIME_10"] = "t10";
        return AutoLauncherType;
      }({}));
      /**爆奖弹出层类型 */


      _export("DialogType", DialogType = /*#__PURE__*/function (DialogType) {
        DialogType["BIG_WIN"] = "bigWin";
        DialogType["JACKPOT"] = "jackpot";
        DialogType["MEGA_WIN"] = "megaWin";
        DialogType["SUPER_WIN"] = "superWin";
        return DialogType;
      }({}));

      _export("JactpotType", JactpotType = /*#__PURE__*/function (JactpotType) {
        JactpotType[JactpotType["BANANA"] = 0] = "BANANA";
        JactpotType[JactpotType["STRAWBERRY"] = 1] = "STRAWBERRY";
        JactpotType[JactpotType["APPLE"] = 2] = "APPLE";
        JactpotType[JactpotType["GRAPE"] = 3] = "GRAPE";
        JactpotType[JactpotType["WATERMELON"] = 4] = "WATERMELON";
        JactpotType[JactpotType["LEVEL"] = 5] = "LEVEL";
        return JactpotType;
      }({}));

      _export("autoLauncherTypeWithTimes", autoLauncherTypeWithTimes = {
        [AutoLauncherType.NONE]: 0,
        [AutoLauncherType.TIME_10]: 10,
        [AutoLauncherType.TIME_20]: 20,
        [AutoLauncherType.TIME_50]: 50,
        [AutoLauncherType.TIME_100]: 100,
        [AutoLauncherType.TIME_500]: 500,
        [AutoLauncherType.LAMIT_FAST]: 10000,
        [AutoLauncherType.LIMIT]: 20000
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a19038a26744a77638d598b1b758844ee9e9b12e.js.map