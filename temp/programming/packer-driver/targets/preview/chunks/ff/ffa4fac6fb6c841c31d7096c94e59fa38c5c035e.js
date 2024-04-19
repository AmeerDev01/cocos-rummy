System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, FontPathDefine, SpriteFramePathDefine, BetType, getUUID, _crd, initHeadType, initBetData;

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

  function _reportPossibleCrUseOfgetUUID(extras) {
    _reporterNs.report("getUUID", "../../utils/tool", _context.meta, extras);
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
      FontPathDefine = _unresolved_2.FontPathDefine;
    }, function (_unresolved_3) {
      SpriteFramePathDefine = _unresolved_3.SpriteFramePathDefine;
    }, function (_unresolved_4) {
      BetType = _unresolved_4.BetType;
    }, function (_unresolved_5) {
      getUUID = _unresolved_5.getUUID;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "52950lbfYNLLrXdvl7L0bCU", "config", undefined);

      __checkObsolete__(['Vec3']);

      _export("default", {
        sktCode: "FISH_PRAWN_CRAB",
        name: "yxx",
        gameId: 11,
        isTest: false,

        /**是否前置下注，前端先飞筹码，再发送消息，如果后台返回下注失败，前端取消下注 */
        preBet: true,
        testConfig: {
          // wsUrl: "ws://54.251.66.82:18002/ws",
          wsUrl: "",
          token: ""
        },

        /**游戏默认的固定参数 */
        gameOption: {
          /**座位数 */
          seatNumber: 6,

          /**自己的头像位置 */
          myHeadPosition: new Vec3(-487, -316),

          /**在线人数位置 */
          onlineNumberPosition: new Vec3(522, -282),

          /**荷官位置 */
          dealerPosition: new Vec3(0, 224),

          /**结果数组最大值 */
          resultArrayMax: 50,

          /**飞筹码速度 单位/秒 */
          flyChipSpeed: 0.5,

          /**昵称省略长度 */
          nicknameOmitLength: 12,

          /**旁观索引 */
          lookOnIndex: 99,

          /**胜率最大的索引位置 */
          winRateMaxIndex: 3,

          /**解锁下注最小金币 */
          unlockBetMinGold: 5000
        },

        /**头像位置 */
        headLocations: [{
          x: -590,
          y: 166
        }, {
          x: -590,
          y: 0
        }, {
          x: -590,
          y: -145
        }, {
          x: 590,
          y: 166
        }, {
          x: 590,
          y: 0
        }, {
          x: 590,
          y: -145
        }],

        /**下注赔率 */
        betTypeOdds: [{
          betType: (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).CHOOK,
          odds: [2, 3, 4]
        }, {
          betType: (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).CRAB,
          odds: [2, 3, 4]
        }, {
          betType: (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).DEER,
          odds: [2, 3, 4]
        }, {
          betType: (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).GOURD,
          odds: [2, 3, 4]
        }, {
          betType: (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).FISH,
          odds: [2, 3, 4]
        }, {
          betType: (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).SHRIMP,
          odds: [2, 3, 4]
        }],
        chipTypes: [{
          value: 1000,
          valueStr: '1000',
          fileUrl: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP_1,
          fontUrl: (_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
            error: Error()
          }), FontPathDefine) : FontPathDefine).GREEN_BET
        }, {
          value: 5000,
          valueStr: '5000',
          fileUrl: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP_2,
          fontUrl: (_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
            error: Error()
          }), FontPathDefine) : FontPathDefine).BLUE_BET
        }, {
          value: 10000,
          valueStr: '10K',
          fileUrl: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP_3,
          fontUrl: (_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
            error: Error()
          }), FontPathDefine) : FontPathDefine).DARK_BLUE_BET
        }, {
          value: 100000,
          valueStr: '100K',
          fileUrl: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP_4,
          fontUrl: (_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
            error: Error()
          }), FontPathDefine) : FontPathDefine).RED_BET
        }, {
          value: 200000,
          valueStr: '200K',
          fileUrl: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP_5,
          fontUrl: (_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
            error: Error()
          }), FontPathDefine) : FontPathDefine).PURPLE_BET
        }, {
          value: 1000000,
          valueStr: '1M',
          fileUrl: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP_6,
          fontUrl: (_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
            error: Error()
          }), FontPathDefine) : FontPathDefine).ORANGE_BET
        }],

        /**骰子的位置 */
        dicePosition: [new Vec3(-6, 50), //上
        new Vec3(75, 8), //右
        new Vec3(-81, 2), //左
        new Vec3(1, -30) //下
        ]
      });
      /**
       * 初始化头像信息
       */


      _export("initHeadType", initHeadType = index => {
        var headType = {
          has: false,
          headUrl: "",
          userId: "",
          name: "",
          joggle: false,
          gold: 0,
          goldStr: "",
          index,
          level: index === 0 ? 1 : index === 3 ? 2 : 3,
          winloss: 0,
          betAmount: 0
        };
        return headType;
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
          userId: userId,
          betType: betType,
          betAmount: betAmount,
          time: Date.now() + Math.random(),
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
//# sourceMappingURL=ffa4fac6fb6c841c31d7096c94e59fa38c5c035e.js.map