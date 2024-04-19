System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Tween, Vec3, find, ViewModel, StoreInject, getStore, global, sourceManageSelector, PrefabPathDefine, EffectType, SetViewModel, RuleViewModel, changeAllWinUsersAction, changeCancelBetDataAction, changeCardTypeAction, changeGoldDataAction, changeWinAreaRateAction, setMemberBetAction, setNewBetDataAction, setCountDownAction, setGameStatusAction, setInitGameStatusAction, setTipsAction, setUsersInfoAction, changeBlueCardAction, changeRedCardAction, changeTwinNumAction, _dec, _class, _crd, ccclass, property, setViewModel, ruleViewModel, TitleViewModel;

  function _reportPossibleCrUseOfBandarQiuQiu_title(extras) {
    _reporterNs.report("BandarQiuQiu_title", "../components/BandarQiuQiu_title", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/BandarQiuQiu_title", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/BandarQiuQiu_title", _context.meta, extras);
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

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSelector(extras) {
    _reporterNs.report("sourceManageSelector", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSetViewModel(extras) {
    _reporterNs.report("SetViewModel", "./BandarQiuQiuSetViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRuleViewModel(extras) {
    _reporterNs.report("RuleViewModel", "./BandarQiuQiuRuleViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeAllWinUsersAction(extras) {
    _reporterNs.report("changeAllWinUsersAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeCancelBetDataAction(extras) {
    _reporterNs.report("changeCancelBetDataAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeCardTypeAction(extras) {
    _reporterNs.report("changeCardTypeAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeGoldDataAction(extras) {
    _reporterNs.report("changeGoldDataAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeWinAreaRateAction(extras) {
    _reporterNs.report("changeWinAreaRateAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetMemberBetAction(extras) {
    _reporterNs.report("setMemberBetAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetNewBetDataAction(extras) {
    _reporterNs.report("setNewBetDataAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetCountDownAction(extras) {
    _reporterNs.report("setCountDownAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetGameStatusAction(extras) {
    _reporterNs.report("setGameStatusAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetInitGameStatusAction(extras) {
    _reporterNs.report("setInitGameStatusAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTipsAction(extras) {
    _reporterNs.report("setTipsAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetUsersInfoAction(extras) {
    _reporterNs.report("setUsersInfoAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeBlueCardAction(extras) {
    _reporterNs.report("changeBlueCardAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeRedCardAction(extras) {
    _reporterNs.report("changeRedCardAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeTwinNumAction(extras) {
    _reporterNs.report("changeTwinNumAction", "../store/actions/pokerDetail", _context.meta, extras);
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
      find = _cc.find;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
      StoreInject = _unresolved_2.StoreInject;
    }, function (_unresolved_3) {
      getStore = _unresolved_3.getStore;
    }, function (_unresolved_4) {
      global = _unresolved_4.global;
    }, function (_unresolved_5) {
      sourceManageSelector = _unresolved_5.sourceManageSelector;
    }, function (_unresolved_6) {
      PrefabPathDefine = _unresolved_6.PrefabPathDefine;
    }, function (_unresolved_7) {
      EffectType = _unresolved_7.EffectType;
    }, function (_unresolved_8) {
      SetViewModel = _unresolved_8.default;
    }, function (_unresolved_9) {
      RuleViewModel = _unresolved_9.default;
    }, function (_unresolved_10) {
      changeAllWinUsersAction = _unresolved_10.changeAllWinUsersAction;
      changeCancelBetDataAction = _unresolved_10.changeCancelBetDataAction;
      changeCardTypeAction = _unresolved_10.changeCardTypeAction;
      changeGoldDataAction = _unresolved_10.changeGoldDataAction;
      changeWinAreaRateAction = _unresolved_10.changeWinAreaRateAction;
      setMemberBetAction = _unresolved_10.setMemberBetAction;
      setNewBetDataAction = _unresolved_10.setNewBetDataAction;
    }, function (_unresolved_11) {
      setCountDownAction = _unresolved_11.setCountDownAction;
      setGameStatusAction = _unresolved_11.setGameStatusAction;
      setInitGameStatusAction = _unresolved_11.setInitGameStatusAction;
      setTipsAction = _unresolved_11.setTipsAction;
      setUsersInfoAction = _unresolved_11.setUsersInfoAction;
    }, function (_unresolved_12) {
      changeBlueCardAction = _unresolved_12.changeBlueCardAction;
      changeRedCardAction = _unresolved_12.changeRedCardAction;
      changeTwinNumAction = _unresolved_12.changeTwinNumAction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "24c79EH1hVCjaUPkhbPxVpm", "BandarQiuQiuTitleViewModel", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'AssetManager', 'Component', 'instantiate', 'Node', 'Animation', 'Tween', 'Vec3', 'find']); // import { betAreaViewModel } from './BandarGameBoardViewModel';


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
          super('BandarQiuQiu_title');
          this.isShowMenu = false;
        }

        begin() {
          this.setEvent({
            returnHall: () => {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).closeSubGame();
              this.dispatch((_crd && setNewBetDataAction === void 0 ? (_reportPossibleCrUseOfsetNewBetDataAction({
                error: Error()
              }), setNewBetDataAction) : setNewBetDataAction)(null)); // betAreaViewModel.comp.clearAllBetAreaGold();

              this.dispatch((_crd && setGameStatusAction === void 0 ? (_reportPossibleCrUseOfsetGameStatusAction({
                error: Error()
              }), setGameStatusAction) : setGameStatusAction)(null));
              this.dispatch((_crd && changeAllWinUsersAction === void 0 ? (_reportPossibleCrUseOfchangeAllWinUsersAction({
                error: Error()
              }), changeAllWinUsersAction) : changeAllWinUsersAction)(null));
            },
            openMenuPanel: () => {
              this.openMenu();
            },
            openHelpPanel: () => {
              this.openRule();
            },
            openSetPanel: () => {
              this.openSet();
            }
          });
        }

        clearCacheData() {
          this.dispatch((_crd && setNewBetDataAction === void 0 ? (_reportPossibleCrUseOfsetNewBetDataAction({
            error: Error()
          }), setNewBetDataAction) : setNewBetDataAction)(null));
          this.dispatch((_crd && setGameStatusAction === void 0 ? (_reportPossibleCrUseOfsetGameStatusAction({
            error: Error()
          }), setGameStatusAction) : setGameStatusAction)(null));
          this.dispatch((_crd && setInitGameStatusAction === void 0 ? (_reportPossibleCrUseOfsetInitGameStatusAction({
            error: Error()
          }), setInitGameStatusAction) : setInitGameStatusAction)(null));
          this.dispatch((_crd && changeAllWinUsersAction === void 0 ? (_reportPossibleCrUseOfchangeAllWinUsersAction({
            error: Error()
          }), changeAllWinUsersAction) : changeAllWinUsersAction)(null));
          this.dispatch((_crd && setTipsAction === void 0 ? (_reportPossibleCrUseOfsetTipsAction({
            error: Error()
          }), setTipsAction) : setTipsAction)(null));
          this.dispatch((_crd && setCountDownAction === void 0 ? (_reportPossibleCrUseOfsetCountDownAction({
            error: Error()
          }), setCountDownAction) : setCountDownAction)(0));
          this.dispatch((_crd && changeGoldDataAction === void 0 ? (_reportPossibleCrUseOfchangeGoldDataAction({
            error: Error()
          }), changeGoldDataAction) : changeGoldDataAction)(null));
          this.dispatch((_crd && setMemberBetAction === void 0 ? (_reportPossibleCrUseOfsetMemberBetAction({
            error: Error()
          }), setMemberBetAction) : setMemberBetAction)(null));
          this.dispatch((_crd && setUsersInfoAction === void 0 ? (_reportPossibleCrUseOfsetUsersInfoAction({
            error: Error()
          }), setUsersInfoAction) : setUsersInfoAction)(null));
          this.dispatch((_crd && changeCancelBetDataAction === void 0 ? (_reportPossibleCrUseOfchangeCancelBetDataAction({
            error: Error()
          }), changeCancelBetDataAction) : changeCancelBetDataAction)(null));
          this.dispatch((_crd && changeBlueCardAction === void 0 ? (_reportPossibleCrUseOfchangeBlueCardAction({
            error: Error()
          }), changeBlueCardAction) : changeBlueCardAction)(null));
          this.dispatch((_crd && changeRedCardAction === void 0 ? (_reportPossibleCrUseOfchangeRedCardAction({
            error: Error()
          }), changeRedCardAction) : changeRedCardAction)(null));
          this.dispatch((_crd && changeTwinNumAction === void 0 ? (_reportPossibleCrUseOfchangeTwinNumAction({
            error: Error()
          }), changeTwinNumAction) : changeTwinNumAction)(null));
          this.dispatch((_crd && changeWinAreaRateAction === void 0 ? (_reportPossibleCrUseOfchangeWinAreaRateAction({
            error: Error()
          }), changeWinAreaRateAction) : changeWinAreaRateAction)(null));
          this.dispatch((_crd && changeCardTypeAction === void 0 ? (_reportPossibleCrUseOfchangeCardTypeAction({
            error: Error()
          }), changeCardTypeAction) : changeCardTypeAction)(null));
        }

        openMenu() {
          const titleNode = this.comp.getPropertyNode().props_mask_titrle;
          const titleAnimation = titleNode.getComponent(Animation);

          if (!this.isShowMenu) {
            titleAnimation.play();
          } else {
            const tw = new Tween(titleNode).to(0.2, {
              scale: new Vec3(1, 0, 0)
            }).start();
          }

          this.isShowMenu = !this.isShowMenu;
        }

        openSet(nodeWrap) {
          _export("setViewModel", setViewModel = new (_crd && SetViewModel === void 0 ? (_reportPossibleCrUseOfSetViewModel({
            error: Error()
          }), SetViewModel) : SetViewModel)().mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_SET).source).appendTo(find("Canvas"), {
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
          }), RuleViewModel) : RuleViewModel)().mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_RULE).source).appendTo(find("Canvas"), {
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
          const storeState = this.store.getState();
          this.inject({}, state => {
            return {
              betData: state.bet.betData,
              memberBet: state.bet.memberBet
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
//# sourceMappingURL=256f110c9bbb72ff7dcb5357dc21e2677ea025b9.js.map