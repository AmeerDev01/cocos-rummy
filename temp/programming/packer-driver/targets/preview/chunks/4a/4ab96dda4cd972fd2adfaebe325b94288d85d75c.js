System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, getUUID, FontPathDefine, SpriteFramePathDefine, _crd, initBetData;

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

      _cclegacy._RF.push({}, "65a6bA9jdtCepJS90CxB3tP", "config", undefined);

      __checkObsolete__(['Vec3']);

      _export("default", {
        sktCode: "DRAGON_TIGER",
        name: "dragonTiger",
        gameId: 12,
        testConfig: {
          wsUrl: "ws://192.168.110.243:18003/ws",
          token: "" // token:"eyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAE3NQQqCIRAG0LvMWsEZJ_1CopZeypHcpbuerDSNGYT8ryNJE3izi3UuwCJghiN7Hl-IkpP-4L4nVYKdkqKIb7F0ryFnjwb243obRVIfqkKOlq1uj_OgihCQwVEc7bnssts6_qcEfX8A47WcnH8AAAA.BMHg1CM1e3sq7gf85rA8oSGxAZ89yxc79UytEiLyEXc",

        },

        /**是否前置下注，前端先飞筹码，再发送消息，如果后台返回下注失败，前端取消下注 */
        preBet: true,

        /**游戏默认的固定参数 */
        gameOption: {
          /**座位数 */
          seatNumber: 6,

          /**自己的头像位置 */
          myHeadPosition: new Vec3(-596, -304),

          /**在线人数位置 */
          onlineNumberPosition: new Vec3(522, -282),

          /**荷官位置 */
          dealerPosition: {
            x: 0,
            y: 254
          },

          /**昵称省略长度 */
          nicknameOmitLength: 12,

          /**旁观索引 */
          lookOnIndex: 99,
          //==>用于其他online玩家的index,便于判定飞金币的位置

          /**胜率最大的索引位置 */
          winRateMaxIndex: 3 //==>用于判定飞星星的动画展示

        },

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

        /**上榜头像位置 */
        headLocations: [{
          x: -589,
          y: 145
        }, {
          x: -589,
          y: -14
        }, {
          x: -589,
          y: -154
        }, {
          x: 590,
          y: 145
        }, {
          x: 590,
          y: -10
        }, {
          x: 590,
          y: -150
        }]
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
//# sourceMappingURL=4ab96dda4cd972fd2adfaebe325b94288d85d75c.js.map