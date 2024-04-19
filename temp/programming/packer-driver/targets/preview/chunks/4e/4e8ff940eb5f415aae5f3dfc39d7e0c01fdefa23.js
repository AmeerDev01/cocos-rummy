System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ObjectClassType, FishLabelFntManager, _crd;

  function _reportPossibleCrUseOfFishLabelFnt(extras) {
    _reporterNs.report("FishLabelFnt", "./FishLabelFnt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectClassType(extras) {
    _reporterNs.report("ObjectClassType", "./ObjectPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectPool(extras) {
    _reporterNs.report("ObjectPool", "./ObjectPool", _context.meta, extras);
  }

  _export("FishLabelFntManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      ObjectClassType = _unresolved_2.ObjectClassType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "563723SO1dCjYTqlrT11F1/", "FishLabelFntManager", undefined);

      /**
        金钱字体对象管理
       */
      __checkObsolete__(['Node']);

      ////////////////////////////////////////-
      _export("FishLabelFntManager", FishLabelFntManager = class FishLabelFntManager {
        constructor(objectPool) {
          this.showAddScoreList = null;
          this.bUseRotation = false;
          this.objectPool = void 0;
          this.rootNode = void 0;
          this.objectPool = objectPool;
        }

        flfmOnEndCall(obj) {
          if (obj) {
            obj.setUseState(false);
            obj.resumeOrgin();
          }
        }

        getRootNode() {
          return this.rootNode;
        }

        init(rootNode) {
          this.rootNode = rootNode;
          this.showAddScoreList = [];
        }

        uninit() {
          this.showAddScoreList = null;
          this.bUseRotation = false;
        }

        setUseSkew(buse) {
          this.bUseRotation = buse;
        }

        getUseSkew() {
          return this.bUseRotation;
        }

        pushShowAddScore(obj) {
          if (obj) {
            this.showAddScoreList.push(obj);
          }
        }

        play(spos, number, id, mul) {
          var fObj = this.objectPool.getObject((_crd && ObjectClassType === void 0 ? (_reportPossibleCrUseOfObjectClassType({
            error: Error()
          }), ObjectClassType) : ObjectClassType).type_fish_fnt, id);

          if (fObj) {
            fObj.setUseState(true);
            fObj.setEndCallback(this.flfmOnEndCall);
            fObj.play(spos, number, mul);
          }
        }

        update(dt) {
          this.showAddScoreList.forEach(v => v.update(dt));
          this.showAddScoreList = this.showAddScoreList.filter(v => v.getAddScoreState());
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4e8ff940eb5f415aae5f3dfc39d7e0c01fdefa23.js.map