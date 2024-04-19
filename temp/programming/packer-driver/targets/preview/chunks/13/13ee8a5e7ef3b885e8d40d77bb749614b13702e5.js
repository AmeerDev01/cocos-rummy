System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ViewModel, EffectType, changeWebView, ShareHelpViewModel, _crd;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_ShareHelp(extras) {
    _reporterNs.report("Hall_ShareHelp", "../components/Hall_ShareHelp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Hall_ShareHelp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Hall_ShareHelp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeWebView(extras) {
    _reporterNs.report("changeWebView", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
    }, function (_unresolved_3) {
      EffectType = _unresolved_3.EffectType;
    }, function (_unresolved_4) {
      changeWebView = _unresolved_4.changeWebView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d7a689AXg5E86/4nmh+Ipit", "ShareHelpViewModel", undefined);

      ShareHelpViewModel = class ShareHelpViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Hall_ShareHelp');
        }

        begin() {
          this.dispatch((_crd && changeWebView === void 0 ? (_reportPossibleCrUseOfchangeWebView({
            error: Error()
          }), changeWebView) : changeWebView)(false));
          this.setEvent({
            close: () => {
              this.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT2);
              this.dispatch((_crd && changeWebView === void 0 ? (_reportPossibleCrUseOfchangeWebView({
                error: Error()
              }), changeWebView) : changeWebView)(true));
            }
          });
        }

        connect() {
          this.inject({}, state => {
            return {};
          });
          return this;
        }

      };

      _export("default", ShareHelpViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=13ee8a5e7ef3b885e8d40d77bb749614b13702e5.js.map