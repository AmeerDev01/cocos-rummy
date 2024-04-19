System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Node, Toggle, BaseComponent, UseSetOption, playBtnClick, playMainBg, yxxAudio, _dec, _class, _crd, ccclass, property, Yxx_Setting;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUseSetOption(extras) {
    _reporterNs.report("UseSetOption", "../../../utils/UseSetOption", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayBtnClick(extras) {
    _reporterNs.report("playBtnClick", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayMainBg(extras) {
    _reporterNs.report("playMainBg", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfyxxAudio(extras) {
    _reporterNs.report("yxxAudio", "../index", _context.meta, extras);
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
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      UseSetOption = _unresolved_3.default;
    }, function (_unresolved_4) {
      playBtnClick = _unresolved_4.playBtnClick;
      playMainBg = _unresolved_4.playMainBg;
    }, function (_unresolved_5) {
      yxxAudio = _unresolved_5.yxxAudio;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "449d3NZA6tDYrvN0OarpYU3", "Yxx_Setting", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Node', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Yxx_Setting", Yxx_Setting = (_dec = ccclass('Yxx_Setting'), _dec(_class = class Yxx_Setting extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_btn_close: new Button(),
            props_toggle_music: new Toggle(),
            props_toggle_sound: new Toggle()
          };
          this.props = {};
          this.events = {
            close: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_close.node.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.close();
          });
          this.propertyNode.props_toggle_music.node.on(Node.EventType.TOUCH_END, toggle => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
              error: Error()
            }), UseSetOption) : UseSetOption).Instance().setOption('music', !(_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
              error: Error()
            }), UseSetOption) : UseSetOption).Instance().option.music);
            (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
              error: Error()
            }), UseSetOption) : UseSetOption).Instance().option.music ? (_crd && playMainBg === void 0 ? (_reportPossibleCrUseOfplayMainBg({
              error: Error()
            }), playMainBg) : playMainBg)() : (_crd && yxxAudio === void 0 ? (_reportPossibleCrUseOfyxxAudio({
              error: Error()
            }), yxxAudio) : yxxAudio).pause();
          });
          this.propertyNode.props_toggle_sound.node.on(Node.EventType.TOUCH_END, toggle => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
              error: Error()
            }), UseSetOption) : UseSetOption).Instance().setOption('sound', !(_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
              error: Error()
            }), UseSetOption) : UseSetOption).Instance().option.sound);
          });
        }

        useProps(key, value) {}

        bindUI() {
          this.propertyNode.props_toggle_music.isChecked = (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
            error: Error()
          }), UseSetOption) : UseSetOption).Instance().option.music;
          this.propertyNode.props_toggle_sound.isChecked = (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
            error: Error()
          }), UseSetOption) : UseSetOption).Instance().option.sound;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0e3a7ba254e3456d0c7a98eeb82042490250e538.js.map