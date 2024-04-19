System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Toggle, BaseComponent, UseSetOption, bandarQiuQiu_Audio, playBtnClick, playMainBg, _dec, _class, _crd, ccclass, property, BandarQiuQiu_set;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUseSetOption(extras) {
    _reporterNs.report("UseSetOption", "../../../utils/UseSetOption", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbandarQiuQiu_Audio(extras) {
    _reporterNs.report("bandarQiuQiu_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayBtnClick(extras) {
    _reporterNs.report("playBtnClick", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayMainBg(extras) {
    _reporterNs.report("playMainBg", "../index", _context.meta, extras);
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
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      UseSetOption = _unresolved_3.default;
    }, function (_unresolved_4) {
      bandarQiuQiu_Audio = _unresolved_4.bandarQiuQiu_Audio;
      playBtnClick = _unresolved_4.playBtnClick;
      playMainBg = _unresolved_4.playMainBg;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "112bedPe45LDJYSrbZ9FXI1", "BandarQiuQiu_set", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BandarQiuQiu_set", BandarQiuQiu_set = (_dec = ccclass('BandarQiuQiu_set'), _dec(_class = class BandarQiuQiu_set extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_btn_exit: new Node(),
            props_toggle_music: new Node(),
            props_toggle_sound: new Node()
          };
          this.props = {};
          this.events = {
            onClosePanel: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_exit.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.onClosePanel();
          });
          this.propertyNode.props_toggle_music.on('toggle', toggle => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
              error: Error()
            }), UseSetOption) : UseSetOption).Instance().setOption("music", toggle.target.getComponent(Toggle).isChecked);
            toggle.target.getComponent(Toggle).isChecked ? (_crd && playMainBg === void 0 ? (_reportPossibleCrUseOfplayMainBg({
              error: Error()
            }), playMainBg) : playMainBg)() : (_crd && bandarQiuQiu_Audio === void 0 ? (_reportPossibleCrUseOfbandarQiuQiu_Audio({
              error: Error()
            }), bandarQiuQiu_Audio) : bandarQiuQiu_Audio).pause();
          }, this);
          this.propertyNode.props_toggle_sound.on('toggle', toggle => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
              error: Error()
            }), UseSetOption) : UseSetOption).Instance().setOption("sound", toggle.target.getComponent(Toggle).isChecked);
          }, this);
        }

        useProps(key, value) {}

        toggleCallback(event, customEventData) {}

        bindUI() {
          this.propertyNode.props_toggle_music.getComponent(Toggle).isChecked = (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
            error: Error()
          }), UseSetOption) : UseSetOption).Instance().option.music;
          this.propertyNode.props_toggle_sound.getComponent(Toggle).isChecked = (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
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
//# sourceMappingURL=736d5281d8ea2b40d47a109d7d97b548972c4a3c.js.map