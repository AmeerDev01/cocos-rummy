import ViewModel, { StoreInject } from "../../../base/ViewModel";
import {
  GodWealthV2_DialogWin,
  IEvent,
  IProps
} from "../components/GodWealthV2_DialogWin";
import { getStore } from "../store";
import { StateType } from "../store/reducer";

@StoreInject(getStore())
class GodWealthV2DialogWinViewModel extends ViewModel<
  GodWealthV2_DialogWin,
  IProps,
  IEvent
> {
  constructor() {
    super("GodWealthV2_DialogWin");
  }

  protected begin() {}

  public connect() {
    this.inject({}, (state: StateType) => {
      return {};
    });
    return this;
  }
}

export default GodWealthV2DialogWinViewModel;
