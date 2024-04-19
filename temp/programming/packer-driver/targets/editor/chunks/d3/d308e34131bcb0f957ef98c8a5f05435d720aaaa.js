System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, sp, Sprite, tween, Vec3, BaseComponent, SkeletonAnimationPlayer, mainViewModel, phoenixV2_Audio, SoundPathDefine, _dec, _class, _crd, ccclass, property, phoenixV2_sgChoose_small;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletonAnimationPlayer(extras) {
    _reporterNs.report("SkeletonAnimationPlayer", "../../../utils/SkeletonPlay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainViewModel(extras) {
    _reporterNs.report("mainViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphoenixV2_Audio(extras) {
    _reporterNs.report("phoenixV2_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      SkeletonAnimationPlayer = _unresolved_3.default;
    }, function (_unresolved_4) {
      mainViewModel = _unresolved_4.mainViewModel;
      phoenixV2_Audio = _unresolved_4.phoenixV2_Audio;
    }, function (_unresolved_5) {
      SoundPathDefine = _unresolved_5.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cfe10/F3StI9p4kFpfIDxCj", "phoenixV2_sgChoose_small", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node', 'sp', 'Sprite', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("phoenixV2_sgChoose_small", phoenixV2_sgChoose_small = (_dec = ccclass('phoenixV2_sgChoose_small'), _dec(_class = class phoenixV2_sgChoose_small extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_btn_sgChoose_25: new Node(),
            props_btn_sgChoose_20: new Node(),
            props_btn_sgChoose_15: new Node(),
            props_btn_sgChoose_13: new Node(),
            props_btn_sgChoose_10: new Node(),
            props_mask: new Node()
          };
          this.props = {};
          this.events = {
            onWindowCloseHandler: () => {}
          };
        }

        start() {
          this.sgChooseShow();
        }

        initState() {
          return {};
        }

        bindEvent() {
          this.listenerChooseSmallGameListEvent();
        }

        changeGray() {}

        sgChooseShow() {
          (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).comp.getFreeNumNode().active = false;
          (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).comp.getupBgNode().active = false;
          (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
            error: Error()
          }), phoenixV2_Audio) : phoenixV2_Audio).stop();
          (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
            error: Error()
          }), phoenixV2_Audio) : phoenixV2_Audio).play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).CHOOSE_CARD_IN, true);
          tween(this.node.getChildByName('props_btn_sgChoose_25')).to(0.2, {
            position: new Vec3(-392, -4, 0)
          }).start();
          tween(this.node.getChildByName('props_btn_sgChoose_20')).to(0.4, {
            position: new Vec3(-194, -4, 0)
          }).start();
          tween(this.node.getChildByName('props_btn_sgChoose_15')).to(0.6, {
            position: new Vec3(4, -4, 0)
          }).start();
          tween(this.node.getChildByName('props_btn_sgChoose_13')).to(0.8, {
            position: new Vec3(202, -4, 0)
          }).start();
          tween(this.node.getChildByName('props_btn_sgChoose_10')).to(1, {
            position: new Vec3(400, -4, 0)
          }).start();
        }

        listenerChooseSmallGameListEvent() {
          const sgChooseSmall = this.node && this.node.isValid && this.node.children.filter(item => item.name.startsWith("props_btn_sgChoose"));
          sgChooseSmall && sgChooseSmall.forEach((v, i) => {
            v.on(Node.EventType.TOUCH_END, () => {
              (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
                error: Error()
              }), phoenixV2_Audio) : phoenixV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).CHOOSE_CARD);
              this.propertyNode.props_mask.active = true;
              sgChooseSmall.forEach((otherNode, index) => {
                if (index !== i) {
                  otherNode.getChildByName("skeleton_in").active = false;
                  otherNode.getChildByName("free_box_goin").active = false;
                  otherNode.getComponent(Sprite).grayscale = true; // otherNode.getComponent(Button).enabled = false;
                }
              }); // Update the clicked node

              v.getChildByName("skeleton_in").active = true;
              v.getChildByName("free_box_goin").active = false;
              v.getComponent(Sprite).grayscale = false;
              const skeleton = v.getChildByName("skeleton_in").getComponent(sp.Skeleton);
              let count = 0;
              new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
                error: Error()
              }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(skeleton, "animation", true, () => {
                count++;

                if (count >= 2) {
                  this.detryCloseWindow(i);
                }
              }).playAnimation(); // v.getComponent(sp.Skeleton).setCompleteListener(() => { 
              // 	this.detryCloseWindow(i);
              // })
            });
          });
        }

        detryCloseWindow(i) {
          if (this.node && this.node.isValid) {
            this.node.destroy();
            this.events.onWindowCloseHandler(i);
          }
        }

        useProps(key, value) {}

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d308e34131bcb0f957ef98c8a5f05435d720aaaa.js.map