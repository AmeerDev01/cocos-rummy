System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, UIOpacity, Vec3, tween, createFont, llcompare, toNodeSpaceAR, BatteryHitScore, _crd;

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateFont(extras) {
    _reporterNs.report("createFont", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfllcompare(extras) {
    _reporterNs.report("llcompare", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOftoNodeSpaceAR(extras) {
    _reporterNs.report("toNodeSpaceAR", "./FishTool", _context.meta, extras);
  }

  _export("BatteryHitScore", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Node = _cc.Node;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      createFont = _unresolved_2.createFont;
      llcompare = _unresolved_2.llcompare;
      toNodeSpaceAR = _unresolved_2.toNodeSpaceAR;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7df45glzHdILZfbV/aKMmp/", "BatteryHitScore", undefined);

      __checkObsolete__(['Label', 'Node', 'UIOpacity', 'Vec3', 'tween']);

      /**
        提示分数字体显示
       */
      _export("BatteryHitScore", BatteryHitScore = class BatteryHitScore {
        constructor(sourceManage, parentNode, config, id, rootNode) {
          this.sourceManage = void 0;
          this.uiRoot = void 0;
          this.label = void 0;
          this.opacity = void 0;
          this.bused_state = void 0;
          this.id = void 0;
          this.rootNode = void 0;
          this.sourceManage = sourceManage;
          this.rootNode = rootNode;
          this.uiRoot = new Node();
          parentNode.addChild(this.uiRoot);
          this.opacity = this.uiRoot.addComponent(UIOpacity);
          this.label = this.uiRoot.addComponent(Label);
          this.init(config, id);
        }

        init(config, id) {
          this.label.string = "0";
          this.label.font = (_crd && createFont === void 0 ? (_reportPossibleCrUseOfcreateFont({
            error: Error()
          }), createFont) : createFont)(this.sourceManage, config.src);
          this.uiRoot.active = false; // this.uiRoot.setWorldPosition(new Vec3(0, 0))

          this.uiRoot.setPosition((_crd && toNodeSpaceAR === void 0 ? (_reportPossibleCrUseOftoNodeSpaceAR({
            error: Error()
          }), toNodeSpaceAR) : toNodeSpaceAR)(this.rootNode, new Vec3(0, 0)));
          this.bused_state = false;
          this.id = id;
        }

        show(pos, rot, score, call) {
          this.bused_state = true;
          this.uiRoot.setWorldPosition(new Vec3(pos.x, pos.y)); // this.uiRoot.setPosition(toNodeSpaceAR(this.rootNode, pos))

          this.uiRoot.angle = rot;
          let strScore = `${score}`;

          if ((_crd && llcompare === void 0 ? (_reportPossibleCrUseOfllcompare({
            error: Error()
          }), llcompare) : llcompare)(score, 0) >= 0) {
            strScore = `+${score}`;
          }

          this.label.string = strScore;
          const y = pos.y > 200 ? -80 : 80;
          tween(this.uiRoot).delay(2.5).call(() => {
            if (this.uiRoot.isValid) {
              this.uiRoot.active = true;
              call && call();
            }
          }).by(0.3, {
            worldPosition: new Vec3(0, y)
          }).delay(0.8).call(() => {
            tween(this.opacity).to(0.3, {
              opacity: 0
            }).call(() => {
              if (this.uiRoot.isValid) {
                this.uiRoot.active = false;
                this.uiRoot.setWorldPosition(new Vec3(0, 0)); // this.uiRoot.setPosition(toNodeSpaceAR(this.rootNode, new Vec3(0, 0)))

                this.bused_state = false;
                this.opacity.opacity = 255;
              }
            }).start();
          }).start(); // this.runAction(cc.sequence({
          //   cc.delayTime(2.5), cc.callFunc(() => {
          //     this.active = (true)
          //     if (call) {
          //       call()
          //     }
          //   }), cc.MoveBy.create(0.3, cc.v2(0, 80)), cc.delayTime(0.8), cc.fadeOut(0.3), cc.callFunc(() => {
          //     this.active = (false)
          //     this.active = (false)
          //     this.setPosition(0, 0)
          //     this.bused_state = false
          //     this.opacity = (255)
          //   })
          // }))
        }

        getUseState() {
          return this.bused_state;
        }

        getId() {
          return this.id;
        }

        destory() {
          this.uiRoot.destroy();
          this.sourceManage = null;
          this.label = null;
          this.opacity = null;
        }

      }); // public create(config, id) {
      // 	let obj = BatteryHitScore.new()
      // 	if( obj ){
      // 		obj.init(config, id)
      // 	}
      // 	return obj
      // }


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dbb8675d38db5e6b8db740ce6a5827890988a978.js.map