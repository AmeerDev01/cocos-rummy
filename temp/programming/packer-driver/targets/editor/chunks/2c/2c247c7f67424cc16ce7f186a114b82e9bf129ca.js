System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, EditBox, instantiate, Label, Node, ScrollView, BaseComponent, initDropDownBox, ApiUrl, InputValidator, initToggle, fetcher, hallAudio, SoundPathDefine, _dec, _class, _crd, ccclass, property, LoginType, Hall_LoginDialog;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitDropDownBox(extras) {
    _reporterNs.report("initDropDownBox", "../../utils/DropDownBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputValidator(extras) {
    _reporterNs.report("InputValidator", "../../utils/InputValidator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitToggle(extras) {
    _reporterNs.report("initToggle", "../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOffetcher(extras) {
    _reporterNs.report("fetcher", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhallAudio(extras) {
    _reporterNs.report("hallAudio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      EditBox = _cc.EditBox;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      ScrollView = _cc.ScrollView;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      initDropDownBox = _unresolved_3.default;
    }, function (_unresolved_4) {
      ApiUrl = _unresolved_4.ApiUrl;
    }, function (_unresolved_5) {
      InputValidator = _unresolved_5.default;
    }, function (_unresolved_6) {
      initToggle = _unresolved_6.initToggle;
    }, function (_unresolved_7) {
      fetcher = _unresolved_7.fetcher;
      hallAudio = _unresolved_7.hallAudio;
    }, function (_unresolved_8) {
      SoundPathDefine = _unresolved_8.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "416e6CYRqtHDKbtv4H42UNh", "Hall_LoginDialog", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'Component', 'EditBox', 'EventHandler', 'instantiate', 'Label', 'Node', 'ScrollView', 'Toggle', 'ToggleContainer']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoginType", LoginType = /*#__PURE__*/function (LoginType) {
        LoginType[LoginType["PHONE"] = 1] = "PHONE";
        LoginType[LoginType["PASSWORD"] = 4] = "PASSWORD";
        return LoginType;
      }({}));

      _export("Hall_LoginDialog", Hall_LoginDialog = (_dec = ccclass('Hall_LoginDialog'), _dec(_class = class Hall_LoginDialog extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            /**关闭节点 */
            props_closeBtu: new Node(),

            /**头部两个tab触发器的容器节点 */
            props_toggleContainer: new Node(),

            /**tab的内容切换容器节点 */
            props_switchPanel: new Node(),

            /**手机验证码登录框组 */

            /**验证码登录模式的手机区号触发器 */
            props_togglePhoneAreaNum_phone: new Node(),

            /**验证码登录模式的手机区号下拉框展示板 */
            props_ScrollView_areaNum_phone: new Node(),

            /**验证码登录模式的手机区号输入框 */
            props_intput_phone_areaNum_phone: new EditBox(),

            /**验证码登录模式的手机号码输入框 */
            props_intput_phone_phoneNum_phone: new EditBox(),

            /**验证码登录模式的手机验证码输入框 */
            props_intput_phone_captcha: new EditBox(),

            /**验证码登录模式的验证码发送按钮 */
            props_btn_send_vercode: new Node(),

            /**密码登录模式的登录按钮 */
            props_btn_login_phone: new Node(),

            /**密码登录框组 */

            /**密码登录模式的手机区号触发器 */
            props_togglePhoneAreaNum_pwd: new Node(),

            /**密码登录模式的手机区号下拉框展示板 */
            props_ScrollView_areaNum_pwd: new Node(),

            /**密码登录模式的手机区号输入框 */
            props_intput_phone_areaNum_pwd: new EditBox(),

            /**密码登录模式的手机号码输入框 */
            props_intput_phone_phoneNum_pwd: new EditBox(),

            /**密码登录模式的手机验证码输入框 */
            props_input_password: new EditBox(),

            /**密码登录模式的验证码发送按钮 */
            props_btn_setPassword: new Node(),

            /**密码登录模式的登录按钮 */
            props_btn_login_pwd: new Node(),

            /**推荐码 */
            props_intput_promotionCode: new EditBox()
          };
          this.events = {
            closeHandler: () => {},
            loginHandler: () => {},
            sendSmsHandler: phoneNumber => {},
            setPasswordHandler: () => {},
            loginDoneHandler: () => {},
            errorHandler: errorInfo => {}
          };
          this.props = {};
        }

        start() {}

        initState() {
          return {
            showLoginType: LoginType.PASSWORD,
            phoneLogin: {
              areaCode: "",
              number: "",
              verCode: ""
            },
            pwdLogin: {
              areaCode: "",
              number: "",
              password: ""
            }
          };
        }

        bindEvent() {
          this.propertyNode.props_closeBtu.on(Node.EventType.TOUCH_END, () => {
            this.events.closeHandler();
          }); // const container = this.propertyNode.props_toggleContainer.getComponent(ToggleContainer)
          // const containerEventHandler = new EventHandler();
          // containerEventHandler.target = this.node;
          // containerEventHandler.component = 'Hall_LoginDialog';
          // containerEventHandler.handler = 'callback';
          // // containerEventHandler.customEventData = 'switchLoginType';
          // container.checkEvents.push(containerEventHandler);

          (_crd && initToggle === void 0 ? (_reportPossibleCrUseOfinitToggle({
            error: Error()
          }), initToggle) : initToggle)(this.propertyNode.props_toggleContainer, this.node, new Hall_LoginDialog.EventHandler(), "Hall_LoginDialog", "callback"); //初始化下拉框

          (_crd && initDropDownBox === void 0 ? (_reportPossibleCrUseOfinitDropDownBox({
            error: Error()
          }), initDropDownBox) : initDropDownBox)({
            list: ['+62'],
            checkIndex: 0
          }, {
            toggleNode: this.propertyNode.props_togglePhoneAreaNum_pwd,
            scrollView: this.propertyNode.props_ScrollView_areaNum_pwd,
            bgNode: this.node.parent
          }, {
            renderItem: record => {
              const templateBtu = instantiate(this.propertyNode.props_ScrollView_areaNum_pwd.getComponent(ScrollView).content.children[0]);
              templateBtu.getChildByName("Label").getComponent(Label).string = record;
              return templateBtu;
            },
            chooseItem: ({
              item
            }) => {
              this.propertyNode.props_intput_phone_areaNum_pwd.string = item; // this.setState({ pwdLogin: Object.assign({}, this.state.pwdLogin, { areaCode: item }) })
            },
            updateItemNode: (node, isChoose) => {
              node.getChildByName("Label").getComponent(Label).color = isChoose ? Color.RED : Color.BLACK;
            }
          });
          (_crd && initDropDownBox === void 0 ? (_reportPossibleCrUseOfinitDropDownBox({
            error: Error()
          }), initDropDownBox) : initDropDownBox)({
            list: ['+62'],
            checkIndex: 0
          }, {
            toggleNode: this.propertyNode.props_togglePhoneAreaNum_phone,
            scrollView: this.propertyNode.props_ScrollView_areaNum_phone,
            bgNode: this.node.parent
          }, {
            renderItem: record => {
              const templateBtu = instantiate(this.propertyNode.props_ScrollView_areaNum_phone.getComponent(ScrollView).content.children[0]);
              templateBtu.getChildByName("Label").getComponent(Label).string = record;
              return templateBtu;
            },
            chooseItem: ({
              item
            }) => {
              this.propertyNode.props_intput_phone_areaNum_phone.string = item; // this.setState({ phoneLogin: Object.assign({}, this.state.phoneLogin, { areaCode: item }) })
            },
            updateItemNode: (node, isChoose) => {
              node.getChildByName("Label").getComponent(Label).color = isChoose ? Color.RED : Color.BLACK;
            }
          });
          this.propertyNode.props_btn_login_phone.on(Node.EventType.TOUCH_END, () => this.login());
          this.propertyNode.props_btn_login_pwd.on(Node.EventType.TOUCH_END, () => this.login());
          this.propertyNode.props_btn_send_vercode.on(Node.EventType.TOUCH_END, () => {
            const phoneNumber = this.propertyNode.props_intput_phone_phoneNum_phone.string;
            new (_crd && InputValidator === void 0 ? (_reportPossibleCrUseOfInputValidator({
              error: Error()
            }), InputValidator) : InputValidator)().begin().isPhoneNumber(phoneNumber).done(() => {
              (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
                error: Error()
              }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
                error: Error()
              }), ApiUrl) : ApiUrl).SEND_SMS, {
                phone: phoneNumber
              }).then(rsp => {
                this.events.sendSmsHandler(phoneNumber);
                this.propertyNode.props_intput_phone_captcha.string = rsp;
              }).catch(e => {
                this.events.errorHandler(e);
                console.log(e);
              });
            });
          });
          this.propertyNode.props_btn_setPassword.on(Node.EventType.TOUCH_END, () => this.events.setPasswordHandler());
        }

        useProps(key, value) {
          /**传入的props变更触发的函数 */
          // console.log(key, "change", value.cur)
        }

        bindUI() {
          this.useState((key, {
            pre,
            cur
          }) => {
            this.propertyNode.props_switchPanel.children.forEach(child => child.active = false);

            if (cur === LoginType.PASSWORD) {
              this.propertyNode.props_switchPanel.children.find(child => child.name === 'login_password').active = true;
            } else if (cur === LoginType.PHONE) {
              this.propertyNode.props_switchPanel.children.find(child => child.name === 'login_phone').active = true;
            }
          }, ['showLoginType']);
        }

        login() {
          const loginData = this.state.showLoginType === LoginType.PASSWORD ? {
            areaCode: this.propertyNode.props_intput_phone_areaNum_pwd.string,
            number: this.propertyNode.props_intput_phone_phoneNum_pwd.string,
            authStr: this.propertyNode.props_input_password.string,
            promotionCode: this.propertyNode.props_intput_promotionCode.string
          } : {
            areaCode: this.propertyNode.props_intput_phone_areaNum_phone.string,
            number: this.propertyNode.props_intput_phone_phoneNum_phone.string,
            authStr: this.propertyNode.props_intput_phone_captcha.string,
            promotionCode: this.propertyNode.props_intput_promotionCode.string
          };
          this.events.loginHandler(this.state.showLoginType, loginData);
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
//# sourceMappingURL=2c247c7f67424cc16ce7f186a114b82e9bf129ca.js.map