System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UIOpacity, sys, Animation, ViewModel, StoreInject, getStore, AutoLauncherViewModel, playFastRoller, sourceManageSeletor, PrefabPathDefine, EffectType, BaseViewModel, SKT_MAG_TYPE, sktInstance, beginRollAction, setRollSpeed, dataTransfer, DataKeyType, AutoLauncherType, GameType, changeAutoLauncherType, changeProfit, setAutoLaunchedTimes, setFreeGameRate, setShowAuthLaunch, setSortStop, setWaiting, updateSubGameTimes, global, lang, addToastAction, _dec, _class, _crd, FooterViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGodWealth_footer(extras) {
    _reporterNs.report("GodWealth_footer", "../components/GodWealth_footer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/GodWealth_footer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/GodWealth_footer", _context.meta, extras);
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

  function _reportPossibleCrUseOfplayFastRoller(extras) {
    _reporterNs.report("playFastRoller", "../index", _context.meta, extras);
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

  function _reportPossibleCrUseOfGodWealth_helpPanel(extras) {
    _reporterNs.report("GodWealth_helpPanel", "../components/GodWealth_helpPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFIProps(extras) {
    _reporterNs.report("FIProps", "../components/GodWealth_helpPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFIState(extras) {
    _reporterNs.report("FIState", "../components/GodWealth_helpPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFIEvent(extras) {
    _reporterNs.report("FIEvent", "../components/GodWealth_helpPanel", _context.meta, extras);
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

  function _reportPossibleCrUseOfSMALLGAME(extras) {
    _reporterNs.report("SMALLGAME", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeAutoLauncherType(extras) {
    _reporterNs.report("changeAutoLauncherType", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeProfit(extras) {
    _reporterNs.report("changeProfit", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetAutoLaunchedTimes(extras) {
    _reporterNs.report("setAutoLaunchedTimes", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetFreeGameRate(extras) {
    _reporterNs.report("setFreeGameRate", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetShowAuthLaunch(extras) {
    _reporterNs.report("setShowAuthLaunch", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetSortStop(extras) {
    _reporterNs.report("setSortStop", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetWaiting(extras) {
    _reporterNs.report("setWaiting", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateSubGameTimes(extras) {
    _reporterNs.report("updateSubGameTimes", "../store/actions/game", _context.meta, extras);
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
      UIOpacity = _cc.UIOpacity;
      sys = _cc.sys;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
      StoreInject = _unresolved_2.StoreInject;
    }, function (_unresolved_3) {
      getStore = _unresolved_3.getStore;
    }, function (_unresolved_4) {
      AutoLauncherViewModel = _unresolved_4.default;
    }, function (_unresolved_5) {
      playFastRoller = _unresolved_5.playFastRoller;
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
    }, function (_unresolved_11) {
      dataTransfer = _unresolved_11.default;
      DataKeyType = _unresolved_11.DataKeyType;
    }, function (_unresolved_12) {
      AutoLauncherType = _unresolved_12.AutoLauncherType;
      GameType = _unresolved_12.GameType;
    }, function (_unresolved_13) {
      changeAutoLauncherType = _unresolved_13.changeAutoLauncherType;
      changeProfit = _unresolved_13.changeProfit;
      setAutoLaunchedTimes = _unresolved_13.setAutoLaunchedTimes;
      setFreeGameRate = _unresolved_13.setFreeGameRate;
      setShowAuthLaunch = _unresolved_13.setShowAuthLaunch;
      setSortStop = _unresolved_13.setSortStop;
      setWaiting = _unresolved_13.setWaiting;
      updateSubGameTimes = _unresolved_13.updateSubGameTimes;
    }, function (_unresolved_14) {
      global = _unresolved_14.global;
      lang = _unresolved_14.lang;
    }, function (_unresolved_15) {
      addToastAction = _unresolved_15.addToastAction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a541FajpNL8bu7dGPdz+KF", "FooterViewModel", undefined);

      __checkObsolete__(['Node', 'UIOpacity', 'sys', 'Animation']);

      FooterViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class FooterViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('GodWealth_footer');
          this.autoLauncherPanel = void 0;
          this.helpPanelPanel = void 0;
          this.positionId = 0;
          this.betAmount = 0;
          this.gameType = void 0;
          this.viewGameType = void 0;
          this.remainSubTimes = void 0;
          this.freeGamePositionId = void 0;
        }

        begin() {
          this.autoLauncherPanel = new (_crd && AutoLauncherViewModel === void 0 ? (_reportPossibleCrUseOfAutoLauncherViewModel({
            error: Error()
          }), AutoLauncherViewModel) : AutoLauncherViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).AUTO_LAUNCHER).source).appendTo(this.comp.getAutoLauncherBaseNBoard()).connect();
          this.autoLauncherPanel.viewNode.getComponent(UIOpacity).opacity = 0;
          this.setEvent({
            openAutoLauncher: () => {
              if (this.viewGameType !== (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).MAIN) return; //小游戏不能打开自动下注

              this.dispatch((_crd && setShowAuthLaunch === void 0 ? (_reportPossibleCrUseOfsetShowAuthLaunch({
                error: Error()
              }), setShowAuthLaunch) : setShowAuthLaunch)(true));
              this.comp.getPropertyNode().props_down_chooseBg.getComponent(Animation).play('animation_autoLauncher_up');
            },
            closeAutoLauncher: isClear => {
              this.dispatch((_crd && setShowAuthLaunch === void 0 ? (_reportPossibleCrUseOfsetShowAuthLaunch({
                error: Error()
              }), setShowAuthLaunch) : setShowAuthLaunch)(false));
              isClear && this.dispatch((_crd && changeAutoLauncherType === void 0 ? (_reportPossibleCrUseOfchangeAutoLauncherType({
                error: Error()
              }), changeAutoLauncherType) : changeAutoLauncherType)((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                error: Error()
              }), AutoLauncherType) : AutoLauncherType).NONE));
              isClear && this.dispatch((_crd && setAutoLaunchedTimes === void 0 ? (_reportPossibleCrUseOfsetAutoLaunchedTimes({
                error: Error()
              }), setAutoLaunchedTimes) : setAutoLaunchedTimes)(0));
              this.comp.getPropertyNode().props_down_chooseBg.getComponent(Animation).play('animation_autoLauncher_down'); // isClear && this.dispatch(setRollSpeed(1))
            },
            openHelpPanel: () => {
              this.helpPanelPanel = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
                error: Error()
              }), BaseViewModel) : BaseViewModel)("GodWealth_helpPanel").mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                error: Error()
              }), PrefabPathDefine) : PrefabPathDefine).RULE).source).appendTo(this.viewNode.parent, {
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
              this.positionId = positionId;
              this.betAmount = betAmount;
            },
            manualBetHandler: () => {
              this.manualBetHandler();
            },
            changeSpeedUpSwitch: isChecked => {
              // this.dispatch(setStopMode(isChecked ? 'jump' : 'index'))
              this.dispatch((_crd && setSortStop === void 0 ? (_reportPossibleCrUseOfsetSortStop({
                error: Error()
              }), setSortStop) : setSortStop)(!isChecked)); // debugger

              this.dispatch((_crd && setRollSpeed === void 0 ? (_reportPossibleCrUseOfsetRollSpeed({
                error: Error()
              }), setRollSpeed) : setRollSpeed)(isChecked ? 1.3 : 1));
            }
          });
        }

        unMountCallBack() {
          this.dispatch((_crd && changeAutoLauncherType === void 0 ? (_reportPossibleCrUseOfchangeAutoLauncherType({
            error: Error()
          }), changeAutoLauncherType) : changeAutoLauncherType)((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
            error: Error()
          }), AutoLauncherType) : AutoLauncherType).NONE));
          this.dispatch((_crd && setAutoLaunchedTimes === void 0 ? (_reportPossibleCrUseOfsetAutoLaunchedTimes({
            error: Error()
          }), setAutoLaunchedTimes) : setAutoLaunchedTimes)(0));
        }

        manualBetHandler() {
          if (!(_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance) || (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance) && !(_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).isConnect) return;

          if (this.comp.props.balance < this.betAmount) {
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

          if ((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
            error: Error()
          }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
            error: Error()
          }), DataKeyType) : DataKeyType).GAME_TYPE) === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN) {
            this.dispatch((_crd && changeProfit === void 0 ? (_reportPossibleCrUseOfchangeProfit({
              error: Error()
            }), changeProfit) : changeProfit)(0));
          } //如果是小游戏，清除气泡倍率值


          if ((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
            error: Error()
          }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
            error: Error()
          }), DataKeyType) : DataKeyType).GAME_TYPE) === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1 || (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
            error: Error()
          }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
            error: Error()
          }), DataKeyType) : DataKeyType).GAME_TYPE) === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2) {
            this.dispatch((_crd && setFreeGameRate === void 0 ? (_reportPossibleCrUseOfsetFreeGameRate({
              error: Error()
            }), setFreeGameRate) : setFreeGameRate)(0));

            if (this.remainSubTimes > 0) {
              this.dispatch((_crd && updateSubGameTimes === void 0 ? (_reportPossibleCrUseOfupdateSubGameTimes({
                error: Error()
              }), updateSubGameTimes) : updateSubGameTimes)(this.remainSubTimes - 1)); //第一次进入转一次小游戏剩余次数
            }
          } //发送下注


          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LAUNCHER_BET, {
            positionId: this.positionId,
            tableId: JSON.parse(sys.localStorage.getItem('godWealth')).tableId
          });
          this.dispatch((_crd && setWaiting === void 0 ? (_reportPossibleCrUseOfsetWaiting({
            error: Error()
          }), setWaiting) : setWaiting)(false));
          (_crd && playFastRoller === void 0 ? (_reportPossibleCrUseOfplayFastRoller({
            error: Error()
          }), playFastRoller) : playFastRoller)();
        }

        connect() {
          this.inject({
            autoLauncherType: (_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
              error: Error()
            }), getStore) : getStore)().getState().game.autoLauncherType
          }, state => {
            this.gameType = state.game.currGameType;
            this.freeGamePositionId = state.game.freeGamePositionId;
            this.viewGameType = state.game.viewGameType;
            this.remainSubTimes = state.game.remainSubGameTimes;
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
              isJumpStop: state.game.stopMode === "jump" ? true : false,
              isSortStop: state.game.isSortStop,
              freeGamePositionId: state.game.freeGamePositionId,
              jackpotAmount: state.game.jackpotAmount
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
//# sourceMappingURL=0bc7cd43112863bb9295820d9c20b756f6f609c2.js.map