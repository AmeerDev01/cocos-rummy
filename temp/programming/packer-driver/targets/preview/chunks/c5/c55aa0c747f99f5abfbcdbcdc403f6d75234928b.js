System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ViewModel, StoreInject, getStore, dealAction, _dec, _class, _crd, SendCardViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Qiuqiu_SendCard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Qiuqiu_SendCard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQiuqiu_SendCard(extras) {
    _reporterNs.report("Qiuqiu_SendCard", "../components/Qiuqiu_SendCard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdealAction(extras) {
    _reporterNs.report("dealAction", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
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
      dealAction = _unresolved_4.dealAction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e483dUdHpRJ26oLStnEmnoM", "SendCardViewModel", undefined);

      SendCardViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class SendCardViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Qiuqiu_SendCard');
        }

        begin() {
          this.setEvent({
            flyCardOverHanler: (seatIndex, dealIndex) => {
              this.dispatch((_crd && dealAction === void 0 ? (_reportPossibleCrUseOfdealAction({
                error: Error()
              }), dealAction) : dealAction)(seatIndex, dealIndex));
            }
          });
        }

        connect() {
          this.inject({}, state => {
            return {
              deskStatus: state.deskData.deskStatus,
              playerMap: state.deskData.playerMap,
              currActiveSeatIndex: state.deskData.currActiveSeatIndex,
              dealCount: state.deskData.dealCount
            };
          });
          return this;
        }

      }) || _class);

      _export("default", SendCardViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c55aa0c747f99f5abfbcdbcdc403f6d75234928b.js.map