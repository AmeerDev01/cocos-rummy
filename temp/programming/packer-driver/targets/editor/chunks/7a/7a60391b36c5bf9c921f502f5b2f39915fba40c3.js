System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Game, game, Crash_WsManager, LANG, LocalStorageUtils, LOCAL_DATA_KEY, Crash_GameManager, _crd;

  function _reportPossibleCrUseOfCrash_WsManager(extras) {
    _reporterNs.report("Crash_WsManager", "../net/Crash_WsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLANG(extras) {
    _reporterNs.report("LANG", "../const/Crash_BaseConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorageUtils(extras) {
    _reporterNs.report("LocalStorageUtils", "../utils/LocalStorageUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLOCAL_DATA_KEY(extras) {
    _reporterNs.report("LOCAL_DATA_KEY", "../utils/LocalStorageUtils", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Game = _cc.Game;
      game = _cc.game;
    }, function (_unresolved_2) {
      Crash_WsManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      LANG = _unresolved_3.LANG;
    }, function (_unresolved_4) {
      LocalStorageUtils = _unresolved_4.default;
      LOCAL_DATA_KEY = _unresolved_4.LOCAL_DATA_KEY;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b67b5FNpWtFR5LVhiiRH6og", "Crash_GameManager", undefined); // import WsManager from "../../net/WsManager";


      __checkObsolete__(['Game', 'game']);

      // import AudioManager from "./AudioManager";
      // import { sceneMgr } from "./SceneManager";
      _export("default", Crash_GameManager = class Crash_GameManager {
        constructor() {
          this.lang = (_crd && LANG === void 0 ? (_reportPossibleCrUseOfLANG({
            error: Error()
          }), LANG) : LANG).EN;
          this.serverTm = null;
          this.beginTm = null;
          this.isLogout = false;
          this.isLogin = false;
          this.cacert = null;
          console.log("GameManager New!!!!!!!!!!");
          this.lang = (_crd && LocalStorageUtils === void 0 ? (_reportPossibleCrUseOfLocalStorageUtils({
            error: Error()
          }), LocalStorageUtils) : LocalStorageUtils).getItem((_crd && LOCAL_DATA_KEY === void 0 ? (_reportPossibleCrUseOfLOCAL_DATA_KEY({
            error: Error()
          }), LOCAL_DATA_KEY) : LOCAL_DATA_KEY).LANG, Number, (_crd && LANG === void 0 ? (_reportPossibleCrUseOfLANG({
            error: Error()
          }), LANG) : LANG).EN);
        }

        static getInstance() {
          if (!this.instance) {
            this.instance = new Crash_GameManager();
          }

          return this.instance;
        }

        init() {
          game.off(Game.EVENT_SHOW, this.onGameShow, this);
          game.off(Game.EVENT_HIDE, this.onGameHide, this);
          game.on(Game.EVENT_SHOW, this.onGameShow, this);
          game.on(Game.EVENT_HIDE, this.onGameHide, this);
        }

        destroy() {}

        onGameShow() {// AudioManager.getInstance().resumeMusic();
        }

        onGameHide() {// AudioManager.getInstance().pauseMusic();
        }

        setServerTime(serverTime) {
          this.serverTm = serverTime;
          this.beginTm = new Date().getTime();
        }

        getServerTime() {
          if (!this.serverTm) {
            return null;
          }

          let tm = new Date().getTime();
          return this.serverTm + (tm - this.beginTm);
        }

        logout() {
          this.isLogout = true;
          this.isLogin = false; // LocalStorageUtils.setItem(LOCAL_DATA_KEY.TOKEN, "");

          (_crd && Crash_WsManager === void 0 ? (_reportPossibleCrUseOfCrash_WsManager({
            error: Error()
          }), Crash_WsManager) : Crash_WsManager).getInstance().closeConnect();
        }

        setIsLogout(bl) {
          this.isLogout = bl;
        }

        getIsLogout() {
          return this.isLogout;
        }

        setIsLogin(bl) {
          this.isLogin = bl;
        }

        getIsLogin() {
          return this.isLogin;
        }

        setLang(lang) {
          this.lang = lang;
          (_crd && LocalStorageUtils === void 0 ? (_reportPossibleCrUseOfLocalStorageUtils({
            error: Error()
          }), LocalStorageUtils) : LocalStorageUtils).setItem((_crd && LOCAL_DATA_KEY === void 0 ? (_reportPossibleCrUseOfLOCAL_DATA_KEY({
            error: Error()
          }), LOCAL_DATA_KEY) : LOCAL_DATA_KEY).LANG, this.lang);
        }

        getLang() {
          return this.lang;
        }

        update(ft) {}

      });

      Crash_GameManager.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7a60391b36c5bf9c921f502f5b2f39915fba40c3.js.map