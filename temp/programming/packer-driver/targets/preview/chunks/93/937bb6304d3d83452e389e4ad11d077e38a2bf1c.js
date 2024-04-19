System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, director, Label, Node, BaseComponent, global, StepNumber, SoundPathDefine, thorv2_Audio, config, _dec, _class, _crd, ccclass, property, ThorV2_Header;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStepNumber(extras) {
    _reporterNs.report("StepNumber", "../../../utils/StepNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfthorv2_Audio(extras) {
    _reporterNs.report("thorv2_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
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
      director = _cc.director;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      global = _unresolved_3.global;
    }, function (_unresolved_4) {
      StepNumber = _unresolved_4.default;
    }, function (_unresolved_5) {
      SoundPathDefine = _unresolved_5.SoundPathDefine;
    }, function (_unresolved_6) {
      thorv2_Audio = _unresolved_6.thorv2_Audio;
    }, function (_unresolved_7) {
      config = _unresolved_7.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "82c16L1dpFHRYR6B2vvMGlD", "ThorV2_Header", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'director', 'EventTouch', 'find', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ThorV2_Header", ThorV2_Header = (_dec = ccclass('ThorV2_Header'), _dec(_class = class ThorV2_Header extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.init = true;
          this.isShowMenu = false;
          this.canvasNode = void 0;
          this.propertyNode = {
            props_btn_up_home: new Node(),
            props_btn_up_addGold: new Node(),
            // props_beli: new Node(),
            // props_SPECIAL: new Node(),
            props_btn_up_set: new Node(),
            props_Moeny_Label: new Label(),
            // props_number2: new Node(),
            props_btn_up_menu: new Node(),
            props_menu_panel: new Node(),
            props_spr_menu_bg: new Node(),
            props_btn_vip: new Node(),
            props_btn_info: new Node(),
            props_layout_glod: new Node()
          };
          this.props = {
            gold: 0
          };
          this.events = {
            quitGame: () => {},
            onOpenRule: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_up_home.on(Node.EventType.TOUCH_END, () => {
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BUTTONCLICK);
            this.hideMenu();
            this.events.quitGame();
          });
          this.propertyNode.props_btn_up_set.on(Node.EventType.TOUCH_END, () => {
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BUTTONCLICK);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openPersonCenter(2);
            this.hideMenu();
          }); // this.propertyNode.props_beli.on(Node.EventType.TOUCH_END, () => {
          // thorv2_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
          // 	global.openShop()
          // })
          // this.propertyNode.props_SPECIAL.on(Node.EventType.TOUCH_END, () => {
          // thorv2_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
          // 	global.openShop(BuyType.TAS)
          // })

          this.propertyNode.props_btn_up_addGold.on(Node.EventType.TOUCH_END, () => {
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BUTTONCLICK);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          });
          this.propertyNode.props_layout_glod.on(Node.EventType.TOUCH_END, () => {
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BUTTONCLICK);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          });
          this.propertyNode.props_btn_vip.on(Node.EventType.TOUCH_END, () => {
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BUTTONCLICK);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openVipMain();
            this.hideMenu();
          });
          this.propertyNode.props_btn_info.on(Node.EventType.TOUCH_END, () => {
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BUTTONCLICK);
            this.events.onOpenRule();
            this.hideMenu();
          });
          this.propertyNode.props_btn_up_menu.on(Node.EventType.TOUCH_END, () => {
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BUTTONCLICK);

            if (!this.isShowMenu) {
              this.showMenu();
            }
          });
          this.propertyNode.props_menu_panel.on(Node.EventType.TOUCH_END, e => {
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BUTTONCLICK);
            e.preventSwallow = true;
            this.hideMenu();
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
          console.log("useProps: " + key + " " + JSON.stringify(value));

          if (this.node && this.node.isValid) {
            if (key === 'gold') {
              if (this.init) {
                this.propertyNode.props_Moeny_Label.string = this.goldFormat(value.cur);
                this.init = false;
              } else {
                this.updateGold(value);
              }
            }
          }
        }

        goldFormat(gold) {
          gold = Math.floor(gold);
          return gold >= 1000000 ? gold.formatAmountWithLetter() : gold.formatAmountWithCommas();
        }

        updateGold(value) {
          var diff = value.cur - value.pre;
          var done = undefined;

          if (diff > 0) {// done = () => {
            // 	this.dispatch(updateRollerStatus(RollerStatus.END))
            // }
          }

          var stepNumber = new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
            error: Error()
          }), StepNumber) : StepNumber)(value.pre, value.cur, num => {
            if (this.node && this.node.isValid) {
              this.propertyNode.props_Moeny_Label.string = this.goldFormat(num);
            }
          }, done);

          if (diff !== 0) {
            stepNumber.setFlyNode(this.propertyNode.props_Moeny_Label.node.parent, this.propertyNode.props_Moeny_Label.node, 20);
          }

          stepNumber.set((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.numberRollerTime).start();
        }

        showMenu() {
          this.isShowMenu = true;
          this.propertyNode.props_menu_panel.active = true;
          this.propertyNode.props_menu_panel.removeFromParent();
          this.canvasNode.addChild(this.propertyNode.props_menu_panel);
          var an = this.propertyNode.props_spr_menu_bg.getComponent(Animation);
          an.stop();
          an.play();
        }

        hideMenu() {
          this.propertyNode.props_menu_panel.active = false;
          this.propertyNode.props_menu_panel.removeFromParent();
          this.scheduleOnce(() => {
            this.isShowMenu = false;
          }, 0.2);
        }

        bindUI() {
          this.canvasNode = director.getScene().getChildByName('Canvas');
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=937bb6304d3d83452e389e4ad11d077e38a2bf1c.js.map