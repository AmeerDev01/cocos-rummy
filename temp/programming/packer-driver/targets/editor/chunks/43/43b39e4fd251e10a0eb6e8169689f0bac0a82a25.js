System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, ApiUrl, setWithdrawChannelList, fetcher, WithdrawBankViewModel, _crd;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_WithdrawBank(extras) {
    _reporterNs.report("Hall_WithdrawBank", "../components/Hall_Withdraw/Hall_WithdrawBank", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Hall_Withdraw/Hall_WithdrawBank", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Hall_Withdraw/Hall_WithdrawBank", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetWithdrawChannelList(extras) {
    _reporterNs.report("setWithdrawChannelList", "../store/actions/withdraw", _context.meta, extras);
  }

  function _reportPossibleCrUseOffetcher(extras) {
    _reporterNs.report("fetcher", "../index", _context.meta, extras);
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
      setWithdrawChannelList = _unresolved_4.setWithdrawChannelList;
    }, function (_unresolved_5) {
      fetcher = _unresolved_5.fetcher;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a48e5c8PmRMJI2aKak038Ub", "WithdrawBankViewModel", undefined);

      __checkObsolete__(['Node']);

      WithdrawBankViewModel = class WithdrawBankViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Hall_WithdrawBank');
        }

        begin() {}

        connect() {
          const storeState = this.store.getState();

          if (!storeState.withdraw.withdrawBankChannelList.length) {
            //还没有数据，就要先加载
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

          this.inject({
            withdrawBankChannelList: storeState.withdraw.withdrawBankChannelList
          }, state => {
            return {
              withdrawBankChannelList: state.withdraw.withdrawBankChannelList
            };
          });
          return this;
        }

      };

      _export("default", WithdrawBankViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=43b39e4fd251e10a0eb6e8169689f0bac0a82a25.js.map