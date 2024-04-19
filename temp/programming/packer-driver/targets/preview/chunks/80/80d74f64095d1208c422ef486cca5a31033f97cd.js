System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Label, Node, Animation, BaseComponent, global, TaskScheduler, StepNumber, BuyType, _dec, _class, _crd, ccclass, property, Fruit777_Header;

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

  function _reportPossibleCrUseOfBuyType(extras) {
    _reporterNs.report("BuyType", "../../../hall/components/Hall_ShopPanel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Label = _cc.Label;
      Node = _cc.Node;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      global = _unresolved_3.global;
    }, function (_unresolved_4) {
      TaskScheduler = _unresolved_4.default;
    }, function (_unresolved_5) {
      StepNumber = _unresolved_5.default;
    }, function (_unresolved_6) {
      BuyType = _unresolved_6.BuyType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "13a61UfCjZMrol3YH7X6knq", "Fruit777_Header", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'Node', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Fruit777_Header", Fruit777_Header = (_dec = ccclass('Fruit777_Header'), _dec(_class = class Fruit777_Header extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
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
            props_SPECIAL: new Node(),
            props_menu_panel: new Node(),
            props_btn_up_menu: new Button(),
            props_spr_menu_bg: new Node(),
            props_btn_info: new Button(),
            props_btn_vip: new Button()
          };
          this.props = {
            balance: 0,
            roundAllEnd: true
          };
          this.events = {
            openHelpPanel: () => {},
            openVipMain: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_up_menu.node.on(Node.EventType.TOUCH_END, () => {
            this.propertyNode.props_menu_panel.active = true;
            this.propertyNode.props_spr_menu_bg.getComponent(Animation).play('animation_title');
          });
          this.propertyNode.props_menu_panel.on(Node.EventType.TOUCH_END, () => {
            this.propertyNode.props_menu_panel.active = false;
          }, this);
          this.propertyNode.props_btn_info.node.on(Button.EventType.CLICK, () => {
            this.events.openHelpPanel();
          }, this);
          this.propertyNode.props_btn_vip.node.on(Button.EventType.CLICK, () => {
            this.events.openVipMain();
          }, this);
          this.propertyNode.props_btn_up_home.on(Node.EventType.TOUCH_END, () => {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).closeSubGame(); // if (this.props.roundAllEnd || !sktInstance.isConnect || dataTransfer(DataKeyType.GAME_TYPE) === GameType.SUBGAME1) {
            // 	/**只要转动完成、连接断开、开宝箱子游戏，都可以直接退出 */
            // 	global.closeSubGame()
            // } else {
            // 	global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.GameExit, {}, { placeStr: "游戏中，请勿退出" }) }))
            // }
          });
          this.propertyNode.props_btn_up_set.on(Node.EventType.TOUCH_END, () => {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openPersonCenter(2);
          });
          this.propertyNode.props_btn_up_addGold.on(Node.EventType.TOUCH_END, () => {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          });
          this.propertyNode.props_beli.on(Node.EventType.TOUCH_END, () => {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          });
          this.propertyNode.props_SPECIAL.on(Node.EventType.TOUCH_END, () => {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop((_crd && BuyType === void 0 ? (_reportPossibleCrUseOfBuyType({
              error: Error()
            }), BuyType) : BuyType).TAS);
          });
        }

        useProps(key, value) {
          if (key === "balance") {
            this.stepNumber && this.stepNumber.stop();
            this.stepNumber = new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
              error: Error()
            }), StepNumber) : StepNumber)(value.pre, value.cur, num => {
              this.propertyNode && this.propertyNode.props_Label_up_goldNum && (this.propertyNode.props_Label_up_goldNum.string = (+num.toFixed(0)).formatAmountWithCommas());
            }, () => {});
            this.stepNumber.setFlyNode(this.propertyNode.props_Label_up_goldNum.node.parent, this.propertyNode.props_Label_up_goldNum.node, 22);
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
//# sourceMappingURL=80d74f64095d1208c422ef486cca5a31033f97cd.js.map