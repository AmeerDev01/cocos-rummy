System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UITransform, Vec2, Vec3, createAnimationNode, toNodeSpaceAR, SkillItemLine, _crd, atan, sqrt, pow, pi, lineZOrder;

  function _reportPossibleCrUseOfcreateAnimationNode(extras) {
    _reporterNs.report("createAnimationNode", "../../FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOftoNodeSpaceAR(extras) {
    _reporterNs.report("toNodeSpaceAR", "../../FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../../../base/SourceManage", _context.meta, extras);
  }

  _export("SkillItemLine", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      createAnimationNode = _unresolved_2.createAnimationNode;
      toNodeSpaceAR = _unresolved_2.toNodeSpaceAR;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bb115TpUTtBsbepRZg7bznV", "SkillItemLine", undefined);

      __checkObsolete__(['Node', 'Sprite', 'UITransform', 'Vec2', 'Vec3']);

      /**
      连线技能项
       */
      atan = Math.atan;
      sqrt = Math.sqrt;
      pow = Math.pow;
      pi = Math.PI;
      lineZOrder = 750000;

      _export("SkillItemLine", SkillItemLine = class SkillItemLine {
        constructor(sourceManage, info, textureConfig, rootNode) {
          this.uiRoot = void 0;
          this.sourceManage = void 0;
          this.rootNode = void 0;
          this.sourceManage = sourceManage;
          this.rootNode = rootNode;
          this.init(info, textureConfig);
        }

        init(info, textureConfig) {
          this.runLine(info, textureConfig);
        }

        runLine(info, textureConfig) {
          let srcConfig = textureConfig[info.src_id];

          if (srcConfig) {
            this.uiRoot = (_crd && createAnimationNode === void 0 ? (_reportPossibleCrUseOfcreateAnimationNode({
              error: Error()
            }), createAnimationNode) : createAnimationNode)(this.sourceManage, info.parent, srcConfig, true, true);
            this.uiRoot.getComponent(UITransform).setAnchorPoint(new Vec2(0, 0.5));
            this.uiRoot.setSiblingIndex(this.uiRoot.parent.children.length);
            this.setPosAndRotate(info);
          }
        }

        getSideByPos(pos1, pos2) {
          let side = 0; // let sp = { x = pos2.x - pos1.x, y = pos2.y - pos1.y, }

          let sp = new Vec3(pos2.x - pos1.x, pos2.y - pos1.y);

          if (sp.x >= 0 && sp.y >= 0) {
            side = 1;
          } else if (sp.x >= 0 && sp.y <= 0) {
            side = 4;
          } else if (sp.x <= 0 && sp.y >= 0) {
            side = 2;
          } else if (sp.x <= 0 && sp.y <= 0) {
            side = 3;
          }

          return side;
        }

        getAngleByPos(pos1, pos2) {
          let angle = 0;
          let side = this.getSideByPos(pos1, pos2);

          if (pos1.x == pos2.x) {
            if (side == 1) {
              angle = 90;
            } else if (side == 4) {
              angle = 270;
            } else if (side == 2) {
              angle = 90;
            } else if (side == 3) {
              angle = 270;
            }
          } else {
            let k = (pos1.y - pos2.y) / (pos1.x - pos2.x);
            angle = atan(k) * 180 / pi;

            if (side == 1 && angle <= 0) {
              angle = -angle;
            } else if (side == 2 && angle < 0) {
              angle = 180 + angle;
            } else if (side == 3 && angle > 0) {
              angle = 180 + angle;
            } else if (side == 3 && angle <= 0) {
              angle = 180 - angle;
            } else if (side == 4 && angle <= 0) {
              angle = 2 * 180 + angle;
            }
          }

          return angle;
        }

        setPosAndRotate(info) {
          // this.uiRoot.setWorldPosition(new Vec3(info.pos1.x, info.pos1.y))
          this.uiRoot.setPosition((_crd && toNodeSpaceAR === void 0 ? (_reportPossibleCrUseOftoNodeSpaceAR({
            error: Error()
          }), toNodeSpaceAR) : toNodeSpaceAR)(this.rootNode, info.pos1));
          let size = this.uiRoot.getComponent(UITransform); // 计算两点间的距离

          let pos_dis = sqrt(pow(info.pos1.x - info.pos2.x, 2) + pow(info.pos1.y - info.pos2.y, 2));

          if (pos_dis > size.width) {
            this.uiRoot.setScale(new Vec3(pos_dis / size.width, 1));
          } // 计算连线的角度，也就是两点间的夹角


          let angle = this.getAngleByPos(info.pos1, info.pos2); // this.uiRoot.angle = 360 - angle;

          this.uiRoot.angle = angle;
        }

        destroy() {
          this.uiRoot.destroy();
          this.sourceManage = null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0fc317e6b5d403b798961977fe685229d8988459.js.map