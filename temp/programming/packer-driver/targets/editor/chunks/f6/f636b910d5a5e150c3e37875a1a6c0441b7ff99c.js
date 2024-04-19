System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, colorChangeAction, sizeChangeAction, CounterViewModel, _crd;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcolorChangeAction(extras) {
    _reporterNs.report("colorChangeAction", "../store/actions/counter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsizeChangeAction(extras) {
    _reporterNs.report("sizeChangeAction", "../store/actions/counter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCounter(extras) {
    _reporterNs.report("Counter", "../components/demo/Counter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/demo/Counter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/demo/Counter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
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
    }, function (_unresolved_3) {
      colorChangeAction = _unresolved_3.colorChangeAction;
      sizeChangeAction = _unresolved_3.sizeChangeAction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2f8dcYoMKpNG6HsL/IeUFbI", "CounterViewModel", undefined);

      __checkObsolete__(['Node']);

      // export type PropsType = {
      //   onChange?: (e: any) => void,
      //   color: string,
      //   size: number
      // }
      CounterViewModel = class CounterViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Counter');
        }

        begin() {}

        connect() {
          this.inject({}, state => {
            return {
              color: state.counter.color,
              size: state.counter.size
            };
          });
          window.setTimeout(() => {
            this.dispatch((_crd && colorChangeAction === void 0 ? (_reportPossibleCrUseOfcolorChangeAction({
              error: Error()
            }), colorChangeAction) : colorChangeAction)("#FF0200"));
            this.dispatch((_crd && sizeChangeAction === void 0 ? (_reportPossibleCrUseOfsizeChangeAction({
              error: Error()
            }), sizeChangeAction) : sizeChangeAction)(40)); // this.dispatch({ type: '', payload: {} })
            // console.log(colorChangeAction("#c0c0c0"))
            // this.dispatch({ type: ActionTypes.CHANGE_COLOR, payload: { color: "#FF0200" } })
          }, 2000);
          return this;
        }

      };

      _export("default", CounterViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f636b910d5a5e150c3e37875a1a6c0441b7ff99c.js.map