import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { Bandar_card_user, IProps, IEvent } from "../components/Bandar_card_user"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
const { ccclass, property } = _decorator;

@StoreInject(getStore())
class CardUserViewModel extends ViewModel<Bandar_card_user, IProps, IEvent> {


    constructor() {
        super('Bandar_card_user')     
      }
    
    protected begin() { 
    
    }
  
    
    public connect() {
      this.inject({}, (state: StateType) => {
        return {
            blackPoker:state.pokerDetail.blackPoker,
            redPoker:state.pokerDetail.redPoker,
            plumPoker:state.pokerDetail.plumPoker,
            diamondPoker:state.pokerDetail.diamondPoker,
            countDown:state.game.countDown,
            gameStatus:state.game.gameStatus,
            areaWinLose:state.bet.areaWinLose,
            memberBet:state.bet.memberBet,
            allCardRate: state.bet.allCardRate,
            cardType: state.bet.cardType,
            spadeNum: state.pokerDetail.spadeNum,
            heartNum: state.pokerDetail.heartNum,
            sakuraNum: state.pokerDetail.sakuraNum,
            blockNum: state.pokerDetail.blockNum,
            allCardType:state.pokerDetail.allCardType
        }
      })
      return this
    }

    public setProps(props: Partial<IProps>, force: boolean = false) {
      return super.setProps(props, force);
    }

}

export default CardUserViewModel
