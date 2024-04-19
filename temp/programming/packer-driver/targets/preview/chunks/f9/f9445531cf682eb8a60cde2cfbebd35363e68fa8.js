System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ViewModel, StoreInject, getStore, _dec, _class, _crd, ccclass, property, CardUserViewModel;

  function _reportPossibleCrUseOfBandar_card_user(extras) {
    _reporterNs.report("Bandar_card_user", "../components/Bandar_card_user", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Bandar_card_user", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Bandar_card_user", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
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
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
      StoreInject = _unresolved_2.StoreInject;
    }, function (_unresolved_3) {
      getStore = _unresolved_3.getStore;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "421aaZahIxOB5mmXDdS+IAF", "BandarCardUserViewModel", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'AssetManager', 'Component', 'instantiate', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      CardUserViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class CardUserViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Bandar_card_user');
        }

        begin() {}

        connect() {
          this.inject({}, state => {
            return {
              blackPoker: state.pokerDetail.blackPoker,
              redPoker: state.pokerDetail.redPoker,
              plumPoker: state.pokerDetail.plumPoker,
              diamondPoker: state.pokerDetail.diamondPoker,
              countDown: state.game.countDown,
              gameStatus: state.game.gameStatus,
              areaWinLose: state.bet.areaWinLose,
              memberBet: state.bet.memberBet,
              allCardRate: state.bet.allCardRate,
              cardType: state.bet.cardType,
              spadeNum: state.pokerDetail.spadeNum,
              heartNum: state.pokerDetail.heartNum,
              sakuraNum: state.pokerDetail.sakuraNum,
              blockNum: state.pokerDetail.blockNum,
              allCardType: state.pokerDetail.allCardType
            };
          });
          return this;
        }

        setProps(props, force) {
          if (force === void 0) {
            force = false;
          }

          return super.setProps(props, force);
        }

      }) || _class);

      _export("default", CardUserViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f9445531cf682eb8a60cde2cfbebd35363e68fa8.js.map