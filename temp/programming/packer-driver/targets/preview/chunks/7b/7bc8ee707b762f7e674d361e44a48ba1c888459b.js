System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, ViewModel, StoreInject, getStore, AutoLauncherViewModel, thor_Audio, sourceManageSeletor, PrefabPathDefine, EffectType, BaseViewModel, SKT_MAG_TYPE, sktInstance, beginRollAction, setRollSpeed, setSmallBox, dataTransfer, DataKeyType, AutoLauncherType, GameType, changeAutoLauncherType, changeIsHasten, changeProfit, changebetAmount, setAutoLaunchedTimes, setShowAuthLaunch, setWaiting, SoundPathDefine, global, lang, addToastAction, _dec, _class, _crd, FooterViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThor_Footer(extras) {
    _reporterNs.report("Thor_Footer", "../components/Thor_Footer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Thor_Footer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Thor_Footer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherViewModel(extras) {
    _reporterNs.report("AutoLauncherViewModel", "./AutoLauncherViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfthor_Audio(extras) {
    _reporterNs.report("thor_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseViewModel(extras) {
    _reporterNs.report("BaseViewModel", "../../../common/viewModel/BaseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThor_HelpPanel(extras) {
    _reporterNs.report("Thor_HelpPanel", "../components/Thor_HelpPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFIProps(extras) {
    _reporterNs.report("FIProps", "../components/Thor_HelpPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFIState(extras) {
    _reporterNs.report("FIState", "../components/Thor_HelpPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFIEvent(extras) {
    _reporterNs.report("FIEvent", "../components/Thor_HelpPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktInstance(extras) {
    _reporterNs.report("sktInstance", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbeginRollAction(extras) {
    _reporterNs.report("beginRollAction", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetRollSpeed(extras) {
    _reporterNs.report("setRollSpeed", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetSmallBox(extras) {
    _reporterNs.report("setSmallBox", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdataTransfer(extras) {
    _reporterNs.report("dataTransfer", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataKeyType(extras) {
    _reporterNs.report("DataKeyType", "../dataTransfer", _context.meta, extras);
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

  function _reportPossibleCrUseOfchangeIsHasten(extras) {
    _reporterNs.report("changeIsHasten", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeProfit(extras) {
    _reporterNs.report("changeProfit", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangebetAmount(extras) {
    _reporterNs.report("changebetAmount", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetAutoLaunchedTimes(extras) {
    _reporterNs.report("setAutoLaunchedTimes", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetShowAuthLaunch(extras) {
    _reporterNs.report("setShowAuthLaunch", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetWaiting(extras) {
    _reporterNs.report("setWaiting", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
      StoreInject = _unresolved_2.StoreInject;
    }, function (_unresolved_3) {
      getStore = _unresolved_3.getStore;
    }, function (_unresolved_4) {
      AutoLauncherViewModel = _unresolved_4.default;
    }, function (_unresolved_5) {
      thor_Audio = _unresolved_5.thor_Audio;
      sourceManageSeletor = _unresolved_5.sourceManageSeletor;
    }, function (_unresolved_6) {
      PrefabPathDefine = _unresolved_6.PrefabPathDefine;
    }, function (_unresolved_7) {
      EffectType = _unresolved_7.EffectType;
    }, function (_unresolved_8) {
      BaseViewModel = _unresolved_8.default;
    }, function (_unresolved_9) {
      SKT_MAG_TYPE = _unresolved_9.SKT_MAG_TYPE;
      sktInstance = _unresolved_9.sktInstance;
    }, function (_unresolved_10) {
      beginRollAction = _unresolved_10.beginRollAction;
      setRollSpeed = _unresolved_10.setRollSpeed;
      setSmallBox = _unresolved_10.setSmallBox;
    }, function (_unresolved_11) {
      dataTransfer = _unresolved_11.default;
      DataKeyType = _unresolved_11.DataKeyType;
    }, function (_unresolved_12) {
      AutoLauncherType = _unresolved_12.AutoLauncherType;
      GameType = _unresolved_12.GameType;
    }, function (_unresolved_13) {
      changeAutoLauncherType = _unresolved_13.changeAutoLauncherType;
      changeIsHasten = _unresolved_13.changeIsHasten;
      changeProfit = _unresolved_13.changeProfit;
      changebetAmount = _unresolved_13.changebetAmount;
      setAutoLaunchedTimes = _unresolved_13.setAutoLaunchedTimes;
      setShowAuthLaunch = _unresolved_13.setShowAuthLaunch;
      setWaiting = _unresolved_13.setWaiting;
    }, function (_unresolved_14) {
      SoundPathDefine = _unresolved_14.SoundPathDefine;
    }, function (_unresolved_15) {
      global = _unresolved_15.global;
      lang = _unresolved_15.lang;
    }, function (_unresolved_16) {
      addToastAction = _unresolved_16.addToastAction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1a0f3cFXodEj7Yz77nQJgcG", "FooterViewModel", undefined);

      __checkObsolete__(['Node', 'UIOpacity', 'sys', 'Animation']);

      FooterViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class FooterViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Thor_Footer');
          this.autoLauncherPanel = void 0;
          this.helpPanelPanel = void 0;
          this.positionId = 0;
          this.betAmount = 0;
        }

        begin() {
          this.autoLauncherPanel = new (_crd && AutoLauncherViewModel === void 0 ? (_reportPossibleCrUseOfAutoLauncherViewModel({
            error: Error()
          }), AutoLauncherViewModel) : AutoLauncherViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).AUTO_LAUNCHER).source).appendTo(this.viewNode.parent).connect(); // this.autoLauncherPanel.viewNode.getComponent(UIOpacity).opacity = 0

          this.setEvent({
            openAutoLauncher: () => {
              this.dispatch((_crd && setShowAuthLaunch === void 0 ? (_reportPossibleCrUseOfsetShowAuthLaunch({
                error: Error()
              }), setShowAuthLaunch) : setShowAuthLaunch)(true)); // (this.comp.getPropertyNode().props_down_chooseBg as Node).getComponent(Animation).play('animation_autoLauncher_up')
            },
            closeAutoLauncher: isClear => {
              this.dispatch((_crd && setShowAuthLaunch === void 0 ? (_reportPossibleCrUseOfsetShowAuthLaunch({
                error: Error()
              }), setShowAuthLaunch) : setShowAuthLaunch)(false)); //  (this.comp.getPropertyNode().props_down_chooseBg as Node).getComponent(Animation).play('animation_autoLauncher_down')

              isClear && this.dispatch((_crd && changeAutoLauncherType === void 0 ? (_reportPossibleCrUseOfchangeAutoLauncherType({
                error: Error()
              }), changeAutoLauncherType) : changeAutoLauncherType)((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                error: Error()
              }), AutoLauncherType) : AutoLauncherType).NONE));
              isClear && this.dispatch((_crd && setAutoLaunchedTimes === void 0 ? (_reportPossibleCrUseOfsetAutoLaunchedTimes({
                error: Error()
              }), setAutoLaunchedTimes) : setAutoLaunchedTimes)(0));
              isClear && this.dispatch((_crd && setRollSpeed === void 0 ? (_reportPossibleCrUseOfsetRollSpeed({
                error: Error()
              }), setRollSpeed) : setRollSpeed)(1));
            },
            openHelpPanel: () => {
              (_crd && thor_Audio === void 0 ? (_reportPossibleCrUseOfthor_Audio({
                error: Error()
              }), thor_Audio) : thor_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).BUTTONCLICK);
              this.helpPanelPanel = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
                error: Error()
              }), BaseViewModel) : BaseViewModel)("Thor_HelpPanel").mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                error: Error()
              }), PrefabPathDefine) : PrefabPathDefine).INTRODUCE).source).appendTo(this.viewNode.parent, {
                effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).EFFECT1,
                isModal: true
              }).setEvent({
                closeHandler: () => {
                  this.helpPanelPanel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                    error: Error()
                  }), EffectType) : EffectType).EFFECT1);
                }
              });
            },
            changeBetAmount: (betAmount, positionId, value) => {
              this.betAmount = betAmount;

              if (positionId && value) {
                this.positionId = positionId;
                this.dispatch((_crd && changebetAmount === void 0 ? (_reportPossibleCrUseOfchangebetAmount({
                  error: Error()
                }), changebetAmount) : changebetAmount)({
                  betAmount: this.betAmount,
                  bet: value
                }));
              }
            },
            manualBetHandler: () => {
              this.manualBetHandler();
            },
            isHasten: bl => {
              (_crd && thor_Audio === void 0 ? (_reportPossibleCrUseOfthor_Audio({
                error: Error()
              }), thor_Audio) : thor_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).BUTTONCLICK);
              this.dispatch((_crd && changeIsHasten === void 0 ? (_reportPossibleCrUseOfchangeIsHasten({
                error: Error()
              }), changeIsHasten) : changeIsHasten)(bl));
            }
          });
        }

        manualBetHandler() {
          if (!(_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance) || (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance) && !(_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).isConnect) return;

          if (this.comp.props && this.comp.props.balance < this.betAmount) {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
              error: Error()
            }), addToastAction) : addToastAction)({
              content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.palyingModule.RechangeGlod, {}, {
                placeStr: "对不起，您的金币不足，请充值!"
              })
            }));
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
            this.dispatch((_crd && changeAutoLauncherType === void 0 ? (_reportPossibleCrUseOfchangeAutoLauncherType({
              error: Error()
            }), changeAutoLauncherType) : changeAutoLauncherType)((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).NONE));
            this.dispatch((_crd && setAutoLaunchedTimes === void 0 ? (_reportPossibleCrUseOfsetAutoLaunchedTimes({
              error: Error()
            }), setAutoLaunchedTimes) : setAutoLaunchedTimes)(0));
            return;
          } //先转起来


          this.dispatch((_crd && beginRollAction === void 0 ? (_reportPossibleCrUseOfbeginRollAction({
            error: Error()
          }), beginRollAction) : beginRollAction)(-1)); //如果主游戏，清理奖池

          (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
            error: Error()
          }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
            error: Error()
          }), DataKeyType) : DataKeyType).GAME_TYPE) === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN && this.dispatch((_crd && changeProfit === void 0 ? (_reportPossibleCrUseOfchangeProfit({
            error: Error()
          }), changeProfit) : changeProfit)(0)); //发送下注

          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LAUNCHER_BET, {
            positionId: this.positionId,
            tableId: JSON.parse(sys.localStorage.getItem('thor')).tableId,
            buy: (_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
              error: Error()
            }), getStore) : getStore)().getState().game.gameMode
          });
          this.dispatch((_crd && setWaiting === void 0 ? (_reportPossibleCrUseOfsetWaiting({
            error: Error()
          }), setWaiting) : setWaiting)(false));
          this.dispatch((_crd && setSmallBox === void 0 ? (_reportPossibleCrUseOfsetSmallBox({
            error: Error()
          }), setSmallBox) : setSmallBox)({}));
          (_crd && thor_Audio === void 0 ? (_reportPossibleCrUseOfthor_Audio({
            error: Error()
          }), thor_Audio) : thor_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).ROLLER_BEGIN);
        }

        connect() {
          this.inject({
            autoLauncherType: (_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
              error: Error()
            }), getStore) : getStore)().getState().game.autoLauncherType
          }, state => {
            return {
              isRollEnd: state.roller.roundAllEnd,
              profit: state.game.profit,
              subGameTimes: state.game.subGameTimes,
              remainSubGameTimes: state.game.remainSubGameTimes,
              currGameType: state.game.currGameType,
              viewGameType: state.game.viewGameType,
              isShowAutoLaunch: state.game.isShowAutoLaunch,
              autoLauncherType: state.game.autoLauncherType,
              autoLaunchedTimes: state.game.autoLaunchedTimes,
              balance: state.game.balance,
              apostille: state.game.apostille
            };
          });
          return this;
        }

      }) || _class);

      _export("default", FooterViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7bc8ee707b762f7e674d361e44a48ba1c888459b.js.map