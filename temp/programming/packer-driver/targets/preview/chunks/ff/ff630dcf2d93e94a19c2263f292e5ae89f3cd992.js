System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BatteryHitScore, BatteryHitScoreMgr, _crd;

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBatteryHitScore(extras) {
    _reporterNs.report("BatteryHitScore", "./BatteryHitScore", _context.meta, extras);
  }

  _export("BatteryHitScoreMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      BatteryHitScore = _unresolved_2.BatteryHitScore;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fe604MYDvVIEaw/XBBM2+i9", "BatteryHitScoreMgr", undefined);

      __checkObsolete__(['Node', 'Vec3']);

      /**
        打中分数管理
       */
      _export("BatteryHitScoreMgr", BatteryHitScoreMgr = class BatteryHitScoreMgr {
        constructor(sourceManage, parent, labConfig, fntConfig, rootNode) {
          this.sourceManage = void 0;
          this.parent = void 0;
          this.labConfig = void 0;
          this.fntConfig = void 0;
          this.objLst = void 0;
          this.rootNode = void 0;
          this.sourceManage = sourceManage;
          this.objLst = [];
          this.parent = parent;
          this.labConfig = labConfig;
          this.fntConfig = fntConfig;
          this.rootNode = rootNode;
        }

        newSomeObject() {
          for (var k in this.labConfig) {
            var v = this.labConfig[k];
            if (v === null) continue;

            for (var i = 0; i < 5; i++) {
              var obj = new (_crd && BatteryHitScore === void 0 ? (_reportPossibleCrUseOfBatteryHitScore({
                error: Error()
              }), BatteryHitScore) : BatteryHitScore)(this.sourceManage, this.parent, this.fntConfig[v.src_id], v.id, this.rootNode);
              this.objLst.push(obj);
            }
          }
        }

        clear() {
          this.objLst.forEach(v => {
            v.destory();
          });
          this.objLst = [];
        }

        show(pos, rot, score, id, call) {
          var show_obj = null;

          for (var i = 0; i < this.objLst.length; i++) {
            var v = this.objLst[i];

            if (v.getUseState() === false && v.getId() === id) {
              show_obj = v;
              break;
            }
          }

          if (!show_obj) {
            show_obj = new (_crd && BatteryHitScore === void 0 ? (_reportPossibleCrUseOfBatteryHitScore({
              error: Error()
            }), BatteryHitScore) : BatteryHitScore)(this.sourceManage, this.parent, this.fntConfig[this.labConfig[id].src_id], id, this.rootNode);
            this.objLst.push(show_obj);
          }

          show_obj.show(pos, rot, score, call);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ff630dcf2d93e94a19c2263f292e5ae89f3cd992.js.map