System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, config, _crd, isSelf;

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "./config", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      config = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0d6acphiHpINKLgq7nBhzJT", "fishTool", undefined);

      _export("isSelf", isSelf = playerId => {
        return playerId + '' === (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
          error: Error()
        }), config) : config).selfUserId;
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4516462582073b503ea2071e53c63ee71cd7a8f0.js.map