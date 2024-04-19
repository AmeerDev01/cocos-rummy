System.register(["__unresolved_0", "cc", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, _crd, initState, ActionTypes, setHistoryListAction, setRoomLeftInfosAction, setRoomRightInfosAction, setRoomWinInfosAction, setMemberDataAction, setRoomInfoSizeAction, setMemberBetAction, changeGoldAction, changeGameTypeAction, changeSelectChipAction, resetHistoryStore;

  function _reportPossibleCrUseOfMyInfo(extras) {
    _reporterNs.report("MyInfo", "./userInfo", _context.meta, extras);
  }

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

      _cclegacy._RF.push({}, "035bbLNVWBDn7UWH/OJQy9t", "history", undefined);

      _export("initState", initState = {
        historyList: {
          data: [],
          dragonNum: 0,
          tigerNum: 0,
          dragon: 0,
          tiger: 0,
          drawNum: 0
        },
        roomLeftInfoVos: [],
        roomRightInfoVos: [],
        roomWinInfo: [],
        roomInfoSize: 0,
        memberData: {
          gold: 0,
          memberId: "",
          type: 0,
          memberName: ""
        },
        memberBet: null,
        gold: 0,
        gameType: null,
        selectChip: 1000
      });
      /**必须大写，不然redux-act要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["DRAGONTGER_HISTORY_LIST"] = "DRAGONTGER_HISTORY_LIST";
        ActionTypes["DRAGONTGER_ROOM_LEFT_INFOS"] = "DRAGONTGER_ROOM_LEFT_INFOS";
        ActionTypes["DRAGONTGER_ROOM_RIGHT_INFOS"] = "DRAGONTGER_ROOM_RIGHT_INFOS";
        ActionTypes["DRAGONTGER_ROOM_INFO_SIZE"] = "DRAGONTGER_ROOM_INFO_SIZE";
        ActionTypes["DRAGONTGER_ROOM_WIN_INFO"] = "DRAGONTGER_ROOM_WIN_INFO";
        ActionTypes["DRAGONTGER_MEMBER_DATA"] = "DRAGONTGER_MEMBER_DATA";
        ActionTypes["DRAGONTGER_MEMBER_BET"] = "DRAGONTGER_MEMBER_BET";
        ActionTypes["DRAGONTGER_GOLD"] = "DRAGONTGER_GOLD";
        ActionTypes["DRAGONTGER_GAMETYPE"] = "DRAGONTGER_GAMETYPE";
        ActionTypes["DRAGONTGER_SELECT_CHIP"] = "DRAGONTGER_SELECT_CHIP";
        ActionTypes["DRAGONTGER_HISTORY_RESET_STORE"] = "DRAGONTGER_HISTORY_RESET_STORE";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      _export("setHistoryListAction", setHistoryListAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_HISTORY_LIST, historyList => {
        return {
          historyList
        };
      }));

      _export("setRoomLeftInfosAction", setRoomLeftInfosAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_ROOM_LEFT_INFOS, roomLeftInfoVos => {
        return {
          roomLeftInfoVos
        };
      }));

      _export("setRoomRightInfosAction", setRoomRightInfosAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_ROOM_RIGHT_INFOS, roomRightInfoVos => {
        return {
          roomRightInfoVos
        };
      }));

      _export("setRoomWinInfosAction", setRoomWinInfosAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_ROOM_WIN_INFO, roomWinInfo => {
        return {
          roomWinInfo
        };
      }));

      _export("setMemberDataAction", setMemberDataAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_MEMBER_DATA, memberData => {
        return {
          memberData
        };
      }));

      _export("setRoomInfoSizeAction", setRoomInfoSizeAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_ROOM_INFO_SIZE, roomInfoSize => {
        return {
          roomInfoSize
        };
      }));

      _export("setMemberBetAction", setMemberBetAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_MEMBER_BET, memberBet => {
        return {
          memberBet
        };
      }));

      _export("changeGoldAction", changeGoldAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_GOLD, gold => {
        return {
          gold
        };
      }));

      _export("changeGameTypeAction", changeGameTypeAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_GAMETYPE, gameType => {
        return {
          gameType
        };
      }));

      _export("changeSelectChipAction", changeSelectChipAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_SELECT_CHIP, selectChip => {
        return {
          selectChip
        };
      }));

      _export("resetHistoryStore", resetHistoryStore = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_HISTORY_RESET_STORE, () => {
        return {
          initState
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a3333fdfb71005a2419bdb15ccb314986328c3ec.js.map