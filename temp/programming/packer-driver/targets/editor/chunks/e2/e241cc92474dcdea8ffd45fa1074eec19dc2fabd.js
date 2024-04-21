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

      _cclegacy._RF.push({}, "a24dcCaPgBD64ysW6pGV8bY", "SubGameProxy", undefined);

      _export("RollerType", RollerType = /*#__PURE__*/function (RollerType) {
        RollerType["NORMAL"] = "iconRollerQueue";
        RollerType["LARGE"] = "largeIconRollerQueue";
        return RollerType;
      }({}));

      _export("SubGameProxy", SubGameProxy = class SubGameProxy extends (_crd && BaseProxy === void 0 ? (_reportPossibleCrUseOfBaseProxy({
        error: Error()
      }), BaseProxy) : BaseProxy) {
        constructor(proxyName = null, data = null) {
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
//# sourceMappingURL=e241cc92474dcdea8ffd45fa1074eec19dc2fabd.js.map