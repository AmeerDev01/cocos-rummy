import { Node, Prefab, Component, assetManager, instantiate } from "cc"
import { getStore } from "../hall/store"
import { BaseComponent } from "./BaseComponent";

/**注入器，负责实例化节点和装载，并注入store数据、订阅事件 */
export default class Injector<T extends BaseComponent<any, P, any>, P> {
  constructor(prefabSource: Prefab, ComppStr: string) {
    this.prefabFile = prefabSource//PrefabFiles.find(item => item.path === prefabFile).source
    this.compStr = ComppStr
  }
  private unsubscribe: () => void
  /**注入器绑定的 */
  public prefabFile: Prefab
  public compStr: string
  /**主节点（绑定脚本的节点） */
  public view: Node
  public comp: BaseComponent<any, any, any>
  public props: P
  public dispatch: (action: any) => void

  /**装载进入视图并注入props */
  public mountTo(wrapNode: Node) {
    wrapNode.addChild(this.view)
    this.comp.setProps(this.props, true)
    return this
  }
  /**卸载 */
  public unMount() {
    this.unsubscribe()
    if (this.view) {
      this.view.removeAllChildren()
      this.view.destroy()
    }
  }
  public connect(initProps: Partial<P>, mapStateToProps: (state: any) => { [key in keyof P]: Partial<any> }) {
    // const mapStateToProps = (state) => ({
    //   count: state.count,
    // })
    this.props = Object.assign({}, this.props, initProps)
    this.view = instantiate(this.prefabFile)
    this.comp = this.view.getComponent(this.compStr) as T
    this.dispatch = getStore().dispatch
    this.unsubscribe = getStore().subscribe(() => {
      mapStateToProps(getStore().getState())
      // const state = store.getState().count
    })
    return this
  }
}