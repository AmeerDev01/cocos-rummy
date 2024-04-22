import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { CrashV2_topnavigation, IEvent, IProps } from "../components/CrashV2_topnavigation"
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import BaseViewModel from "../../../common/viewModel/BaseViewModel"
import {CrashV2_game_teen, IState as TIState, IProps as TIprops, IEvent as TIEvent } from "../components/CrashV2_game_teen"
import { sourceManageSeletor } from "../index"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { EffectType } from "../../../utils/NodeIOEffect"
import { global } from "../../../hall"

@StoreInject(getStore())
class CrashV2HeaderViewModel extends ViewModel<CrashV2_topnavigation, IProps, IEvent> {
  constructor() {
    super('CrashV2_topnavigation')
  }
  protected begin() {
    this.setEvent({
      returnToTheLobby:()=>{
         global.closeSubGame();
      },
      history:()=>{
        let teen=new BaseViewModel<CrashV2_game_teen,TIState, TIprops, TIEvent>('CrashV2_game_teen').mountView(sourceManageSeletor().getFile(PrefabPathDefine.GAME_TEEN).source)
        .appendTo(this.parentNode,{ effectType: EffectType.EFFECT1, isModal: false }).setEvent({
          close:()=>{
            teen.unMount()
          }
        })
      }
    })
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as CrashV2_topnavigation
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

export default CrashV2HeaderViewModel