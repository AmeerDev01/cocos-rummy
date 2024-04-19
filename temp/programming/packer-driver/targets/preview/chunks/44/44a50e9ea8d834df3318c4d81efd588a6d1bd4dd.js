System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, EditBox, Node, BaseComponent, fetcher, global, lang, addToastAction, ToastType, InputValidator, ApiUrl, _dec, _class, _crd, ccclass, property, Hall_ChangePassword;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
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

  function _reportPossibleCrUseOfToastType(extras) {
    _reporterNs.report("ToastType", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputValidator(extras) {
    _reporterNs.report("InputValidator", "../../utils/InputValidator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../apiUrl", _context.meta, extras);
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
      fetcher = _unresolved_3.fetcher;
      global = _unresolved_3.global;
      lang = _unresolved_3.lang;
    }, function (_unresolved_4) {
      addToastAction = _unresolved_4.addToastAction;
      ToastType = _unresolved_4.ToastType;
    }, function (_unresolved_5) {
      InputValidator = _unresolved_5.default;
    }, function (_unresolved_6) {
      ApiUrl = _unresolved_6.ApiUrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8d7edfh3GdOz7AjpJyf8vgs", "Hall_ChangePassword", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EditBox', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_ChangePassword", Hall_ChangePassword = (_dec = ccclass('Hall_ChangePassword'), _dec(_class = class Hall_ChangePassword extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_btn_spr_change_close: new Button(),
            props_btn_sure: new Button(),

            /**旧密码 */
            props_intput_sandiL: new EditBox(),

            /**新密码 */
            props_intput_sandiB: new EditBox(),

            /**密码确认 */
            props_intput_kSandi: new EditBox()
          };
          this.props = {};
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
          this.propertyNode.props_btn_spr_change_close.node.on(Node.EventType.TOUCH_END, () => {
            this.events.onClosePanel();
          }); // 确认

          this.propertyNode.props_btn_sure.node.on(Node.EventType.TOUCH_END, () => {
            var oldPwd = this.propertyNode.props_intput_sandiL.string.trim();
            var newPwd = this.propertyNode.props_intput_sandiB.string.trim();
            var newPwd_re = this.propertyNode.props_intput_kSandi.string.trim();

            if (newPwd !== newPwd_re) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.HallModule.pwdRepetitionError, {}, {
                  placeStr: "两次输入的密码不一致"
                }),
                type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                  error: Error()
                }), ToastType) : ToastType).ERROR
              }));
              return;
            }

            new (_crd && InputValidator === void 0 ? (_reportPossibleCrUseOfInputValidator({
              error: Error()
            }), InputValidator) : InputValidator)().begin().isChartLength([6, 30], oldPwd).isChartLength([6, 30], newPwd).isChartLength([6, 30], newPwd_re).done(() => {
              (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
                error: Error()
              }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
                error: Error()
              }), ApiUrl) : ApiUrl).RESET_PASSWORD, {
                password: newPwd,
                oldPassword: oldPwd
              }).then(data => {
                //操作成功
                (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                  error: Error()
                }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                  error: Error()
                }), addToastAction) : addToastAction)({
                  content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                    error: Error()
                  }), lang) : lang).write(k => k.BindPhoneModule.BindPhoneChange, {}, {
                    placeStr: "操作成功"
                  }),
                  type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                    error: Error()
                  }), ToastType) : ToastType).SUCCESS
                }));
                this.events.doneHandler();
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
//# sourceMappingURL=44a50e9ea8d834df3318c4d81efd588a6d1bd4dd.js.map