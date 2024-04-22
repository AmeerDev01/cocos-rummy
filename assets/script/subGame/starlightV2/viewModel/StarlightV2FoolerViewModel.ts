import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StarlightV2_Footer, IEvent, IProps } from "../components/StarlightV2_Footer"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class StarlightV2FoolerViewModel extends ViewModel<StarlightV2_Footer, IProps, IEvent> {
  constructor() {
    super('StarlightV2_Footer')
  }

  protected begin() {
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        rollerStatus: state.roller.rollerStatus,
        autoLauncherInfo: state.game.autoLauncherInfo,
        betDropDownlist: state.game.betDropDownlist,
        positionId: state.game.positionId,
        winloss: state.game.winloss,
        subGameWinloss: state.game.subGameWinloss,
        gameTypeInfo: state.game.gameTypeInfo,
        gold: state.game.gold,
        betAmount: state.game.betAmount,
        gameModeType: state.game.gameModeType,
      }
    })
    return this
  }


}

export default StarlightV2FoolerViewModel