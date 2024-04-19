System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Tween, Vec3, find, ViewModel, StoreInject, getStore, global, sourceManageSelector, PrefabPathDefine, EffectType, SetViewModel, RuleViewModel, changeAllWinUsersAction, changeCancelBetDataAction, changeGoldDataAction, setNewBetDataAction, betAreaViewModel, setCountDownAction, setGameStatusAction, setInitGameStatusAction, setTipsAction, setAllCardTypeAction, setBankerPokerAction, setBlackPokerAction, setBlockNumAction, setDiamondPokerAction, setFarmhouseNumAction, setHeartNumAction, setPlumPokerAction, setRedPokerAction, setSakuraNumAction, setSpadeNumAction, setWinAreaAction, changeResult1Action, changeResult2Action, changeResult3Action, changeResult4Action, _dec, _class, _crd, ccclass, property, setViewModel, ruleViewModel, TitleViewModel;

  function confirmDoneAfterFn() {}

  function _reportPossibleCrUseOfBandar_title(extras) {
    _reporterNs.report("Bandar_title", "../components/Bandar_title", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Bandar_title", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Bandar_title", _context.meta, extras);
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
    _reporterNs.report("SetViewModel", "./BandarSetViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRuleViewModel(extras) {
    _reporterNs.report("RuleViewModel", "./BandarRuleViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeAllWinUsersAction(extras) {
    _reporterNs.report("changeAllWinUsersAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeCancelBetDataAction(extras) {
    _reporterNs.report("changeCancelBetDataAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeGoldDataAction(extras) {
    _reporterNs.report("changeGoldDataAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetNewBetDataAction(extras) {
    _reporterNs.report("setNewBetDataAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbetAreaViewModel(extras) {
    _reporterNs.report("betAreaViewModel", "./BandarGameBoardViewModel", _context.meta, extras);
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

  function _reportPossibleCrUseOfsetAllCardTypeAction(extras) {
    _reporterNs.report("setAllCardTypeAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetBankerPokerAction(extras) {
    _reporterNs.report("setBankerPokerAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetBlackPokerAction(extras) {
    _reporterNs.report("setBlackPokerAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetBlockNumAction(extras) {
    _reporterNs.report("setBlockNumAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetDiamondPokerAction(extras) {
    _reporterNs.report("setDiamondPokerAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetFarmhouseNumAction(extras) {
    _reporterNs.report("setFarmhouseNumAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetHeartNumAction(extras) {
    _reporterNs.report("setHeartNumAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetPlumPokerAction(extras) {
    _reporterNs.report("setPlumPokerAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetRedPokerAction(extras) {
    _reporterNs.report("setRedPokerAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetSakuraNumAction(extras) {
    _reporterNs.report("setSakuraNumAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetSpadeNumAction(extras) {
    _reporterNs.report("setSpadeNumAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetWinAreaAction(extras) {
    _reporterNs.report("setWinAreaAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeResult1Action(extras) {
    _reporterNs.report("changeResult1Action", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeResult2Action(extras) {
    _reporterNs.report("changeResult2Action", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeResult3Action(extras) {
    _reporterNs.report("changeResult3Action", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeResult4Action(extras) {
    _reporterNs.report("changeResult4Action", "../store/actions/history", _context.meta, extras);
  }

  _export({
    confirmDoneAfterFn: confirmDoneAfterFn,
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
      changeGoldDataAction = _unresolved_10.changeGoldDataAction;
      setNewBetDataAction = _unresolved_10.setNewBetDataAction;
    }, function (_unresolved_11) {
      betAreaViewModel = _unresolved_11.betAreaViewModel;
    }, function (_unresolved_12) {
      setCountDownAction = _unresolved_12.setCountDownAction;
      setGameStatusAction = _unresolved_12.setGameStatusAction;
      setInitGameStatusAction = _unresolved_12.setInitGameStatusAction;
      setTipsAction = _unresolved_12.setTipsAction;
    }, function (_unresolved_13) {
      setAllCardTypeAction = _unresolved_13.setAllCardTypeAction;
      setBankerPokerAction = _unresolved_13.setBankerPokerAction;
      setBlackPokerAction = _unresolved_13.setBlackPokerAction;
      setBlockNumAction = _unresolved_13.setBlockNumAction;
      setDiamondPokerAction = _unresolved_13.setDiamondPokerAction;
      setFarmhouseNumAction = _unresolved_13.setFarmhouseNumAction;
      setHeartNumAction = _unresolved_13.setHeartNumAction;
      setPlumPokerAction = _unresolved_13.setPlumPokerAction;
      setRedPokerAction = _unresolved_13.setRedPokerAction;
      setSakuraNumAction = _unresolved_13.setSakuraNumAction;
      setSpadeNumAction = _unresolved_13.setSpadeNumAction;
      setWinAreaAction = _unresolved_13.setWinAreaAction;
    }, function (_unresolved_14) {
      changeResult1Action = _unresolved_14.changeResult1Action;
      changeResult2Action = _unresolved_14.changeResult2Action;
      changeResult3Action = _unresolved_14.changeResult3Action;
      changeResult4Action = _unresolved_14.changeResult4Action;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "37d32b0/TtO4KYf+rHFthhF", "BandarTitleViewModel", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'AssetManager', 'Component', 'instantiate', 'Node', 'Animation', 'Tween', 'Vec3', 'find']);

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
          super('Bandar_title');
          this.isShowMenu = false;
        }

        begin() {
          this.setEvent({
            returnHall: () => {
              this.clearCacheData();
              (_crd && betAreaViewModel === void 0 ? (_reportPossibleCrUseOfbetAreaViewModel({
                error: Error()
              }), betAreaViewModel) : betAreaViewModel).comp.clearAllBetAreaGold();
              (_crd && betAreaViewModel === void 0 ? (_reportPossibleCrUseOfbetAreaViewModel({
                error: Error()
              }), betAreaViewModel) : betAreaViewModel).comp.betAreaInfo.clear();
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).closeSubGame();
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

        openMenu() {
          var titleNode = this.viewNode.getChildByName("props_mask_titrle");
          var titleAnimation = this.viewNode.getChildByName("props_mask_titrle").getComponent(Animation);

          if (!this.isShowMenu) {
            titleAnimation.play();
          } else {
            var tw = new Tween(titleNode).to(0.2, {
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

        clearCacheData() {
          this.dispatch((_crd && changeGoldDataAction === void 0 ? (_reportPossibleCrUseOfchangeGoldDataAction({
            error: Error()
          }), changeGoldDataAction) : changeGoldDataAction)({}));
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
          this.dispatch((_crd && setWinAreaAction === void 0 ? (_reportPossibleCrUseOfsetWinAreaAction({
            error: Error()
          }), setWinAreaAction) : setWinAreaAction)([]));
          this.dispatch((_crd && setBankerPokerAction === void 0 ? (_reportPossibleCrUseOfsetBankerPokerAction({
            error: Error()
          }), setBankerPokerAction) : setBankerPokerAction)(null));
          this.dispatch((_crd && setBlackPokerAction === void 0 ? (_reportPossibleCrUseOfsetBlackPokerAction({
            error: Error()
          }), setBlackPokerAction) : setBlackPokerAction)(null));
          this.dispatch((_crd && setRedPokerAction === void 0 ? (_reportPossibleCrUseOfsetRedPokerAction({
            error: Error()
          }), setRedPokerAction) : setRedPokerAction)(null));
          this.dispatch((_crd && setPlumPokerAction === void 0 ? (_reportPossibleCrUseOfsetPlumPokerAction({
            error: Error()
          }), setPlumPokerAction) : setPlumPokerAction)(null));
          this.dispatch((_crd && setDiamondPokerAction === void 0 ? (_reportPossibleCrUseOfsetDiamondPokerAction({
            error: Error()
          }), setDiamondPokerAction) : setDiamondPokerAction)(null));
          this.dispatch((_crd && setSpadeNumAction === void 0 ? (_reportPossibleCrUseOfsetSpadeNumAction({
            error: Error()
          }), setSpadeNumAction) : setSpadeNumAction)(null));
          this.dispatch((_crd && setHeartNumAction === void 0 ? (_reportPossibleCrUseOfsetHeartNumAction({
            error: Error()
          }), setHeartNumAction) : setHeartNumAction)(null));
          this.dispatch((_crd && setSakuraNumAction === void 0 ? (_reportPossibleCrUseOfsetSakuraNumAction({
            error: Error()
          }), setSakuraNumAction) : setSakuraNumAction)(null));
          this.dispatch((_crd && setBlockNumAction === void 0 ? (_reportPossibleCrUseOfsetBlockNumAction({
            error: Error()
          }), setBlockNumAction) : setBlockNumAction)(null));
          this.dispatch((_crd && setFarmhouseNumAction === void 0 ? (_reportPossibleCrUseOfsetFarmhouseNumAction({
            error: Error()
          }), setFarmhouseNumAction) : setFarmhouseNumAction)(null));
          this.dispatch((_crd && setTipsAction === void 0 ? (_reportPossibleCrUseOfsetTipsAction({
            error: Error()
          }), setTipsAction) : setTipsAction)(null));
          this.dispatch((_crd && setCountDownAction === void 0 ? (_reportPossibleCrUseOfsetCountDownAction({
            error: Error()
          }), setCountDownAction) : setCountDownAction)(0));
          this.dispatch((_crd && setAllCardTypeAction === void 0 ? (_reportPossibleCrUseOfsetAllCardTypeAction({
            error: Error()
          }), setAllCardTypeAction) : setAllCardTypeAction)(null));
          this.dispatch((_crd && setSpadeNumAction === void 0 ? (_reportPossibleCrUseOfsetSpadeNumAction({
            error: Error()
          }), setSpadeNumAction) : setSpadeNumAction)(null));
          this.dispatch((_crd && setHeartNumAction === void 0 ? (_reportPossibleCrUseOfsetHeartNumAction({
            error: Error()
          }), setHeartNumAction) : setHeartNumAction)(null));
          this.dispatch((_crd && setSakuraNumAction === void 0 ? (_reportPossibleCrUseOfsetSakuraNumAction({
            error: Error()
          }), setSakuraNumAction) : setSakuraNumAction)(null));
          this.dispatch((_crd && setBlockNumAction === void 0 ? (_reportPossibleCrUseOfsetBlockNumAction({
            error: Error()
          }), setBlockNumAction) : setBlockNumAction)(null));
          this.dispatch((_crd && setFarmhouseNumAction === void 0 ? (_reportPossibleCrUseOfsetFarmhouseNumAction({
            error: Error()
          }), setFarmhouseNumAction) : setFarmhouseNumAction)(null));
          this.dispatch((_crd && changeCancelBetDataAction === void 0 ? (_reportPossibleCrUseOfchangeCancelBetDataAction({
            error: Error()
          }), changeCancelBetDataAction) : changeCancelBetDataAction)(null));
          this.dispatch((_crd && changeResult1Action === void 0 ? (_reportPossibleCrUseOfchangeResult1Action({
            error: Error()
          }), changeResult1Action) : changeResult1Action)([]));
          this.dispatch((_crd && changeResult2Action === void 0 ? (_reportPossibleCrUseOfchangeResult2Action({
            error: Error()
          }), changeResult2Action) : changeResult2Action)([]));
          this.dispatch((_crd && changeResult3Action === void 0 ? (_reportPossibleCrUseOfchangeResult3Action({
            error: Error()
          }), changeResult3Action) : changeResult3Action)([]));
          this.dispatch((_crd && changeResult4Action === void 0 ? (_reportPossibleCrUseOfchangeResult4Action({
            error: Error()
          }), changeResult4Action) : changeResult4Action)([]));
        }

        connect() {
          var storeState = this.store.getState();
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
//# sourceMappingURL=b658c4667a99403abdbdfb6036befce5c22f7b9a.js.map