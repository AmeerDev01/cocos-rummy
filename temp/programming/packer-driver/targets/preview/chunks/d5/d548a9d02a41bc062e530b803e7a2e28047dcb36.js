System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, PhoenixV2Icon, IconPool, _crd;

  function _reportPossibleCrUseOfPhoenixV2Icon(extras) {
    _reporterNs.report("PhoenixV2Icon", "./components/PhoenixV2_Icon", _context.meta, extras);
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
      PhoenixV2Icon = _unresolved_2.PhoenixV2Icon;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "588eeV/LRpOfKCcKkTbsW9Y", "IconPool", undefined);

      __checkObsolete__(['Node']);

      _export("IconPool", IconPool = class IconPool {
        constructor(iconConfigs) {
          this.icons = [];
          this.init(iconConfigs);
        }

        init(iconConfigs) {
          iconConfigs.forEach(v => {
            for (var i = 0; i < 4; i++) {
              var icon = new (_crd && PhoenixV2Icon === void 0 ? (_reportPossibleCrUseOfPhoenixV2Icon({
                error: Error()
              }), PhoenixV2Icon) : PhoenixV2Icon)(v);
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
            icon = new (_crd && PhoenixV2Icon === void 0 ? (_reportPossibleCrUseOfPhoenixV2Icon({
              error: Error()
            }), PhoenixV2Icon) : PhoenixV2Icon)(iconConfig);
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
//# sourceMappingURL=d548a9d02a41bc062e530b803e7a2e28047dcb36.js.map