System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, DirectionType, Roller, _crd;

  function _reportPossibleCrUseOfDirectionType(extras) {
    _reporterNs.report("DirectionType", "./type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconSizeType(extras) {
    _reporterNs.report("IconSizeType", "./type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerType(extras) {
    _reporterNs.report("RollerType", "./type", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      DirectionType = _unresolved_2.DirectionType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21852DzuAJC86Me28KFzf6T", "Roller", undefined);

      __checkObsolete__(['instantiate']);

      _export("default", Roller = class Roller {
        constructor(rollerData, rollerQueue) {
          /**当前这条滑槽关联的数据 */
          this.rollerQueue = [];
          this.rollerData = void 0;

          /**当前滑槽中的图标 */
          this.viewIconArr = [];

          /**下一个要加入的图标 */
          this.nextJoinIcon = void 0;
          this.rollerData = rollerData;
          this.rollerQueue = rollerQueue;
        }

        /**
         * 初始化滑槽
         * @param iconShowNum 需要显示多少个图标
         * @param rollerData 滑槽数据RollerType
         */
        rollerCreator(iconShowNum, iconSizeType) {
          // const targetQueue = iconSizeType === IconSizeType.LARGE ? config.largeIconRollerQueue : config.iconRollerQueue
          // const iconSourceList = iconSizeType === IconSizeType.LARGE ? config.largeIcon : config.rollerIcon
          for (var i = 0; i < iconShowNum; i++) {
            this.calculateNextJoinIcon();
            this.viewIconArr.push(this.nextJoinIcon);
          }

          return this.viewIconArr;
        }
        /**计算下一个序号 */


        calculateNextJoinIcon() {
          if (this.nextJoinIcon) {
            if (this.rollerData.direction === (_crd && DirectionType === void 0 ? (_reportPossibleCrUseOfDirectionType({
              error: Error()
            }), DirectionType) : DirectionType).DOWN) {
              this.nextJoinIcon--;

              if (this.nextJoinIcon < 0) {
                this.nextJoinIcon = this.rollerQueue.length - 1;
              }
            } else {
              this.nextJoinIcon++;
            }
          } else {
            this.nextJoinIcon = this.rollerData.direction === (_crd && DirectionType === void 0 ? (_reportPossibleCrUseOfDirectionType({
              error: Error()
            }), DirectionType) : DirectionType).DOWN ? this.rollerQueue.length - 1 : 0;
          }

          return this.nextJoinIcon;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=837cb637bda4418796c5ab58b4d2629821405504.js.map