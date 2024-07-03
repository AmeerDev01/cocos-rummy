System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Label, Node, BaseComponent, global, BuyType, StepNumber, SoundPathDefine, egyptv2_Audio, mainViewModel, StepNumberV2, _dec, _class, _crd, ccclass, property, EgyptV2_Header;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuyType(extras) {
    _reporterNs.report("BuyType", "../../../hall/components/Hall_ShopPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStepNumber(extras) {
    _reporterNs.report("StepNumber", "../../../utils/StepNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfegyptv2_Audio(extras) {
    _reporterNs.report("egyptv2_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainViewModel(extras) {
    _reporterNs.report("mainViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStepNumberV(extras) {
    _reporterNs.report("StepNumberV2", "../../../utils/StepNumberV2", _context.meta, extras);
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
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      global = _unresolved_3.global;
    }, function (_unresolved_4) {
      BuyType = _unresolved_4.BuyType;
    }, function (_unresolved_5) {
      StepNumber = _unresolved_5.default;
    }, function (_unresolved_6) {
      SoundPathDefine = _unresolved_6.SoundPathDefine;
    }, function (_unresolved_7) {
      egyptv2_Audio = _unresolved_7.egyptv2_Audio;
      mainViewModel = _unresolved_7.mainViewModel;
    }, function (_unresolved_8) {
      StepNumberV2 = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a9573+6H3tCNpVNqt1L1oAc", "EgyptV2_Header", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'EventTouch', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EgyptV2_Header", EgyptV2_Header = (_dec = ccclass('EgyptV2_Header'), _dec(_class = class EgyptV2_Header extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.init = true;
          this.stepNumberV2 = new (_crd && StepNumberV2 === void 0 ? (_reportPossibleCrUseOfStepNumberV({
            error: Error()
          }), StepNumberV2) : StepNumberV2)(this);
          this.isShowMenu = false;
          this.propertyNode = {
            props_Back_Home: new Node(),
            props_Moeny_Top: new Node(),
            props_Left_Bg: new Node(),
            props_Right_Bg: new Node(),
            props_Up_Settings: new Node(),
            props_Moeny_Label: new Label(),
            props_number2: new Node(),
            props_btn_vip: new Node(),
            props_btn_up_menu: new Node(),
            props_menu_panel: new Node(),
            props_spr_menu_bg: new Node(),
            props_btn_info: new Node()
          };
          this.props = {
            gold: 0
          };
          this.events = {
            quitGame: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_Back_Home.on(Node.EventType.TOUCH_END, () => {
            (_crd && egyptv2_Audio === void 0 ? (_reportPossibleCrUseOfegyptv2_Audio({
              error: Error()
            }), egyptv2_Audio) : egyptv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).btn_click);
            this.events.quitGame();
          });
          this.propertyNode.props_Up_Settings.on(Node.EventType.TOUCH_END, () => {
            (_crd && egyptv2_Audio === void 0 ? (_reportPossibleCrUseOfegyptv2_Audio({
              error: Error()
            }), egyptv2_Audio) : egyptv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).btn_click);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openPersonCenter(2);
          });
          this.propertyNode.props_Left_Bg.on(Node.EventType.TOUCH_END, () => {
            (_crd && egyptv2_Audio === void 0 ? (_reportPossibleCrUseOfegyptv2_Audio({
              error: Error()
            }), egyptv2_Audio) : egyptv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).btn_click);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          });
          this.node.getChildByName('Up_Left').on(Node.EventType.TOUCH_END, () => {
            (_crd && egyptv2_Audio === void 0 ? (_reportPossibleCrUseOfegyptv2_Audio({
              error: Error()
            }), egyptv2_Audio) : egyptv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).btn_click);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          });
          this.propertyNode.props_Right_Bg.on(Node.EventType.TOUCH_END, () => {
            (_crd && egyptv2_Audio === void 0 ? (_reportPossibleCrUseOfegyptv2_Audio({
              error: Error()
            }), egyptv2_Audio) : egyptv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).btn_click);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop((_crd && BuyType === void 0 ? (_reportPossibleCrUseOfBuyType({
              error: Error()
            }), BuyType) : BuyType).TAS);
          });
          this.propertyNode.props_Moeny_Top.on(Node.EventType.TOUCH_END, () => {
            (_crd && egyptv2_Audio === void 0 ? (_reportPossibleCrUseOfegyptv2_Audio({
              error: Error()
            }), egyptv2_Audio) : egyptv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).btn_click);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          });
          this.propertyNode.props_btn_info.on(Node.EventType.TOUCH_END, () => {
            (_crd && egyptv2_Audio === void 0 ? (_reportPossibleCrUseOfegyptv2_Audio({
              error: Error()
            }), egyptv2_Audio) : egyptv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).btn_click);
            (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
              error: Error()
            }), mainViewModel) : mainViewModel).openRule();
          });
          this.propertyNode.props_btn_vip.on(Node.EventType.TOUCH_END, () => {
            (_crd && egyptv2_Audio === void 0 ? (_reportPossibleCrUseOfegyptv2_Audio({
              error: Error()
            }), egyptv2_Audio) : egyptv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).btn_click);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openVipMain();
          });
          this.propertyNode.props_btn_up_menu.on(Node.EventType.TOUCH_END, () => {
            (_crd && egyptv2_Audio === void 0 ? (_reportPossibleCrUseOfegyptv2_Audio({
              error: Error()
            }), egyptv2_Audio) : egyptv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).btn_click);

            if (!this.isShowMenu) {
              this.isShowMenu = true;
              this.propertyNode.props_menu_panel.active = !this.propertyNode.props_menu_panel.active;
              this.propertyNode.props_spr_menu_bg.getComponent(Animation).stop();
              this.propertyNode.props_spr_menu_bg.getComponent(Animation).play();
            }
          });
          this.propertyNode.props_menu_panel.on(Node.EventType.TOUCH_END, e => {
            e.preventSwallow = true;
            this.propertyNode.props_menu_panel.active = false;
            this.scheduleOnce(() => {
              this.isShowMenu = false;
            }, 0.2);
          });
          this.propertyNode.props_menu_panel.on(Node.EventType.TOUCH_START, e => {
            e.preventSwallow = true;
          });
          this.propertyNode.props_menu_panel.on(Node.EventType.TOUCH_MOVE, e => {
            e.preventSwallow = true;
          });
          this.propertyNode.props_menu_panel.on(Node.EventType.TOUCH_CANCEL, e => {
            e.preventSwallow = true;
          });
        }

        useProps(key, value) {
          if (this.node && this.node.isValid) {
            if (key === 'gold') {
              if (this.init) {
                this.propertyNode.props_Moeny_Label.string = Number(value.cur) < 1000000 ? Number(value.cur).formatAmountWithCommas() : Number(value.cur).formatAmountWithLetter();
                this.init = false;
              } else {
                // this.stepNumberV2.start(value.pre, value.cur, (num) => {
                // 	if (this.node && this.node.isValid) {
                // 		this.propertyNode.props_Moeny_Label.string = Number(num.toFixed(0)).formatAmountWithCommas();
                // 	}
                // });
                new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
                  error: Error()
                }), StepNumber) : StepNumber)(value.pre, value.cur, num => {
                  if (this.node && this.node.isValid) {
                    this.propertyNode.props_Moeny_Label.string = +num.toFixed(0) < 1000000 ? Number(value.cur).formatAmountWithCommas() : Number(value.cur).formatAmountWithLetter();
                    ;
                  }
                }).start();
                var diff = value.cur - value.pre;
                this.propertyNode.props_number2.getComponent(Label).string = diff > 0 ? '+' + diff : diff + '';
                this.propertyNode.props_number2.active = true;
                this.propertyNode.props_number2.getComponent(Animation).play();
              }
            }
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
//# sourceMappingURL=e8067d19b0c47c4f90fc96d0f79f61d2255da92c.js.map