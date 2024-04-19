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

      _cclegacy._RF.push({}, "3c665l2bhFFQJebJCRNzq10", "spriteDefine", undefined);

      __checkObsolete__(['Asset', 'Prefab', 'SpriteFrame', 'sp']);

      _export("SpriteFramePathDefine", SpriteFramePathDefine = /*#__PURE__*/function (SpriteFramePathDefine) {
        SpriteFramePathDefine["icon10"] = "atlas/iconSprite/10/spriteFrame";
        SpriteFramePathDefine["iconJ"] = "atlas/iconSprite/j/spriteFrame";
        SpriteFramePathDefine["iconQ"] = "atlas/iconSprite/q/spriteFrame";
        SpriteFramePathDefine["iconK"] = "atlas/iconSprite/k/spriteFrame";
        SpriteFramePathDefine["iconA"] = "atlas/iconSprite/a/spriteFrame";
        SpriteFramePathDefine["tongqian"] = "atlas/iconSprite/tongqian/spriteFrame";
        SpriteFramePathDefine["yuanbao"] = "atlas/iconSprite/yuanbao/spriteFrame";
        SpriteFramePathDefine["yaoqianshu"] = "atlas/iconSprite/yaoqianshu/spriteFrame";
        SpriteFramePathDefine["baicai"] = "atlas/iconSprite/baicai/spriteFrame";
        SpriteFramePathDefine["wild"] = "atlas/iconSprite/wild/spriteFrame";
        SpriteFramePathDefine["scatter"] = "atlas/iconSprite/scatter/spriteFrame";
        SpriteFramePathDefine["baohe"] = "atlas/iconSprite/baohe/spriteFrame";
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
//# sourceMappingURL=bcf7ae9b8cb335776e48d12ee0c6e401d1f46cad.js.map