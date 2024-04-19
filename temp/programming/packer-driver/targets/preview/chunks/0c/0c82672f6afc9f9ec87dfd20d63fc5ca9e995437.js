System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, tween, ObjectClassType, toNodeSpaceAR, FishGoldManager, _crd, sin, cos, sqrt, pow, ceil, pi, goldConfigID;

  function _reportPossibleCrUseOfObjectClassType(extras) {
    _reporterNs.report("ObjectClassType", "./ObjectPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectPool(extras) {
    _reporterNs.report("ObjectPool", "./ObjectPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishGold(extras) {
    _reporterNs.report("FishGold", "./FishGold", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMusicEffectPlayer(extras) {
    _reporterNs.report("MusicEffectPlayer", "./MusicEffectPlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOftoNodeSpaceAR(extras) {
    _reporterNs.report("toNodeSpaceAR", "./FishTool", _context.meta, extras);
  }

  _export("FishGoldManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      ObjectClassType = _unresolved_2.ObjectClassType;
    }, function (_unresolved_3) {
      toNodeSpaceAR = _unresolved_3.toNodeSpaceAR;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "16c4a+Jnm9LjIjdYUECDhck", "FishGoldManager", undefined);

      __checkObsolete__(['Node', 'Vec3', 'tween']);

      /**
        金币管理
       */
      sin = Math.sin;
      cos = Math.cos;
      sqrt = Math.sqrt;
      pow = Math.pow;
      ceil = Math.ceil;
      pi = Math.PI;
      goldConfigID = 1; ////////////////////////////////////////////////////////////////////////-

      _export("FishGoldManager", FishGoldManager = class FishGoldManager {
        constructor() {
          this.fishGoldConfig = null;
          this.textureConfig = null;
          this.actionConfig = null;
          this.commonConfig = null;
          this.objectPool = void 0;
          this.musicEffectPlayer = void 0;
          this.rootNode = void 0;
        }

        init(fishGoldConfig, textureConfig, actionConfig, commonConfig, objectPool, musicEffectPlayer, rootNode) {
          this.fishGoldConfig = fishGoldConfig;
          this.textureConfig = textureConfig;
          this.actionConfig = actionConfig;
          this.commonConfig = commonConfig;
          this.objectPool = objectPool;
          this.musicEffectPlayer = musicEffectPlayer;
          this.rootNode = rootNode;
        }

        uninit() {
          this.fishGoldConfig = null;
          this.textureConfig = null;
          this.actionConfig = null;
          this.commonConfig = null;
          this.objectPool = null;
          this.musicEffectPlayer = null;
        }

        getRootNode() {
          return this.rootNode;
        }

        fgmOnEndCall(obj) {
          var end_pos = (_crd && toNodeSpaceAR === void 0 ? (_reportPossibleCrUseOftoNodeSpaceAR({
            error: Error()
          }), toNodeSpaceAR) : toNodeSpaceAR)(this.rootNode, obj.getEndPos());
          var t = obj.getEndMoveTime();

          if (t <= 0 || t > 10) {
            t = 2;
          }

          obj.uiRoot.setSiblingIndex(obj.uiRoot.parent.children.length);
          tween(obj.uiRoot).to(t, {
            position: end_pos
          }).call(() => {
            if (obj.uiRoot.isValid) {
              obj.runLastEff();
              this.musicEffectPlayer.play(this.commonConfig.gold_recl_id);
            }
          }).start();
        }

        getObjPos(max_num, cur_num, angle, dis) {
          var pos = new Vec3();
          var ranti = angle / 180 * pi;

          if (cur_num < max_num / 2) {
            pos.x = dis * cos(pi - ranti);
            pos.y = dis * sin(pi - ranti);
          } else {
            pos.x = -dis * cos(pi - ranti);
            pos.y = -dis * sin(pi - ranti);
          }

          return pos;
        }

        getUnitGoldNumber(score) {
          if (score !== null) {
            for (var k in this.fishGoldConfig) {
              var v = this.fishGoldConfig[k];

              if (score > v.gold_num) {
                return v.gold_num;
              }
            }
          }

          return this.fishGoldConfig[goldConfigID].gold_num;
        } //info = [spos, end_pos, number, angle, beishu]


        play(info) {
          var id = goldConfigID;

          for (var k in this.fishGoldConfig) {
            var v = this.fishGoldConfig[k];

            if (info.number > v.gold_num) {
              id = parseInt(k);
              break;
            }
          }

          var max_num = ceil(info.beishu / 10);

          if (max_num > this.commonConfig.max_gold_num) {
            max_num = this.commonConfig.max_gold_num;
          }

          var distance = 0;

          for (var i = 1; i <= max_num; i++) {
            var obj = this.objectPool.getObject((_crd && ObjectClassType === void 0 ? (_reportPossibleCrUseOfObjectClassType({
              error: Error()
            }), ObjectClassType) : ObjectClassType).type_fish_gold, id);

            if (obj) {
              var content_size = obj.getSize();
              obj.setUseState(true);
              obj.setPlayEndCall(obj => {
                this.fgmOnEndCall(obj);
              });
              var index = i - 1;

              if (i >= max_num / 2 && max_num > 1) {
                index = max_num - i + 1;
              }

              distance = index * (sqrt(pow(content_size.width, 2) + pow(content_size.height, 2)) + this.commonConfig.gold_distance);
              var new_spos = this.getObjPos(max_num, i, info.angle, distance);
              new_spos.x = new_spos.x + info.spos.x;
              new_spos.y = new_spos.y + info.spos.y;
              obj.play(new_spos, info.end_pos);
            }
          }

          this.musicEffectPlayer.play(this.commonConfig.gold_mus_id);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0c82672f6afc9f9ec87dfd20d63fc5ca9e995437.js.map