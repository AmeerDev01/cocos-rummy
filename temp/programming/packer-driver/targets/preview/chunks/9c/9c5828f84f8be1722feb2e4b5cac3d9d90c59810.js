System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ViewModel, StoreInject, getStore, _dec, _class, _crd, ccclass, property, CardBankerViewModel;

  function _reportPossibleCrUseOfBandar_card_banker(extras) {
    _reporterNs.report("Bandar_card_banker", "../components/Bandar_card_banker", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Bandar_card_banker", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Bandar_card_banker", _context.meta, extras);
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

      _cclegacy._RF.push({}, "9e5fak0AfBDTKETRuyxOaCf", "BandarCardBankerViewModel", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'AssetManager', 'Component', 'instantiate', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      CardBankerViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class CardBankerViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Bandar_card_banker');
        }

        begin() {}

        connect() {
          this.inject({}, state => {
            return {
              bankerPoker: state.pokerDetail.bankerPoker,
              countDown: state.game.countDown,
              gameStatus: state.game.gameStatus,
              cardType: state.bet.cardType,
              farmhouse: state.pokerDetail.farmhouse,
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

      _export("default", CardBankerViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9c5828f84f8be1722feb2e4b5cac3d9d90c59810.js.map