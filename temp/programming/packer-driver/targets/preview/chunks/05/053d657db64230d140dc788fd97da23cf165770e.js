System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ViewModel, StoreInject, getStore, _dec, _class, _crd, ccclass, property, HistoryViewModel;

  function _reportPossibleCrUseOfBandarQiuQiu_maxHistory(extras) {
    _reporterNs.report("BandarQiuQiu_maxHistory", "../components//BandarQiuQiu_maxHistory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components//BandarQiuQiu_maxHistory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components//BandarQiuQiu_maxHistory", _context.meta, extras);
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

      _cclegacy._RF.push({}, "e57c2ve3DlBk4VGvE62TQv2", "BandarQiuQiuMaxHistoryViewModel", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'AssetManager', 'Component', 'instantiate', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      HistoryViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class HistoryViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('BandarQiuQiu_maxHistory');
        }

        begin() {}

        connect() {
          this.inject({}, state => {
            return {
              maxHistory: state.history.maxHistory,
              gameStatus: state.game.gameStatus
            };
          });
          return this;
        }

      }) || _class);

      _export("default", HistoryViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=053d657db64230d140dc788fd97da23cf165770e.js.map