System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, IconEffectType, DirectionType, IconSizeType, GameType, AutoLauncherType, DialogType, GameModeType, JactpotType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67c789oLZNDfqbPD8ZcBEFz", "type", undefined);

      _export("IconEffectType", IconEffectType = /*#__PURE__*/function (IconEffectType) {
        IconEffectType[IconEffectType["NONE"] = 0] = "NONE";
        IconEffectType[IconEffectType["NORMAIL"] = 1] = "NORMAIL";
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
      /**下一把游戏类型 */


      _export("GameModeType", GameModeType = /*#__PURE__*/function (GameModeType) {
        GameModeType[GameModeType["normal"] = 1] = "normal";
        GameModeType[GameModeType["buyToWin"] = 2] = "buyToWin";
        GameModeType[GameModeType["buyMiniGames"] = 3] = "buyMiniGames";
        return GameModeType;
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

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bd1e3bfd782f7ee1029e5a1607ff2fadbe3bbd62.js.map