import ViewModel from "../../base/ViewModel"
import { EffectType } from "../../utils/NodeIOEffect"
import { Hall_ShareHelp, IEvent, IProps } from "../components/Hall_ShareHelp"
import { changeWebView } from "../store/actions/baseBoard"
import { StateType } from "../store/reducer"

class ShareHelpViewModel extends ViewModel<Hall_ShareHelp, IProps, IEvent> {
  constructor() {
    super('Hall_ShareHelp')
  }

  protected begin() {
    this.dispatch(changeWebView(false));
    this.setEvent({
      close: () => {
        this.unMount(EffectType.EFFECT2);
        this.dispatch(changeWebView(true));
      }
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

export default ShareHelpViewModel