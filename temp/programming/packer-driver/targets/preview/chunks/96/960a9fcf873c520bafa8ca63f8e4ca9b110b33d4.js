System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Sprite, SpriteFrame, tween, UITransform, Vec3, BaseComponent, baseBoardView, bundleCommon, bundleHall, global, hallAudio, SoundPathDefine, addToastAction, ToastType, _dec, _class, _crd, ccclass, property, Hall_WinningBox;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbaseBoardView(extras) {
    _reporterNs.report("baseBoardView", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbundleCommon(extras) {
    _reporterNs.report("bundleCommon", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbundleHall(extras) {
    _reporterNs.report("bundleHall", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhallAudio(extras) {
    _reporterNs.report("hallAudio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastType(extras) {
    _reporterNs.report("ToastType", "../store/actions/baseBoard", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      baseBoardView = _unresolved_3.baseBoardView;
      bundleCommon = _unresolved_3.bundleCommon;
      bundleHall = _unresolved_3.bundleHall;
      global = _unresolved_3.global;
      hallAudio = _unresolved_3.hallAudio;
    }, function (_unresolved_4) {
      SoundPathDefine = _unresolved_4.SoundPathDefine;
    }, function (_unresolved_5) {
      addToastAction = _unresolved_5.addToastAction;
      ToastType = _unresolved_5.ToastType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dae58GVctlP3YIDwJTZ+B4g", "Hall_WinningBox", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'tween', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_WinningBox", Hall_WinningBox = (_dec = ccclass('Hall_WinningBox'), _dec(_class = class Hall_WinningBox extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.winningList = [];
          this.isDone = true;
          this.propertyNode = {
            props_zhongjiangbox_template: new Node()
          };
          this.props = {
            newWinningItem: null
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === "newWinningItem" && value.cur) {
            this.winningList.push(value.cur);
            this.isDone && this.showWinning();
          }
        }

        pushWinningData(winningType) {
          if (!winningType) return;

          if (this.winningList.length >= 5) {
            this.winningList.shift();
          }

          this.winningList.push(winningType);
          this.isDone && this.showWinning();
        }

        showWinning() {
          if (!this.winningList.length) {
            this.isDone = true;
          } else {
            try {
              this.isDone = false;
              var showItem = this.winningList.shift();
              var node = instantiate(this.propertyNode.props_zhongjiangbox_template); //如果处于字游戏中，就在最上层弹出，如果在大厅，就在中层弹出

              var wrapNode = (_crd && baseBoardView === void 0 ? (_reportPossibleCrUseOfbaseBoardView({
                error: Error()
              }), baseBoardView) : baseBoardView).mainPanelViewModel.comp.props.subGameInfo ? (_crd && baseBoardView === void 0 ? (_reportPossibleCrUseOfbaseBoardView({
                error: Error()
              }), baseBoardView) : baseBoardView).comp.getPropertyNode().props_winnerBox : (_crd && baseBoardView === void 0 ? (_reportPossibleCrUseOfbaseBoardView({
                error: Error()
              }), baseBoardView) : baseBoardView).mainPanelViewModel.comp.getPropertyNode().props_winningBox;
              wrapNode.addChild(node);
              node.active = true;
              node.getChildByName("label_playerName").getComponent(Label).string = showItem.memberVo.nickName;
              node.getChildByName("label_goldNum").getComponent(Label).string = showItem.amount.formatAmountWithLetter2(false);
              (_crd && bundleHall === void 0 ? (_reportPossibleCrUseOfbundleHall({
                error: Error()
              }), bundleHall) : bundleHall).load("icon/smallIcon/game_" + showItem.gameId + "/spriteFrame", SpriteFrame, (err, sp) => {
                try {
                  !err && (node.getChildByName("game_spr_icon").getComponent(Sprite).spriteFrame = sp);
                } catch (e) {
                  console.log(e);
                }
              });
              (_crd && bundleCommon === void 0 ? (_reportPossibleCrUseOfbundleCommon({
                error: Error()
              }), bundleCommon) : bundleCommon).load("resource/head/head_circle_" + showItem.memberVo.avatarIndex + "/spriteFrame", SpriteFrame, (err, sp) => {
                try {
                  !err && (node.getChildByName("head_circle_2").getComponent(Sprite).spriteFrame = sp);
                } catch (e) {
                  console.log(e);
                }
              });
              var {
                x,
                y
              } = node.position;
              var width = node.getComponent(UITransform).width;
              (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
                error: Error()
              }), hallAudio) : hallAudio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).WINNING);

              var _tween = tween(node).to(0.3, {
                position: new Vec3(x - width, y)
              }, {
                easing: "backOut"
              }).delay(2).to(0.1, {
                position: new Vec3(x, y)
              }).call(() => {
                node && node.destroy();
                this && this.showWinning();
              }).start();

              node.once(Node.EventType.TOUCH_END, () => {
                _tween && _tween.stop();
                node && tween(node).to(0.05, {
                  scale: new Vec3(0, 0, 0)
                }).call(() => {
                  node && node.destroy();

                  if (this) {
                    this.winningList = [];
                    this.showWinning();
                  }
                }).start();
              });
            } catch (e) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: e,
                type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                  error: Error()
                }), ToastType) : ToastType).ERROR
              }));
            }
          }
        }

        bindUI() {// this.propertyNode.props_zhongjiangbox_template.active = false
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=960a9fcf873c520bafa8ca63f8e4ca9b110b33d4.js.map