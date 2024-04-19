System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, _decorator, BaseComponent, _dec, _class, _crd, ccclass, property, Fish_Main;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4866dyAfSlLwLxBI2Wm0bRO", "Fish_Main", undefined);

      __checkObsolete__(['Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Fish_Main", Fish_Main = (_dec = ccclass('Fish_Main'), _dec(_class = class Fish_Main extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_room_list: new Node(),
            props_game_main_sence: new Node()
          };
          this.props = {};
          this.events = {
            update: deltaTime => {}
          };
        }

        start() {}

        getRoomListNode() {
          return this.propertyNode.props_room_list;
        }

        getGameMainSenceNode() {
          return this.propertyNode.props_game_main_sence;
        }

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {}

        bindUI() {}

        update(deltaTime) {
          this.events.update(deltaTime);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=449d2ff482cd6d39cd1dfe1834d56d00f50ed31c.js.map