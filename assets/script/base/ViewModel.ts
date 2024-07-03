import { Node, Prefab, Component, assetManager, instantiate, find, tween, UIOpacity, BlockInputEvents } from "cc"
import { getStore } from "../hall/store"
import { BaseComponent } from "./BaseComponent";
import { EffectType, EnterOption, getEffectByType } from "../utils/NodeIOEffect";
import { Action, AnyAction, default as redux } from "redux";
import { hallAudio } from "../hall";
import { SoundPathDefine } from "../hall/sourceDefine/soundDefine";

export const viewModelMap: { [key: string]: ViewModel<any, unknown, unknown> } = {}
/**BaseViewModel为特定的功能而设计，在这里撰写主逻辑 */
abstract class ViewModel<C extends BaseComponent<any, P, E>, P, E> {
  constructor(componentStr: string) {
    this.id = parseInt(Math.random() * 10000000 + '')
    this.componentStr = componentStr
    this.store = getStore()
    this.init()
  }
  protected componentStr: string
  protected store
  public id: number
  /**是否已卸载(此值在卸载开始之时就已赋值) */
  public isUnMount: boolean = false
  /**被挂载的父节点 */
  public parentNode: Node
  /**取消订阅 */
  private unsubscribe: () => void
  /**是否是模态弹出框的模式 */
  private isModal: boolean = false
  /**模态框的底层透明层 */
  private modalBg: Node = null
  /**自身的props，一般选择使用组件的 */
  private props: P
  /**未实例化的预制体 */
  public prefabSource: Prefab
  /**已经实例化的节点对象 */
  public viewNode: Node
  /**脚本组件 */
  public comp: C
  /**链接到redux-store-state，当然，不接入redux，就不调用 */
  // public abstract connect(store: redux.Store<any, redux.AnyAction>): void
  public abstract connect(initProps?: Partial<P>): void
  // public abstract connect(storeState: StateType): void

