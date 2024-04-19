System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, SKT_MAG_TYPE, sktInstance, ApiUrl, addToastAction, fetcher, lang, BankViewModel, _crd;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_BankPanel(extras) {
    _reporterNs.report("Hall_BankPanel", "../components/Hall_BankPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Hall_BankPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Hall_BankPanel", _context.meta, extras);
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

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../store/actions/baseBoard", _context.meta, extras);
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
      SKT_MAG_TYPE = _unresolved_3.SKT_MAG_TYPE;
      sktInstance = _unresolved_3.sktInstance;
    }, function (_unresolved_4) {
      ApiUrl = _unresolved_4.ApiUrl;
    }, function (_unresolved_5) {
      addToastAction = _unresolved_5.addToastAction;
    }, function (_unresolved_6) {
      fetcher = _unresolved_6.fetcher;
      lang = _unresolved_6.lang;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "221575NTGFEVq0ls3fE2rtT", "BankViewModel", undefined);

      __checkObsolete__(['Node']);

      BankViewModel = class BankViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Hall_BankPanel');
        }

        begin() {
          this.setEvent({
            verifyPwd: pwd => {
              return new Promise((resolve, reject) => {
                (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
                  error: Error()
                }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
                  error: Error()
                }), ApiUrl) : ApiUrl).VERIFY_BANK_PWD, {
                  data: pwd
                }).then(rsp => {
                  resolve(true);
                }).catch(e => {
                  reject(e);
                });
              });
            },
            setBankPassword: (loginPassword, safePassword) => {
              return new Promise((resolve, reject) => {
                (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
                  error: Error()
                }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
                  error: Error()
                }), ApiUrl) : ApiUrl).SET_BANK_PWD, {
                  loginPassword,
                  safePassword
                }).then(rsp => {
                  this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                    error: Error()
                  }), addToastAction) : addToastAction)({
                    content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                      error: Error()
                    }), lang) : lang).write(k => k.BankModule.BankPassword, {}, {
                      placeStr: "设置银行保险箱密码完成~"
                    })
                  }));
                  resolve(true);
                }).catch(e => {
                  reject(e);
                });
              });
            },
            transferCapital: (amount, direction) => {
              return new Promise((resolve, reject) => {
                (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
                  error: Error()
                }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
                  error: Error()
                }), ApiUrl) : ApiUrl).TRASFER_BANK_GLOD, {
                  assetGold: amount,
                  type: direction
                }).then(rsp => {
                  this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                    error: Error()
                  }), addToastAction) : addToastAction)({
                    content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                      error: Error()
                    }), lang) : lang).write(k => k.BankModule.BankTransfer, {}, {
                      placeStr: "保险箱金币转移完成~"
                    })
                  }));
                  (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                    error: Error()
                  }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                    error: Error()
                  }), SKT_MAG_TYPE) : SKT_MAG_TYPE).MEMBER_INFO, {}, {
                    isLoading: true
                  });
                  resolve(true);
                }).catch(e => {
                  reject(e);
                });
              });
            }
          });
        }

        connect() {
          this.inject({}, state => {
            return {
              memberAssetGoldPieces: state.memberInfo.memberAssetGoldPieces,
              memberAssetSafeGoldPieces: state.memberInfo.memberAssetSafeGoldPieces
            };
          });
          return this;
        }

      };

      _export("default", BankViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3dc9b99f1f552c5fed4f31781af806f13dafe6af.js.map