System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, DragonV2Icon, IconPool, _crd;

  function _reportPossibleCrUseOfDragonV2Icon(extras) {
    _reporterNs.report("DragonV2Icon", "./components/DragonV2Icon", _context.meta, extras);
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
      DragonV2Icon = _unresolved_2.DragonV2Icon;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8c28aOXaBZJyZOVr3+iPPPf", "IconPool", undefined);

      __checkObsolete__(['Node']);

      _export("IconPool", IconPool = class IconPool {
        constructor(iconConfigs) {
          this.icons = [];
          this.init(iconConfigs);
        }

        init(iconConfigs) {
          iconConfigs.forEach(v => {
            for (var i = 0; i < 4; i++) {
              var icon = new (_crd && DragonV2Icon === void 0 ? (_reportPossibleCrUseOfDragonV2Icon({
                error: Error()
              }), DragonV2Icon) : DragonV2Icon)(v);
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
            icon = new (_crd && DragonV2Icon === void 0 ? (_reportPossibleCrUseOfDragonV2Icon({
              error: Error()
            }), DragonV2Icon) : DragonV2Icon)(iconConfig);
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
//# sourceMappingURL=09e26027da26983da4c5ca57d93e386f6a0db7e9.js.map