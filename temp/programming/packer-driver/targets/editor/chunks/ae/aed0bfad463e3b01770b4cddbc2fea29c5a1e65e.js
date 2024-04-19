System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _crd, BetType, GameStatus, AnimationStatus;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "df396jpaS1Ks6zxip/A63Tt", "type", undefined);

      /**下注类型 */
      __checkObsolete__(['Vec3']);

      _export("BetType", BetType = /*#__PURE__*/function (BetType) {
        BetType[BetType["FISH"] = 1] = "FISH";
        BetType[BetType["CRAB"] = 2] = "CRAB";
        BetType[BetType["DEER"] = 3] = "DEER";
        BetType[BetType["CHOOK"] = 4] = "CHOOK";
        BetType[BetType["GOURD"] = 5] = "GOURD";
        BetType[BetType["SHRIMP"] = 6] = "SHRIMP";
        return BetType;
      }({}));
      /**游戏状态 */


      _export("GameStatus", GameStatus = /*#__PURE__*/function (GameStatus) {
        GameStatus[GameStatus["BET"] = 1] = "BET";
        GameStatus[GameStatus["STOP_BET"] = 2] = "STOP_BET";
        GameStatus[GameStatus["QUIT_GAME"] = 99] = "QUIT_GAME";
        return GameStatus;
      }({}));

      _export("AnimationStatus", AnimationStatus = /*#__PURE__*/function (AnimationStatus) {
        AnimationStatus[AnimationStatus["IDLE"] = 0] = "IDLE";
        AnimationStatus[AnimationStatus["KAI_GAI"] = 1] = "KAI_GAI";
        AnimationStatus[AnimationStatus["FLY_CHIP"] = 2] = "FLY_CHIP";
        AnimationStatus[AnimationStatus["HEAD_ADD_GOLD"] = 3] = "HEAD_ADD_GOLD";
        AnimationStatus[AnimationStatus["CLOSE_GAI"] = 4] = "CLOSE_GAI";
        AnimationStatus[AnimationStatus["RECHANGE_ADD_GOLD"] = 5] = "RECHANGE_ADD_GOLD";
        return AnimationStatus;
      }({}));
      /**头像类型 */

      /**下注信息 */

      /**改变金额 */

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
//# sourceMappingURL=aed0bfad463e3b01770b4cddbc2fea29c5a1e65e.js.map