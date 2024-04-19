System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, Slider, Sprite, _decorator, BaseComponent, OperationType, _dec, _class, _crd, ccclass, property, Qiuqiu_Sure;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationType(extras) {
    _reporterNs.report("OperationType", "../type", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Node = _cc.Node;
      Slider = _cc.Slider;
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      OperationType = _unresolved_3.OperationType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e6c81Q4E21JU6276Ivq4UGj", "Qiuqiu_Sure", undefined);

      __checkObsolete__(['Label', 'Node', 'Slider', 'Sprite', 'Toggle', 'UITransform', 'Vec3', 'Widget', '_decorator', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Qiuqiu_Sure", Qiuqiu_Sure = (_dec = ccclass('Qiuqiu_Sure'), _dec(_class = class Qiuqiu_Sure extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_label_bet_pour: new Node(),
            props_mask_node: new Node(),
            props_spr_bet_bg: new Node(),
            props_Slider: new Node(),
            props_btn_bet_ok: new Node(),
            props_btn_bet_buta5x: new Node(),
            props_btn_bet_buta10x: new Node(),
            props_btn_bet_buta20x: new Node(),
            props_btn_bet_buta50x: new Node()
          };
          this.props = {
            newBetAmount: -1,
            maxAmount: -1,
            afee: 0,
            gold: 0
          };
          this.events = {
            sendBet: (betAmount, opType) => {}
          };
          this.min = 0.11;
          this.max = 0.94;
          this.progress = 0;
        }

        start() {}

        initState() {
          return {
            cellAmount: -1
          };
        }

        bindEvent() {
          this.propertyNode.props_mask_node.on(Node.EventType.TOUCH_END, () => {
            this.node.active = false;
          });
          this.propertyNode.props_Slider.on('slide', slider => {
            slider.progress < this.min && (slider.progress = this.min);
            slider.progress > this.max && (slider.progress = this.max);
            this.propertyNode.props_Slider.getComponent(Sprite).fillRange = slider.progress;
            this.progress = this.getProgress(slider);
            this.setState({
              cellAmount: this.props.newBetAmount + this.props.gold * this.progress
            });
          });
          this.propertyNode.props_btn_bet_ok.on(Node.EventType.TOUCH_END, () => {
            this.bet();
          });
          this.propertyNode.props_btn_bet_buta5x.on(Node.EventType.TOUCH_END, () => {
            this.setState({
              cellAmount: this.props.newBetAmount + this.props.afee * 5
            });
            this.bet();
          });
          this.propertyNode.props_btn_bet_buta10x.on(Node.EventType.TOUCH_END, () => {
            this.setState({
              cellAmount: this.props.newBetAmount + this.props.afee * 10
            });
            this.bet();
          });
          this.propertyNode.props_btn_bet_buta20x.on(Node.EventType.TOUCH_END, () => {
            this.setState({
              cellAmount: this.props.newBetAmount + this.props.afee * 20
            });
            this.bet();
          });
          this.propertyNode.props_btn_bet_buta50x.on(Node.EventType.TOUCH_END, () => {
            this.setState({
              cellAmount: this.props.newBetAmount + this.props.afee * 50
            });
            this.bet();
          });
        }

        getProgress(slider) {
          let value = slider.progress - this.min;
          return Number((value / (this.max - this.min)).toFixed(2));
        }

        bet() {
          let opType = (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
            error: Error()
          }), OperationType) : OperationType).CALL;

          if (this.progress === 1) {
            opType = (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
              error: Error()
            }), OperationType) : OperationType).SHOW_HAND;
          } else if (this.state.cellAmount > this.props.newBetAmount) {
            opType = (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
              error: Error()
            }), OperationType) : OperationType).FILL;
          }

          this.events.sendBet(this.state.cellAmount, opType);
          this.node.active = false;
          this.propertyNode.props_Slider.getComponent(Slider).progress = this.min;
          this.setState({
            cellAmount: this.props.afee
          });
        }

        useProps(key, value) {
          if (key === 'afee' || key === 'newBetAmount') {
            let cellAmount = this.props.newBetAmount === 0 ? this.props.afee : value.cur;

            if (cellAmount > this.props.gold) {
              cellAmount = this.props.gold;
              this.progress = 1;
              this.propertyNode.props_Slider.getComponent(Slider).progress = this.max;
              this.propertyNode.props_Slider.getComponent(Slider).enabled = false;
            } else {
              this.propertyNode.props_Slider.getComponent(Slider).enabled = true;
            }

            this.setState({
              cellAmount: cellAmount
            });
          }
        }

        bindUI() {
          this.useState((key, value) => {
            if (value.cur > this.props.gold) {
              this.setState({
                cellAmount: this.props.gold
              });
              return;
            }

            this.propertyNode.props_label_bet_pour.getComponent(Label).string = Number(value.cur).formatAmountWithLetter();
          }, ['cellAmount']);
        }

        showHideAnima(show = undefined) {
          const value = show !== undefined ? show : !this.node.active;
          this.node.active = value; // let startVec = value ? new Vec3(0, 0) : new Vec3(1, 1);
          // let endVec = value ? new Vec3(1, 1) : new Vec3(0, 0);
          // this.propertyNode.props_spr_bet_bg.setScale(startVec);
          // if (show === undefined) {
          // 	tween(this.propertyNode.props_spr_bet_bg).to(0.2, { scale: endVec }).call(() => {
          // 		if (!value) {
          // 			this.node.active = false;
          // 		}
          // 	}).start();
          // 	value && (this.node.active = value);
          // } else {
          // 	this.node.active = value;
          // }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b1a413d6f167527c8b8d6b422a91c9b51ea259dd.js.map