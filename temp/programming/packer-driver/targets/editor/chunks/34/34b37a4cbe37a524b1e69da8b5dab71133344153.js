System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, BetType, gameCacheData;

  function _reportPossibleCrUseOfChipViewModel(extras) {
    _reporterNs.report("ChipViewModel", "./ViewModel/DragonTigerChipViewModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1865753L4ZBB5Ct4yBGlsZ7", "type", undefined);

      /**下注类型 */
      _export("BetType", BetType = /*#__PURE__*/function (BetType) {
        BetType[BetType["BLUE"] = 1] = "BLUE";
        BetType[BetType["RED"] = 2] = "RED";
        BetType[BetType["SERI"] = 3] = "SERI";
        return BetType;
      }({}));
      /**头像类型 */

      /**发送下注信息 */

      /**牌 */

      /**重复下注数据 */

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
//# sourceMappingURL=34b37a4cbe37a524b1e69da8b5dab71133344153.js.map