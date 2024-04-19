System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, AnimationClip, Node, Vec3, createAnimationNode, toNodeSpaceAR, ActionEffectPlayer, FishGold, _crd, sqrt, pow, fishGoldZOrder, FishGoldCreate;

  function _reportPossibleCrUseOfcreateAnimationNode(extras) {
    _reporterNs.report("createAnimationNode", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOftoNodeSpaceAR(extras) {
    _reporterNs.report("toNodeSpaceAR", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionEffectPlayer(extras) {
    _reporterNs.report("ActionEffectPlayer", "./ActionEffectPlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICreateObj(extras) {
    _reporterNs.report("ICreateObj", "./ObjectPool", _context.meta, extras);
  }

  _export("FishGold", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
      AnimationClip = _cc.AnimationClip;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      createAnimationNode = _unresolved_2.createAnimationNode;
      toNodeSpaceAR = _unresolved_2.toNodeSpaceAR;
    }, function (_unresolved_3) {
      ActionEffectPlayer = _unresolved_3.ActionEffectPlayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "767479Nzg1BOYRkV4plv0sD", "FishGold", undefined);

      __checkObsolete__(['Animation', 'AnimationClip', 'Node', 'Vec3']);

      /**
        金币
       */
      sqrt = Math.sqrt;
      pow = Math.pow;
      fishGoldZOrder = 700000;

      _export("FishGoldCreate", FishGoldCreate = {
        create: info => {
          return new FishGold();
        }
      }); //////////////////////////////////////////////////////-


      _export("FishGold", FishGold = class FishGold {
        constructor() {
          this.uiRoot = void 0;
          this.sourceManage = void 0;
          this.fishGoldConfig = void 0;
          this.textureConfig = void 0;
          this.actionConfig = void 0;
          this.commonConfig = void 0;
          this.object_id = void 0;
          this.data_config = void 0;
          this.is_alive = void 0;
          this.end_call = void 0;
          this.end_pos = void 0;
          this.start_pos = void 0;
          this.spr_lst = void 0;
          this.rootNode = void 0;
          this.uiRoot = new Node();
        }

        init(info, sourceManage, fishGoldConfig, textureConfig, actionConfig, commonConfig, rootNode) {
          this.sourceManage = sourceManage;
          this.fishGoldConfig = fishGoldConfig;
          this.textureConfig = textureConfig;
          this.actionConfig = actionConfig;
          this.commonConfig = commonConfig;
          this.object_id = info.obj_id;
          this.rootNode = rootNode;
          this.data_config = this.fishGoldConfig[info.id];
          this.is_alive = false;
          this.end_call = null;
          this.end_pos = new Vec3();
          this.start_pos = new Vec3();
          this.spr_lst = [];

          for (var i in this.data_config.view_inf) {
            var v = this.data_config.view_inf[i];
            var ani_cfg = textureConfig[v.src_id];
            this.spr_lst[i] = (_crd && createAnimationNode === void 0 ? (_reportPossibleCrUseOfcreateAnimationNode({
              error: Error()
            }), createAnimationNode) : createAnimationNode)(this.sourceManage, this.uiRoot, ani_cfg, false, false);
            this.spr_lst[i].setPosition(0, 0);
            this.spr_lst[i].active = false;
          }

          this.uiRoot.active = false; // this.uiRoot.setSiblingIndex(fishGoldZOrder)
        }

        getDataId() {
          return this.data_config.id;
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

        getEndPos() {
          return this.end_pos;
        }

        play(spos, epos) {
          // this.uiRoot.setWorldPosition(new Vec3(spos.x, spos.y))
          this.uiRoot.setPosition((_crd && toNodeSpaceAR === void 0 ? (_reportPossibleCrUseOftoNodeSpaceAR({
            error: Error()
          }), toNodeSpaceAR) : toNodeSpaceAR)(this.rootNode, spos));
          this.uiRoot.active = true;
          this.end_pos = epos;
          this.start_pos = spos;

          if (this.spr_lst[1] && this.spr_lst[2]) {
            this.spr_lst[1].active = true;
            this.spr_lst[2].active = false;
            var an = this.spr_lst[1].getComponent(Animation);
            an.play();
            an.on(Animation.EventType.FINISHED, () => {
              this.spr_lst[1].active = false;
              this.spr_lst[2].active = true;
              var an2 = this.spr_lst[2].getComponent(Animation);
              an2.defaultClip.wrapMode = AnimationClip.WrapMode.Loop;
              an2.play();
              an.off(Animation.EventType.FINISHED);
              (_crd && ActionEffectPlayer === void 0 ? (_reportPossibleCrUseOfActionEffectPlayer({
                error: Error()
              }), ActionEffectPlayer) : ActionEffectPlayer).play(this.uiRoot, () => {
                if (this.end_call) {
                  this.end_call(this);
                }
              }, this.actionConfig[this.data_config.view_inf[2].act_id]);
            });
          }
        }

        resumeOrgin() {
          // this.uiRoot.setWorldPosition(new Vec3(0, 0));
          this.uiRoot.setPosition((_crd && toNodeSpaceAR === void 0 ? (_reportPossibleCrUseOftoNodeSpaceAR({
            error: Error()
          }), toNodeSpaceAR) : toNodeSpaceAR)(this.rootNode, new Vec3(0, 0)));
          this.uiRoot.active = false;
          this.end_pos = new Vec3();
          this.start_pos = new Vec3();
          this.end_call = null;

          for (var i = 1; i <= this.data_config.view_inf.length; i++) {
            this.spr_lst[i].getComponent(Animation).stop();
            this.spr_lst[i].active = false;
          }

          this.uiRoot.setSiblingIndex(this.uiRoot.parent.children.length);
        }

        getEndMoveTime() {
          return sqrt(pow(this.start_pos.x - this.end_pos.x, 2) + pow(this.start_pos.y - this.end_pos.y, 2)) / this.commonConfig.gold_move_v;
        }

        getSize() {
          return this.data_config.size;
        }

        runLastEff() {
          if (this.spr_lst[3]) {
            this.spr_lst[1].active = false;
            this.spr_lst[2].active = false;
            this.spr_lst[3].active = true;
            var an = this.spr_lst[3].getComponent(Animation);
            an.play();
            an.on(Animation.EventType.FINISHED, () => {
              this.resumeOrgin();
              this.setUseState(false);
              an.off(Animation.EventType.FINISHED);
            });
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bfbd65d76ff1cdc77a0f8e16f23018a9d7eed52a.js.map