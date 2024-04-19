System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, ApiUrl, ToastType, addToastAction, SKT_MAG_TYPE, sktInstance, sktMsgListener, fetcher, lang, BindPhoneViewModel, _crd;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_BindPhonePanel(extras) {
    _reporterNs.report("Hall_BindPhonePanel", "../components/Hall_BindPhonePanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Hall_BindPhonePanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Hall_BindPhonePanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastType(extras) {
    _reporterNs.report("ToastType", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../store/actions/baseBoard", _context.meta, extras);
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

  function _reportPossibleCrUseOffetcher(extras) {
    _reporterNs.report("fetcher", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../index", _context.meta, extras);
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
    }, function (_unresolved_3) {
      ApiUrl = _unresolved_3.ApiUrl;
    }, function (_unresolved_4) {
      ToastType = _unresolved_4.ToastType;
      addToastAction = _unresolved_4.addToastAction;
    }, function (_unresolved_5) {
      SKT_MAG_TYPE = _unresolved_5.SKT_MAG_TYPE;
      sktInstance = _unresolved_5.sktInstance;
      sktMsgListener = _unresolved_5.sktMsgListener;
    }, function (_unresolved_6) {
      fetcher = _unresolved_6.fetcher;
      lang = _unresolved_6.lang;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6e164PqHitKPaRDBkcT63ff", "BindPhoneViewModel", undefined);

      __checkObsolete__(['Node']);

      BindPhoneViewModel = class BindPhoneViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Hall_BindPhonePanel');
        }

        begin() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).MODIFY_BIND_PHONE, 'bindPhone', () => {
            this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
              error: Error()
            }), addToastAction) : addToastAction)({
              content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.BindPhoneModule.BindPhoneChange, {}, {
                placeStr: "修改成功~"
              }),
              type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                error: Error()
              }), ToastType) : ToastType).SUCCESS
            }));
            this.comp.events.onClosePanel();
          });
          this.setEvent({
            sendSmsCode: phoneNumber => {
              return new Promise((reslove, reject) => {
                (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
                  error: Error()
                }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
                  error: Error()
                }), ApiUrl) : ApiUrl).SEND_SMS, {
                  phone: phoneNumber
                }).then(rsp => {
                  this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                    error: Error()
                  }), addToastAction) : addToastAction)({
                    content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                      error: Error()
                    }), lang) : lang).write(k => k.BindPhoneModule.BindPhoneSend, {}, {
                      placeStr: "验证信息已经发送，请注意查收"
                    })
                  }));
                  reslove(rsp);
                }).catch(e => {
                  this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                    error: Error()
                  }), addToastAction) : addToastAction)({
                    content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                      error: Error()
                    }), lang) : lang).write(k => k.BindPhoneModule.BindPhonesSendError, {}, {
                      placeStr: "请求失败：${e}"
                    })
                  }));
                  reject(e);
                });
              });
            },
            modifyPhoneDone: (phoneNumber, verificationCode) => {
              (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                error: Error()
              }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                error: Error()
              }), SKT_MAG_TYPE) : SKT_MAG_TYPE).MODIFY_BIND_PHONE, {
                phone: phoneNumber,
                verificationCode
              });
            }
          });
        }

        unMountCallBack() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).removeById("bindPhone");
        }

        connect() {
          const storeState = this.store.getState();
          this.inject({
            phone: storeState.memberInfo.phone
          }, state => {
            return {
              phone: state.memberInfo.phone
            };
          });
          return this;
        }

      };

      _export("default", BindPhoneViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9ade3949e3e793718c31b2b0aaf5f610c3176521.js.map