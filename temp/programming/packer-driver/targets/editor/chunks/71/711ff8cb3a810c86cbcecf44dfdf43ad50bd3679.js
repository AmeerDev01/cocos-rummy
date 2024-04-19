System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ViewModel, StoreInject, getStore, _dec, _class, _crd, OperationViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Qiuqiu_Operation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Qiuqiu_Operation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQiuqiu_Operation(extras) {
    _reporterNs.report("Qiuqiu_Operation", "../components/Qiuqiu_Operation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d9630i4hDFAFYsMAVLzYBw8", "OperationViewModel", undefined);

      OperationViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class OperationViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Qiuqiu_Operation');
          this.seatIndex = 0;
        }

        begin() {}

        connect() {
          this.inject({}, state => {
            const player = state.deskData.playerMap[this.seatIndex];
            return {
              deskStatus: state.deskData.deskStatus,
              playerMap: state.deskData.playerMap,
              betAmount: state.deskData.betAmount,
              maxAmount: state.deskData.maxAmount,
              opType: player ? player.gameData.opType : null,
              callAmount: player ? player.gameData.callAmount : 0,
              lastActiveSeatIndex: state.deskData.lastActiveSeatIndex,
              currActiveSeatIndex: state.deskData.currActiveSeatIndex,
              seatIndex: this.seatIndex
            };
          });
          return this;
        }

      }) || _class);

      _export("default", OperationViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=711ff8cb3a810c86cbcecf44dfdf43ad50bd3679.js.map