System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, assetManager, instantiate, Label, Node, Sprite, SpriteFrame, BaseComponent, bundleHall, hallAudio, config, initToggle, SoundPathDefine, addToastAction, lang, Guide, TaskScheduler, Task, _dec, _class, _crd, ccclass, property, Hall_WithdrawBank;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWithdrawBankChannelType(extras) {
    _reporterNs.report("WithdrawBankChannelType", "../../store/actions/withdraw", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbundleHall(extras) {
    _reporterNs.report("bundleHall", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhallAudio(extras) {
    _reporterNs.report("hallAudio", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitToggle(extras) {
    _reporterNs.report("initToggle", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuide(extras) {
    _reporterNs.report("Guide", "../../../utils/Guide", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      assetManager = _cc.assetManager;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      bundleHall = _unresolved_3.bundleHall;
      hallAudio = _unresolved_3.hallAudio;
    }, function (_unresolved_4) {
      config = _unresolved_4.config;
    }, function (_unresolved_5) {
      initToggle = _unresolved_5.initToggle;
    }, function (_unresolved_6) {
      SoundPathDefine = _unresolved_6.SoundPathDefine;
    }, function (_unresolved_7) {
      addToastAction = _unresolved_7.addToastAction;
    }, function (_unresolved_8) {
      lang = _unresolved_8.lang;
    }, function (_unresolved_9) {
      Guide = _unresolved_9.default;
    }, function (_unresolved_10) {
      TaskScheduler = _unresolved_10.default;
      Task = _unresolved_10.Task;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fe46508NshGU5dsUb/w0dCG", "Hall_WithdrawBank", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'Button', 'Component', 'ImageAsset', 'instantiate', 'Label', 'Node', 'ScrollView', 'Sprite', 'SpriteFrame', 'sys', 'ToggleContainer']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_WithdrawBank", Hall_WithdrawBank = (_dec = ccclass('Hall_WithdrawBank'), _dec(_class = class Hall_WithdrawBank extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.propertyNode = {
            props_btn_metode_close: new Node(),
            props_ScrollView_metode: new Node(),

            /**打开帮助页面按钮 */
            props_btn_metode_tentukan: new Node(),
            props_ToggleGroup_bankType: new Node(),

            /**引导节点1 */
            props_layout_choose: new Node(),

            /**引导节点2 */
            props_layout_tentukan: new Node()
          };
          this.chooseItem = void 0;
          this.props = {
            withdrawBankChannelList: []
          };
          this.events = {
            onCloseHandler: () => {},
            onClickBankChannl: bankItem => {},
            onBankChannlDone: bankItem => {}
          };
        }

        start() {}

        initState() {
          return {
            isDisableBind: false
          };
        }

        bindEvent() {
          this.propertyNode.props_btn_metode_close.on(Node.EventType.TOUCH_END, () => {
            this.events.onCloseHandler();
          });
          this.propertyNode.props_btn_metode_tentukan.on(Node.EventType.TOUCH_END, () => {
            if (this.chooseItem) {
              if (!this.chooseItem.bind && this.props.withdrawBankChannelList.filter(i => i.bind).length >= 1) {
                this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                  error: Error()
                }), addToastAction) : addToastAction)({
                  content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                    error: Error()
                  }), lang) : lang).write(k => k.HallModule.HallWithdrawalBank, {}, {
                    placeStr: "请选择有效的提现渠道~"
                  })
                }));
                return;
              }

              this.events.onBankChannlDone(this.chooseItem);
            } else {
              this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.HallModule.HallWithdrawalBank, {}, {
                  placeStr: "请选择~"
                })
              }));
            } // sys.openURL(config.bankHelpUrl)

          }); // const scroll = this.propertyNode.props_ScrollView_metode.getComponent(ScrollView)

          (_crd && initToggle === void 0 ? (_reportPossibleCrUseOfinitToggle({
            error: Error()
          }), initToggle) : initToggle)(this.propertyNode.props_ToggleGroup_bankType, this.node, new Hall_WithdrawBank.EventHandler(), "Hall_WithdrawBank", "callback");
        }

        useProps(key, value) {
          if (key === "withdrawBankChannelList") {
            // const scroll = this.propertyNode.props_ScrollView_metode.getComponent(ScrollView)
            const toggleWrap = this.propertyNode.props_ToggleGroup_bankType; //scroll.content.getChildByName("ToggleGroup_gold")

            const template = toggleWrap.children[0];
            toggleWrap.children.forEach((child, index) => {
              index > 0 && child.destroy();
            });
            value.cur.sort((a, b) => b.bind - a.bind).forEach((item, index) => {
              const childNode = instantiate(template);
              childNode.active = true;
              childNode.getChildByName("Label_num1").getComponent(Label).string = `${item.limitDown}-${item.limitUp}`;
              assetManager.loadRemote(item.iconMax, (err, asset) => {
                if (this.propertyNode && !err) {
                  childNode.getChildByName("icon").getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(asset);
                }
              }); // bundleHall.load(`withdrawal/resource/icon_withdrawal_${item.name.toLocaleLowerCase()}/spriteFrame`, SpriteFrame, (err, sp) => {
              // 	!err && (childNode.getChildByName("icon").getComponent(Sprite).spriteFrame = sp)
              // })

              childNode.getChildByName("bank_name").getComponent(Label).string = item.name;

              if (item.bind) {
                //如果是已经绑定的卡，按钮显示另外一个
                (_crd && bundleHall === void 0 ? (_reportPossibleCrUseOfbundleHall({
                  error: Error()
                }), bundleHall) : bundleHall).load(`withdrawal/resource/btn_withdrawal_ikatRed/spriteFrame`, SpriteFrame, (err, sp) => {
                  !err && (childNode.getChildByName("btn_ikat1").getComponent(Sprite).spriteFrame = sp);
                });
              }

              toggleWrap.addChild(childNode);
              childNode.getChildByName("btn_ikat1").on(Node.EventType.TOUCH_END, () => {
                if (item.bind) {
                  this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                    error: Error()
                  }), addToastAction) : addToastAction)({
                    content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                      error: Error()
                    }), lang) : lang).write(k => k.withdrawal.GotoServiceModify, {}, {
                      placeStr: "请联系客服修改"
                    })
                  }));
                } else {
                  //打开详情
                  const grayscale = childNode.getChildByName("btn_ikat1").getComponent(Sprite).grayscale;
                  !grayscale && this.events.onClickBankChannl(item);
                }
              });
            });
            this.setState({
              isDisableBind: this.props.withdrawBankChannelList.filter(i => i.bind).length ? true : false
            });
            this.beginGuide();
          }
        }

        callback(event, customEventData) {
          (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
            error: Error()
          }), hallAudio) : hallAudio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).BTU_CLICK);
          const index = this.propertyNode.props_ToggleGroup_bankType.children.indexOf(event.target);
          this.chooseItem = this.props.withdrawBankChannelList[index - 1];
        }

        beginGuide() {
          if ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).fristLogin.main && !(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).fristLogin['hasShow_2']) {
            //标明这里已经显示了
            (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).fristLogin['hasShow_2'] = true;
            const children = this.propertyNode.props_ToggleGroup_bankType.children;
            const guide_1 = new (_crd && Guide === void 0 ? (_reportPossibleCrUseOfGuide({
              error: Error()
            }), Guide) : Guide)(children.length ? children[0] : this.propertyNode.props_ToggleGroup_bankType, this.propertyNode.props_layout_choose);
            const guide_2 = new (_crd && Guide === void 0 ? (_reportPossibleCrUseOfGuide({
              error: Error()
            }), Guide) : Guide)(this.propertyNode.props_btn_metode_tentukan, this.propertyNode.props_layout_tentukan);
            this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
              error: Error()
            }), Task) : Task)(done => {
              guide_1.begin().bindDone(() => done());
            })).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
              error: Error()
            }), Task) : Task)(done => {
              guide_2.begin().bindDone(() => done());
            }));
          }
        }

        bindUI() {
          this.useState((key, value) => {
            this.propertyNode.props_ToggleGroup_bankType.children.filter(i => i.active).forEach((child, index) => {
              child.getChildByName("btn_ikat1").getComponent(Sprite).grayscale = false;
              const item = this.props.withdrawBankChannelList.sort((a, b) => b.bind - a.bind)[index];

              if (item && !item.bind) {
                child.getChildByName("btn_ikat1").getComponent(Sprite).grayscale = value.cur;
              }
            });
          }, ["isDisableBind"]);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c48ef2fa453ec382c70493063b35e4b003aaf6da.js.map