  /**视图初始化并挂载到节点上后要执行的动作（appendTo之后要执行的动作） */
  protected abstract begin(): void
  /**初始化便要执行的函数 */
  protected init() { }
  /**begin函数执行完之后要执行的函数 */
  private initDone() { }
  /**卸载时的回调函数 */
  protected unMountCallBack() { }
  protected dispatch(action: AnyAction) {
    this.store.dispatch(action)
  }
  /**绑定begin函数执行完之后要执行的函数，因为ViewModel中的begin是异步的，如果某一些操作需要确保begin之后才执行，建议在这里完成 */
  public bindDoneHandler(initDone: () => void) {
    this.initDone = initDone
    return this
  }
  /**挂载到视图 */
  public appendTo(parentNode: Node, option?: {
    /**添加到节点的动效 */
    effectType?: EffectType,
    /**添加完成之后的回调 */
    effectDone?: () => void,
    /**是否以模态框的形式添加，既后面加一层模态框 */
    isModal?: boolean,
    /**是否轻点底板关闭，在isModal=true才生效 */
    isBgClose?: boolean,
    effectOption?: EnterOption

  }) {
    const _option = Object.assign({
      effectType: null,
      effectDone: null,
      isModal: false,
      isBgClose: false,
      effectOption: {}
    }, option || {})
    this.isModal = _option.isModal
    this.parentNode = parentNode
    if (_option.isModal) {
      this.modalBg = instantiate(find("Canvas/modalBg"))
      this.modalBg.active = true
      this.modalBg.addComponent(BlockInputEvents)
      const uiOpacity = this.modalBg.getComponent(UIOpacity) || this.modalBg.addComponent(UIOpacity);
      uiOpacity.opacity = 0
      tween(uiOpacity).to(0.1, { opacity: 255 }).start()
      this.modalBg.addChild(this.viewNode)
      parentNode.addChild(this.modalBg)
      hallAudio && hallAudio.playOneShot(SoundPathDefine.POP_UP)
      // if (_option.isBgClose) {
      //   this.modalBg && this.modalBg.once(Node.EventType.TOUCH_END, () => {
      //     this.unMount(EffectType.EFFECT1)
      //   })
      // }
    } else {
      parentNode.addChild(this.viewNode)
    }
    const done = () => window.setTimeout(() => {
      this.begin()
      this.initDone()
    }, 10)
    _option.effectType !== null ? getEffectByType(_option.effectType)(this.viewNode).enter(_option.effectOption).then(() => {
      _option.effectDone && _option.effectDone()
      done()
    }) : done()
    viewModelMap[this.viewNode.uuid] = this
    return this
  }
  /**手动绑定底层点击事件 */
  public bindCloseToBg(closeHandler: Function) {
    this.modalBg && this.modalBg.once(Node.EventType.TOUCH_END, () => {
      closeHandler && closeHandler()
    })
  }
  /**初始化视图对象，告知viewmodel需要实例化的预制体和组件脚本(若不执行这个，节点对象和自定义脚本将无法调用) */
  public mountView(prefabSource: Prefab) {
    // this.prefabFile = PrefabFiles.find(item => item.path === prefabFile).source
    this.prefabSource = prefabSource//sourceManage.getFile("hall", prefabPath)?.source
    this.viewNode = instantiate(prefabSource)
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as C
    return this
  }
  /**卸载(销毁节点，且取消订阅) */
  public unMount(effectType: EffectType = null) {
    // hallAudio && hallAudio.playOneShot(SoundPathDefine.BTU_CLICK)
    if (this.isUnMount) return
    this.isUnMount = true
    return new Promise((reslove, reject) => {
      this.unsubscribe && this.unsubscribe()
      if (this.viewNode) {
        const done = () => {
          try {
            // this.viewNode && this.viewNode.removeAllChildren()
            this.comp && this.comp.destroy()
            this.viewNode && this.viewNode.destroy()
            if (this.isModal) {
              const uiOpacity = this.modalBg.getComponent(UIOpacity) || this.modalBg.addComponent(UIOpacity);
              tween(uiOpacity).to(0.1, { opacity: 0 }).call(() => this.modalBg.destroy()).start()
            }
            this.unMountCallBack()
            reslove(true)
          } catch (e) {
            console.error(e)
            reslove(true)
          }
        }
        effectType !== null ? getEffectByType(effectType)(this.viewNode).out(false).then(() => done()) : done()
      } else {
        reject("The view has been destroied!")
      }

    })
  }
  public setProps(props: Partial<P>, force: boolean = false) {
    // this.props = props
    this.comp.setProps(props, force)
    return this
  }

  public setEvent(enevts: Partial<E>) {
    this.comp.setEvent(enevts)
    return this
  }
  /**
   * redux的状态注入器
   * @param initProps 注入时的默认props(如果页面已经挂载会触发更新)
   * @param mapStateToProps props对redux-state的订阅映射
   * @param force 是否强制触发订阅函数（默认情况下，若新旧的state数据一致，将不会触发错误，若force=true，将强制触发，比如适用于toast，两次触发toast的字符串是一样的，需要忽略数据是否更新。请慎用true）
   * @returns 
   */
  protected inject(initProps: Partial<P>, mapStateToProps: (state: any) => P, force: boolean = false) {
    this.props = Object.assign({}, this.props, initProps)
    this.comp.setProps(this.props)
    this.dispatch = this.store.dispatch
    this.comp.dispatch = this.store.dispatch
    this.unsubscribe = this.store.subscribe(() => {
      const newPropsPart = mapStateToProps(this.store.getState())
      this.props = Object.assign({}, this.props, newPropsPart)
      this.comp.setProps(this.props, force)
    })
    return this
  }

}
export default ViewModel


export function StoreInject(store: redux.Store<any, redux.AnyAction>) {
  return function <T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      store = store
    }
  }
}
