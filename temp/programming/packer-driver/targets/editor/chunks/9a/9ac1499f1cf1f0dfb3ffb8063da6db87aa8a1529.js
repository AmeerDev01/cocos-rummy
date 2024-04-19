System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Label, Node, WebView, BaseComponent, global, lang, addToastAction, ToastType, _dec, _class, _crd, ccclass, property, Common_ModalBox;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastType(extras) {
    _reporterNs.report("ToastType", "../../hall/store/actions/baseBoard", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      WebView = _cc.WebView;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      global = _unresolved_3.global;
      lang = _unresolved_3.lang;
    }, function (_unresolved_4) {
      addToastAction = _unresolved_4.addToastAction;
      ToastType = _unresolved_4.ToastType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "783ecTuB1lM8Yum+CT/5fTw", "Common_ModalBox", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'instantiate', 'Label', 'Node', 'UITransform', 'Vec3', 'WebView']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Common_ModalBox", Common_ModalBox = (_dec = ccclass('Common_ModalBox'), _dec(_class = class Common_ModalBox extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.props = {
            content: "",
            type: "Confirm",
            url: ""
          };
          this.events = {
            onCloseHandler: () => {},
            onCancleHandler: () => true,
            onOkHandler: () => true
          };
          this.propertyNode = {
            props_Label_content: new Label(),
            props_btn_updata_cancel: new Button(),
            props_btn_updata_ok: new Button(),
            props_spr_updata_tipsBg: new Node(),
            props_webView_spr_updata_tipsBg: new Node(),
            props_WebView: new WebView(),
            props_btn_dt_off: new Button()
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_updata_cancel.node.on(Node.EventType.TOUCH_END, () => {
            if (this.events.onCancleHandler()) {
              this.events.onCloseHandler();
            }
          });
          this.propertyNode.props_btn_updata_ok.node.on(Node.EventType.TOUCH_END, () => {
            if (this.events.onOkHandler()) {
              this.events.onCloseHandler();
            }
          });
          this.propertyNode.props_btn_dt_off.node.on(Node.EventType.TOUCH_END, () => {
            this.events.onCloseHandler();
          });
        }

        useProps(key, value) {
          if (key === "content") {
            this.propertyNode.props_spr_updata_tipsBg.active = true;
            this.propertyNode.props_Label_content.string = this.props.content;
          }

          if (key === "type") {
            if (this.props.type === "Confirm") {
              this.propertyNode.props_btn_updata_cancel.node.active = true;
              this.propertyNode.props_btn_updata_ok.node.active = true;
            } else if (this.props.type === "Prompt") {
              this.propertyNode.props_btn_updata_cancel.node.active = false;
              this.propertyNode.props_btn_updata_ok.node.active = true;
            }
          }

          if (key === "url" && this.props.url) {
            this.propertyNode.props_spr_updata_tipsBg.active = false;
            this.propertyNode.props_webView_spr_updata_tipsBg.active = true;
            this.propertyNode.props_WebView.url = this.props.url;
          }
        }

        bindUI() {
          this.propertyNode.props_webView_spr_updata_tipsBg.active = this.props.url ? true : false;

          if (this.props.url) {
            this.propertyNode.props_spr_updata_tipsBg.active = false;
            this.propertyNode.props_WebView.url = this.props.url;
            this.propertyNode.props_WebView.node.on(WebView.EventType.ERROR, () => {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.MainPaneModule.LoadUrlError, {}, {
                  placeStr: "此链接无法加载"
                }),
                type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                  error: Error()
                }), ToastType) : ToastType).ERROR
              }));
            }, this);
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9ac1499f1cf1f0dfb3ffb8063da6db87aa8a1529.js.map