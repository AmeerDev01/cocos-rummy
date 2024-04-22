import { Vec3 } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { IEvent, IProps, Rummy_Card } from "../components/Rummy_Card"
import { isJoker } from "../rummyTool"
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import { Card } from "../type"

@StoreInject(getStore())
class CardViewModel extends ViewModel<Rummy_Card, IProps, IEvent> {
  constructor() {
    super('Rummy_Card')
  }

  protected begin() {
    this.connect();
    this.setEvent({
      getViewModel: () => {
        return this;
      }
    })
  }

  public remove() {
    this.viewNode.removeFromParent();
    this.viewNode.active = false;
    this.reset();
  }

  public equalNum(card: Card) {
    return this.comp.props.card.num === card.num
  }

  public getCard() {
    return this.comp.props.card;
  }

  public setNewProps(props: Partial<IProps>, laiziPoint: number) {
    if (props.card) {
      props.card.laizi = props.card.points === laiziPoint
    }
    this.setProps(props, false)
    return this
  }

  /**重置宽高 */
  public resetWidthHeight(scale: Vec3) {
    return this.comp.resetWidthHeight(scale);
  }

  public isSelected() {
    return this.comp.props.selected;
  }

  public isJoker() {
    return isJoker(this.comp.props.card);
  }

  public getPoint() {
    return this.comp.props.card.points;
  }

  /**获得该张牌所在的组 */
  public getGroupIndex() {
    return this.viewNode.parent.parent.getSiblingIndex();
  }

  /**是否拖动中 */
  public isDrag() {
    return this.comp.isDrag();
  }

  public setIsOp(isOp: boolean) {
    this.comp.setIsOp(isOp);
  }

  public reset() {
    this.comp.reset();
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
      }
    })
    return this
  }
}

export default CardViewModel