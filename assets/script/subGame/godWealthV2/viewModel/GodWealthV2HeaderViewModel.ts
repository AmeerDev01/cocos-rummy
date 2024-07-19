import { Node } from "cc";
import ViewModel, { StoreInject } from "../../../base/ViewModel";
import {
  GodWealthV2_Header,
  IEvent,
  IProps
} from "../components/GodWealthV2_Header";
import { getStore } from "../store";
import { StateType } from "../store/reducer";

@StoreInject(getStore())
class GodWealthV2HeaderViewModel extends ViewModel<
  GodWealthV2_Header,
  IProps,
  IEvent
> {
  constructor() {
    super("GodWealthV2_Header");
  }

  protected begin() {}

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr);
    this.comp = this.viewNode.getComponent(
      this.componentStr
    ) as GodWealthV2_Header;
    return this;
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        gold: state.game.gold,
        positionId: state.game.positionId
      };
    });
    return this;
  }
}

export default GodWealthV2HeaderViewModel;
