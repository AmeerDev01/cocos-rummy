System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, BaseComponent, _dec, _class, _crd, ccclass, property, DragonV2_RulePanel;

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
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "42f9bquGwNG3Z2J5K2eE+UA", "DragonV2_RulePanel", undefined);

      __checkObsolete__(['_decorator', 'Node', 'PageView']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DragonV2_RulePanel", DragonV2_RulePanel = (_dec = ccclass('DragonV2_RulePanel'), _dec(_class = class DragonV2_RulePanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_helpPage: new Node(),
            props_btnClose: new Node() // props_btnRight: new Node(),
            // props_btnLeft: new Node(),

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
          this.propertyNode.props_btnClose.on(Node.EventType.TOUCH_END, () => {
            this.events.onClose();
          }); // this.propertyNode.props_btnRight.on(Node.EventType.TOUCH_END, () => {
          // 	const pageView = this.propertyNode.props_helpPage.getComponent(PageView)
          // 	let curPageIdx = pageView.curPageIdx + 1;
          // 	if (curPageIdx >= pageView.getPages().length) {
          // 		curPageIdx = 0;
          // 		// pageView.scrollToPage(curPageIdx, 0);
          // 		pageView.setCurrentPageIndex(curPageIdx);
          // 	} else {
          // 		pageView.setCurrentPageIndex(curPageIdx);
          // 	}
          // })
          // this.propertyNode.props_btnLeft.on(Node.EventType.TOUCH_END, () => {
          // 	const pageView = this.propertyNode.props_helpPage.getComponent(PageView)
          // 	let curPageIdx = pageView.curPageIdx - 1;
          // 	if (curPageIdx < 0) {
          // 		curPageIdx = pageView.getPages().length - 1;
          // 		// pageView.scrollToPage(curPageIdx, 0);
          // 		pageView.setCurrentPageIndex(curPageIdx);
          // 	} else {
          // 		pageView.setCurrentPageIndex(curPageIdx);
          // 	}
          // })
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
//# sourceMappingURL=185bfd9ad394887004d40a86aa5c96792e444c71.js.map