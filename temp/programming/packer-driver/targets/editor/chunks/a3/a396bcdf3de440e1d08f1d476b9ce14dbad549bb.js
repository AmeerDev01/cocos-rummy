System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, sp, Vec3, BaseComponent, sourceManageSeletor, TaskScheduler, Task, StepNumber, _dec, _class, _crd, ccclass, property, Fruit777_BigPrize;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../../../utils/TaskScheduler", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      sourceManageSeletor = _unresolved_3.sourceManageSeletor;
    }, function (_unresolved_4) {
      TaskScheduler = _unresolved_4.default;
      Task = _unresolved_4.Task;
    }, function (_unresolved_5) {
      StepNumber = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e0b39bZKRlBaqvFcHtRSRWp", "Fruit777_BigPrize", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'Node', 'Skeleton', 'sp', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Fruit777_BigPrize", Fruit777_BigPrize = (_dec = ccclass('Fruit777_BigPrize'), _dec(_class = class Fruit777_BigPrize extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.winnerConfig = [];
          this.propertyNode = {
            props_sb_lbjs_BIGWIN: new Node(),
            props_slots_common_game_bw_gold: new Node(),
            props_slots_goldNum: new Label()
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
              const titleSkeleton = this.propertyNode.props_sb_lbjs_BIGWIN.getComponent(sp.Skeleton);
              titleSkeleton.skeletonData = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile(this.props.winning.fileName[0]).source;

              if (value.cur.name === "watermelon") {
                titleSkeleton.animation = "animation";
                const {
                  x,
                  y,
                  z
                } = this.propertyNode.props_sb_lbjs_BIGWIN.position;
                this.propertyNode.props_sb_lbjs_BIGWIN.setPosition(new Vec3(x, y - 100, z));
                titleSkeleton.timeScale = 0.4;
                titleSkeleton.loop = false;
              } else {
                titleSkeleton.animation = "a2";
                titleSkeleton.timeScale = 1; // const { x, y, z } = this.propertyNode.props_sb_lbjs_BIGWIN.position
                // this.propertyNode.props_sb_lbjs_BIGWIN.setPosition(new Vec3(x, y + 80, z))
              }

              if (this.props.winning.fileName[1]) {
                this.propertyNode.props_slots_common_game_bw_gold.active = true;
                const glodSkeleton = this.propertyNode.props_slots_common_game_bw_gold.getComponent(sp.Skeleton);
                glodSkeleton.skeletonData = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFile(this.props.winning.fileName[1]).source;
                glodSkeleton.animation = "loop";
              } else {
                this.propertyNode.props_slots_common_game_bw_gold.active = false;
              }
            }
          }

          if (key === "glodAmount") {
            if (this.props.winning.name === "watermelon") {
              this.propertyNode.props_slots_goldNum.node.active = false;
              this.scheduleOnce(() => {
                this.propertyNode.props_slots_goldNum.node.active = true;
                this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                  error: Error()
                }), Task) : Task)(done => {
                  new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
                    error: Error()
                  }), StepNumber) : StepNumber)(value.pre, value.cur, num => {
                    this.propertyNode && this.propertyNode.props_slots_goldNum && (this.propertyNode.props_slots_goldNum.string = (+num.toFixed(0)).formatAmountWithCommas());
                  }, () => {
                    this.scheduleOnce(() => {
                      this.events && this.events.killSelfHandler(); //数字展示完了之后，再停留1秒钟

                      done();
                    }, 2);
                  }).start();
                }));
              }, 1);
            } else {
              this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
                  error: Error()
                }), StepNumber) : StepNumber)(value.pre, value.cur, num => {
                  this.propertyNode && this.propertyNode.props_slots_goldNum && (this.propertyNode.props_slots_goldNum.string = (+num.toFixed(0)).formatAmountWithCommas());
                }, () => {
                  this.scheduleOnce(() => {
                    this.events && this.events.killSelfHandler(); //数字展示完了之后，再停留1秒钟

                    done();
                  }, 1);
                }).start();
              }), true);
            }
          }
        }

        destroyCallBack() {
          this.taskScheduler.destoryQueue();
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a396bcdf3de440e1d08f1d476b9ce14dbad549bb.js.map