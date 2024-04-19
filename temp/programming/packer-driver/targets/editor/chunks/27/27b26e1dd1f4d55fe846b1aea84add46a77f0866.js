System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, SpriteFrame, loopFiles, _crd, SpriteFramePathDefine;

  function _reportPossibleCrUseOfloopFiles(extras) {
    _reporterNs.report("loopFiles", "../../../base/SourceManage", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      loopFiles = _unresolved_2.loopFiles;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "08358SPPfxJNJZxxHp6L/lN", "spriteDefine", undefined);

      __checkObsolete__(['Asset', 'Prefab', 'SpriteFrame', 'sp']);

      _export("SpriteFramePathDefine", SpriteFramePathDefine = /*#__PURE__*/function (SpriteFramePathDefine) {
        SpriteFramePathDefine["DEFAULT_HEAD"] = "img/head1/spriteFrame";
        SpriteFramePathDefine["CHIP_0"] = "chips/chip_0/spriteFrame";
        SpriteFramePathDefine["CHIP_1"] = "chips/chip_1/spriteFrame";
        SpriteFramePathDefine["CHIP_2"] = "chips/chip_2/spriteFrame";
        SpriteFramePathDefine["CHIP_3"] = "chips/chip_3/spriteFrame";
        SpriteFramePathDefine["CHIP_4"] = "chips/chip_4/spriteFrame";
        SpriteFramePathDefine["CHIP_5"] = "chips/chip_5/spriteFrame";
        SpriteFramePathDefine["CHIP_6"] = "chips/chip_6/spriteFrame";
        SpriteFramePathDefine["DICE_1"] = "img/dice_fpc_1/spriteFrame";
        SpriteFramePathDefine["DICE_2"] = "img/dice_fpc_2/spriteFrame";
        SpriteFramePathDefine["DICE_3"] = "img/dice_fpc_3/spriteFrame";
        SpriteFramePathDefine["DICE_4"] = "img/dice_fpc_4/spriteFrame";
        SpriteFramePathDefine["DICE_5"] = "img/dice_fpc_5/spriteFrame";
        SpriteFramePathDefine["DICE_6"] = "img/dice_fpc_6/spriteFrame";
        SpriteFramePathDefine["HISTORY_MIN_1"] = "img/icon_history_1/spriteFrame";
        SpriteFramePathDefine["HISTORY_MIN_2"] = "img/icon_history_2/spriteFrame";
        SpriteFramePathDefine["HISTORY_MIN_3"] = "img/icon_history_3/spriteFrame";
        SpriteFramePathDefine["HISTORY_MIN_4"] = "img/icon_history_4/spriteFrame";
        SpriteFramePathDefine["HISTORY_MIN_5"] = "img/icon_history_5/spriteFrame";
        SpriteFramePathDefine["HISTORY_MIN_6"] = "img/icon_history_6/spriteFrame";
        SpriteFramePathDefine["HISTORY_MIN_BIG1"] = "img/icon_history_big1/spriteFrame";
        SpriteFramePathDefine["HISTORY_MIN_BIG2"] = "img/icon_history_big2/spriteFrame";
        SpriteFramePathDefine["HISTORY_MIN_BIG3"] = "img/icon_history_big3/spriteFrame";
        SpriteFramePathDefine["HISTORY_MIN_BIG4"] = "img/icon_history_big4/spriteFrame";
        SpriteFramePathDefine["HISTORY_MIN_BIG5"] = "img/icon_history_big5/spriteFrame";
        SpriteFramePathDefine["HISTORY_MIN_BIG6"] = "img/icon_history_big6/spriteFrame";
        return SpriteFramePathDefine;
      }({}));

      _export("default", bundlePkgName => (_crd && loopFiles === void 0 ? (_reportPossibleCrUseOfloopFiles({
        error: Error()
      }), loopFiles) : loopFiles)(bundlePkgName, SpriteFrame, SpriteFramePathDefine));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=27b26e1dd1f4d55fe846b1aea84add46a77f0866.js.map