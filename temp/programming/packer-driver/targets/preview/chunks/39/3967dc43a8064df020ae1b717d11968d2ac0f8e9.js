System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, assetManager, EditBox, Node, Sprite, SpriteFrame, BaseComponent, InputValidator, config, Guide, _dec, _class, _crd, ccclass, property, Hall_WithdrawBankBind;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWithdrawBankChannelType(extras) {
    _reporterNs.report("WithdrawBankChannelType", "../../store/actions/withdraw", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputValidator(extras) {
    _reporterNs.report("InputValidator", "../../../utils/InputValidator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuide(extras) {
    _reporterNs.report("Guide", "../../../utils/Guide", _context.meta, extras);
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
      EditBox = _cc.EditBox;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      InputValidator = _unresolved_3.default;
    }, function (_unresolved_4) {
      config = _unresolved_4.config;
    }, function (_unresolved_5) {
      Guide = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "540e7lFgUZE7K+RySIDK9Es", "Hall_WithdrawBankBind", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'Component', 'EditBox', 'ImageAsset', 'Node', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_WithdrawBankBind", Hall_WithdrawBankBind = (_dec = ccclass('Hall_WithdrawBankBind'), _dec(_class = class Hall_WithdrawBankBind extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_icon_reken: new Node(),
            props_btn_metode_close: new Node(),
            props_nomor_EditBox: new EditBox(),
            props_spr_cetatan_name1: new Node(),
            props_EditBox_name: new EditBox(),
            props_btn_metode_tentukan: new Node(),

            /**引导节点 */
            props_layout_tentukan: new Node()
          };
          this.props = {
            hadChooseBankChannl: null
          };
          this.events = {
            onClosehandler: () => {},
            onBindDone: (hadChooseBankChannl, accountNumber, realName) => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_metode_close.on(Node.EventType.TOUCH_END, () => {
            this.events.onClosehandler();
          });
          this.propertyNode.props_btn_metode_tentukan.on(Node.EventType.TOUCH_END, () => {
            var accountNumber = this.propertyNode.props_nomor_EditBox.string;
            var realName = this.propertyNode.props_EditBox_name.string; // if (accountNumber.toString().substring(0, 2) !== '08') {
            // 	global.hallDispatch(addToastAction({ content: lang.write(k => k.InputModule.inputFaildCustomer1, {}, { placeStr: "渠道号码必须以08开头" }) }))
            // 	return
            // }

            new (_crd && InputValidator === void 0 ? (_reportPossibleCrUseOfInputValidator({
              error: Error()
            }), InputValidator) : InputValidator)().begin().isChartLength([9, 15], accountNumber).done(() => {
              this.events.onBindDone(this.props.hadChooseBankChannl, accountNumber, realName);
            });
          });
        }

        useProps(key, value) {
          if (key === "hadChooseBankChannl") {
            this.propertyNode.props_nomor_EditBox.string = value.cur.accountNumber || "";
            this.propertyNode.props_EditBox_name.string = value.cur.realName || "";
            assetManager.loadRemote(this.props.hadChooseBankChannl.iconMax, (err, asset) => {
              if (this.propertyNode && !err) {
                this.propertyNode.props_icon_reken.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(asset);
              }
            }); // bundleHall.load(`withdrawal/resource/icon_withdrawal_${value.cur.name.toLocaleLowerCase()}/spriteFrame`, SpriteFrame, (err, sp) => {
            // 	!err && (this.propertyNode.props_icon_reken.getComponent(Sprite).spriteFrame = sp)
            // })
            // if (this.props.hadChooseBankChannl.channelType === 0) {
            // 	this.propertyNode.props_EditBox_name.node.active = false
            // 	this.propertyNode.props_spr_cetatan_name1.active = false
            // }

            this.beginGuide();
          }
        }

        beginGuide() {
          if ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).fristLogin.main && !(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).fristLogin['hasShow_3']) {
            //标明这里已经显示了
            (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).fristLogin['hasShow_3'] = true;
            var guide_1 = new (_crd && Guide === void 0 ? (_reportPossibleCrUseOfGuide({
              error: Error()
            }), Guide) : Guide)(this.propertyNode.props_btn_metode_tentukan, this.propertyNode.props_layout_tentukan);
            guide_1.begin();
          }
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3967dc43a8064df020ae1b717d11968d2ac0f8e9.js.map