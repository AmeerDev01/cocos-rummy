System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, startUp, _dec, _class, _crd, ccclass, property, localstart;

  function _reportPossibleCrUseOfstartUp(extras) {
    _reporterNs.report("startUp", "./StartUp", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      startUp = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "500c2V0HGhBxbaOOaAihlO9", "localstart", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("localstart", localstart = (_dec = ccclass('localstart'), _dec(_class = class localstart extends Component {
        start() {
          (_crd && startUp === void 0 ? (_reportPossibleCrUseOfstartUp({
            error: Error()
          }), startUp) : startUp)(this.node);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1542869a83a1c9e9795d01c7fab7f71c5fb09b42.js.map