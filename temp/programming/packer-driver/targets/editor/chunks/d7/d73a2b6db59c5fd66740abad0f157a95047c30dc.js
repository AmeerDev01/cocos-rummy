System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ViewModel, ApiUrl, fetcher, changeGold, SignInViewModel, _crd;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_SignIn(extras) {
    _reporterNs.report("Hall_SignIn", "../components/Hall_SignIn", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Hall_SignIn", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Hall_SignIn", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeekType(extras) {
    _reporterNs.report("WeekType", "../components/Hall_SignIn", _context.meta, extras);
  }

  function _reportPossibleCrUseOffetcher(extras) {
    _reporterNs.report("fetcher", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeGold(extras) {
    _reporterNs.report("changeGold", "../store/actions/memberInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
    }, function (_unresolved_3) {
      ApiUrl = _unresolved_3.ApiUrl;
    }, function (_unresolved_4) {
      fetcher = _unresolved_4.fetcher;
    }, function (_unresolved_5) {
      changeGold = _unresolved_5.changeGold;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9074a4WVpdAqojphW6PpOCi", "SignInViewModel", undefined);

      SignInViewModel = class SignInViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Hall_SignIn');
        }

        begin() {
          this.getSignInList();
          this.setEvent({
            requestGetSignInList: () => {
              this.getSignInList();
            },
            requestSign: weekType => {
              this.signIn(weekType);
            },
            // close: () => {
            //   this.unMount(EffectType.EFFECT2);
            // },
            onChangeGold: value => {
              this.dispatch((_crd && changeGold === void 0 ? (_reportPossibleCrUseOfchangeGold({
                error: Error()
              }), changeGold) : changeGold)(value));
            }
          });
        }

        unMountCallBack() {}

        connect() {
          this.inject({}, state => {
            return {
              memberInfo: state.memberInfo
            };
          });
          return this;
        }

        getSignInList() {
          (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
            error: Error()
          }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
            error: Error()
          }), ApiUrl) : ApiUrl).GET_MEMBER_SIGN_IN_LIST, {}, "get").then(rsp => {
            this.setProps({
              signInDatas: rsp,
              signSuccess: false
            });
          }).catch(e => {//this.dispatch(addToastAction({ content: e }))
          });
        }

        signIn(weekType) {
          (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
            error: Error()
          }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
            error: Error()
          }), ApiUrl) : ApiUrl).SIGN_IN, {}, "post").then(rsp => {
            this.setProps({
              signSuccess: true
            });
          }).catch(e => {//this.dispatch(addToastAction({ content: e }))
          });
        }

      };

      _export("default", SignInViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d73a2b6db59c5fd66740abad0f157a95047c30dc.js.map