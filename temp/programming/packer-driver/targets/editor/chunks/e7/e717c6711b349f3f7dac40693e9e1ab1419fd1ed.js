System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Animation, BaseComponent, playGame, _dec, _class, _crd, ccclass, property, Bandar_begin;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayGame(extras) {
    _reporterNs.report("playGame", "../index", _context.meta, extras);
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
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      playGame = _unresolved_3.playGame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fbad98EDHdMgIoSWGtHrtoH", "Bandar_begin", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bandar_begin", Bandar_begin = (_dec = ccclass('Bandar_begin'), _dec(_class = class Bandar_begin extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_spr_begin_bg: new Node()
          };
          this.props = {};
          this.events = {};
        }

        start() {
          this.playBeginAnim();
        }

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {}

        toggleCallback(event, customEventData) {}
        /**播放开始动画 */


        playBeginAnim() {
          (_crd && playGame === void 0 ? (_reportPossibleCrUseOfplayGame({
            error: Error()
          }), playGame) : playGame)();
          let animation = this.propertyNode.props_spr_begin_bg.getComponent(Animation);
          animation.play();
          animation.on(Animation.EventType.FINISHED, () => {
            this.propertyNode.props_spr_begin_bg.destroy();
          }, this);
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e717c6711b349f3f7dac40693e9e1ab1419fd1ed.js.map