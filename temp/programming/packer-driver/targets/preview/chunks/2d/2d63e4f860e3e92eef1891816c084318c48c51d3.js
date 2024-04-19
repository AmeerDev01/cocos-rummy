System.register(["__unresolved_0", "cc", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, _crd, initState, ActionTypes, setOnlineNumber, setMyInfoAction, setMyWinLose, setUsersInfoAction, setCountDownAction, setSecondsAction, setGoldAction, setGameStatusAction, setInitGameStatusAction, setJackpotNumAction, setTrigJackpotNumAction, setTipsAction;

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

      _cclegacy._RF.push({}, "cc5ca7R2ZRLla+on7Katgm9", "game", undefined);

      _export("initState", initState = {
        onlineNum: 0,
        //在线人数
        jackpot: null,
        trigJackpot: 0,
        myInfo: null,
        myWinLose: 0,
        countDown: 0,
        seconds: 0,
        gold: null,
        gameStatus: null,
        initGameStatus: null,
        usersInfo: [],
        tips: null
      });
      /**必须大写，不然redux-act要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["BANDAR_CHANGE_ONLINE_NUMBER"] = "BANDAR_CHANGE_ONLINE_NUMBER";
        ActionTypes["BANDAR_CHANGE_MY_INFO"] = "BANDAR_CHANGE_MY_INFO";
        ActionTypes["BANDAR_MY_WIN_LOSE"] = "BANDAR_MY_WIN_LOSE";
        ActionTypes["BANDAR_COUNT_DOWN"] = "BANDAR_COUNT_DOWN";
        ActionTypes["BANDAR_SECONDS"] = "BANDAR_SECONDS";
        ActionTypes["BANDAR_GOLD"] = "BANDAR_GOLD";
        ActionTypes["BANDER_GAME_STATUS"] = "BANDER_GAME_STATUS";
        ActionTypes["BANDER_INIT_GAME_STATUS"] = "BANDER_INIT_GAME_STATUS";
        ActionTypes["BANDER_GAME_TRIG_JACKPOT"] = "BANDER_GAME_TRIG_JACKPOT";
        ActionTypes["BANDAR_GAME_JACKPOT"] = "BANDAR_GAME_JACKPOT";
        ActionTypes["BANDER_GAME_USERS_INFO"] = "BANDER_GAME_USERS_INFO";
        ActionTypes["BANDER_GAME_TIPS"] = "BANDER_GAME_TIPS";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      /**设置房间在线人数 */
      _export("setOnlineNumber", setOnlineNumber = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_CHANGE_ONLINE_NUMBER, onlineNum => {
        return {
          onlineNum
        };
      }));
      /**初始化用户信息 */


      _export("setMyInfoAction", setMyInfoAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_CHANGE_MY_INFO, myInfo => {
        return {
          myInfo
        };
      }));
      /**用户输赢 */


      _export("setMyWinLose", setMyWinLose = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_MY_WIN_LOSE, myWinLose => {
        return {
          myWinLose
        };
      }));
      /**初始化榜上用户信息 */


      _export("setUsersInfoAction", setUsersInfoAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDER_GAME_USERS_INFO, usersInfo => {
        return {
          usersInfo
        };
      }));
      /**设置倒计时时间 */


      _export("setCountDownAction", setCountDownAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_COUNT_DOWN, countDown => {
        return {
          countDown
        };
      }));
      /**用于初始进入游戏时发牌时间判定 大于3秒才可以发牌 */


      _export("setSecondsAction", setSecondsAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_SECONDS, seconds => {
        return {
          seconds
        };
      }));
      /**设置用户金币 */


      _export("setGoldAction", setGoldAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_GOLD, gold => {
        return {
          gold
        };
      }));
      /**设置游戏状态 */


      _export("setGameStatusAction", setGameStatusAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDER_GAME_STATUS, gameStatus => {
        return {
          gameStatus
        };
      }));
      /**设置游戏状态 */


      _export("setInitGameStatusAction", setInitGameStatusAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDER_INIT_GAME_STATUS, initGameStatus => {
        return {
          initGameStatus
        };
      }));
      /**设置游戏jackpot值 */


      _export("setJackpotNumAction", setJackpotNumAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_GAME_JACKPOT, jackpot => {
        return {
          jackpot
        };
      }));
      /**设置游戏TrigJackpot值 */


      _export("setTrigJackpotNumAction", setTrigJackpotNumAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDER_GAME_TRIG_JACKPOT, trigJackpot => {
        return {
          trigJackpot
        };
      }));
      /**设置用户权限 */


      _export("setTipsAction", setTipsAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDER_GAME_TIPS, tips => {
        return {
          tips
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2d63e4f860e3e92eef1891816c084318c48c51d3.js.map