System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, UserInfo, Crash_NetMsgDispatcher, ProtocolCode, _dec, _class, _class2, _crd, ccclass, property, Crash_DataManager;

  function _reportPossibleCrUseOfUserInfo(extras) {
    _reporterNs.report("UserInfo", "../entity/Crash_Userinfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_NetMsgDispatcher(extras) {
    _reporterNs.report("Crash_NetMsgDispatcher", "../net/Crash_NetMsgDispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocolCode(extras) {
    _reporterNs.report("ProtocolCode", "../net/protocol/ProtocolDef", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      UserInfo = _unresolved_2.default;
    }, function (_unresolved_3) {
      Crash_NetMsgDispatcher = _unresolved_3.default;
    }, function (_unresolved_4) {
      ProtocolCode = _unresolved_4.ProtocolCode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "98848qwsphHV6UloMfTcZyr", "Crash_DataManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Crash_DataManager", Crash_DataManager = (_dec = ccclass('DataManager'), _dec(_class = (_class2 = class Crash_DataManager {
        static getInstance() {
          if (this.instance == null) {
            this.instance = new Crash_DataManager();
          }

          return this.instance;
        }

        constructor() {
          this.userInfo = null;
          this.numberSpriteFrame = null;
          this.crashStageVo = null;
          this.lotteryData = null;
          this.headSpriteFrame = void 0;
          this.BettingCondition = false;
          this.currentParameters = 0;
          console.log("DataManager New!!!!!!!!!!");
          this.init();
        }

        init() {
          this.userInfo = new (_crd && UserInfo === void 0 ? (_reportPossibleCrUseOfUserInfo({
            error: Error()
          }), UserInfo) : UserInfo)();
          this.regNetCallBack();
        }

        getCurrentParameters() {
          return this.currentParameters;
        }

        setCurrentParameters(val) {
          this.currentParameters = val;
        }

        setBettingCondition(bl) {
          this.BettingCondition = bl;
        }

        getBettingCondition(bl) {
          this.BettingCondition = bl;
        }

        getUserInfo() {
          return this.userInfo;
        }

        getCrashStageVo() {
          return this.crashStageVo;
        }

        setHeadSpriteFrame(data) {
          this.headSpriteFrame = data;
        }

        getHeadSpriteFrame() {
          return this.headSpriteFrame;
        }

        setCrashStageVo(data) {
          this.crashStageVo = data;
        }

        getLotteryData() {
          return this.lotteryData;
        }

        setNumberSpriteFrame(data) {
          this.numberSpriteFrame = data;
        }

        getNumberSpriteFrame() {
          return this.numberSpriteFrame;
        }

        regNetCallBack() {
          (_crd && Crash_NetMsgDispatcher === void 0 ? (_reportPossibleCrUseOfCrash_NetMsgDispatcher({
            error: Error()
          }), Crash_NetMsgDispatcher) : Crash_NetMsgDispatcher).getInstance().regCallBack((_crd && ProtocolCode === void 0 ? (_reportPossibleCrUseOfProtocolCode({
            error: Error()
          }), ProtocolCode) : ProtocolCode).RES_ROOM_TOTAL_BETS, this, this.bettingSituation);
          (_crd && Crash_NetMsgDispatcher === void 0 ? (_reportPossibleCrUseOfCrash_NetMsgDispatcher({
            error: Error()
          }), Crash_NetMsgDispatcher) : Crash_NetMsgDispatcher).getInstance().regCallBack((_crd && ProtocolCode === void 0 ? (_reportPossibleCrUseOfProtocolCode({
            error: Error()
          }), ProtocolCode) : ProtocolCode).RES_TIME_SYNCHRONIZATION, this, this.timeSynchronization);
          (_crd && Crash_NetMsgDispatcher === void 0 ? (_reportPossibleCrUseOfCrash_NetMsgDispatcher({
            error: Error()
          }), Crash_NetMsgDispatcher) : Crash_NetMsgDispatcher).getInstance().regCallBack((_crd && ProtocolCode === void 0 ? (_reportPossibleCrUseOfProtocolCode({
            error: Error()
          }), ProtocolCode) : ProtocolCode).RES_LOTTERY_RETURN, this, this.lottery);
          (_crd && Crash_NetMsgDispatcher === void 0 ? (_reportPossibleCrUseOfCrash_NetMsgDispatcher({
            error: Error()
          }), Crash_NetMsgDispatcher) : Crash_NetMsgDispatcher).getInstance().regCallBack((_crd && ProtocolCode === void 0 ? (_reportPossibleCrUseOfProtocolCode({
            error: Error()
          }), ProtocolCode) : ProtocolCode).RES_SETTLEMENT_RETURN, this, this.settlement);
          (_crd && Crash_NetMsgDispatcher === void 0 ? (_reportPossibleCrUseOfCrash_NetMsgDispatcher({
            error: Error()
          }), Crash_NetMsgDispatcher) : Crash_NetMsgDispatcher).getInstance().regCallBack((_crd && ProtocolCode === void 0 ? (_reportPossibleCrUseOfProtocolCode({
            error: Error()
          }), ProtocolCode) : ProtocolCode).REFRESH_COINS, this, this.refreshCoins);
        }

        bettingSituation(bl, data, args) {
          console.log(data);
          this.getUserInfo().setRoomInfoVos(data.data);
        }

        timeSynchronization(bl, data, args) {
          this.crashStageVo = data.crashStageVo;
          this.getUserInfo().setOddsList(data.crashStageVo.list);
        }

        lottery(bl, data, args) {
          this.lotteryData = data.data;
        }

        settlement(bl, data, args) {
          if (data.data !== undefined) {
            console.log(data.data[0]);
            this.getUserInfo().setUserInfo(data.data[0]);
          }
        }

        refreshCoins(bl, data, args) {
          this.getUserInfo().setGold(data.data);
        }

        remNetCallBacks() {
          (_crd && Crash_NetMsgDispatcher === void 0 ? (_reportPossibleCrUseOfCrash_NetMsgDispatcher({
            error: Error()
          }), Crash_NetMsgDispatcher) : Crash_NetMsgDispatcher).getInstance().removeAllProtocolByObj(this);
        }

        destroy() {
          if (this.userInfo) {
            this.userInfo = null;
          }

          this.remNetCallBacks();
        }

      }, _class2.instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9bf6d89f67bc75c8a82b7fc8c90591623b842343.js.map