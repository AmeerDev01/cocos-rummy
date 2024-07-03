import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { ThorV2_Footer, IEvent, IProps } from "../components/ThorV2_Footer"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class ThorV2FoolerViewModel extends ViewModel<ThorV2_Footer, IProps, IEvent> {
  constructor() {
    super('ThorV2_Footer')
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

export default ThorV2FoolerViewModel