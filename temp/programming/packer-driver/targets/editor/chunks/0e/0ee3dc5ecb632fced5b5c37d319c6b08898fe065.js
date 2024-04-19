System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, sp, BaseComponent, Task, TaskSchedulerDefault, StepNumber, _dec, _class, _crd, ccclass, property, BlessedWealthy_dialogWin;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3c1e3COqNtJUbkru8y4m462", "BlessedWealthy_dialogWin", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'Node', 'Skeleton', 'sp', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BlessedWealthy_dialogWin", BlessedWealthy_dialogWin = (_dec = ccclass('BlessedWealthy_dialogWin'), _dec(_class = class BlessedWealthy_dialogWin extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.winnerConfig = [];
          this.propertyNode = {
            // props_sb_lbjs_BIGWIN: new Node(),
            // props_slots_common_game_bw_gold: new Node(),
            // props_slots_goldNum: new Label(),
            props_caishen_bw: new Node(),
            props_cs_bw: new Node(),
            props_slots_goldNum: new Label(),
            props_sk_yowin: new Node(),
            props_btn_back: new Node(),
            props_label_shuzi: new Label(),
            props_label_shuzi2: new Label()
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
              const titleSkeleton = this.propertyNode.props_sk_yowin.getComponent(sp.Skeleton); // titleSkeleton.skeletonData = sourceManageSeletor().getFile(this.props.winning.fileName[0]).source
              // if (this.props.winning.fileName[1]) {
              // 	this.propertyNode.props_slots_common_game_bw_gold.active = true
              // 	const glodSkeleton = this.propertyNode.props_slots_common_game_bw_gold.getComponent(sp.Skeleton)
              // 	glodSkeleton.skeletonData = sourceManageSeletor().getFile(this.props.winning.fileName[1]).source
              // 	glodSkeleton.animation = "loop"
              // } else {
              // 	this.propertyNode.props_slots_common_game_bw_gold.active = false
              // }
            }
          }

          if (key === "glodAmount") {
            if (this.props.winning.name === "watermelon") {
              this.propertyNode.props_label_shuzi.node.active = false;
              window.setTimeout(() => {
                this.propertyNode.props_label_shuzi.node.active = true;
                (_crd && TaskSchedulerDefault === void 0 ? (_reportPossibleCrUseOfTaskSchedulerDefault({
                  error: Error()
                }), TaskSchedulerDefault) : TaskSchedulerDefault)().joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                  error: Error()
                }), Task) : Task)(done => {
                  new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
                    error: Error()
                  }), StepNumber) : StepNumber)(value.pre, value.cur, num => {
                    this.propertyNode && this.propertyNode.props_label_shuzi && (this.propertyNode.props_label_shuzi.string = (+num.toFixed(0)).formatAmountWithCommas());
                  }, () => {
                    window.setTimeout(() => {
                      this.events && this.events.killSelfHandler(); //数字展示完了之后，再停留1秒钟

                      done();
                    }, 2000);
                  }).start();
                }));
              }, 1000);
            } else {
              (_crd && TaskSchedulerDefault === void 0 ? (_reportPossibleCrUseOfTaskSchedulerDefault({
                error: Error()
              }), TaskSchedulerDefault) : TaskSchedulerDefault)().joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
                  error: Error()
                }), StepNumber) : StepNumber)(value.pre, value.cur, num => {
                  this.propertyNode && this.propertyNode.props_label_shuzi && (this.propertyNode.props_label_shuzi.string = (+num.toFixed(0)).formatAmountWithCommas());
                }, () => {
                  window.setTimeout(() => {
                    this.events && this.events.killSelfHandler(); //数字展示完了之后，再停留1秒钟

                    done();
                  }, 2000);
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
//# sourceMappingURL=0ee3dc5ecb632fced5b5c37d319c6b08898fe065.js.map