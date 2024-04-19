System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ViewModel, StoreInject, getStore, _dec, _class, _crd, ccclass, property, WinViewModel;

  function _reportPossibleCrUseOfDragonTiger_win(extras) {
    _reporterNs.report("DragonTiger_win", "../components/DragonTiger_win", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/DragonTiger_win", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/DragonTiger_win", _context.meta, extras);
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

      _cclegacy._RF.push({}, "81b7foSr+9K1bN/UR558XrD", "DragonTigerWinViewModel", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'AssetManager', 'Component', 'instantiate', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      WinViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class WinViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('DragonTiger_win');
        }

        begin() {}

        connect() {
          var storeState = this.store.getState();
          this.inject({
            winGold: storeState.userInfo.winGold,
            roomWinInfo: storeState.history.roomWinInfo
          }, state => {
            // console.log("roomWinInfo win",state.history.roomWinInfo)
            return {
              winGold: state.userInfo.winGold,
              roomWinInfo: state.history.roomWinInfo
            };
          });
          return this;
        }

      }) || _class);

      _export("default", WinViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0fe3d0472655844e9fee4e672dfd1d0519d49178.js.map