import { Node } from "cc";
import ViewModel, { StoreInject } from "../../../base/ViewModel";
import {
  GodWealthV2_Footer,
  IEvent,
  IProps
} from "../components/GodWealthV2_Footer";
import { getStore } from "../store";
import { StateType } from "../store/reducer";
import BaseViewModel from "../../../hall/viewModel/BaseViewModel";
import {
  GodWealthV2_helpPanel,
  IState as FIState,
  IProps as FIProps,
  IEvent as FIEvent
} from "../components/GodWealthV2_helpPanel";

@StoreInject(getStore())
class GodWealthV2FooterViewModel extends ViewModel<
  GodWealthV2_Footer,
  IProps,
  IEvent
> {
  public helpPanelPanel: BaseViewModel<
    GodWealthV2_helpPanel,
    FIState,
    FIProps,
    FIEvent
  >;

  constructor() {
    super("GodWealthV2_Footer");
  }

  protected begin() {}

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr);
    this.comp = this.viewNode.getComponent(
      this.componentStr
    ) as GodWealthV2_Footer;
    return this;
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        gold: state.game.gold,
        rollerStatus: state.roller.rollerStatus,
        autoLauncherInfo: state.game.autoLauncherInfo,
        betDropDownlist: state.game.betDropDownlist,
        positionId: state.game.positionId,
        winloss: state.game.winloss,
        gameTypeInfo: state.game.gameTypeInfo
      };
    });
    return this;
  }
}

export default GodWealthV2FooterViewModel;
