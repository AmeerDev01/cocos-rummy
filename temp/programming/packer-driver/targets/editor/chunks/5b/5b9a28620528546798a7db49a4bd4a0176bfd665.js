System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, BaseComponent, GameType, setShowAuthLaunch, _dec, _class, _crd, ccclass, property, phoenix_gameBoard;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetShowAuthLaunch(extras) {
    _reporterNs.report("setShowAuthLaunch", "../store/actions/game", _context.meta, extras);
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
      GameType = _unresolved_3.GameType;
    }, function (_unresolved_4) {
      setShowAuthLaunch = _unresolved_4.setShowAuthLaunch;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1e8345yJDlABINcpnw0YsXu", "phoenix_gameBoard", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("phoenix_gameBoard", phoenix_gameBoard = (_dec = ccclass('phoenix_gameBoard'), _dec(_class = class phoenix_gameBoard extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_gameBoard: new Node(),
            props_wrap: new Node(),

            /**主界面背景 */
            props_spr_main_blueBg: new Node(),
            props_spr_main_greenBg: new Node()
          };
          this.props = {
            gameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).NONE
          };
          this.events = {
            changeGameHandler: (lastGameType, currGameType) => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.node.on(Node.EventType.TOUCH_END, () => {
            this.dispatch((_crd && setShowAuthLaunch === void 0 ? (_reportPossibleCrUseOfsetShowAuthLaunch({
              error: Error()
            }), setShowAuthLaunch) : setShowAuthLaunch)(false));
          });
        }

        useProps(key, value) {
          if (key === "gameType") {
            this.events.changeGameHandler(value.pre, value.cur); // this.propertyNode.props_spr_main_blueBg.active = value.cur === GameType.MAIN;
            // this.propertyNode.props_spr_main_greenBg.active = value.cur === GameType.SUBGAME1;
          }
        }

        bindUI() {}

        getGameNode() {
          return this.propertyNode.props_gameBoard;
        }

        getWrapNode() {
          return this.propertyNode.props_wrap;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5b9a28620528546798a7db49a4bd4a0176bfd665.js.map