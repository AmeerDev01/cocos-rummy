System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, BaseComponent, global, TaskScheduler, StepNumber, playBtnClick, _dec, _class, _crd, ccclass, property, BlessedWealthy_header;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStepNumber(extras) {
    _reporterNs.report("StepNumber", "../../../utils/StepNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayBtnClick(extras) {
    _reporterNs.report("playBtnClick", "../index", _context.meta, extras);
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
      global = _unresolved_3.global;
    }, function (_unresolved_4) {
      TaskScheduler = _unresolved_4.default;
    }, function (_unresolved_5) {
      StepNumber = _unresolved_5.default;
    }, function (_unresolved_6) {
      playBtnClick = _unresolved_6.playBtnClick;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "258dfHjsj1EoIcwd+dsZfwM", "BlessedWealthy_header", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      // import { chooseSmallGame } from '../viewModel/RollerPanelViewModel';
      ({
        ccclass,
        property
      } = _decorator);

      _export("BlessedWealthy_header", BlessedWealthy_header = (_dec = ccclass('BlessedWealthy_header'), _dec(_class = class BlessedWealthy_header extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.stepNumber = void 0;
          this.propertyNode = {
            props_btn_up_home: new Node(),
            props_btn_up_set: new Node(),
            props_Label_up_goldNum: new Label(),
            props_btn_up_addGold: new Node(),
            props_beli: new Node(),
            props_SPECIAL: new Node()
          };
          this.props = {
            balance: 0
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_up_home.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)(); // if (!chooseSmallGame.isUnMount) {
            // 	global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.GameExit, {}, { placeStr: "您正在游戏中，退出失败，请游戏结束后重试。" })  }));
            // } else {

            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).closeSubGame(); // }
          });
          this.propertyNode.props_btn_up_set.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openPersonCenter(2);
          });
          this.propertyNode.props_btn_up_addGold.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          });
          this.propertyNode.props_beli.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          });
          this.propertyNode.props_SPECIAL.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openPersonCenter(5);
          });
        }

        useProps(key, value) {
          if (key === "balance") {
            console.log("value.pre, value.cur", value.pre, value.cur);
            this.stepNumber && this.stepNumber.stop();
            this.stepNumber = new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
              error: Error()
            }), StepNumber) : StepNumber)(value.pre, value.cur, num => {
              this.propertyNode && this.propertyNode.props_Label_up_goldNum && (this.propertyNode.props_Label_up_goldNum.string = (+num.toFixed(0)).formatAmountWithCommas());
            }, () => {});
            this.stepNumber.start(); // this.taskScheduler.joinqQueue(new Task((done) => {
            // 	this.stepNumber && this.stepNumber.stop()
            // 	this.stepNumber = new StepNumber(value.pre, value.cur, (num) => {
            // 		this.propertyNode && this.propertyNode.props_Label_up_goldNum && (this.propertyNode.props_Label_up_goldNum.string = (+num.toFixed(0)).formatAmountWithCommas())
            // 	}, () => done())
            // 	this.stepNumber.start()
            // }), true)
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
//# sourceMappingURL=461bc8746508f13ea16098cda4d496691cf22fc0.js.map