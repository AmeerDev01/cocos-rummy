import { Node } from "cc"
import ViewModel from "../../base/ViewModel"
import { StateType } from "../store/reducer"
import { BaseComponent } from "../../base/BaseComponent"

/**此类作为基础的实例化工具，用于不需要大量业务逻辑的组件，亦不需要接入redux */
class BaseViewModel<C extends BaseComponent<any, P, E>, S, P, E> extends ViewModel<C, P, E> {
  constructor(componentStr: string) {
    super(componentStr)
  }
  protected begin() {
    /**公用的基本viewmodel，不要在这里添加代码 */
  }

  /**
   * @deprecated
   * BaseViewModel类的connect无效
   */
  public connect() {
    this.inject({}, (state: StateType) => {
      return {} as any
    })
  }
}

export default BaseViewModel
// class BaseViewModel<S, P, E> extends ViewModel<BaseComponent<S, P, E>, P, E> {
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