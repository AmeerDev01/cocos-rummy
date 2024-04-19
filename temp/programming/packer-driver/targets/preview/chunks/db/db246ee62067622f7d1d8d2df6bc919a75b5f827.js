System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Label, Node, Sprite, sys, Toggle, BaseComponent, config, SKT_MAG_TYPE, sktMsgListener, playMinCoin, playMaxCoin, playBtnClick, AutoLauncherType, GameType, TaskScheduler, Task, StepNumber, autoLauncherTypeWithTimes, UseSetOption, getNodePositionInCanvas, setRollSpeed, dataTransfer, DataKeyType, _dec, _class, _crd, ccclass, property, phoenix_footer;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktMsgListener(extras) {
    _reporterNs.report("sktMsgListener", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayMinCoin(extras) {
    _reporterNs.report("playMinCoin", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayMaxCoin(extras) {
    _reporterNs.report("playMaxCoin", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayBtnClick(extras) {
    _reporterNs.report("playBtnClick", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherType(extras) {
    _reporterNs.report("AutoLauncherType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
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

  function _reportPossibleCrUseOfautoLauncherTypeWithTimes(extras) {
    _reporterNs.report("autoLauncherTypeWithTimes", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUseSetOption(extras) {
    _reporterNs.report("UseSetOption", "../../../utils/UseSetOption", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodePositionInCanvas(extras) {
    _reporterNs.report("getNodePositionInCanvas", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetRollSpeed(extras) {
    _reporterNs.report("setRollSpeed", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdataTransfer(extras) {
    _reporterNs.report("dataTransfer", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataKeyType(extras) {
    _reporterNs.report("DataKeyType", "../dataTransfer", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      sys = _cc.sys;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      config = _unresolved_3.default;
    }, function (_unresolved_4) {
      SKT_MAG_TYPE = _unresolved_4.SKT_MAG_TYPE;
      sktMsgListener = _unresolved_4.sktMsgListener;
    }, function (_unresolved_5) {
      playMinCoin = _unresolved_5.playMinCoin;
      playMaxCoin = _unresolved_5.playMaxCoin;
      playBtnClick = _unresolved_5.playBtnClick;
    }, function (_unresolved_6) {
      AutoLauncherType = _unresolved_6.AutoLauncherType;
      GameType = _unresolved_6.GameType;
    }, function (_unresolved_7) {
      TaskScheduler = _unresolved_7.default;
      Task = _unresolved_7.Task;
    }, function (_unresolved_8) {
      StepNumber = _unresolved_8.default;
    }, function (_unresolved_9) {
      autoLauncherTypeWithTimes = _unresolved_9.autoLauncherTypeWithTimes;
    }, function (_unresolved_10) {
      UseSetOption = _unresolved_10.default;
    }, function (_unresolved_11) {
      getNodePositionInCanvas = _unresolved_11.getNodePositionInCanvas;
    }, function (_unresolved_12) {
      setRollSpeed = _unresolved_12.setRollSpeed;
    }, function (_unresolved_13) {
      dataTransfer = _unresolved_13.default;
      DataKeyType = _unresolved_13.DataKeyType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d6b7cFhBcVPjLkwt+3a7CmO", "phoenix_footer", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EventMouse', 'Label', 'Node', 'Sprite', 'sys', 'Toggle', 'ToggleComponent']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("phoenix_footer", phoenix_footer = (_dec = ccclass('phoenix_footer'), _dec(_class = class phoenix_footer extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.timer = void 0;

          /**按下的时间 */
          this.pressTime = 0;

          /**按下触发时间 */
          this.pressTimeDone = 50;
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.stepNumber = void 0;
          this.totalTimes = void 0;
          this.propertyNode = {
            /**主启动按钮 */
            props_btn_down_putar: new Node(),

            /**最大下注按钮 */
            props_btn_down_betMax: new Button(),

            /**帮助开启按钮 */
            props_btn_down_help: new Button(),

            /**下注降档 */
            props_btn_down_subtract: new Button(),

            /**下注升档 */
            props_btn_down_add: new Button(),

            /**下注乘法 */
            props_Label_down_oneBet: new Label(),

            /**下注金额显示 */
            props_Label_down_goldNum: new Label(),

            /**goodLuck */
            props_word_down_goodluck: new Node(),

            /**盈亏 */
            props_word_down_winNum: new Node(),

            /**自动选择框底板 */
            props_down_chooseBg: new Node(),

            /**按钮光效 */
            props_spine_guangquan: new Node(),

            /**PUTAR */
            props_word_down_pular: new Node(),

            /**次数 */
            props_times: new Node(),

            /**自动执行的信息 */
            props_autoLaunch_label: new Node(),

            /**缺钱提示 */
            props_spr_nomoney: new Node(),

            /**加速Toggle */
            props_toggle_fast: new Toggle(),

            /**小游戏加次数动画 */
            props_jiacishu: new Node()
          };
          this.props = {
            isRollEnd: true,
            profit: null,
            subGameTimes: 0,
            remainSubGameTimes: 0,
            currGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).NONE,
            viewGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).NONE,
            isShowAutoLaunch: false,
            autoLauncherType: (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).NONE,
            autoLaunchedTimes: 0,
            balance: 0,
            isJumpStop: true,
            isSortStop: false
          };
          this.events = {
            manualBetHandler: () => {},
            openAutoLauncher: () => {},
            closeAutoLauncher: isClear => {},
            openHelpPanel: () => {},
            changeBetAmount: (betAmount, positionId, value) => {},
            // changePositionId: (positionId) => void
            changeSpeedUpSwitch: isChecked => {}
          };
        }

        start() {
          console.log((_crd && getNodePositionInCanvas === void 0 ? (_reportPossibleCrUseOfgetNodePositionInCanvas({
            error: Error()
          }), getNodePositionInCanvas) : getNodePositionInCanvas)(this.propertyNode.props_word_down_goodluck));
          console.log((_crd && getNodePositionInCanvas === void 0 ? (_reportPossibleCrUseOfgetNodePositionInCanvas({
            error: Error()
          }), getNodePositionInCanvas) : getNodePositionInCanvas)(this.propertyNode.props_times));
          console.log((_crd && getNodePositionInCanvas === void 0 ? (_reportPossibleCrUseOfgetNodePositionInCanvas({
            error: Error()
          }), getNodePositionInCanvas) : getNodePositionInCanvas)(this.propertyNode.props_btn_down_putar));
        }

        initState() {
          return {
            // isShowAutoLancherPanel: false,
            baseBetAmountTarget: {
              positionId: 0,
              value: 0
            },
            disableBetSwitch: false,
            isShowNoGlod: false
          };
        }

        bindEvent() {
          this.propertyNode.props_btn_down_putar.on(Node.EventType.TOUCH_START, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)(); //鼠标按下

            this.timer = window.setInterval(() => {
              this.pressTime += 1;

              if (this.pressTime > this.pressTimeDone) {
                window.clearInterval(this.timer); //打开自动运行
                // this.setState({ isShowAutoLancherPanel: !this.state.isShowAutoLancherPanel })

                if (!this.props) return;
                if (!this.props.isRollEnd) return;
                this.props.isShowAutoLaunch ? this.events.closeAutoLauncher(false) : this.events.openAutoLauncher();
              }
            }, 10);
          });
          this.propertyNode.props_btn_down_putar.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)(); //鼠标释放

            window.clearInterval(this.timer);

            if (this.pressTime > this.pressTimeDone) {//长按完成
            } else {
              //滑槽不管是否是停止状态，都要停止自动
              this.dispatch((_crd && setRollSpeed === void 0 ? (_reportPossibleCrUseOfsetRollSpeed({
                error: Error()
              }), setRollSpeed) : setRollSpeed)(1));
              this.events.closeAutoLauncher(true);
              if (!this.props.isRollEnd) return; //短按，下注启动，先关闭自动下注面板
              // this.setState({ isShowAutoLancherPanel: false })

              this.events.manualBetHandler(); // this.events.manualBetHandler(this.state.baseBetAmountTarget.positionId)
            }

            this.pressTime = 0;
          });
          this.propertyNode.props_btn_down_help.node.on(Button.EventType.CLICK, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.openHelpPanel();
          }, this);
          this.propertyNode.props_btn_down_subtract.node.on(Button.EventType.CLICK, () => {
            (_crd && playMinCoin === void 0 ? (_reportPossibleCrUseOfplayMinCoin({
              error: Error()
            }), playMinCoin) : playMinCoin)();
            if (this.state.disableBetSwitch) return;
            var target = this.getBetListByLevel();
            var index = target.indexOf(this.state.baseBetAmountTarget);

            if (index === 0) {
              return; // 不循环

              index = target.length - 1;
            } else {
              index--;
            }

            this.setState({
              baseBetAmountTarget: target[index]
            });
          }, this);
          this.propertyNode.props_btn_down_add.node.on(Button.EventType.CLICK, () => {
            (_crd && playMaxCoin === void 0 ? (_reportPossibleCrUseOfplayMaxCoin({
              error: Error()
            }), playMaxCoin) : playMaxCoin)();
            if (this.state.disableBetSwitch) return;
            var target = this.getBetListByLevel();
            var index = target.indexOf(this.state.baseBetAmountTarget);

            if (index === target.length - 1) {
              return; // 不循环

              index = 0;
            } else {
              index++;
            }

            this.setState({
              baseBetAmountTarget: target[index]
            });
          }, this);
          this.propertyNode.props_btn_down_betMax.node.on(Button.EventType.CLICK, () => {
            (_crd && playMaxCoin === void 0 ? (_reportPossibleCrUseOfplayMaxCoin({
              error: Error()
            }), playMaxCoin) : playMaxCoin)();
            if (this.state.disableBetSwitch) return;
            var target = this.getBetListByLevel();
            this.setState({
              baseBetAmountTarget: target[target.length - 1]
            });
          });
        }

        useProps(key, value) {
          if (key === "isRollEnd") {
            console.log("isRollEnd", value.cur);
            console.log("this.props.isSortStop", this.props.isSortStop);
            console.log("this.props.currGameType", this.props.currGameType);
            this.propertyNode.props_btn_down_putar.getComponent(Sprite).grayscale = !value.cur; // if (this.props && this.props.currGameType === GameType.SUBGAME1) {
            // 	this.setState({ disableBetSwitch: !value.cur })
            // } else {}

            this.setState({
              disableBetSwitch: this.props.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).SUBGAME1 || !value.cur
            });
            this.propertyNode.props_spine_guangquan.active = value.cur;
          }

          if (key === "profit") {
            console.log("profit", value.cur);
            this.propertyNode.props_word_down_goodluck.active = this.props.profit === 0;
            this.propertyNode.props_word_down_winNum.active = this.props.profit !== 0; // console.log(value.pre, value.cur)

            if (value.cur < value.pre) {
              //如果数值减小，应该是恢复，直接变成目标值
              this.propertyNode.props_word_down_winNum.getComponent(Label).string = value.cur;
            } else {
              this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                this.stepNumber && this.stepNumber.stop();
                this.stepNumber = new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
                  error: Error()
                }), StepNumber) : StepNumber)(value.pre, value.cur, num => {
                  this.propertyNode && this.propertyNode.props_word_down_winNum && (this.propertyNode.props_word_down_winNum.getComponent(Label).string = (+num.toFixed(0)).formatAmountWithCommas());
                }, () => done());

                if ((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                  error: Error()
                }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                  error: Error()
                }), DataKeyType) : DataKeyType).GAME_TYPE) !== (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).MAIN) {
                  this.stepNumber.setFlyNode(this.propertyNode.props_word_down_winNum.parent, this.propertyNode.props_word_down_winNum, 40);
                }

                this.stepNumber.start();
              }));
            }
          }

          if (key === "subGameTimes" || key === "remainSubGameTimes") {
            // this.propertyNode.props_times.getComponent(Label).string = `${this.props.remainSubGameTimes} / ${this.props.subGameTimes}`
            this.propertyNode.props_times.getComponent(Label).string = this.props.remainSubGameTimes + '';
          }

          if (key === "currGameType") {
            console.log("this.props.currGameType value.cur", value.cur);
            this.setState({
              disableBetSwitch: value.cur !== (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).MAIN
            });
          }

          if (key === "viewGameType") {
            // console.log('viewGameType', this.props.viewGameType)
            this.updateBtuFace(); // this.propertyNode.props_word_down_pular.active = (this.props.viewGameType !== GameType.SUBGAME2 && this.props.autoLauncherType === AutoLauncherType.NONE)
            // this.propertyNode.props_times.active = this.props.viewGameType === GameType.SUBGAME2
            // this.propertyNode.props_autoLaunch_label.active = this.props.viewGameType !== GameType.SUBGAME2 && this.props.autoLauncherType !== AutoLauncherType.NONE
          }

          if (key === "autoLauncherType") {
            this.totalTimes = (_crd && autoLauncherTypeWithTimes === void 0 ? (_reportPossibleCrUseOfautoLauncherTypeWithTimes({
              error: Error()
            }), autoLauncherTypeWithTimes) : autoLauncherTypeWithTimes)[this.props.autoLauncherType];

            if (this.props.autoLauncherType === (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).LIMIT) {
              this.totalTimes = "∞";
            } else if (this.props.autoLauncherType === (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).LAMIT_FAST) {
              this.totalTimes = "∞⁺";
            }
          }

          if (key === "autoLaunchedTimes") {
            if (this.props.autoLauncherType !== (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).NONE) {
              this.propertyNode.props_autoLaunch_label.getComponent(Label).string = this.props.autoLaunchedTimes + " / " + this.totalTimes;
            } else {
              this.propertyNode.props_autoLaunch_label.getComponent(Label).string = "1 / " + this.totalTimes;
            }

            this.updateBtuFace();
          }

          if (key === "isJumpStop") {
            this.propertyNode.props_toggle_fast.isChecked = this.props.isSortStop;
          }
        }

        updateBtuFace() {
          // console.log("this.props.currGameType",this.props.currGameType);
          if (this.props.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN) {
            this.propertyNode.props_times.active = false;

            if (this.props.autoLauncherType !== (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).NONE) {
              this.propertyNode.props_autoLaunch_label.active = true;
              this.propertyNode.props_word_down_pular.active = false;
            } else {
              this.propertyNode.props_autoLaunch_label.active = false;
              this.propertyNode.props_word_down_pular.active = true;
            }
          } else if (this.props.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1) {
            this.propertyNode.props_times.active = true;
            this.propertyNode.props_autoLaunch_label.active = false;
            this.propertyNode.props_word_down_pular.active = false;
          }
        }
        /**获取自动运行底板 */


        getAutoLauncherBaseNBoard() {
          return this.propertyNode.props_down_chooseBg;
        }

        getProfitBar() {
          return this.propertyNode.props_word_down_winNum;
        }
        /**根据用户级别获取下注金额列表 */


        getBetListByLevel() {
          var level = +JSON.parse(sys.localStorage.getItem("phoenix")).lv;
          var betList = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).betSwitcher.find(item => level => item.level[0] && level < item.level[1]);
          return betList ? betList.amount : [];
        }

        bindUI() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).addOnce((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).AUTH, "footer", () => {
            var target = this.getBetListByLevel();

            if ((_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
              error: Error()
            }), UseSetOption) : UseSetOption).Instance().option.gameSet.phoenix && (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
              error: Error()
            }), UseSetOption) : UseSetOption).Instance().option.gameSet.phoenix.betTarget) {
              var t = target.find(i => i.positionId === (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
                error: Error()
              }), UseSetOption) : UseSetOption).Instance().option.gameSet.phoenix.betTarget.positionId);
              this.setState({
                baseBetAmountTarget: t || target[0]
              });
            } else {
              this.setState({
                baseBetAmountTarget: target[0]
              });
            }
          }, 2);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LAUNCHER_BET, "footer", (data, error) => {
            this.stepNumber && this.stepNumber.stop();
          }, 10);
          this.propertyNode.props_toggle_fast.node.on('toggle', toggle => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.changeSpeedUpSwitch(toggle.isChecked);
          }, this); // msgListener.add(NORMAL_MAG_TYPE.CHANGE_GAME, 'footer', ({ currGameType }) => {
          // 	this.propertyNode.props_word_down_pular.active = currGameType !== GameType.SUBGAME2
          // 	this.propertyNode.props_times.active = currGameType === GameType.SUBGAME2
          // })
          // this.useState((key, value) => {
          // 	// this.propertyNode.props_down_chooseBg.active = value.cur
          // 	if (value.cur === true) {
          // 		this.events.openAutoLauncher()
          // 	} else {
          // 		this.events.closeAutoLauncher()
          // 	}
          // }, ["isShowAutoLancherPanel"])

          this.useState((key, value) => {
            this.propertyNode.props_Label_down_oneBet.string = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).linesQueue.length + " \xD7 " + value.cur.value;
            this.propertyNode.props_Label_down_goldNum.string = (value.cur.value * (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).linesQueue.length).formatAmountWithCommas();
            this.events.changeBetAmount(value.cur.value * (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).linesQueue.length, value.cur.positionId, value.cur.value);
            (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
              error: Error()
            }), UseSetOption) : UseSetOption).Instance().setGameOption("phoenix", {
              betTarget: value.cur
            });
            this.setState({
              "isShowNoGlod": this.props.balance < value.cur.value * (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).linesQueue.length
            });
            this.disableBetSwitch();
          }, ["baseBetAmountTarget"]);
          this.useState((key, value) => {
            this.propertyNode.props_btn_down_betMax.getComponent(Sprite).grayscale = value.cur;
            this.propertyNode.props_btn_down_subtract.getComponent(Sprite).grayscale = value.cur;
            this.propertyNode.props_btn_down_add.getComponent(Sprite).grayscale = value.cur;

            if (!value.cur) {
              this.disableBetSwitch();
            } // !value.cur && this.disableBetSwitch()

          }, ["disableBetSwitch"]);
          this.useState((key, value) => {
            this.propertyNode.props_spr_nomoney.active = value.cur;
          }, ["isShowNoGlod"]);
        }

        getPositionData() {
          return this.state.baseBetAmountTarget;
        }

        disableBetSwitch() {
          if (this.state.disableBetSwitch) {
            return;
          }

          ;
          var target = this.getBetListByLevel();
          var index = target.indexOf(this.state.baseBetAmountTarget);
          this.propertyNode.props_btn_down_add.getComponent(Sprite).grayscale = index === target.length - 1;
          this.propertyNode.props_btn_down_subtract.getComponent(Sprite).grayscale = index === 0;
        }

        destroyCallBack() {
          this.taskScheduler.destoryQueue();
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).removeById("footer");
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=db246ee62067622f7d1d8d2df6bc919a75b5f827.js.map