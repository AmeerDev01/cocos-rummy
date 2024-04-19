System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, assetManager, Button, EditBox, instantiate, Label, Node, ScrollView, Sprite, SpriteFrame, tween, UITransform, BaseComponent, maskBankCardNumber, InputValidator, addToastAction, TaskScheduler, Task, lang, ModalBox, Guide, config, _dec, _class, _crd, ccclass, property, Hall_WithdrawalPanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWithdrawBankChannelType(extras) {
    _reporterNs.report("WithdrawBankChannelType", "../../store/actions/withdraw", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmaskBankCardNumber(extras) {
    _reporterNs.report("maskBankCardNumber", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputValidator(extras) {
    _reporterNs.report("InputValidator", "../../../utils/InputValidator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModalBox(extras) {
    _reporterNs.report("ModalBox", "../../../common/ModalBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuide(extras) {
    _reporterNs.report("Guide", "../../../utils/Guide", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../../config", _context.meta, extras);
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
      Button = _cc.Button;
      EditBox = _cc.EditBox;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      ScrollView = _cc.ScrollView;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      maskBankCardNumber = _unresolved_3.maskBankCardNumber;
    }, function (_unresolved_4) {
      InputValidator = _unresolved_4.default;
    }, function (_unresolved_5) {
      addToastAction = _unresolved_5.addToastAction;
    }, function (_unresolved_6) {
      TaskScheduler = _unresolved_6.default;
      Task = _unresolved_6.Task;
    }, function (_unresolved_7) {
      lang = _unresolved_7.lang;
    }, function (_unresolved_8) {
      ModalBox = _unresolved_8.default;
    }, function (_unresolved_9) {
      Guide = _unresolved_9.default;
    }, function (_unresolved_10) {
      config = _unresolved_10.config;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "80c05SWv2ZGepAhTdipT/a8", "Hall_WithdrawalPanel", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'Button', 'Component', 'EditBox', 'ImageAsset', 'instantiate', 'Label', 'Node', 'ScrollView', 'Sprite', 'SpriteFrame', 'tween', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_WithdrawalPanel", Hall_WithdrawalPanel = (_dec = ccclass('Hall_WithdrawalPanel'), _dec(_class = class Hall_WithdrawalPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.taskScheduler2 = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.propertyNode = {
            props_btn_tips_close: new Node(),

            /**用户余额 */
            props_label_saldo_num: new Node(),

            /**选择提现渠道按钮 */
            props_btn_withdrawal_ikat: new Node(),

            /**提现金额 */
            props_EditBox_jumlah: new Node(),

            /**减金额 */
            props_btn_withdrawal_subtract: new Node(),

            /**加金额 */
            props_btn_withdrawal_add: new Node(),

            /**最大金额 */
            props_btn_withdrawal_max: new Node(),

            /**Tips */
            props_btn_withdrawal_kirim: new Node(),

            /**未选择银行卡 */
            props_no_bank_choose: new Node(),

            /**已选择银行卡 */
            props_had_bank_choose: new Node(),

            /**打开流水按钮 */
            props_btn_withdrawal_catatan: new Node(),

            /**末班样式 */
            props_spr_one: new Node(),

            /**无数据节点 */
            props_no_message: new Node(),

            /**提现记录 */
            props_scrollView_withDraw: new Node(),

            /**引导界面1 */
            props_layout_remind_lakt: new Node(),

            /**引导界面1 */
            props_layout_remind_jumlah: new Node(),

            /**引导界面1 */
            props_layout_remind_kirim: new Node(),

            /**手动打开引导 */
            props_btn_newHelp: new Button()
          };
          this.props = {
            memberAssetGoldPieces: 0,
            withdrawBankChannelChoose: null,
            validFlowingWater: -1
          };
          this.events = {
            onClosePanel: () => {},
            openWithdrawBank: () => {},
            trueToWithdraw: amount => {},
            openWithdrawBill: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_tips_close.on(Node.EventType.TOUCH_END, () => {
            this.events.onClosePanel();
          });
          this.propertyNode.props_btn_withdrawal_ikat.on(Node.EventType.TOUCH_END, () => {
            this.events.openWithdrawBank();
          });
          this.propertyNode.props_btn_withdrawal_subtract.on(Node.EventType.TOUCH_END, () => {
            var amountStr = this.propertyNode.props_EditBox_jumlah.getComponent(EditBox).string;
            var amount = amountStr === "" ? 0 : +amountStr;

            if (amount <= 100) {
              this.propertyNode.props_EditBox_jumlah.getComponent(EditBox).string = 0 + '';
            } else {
              this.propertyNode.props_EditBox_jumlah.getComponent(EditBox).string = amount - 10000 + '';
            }
          });
          this.propertyNode.props_btn_withdrawal_add.on(Node.EventType.TOUCH_END, () => {
            var amountStr = this.propertyNode.props_EditBox_jumlah.getComponent(EditBox).string;
            var amount = amountStr === "" ? 0 : +amountStr;

            if (amount + 100 > this.props.memberAssetGoldPieces) {
              this.propertyNode.props_EditBox_jumlah.getComponent(EditBox).string = this.props.memberAssetGoldPieces + '';
            } else {
              this.propertyNode.props_EditBox_jumlah.getComponent(EditBox).string = amount + 10000 + '';
            }
          });
          this.propertyNode.props_btn_withdrawal_max.on(Node.EventType.TOUCH_END, () => {
            this.propertyNode.props_EditBox_jumlah.getComponent(EditBox).string = this.props.memberAssetGoldPieces + '';
          });
          this.propertyNode.props_btn_withdrawal_catatan.on(Node.EventType.TOUCH_END, () => {
            this.events.openWithdrawBill();
          });
          this.propertyNode.props_btn_withdrawal_kirim.on(Node.EventType.TOUCH_END, () => {
            if (this.propertyNode.props_btn_withdrawal_kirim.getComponent(Sprite).grayscale) return;

            if (this.props.withdrawBankChannelChoose) {
              var amount2 = this.propertyNode.props_EditBox_jumlah.getComponent(EditBox).string;
              new (_crd && InputValidator === void 0 ? (_reportPossibleCrUseOfInputValidator({
                error: Error()
              }), InputValidator) : InputValidator)().begin().isDecimal(amount2, false).done(() => {
                if (+amount2 > this.props.memberAssetGoldPieces) {
                  this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                    error: Error()
                  }), addToastAction) : addToastAction)({
                    content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                      error: Error()
                    }), lang) : lang).write(k => k.HallModule.HallWithdrawalNoEnough, {}, {
                      placeStr: "对不起，您的可提现金额不足~"
                    })
                  }));
                  return;
                }

                if (+amount2 < this.props.withdrawBankChannelChoose.limitDown || +amount2 > this.props.withdrawBankChannelChoose.limitUp) {
                  this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                    error: Error()
                  }), addToastAction) : addToastAction)({
                    content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                      error: Error()
                    }), lang) : lang).write(k => k.HallModule.HallWithdrawalglod, {
                      down: this.props.withdrawBankChannelChoose.limitDown.formatAmountWithCommas(),
                      up: this.props.withdrawBankChannelChoose.limitUp.formatAmountWithCommas()
                    }, {
                      placeStr: "对不起，提现金额应在{down}~{up}之间"
                    })
                  }));
                  return;
                }

                this.events.trueToWithdraw(+amount2);
              });
            } else {
              this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.HallModule.HallWithdrawalMessage, {}, {
                  placeStr: "请选择提现到账的银行信息~"
                })
              }));
            }
          });
          this.propertyNode.props_btn_newHelp.node.on(Node.EventType.TOUCH_END, () => {
            (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).fristLogin = {
              main: true
            };
            this.beginGuide();
          });
        }

        useProps(key, value) {
          key === "memberAssetGoldPieces" && (this.propertyNode.props_label_saldo_num.getComponent(Label).string = value.cur.formatAmountWithCommas());

          if (key === "withdrawBankChannelChoose") {
            var cur = value.cur;
            this.propertyNode.props_no_bank_choose.active = false;
            this.propertyNode.props_had_bank_choose.active = true;
            this.propertyNode.props_had_bank_choose.getChildByName("account_number").getComponent(Label).string = (_crd && maskBankCardNumber === void 0 ? (_reportPossibleCrUseOfmaskBankCardNumber({
              error: Error()
            }), maskBankCardNumber) : maskBankCardNumber)(cur.accountNumber, 3); // bundleHall.load(`withdrawal/resource/icon_withdrawal_${cur.name.toLocaleLowerCase()}/spriteFrame`, SpriteFrame, (err, sp) => {
            // 	!err && (this.propertyNode.props_had_bank_choose.getChildByName("icon").getComponent(Sprite).spriteFrame = sp)
            // })

            assetManager.loadRemote(this.props.withdrawBankChannelChoose.iconMax, (err, asset) => {
              if (this.propertyNode && !err) {
                this.propertyNode.props_had_bank_choose.getChildByName("icon").getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(asset);
              }
            });
          }

          if (key === "validFlowingWater") {
            this.isFlowingWater();
            !this.propertyNode.props_btn_withdrawal_kirim.getComponent(Sprite).grayscale && this.beginGuide();
          }
        }
        /**添加流水 */


        addWithdrawBill(dataList) {
          if (!this.propertyNode) return;
          var isFrist = this.propertyNode.props_scrollView_withDraw.getComponent(ScrollView).content.children.length ? true : false;
          this.propertyNode.props_no_message.active = false;

          if (isFrist) {
            //先整几条进去
            dataList.slice(0, 5).forEach(item => {
              var node = this.creatorNodeItem(item);
              this.propertyNode.props_scrollView_withDraw.getComponent(ScrollView).content.addChild(node);
              node.setSiblingIndex(0);
            });
          }

          dataList.forEach((data, index) => {
            if (isFrist && index < 5) return;
            this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
              error: Error()
            }), Task) : Task)(done => {
              var l = this.propertyNode.props_scrollView_withDraw.getComponent(ScrollView).content.children.length;

              if (l > 10) {
                this.propertyNode.props_scrollView_withDraw.getComponent(ScrollView).content.children[l - 3].destroy();
              }

              var node = this.creatorNodeItem(data);
              this.propertyNode.props_scrollView_withDraw.getComponent(ScrollView).content.addChild(node);
              node.getComponent(UITransform).height = 0;
              tween(node.getComponent(UITransform)).to(0.1, {
                height: 120
              }).start();
              node.setSiblingIndex(0);
              this.scheduleOnce(() => done(), 1.5);
            }));
          });
        }

        creatorNodeItem(data) {
          var node = instantiate(this.propertyNode.props_spr_one);
          node.active = true;
          node.getChildByName("label_time").getComponent(Label).string = data.transferTime;
          node.getChildByName("label_name").getComponent(Label).string = data.nickName;
          node.getChildByName("label_menarik").getComponent(Label).string = data.orderMoney.formatAmountWithCommas() + ' RP';
          node.getChildByName("label_waktu").getComponent(Label).string = data.elapsedTime;
          return node;
        }

        destroyCallBack() {
          this.taskScheduler.stopQueue(false);
          this.taskScheduler2.stopQueue(false);
        }

        bindUI() {
          // 第二次打开，就得看这个了
          this.isFlowingWater();
        }

        isFlowingWater() {
          if (this.props.validFlowingWater > 0) {
            !(_crd && ModalBox === void 0 ? (_reportPossibleCrUseOfModalBox({
              error: Error()
            }), ModalBox) : ModalBox).Instance().isShow && (_crd && ModalBox === void 0 ? (_reportPossibleCrUseOfModalBox({
              error: Error()
            }), ModalBox) : ModalBox).Instance().show({
              content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.withdrawal.flllowWaterNoLevel, {}, {
                placeStr: "抱歉，你的投注额未达到提现标准！"
              }),
              type: "Prompt"
            }, () => true);
            this.propertyNode.props_btn_withdrawal_kirim.getComponent(Sprite).grayscale = true;
          } else {
            this.propertyNode.props_btn_withdrawal_kirim.getComponent(Sprite).grayscale = false;
          }
        }

        beginGuide() {
          if ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).fristLogin.main && !(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).fristLogin['hasShow_1']) {
            //标明这里已经显示了
            (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).fristLogin['hasShow_1'] = true;
            var guide_1 = new (_crd && Guide === void 0 ? (_reportPossibleCrUseOfGuide({
              error: Error()
            }), Guide) : Guide)(this.propertyNode.props_btn_withdrawal_ikat, this.propertyNode.props_layout_remind_lakt);
            var guide_2 = new (_crd && Guide === void 0 ? (_reportPossibleCrUseOfGuide({
              error: Error()
            }), Guide) : Guide)(this.propertyNode.props_EditBox_jumlah, this.propertyNode.props_layout_remind_jumlah);
            var guide_3 = new (_crd && Guide === void 0 ? (_reportPossibleCrUseOfGuide({
              error: Error()
            }), Guide) : Guide)(this.propertyNode.props_btn_withdrawal_kirim, this.propertyNode.props_layout_remind_kirim); // this.taskScheduler.stopQueue(false)

            this.taskScheduler2.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
              error: Error()
            }), Task) : Task)(done => {
              guide_1.begin().bindDone(() => done());
            })).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
              error: Error()
            }), Task) : Task)(done => {
              guide_2.begin().bindDone(() => done());
            })).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
              error: Error()
            }), Task) : Task)(done => {
              guide_3.begin().bindDone(() => done());
            }));
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c5f897a3b2cf562d700e70dd805b4d752ceb352b.js.map