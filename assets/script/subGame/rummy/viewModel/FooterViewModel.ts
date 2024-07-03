import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { IEvent, IProps, Rummy_Footer } from "../components/Rummy_Footer"
import config from "../config"
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import { PlayerStatus } from "../type"

@StoreInject(getStore())
class FooterViewModel extends ViewModel<Rummy_Footer, IProps, IEvent> {
  constructor() {
    super('Rummy_Footer')
  }

  protected begin() {
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      const player = state.deskData.players[config.gameConfig.mySeatIndex];
      return {
        isGame: player ? player.isGame : false,
        myPlayerStatus: player ? player.status : PlayerStatus.NONE,
        flowInfo: state.deskData.flowInfo,
        isShowBtn: state.deskData.isShowOpBtn,
        selectCardCount: state.deskData.selectCardCount,
        dropAmount: state.deskData.dropAmount,
      }
    })
    return this
  }
}

export default FooterViewModel