System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, sp, BaseComponent, Task, TaskSchedulerDefault, StepNumber, SkeletonAnimationPlayer, _dec, _class, _crd, ccclass, property, Starlight_BigPrize;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskSchedulerDefault(extras) {
    _reporterNs.report("TaskSchedulerDefault", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStepNumber(extras) {
    _reporterNs.report("StepNumber", "../../../utils/StepNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletonAnimationPlayer(extras) {
    _reporterNs.report("SkeletonAnimationPlayer", "../SkeletonPlay", _context.meta, extras);
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
      sp = _cc.sp;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      Task = _unresolved_3.Task;
      TaskSchedulerDefault = _unresolved_3.TaskSchedulerDefault;
    }, function (_unresolved_4) {
      StepNumber = _unresolved_4.default;
    }, function (_unresolved_5) {
      SkeletonAnimationPlayer = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f80c0k1Y8ZCkqIAYwqr2kuX", "Starlight_BigPrize", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'log', 'Node', 'Skeleton', 'sp', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Starlight_BigPrize", Starlight_BigPrize = (_dec = ccclass('Starlight_BigPrize'), _dec(_class = class Starlight_BigPrize extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.glodAmount = 0;
          this.winnerConfig = [];
          this.propertyNode = {
            props_sb_lbjs_BIGWIN: new Node(),
            props_slots_goldNum: new Label(),
            props_layout_goldMin: new Node(),
            props_layout_goldMax: new Node()
          };
          this.props = {
            winning: null,
            glodAmount: 0,
            keepTime: 3000
          };
          this.events = {
            killSelfHandler: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === "winning") {
            this.winnerConfig = value.cur;

            if (value.cur) {
              this.propertyNode.props_layout_goldMax.active = value.cur.wintype === "big";
              this.propertyNode.props_layout_goldMin.active = !(value.cur.wintype === "big");
              const titleSkeleton = this.propertyNode.props_sb_lbjs_BIGWIN.getComponent(sp.Skeleton);
              titleSkeleton.setSkin(value.cur.defaultSkin);
              titleSkeleton.timeScale = 1;
              let nanzhuAnimation = new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
                error: Error()
              }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(titleSkeleton, 'animation2', false, () => {
                // 动画开始
                // 显示数字
                (_crd && TaskSchedulerDefault === void 0 ? (_reportPossibleCrUseOfTaskSchedulerDefault({
                  error: Error()
                }), TaskSchedulerDefault) : TaskSchedulerDefault)().joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                  error: Error()
                }), Task) : Task)(done => {
                  new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
                    error: Error()
                  }), StepNumber) : StepNumber)(0, this.glodAmount, num => {
                    this.propertyNode && this.propertyNode.props_slots_goldNum && (this.propertyNode.props_slots_goldNum.string = (+num.toFixed(0)).formatAmountWithCommas());
                  }, () => {
                    // window.setTimeout(() => {
                    // 	// this.events.killSelfHandler()
                    // 	//数字展示完了之后，再停留1秒钟
                    done(); // }, 1000)
                  }).start();
                }), true);
                nanzhuAnimation.changeAnimation('animation', false, () => {
                  nanzhuAnimation.changeAnimation('animation3', false, () => {
                    this.events.killSelfHandler();
                  });
                });
              });
              nanzhuAnimation.playAnimation();
            }
          }

          if (key === "glodAmount") {
            this.glodAmount = value.cur;
          }
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2852f36ddb8cccb68eb6520655b3e6a68ae8d8f5.js.map