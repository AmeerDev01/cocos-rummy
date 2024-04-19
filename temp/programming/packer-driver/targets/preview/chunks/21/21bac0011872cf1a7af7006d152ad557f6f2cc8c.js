System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, sys, ViewModel, LoginDialogV2ViewModel, fetcher, lang, sourceManageSeletor, PrefabPathDefine, EffectType, addToastAction, ApiUrl, getPackageName, registerAppsflyerEvents, sendNativeVibrate, BaseViewModel, config, deviceInfo, ActivityViewModel, LoginPageV2ViewModel, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_LoginPageV(extras) {
    _reporterNs.report("Hall_LoginPageV2", "../../components/login_v2/Hall_LoginPageV2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../../components/login_v2/Hall_LoginPageV2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../../components/login_v2/Hall_LoginPageV2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginDialogV2ViewModel(extras) {
    _reporterNs.report("LoginDialogV2ViewModel", "./LoginDialogV2ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOffetcher(extras) {
    _reporterNs.report("fetcher", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../../apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetPackageName(extras) {
    _reporterNs.report("getPackageName", "../../../common/bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfregisterAppsflyerEvents(extras) {
    _reporterNs.report("registerAppsflyerEvents", "../../../common/bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsendNativeVibrate(extras) {
    _reporterNs.report("sendNativeVibrate", "../../../common/bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseViewModel(extras) {
    _reporterNs.report("BaseViewModel", "../BaseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_Service(extras) {
    _reporterNs.report("Hall_Service", "../../components/Hall_Service", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSIState(extras) {
    _reporterNs.report("SIState", "../../components/Hall_Service", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSIProps(extras) {
    _reporterNs.report("SIProps", "../../components/Hall_Service", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSIEvent(extras) {
    _reporterNs.report("SIEvent", "../../components/Hall_Service", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdeviceInfo(extras) {
    _reporterNs.report("deviceInfo", "../../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityViewModel(extras) {
    _reporterNs.report("ActivityViewModel", "../ActivityViewModel", _context.meta, extras);
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
      LoginDialogV2ViewModel = _unresolved_3.default;
    }, function (_unresolved_4) {
      fetcher = _unresolved_4.fetcher;
      lang = _unresolved_4.lang;
      sourceManageSeletor = _unresolved_4.sourceManageSeletor;
    }, function (_unresolved_5) {
      PrefabPathDefine = _unresolved_5.PrefabPathDefine;
    }, function (_unresolved_6) {
      EffectType = _unresolved_6.EffectType;
    }, function (_unresolved_7) {
      addToastAction = _unresolved_7.addToastAction;
    }, function (_unresolved_8) {
      ApiUrl = _unresolved_8.ApiUrl;
    }, function (_unresolved_9) {
      getPackageName = _unresolved_9.getPackageName;
      registerAppsflyerEvents = _unresolved_9.registerAppsflyerEvents;
      sendNativeVibrate = _unresolved_9.sendNativeVibrate;
    }, function (_unresolved_10) {
      BaseViewModel = _unresolved_10.default;
    }, function (_unresolved_11) {
      config = _unresolved_11.config;
      deviceInfo = _unresolved_11.deviceInfo;
    }, function (_unresolved_12) {
      ActivityViewModel = _unresolved_12.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "476bf2d1BlBk7Oy8ifJ+r1C", "LoginPageV2ViewModel", undefined);

      __checkObsolete__(['Node', 'Prefab', 'sys']);

      LoginPageV2ViewModel = class LoginPageV2ViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Hall_LoginPageV2');
          this.loginDialogV2ViewModel = void 0;
        }

        begin() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.setEvent({
              onOpenLoginDialog: function () {
                var _onOpenLoginDialog = _asyncToGenerator(function* () {
                  if (_this.loginDialogV2ViewModel) return;
                  _this.loginDialogV2ViewModel = new (_crd && LoginDialogV2ViewModel === void 0 ? (_reportPossibleCrUseOfLoginDialogV2ViewModel({
                    error: Error()
                  }), LoginDialogV2ViewModel) : LoginDialogV2ViewModel)().mountView((yield (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                    error: Error()
                  }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                    error: Error()
                  }), PrefabPathDefine) : PrefabPathDefine)._LOGIN_DIALOG_LOGIN_V2, Prefab)).source).appendTo(_this.viewNode, {
                    effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                      error: Error()
                    }), EffectType) : EffectType).EFFECT1,
                    isModal: true
                  }).setEvent({
                    closeHandler: () => {
                      _this.loginDialogV2ViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                        error: Error()
                      }), EffectType) : EffectType).EFFECT2).then(() => {
                        _this.loginDialogV2ViewModel = null;
                      });
                    },
                    loginDoneHandler: () => {
                      _this.comp.events.onLoginSuccess();
                    },
                    errorHandler: errorInfo => {
                      _this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                        error: Error()
                      }), addToastAction) : addToastAction)({
                        content: errorInfo
                      }));
                    }
                  });
                });

                function onOpenLoginDialog() {
                  return _onOpenLoginDialog.apply(this, arguments);
                }

                return onOpenLoginDialog;
              }(),
              openService: function () {
                var _openService = _asyncToGenerator(function* () {
                  var serviceVm = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
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
                      serviceVm.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                        error: Error()
                      }), EffectType) : EffectType).EFFECT2);
                    }
                  }).setProps({
                    openUrl: "" + (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                      error: Error()
                    }), config) : config).customerUrl
                  });
                });

                function openService() {
                  return _openService.apply(this, arguments);
                }

                return openService;
              }(),
              openHomePage: () => {
                sys.openURL((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).shareUrl);
              },
              openActivity: function () {
                var _openActivity = _asyncToGenerator(function* () {
                  var activityViewModel = new (_crd && ActivityViewModel === void 0 ? (_reportPossibleCrUseOfActivityViewModel({
                    error: Error()
                  }), ActivityViewModel) : ActivityViewModel)().mountView((yield (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                    error: Error()
                  }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                    error: Error()
                  }), PrefabPathDefine) : PrefabPathDefine)._HELL_ACTIVITY, Prefab)).source).appendTo(_this.viewNode, {
                    effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                      error: Error()
                    }), EffectType) : EffectType).EFFECT1,
                    isModal: true
                  }).setEvent({
                    onClosePanel: () => {
                      activityViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                        error: Error()
                      }), EffectType) : EffectType).EFFECT2);
                    }
                  });
                });

                function openActivity() {
                  return _openActivity.apply(this, arguments);
                }

                return openActivity;
              }(),
              retryHndler: () => {
                _this.loginTodo(true);
              }
            });

            _this.loginTodo();
          })();
        }

        loginTodo(isforce) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (isforce === void 0) {
              isforce = false;
            }

            if (_this2.comp.props.isAutoLogin || isforce) {
              var isFastLogin = yield _this2.checkFastLogin();

              if (isFastLogin === 'faild') {
                //没有token
                _this2.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                  error: Error()
                }), addToastAction) : addToastAction)({
                  content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                    error: Error()
                  }), lang) : lang).write(k => k.HallModule.GuestAutoLogin, {}, {
                    placeStr: "游客登录中..."
                  })
                }));

                _this2.guestLogin();
              } else if (!isFastLogin) {
                //有token但是登录失败
                sys.localStorage.removeItem("token");

                _this2.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                  error: Error()
                }), addToastAction) : addToastAction)({
                  content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                    error: Error()
                  }), lang) : lang).write(k => k.HallModule.AutoLoginFaild, {}, {
                    placeStr: "请手动登录"
                  })
                }));
              } else {
                // this.dispatch(addToastAction({ content: lang.write(k => k.HallModule.LoginMark, {}, { placeStr: "已自动登录" }) }))
                //登录操作完成之后
                (_crd && sendNativeVibrate === void 0 ? (_reportPossibleCrUseOfsendNativeVibrate({
                  error: Error()
                }), sendNativeVibrate) : sendNativeVibrate)(200); // this.dispatch(addToastAction({ content: "已自动登录" }))

                _this2.comp.events.onLoginSuccess();
              }
            }
          })();
        }
        /**游客登录 */


        guestLogin() {
          (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
            error: Error()
          }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
            error: Error()
          }), ApiUrl) : ApiUrl).LOGIN_PWD, {
            type: 5,
            macCode: (_crd && deviceInfo === void 0 ? (_reportPossibleCrUseOfdeviceInfo({
              error: Error()
            }), deviceInfo) : deviceInfo).getUniqueId(),
            pkgCode: (_crd && getPackageName === void 0 ? (_reportPossibleCrUseOfgetPackageName({
              error: Error()
            }), getPackageName) : getPackageName)()
          }).then(data => {
            var values = data.split(",");
            var token = values.length === 1 ? data : values[0];
            var isReg = values.length === 1 ? false : Boolean(values[1]); //登录成功

            sys.localStorage.setItem('token', token);
            this.comp.events.onLoginSuccess();

            if (isReg) {
              (_crd && registerAppsflyerEvents === void 0 ? (_reportPossibleCrUseOfregisterAppsflyerEvents({
                error: Error()
              }), registerAppsflyerEvents) : registerAppsflyerEvents)('', '');
            }
          }).catch(e => {
            this.comp.showRetryButton();
            console.log(e);
          });
        }
        /**是否可以快读登录 */


        checkFastLogin() {
          return new Promise((reslove, reject) => {
            var token = sys.localStorage.getItem("token");

            if (token && token.trim()) {
              (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
                error: Error()
              }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
                error: Error()
              }), ApiUrl) : ApiUrl).LOGIN_FAST, {
                pkgCode: (_crd && getPackageName === void 0 ? (_reportPossibleCrUseOfgetPackageName({
                  error: Error()
                }), getPackageName) : getPackageName)(),
                macCode: (_crd && deviceInfo === void 0 ? (_reportPossibleCrUseOfdeviceInfo({
                  error: Error()
                }), deviceInfo) : deviceInfo).getUniqueId(),
                token: token
              }, "post", {// "Content-Type": "application/x-www-form-urlencoded"
              }).then(data => {
                var values = data.split(",");
                token = values.length === 1 ? data : values[0];
                sys.localStorage.setItem('token', token);
                reslove(token ? true : false);
              }).catch(e => {
                // this.dispatch(addToastAction({ content: e }))
                this.comp.showRetryButton();
                reslove(false);
              });
            } else {
              reslove('faild');
            }
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

      _export("default", LoginPageV2ViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=21bac0011872cf1a7af7006d152ad557f6f2cc8c.js.map