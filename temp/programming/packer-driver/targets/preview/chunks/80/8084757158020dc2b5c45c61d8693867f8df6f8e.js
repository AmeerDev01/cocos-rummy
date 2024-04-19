System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GodWealthV2Icon, IconPool, _crd;

  function _reportPossibleCrUseOfGodWealthV2Icon(extras) {
    _reporterNs.report("GodWealthV2Icon", "./components/GodWealthV2_Icon", _context.meta, extras);
  }

  _export("IconPool", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      GodWealthV2Icon = _unresolved_2.GodWealthV2Icon;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "06117smJypDOrih89iKiiGs", "IconPool", undefined);

      __checkObsolete__(['Node']);

      _export("IconPool", IconPool = class IconPool {
        constructor(iconConfigs) {
          this.icons = [];
          this.init(iconConfigs);
        }

        init(iconConfigs) {
          iconConfigs.forEach(v => {
            for (var i = 0; i < 4; i++) {
              var icon = new (_crd && GodWealthV2Icon === void 0 ? (_reportPossibleCrUseOfGodWealthV2Icon({
                error: Error()
              }), GodWealthV2Icon) : GodWealthV2Icon)(v);
              icon.resetIcon(v);
              icon.restore();
              this.icons.push(icon);
            }
          });
        }
        /**获得可用的icon */


        getIcon(iconConfig, parentNode, iconIndex) {
          var icon = this.icons.find(v => !v.isUse() && v.getId() === iconConfig.id);

          if (!icon) {
            icon = new (_crd && GodWealthV2Icon === void 0 ? (_reportPossibleCrUseOfGodWealthV2Icon({
              error: Error()
            }), GodWealthV2Icon) : GodWealthV2Icon)(iconConfig);
            this.icons.push(icon);
          }

          icon.resetIcon(iconConfig, parentNode, iconIndex); // console.log("this.icons.lenth ", this.icons.length, " use length " , this.icons.filter(v => v.isUse()).length);

          return icon;
        }

        unInit() {
          this.icons.forEach(v => v.destory());
          this.icons = [];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8084757158020dc2b5c45c61d8693867f8df6f8e.js.map