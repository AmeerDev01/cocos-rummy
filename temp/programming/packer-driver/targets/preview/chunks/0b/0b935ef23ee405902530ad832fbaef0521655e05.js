System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "md5", "cc/env"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, sys, ViewModel, PrefabPathDefine, EffectType, ApiUrl, baseBoardView, fetcher, global, lang, sourceManageSeletor, SKT_MAG_TYPE, sktInstance, sktMsgListener, ToastType, addToastAction, changeWebView, setLoadingAction, setMemberInfo, setVip, ActivityViewModel, BankViewModel, BindPhoneViewModel, MailBoxViewModel, PersonCenterViewModel, ShareHelpViewModel, ShareSureViewModel, ShopViewModel, SignInViewModel, VipMainViewModel, VipUpViewModel, WithdrawalViewModel, BaseViewModel, config, BuyType, getFirebaseToken, getPackageName, pullPurchaseEvents, purchaseAppsflyerEvents, Task, TaskSchedulerDefault, md5, NATIVE, MainPanelViewModel, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../../hall/sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_MainPanel(extras) {
    _reporterNs.report("Hall_MainPanel", "../components/Hall_MainPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Hall_MainPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Hall_MainPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbaseBoardView(extras) {
    _reporterNs.report("baseBoardView", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOffetcher(extras) {
    _reporterNs.report("fetcher", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktInstance(extras) {
    _reporterNs.report("sktInstance", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktMsgListener(extras) {
    _reporterNs.report("sktMsgListener", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastType(extras) {
    _reporterNs.report("ToastType", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeWebView(extras) {
    _reporterNs.report("changeWebView", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetLoadingAction(extras) {
    _reporterNs.report("setLoadingAction", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetMemberInfo(extras) {
    _reporterNs.report("setMemberInfo", "../store/actions/memberInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetVip(extras) {
    _reporterNs.report("setVip", "../store/actions/memberInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityViewModel(extras) {
    _reporterNs.report("ActivityViewModel", "./ActivityViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBankViewModel(extras) {
    _reporterNs.report("BankViewModel", "./BankViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBindPhoneViewModel(extras) {
    _reporterNs.report("BindPhoneViewModel", "./BindPhoneViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMailBoxViewModel(extras) {
    _reporterNs.report("MailBoxViewModel", "./MailBoxViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPersonCenterViewModel(extras) {
    _reporterNs.report("PersonCenterViewModel", "./PersonCenterViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShareHelpViewModel(extras) {
    _reporterNs.report("ShareHelpViewModel", "./ShareHelpViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShareSureViewModel(extras) {
    _reporterNs.report("ShareSureViewModel", "./ShareSureViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopViewModel(extras) {
    _reporterNs.report("ShopViewModel", "./ShopViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignInViewModel(extras) {
    _reporterNs.report("SignInViewModel", "./SignInViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVipMainViewModel(extras) {
    _reporterNs.report("VipMainViewModel", "./VipMainViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVipUpViewModel(extras) {
    _reporterNs.report("VipUpViewModel", "./VipUpViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWithdrawalViewModel(extras) {
    _reporterNs.report("WithdrawalViewModel", "./WithdrawalViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseViewModel(extras) {
    _reporterNs.report("BaseViewModel", "./BaseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_Service(extras) {
    _reporterNs.report("Hall_Service", "../components/Hall_Service", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSIState(extras) {
    _reporterNs.report("SIState", "../components/Hall_Service", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSIProps(extras) {
    _reporterNs.report("SIProps", "../components/Hall_Service", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSIEvent(extras) {
    _reporterNs.report("SIEvent", "../components/Hall_Service", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_GiftBag(extras) {
    _reporterNs.report("Hall_GiftBag", "../components/Hall_GiftBag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGBState(extras) {
    _reporterNs.report("GBState", "../components/Hall_GiftBag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGBProps(extras) {
    _reporterNs.report("GBProps", "../components/Hall_GiftBag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGBEvent(extras) {
    _reporterNs.report("GBEvent", "../components/Hall_GiftBag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGiftItemType(extras) {
    _reporterNs.report("GiftItemType", "../components/Hall_GiftBag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_Upgrade(extras) {
    _reporterNs.report("Hall_Upgrade", "../components/Hall_Upgrade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUGIState(extras) {
    _reporterNs.report("UGIState", "../components/Hall_Upgrade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUGIProps(extras) {
    _reporterNs.report("UGIProps", "../components/Hall_Upgrade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUGIEvent(extras) {
    _reporterNs.report("UGIEvent", "../components/Hall_Upgrade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_ChangePassword(extras) {
    _reporterNs.report("Hall_ChangePassword", "../components/Hall_ChangePassword", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCPIState(extras) {
    _reporterNs.report("CPIState", "../components/Hall_ChangePassword", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCPIProps(extras) {
    _reporterNs.report("CPIProps", "../components/Hall_ChangePassword", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCPIEvent(extras) {
    _reporterNs.report("CPIEvent", "../components/Hall_ChangePassword", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_ReliefPanel(extras) {
    _reporterNs.report("Hall_ReliefPanel", "../components/Hall_ReliefPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPIState(extras) {
    _reporterNs.report("RPIState", "../components/Hall_ReliefPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPIProps(extras) {
    _reporterNs.report("RPIProps", "../components/Hall_ReliefPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPIEvent(extras) {
    _reporterNs.report("RPIEvent", "../components/Hall_ReliefPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuyType(extras) {
    _reporterNs.report("BuyType", "../components/Hall_ShopPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_WinningBox(extras) {
    _reporterNs.report("Hall_WinningBox", "../components/Hall_WinningBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWBState(extras) {
    _reporterNs.report("WBState", "../components/Hall_WinningBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWBProps(extras) {
    _reporterNs.report("WBProps", "../components/Hall_WinningBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWBEvent(extras) {
    _reporterNs.report("WBEvent", "../components/Hall_WinningBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinningType(extras) {
    _reporterNs.report("WinningType", "../components/Hall_WinningBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_AppDownLoadGuide(extras) {
    _reporterNs.report("Hall_AppDownLoadGuide", "../components/Hall_AppDownLoadGuide", _context.meta, extras);
  }

  function _reportPossibleCrUseOfALState(extras) {
    _reporterNs.report("ALState", "../components/Hall_AppDownLoadGuide", _context.meta, extras);
  }

  function _reportPossibleCrUseOfALProps(extras) {
    _reporterNs.report("ALProps", "../components/Hall_AppDownLoadGuide", _context.meta, extras);
  }

  function _reportPossibleCrUseOfALEvent(extras) {
    _reporterNs.report("ALEvent", "../components/Hall_AppDownLoadGuide", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetFirebaseToken(extras) {
    _reporterNs.report("getFirebaseToken", "../../common/bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetPackageName(extras) {
    _reporterNs.report("getPackageName", "../../common/bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpullPurchaseEvents(extras) {
    _reporterNs.report("pullPurchaseEvents", "../../common/bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpurchaseAppsflyerEvents(extras) {
    _reporterNs.report("purchaseAppsflyerEvents", "../../common/bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskSchedulerDefault(extras) {
    _reporterNs.report("TaskSchedulerDefault", "../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRechangeCallbackVo(extras) {
    _reporterNs.report("RechangeCallbackVo", "../hallType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmd(extras) {
    _reporterNs.report("md5", "md5", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Prefab = _cc.Prefab;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
    }, function (_unresolved_3) {
      PrefabPathDefine = _unresolved_3.PrefabPathDefine;
    }, function (_unresolved_4) {
      EffectType = _unresolved_4.EffectType;
    }, function (_unresolved_5) {
      ApiUrl = _unresolved_5.ApiUrl;
    }, function (_unresolved_6) {
      baseBoardView = _unresolved_6.baseBoardView;
      fetcher = _unresolved_6.fetcher;
      global = _unresolved_6.global;
      lang = _unresolved_6.lang;
      sourceManageSeletor = _unresolved_6.sourceManageSeletor;
    }, function (_unresolved_7) {
      SKT_MAG_TYPE = _unresolved_7.SKT_MAG_TYPE;
      sktInstance = _unresolved_7.sktInstance;
      sktMsgListener = _unresolved_7.sktMsgListener;
    }, function (_unresolved_8) {
      ToastType = _unresolved_8.ToastType;
      addToastAction = _unresolved_8.addToastAction;
      changeWebView = _unresolved_8.changeWebView;
      setLoadingAction = _unresolved_8.setLoadingAction;
    }, function (_unresolved_9) {
      setMemberInfo = _unresolved_9.setMemberInfo;
      setVip = _unresolved_9.setVip;
    }, function (_unresolved_10) {
      ActivityViewModel = _unresolved_10.default;
    }, function (_unresolved_11) {
      BankViewModel = _unresolved_11.default;
    }, function (_unresolved_12) {
      BindPhoneViewModel = _unresolved_12.default;
    }, function (_unresolved_13) {
      MailBoxViewModel = _unresolved_13.default;
    }, function (_unresolved_14) {
      PersonCenterViewModel = _unresolved_14.default;
    }, function (_unresolved_15) {
      ShareHelpViewModel = _unresolved_15.default;
    }, function (_unresolved_16) {
      ShareSureViewModel = _unresolved_16.default;
    }, function (_unresolved_17) {
      ShopViewModel = _unresolved_17.default;
    }, function (_unresolved_18) {
      SignInViewModel = _unresolved_18.default;
    }, function (_unresolved_19) {
      VipMainViewModel = _unresolved_19.default;
    }, function (_unresolved_20) {
      VipUpViewModel = _unresolved_20.default;
    }, function (_unresolved_21) {
      WithdrawalViewModel = _unresolved_21.default;
    }, function (_unresolved_22) {
      BaseViewModel = _unresolved_22.default;
    }, function (_unresolved_23) {
      config = _unresolved_23.config;
    }, function (_unresolved_24) {
      BuyType = _unresolved_24.BuyType;
    }, function (_unresolved_25) {
      getFirebaseToken = _unresolved_25.getFirebaseToken;
      getPackageName = _unresolved_25.getPackageName;
      pullPurchaseEvents = _unresolved_25.pullPurchaseEvents;
      purchaseAppsflyerEvents = _unresolved_25.purchaseAppsflyerEvents;
    }, function (_unresolved_26) {
      Task = _unresolved_26.Task;
      TaskSchedulerDefault = _unresolved_26.TaskSchedulerDefault;
    }, function (_md) {
      md5 = _md.default;
    }, function (_ccEnv) {
      NATIVE = _ccEnv.NATIVE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cbf84AcnORDcKVJA8g11Oy2", "MainPanelViewModel", undefined);

      __checkObsolete__(['Node', 'Prefab', 'sys']);

      MainPanelViewModel = class MainPanelViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Hall_MainPanel');
          this.personCenterViewModel = void 0;
          this.giftBoxVM = void 0;
          this.winningBoxVM = void 0;
          this.serviceVm = void 0;
          this.isAutoGiftPop = true;

          /**用于只有金额变化之后才开始判断救济金 */
          this.lastUserGlod = -1;

          /**用于防止打开商城的时候，收到的消息导致还打开礼包弹窗(因为商城也会发送礼包socket) */
          this.isOpenShop = false;

          /**用于只检查一次的值 */
          this.isCheckPop = false;
          this.retryCount = 0;
        }

        begin() {
          var _this = this;

          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).MEMBER_INFO, {}, {
            isLoading: true
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).MEMBER_INFO, "main", data => {
            this.dispatch((_crd && setMemberInfo === void 0 ? (_reportPossibleCrUseOfsetMemberInfo({
              error: Error()
            }), setMemberInfo) : setMemberInfo)(_extends({}, data)));
            this.dispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
              error: Error()
            }), setLoadingAction) : setLoadingAction)({
              isShow: false
            }));

            if (this.lastUserGlod !== this.comp.props.memberAssetGoldPieces) {
              this.openReliefPanel();
              this.lastUserGlod = this.comp.props.memberAssetGoldPieces;
            }

            !this.isCheckPop && (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
              error: Error()
            }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
              error: Error()
            }), ApiUrl) : ApiUrl).POP_UPS, {}, "get").then(rsp => {
              try {
                var {
                  activityVo,
                  mallVo,
                  signInVo,
                  upgradesVo
                } = rsp;
                var queue = [_extends({
                  key: 'activityVo'
                }, activityVo), _extends({
                  key: 'signInVo'
                }, signInVo), _extends({
                  key: 'upgradesVo'
                }, upgradesVo)].sort((a, b) => a.sort - b.sort);
                queue.forEach(item => {
                  if (item.popUps && item.key === 'activityVo') {
                    (_crd && TaskSchedulerDefault === void 0 ? (_reportPossibleCrUseOfTaskSchedulerDefault({
                      error: Error()
                    }), TaskSchedulerDefault) : TaskSchedulerDefault)().joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                      error: Error()
                    }), Task) : Task)(done => this.openAwardPanel(() => {
                      done();
                    })));
                  } else if (item.popUps && item.key === 'signInVo') {
                    (_crd && TaskSchedulerDefault === void 0 ? (_reportPossibleCrUseOfTaskSchedulerDefault({
                      error: Error()
                    }), TaskSchedulerDefault) : TaskSchedulerDefault)().joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                      error: Error()
                    }), Task) : Task)(done => this.openSign(this.parentNode, () => {
                      done();
                    })));
                  } else if (item.popUps && item.key === 'upgradesVo') {
                    (_crd && TaskSchedulerDefault === void 0 ? (_reportPossibleCrUseOfTaskSchedulerDefault({
                      error: Error()
                    }), TaskSchedulerDefault) : TaskSchedulerDefault)().joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                      error: Error()
                    }), Task) : Task)(done => this.openUpgradePanel(this.parentNode, () => {
                      done();
                    })));
                  }

                  if (item.popUps) {
                    //客服窗口使用的webview，如果出现叠加弹窗，会出现被覆盖的情况，要先关闭掉客服
                    this.serviceVm && !this.serviceVm.isUnMount && this.serviceVm.unMount();
                  }
                });
                this.isAutoGiftPop = mallVo.popUps;
              } catch (e) {
                console.error('pop_ups data error');
              }
            }).catch(e => {});
            this.isCheckPop = true;
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).addOnce((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LOG_EXIT, "log", () => {
            if (this.comp.props && this.comp.props.subGameInfo) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).closeSubGame({
                confirmContent: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.BaseBoardModule.BaseBoardLogin, {}, {
                  placeStr: '抱歉，您的登录信息变更，已自动退出~'
                })
              });
            }

            this.logOut(true);
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GIFT_LIST, "mainboard", data => {
            if (this.isOpenShop) return;
            this.comp.setGiftButtonDisplay(!data.filter(i => i.separatePage === 1).length ? false : true);

            if (this.isAutoGiftPop) {
              this.serviceVm && !this.serviceVm.isUnMount && this.serviceVm.unMount();
              this.openGiftBoxanel(true, data);
            }
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).WINNING_BOX, "main", data => {
            // this.winningBoxVM.setProps({ newWinningItem: data })
            this.winningBoxVM && this.winningBoxVM.comp.pushWinningData(data);
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).addOnce((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).VIP_CHANGE, "log", data => {
            this.openVipUp();
            this.dispatch((_crd && setVip === void 0 ? (_reportPossibleCrUseOfsetVip({
              error: Error()
            }), setVip) : setVip)(data.inceptionVipLevel, data.vipLevelExperience));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).RECHANGE_CALLBACK, "main", data => {
            this.rechangeCallbackHandle(data);
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).FRIST_LOGIN, "main", data => {
            (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).fristLogin.main = true;
          });

          if (!this.winningBoxVM) {
            (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine)._WINNING_BOX, Prefab).then(_ref => {
              var {
                source
              } = _ref;
              this.winningBoxVM = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
                error: Error()
              }), BaseViewModel) : BaseViewModel)("Hall_WinningBox").mountView(source).appendTo((_crd && baseBoardView === void 0 ? (_reportPossibleCrUseOfbaseBoardView({
                error: Error()
              }), baseBoardView) : baseBoardView).comp.getPropertyNode().props_winnerBox);
            });
          }

          this.setEvent({
            onOpenPersonCenter: index => {
              this.openPc(index);
            },
            onOpenBankPanel: () => {
              this.openBank();
            },
            onOpenMailPanel: function () {
              var _onOpenMailPanel = _asyncToGenerator(function* () {
                var mailBoxViewModel = new (_crd && MailBoxViewModel === void 0 ? (_reportPossibleCrUseOfMailBoxViewModel({
                  error: Error()
                }), MailBoxViewModel) : MailBoxViewModel)().mountView((yield (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                  error: Error()
                }), PrefabPathDefine) : PrefabPathDefine)._HELL_MAIL, Prefab)).source).appendTo(_this.viewNode, {
                  effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                    error: Error()
                  }), EffectType) : EffectType).EFFECT1,
                  isModal: true
                }).setEvent({
                  onCloseHandler: () => {
                    mailBoxViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                      error: Error()
                    }), EffectType) : EffectType).EFFECT2);
                  }
                });
              });

              function onOpenMailPanel() {
                return _onOpenMailPanel.apply(this, arguments);
              }

              return onOpenMailPanel;
            }(),
            onOpenShopPanel: () => {
              this.openShop();
            },
            onOpenWithdrawalPanel: () => {
              var withdrawalViewModel = new (_crd && WithdrawalViewModel === void 0 ? (_reportPossibleCrUseOfWithdrawalViewModel({
                error: Error()
              }), WithdrawalViewModel) : WithdrawalViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                error: Error()
              }), PrefabPathDefine) : PrefabPathDefine).HELL_WITHDRAWAL).source).appendTo(this.viewNode, {
                effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).EFFECT1,
                isModal: true
              }).setEvent({
                onClosePanel: () => {
                  withdrawalViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                    error: Error()
                  }), EffectType) : EffectType).EFFECT2);
                }
              }).connect();
            },
            onOpenBindPhonePanel: () => {
              this.openBindPhone();
            },
            onOpenUpgradePanel: () => {
              this.openUpgradePanel();
            },
            onOpenAwardPanel: () => {
              this.openAwardPanel();
            },
            onOpenGiftBoxanel: () => this.openGiftBoxanel(false),
            onOpenSignInPanel: () => this.openSign(),
            onOpenVipMainPanel: () => {
              this.openVipMain();
            },
            onOpenService: function () {
              var _onOpenService = _asyncToGenerator(function* () {
                _this.serviceVm = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
                  error: Error()
                }), BaseViewModel) : BaseViewModel)('Hall_Service').mountView((yield (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                  error: Error()
                }), PrefabPathDefine) : PrefabPathDefine)._HELL_SERVICE_WEBVIEW, Prefab)).source).appendTo(_this.viewNode, {
                  effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                    error: Error()
                  }), EffectType) : EffectType).EFFECT1,
                  isModal: true
                }).setEvent({
                  onClosePanel: () => {
                    _this.serviceVm.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                      error: Error()
                    }), EffectType) : EffectType).EFFECT2);
                  }
                }).setProps({
                  openUrl: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                    error: Error()
                  }), config) : config).customerUrl + "?nc=" + _this.comp.props.nickName
                });
              });

              function onOpenService() {
                return _onOpenService.apply(this, arguments);
              }

              return onOpenService;
            }()
          });
          var isGuide = sys.os === sys.OS.ANDROID && (_crd && getPackageName === void 0 ? (_reportPossibleCrUseOfgetPackageName({
            error: Error()
          }), getPackageName) : getPackageName)() === 'web' || sys.os === sys.OS.IOS && !window.navigator['standalone'] || sys.os === sys.OS.OSX || sys.os === sys.OS.WINDOWS;

          if (isGuide) {
            (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync(sys.os === sys.OS.IOS ? (_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine)._HELL_APP_DOWNLOAD_PANEL_IOS : (_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine)._HELL_APP_DOWNLOAD_PANEL, Prefab).then(file => {
              var appDownLoadVM = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
                error: Error()
              }), BaseViewModel) : BaseViewModel)('Hall_AppDownLoadGuide').mountView(file.source).appendTo(this.viewNode).setEvent({
                preGoToDownLoad: () => ""
              });
            });
          }

          this.bingFcmToken();
          this.initActivityUnreadStatus();
        }

        unMountCallBack() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).removeById("main");
          this.personCenterViewModel && this.personCenterViewModel.unMount();
        }

        logOut(isForce) {
          if (isForce === void 0) {
            isForce = false;
          }
        }
        /**打开手机绑定框 */


        openBindPhone(nodeWrap) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var bindPhoneViewModel = new (_crd && BindPhoneViewModel === void 0 ? (_reportPossibleCrUseOfBindPhoneViewModel({
              error: Error()
            }), BindPhoneViewModel) : BindPhoneViewModel)().mountView((yield (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine)._HELL_BIND_PHONE, Prefab)).source).appendTo(nodeWrap || _this2.parentNode, {
              effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT1,
              isModal: true
            }).setEvent({
              onClosePanel: () => {
                bindPhoneViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).EFFECT1);
              }
            }).connect();
          })();
        }
        /**打开升级框 */


        openUpgradePanel(nodeWrap, closeHandler) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (!_this3.comp.props.tourist) {
              closeHandler && closeHandler();
              return;
            }

            var upgradeViewModel = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
              error: Error()
            }), BaseViewModel) : BaseViewModel)('Hall_Upgrade').mountView((yield (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine)._HELL_UPGRADE, Prefab)).source).appendTo(nodeWrap || _this3.parentNode, {
              effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT1,
              isModal: true
            }).setEvent({
              onClosePanel: () => upgradeViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT1).then(() => closeHandler && closeHandler()),
              doneHandler: () => {
                (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                  error: Error()
                }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                  error: Error()
                }), SKT_MAG_TYPE) : SKT_MAG_TYPE).MEMBER_INFO, {});
                upgradeViewModel.unMount();
              }
            }).setProps({
              memberId: _this3.comp.props.memberId
            });
          })();
        }
        /**打开修改密码框 */


        openChangePassword(nodeWrap) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var changePwdViewModel = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
              error: Error()
            }), BaseViewModel) : BaseViewModel)('Hall_ChangePassword').mountView((yield (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine)._HELL_CHANGE_PASSWORD, Prefab)).source).appendTo(nodeWrap || _this4.parentNode, {
              effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT1,
              isModal: true
            }).setEvent({
              onClosePanel: () => changePwdViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT1),
              doneHandler: () => changePwdViewModel.unMount()
            });
          })();
        }
        /**打开活动面板 */


        openAwardPanel(closeHandler) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            var activityViewModel = new (_crd && ActivityViewModel === void 0 ? (_reportPossibleCrUseOfActivityViewModel({
              error: Error()
            }), ActivityViewModel) : ActivityViewModel)().mountView((yield (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine)._HELL_ACTIVITY, Prefab)).source).appendTo(_this5.viewNode, {
              effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT1,
              isModal: true
            }).setEvent({
              onClosePanel: () => {
                activityViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).EFFECT2).then(() => {
                  closeHandler && closeHandler();
                });
              }
            }).connect();
          })();
        }

        openShop(defaultBuyType, nodeWrap, closeHandler) {
          if (defaultBuyType === void 0) {
            defaultBuyType = (_crd && BuyType === void 0 ? (_reportPossibleCrUseOfBuyType({
              error: Error()
            }), BuyType) : BuyType).COIN;
          }

          this.isOpenShop = true;
          var shopViewModel = new (_crd && ShopViewModel === void 0 ? (_reportPossibleCrUseOfShopViewModel({
            error: Error()
          }), ShopViewModel) : ShopViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).HELL_SHOP).source).appendTo(nodeWrap || this.parentNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: true
          }).setProps({
            defaultBuyType
          }).setEvent({
            onClosePanel: () => {
              this.isOpenShop = false;
              shopViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT2).then(() => closeHandler && closeHandler());
            }
          }).connect();
        }

        openPc(index, nodeWrap) {
          if (index === void 0) {
            index = 1;
          }

          this.personCenterViewModel = new (_crd && PersonCenterViewModel === void 0 ? (_reportPossibleCrUseOfPersonCenterViewModel({
            error: Error()
          }), PersonCenterViewModel) : PersonCenterViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).PC_MAIN_PANEL).source).appendTo(nodeWrap || this.parentNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: true
          }).setProps({
            profileShowIndex: index
          }).setEvent({
            onClosePanel: () => {
              this.personCenterViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT2);
            },
            goToShop: () => {
              this.openShop();
            },
            bindPhone: () => {
              this.openBindPhone();
            },
            openChangePwdPanel: () => {
              this.openChangePassword();
            },
            logOutHandler: () => {
              if (!this.comp.props.subGameInfo) {
                this.logOut();
              } else {
                this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                  error: Error()
                }), addToastAction) : addToastAction)({
                  content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                    error: Error()
                  }), lang) : lang).write(k => k.palyingModule.GameExit, {}, {
                    placeStr: "子游戏中不可以退出"
                  })
                }));
              }
            },
            openShareHelp: () => {
              this.onOpenShareHelp();
            },
            openShareSure: (actingId, promotionCode) => {
              this.onOpenShareSure(actingId, promotionCode);
            }
          }).connect();
        }

        openBank(nodeWrap) {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            if (!_this6.isTouristPass()) return;
            var bankViewModel = new (_crd && BankViewModel === void 0 ? (_reportPossibleCrUseOfBankViewModel({
              error: Error()
            }), BankViewModel) : BankViewModel)().mountView((yield (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine)._HELL_BANK, Prefab)).source).setEvent({
              onClosePanel: () => {
                bankViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).EFFECT2);
              },
              isMustSetPwd: () => {
                return new Promise((resolve, reject) => {
                  (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
                    error: Error()
                  }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
                    error: Error()
                  }), ApiUrl) : ApiUrl).IS_SET_PWD, {}, "get").then(rsp => {
                    resolve(rsp);
                  }).catch(e => {
                    reject(e);
                  });
                });
              }
            }).appendTo(nodeWrap || _this6.parentNode, {
              effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT1,
              isModal: true
            }).connect();
          })();
        }
        /**
         * 打开礼包弹出框
         * @param isDecideShow 是否还需要判断下自动弹出(数据无弹出标识，就不弹出),此值为true时，第二个参数应该赋值，不然肯定弹窗
         * @param data 传入的数据，可选
         */


        openGiftBoxanel(isDecideShow, data) {
          if (this.giftBoxVM && !this.giftBoxVM.isUnMount) {
            //如果窗口已经是打开状态，不予执行
            return;
          } // if (isDecideShow && data && !data.some(i => i.separatePage === 1)) {


          if (isDecideShow && data && !data.filter(i => i.separatePage === 1).length) {
            //如果无数据就不自动弹
            return;
          }

          this.giftBoxVM = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
            error: Error()
          }), BaseViewModel) : BaseViewModel)('Hall_GiftBag').mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).HELL_GIFT_BAG).source).appendTo(this.viewNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: true
          }).setEvent({
            onClosePanel: () => {
              this.giftBoxVM.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT2);
            }
          }).setProps({
            giftList: data ? data.filter(i => i.separatePage === 1) : [],
            isAutoShowPopItem: isDecideShow
          });
        }
        /**打开签到页 */


        openSign(nodeWrap, closeHandler) {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            //这里有个巨坑，SignInViewModel的begin里面声明了close事件，所以直接链式申明起不到作用,Jacky布的坑
            // sourceManageSeletor().getFileAsync(PrefabPathDefine._HELL_SIGN_IN, Prefab).then((source) => {
            // 	const signInViewModel = new SignInViewModel().mountView(source)
            // 	.appendTo(nodeWrap || this.parentNode, { effectType: EffectType.EFFECT1, isModal: true })
            // 	.setEvent({
            // 		close: () => {
            // 			signInViewModel.unMount(EffectType.EFFECT2);
            // 			closeHandler && closeHandler()
            // 		}
            // 	}).connect()
            // })
            var signInViewModel = new (_crd && SignInViewModel === void 0 ? (_reportPossibleCrUseOfSignInViewModel({
              error: Error()
            }), SignInViewModel) : SignInViewModel)().mountView((yield (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine)._HELL_SIGN_IN, Prefab)).source).appendTo(nodeWrap || _this7.parentNode, {
              effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT1,
              isModal: true
            }).setEvent({
              close: () => {
                signInViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).EFFECT2);
                closeHandler && closeHandler();
              }
            }).connect();
          })();
        }

        openVipUp(nodeWrap) {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            new (_crd && VipUpViewModel === void 0 ? (_reportPossibleCrUseOfVipUpViewModel({
              error: Error()
            }), VipUpViewModel) : VipUpViewModel)().mountView((yield (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine)._HELL_VIP_UP, Prefab)).source).appendTo(nodeWrap || _this8.parentNode, {
              isModal: true
            }).connect();
          })();
        }

        openVipMain(nodeWrap) {
          var _this9 = this;

          return _asyncToGenerator(function* () {
            new (_crd && VipMainViewModel === void 0 ? (_reportPossibleCrUseOfVipMainViewModel({
              error: Error()
            }), VipMainViewModel) : VipMainViewModel)().mountView((yield (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine)._HELL_VIP_MAIN, Prefab)).source).appendTo(nodeWrap || _this9.parentNode, {
              effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT1,
              isModal: true
            }).connect();
          })();
        }

        onOpenShareHelp(nodeWrap) {
          this.dispatch((_crd && changeWebView === void 0 ? (_reportPossibleCrUseOfchangeWebView({
            error: Error()
          }), changeWebView) : changeWebView)(false));
          (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine)._SHARE_HELP, Prefab).then(file => {
            new (_crd && ShareHelpViewModel === void 0 ? (_reportPossibleCrUseOfShareHelpViewModel({
              error: Error()
            }), ShareHelpViewModel) : ShareHelpViewModel)().mountView(file.source).appendTo(nodeWrap || this.parentNode, {
              effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT1,
              isModal: true
            }).connect();
          });
        }
        /**打开救济金面板 */


        openReliefPanel() {
          var _this10 = this;

          if ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).relief > this.comp.props.memberAssetGoldPieces) {
            (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
              error: Error()
            }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
              error: Error()
            }), ApiUrl) : ApiUrl).BENEFIT, undefined, undefined, undefined, {
              isLoading: false
            }).then( /*#__PURE__*/_asyncToGenerator(function* (data) {
              if (data !== -1) {
                var reLiefPanel = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
                  error: Error()
                }), BaseViewModel) : BaseViewModel)('Hall_ReliefPanel').mountView((yield (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                  error: Error()
                }), PrefabPathDefine) : PrefabPathDefine)._HELL_RE_LIEF, Prefab)).source).appendTo(_this10.parentNode, {
                  effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                    error: Error()
                  }), EffectType) : EffectType).EFFECT1,
                  isModal: true
                }).setEvent({
                  onClosePanel: () => {
                    reLiefPanel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                      error: Error()
                    }), EffectType) : EffectType).EFFECT2);
                  }
                }).setProps({
                  amount: data
                });
              }
            })).catch(() => {});
          }
        }
        /**是否游客验证 */


        isTouristPass() {
          if (this.comp.props.tourist) {
            this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
              error: Error()
            }), addToastAction) : addToastAction)({
              content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.HallModule.CantEditProfile, {}, {
                placeStr: "对不起，请认证用户资料再操作"
              })
            }));
            this.openUpgradePanel();
            return false;
          }

          return true;
        }
        /**
         * 打开绑定代理确认窗口
         * @param actingId 输入的推荐码
         * @param promotionCode 自己的推荐码
         * @param nodeWrap 
         * @returns 
         */


        onOpenShareSure(actingId, promotionCode, nodeWrap) {
          if (actingId === promotionCode) {
            this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
              error: Error()
            }), addToastAction) : addToastAction)({
              content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.MainPaneModule.MainPanelCodeError, {}, {
                placeStr: "不能输入自己的推荐码"
              }),
              type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                error: Error()
              }), ToastType) : ToastType).NORMAL
            }));
            return;
          }

          (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
            error: Error()
          }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
            error: Error()
          }), ApiUrl) : ApiUrl).RECOMMEND_MEMBER_INFO, {
            promotionCode: actingId
          }, "post").then(rsp => {
            if (!rsp || !rsp.memberId) {
              this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.MainPaneModule.MainPanelPromotion, {}, {
                  placeStr: "推荐人不存在"
                }),
                type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                  error: Error()
                }), ToastType) : ToastType).NORMAL
              }));
              return;
            }

            this.dispatch((_crd && changeWebView === void 0 ? (_reportPossibleCrUseOfchangeWebView({
              error: Error()
            }), changeWebView) : changeWebView)(false));
            (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine)._SHARE_SURE, Prefab).then(file => {
              new (_crd && ShareSureViewModel === void 0 ? (_reportPossibleCrUseOfShareSureViewModel({
                error: Error()
              }), ShareSureViewModel) : ShareSureViewModel)().mountView(file.source).appendTo(nodeWrap || this.parentNode, {
                effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).EFFECT1,
                isModal: true
              }).connect().setProps({
                avatarIndex: rsp.avatarIndex,
                nickName: rsp.nickName,
                memberId: rsp.memberId,
                actingId
              });
            });
          }).catch(e => {//this.dispatch(addToastAction({ content: e }))
          });
        }
        /**充值回调处理 */


        rechangeCallbackHandle(data) {
          if (data.orderOperations === 2) {
            (_crd && purchaseAppsflyerEvents === void 0 ? (_reportPossibleCrUseOfpurchaseAppsflyerEvents({
              error: Error()
            }), purchaseAppsflyerEvents) : purchaseAppsflyerEvents)(data.rechargeAmount, data.currency, data.isFirstRecharge);
          } else if (data.orderOperations === 1) {
            (_crd && pullPurchaseEvents === void 0 ? (_reportPossibleCrUseOfpullPurchaseEvents({
              error: Error()
            }), pullPurchaseEvents) : pullPurchaseEvents)(data.rechargeAmount, data.currency, data.isFirstRecharge);
          }
        }

        /**绑定token */
        bingFcmToken() {
          if (!NATIVE) {
            return;
          }

          var memberId = this.comp.props.memberId; // 加盐密钥

          var salt = "HuGe:UBGFlKh3DcU5uO76";
          var token = (_crd && getFirebaseToken === void 0 ? (_reportPossibleCrUseOfgetFirebaseToken({
            error: Error()
          }), getFirebaseToken) : getFirebaseToken)();
          var keys = (_crd && md5 === void 0 ? (_reportPossibleCrUseOfmd({
            error: Error()
          }), md5) : md5)(memberId + salt);
          console.log("fcm keys " + keys + ", memberId: " + memberId + ", token: " + token);

          if (memberId && token) {
            (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
              error: Error()
            }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
              error: Error()
            }), ApiUrl) : ApiUrl).FCM_TOKEN_BIND, {
              keys: keys,
              memberId: memberId,
              token: token
            }, "post").then(rsp => {
              console.log("fcm bind firebase token success");
            }).catch(e => {
              console.log("fcm bind firebase token failed!!", e);
            });
          } else {
            // 重试超过5次就不处理了
            this.retryCount < 5 && this.comp.scheduleOnce(() => {
              this.retryCount++;
              console.log("fcm bind firebase token retry get!! retryCount: " + this.retryCount);
              this.bingFcmToken();
            }, 5);
          }
        }

        initActivityUnreadStatus() {
          new (_crd && ActivityViewModel === void 0 ? (_reportPossibleCrUseOfActivityViewModel({
            error: Error()
          }), ActivityViewModel) : ActivityViewModel)().initReadStatus();
        }

        connect() {
          this.inject({}, state => {
            return {
              memberAssetGoldPieces: state.memberInfo.memberAssetGoldPieces,
              nickName: state.memberInfo.nickName,
              avatarIndex: state.memberInfo.avatarIndex,
              vipLevel: state.memberInfo.vipLevel,
              level: state.memberInfo.level,
              subGameInfo: state.baseBoard.subGameInfo,
              tourist: state.memberInfo.tourist,
              memberId: state.memberInfo.memberId,
              memberName: state.memberInfo.memberName,
              isConnect: state.baseBoard.isConnect,
              retryConnectTimes: state.baseBoard.retryConnectTimes,
              appDownLoadGuide: state.baseBoard.appDownLoadGuide,
              isUnreadActivity: state.memberInfo.isUnreadActivity
            };
          });
          return this;
        }

      };

      _export("default", MainPanelViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0b935ef23ee405902530ad832fbaef0521655e05.js.map