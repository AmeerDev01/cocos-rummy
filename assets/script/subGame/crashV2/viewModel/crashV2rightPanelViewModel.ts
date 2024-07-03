import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { CrashV2_rightPanel, IEvent, IProps } from "../components/crashV2_rightPanel"
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import { global } from "../../../hall"
import BaseViewModel from "../../../common/viewModel/BaseViewModel"
import {CrashV2_game_rule,IState as TIState,IProps as TIprops,IEvent as TIEvent} from '../components/crashV2_game_rule'
import { EffectType } from "../../../utils/NodeIOEffect"
import { sourceManageSeletor } from "../index"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
@StoreInject(getStore())
class CrashV2rightPanelViewModel extends ViewModel<CrashV2_rightPanel, IProps, IEvent> {
  constructor() {
    super('CrashV2_rightPanel')
  }

  protected begin() {
    this.setEvent({
      setOption:()=>{
        // 打开音效页面
        global.openPersonCenter(2)
      },
      rulePanel:()=>{
        let rule=new BaseViewModel<CrashV2_game_rule,TIState, TIprops, TIEvent>('CrashV2_game_teen').mountView(sourceManageSeletor().getFile(PrefabPathDefine.RULEPANEL).source)
        .appendTo(this.parentNode,{ effectType: EffectType.EFFECT1, isModal: false }).setEvent({
          close:()=>{
            rule.unMount()
          }
        })
      }
      
    })
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as CrashV2_rightPanel
    return this
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
       
      }
    })
    return this
  }


}

export default CrashV2rightPanelViewModel