System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseRepository, SubGameRepository, _crd;

  function _reportPossibleCrUseOfBaseRepository(extras) {
    _reporterNs.report("BaseRepository", "./BaseRepository", _context.meta, extras);
  }

  _export("SubGameRepository", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BaseRepository = _unresolved_2.BaseRepository;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0fae0010SRHZYQgz6kV+XcA", "SubGameRepository", undefined);

      _export("SubGameRepository", SubGameRepository = class SubGameRepository extends (_crd && BaseRepository === void 0 ? (_reportPossibleCrUseOfBaseRepository({
        error: Error()
      }), BaseRepository) : BaseRepository) {
        constructor() {
          super();

          /**最近点击的宝箱ID */
          this.recentlyOpenBoxId = '';
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1e0530473234c1d0ddd16a0b8f89e2a9a3ca5c79.js.map