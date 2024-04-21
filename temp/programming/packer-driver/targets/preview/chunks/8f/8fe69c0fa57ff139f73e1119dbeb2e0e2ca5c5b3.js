System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, PageView, BaseComponent, GxfcV2_Audio, SoundPathDefine, _dec, _class, _crd, ccclass, property, GxfcV2_RulePanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGxfcV2_Audio(extras) {
    _reporterNs.report("GxfcV2_Audio", "../index", _context.meta, extras);
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
      Node = _cc.Node;
      PageView = _cc.PageView;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      GxfcV2_Audio = _unresolved_3.GxfcV2_Audio;
    }, function (_unresolved_4) {
      SoundPathDefine = _unresolved_4.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ea2c15GL4RNDKKcWHPdwJLJ", "GxfcV2_RulePanel", undefined);

      __checkObsolete__(['_decorator', 'Node', 'PageView']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GxfcV2_RulePanel", GxfcV2_RulePanel = (_dec = ccclass('GxfcV2_RulePanel'), _dec(_class = class GxfcV2_RulePanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_btnClose: new Node(),
            props_img_rule_1: new Node(),
            props_img_rule_2: new Node(),
            props_img_rule_3: new Node(),
            props_img_rule_4: new Node(),
            props_img_rule_5: new Node(),
            props_PageView: new PageView(),
            props_indicator: new Node()
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
            (_crd && GxfcV2_Audio === void 0 ? (_reportPossibleCrUseOfGxfcV2_Audio({
              error: Error()
            }), GxfcV2_Audio) : GxfcV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).btn_click);
            this.events.onClose();
          });
          this.propertyNode.props_img_rule_1.on(Node.EventType.TOUCH_MOVE, () => {
            (_crd && GxfcV2_Audio === void 0 ? (_reportPossibleCrUseOfGxfcV2_Audio({
              error: Error()
            }), GxfcV2_Audio) : GxfcV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).turn);
            this.scrollPageViewListener();
          });
          this.propertyNode.props_img_rule_2.on(Node.EventType.TOUCH_MOVE, () => {
            (_crd && GxfcV2_Audio === void 0 ? (_reportPossibleCrUseOfGxfcV2_Audio({
              error: Error()
            }), GxfcV2_Audio) : GxfcV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).turn);
            this.scrollPageViewListener();
          });
          this.propertyNode.props_img_rule_3.on(Node.EventType.TOUCH_MOVE, () => {
            (_crd && GxfcV2_Audio === void 0 ? (_reportPossibleCrUseOfGxfcV2_Audio({
              error: Error()
            }), GxfcV2_Audio) : GxfcV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).turn);
            this.scrollPageViewListener();
          });
          this.propertyNode.props_img_rule_4.on(Node.EventType.TOUCH_MOVE, () => {
            (_crd && GxfcV2_Audio === void 0 ? (_reportPossibleCrUseOfGxfcV2_Audio({
              error: Error()
            }), GxfcV2_Audio) : GxfcV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).turn);
            this.scrollPageViewListener();
          });
          this.propertyNode.props_img_rule_5.on(Node.EventType.TOUCH_MOVE, () => {
            (_crd && GxfcV2_Audio === void 0 ? (_reportPossibleCrUseOfGxfcV2_Audio({
              error: Error()
            }), GxfcV2_Audio) : GxfcV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).turn);
            this.scrollPageViewListener();
          });
        }

        useProps(key, value) {}

        scrollPageViewListener() {
          if (!this.propertyNode) return;
          this.propertyNode.props_PageView.node.on(PageView.EventType.SCROLL_ENDED, pageView => {
            if (pageView.curPageIdx === 0) {
              pageView.scrollToPage(pageView.getPages().length - 5, 0);
              this.showIndex(0);
            } else if (pageView.curPageIdx + 1 === 2) {
              pageView.scrollToPage(1, 0);
              this.showIndex(1);
            } else if (pageView.curPageIdx + 1 === 3) {
              pageView.scrollToPage(2, 0);
              this.showIndex(2);
            } else if (pageView.curPageIdx + 1 === 4) {
              pageView.scrollToPage(3, 0);
              this.showIndex(3);
            } else if (pageView.curPageIdx + 1 === 5) {
              pageView.scrollToPage(4, 0);
              this.showIndex(4);
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
//# sourceMappingURL=8fe69c0fa57ff139f73e1119dbeb2e0e2ca5c5b3.js.map