import { Node } from "cc";
import ViewModel, { StoreInject } from "../../../base/ViewModel";
import {
  GodWealthV2_Roller,
  IEvent,
  IProps
} from "../components/GodWealthV2_Roller";
import { getStore } from "../store";
import { StateType } from "../store/reducer";

@StoreInject(getStore())
class GodWealthV2RollerViewModel extends ViewModel<
  GodWealthV2_Roller,
  IProps,
  IEvent
> {
  constructor() {
    super("GodWealthV2_Roller");
  }

  protected begin() {}

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr);
    this.comp = this.viewNode.getComponent(
      this.componentStr
    ) as GodWealthV2_Roller;
    return this;
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        gameTypeInfo: state.game.gameTypeInfo,
        positionId: state.game.positionId,
        rollerStatus: state.roller.rollerStatus,
        isSpeed: state.roller.isSpeed
      };
    });
    return this;
  }
}

export default GodWealthV2RollerViewModel;
