import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Thor_Header, IProps, IEvent } from "../components/Thor_Header"
import { StateType } from "../store/reducer"
import dataTransfer, { DataKeyType } from "../dataTransfer"
import { getStore } from "../store"
import { SoundPathDefine } from "../sourceDefine/soundDefine"
import { sourceManageSeletor, thor_Audio } from "../index"
import BaseViewModel from "../../../hall/viewModel/BaseViewModel"
import { Thor_HelpPanel, IProps as FIProps, IState as FIState, IEvent as FIEvent } from "../components/Thor_HelpPanel"
import { EffectType } from "../../../utils/NodeIOEffect"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
@StoreInject(getStore())
class HeaderViewModel extends ViewModel<Thor_Header, IProps, IEvent> {
  constructor() {
    super('Thor_Header')
  }

  protected begin() { 
    this.setEvent({
      openHelpPanel: () => {
        thor_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
        let helpPanelPanel = new BaseViewModel<Thor_HelpPanel, FIState, FIProps, FIEvent>("Thor_HelpPanel").mountView(sourceManageSeletor().getFile(PrefabPathDefine.INTRODUCE).source)
          .appendTo(this.viewNode.parent, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
            closeHandler: () => {
              helpPanelPanel.unMount(EffectType.EFFECT1)
            }
          })
      },
    })
  }

  public connect() {
    // console.log('inject', dataTransfer(DataKeyType.BALANCE))
    this.inject({ }, (state: StateType) => {
      // console.log('state.game.balance', state.game.balance)
      return {
        balance: state.game.balance,
        isRollEnd: state.roller.roundAllEnd,
      }
    })
    return this
  }
}

export default HeaderViewModel
