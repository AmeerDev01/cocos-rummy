System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, StoreInject, getStore, AutoLauncherType, GameType, changeAutoLauncherType, setAutoLaunchedTimes, setShowAuthLaunch, dataTransfer, DataKeyType, setRollSpeed, _dec, _class, _crd, autoLauncherTypeWithTimes, AutoLauncherViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGodWealth_authLauncher(extras) {
    _reporterNs.report("GodWealth_authLauncher", "../components/GodWealth_authLauncher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/GodWealth_authLauncher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/GodWealth_authLauncher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherType(extras) {
    _reporterNs.report("AutoLauncherType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeAutoLauncherType(extras) {
    _reporterNs.report("changeAutoLauncherType", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetAutoLaunchedTimes(extras) {
    _reporterNs.report("setAutoLaunchedTimes", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetShowAuthLaunch(extras) {
    _reporterNs.report("setShowAuthLaunch", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdataTransfer(extras) {
    _reporterNs.report("dataTransfer", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataKeyType(extras) {
    _reporterNs.report("DataKeyType", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetRollSpeed(extras) {
    _reporterNs.report("setRollSpeed", "../store/actions/roller", _context.meta, extras);
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
      AutoLauncherType = _unresolved_4.AutoLauncherType;
      GameType = _unresolved_4.GameType;
    }, function (_unresolved_5) {
      changeAutoLauncherType = _unresolved_5.changeAutoLauncherType;
      setAutoLaunchedTimes = _unresolved_5.setAutoLaunchedTimes;
      setShowAuthLaunch = _unresolved_5.setShowAuthLaunch;
    }, function (_unresolved_6) {
      dataTransfer = _unresolved_6.default;
      DataKeyType = _unresolved_6.DataKeyType;
    }, function (_unresolved_7) {
      setRollSpeed = _unresolved_7.setRollSpeed;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9bef5N/W3VCSKs1V17MtBGi", "AutoLauncherViewModel", undefined);

      __checkObsolete__(['Node']);

      _export("autoLauncherTypeWithTimes", autoLauncherTypeWithTimes = {
        [(_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
          error: Error()
        }), AutoLauncherType) : AutoLauncherType).NONE]: 0,
        [(_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
          error: Error()
        }), AutoLauncherType) : AutoLauncherType).TIME_10]: 10,
        [(_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
          error: Error()
        }), AutoLauncherType) : AutoLauncherType).TIME_20]: 20,
        [(_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
          error: Error()
        }), AutoLauncherType) : AutoLauncherType).TIME_50]: 50,
        [(_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
          error: Error()
        }), AutoLauncherType) : AutoLauncherType).TIME_100]: 100,
        [(_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
          error: Error()
        }), AutoLauncherType) : AutoLauncherType).TIME_500]: 500,
        // [AutoLauncherType.LAMIT_FAST]: 10000,
        [(_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
          error: Error()
        }), AutoLauncherType) : AutoLauncherType).LIMIT]: 20000
      });

      AutoLauncherViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class AutoLauncherViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('GodWealth_authLauncher');
          this.isWaiting = true;
          this.isRollEnd = true;
          this.autoLaunchedTimes = 0;
          this.autoLauncherType = (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
            error: Error()
          }), AutoLauncherType) : AutoLauncherType).NONE;
          this.lanuchEvent = void 0;
        }

        begin() {
          window.setInterval(() => {
            if (this.isWaiting && this.autoLauncherType !== (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).NONE) {
              if (this.autoLaunchedTimes < autoLauncherTypeWithTimes[this.autoLauncherType]) {
                console.log('自动启动', this.autoLaunchedTimes, autoLauncherTypeWithTimes[this.autoLauncherType]);
                this.lanuchEvent && this.lanuchEvent();

                if ((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                  error: Error()
                }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                  error: Error()
                }), DataKeyType) : DataKeyType).GAME_TYPE) === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).MAIN) {
                  this.dispatch((_crd && setAutoLaunchedTimes === void 0 ? (_reportPossibleCrUseOfsetAutoLaunchedTimes({
                    error: Error()
                  }), setAutoLaunchedTimes) : setAutoLaunchedTimes)(undefined));
                }
              } else {
                this.dispatch((_crd && setShowAuthLaunch === void 0 ? (_reportPossibleCrUseOfsetShowAuthLaunch({
                  error: Error()
                }), setShowAuthLaunch) : setShowAuthLaunch)(false));
                this.dispatch((_crd && changeAutoLauncherType === void 0 ? (_reportPossibleCrUseOfchangeAutoLauncherType({
                  error: Error()
                }), changeAutoLauncherType) : changeAutoLauncherType)((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                  error: Error()
                }), AutoLauncherType) : AutoLauncherType).NONE));
                this.dispatch((_crd && setAutoLaunchedTimes === void 0 ? (_reportPossibleCrUseOfsetAutoLaunchedTimes({
                  error: Error()
                }), setAutoLaunchedTimes) : setAutoLaunchedTimes)(0));
                this.dispatch((_crd && setRollSpeed === void 0 ? (_reportPossibleCrUseOfsetRollSpeed({
                  error: Error()
                }), setRollSpeed) : setRollSpeed)(1));
              }
            }
          }, 500);
        }
        /**设置自动运行器要自动运行的函数 */


        setLaunchEvent(lanuchEvent) {
          this.lanuchEvent = lanuchEvent;
        }

        connect() {
          this.inject({}, state => {
            this.isWaiting = state.game.isWaiting;
            this.autoLauncherType = state.game.autoLauncherType;
            this.autoLaunchedTimes = state.game.autoLaunchedTimes;
            return {
              isShowAutoLaunch: state.game.isShowAutoLaunch,
              isWaiting: state.game.isWaiting,
              autoLauncherType: state.game.autoLauncherType
            };
          });
          return this;
        }

      }) || _class);

      _export("default", AutoLauncherViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=74c3d446b973d3be874ae62f1485247c7d4ca8e4.js.map