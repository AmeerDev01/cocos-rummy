System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, ViewModel, ApiUrl, addToastAction, fetcher, lang, deviceInfo, getPackageName, loginEvents, LoginDialogV2ViewModel, _crd;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_LoginDialogV(extras) {
    _reporterNs.report("Hall_LoginDialogV2", "../../components/login_v2/Hall_LoginDialogV2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../../components/login_v2/Hall_LoginDialogV2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../../components/login_v2/Hall_LoginDialogV2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../../apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOffetcher(extras) {
    _reporterNs.report("fetcher", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdeviceInfo(extras) {
    _reporterNs.report("deviceInfo", "../../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetPackageName(extras) {
    _reporterNs.report("getPackageName", "../../../common/bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloginEvents(extras) {
    _reporterNs.report("loginEvents", "../../../common/bridge", _context.meta, extras);
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
      ApiUrl = _unresolved_3.ApiUrl;
    }, function (_unresolved_4) {
      addToastAction = _unresolved_4.addToastAction;
    }, function (_unresolved_5) {
      fetcher = _unresolved_5.fetcher;
    }, function (_unresolved_6) {
      lang = _unresolved_6.lang;
    }, function (_unresolved_7) {
      deviceInfo = _unresolved_7.deviceInfo;
    }, function (_unresolved_8) {
      getPackageName = _unresolved_8.getPackageName;
      loginEvents = _unresolved_8.loginEvents;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "98a3e0DagdDbJDUiq0vbLHT", "LoginDialogV2ViewModel", undefined);

      __checkObsolete__(['Node', 'sys']);

      LoginDialogV2ViewModel = class LoginDialogV2ViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Hall_LoginDialogV2');
        }

        begin() {
          this.setProps({});
          this.setEvent({
            loginHandler: (loginName, password, done) => {
              (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
                error: Error()
              }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
                error: Error()
              }), ApiUrl) : ApiUrl).LOGIN_PWD, {
                type: 4,
                memberName: loginName,
                password,
                macCode: (_crd && deviceInfo === void 0 ? (_reportPossibleCrUseOfdeviceInfo({
                  error: Error()
                }), deviceInfo) : deviceInfo).getUniqueId(),
                pkgCode: (_crd && getPackageName === void 0 ? (_reportPossibleCrUseOfgetPackageName({
                  error: Error()
                }), getPackageName) : getPackageName)()
              }).then(data => {
                const values = data.split(",");
                let token = values.length === 1 ? data : values[0]; //登录成功

                sys.localStorage.setItem('token', token);
                this.comp.events.loginDoneHandler();
                done && done(true); //登录成功发送事件

                (_crd && loginEvents === void 0 ? (_reportPossibleCrUseOfloginEvents({
                  error: Error()
                }), loginEvents) : loginEvents)(loginName);
              }).catch(e => {
                done && done(false);
                console.log(e);
              });
            },
            sendSmsHandler: phoneNumber => {
              this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.BindPhoneModule.BindPhoneSend, {}, {
                  placeStr: "验证信息已经发送，请注意查收"
                })
              })); // Fetcher.Instance<Fetcher<ApiUrl>>().send(ApiUrl.SEND_SMS, { phone: phoneNumber }).then((rsp) => {
              //   this.dispatch(addToastAction({ content: `验证信息已经发送，请注意查收` }))
              //   this.setProps({ smsCode: rsp })
              // }).catch((e) => {
              //   console.log(e)
              // })
            }
          });
        }

        connect(initProps = {}) {
          this.inject(initProps, state => {
            return {};
          });
          return this;
        }

      };

      _export("default", LoginDialogV2ViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7f151bdfdaa8efc62930cf26f445a66eaab66879.js.map