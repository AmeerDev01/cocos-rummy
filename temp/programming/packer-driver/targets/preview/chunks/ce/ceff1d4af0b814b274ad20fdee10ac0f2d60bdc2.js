System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Color, Label, Node, PageView, Toggle, BaseComponent, playBtnClick, playTurn, initToggle, _dec, _class, _crd, ccclass, property, GodWealth_helpPanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayBtnClick(extras) {
    _reporterNs.report("playBtnClick", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayTurn(extras) {
    _reporterNs.report("playTurn", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitToggle(extras) {
    _reporterNs.report("initToggle", "../../../utils/tool", _context.meta, extras);
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
      Color = _cc.Color;
      Label = _cc.Label;
      Node = _cc.Node;
      PageView = _cc.PageView;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      playBtnClick = _unresolved_3.playBtnClick;
      playTurn = _unresolved_3.playTurn;
    }, function (_unresolved_4) {
      initToggle = _unresolved_4.initToggle;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "101df1pOVlCe5YR/zeoCsWZ", "GodWealth_helpPanel", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'Component', 'Label', 'Node', 'PageView', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GodWealth_helpPanel", GodWealth_helpPanel = (_dec = ccclass('GodWealth_helpPanel'), _dec(_class = class GodWealth_helpPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_btn_close: new Button(),
            props_guize_sg_1: new Node(),
            props_guize_sg_2: new Node(),
            props_Toggle_Panel: new Node(),
            props_indicator: new Node(),
            props_PageView: new PageView()
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
          this.propertyNode.props_btn_close.node.on(Button.EventType.CLICK, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.closeHandler();
          }, true);
          (_crd && initToggle === void 0 ? (_reportPossibleCrUseOfinitToggle({
            error: Error()
          }), initToggle) : initToggle)(this.propertyNode.props_Toggle_Panel, this.node, new GodWealth_helpPanel.EventHandler(), "GodWealth_helpPanel", "channelToggleCallback");
          this.propertyNode.props_guize_sg_1.on(Node.EventType.TOUCH_MOVE, () => {
            (_crd && playTurn === void 0 ? (_reportPossibleCrUseOfplayTurn({
              error: Error()
            }), playTurn) : playTurn)();
            this.scrollPageViewListener();
          });
          this.propertyNode.props_guize_sg_2.on(Node.EventType.TOUCH_MOVE, () => {
            (_crd && playTurn === void 0 ? (_reportPossibleCrUseOfplayTurn({
              error: Error()
            }), playTurn) : playTurn)();
            this.scrollPageViewListener();
          });
        }

        useProps(key, value) {}
        /**Toggle选中金币的回调 效果切换*/


        channelToggleCallback(event, customEventData) {
          var toggleArr = event.target["parent"].children;

          for (var i = 0; i < toggleArr.length; i++) {
            if (toggleArr[i].getComponent(Toggle).isChecked) {
              toggleArr[i].getChildByName("Panel_Label").getComponent(Label).color = new Color().fromHEX("#942600");
            } else {
              toggleArr[i].getChildByName("Panel_Label").getComponent(Label).color = new Color().fromHEX("#F8C55C");
            }
          }
        }

        scrollPageViewListener() {
          if (!this.propertyNode) return;
          this.propertyNode.props_PageView.node.on(PageView.EventType.SCROLL_ENDED, pageView => {
            if (pageView.curPageIdx === 0) {
              pageView.scrollToPage(pageView.getPages().length - 2, 0);
              this.showIndex(0);
            } else if (pageView.curPageIdx + 1 === pageView.getPages().length) {
              pageView.scrollToPage(1, 0);
              this.showIndex(1);
            }

            var page = pageView.getPages()[pageView.curPageIdx];
          });
        }

        showIndex(num) {
          if (!this.propertyNode) return;
          var arr = this.propertyNode.props_indicator.children.filter(v => v.name.startsWith("props_indicator_toggle"));
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
//# sourceMappingURL=ceff1d4af0b814b274ad20fdee10ac0f2d60bdc2.js.map