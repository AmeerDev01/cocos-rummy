System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseRepository, SlotRepository, _crd, interval, roller;

  function _reportPossibleCrUseOfBaseRepository(extras) {
    _reporterNs.report("BaseRepository", "./BaseRepository", _context.meta, extras);
  }

  _export("SlotRepository", void 0);

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

      _cclegacy._RF.push({}, "dbc437qxLZIg6NDZT16OCmF", "SlotRepository", undefined);

      /**滑槽间隔 */
      interval = 35;

      // export type RollerListType = {
      // 	// /**纵向显示的单位数 */
      // 	// portraitNum: number,
      // 	// /**横垮的宽度单位数 */
      // 	// landscapeNum: number,
      // 	/**滑槽列表 */
      // 	data: RollerType[]
      // }

      /** 小滚槽示例数据 */
      _export("roller", roller = {
        data: [],
        showResult: {
          startIndex: 0,
          stopIndex: -1,
          result: []
        },
        portraitNum: 3,
        landscapeNum: 1,
        rollSpeed: 40,
        rollerWidth: 100,
        intervalWidth: 52,
        rollerheight: 125,
        intervalHeight: 0,
        isBigIcon: false
      });

      _export("SlotRepository", SlotRepository = class SlotRepository extends (_crd && BaseRepository === void 0 ? (_reportPossibleCrUseOfBaseRepository({
        error: Error()
      }), BaseRepository) : BaseRepository) {
        constructor() {
          super();

          /**滚槽列表面板 */
          this.rollerList = [];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9e449448f61b3dc5edfdcbc460b9b9d84cebac0b.js.map