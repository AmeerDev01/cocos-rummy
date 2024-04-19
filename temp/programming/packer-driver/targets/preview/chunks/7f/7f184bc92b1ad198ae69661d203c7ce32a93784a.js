System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, StoreInject, getStore, _dec, _class, _crd, BetAreaViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBandarQiuQiu_betArea(extras) {
    _reporterNs.report("BandarQiuQiu_betArea", "../components/BandarQiuQiu_betArea", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/BandarQiuQiu_betArea", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/BandarQiuQiu_betArea", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
      StoreInject = _unresolved_2.StoreInject;
    }, function (_unresolved_3) {
      getStore = _unresolved_3.getStore;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c8e62Ufb1tJO4qHqDFJegjM", "BandarQiuQiuBetAreaViewModel", undefined);

      __checkObsolete__(['Node']);

      BetAreaViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class BetAreaViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('BandarQiuQiu_betArea');
        }

        begin() {}

        connect() {
          this.inject({}, state => {
            return {
              gameStatus: state.game.gameStatus,
              gold: state.game.gold,

              /**选择的筹码 */
              selectChip: state.bet.selectChip,
              myInfo: state.game.myInfo,
              newBetData: state.bet.newBetData,
              winArea: state.pokerDetail.winArea,
              goldData: state.bet.goldData,
              winAreaRate: state.bet.winAreaRate,
              allWinUsers: state.bet.allWinUsers,
              lastBet: state.bet.lastBet,
              cancelBetData: state.bet.cancelBetData,
              memberBet: state.bet.memberBet,
              tips: state.game.tips
            };
          });
          return this;
        }

      }) || _class);

      _export("default", BetAreaViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7f184bc92b1ad198ae69661d203c7ce32a93784a.js.map