System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, sp, createSkeleton, toNodeSpaceAR, FishNet, _crd, fishNetZOrder, FishNetCreate;

  function _reportPossibleCrUseOfcreateSkeleton(extras) {
    _reporterNs.report("createSkeleton", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOftoNodeSpaceAR(extras) {
    _reporterNs.report("toNodeSpaceAR", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICreateObj(extras) {
    _reporterNs.report("ICreateObj", "./ObjectPool", _context.meta, extras);
  }

  _export("FishNet", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      createSkeleton = _unresolved_2.createSkeleton;
      toNodeSpaceAR = _unresolved_2.toNodeSpaceAR;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "91446tdqGFBSZV1akFScKEW", "FishNet", undefined);

      __checkObsolete__(['Component', 'Node', 'Vec3', 'sp']);

      /**
        鱼网
       */
      fishNetZOrder = 900000;

      _export("FishNetCreate", FishNetCreate = {
        create: info => {
          return new FishNet();
        }
      }); //////////////////////////////////////////////-


      _export("FishNet", FishNet = class FishNet {
        constructor() {
          this.fishNetConfig = void 0;
          this.sourceManage = void 0;
          this.fshn_cfg = void 0;
          this.object_id = void 0;
          this.is_alive = void 0;
          this.end_call = void 0;
          this.net_obj = void 0;
          this.uiRoot = void 0;
          this.rootNode = void 0;
          this.uiRoot = new Node();
        }

        init(info, fnConfig, sourceManage, rootNode) {
          this.rootNode = rootNode;
          this.fishNetConfig = fnConfig;
          this.sourceManage = sourceManage;
          this.fshn_cfg = this.fishNetConfig[info.id];
          this.object_id = info.obj_id;
          this.is_alive = false;
          this.end_call = null;
          this.net_obj = (_crd && createSkeleton === void 0 ? (_reportPossibleCrUseOfcreateSkeleton({
            error: Error()
          }), createSkeleton) : createSkeleton)(this.sourceManage, this.uiRoot, this.fshn_cfg.src);
          this.net_obj.setPosition(0, 0);
          this.uiRoot.addChild(this.net_obj);
          this.net_obj.active = true;
          this.uiRoot.setPosition(0, 0);
          this.uiRoot.active = false;
          this.uiRoot.setSiblingIndex(fishNetZOrder);
        }

        getDataId() {
          return this.fshn_cfg.id;
        }

        getObjectId() {
          return this.object_id;
        }

        setUseState(buse) {
          this.is_alive = buse;
        }

        getUseState() {
          return this.is_alive;
        } //call(obj)


        setPlayEndCall(call) {
          this.end_call = call;
        }

        play(pos) {
          // this.uiRoot.setWorldPosition(new Vec3(pos.x, pos.y))
          this.uiRoot.setPosition((_crd && toNodeSpaceAR === void 0 ? (_reportPossibleCrUseOftoNodeSpaceAR({
            error: Error()
          }), toNodeSpaceAR) : toNodeSpaceAR)(this.rootNode, pos));
          this.uiRoot.active = true;
          var sk = this.net_obj.getComponent(sp.Skeleton);
          sk.setAnimation(0, this.fshn_cfg.ani, false);
          sk.setCompleteListener(() => {
            this.end_call && this.end_call(this);
          });
        }

      }); // /**
      // 	info = [obj_id, id,]
      //  */
      // public create(info) {
      //   let obj = FishNet.new()
      //   if (obj) {
      //     obj.init(info)
      //   }
      //   return obj
      // }


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f1f2cca0875557b95584d7bab6f6a3ffa89e3cfd.js.map