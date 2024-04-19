System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Node, PageView, BaseComponent, playBtnClick, playTurn, _dec, _class, _crd, ccclass, property, phoenix_helpPanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayBtnClick(extras) {
    _reporterNs.report("playBtnClick", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayTurn(extras) {
    _reporterNs.report("playTurn", "../index", _context.meta, extras);
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
      playBtnClick = _unresolved_3.playBtnClick;
      playTurn = _unresolved_3.playTurn;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9d549564/JJtZU8Q/tG4B/n", "phoenix_helpPanel", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'instantiate', 'Node', 'PageView']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("phoenix_helpPanel", phoenix_helpPanel = (_dec = ccclass('phoenix_helpPanel'), _dec(_class = class phoenix_helpPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_btn_insst5roduce_close: new Button(),
            props_img_rule_1: new Node(),
            props_img_rule_2: new Node(),
            props_img_rule_3: new Node(),
            props_indexMark: new Node(),
            props_PageView: new PageView(),
            props_indicator: new Node(),
            props_indicator_toggle1: new Node(),
            props_indicator_toggle2: new Node(),
            props_indicator_toggle3: new Node()
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

        bindEvent() {
          this.propertyNode.props_btn_insst5roduce_close.node.on(Button.EventType.CLICK, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.closeHandler();
          }, true);
          this.propertyNode.props_img_rule_1.on(Node.EventType.TOUCH_MOVE, () => {
            (_crd && playTurn === void 0 ? (_reportPossibleCrUseOfplayTurn({
              error: Error()
            }), playTurn) : playTurn)();
            this.scrollPageViewListener();
          });
          this.propertyNode.props_img_rule_2.on(Node.EventType.TOUCH_MOVE, () => {
            (_crd && playTurn === void 0 ? (_reportPossibleCrUseOfplayTurn({
              error: Error()
            }), playTurn) : playTurn)();
            this.scrollPageViewListener();
          });
          this.propertyNode.props_img_rule_3.on(Node.EventType.TOUCH_MOVE, () => {
            (_crd && playTurn === void 0 ? (_reportPossibleCrUseOfplayTurn({
              error: Error()
            }), playTurn) : playTurn)();
            this.scrollPageViewListener();
          });
        }

        useProps(key, value) {}

        scrollPageViewListener() {
          if (!this.propertyNode) return;
          this.propertyNode.props_PageView.node.on(PageView.EventType.SCROLL_ENDED, pageView => {
            if (pageView.curPageIdx === 0) {
              pageView.scrollToPage(pageView.getPages().length - 3, 0);
              this.showIndex(0);
            } else if (pageView.curPageIdx + 1 === pageView.getPages().length - 1) {
              pageView.scrollToPage(1, 0);
              this.showIndex(1);
            } else if (pageView.curPageIdx + 1 === pageView.getPages().length) {
              pageView.scrollToPage(2, 0);
              this.showIndex(2);
            }

            const page = pageView.getPages()[pageView.curPageIdx];
          });
        }

        showIndex(num) {
          if (!this.propertyNode) return;
          let arr = this.propertyNode.props_indicator.children.filter(v => v.name.startsWith("props_indicator_toggle"));
          arr.forEach((item, i) => {
            if (i === num) {
              item.getChildByName("CheckMark").active = true;
            } else {
              item.getChildByName("CheckMark").active = false;
            }
          });
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=72011eda5850dad0398931f33590380b8af196ea.js.map