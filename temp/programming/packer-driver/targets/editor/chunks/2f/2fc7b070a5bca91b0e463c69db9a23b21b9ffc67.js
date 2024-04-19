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

      _cclegacy._RF.push({}, "0396dqM1PVCTKSim/Qcx/Z6", "spriteDefine", undefined);

      __checkObsolete__(['SpriteFrame']);

      _export("SpriteFramePathDefine", SpriteFramePathDefine = /*#__PURE__*/function (SpriteFramePathDefine) {
        SpriteFramePathDefine["icon_9"] = "icon/9/spriteFrame";
        SpriteFramePathDefine["icon_10"] = "icon/10/spriteFrame";
        SpriteFramePathDefine["icon_A"] = "icon/A/spriteFrame";
        SpriteFramePathDefine["icon_yuanBao"] = "icon/yuanBao/spriteFrame";
        SpriteFramePathDefine["icon_j"] = "icon/J/spriteFrame";
        SpriteFramePathDefine["icon_K"] = "icon/K/spriteFrame";
        SpriteFramePathDefine["icon_Q"] = "icon/Q/spriteFrame";
        SpriteFramePathDefine["icon_tiger"] = "icon/tiger/spriteFrame";
        SpriteFramePathDefine["icon_bat"] = "icon/bat/spriteFrame";
        SpriteFramePathDefine["icon_frog"] = "icon/frog/spriteFrame";
        SpriteFramePathDefine["icon_scatter"] = "icon/scatter/spriteFrame";
        SpriteFramePathDefine["icon_tortoise"] = "icon/tortoise/spriteFrame";
        SpriteFramePathDefine["icon_wildG1"] = "icon/wildG/spriteFrame";
        SpriteFramePathDefine["icon_wildG"] = "icon/wildG1/spriteFrame";
        SpriteFramePathDefine["icon_wildR"] = "icon/wildR/spriteFrame";
        SpriteFramePathDefine["icon_wildP"] = "icon/wildP/spriteFrame";
        SpriteFramePathDefine["icon_wildB"] = "icon/wildB/spriteFrame";
        SpriteFramePathDefine["icon_wildY"] = "icon/wildY/spriteFrame";
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
//# sourceMappingURL=2fc7b070a5bca91b0e463c69db9a23b21b9ffc67.js.map