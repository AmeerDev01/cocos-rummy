System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SpriteFramePathDefine, CardType, _crd;

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "./sourceDefine/spriteDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardType(extras) {
    _reporterNs.report("CardType", "./type", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      SpriteFramePathDefine = _unresolved_2.SpriteFramePathDefine;
    }, function (_unresolved_3) {
      CardType = _unresolved_3.CardType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "425d9xzLbZISrHS6fiOU/Jw", "config", undefined);

      _export("default", {
        sktCode: "QiuQiu",
        name: "QiuQiu",

        /**房间底注 */
        afee: 0,
        gameId: 4,
        isTest: false,
        seatNumber: 7,
        dealAnimeSpeed: 0.1,
        isReconnect: false,
        testConfig: {
          // wsUrl: "ws://192.168.110.243:10017/ws",
          wsUrl: "",
          token: "",
          uid: ''
        },
        chips: [{
          value: 1,
          spriteFrame: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP2
        }, {
          value: 10,
          spriteFrame: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP3
        }, {
          value: 100,
          spriteFrame: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP4
        }, {
          value: 1000,
          spriteFrame: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP5
        }, {
          value: 10000,
          spriteFrame: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP6
        }, {
          value: 100000,
          spriteFrame: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP7
        }, {
          value: 1000000,
          spriteFrame: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP8
        }, {
          value: 10000000,
          spriteFrame: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CHIP9
        }],
        cardTypes: [{
          cardType: (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
            error: Error()
          }), CardType) : CardType).QIUQIU,
          spriteFrame: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).zi_qiuqiu_jiesuan_QiuQiu
        }, {
          cardType: (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
            error: Error()
          }), CardType) : CardType).BIG_CARD,
          spriteFrame: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).zi_qiuqiu_jiesuan_BigCards
        }, {
          cardType: (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
            error: Error()
          }), CardType) : CardType).SMALL_CARD,
          spriteFrame: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).zi_qiuqiu_jiesuan_SmallCards
        }, {
          cardType: (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
            error: Error()
          }), CardType) : CardType).TWIN_CARD,
          spriteFrame: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).zi_qiuqiu_jiesuan_TwinCards
        }, {
          cardType: (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
            error: Error()
          }), CardType) : CardType).SAIX_CARD,
          spriteFrame: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).zi_qiuqiu_jiesuan_saix
        }]
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f42c92870e5079432944ab9eedb29cfe18cda244.js.map