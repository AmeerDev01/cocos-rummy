import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { BlessedWealthy_authLauncher, IProps, IEvent } from "../components/BlessedWealthy_authLauncher"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
import { AutoLauncherType, GameType } from "../type"
import { footerViewModel } from "../index"
import { changeAutoLauncherType, setAutoLaunchedTimes, setShowAuthLaunch } from "../store/actions/game"
import dataTransfer, { DataKeyType } from "../dataTransfer"
import { setRollSpeed } from "../store/actions/roller"

export const autoLauncherTypeWithTimes = {
  [AutoLauncherType.NONE]: 0,
  [AutoLauncherType.TIME_10]: 10,
  [AutoLauncherType.TIME_20]: 20,
  [AutoLauncherType.TIME_50]: 50,
  [AutoLauncherType.TIME_100]: 100,
  [AutoLauncherType.TIME_500]: 500,
  // [AutoLauncherType.LAMIT_FAST]: 10000,
  [AutoLauncherType.LIMIT]: 20000,
}
@StoreInject(getStore())
class AutoLauncherViewModel extends ViewModel<BlessedWealthy_authLauncher, IProps, IEvent> {
  constructor() {
    super('BlessedWealthy_authLauncher')
  }
  private isWaiting: boolean = true
  private isRollEnd: boolean = true
  private autoLaunchedTimes: number = 0
  private autoLauncherType: AutoLauncherType = AutoLauncherType.NONE

  private lanuchEvent: () => void
  protected begin() {
    window.setInterval(() => {
      if (this.isWaiting && this.autoLauncherType !== AutoLauncherType.NONE) {
        if (this.autoLaunchedTimes < autoLauncherTypeWithTimes[this.autoLauncherType]) {
          // console.log('自动启动', this.autoLaunchedTimes, autoLauncherTypeWithTimes[this.autoLauncherType])
          this.lanuchEvent && this.lanuchEvent()
          if (dataTransfer(DataKeyType.GAME_TYPE) === GameType.MAIN) {
            this.dispatch(setAutoLaunchedTimes(undefined))
          }
        } else {
          this.dispatch(setShowAuthLaunch(false))
          this.dispatch(changeAutoLauncherType(AutoLauncherType.NONE))
          this.dispatch(setAutoLaunchedTimes(0))
          this.dispatch(setRollSpeed(1))
        }
      }
    }, 500)
  }

  /**设置自动运行器要自动运行的函数 */
  public setLaunchEvent(lanuchEvent: () => void) {
    this.lanuchEvent = lanuchEvent
  }
  public connect() {
    this.inject({}, (state: StateType) => {
      this.isWaiting = state.game.isWaiting
      this.autoLauncherType = state.game.autoLauncherType
      this.autoLaunchedTimes = state.game.autoLaunchedTimes
      return {
        isShowAutoLaunch: state.game.isShowAutoLaunch,
        isWaiting: state.game.isWaiting,
        autoLauncherType: state.game.autoLauncherType
      }
    })
    return this
  }


}

export default AutoLauncherViewModel