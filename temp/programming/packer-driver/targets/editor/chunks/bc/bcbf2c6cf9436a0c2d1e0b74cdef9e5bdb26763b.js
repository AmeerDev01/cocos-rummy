System.register(["__unresolved_0", "cc", "redux-act", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, DeskStatus, config, _crd, initState, ActionTypes, joinSeat, quitSeat, updateGold, clearRoomData, changeDeskStatus, playerReady, playerBet, dealAction, dealHandCard, changeDealer, addGoldAnime, saveBalanceInfo, syncBalanceGoldToGold, operationCountdown, changeOperationPlayer, playerChangeOpType, beginGameCountdown, updateCallAmount, saveWinBalanceInfo, reconnectRecoverBet, setPlayerGameStatus, reconnectGameData;

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeskStatus(extras) {
    _reporterNs.report("DeskStatus", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCountdown(extras) {
    _reporterNs.report("Countdown", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationType(extras) {
    _reporterNs.report("OperationType", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetInfo(extras) {
    _reporterNs.report("BetInfo", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBalanceInfo(extras) {
    _reporterNs.report("BalanceInfo", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../../config", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_reduxAct) {
      reduxAct = _reduxAct.default;
    }, function (_unresolved_2) {
      DeskStatus = _unresolved_2.DeskStatus;
    }, function (_unresolved_3) {
      config = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9281aN2K5dBjZibVfh0biUe", "game", undefined);

      _export("initState", initState = {
        deskStatus: (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
          error: Error()
        }), DeskStatus) : DeskStatus).WAITING,
        playerMap: new Array((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
          error: Error()
        }), config) : config).seatNumber).fill(null),
        lastActiveSeatIndex: -1,
        currActiveSeatIndex: -1,
        gold: 0,
        operationCountdown: null,
        newBetInfo: null,
        balanceInfo: null,
        betAmount: 0,
        maxAmount: 0,
        totalBetAmount: 0,
        balanceInfos: [],
        beginGameCountdown: null,
        dealCount: 0
      });
      /**必须大写，不然redux-act这货要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["QIUQIU_JOIN_SEAT"] = "QIUQIU_JOIN_SEAT";
        ActionTypes["QIUQIU_QUIT_SEAT"] = "QIUQIU_QUIT_SEAT";
        ActionTypes["QIUQIU_UPDATE_GOLD"] = "QIUQIU_UPDATE_GOLD";
        ActionTypes["QIUQIU_CLEAR_DATA"] = "QIUQIU_CLEAR_DATA";
        ActionTypes["QIUQIU_CHANGE_DESK_STATUS"] = "QIUQIU_CHANGE_DESK_STATUS";
        ActionTypes["QIUQIU_READY"] = "QIUQIU_READY";
        ActionTypes["QIUQIU_BET"] = "QIUQIU_BET";
        ActionTypes["QIUQIU_DEAL_ACTION"] = "QIUQIU_DEAL_ACTION";
        ActionTypes["QIUQIU_CHANGE_DEALER"] = "QIUQIU_CHANGE_DEALER";
        ActionTypes["QIUQIU_DEAL_HAND_CARD"] = "QIUQIU_DEAL_HAND_CARD";
        ActionTypes["QIUQIU_ADD_GOLD_ANMIE"] = "QIUQIU_ADD_GOLD_ANMIE";
        ActionTypes["QIUQIU_SAVE_BALANCE_INFO"] = "QIUQIU_SAVE_BALANCE_INFO";
        ActionTypes["QIUQIU_SYNC_BALANCE_GOLD_TO_GOLD"] = "QIUQIU_SYNC_BALANCE_GOLD_TO_GOLD";
        ActionTypes["QIUQIU_OPERATION_COUNTDOWN"] = "QIUQIU_OPERATION_COUNTDOWN";
        ActionTypes["QIUQIU_CHANGE_OPERATION_PLAYER"] = "QIUQIU_CHANGE_OPERATION_PLAYER";
        ActionTypes["QIUQIU_PLAYER_CHANGE_OP_TYPE"] = "QIUQIU_PLAYER_CHANGE_OP_TYPE";
        ActionTypes["QIUQIU_BEGIN_GAME_COUNTDOWN"] = "QIUQIU_BEGIN_GAME_COUNTDOWN";
        ActionTypes["QIUQIU_UPDATE_CALL_AMOUNT"] = "QIUQIU_UPDATE_CALL_AMOUNT";
        ActionTypes["QIUQIU_SAVE_WIN_BALANCE_INFO"] = "QIUQIU_SAVE_WIN_BALANCE_INFO";
        ActionTypes["QIUQIU_RECONNECT_RECOVER_BET"] = "QIUQIU_RECONNECT_RECOVER_BET";
        ActionTypes["QIUQIU_RECONNECT_GAME_DATA"] = "QIUQIU_RECONNECT_GAME_DATA";
        ActionTypes["QIUQIU_SET_PLAYER_GAME_STATUS"] = "QIUQIU_SET_PLAYER_GAME_STATUS";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      /**初始化其他玩家座位 */
      _export("joinSeat", joinSeat = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.QIUQIU_JOIN_SEAT, player => {
        return {
          player
        };
      }));

      _export("quitSeat", quitSeat = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.QIUQIU_QUIT_SEAT, memberId => {
        return {
          memberId
        };
      }));

      _export("updateGold", updateGold = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.QIUQIU_UPDATE_GOLD, gold => {
        return {
          gold
        };
      }));

      _export("clearRoomData", clearRoomData = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.QIUQIU_CLEAR_DATA, () => {
        return {};
      }));

      _export("changeDeskStatus", changeDeskStatus = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.QIUQIU_CHANGE_DESK_STATUS, deskStatus => {
        return {
          deskStatus
        };
      }));

      _export("playerReady", playerReady = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.QIUQIU_READY, memberId => {
        return {
          memberId
        };
      }));

      _export("playerBet", playerBet = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.QIUQIU_BET, (memberId, betAmount, opType, gold) => {
        return {
          memberId,
          betAmount,
          opType,
          gold
        };
      }));
      /**发牌动作 */


      _export("dealAction", dealAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.QIUQIU_DEAL_ACTION, (seatIndex, dealIndex) => {
        return {
          seatIndex,
          dealIndex
        };
      }));

      _export("dealHandCard", dealHandCard = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.QIUQIU_DEAL_HAND_CARD, cards => {
        return {
          cards
        };
      }));

      _export("changeDealer", changeDealer = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.QIUQIU_CHANGE_DEALER, memberId => {
        return {
          memberId
        };
      }));

      _export("addGoldAnime", addGoldAnime = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.QIUQIU_ADD_GOLD_ANMIE, (seatIndex, winloss) => {
        return {
          seatIndex,
          winloss
        };
      }));

      _export("saveBalanceInfo", saveBalanceInfo = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.QIUQIU_SAVE_BALANCE_INFO, (memberId, gold, winloss, cards) => {
        return {
          memberId,
          gold,
          winloss,
          cards
        };
      }));

      _export("syncBalanceGoldToGold", syncBalanceGoldToGold = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.QIUQIU_SYNC_BALANCE_GOLD_TO_GOLD, memberId => {
        return {
          memberId
        };
      }));

      _export("operationCountdown", operationCountdown = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.QIUQIU_OPERATION_COUNTDOWN, countdown => {
        return {
          countdown
        };
      }));

      _export("changeOperationPlayer", changeOperationPlayer = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.QIUQIU_CHANGE_OPERATION_PLAYER, memberId => {
        return {
          memberId
        };
      }));

      _export("playerChangeOpType", playerChangeOpType = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.QIUQIU_PLAYER_CHANGE_OP_TYPE, (memberId, opType, gold) => {
        return {
          memberId,
          opType,
          gold
        };
      }));

      _export("beginGameCountdown", beginGameCountdown = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.QIUQIU_BEGIN_GAME_COUNTDOWN, countdown => {
        return {
          countdown
        };
      }));

      _export("updateCallAmount", updateCallAmount = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.QIUQIU_UPDATE_CALL_AMOUNT, (memberId, callAmount) => {
        return {
          memberId,
          callAmount
        };
      }));

      _export("saveWinBalanceInfo", saveWinBalanceInfo = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.QIUQIU_SAVE_WIN_BALANCE_INFO, balanceInfos => {
        return {
          balanceInfos
        };
      }));

      _export("reconnectRecoverBet", reconnectRecoverBet = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.QIUQIU_RECONNECT_RECOVER_BET, (memberId, betAmount) => {
        return {
          memberId,
          betAmount
        };
      }));

      _export("setPlayerGameStatus", setPlayerGameStatus = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.QIUQIU_SET_PLAYER_GAME_STATUS, isGame => {
        return {
          isGame
        };
      }));

      _export("reconnectGameData", reconnectGameData = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.QIUQIU_RECONNECT_GAME_DATA, (betAmount, dealCount) => {
        return {
          betAmount,
          dealCount
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bcbf2c6cf9436a0c2d1e0b74cdef9e5bdb26763b.js.map