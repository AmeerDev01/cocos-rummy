System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, EditBox, Label, Node, sys, Toggle, BaseComponent, InputValidator, getCookie, setCookie, ModalBox, config, getStore, _dec, _class, _crd, ccclass, property, ShowModelType, TrasferDirectionType, Hall_BankPanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputValidator(extras) {
    _reporterNs.report("InputValidator", "../../utils/InputValidator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetCookie(extras) {
    _reporterNs.report("getCookie", "../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetCookie(extras) {
    _reporterNs.report("setCookie", "../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModalBox(extras) {
    _reporterNs.report("ModalBox", "../../common/ModalBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      sys = _cc.sys;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      InputValidator = _unresolved_3.default;
    }, function (_unresolved_4) {
      getCookie = _unresolved_4.getCookie;
      setCookie = _unresolved_4.setCookie;
    }, function (_unresolved_5) {
      ModalBox = _unresolved_5.default;
    }, function (_unresolved_6) {
      config = _unresolved_6.config;
    }, function (_unresolved_7) {
      getStore = _unresolved_7.getStore;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a7d6fKqWaNJQoyELaRyHya/", "Hall_BankPanel", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EditBox', 'Label', 'Node', 'sys', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      ShowModelType = /*#__PURE__*/function (ShowModelType) {
        ShowModelType[ShowModelType["VERIFY"] = 0] = "VERIFY";
        ShowModelType[ShowModelType["MAIN_PANEL"] = 1] = "MAIN_PANEL";
        ShowModelType[ShowModelType["SET_PWD"] = 2] = "SET_PWD";
        return ShowModelType;
      }(ShowModelType || {});

      _export("TrasferDirectionType", TrasferDirectionType = /*#__PURE__*/function (TrasferDirectionType) {
        TrasferDirectionType[TrasferDirectionType["SETOR"] = 1] = "SETOR";
        TrasferDirectionType[TrasferDirectionType["MENGAMBILF"] = 2] = "MENGAMBILF";
        return TrasferDirectionType;
      }({}));

      _export("Hall_BankPanel", Hall_BankPanel = (_dec = ccclass('Hall_BankPanel'), _dec(_class = class Hall_BankPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            /**关闭验证框按钮 */
            props_btn_close_verify: new Node(),

            /**设置密码按钮 */
            props_btn_set: new Node(),
            props_bank_goin: new Node(),
            props_main_panel: new Node(),
            props_bank_set: new Node(),

            /**关闭设置密码按钮 */
            props_btn_close_set: new Node(),

            /**验证确认 */
            props_btn_sure_verify: new Node(),

            /**关闭主窗体 */
            props_btn_main_close: new Node(),

            /**确认重设密码按钮 */
            props_set_btn_sure: new Node(),

            /**密码输入框 */
            props_intput_phone_phoneNum: new Node(),

            /**是否今日免登录 */
            props_Toggle_bank_goin: new Node(),

            /**设置密码，填入登录密码 */
            props_intput_sandi_pwd: new Node(),

            /**设置银行密码 */
            props_intput_bank_set_pwd: new Node(),

            /**存取额度 */
            props_EditBox_meng_goldNum: new Node(),

            /**存按钮 */
            props_btn_bank_setor: new Node(),

            /**取 */
            props_btn_bank_meng: new Node(),

            /**保险箱余额 */
            props_Label_akun_num: new Node(),

            /**银行余额 */
            props_Label_saldo_num: new Node(),

            /**打开记录按钮 */
            props_btn_history: new Button()
          };
          this.props = {
            memberAssetGoldPieces: 0,
            memberAssetSafeGoldPieces: 0
          };
          this.events = {
            onClosePanel: () => {},
            isMustSetPwd: () => new Promise(resolve => resolve(false)),
            verifyPwd: (pwd, isToadyAutoLogin) => new Promise(resolve => resolve(false)),
            transferCapital: (amount, direction) => new Promise(resolve => resolve(false)),
            setBankPassword: (loginPassword, safePassword) => new Promise(resolve => resolve(false))
          };
        }

        start() {}

        initState() {
          return {
            showModel: ShowModelType.VERIFY
          };
        }

        bindEvent() {
          /**关闭验证界面 */
          this.propertyNode.props_btn_close_verify.on(Node.EventType.TOUCH_END, () => {
            this.events.onClosePanel();
          });
          /**验证确认 */

          this.propertyNode.props_btn_sure_verify.on(Node.EventType.TOUCH_END, () => {
            const str = this.propertyNode.props_intput_phone_phoneNum.getComponent(EditBox).string;
            const isToadyAutoLogin = this.propertyNode.props_Toggle_bank_goin.getComponent(Toggle).isChecked;
            new (_crd && InputValidator === void 0 ? (_reportPossibleCrUseOfInputValidator({
              error: Error()
            }), InputValidator) : InputValidator)().begin().isNotEmpty(str).done(() => {
              this.events.verifyPwd(str, isToadyAutoLogin).then(() => {
                this.setState({
                  showModel: ShowModelType.MAIN_PANEL
                });

                if (isToadyAutoLogin) {
                  (_crd && setCookie === void 0 ? (_reportPossibleCrUseOfsetCookie({
                    error: Error()
                  }), setCookie) : setCookie)('autoSafeLogin', 'true', 1);
                }
              });
            });
          });
          /**关闭主界面 */

          this.propertyNode.props_btn_main_close.on(Node.EventType.TOUCH_END, () => {
            this.events.onClosePanel();
          });
          /**打开设置密码 */

          this.propertyNode.props_btn_set.on(Node.EventType.TOUCH_END, () => {
            this.setState({
              showModel: ShowModelType.SET_PWD
            });
          });
          /**关闭修改密码框 */

          this.propertyNode.props_btn_close_set.on(Node.EventType.TOUCH_END, () => {
            this.setState({
              showModel: ShowModelType.VERIFY
            });
          });
          /**确认修改密码 */

          this.propertyNode.props_set_btn_sure.on(Node.EventType.TOUCH_END, () => {
            const str = this.propertyNode.props_intput_sandi_pwd.getComponent(EditBox).string;
            const str2 = this.propertyNode.props_intput_bank_set_pwd.getComponent(EditBox).string;
            new (_crd && InputValidator === void 0 ? (_reportPossibleCrUseOfInputValidator({
              error: Error()
            }), InputValidator) : InputValidator)().begin().isNotEmpty(str).isAllNumber(str2).isChartLength([6, 12], str2).done(() => {
              this.events.setBankPassword(str, str2).then(() => {
                this.setState({
                  showModel: ShowModelType.VERIFY
                });
              });
            });
          });
          this.propertyNode.props_btn_bank_setor.on(Node.EventType.TOUCH_END, () => {
            this.trasfer(this.propertyNode.props_EditBox_meng_goldNum.getComponent(EditBox).string, TrasferDirectionType.SETOR);
          });
          this.propertyNode.props_btn_bank_meng.on(Node.EventType.TOUCH_END, () => {
            this.trasfer(this.propertyNode.props_EditBox_meng_goldNum.getComponent(EditBox).string, TrasferDirectionType.MENGAMBILF);
          });
          this.propertyNode.props_btn_history.node.on(Node.EventType.TOUCH_END, () => {
            //打开记录
            (_crd && ModalBox === void 0 ? (_reportPossibleCrUseOfModalBox({
              error: Error()
            }), ModalBox) : ModalBox).Instance().show({
              url: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).goldRecordUrl + `?token=${sys.localStorage.getItem('token')}&memberId=${(_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
                error: Error()
              }), getStore) : getStore)().getState().memberInfo.memberId}`,
              type: "Prompt"
            });
          });
        }

        trasfer(amount, direction) {
          new (_crd && InputValidator === void 0 ? (_reportPossibleCrUseOfInputValidator({
            error: Error()
          }), InputValidator) : InputValidator)().begin().isNotEmpty(amount).isDecimal(amount).done(() => {
            this.events.transferCapital(+amount, direction).then(() => {
              this.propertyNode.props_EditBox_meng_goldNum.getComponent(EditBox).string = "";
            });
          });
        }

        useProps(key, value) {
          key === "memberAssetGoldPieces" && (this.propertyNode.props_Label_saldo_num.getComponent(Label).string = value.cur.formatAmountWithCommas());
          key === "memberAssetSafeGoldPieces" && (this.propertyNode.props_Label_akun_num.getComponent(Label).string = value.cur.formatAmountWithCommas());
        }

        bindUI() {
          this.useState((key, value) => {
            this.propertyNode.props_bank_goin.active = false;
            this.propertyNode.props_main_panel.active = false;
            this.propertyNode.props_bank_set.active = false;
            value.cur === ShowModelType.VERIFY && (this.propertyNode.props_bank_goin.active = true);
            value.cur === ShowModelType.MAIN_PANEL && (this.propertyNode.props_main_panel.active = true);
            value.cur === ShowModelType.SET_PWD && (this.propertyNode.props_bank_set.active = true);
          }, ["showModel"]);
          this.events.isMustSetPwd().then(result => {
            if (!this) return;

            if (result) {
              this.setState({
                showModel: ShowModelType.SET_PWD
              });
            } else {
              if ((_crd && getCookie === void 0 ? (_reportPossibleCrUseOfgetCookie({
                error: Error()
              }), getCookie) : getCookie)("autoSafeLogin")) {
                this.setState({
                  showModel: ShowModelType.MAIN_PANEL
                });
              }
            }
          });
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=191b11bda5633807252db9948ed705aa0a27919a.js.map