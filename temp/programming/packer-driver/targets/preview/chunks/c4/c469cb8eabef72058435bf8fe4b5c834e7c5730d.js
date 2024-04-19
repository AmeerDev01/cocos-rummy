System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, StoreInject, getStore, EffectType, changeAutoLauncherType, setAutoLaunchedTimes, setShowAuthLaunch, updateGameModeType, AutoLauncherType, GameModeType, footerViewModel, thor_Audio, setRollSpeed, SoundPathDefine, _dec, _class, _crd, SgBoxViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThor_SgBox(extras) {
    _reporterNs.report("Thor_SgBox", "../components/Thor_SgBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Thor_SgBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Thor_SgBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
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

  function _reportPossibleCrUseOfupdateGameModeType(extras) {
    _reporterNs.report("updateGameModeType", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherType(extras) {
    _reporterNs.report("AutoLauncherType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameModeType(extras) {
    _reporterNs.report("GameModeType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOffooterViewModel(extras) {
    _reporterNs.report("footerViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfthor_Audio(extras) {
    _reporterNs.report("thor_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetRollSpeed(extras) {
    _reporterNs.report("setRollSpeed", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
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
      EffectType = _unresolved_4.EffectType;
    }, function (_unresolved_5) {
      changeAutoLauncherType = _unresolved_5.changeAutoLauncherType;
      setAutoLaunchedTimes = _unresolved_5.setAutoLaunchedTimes;
      setShowAuthLaunch = _unresolved_5.setShowAuthLaunch;
      updateGameModeType = _unresolved_5.updateGameModeType;
    }, function (_unresolved_6) {
      AutoLauncherType = _unresolved_6.AutoLauncherType;
      GameModeType = _unresolved_6.GameModeType;
    }, function (_unresolved_7) {
      footerViewModel = _unresolved_7.footerViewModel;
      thor_Audio = _unresolved_7.thor_Audio;
    }, function (_unresolved_8) {
      setRollSpeed = _unresolved_8.setRollSpeed;
    }, function (_unresolved_9) {
      SoundPathDefine = _unresolved_9.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "01ff7z6WEpN3YOwv1GeTYQj", "SgBoxViewModel", undefined);

      __checkObsolete__(['Node']);

      SgBoxViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class SgBoxViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Thor_SgBox');
        }

        begin() {
          this.setEvent({
            closeHandler: () => {
              (_crd && thor_Audio === void 0 ? (_reportPossibleCrUseOfthor_Audio({
                error: Error()
              }), thor_Audio) : thor_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).BUY_FREE_DIALOG_CLOSE);
              this.dispatch((_crd && updateGameModeType === void 0 ? (_reportPossibleCrUseOfupdateGameModeType({
                error: Error()
              }), updateGameModeType) : updateGameModeType)((_crd && GameModeType === void 0 ? (_reportPossibleCrUseOfGameModeType({
                error: Error()
              }), GameModeType) : GameModeType).normal));
              this.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT2);
            },
            confirmThePayment: () => {
              (_crd && thor_Audio === void 0 ? (_reportPossibleCrUseOfthor_Audio({
                error: Error()
              }), thor_Audio) : thor_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).BUY_FREE_BTN);
              this.dispatch((_crd && updateGameModeType === void 0 ? (_reportPossibleCrUseOfupdateGameModeType({
                error: Error()
              }), updateGameModeType) : updateGameModeType)((_crd && GameModeType === void 0 ? (_reportPossibleCrUseOfGameModeType({
                error: Error()
              }), GameModeType) : GameModeType).buyMiniGames));
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
              }), setAutoLaunchedTimes) : setAutoLaunchedTimes)(1));
              this.dispatch((_crd && setRollSpeed === void 0 ? (_reportPossibleCrUseOfsetRollSpeed({
                error: Error()
              }), setRollSpeed) : setRollSpeed)(1));
              (_crd && footerViewModel === void 0 ? (_reportPossibleCrUseOffooterViewModel({
                error: Error()
              }), footerViewModel) : footerViewModel).manualBetHandler();
              this.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT2);
            }
          });
        }

        connect() {
          this.inject({}, state => {
            return {};
          });
          return this;
        }

      }) || _class);

      _export("default", SgBoxViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c469cb8eabef72058435bf8fe4b5c834e7c5730d.js.map