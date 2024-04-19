System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, assetManager, Label, Node, Sprite, SpriteFrame, BaseComponent, maskBankCardNumber, config, Guide, TaskScheduler, Task, _dec, _class, _crd, ccclass, property, Hall_WithdrawTip;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmaskBankCardNumber(extras) {
    _reporterNs.report("maskBankCardNumber", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../../config", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      maskBankCardNumber = _unresolved_3.maskBankCardNumber;
    }, function (_unresolved_4) {
      config = _unresolved_4.config;
    }, function (_unresolved_5) {
      Guide = _unresolved_5.default;
    }, function (_unresolved_6) {
      TaskScheduler = _unresolved_6.default;
      Task = _unresolved_6.Task;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "734c8JWYa1Mb6Rf0vCq3yFG", "Hall_WithdrawTip", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'Component', 'ImageAsset', 'Label', 'Node', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_WithdrawTip", Hall_WithdrawTip = (_dec = ccclass('Hall_WithdrawTip'), _dec(_class = class Hall_WithdrawTip extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.propertyNode = {
            /**信息背景框 */
            props_spr_tip_bg1: new Node(),
            props_btn_tip_close: new Node(),

            /**图标 */
            props_icon_reken: new Node(),

            /**卡号 */
            props_Label_accountNumber: new Node(),

            /**提现金额 */
            props_Label_jumlah: new Node(),

            /**确认按钮 */
            props_btn_tip_tentukan: new Node(),

            /**名字 */
            props_Label_biaya: new Node(),

            /**引导节点1 */
            props_layout_confirm: new Node(),

            /**引导节点2 */
            props_layout_tentukan: new Node()
          };
          this.props = {
            /**图标 */
            iconName: "",

            /**账户卡号 */
            accountNumber: "",

            /**提现金额 */
            withdrawAmount: 0,

            /**账户名 */
            accountName: "",

            /**提现手续费比例 */
            withdrawalPremium: 0,
            logUrl: ""
          };
          this.events = {
            onClosehandler: () => {},
            doneHandler: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_tip_close.on(Node.EventType.TOUCH_END, () => {
            this.events.onClosehandler();
          });
        }

        useProps(key, value) {
          if (key === "iconName") {// bundleHall.load(`withdrawal/resource/icon_withdrawal_${value.cur.toLocaleLowerCase()}/spriteFrame`, SpriteFrame, (err, sp) => {
            // 	!err && (this.propertyNode.props_icon_reken.getComponent(Sprite).spriteFrame = sp)
            // })
          }

          if (key === "logUrl") {
            this.props.logUrl && assetManager.loadRemote(this.props.logUrl, (err, asset) => {
              if (this.propertyNode && !err) {
                this.propertyNode.props_icon_reken.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(asset);
              }
            });
          }

          if (key === "withdrawAmount") {
            this.scheduleOnce(() => {
              this.propertyNode.props_Label_jumlah.getComponent(Label).string = (value.cur * (1 - this.props.withdrawalPremium)).formatAmountWithCommas();
              this.beginGuide();
            }, 0.05);
          }

          key === "accountNumber" && (this.propertyNode.props_Label_accountNumber.getComponent(Label).string = (_crd && maskBankCardNumber === void 0 ? (_reportPossibleCrUseOfmaskBankCardNumber({
            error: Error()
          }), maskBankCardNumber) : maskBankCardNumber)(value.cur, 3));
          key === "accountName" && (this.propertyNode.props_Label_biaya.getComponent(Label).string = value.cur);
        }

        bindUI() {
          this.propertyNode.props_btn_tip_tentukan.on(Node.EventType.TOUCH_END, () => {
            this.events.doneHandler(this.props.accountNumber, this.props.withdrawAmount);
          });
        }

        beginGuide() {
          if ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).fristLogin.main && !(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).fristLogin['hasShow_4']) {
            //标明这里已经显示了
            (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).fristLogin['hasShow_4'] = true;
            var guide_1 = new (_crd && Guide === void 0 ? (_reportPossibleCrUseOfGuide({
              error: Error()
            }), Guide) : Guide)(this.propertyNode.props_spr_tip_bg1, this.propertyNode.props_layout_confirm);
            var guide_2 = new (_crd && Guide === void 0 ? (_reportPossibleCrUseOfGuide({
              error: Error()
            }), Guide) : Guide)(this.propertyNode.props_btn_tip_tentukan, this.propertyNode.props_layout_tentukan);
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

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c58868b6503a154e0d8bdc5248070dcdd5690eaf.js.map