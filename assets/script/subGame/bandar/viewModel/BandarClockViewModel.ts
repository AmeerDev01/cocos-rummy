import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { Bandar_clock, IProps, IEvent } from "../components/Bandar_clock"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
const { ccclass, property } = _decorator;

@StoreInject(getStore())
class ClockViewModel extends ViewModel<Bandar_clock, IProps, IEvent> {


    constructor() {
        super('Bandar_clock')     
      }
    
      protected begin() { 
      
      }
    
      
      public connect() {
        this.inject({}, (state: StateType) => {
          return {
           countDown:state.game.countDown,
           gameStatus:state.game.gameStatus
          }
        })
        return this
      }

}

export default ClockViewModel
