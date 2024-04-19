System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Label, Node, Sprite, BaseComponent, global, lang, TaskScheduler, StepNumber, thor_Audio, SoundPathDefine, addToastAction, changeAutoLauncherType, setAutoLaunchedTimes, AutoLauncherType, _dec, _class, _crd, ccclass, property, Thor_Header;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStepNumber(extras) {
    _reporterNs.report("StepNumber", "../../../utils/StepNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfthor_Audio(extras) {
    _reporterNs.report("thor_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeAutoLauncherType(extras) {
    _reporterNs.report("changeAutoLauncherType", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetAutoLaunchedTimes(extras) {
    _reporterNs.report("setAutoLaunchedTimes", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherType(extras) {
    _reporterNs.report("AutoLauncherType", "../type", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      global = _unresolved_3.global;
      lang = _unresolved_3.lang;
    }, function (_unresolved_4) {
      TaskScheduler = _unresolved_4.default;
    }, function (_unresolved_5) {
      StepNumber = _unresolved_5.default;
    }, function (_unresolved_6) {
      thor_Audio = _unresolved_6.thor_Audio;
    }, function (_unresolved_7) {
      SoundPathDefine = _unresolved_7.SoundPathDefine;
    }, function (_unresolved_8) {
      addToastAction = _unresolved_8.addToastAction;
    }, function (_unresolved_9) {
      changeAutoLauncherType = _unresolved_9.changeAutoLauncherType;
      setAutoLaunchedTimes = _unresolved_9.setAutoLaunchedTimes;
    }, function (_unresolved_10) {
      AutoLauncherType = _unresolved_10.AutoLauncherType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eef93t7lB5CnY7Z+F0T2KXW", "Thor_Header", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Thor_Header", Thor_Header = (_dec = ccclass('Thor_Header'), _dec(_class = class Thor_Header extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
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
            props_layout_glod: new Node(),
            props_btn_up_addGold: new Node(),
            props_btn_up_menu: new Node(),
            props_spr_menu_bg: new Node(),
            props_btn_info: new Node(),
            props_btn_vip: new Node()
          };
          this.props = {
            balance: 0,
            isRollEnd: true
          };
          this.events = {
            openHelpPanel: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_up_home.on(Node.EventType.TOUCH_END, () => {
            if (this.props.isRollEnd) {
              this.closeGame();
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).closeSubGame();
            } else {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.palyingModule.GameExit, {}, {
                  placeStr: "游戏进行中"
                })
              }));
            }
          });
          this.propertyNode.props_btn_up_set.on(Node.EventType.TOUCH_END, () => {
            (_crd && thor_Audio === void 0 ? (_reportPossibleCrUseOfthor_Audio({
              error: Error()
            }), thor_Audio) : thor_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BUTTONCLICK);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openPersonCenter(2);
          });
          this.propertyNode.props_layout_glod.on(Node.EventType.TOUCH_END, () => {
            (_crd && thor_Audio === void 0 ? (_reportPossibleCrUseOfthor_Audio({
              error: Error()
            }), thor_Audio) : thor_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BUTTONCLICK);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          });
          this.propertyNode.props_btn_up_addGold.on(Node.EventType.TOUCH_END, () => {
            (_crd && thor_Audio === void 0 ? (_reportPossibleCrUseOfthor_Audio({
              error: Error()
            }), thor_Audio) : thor_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BUTTONCLICK);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          });
          this.propertyNode.props_btn_info.on(Node.EventType.TOUCH_END, () => {
            (_crd && thor_Audio === void 0 ? (_reportPossibleCrUseOfthor_Audio({
              error: Error()
            }), thor_Audio) : thor_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BUTTONCLICK);
            this.events.openHelpPanel();
          });
          this.propertyNode.props_btn_up_menu.on(Node.EventType.TOUCH_END, () => {
            (_crd && thor_Audio === void 0 ? (_reportPossibleCrUseOfthor_Audio({
              error: Error()
            }), thor_Audio) : thor_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BUTTONCLICK);
            this.propertyNode.props_spr_menu_bg.active = !this.propertyNode.props_spr_menu_bg.active;
            this.propertyNode.props_spr_menu_bg.getComponent(Animation).play();
          });
          this.propertyNode.props_btn_vip.on(Node.EventType.TOUCH_END, () => {
            (_crd && thor_Audio === void 0 ? (_reportPossibleCrUseOfthor_Audio({
              error: Error()
            }), thor_Audio) : thor_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BUTTONCLICK);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openVipMain();
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
            this.stepNumber.start();
          }

          if (key === 'isRollEnd') {
            this.propertyNode.props_btn_up_home.getComponent(Sprite).grayscale = !value.cur;
          }
        }

        closeGame() {
          (_crd && thor_Audio === void 0 ? (_reportPossibleCrUseOfthor_Audio({
            error: Error()
          }), thor_Audio) : thor_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).BUTTONCLICK);
          this.dispatch((_crd && changeAutoLauncherType === void 0 ? (_reportPossibleCrUseOfchangeAutoLauncherType({
            error: Error()
          }), changeAutoLauncherType) : changeAutoLauncherType)((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
            error: Error()
          }), AutoLauncherType) : AutoLauncherType).NONE));
          this.dispatch((_crd && setAutoLaunchedTimes === void 0 ? (_reportPossibleCrUseOfsetAutoLaunchedTimes({
            error: Error()
          }), setAutoLaunchedTimes) : setAutoLaunchedTimes)(0));
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
//# sourceMappingURL=113339e93a3122e8d2c88f9b390f87e4b18f904e.js.map