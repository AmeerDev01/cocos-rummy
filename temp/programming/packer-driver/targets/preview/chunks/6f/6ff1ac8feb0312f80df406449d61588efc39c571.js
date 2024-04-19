System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, BetType, GameStatus, CardStatus, gameCacheData;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "20a90eNbtNPPrmowP1BXahl", "type", undefined);

      /**下注类型 */
      _export("BetType", BetType = /*#__PURE__*/function (BetType) {
        BetType[BetType["BLUE"] = 1] = "BLUE";
        BetType[BetType["BLUE_QIU"] = 2] = "BLUE_QIU";
        BetType[BetType["BLUE_TWIN"] = 3] = "BLUE_TWIN";
        BetType[BetType["RED"] = 4] = "RED";
        BetType[BetType["RED_QIU"] = 5] = "RED_QIU";
        BetType[BetType["RED_TWIN"] = 6] = "RED_TWIN";
        BetType[BetType["GREEN_DRAW"] = 7] = "GREEN_DRAW";
        BetType[BetType["GREEN_QIU"] = 8] = "GREEN_QIU";
        BetType[BetType["GREEN_SIX_TWINS"] = 9] = "GREEN_SIX_TWINS";
        return BetType;
      }({}));
      /**游戏状态 */


      _export("GameStatus", GameStatus = /*#__PURE__*/function (GameStatus) {
        GameStatus[GameStatus["BET"] = 1] = "BET";
        GameStatus[GameStatus["STOP_BET"] = 2] = "STOP_BET";
        GameStatus[GameStatus["WAIT"] = 3] = "WAIT";
        GameStatus[GameStatus["QUIT_GAME"] = 99] = "QUIT_GAME";
        return GameStatus;
      }({}));
      /**用户权限 */

      /**红蓝方的牌点数 */


      /**特殊牌赔率 */
      _export("CardStatus", CardStatus = /*#__PURE__*/function (CardStatus) {
        CardStatus[CardStatus["NORMAL"] = 1] = "NORMAL";
        CardStatus[CardStatus["TWIN"] = 15] = "TWIN";
        CardStatus[CardStatus["QIU"] = 8] = "QIU";
        CardStatus[CardStatus["GREEN_DRAW"] = 8] = "GREEN_DRAW";
        CardStatus[CardStatus["GREEN_QIU"] = 80] = "GREEN_QIU";
        CardStatus[CardStatus["GREEN_SIX_TWINS"] = 450] = "GREEN_SIX_TWINS";
        return CardStatus;
      }({}));
      /**头像类型 */

      /**发送下注信息 */

      /**
       * @param win 4代表输 1为蓝方赢  2为红方赢  3为绿方赢 */

      /*
      * 玩家详情的参数
      */


      /**游戏缓存数据 */
      _export("gameCacheData", gameCacheData = {
        roomId: "",
        memberId: "",
        leftUsers: [],
        rightUsers: [],
        winList: [],
        goldData: {}
      });
      /**
       * 请求道具
       */

      /**
       * 接收到的道具
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6ff1ac8feb0312f80df406449d61588efc39c571.js.map