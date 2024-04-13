import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { Thor_SgBox, IProps, IEvent } from "../components/Thor_SgBox"

import { getStore } from "../store"
import { EffectType } from "../../../utils/NodeIOEffect"
import { changeAutoLauncherType, setAutoLaunchedTimes, setShowAuthLaunch, updateGameModeType } from "../store/actions/game"
import { AutoLauncherType, GameModeType } from "../type"
import { footerViewModel, thor_Audio} from "../index"
import { setRollSpeed } from "../store/actions/roller"
import { SoundPathDefine } from "../sourceDefine/soundDefine"
@StoreInject(getStore())
class SgBoxViewModel extends ViewModel<Thor_SgBox, IProps, IEvent> {
  constructor() {
    super('Thor_SgBox')
  }
  protected begin() {
    this.setEvent({
      closeHandler:()=>{
        thor_Audio.playOneShot(SoundPathDefine.BUY_FREE_DIALOG_CLOSE)
        this.dispatch(updateGameModeType(GameModeType.normal))
        this.unMount(EffectType.EFFECT2)
      },
      confirmThePayment:()=>{
        thor_Audio.playOneShot(SoundPathDefine.BUY_FREE_BTN)
        this.dispatch(updateGameModeType(GameModeType.buyMiniGames))
        this.dispatch(setShowAuthLaunch(false))
        this.dispatch(changeAutoLauncherType(AutoLauncherType.NONE))
        this.dispatch(setAutoLaunchedTimes(1))
        this.dispatch(setRollSpeed(1))
        footerViewModel.manualBetHandler()
        this.unMount(EffectType.EFFECT2)
      },
    })
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
       
      }
    })
    return this
  }
}

export default SgBoxViewModel
