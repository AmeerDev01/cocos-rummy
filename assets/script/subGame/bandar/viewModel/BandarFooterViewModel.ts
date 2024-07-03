import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { Bandar_footer, IProps, IEvent } from "../components/Bandar_footer"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
const { ccclass, property } = _decorator;

@StoreInject(getStore())
class FooterViewModel extends ViewModel<Bandar_footer, IProps, IEvent> {


    constructor() {
        super('Bandar_footer')     
      }
    
      protected begin() { 
      
      }
    
      
      public connect() {
        this.inject({}, (state: StateType) => {
          return {
            gold:state.game.gold,
            lastBet:state.bet.lastBet,
            gameStatus:state.game.gameStatus,
            allWinUsers: state.bet.allWinUsers,
            myInfo: state.game.myInfo,
            tips: state.game.tips,
            memberBet:state.bet.memberBet
          }
        })
        return this
      }

}

export default FooterViewModel
