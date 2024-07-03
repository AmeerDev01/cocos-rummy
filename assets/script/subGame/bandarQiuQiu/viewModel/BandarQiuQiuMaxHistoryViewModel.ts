import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { BandarQiuQiu_maxHistory, IProps, IEvent } from "../components//BandarQiuQiu_maxHistory"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
const { ccclass, property } = _decorator;

@StoreInject(getStore())
class HistoryViewModel extends ViewModel<BandarQiuQiu_maxHistory, IProps, IEvent> {


    constructor() {
        super('BandarQiuQiu_maxHistory')     
      }
    
      protected begin() { 
      
      }
    
      
      public connect() {
        this.inject({}, (state: StateType) => {
          return {
            maxHistory: state.history.maxHistory,
            gameStatus: state.game.gameStatus,
            
          }
        })
        return this
      }

}

export default HistoryViewModel
