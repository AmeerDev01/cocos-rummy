System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Node, PageView, BaseComponent, thor_Audio, SoundPathDefine, _dec, _class, _crd, ccclass, property, Thor_HelpPanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfthor_Audio(extras) {
    _reporterNs.report("thor_Audio", "../index", _context.meta, extras);
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
      Button = _cc.Button;
      Node = _cc.Node;
      PageView = _cc.PageView;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      thor_Audio = _unresolved_3.thor_Audio;
    }, function (_unresolved_4) {
      SoundPathDefine = _unresolved_4.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ba1835kTXBGrJ9Qz71chz+L", "Thor_HelpPanel", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'log', 'Node', 'PageView']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Thor_HelpPanel", Thor_HelpPanel = (_dec = ccclass('Thor_HelpPanel'), _dec(_class = class Thor_HelpPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_btn_insst5roduce_close: new Button(),
            props_btn_introduce_next: new Button(),
            props_btn_introduce_last: new Button(),
            props_PageView_instroduce_banner: new PageView()
          };
          this.props = {};
          this.events = {
            closeHandler: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {}

        bindUI() {
          this.propertyNode.props_btn_insst5roduce_close.node.on(Button.EventType.CLICK, () => {
            this.events.closeHandler();
          }, true);
          this.propertyNode.props_btn_introduce_last.interactable = false;
          this.propertyNode.props_btn_introduce_last.node.on(Node.EventType.TOUCH_END, () => {
            (_crd && thor_Audio === void 0 ? (_reportPossibleCrUseOfthor_Audio({
              error: Error()
            }), thor_Audio) : thor_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).DRAGANDDROPTOTURNTHEPAGE);
            var index = this.propertyNode.props_PageView_instroduce_banner.getCurrentPageIndex();

            if (index > 0) {
              this.propertyNode.props_PageView_instroduce_banner.scrollToPage(index - 1, 0.5); // 切换到上一页，可设置切换动画时间
            }

            this.propertyNode.props_btn_introduce_last.interactable = index > 1;
            this.propertyNode.props_btn_introduce_next.interactable = true;
          });
          this.propertyNode.props_btn_introduce_next.node.on(Node.EventType.TOUCH_END, () => {
            (_crd && thor_Audio === void 0 ? (_reportPossibleCrUseOfthor_Audio({
              error: Error()
            }), thor_Audio) : thor_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).DRAGANDDROPTOTURNTHEPAGE);
            var index = this.propertyNode.props_PageView_instroduce_banner.getCurrentPageIndex();

            if (index < this.propertyNode.props_PageView_instroduce_banner.getPages().length - 1) {
              this.propertyNode.props_PageView_instroduce_banner.scrollToPage(index + 1, 0.5); // 切换到下一页，可设置切换动画时间
            }

            this.propertyNode.props_btn_introduce_last.interactable = true;
            this.propertyNode.props_btn_introduce_next.interactable = index < this.propertyNode.props_PageView_instroduce_banner.getPages().length - 2;
          });
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b88be20a2c436cfb1e2ee8274679899b25a39aa1.js.map