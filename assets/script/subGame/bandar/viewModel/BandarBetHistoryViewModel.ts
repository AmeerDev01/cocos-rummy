import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { Bandar_bet_history, IProps, IEvent } from "../components/Bandar_bet_history"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
const { ccclass, property } = _decorator;

@StoreInject(getStore())
class BetHistoryViewModel extends ViewModel<Bandar_bet_history, IProps, IEvent> {


    constructor() {
        super('Bandar_bet_history')     
      }
    
      protected begin() { 
      
      }
    
      
      public connect() {
        this.inject({}, (state: StateType) => {
          return {
           result1:state.history.result1,
           result2:state.history.result2,
           result3:state.history.result3,
           result4:state.history.result4,
           gameStatus:state.game.gameStatus
          }
        })
        return this
      }

}

export default BetHistoryViewModel
