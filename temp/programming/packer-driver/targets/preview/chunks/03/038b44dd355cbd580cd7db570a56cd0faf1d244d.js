System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Tween, Vec3, ViewModel, StoreInject, getStore, sourceManageSeletor, PrefabPathDefine, EffectType, SetViewModel, RuleViewModel, global, gameTime, hisTime, timer, resetPokerStore, setPokerLeftAction, setPokerRightAction, setReadyPAction, setSendedPAction, setTipsAction, updatePokerInfo, changeGameTypeAction, resetHistoryStore, setMemberBetAction, changeAllWinUsersAction, changeCancelBetDataAction, changeGoldDataAction, resetStore, setNewBetDataAction, setUsersInfoAction, resetUserStore, _dec, _class, _crd, ccclass, property, setViewModel, ruleViewModel, TitleViewModel;

  function _reportPossibleCrUseOfDragonTiger_title(extras) {
    _reporterNs.report("DragonTiger_title", "../components/DragonTiger_title", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/DragonTiger_title", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/DragonTiger_title", _context.meta, extras);
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

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSetViewModel(extras) {
    _reporterNs.report("SetViewModel", "./DragonTigerSetViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRuleViewModel(extras) {
    _reporterNs.report("RuleViewModel", "./DragonTigerRuleViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameTime(extras) {
    _reporterNs.report("gameTime", "../components/DragonTiger_MainPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhisTime(extras) {
    _reporterNs.report("hisTime", "../components/DragonTiger_MainPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOftimer(extras) {
    _reporterNs.report("timer", "../components/DragonTiger_MainPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresetPokerStore(extras) {
    _reporterNs.report("resetPokerStore", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetPokerLeftAction(extras) {
    _reporterNs.report("setPokerLeftAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetPokerRightAction(extras) {
    _reporterNs.report("setPokerRightAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetReadyPAction(extras) {
    _reporterNs.report("setReadyPAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetSendedPAction(extras) {
    _reporterNs.report("setSendedPAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTipsAction(extras) {
    _reporterNs.report("setTipsAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdatePokerInfo(extras) {
    _reporterNs.report("updatePokerInfo", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeGameTypeAction(extras) {
    _reporterNs.report("changeGameTypeAction", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresetHistoryStore(extras) {
    _reporterNs.report("resetHistoryStore", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetMemberBetAction(extras) {
    _reporterNs.report("setMemberBetAction", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeAllWinUsersAction(extras) {
    _reporterNs.report("changeAllWinUsersAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeCancelBetDataAction(extras) {
    _reporterNs.report("changeCancelBetDataAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeGoldDataAction(extras) {
    _reporterNs.report("changeGoldDataAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresetStore(extras) {
    _reporterNs.report("resetStore", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetNewBetDataAction(extras) {
    _reporterNs.report("setNewBetDataAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetUsersInfoAction(extras) {
    _reporterNs.report("setUsersInfoAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresetUserStore(extras) {
    _reporterNs.report("resetUserStore", "../store/actions/userInfo", _context.meta, extras);
  }

  _export({
    setViewModel: void 0,
    ruleViewModel: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Tween = _cc.Tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
      StoreInject = _unresolved_2.StoreInject;
    }, function (_unresolved_3) {
      getStore = _unresolved_3.getStore;
    }, function (_unresolved_4) {
      sourceManageSeletor = _unresolved_4.sourceManageSeletor;
    }, function (_unresolved_5) {
      PrefabPathDefine = _unresolved_5.PrefabPathDefine;
    }, function (_unresolved_6) {
      EffectType = _unresolved_6.EffectType;
    }, function (_unresolved_7) {
      SetViewModel = _unresolved_7.default;
    }, function (_unresolved_8) {
      RuleViewModel = _unresolved_8.default;
    }, function (_unresolved_9) {
      global = _unresolved_9.global;
    }, function (_unresolved_10) {
      gameTime = _unresolved_10.gameTime;
      hisTime = _unresolved_10.hisTime;
      timer = _unresolved_10.timer;
    }, function (_unresolved_11) {
      resetPokerStore = _unresolved_11.resetPokerStore;
      setPokerLeftAction = _unresolved_11.setPokerLeftAction;
      setPokerRightAction = _unresolved_11.setPokerRightAction;
      setReadyPAction = _unresolved_11.setReadyPAction;
      setSendedPAction = _unresolved_11.setSendedPAction;
      setTipsAction = _unresolved_11.setTipsAction;
      updatePokerInfo = _unresolved_11.updatePokerInfo;
    }, function (_unresolved_12) {
      changeGameTypeAction = _unresolved_12.changeGameTypeAction;
      resetHistoryStore = _unresolved_12.resetHistoryStore;
      setMemberBetAction = _unresolved_12.setMemberBetAction;
    }, function (_unresolved_13) {
      changeAllWinUsersAction = _unresolved_13.changeAllWinUsersAction;
      changeCancelBetDataAction = _unresolved_13.changeCancelBetDataAction;
      changeGoldDataAction = _unresolved_13.changeGoldDataAction;
      resetStore = _unresolved_13.resetStore;
      setNewBetDataAction = _unresolved_13.setNewBetDataAction;
      setUsersInfoAction = _unresolved_13.setUsersInfoAction;
    }, function (_unresolved_14) {
      resetUserStore = _unresolved_14.resetUserStore;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b82985JxlhJUY8R0lGoAcFk", "DragonTigerTitleViewModel", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'AssetManager', 'Component', 'instantiate', 'Node', 'Animation', 'Tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      TitleViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class TitleViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('DragonTiger_title');
          this.isClick = false;
        }

        begin() {
          this.setEvent({
            returnHall: () => {
              window.clearInterval(_crd && timer === void 0 ? (_reportPossibleCrUseOftimer({
                error: Error()
              }), timer) : timer);
              window.clearTimeout(_crd && hisTime === void 0 ? (_reportPossibleCrUseOfhisTime({
                error: Error()
              }), hisTime) : hisTime);
              window.clearTimeout(_crd && gameTime === void 0 ? (_reportPossibleCrUseOfgameTime({
                error: Error()
              }), gameTime) : gameTime);
              this.clearCacheData();
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).closeSubGame();
            },
            openMenuPanel: () => {
              this.openMenu();
            },
            openHelpPenel: () => {
              this.openRule();
            },
            openSetPanel: () => {
              this.openSet();
            }
          });
        }

        clearCacheData() {
          this.dispatch((_crd && resetStore === void 0 ? (_reportPossibleCrUseOfresetStore({
            error: Error()
          }), resetStore) : resetStore)(null));
          this.dispatch((_crd && resetHistoryStore === void 0 ? (_reportPossibleCrUseOfresetHistoryStore({
            error: Error()
          }), resetHistoryStore) : resetHistoryStore)(null));
          this.dispatch((_crd && resetPokerStore === void 0 ? (_reportPossibleCrUseOfresetPokerStore({
            error: Error()
          }), resetPokerStore) : resetPokerStore)(null));
          this.dispatch((_crd && resetUserStore === void 0 ? (_reportPossibleCrUseOfresetUserStore({
            error: Error()
          }), resetUserStore) : resetUserStore)(null));
          this.dispatch((_crd && changeGoldDataAction === void 0 ? (_reportPossibleCrUseOfchangeGoldDataAction({
            error: Error()
          }), changeGoldDataAction) : changeGoldDataAction)({}));
          this.dispatch((_crd && setTipsAction === void 0 ? (_reportPossibleCrUseOfsetTipsAction({
            error: Error()
          }), setTipsAction) : setTipsAction)(null));
          this.dispatch((_crd && setSendedPAction === void 0 ? (_reportPossibleCrUseOfsetSendedPAction({
            error: Error()
          }), setSendedPAction) : setSendedPAction)(0));
          this.dispatch((_crd && setReadyPAction === void 0 ? (_reportPossibleCrUseOfsetReadyPAction({
            error: Error()
          }), setReadyPAction) : setReadyPAction)(0));
          this.dispatch((_crd && changeGameTypeAction === void 0 ? (_reportPossibleCrUseOfchangeGameTypeAction({
            error: Error()
          }), changeGameTypeAction) : changeGameTypeAction)(null));
          this.dispatch((_crd && setMemberBetAction === void 0 ? (_reportPossibleCrUseOfsetMemberBetAction({
            error: Error()
          }), setMemberBetAction) : setMemberBetAction)(null));
          this.dispatch((_crd && updatePokerInfo === void 0 ? (_reportPossibleCrUseOfupdatePokerInfo({
            error: Error()
          }), updatePokerInfo) : updatePokerInfo)(null));
          this.dispatch((_crd && setPokerLeftAction === void 0 ? (_reportPossibleCrUseOfsetPokerLeftAction({
            error: Error()
          }), setPokerLeftAction) : setPokerLeftAction)(null));
          this.dispatch((_crd && setPokerRightAction === void 0 ? (_reportPossibleCrUseOfsetPokerRightAction({
            error: Error()
          }), setPokerRightAction) : setPokerRightAction)(null));
          this.dispatch((_crd && setNewBetDataAction === void 0 ? (_reportPossibleCrUseOfsetNewBetDataAction({
            error: Error()
          }), setNewBetDataAction) : setNewBetDataAction)(null));
          this.dispatch((_crd && changeCancelBetDataAction === void 0 ? (_reportPossibleCrUseOfchangeCancelBetDataAction({
            error: Error()
          }), changeCancelBetDataAction) : changeCancelBetDataAction)(null));
          this.dispatch((_crd && setUsersInfoAction === void 0 ? (_reportPossibleCrUseOfsetUsersInfoAction({
            error: Error()
          }), setUsersInfoAction) : setUsersInfoAction)(null));
          this.dispatch((_crd && changeAllWinUsersAction === void 0 ? (_reportPossibleCrUseOfchangeAllWinUsersAction({
            error: Error()
          }), changeAllWinUsersAction) : changeAllWinUsersAction)(null));
        }

        openMenu() {
          var titleNode = this.viewNode.getChildByName("props_mask_titrle");
          var titleAnimation = this.viewNode.getChildByName("props_mask_titrle").getComponent(Animation);

          if (!this.isClick) {
            titleAnimation.play();
            titleAnimation.on(Animation.EventType.FINISHED, () => {
              this.isClick = true;
            }, this);
          } else {
            var tw = new Tween(titleNode).to(0.2, {
              scale: new Vec3(1, 0, 0)
            }).start();
            this.isClick = false;
          }
        }

        openSet(nodeWrap) {
          _export("setViewModel", setViewModel = new (_crd && SetViewModel === void 0 ? (_reportPossibleCrUseOfSetViewModel({
            error: Error()
          }), SetViewModel) : SetViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_SET).source).appendTo(nodeWrap || this.parentNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: true
          }).setEvent({
            onClosePanel: () => {
              setViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT2);
            }
          }).connect());
        }

        openRule(nodeWrap) {
          _export("ruleViewModel", ruleViewModel = new (_crd && RuleViewModel === void 0 ? (_reportPossibleCrUseOfRuleViewModel({
            error: Error()
          }), RuleViewModel) : RuleViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_RULE).source).appendTo(nodeWrap || this.parentNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: true
          }).setEvent({
            onClosePanel: () => {
              ruleViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT2);
            }
          }).connect());
        }

        connect() {
          this.inject({}, state => {
            return {
              memberBet: state.history.memberBet,
              winType: state.userInfo.winType
            };
          });
          return this;
        }

      }) || _class);

      _export("default", TitleViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=038b44dd355cbd580cd7db570a56cd0faf1d244d.js.map