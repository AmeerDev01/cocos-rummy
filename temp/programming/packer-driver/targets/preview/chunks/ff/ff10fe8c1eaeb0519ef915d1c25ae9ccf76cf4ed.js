System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ViewModel, StoreInject, getStore, CardType, _dec, _class, _crd, MineViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Qiuqiu_Mine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Qiuqiu_Mine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQiuqiu_Mine(extras) {
    _reporterNs.report("Qiuqiu_Mine", "../components/Qiuqiu_Mine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardType(extras) {
    _reporterNs.report("CardType", "../type", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
      StoreInject = _unresolved_2.StoreInject;
    }, function (_unresolved_3) {
      getStore = _unresolved_3.getStore;
    }, function (_unresolved_4) {
      CardType = _unresolved_4.CardType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9073bSADcJHfIqKmT38zcsU", "MineViewModel", undefined);

      MineViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class MineViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Qiuqiu_Mine');
          this.seatIndex = 0;
        }

        begin() {}

        connect() {
          this.inject({}, state => {
            var player = state.deskData.playerMap[this.seatIndex];
            return {
              deskStatus: state.deskData.deskStatus,
              uid: player ? player.uid : '',
              nickName: player ? player.nickName : '',
              gold: player ? player.glodAmount : 0,
              icon: player ? player.head : -1,
              isDealer: player ? player.gameData.isMaster : false,
              isReady: player ? player.gameData.isReady : false,
              winloss: player ? player.gameData.winloss : 0,
              opType: player ? player.gameData.opType : null,
              operationCountdown: state.deskData.operationCountdown,
              currActiveSeatIndex: state.deskData.currActiveSeatIndex,
              seatIndex: this.seatIndex,
              dealCardCount: player ? player.gameData.dealCardCount : 0,
              cards: player ? player.gameData.cards : [],
              balanceInfo: state.deskData.balanceInfo,
              cardType: player ? player.gameData.cardType : (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
                error: Error()
              }), CardType) : CardType).DISERSE
            };
          });
          return this;
        }

      }) || _class);

      _export("default", MineViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ff10fe8c1eaeb0519ef915d1c25ae9ccf76cf4ed.js.map