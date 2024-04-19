System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, tween, Vec3, BaseComponent, TaskScheduler, Task, footerViewModel, _dec, _class, _crd, ccclass, property, Thor_JackPot;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOffooterViewModel(extras) {
    _reporterNs.report("footerViewModel", "../index", _context.meta, extras);
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
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      TaskScheduler = _unresolved_3.default;
      Task = _unresolved_3.Task;
    }, function (_unresolved_4) {
      footerViewModel = _unresolved_4.footerViewModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1088bwhfCZAPIiS31tgeve2", "Thor_JackPot", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Thor_JackPot", Thor_JackPot = (_dec = ccclass('Thor_JackPot'), _dec(_class = class Thor_JackPot extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.propertyNode = {
            props_header: new Node(),
            props_level_body: new Node(),
            props_spr_jackpot_banban: new Node(),
            props_spr_jackpot_strawberry: new Node(),
            props_spr_jackpot_apple: new Node(),
            props_spr_jackpot_grape: new Node(),
            props_spr_jackpot_watermelon: new Node(),
            props_spr_level_bg: new Node()
          };
          this.props = {
            fruitHeader: {
              banana: false,
              strawberry: false,
              apple: false,
              grape: false,
              watermelon: false
            },
            level: 0
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === "fruitHeader") {
            this.propertyNode.props_spr_jackpot_banban.getChildByName("light").active = this.props.fruitHeader.banana;
            this.propertyNode.props_spr_jackpot_strawberry.getChildByName("light").active = this.props.fruitHeader.strawberry;
            this.propertyNode.props_spr_jackpot_apple.getChildByName("light").active = this.props.fruitHeader.apple;
            this.propertyNode.props_spr_jackpot_grape.getChildByName("light").active = this.props.fruitHeader.grape;
            this.propertyNode.props_spr_jackpot_watermelon.getChildByName("light").active = this.props.fruitHeader.watermelon;
          }

          if (key === "level") {
            this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
              error: Error()
            }), Task) : Task)(done => {
              this.propertyNode.props_spr_level_bg.active = true;
              const {
                x,
                y,
                z
              } = this.propertyNode.props_spr_level_bg.position;
              tween(this.propertyNode.props_spr_level_bg).to(0.3, {
                position: new Vec3(x, y + 37.8, z)
              }).call(() => done()).start();
            }));
          }
        }

        bindUI() {
          const value = (_crd && footerViewModel === void 0 ? (_reportPossibleCrUseOffooterViewModel({
            error: Error()
          }), footerViewModel) : footerViewModel).comp.getPositionData().value; // this.propertyNode.props_level_body.children[0].getComponent(Label).string = "+" + (value * config.treasureBoxAddition.multiple1).formatAmountWithCommas()
          // this.propertyNode.props_level_body.children[1].getComponent(Label).string = "+" + (value * config.treasureBoxAddition.multiple2).formatAmountWithCommas()
          // // this.propertyNode.props_level_body.children[2].getComponent(Label).string = "3 Rotasi gratis + " + this.getGratisAmount(value * config.treasureBoxAddition.multiple3)//(value * config.treasureBoxAddition.multiple3 / 1000).toFixed(1) + "K"
          // // this.propertyNode.props_level_body.children[3].getComponent(Label).string = "6 Rotasi gratis + " + this.getGratisAmount(value * config.treasureBoxAddition.multiple3)
          // this.propertyNode.props_level_body.children[2].getComponent(Label).string = "3 Rotasi gratis + " + (value * config.treasureBoxAddition.multiple3).formatAmountWithLetter()
          // this.propertyNode.props_level_body.children[3].getComponent(Label).string = "6 Rotasi gratis + " + (value * config.treasureBoxAddition.multiple4).formatAmountWithLetter()
        }

        getGratisAmount(amount) {
          if (amount > 1000) {
            return (amount / 1000).toFixed(0) + "K";
          } else {
            return amount.toFixed(0);
          }
        }

        destroyCallBack() {
          this.taskScheduler.destoryQueue();
        }

        getHeaderNode() {
          return this.propertyNode.props_header;
        }

        getLevelBodyNode() {
          return this.propertyNode.props_level_body;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d3987f66eaa97682d3a26fee659808f07e91b454.js.map