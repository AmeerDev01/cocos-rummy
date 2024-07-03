import { Node, UITransform, Vec3 } from "cc"
import { Domino_Card, IProps, IEvent } from "../components/Domino_Card"
import { StateType } from "../store/reducer"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { getStore } from "../store"
import { EffectType, EnterOption } from "../../../utils/NodeIOEffect"
import { CardItem, CardPosition, genCardItem, getComposeCardValue } from "../type"
import config from "../config"
import { showOutCard } from "../store/action/game"
import { roomChooseViewModel } from "../index"

@StoreInject(getStore())
class CardViewModel extends ViewModel<Domino_Card, IProps, IEvent> {
  private onComplateCallback;
  constructor() {
    super('Domino_Card')
  }

  private siblingIndex = -1;
  /**符号，-1表示右边，1表示左边  */
  public symbol: -1 | 1;

  public setSiblingIndex(siblingIndex: number) {
    this.siblingIndex = siblingIndex;
    return this;
  }

  public setComplateCallback(onComplateCallback) {
    this.onComplateCallback = onComplateCallback;
    return this;
  }

  public setInitHide(value: boolean) {
    this.comp.setInitHide(value);
    return this;
  }

  /**挂载到视图 */
  public appendTo(parentNode: Node, option?: {
    /**添加到节点的动效 */
    effectType?: EffectType,
    /**添加完成之后的回调 */
    effectDone?: () => void,
    /**是否以模态框的形式添加，既后面加一层模态框 */
    isModal?: boolean,
    effectOption?: EnterOption

  }) {
    const _option = Object.assign({
      effectType: null,
      effectDone: null,
      isModal: false,
      effectOption: {}
    }, option || {})
    this.parentNode = parentNode
    // parentNode.insertChild(this.viewNode, this.siblingIndex)
    parentNode.addChild(this.viewNode)
    this.siblingIndex >= 0 && this.viewNode.setSiblingIndex(this.siblingIndex)
    const done = () => window.setTimeout(() => {
      this.begin()
    }, 10)
    done()
    return this
  }

  protected begin() {
    this.onComplateCallback && this.onComplateCallback()

    this.setEvent({
      onOutCard: (value: number, azimuth: 0 | 1) => {
        const cardItem = genCardItem(value);
        cardItem.azimuth = azimuth;
        cardItem.seatIndex = 0;
        if (config.isTest) {
          this.dispatch(showOutCard(cardItem));
        } else {
          roomChooseViewModel.mainBoardViewModel.sendOutCard(cardItem);
        }
      },
      onDestroy: () => {
        this.unMount();
      }
    })
  }

  protected unMountCallBack(): void {
    this.onComplateCallback = undefined;
    this.siblingIndex = -1;
  }

  public getWidth() {
    const value = this.isHorizontal() ? this.comp.getInitHeight() : this.comp.getInitWidth() - 10;
    return this.comp.props.scale * value;
  }

  public getOriginalWidth() {
    return this.comp.getScaleWidth();
  }

  public getOriginalHeight() {
    return this.comp.getScaleHeight();
  }

  public isHorizontal() {
    return this.comp.props.position === CardPosition.HORIZONTAL;
  }
  public isVertical() {
    return !this.isHorizontal();
  }

  /**获得占用各自个数 */
  public getCellCount() {
    return this.isHorizontal() ? 2 : 1;
  }

  public getValue() {
    if (!this.comp || !this.comp.props) {
      return -1;
    }
    return this.comp.props.value;
  }

  public isChecked() {
    return this.comp.props.isChecked;
  }

  public isBright() {
    return this.comp.props.isBright;
  }

  public setOpacity(value: boolean) {
    this.comp.setOpacity(value);
  }

  /**
   * 设置高亮
   * @param newCardItem 最新出的牌，如果为空，设置为灰
   */
  public setBright(newCardItem: CardItem, azimuth: 0 | 1 | 2) {
    if (newCardItem) {
      if (newCardItem.azimuth === 2) {
        if (newCardItem.upFace === newCardItem.downFace) {
          this.compose(newCardItem.upFace)
          this.compose(newCardItem.downFace)
        } else if (azimuth === 0) {
          this.compose(newCardItem.upFace)
        } else if (azimuth === 1) {
          this.compose(newCardItem.downFace)
        }
      } else {
        const composeValue = getComposeCardValue(newCardItem)
        console.log(`方位: ${azimuth}, 牌方位: ${newCardItem.azimuth}, 比较牌值: ${newCardItem.upFace}-${newCardItem.downFace}, 比较值: ${composeValue}, 牌值： ${this.comp.props.upFace}-${this.comp.props.downFace}`);
        this.compose(composeValue)
      }
    } else {
      this.comp.setProps({ isBright: false });
    }
  }

  private compose(composeValue: number) {
    if (composeValue === this.comp.props.upFace || composeValue === this.comp.props.downFace) {
      this.comp.setProps({ isBright: true });
      console.log(`比较牌 : ${composeValue} ${this.comp.props.upFace},  显示的牌: ${this.comp.props.upFace}-${this.comp.props.downFace} `);
    }
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        deskStatus: state.deskData.statue,
        newCardItem: state.deskData.newCardItem,
      }
    })
    return this
  }
}

export default CardViewModel