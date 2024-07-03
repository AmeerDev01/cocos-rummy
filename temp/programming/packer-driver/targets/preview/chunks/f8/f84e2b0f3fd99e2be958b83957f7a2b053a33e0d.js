System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, Animation, BaseComponent, global, BuyType, StepNumber, SoundPathDefine, mainViewModel, phoenixV2_Audio, StepNumberV2, _dec, _class, _crd, ccclass, property, PhoenixV2_Header;

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

  function _reportPossibleCrUseOfmainViewModel(extras) {
    _reporterNs.report("mainViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphoenixV2_Audio(extras) {
    _reporterNs.report("phoenixV2_Audio", "../index", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Animation = _cc.Animation;
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
      mainViewModel = _unresolved_7.mainViewModel;
      phoenixV2_Audio = _unresolved_7.phoenixV2_Audio;
    }, function (_unresolved_8) {
      StepNumberV2 = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "be53070yuxHNYyxbGRYJPil", "PhoenixV2_Header", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node', 'Animation', 'EventTouch']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PhoenixV2_Header", PhoenixV2_Header = (_dec = ccclass('PhoenixV2_Header'), _dec(_class = class PhoenixV2_Header extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.init = true;
          this.stepNumberV2 = new (_crd && StepNumberV2 === void 0 ? (_reportPossibleCrUseOfStepNumberV({
            error: Error()
          }), StepNumberV2) : StepNumberV2)(this);
          this.propertyNode = {
            props_Back_Home: new Node(),
            props_Moeny_Top: new Node(),
            props_Left_Bg: new Node(),
            props_Right_Bg: new Node(),
            props_Up_Settings: new Node(),
            props_Moeny_Label: new Label(),
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
          this.isShowMenu = false;
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_Back_Home.on(Node.EventType.TOUCH_END, () => {
            (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
              error: Error()
            }), phoenixV2_Audio) : phoenixV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BTN_CLICK);
            this.events.quitGame();
          });
          this.propertyNode.props_Up_Settings.on(Node.EventType.TOUCH_END, () => {
            (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
              error: Error()
            }), phoenixV2_Audio) : phoenixV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BTN_CLICK);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openPersonCenter(2);
          });
          this.propertyNode.props_Left_Bg.on(Node.EventType.TOUCH_END, () => {
            (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
              error: Error()
            }), phoenixV2_Audio) : phoenixV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BTN_CLICK);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          });
          this.propertyNode.props_Right_Bg.on(Node.EventType.TOUCH_END, () => {
            (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
              error: Error()
            }), phoenixV2_Audio) : phoenixV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BTN_CLICK);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop((_crd && BuyType === void 0 ? (_reportPossibleCrUseOfBuyType({
              error: Error()
            }), BuyType) : BuyType).TAS);
          });
          this.propertyNode.props_Moeny_Top.on(Node.EventType.TOUCH_END, () => {
            (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
              error: Error()
            }), phoenixV2_Audio) : phoenixV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BTN_CLICK);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          });
          this.propertyNode.props_btn_vip.on(Node.EventType.TOUCH_END, () => {
            (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
              error: Error()
            }), phoenixV2_Audio) : phoenixV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BTN_CLICK);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openVipMain();
          });
          this.node.getChildByName('Up_Left').on(Node.EventType.TOUCH_END, () => {
            (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
              error: Error()
            }), phoenixV2_Audio) : phoenixV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BTN_CLICK);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          });
          this.propertyNode.props_btn_info.on(Node.EventType.TOUCH_END, () => {
            (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
              error: Error()
            }), phoenixV2_Audio) : phoenixV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BTN_CLICK);
            (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
              error: Error()
            }), mainViewModel) : mainViewModel).openRule();
          });
          this.propertyNode.props_btn_up_menu.on(Node.EventType.TOUCH_END, () => {
            (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
              error: Error()
            }), phoenixV2_Audio) : phoenixV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BTN_CLICK);

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
                var stepNumber = new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
                  error: Error()
                }), StepNumber) : StepNumber)(value.pre, value.cur, num => {
                  if (this.node && this.node.isValid) {
                    this.propertyNode.props_Moeny_Label.string = +num.toFixed(0) < 1000000 ? Number(value.cur).formatAmountWithCommas() : Number(value.cur).formatAmountWithLetter();
                  }
                });
                stepNumber.setFlyNode(this.propertyNode.props_Moeny_Label.node.parent, this.propertyNode.props_Moeny_Label.node, 20);
                stepNumber.start();
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
//# sourceMappingURL=f84e2b0f3fd99e2be958b83957f7a2b053a33e0d.js.map