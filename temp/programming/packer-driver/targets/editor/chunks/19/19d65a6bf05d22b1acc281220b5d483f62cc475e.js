System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, ApiUrl;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "53800++849JDpZ0zkHdbVfK", "apiUrl", undefined);

      _export("ApiUrl", ApiUrl = /*#__PURE__*/function (ApiUrl) {
        ApiUrl["NOTICE"] = "/global/api/appNotice";
        ApiUrl["LOGIN_PWD"] = "/sso/api/memberLogin";
        ApiUrl["LOGIN_OUT"] = "/hall/api/member/loginOut";
        ApiUrl["SEND_SMS"] = "/sso/api/sendLoginSms";
        ApiUrl["RESET_PASSWORD"] = "/sso/api/resetLoginPassword";
        ApiUrl["MEMBER_UPGRADES"] = "/sso/api/memberUpgrades";
        ApiUrl["LOGIN_FAST"] = "/sso/api/memberLoginF";
        ApiUrl["REG"] = "/sso/api/memberRegister";
        ApiUrl["IS_SET_PWD"] = "/hall/api/member/querySafePassword";
        ApiUrl["VERIFY_BANK_PWD"] = "/hall/api/member/authAccessSafe";
        ApiUrl["SET_BANK_PWD"] = "/hall/api/member/setSafePassword";
        ApiUrl["TRASFER_BANK_GLOD"] = "/hall/api/member/accessSafe";
        ApiUrl["WITHDRAW_BANK_CHANNEL_LIST"] = "/hall/api/transfer/list";
        ApiUrl["WITHDRAW_BIND_CARD"] = "/hall/api/transfer/bindBank";
        ApiUrl["WITHDRAW_ORDER"] = "/hall/api/transfer/transferOrder";
        ApiUrl["USER_ORDER_LIST"] = "/hall/api/order/list";
        ApiUrl["EMAIL_LIST"] = "/hall/api/member/emailList";
        ApiUrl["CHECK_EMAIL"] = "/hall/api/member/emailCheck";
        ApiUrl["DELETE_EMAIL"] = "/hall/api/member/emailDel";
        ApiUrl["GET_MEMBER_SIGN_IN_LIST"] = "/hall/api/member/getMemberSignInList";
        ApiUrl["SIGN_IN"] = "/hall/api/member/signIn";
        ApiUrl["ACTIVITY_LIST"] = "/hall/api/activity/list";
        ApiUrl["RECOMMEND_DATA"] = "/hall/api/member/recommendData";
        ApiUrl["RECOMMENDDATATOTODAY"] = "/hall/api/member/recommendDataToToday";
        ApiUrl["RECOMMEND_MEMBER_INFO"] = "/hall/api/member/recommendMemberInfo";
        ApiUrl["MYRECOMMENDINFO"] = "/hall/api/member/myRecommendInfo";
        ApiUrl["RECOMMEND_BIND"] = "/hall/api/member/recommendBind";
        ApiUrl["CODE_CONVER"] = "/hall/api/member/redeemGiftPackage";
        ApiUrl["BENEFIT"] = "/hall/api/member/benefit";
        ApiUrl["DRAW_WATER"] = "/hall/api/member/withdrawCommissionOrWater";
        ApiUrl["POP_UPS"] = "/hall/api/game/popUps";
        ApiUrl["INVITE"] = "/hall/api/invite";
        ApiUrl["GAME_SWIPE"] = "/hall/api/swipe/list";
        ApiUrl["CHANNEL_PACKAGE"] = "/hall/channelPackage/thirdEvent";
        ApiUrl["FCM_TOKEN_BIND"] = "/hall/api/fcm/bind";
        ApiUrl["GET_BIND_PHONE_GOLD"] = "/hall/api/invite/getBindPoneGold";
        return ApiUrl;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=19d65a6bf05d22b1acc281220b5d483f62cc475e.js.map