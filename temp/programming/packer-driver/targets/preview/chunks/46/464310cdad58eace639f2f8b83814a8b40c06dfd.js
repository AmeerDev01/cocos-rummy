System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, BaseComponent, StepNumber, TaskScheduler, Task, _dec, _class, _crd, ccclass, property, Bandar_trigJackpot;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStepNumber(extras) {
    _reporterNs.report("StepNumber", "../../../utils/StepNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../../../utils/TaskScheduler", _context.meta, extras);
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
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      StepNumber = _unresolved_3.default;
    }, function (_unresolved_4) {
      TaskScheduler = _unresolved_4.default;
      Task = _unresolved_4.Task;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "19c7b4vm6tDiZC8w6kucz06", "Bandar_trigJackpot", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bandar_trigJackpot", Bandar_trigJackpot = (_dec = ccclass('Bandar_trigJackpot'), _dec(_class = class Bandar_trigJackpot extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.stepNumber = void 0;
          this.propertyNode = {
            props_skeleton_jackpot: new Node(),
            props_label_jackpotNum: new Label()
          };
          this.props = {
            trigJackpot: 234567
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {}
        /** jackpotNumber 步进动画 */


        createGoldNum() {
          var pre = 123456;
          var cur = 234567; // let stepNum=new StepNumber((pre, cur, (num) => {}))

          this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)(done => {
            this.stepNumber && this.stepNumber.stop();
            this.stepNumber = new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
              error: Error()
            }), StepNumber) : StepNumber)(pre, cur, num => {
              // this.propertyNode && this.propertyNode.props_Label_up_goldNum && (this.propertyNode.props_Label_up_goldNum.string = (+num.toFixed(0)).formatAmountWithCommas())
              this.propertyNode && this.propertyNode.props_label_jackpotNum && (this.propertyNode.props_label_jackpotNum.string = (+num.toFixed(0)).formatAmountWithCommas());
            }, () => done());
            this.stepNumber.start();
          }));
        }

        toggleCallback(event, customEventData) {}

        destroyCallBack() {
          this.taskScheduler.destoryQueue();
        }

        bindUI() {
          this.createGoldNum(); //测试
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=464310cdad58eace639f2f8b83814a8b40c06dfd.js.map