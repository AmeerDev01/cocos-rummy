System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, config, _crd, RollerStatus, IconEffectType, DirectionType, IconSizeType, GameType, AutoLauncherType, DialogType, JactpotType, IconId, getAutoCount, isLimit, isSubGameToSubGame, isAuto, verifyBetResultData, calBetAmount, getColumnLockIconArr, getBigWinConfig;

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "./config", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      config = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6906aspBYZMYLjoemWjJjIZ", "type", undefined);

      /**
       * 滑动状态
       */
      _export("RollerStatus", RollerStatus = /*#__PURE__*/function (RollerStatus) {
        RollerStatus[RollerStatus["RUNNING"] = 0] = "RUNNING";
        RollerStatus[RollerStatus["ENDING"] = 1] = "ENDING";
        RollerStatus[RollerStatus["END"] = 2] = "END";
        return RollerStatus;
      }({}));
      /**滚动信息 */


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
      /**游戏类型信息 */


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
      /**
       * 自动运行数据
       */


      /**爆奖弹出层类型 */
      _export("DialogType", DialogType = /*#__PURE__*/function (DialogType) {
        DialogType["BIG_WIN"] = "bigWin";
        DialogType["JACKPOT"] = "jackpot";
        DialogType["MEGA_WIN"] = "megaWin";
        DialogType["SUPER_WIN"] = "superWin";
        DialogType["FREE_GAME_ENTRY"] = "freeGameEntry";
        DialogType["FREE_GAME_SETTLEMENT"] = "freeGameSettlement";
        return DialogType;
      }({}));
      /**弹窗信息 */

      /**
       * 子游戏动画播放信息
       */


      _export("JactpotType", JactpotType = /*#__PURE__*/function (JactpotType) {
        JactpotType[JactpotType["BANANA"] = 0] = "BANANA";
        JactpotType[JactpotType["STRAWBERRY"] = 1] = "STRAWBERRY";
        JactpotType[JactpotType["APPLE"] = 2] = "APPLE";
        JactpotType[JactpotType["GRAPE"] = 3] = "GRAPE";
        JactpotType[JactpotType["WATERMELON"] = 4] = "WATERMELON";
        JactpotType[JactpotType["LEVEL"] = 5] = "LEVEL";
        return JactpotType;
      }({}));

      /**图标id定义 */
      _export("IconId", IconId = /*#__PURE__*/function (IconId) {
        IconId[IconId["SCATTER"] = 11] = "SCATTER";
        IconId[IconId["WILD"] = 12] = "WILD";
        IconId[IconId["BEETLE"] = 13] = "BEETLE";
        IconId[IconId["SUN_GOD"] = 14] = "SUN_GOD";
        return IconId;
      }({}));
      /**锁定图标信息 */

      /**下注之后获取的最后一次结果数据 */


      /**
       * 获得自动次数
       * @param type 
       * @returns 
       */
      _export("getAutoCount", getAutoCount = type => {
        if (AutoLauncherType.TIME_500 === type) {
          return 500;
        } else if (AutoLauncherType.TIME_100 === type) {
          return 100;
        } else if (AutoLauncherType.TIME_50 === type) {
          return 50;
        } else if (AutoLauncherType.TIME_20 === type) {
          return 20;
        } else if (AutoLauncherType.TIME_10 === type) {
          return 10;
        } else if (AutoLauncherType.NONE === type) {
          return 0;
        }

        return -99;
      });
      /**
       * 是否无限运行
       * @returns 
       */


      _export("isLimit", isLimit = autoLauncherType => {
        return autoLauncherType === AutoLauncherType.LIMIT || autoLauncherType === AutoLauncherType.LAMIT_FAST;
      });
      /**是否小游戏切到小游戏 */


      _export("isSubGameToSubGame", isSubGameToSubGame = (viewGameType, currGameType) => {
        return viewGameType === GameType.SUBGAME1 && currGameType === GameType.SUBGAME2 || viewGameType === GameType.SUBGAME2 && currGameType === GameType.SUBGAME1;
      });
      /**是否自动 */


      _export("isAuto", isAuto = (autoLauncherInfo, gameTypeInfo) => {
        // 小游戏中都是自动
        if (gameTypeInfo.viewGameType !== GameType.MAIN && gameTypeInfo.viewGameType === gameTypeInfo.currGameType) {
          return true;
        }

        if (autoLauncherInfo) {
          if (autoLauncherInfo.autoLauncherType !== AutoLauncherType.NONE) {
            if (autoLauncherInfo.totalCount === -99) {
              return true;
            }

            return autoLauncherInfo.leftCount > 0;
          }
        }

        return false;
      });
      /**验证下注返回数据 */


      _export("verifyBetResultData", verifyBetResultData = data => {
        if (!data) {
          return 1;
        }

        if (!data.dl) {
          return 2;
        }

        if (!Object.prototype.hasOwnProperty.call(data.dl, 'si')) {
          return 3;
        }

        if (Object.prototype.toString.call(data.dl.si) !== '[object Array]') {
          return 4;
        }

        const si = data.dl.si;

        if (si.length === 0) {
          return 5;
        }

        if (!data.dl.si[0]) {
          return 6;
        }

        if (!Object.prototype.hasOwnProperty.call(data.dl.si[0], 'rollerId')) {
          return 7;
        }

        if (!data.dl.si[0].rollerId) {
          return 8;
        }

        const rollerId = data.dl.si[0].rollerId;

        if (rollerId.length === 0) {
          return 9;
        }

        return 0;
      });
      /**计算下注金额 */


      _export("calBetAmount", calBetAmount = positionId => {
        const amountInfo = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
          error: Error()
        }), config) : config).betSwitcher[0].amount.find(v => v.positionId === positionId);
        return (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
          error: Error()
        }), config) : config).betAmount * amountInfo.value;
      });
      /**
       * 获得列锁定的图标列表
       * @param values 
       * @param columnIndex 
       * @returns 
       */


      _export("getColumnLockIconArr", getColumnLockIconArr = (values, columnIndex) => {
        if (!values || values.length === 0) {
          return [];
        }

        const icons = values.filter(v => v[0] === columnIndex).map(v => {
          const lockIcon = {
            index: v[1],
            iconId: v[2],
            amount: v[3]
          };
          return lockIcon;
        });
        return icons ? icons : [];
      });

      _export("getBigWinConfig", getBigWinConfig = magnification => {
        for (let i = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
          error: Error()
        }), config) : config).winning.length - 1; i >= 0; i--) {
          const element = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).winning[i];

          if (magnification >= element.minRate) {
            return element;
          }
        }

        return undefined;
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0699d57b3756b25885b1d8c06221f5ab061501fc.js.map