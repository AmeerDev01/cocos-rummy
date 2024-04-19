System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EditBox, Node, BaseComponent, InputValidator, _dec, _class, _crd, ccclass, property, Hall_BindPhonePanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputValidator(extras) {
    _reporterNs.report("InputValidator", "../../utils/InputValidator", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      EditBox = _cc.EditBox;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      InputValidator = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "90c55B29xVEWr/Ic4bekLzq", "Hall_BindPhonePanel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EditBox', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_BindPhonePanel", Hall_BindPhonePanel = (_dec = ccclass('Hall_BindPhonePanel'), _dec(_class = class Hall_BindPhonePanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            /**关闭 */
            props_btn_tips_close: new Node(),

            /**手机号码 */
            props_intput_phone_phoneNum: new Node(),

            /**验证码框 */
            props_intput_phone_captcha: new Node(),

            /**发送验证码 */
            props_btn_send: new Node(),

            /**确认 */
            props_btn_sure: new Node()
          };
          this.props = {
            phone: ""
          };
          this.events = {
            onClosePanel: () => {},
            sendSmsCode: phoneNumber => new Promise(reslove => reslove("")),
            modifyPhoneDone: (phoneNumber, verificationCode) => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          /**发送验证码 */
          this.propertyNode.props_btn_send.on(Node.EventType.TOUCH_END, () => {
            const phoneNumber = this.propertyNode.props_intput_phone_phoneNum.getComponent(EditBox).string;
            new (_crd && InputValidator === void 0 ? (_reportPossibleCrUseOfInputValidator({
              error: Error()
            }), InputValidator) : InputValidator)().begin().isPhoneNumber(phoneNumber).done(() => {
              this.events.sendSmsCode(phoneNumber).then(code => {
                this.propertyNode.props_intput_phone_captcha.getComponent(EditBox).string = code;
              });
            });
          });
          /**确认修改 */

          this.propertyNode.props_btn_sure.on(Node.EventType.TOUCH_END, () => {
            const phoneNumber = this.propertyNode.props_intput_phone_phoneNum.getComponent(EditBox).string;
            const verificationCode = this.propertyNode.props_intput_phone_captcha.getComponent(EditBox).string;
            new (_crd && InputValidator === void 0 ? (_reportPossibleCrUseOfInputValidator({
              error: Error()
            }), InputValidator) : InputValidator)().begin().isPhoneNumber(phoneNumber).isSmsCode(verificationCode).done(() => {
              this.events.modifyPhoneDone(phoneNumber, verificationCode);
            });
          });
          this.propertyNode.props_btn_tips_close.on(Node.EventType.TOUCH_END, () => {
            this.events.onClosePanel();
          });
        }

        useProps(key, value) {
          if (key === "phone") {
            this.propertyNode.props_intput_phone_phoneNum.getComponent(EditBox).string = value.cur || "";
          }
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f390840b9afe588d990aec42fac351cbab3072e9.js.map