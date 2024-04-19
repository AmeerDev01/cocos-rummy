System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, StoreInject, getStore, changeAutoLauncherType, changeGame, changeProfit, changeViewGame, setAutoLaunchedTimes, AutoLauncherType, GameType, _dec, _class, _crd, HeaderViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphoenix_headerComp(extras) {
    _reporterNs.report("phoenix_headerComp", "../components/phoenix_header", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/phoenix_header", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/phoenix_header", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeAutoLauncherType(extras) {
    _reporterNs.report("changeAutoLauncherType", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeGame(extras) {
    _reporterNs.report("changeGame", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeProfit(extras) {
    _reporterNs.report("changeProfit", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeViewGame(extras) {
    _reporterNs.report("changeViewGame", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetAutoLaunchedTimes(extras) {
    _reporterNs.report("setAutoLaunchedTimes", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherType(extras) {
    _reporterNs.report("AutoLauncherType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
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
    }, function (_unresolved_4) {
      changeAutoLauncherType = _unresolved_4.changeAutoLauncherType;
      changeGame = _unresolved_4.changeGame;
      changeProfit = _unresolved_4.changeProfit;
      changeViewGame = _unresolved_4.changeViewGame;
      setAutoLaunchedTimes = _unresolved_4.setAutoLaunchedTimes;
    }, function (_unresolved_5) {
      AutoLauncherType = _unresolved_5.AutoLauncherType;
      GameType = _unresolved_5.GameType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7c2e8nIvUdIyY9Yd3ma44+q", "HeaderViewModel", undefined);

      __checkObsolete__(['Node']);

      HeaderViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class HeaderViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('phoenix_headerComp');
        }

        begin() {
          this.setEvent({
            clearCacheData: () => {
              this.dispatch((_crd && changeAutoLauncherType === void 0 ? (_reportPossibleCrUseOfchangeAutoLauncherType({
                error: Error()
              }), changeAutoLauncherType) : changeAutoLauncherType)((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                error: Error()
              }), AutoLauncherType) : AutoLauncherType).NONE));
              this.dispatch((_crd && setAutoLaunchedTimes === void 0 ? (_reportPossibleCrUseOfsetAutoLaunchedTimes({
                error: Error()
              }), setAutoLaunchedTimes) : setAutoLaunchedTimes)(undefined));
              this.dispatch((_crd && changeProfit === void 0 ? (_reportPossibleCrUseOfchangeProfit({
                error: Error()
              }), changeProfit) : changeProfit)(0));
              this.dispatch((_crd && changeGame === void 0 ? (_reportPossibleCrUseOfchangeGame({
                error: Error()
              }), changeGame) : changeGame)((_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).NONE));
              this.dispatch((_crd && changeViewGame === void 0 ? (_reportPossibleCrUseOfchangeViewGame({
                error: Error()
              }), changeViewGame) : changeViewGame)((_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).NONE));
            }
          });
        }

        connect() {
          // console.log('inject', dataTransfer(DataKeyType.BALANCE))
          this.inject({}, state => {
            // console.log('state.game.balance', state.game.balance)
            return {
              balance: state.game.balance,
              isRollEnd: state.roller.roundAllEnd
            };
          });
          return this;
        }

      }) || _class);

      _export("default", HeaderViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a6e302c6e7fa36568ebce8d537aebcaa87114ee9.js.map