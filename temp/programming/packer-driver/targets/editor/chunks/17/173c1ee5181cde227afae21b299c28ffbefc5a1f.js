System.register(["__unresolved_0", "cc", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, _crd, initState, ActionTypes, setBankerPokerAction, setBlackPokerAction, setRedPokerAction, setPlumPokerAction, setDiamondPokerAction, setWinAreaAction, setJackpotWinAction, setBlockNumAction, setHeartNumAction, setSakuraNumAction, setSpadeNumAction, setFarmhouseNumAction, setAllCardTypeAction;

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_reduxAct) {
      reduxAct = _reduxAct.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b180XexmpBUZZJwVbasCwp", "pokerDetail", undefined);

      _export("initState", initState = {
        bankerPoker: null,
        newBankerPoker: null,
        newBlackPoker: null,
        blackPoker: null,
        redPoker: null,
        newRedPoker: null,
        plumPoker: null,
        newPlumPoker: null,
        newDiamondPoker: null,
        diamondPoker: null,
        winArea: null,
        jackpotCard: null,
        farmhouse: null,
        blockNum: null,
        heartNum: null,
        sakuraNum: null,
        spadeNum: null,
        allCardType: null
      });
      /**必须大写，不然redux-act要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["BANDAR_BANKER_POKER"] = "BANDAR_BANKER_POKER";
        ActionTypes["BANDAR_BLACK_POKER"] = "BANDAR_BLACK_POKER";
        ActionTypes["BANDAR_RED_POKER"] = "BANDAR_RED_POKER";
        ActionTypes["BANDAR_PLUM_POKER"] = "BANDAR_PLUM_POKER";
        ActionTypes["BANDAR_DIAMOND_POKER"] = "BANDAR_DIAMOND_POKER";
        ActionTypes["BANDAR_WIN_AREA"] = "BANDAR_WIN_AREA";
        ActionTypes["BANDAR_JACKPOT_WIN_CARD"] = "BANDAR_JACKPOT_WIN_CARD";
        ActionTypes["BANDAR_FARMHOUSE_NUM"] = "BANDAR_FARMHOUSE_NUM";
        ActionTypes["BANDAR_BLOCK_NUM"] = "BANDAR_BLOCK_NUM";
        ActionTypes["BANDAR_HEART_NUM"] = "BANDAR_HEART_NUM";
        ActionTypes["BANDAR_SAKURA_NUM"] = "BANDAR_SAKURA_NUM";
        ActionTypes["BANDAR_SPADE_NUM"] = "BANDAR_SPADE_NUM";
        ActionTypes["BANDAR_ALL_CARD_TYPE"] = "BANDAR_ALL_CARD_TYPE";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      /**更新庄家牌信息*/
      _export("setBankerPokerAction", setBankerPokerAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_BANKER_POKER, bankerPoker => {
        return {
          bankerPoker
        };
      }));
      /**更新黑桃牌信息*/


      _export("setBlackPokerAction", setBlackPokerAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_BLACK_POKER, blackPoker => {
        return {
          blackPoker
        };
      }));
      /**更新红桃牌信息*/


      _export("setRedPokerAction", setRedPokerAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_RED_POKER, redPoker => {
        return {
          redPoker
        };
      }));
      /**更新梅花牌信息*/


      _export("setPlumPokerAction", setPlumPokerAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_PLUM_POKER, plumPoker => {
        return {
          plumPoker
        };
      }));
      /**更新方块牌信息*/


      _export("setDiamondPokerAction", setDiamondPokerAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_DIAMOND_POKER, diamondPoker => {
        return {
          diamondPoker
        };
      }));
      /**更新赢的区域*/


      _export("setWinAreaAction", setWinAreaAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_WIN_AREA, winArea => {
        return {
          winArea
        };
      }));
      /**更新中奖框的牌*/


      _export("setJackpotWinAction", setJackpotWinAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_JACKPOT_WIN_CARD, jackpotCard => {
        return {
          jackpotCard
        };
      }));
      /**二阶段进入游戏 更新方块牌信息*/


      _export("setBlockNumAction", setBlockNumAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_BLOCK_NUM, blockNum => {
        return {
          blockNum
        };
      }));
      /**二阶段进入游戏 更新红桃牌信息*/


      _export("setHeartNumAction", setHeartNumAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_HEART_NUM, heartNum => {
        return {
          heartNum
        };
      }));
      /**二阶段进入游戏 更新梅花牌信息*/


      _export("setSakuraNumAction", setSakuraNumAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_SAKURA_NUM, sakuraNum => {
        return {
          sakuraNum
        };
      }));
      /**二阶段进入游戏 更新黑桃牌信息*/


      _export("setSpadeNumAction", setSpadeNumAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_SPADE_NUM, spadeNum => {
        return {
          spadeNum
        };
      }));
      /**二阶段进入游戏 更新庄家牌信息*/


      _export("setFarmhouseNumAction", setFarmhouseNumAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_FARMHOUSE_NUM, farmhouse => {
        return {
          farmhouse
        };
      }));
      /** 更新所有特殊牌型 QIuQiu twins*/


      _export("setAllCardTypeAction", setAllCardTypeAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_ALL_CARD_TYPE, allCardType => {
        return {
          allCardType
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=173c1ee5181cde227afae21b299c28ffbefc5a1f.js.map