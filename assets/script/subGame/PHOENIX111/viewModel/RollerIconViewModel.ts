import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { phoenix_rollerIcon, IProps, IEvent } from "../components/phoenix_rollerIcon"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
import BaseViewModel from "../../../hall/viewModel/BaseViewModel"
import { sourceManageSeletor } from "../index"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { EffectType } from "../../../utils/NodeIOEffect"
import { rollerPanelViewModel } from "./GameBoardViewModel"
import dataTransfer, { DataKeyType } from "../dataTransfer"
import { phoenix_yuanbao_totalBet,IEvent as BPIEvent,IProps as BPIProps,IState as BPIState } from "../components/phoenix_yuanbao_totalBet"

@StoreInject(getStore())
class RollerIconViewModel extends ViewModel<phoenix_rollerIcon, IProps, IEvent> {
  constructor() {
    super('phoenix_rollerIcon')
  }

  protected begin() { 
    this.setEvent({
      openTotalPanel: ()=>{
        this.openTotal()
      }
    })
  }

  public openTotal() {
    let yuanBaoRate = dataTransfer(DataKeyType.ICON_YUANBAO_EFFECT_DATA).yuanBaoMagnification;
		let yuanBaoWinNum = dataTransfer(DataKeyType.ICON_YUANBAO_EFFECT_DATA).yuanBaoAmount;
    const yuanBaoTotalBet = new BaseViewModel<phoenix_yuanbao_totalBet, BPIState, BPIProps, BPIEvent>("phoenix_yuanbao_totalBet").mountView(sourceManageSeletor()
      .getFile(PrefabPathDefine.PHOENIX_TOTAL_BET).source).appendTo(rollerPanelViewModel.viewNode, { effectType: EffectType.EFFECT1, isModal: false })
      .setProps({
        yuanBaoRate: "X" + yuanBaoRate,
        yuanBaoWinNum: yuanBaoWinNum + "",
      }).setEvent({
        killSelfHandler: () => {
          yuanBaoTotalBet.unMount(EffectType.EFFECT1);
        }
    })
  }

  public connect() {
    this.inject({}, (state: StateType) => {

      return {
        viewGameType: state.game.viewGameType,
        isRollEnd: state.roller.roundAllEnd,

      }
    })
    return this
  }
}

export default RollerIconViewModel