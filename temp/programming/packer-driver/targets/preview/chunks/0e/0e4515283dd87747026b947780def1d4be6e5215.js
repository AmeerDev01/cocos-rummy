System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, EditBox, Node, BaseComponent, global, lang, InputValidator, addToastAction, CaptchaGenerator, _dec, _class, _crd, ccclass, property, Hall_RegPageV2;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputValidator(extras) {
    _reporterNs.report("InputValidator", "../../../utils/InputValidator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCaptchaGenerator(extras) {
    _reporterNs.report("CaptchaGenerator", "../../../utils/CaptchaGenerator", _context.meta, extras);
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
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      global = _unresolved_3.global;
      lang = _unresolved_3.lang;
    }, function (_unresolved_4) {
      InputValidator = _unresolved_4.default;
    }, function (_unresolved_5) {
      addToastAction = _unresolved_5.addToastAction;
    }, function (_unresolved_6) {
      CaptchaGenerator = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cbd21bsa3FJe6mOkkqD7tCt", "Hall_RegPageV2", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EditBox', 'Label', 'Node', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_RegPageV2", Hall_RegPageV2 = (_dec = ccclass('Hall_RegPageV2'), _dec(_class = class Hall_RegPageV2 extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.captchaGenerator = void 0;
          this.propertyNode = {
            props_closeBtu: new Button(),

            /**用户名 */
            props_input_akun: new EditBox(),

            /**第一遍密码 */
            props_input_sandi: new EditBox(),

            /**重复密码 */
            props_input_kSandi: new EditBox(),

            /**确认 */
            props_btn_ok: new Button(),

            /**验证码 */
            props_input_kode: new EditBox(),

            /**验证码图片 */
            props_spr_kode: new Node()
          };
          this.props = {};
          this.events = {
            closeHandler: () => {},
            regHandler: () => {},
            regDoneHandler: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_closeBtu.node.on(Node.EventType.TOUCH_END, () => {
            this.events.closeHandler();
          });
          /**切换验证码 */

          this.propertyNode.props_spr_kode.on(Node.EventType.TOUCH_END, () => {
            this.captchaGenerator.generate();
          });
          this.propertyNode.props_btn_ok.node.on(Node.EventType.TOUCH_END, () => {
            var loginName = this.propertyNode.props_input_akun.string.trim();
            var password = this.propertyNode.props_input_sandi.string.trim();
            var password_re = this.propertyNode.props_input_kSandi.string.trim();
            var success = false;
            new (_crd && InputValidator === void 0 ? (_reportPossibleCrUseOfInputValidator({
              error: Error()
            }), InputValidator) : InputValidator)().begin().isIDAPhoneNumber(loginName).isEmtry(password, (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
              error: Error()
            }), lang) : lang).write(k => k.HallModule.passwordEmptyError, {}, {
              placeStr: "请输入密码"
            })).isChartLength([6, 30], password).isEmtry(password_re, (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
              error: Error()
            }), lang) : lang).write(k => k.HallModule.confirmPasswordEmptyError, {}, {
              placeStr: "请输入确认密码"
            })).isChartLength([6, 30], password_re).done(() => {
              success = true;
            });
            if (!success) return;

            if (password !== password_re) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.HallModule.pwdRepetitionError, {}, {
                  placeStr: "两次输入的密码不一致"
                })
              }));
              return;
            }

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
              return;
            }

            this.events.regHandler(loginName, password);
          });
        }

        useProps(key, value) {
          /**传入的props变更触发的函数 */
        }

        bindUI() {
          this.captchaGenerator = new (_crd && CaptchaGenerator === void 0 ? (_reportPossibleCrUseOfCaptchaGenerator({
            error: Error()
          }), CaptchaGenerator) : CaptchaGenerator)(this.propertyNode.props_spr_kode, 4);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0e4515283dd87747026b947780def1d4be6e5215.js.map