System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, BetType, GameStatus, CardStatus, gameCacheData;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "62bacxm7IlE740bx20qorsO", "type", undefined);

      /**下注类型 */
      _export("BetType", BetType = /*#__PURE__*/function (BetType) {
        BetType[BetType["BLACK"] = 1] = "BLACK";
        BetType[BetType["RED"] = 2] = "RED";
        BetType[BetType["PLUM"] = 3] = "PLUM";
        BetType[BetType["DIAMOND"] = 4] = "DIAMOND";
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
      /**特殊牌赔率 */


      _export("CardStatus", CardStatus = /*#__PURE__*/function (CardStatus) {
        CardStatus[CardStatus["SIX_CARD"] = 6] = "SIX_CARD";
        CardStatus[CardStatus["TWIN_CARD"] = 5] = "TWIN_CARD";
        CardStatus[CardStatus["SMALL_CARD"] = 4] = "SMALL_CARD";
        CardStatus[CardStatus["BIG_CARD"] = 3] = "BIG_CARD";
        CardStatus[CardStatus["QIU_QIU"] = 2] = "QIU_QIU";
        return CardStatus;
      }({}));
      /**头像类型 */

      /**下注信息 */

      /**用户权限 */

      /**发送下注信息 */

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
        newBankerPoker: [],
        newBlackPoker: [],
        newRedPoker: [],
        newPlumPoker: [],
        newDiamondPoker: [],
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
//# sourceMappingURL=a931b07fa6c8a0036dcaa5f46ad401f05db7ff98.js.map