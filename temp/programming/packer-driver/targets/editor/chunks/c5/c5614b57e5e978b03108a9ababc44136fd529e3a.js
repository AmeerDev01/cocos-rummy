System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, getUUID, FontPathDefine, SpriteFramePathDefine, _crd, initInfoType, initBetData;

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
    }, function (_unresolved_2) {
      getUUID = _unresolved_2.getUUID;
    }, function (_unresolved_3) {
      FontPathDefine = _unresolved_3.FontPathDefine;
    }, function (_unresolved_4) {
      SpriteFramePathDefine = _unresolved_4.SpriteFramePathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0b2bfEEvf1J/JGe7nUYEOKr", "config", undefined);

      _export("default", {
        sktCode: "QIU_QIU",
        name: "QIU_QIU",
        gameId: 13,
        testConfig: {
          wsUrl: "ws://192.168.110.243:18004/ws",
          // token:"",
          token: "eyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAE3NOwoCMRAA0LtMncCMGeeTG1h7gh2TIguBZUkhiHdXrGxf814wtgWVxE0EnTlBfx5f0ILk8oN9DahgGCKulI0KZ2bR7EyRg9qjSXTVcoEEs8_o561BNcQrOqIkWGP2-9rm8T-JlfcHfpPKT38AAAA.RdfWIlvpaCYu81DdecBv7Wa213t1v6h7g2AWrOUyRHM"
        },

        /**是否前置下注，前端先飞筹码，再发送消息，如果后台返回下注失败，前端取消下注 */
        preBet: true,

        /**游戏默认的固定参数 */
        gameOption: {
          /**座位数 */
          seatNumber: 6,

          /**自己的头像位置 */
          myHeadPosition: {
            x: -466,
            y: -322
          },

          /**在线人数位置 */
          onlineNumberPosition: {
            x: 577,
            y: -331
          },

          /**荷官位置 */
          dealerPosition: {
            x: 0,
            y: 210
          },

          /**昵称省略长度 */
          nicknameOmitLength: 12,

          /**旁观索引 */
          lookOnIndex: 99,
          //==>用于其他online玩家的index,便于判定飞金币的位置

          /**胜率最大的索引位置 */
          winRateMaxIndex: 3 //==>用于判定飞星星的动画展示

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
          value: 5000,
          valueStr: '5000',
          fileUrl: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP_TWO,
          fontUrl: (_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
            error: Error()
          }), FontPathDefine) : FontPathDefine).BLUE_BET
        }, {
          value: 10000,
          valueStr: '10K',
          fileUrl: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP_THREE,
          fontUrl: (_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
            error: Error()
          }), FontPathDefine) : FontPathDefine).DARK_BLUE_BET
        }, {
          value: 100000,
          valueStr: '100K',
          fileUrl: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP_FOUR,
          fontUrl: (_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
            error: Error()
          }), FontPathDefine) : FontPathDefine).RED_BET
        }, {
          value: 500000,
          valueStr: '500K',
          fileUrl: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP_FIVE,
          fontUrl: (_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
            error: Error()
          }), FontPathDefine) : FontPathDefine).PURPLE_BET
        }, {
          value: 1000000,
          valueStr: '1M',
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
          x: -328,
          y: 300
        }, {
          x: -388,
          y: -155
        }, {
          x: -168,
          y: -155
        }, {
          x: 52,
          y: -155
        }, {
          x: 272,
          y: -155
        }, {
          x: -280,
          y: 300
        }, {
          x: -350,
          y: -155
        }, {
          x: -130,
          y: -155
        }, {
          x: 90,
          y: -155
        }, {
          x: 310,
          y: -155
        }, {
          x: -228,
          y: 300
        }, {
          x: -308,
          y: -155
        }, {
          x: -88,
          y: -155
        }, {
          x: 132,
          y: -155
        }, {
          x: 352,
          y: -155
        }, {
          x: -180,
          y: 300
        }, {
          x: -270,
          y: -155
        }, {
          x: -50,
          y: -155
        }, {
          x: 170,
          y: -155
        }, {
          x: 390,
          y: -155
        }],

        /**换牌的结束位置 */
        cardItemPosition: [[{
          x: -328,
          y: 300
        }, {
          x: -280,
          y: 300
        }, {
          x: -228,
          y: 300
        }, {
          x: -180,
          y: 300
        }], [{
          x: -388,
          y: -155
        }, {
          x: -350,
          y: -155
        }, {
          x: -308,
          y: -155
        }, {
          x: -270,
          y: -155
        }], [{
          x: -168,
          y: -155
        }, {
          x: -130,
          y: -155
        }, {
          x: -88,
          y: -155
        }, {
          x: -50,
          y: -155
        }], [{
          x: 52,
          y: -155
        }, {
          x: 90,
          y: -155
        }, {
          x: 132,
          y: -155
        }, {
          x: 170,
          y: -155
        }], [{
          x: 272,
          y: -155
        }, {
          x: 310,
          y: -155
        }, {
          x: 352,
          y: -155
        }, {
          x: 390,
          y: -155
        }]]
      });
      /**
       * 初始化头像信息
       */


      _export("initInfoType", initInfoType = index => {
        const infoType = {
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
        const betData = {
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
//# sourceMappingURL=c5614b57e5e978b03108a9ababc44136fd529e3a.js.map