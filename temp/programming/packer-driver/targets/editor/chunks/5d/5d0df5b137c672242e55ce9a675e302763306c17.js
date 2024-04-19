System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Node, sys, WebView, BaseComponent, config, _dec, _class, _crd, ccclass, property, Hall_Service;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
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
      sys = _cc.sys;
      WebView = _cc.WebView;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      config = _unresolved_3.config;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eb8f9JX+4JL85YAhrYtco28", "Hall_Service", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node', 'sys', 'WebView']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_Service", Hall_Service = (_dec = ccclass('Hall_Service'), _dec(_class = class Hall_Service extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_btn_service_close: new Button(),
            props_btn_service_browser: new Button(),
            props_btn_service_officialWebsite: new Button(),
            props_webView_service: new WebView()
          };
          this.props = {
            openUrl: ''
          };
          this.events = {
            onClosePanel: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_service_close.node.on(Node.EventType.TOUCH_END, () => {
            this.events.onClosePanel();
          });
          this.propertyNode.props_btn_service_browser.node.on(Node.EventType.TOUCH_END, () => {
            sys.openURL((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).customerOutUrl);
            this.events.onClosePanel();
          });
          this.propertyNode.props_btn_service_officialWebsite.node.on(Node.EventType.TOUCH_END, () => {
            sys.openURL((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).shareUrl);
            this.events.onClosePanel();
          });
        }

        useProps(key, value) {
          if (key === "openUrl") {
            this.propertyNode.props_webView_service.url = this.props.openUrl;
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
//# sourceMappingURL=5d0df5b137c672242e55ce9a675e302763306c17.js.map