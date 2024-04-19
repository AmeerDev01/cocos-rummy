System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, Vec3, ActionEffectPlayer, createFont, toNodeSpaceAR, FishLabelFnt, _crd, fishLabelFntZorder, FishLabelFntCreate;

  function _reportPossibleCrUseOfActionEffectPlayer(extras) {
    _reporterNs.report("ActionEffectPlayer", "./ActionEffectPlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICreateObj(extras) {
    _reporterNs.report("ICreateObj", "./ObjectPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishLabelFntManager(extras) {
    _reporterNs.report("FishLabelFntManager", "./FishLabelFntManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateFont(extras) {
    _reporterNs.report("createFont", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOftoNodeSpaceAR(extras) {
    _reporterNs.report("toNodeSpaceAR", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../base/SourceManage", _context.meta, extras);
  }

  _export("FishLabelFnt", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ActionEffectPlayer = _unresolved_2.ActionEffectPlayer;
    }, function (_unresolved_3) {
      createFont = _unresolved_3.createFont;
      toNodeSpaceAR = _unresolved_3.toNodeSpaceAR;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fe6a8jxYTJPqICYFyrGCycv", "FishLabelFnt", undefined);

      __checkObsolete__(['Label', 'Node', 'Vec3']);

      /**
        金钱显示字体
       */
      fishLabelFntZorder = 800000;
      /**
        info = {
          obj_id,
          id,
        }
       */

      _export("FishLabelFntCreate", FishLabelFntCreate = {
        create: info => {
          return new FishLabelFnt();
        }
      });

      _export("FishLabelFnt", FishLabelFnt = class FishLabelFnt {
        constructor() {
          this.fishLabelConfig = null;
          this.fishLabelResConfig = null;
          this.actionConfig = null;
          this.commonConfig = null;
          this.object_id = null;
          this.item_config = null;
          this.is_alive = void 0;
          this.end_call = null;
          this.uiRoot = void 0;
          this.label = void 0;
          this.total_gold = void 0;
          this.add_step = void 0;
          this.cur_add_time = void 0;
          this.buse_add_score = void 0;
          this.fishLabelFntManager = void 0;
          this.sourceManage = void 0;
          this.rootNode = void 0;
          this.uiRoot = new Node();
          this.label = this.uiRoot.addComponent(Label);
        }

        init(info, sourceManage, fishLabelFntManager, fishLabelConfig, fishLabelResConfig, actionConfig, commonConfig, rootNode) {
          this.sourceManage = sourceManage;
          this.fishLabelConfig = fishLabelConfig;
          this.fishLabelResConfig = fishLabelResConfig;
          this.fishLabelFntManager = fishLabelFntManager;
          this.actionConfig = actionConfig;
          this.commonConfig = commonConfig;
          this.rootNode = rootNode;
          this.object_id = info.obj_id;
          this.item_config = this.fishLabelConfig[info.id];
          this.is_alive = false;
          this.end_call = null;
          var scr_config = this.fishLabelResConfig[this.item_config.src_id];
          this.label.string = "0";
          this.label.font = (_crd && createFont === void 0 ? (_reportPossibleCrUseOfcreateFont({
            error: Error()
          }), createFont) : createFont)(this.sourceManage, scr_config.src);
          this.uiRoot.active = false; // this.uiRoot.setWorldPosition(new Vec3(0, 0))

          this.uiRoot.setPosition((_crd && toNodeSpaceAR === void 0 ? (_reportPossibleCrUseOftoNodeSpaceAR({
            error: Error()
          }), toNodeSpaceAR) : toNodeSpaceAR)(this.rootNode, new Vec3(0, 0)));
          this.uiRoot.setSiblingIndex(fishLabelFntZorder);
          this.total_gold = 0;
          this.add_step = 0;
          this.cur_add_time = 0;
          this.buse_add_score = false;
        }

        play(spos, number, mul) {
          if (this.fishLabelFntManager.getUseSkew() == true) {
            this.uiRoot.setScale(-1, -1);
          } else {
            this.uiRoot.setScale(1, 1);
          }

          if (mul > this.commonConfig.max_rate_show || number > 9.90) {
            this.label.string = "0";
            this.buse_add_score = true; //s = 1/2*a*pow(t,2)

            this.add_step = 2 * number / (this.commonConfig.show_add_score_time * this.commonConfig.show_add_score_time);
            this.total_gold = number;
            this.fishLabelFntManager.pushShowAddScore(this);
          } else {
            this.label.string = "+" + number;
            this.buse_add_score = false;
          } // this.uiRoot.setWorldPosition(new Vec3(spos.x, spos.y))


          this.uiRoot.setPosition((_crd && toNodeSpaceAR === void 0 ? (_reportPossibleCrUseOftoNodeSpaceAR({
            error: Error()
          }), toNodeSpaceAR) : toNodeSpaceAR)(this.rootNode, spos));
          this.uiRoot.active = true;
          (_crd && ActionEffectPlayer === void 0 ? (_reportPossibleCrUseOfActionEffectPlayer({
            error: Error()
          }), ActionEffectPlayer) : ActionEffectPlayer).play(this.uiRoot, () => {
            if (this.end_call) {
              this.end_call(this);
            }
          }, this.actionConfig[this.item_config.act_id]);
        }

        getDataId() {
          return this.item_config.id;
        }

        getObjectId() {
          return this.object_id;
        }

        setUseState(buse) {
          this.is_alive = buse;
        }

        getUseState() {
          return this.is_alive;
        }

        setEndCallback(call) {
          this.end_call = call;
        }

        resumeOrgin() {
          this.uiRoot.active = false; // this.uiRoot.setWorldPosition(new Vec3(0, 0))

          this.uiRoot.setPosition((_crd && toNodeSpaceAR === void 0 ? (_reportPossibleCrUseOftoNodeSpaceAR({
            error: Error()
          }), toNodeSpaceAR) : toNodeSpaceAR)(this.rootNode, new Vec3(0, 0)));
          this.end_call = null;
          this.label.string = "0";
          this.total_gold = 0;
          this.add_step = 0;
          this.cur_add_time = 0;
          this.buse_add_score = false;
        }

        getAddScoreState() {
          return this.buse_add_score;
        }

        update(dt) {
          if (this.buse_add_score == true) {
            if (this.cur_add_time > this.commonConfig.show_add_score_time) {
              this.buse_add_score = false;
              this.label.string = "+" + this.total_gold;
            } else {
              this.cur_add_time = this.cur_add_time + dt;
              this.label.string = '+' + Math.floor(this.add_step * Math.pow(this.cur_add_time, 2) / 2);
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f5ec89eae3a4851b0d69ee6b039ae0756d0bae33.js.map