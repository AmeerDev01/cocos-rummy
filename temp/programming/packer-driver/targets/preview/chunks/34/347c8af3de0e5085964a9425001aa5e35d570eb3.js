System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseProxy, SubGameRepository, SubGameProxy, _crd, RollerType;

  function _reportPossibleCrUseOfBaseProxy(extras) {
    _reporterNs.report("BaseProxy", "./BaseProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubGameRepository(extras) {
    _reporterNs.report("SubGameRepository", "../Repositories/SubGameRepository", _context.meta, extras);
  }

  _export("SubGameProxy", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BaseProxy = _unresolved_2.default;
    }, function (_unresolved_3) {
      SubGameRepository = _unresolved_3.SubGameRepository;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "58dbfLtd1pCpqiDb9/x/BHR", "SubGameProxy", undefined);

      _export("RollerType", RollerType = /*#__PURE__*/function (RollerType) {
        RollerType["NORMAL"] = "iconRollerQueue";
        RollerType["LARGE"] = "largeIconRollerQueue";
        return RollerType;
      }({}));

      _export("SubGameProxy", SubGameProxy = class SubGameProxy extends (_crd && BaseProxy === void 0 ? (_reportPossibleCrUseOfBaseProxy({
        error: Error()
      }), BaseProxy) : BaseProxy) {
        constructor(proxyName, data) {
          if (proxyName === void 0) {
            proxyName = null;
          }

          if (data === void 0) {
            data = null;
          }

          super(proxyName, data);
          this.repository = new (_crd && SubGameRepository === void 0 ? (_reportPossibleCrUseOfSubGameRepository({
            error: Error()
          }), SubGameRepository) : SubGameRepository)();
        }
        /**设置最近点击的宝箱ID */


        setRecentlyOpenBoxId(boxId) {
          this.repository.recentlyOpenBoxId = boxId;
        }
        /**获取最近点击的宝箱ID */


        getRecentlyOpenBoxId() {
          return this.repository.recentlyOpenBoxId;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=347c8af3de0e5085964a9425001aa5e35d570eb3.js.map