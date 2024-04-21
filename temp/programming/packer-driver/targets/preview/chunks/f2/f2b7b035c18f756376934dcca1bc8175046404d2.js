System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EgyptV2Icon, IconPool, _crd;

  function _reportPossibleCrUseOfEgyptV2Icon(extras) {
    _reporterNs.report("EgyptV2Icon", "./components/EgyptV2_Icon", _context.meta, extras);
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
      EgyptV2Icon = _unresolved_2.EgyptV2Icon;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99c70TOWvpI+bhETU+KM5RI", "IconPool", undefined);

      __checkObsolete__(['Node']);

      _export("IconPool", IconPool = class IconPool {
        constructor(iconConfigs) {
          this.icons = [];
          this.init(iconConfigs);
        }

        init(iconConfigs) {
          iconConfigs.forEach(v => {
            for (var i = 0; i < 4; i++) {
              var icon = new (_crd && EgyptV2Icon === void 0 ? (_reportPossibleCrUseOfEgyptV2Icon({
                error: Error()
              }), EgyptV2Icon) : EgyptV2Icon)(v);
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
            icon = new (_crd && EgyptV2Icon === void 0 ? (_reportPossibleCrUseOfEgyptV2Icon({
              error: Error()
            }), EgyptV2Icon) : EgyptV2Icon)(iconConfig);
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
//# sourceMappingURL=f2b7b035c18f756376934dcca1bc8175046404d2.js.map