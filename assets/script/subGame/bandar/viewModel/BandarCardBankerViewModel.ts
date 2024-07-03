import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { Bandar_card_banker, IProps, IEvent } from "../components/Bandar_card_banker"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
const { ccclass, property } = _decorator;

@StoreInject(getStore())
class CardBankerViewModel extends ViewModel<Bandar_card_banker, IProps, IEvent> {


    constructor() {
        super('Bandar_card_banker')     
      }
    
    protected begin() { 
    
    }
  
    
    public connect() {
      this.inject({}, (state: StateType) => {
        return {
          bankerPoker:state.pokerDetail.bankerPoker,
          countDown:state.game.countDown,
          gameStatus: state.game.gameStatus,
          cardType: state.bet.cardType,
          farmhouse: state.pokerDetail.farmhouse,
          allCardType: state.pokerDetail.allCardType,
        }
      })
      return this
    }

    public setProps(props: Partial<IProps>, force: boolean = false) {
      return super.setProps(props, force);
    }

}

export default CardBankerViewModel
