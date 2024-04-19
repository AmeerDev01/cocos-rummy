System.register(["__unresolved_0", "cc", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, _crd, initState, ActionTypes, setMyInfoAction, setUsersInfoAction, setCountDownAction, setNewBetDataAction, changeGoldDataAction, changeAllWinUsersAction, setOnlineNumber, changeCancelBetDataAction, resetStore;

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetData(extras) {
    _reporterNs.report("BetData", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeadType(extras) {
    _reporterNs.report("HeadType", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMemberInfoVo(extras) {
    _reporterNs.report("MemberInfoVo", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinUser(extras) {
    _reporterNs.report("WinUser", "../../type", _context.meta, extras);
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

      _cclegacy._RF.push({}, "b5dd8pd1sBFqajpqlqdncnl", "game", undefined);

      _export("initState", initState = {
        onlineNum: null,
        myInfo: null,
        usersInfo: null,
        countDown: null,
        newBetData: null,
        goldData: null,
        allWinUsers: null,
        cancelBetData: null
      });
      /**必须大写，不然redux-act要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["DRAGONTIGER_CHANGE_MY_INFO"] = "DRAGONTIGER_CHANGE_MY_INFO";
        ActionTypes["DRAGONTIGER_USERS_INFO"] = "DRAGONTIGER_USERS_INFO";
        ActionTypes["DRAGONTIGER_COUNT_DOWN"] = "DRAGONTIGER_COUNT_DOWN";
        ActionTypes["DRAGONTIGER_NEW_BET_DATA"] = "DRAGONTIGER_NEW_BET_DATA";
        ActionTypes["DRAGONTIGER_GOLD_DATA"] = "DRAGONTIGER_GOLD_DATA";
        ActionTypes["DRAGONTIGER_ALL_WIN_USER"] = "DRAGONTIGER_ALL_WIN_USER";
        ActionTypes["DRAGONTIGER_CHANGE_ONLINE_NUMBER"] = "DRAGONTIGER_CHANGE_ONLINE_NUMBER";
        ActionTypes["DRAGONTGER_CANCEL_BET_DATA"] = "DRAGONTGER_CANCEL_BET_DATA";
        ActionTypes["DRAGONTGER_RESET_STORE"] = "DRAGONTGER_RESET_STORE";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      /**初始化用户信息 */
      _export("setMyInfoAction", setMyInfoAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTIGER_CHANGE_MY_INFO, myInfo => {
        return {
          myInfo
        };
      }));
      /**初始化榜上用户信息 */


      _export("setUsersInfoAction", setUsersInfoAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTIGER_USERS_INFO, usersInfo => {
        return {
          usersInfo
        };
      }));
      /**设置倒计时时间 */


      _export("setCountDownAction", setCountDownAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTIGER_COUNT_DOWN, countDown => {
        return {
          countDown
        };
      }));

      _export("setNewBetDataAction", setNewBetDataAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTIGER_NEW_BET_DATA, newBetData => {
        return {
          newBetData
        };
      }));

      _export("changeGoldDataAction", changeGoldDataAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTIGER_GOLD_DATA, goldData => {
        return {
          goldData
        };
      }));

      _export("changeAllWinUsersAction", changeAllWinUsersAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTIGER_ALL_WIN_USER, allWinUsers => {
        return {
          allWinUsers
        };
      }));
      /**设置房间在线人数 */


      _export("setOnlineNumber", setOnlineNumber = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTIGER_CHANGE_ONLINE_NUMBER, onlineNum => {
        return {
          onlineNum
        };
      }));

      _export("changeCancelBetDataAction", changeCancelBetDataAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_CANCEL_BET_DATA, cancelBetData => {
        return {
          cancelBetData
        };
      }));

      _export("resetStore", resetStore = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_RESET_STORE, () => {
        return {
          initState
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f3c258b3f173543b663b97c1120c9afaeb7d8cc2.js.map