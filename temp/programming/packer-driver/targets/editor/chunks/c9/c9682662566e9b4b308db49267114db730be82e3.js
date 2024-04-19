System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, PageView, BaseComponent, _dec, _class, _crd, ccclass, property, ThorV2_RulePanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
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
      PageView = _cc.PageView;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b3934weckhCuI7E5C4hFH/+", "ThorV2_RulePanel", undefined);

      __checkObsolete__(['_decorator', 'Node', 'PageView']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ThorV2_RulePanel", ThorV2_RulePanel = (_dec = ccclass('ThorV2_RulePanel'), _dec(_class = class ThorV2_RulePanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_PageView_instroduce_banner: new Node(),
            props_btn_insst5roduce_close: new Node(),
            props_btn_introduce_next: new Node(),
            props_btn_introduce_last: new Node()
          };
          this.props = {};
          this.events = {
            onClose: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_insst5roduce_close.on(Node.EventType.TOUCH_END, () => {
            this.events.onClose();
          });
          this.propertyNode.props_btn_introduce_next.on(Node.EventType.TOUCH_END, () => {
            const pageView = this.propertyNode.props_PageView_instroduce_banner.getComponent(PageView);
            let curPageIdx = pageView.curPageIdx + 1;

            if (curPageIdx >= pageView.getPages().length) {
              curPageIdx = 0; // pageView.scrollToPage(curPageIdx, 0);

              pageView.setCurrentPageIndex(curPageIdx);
            } else {
              pageView.setCurrentPageIndex(curPageIdx);
            }
          });
          this.propertyNode.props_btn_introduce_last.on(Node.EventType.TOUCH_END, () => {
            const pageView = this.propertyNode.props_PageView_instroduce_banner.getComponent(PageView);
            let curPageIdx = pageView.curPageIdx - 1;

            if (curPageIdx < 0) {
              curPageIdx = pageView.getPages().length - 1; // pageView.scrollToPage(curPageIdx, 0);

              pageView.setCurrentPageIndex(curPageIdx);
            } else {
              pageView.setCurrentPageIndex(curPageIdx);
            }
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
//# sourceMappingURL=c9682662566e9b4b308db49267114db730be82e3.js.map