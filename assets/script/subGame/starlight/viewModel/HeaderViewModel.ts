import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Starlight_Header, IProps, IEvent } from "../components/Starlight_Header"
import { StateType } from "../store/reducer"
import dataTransfer, { DataKeyType } from "../dataTransfer"
import { getStore } from "../store"
import { SoundPathDefine } from "../sourceDefine/soundDefine"
import { EffectType } from "../../../utils/NodeIOEffect"
import BaseViewModel from "../../../common/viewModel/BaseViewModel"
import { starlight_Audio, sourceManageSeletor } from "../index"
import { Starlight_HelpPanel, IProps as FIProps, IState as FIState, IEvent as FIEvent } from "../components/Starlight_HelpPanel"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
@StoreInject(getStore())
class HeaderViewModel extends ViewModel<Starlight_Header, IProps, IEvent> {
  constructor() {
    super('Starlight_Header')
  }

  protected begin() { 
    this.setEvent({
      openHelpPanel: () => {
        starlight_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
        let helpPanelPanel = new BaseViewModel<Starlight_HelpPanel, FIState, FIProps, FIEvent>("Starlight_HelpPanel").mountView(sourceManageSeletor().getFile(PrefabPathDefine.INTRODUCE).source)
          .appendTo(this.viewNode.parent, { effectType: EffectType.EFFECT1, isModal: true }).setProps({ ante: this.comp.props.bettingInformation.bet}).setEvent({
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
        bettingInformation: state.game.bettingInformation,
      }
    })
    return this
  }
}

export default HeaderViewModel
