System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, EditBox, Label, Node, BaseComponent, ApiUrl, fetcher, global, lang, addToastAction, InputValidator, ModalBox, _dec, _class, _crd, ccclass, property, Hall_Upgrade;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOffetcher(extras) {
    _reporterNs.report("fetcher", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputValidator(extras) {
    _reporterNs.report("InputValidator", "../../utils/InputValidator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModalBox(extras) {
    _reporterNs.report("ModalBox", "../../common/ModalBox", _context.meta, extras);
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
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      ApiUrl = _unresolved_3.ApiUrl;
    }, function (_unresolved_4) {
      fetcher = _unresolved_4.fetcher;
      global = _unresolved_4.global;
      lang = _unresolved_4.lang;
    }, function (_unresolved_5) {
      addToastAction = _unresolved_5.addToastAction;
    }, function (_unresolved_6) {
      InputValidator = _unresolved_6.default;
    }, function (_unresolved_7) {
      ModalBox = _unresolved_7.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6fe49wS7VdPwIXr57/6HrIq", "Hall_Upgrade", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EditBox', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_Upgrade", Hall_Upgrade = (_dec = ccclass('Hall_Upgrade'), _dec(_class = class Hall_Upgrade extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_btn_spr_upgrade_close: new Button(),

            /**账户名 */
            props_intput_akun: new EditBox(),

            /**密码 */
            props_intput_sandi: new EditBox(),

            /**确认密码 */
            props_intput_kSandi: new EditBox(),

            /**升级会获取到的金币 */
            props_text_shuzi: new Label(),

            /**确认 */
            props_btn_sure: new Button(),
            props_label_uid: new Label()
          };
          this.props = {
            memberId: ""
          };
          this.events = {
            onClosePanel: () => {},
            doneHandler: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_spr_upgrade_close.node.on(Node.EventType.TOUCH_END, () => {
            this.events.onClosePanel();
          });
          this.propertyNode.props_btn_sure.node.on(Node.EventType.TOUCH_END, () => {
            const memberName = this.propertyNode.props_intput_akun.string.trim();
            const password = this.propertyNode.props_intput_sandi.string.trim();
            const password_re = this.propertyNode.props_intput_kSandi.string.trim();
            new (_crd && InputValidator === void 0 ? (_reportPossibleCrUseOfInputValidator({
              error: Error()
            }), InputValidator) : InputValidator)().begin().isIDAPhoneNumber(memberName).isChartLength([6, 30], password).isChartLength([6, 30], password_re).done(() => {
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

              (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
                error: Error()
              }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
                error: Error()
              }), ApiUrl) : ApiUrl).MEMBER_UPGRADES, {
                memberId: this.props.memberId,
                memberName,
                password
              }).then(data => {
                //操作成功
                if (data !== -1 && data !== 0) {
                  // global.hallDispatch(addToastAction({ content: lang.write(k => k.BindPhoneModule.BindPhoneChange, {}, { placeStr: "操作成功" }) }))
                  (_crd && ModalBox === void 0 ? (_reportPossibleCrUseOfModalBox({
                    error: Error()
                  }), ModalBox) : ModalBox).Instance().show({
                    content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                      error: Error()
                    }), lang) : lang).write(k => k.withdrawal.withdrawalSuccess, {
                      gold: data
                    }, {
                      placeStr: "升级账号成功获取金币"
                    }),
                    type: "Prompt"
                  }, () => {
                    this.events.doneHandler(); // 绑定手机号码不发送事件
                    // registerAppsflyerEvents(this.props.memberId, password)

                    return true;
                  });
                } else {
                  (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                    error: Error()
                  }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                    error: Error()
                  }), addToastAction) : addToastAction)({
                    content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                      error: Error()
                    }), lang) : lang).write(k => k.BindPhoneModule.BindPhoneChange, {}, {
                      placeStr: "操作成功"
                    })
                  }));
                  this.events.doneHandler();
                }
              }).catch(e => {
                console.log(e);
              });
            });
          });
        }

        useProps(key, value) {
          if (key === "memberId") {
            this.propertyNode.props_label_uid.string = this.props.memberId;
          }
        }

        bindUI() {
          (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
            error: Error()
          }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
            error: Error()
          }), ApiUrl) : ApiUrl).GET_BIND_PHONE_GOLD, {}, 'get').then(rsp => {
            this.propertyNode.props_text_shuzi.string = rsp;
          }).catch(e => {});
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a9b76f784ea21ad9111278ca0bc33ad2c902c533.js.map