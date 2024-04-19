System.register(["__unresolved_0", "cc", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, _crd, initState, ActionTypes, setOnlineNumber, setMyInfoAction, setMyWinLose, setUsersInfoAction, setCountDownAction, setLayCountDownAction, setSecondsAction, setGoldAction, setGameStatusAction, setInitGameStatusAction, setTipsAction;

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeadType(extras) {
    _reporterNs.report("HeadType", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMemberInfoVo(extras) {
    _reporterNs.report("MemberInfoVo", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTipsVo(extras) {
    _reporterNs.report("TipsVo", "../../type", _context.meta, extras);
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

      _cclegacy._RF.push({}, "89aa68f+SpOs5bwXFMk+oou", "game", undefined);

      _export("initState", initState = {
        onlineNum: 0,
        //在线人数
        myInfo: null,
        myWinLose: 0,
        countDown: 0,
        layCountDown: 0,
        seconds: 0,
        gold: null,
        gameStatus: null,
        initGameStatus: null,
        usersInfo: [],
        tips: null
      });
      /**必须大写，不然redux-act要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["BANDARQIUQIU_CHANGE_ONLINE_NUMBER"] = "BANDARQIUQIU_CHANGE_ONLINE_NUMBER";
        ActionTypes["BANDARQIUQIU_CHANGE_MY_INFO"] = "BANDARQIUQIU_CHANGE_MY_INFO";
        ActionTypes["BANDARQIUQIU_MY_WIN_LOSE"] = "BANDARQIUQIU_MY_WIN_LOSE";
        ActionTypes["BANDARQIUQIU_COUNT_DOWN"] = "BANDARQIUQIU_COUNT_DOWN";
        ActionTypes["BANDARQIUQIU_LAY_COUNT_DOWN"] = "BANDARQIUQIU_LAY_COUNT_DOWN";
        ActionTypes["BANDARQIUQIU_SECONDS"] = "BANDARQIUQIU_SECONDS";
        ActionTypes["BANDARQIUQIU_GOLD"] = "BANDARQIUQIU_GOLD";
        ActionTypes["BANDARQIUQIU_GAME_STATUS"] = "BANDARQIUQIU_GAME_STATUS";
        ActionTypes["BANDARQIUQIU_GAME_USERS_INFO"] = "BANDARQIUQIU_GAME_USERS_INFO";
        ActionTypes["BANDERQIUQIU_INIT_GAME_STATUS"] = "BANDERQIUQIU_INIT_GAME_STATUS";
        ActionTypes["BANDERQIUQIU_GAME_TIPS"] = "BANDERQIUQIU_GAME_TIPS";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      /**设置房间在线人数 */
      _export("setOnlineNumber", setOnlineNumber = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_CHANGE_ONLINE_NUMBER, onlineNum => {
        return {
          onlineNum
        };
      }));
      /**初始化用户信息 */


      _export("setMyInfoAction", setMyInfoAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_CHANGE_MY_INFO, myInfo => {
        return {
          myInfo
        };
      }));
      /**用户输赢 */


      _export("setMyWinLose", setMyWinLose = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_MY_WIN_LOSE, myWinLose => {
        return {
          myWinLose
        };
      }));
      /**初始化榜上用户信息 */


      _export("setUsersInfoAction", setUsersInfoAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_GAME_USERS_INFO, usersInfo => {
        return {
          usersInfo
        };
      }));
      /**设置下注倒计时时间 */


      _export("setCountDownAction", setCountDownAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_COUNT_DOWN, countDown => {
        return {
          countDown
        };
      }));
      /**设置等待倒计时时间 */


      _export("setLayCountDownAction", setLayCountDownAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_LAY_COUNT_DOWN, layCountDown => {
        return {
          layCountDown
        };
      }));
      /**用于初始进入游戏时发牌时间判定 大于3秒才可以发牌 */


      _export("setSecondsAction", setSecondsAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_SECONDS, seconds => {
        return {
          seconds
        };
      }));
      /**设置用户金币 */


      _export("setGoldAction", setGoldAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_GOLD, gold => {
        return {
          gold
        };
      }));
      /**设置游戏状态 */


      _export("setGameStatusAction", setGameStatusAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_GAME_STATUS, gameStatus => {
        return {
          gameStatus
        };
      }));
      /**设置初始游戏状态 */


      _export("setInitGameStatusAction", setInitGameStatusAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDERQIUQIU_INIT_GAME_STATUS, initGameStatus => {
        return {
          initGameStatus
        };
      }));
      /**设置用户权限 */


      _export("setTipsAction", setTipsAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDERQIUQIU_GAME_TIPS, tips => {
        return {
          tips
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=60fabbcb257daab9b0607520217ddd9940fed193.js.map