System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, CardPosition, SeatPosition, PlayerSatus, DeskStatus, initPlayer, initPlayerGameData, genPlayer, genCardItem, getComposeCardValue, getCardAlignValue, getFirshCardComponseValue, calCardAzimuth, isComponseSuccess, convertAzimuth, getRoomUpper;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5d5e2yAPdxMkI28DcGzQqUC", "type", undefined);

      /**牌的放置方向 */
      _export("CardPosition", CardPosition = /*#__PURE__*/function (CardPosition) {
        CardPosition[CardPosition["HORIZONTAL"] = 0] = "HORIZONTAL";
        CardPosition[CardPosition["VERTICAL"] = 1] = "VERTICAL";
        return CardPosition;
      }({}));

      _export("SeatPosition", SeatPosition = /*#__PURE__*/function (SeatPosition) {
        SeatPosition[SeatPosition["LEFT"] = 0] = "LEFT";
        SeatPosition[SeatPosition["TOP"] = 1] = "TOP";
        SeatPosition[SeatPosition["RIGHT"] = 2] = "RIGHT";
        SeatPosition[SeatPosition["DOWN"] = 3] = "DOWN";
        return SeatPosition;
      }({}));
      /**玩家状态 */


      _export("PlayerSatus", PlayerSatus = /*#__PURE__*/function (PlayerSatus) {
        PlayerSatus[PlayerSatus["WAITING"] = 0] = "WAITING";
        PlayerSatus[PlayerSatus["READY"] = 1] = "READY";
        PlayerSatus[PlayerSatus["CARD"] = 2] = "CARD";
        return PlayerSatus;
      }({}));
      /**牌桌状态 */


      _export("DeskStatus", DeskStatus = /*#__PURE__*/function (DeskStatus) {
        DeskStatus[DeskStatus["WAITING"] = 0] = "WAITING";
        DeskStatus[DeskStatus["COUNTDOWNING"] = 1] = "COUNTDOWNING";
        DeskStatus[DeskStatus["DISTRIBUTE"] = 2] = "DISTRIBUTE";
        DeskStatus[DeskStatus["PLAYING"] = 3] = "PLAYING";
        DeskStatus[DeskStatus["CLSOE"] = 4] = "CLSOE";
        return DeskStatus;
      }({}));
      /**玩家 */


      _export("initPlayer", initPlayer = () => {
        var player = {
          uid: '',

          /**头像序号 */
          head: 1,
          nickName: '',
          glodAmount: 0,
          tableId: '',
          gameData: {
            state: PlayerSatus.WAITING,

            /**是否是庄家 */
            isMaster: false,

            /**剩余牌数量 */
            remainCardCount: 0,

            /**倒计时 */
            // countDownTime: number

            /**手牌组，正常情况下，只有玩家自身才有 */
            cardIList: [],

            /**跟不上的牌点数 */
            noWayCardNumber: []
          },
          isSelf: false,

          /**与后端一致 */
          chairId: -1,
          seatIndex: -1,
          winloss: 0
        };
        return player;
      });

      _export("initPlayerGameData", initPlayerGameData = () => {
        var gameData = {
          /**状态 */
          state: PlayerSatus.WAITING,

          /**是否是庄家 */
          isMaster: false,

          /**剩余牌数量 */
          remainCardCount: 0,

          /**倒计时 */
          // countDownTime: number

          /**手牌组，正常情况下，只有玩家自身才有 */
          cardIList: [],

          /**跟不上的牌点数 */
          noWayCardNumber: []
        };
        return gameData;
      });
      /**出牌数据 */

      /**出牌返回数据 */

      /**重连数据 */


      /**构建用户 */
      _export("genPlayer", genPlayer = memberInfo => {
        var pokers = memberInfo.pokes ? memberInfo.pokes : [];
        var player = {
          uid: memberInfo.memberId,
          head: memberInfo.icon,
          nickName: memberInfo.nickName,
          glodAmount: memberInfo.memberAssetGoldPieces,
          chairId: memberInfo.chairId,
          tableId: memberInfo.tableId,
          gameData: {
            state: memberInfo.memberState ? PlayerSatus.READY : PlayerSatus.WAITING,
            isMaster: Boolean(memberInfo.isDealer),
            remainCardCount: 0,
            cardIList: pokers.map(v => genCardItem(v)),
            noWayCardNumber: []
          },
          seatIndex: -1,
          isSelf: false,
          winloss: 0
        };
        return player;
      });
      /**构建牌 */


      _export("genCardItem", genCardItem = index => {
        var cardItem = {
          upFace: 0,
          downFace: 0,
          position: CardPosition.VERTICAL,
          value: index
        };

        if (index === 0) {
          cardItem.upFace = 0;
          cardItem.downFace = 0;
        } else if (index === 1) {
          cardItem.upFace = 0;
          cardItem.downFace = 1;
        } else if (index === 2) {
          cardItem.upFace = 0;
          cardItem.downFace = 2;
        } else if (index === 3) {
          cardItem.upFace = 0;
          cardItem.downFace = 3;
        } else if (index === 4) {
          cardItem.upFace = 0;
          cardItem.downFace = 4;
        } else if (index === 5) {
          cardItem.upFace = 0;
          cardItem.downFace = 5;
        } else if (index === 6) {
          cardItem.upFace = 0;
          cardItem.downFace = 6;
        } else if (index === 7) {
          cardItem.upFace = 1;
          cardItem.downFace = 1;
        } else if (index === 8) {
          cardItem.upFace = 1;
          cardItem.downFace = 2;
        } else if (index === 9) {
          cardItem.upFace = 1;
          cardItem.downFace = 3;
        } else if (index === 10) {
          cardItem.upFace = 1;
          cardItem.downFace = 4;
        } else if (index === 11) {
          cardItem.upFace = 1;
          cardItem.downFace = 5;
        } else if (index === 12) {
          cardItem.upFace = 1;
          cardItem.downFace = 6;
        } else if (index === 13) {
          cardItem.upFace = 2;
          cardItem.downFace = 2;
        } else if (index === 14) {
          cardItem.upFace = 2;
          cardItem.downFace = 3;
        } else if (index === 15) {
          cardItem.upFace = 2;
          cardItem.downFace = 4;
        } else if (index === 16) {
          cardItem.upFace = 2;
          cardItem.downFace = 5;
        } else if (index === 17) {
          cardItem.upFace = 2;
          cardItem.downFace = 6;
        } else if (index === 18) {
          cardItem.upFace = 3;
          cardItem.downFace = 3;
        } else if (index === 19) {
          cardItem.upFace = 3;
          cardItem.downFace = 4;
        } else if (index === 20) {
          cardItem.upFace = 3;
          cardItem.downFace = 5;
        } else if (index === 21) {
          cardItem.upFace = 3;
          cardItem.downFace = 6;
        } else if (index === 22) {
          cardItem.upFace = 4;
          cardItem.downFace = 4;
        } else if (index === 23) {
          cardItem.upFace = 4;
          cardItem.downFace = 5;
        } else if (index === 24) {
          cardItem.upFace = 4;
          cardItem.downFace = 6;
        } else if (index === 25) {
          cardItem.upFace = 5;
          cardItem.downFace = 5;
        } else if (index === 26) {
          cardItem.upFace = 5;
          cardItem.downFace = 6;
        } else if (index === 27) {
          cardItem.upFace = 6;
          cardItem.downFace = 6;
        }

        return cardItem;
      });
      /**获得比较的牌值(与对齐值相反的值) */


      _export("getComposeCardValue", getComposeCardValue = cardItem => {
        return cardItem.alignValue === cardItem.upFace ? cardItem.downFace : cardItem.upFace;
      });
      /**获得与前一张牌能对齐的值 */


      _export("getCardAlignValue", getCardAlignValue = (middleCardItem, outCardItems, cardItem) => {
        var composeCardItem = outCardItems.length ? outCardItems[outCardItems.length - 1] : middleCardItem;
        var composeCardValue = getComposeCardValue(composeCardItem); // 如果左边或者右边没有出牌时，同时中间的牌上下不相等时，小的朝左边，大的朝右边

        if (outCardItems.length === 0 && middleCardItem.upFace !== middleCardItem.downFace) {
          composeCardValue = getFirshCardComponseValue(cardItem, middleCardItem);
        }

        if (composeCardValue === cardItem.upFace) {
          return cardItem.upFace;
        }

        return cardItem.downFace;
      });
      /**
       * 获得第一张牌比较值
       * @param cardItem 
       * @param middleCardItem 
       * @returns 
       */


      _export("getFirshCardComponseValue", getFirshCardComponseValue = (cardItem, middleCardItem) => {
        // 横向的第一张牌，小的始终的对齐左边，否则相反
        return cardItem.azimuth === 0 ? middleCardItem.upFace : middleCardItem.downFace;
      });
      /**
       * 计算牌是放在左边还是右边
       * @param cardItem 出的牌
       * @param middleCardItem 最中间的牌
       * @param leftCardItems 左边出的牌堆
       * @param rightCardItems 右边出的牌堆
       */


      _export("calCardAzimuth", calCardAzimuth = (cardItem, middleCardItem, leftCardItems, rightCardItems) => {
        if (cardItem.azimuth === 0 && isComponseSuccess(cardItem, middleCardItem, leftCardItems)) {
          cardItem.azimuth = 1;
        } else if (cardItem.azimuth === 1 && isComponseSuccess(cardItem, middleCardItem, rightCardItems)) {
          cardItem.azimuth = 0;
        }
      });
      /**
       * 是否比较成功
       * @param cardItem 
       * @param middleCardItem 
       * @param outCardItems 
       * @returns 
       */


      isComponseSuccess = (cardItem, middleCardItem, outCardItems) => {
        var composeCardValue;

        if (outCardItems.length) {
          composeCardValue = getComposeCardValue(outCardItems[outCardItems.length - 1]);
        } else {
          composeCardValue = getFirshCardComponseValue(cardItem, middleCardItem);
        }

        return composeCardValue !== cardItem.upFace && composeCardValue !== cardItem.downFace;
      };

      _export("convertAzimuth", convertAzimuth = position => {
        if (position === 1) {
          return 0;
        } else if (position === 2) {
          return 1;
        } else if (position === 3) {
          return 2;
        }

        return 0;
      });

      _export("getRoomUpper", getRoomUpper = roomInfo => {
        return roomInfo.upper > 0 ? roomInfo.upper : 10000000000000000;
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=30d574f4b29ea9fb45b08884f2045d96a507f604.js.map