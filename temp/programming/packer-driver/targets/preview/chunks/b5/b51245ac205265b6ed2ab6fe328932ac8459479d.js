System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, sys, BaseComponent, ApiUrl, fetcher, deviceInfo, getPackageName, _dec, _class, _crd, ccclass, property, Hall_LoginPage;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginViewModel(extras) {
    _reporterNs.report("LoginViewModel", "../viewModel/LoginViewDialogModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOffetcher(extras) {
    _reporterNs.report("fetcher", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdeviceInfo(extras) {
    _reporterNs.report("deviceInfo", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetPackageName(extras) {
    _reporterNs.report("getPackageName", "../../common/bridge", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      ApiUrl = _unresolved_3.ApiUrl;
    }, function (_unresolved_4) {
      fetcher = _unresolved_4.fetcher;
    }, function (_unresolved_5) {
      deviceInfo = _unresolved_5.deviceInfo;
    }, function (_unresolved_6) {
      getPackageName = _unresolved_6.getPackageName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a4047xYK3pH06JZEc1Ht3Dd", "Hall_LoginPage", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_LoginPage", Hall_LoginPage = (_dec = ccclass('Hall_LoginPage'), _dec(_class = class Hall_LoginPage extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.loginViewModel = void 0;
          this.propertyNode = {
            props_guestBtu: new Node(),
            props_loginBtu: new Node(),
            props_btn_login_service: new Node(),
            props_btn_login_situs: new Node(),
            props_btn_login_melayani: new Node()
          };
          this.props = {};
          this.events = {
            onOpenLoginDialog: () => {},
            onLoginSuccess: () => {},
            openService: () => {},
            openHomePage: () => {},
            openActivity: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_loginBtu.on(Node.EventType.TOUCH_END, () => {
            this.events.onOpenLoginDialog();
          });
          this.propertyNode.props_btn_login_service.on(Node.EventType.TOUCH_END, () => {
            // sys.openURL(`${config.customerUrl}`)
            this.events.openService();
          });
          this.propertyNode.props_btn_login_situs.on(Node.EventType.TOUCH_END, () => {
            this.events.openHomePage();
          });
          this.propertyNode.props_btn_login_melayani.on(Node.EventType.TOUCH_END, () => {
            this.events.openActivity();
          });
          this.propertyNode.props_guestBtu.on(Node.EventType.TOUCH_END, () => {
            (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
              error: Error()
            }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
              error: Error()
            }), ApiUrl) : ApiUrl).LOGIN_OUT, {
              type: 5,
              macCode: (_crd && deviceInfo === void 0 ? (_reportPossibleCrUseOfdeviceInfo({
                error: Error()
              }), deviceInfo) : deviceInfo).getUniqueId(),
              pkgCode: (_crd && getPackageName === void 0 ? (_reportPossibleCrUseOfgetPackageName({
                error: Error()
              }), getPackageName) : getPackageName)()
            }).then(data => {
              //登录成功
              sys.localStorage.setItem('token', data);
              this.events.onLoginSuccess();
            }).catch(e => {
              console.log(e);
            });
          });
        }

        useProps(key, value) {
          /**传入的props变更触发的函数 */
          // console.log(key, "change", value.cur)
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b51245ac205265b6ed2ab6fe328932ac8459479d.js.map