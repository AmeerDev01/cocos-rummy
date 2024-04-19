System.register(["__unresolved_0", "cc", "redux-act", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, DeskStatus, _crd, initState, ActionTypes, initSelfSeat, joinSeat, changePlayerStatus, changeDeskStatus, updateNoShowCardNumber, showOutCard, getCard, deal, changeOutCardPlayer, outCountdown, clearRoomData, quitRoom, setDeskCardOutline, setWinlossType, quitSeat, updatePlayerLewat, sendBalance, updateGold;

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBalancePlayer(extras) {
    _reporterNs.report("BalancePlayer", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardItem(extras) {
    _reporterNs.report("CardItem", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCountdown(extras) {
    _reporterNs.report("Countdown", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeskStatus(extras) {
    _reporterNs.report("DeskStatus", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerGameData(extras) {
    _reporterNs.report("PlayerGameData", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSeatPosition(extras) {
    _reporterNs.report("SeatPosition", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinlossType(extras) {
    _reporterNs.report("WinlossType", "../../type", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "38899TqH61C5KSjfPnJ8uf8", "game", undefined);

      _export("initState", initState = {
        statue: (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
          error: Error()
        }), DeskStatus) : DeskStatus).WAITING,
        playerMap: [null, null, null, null],
        noShowCardNumber: [0, 0, 0, 0, 0, 0, 0],
        outCardItem: [],
        leftOutCardItem: [],
        rightOutCardItem: [],
        newCardItem: null,
        lastActiveSeatIndex: -1,
        currActiveSeatIndex: -1,
        outCountdown: null,
        intendOutCard: null,
        quitRoomAction: 0,
        readyCountdown: null,
        gold: 0,
        balanceOdds: 0
      });
      /**必须大写，不然redux-act这货要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["DOMINO_INIT_SELF_SEAT"] = "DOMINO_INIT_SELF_SEAT";
        ActionTypes["DOMINO_JOIN_SEAT"] = "DOMINO_JOIN_SEAT";
        ActionTypes["DOMINO_CHANGE_DESK_STATUS"] = "DOMINO_CHANGE_DESK_STATUS";
        ActionTypes["DOMINO_UPDATE_PLAYER_GAME_DATA"] = "DOMINO_UPDATE_PLAYER_GAME_DATA";
        ActionTypes["DOMINO_UPDATE_NO_SHOW_CARD"] = "DOMINO_UPDATE_NO_SHOW_CARD";
        ActionTypes["DOMINO_SHOW_OUT_CARD"] = "DOMINO_SHOW_OUT_CARD";
        ActionTypes["DOMINO_GET_CARD"] = "DOMINO_GET_CARD";
        ActionTypes["DOMINO_QUIT_SEAT"] = "DOMINO_QUIT_SEAT";
        ActionTypes["DOMINO_DEAL"] = "DOMINO_DEAL";
        ActionTypes["DOMINO_CHANGE_OUT_CARD_PLAYER"] = "DOMINO_CHANGE_OUT_CARD_PLAYER";
        ActionTypes["DOMINO_QUIT_GAME"] = "DOMINO_QUIT_GAME";
        ActionTypes["DOMINO_CLEAR_ROOM_DATA"] = "DOMINO_CLEAR_ROOM_DATA";
        ActionTypes["DOMINO_OUT_COUTNDOWN"] = "DOMINO_OUT_COUTNDOWN";
        ActionTypes["DOMINO_SET_DESK_CARD_OUTLINE"] = "DOMINO_SET_DESK_CARD_OUTLINE";
        ActionTypes["DOMINO_QUIT_ROOM"] = "DOMINO_QUIT_ROOM";
        ActionTypes["DOMINO_GAME_IN_WINLOSS"] = "DOMINO_GAME_IN_WINLOSS";
        ActionTypes["DOMINO_UPDATE_LEWAT"] = "DOMINO_UPDATE_LEWAT";
        ActionTypes["DOMINO_BALANCE"] = "DOMINO_BALANCE";
        ActionTypes["DOMINO_UPDATE_GOLD"] = "DOMINO_UPDATE_GOLD";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      /**初始化玩家座位 */
      _export("initSelfSeat", initSelfSeat = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DOMINO_INIT_SELF_SEAT, player => {
        return {
          player
        };
      }));
      /**其他对手入座 */


      _export("joinSeat", joinSeat = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DOMINO_JOIN_SEAT, (seatPostion, player) => {
        return {
          seatPostion,
          player
        };
      }));
      /**改变玩家准备状态 */


      _export("changePlayerStatus", changePlayerStatus = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DOMINO_UPDATE_PLAYER_GAME_DATA, (palyerId, playGame) => {
        return {
          palyerId,
          playGame
        };
      }));
      /**改变牌桌状态 */


      _export("changeDeskStatus", changeDeskStatus = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DOMINO_CHANGE_DESK_STATUS, (status, countdown) => {
        return {
          status,
          countdown
        };
      }));
      /**刷新未显示牌的记录 */


      _export("updateNoShowCardNumber", updateNoShowCardNumber = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DOMINO_UPDATE_NO_SHOW_CARD, noShowCardNumber => {
        return {
          noShowCardNumber
        };
      }));
      /**出牌 */


      _export("showOutCard", showOutCard = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DOMINO_SHOW_OUT_CARD, showOutCard => {
        return {
          showOutCard
        };
      }));
      /**获取牌型 */


      _export("getCard", getCard = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DOMINO_GET_CARD, (playerId, card) => {
        return {
          playerId,
          card
        };
      }));
      /**发牌 */


      _export("deal", deal = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DOMINO_DEAL, cardItems => {
        return {
          cardItems
        };
      }));
      /**切换出牌用户 */


      _export("changeOutCardPlayer", changeOutCardPlayer = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DOMINO_CHANGE_OUT_CARD_PLAYER, seatIndex => {
        return {
          seatIndex
        };
      }));
      /**切换出牌用户 */


      _export("outCountdown", outCountdown = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DOMINO_OUT_COUTNDOWN, outCountdown => {
        return {
          outCountdown
        };
      }));

      _export("clearRoomData", clearRoomData = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DOMINO_CLEAR_ROOM_DATA, () => {
        return {};
      }));

      _export("quitRoom", quitRoom = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DOMINO_QUIT_ROOM, () => {
        return {};
      }));

      _export("setDeskCardOutline", setDeskCardOutline = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DOMINO_SET_DESK_CARD_OUTLINE, intendOutCard => {
        return {
          intendOutCard
        };
      }));

      _export("setWinlossType", setWinlossType = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DOMINO_GAME_IN_WINLOSS, winlossType => {
        return {
          winlossType
        };
      }));

      _export("quitSeat", quitSeat = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DOMINO_QUIT_SEAT, playerId => {
        return {
          playerId
        };
      }));

      _export("updatePlayerLewat", updatePlayerLewat = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DOMINO_UPDATE_LEWAT, (playerId, lewatPokers) => {
        return {
          playerId,
          lewatPokers
        };
      }));

      _export("sendBalance", sendBalance = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DOMINO_BALANCE, balances => {
        return {
          balances
        };
      }));

      _export("updateGold", updateGold = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DOMINO_UPDATE_GOLD, gold => {
        return {
          gold
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=40746086f506afe30bbdbb2cc21c56cf47e1eefd.js.map