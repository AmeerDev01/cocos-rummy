System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, getUUID, FontPathDefine, SpriteFramePathDefine, _crd, initInfoType, initBetData;

  function _reportPossibleCrUseOfgetUUID(extras) {
    _reporterNs.report("getUUID", "../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFontPathDefine(extras) {
    _reporterNs.report("FontPathDefine", "./sourceDefine/fontDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "./sourceDefine/spriteDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetData(extras) {
    _reporterNs.report("BetData", "./type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetType(extras) {
    _reporterNs.report("BetType", "./type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeadType(extras) {
    _reporterNs.report("HeadType", "./type", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      getUUID = _unresolved_2.getUUID;
    }, function (_unresolved_3) {
      FontPathDefine = _unresolved_3.FontPathDefine;
    }, function (_unresolved_4) {
      SpriteFramePathDefine = _unresolved_4.SpriteFramePathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4948divxIZFqoLRCOdYx+G5", "config", undefined);

      __checkObsolete__(['Vec3']);

      _export("default", {
        sktCode: "BENDER_QIU_QIU",
        name: "BENDER_QIU_QIU",
        gameId: 16,
        testConfig: {
          wsUrl: "ws://192.168.110.243:18005/ws",
          token: "eyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAE3NMQoDIRAF0LtMrTATHf16g9R7Ak1mwQVhCRaBkLsnpEr7mvei0RZVSaWoqDA7suf5hRyEVX5wrEGVknbAID51gY8N8EU1-oSgKtF63G_kaNrs9rjeqYIZGRIujtaYtq02z_8p5fL-AKXY5c9_AAAA.nTfzZUqqHFTe7HsH7WzQQO8hL9Xcs9PZIbeKmFWtuWA"
        },

        /**是否前置下注，前端先飞筹码，再发送消息，如果后台返回下注失败，前端取消下注 */
        preBet: true,

        /**游戏默认的固定参数 */
        gameOption: {
          /**座位数 */
          seatNumber: 6,

          /**自己的头像位置 */
          myHeadPosition: new Vec3(-483, -345.5),

          /**在线人数位置 */
          onlineNumberPosition: new Vec3(598, -347),

          /**荷官位置 */
          dealerPosition: new Vec3(0, 200),

          /**飞筹码速度 单位/秒 */
          flyChipSpeed: 0.5,

          /**昵称省略长度 */
          nicknameOmitLength: 12,

          /**旁观索引 */
          lookOnIndex: 99,
          //==>用于其他online玩家的index,便于判定飞金币的位置

          /**胜率最大的索引位置 */
          winRateMaxIndex: 3,
          //==>用于判定飞星星的动画展示

          /**发牌 牌组 */
          decks: 14
        },

        /**上榜头像位置 */
        headLocations: [{
          x: -590,
          y: 155
        }, {
          x: -590,
          y: -15
        }, {
          x: -590,
          y: -155
        }, {
          x: 590,
          y: 155
        }, {
          x: 590,
          y: -15
        }, {
          x: 590,
          y: -155
        }],

        /**金币数据 */
        chipTypes: [{
          value: 1000,
          valueStr: '1000',
          fileUrl: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP_ONE,
          fontUrl: (_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
            error: Error()
          }), FontPathDefine) : FontPathDefine).GREEN_BET
        }, {
          value: 2000,
          valueStr: '2000',
          fileUrl: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP_TWO,
          fontUrl: (_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
            error: Error()
          }), FontPathDefine) : FontPathDefine).BLUE_BET
        }, {
          value: 5000,
          valueStr: '5000',
          fileUrl: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP_THREE,
          fontUrl: (_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
            error: Error()
          }), FontPathDefine) : FontPathDefine).DARK_BLUE_BET
        }, {
          value: 10000,
          valueStr: '10K',
          fileUrl: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP_FOUR,
          fontUrl: (_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
            error: Error()
          }), FontPathDefine) : FontPathDefine).RED_BET
        }, {
          value: 20000,
          valueStr: '20K',
          fileUrl: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP_FIVE,
          fontUrl: (_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
            error: Error()
          }), FontPathDefine) : FontPathDefine).PURPLE_BET
        }, {
          value: 50000,
          valueStr: '50K',
          fileUrl: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP_SIX,
          fontUrl: (_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
            error: Error()
          }), FontPathDefine) : FontPathDefine).ORANGE_BET
        }, {
          value: null,
          valueStr: '',
          fileUrl: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP_ZERO,
          fontUrl: (_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
            error: Error()
          }), FontPathDefine) : FontPathDefine).WU_BET
        }],

        /**牌组 */
        cardType: [{
          up: 0,
          down: 0
        }, {
          up: 0,
          down: 1
        }, {
          up: 0,
          down: 2
        }, {
          up: 0,
          down: 3
        }, {
          up: 0,
          down: 4
        }, {
          up: 0,
          down: 5
        }, {
          up: 0,
          down: 6
        }, {
          up: 1,
          down: 1
        }, {
          up: 1,
          down: 2
        }, {
          up: 1,
          down: 3
        }, {
          up: 1,
          down: 4
        }, {
          up: 1,
          down: 5
        }, {
          up: 1,
          down: 6
        }, {
          up: 2,
          down: 2
        }, {
          up: 2,
          down: 3
        }, {
          up: 2,
          down: 4
        }, {
          up: 2,
          down: 5
        }, {
          up: 2,
          down: 6
        }, {
          up: 3,
          down: 3
        }, {
          up: 3,
          down: 4
        }, {
          up: 3,
          down: 5
        }, {
          up: 3,
          down: 6
        }, {
          up: 4,
          down: 4
        }, {
          up: 4,
          down: 5
        }, {
          up: 4,
          down: 6
        }, {
          up: 5,
          down: 5
        }, {
          up: 5,
          down: 6
        }, {
          up: 6,
          down: 6
        }],

        /**发牌的结束位置 */
        cardPosition: [{
          x: -372,
          y: 10
        }, {
          x: -312,
          y: 10
        }, {
          x: -252,
          y: 10
        }, {
          x: -192,
          y: 10
        }, {
          x: -132,
          y: 10
        }, {
          x: -72,
          y: 10
        }, {
          x: -12,
          y: 10
        }, {
          x: 48,
          y: 10
        }, {
          x: 108,
          y: 10
        }, {
          x: 168,
          y: 10
        }, {
          x: 228,
          y: 10
        }, {
          x: 288,
          y: 10
        }, {
          x: 348,
          y: 10
        }, {
          x: 408,
          y: 10
        }],

        /**翻牌后的结束位置 */
        cardItemPosition: [[{
          x: -343,
          y: 265
        }, {
          x: -275,
          y: 265
        }], [{
          x: 275,
          y: 265
        }, {
          x: 343,
          y: 265
        }]]
      });
      /**
       * 初始化头像信息
       */


      _export("initInfoType", initInfoType = index => {
        var infoType = {
          memberId: "",
          memberName: "",
          gold: 0,
          goldStr: "",
          index,
          winGold: 0,
          betAmount: 0
        };
        return infoType;
      });
      /**
       * 初始化下注数据
       * @param index 下注位置
       * @param userId 用户id
       * @param betType 下注类型
       * @param betAmount 下注金额
       */


      _export("initBetData", initBetData = (index, userId, betType, betAmount) => {
        var betData = {
          index: index,
          memberId: userId,
          betType: betType,
          betAmount: betAmount,
          time: Date.now(),
          isFly: true,
          betId: (_crd && getUUID === void 0 ? (_reportPossibleCrUseOfgetUUID({
            error: Error()
          }), getUUID) : getUUID)()
        };
        return betData;
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c84168adc328c8bd8bbda004cdf20cf86d6b3c16.js.map