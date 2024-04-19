System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, BaseViewModel, _crd;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
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

      _cclegacy._RF.push({}, "32fcblAMSlKC4V/rhEX6sxR", "BaseViewModel", undefined);

      __checkObsolete__(['Node']);

      /**此类作为基础的实例化工具，用于不需要大量业务逻辑的组件，亦不需要接入redux */
      BaseViewModel = class BaseViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor(componentStr) {
          super(componentStr);
        }

        begin() {
          /**公用的基本viewmodel，不要在这里添加代码 */
        }
        /**
         * @deprecated
         * BaseViewModel类的connect无效
         */


        connect() {
          this.inject({}, state => {
            return {};
          });
        }

      };

      _export("default", BaseViewModel); // class BaseViewModel<S, P, E> extends ViewModel<BaseComponent<S, P, E>, P, E> {
      //   constructor(componentStr: string) {
      //     super(componentStr)
      //   }
      //   protected begin() {
      //     /**公用的基本viewmodel，不要在这里添加代码 */
      //   }
      //   /**
      //    * @deprecated
      //    * BaseViewModel类的connect无效
      //    */
      //   public connect() {
      //     this.inject({}, (state: StateType) => {
      //       return {} as any
      //     })
      //   }
      // }
      // export default BaseViewModel


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4fcd2dc9b3bfd916cdfd394c0d8f7e9577158bfd.js.map