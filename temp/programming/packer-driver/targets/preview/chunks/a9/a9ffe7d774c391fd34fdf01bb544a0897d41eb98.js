System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, ViewModel, SKT_MAG_TYPE, sktInstance, sktMsgListener, baseBoardView, fetcher, sourceManageSeletor, PrefabPathDefine, EffectType, WithdrawBankViewModel, setWithdrawChannelList, sizeChangeAction, ApiUrl, addToastAction, BaseViewModel, lang, ModalBox, WithdrawalViewModel, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_WithdrawalPanel(extras) {
    _reporterNs.report("Hall_WithdrawalPanel", "../components/Hall_Withdraw/Hall_WithdrawalPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Hall_Withdraw/Hall_WithdrawalPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Hall_Withdraw/Hall_WithdrawalPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_WithdrawBankBind(extras) {
    _reporterNs.report("Hall_WithdrawBankBind", "../components/Hall_Withdraw/Hall_WithdrawBankBind", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBBIState(extras) {
    _reporterNs.report("BBIState", "../components/Hall_Withdraw/Hall_WithdrawBankBind", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBBIProps(extras) {
    _reporterNs.report("BBIProps", "../components/Hall_Withdraw/Hall_WithdrawBankBind", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBBIEvent(extras) {
    _reporterNs.report("BBIEvent", "../components/Hall_Withdraw/Hall_WithdrawBankBind", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
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

  function _reportPossibleCrUseOfbaseBoardView(extras) {
    _reporterNs.report("baseBoardView", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOffetcher(extras) {
    _reporterNs.report("fetcher", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWithdrawBankViewModel(extras) {
    _reporterNs.report("WithdrawBankViewModel", "./WithdrawBankViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetWithdrawChannelList(extras) {
    _reporterNs.report("setWithdrawChannelList", "../store/actions/withdraw", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsizeChangeAction(extras) {
    _reporterNs.report("sizeChangeAction", "../store/actions/withdraw", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWithdrawBankChannelType(extras) {
    _reporterNs.report("WithdrawBankChannelType", "../store/actions/withdraw", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseViewModel(extras) {
    _reporterNs.report("BaseViewModel", "../../common/viewModel/BaseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModalBox(extras) {
    _reporterNs.report("ModalBox", "../../common/ModalBox", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
    }, function (_unresolved_3) {
      SKT_MAG_TYPE = _unresolved_3.SKT_MAG_TYPE;
      sktInstance = _unresolved_3.sktInstance;
      sktMsgListener = _unresolved_3.sktMsgListener;
    }, function (_unresolved_4) {
      baseBoardView = _unresolved_4.baseBoardView;
      fetcher = _unresolved_4.fetcher;
      sourceManageSeletor = _unresolved_4.sourceManageSeletor;
    }, function (_unresolved_5) {
      PrefabPathDefine = _unresolved_5.PrefabPathDefine;
    }, function (_unresolved_6) {
      EffectType = _unresolved_6.EffectType;
    }, function (_unresolved_7) {
      WithdrawBankViewModel = _unresolved_7.default;
    }, function (_unresolved_8) {
      setWithdrawChannelList = _unresolved_8.setWithdrawChannelList;
      sizeChangeAction = _unresolved_8.sizeChangeAction;
    }, function (_unresolved_9) {
      ApiUrl = _unresolved_9.ApiUrl;
    }, function (_unresolved_10) {
      addToastAction = _unresolved_10.addToastAction;
    }, function (_unresolved_11) {
      BaseViewModel = _unresolved_11.default;
    }, function (_unresolved_12) {
      lang = _unresolved_12.lang;
    }, function (_unresolved_13) {
      ModalBox = _unresolved_13.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "842a44yYTJB87U5NU1HG/Rq", "WithdrawalViewModel", undefined);

      __checkObsolete__(['Node', 'Prefab', 'Sprite']);

      WithdrawalViewModel = class WithdrawalViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Hall_WithdrawalPanel');
          this.validFlowingWater = 0;
        }

        begin() {
          var _this = this;

          this.setEvent({
            openWithdrawBank: function () {
              var _openWithdrawBank = _asyncToGenerator(function* () {
                var withdrawBankViewModel = new (_crd && WithdrawBankViewModel === void 0 ? (_reportPossibleCrUseOfWithdrawBankViewModel({
                  error: Error()
                }), WithdrawBankViewModel) : WithdrawBankViewModel)().mountView((yield (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                  error: Error()
                }), PrefabPathDefine) : PrefabPathDefine)._HELL_WITHDRAWAL_BANK_LIST, Prefab)).source).appendTo(_this.parentNode, {
                  effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                    error: Error()
                  }), EffectType) : EffectType).EFFECT1,
                  isModal: true
                }).setEvent({
                  onCloseHandler: () => {
                    withdrawBankViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                      error: Error()
                    }), EffectType) : EffectType).EFFECT1);
                  },
                  onClickBankChannl: function () {
                    var _onClickBankChannl = _asyncToGenerator(function* (bankItem) {
                      var bankBindViewModel = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
                        error: Error()
                      }), BaseViewModel) : BaseViewModel)("Hall_WithdrawBankBind").mountView((yield (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                        error: Error()
                      }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync(bankItem.onlineBanking === 0 ? (_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                        error: Error()
                      }), PrefabPathDefine) : PrefabPathDefine)._HELL_WITHDRAW_WALLET_BIND : (_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                        error: Error()
                      }), PrefabPathDefine) : PrefabPathDefine)._HELL_WITHDRAW_BANK_BIND, Prefab)).source);
                      bankBindViewModel.appendTo(_this.parentNode, {
                        effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                          error: Error()
                        }), EffectType) : EffectType).EFFECT1,
                        isModal: true
                      }).setEvent({
                        onClosehandler: () => {
                          bankBindViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                            error: Error()
                          }), EffectType) : EffectType).EFFECT1);
                        },
                        onBindDone: (hadChooseBankChannl, accountNumber, realName) => {
                          if (!(_crd && baseBoardView === void 0 ? (_reportPossibleCrUseOfbaseBoardView({
                            error: Error()
                          }), baseBoardView) : baseBoardView).mainPanelViewModel.isTouristPass()) return;
                          (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
                            error: Error()
                          }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
                            error: Error()
                          }), ApiUrl) : ApiUrl).WITHDRAW_BIND_CARD, {
                            rechargeChannelId: hadChooseBankChannl.id,
                            accountNumber,
                            realName
                          }).then(data => {
                            if (data !== -1) {
                              (_crd && ModalBox === void 0 ? (_reportPossibleCrUseOfModalBox({
                                error: Error()
                              }), ModalBox) : ModalBox).Instance().show({
                                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                                  error: Error()
                                }), lang) : lang).write(k => k.withdrawal.withdrawalSuccess, {
                                  gold: data
                                }, {
                                  placeStr: "绑定提款信息成功获取金币"
                                }),
                                type: "Prompt"
                              }, () => {
                                //重新拉取数据
                                _this.refreshList();

                                bankBindViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                                  error: Error()
                                }), EffectType) : EffectType).EFFECT1);
                                return true;
                              });
                            } else {
                              _this.refreshList();

                              bankBindViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                                error: Error()
                              }), EffectType) : EffectType).EFFECT1);
                            }
                          }).catch(e => {
                            console.log(e);
                          });
                        }
                      }).setProps({
                        hadChooseBankChannl: bankItem
                      });

                      if (bankItem.bind) {//已绑定
                      }
                    });

                    function onClickBankChannl(_x) {
                      return _onClickBankChannl.apply(this, arguments);
                    }

                    return onClickBankChannl;
                  }(),
                  onBankChannlDone: bankItem => {
                    if (bankItem.bind) {
                      _this.dispatch((_crd && sizeChangeAction === void 0 ? (_reportPossibleCrUseOfsizeChangeAction({
                        error: Error()
                      }), sizeChangeAction) : sizeChangeAction)(bankItem));

                      withdrawBankViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                        error: Error()
                      }), EffectType) : EffectType).EFFECT1);
                    } else {
                      withdrawBankViewModel.comp.events.onClickBankChannl(bankItem); // this.dispatch(addToastAction({ content: "请选择已经绑定的渠道" }))
                    }
                  }
                }).connect();
              });

              function openWithdrawBank() {
                return _openWithdrawBank.apply(this, arguments);
              }

              return openWithdrawBank;
            }(),
            trueToWithdraw: function () {
              var _trueToWithdraw = _asyncToGenerator(function* (amount) {
                // 确认提现，先弹出信息展示框
                var storeState = _this.store.getState();

                var withDrawTip = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
                  error: Error()
                }), BaseViewModel) : BaseViewModel)("Hall_WithdrawTip").mountView((yield (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                  error: Error()
                }), PrefabPathDefine) : PrefabPathDefine)._HELL_WITHDRAW_TIPS, Prefab)).source).appendTo(_this.parentNode, {
                  effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                    error: Error()
                  }), EffectType) : EffectType).EFFECT1,
                  isModal: true
                }).setEvent({
                  onClosehandler: () => {
                    withDrawTip.unMount();
                  },
                  doneHandler: () => {
                    (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
                      error: Error()
                    }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
                      error: Error()
                    }), ApiUrl) : ApiUrl).WITHDRAW_ORDER, {
                      bankId: storeState.withdraw.withdrawBankChannelChoose.bankId,
                      money: amount
                    }).then(rsp => {
                      withDrawTip.unMount();

                      _this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                        error: Error()
                      }), addToastAction) : addToastAction)({
                        content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                          error: Error()
                        }), lang) : lang).write(k => k.HallModule.WithdrawalApply, {}, {
                          placeStr: "请求提交成功"
                        })
                      }));
                    });
                  }
                }).setProps({
                  iconName: storeState.withdraw.withdrawBankChannelChoose.name,
                  accountNumber: storeState.withdraw.withdrawBankChannelChoose.accountNumber,
                  withdrawAmount: amount,
                  accountName: storeState.withdraw.withdrawBankChannelChoose.realName,
                  withdrawalPremium: storeState.withdraw.withdrawBankChannelChoose.withdrawalPremium,
                  logUrl: storeState.withdraw.withdrawBankChannelChoose.iconMax
                });
              });

              function trueToWithdraw(_x2) {
                return _trueToWithdraw.apply(this, arguments);
              }

              return trueToWithdraw;
            }(),
            openWithdrawBill: function () {
              var _openWithdrawBill = _asyncToGenerator(function* () {
                var withDrawTip = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
                  error: Error()
                }), BaseViewModel) : BaseViewModel)("Hall_WithdrawBill").mountView((yield (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                  error: Error()
                }), PrefabPathDefine) : PrefabPathDefine)._HELL_WITHDRAW_BILL, Prefab)).source).appendTo(_this.parentNode, {
                  effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                    error: Error()
                  }), EffectType) : EffectType).EFFECT1,
                  isModal: true
                }).setEvent({
                  onClosehandler: () => {
                    withDrawTip.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                      error: Error()
                    }), EffectType) : EffectType).EFFECT2);
                  }
                }); //提现列表

                (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
                  error: Error()
                }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
                  error: Error()
                }), ApiUrl) : ApiUrl).USER_ORDER_LIST, {
                  data: 2
                }).then( /*#__PURE__*/_asyncToGenerator(function* (rsp) {
                  withDrawTip.setProps({
                    orderList: rsp
                  });
                })).catch(e => {
                  console.log(e);
                });
              });

              function openWithdrawBill() {
                return _openWithdrawBill.apply(this, arguments);
              }

              return openWithdrawBill;
            }()
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).WITH_DRAW_LIST, "withdraw", data => {
            this.comp.addWithdrawBill(data);
          });
          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).WITH_DRAW_LIST);
        }

        refreshList() {
          //重新拉取数据
          (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
            error: Error()
          }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
            error: Error()
          }), ApiUrl) : ApiUrl).WITHDRAW_BANK_CHANNEL_LIST, {}, "get").then(rsp => {
            this.dispatch((_crd && setWithdrawChannelList === void 0 ? (_reportPossibleCrUseOfsetWithdrawChannelList({
              error: Error()
            }), setWithdrawChannelList) : setWithdrawChannelList)(rsp));
          }).catch(e => {
            console.log(e);
          });
        }

        unMountCallBack() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).removeById('withdraw');
        }

        connect() {
          var storeState = this.store.getState();
          this.inject({
            memberAssetGoldPieces: storeState.memberInfo.memberAssetGoldPieces,
            withdrawBankChannelChoose: storeState.withdraw.withdrawBankChannelChoose
          }, state => {
            // this.validFlowingWater = state.memberInfo.flowingWater
            return {
              memberAssetGoldPieces: state.memberInfo.memberAssetGoldPieces,
              withdrawBankChannelChoose: state.withdraw.withdrawBankChannelChoose,
              validFlowingWater: state.memberInfo.flowingWater
            };
          });
          return this;
        }

      };

      _export("default", WithdrawalViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a9ffe7d774c391fd34fdf01bb544a0897d41eb98.js.map