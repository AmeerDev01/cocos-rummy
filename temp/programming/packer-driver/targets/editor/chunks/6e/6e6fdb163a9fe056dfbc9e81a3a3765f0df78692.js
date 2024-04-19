System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, BaseComponent, playBtnClick, _dec, _class, _crd, ccclass, property, Qiuqiu_GameRule;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      playBtnClick = _unresolved_3.playBtnClick;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6df57i0TFBOfp7mMNZ7s1vb", "Qiuqiu_GameRule", undefined);

      __checkObsolete__(['_decorator', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Qiuqiu_GameRule", Qiuqiu_GameRule = (_dec = ccclass('Qiuqiu_GameRule'), _dec(_class = class Qiuqiu_GameRule extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_btn_off: new Node()
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
          this.propertyNode.props_btn_off.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.close();
          });
        }

        useProps(key, value) {}

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6e6fdb163a9fe056dfbc9e81a3a3765f0df78692.js.map