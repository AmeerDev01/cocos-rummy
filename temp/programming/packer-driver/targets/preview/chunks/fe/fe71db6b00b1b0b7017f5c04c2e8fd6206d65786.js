System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BaseProxy, SlotRepository, roller, instantiate, log, config, SlotProxy, _crd, RollerType;

  function _reportPossibleCrUseOfBaseProxy(extras) {
    _reporterNs.report("BaseProxy", "./BaseProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotRepository(extras) {
    _reporterNs.report("SlotRepository", "../Repositories/SlotRepository", _context.meta, extras);
  }

  function _reportPossibleCrUseOfroller(extras) {
    _reporterNs.report("roller", "../Repositories/SlotRepository", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../GodWealth_config", _context.meta, extras);
  }

  _export("SlotProxy", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      log = _cc.log;
    }, function (_unresolved_2) {
      BaseProxy = _unresolved_2.default;
    }, function (_unresolved_3) {
      SlotRepository = _unresolved_3.SlotRepository;
      roller = _unresolved_3.roller;
    }, function (_unresolved_4) {
      config = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dcde275g25No7zOa6RPD7CO", "SlotProxy", undefined);

      __checkObsolete__(['instantiate', 'log']);

      _export("RollerType", RollerType = /*#__PURE__*/function (RollerType) {
        RollerType["NORMAL"] = "iconRollerQueue";
        RollerType["LARGE"] = "largeIconRollerQueue";
        return RollerType;
      }({}));

      _export("SlotProxy", SlotProxy = class SlotProxy extends (_crd && BaseProxy === void 0 ? (_reportPossibleCrUseOfBaseProxy({
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
          this.repository = new (_crd && SlotRepository === void 0 ? (_reportPossibleCrUseOfSlotRepository({
            error: Error()
          }), SlotRepository) : SlotRepository)();
        } // private repository: FruitsSlotRepository

        /**
         * 初始化滑槽数据
         * @param rollerType NORMAL展示5列, LARGE展示3列且中间为大滑槽
         */


        initRoller() {
          // 首先重置
          // console.log("rollerType", rollerType)
          this.repository.rollerList = [];
          (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).iconRollerQueue.forEach((rollerData, i) => {
            //如果只有3列数据，那需要将将第二排设置为大滑槽数据
            // const data = Object.assign({}, (rollerType === RollerType.LARGE && i === 1) ? bigRoller : roller, { data: rollerData })
            var data = Object.assign({}, _crd && roller === void 0 ? (_reportPossibleCrUseOfroller({
              error: Error()
            }), roller) : roller, {
              data: rollerData
            });
            this.repository.rollerList[i] = instantiate(data);
          });
        }
        /**
         * 设置停止序号（控制停止）
         * @param rollerIndex 滑槽序号
         * @param stopIndex 停止的序号（规则从1开始，默认为-1：停止）
         */


        setStopIndex(rollerIndex, stopIndex) {
          var showResult = this.repository.rollerList[rollerIndex].showResult;
          showResult.stopIndex = stopIndex;
        }
        /**
         * 赋值结果数据
         * @param rollerIndex 滑槽序号
         * @param stopIndex 数据开始截取结果的序号（从1开始的）
         * @param resultData 结果数据（其实可以不用，但是可以看得出获取了多少个元素）
         */


        setResult(rollerIndex, stopIndex, resultData) {
          var rollerData = this.repository.rollerList[rollerIndex];

          if (rollerData) {
            rollerData.showResult.stopIndex = stopIndex;
            rollerData.showResult.result = resultData;
          } else {
            log("未找到对应的滚槽数据载体");
          }
        }

        getRollerList() {
          return this.repository.rollerList;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fe71db6b00b1b0b7017f5c04c2e8fd6206d65786.js.map