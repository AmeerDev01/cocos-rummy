System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, Animation, BaseComponent, GameStatus, stopBet, _dec, _class, _crd, ccclass, property, Bandar_clock;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstopBet(extras) {
    _reporterNs.report("stopBet", "../index", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Node = _cc.Node;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      GameStatus = _unresolved_3.GameStatus;
    }, function (_unresolved_4) {
      stopBet = _unresolved_4.stopBet;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "223b9GWo69CAbUIw7VJkcxf", "Bandar_clock", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bandar_clock", Bandar_clock = (_dec = ccclass('Bandar_clock'), _dec(_class = class Bandar_clock extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_label_clock_num: new Node(),
            props_spr_clock_bg: new Node(),
            props_spr_clock_text1: new Node(),
            props_spr_clock_text2: new Node(),
            props_spr_clockAnimation: new Node()
          };
          this.props = {
            countDown: 0,
            gameStatus: null
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === "countDown") {
            this.propertyNode.props_spr_clock_bg.active = value.cur > 0;
            this.propertyNode.props_label_clock_num.active = value.cur > 0;

            if (value.cur > 0) {
              this.propertyNode.props_label_clock_num.getComponent(Label).string = value.cur + "";

              if (this.props.gameStatus === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
                error: Error()
              }), GameStatus) : GameStatus).BET) {
                if (value.cur <= 3 && value.cur >= 1) {
                  // playTimeout()
                  (_crd && stopBet === void 0 ? (_reportPossibleCrUseOfstopBet({
                    error: Error()
                  }), stopBet) : stopBet)();
                  this.propertyNode.props_spr_clockAnimation.getComponent(Animation).play();
                }
              }
            }
          }

          if (key === "gameStatus") {
            this.propertyNode.props_spr_clock_text1.active = this.props.gameStatus === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET;
            this.propertyNode.props_spr_clock_text2.active = this.props.gameStatus === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).WAIT;
            this.propertyNode.props_spr_clock_bg.active = value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET || value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).WAIT;
            this.propertyNode.props_label_clock_num.active = value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET || value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).WAIT;
            this.propertyNode.props_spr_clockAnimation.active = value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET || value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).WAIT;
          }
        }

        toggleCallback(event, customEventData) {}

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a7f8ddf80d0d51431e5427354c437ef65af0630d.js.map