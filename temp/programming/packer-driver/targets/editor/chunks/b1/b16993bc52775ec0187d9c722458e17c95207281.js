System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, sp, BaseComponent, StepNumber, GameType, config, SkeletonAnimationPlayer, _dec, _class, _crd, ccclass, property, DragonV2topValue;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStepNumber(extras) {
    _reporterNs.report("StepNumber", "../../../utils/StepNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDialogType(extras) {
    _reporterNs.report("DialogType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTypeInfo(extras) {
    _reporterNs.report("GameTypeInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletonAnimationPlayer(extras) {
    _reporterNs.report("SkeletonAnimationPlayer", "../../../utils/SkeletonPlay", _context.meta, extras);
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
      sp = _cc.sp;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      StepNumber = _unresolved_3.default;
    }, function (_unresolved_4) {
      GameType = _unresolved_4.GameType;
    }, function (_unresolved_5) {
      config = _unresolved_5.default;
    }, function (_unresolved_6) {
      SkeletonAnimationPlayer = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "454a7z8+WRHAKau5qiTq/vQ", "DragonV2topValue", undefined);

      __checkObsolete__(['_decorator', 'animation', 'find', 'Label', 'Node', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DragonV2topValue", DragonV2topValue = (_dec = ccclass('DragonV2topValue'), _dec(_class = class DragonV2topValue extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.mini_numer = void 0;
          this.major_numer = void 0;
          this.jackpot_number = void 0;
          this.mini_numerSpecial = void 0;
          this.major_numerSpecial = void 0;
          this.jackpot_numberSpecial = void 0;
          this.theNumberOfDragonBalls = 0;
          this.propertyNode = {};
          this.props = {
            miniVal: null,
            majorVal: null,
            grandVal: null,
            amountInfo: null,
            gameTypeInfo: {
              lastGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).NONE,
              currGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).NONE,
              viewGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).NONE,
              leftCount: 0
            }
          };
          this.events = {
            onWindowCloseHandler: dialogType => {}
          };
        }

        start() {}

        initState() {
          return {
            miniVal: 0,
            majorVal: 0,
            grandVal: 0
          };
        }

        bindEvent() {
          this.mini_numer = this.node.getChildByName('mini_numer');
          this.major_numer = this.node.getChildByName('major_numer');
          this.jackpot_number = this.node.getChildByName('jackpot_number');
          this.mini_numerSpecial = this.mini_numer.getChildByName('special');
          this.major_numerSpecial = this.major_numer.getChildByName('special');
          this.jackpot_numberSpecial = this.jackpot_number.getChildByName('special');
          this.isDisplaysAFlashingBox(false);
        }
        /*  显示闪动框 */


        isDisplaysAFlashingBox(isShow) {
          this.mini_numerSpecial.active = isShow;
          this.major_numerSpecial.active = isShow;
          this.jackpot_numberSpecial.active = isShow;
        }
        /* 闪动框回调 */


        flashbox(done) {
          this.isDisplaysAFlashingBox(true);
          let mini_numerSpecial = new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
            error: Error()
          }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.mini_numerSpecial.getComponent(sp.Skeleton), 'animation2', false, () => {// mini_numerSpecial.changeAnimation('animation1',false)
          });
          mini_numerSpecial.playAnimation();
          let major_numerSpecial = new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
            error: Error()
          }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.major_numerSpecial.getComponent(sp.Skeleton), 'animation2', false, () => {// major_numerSpecial.changeAnimation('animation1',false)
          });
          major_numerSpecial.playAnimation();
          let jackpot_numberSpecial = new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
            error: Error()
          }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.jackpot_numberSpecial.getComponent(sp.Skeleton), 'animation2', false, () => {
            // jackpot_numberSpecial.changeAnimation('animation1',false,()=>{
            //     jackpot_numberSpecial.stopAnimation()
            //     this.isDisplaysAFlashingBox(false)
            //     done && done()
            // })
            this.isDisplaysAFlashingBox(false);
            done && done();
          });
          jackpot_numberSpecial.playAnimation();
        }

        initTamako() {
          this.node.getChildByName('smallDragonBeadPanel').children.forEach((item, index) => {
            item.active = false;
          });
          this.isDisplaysAFlashingBox(false);
        }
        /* 显示小龙珠 */


        setTamako(num) {
          if (this.theNumberOfDragonBalls == num) {
            //如果龙珠和上把一样
            return;
          } else {
            this.theNumberOfDragonBalls = num;
            this.node.getChildByName('smallDragonBeadPanel').active = true;
            this.node.getChildByName('smallDragonBeadPanel').children.forEach((item, index) => {
              item.active = index <= num - 1;
            });
          }

          if (num == 5) {
            this.mini_numerSpecial.active = true;
            let mini = new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
              error: Error()
            }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.mini_numerSpecial.getComponent(sp.Skeleton), 'animation1', false, () => {
              mini.changeAnimation('animation2', true);
            });
            mini.playAnimation();
          } else if (num == 10) {
            this.major_numerSpecial.active = true;
            let major = new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
              error: Error()
            }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.major_numerSpecial.getComponent(sp.Skeleton), 'animation1', false, () => {
              major.changeAnimation('animation2', true);
            });
            major.playAnimation();
          } else if (num == 15) {
            this.jackpot_numberSpecial.active = true;
            let jackpot = new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
              error: Error()
            }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.jackpot_numberSpecial.getComponent(sp.Skeleton), 'animation1', false, () => {
              jackpot.changeAnimation('animation2', true);
            });
            jackpot.playAnimation();
          }
        }

        useProps(key, value) {
          if (key === 'amountInfo') {
            this.flashbox();
            this.setState({
              miniVal: value.cur.value * (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).winning[1].maxRate
            });
            this.setState({
              majorVal: value.cur.value * (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).winning[2].maxRate
            });

            if (this.props.amountInfo.positionId < 6) {
              this.setState({
                grandVal: value.cur.value * (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).winning[3].maxRate
              });
            }
          }

          if (key === 'gameTypeInfo') {
            this.node.getChildByName('mini_bg').active = this.isSubgame2();
            this.node.getChildByName('main_bg').active = !this.isSubgame2();
          }

          if (key === 'grandVal') {
            if (this.props.amountInfo.positionId >= 6) {
              this.setState({
                grandVal: value.cur
              });
            }

            if (value.cur === 1) {
              this.setState({
                grandVal: this.props.amountInfo.value * (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).winning[3].maxRate
              });
            }
          }
        }

        bindUI() {
          this.useState((key, value) => {
            new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
              error: Error()
            }), StepNumber) : StepNumber)(value.pre, value.cur, num => {
              if (this.node && this.node.isValid) {
                const value = Number(num.toFixed(0));
                this.mini_numer.getChildByName('number').getComponent(Label).string = value.formatAmountWithCommas();
              }
            }).start();
          }, ["miniVal"]);
          this.useState((key, value) => {
            new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
              error: Error()
            }), StepNumber) : StepNumber)(value.pre, value.cur, num => {
              if (this.node && this.node.isValid) {
                const value = Number(num.toFixed(0));
                this.major_numer.getChildByName('number').getComponent(Label).string = value.formatAmountWithCommas();
              }
            }).start();
          }, ["majorVal"]);
          this.useState((key, value) => {
            new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
              error: Error()
            }), StepNumber) : StepNumber)(value.pre, value.cur, num => {
              if (this.node && this.node.isValid) {
                const value = Number(num.toFixed(0));
                this.jackpot_number.getChildByName('number').getComponent(Label).string = value.formatAmountWithCommas();
              }
            }).start();
          }, ["grandVal"]);
        }

        isSubgame2() {
          return this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b16993bc52775ec0187d9c722458e17c95207281.js.map