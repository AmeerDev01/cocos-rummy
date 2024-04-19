System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, LoaderPanelViewModel, _crd;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommon_LoaderPanel(extras) {
    _reporterNs.report("Common_LoaderPanel", "../components/Common_LoaderPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Common_LoaderPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Common_LoaderPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../base/SourceManage", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b67ef9QOU9DN66pBjxnLqV5", "LoaderPanelViewModel", undefined);

      __checkObsolete__(['Node']);

      LoaderPanelViewModel = class LoaderPanelViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Common_LoaderPanel');
        }

        begin() {}

        connect(initProps) {
          if (initProps === void 0) {
            initProps = {};
          }

          this.inject(initProps, () => {
            return {
              onLoadDone: sourceManage => {},
              loadBarType: 2
            };
          });
          return this;
        }

      };

      _export("default", LoaderPanelViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f4fa1bc9c2ad7a9b04e246baff40b780feb762ae.js.map