System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, config, initBetData, initHeadType, BetType, GameStatus, _crd, convertBetType, convertToServerBetType, convertGameStatus, convertResult, convertHeadType, convertUserInfo, convertBetData, gameCacheData;

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "./config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitBetData(extras) {
    _reporterNs.report("initBetData", "./config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitHeadType(extras) {
    _reporterNs.report("initHeadType", "./config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetType(extras) {
    _reporterNs.report("BetType", "./type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "./type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeadType(extras) {
    _reporterNs.report("HeadType", "./type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "./type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserInfo(extras) {
    _reporterNs.report("UserInfo", "./type", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      config = _unresolved_2.default;
      initBetData = _unresolved_2.initBetData;
      initHeadType = _unresolved_2.initHeadType;
    }, function (_unresolved_3) {
      BetType = _unresolved_3.BetType;
      GameStatus = _unresolved_3.GameStatus;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eecf8n/kmxBgqOzqCGGoicn", "serverType", undefined);

      /**
       * 玩家详情的参数
       */

      /**
       * 进入游戏详细数据
       */

      /**用户下注 */

      /**
       * 开奖结果
       */

      /**游戏状态 */

      /**推送下注结构 */

      /**发送下注信息 */

      /**结算数据 */

      /**转换下注类型 */
      _export("convertBetType", convertBetType = betType => {
        if (betType === 1) {
          return (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).DEER;
        } else if (betType === 2) {
          return (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).GOURD;
        } else if (betType === 3) {
          return (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).CHOOK;
        } else if (betType === 4) {
          return (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).FISH;
        } else if (betType === 5) {
          return (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).SHRIMP;
        } else if (betType === 6) {
          return (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).CRAB;
        }
      });
      /**转换为服务器的下注类型 */


      _export("convertToServerBetType", convertToServerBetType = betType => {
        if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
          error: Error()
        }), BetType) : BetType).DEER === betType) {
          return 1;
        } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
          error: Error()
        }), BetType) : BetType).GOURD === betType) {
          return 2;
        } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
          error: Error()
        }), BetType) : BetType).CHOOK === betType) {
          return 3;
        } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
          error: Error()
        }), BetType) : BetType).FISH === betType) {
          return 4;
        } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
          error: Error()
        }), BetType) : BetType).SHRIMP === betType) {
          return 5;
        } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
          error: Error()
        }), BetType) : BetType).CRAB === betType) {
          return 6;
        }
      });
      /**转换游戏状态 */


      _export("convertGameStatus", convertGameStatus = value => {
        if (value === 1) {
          return (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).BET;
        }

        {
          return (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).STOP_BET;
        }
      });
      /**转换游戏结果 */


      _export("convertResult", convertResult = value => {
        var result = {
          betTypes: [convertBetType(value.num1), convertBetType(value.num2), convertBetType(value.num3)],
          time: 0
        };
        return result;
      });
      /**
       * 转换头像数据
       * @param value 
       * @returns 
       */


      _export("convertHeadType", convertHeadType = value => {
        var headType = (_crd && initHeadType === void 0 ? (_reportPossibleCrUseOfinitHeadType({
          error: Error()
        }), initHeadType) : initHeadType)((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
          error: Error()
        }), config) : config).gameOption.lookOnIndex);
        headType.gold = value.gold;
        headType.name = value.memberName;
        headType.userId = value.memberId + "";
        headType.winloss = value.winGold;
        headType.icon = value.icon;
        return headType;
      });

      _export("convertUserInfo", convertUserInfo = value => {
        var userInfo = {
          userId: value.memberId,
          gold: value.gold,
          name: value.memberName,
          icon: value.icon,
          head: ""
        };
        return userInfo;
      });

      _export("convertBetData", convertBetData = (mebmerBet, index) => {
        return (_crd && initBetData === void 0 ? (_reportPossibleCrUseOfinitBetData({
          error: Error()
        }), initBetData) : initBetData)(index, mebmerBet.memberId, convertBetType(mebmerBet.type), mebmerBet.gold);
      });
      /**802下注返回数据 */


      /**游戏缓存数据 */
      _export("gameCacheData", gameCacheData = {
        roomId: "",
        memberId: "",
        leftUsers: [],
        rightUsers: [],
        winList: []
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5441311cda6f08ce68d3719680d3c6212ebb4606.js.map