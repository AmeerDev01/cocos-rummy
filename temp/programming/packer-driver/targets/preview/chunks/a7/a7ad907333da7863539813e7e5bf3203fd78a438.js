System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, sys, ViewModel, LoginType, EffectType, ApiUrl, addToastAction, ResetPasswordViewModel, fetcher, sourceManageSeletor, PrefabPathDefine, InputValidator, lang, deviceInfo, getPackageName, LoginViewDialogModel, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_LoginDialog(extras) {
    _reporterNs.report("Hall_LoginDialog", "../components/Hall_LoginDialog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Hall_LoginDialog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginType(extras) {
    _reporterNs.report("LoginType", "../components/Hall_LoginDialog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Hall_LoginDialog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResetPasswordViewModel(extras) {
    _reporterNs.report("ResetPasswordViewModel", "./ResetPasswordViewModel", _context.meta, extras);
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

  function _reportPossibleCrUseOfInputValidator(extras) {
    _reporterNs.report("InputValidator", "../../utils/InputValidator", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdeviceInfo(extras) {
    _reporterNs.report("deviceInfo", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetPackageName(extras) {
    _reporterNs.report("getPackageName", "../../common/bridge", _context.meta, extras);
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
      LoginType = _unresolved_3.LoginType;
    }, function (_unresolved_4) {
      EffectType = _unresolved_4.EffectType;
    }, function (_unresolved_5) {
      ApiUrl = _unresolved_5.ApiUrl;
    }, function (_unresolved_6) {
      addToastAction = _unresolved_6.addToastAction;
    }, function (_unresolved_7) {
      ResetPasswordViewModel = _unresolved_7.default;
    }, function (_unresolved_8) {
      fetcher = _unresolved_8.fetcher;
      sourceManageSeletor = _unresolved_8.sourceManageSeletor;
    }, function (_unresolved_9) {
      PrefabPathDefine = _unresolved_9.PrefabPathDefine;
    }, function (_unresolved_10) {
      InputValidator = _unresolved_10.default;
    }, function (_unresolved_11) {
      lang = _unresolved_11.lang;
    }, function (_unresolved_12) {
      deviceInfo = _unresolved_12.deviceInfo;
    }, function (_unresolved_13) {
      getPackageName = _unresolved_13.getPackageName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a3eedLqdPJNd4uNHbUm67fc", "LoginViewDialogModel", undefined);

      __checkObsolete__(['Node', 'Prefab', 'sys']);

      LoginViewDialogModel = class LoginViewDialogModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Hall_LoginDialog');
        }

        begin() {
          var _this = this;

          this.setProps({});
          this.setEvent({
            loginHandler: (showLoginType, loginData) => {
              // this.dispatch(addToastAction({ content: "输入有误" }))
              var paramData = {
                type: showLoginType,
                phone: loginData.number,
                promotionCode: loginData.promotionCode,
                memberName: '',
                password: '',
                pkgCode: (_crd && getPackageName === void 0 ? (_reportPossibleCrUseOfgetPackageName({
                  error: Error()
                }), getPackageName) : getPackageName)(),
                macCode: (_crd && deviceInfo === void 0 ? (_reportPossibleCrUseOfdeviceInfo({
                  error: Error()
                }), deviceInfo) : deviceInfo).getUniqueId()
              };

              if (showLoginType === (_crd && LoginType === void 0 ? (_reportPossibleCrUseOfLoginType({
                error: Error()
              }), LoginType) : LoginType).PASSWORD) {
                // Object.assign(paramData, { password: loginData.authStr })
                Object.assign(paramData, {
                  memberName: loginData.number,
                  password: loginData.authStr
                });
              } else if (showLoginType === (_crd && LoginType === void 0 ? (_reportPossibleCrUseOfLoginType({
                error: Error()
              }), LoginType) : LoginType).PHONE) {
                Object.assign(paramData, {
                  verificationCode: loginData.authStr
                });
              }

              new (_crd && InputValidator === void 0 ? (_reportPossibleCrUseOfInputValidator({
                error: Error()
              }), InputValidator) : InputValidator)().begin().isPhoneNumber(paramData.phone).done(() => {
                (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
                  error: Error()
                }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
                  error: Error()
                }), ApiUrl) : ApiUrl).LOGIN_PWD, paramData).then(data => {
                  var values = data.split(",");
                  var token = values.length === 1 ? data : values[0]; //登录成功

                  sys.localStorage.setItem('token', token);
                  this.comp.events.loginDoneHandler();
                }).catch(e => {
                  console.log(e);
                });
              });
            },
            sendSmsHandler: phoneNumber => {
              this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.loginModule.LoginCode, {}, {
                  placeStr: "验证信息已经发送，请注意查收"
                })
              })); // Fetcher.Instance<Fetcher<ApiUrl>>().send(ApiUrl.SEND_SMS, { phone: phoneNumber }).then((rsp) => {
              //   this.dispatch(addToastAction({ content: `验证信息已经发送，请注意查收` }))
              //   this.setProps({ smsCode: rsp })
              // }).catch((e) => {
              //   console.log(e)
              // })
            },
            setPasswordHandler: function () {
              var _setPasswordHandler = _asyncToGenerator(function* () {
                var resetPasswordViewModel = new (_crd && ResetPasswordViewModel === void 0 ? (_reportPossibleCrUseOfResetPasswordViewModel({
                  error: Error()
                }), ResetPasswordViewModel) : ResetPasswordViewModel)().mountView((yield (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)("hall").getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                  error: Error()
                }), PrefabPathDefine) : PrefabPathDefine)._LOGIN_SET_PASSWORD, Prefab)).source).appendTo(_this.parentNode, {
                  effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                    error: Error()
                  }), EffectType) : EffectType).EFFECT1
                }).setEvent({
                  closeHandler: () => {
                    resetPasswordViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                      error: Error()
                    }), EffectType) : EffectType).EFFECT1);
                  },
                  pwdLoginSuccess: () => {
                    _this.comp.events.loginDoneHandler();
                  }
                }).connect();
              });

              function setPasswordHandler() {
                return _setPasswordHandler.apply(this, arguments);
              }

              return setPasswordHandler;
            }()
          });
        }

        connect(initProps) {
          if (initProps === void 0) {
            initProps = {};
          }

          this.inject(initProps, state => {
            return {};
          });
          return this;
        }

      };

      _export("default", LoginViewDialogModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a7ad907333da7863539813e7e5bf3203fd78a438.js.map