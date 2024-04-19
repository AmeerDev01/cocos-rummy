System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Color, Label, Node, PageView, Toggle, BaseComponent, godWealthV2_Audio, initToggle, SoundPathDefine, _dec, _class, _crd, ccclass, property, GodWealthV2_helpPanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgodWealthV2_Audio(extras) {
    _reporterNs.report("godWealthV2_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitToggle(extras) {
    _reporterNs.report("initToggle", "../../../utils/tool", _context.meta, extras);
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
      Color = _cc.Color;
      Label = _cc.Label;
      Node = _cc.Node;
      PageView = _cc.PageView;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      godWealthV2_Audio = _unresolved_3.godWealthV2_Audio;
    }, function (_unresolved_4) {
      initToggle = _unresolved_4.initToggle;
    }, function (_unresolved_5) {
      SoundPathDefine = _unresolved_5.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "96f33HsvfNL6IuNzAadBX0H", "GodWealthV2_helpPanel", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'Component', 'Label', 'Node', 'PageView', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GodWealthV2_helpPanel", GodWealthV2_helpPanel = (_dec = ccclass('GodWealthV2_helpPanel'), _dec(_class = class GodWealthV2_helpPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
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
            (_crd && godWealthV2_Audio === void 0 ? (_reportPossibleCrUseOfgodWealthV2_Audio({
              error: Error()
            }), godWealthV2_Audio) : godWealthV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BTN_CLICK);
            this.events.closeHandler();
          }, true);
          (_crd && initToggle === void 0 ? (_reportPossibleCrUseOfinitToggle({
            error: Error()
          }), initToggle) : initToggle)(this.propertyNode.props_Toggle_Panel, this.node, new GodWealthV2_helpPanel.EventHandler(), "GodWealthV2_helpPanel", "channelToggleCallback");
          this.propertyNode.props_guize_sg_1.on(Node.EventType.TOUCH_MOVE, () => {
            (_crd && godWealthV2_Audio === void 0 ? (_reportPossibleCrUseOfgodWealthV2_Audio({
              error: Error()
            }), godWealthV2_Audio) : godWealthV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).TURN);
            this.scrollPageViewListener();
          });
          this.propertyNode.props_guize_sg_2.on(Node.EventType.TOUCH_MOVE, () => {
            (_crd && godWealthV2_Audio === void 0 ? (_reportPossibleCrUseOfgodWealthV2_Audio({
              error: Error()
            }), godWealthV2_Audio) : godWealthV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).TURN);
            this.scrollPageViewListener();
          });
        }

        useProps(key, value) {}
        /**Toggle选中金币的回调 效果切换*/


        channelToggleCallback(event, customEventData) {
          var toggleArr = event.target["parent"].children;

          for (var i = 0; i < toggleArr.length; i++) {
            if (toggleArr[i].getComponent(Toggle).isChecked) {
              (_crd && godWealthV2_Audio === void 0 ? (_reportPossibleCrUseOfgodWealthV2_Audio({
                error: Error()
              }), godWealthV2_Audio) : godWealthV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).BTN_CLICK);
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
//# sourceMappingURL=7e35607b3eac0944acf645c70dad585ff43763a0.js.map