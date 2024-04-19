System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Node, tween, Vec3, BaseComponent, UseSetOption, qiuqiu_Audio, playBg, playBtnClick, _dec, _class, _crd, ccclass, property, Qiuqiu_SetPanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUseSetOption(extras) {
    _reporterNs.report("UseSetOption", "../../../utils/UseSetOption", _context.meta, extras);
  }

  function _reportPossibleCrUseOfqiuqiu_Audio(extras) {
    _reporterNs.report("qiuqiu_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayBg(extras) {
    _reporterNs.report("playBg", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayBtnClick(extras) {
    _reporterNs.report("playBtnClick", "../index", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Node = _cc.Node;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      UseSetOption = _unresolved_3.default;
    }, function (_unresolved_4) {
      qiuqiu_Audio = _unresolved_4.qiuqiu_Audio;
      playBg = _unresolved_4.playBg;
      playBtnClick = _unresolved_4.playBtnClick;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "77c99V8HM9IJJRFOi7siBEq", "Qiuqiu_SetPanel", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Node', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Qiuqiu_SetPanel", Qiuqiu_SetPanel = (_dec = ccclass('Qiuqiu_SetPanel'), _dec(_class = class Qiuqiu_SetPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_spr_win_bg: new Node(),
            props_btn_quit: new Node(),
            props_btn_change: new Node(),
            props_btn_gules: new Node(),
            props_toggle_music: new Node(),
            props_toggle_effect: new Node()
          };
          this.props = {};
          this.events = {
            onQuitGame: () => {},
            onChangeRoom: () => {},
            openGameRule: () => {}
          };
        }

        start() {}

        initState() {
          return {
            showToggle: false
          };
        }

        bindEvent() {
          this.propertyNode.props_btn_quit.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.onQuitGame();
          });
          this.propertyNode.props_btn_change.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.onChangeRoom();
          });
          this.propertyNode.props_btn_gules.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.openGameRule();
          });
          this.propertyNode.props_toggle_music.on(Node.EventType.TOUCH_END, () => {
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
            }), UseSetOption) : UseSetOption).Instance().option.music ? (_crd && playBg === void 0 ? (_reportPossibleCrUseOfplayBg({
              error: Error()
            }), playBg) : playBg)() : (_crd && qiuqiu_Audio === void 0 ? (_reportPossibleCrUseOfqiuqiu_Audio({
              error: Error()
            }), qiuqiu_Audio) : qiuqiu_Audio).pause();
          });
          this.propertyNode.props_toggle_effect.on(Node.EventType.TOUCH_END, () => {
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
          this.useState((key, value) => {
            value.cur && this.propertyNode.props_spr_win_bg.getComponent(Animation).play();
            !value.cur && tween(this.propertyNode.props_spr_win_bg).to(0.05, {
              scale: new Vec3(1, 0, 1)
            }).start();
          }, ["showToggle"]);
        }

        showToggle(toggle) {
          this.setState({
            showToggle: toggle
          });
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dc7a3c7e57a2ef977b85939b23545d03bb411610.js.map