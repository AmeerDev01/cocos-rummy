System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, EditBox, Node, Prefab, sys, BaseComponent, InputValidator, global, hallAudio, lang, sourceManageSeletor, SoundPathDefine, config, RegV2ViewModel, PrefabPathDefine, CaptchaGenerator, addToastAction, EffectType, _dec, _class, _crd, ccclass, property, LoginType, Hall_LoginDialogV2;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputValidator(extras) {
    _reporterNs.report("InputValidator", "../../../utils/InputValidator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhallAudio(extras) {
    _reporterNs.report("hallAudio", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRegV2ViewModel(extras) {
    _reporterNs.report("RegV2ViewModel", "../../viewModel/login_v2/RegV2ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCaptchaGenerator(extras) {
    _reporterNs.report("CaptchaGenerator", "../../../utils/CaptchaGenerator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      EditBox = _cc.EditBox;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      InputValidator = _unresolved_3.default;
    }, function (_unresolved_4) {
      global = _unresolved_4.global;
      hallAudio = _unresolved_4.hallAudio;
      lang = _unresolved_4.lang;
      sourceManageSeletor = _unresolved_4.sourceManageSeletor;
    }, function (_unresolved_5) {
      SoundPathDefine = _unresolved_5.SoundPathDefine;
    }, function (_unresolved_6) {
      config = _unresolved_6.config;
    }, function (_unresolved_7) {
      RegV2ViewModel = _unresolved_7.default;
    }, function (_unresolved_8) {
      PrefabPathDefine = _unresolved_8.PrefabPathDefine;
    }, function (_unresolved_9) {
      CaptchaGenerator = _unresolved_9.default;
    }, function (_unresolved_10) {
      addToastAction = _unresolved_10.addToastAction;
    }, function (_unresolved_11) {
      EffectType = _unresolved_11.EffectType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8be613lla1EFoxkspokfZjP", "Hall_LoginDialogV2", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'Component', 'EditBox', 'EventHandler', 'instantiate', 'Label', 'Node', 'Prefab', 'ScrollView', 'sys', 'Toggle', 'ToggleContainer']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoginType", LoginType = /*#__PURE__*/function (LoginType) {
        LoginType[LoginType["PHONE"] = 1] = "PHONE";
        LoginType[LoginType["PASSWORD"] = 4] = "PASSWORD";
        return LoginType;
      }({}));

      _export("Hall_LoginDialogV2", Hall_LoginDialogV2 = (_dec = ccclass('Hall_LoginDialogV2'), _dec(_class = class Hall_LoginDialogV2 extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.captchaGenerator = void 0;
          this.propertyNode = {
            /**关闭节点 */
            props_closeBtu: new Node(),

            /**登录账户 */
            props_input_akun: new EditBox(),

            /**登录密码 */
            props_input_sandi: new EditBox(),

            /**忘记密码按钮 */
            props_btn_login_forget: new Button(),

            /**验证码 */
            props_input_kode: new EditBox(),

            /**验证码获取按钮 */
            props_spr_kode: new Node(),

            /**注册 */
            props_btn_daftarAkun: new Button(),

            /**登录 */
            props_btn_login: new Button()
          };
          this.events = {
            closeHandler: () => {},
            loginHandler: (loginName, password, done) => {},
            loginDoneHandler: () => {},
            sendSmsHandler: phoneNumber => {},
            errorHandler: errorInfo => {}
          };
          this.props = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_closeBtu.on(Node.EventType.TOUCH_END, () => {
            this.events.closeHandler();
          });
          /**注册 */

          this.propertyNode.props_btn_daftarAkun.node.on(Node.EventType.TOUCH_END, () => this.reg());
          /**登录 */

          this.propertyNode.props_btn_login.node.on(Node.EventType.TOUCH_END, () => this.login());
          /**忘记密码 */

          this.propertyNode.props_btn_login_forget.node.on(Node.EventType.TOUCH_END, () => {
            sys.openURL((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).customerOutUrl); // ModalBox.Instance().show({ url: config.customerOutUrl })
          });
          /**切换验证码 */

          this.propertyNode.props_spr_kode.on(Node.EventType.TOUCH_END, () => {
            this.captchaGenerator.generate();
          });
        }

        useProps(key, value) {
          /**传入的props变更触发的函数 */
          // console.log(key, "change", value.cur)
        }

        bindUI() {
          this.captchaGenerator = new (_crd && CaptchaGenerator === void 0 ? (_reportPossibleCrUseOfCaptchaGenerator({
            error: Error()
          }), CaptchaGenerator) : CaptchaGenerator)(this.propertyNode.props_spr_kode, 4);

          if (sys.localStorage.getItem('loginName')) {
            this.propertyNode.props_input_akun.string = sys.localStorage.getItem('loginName');
          }
        }
        /**确认登录 */


        login() {
          var loginName = this.propertyNode.props_input_akun.string;
          var password = this.propertyNode.props_input_sandi.string;
          new (_crd && InputValidator === void 0 ? (_reportPossibleCrUseOfInputValidator({
            error: Error()
          }), InputValidator) : InputValidator)().begin().isIDAPhoneNumber(loginName).isEmtry(password, (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
            error: Error()
          }), lang) : lang).write(k => k.HallModule.passwordEmptyError, {}, {
            placeStr: "请输入密码"
          })).isChartLength([6, 30], password).done(() => {
            /**验证码 */
            var valodateCode = this.propertyNode.props_input_kode.string;

            if (valodateCode.trim().length === 0) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.HallModule.captchaEmptyError, {}, {
                  placeStr: "请输入验证码"
                })
              }));
              return;
            }

            if (valodateCode.toLocaleLowerCase() !== this.captchaGenerator.captcha.toLocaleLowerCase()) {
              this.captchaGenerator.generate();
              this.propertyNode.props_input_kode.string = '';
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.HallModule.captchaError, {}, {
                  placeStr: "验证码错误"
                })
              }));
            } else {
              this.events.loginHandler(loginName, password, success => {
                !success && this.captchaGenerator.generate();
              });
            }
          });
        }

        reg() {
          var _this = this;

          return _asyncToGenerator(function* () {
            new (_crd && RegV2ViewModel === void 0 ? (_reportPossibleCrUseOfRegV2ViewModel({
              error: Error()
            }), RegV2ViewModel) : RegV2ViewModel)().mountView((yield (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine)._LOGIN_DIALOG_REG_V2, Prefab)).source).appendTo(_this.node.parent, {
              effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT2
            }).setEvent({
              regDoneHandler: () => {
                _this.events.loginDoneHandler();
              }
            });
          })();
        }

        callback(event, customEventData) {
          (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
            error: Error()
          }), hallAudio) : hallAudio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).BTU_CLICK);

          switch (event.target["name"]) {
            case "Toggle_phone":
              //显示手机登录
              this.setState({
                showLoginType: LoginType.PHONE
              });
              break;

            case "Toggle_password":
              //显示密码登录
              this.setState({
                showLoginType: LoginType.PASSWORD
              });
              break;
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=be1ee4b379f1bbd8a1746f18ad00b78f0f82632a.js.map