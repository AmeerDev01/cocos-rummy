System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Toggle, BaseComponent, playBtnClick, playMainBg, dragonTiger_Audio, UseSetOption, _dec, _class, _crd, ccclass, property, DragonTiger_set;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayBtnClick(extras) {
    _reporterNs.report("playBtnClick", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayMainBg(extras) {
    _reporterNs.report("playMainBg", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdragonTiger_Audio(extras) {
    _reporterNs.report("dragonTiger_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUseSetOption(extras) {
    _reporterNs.report("UseSetOption", "../../../utils/UseSetOption", _context.meta, extras);
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
      playBtnClick = _unresolved_3.playBtnClick;
      playMainBg = _unresolved_3.playMainBg;
    }, function (_unresolved_4) {
      dragonTiger_Audio = _unresolved_4.dragonTiger_Audio;
    }, function (_unresolved_5) {
      UseSetOption = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7d103DgE1RNbblUjHN4frT7", "DragonTiger_set", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Node', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DragonTiger_set", DragonTiger_set = (_dec = ccclass('DragonTiger_set'), _dec(_class = class DragonTiger_set extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.isMusic = true;
          this.propertyNode = {
            props_toggle_efek: new Node(),
            props_toggle_musik: new Node(),
            props_btn_close: new Node()
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
          this.propertyNode.props_btn_close.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.onClosePanel();
          });
          this.propertyNode.props_toggle_musik.on('toggle', toggle => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
              error: Error()
            }), UseSetOption) : UseSetOption).Instance().setOption("music", toggle.target.getComponent(Toggle).isChecked);
            toggle.target.getComponent(Toggle).isChecked ? (_crd && playMainBg === void 0 ? (_reportPossibleCrUseOfplayMainBg({
              error: Error()
            }), playMainBg) : playMainBg)() : (_crd && dragonTiger_Audio === void 0 ? (_reportPossibleCrUseOfdragonTiger_Audio({
              error: Error()
            }), dragonTiger_Audio) : dragonTiger_Audio).pause();
          }, this);
          this.propertyNode.props_toggle_efek.on('toggle', toggle => {
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
          this.propertyNode.props_toggle_musik.getComponent(Toggle).isChecked = (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
            error: Error()
          }), UseSetOption) : UseSetOption).Instance().option.music;
          this.propertyNode.props_toggle_efek.getComponent(Toggle).isChecked = (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
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
//# sourceMappingURL=9675627532fd2bc67b5e5a456c61fe1d1654a592.js.map