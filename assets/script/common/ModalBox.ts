import { baseBoardView, sourceManageSeletor } from "../hall";
import { LanguageItemType } from "../language/languagePkg";
import { EffectType } from "../utils/NodeIOEffect";
import Singleton from "../utils/Singleton";
import { Common_ModalBox, IProps, IState, IEvent } from "./components/Common_ModalBox";
import prefabDefine, { PrefabPathDefine } from "./sourceDefine/prefabDefine";
import BaseViewModel from "./viewModel/BaseViewModel";

export type ModalOption = {
  content?: string,
  url?: string,
  type?: "Prompt" | "Confirm"
}

export default class ModalBox extends Singleton {
  constructor() {
    super()
  }
  /**模态框是否是打开状态 */
  public isShow: boolean = false
  public contentStr: string = ''
  public show(option: ModalOption, okHandler: () => boolean = () => true, cancleHandler: () => boolean = () => true) {
    this.isShow = true
    this.contentStr = option.content
    const modalBox = new BaseViewModel<Common_ModalBox, IState, IProps, IEvent>("Common_ModalBox")
      .mountView(sourceManageSeletor("common").getFile(PrefabPathDefine.MODAL_BOX).source)
      .appendTo(baseBoardView.viewNode, { effectType: EffectType.EFFECT1 })
      .setProps({
        content: option.content,
        type: option.type,
        url: option.url
      })
      .setEvent({
        onCloseHandler: () => {
          this.isShow = false
          this.contentStr = '';
          modalBox.unMount(EffectType.EFFECT1)
        },
        onCancleHandler: () => {
          this.isShow = false
          this.contentStr = '';
          return cancleHandler()
        },
        onOkHandler: () => {
          this.isShow = false
          this.contentStr = '';
          return okHandler()
        }
      })
  }
}