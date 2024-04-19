System.register(["__unresolved_0", "cc", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, _crd, initState, ActionTypes, initRoomList, quitGame, changeBattery;

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomInfo(extras) {
    _reporterNs.report("RoomInfo", "../../type", _context.meta, extras);
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

      _cclegacy._RF.push({}, "1efd4ZYVB1Ea5BiLrmjYWCj", "game", undefined);

      _export("initState", initState = {
        roomInfos: [],
        myBatteryId: 1
      });
      /**必须大写，不然redux-act这货要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["FISH_QUIT_GAME"] = "FISH_QUIT_GAME";
        ActionTypes["FISH_INIT_ROOM_LIST"] = "FISH_INIT_ROOM_LIST";
        ActionTypes["FISH_CHANGE_BATTERY"] = "FISH_CHANGE_BATTERY";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      /**初始化房间列表 */
      _export("initRoomList", initRoomList = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.FISH_INIT_ROOM_LIST, roomInfos => {
        return {
          roomInfos
        };
      }));

      _export("quitGame", quitGame = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.FISH_QUIT_GAME, () => {
        return {
          initState
        };
      }));

      _export("changeBattery", changeBattery = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.FISH_CHANGE_BATTERY, batteryId => {
        return {
          batteryId
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3f13499de0cb90e1962c94b5500f9011ada74dbc.js.map