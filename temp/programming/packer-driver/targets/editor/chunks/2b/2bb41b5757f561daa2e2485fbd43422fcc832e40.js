System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EditBox, Node, sys, BaseComponent, ApiUrl, InputValidator, fetcher, _dec, _class, _crd, ccclass, property, Hall_ResetPassword;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputValidator(extras) {
    _reporterNs.report("InputValidator", "../../utils/InputValidator", _context.meta, extras);
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
      _decorator = _cc._decorator;
      EditBox = _cc.EditBox;
      Node = _cc.Node;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      ApiUrl = _unresolved_3.ApiUrl;
    }, function (_unresolved_4) {
      InputValidator = _unresolved_4.default;
    }, function (_unresolved_5) {
      fetcher = _unresolved_5.fetcher;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "52dd8cmURVDm5scHbtTzdif", "Hall_ResetPassword", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EditBox', 'Node', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_ResetPassword", Hall_ResetPassword = (_dec = ccclass('Hall_ResetPassword'), _dec(_class = class Hall_ResetPassword extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            /**关闭 */
            props_btn_node_close: new Node(),

            /**发送验证码 */
            props_btn_send: new Node(),

            /**手机号码 */
            props_intput_phone_phoneNum: new Node(),

            /**验证码 */
            props_intput_phone_captcha: new Node(),

            /**密码输入框 */
            props_intput_phone_password: new Node(),

            /**登录注册按钮 */
            props_btn_login: new Node()
          };
          this.props = {
            smsCode: ""
          };
          this.events = {
            closeHandler: () => {},
            sendSmsHandler: phoneNumber => {},
            pwdLoginSuccess: () => {},
            inputError: error => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_node_close.on(Node.EventType.TOUCH_END, () => {
            this.events.closeHandler();
          });
          this.propertyNode.props_btn_send.on(Node.EventType.TOUCH_END, () => {
            const phoneNumber = this.propertyNode.props_intput_phone_phoneNum.getComponent(EditBox).string;
            (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
              error: Error()
            }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
              error: Error()
            }), ApiUrl) : ApiUrl).SEND_SMS, {
              phone: phoneNumber
            }).then(rsp => {
              this.events.sendSmsHandler(phoneNumber);
              this.propertyNode.props_intput_phone_captcha.getComponent(EditBox).string = rsp;
            }).catch(e => {
              console.log(e);
            });
          });
          this.propertyNode.props_btn_login.on(Node.EventType.TOUCH_END, () => {
            const phone = this.propertyNode.props_intput_phone_phoneNum.getComponent(EditBox).string;
            const verificationCode = this.propertyNode.props_intput_phone_captcha.getComponent(EditBox).string;
            const password = this.propertyNode.props_intput_phone_password.getComponent(EditBox).string;
            new (_crd && InputValidator === void 0 ? (_reportPossibleCrUseOfInputValidator({
              error: Error()
            }), InputValidator) : InputValidator)().begin().isChartLength([6, 40], password).isPhoneNumber(phone).isSmsCode(verificationCode).done(() => {
              (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
                error: Error()
              }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
                error: Error()
              }), ApiUrl) : ApiUrl).RESET_PASSWORD, {
                phone,
                verificationCode,
                password
              }).then(data => {
                sys.localStorage.setItem("token", data);
                this.events.pwdLoginSuccess();
              }).catch(e => {
                console.log(e);
              });
            });
          });
        }

        useProps(key, value) {}

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2bb41b5757f561daa2e2485fbd43422fcc832e40.js.map