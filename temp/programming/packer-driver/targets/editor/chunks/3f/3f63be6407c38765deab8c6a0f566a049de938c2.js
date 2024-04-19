System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Node, BaseComponent, config, _dec, _class, _crd, ccclass, property, Hall_LoginPageV2;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginViewModel(extras) {
    _reporterNs.report("LoginViewModel", "../../viewModel/LoginViewDialogModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../../config", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      config = _unresolved_3.config;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1d970AVhE5Bia/WB91w/qw0", "Hall_LoginPageV2", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_LoginPageV2", Hall_LoginPageV2 = (_dec = ccclass('Hall_LoginPageV2'), _dec(_class = class Hall_LoginPageV2 extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.loginViewModel = void 0;
          this.propertyNode = {
            // props_guestBtu: new Node(),
            props_btn_loginAkun: new Node(),
            props_btn_login_service: new Node(),
            props_btn_login_situs: new Node(),
            props_btn_login_pengumuman: new Node(),
            props_btn_loginReturn: new Button(),
            props_public_wrap: new Node(),

            /**关闭发版框 */
            props_fb_btn_off: new Button()
          };
          this.props = {
            isAutoLogin: false
          };
          this.events = {
            onOpenLoginDialog: () => {},
            onLoginSuccess: () => {},
            openService: () => {},
            openHomePage: () => {},
            openActivity: () => {},
            retryHndler: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_loginAkun.on(Node.EventType.TOUCH_END, () => {
            this.events.onOpenLoginDialog();
          });
          this.propertyNode.props_btn_login_service.on(Node.EventType.TOUCH_END, () => {
            // sys.openURL(`${config.customerUrl}`)
            this.events.openService();
          });
          this.propertyNode.props_btn_login_situs.on(Node.EventType.TOUCH_END, () => {
            this.events.openHomePage();
          });
          this.propertyNode.props_btn_login_pengumuman.on(Node.EventType.TOUCH_END, () => {
            this.events.openActivity();
          });
          this.propertyNode.props_btn_loginReturn.node.on(Node.EventType.TOUCH_END, () => {
            this.events.retryHndler();
          });
          this.propertyNode.props_fb_btn_off.node.on(Node.EventType.TOUCH_END, () => {
            this.propertyNode.props_public_wrap.active = false;
          });
        }
        /**显示重试按钮 */


        showRetryButton() {
          this.propertyNode.props_btn_loginReturn.node.active = true;
        }

        useProps(key, value) {
          /**传入的props变更触发的函数 */
          // console.log(key, "change", value.cur)
        }

        bindUI() {
          this.propertyNode.props_public_wrap.active = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).maintenanceStatus;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3f63be6407c38765deab8c6a0f566a049de938c2.js.map