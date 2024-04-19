System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, sp, BaseComponent, sourceManageSeletor, Task, TaskSchedulerDefault, StepNumber, SkeletonAnimationPlayer, _dec, _class, _crd, ccclass, property, phoenix_dialogWin;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
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
      sourceManageSeletor = _unresolved_3.sourceManageSeletor;
    }, function (_unresolved_4) {
      Task = _unresolved_4.Task;
      TaskSchedulerDefault = _unresolved_4.TaskSchedulerDefault;
    }, function (_unresolved_5) {
      StepNumber = _unresolved_5.default;
    }, function (_unresolved_6) {
      SkeletonAnimationPlayer = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fa8cchHyXlBxoI63KCAh6Ri", "phoenix_dialogWin", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'Node', 'Skeleton', 'sp', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("phoenix_dialogWin", phoenix_dialogWin = (_dec = ccclass('phoenix_dialogWin'), _dec(_class = class phoenix_dialogWin extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.winnerConfig = [];
          this.numberStop = false;
          this.propertyNode = {
            props_sb_lbjs_BIGWIN: new Node(),
            props_slots_common_game_bw_gold: new Node(),
            props_slots_goldNum: new Node(),
            props_tongyong_bw: new Node(),
            props_slots_jackPot_goldNum: new Node()
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

        bindEvent() {
          this.propertyNode.props_sb_lbjs_BIGWIN.on(Node.EventType.TOUCH_END, () => {
            if (this.numberStop) {
              this.events.killSelfHandler();
            } else {
              this.propertyNode.props_slots_goldNum.getComponent(Label).string = this.props.glodAmount.formatAmountWithCommas();
              this.numberStop = true;
            }
          });
        }

        useProps(key, value) {
          if (key === "winning") {
            this.winnerConfig = value.cur;

            if (value.cur) {
              var titleSkeleton = this.propertyNode.props_sb_lbjs_BIGWIN.getComponent(sp.Skeleton);
              titleSkeleton.skeletonData = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile(this.props.winning.fileName[0]).source;
              var count = 0;

              if (value.cur.id === 4) {
                new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
                  error: Error()
                }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(titleSkeleton, 'a2', true, () => {
                  count++; // if (this.numberStop && count > 1) {

                  this.events.killSelfHandler(); // }
                }).playAnimation();
              } else {
                new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
                  error: Error()
                }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(titleSkeleton, 'animation', true, () => {
                  count++; // if (this.numberStop && count > 1) {

                  this.events.killSelfHandler(); // }
                }).playAnimation();
              }
            }
          }

          if (key === "glodAmount") {
            this.numberStop = false;

            if (this.props.winning.id === 4) {
              (_crd && TaskSchedulerDefault === void 0 ? (_reportPossibleCrUseOfTaskSchedulerDefault({
                error: Error()
              }), TaskSchedulerDefault) : TaskSchedulerDefault)().joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                this.propertyNode.props_slots_goldNum.active = false;
                this.propertyNode.props_slots_jackPot_goldNum.active = true;
                var numNode = this.propertyNode.props_slots_jackPot_goldNum.getComponent(Label);
                new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
                  error: Error()
                }), StepNumber) : StepNumber)(value.pre, value.cur, num => {
                  this.propertyNode && numNode && (numNode.string = (+num.toFixed(0)).formatAmountWithCommas());
                }, () => {
                  this.numberStop = true;
                  done();
                }).start();
              }), true);
            } else {
              (_crd && TaskSchedulerDefault === void 0 ? (_reportPossibleCrUseOfTaskSchedulerDefault({
                error: Error()
              }), TaskSchedulerDefault) : TaskSchedulerDefault)().joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                this.propertyNode.props_slots_jackPot_goldNum.active = false;
                this.propertyNode.props_slots_goldNum.active = true;
                var numNode = this.propertyNode.props_slots_goldNum.getComponent(Label);
                new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
                  error: Error()
                }), StepNumber) : StepNumber)(value.pre, value.cur, num => {
                  this.propertyNode && numNode && (numNode.string = (+num.toFixed(0)).formatAmountWithCommas());
                }, () => {
                  this.numberStop = true;
                  done();
                }).start();
              }), true);
            }
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
//# sourceMappingURL=a4e64107608ced15d1c711797e1063b2af62ca23.js.map