System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Node, sys, WebView, BaseComponent, config, _dec, _class, _crd, ccclass, property, Hall_WaterHelp;

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

      _cclegacy._RF.push({}, "11a01SGdHRGD6yzceQg9IL+", "Hall_WaterHelp", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node', 'sys', 'WebView']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_WaterHelp", Hall_WaterHelp = (_dec = ccclass('Hall_WaterHelp'), _dec(_class = class Hall_WaterHelp extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_btn_spr_shareHelp_close: new Button(),
            props_web_help: new WebView()
          };
          this.props = {};
          this.events = {
            onCloseHandler: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_spr_shareHelp_close.node.on(Node.EventType.TOUCH_END, () => {
            this.events.onCloseHandler();
          });
        }

        useProps(key, value) {}

        bindUI() {
          this.propertyNode.props_web_help.url = `${(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).backwaterHelpUrl}?token=${sys.localStorage.getItem('token')}`;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0c9c29979a5e0af9a692b4e842407a791040a429.js.map