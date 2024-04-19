System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, SpriteAtlas, loopFiles, _crd, SpriteAtlasPathDefine;

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
      SpriteAtlas = _cc.SpriteAtlas;
    }, function (_unresolved_2) {
      loopFiles = _unresolved_2.loopFiles;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae027g/cuJC6IqcDijjzn7A", "spriteAtlasDefine", undefined);

      __checkObsolete__(['Asset', 'Prefab', 'SpriteAtlas', 'sp']);

      _export("SpriteAtlasPathDefine", SpriteAtlasPathDefine = /*#__PURE__*/function (SpriteAtlasPathDefine) {
        return SpriteAtlasPathDefine;
      }({}));

      _export("default", bundlePkgName => (_crd && loopFiles === void 0 ? (_reportPossibleCrUseOfloopFiles({
        error: Error()
      }), loopFiles) : loopFiles)(bundlePkgName, SpriteAtlas, SpriteAtlasPathDefine));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=23632f9110f68c7417dbd9518e26f576188f61fa.js.map