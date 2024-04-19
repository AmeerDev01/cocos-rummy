System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, loopFiles, _crd, PrefabPathDefine;

  function _reportPossibleCrUseOfloopFiles(extras) {
    _reporterNs.report("loopFiles", "../../base/SourceManage", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      loopFiles = _unresolved_2.loopFiles;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9f6e8BGCJNHjZ+FN6WzjP7p", "prefabDefine", undefined);

      __checkObsolete__(['Prefab']);

      _export("PrefabPathDefine", PrefabPathDefine = /*#__PURE__*/function (PrefabPathDefine) {
        PrefabPathDefine["LOADER_PANEL"] = "prefabs/loaderPanel";
        PrefabPathDefine["_LOGIN_PAGE"] = "login/prefabs/loginPage";
        PrefabPathDefine["_LOGIN_DIALOG"] = "login/prefabs/loginDialog";
        PrefabPathDefine["_LOGIN_PAGE_V2"] = "login/prefabs/V2/loginPage";
        PrefabPathDefine["_LOGIN_DIALOG_LOGIN_V2"] = "login/prefabs/V2/loginAkunLogin";
        PrefabPathDefine["_LOGIN_DIALOG_REG_V2"] = "login/prefabs/V2/loginRegister";
        PrefabPathDefine["_PROHIBIT_PANEL"] = "login/prefabs/V2/prohibitLogin";
        PrefabPathDefine["_LOGIN_SET_PASSWORD"] = "login/prefabs/loginSetPassword";
        PrefabPathDefine["BASE_BOARD"] = "prefabs/baseBoard";
        PrefabPathDefine["MAIN_PANEL"] = "prefabs/mainPanel";
        PrefabPathDefine["SUB_GAME_GATE"] = "prefabs/subGameGate";
        PrefabPathDefine["PC_MAIN_PANEL"] = "personalCenter/prefabs/pcMainPanel";
        PrefabPathDefine["PC_BACK_WATER"] = "personalCenter/prefabs/node_layout_water";
        PrefabPathDefine["_PC_CHANGE_NICKNAME"] = "personalCenter/prefabs/node_changeName_bg";
        PrefabPathDefine["_SHARE_HELP"] = "personalCenter/prefabs/node_share_help";
        PrefabPathDefine["_SHARE_SURE"] = "personalCenter/prefabs/node_share_sure";
        PrefabPathDefine["SHARE_Info"] = "personalCenter/prefabs/node_share_info";
        PrefabPathDefine["SHARE_MEMBER_LIST"] = "personalCenter/prefabs/node_share_member";
        PrefabPathDefine["_SHARE_SHARE_HELP"] = "personalCenter/prefabs/node_share_help";
        PrefabPathDefine["_HELL_ACTIVITY"] = "activity/prefabs/node_aktivitas";
        PrefabPathDefine["HELL_ACTIVITY_TURNTABLEPANL"] = "activity/prefabs/node_turntable";
        PrefabPathDefine["HELL_ACTIVITY_TURNTABLE_INTRO"] = "activity/prefabs/node_turntable_intro";
        PrefabPathDefine["HELL_ACTIVITY_TURNTABLE"] = "activity/prefabs/node_turntable2";
        PrefabPathDefine["HELL_ACTIVITY_TURNTABLEWIN"] = "activity/prefabs/note_turntable_win";
        PrefabPathDefine["_HELL_AWARD"] = "award/prefabs/node_award_level";
        PrefabPathDefine["_HELL_BANK"] = "bank/prefabs/node_bank";
        PrefabPathDefine["_HELL_MAIL"] = "mail/prefabs/node_mail";
        PrefabPathDefine["HELL_SHOP"] = "shop/prefabs/node_shop";
        PrefabPathDefine["HELL_WITHDRAWAL"] = "withdrawal/prefabs/node_withdrawal";
        PrefabPathDefine["_HELL_WITHDRAWAL_BANK_LIST"] = "withdrawal/prefabs/node_withdrawal_metode";
        PrefabPathDefine["_HELL_WITHDRAW_TIPS"] = "withdrawal/prefabs/node_withdrawal_tips";
        PrefabPathDefine["_HELL_WITHDRAW_BANK_BIND"] = "withdrawal/prefabs/node_withdrawal_nformasi";
        PrefabPathDefine["_HELL_WITHDRAW_WALLET_BIND"] = "withdrawal/prefabs/node_withdrawal_rekening";
        PrefabPathDefine["_HELL_WITHDRAW_BILL"] = "withdrawal/prefabs/node_withdrawal_catatan";
        PrefabPathDefine["_HELL_BIND_PHONE"] = "personalCenter/prefabs/node_prefabs_bindPhone";
        PrefabPathDefine["_HELL_SERVICE_WEBVIEW"] = "service/prefabs/prefabs_service";
        PrefabPathDefine["_HELL_UPGRADE"] = "personalCenter/prefabs/node_account_upgrade";
        PrefabPathDefine["_HELL_CHANGE_PASSWORD"] = "personalCenter/prefabs/node_account_changePassword";
        PrefabPathDefine["_HELL_RE_LIEF"] = "welcome/prefabs/benefit";
        PrefabPathDefine["_HELL_WELCOME"] = "welcome/prefabs/welcome";
        PrefabPathDefine["HELL_GIFT_BAG"] = "shop/prefabs/node_tas";
        PrefabPathDefine["HELL_CHOOSE_BANK"] = "shop/prefabs/node_chooseBank";
        PrefabPathDefine["HELL_WATER_HELP"] = "personalCenter/prefabs/node_water_help";
        PrefabPathDefine["_HELL_APP_DOWNLOAD_PANEL"] = "downloadGuide/prefabs/node_download_guide";
        PrefabPathDefine["_HELL_APP_DOWNLOAD_PANEL_IOS"] = "downloadGuide/prefabs/node_download_guide_ios";
        PrefabPathDefine["_HELL_SIGN_IN"] = "signIn/prefabs/hallSignIn";
        PrefabPathDefine["_HELL_VIP_UP"] = "vip/prefabs/vipUp";
        PrefabPathDefine["_HELL_VIP_MAIN"] = "vip/prefabs/node_vip_main";
        PrefabPathDefine["_WINNING_BOX"] = "prefabs/winningCar";
        PrefabPathDefine["_GUIDE_PANEL"] = "prefabs/guidePanel";
        return PrefabPathDefine;
      }({}));

      _export("default", bundlePkgName => (_crd && loopFiles === void 0 ? (_reportPossibleCrUseOfloopFiles({
        error: Error()
      }), loopFiles) : loopFiles)(bundlePkgName, Prefab, PrefabPathDefine));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e012ad31db1bdbe8affb530470b503d424109323.js.map