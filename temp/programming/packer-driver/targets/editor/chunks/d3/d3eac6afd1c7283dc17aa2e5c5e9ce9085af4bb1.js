System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Label, Node, PageView, BaseComponent, starlight_Audio, SoundPathDefine, _dec, _class, _crd, ccclass, property, Starlight_HelpPanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstarlight_Audio(extras) {
    _reporterNs.report("starlight_Audio", "../index", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      PageView = _cc.PageView;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      starlight_Audio = _unresolved_3.starlight_Audio;
    }, function (_unresolved_4) {
      SoundPathDefine = _unresolved_4.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eb559agnBRNWaLl7O0Vm4uG", "Starlight_HelpPanel", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'log', 'Node', 'PageView']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Starlight_HelpPanel", Starlight_HelpPanel = (_dec = ccclass('Starlight_HelpPanel'), _dec(_class = class Starlight_HelpPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.basicMagnification = {
            yellow_gem: [5, 15, 40],
            blue_green_gem: [8, 18, 80],
            green_gem: [10, 20, 100],
            blue_gem: [16, 24, 160],
            red_gem: [20, 30, 200],
            star: [30, 40, 240],
            moon: [40, 100, 300],
            heart: [50, 200, 500],
            sun: [200, 500, 1000],
            scatter: [60, 100, 2000]
          };
          this.propertyNode = {
            props_btn_insst5roduce_close: new Button(),
            props_btn_introduce_next: new Button(),
            props_btn_introduce_last: new Button(),
            props_PageView_instroduce_banner: new PageView(),
            props_spr_page1: new Node()
          };
          this.props = {
            ante: 0
          };
          this.events = {
            closeHandler: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === 'ante') {
            this.renderingRules(value.cur);
          }
        }

        renderingRules(num) {
          this.basicMagnification;

          for (let i in this.basicMagnification) {
            this.propertyNode.props_spr_page1.children.forEach(item => {
              if (item.name === i) {
                item.getChildByName('Label_rate_num1').getChildByName('label_num').getComponent(Label).string = (this.basicMagnification[i][0] * num).formatAmountWithLetter();
                item.getChildByName('Label_rate_num2').getChildByName('label_num').getComponent(Label).string = (this.basicMagnification[i][1] * num).formatAmountWithLetter();
                item.getChildByName('Label_rate_num3').getChildByName('label_num').getComponent(Label).string = (this.basicMagnification[i][2] * num).formatAmountWithLetter();
              }
            });
          }
        }

        bindUI() {
          this.propertyNode.props_btn_insst5roduce_close.node.on(Button.EventType.CLICK, () => {
            this.events.closeHandler();
          }, true);
          this.propertyNode.props_btn_introduce_last.interactable = false;
          this.propertyNode.props_btn_introduce_last.node.on(Node.EventType.TOUCH_END, () => {
            (_crd && starlight_Audio === void 0 ? (_reportPossibleCrUseOfstarlight_Audio({
              error: Error()
            }), starlight_Audio) : starlight_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).DRAGANDDROPTOTURNTHEPAGE);
            const index = this.propertyNode.props_PageView_instroduce_banner.getCurrentPageIndex();

            if (index > 0) {
              this.propertyNode.props_PageView_instroduce_banner.scrollToPage(index - 1, 0.5); // 切换到上一页，可设置切换动画时间
            }

            this.propertyNode.props_btn_introduce_last.interactable = index > 1;
            this.propertyNode.props_btn_introduce_next.interactable = true;
          });
          this.propertyNode.props_btn_introduce_next.node.on(Node.EventType.TOUCH_END, () => {
            (_crd && starlight_Audio === void 0 ? (_reportPossibleCrUseOfstarlight_Audio({
              error: Error()
            }), starlight_Audio) : starlight_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).DRAGANDDROPTOTURNTHEPAGE);
            const index = this.propertyNode.props_PageView_instroduce_banner.getCurrentPageIndex();

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
//# sourceMappingURL=d3eac6afd1c7283dc17aa2e5c5e9ce9085af4bb1.js.map