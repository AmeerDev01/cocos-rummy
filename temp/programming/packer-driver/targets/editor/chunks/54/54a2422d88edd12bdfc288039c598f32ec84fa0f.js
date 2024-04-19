System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, DeskStatus, OperationType, CardType, convertOpType, convertServerAction, genPlayer, convertPoker, genCardItem, convertCardValue;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "12299xfWIJIX4PMsPQuugQg", "type", undefined);

      _export("DeskStatus", DeskStatus = /*#__PURE__*/function (DeskStatus) {
        DeskStatus[DeskStatus["WAITING"] = 0] = "WAITING";
        DeskStatus[DeskStatus["COUNTDOWNING"] = 1] = "COUNTDOWNING";
        DeskStatus[DeskStatus["FIRST_DISTRIBUTE"] = 2] = "FIRST_DISTRIBUTE";
        DeskStatus[DeskStatus["SECOND_DISTRIBUTE"] = 3] = "SECOND_DISTRIBUTE";
        DeskStatus[DeskStatus["PLAYING"] = 4] = "PLAYING";
        DeskStatus[DeskStatus["CLSOE"] = 5] = "CLSOE";
        return DeskStatus;
      }({}));

      _export("OperationType", OperationType = /*#__PURE__*/function (OperationType) {
        OperationType[OperationType["WAIT"] = 0] = "WAIT";
        OperationType[OperationType["GIVE_UP"] = 1] = "GIVE_UP";
        OperationType[OperationType["PASS"] = 2] = "PASS";
        OperationType[OperationType["CALL"] = 3] = "CALL";
        OperationType[OperationType["FILL"] = 4] = "FILL";
        OperationType[OperationType["SHOW_HAND"] = 5] = "SHOW_HAND";
        return OperationType;
      }({}));
      /**游戏数据 */


      _export("CardType", CardType = /*#__PURE__*/function (CardType) {
        CardType[CardType["DISERSE"] = 0] = "DISERSE";
        CardType[CardType["QIU_POINT"] = 1] = "QIU_POINT";
        CardType[CardType["QIUQIU"] = 2] = "QIUQIU";
        CardType[CardType["BIG_CARD"] = 3] = "BIG_CARD";
        CardType[CardType["SMALL_CARD"] = 4] = "SMALL_CARD";
        CardType[CardType["TWIN_CARD"] = 5] = "TWIN_CARD";
        CardType[CardType["SAIX_CARD"] = 6] = "SAIX_CARD";
        return CardType;
      }({}));

      _export("convertOpType", convertOpType = (value, betAmount = 0) => {
        if (value === 0) {
          return OperationType.WAIT;
        } else if (value === 1) {
          return betAmount > 0 ? OperationType.CALL : OperationType.PASS;
        } else if (value === 2) {
          return OperationType.FILL;
        } else if (value === 3) {
          return OperationType.GIVE_UP;
        } else if (value === 4) {
          return OperationType.SHOW_HAND;
        }
      });

      _export("convertServerAction", convertServerAction = opType => {
        if (OperationType.CALL === opType || OperationType.PASS === opType) {
          return 1;
        } else if (OperationType.FILL === opType) {
          return 2;
        } else if (OperationType.GIVE_UP === opType) {
          return 3;
        } else if (OperationType.SHOW_HAND === opType) {
          return 4;
        }
      });
      /**构建用户 */


      _export("genPlayer", genPlayer = memberInfo => {
        const player = {
          uid: memberInfo.memberId,
          head: memberInfo.icon,
          nickName: memberInfo.nickName,
          glodAmount: memberInfo.gold,
          balanceGoldAmount: memberInfo.gold,
          chairId: memberInfo.cacheChairId,
          tableId: memberInfo.tableId,
          gameData: {
            isReady: memberInfo.status === 3,
            isMaster: memberInfo.isBanker === 1,
            isGame: false,
            opType: convertOpType(memberInfo.memberStatus, memberInfo.betAmount),
            betAmount: memberInfo.betAmount,
            totalBetAmount: 0,
            callAmount: 0,
            winloss: 0,
            dealCardCount: 0,
            cards: [],
            cardType: CardType.DISERSE
          },
          seatIndex: -1,
          isSelf: false
        };
        return player;
      });

      _export("convertPoker", convertPoker = cardItem => {
        const poker = {
          smallNum: cardItem.upFace,
          bigNum: cardItem.downFace,
          cardNum: 0
        };
        return poker;
      });
      /**构建牌 */


      _export("genCardItem", genCardItem = value => {
        const cardItem = {
          upFace: 0,
          downFace: 0,
          value: value
        };

        if (value === 0) {
          cardItem.upFace = 0;
          cardItem.downFace = 0;
        } else if (value === 1) {
          cardItem.upFace = 0;
          cardItem.downFace = 1;
        } else if (value === 2) {
          cardItem.upFace = 0;
          cardItem.downFace = 2;
        } else if (value === 3) {
          cardItem.upFace = 0;
          cardItem.downFace = 3;
        } else if (value === 4) {
          cardItem.upFace = 0;
          cardItem.downFace = 4;
        } else if (value === 5) {
          cardItem.upFace = 0;
          cardItem.downFace = 5;
        } else if (value === 6) {
          cardItem.upFace = 0;
          cardItem.downFace = 6;
        } else if (value === 7) {
          cardItem.upFace = 1;
          cardItem.downFace = 1;
        } else if (value === 8) {
          cardItem.upFace = 1;
          cardItem.downFace = 2;
        } else if (value === 9) {
          cardItem.upFace = 1;
          cardItem.downFace = 3;
        } else if (value === 10) {
          cardItem.upFace = 1;
          cardItem.downFace = 4;
        } else if (value === 11) {
          cardItem.upFace = 1;
          cardItem.downFace = 5;
        } else if (value === 12) {
          cardItem.upFace = 1;
          cardItem.downFace = 6;
        } else if (value === 13) {
          cardItem.upFace = 2;
          cardItem.downFace = 2;
        } else if (value === 14) {
          cardItem.upFace = 2;
          cardItem.downFace = 3;
        } else if (value === 15) {
          cardItem.upFace = 2;
          cardItem.downFace = 4;
        } else if (value === 16) {
          cardItem.upFace = 2;
          cardItem.downFace = 5;
        } else if (value === 17) {
          cardItem.upFace = 2;
          cardItem.downFace = 6;
        } else if (value === 18) {
          cardItem.upFace = 3;
          cardItem.downFace = 3;
        } else if (value === 19) {
          cardItem.upFace = 3;
          cardItem.downFace = 4;
        } else if (value === 20) {
          cardItem.upFace = 3;
          cardItem.downFace = 5;
        } else if (value === 21) {
          cardItem.upFace = 3;
          cardItem.downFace = 6;
        } else if (value === 22) {
          cardItem.upFace = 4;
          cardItem.downFace = 4;
        } else if (value === 23) {
          cardItem.upFace = 4;
          cardItem.downFace = 5;
        } else if (value === 24) {
          cardItem.upFace = 4;
          cardItem.downFace = 6;
        } else if (value === 25) {
          cardItem.upFace = 5;
          cardItem.downFace = 5;
        } else if (value === 26) {
          cardItem.upFace = 5;
          cardItem.downFace = 6;
        } else if (value === 27) {
          cardItem.upFace = 6;
          cardItem.downFace = 6;
        }

        return cardItem;
      });

      _export("convertCardValue", convertCardValue = (smaill, big) => {
        if (smaill === 0 && big === 0) {
          return 0;
        } else if (smaill === 0 && big === 1) {
          return 1;
        } else if (smaill === 0 && big === 2) {
          return 2;
        } else if (smaill === 0 && big === 3) {
          return 3;
        } else if (smaill === 0 && big === 4) {
          return 4;
        } else if (smaill === 0 && big === 5) {
          return 5;
        } else if (smaill === 0 && big === 6) {
          return 6;
        } else if (smaill === 1 && big === 1) {
          return 7;
        } else if (smaill === 1 && big === 2) {
          return 8;
        } else if (smaill === 1 && big === 3) {
          return 9;
        } else if (smaill === 1 && big === 4) {
          return 10;
        } else if (smaill === 1 && big === 5) {
          return 11;
        } else if (smaill === 1 && big === 6) {
          return 12;
        } else if (smaill === 2 && big === 2) {
          return 13;
        } else if (smaill === 2 && big === 3) {
          return 14;
        } else if (smaill === 2 && big === 4) {
          return 15;
        } else if (smaill === 2 && big === 5) {
          return 16;
        } else if (smaill === 2 && big === 6) {
          return 17;
        } else if (smaill === 3 && big === 3) {
          return 18;
        } else if (smaill === 3 && big === 4) {
          return 19;
        } else if (smaill === 3 && big === 5) {
          return 20;
        } else if (smaill === 3 && big === 6) {
          return 21;
        } else if (smaill === 4 && big === 4) {
          return 22;
        } else if (smaill === 4 && big === 5) {
          return 23;
        } else if (smaill === 4 && big === 6) {
          return 24;
        } else if (smaill === 5 && big === 5) {
          return 25;
        } else if (smaill === 5 && big === 6) {
          return 26;
        } else if (smaill === 6 && big === 6) {
          return 27;
        }

        return -1;
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=54a2422d88edd12bdfc288039c598f32ec84fa0f.js.map