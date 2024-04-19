System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, ViewModel, LoginDialogViewModel, fetcher, sourceManageSeletor, PrefabPathDefine, EffectType, addToastAction, ApiUrl, lang, getPackageName, sendNativeVibrate, BaseViewModel, config, deviceInfo, ActivityViewModel, LoginPageViewModel, _crd;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_LoginPage(extras) {
    _reporterNs.report("Hall_LoginPage", "../components/Hall_LoginPage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Hall_LoginPage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Hall_LoginPage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginDialogViewModel(extras) {
    _reporterNs.report("LoginDialogViewModel", "./LoginViewDialogModel", _context.meta, extras);
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

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetPackageName(extras) {
    _reporterNs.report("getPackageName", "../../common/bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsendNativeVibrate(extras) {
    _reporterNs.report("sendNativeVibrate", "../../common/bridge", _context.meta, extras);
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

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdeviceInfo(extras) {
    _reporterNs.report("deviceInfo", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityViewModel(extras) {
    _reporterNs.report("ActivityViewModel", "./ActivityViewModel", _context.meta, extras);
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
      LoginDialogViewModel = _unresolved_3.default;
    }, function (_unresolved_4) {
      fetcher = _unresolved_4.fetcher;
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
      lang = _unresolved_9.lang;
    }, function (_unresolved_10) {
      getPackageName = _unresolved_10.getPackageName;
      sendNativeVibrate = _unresolved_10.sendNativeVibrate;
    }, function (_unresolved_11) {
      BaseViewModel = _unresolved_11.default;
    }, function (_unresolved_12) {
      config = _unresolved_12.config;
      deviceInfo = _unresolved_12.deviceInfo;
    }, function (_unresolved_13) {
      ActivityViewModel = _unresolved_13.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3a8b6ExLoFEuYNn5CSFDMNq", "LoginPageViewModel", undefined);

      __checkObsolete__(['Node', 'sys']);

      LoginPageViewModel = class LoginPageViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Hall_LoginPage');
          this.loginDialogViewModel = void 0;
        }

        async begin() {
          const isFastLogin = await this.checkFastLogin();

          if (!isFastLogin) {
            this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
              error: Error()
            }), addToastAction) : addToastAction)({
              content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.loginModule.LoginRemind, {}, {
                placeStr: "请登录"
              })
            }));
            this.setEvent({
              onOpenLoginDialog: () => {
                if (this.loginDialogViewModel) return;
                this.loginDialogViewModel = new (_crd && LoginDialogViewModel === void 0 ? (_reportPossibleCrUseOfLoginDialogViewModel({
                  error: Error()
                }), LoginDialogViewModel) : LoginDialogViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                  error: Error()
                }), PrefabPathDefine) : PrefabPathDefine).LOGIN_DIALOG).source).appendTo(this.viewNode, {
                  effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                    error: Error()
                  }), EffectType) : EffectType).EFFECT1,
                  isModal: true
                }).setEvent({
                  closeHandler: () => {
                    this.loginDialogViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                      error: Error()
                    }), EffectType) : EffectType).EFFECT2).then(() => {
                      this.loginDialogViewModel = null;
                    });
                  },
                  loginDoneHandler: () => {
                    this.comp.events.onLoginSuccess();
                  },
                  errorHandler: errorInfo => {
                    this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                      error: Error()
                    }), addToastAction) : addToastAction)({
                      content: errorInfo
                    }));
                  }
                });
              },
              openService: () => {
                const serviceVm = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
                  error: Error()
                }), BaseViewModel) : BaseViewModel)('Hall_Service').mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                  error: Error()
                }), PrefabPathDefine) : PrefabPathDefine).HELL_SERVICE_WEBVIEW).source).appendTo(this.viewNode, {
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
                  openUrl: `${(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                    error: Error()
                  }), config) : config).customerUrl}`
                });
              },
              openHomePage: () => {
                sys.openURL((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).shareUrl);
              },
              openActivity: () => {
                const activityViewModel = new (_crd && ActivityViewModel === void 0 ? (_reportPossibleCrUseOfActivityViewModel({
                  error: Error()
                }), ActivityViewModel) : ActivityViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                  error: Error()
                }), PrefabPathDefine) : PrefabPathDefine).HELL_ACTIVITY).source).appendTo(this.viewNode, {
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
              }
            });
          } else {
            // this.dispatch(addToastAction({ content: lang.write(k => k.HallModule.LoginMark, {}, { placeStr: "已自动登录" }) }))
            //登录操作完成之后
            (_crd && sendNativeVibrate === void 0 ? (_reportPossibleCrUseOfsendNativeVibrate({
              error: Error()
            }), sendNativeVibrate) : sendNativeVibrate)(200); // this.dispatch(addToastAction({ content: "已自动登录" }))

            this.comp.events.onLoginSuccess();
          }
        }
        /**是否可以快读登录 */


        checkFastLogin() {
          return new Promise((reslove, reject) => {
            if (sys.localStorage.getItem("token")) {
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
                token: sys.localStorage.getItem("token")
              }, "post", {
                "Content-Type": "application/x-www-form-urlencoded"
              }).then(data => {
                const values = data.split(",");
                let token = values.length === 1 ? data : values[0];
                sys.localStorage.setItem('token', token);
                reslove(token ? true : false);
              }).catch(e => {
                this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                  error: Error()
                }), addToastAction) : addToastAction)({
                  content: e
                }));
                reslove(false);
              });
            } else {
              reslove(false);
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

      _export("default", LoginPageViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0eb3a879286692820e01622465c4b7646442c3ee.js.map