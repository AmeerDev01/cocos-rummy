import { Node, Prefab } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Fruit777_Header, IProps, IEvent } from "../components/Fruit777_Header"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
import BaseViewModel from "../../../hall/viewModel/BaseViewModel"
import { Fruit777_HelpPanel, IProps as FIProps, IState as FIState, IEvent as FIEvent } from "../components/Fruit777_HelpPanel"
import { EffectType } from "../../../utils/NodeIOEffect"
import { sourceManageSeletor } from "../index"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { global } from "../../../hall"

@StoreInject(getStore())
class HeaderViewModel extends ViewModel<Fruit777_Header, IProps, IEvent> {
  constructor() {
    super('Fruit777_Header')
  }

  protected begin() {
    this.setEvent({
      openHelpPanel: async () => {
        const helpPanelPanel = new BaseViewModel<Fruit777_HelpPanel, FIState, FIProps, FIEvent>("Fruit777_HelpPanel")
          .mountView((await sourceManageSeletor().getFileAsync(PrefabPathDefine._INTRODUCE, Prefab)).source)
          .appendTo(this.viewNode.parent, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
            closeHandler: () => {
              helpPanelPanel.unMount(EffectType.EFFECT1)
            }
          })
      },
      openVipMain: () => global.openVipMain()
    })
  }

  public connect() {
    // console.log('inject', dataTransfer(DataKeyType.BALANCE))
    this.inject({}, (state: StateType) => {
      // console.log('state.game.balance', state.game.balance)
      return {
        balance: state.game.balance,
        roundAllEnd: state.roller.roundAllEnd
      }
    })
    return this
  }
}

export default HeaderViewModel