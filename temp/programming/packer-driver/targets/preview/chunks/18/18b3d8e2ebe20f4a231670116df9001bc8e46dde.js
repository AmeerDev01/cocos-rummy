System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SubGameType, BaseRepository, BgRepository, _crd, AutoLaunchType, StopMode;

  function _reportPossibleCrUseOfSubGameType(extras) {
    _reporterNs.report("SubGameType", "../Proxy/SocketProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseRepository(extras) {
    _reporterNs.report("BaseRepository", "./BaseRepository", _context.meta, extras);
  }

  _export("BgRepository", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      SubGameType = _unresolved_2.SubGameType;
    }, function (_unresolved_3) {
      BaseRepository = _unresolved_3.BaseRepository;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3eee7+QpwdCd4uLigWeO/O5", "BgRepository", undefined);

      _export("AutoLaunchType", AutoLaunchType = /*#__PURE__*/function (AutoLaunchType) {
        AutoLaunchType[AutoLaunchType["UNLIMT"] = 0] = "UNLIMT";
        AutoLaunchType[AutoLaunchType["UNLIMT_FAST"] = 1] = "UNLIMT_FAST";
        AutoLaunchType[AutoLaunchType["T500"] = 2] = "T500";
        AutoLaunchType[AutoLaunchType["T100"] = 3] = "T100";
        AutoLaunchType[AutoLaunchType["T50"] = 4] = "T50";
        AutoLaunchType[AutoLaunchType["T20"] = 5] = "T20";
        AutoLaunchType[AutoLaunchType["T10"] = 6] = "T10";
        AutoLaunchType[AutoLaunchType["DISABLE"] = 7] = "DISABLE";
        return AutoLaunchType;
      }({}));
      /**
       * 停止模式
       */


      _export("StopMode", StopMode = /*#__PURE__*/function (StopMode) {
        StopMode[StopMode["NORMAL"] = 0] = "NORMAL";
        StopMode[StopMode["QUEUE_STOP"] = 1] = "QUEUE_STOP";
        return StopMode;
      }({}));

      _export("BgRepository", BgRepository = class BgRepository extends (_crd && BaseRepository === void 0 ? (_reportPossibleCrUseOfBaseRepository({
        error: Error()
      }), BaseRepository) : BaseRepository) {
        constructor() {
          super();

          /**是否禁用才做 */
          this.isDisable = false;

          /**正在进行的子游戏模块 */
          // public gameRunning: SubGameType = SubGameType.MAIN

          /**下一局是否要切换游戏（先把数据缓存这这里） */
          this.isChangeGame = false;

          /**将要进行的游戏 */
          this.nextGame = (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
            error: Error()
          }), SubGameType) : SubGameType).MAIN;

          /**上一个游戏 */
          this.lastGame = (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
            error: Error()
          }), SubGameType) : SubGameType).MAIN;

          /**自动启动类型 */
          this.autoLaunchType = AutoLaunchType.DISABLE;

          /**游戏剩余的次数(自动启动类型必须打开) */
          this.reaminAutoLaunchTimes = 0;

          /**停止模式 */
          this.stopMode = StopMode.QUEUE_STOP;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=18b3d8e2ebe20f4a231670116df9001bc8e46dde.js.map