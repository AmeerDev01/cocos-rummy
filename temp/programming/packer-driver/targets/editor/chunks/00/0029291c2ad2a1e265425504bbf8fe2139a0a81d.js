System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Color, Label, Node, BaseComponent, config, SKT_MAG_TYPE, sktMsgListener, starlight_Audio, AutoLauncherType, GameType, TaskScheduler, Task, StepNumber, autoLauncherTypeWithTimes, SoundPathDefine, UseSetOption, dataTransfer, DataKeyType, _dec, _class, _crd, ccclass, property, Starlight_Footer;

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

  function _reportPossibleCrUseOfstarlight_Audio(extras) {
    _reporterNs.report("starlight_Audio", "../index", _context.meta, extras);
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
    _reporterNs.report("autoLauncherTypeWithTimes", "../viewModel/AutoLauncherViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUseSetOption(extras) {
    _reporterNs.report("UseSetOption", "../../../utils/UseSetOption", _context.meta, extras);
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
      Color = _cc.Color;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      config = _unresolved_3.default;
    }, function (_unresolved_4) {
      SKT_MAG_TYPE = _unresolved_4.SKT_MAG_TYPE;
      sktMsgListener = _unresolved_4.sktMsgListener;
    }, function (_unresolved_5) {
      starlight_Audio = _unresolved_5.starlight_Audio;
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
      SoundPathDefine = _unresolved_10.SoundPathDefine;
    }, function (_unresolved_11) {
      UseSetOption = _unresolved_11.default;
    }, function (_unresolved_12) {
      dataTransfer = _unresolved_12.default;
      DataKeyType = _unresolved_12.DataKeyType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "31111dXfC1LSb0JOWvnllvi", "Starlight_Footer", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'Component', 'EventMouse', 'Label', 'log', 'Node', 'Sprite', 'sys', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Starlight_Footer", Starlight_Footer = (_dec = ccclass('Starlight_Footer'), _dec(_class = class Starlight_Footer extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
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
          this.goldNum = void 0;
          this.positionId = void 0;
          this.isEnd = void 0;
          this.propertyNode = {
            /**主启动按钮 */
            props_btn_down_putar: new Node(),

            /**最大下注按钮 */
            // props_btn_down_betMax: new Button(),

            /**帮助开启按钮 */
            // props_btn_down_help: new Button(),

            /**下注降档 */
            props_btn_down_subtract: new Node(),

            /**下注升档 */
            props_btn_down_add: new Node(),

            /**下注乘法 */
            // props_Label_down_oneBet: new Label(),

            /**下注金额显示 */
            props_Label_down_goldNum: new Node(),

            /**goodLuck */
            props_word_down_goodluck: new Node(),

            /**盈亏 */
            props_word_down_winNum: new Node(),

            /**自动选择框底板 */
            // props_down_chooseBg: new Node(),

            /**按钮光效 */
            // props_spine_guangquan: new Node(),

            /**PUTAR */
            props_word_down_pular: new Node(),
            props_word_down_auto: new Node(),

            /**次数 */
            // props_times: new Node(),

            /**自动执行的信息 */
            props_autoLaunch_label: new Node(),

            /**缺钱提示 */
            props_spr_nomoney: new Node(),
            // 是否加速
            props_button_fast: new Node(),

            /**游戏中 */
            props_scrollingThePicture: new Node(),
            props_word_down_menang: new Node(),
            props_btn_down_auto: new Node()
          };
          this.props = {
            isRollEnd: true,
            profit: 0,
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
            apostille: false
          };
          this.events = {
            manualBetHandler: () => {},
            openAutoLauncher: () => {},
            closeAutoLauncher: isClear => {},
            openHelpPanel: () => {},
            changeBetAmount: (betAmount, positionId, value) => {},
            isHasten: isState => {} // changePositionId: (positionId) => void

          };
        }

        start() {}

        initState() {
          return {
            // isShowAutoLancherPanel: false,
            baseBetAmountTarget: {
              positionId: 0,
              value: 0
            },
            disableBetSwitch: false,
            isShowNoGlod: false,
            fillStatus: false
          };
        }

        bindEvent() {
          this.propertyNode.props_btn_down_putar.on(Node.EventType.TOUCH_START, () => {//鼠标按下
            // this.timer = window.setInterval(() => {
            // 	this.pressTime += 1
            // 	if (this.pressTime > this.pressTimeDone) {
            // 		window.clearInterval(this.timer)
            // 		if (!this.props) return
            // 		//打开自动运行
            // 		// this.setState({ isShowAutoLancherPanel: !this.state.isShowAutoLancherPanel })
            // 		if (!this.props.isRollEnd) return
            // 		this.props.isShowAutoLaunch ? this.events.closeAutoLauncher(false) : this.events.openAutoLauncher()
            // 	}
            // }, 10)
          });
          this.propertyNode.props_btn_down_putar.on(Node.EventType.TOUCH_END, () => {
            //滑槽不管是否是停止状态，都要停止自动
            this.events.closeAutoLauncher(true);
            if (!this.props.isRollEnd) return; //短按，下注启动，先关闭自动下注面板
            // this.setState({ isShowAutoLancherPanel: false })

            this.events.manualBetHandler(); // this.events.manualBetHandler(this.state.baseBetAmountTarget.positionId)
          }); // this.propertyNode.props_btn_down_help.node.on(Button.EventType.CLICK, () => {
          // 	this.events.openHelpPanel()
          // }, this)

          this.propertyNode.props_btn_down_subtract.getComponent(Button).node.on(Button.EventType.CLICK, () => {
            (_crd && starlight_Audio === void 0 ? (_reportPossibleCrUseOfstarlight_Audio({
              error: Error()
            }), starlight_Audio) : starlight_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).MIN_COIN);
            if (this.state.disableBetSwitch) return;
            const target = this.getBetListByLevel();
            let index = target.indexOf(this.state.baseBetAmountTarget);

            if (index === 0) {
              // index = target.length - 1
              return; // 不循环
            } else {
              index--;
            }

            this.setState({
              baseBetAmountTarget: target[index]
            });
          }, this);
          this.propertyNode.props_btn_down_add.getComponent(Button).node.on(Button.EventType.CLICK, () => {
            (_crd && starlight_Audio === void 0 ? (_reportPossibleCrUseOfstarlight_Audio({
              error: Error()
            }), starlight_Audio) : starlight_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).MAX_COIN);
            if (this.state.disableBetSwitch) return;
            const target = this.getBetListByLevel();
            let index = target.indexOf(this.state.baseBetAmountTarget);

            if (index === target.length - 1) {
              // index = 0
              return; // 不循环
            } else {
              index++;
            }

            this.setState({
              baseBetAmountTarget: target[index]
            });
          }, this);
          this.propertyNode.props_btn_down_auto.on(Button.EventType.CLICK, () => {
            (_crd && starlight_Audio === void 0 ? (_reportPossibleCrUseOfstarlight_Audio({
              error: Error()
            }), starlight_Audio) : starlight_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BUTTONCLICK);

            if (this.props.autoLauncherType !== (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).NONE) {
              this.events.closeAutoLauncher(true);
            } else {
              this.events.openAutoLauncher();
            }
          });
          this.propertyNode.props_button_fast.getComponent(Button).node.on(Button.EventType.CLICK, () => {
            this.propertyNode.props_button_fast.getChildByName('nofast').active = !this.propertyNode.props_button_fast.getChildByName('nofast').active;
            this.events.isHasten(this.propertyNode.props_button_fast.getChildByName('nofast').active);
          });
        }

        useProps(key, value) {
          if (key === "isRollEnd") {
            this.isEnd = value.cur;
            this.propertyNode.props_btn_down_putar.getChildByName('disable').active = !value.cur;
            this.setState({
              disableBetSwitch: !value.cur
            }); // this.propertyNode.props_spine_guangquan.active = value.cur

            this.propertyNode.props_button_fast.getComponent(Button).interactable = value.cur;

            if (this.props.autoLauncherType !== (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).NONE) {
              this.propertyNode.props_word_down_pular.active = false;
              this.propertyNode.props_scrollingThePicture.active = false;
            } else {
              this.propertyNode.props_word_down_pular.active = value.cur;
              this.propertyNode.props_scrollingThePicture.active = !value.cur;
            }

            this.updateBtuFace();
          }

          if (key === "profit") {
            this.propertyNode.props_word_down_goodluck.active = this.props.profit === 0;
            this.propertyNode.props_word_down_winNum.active = this.props.profit !== 0;
            this.propertyNode.props_word_down_menang.active = this.props.profit !== 0; // console.log(value.pre, value.cur)

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

          if (key === "subGameTimes" || key === "remainSubGameTimes") {// this.propertyNode.props_times.getComponent(Label).string = `${this.props.remainSubGameTimes} / ${this.props.subGameTimes}`
          }

          if (key === "currGameType") {
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

          if (key === "autoLaunchedTimes" || key === "autoLauncherType") {
            if (this.props.autoLauncherType !== (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).NONE) {
              this.propertyNode.props_autoLaunch_label.getComponent(Label).string = `${this.props.autoLaunchedTimes} / ${this.totalTimes}`;
            } else {
              this.propertyNode.props_autoLaunch_label.getComponent(Label).string = `1 / ${this.totalTimes}`;
            }

            this.updateBtuFace();
          }

          if (key === "apostille") {
            this.setState({
              fillStatus: value.cur
            });
          }
        }

        updateBtuFace() {
          if (this.props.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN || this.props.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1) {
            this.propertyNode.props_scrollingThePicture.active = false;

            if (this.props.autoLauncherType !== (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).NONE) {
              this.propertyNode.props_autoLaunch_label.active = true;
              this.propertyNode.props_word_down_auto.active = false;
              this.propertyNode.props_btn_down_putar.getChildByName('disable').active = true;
              this.propertyNode.props_word_down_pular.active = false;
            } else {
              this.propertyNode.props_autoLaunch_label.active = false;
              this.propertyNode.props_word_down_auto.active = true;
              this.propertyNode.props_word_down_pular.active = true;
              this.propertyNode.props_btn_down_putar.getChildByName('disable').active = !this.isEnd;
              this.propertyNode.props_scrollingThePicture.active = false;
            }
          }

          if (this.props.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN || this.props.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN) {
            this.propertyNode.props_btn_down_auto.getComponent(Button).interactable = true;
            this.propertyNode.props_btn_down_auto.getChildByName('disable').active = false;
          } else {
            this.propertyNode.props_btn_down_auto.getComponent(Button).interactable = false;
            this.propertyNode.props_btn_down_auto.getChildByName('disable').active = true;
          }
        }
        /**获取自动运行底板 */


        getAutoLauncherBaseNBoard() {// return this.propertyNode.props_down_chooseBg
        }

        getProfitBar() {
          return this.propertyNode.props_word_down_winNum;
        }
        /**根据用户级别获取下注金额列表 */


        getBetListByLevel() {
          const betList = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
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
            const target = this.getBetListByLevel();

            if ((_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
              error: Error()
            }), UseSetOption) : UseSetOption).Instance().option.gameSet.thor && (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
              error: Error()
            }), UseSetOption) : UseSetOption).Instance().option.gameSet.thor.betTarget) {
              const t = target.find(i => i.positionId === (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
                error: Error()
              }), UseSetOption) : UseSetOption).Instance().option.gameSet.thor.betTarget.positionId);
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
          }, 10); // msgListener.add(NORMAL_MAG_TYPE.CHANGE_GAME, 'footer', ({ currGameType }) => {
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
            if (key === "fillStatus") {
              if (value.cur) {
                this.propertyNode.props_Label_down_goldNum.getComponent(Label).string = (this.goldNum * ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).linesQueueNum + 5)).formatAmountWithCommas(); // this.propertyNode.props_Label_down_oneBet.string = `${config.linesQueueNum + 5}×${this.goldNum}`

                this.events.changeBetAmount(this.goldNum * ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).linesQueueNum + 5), this.positionId, this.goldNum);
                this.setState({
                  "isShowNoGlod": this.props.balance < this.goldNum * ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                    error: Error()
                  }), config) : config).linesQueueNum + 5)
                });
              } else {
                this.propertyNode.props_Label_down_goldNum.getComponent(Label).string = (this.goldNum * (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).linesQueueNum).formatAmountWithCommas(); // this.propertyNode.props_Label_down_oneBet.string = `${config.linesQueueNum}×${this.goldNum}`

                this.events.changeBetAmount(this.goldNum * (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).linesQueueNum, this.positionId, this.goldNum);
                this.setState({
                  "isShowNoGlod": this.props.balance < this.goldNum * (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                    error: Error()
                  }), config) : config).linesQueueNum
                });
              }
            }

            if (key === "baseBetAmountTarget") {
              let raise = this.props.apostille ? 5 : 0; // this.propertyNode.props_Label_down_oneBet.string = `${config.linesQueueNum + raise}×${value.cur.value}`

              this.propertyNode.props_Label_down_goldNum.getComponent(Label).string = (value.cur.value * ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).linesQueueNum + raise)).formatAmountWithCommas();
              this.goldNum = value.cur.value;
              this.positionId = value.cur.positionId;
              this.events.changeBetAmount(value.cur.value * ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).linesQueueNum + raise), value.cur.positionId, value.cur.value);
              (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
                error: Error()
              }), UseSetOption) : UseSetOption).Instance().setGameOption("thor", {
                betTarget: value.cur
              });
              this.setState({
                "isShowNoGlod": this.props.balance < value.cur.value * ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).linesQueueNum + raise)
              });
            }

            this.disableBetSwitch();
          }, ["baseBetAmountTarget", "fillStatus"]);
          this.useState((key, value) => {
            // this.propertyNode.props_btn_down_betMax.getComponent(Sprite).grayscale = value.cur
            this.propertyNode.props_btn_down_subtract.getChildByName('disable').active = value.cur;
            this.propertyNode.props_btn_down_add.getChildByName('disable').active = value.cur;
            !value.cur && this.disableBetSwitch();
          }, ["disableBetSwitch"]);
          this.useState((key, value) => {
            this.propertyNode.props_spr_nomoney.active = value.cur;

            if (value.cur) {
              this.propertyNode.props_Label_down_goldNum.getComponent(Label).color = new Color(144, 144, 134);
            } else {
              this.propertyNode.props_Label_down_goldNum.getComponent(Label).color = new Color(255, 255, 255);
            }
          }, ["isShowNoGlod"]);
        }

        getPositionData() {
          return this.state.baseBetAmountTarget;
        }

        disableBetSwitch() {
          const target = this.getBetListByLevel();
          let index = target.indexOf(this.state.baseBetAmountTarget);
          this.propertyNode.props_btn_down_subtract.getChildByName('disable').active = index === 0;
          this.propertyNode.props_btn_down_add.getChildByName('disable').active = index === target.length - 1;
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
//# sourceMappingURL=0029291c2ad2a1e265425504bbf8fe2139a0a81d.js.map