System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ObjectClassType, FishNetManager, _crd;

  function _reportPossibleCrUseOfFishNet(extras) {
    _reporterNs.report("FishNet", "./FishNet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectClassType(extras) {
    _reporterNs.report("ObjectClassType", "./ObjectPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectPool(extras) {
    _reporterNs.report("ObjectPool", "./ObjectPool", _context.meta, extras);
  }

  _export("FishNetManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ObjectClassType = _unresolved_2.ObjectClassType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b3ea5QuHQRDBqlh7wPu/UIk", "FishNetManager", undefined);
      /**
        鱼网管理
       */


      ////////////////////////////////////////-
      _export("FishNetManager", FishNetManager = class FishNetManager {
        constructor(objectPool) {
          this.objectPool = void 0;
          this.objectPool = objectPool;
        }

        fnmOnPlayEndCall(obj) {
          if (obj) {
            obj.setUseState(false);
            obj.active = false;
          }
        }

        uninit() {
          this.objectPool = null;
        }
        /**
        info = [pos, id]
         */


        play(info) {
          let fnObj = this.objectPool.getObject((_crd && ObjectClassType === void 0 ? (_reportPossibleCrUseOfObjectClassType({
            error: Error()
          }), ObjectClassType) : ObjectClassType).type_fish_net, info.id);

          if (fnObj) {
            fnObj.setUseState(true);
            fnObj.setPlayEndCall(this.fnmOnPlayEndCall);
            fnObj.play(info.pos);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e4e44581fa3c41bb352895e459b628be3aeb65ea.js.map