System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, ViewModel, SKT_MAG_TYPE, sktInstance, sktMsgListener, InputValidator, ToastType, addToastAction, setLoadingAction, getStore, lang, ModalBox, ShopViewModel, _crd;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_ShopPanel(extras) {
    _reporterNs.report("Hall_ShopPanel", "../components/Hall_ShopPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Hall_ShopPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Hall_ShopPanel", _context.meta, extras);
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

  function _reportPossibleCrUseOfInputValidator(extras) {
    _reporterNs.report("InputValidator", "../../utils/InputValidator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastType(extras) {
    _reporterNs.report("ToastType", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetLoadingAction(extras) {
    _reporterNs.report("setLoadingAction", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
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
      sys = _cc.sys;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
    }, function (_unresolved_3) {
      SKT_MAG_TYPE = _unresolved_3.SKT_MAG_TYPE;
      sktInstance = _unresolved_3.sktInstance;
      sktMsgListener = _unresolved_3.sktMsgListener;
    }, function (_unresolved_4) {
      InputValidator = _unresolved_4.default;
    }, function (_unresolved_5) {
      ToastType = _unresolved_5.ToastType;
      addToastAction = _unresolved_5.addToastAction;
      setLoadingAction = _unresolved_5.setLoadingAction;
    }, function (_unresolved_6) {
      getStore = _unresolved_6.getStore;
    }, function (_unresolved_7) {
      lang = _unresolved_7.lang;
    }, function (_unresolved_8) {
      ModalBox = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "80937vRm7BGyKZUvpR+G/fy", "ShopViewModel", undefined);

      __checkObsolete__(['Node', 'sys']);

      ShopViewModel = class ShopViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Hall_ShopPanel');
          this.isDana = false;
        }

        begin() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GET_WITH_DRAW_CHANNEL, 'shop', data => {
            this.setProps({
              dataList: data
            });
            this.dispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
              error: Error()
            }), setLoadingAction) : setLoadingAction)({
              isShow: false
            }));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).RECHARGE_ORDER, 'shop', data => {
            this.dispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
              error: Error()
            }), setLoadingAction) : setLoadingAction)({
              isShow: false
            }));

            if (data) {
              if (!this.isDana) {
                //DANA渠道不支持ifream
                (_crd && ModalBox === void 0 ? (_reportPossibleCrUseOfModalBox({
                  error: Error()
                }), ModalBox) : ModalBox).Instance().show({
                  url: data
                });
              } else {
                sys.openURL(data);
              }
            } else {
              this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.WebSocketModule.WebSocketSendError, {}, {
                  placeStr: "network error"
                }),
                type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                  error: Error()
                }), ToastType) : ToastType).ERROR
              }));
            } // data && sys.openURL(data)
            // data && ModalBox.Instance().show({ url: data })

          });
          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GET_WITH_DRAW_CHANNEL, {}, {
            isLoading: true
          });
          this.setEvent({
            rechargeHandler: (channelItem, amount) => {
              this.isDana = channelItem.name === "DANA" ? true : false; // 暂时不限制游客充值
              // if (!baseBoardView.mainPanelViewModel.isTouristPass()) return

              new (_crd && InputValidator === void 0 ? (_reportPossibleCrUseOfInputValidator({
                error: Error()
              }), InputValidator) : InputValidator)().begin().isDecimal(amount, false).done(() => {
                (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                  error: Error()
                }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                  error: Error()
                }), SKT_MAG_TYPE) : SKT_MAG_TYPE).RECHARGE_ORDER, {
                  "rechargeChannelId": channelItem.id,
                  "money": amount
                }, {
                  isLoading: true
                }); // purchaseAppsflyerEvents(amount, 'IDR')
              });
            }
          });
        }

        unMountCallBack() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).removeById('shop');
        }

        connect() {
          this.inject({
            memberInfo: (_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
              error: Error()
            }), getStore) : getStore)().getState().memberInfo
          }, state => {
            return {
              memberInfo: state.memberInfo
            };
          });
          return this;
        }

      };

      _export("default", ShopViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=662abda18409b9363d44286f7b4a4001116e262e.js.map