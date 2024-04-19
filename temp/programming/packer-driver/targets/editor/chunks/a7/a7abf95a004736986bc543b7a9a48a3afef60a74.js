System.register(["__unresolved_0", "cc", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, _crd, ToastType, ToastPosition, initState, ActionTypes, addToastAction, setLoadingAction, setSubGameInfoAction, setSubGameRunState, changeWebView, loadRecommendData, setSocketConnectStatus, setAppDownLoadGuide, resetDataBaseBoard;

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallGameGateType(extras) {
    _reporterNs.report("HallGameGateType", "../../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubGameRunState(extras) {
    _reporterNs.report("SubGameRunState", "../../config", _context.meta, extras);
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

      _cclegacy._RF.push({}, "9e49eaZSKBJzb7NvdNVoAhf", "baseBoard", undefined);

      _export("ToastType", ToastType = /*#__PURE__*/function (ToastType) {
        ToastType[ToastType["NORMAL"] = 0] = "NORMAL";
        ToastType[ToastType["WARN"] = 1] = "WARN";
        ToastType[ToastType["ERROR"] = 2] = "ERROR";
        ToastType[ToastType["SUCCESS"] = 3] = "SUCCESS";
        return ToastType;
      }({}));

      _export("ToastPosition", ToastPosition = /*#__PURE__*/function (ToastPosition) {
        ToastPosition["TOP"] = "top";
        ToastPosition["MIDDLE"] = "middle";
        ToastPosition["BOTTOM"] = "bottom";
        return ToastPosition;
      }({}));

      _export("initState", initState = {
        toastData: {
          content: "",
          type: ToastType.NORMAL
        },
        loadPayload: {
          isShow: false,
          isAllowCloseLoading: false
        },
        subGameInfo: null,
        isShowWebView: true,
        isLoadRecommendData: '',
        isConnect: true,
        retryConnectTimes: 1,
        appDownLoadGuide: true
      });
      /**必须大写，不然redux-act这狗日的要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["ADD_TOAST"] = "ADD_TOAST";
        ActionTypes["SET_LOADING"] = "SET_LOADING";
        ActionTypes["SET_ACTIVE_SUBGAME"] = "SET_ACTIVE_SUBGAME";
        ActionTypes["SET_SUBGAME_STATE"] = "SET_SUBGAME_STATE";
        ActionTypes["RESET_DATA_BOARD"] = "RESET_DATA_BOARD";
        ActionTypes["CHANGE_WEB_VIEW"] = "CHANGE_WEB_VIEW";
        ActionTypes["LOAD_RECOMMEND_DATA"] = "LOAD_RECOMMEND_DATA";
        ActionTypes["SOCKET_CONNECT"] = "SOCKET_CONNECT";
        ActionTypes["APP_DOWNLOAD_GUIDE"] = "APP_DOWNLOAD_GUIDE";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      _export("addToastAction", addToastAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.ADD_TOAST, toastData => {
        console.log(toastData.content);
        return {
          toastData: { ...toastData,
            type: toastData.type || ToastType.NORMAL,
            position: toastData.position || ToastPosition.BOTTOM
          }
        };
      }));

      _export("setLoadingAction", setLoadingAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.SET_LOADING, isLoadPayload => {
        return {
          isLoadPayload
        };
      }));

      _export("setSubGameInfoAction", setSubGameInfoAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.SET_ACTIVE_SUBGAME, subGameInfo => {
        return {
          subGameInfo
        };
      }));

      _export("setSubGameRunState", setSubGameRunState = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.SET_SUBGAME_STATE, subGameRunState => {
        return {
          subGameRunState
        };
      }));

      _export("changeWebView", changeWebView = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.CHANGE_WEB_VIEW, value => {
        return {
          value
        };
      }));

      _export("loadRecommendData", loadRecommendData = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.LOAD_RECOMMEND_DATA, () => {
        return {};
      }));

      _export("setSocketConnectStatus", setSocketConnectStatus = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.SOCKET_CONNECT, connectData => {
        return {
          connectData
        };
      }));

      _export("setAppDownLoadGuide", setAppDownLoadGuide = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.APP_DOWNLOAD_GUIDE, appDownLoadGuide => {
        return {
          appDownLoadGuide
        };
      }));

      _export("resetDataBaseBoard", resetDataBaseBoard = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.RESET_DATA_BOARD, () => {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a7abf95a004736986bc543b7a9a48a3afef60a74.js.map